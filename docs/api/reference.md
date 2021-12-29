---
sidebar_position: 1
---

# API Reference


## `POST /v0/did/key`

> Creates a new did-key


### Parameters

None


### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` | An object that contains the CID |

example of the returned object:

```json
{
  "cid": {
    "/": "baguqeeraui7hue3i2smgzmzdqmrxrnicqpoggayqkoocqdcjf3q5n66smdlq"
  },
  "proof": {
    "/": "baguqeeraui7hue3i2smgzmzdqmrxrnicqpoggayqkoocqdcjf3q5n66smdlq"
  }
}
```



## `POST /v0/did/web`

> Creates a new did-web


### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `domainName` | `string` | Subdomain eg alice.ipfs.pa |
| `pub` | `string` | (hex) public key  |



### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` | An object that contains the CID |

example of the returned object:

```json
{
  "cid": {
    "/": "baguqeeraui7hue3i2smgzmzdqmrxrnicqpoggayqkoocqdcjf3q5n66smdlq"
  },
  "proof": {
    "/": "baguqeeraui7hue3i2smgzmzdqmrxrnicqpoggayqkoocqdcjf3q5n66smdlq"
  }
}
```


## `GET /v0/did/:did`

> Returns did document as json


### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `did` | `string` | DID Doc id |



### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` | A did document |

example of the returned object:

```javascript
{
  "@context": ["https://www.w3.org/ns/did/v1"],
  "authentication": [
    "",
    {
      "controller": "did:key:z3rc1YQMG366ttmuHeX2qodNeZAEhU6ktdjJEdLMRGX9gtpjaHitW6eu4BvZMEF",
      "id": "did:key:z3rc1YQMG366ttmuHeX2qodNeZAEhU6ktdjJEdLMRGX9gtpjaHitW6eu4BvZMEF#",
      "publicKeyBase58": "J8v1rHsHjrBP9khKJdiZBrfq4u2Ame2aUsv8fACmKjaF",
      "type": "Ed25519VerificationKey2018"
    }
  ],
  "created": "2021-12-04T07:57:33.030203855-05:00",
  "id": "did:key:z3rc1YQMG366ttmuHeX2qodNeZAEhU6ktdjJEdLMRGX9gtpjaHitW6eu4BvZMEF",
  "updated": "2021-12-04T07:57:33.030203855-05:00",
  "verificationMethod": [
    {
      "controller": "did:key:z3rc1YQMG366ttmuHeX2qodNeZAEhU6ktdjJEdLMRGX9gtpjaHitW6eu4BvZMEF",
      "id": "did:key:z3rc1YQMG366ttmuHeX2qodNeZAEhU6ktdjJEdLMRGX9gtpjaHitW6eu4BvZMEF#",
      "publicKeyBase58": "J8v1rHsHjrBP9khKJdiZBrfq4u2Ame2aUsv8fACmKjaF",
      "type": "Ed25519VerificationKey2018"
    }
  ]
}

```

## `GET /proofs/lasthash`

> Reads current last hash


### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` | An object that contains the hash |


## `GET /user/:did/did.json`

> Reads a did-web


### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `did` | `string` | did web domain name   |



### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` | An object that contains the CID |

example of the returned object:

```json
{
  "@context": ["https://www.w3.org/ns/did/v1"],
  "authentication": [
    "",
    {
      "controller": "did:web:ipfs:user:rogelio",
      "id": "did:web:ipfs:user:rogelio",
      "publicKeyBase58": "ER5jUmbiApGWtR4QVHjG7nHpaMGhZmf4BRMSLw4tBeEmT8RZhUKwppqsjHihwXp4RpVjVXaChRZFyKj1s41uGJs",
      "type": "Secp256k1VerificationKey2018"
    }
  ],
  "created": "2021-12-04T08:20:35.623500975-05:00",
  "id": "did:web:ipfs:user:rogelio",
  "updated": "2021-12-04T08:20:35.623500975-05:00",
  "verificationMethod": [
    {
      "controller": "did:web:ipfs:user:rogelio",
      "id": "did:web:ipfs:user:rogelio",
      "publicKeyBase58": "ER5jUmbiApGWtR4QVHjG7nHpaMGhZmf4BRMSLw4tBeEmT8RZhUKwppqsjHihwXp4RpVjVXaChRZFyKj1s41uGJs",
      "type": "Secp256k1VerificationKey2018"
    }
  ]
}

```


## `POST /v0/dagjson`

> Stores json as dag-json in users path. Must have registerd DID and messasge must be signed with signature matching DID.


### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `path` | `string` | path |
| `from` | `string` | DID identifier |
| `signature` | `string` | signature as hex |
| `data` | `object` | object to store |



### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` | An object that contains the CID |

example of the returned object:

