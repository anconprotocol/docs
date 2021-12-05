---
sidebar_position: 3
---

# Trusted offchain gateways

Ancon Protocol node can be used to integrate onchain and offchain sources using EIP-3668 Durin or also called Trusted Offchain gateway. Further in `Subgraph networks` chapter, we'll revisit this feature as we replace REST with Graphsync.

## What is trustless and trusted

A trustless setting onchain means the consensus of a blockchain is enough to validate a transaction is valid and has no bad behavior.

In cross chain use cases, there are many to accomplish this, one is with atomic swaps, whichi we'll use in parts, other is with ZK technology and other with protocols that are based on Merkle Proofs.

## Trustless with Ancon Protocol

We use `ICS23` for trustless, the current implementation supports any Cosmos chain and can be integrated with Ethereum and Flow. The setup can be found in the Cosmos middleware repo.

## Trusted with Ancon Protocol

The recommended way to use Ancon Protocol is with trusted, is oriented towards data economy use cases. For example, a data union needs to stream a batch of data from different sources, merge and compute using DAG blocks and then put these changes to blockchain.

Before Ancon Protocol, you would have to develop most of these tasks, that can be mechaninc and repeatable.

## Design and Architecture of a Hybrid Smart Contract

`Hybrid Smart Contracts` is the term used for integrating both offchain and onchain seamlessly in a secure way. To start using the Node SDK, these are the steps that needs to be planned.

1. **Server side schemas**
2. **DAG Operations or Mutation**
3. **Smart Contract**
4. **Onchain adapter**
5. **Generate client bindings for schemas**

The Node SDK uses a set of technologies, the developer should have a good grasp of the following:

- Go language
- IPLD
- GraphQL
- Smart Contract language of the onchain implementation

## Server side schemas

Download the `github.com/anconprotocol.com/node-template` and label it with the name of your project.

Create your domain model or message model, you can call it `packet`, in `x/anconsync/codegen/graph/schema.graphqls`.


```graphql
scalar Bytes

schema {
    query: Query
    mutation: Transaction
}

type Ancon721Metadata {
  name: String!
  description: String!
  image: String!
  parent: String
  owner: String
  sources: [DagLink!]
}

type DagLink {
  path: String!
  cid: String!
}

type DagContractTrusted {
  data: DagLink!
  payload: Ancon721Metadata!
}

type Query {
  metadata(cid: String!, path: String!): Ancon721Metadata
}

input MetadataTransactionPacketInput {
  path: String!
  cid: String!
  owner: String!
  newOwner: String!
}



type Transaction {
  metadata(tx: MetadataTransactionPacketInput!): DagLink!
}

```

Then run `generateServeModels.sh` from repo directory. It will generate and models inside codegen.


## DAG Operations or Mutation

Now we are going to apply a GraphQL mutation, which is an update to an immutable object, means it will discard the old CID and create a new CID from the latest update in the DAG block. 

Why are we abstracting on top of GraphQL? The main reason is to provide a better and more expedite approach to software engineering differents pieces of technologies like IPFS and blockchain. By enforcing the schemas with code generation in server side, we also get a similar developer experience as when you do smart contract development. 

In this example, we'll use one of the easiest IPLD Operator, which is the `focused transform`, where we 

- Pinpoint or **select** a path inside a root node
- Patch or mutate that selection with a function call. In our case, a diff patch, eg if previous node matches previous node requested a change, then apply requested change to node.

It returns a new CID and we can iterate again with another change request.


