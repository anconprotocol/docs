---
sidebar_position: 2
---

# Using a Verifiable DAG store

Ancon Protocol Node is an Layer 2, offchain DAG Store with verifiable data. Anyone can use it once they registered a DID with the L2, which will generate a vector commitment proof, if indeed the register exists or not in the merkle tree.

Because there is no consensus involved, we can only be sure that it was signed by someone using a DID identifier. To be able to have a more decentralized feature, is recommended to anchor both DID and proofs in a ICS23 Vector Commitment compatible smart contract chain.

Once is submitted to a onchain solution, any offchain operation can be properly validated onchain for any proofs.

## Staking and Validators

Ancon Protocol will implement a smart contract based validator approach, where the incentives will be to batch proofs operations, validate them, and then submit or commit to protocol header updates. Using $ANCON token, validators will be able to stake and obtain a income by supporting the protocol.

## Onchain metadata

To use DID identifier with onchain metadata:

### Smart contracts

1. Install or place `AnconProtocol.sol`
2. The NFT Dapp or App will use these calls: `verifyProof`, `submitPacketWithProof`, `enrollL2Account` and `updateProtocolHeader`.
3. Before starting, create a DID account and obtain the CID and username of the DID.
4. Execute a hybrid smart contract and send the result as input for the next call.
5. Prepare a Packet, which is the cross chain message, fill the packet message with the values returned from node API.
6. Use your recently activated DID identifier to sign the message , and send it to  `submitPacketWithProof` for transaction.
7. Once proof is submitted to L1, your packet is validated and anchored.

### Client

1. Use Node API to registerd DIDs.
2. Following API requires DID authentication:
- Any write DAG operation (JSON or CBOR)
- Any hybrid smart contract transaction
3. Following onchain operations requires gas and protocol fees:
- `enrollL2Acccount`
- `submitPacketWithProof`
- `updateProtocolHeader`
4. Verifiable DID with KYC (only Panama) has a KYC cost to verify ID.


## AnconProtocol.sol

