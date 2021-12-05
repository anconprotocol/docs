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

In `schema.resolvers.go` the generator crates code stubs, where you put the DAG operations implementation.

## Smart Contract



## Onchain adapter

## Generate client bindings for schemas