```go
package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/anconprotocol/node/x/anconsync"
	"github.com/anconprotocol/node/x/anconsync/codegen/graph/generated"
	"github.com/anconprotocol/node/x/anconsync/codegen/graph/model"
	"github.com/anconprotocol/node/x/anconsync/handler"
	ipld "github.com/ipld/go-ipld-prime"
	"github.com/ipld/go-ipld-prime/datamodel"
	"github.com/ipld/go-ipld-prime/must"
	"github.com/ipld/go-ipld-prime/node/basicnode"
	"github.com/ipld/go-ipld-prime/traversal"
)

func (r *queryResolver) Metadata(ctx context.Context, cid string, path string) (*model.Ancon721Metadata, error) {
	dag := ctx.Value("dag").(*handler.AnconSyncContext)

	jsonmodel, err := anconsync.ReadFromStore(dag.Store, cid, path)
	if err != nil {
		return nil, err
	}
	var metadata model.Ancon721Metadata
	json.Unmarshal([]byte(jsonmodel), &metadata)
	return &metadata, nil
}

func (r *transactionResolver) Metadata(ctx context.Context, tx model.MetadataTransactionInput) (*model.DagLink, error) {
	dag := ctx.Value("dag").(*handler.AnconSyncContext)

	lnk, err := anconsync.ParseCidLink(tx.Cid)
	if err != nil {
		return nil, err
	}
	rootNode, err := dag.Store.Load(ipld.LinkContext{}, lnk)
	if err != nil {
		return nil, err
	}

	// owner update
	n, err := traversal.FocusedTransform(
		rootNode,
		datamodel.ParsePath("owner"),
		func(progress traversal.Progress, prev datamodel.Node) (datamodel.Node, error) {
			if progress.Path.String() == "owner" && must.String(prev) == tx.Owner {
				nb := prev.Prototype().NewBuilder()
				nb.AssignString(tx.NewOwner)
				return nb.Build(), nil
			}
			return nil, fmt.Errorf("Owner not found")
		}, false)

	if err != nil {
		return nil, err
	}

	// parent update
	n, err = traversal.FocusedTransform(
		n,
		datamodel.ParsePath("parent"),
		func(progress traversal.Progress, prev datamodel.Node) (datamodel.Node, error) {
			nb := basicnode.Prototype.Any.NewBuilder()
			// set previous hash, not current
			l, _ := anconsync.ParseCidLink(tx.Cid)
			nb.AssignLink(l)
			return nb.Build(), nil
		}, false)

	if err != nil {
		return nil, fmt.Errorf("Focused transform error")
	}

	link := dag.Store.Store(ipld.LinkContext{}, n)

	return &model.DagLink{
		Path: "/",
		Cid:  link.String(),
	}, nil
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

// Transaction returns generated.TransactionResolver implementation.
func (r *Resolver) Transaction() generated.TransactionResolver { return &transactionResolver{r} }

type queryResolver struct{ *Resolver }
type transactionResolver struct{ *Resolver }

```

In `schema.resolvers.go` the generator creates code stubs, where you put the DAG operations implementation.

## Smart Contract

Next task is to implement an EIP-3668 Durin contract. It works similar to challenge and response scheme, where Alice requests some data or packet to be anchored offchain (in the metadata example, the updated metadata uri and owner).