```typescript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "../ics23/ics23.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AnconProtocol is ICS23 {
    bytes32 public ENROLL_PAYMENT = keccak256("ENROLL_PAYMENT");
    bytes32 public ENROLL_DAG = keccak256("ENROLL_DAG");
    bytes32 public SUBMIT_PAYMENT = keccak256("SUBMIT_PAYMENT");
    // mapping(bytes32 => uint256) public p
    address public owner;
    address public relayer;

    IERC20 public stablecoin;
    uint256 public protocolFee = 0;
    uint256 public accountRegistrationFee = 0;
    uint256 public dagRegistrationFee = 0;
    uint256 chainId = 0;

    mapping(bytes => bytes) public accountProofs; //did user-assigned proof key
    mapping(address => bytes) public accountByAddrProofs; //proof key-assigned eth address
    mapping(bytes => bool) public proofs; //if proof key was submitted to the blockchain

    mapping(bytes32 => address) public whitelistedDagGraph;
    uint256 public seq;
    mapping(address => uint256) public nonce;
    mapping(bytes32 => bytes) public latestRootHashTable;
    mapping(bytes32 => mapping(uint256 => bytes)) public relayerHashTable;

    event Withdrawn(address indexed paymentAddress, uint256 amount);

    event ServiceFeePaid(address indexed from, uint256 fee);

    event HeaderUpdated(bytes32 indexed moniker);

    event ProofPacketSubmitted(bytes key, bytes packet, bytes32 moniker);

    event AccountRegistered(
        bool enrolledStatus,
        bytes key,
        bytes value,
        bytes32 moniker
    );

    constructor(address tokenAddress, uint256 network) public {
        owner = msg.sender;
        stablecoin = IERC20(tokenAddress);
        chainId = network;
    }

    // getContractIdentifier is used to identify an offchain proof in any chain
    function getContractIdentifier() public view returns (bytes32) {
        return keccak256(abi.encodePacked(chainId, address(this)));
    }

    // getContractIdentifier is used to identify an offchain proof in any chain
    function verifyContractIdentifier(
        uint256 usernonce,
        address sender,
        bytes32 hash
    ) public view returns (bool) {
        return
            keccak256(abi.encodePacked(chainId, address(this))) == hash &&
            nonce[sender] == usernonce;
    }
    
    function getNonce() public view returns (uint256) {
        return nonce[msg.sender];
    }

    // setWhitelistedDagGraph registers offchain graphs by protocol admin
    function setWhitelistedDagGraph(bytes32 moniker, address dagAddress)
        public
        payable
    {
        require(whitelistedDagGraph[moniker] == address(0), "exists");
        protocolPayment(ENROLL_DAG, msg.sender);

        whitelistedDagGraph[moniker] = dagAddress;
    }

    // updateRelayerHeader updates offchain dag graphs signed by dag graph key pair
    function updateRelayerHeader(
        bytes32 moniker,
        bytes memory rootHash,
        uint256 height
    ) public {
        require(msg.sender == whitelistedDagGraph[moniker], "invalid user");

        // TODO:  Check to  see if  signer has n amount of token staked
        relayerHashTable[moniker][height] = rootHash;
        latestRootHashTable[moniker] = rootHash;

        seq = seq + 1;
        emit HeaderUpdated(moniker);
    }

    // setPaymentToken sets token used for protocol fees
    function setPaymentToken(address tokenAddress) public {
        require(owner == msg.sender);
        stablecoin = IERC20(tokenAddress);
}

    // withdraws gas token, must be admin
    function withdraw(address payable payee) public {
        require(owner == msg.sender);
        uint256 b = address(this).balance;
        (bool sent, bytes memory data) = payee.call{value: b}("");
        require(sent, "Failed to send Ether");

        emit Withdrawn(payee, b);
    }

    // withdraws protocol fee token, must be admin
    function withdrawToken(address payable payee, address erc20token) public {
        require(owner == msg.sender);
        uint256 balance = IERC20(erc20token).balanceOf(address(this));

        // Transfer tokens to pay service fee
        require(IERC20(erc20token).transfer(payee, balance), "transfer failed");

        emit Withdrawn(payee, balance);
    }

    // protocolPayment handles contract payment protocol fee types
    function protocolPayment(bytes32 paymentType, address tokenHolder)
        internal
    {
        require(
            stablecoin.balanceOf(address(tokenHolder)) > 0,
            "no enough balance"
        );
        if ((paymentType) == ENROLL_DAG) {
            require(
                stablecoin.transferFrom(
                    tokenHolder,
                    address(this),
                    dagRegistrationFee
                ),
                "transfer failed for recipient"
            );
            emit ServiceFeePaid(tokenHolder, dagRegistrationFee);
        }
        if ((paymentType) == ENROLL_PAYMENT) {
            require(
                stablecoin.transferFrom(
                    tokenHolder,
                    address(this),
                    accountRegistrationFee
                ),
                "transfer failed for recipient"
            );
            emit ServiceFeePaid(tokenHolder, accountRegistrationFee);
        }
        if ((paymentType) == SUBMIT_PAYMENT) {
            require(
                stablecoin.transferFrom(
                    tokenHolder,
                    address(this),
                    protocolFee
                ),
                "transfer failed for recipient"
            );
            emit ServiceFeePaid(tokenHolder, protocolFee);
        } // Transfer tokens to pay service fee
        nonce[tokenHolder] = nonce[tokenHolder] + 1;
    }

    function setProtocolFee(uint256 _fee) public {
        require(owner == msg.sender);
        protocolFee = _fee;
    }

    function setAccountRegistrationFee(uint256 _fee) public {
        require(owner == msg.sender);
        accountRegistrationFee = _fee;
    }

    function setDagGraphFee(uint256 _fee) public {
        require(owner == msg.sender);
        dagRegistrationFee = _fee;
    }

    function getProtocolHeader(bytes32 moniker)
        public
        view
        returns (bytes memory)
    {
        return latestRootHashTable[moniker];
    }

    function getProof(bytes memory did) public view returns (bytes memory) {
        return accountProofs[did];
    }

    function hasProof(bytes memory key) public view returns (bool) {
        return proofs[key];
    }

    // enrollL2Account registers offchain did user onchain using ICS23 proofs, multi tenant using dag graph moniker
    function enrollL2Account(
        bytes32 moniker,
        bytes memory key,
        bytes memory did,
        Ics23Helper.ExistenceProof memory proof
    ) public payable returns (bool) {
        require(keccak256(proof.key) == keccak256(key), "invalid key");

        require(verifyProof(moniker, proof), "invalid proof");

        require(
            keccak256(key) != keccak256(accountProofs[did]),
            "user already registered"
        );

        protocolPayment(ENROLL_PAYMENT, msg.sender);

        accountProofs[(did)] = key;
        accountByAddrProofs[msg.sender] = key;

        emit AccountRegistered(true, key, did, moniker);
        return true;
    }

    // submitPacketWithProof registers packet onchain using ICS23 proofs, multi tenant using dag graph moniker
    function submitPacketWithProof(
        bytes32 moniker,
        address sender,
        Ics23Helper.ExistenceProof memory userProof,
        bytes memory key,
        bytes memory packet,
        Ics23Helper.ExistenceProof memory proof
    ) external payable returns (bool) {
        // 1. Verify
        require(proofs[key] == false, "proof has been submitted (found key)");
        require(keccak256(proof.key) == keccak256(key), "invalid key");
        require(
            keccak256(accountByAddrProofs[sender]) == keccak256(userProof.key),
            "invalid user key"
        );
        require(verifyProof(moniker, userProof), "invalid user proof");
        require(verifyProof(moniker, proof));

        proofs[key] = true;

        protocolPayment(SUBMIT_PAYMENT, sender);

        // 2. Submit event
        emit ProofPacketSubmitted(key, packet, moniker);

        return true;
    }

    // verifies ICS23 proofs, multi tenant using dag graph moniker
    function verifyProof(
        bytes32 moniker,
        Ics23Helper.ExistenceProof memory exProof
    ) internal view returns (bool) {
        // Verify membership
        verify(
            exProof,
            getIavlSpec(),
            latestRootHashTable[moniker],
            exProof.key,
            exProof.value
        );

        return true;
    }

    // verifies ICS23 proofs with key and value, multi tenant using dag graph moniker
    function verifyProofWithKV(
        bytes32 moniker,
        bytes memory key,
        bytes memory value,
        Ics23Helper.ExistenceProof memory exProof
    ) external view returns (bool) {
        // Verify membership
        verify(
            exProof,
            getIavlSpec(),
            latestRootHashTable[moniker],
            key,
            value
        );

        return true;
    }

    // calculates root hash
    function queryRootCalculation(Ics23Helper.ExistenceProof memory proof)
        internal
        pure
        returns (bytes memory)
    {
        return bytes(calculate(proof));
    }
}
```


