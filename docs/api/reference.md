---
sidebar_position: 1
---

# API Reference


## `POST /v0/did`

> Creates a new Decentralized Identity.  Block is duplicated to IPFS by default.


### Parameters

Set `etherdid` to create a DID-web with ethereum support (ethr-did). Set `pub` to empty for auto generated identity based on did-key. For did-web, use `domainName`.

| Name | Type | Description |
| ---- | ---- | ----------- |
| `domainName` | `string` | Subdomain eg alice.ipfs.pa |
| `etherdid` | `string` | Eg did:ethr:mumbai:0x.... |
| `pub` | `string` | (hex) public key  |


### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` | An object that contains the CID |

example of the returned object:

```json
  {
    "commitHash": "/AzWS9kE67z+wRs8htT3G+bRYDLy8V/Jg/cGUBprV/s=",
  "content": {
    "/": "baguqeerafkyyjhrgfai6x6djd23ot2d6vytaf35uvg6s2egc7llqkuc7nfua"
  },
  "height": 4892,
  "issuer": "0xeeC58E89996496640c8b5898A7e0218E9b6E90cB",
  "key": "L2FuY29ucHJvdG9jb2wvYmFmeXJlaWJxaXFiY2FmbnptanFtdjNpeTd1emppaW1uZWlxMmNxc3AzYm1odGNqYnJ3eXF3dnl3YmkvdXNlci9iYWd1cWVlcmFma3l5amhyZ2ZhaTZ4NmRqZDIzb3QyZDZ2eXRhZjM1dXZnNnMyZWdjN2xscWt1YzduZnVh",
  "parent": "/anconprotocol/bafyreibqiqbcafnzmjqmv3iy7uzjiimneiq2cqsp3bmhtcjbrwyqwvywbi/user",
  "signature": "0x971d3282785c390336860c5f5e5e1c7058f028738da7a003b8d81da7182cd6880798f8608e74d381c77d071f88adfa20e528bed1afba05f3c564bc6b59ec2dc61c",
  "timestamp": 1642350132
  }
```


## `GET /v0/did/:did`

> Returns did document as json

Supports following responses:

- DAG Transaction response use `raw:<did-id>` eg `v0/did/raw:did:ethr:mumbai:0x32A21c1bB6E7C20F547e930b53dAC57f42cd25F6`
- DID JSON use did eg `v0/did/did:ethr:mumbai:0x32A21c1bB6E7C20F547e930b53dAC57f42cd25F6`

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

## `GET /proof/:key?height=n&export=qr&bgcolor=hex&fgcolor=hex`

> Gets a proof given a key and height


### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `key` | `string` | Key(base 64) |
| `height` | `int` | Height (int) |
| `export` | `string` | Export as: qr |
| `bgcolor` | `string` | background hex rgb |
| `fgcolor` | `string` | foreground hex rgb |


### Returns

| Type | Description |
| -------- | -------- |
| `Promise<Response>` | An object that contains the hash |


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

<!-- ## `PUT /v0/dag`

> Mutates a dag-json in users path. Must have registerd DID and messasge must be signed with signature matching DID.  Block is duplicated to IPFS by default.

### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `from` | `string` | DID identifier |
| `signature` | `string` | signature as hex |
| `data` | `object` | Mutations |
| `cid` | `string` | cid to mutate |
| `topic` | `string` | topic name |

### Mutations

Mutations only apply to the current cid, and is executed sequentially. Each sequence cid stored in `parent` property.

