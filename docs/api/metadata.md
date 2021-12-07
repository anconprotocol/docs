---
sidebar_position: 2
---

#   Onchain metadata and DAG blocks (Polygon SDK)

These onchain features are available in Ancon Protocol Chain powered by Polygon SDK. There are three post transaction hooks:


## AddOnchainMetadata hook event

Creates a dag-json block containing Ancon721Metadata payload. Emits a StoreDagBlockDone event.


## EncodeDagJson hook event

Creates a dag-json block containing json payload. Emits a StoreDagBlockDone event.

## EncodeDagCbor hook event

Creates a dag-cbor block containing cbor payload. Emits a StoreDagBlockDone event.

## Examples

### Solidity

```typescript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract OnchainMetadata {

  event AddOnchainMetadata(
    string name, 
    string description, 
    string indexed image, 
    string indexed owner, 
    string indexed parent, 
    bytes sources
  );

  event EncodeDagJson(
    string path, 
    string hexdata
  );

  event EncodeDagCbor(
    string path, 
    string hexdata
  );

  event StoreDagBlockDone(
    string path, 
    string cid
  );


  constructor() {

  }

  function setOnchainMetadata(
    string memory name, 
    string memory description, 
    string memory image, 
    string memory owner, 
    string memory parent, 
    bytes memory sources
  ) public{
    emit AddOnchainMetadata(name, description, image, owner, parent, sources);
  }

  function encodeDagjsonBlock(
    string memory path,
    string memory hexdata
  ) public returns (bool) {

    emit EncodeDagJson(path, hexdata);

    return true;
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