## Metadata JSON Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://ancon.did.pa/v0/protocol/metadata",
  "title": "metadata",
  "description": "Ancon Protocol metadata schema",
  "type": "object",
  "properties": {
      "name": {
          "type": "string",
          "description": "Identifies the asset to which this token represents",
      },
      "description": {
          "type": "string",
          "description": "Describes the asset to which this token represents",
      },
      "image": {
          "type": "string",
          "description": "A URI pointing to a resource with mime type image/* representing the asset to which this token represents.",
      },
      "sources": {
          "type": "cid array",
          "description": "Current intellectual property",
      },
      "owner": {
          "type": "string",
          "description": "The owner is a DID identifier",
      },
      "parent": {
          "type": "cid",
          "description": "Direct ascendant of the current intellectual property",
      }
  },
  "required": [ "name", "description", "image", "sources" ]
}
```

### Example

```JavaScript

const payload = {
  "name": "XDV metadata sample",
  "description": "testing sample",
  "image": "https://explore.ipld.io/#/explore/QmSnuWmxptJZdLJpKRarxBMS2Ju2oANVrgbr2xWbie9b2D",
  "sources": [
    "QmSnuWmxptJZdLJpKRarxBMS2Ju2oANVrgbr2xWbie9b2D",
    "z8mWaJHXieAVxxLagBpdaNWFEBKVWmMiE",
    "QmdmQXB2mzChmMeKY47C43LxUdg1NDJ5MWcKMKxDu7RgQm",
  ],
};


```