```json
{
  "cid": {
    "/": "baguqeeraui7hue3i2smgzmzdqmrxrnicqpoggayqkoocqdcjf3q5n66smdlq"
  }
}
```



## `POST /v0/dagcbor`

> Stores json as dag-cbor in users path. Must have registerd DID and messasge must be signed with signature matching DID.

### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `path` | `string` | path |
| `data` | `object` | (base64) object to store |
| `from` | `string` | DID identifier |
| `signature` | `string` | signature as hex |



### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` | An object that contains the CID |

example of the returned object:

```json
{
  "cid": {
    "/": "baguqeeraui7hue3i2smgzmzdqmrxrnicqpoggayqkoocqdcjf3q5n66smdlq"
  }
}
```



## `GET /v0/dagjson/:cid/*path`

> Reads a dag-json block


### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `cid` | `string` | cid |
| `path` | `string` | path |



### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` |  json object |

example of the returned object:

```json
 {
    "name": "metadata sample",
    "owner": "0x2a3D91a8D48C2892b391122b6c3665f52bCace23p",
    "description": "testing sample",
    "image": "helloworld.jpg"
  }
```


## `GET /v0/dagcbor/:cid/*path`

> Reads a dag-cbor block


### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `cid` | `string` | cid |
| `path` | `string` | path |



### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` |  cbor object |

example of the returned object:

```
<...cbor data...>
```


## `GET /v0/file/:cid/*path`

> Reads a dag-json block


### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `cid` | `string` | cid |
| `path` | `string` | path |



### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` |  content type stream|

example of the returned object:

```
<...data...>
```




## `POST /v0/code`

> Uploads a hybrid smart contract


### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `code` | `string` | hex encoded Ancon Protocol Rust Smart Contract |
| `from` | `string` | DID |
| `signature` | `string` | hex encoded signature of code digest |



### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` |  content type stream|

example of the returned object:

```
<...data...>
```


## `POST /rpc`

> Trusted offchain JSON-RPC 2.0 gateway


## `ancon_call`

> Executes hybrid smart contract



### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `to` | `string` | smart contract cid address |
| `from` | `string` | DID |
| `signature` | `string` | signature |
| `data` | `string` | data |



### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` |  content type stream|


### Example

```typescript
import dotenv from 'dotenv'
import { arrayify, hexlify } from '@ethersproject/bytes'
import fs from 'fs'
import { promisify } from 'util'
import { ethers } from 'ethers'
import web3 from 'web3'
import { Secp256k1 } from '@cosmjs/crypto'
import { fetchJson } from '@ethersproject/web'
import { toUtf8Bytes, toUtf8String } from 'ethers/lib/utils'
dotenv.config()

export class ExecuteContractExample {
  constructor(
    private privateKey: string,
    private apiUrl: string = 'http://localhost:7788',
  ) {}

  async execute({ to, from, query }: any): Promise<any> {
    let data = {
      to,
      from,
      data: query,
      // signature: '',
    } as any
    const bz = ethers.utils.toUtf8Bytes(data.to + data.from + data.data)
    const hash = ethers.utils.keccak256(bz)
    const sig = await Secp256k1.createSignature(
      arrayify(hash),
      Buffer.from(this.privateKey, 'hex'),
    )
    data.signature = hexlify(sig.toFixedLength())

    const body = {
      jsonrpc: '2.0',
      method: 'ancon_call',
      params: [data.to, data.from, data.signature, data.data],
      id: 1,
    }
    
    const result = await fetchJson(
      {
        url: `${this.apiUrl}/rpc`,
      },
      JSON.stringify(body),
    )

    return result
  }
}

;(async () => {
  const contract = new ExecuteContractExample(
    process.env.PRIVATE_KEY || '',
    process.env.URL,
  )

  //@ts-ignore
  let metadata = 'baguqeerak5hfvtgsvaaxtm5cbce2khnh7y4ijfnbrgeygwu4wixrz4z52vja'
  const result = await contract.execute({
    to: process.env.CONTRACT,
    from: process.env.DID_USER,
    query: `query   { metadata(cid: \"${metadata}\", path: \"/\"){name} }`
  })

  console.log(result)
  const j = (web3.utils.hexToString(result.result))
  console.log(JSON.parse(j))
  
})()
```

## `GET /swagger`

> REST documentation


# CLI Reference

- `peeraddr`: Connects to subgraph node with IPFS
- `addr`:  Host libp2p address
- `apiaddr`:  Host API address
- `data`: Storage directory
- `cors`: Set to true to enable CORS requests
- `origins`: Comma separated list of addresses
- `init`: Initializes the proof storage by creating a genesis block
- `keys`: Generates Secp256k1 keys
- `hostname`: Node identifier
- `rootkey`: Rootkey to validate
- `sync`: Syncs with peers
- `peers`:  List of peers to sync