```solidity

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./ancon/TrustedOffchainHelper.sol";

//  a NFT secure document
contract XDVNFT is
    ERC721Burnable,
    ERC721Pausable,
    ERC721URIStorage,
    Ownable,
    IERC721Receiver,
    TrustedOffchainHelper
{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    IERC20 public stablecoin;
    address public dagContractOperator;
    uint256 public serviceFeeForPaymentAddress = 0;
    uint256 public serviceFeeForContract = 0;

    event Withdrawn(address indexed paymentAddress, uint256 amount);

    event ServiceFeePaid(
        address indexed from,
        uint256 paidToContract,
        uint256 paidToPaymentAddress
    );

    /**
     * XDVNFT Data Token
     */
    constructor(
        string memory name,
        string memory symbol,
        address tokenERC20
    ) ERC721(name, symbol) {
        stablecoin = IERC20(tokenERC20);
    }

    function setServiceFeeForPaymentAddress(uint256 _fee) public onlyOwner {
        serviceFeeForPaymentAddress = _fee;
    }

    function setServiceFeeForContract(uint256 _fee) public onlyOwner {
        serviceFeeForContract = _fee;
    }

    /**
     * @dev Requests a DAG contract offchain execution
     */
    function transferURI(address toAddress, uint256 tokenId)
        external
        returns (bytes32)
    {
        revert OffchainLookup(
            url,
            abi.encodeWithSignature(
                "transferURIWithProof(address toAddress, uint256 tokenId, bytes memory proof)",
                toAddress,
                tokenId
            )
        );
    }

    /**
     * @dev Transfer a XDV Data Token URI with proof
     */
    function transferURIWithProof(
        string memory toAddress,
        string memory tokenId,
        bytes memory proof
    ) public returns (uint256) {
        bool proofRef = _requestWithProof(toAddress, tokenId, proof);
                                    
        require(proofRef, "Invalid proof");
        (
            bytes memory metadataCid,
            bytes memory fromOwner,
            bytes memory resultCid,
            bytes memory toOwner,
            ,
            ,
            bytes memory prefix,
            bytes memory signature
        ) = abi.decode(
                proof,
                (bytes, bytes, bytes, bytes, bytes, bytes, bytes, bytes)
            );
        uint256 newItemId = _tokenIds.current();
        _setTokenURI(newItemId, string(metadataCid));
        //       _transfer()
        //send the method name
        //make set token uri work
        return newItemId;
    }

    /**
     * @dev Requests a DAG contract offchain execution with proof
     */
    function _requestWithProof(
        string memory toAddress,
        string memory tokenId,
        bytes memory proof
    ) internal returns (bool) {
        (
            bytes memory metadataCid,
            bytes memory fromOwner,
            bytes memory resultCid,
            bytes memory toOwner,
            ,
            ,
            bytes memory prefix,
            bytes memory signature
        ) = abi.decode(
                proof,
                (bytes, bytes, bytes, bytes, bytes, bytes, bytes, bytes)
            );

        if (executed[bytes32(signature)]) {
            revert("metadata dag transfer:  invalid proof");
        } else {
            bytes32 digest = keccak256(
                abi.encodePacked(
                    "\x19Ethereum Signed Message:\n32",
                    keccak256(
                        abi.encodePacked(
                            metadataCid,
                            fromOwner,
                            resultCid,
                            toOwner,
                            toAddress,
                            tokenId,
                            prefix
                        )
                    )
                )
            );

            require(
                isValidProof(digest, signature),
                "Signer is not the signer of the token"
            );
            {
                executed[bytes32(signature)] = true;
                emit ProofAccepted(msg.sender, bytes32(signature));
            }
            return (true);
        }
    }

    /**
     * @dev Mints a XDV Data Token
     */
    function mint(address user, string memory uri) public returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _safeMint(user, newItemId);
        _setTokenURI(newItemId, uri);

        return newItemId;
    }

    /**
     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}
     * by `operator` from `from`, this function is called.
     *
     * It must return its Solidity selector to confirm the token transfer.
     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.
     *
     * The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.
     */
    function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    ) external returns (bytes4) {
        return this.onERC721Received.selector;
    }

    /**
     * @dev Just overrides the superclass' function. Fixes inheritance
     * source: https://forum.openzeppelin.com/t/how-do-inherit-from-erc721-erc721enumerable-and-erc721uristorage-in-v4-of-openzeppelin-contracts/6656/4
     */
    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    /**
     * @dev Just overrides the superclass' function. Fixes inheritance
     * source: https://forum.openzeppelin.com/t/how-do-inherit-from-erc721-erc721enumerable-and-erc721uristorage-in-v4-of-openzeppelin-contracts/6656/4
     */
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override(ERC721, ERC721Pausable) {
        require(!paused(), "XDV: Token execution is paused");

        if (from == address(0)) {
            paymentBeforeMint(msg.sender);
        }

        super._beforeTokenTransfer(from, to, tokenId);
    }

    /**
     * @dev tries to execute the payment when the token is minted.
     * Reverts if the payment procedure could not be completed.
     */
    function paymentBeforeMint(address tokenHolder) internal virtual {
        // Transfer tokens to pay service fee
        require(
            stablecoin.transferFrom(
                tokenHolder,
                address(this),
                serviceFeeForContract
            ),
            "XDV: Transfer failed for recipient"
        );

        emit ServiceFeePaid(
            tokenHolder,
            serviceFeeForContract,
            serviceFeeForPaymentAddress
        );
    }

    function withdrawBalance(address payable payee) public onlyOwner {
        uint256 balance = stablecoin.balanceOf(address(this));

        require(stablecoin.transfer(payee, balance), "XDV: Transfer failed");

        emit Withdrawn(payee, balance);
    }
}

```

