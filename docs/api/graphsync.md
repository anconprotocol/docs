---
sidebar_position: 5
---

# Subgraph networks

Ancon Protocol node can also be used for DAG block exchange using GraphQL. The process starts with an indexer, a chain listener
which converts blocks in JSON to specific DAG format. Defaults to dagjson otherwise implement a custom DAG format.

A subgraph network is where one or more nodes are in a Graphsync protocol network exchaning blocks. These blocks can have typed messages packets called extensions. With an actor like developer API, these extensions can be implemented with checks or assertions using hooks.

An interesting example might be a data union where many Ancon Protocol nodes are specific to a certain extension data and with hooks checks can authenticate, authorize, compute or some other logic related to the extension data block.


## Indexing 

Ancon Protocol comes with two blockchain indexer, a CosmosIndexer and Ethereum/EVM Indexer. 
## Extensions