```json
{ 
  ...,
  "data": [
    {
      "path": "content/royalty",
      "previousValue": 0.1,
      "nextValue": 1,
    },
    {
      "path": "content/owner",
      "previousValue": "alice",
      "nextValue": "bob",
    },
    {
      // will add a new node
      "path": "tag",
      "previousValue": null,
      "nextValue": "nft_from_panama",
    },
  ],
  ...,
}
```


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
``` -->


## `POST /v0/dag`

> Stores json as dag-json in users path. Must have registerd DID and messasge must be signed with signature matching DID. Block is duplicated to IPFS by default.


### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `path` | `string` | path |
| `from` | `string` | DID identifier |
| `signature` | `string` | signature as hex |
| `data` | `object` | object to store |
| `encrypt` | `bool` | enables JOSE Web Encryption |
| `authorizedRecipients` | `string array` | comma delimited Ethereum address
| `topic` | `string` | topic name |


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




## `GET /v0/dag/:cid/*path`

> Reads a dag-json block

### Query with namespaces, Ancon cids and IPFS cids

DAG storage has the following namespaces available:

#### moniker

A DAG store creates at init time a genesis, which is called root key. This root key is found in the `<moniker>` namespace.

#### moniker/users

DIDs and DAG blocks are created under `<moniker>/users` and the HTTP GET queries by default this namespace. Blocks created here return DAG results.


#### moniker/graphs

Reserved space for subgraph networks

### Enhanced Get query

You can query any namespace by adding `namespace` as a query string


####  Read cid from namespace path

```html
https://api.ancon.did.pa/v0/dagjson/baguqeerac33uoqmawkru523zwubchxitrsinqskl7yjr67nqsxtocqv7to7q/?namespace=anconprotocol/users/0x32A21c1bB6E7C20F547e930b53dAC57f42cd25F6
```

####  Read cid from namespace path /


```html
https://api.ancon.did.pa/v0/dagjson/baguqeerac33uoqmawkru523zwubchxitrsinqskl7yjr67nqsxtocqv7to7q/?namespace=/
```


####  Read cid key path

```html
https://api.ancon.did.pa/v0/dagjson/baguqeerac33uoqmawkru523zwubchxitrsinqskl7yjr67nqsxtocqv7to7q/key?
```

####  Read cid with no content node attached in response

```html
https://api.ancon.did.pa/v0/dagjson/baguqeerac33uoqmawkru523zwubchxitrsinqskl7yjr67nqsxtocqv7to7q/?compact=false
```

### DAG Response


```json
 {
  "commitHash": "/AzWS9kE67z+wRs8htT3G+bRYDLy8V/Jg/cGUBprV/s=",
  "contentHash": {
    "/": "baguqeerafkyyjhrgfai6x6djd23ot2d6vytaf35uvg6s2egc7llqkuc7nfua"
  },
  "height": 4892,
  "issuer": "0xeeC58E89996496640c8b5898A7e0218E9b6E90cB",
  "key": "L2FuY29ucHJvdG9jb2wvYmFmeXJlaWJxaXFiY2FmbnptanFtdjNpeTd1emppaW1uZWlxMmNxc3AzYm1odGNqYnJ3eXF3dnl3YmkvdXNlci9iYWd1cWVlcmFma3l5amhyZ2ZhaTZ4NmRqZDIzb3QyZDZ2eXRhZjM1dXZnNnMyZWdjN2xscWt1YzduZnVh",
  "parent": "/anconprotocol/bafyreibqiqbcafnzmjqmv3iy7uzjiimneiq2cqsp3bmhtcjbrwyqwvywbi/user",
  "signature": "0x971d3282785c390336860c5f5e5e1c7058f028738da7a003b8d81da7182cd6880798f8608e74d381c77d071f88adfa20e528bed1afba05f3c564bc6b59ec2dc61c",
  "timestamp": 1642350132,
  "content": {
    "datafield1": "example1",
    "datafield2": "example2"
  }
}
```

If you query a link inside the response and if is unique, then you get the complete node response, otherwise you get a set of links.

### Fallback

Recommended usage is to create a client load balancer with fallback functionality:

- Ancon Protocol Node
- Pinning Service 
- Public IPFS Gateway

### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `cid` | `string` | cid |
| `path` | `string` | path |



### Returns

| Type | Description |
| -------- | -------- |
| `Promise<DagResponse>` |  json object |



```json
 {
  "commitHash": "/AzWS9kE67z+wRs8htT3G+bRYDLy8V/Jg/cGUBprV/s=",
  "content": {
    "/": "baguqeerafkyyjhrgfai6x6djd23ot2d6vytaf35uvg6s2egc7llqkuc7nfua"
  },
  "height": 4892,
  "issuer": "0xeeC58E89996496640c8b5898A7e0218E9b6E90cB",
  "key": "L2FuY29ucHJvdG9jb2wvYmFmeXJlaWJxaXFiY2FmbnptanFtdjNpeTd1emppaW1uZWlxMmNxc3AzYm1odGNqYnJ3eXF3dnl3YmkvdXNlci9iYWd1cWVlcmFma3l5amhyZ2ZhaTZ4NmRqZDIzb3QyZDZ2eXRhZjM1dXZnNnMyZWdjN2xscWt1YzduZnVh",
  "parent": "/anconprotocol/bafyreibqiqbcafnzmjqmv3iy7uzjiimneiq2cqsp3bmhtcjbrwyqwvywbi/user",
  "signature": "0x971d3282785c390336860c5f5e5e1c7058f028738da7a003b8d81da7182cd6880798f8608e74d381c77d071f88adfa20e528bed1afba05f3c564bc6b59ec2dc61c",
  "timestamp": 1642350132
}
```


## `GET /v0/file/:cid/*path`

> Reads a dag-json block.  Block is not duplicated to IPFS.


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
- `quic`: Enables QUIC
- `tlscert`: TLS certificate for QUIC
- `tlskey`: TLS key for QUIC
- `ipfshost`: IPFS Host address for DAG Pinning

> Copyright IFESA  2022