## Onchain adapter

The adapter gets called through Node SDK JSON-RPC 2.0 endpoint.

```go
package transfer

import (
	"bytes"
	"context"
	"crypto/ecdsa"
	"encoding/hex"
	"fmt"
	"math/big"

	"github.com/ethereum/go-ethereum/accounts/abi"
	"github.com/ethereum/go-ethereum/common/hexutil"
	"github.com/ethereum/go-ethereum/common/math"
	"github.com/ethereum/go-ethereum/crypto"
)

func SignedProofAbiMethod() abi.Method {

	// uint256Type, _ := abi.NewType("uint256", "", nil)
	uintType, _ := abi.NewType("uint", "", nil)
	bytesType, _ := abi.NewType("bytes", "", nil)
	stringType, _ := abi.NewType("string", "", nil)
	request := abi.NewMethod(
		"transferURIWithProof",
		"transferURIWithProof",
		abi.Function,
		"nonpayable",
		false,
		false,
		abi.Arguments{{
			Name:    "metadataCid",
			Type:    stringType,
			Indexed: false,
		},
			{
				Name:    "fromOwner",
				Type:    stringType,
				Indexed: false,
			},
			{
				Name:    "resultCid",
				Type:    stringType,
				Indexed: false,
			},
			{
				Name:    "toOwner",
				Type:    stringType,
				Indexed: false,
			},
			{
				Name:    "toAddress",
				Type:    stringType,
				Indexed: false,
			},
			{
				Name:    "tokenId",
				Type:    stringType,
				Indexed: false,
			},
			{
				Name:    "prefix",
				Type:    stringType,
				Indexed: false,
			},
			{
				Name:    "signature",
				Type:    bytesType,
				Indexed: false,
			},
		},
		abi.Arguments{abi.Argument{
			Type: uintType,
		}},
	)

	return request
}

type OnchainAdapter struct {
	PrivateKey *ecdsa.PrivateKey
	ChainName  string
	ChainID    int
}

func NewOnchainAdapter(pk *ecdsa.PrivateKey) OnchainAdapter {

	return OnchainAdapter{
		PrivateKey: pk,
		ChainName:  "Ethereum",
		ChainID:    5,
	}
}

// https://gist.github.com/miguelmota/bc4304bb21a8f4cc0a37a0f9347b8bbb
func encodePacked(input ...[]byte) []byte {
	return bytes.Join(input, nil)
}

func encodeBytesString(v string) []byte {
	decoded, err := hex.DecodeString(v)
	if err != nil {
		panic(err)
	}
	return decoded
}

func encodeUint256(v string) []byte {
	bn := new(big.Int)
	bn.SetString(v, 10)
	return math.U256Bytes(bn)
}

func encodeUint256Array(arr []string) []byte {
	var res [][]byte
	for _, v := range arr {
		b := encodeUint256(v)
		res = append(res, b)
	}

	return bytes.Join(res, nil)
}
func (adapter *OnchainAdapter) ApplyRequestWithProof(
	ctx context.Context,
	metadataCid string,
	resultCid string,
	fromOwner string,
	toOwner string,
	toAddress string,
	tokenId string,
	prefix string,
) (hexutil.Bytes, string, error) {

	id := (tokenId)
	unsignedProofData := encodePacked(
		[]byte("\x19Ethereum Signed Message:\n32"),
		// Proof
		crypto.Keccak256(encodePacked(
			// Current metadata cid
			[]byte(metadataCid),
			// Current owner (opaque)
			[]byte(fromOwner),
			// Updated metadata cid
			[]byte(resultCid),
			// New owner address
			[]byte(toOwner),
			// Token Address
			[]byte(toAddress),
			// Token Id
			[]byte(id),
			// Contract Prefix
			[]byte(prefix)),
		))

	hash := crypto.Keccak256Hash(unsignedProofData)

	signature, err := crypto.Sign(hash.Bytes(), adapter.PrivateKey)
	if err != nil {
		return nil, "", fmt.Errorf("signing failed")
	}

	signedProofData, err := SignedProofAbiMethod().Inputs.Pack(
		metadataCid, fromOwner, resultCid, toOwner, toAddress, id, prefix, signature)

	if err != nil {
		return nil, "", fmt.Errorf("packing for signature proof generation failed")
	}

	return signedProofData, resultCid, nil
}

```

