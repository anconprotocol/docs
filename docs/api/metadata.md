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

contract AnconProtocol is ICS23 {
    address public owner;
    bytes public relayNetworkHash;

    mapping(bytes => bytes) public accountProofs;
    mapping(address => bytes) public accountByAddrProofs;
    mapping(bytes => bool) public proofs;

    event ProofPacketSubmitted(bytes key, bytes packet);
    event EnrollL2Account(bool enrolledStatus, bytes key, bytes value);

    constructor(address _onlyOwner) public {
        owner = _onlyOwner;
    }


    // Register L2 Account
    function enrollL2Account(
        bytes memory key, // proof key "/anconprotocol/root/user/diddocid"
        bytes memory did, // proof value did doc id
        ExistenceProof memory proof
    ) public payable returns (bool) {
        require(verifyProof(proof));
        accountProofs[(did)] = key;
        accountByAddrProofs[msg.sender] = key;
        emit EnrollL2Account(true, key, did);
        return true;
    }



    // Updates latest hash from a node or subgraph, only owner using updater service
    function updateProtocolHeader(bytes memory rootHash) public returns (bool) {
        require(msg.sender == owner);
        relayNetworkHash = rootHash;
        return true;
    }

    // Submits packet with proof and emits event
    function submitPacketWithProof(
        bytes memory key,
        bytes memory packet,
        ExistenceProof memory proof
    ) public payable returns (bool) {
        // 1. Verify
        require(verifyProof(proof));

        proofs[key] = true;

        // 2. Submit event
        emit ProofPacketSubmitted(key, packet);

        return true;
    }

    // Verifies vector commitment existence in remote merkle tree, given a last updated hash submitted by trusted party.
    function verifyProof(ExistenceProof memory exProof)
        public
        view
        returns (bool)
    {
        // Verify membership
        verify(
            exProof,
            getIavlSpec(),
            relayNetworkHash,
            exProof.key,
            exProof.value
        );

        return true;
    }

    // Calculates a root hash from an existence proof
    function queryRootCalculation(ExistenceProof memory proof)
        public
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