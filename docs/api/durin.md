---
sidebar_position: 3
---

# Trusted offchain gateways

Ancon Protocol node can be used to integrate onchain and offchain sources using EIP-3668 Durin or also called Trusted Offchain gateway. Further in `Subgraph networks` chapter, we'll revisit this feature as we replace REST with Graphsync.

## What is trustless and trusted

A trustless setting onchain means the consensus of a blockchain is enough to validate a transaction is valid and has no bad behavior.

In cross chain use cases, there are many to accomplish this, one is with atomic swaps, whichi we'll use in parts, other is with ZK technology and other with protocols that are based on Merkle Proofs.


## Design and Architecture of a Hybrid Smart Contract

`Hybrid Smart Contracts` is the term used for integrating both offchain and onchain seamlessly in a secure way. To start using the Node SDK.

The Node SDK uses a set of technologies, the developer should have a good grasp of the following:

- Go language
- IPLD
- GraphQL
- Rust

## Create Rust GraphQL Query and Mutations

Download the `github.com/anconprotocol/contracts` and label it with the name of your project.

The current source code has an example of a onchain DID ownership trasfer for ERC721 tokens.

```rust
use crate::sdk::focused_transform_patch_str;
use crate::sdk::read_dag;
use crate::sdk::submit_proof;
use crate::sdk::{generate_proof, get_proof, read_dag_block, write_dag_block};
use juniper::FieldResult;

extern crate juniper;

use juniper::{
    graphql_object, EmptyMutation, EmptySubscription, FieldError, GraphQLEnum, GraphQLValue,
    RootNode, Variables,
};
use serde::{Deserialize, Serialize};
use serde_json::json;

use std::collections::HashMap;

use std::str;
use std::vec::*;

pub struct Context {
    pub metadata: HashMap<String, Ancon721Metadata>,
    pub transfer: HashMap<String, MetadataPacket>,
}

impl juniper::Context for Context {}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct MetadataPacket {
    pub cid: String,
    pub from_owner: String,
    pub result_cid: String,
    pub to_owner: String,
    pub to_address: String,
    pub token_id: String,
    pub proof: String,
}

#[graphql_object(context = Context)]
impl MetadataPacket {
    fn cid(&self) -> &str {
        &self.cid
    }

    fn from_owner(&self) -> &str {
        &self.from_owner
    }

    fn result_cid(&self) -> &str {
        &self.result_cid
    }
    fn to_owner(&self) -> &str {
        &self.to_owner
    }

    fn to_address(&self) -> &str {
        &self.to_address
    }

    fn token_id(&self) -> &str {
        &self.token_id
    }
    fn proof(&self) -> &str {
        &self.proof
    }
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct Ancon721Metadata {
    pub name: String,
    pub description: String,
    pub image: String,
    pub parent: String,
    pub owner: String,
    pub sources: Vec<String>,
}

#[graphql_object(context = Context)]
impl Ancon721Metadata {
    fn name(&self) -> &str {
        &self.name
    }

    fn description(&self) -> &str {
        &self.description
    }

    fn image(&self) -> &str {
        &self.image
    }
    fn parent(&self) -> &str {
        &self.parent
    }

    fn owner(&self) -> &str {
        &self.owner
    }

    async fn sources(&self) -> &Vec<String> {
        &self.sources
    }
}

#[derive(Clone, Copy, Debug)]
pub struct Query;

#[graphql_object(context = Context)]
impl Query {
    fn api_version() -> &'static str {
        "0.1"
    }

    pub fn metadata(context: &Context, cid: String, path: String) -> Ancon721Metadata {
        let v = read_dag(&cid);
        let res = serde_json::from_slice(&v);
        res.unwrap()
    }
}

#[derive(Clone, Copy, Debug)]
pub struct Mutation;

#[graphql_object(context = Context)]
impl Mutation {
    //Dagblock mutation
    fn transfer(context: &Context, input: MetadataTransactionInput) -> Vec<MetadataPacket> {
        let v = read_dag(&input.cid);
        let res = serde_json::from_slice(&v);
        let metadata: Ancon721Metadata = res.unwrap();

        //generate current metadata proof packet
        let proof = generate_proof(&input.cid);

        let updated_cid =
            focused_transform_patch_str(&input.cid, "owner", &metadata.owner, &input.new_owner);
        let updated =
            focused_transform_patch_str(&updated_cid, "parent", &metadata.parent, &input.cid);

        //generate updated metadata proof packet
        let proof_cid = apply_request_with_proof(input.clone(), &proof, &updated);
        let v = read_dag(&proof_cid);
        let res = serde_json::from_slice(&v);
        let packet: MetadataPacket = res.unwrap();
        let current_packet = MetadataPacket {
            cid: input.cid,
            from_owner: input.owner,
            result_cid: updated,
            to_address: "".to_string(),
            to_owner: input.new_owner,
            token_id: "".to_string(),
            proof: proof,
        };
        let result = vec![current_packet, packet];
        result
    }
}

#[derive(Clone, Debug, GraphQLInputObject, Serialize, Deserialize)]
struct MetadataTransactionInput {
    path: String,
    cid: String,
    owner: String,
    new_owner: String,
}

type Schema = RootNode<'static, Query, Mutation, EmptySubscription<Context>>;

pub fn schema() -> Schema {
    Schema::new(Query, Mutation, EmptySubscription::<Context>::new())
}

fn apply_request_with_proof(
    input: MetadataTransactionInput,
    prev_proof: &str,
    new_cid: &str,
) -> String {
    // Must combined proofs (prev and new) in host function
    // then send to chain and return result
    let js = json!({
        "previous": prev_proof,
        "next_cid": new_cid,
        "input": input
    });
    submit_proof(&js.to_string())
}
```


