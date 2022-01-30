---
sidebar_position: 1
---

# Ancon Protocol Decentrallized Infrastructure

## Smart Contracts

Ancon Protocol is a smart contract that stores ICS23 Vector Commitments hashes (accumulators), verifies proofs from a network of nodes or single node in a DAG sync strategy or using Graphsync. The relayers in this setup, query a node in the network and polls the smart contract for `HeaderUpdated` events, in every emit a hash is submitted to the smart contract.

TODO Image

## Networks

A `DAG Network` is a node in single node or in a Graphsync network, which is register in Ancon Protocol contract. Every root hash or accumulator update is read from the node and pushed to the smart contract by the relayer.

## Nodes

A `Node` is where both the merkle tree storage and DAG blocks are hosted. A Node is create with `ancond --moniker supernetwork --init`, which creates a new set of keys and credentials given a moniker name.

These keys are used when creating a relayer connection.


## Relayers


A `Relay` is a NestJS backend app which is configured with the addresses of `Ancon Protocol`, an ERC20 token for payments, and a chain  id .

Relayers can query either an anonymous last or  signed last hast request fom a node,


