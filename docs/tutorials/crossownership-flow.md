---
sidebar_position: 3
---

# EVM to Flow cross ownership


## Cross chain recipe

1. Create metadata
2. Add UUID, and Sources [https://api.ancon.did.pa/..., ipfs://..., swarm://...]
3. Add didOwner formatted as ethr:did
4. POST /dag
5. GET /proof
6. `mintWithProof(moniker, UUID, uri)` // make sure DAG network is supported in the destination chain


## Results

- 1 cross chain metadata (same cid hash)
- Same token ID in each chain
- Same init owner

## Use cases

Cross chain nft fragmentation