## DAG Operations or Mutation

Now we are going to apply a GraphQL mutation, which is an update to an immutable object, means it will discard the old CID and create a new CID from the latest update in the DAG block. 

Why are we abstracting on top of GraphQL? The main reason is to provide a better and more expedite approach to software engineering differents pieces of technologies like IPFS and blockchain. By enforcing the schemas with code generation in server side, we also get a similar developer experience as when you do smart contract development. 

In this example, we'll use one of the easiest IPLD Operator, which is the `focused transform`, where we 

- Pinpoint or **select** a path inside a root node
- Patch or mutate that selection with a function call. In our case, a diff patch, eg if previous node matches previous node requested a change, then apply requested change to node.

In Ancon Protocol Contracts SDK, you can use focused transform with `focused_transform_patch_str`

```rust

#[derive(Clone, Copy, Debug)]
pub struct Mutation;

#[graphql_object(context = Context)]
impl Mutation {
    //Dagblock mutation
    fn transfer(context: &Context, input: MetadataTransactionInput) -> Vec<MetadataPacket> {
        let v = read_dag(&input.cid);
        let res = serde_json::from_slice(&v);
        let metadata: Ancon721Metadata = res.unwrap();

        //generate current metadata proof packet
        let proof = generate_proof(&input.cid);

        let updated_cid =
            focused_transform_patch_str(&input.cid, "owner", &metadata.owner, &input.new_owner);
        let updated =
            focused_transform_patch_str(&updated_cid, "parent", &metadata.parent, &input.cid);

        //generate updated metadata proof packet
        let proof_cid = apply_request_with_proof(input.clone(), &proof, &updated);
        let v = read_dag(&proof_cid);
        let res = serde_json::from_slice(&v);
        let packet: MetadataPacket = res.unwrap();
        let current_packet = MetadataPacket {
            cid: input.cid,
            from_owner: input.owner,
            result_cid: updated,
            to_address: "".to_string(),
            to_owner: input.new_owner,
            token_id: "".to_string(),
            proof: proof,
        };
        let result = vec![current_packet, packet];
        result
    }
}

#[derive(Clone, Debug, GraphQLInputObject, Serialize, Deserialize)]
struct MetadataTransactionInput {
    path: String,
    cid: String,
    owner: String,
    new_owner: String,
}


```

The result must always be the previous and next packets.

## Smart Contract APIs

### `pub fn focused_transform_patch_str(cid: &str, path: &str, prev: &str, next: &str) -> String`

Applies an IPLD focused transform using a patch design pattern for string node values

### `pub fn read_dag(cid: &str) -> Vec<u8>`

Reads a cid from dag store

### `pub fn submit_proof(data: &str) -> String`

Submits proof (offchain)

### `pub fn get_proof(cid: &str) -> String`

Retrieves proof (offchain)

### `pub fn generate_proof(cid: &str) -> String`

Generates proof (offchain)


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