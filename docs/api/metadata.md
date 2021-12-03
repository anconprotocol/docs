---
sidebar_position: 2
---

#   Onchain metadata

## Solidity

```solidity
struct Ancon721Metadata{
  string uri;
  string parent;
  string didOwner;
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


const res = await ancon.metadata.add(payload)
console.log(`https://gateway.dao.pa/ancon/${res.cid}`)
```

**Mint or anchor** your Ancon metadata after its vetted by chain consensus protocol. The metadata is just a link to a gateway and always public.

