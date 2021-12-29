---
sidebar_position: 3
---

# Trusted offchain gateways

Ancon Protocol node can be used to integrate onchain and offchain sources using EIP-3668 Durin or also called Trusted Offchain gateway. Further in `Subgraph networks` chapter, we'll revisit this feature as we replace REST with Graphsync.

## What is trustless and trusted

A trustless setting onchain means the consensus of a blockchain is enough to validate a transaction is valid and has no bad behavior.

In cross chain use cases, there are many to accomplish this, one is with atomic swaps, which we'll use in parts, other is with ZK technology and other with protocols that are based on Merkle Proofs.


## Design and Architecture of a Hybrid Smart Contract

`Hybrid Smart Contracts` is the term used for integrating both offchain and onchain seamlessly in a secure way.

Ancon Protocol Node SDK uses a set of technologies, the developer should have a good grasp of the following:

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

```c++

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

```rust
pub fn focused_transform_patch_str(cid: &str, path: &str, prev: &str, next: &str) -> String
```

Applies an IPLD focused transform using a patch design pattern for string node values

```rust
pub fn read_dag(cid: &str) -> Vec<u8>
```

Reads a cid from dag store

```rust
pub fn submit_proof(data: &str) -> String
```

Submits proof (offchain)

```rust
pub fn get_proof(cid: &str) -> String
```

Retrieves proof (offchain)

```rust
pub fn generate_proof(cid: &str) -> String
```

Generates proof (offchain)