## Generate client bindings for schemas

Run `generateClientModels.sh` and then update   `durin.go`

```go

package durin

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/anconprotocol/node/adapters/ethereum/erc721/transfer"
	"github.com/anconprotocol/node/x/anconsync/handler/graphql"
	"github.com/ethereum/go-ethereum/common/hexutil"
)

type DurinAPI struct {
	Namespace string
	Version   string
	Service   *DurinService
	Public    bool
}

type DurinService struct {
	Adapter   *transfer.OnchainAdapter
	GqlClient *graphql.Client
}

func NewDurinAPI(evm transfer.OnchainAdapter, gqlClient *graphql.Client) *DurinAPI {
	return &DurinAPI{
		Namespace: "durin",
		Version:   "1.0",
		Service: &DurinService{
			Adapter:   &evm,
			GqlClient: gqlClient,
		},
		Public: true,
	}
}

func msgHandler(ctx *DurinService, to string, name string, args map[string]string) (hexutil.Bytes, string, error) {
	switch name {
	default:
		tokenId := args["tokenId"]
		input := graphql.MetadataTransactionInput{
			Path:     "/",
			Cid:      args["metadataCid"],
			Owner:    args["fromOwner"],
			NewOwner: args["toOwner"],
		}
		// Send graphql mutation for IPLD DAG computing
		res, err := ctx.GqlClient.TransferOwnership(context.Background(), input)
		if err != nil {
			return nil, "", fmt.Errorf("transfer ownership reverted")
		}
		metadataCid := args["metadataCid"]
		newCid := res.Metadata.Cid
		newOwner := args["toOwner"]
		fromOwner := args["fromOwner"]
		prefix := args["prefix"]

		// Apply signature to create proof
		txdata, resultCid, err := ctx.Adapter.ApplyRequestWithProof(context.Background(),
			metadataCid,
			newCid,
			fromOwner,
			newOwner,
			to,
			tokenId,
			prefix)
		if err != nil {
			return nil, "", fmt.Errorf("request with proof raw tx failed")
		}
		return txdata, resultCid, nil
	}
}

func (s *DurinService) Call(to string, from string, data json.RawMessage, abis json.RawMessage) hexutil.Bytes {

	p := []byte(data)
	var values map[string]string
	val := make(map[string]string, 2)
	err := json.Unmarshal(p, &values)
	if err != nil {
		return hexutil.Bytes(hexutil.Encode([]byte(fmt.Errorf("fail unpack data").Error())))
	}
	// Execute graphql
	txdata, resultCid, err := msgHandler(s, to, "", values)
	if err != nil {
		return hexutil.Bytes(hexutil.Encode([]byte(fmt.Errorf("reverted").Error())))
	}

	val["txdata"] = txdata.String()
	val["resultCid"] = resultCid
	jsonval, err := json.Marshal(val)
	if err != nil {
		return hexutil.Bytes(hexutil.Encode([]byte(fmt.Errorf("reverted, json marshal").Error())))
	}
	return jsonval
}

```