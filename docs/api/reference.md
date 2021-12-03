---
sidebar_position: 1
---

# API Reference


## `POST /v0/file`

> Stores a file as dag-json


### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `file` | `File` | File to upload |



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


## `POST /v0/dagjson`

> Stores json as dag-json


### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `path` | `string` | path |
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

> Stores json as dag-cbor


### Parameters


| Name | Type | Description |
| ---- | ---- | ----------- |
| `path` | `string` | path |
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


## `GET /v0/query`

> GraphQL playground


## `POST /v0/query`

> GraphQL


## `POST /rpc`

> Trusted offchain JSON-RPC 2.0 gateway


## `GET /swagger`

> REST documentation


# CLI Reference

- `peeraddr`: Connects to subgraph node with Graphsync
- `addr`:  Host libp2p address
- `apiaddr`:  Host API address
- `data`: Storage directory
