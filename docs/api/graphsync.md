---
sidebar_position: 5
---

# Subgraph networks

Ancon Protocol node can also be used for DAG block exchange using GraphQL. The process starts with an indexer, a chain listener
which converts blocks in JSON to specific DAG format. Defaults to dagjson otherwise implement a custom DAG format.

A subgraph network is where one or more nodes are in a Graphsync protocol network exchanging blocks. These blocks can have typed messages packets called extensions. With an actor like developer API, these extensions can be implemented with checks or assertions using hooks.

An interesting example might be a data union where many Ancon Protocol nodes are specific to a certain extension data and with hooks checks can authenticate, authorize, compute or some other logic related to the extension data block.


## Indexing 

Ancon Protocol comes with two blockchain indexer, a CosmosIndexer and Ethereum/EVM Indexer. 

## CosmosIndexer

- Configure environment variables for the indexer, eg `COSMOS_PRIMARY_ADDRESS=tcp://
localhost:26657`
- The indexer will start indexing depending on query type, you can pick any of the existing category or create an ad-hoc query.
- To get the last link or tip, make a request to `GET /indexer/cosmos/tip`
- From that tip, query with GraphQL 

## Advanced usage - Creating extension and hooks

To implement your own subgraph networks, you can create a new router and network, based off `x/anconsync/impl/router.go` and `x/anconsync/impl/network.go`

```go
package impl

import (
	"context"
	"fmt"

	"github.com/anconprotocol/node/x/anconsync"
	gsync "github.com/ipfs/go-graphsync"
	graphsync "github.com/ipfs/go-graphsync/impl"
	gsnet "github.com/ipfs/go-graphsync/network"
	"github.com/multiformats/go-multiaddr"

	"github.com/ipld/go-ipld-prime/node/basicnode"
	"github.com/libp2p/go-libp2p-core/host"
	peer "github.com/libp2p/go-libp2p-core/peer"
	dht "github.com/libp2p/go-libp2p-kad-dht"
)

func NewRouter(ctx context.Context, gsynchost host.Host, s anconsync.Storage, peerhost string) (gsync.GraphExchange, *peer.AddrInfo) {

	var pi *peer.AddrInfo
	for _, addr := range dht.DefaultBootstrapPeers {
		pi, _ = peer.AddrInfoFromP2pAddr(addr)
		gsynchost.Connect(ctx, *pi)
	}

	network := gsnet.NewFromLibp2pHost(gsynchost)

	// Add Ancon fsstore
	exchange := graphsync.New(ctx, network, s.LinkSystem)

	// var receivedResponseData []byte
	// var receivedRequestData []byte

	exchange.RegisterIncomingResponseHook(
		func(p peer.ID, responseData gsync.ResponseData, hookActions gsync.IncomingResponseHookActions) {
			fmt.Println(responseData.Status().String(), responseData.RequestID())
		})

	exchange.RegisterIncomingRequestHook(func(p peer.ID, requestData gsync.RequestData, hookActions gsync.IncomingRequestHookActions) {
		// var has bool
		// receivedRequestData, has = requestData.Extension(td.extensionName)
		// if !has {
		// 	hookActions.TerminateWithError(errors.New("Missing extension"))
		// } else {
		// 	hookActions.SendExtensionData(td.extensionResponse)
		// }
		hookActions.ValidateRequest()
		hookActions.UseLinkTargetNodePrototypeChooser(basicnode.Chooser)
		fmt.Println(requestData.Root(), requestData.ID(), requestData.IsCancel())
	})
	finalResponseStatusChan := make(chan gsync.ResponseStatusCode, 1)
	exchange.RegisterCompletedResponseListener(func(p peer.ID, request gsync.RequestData, status gsync.ResponseStatusCode) {
		select {
		case finalResponseStatusChan <- status:
		default:
		}
	})
	pi, _ = peer.AddrInfoFromP2pAddr(multiaddr.StringCast(peerhost))
	// err := network.ConnectTo(ctx, pi.ID)
	// if err != nil {
	// 	panic(err)
	// }

	a := fmt.Sprintf("%s/p2p/%s", gsynchost.Addrs()[0].String(), gsynchost.ID().Pretty())

     return exchange, pi
}
```


```go
package impl

import (
	"context"
	"fmt"

	"time"

	blocks "github.com/ipfs/go-block-format"

	"github.com/ipfs/go-cid"
	"github.com/ipfs/go-graphsync"
	gsync "github.com/ipfs/go-graphsync"
	gsmsg "github.com/ipfs/go-graphsync/message"
	blockstore "github.com/ipld/go-car/v2/blockstore"
	"github.com/ipld/go-ipld-prime"
	"github.com/ipld/go-ipld-prime/datamodel"
	"github.com/ipld/go-ipld-prime/node/basicnode"
	ipldselector "github.com/ipld/go-ipld-prime/traversal/selector"
	"github.com/ipld/go-ipld-prime/traversal/selector/builder"

	"github.com/libp2p/go-libp2p"
	connmgr "github.com/libp2p/go-libp2p-connmgr"
	crypto "github.com/libp2p/go-libp2p-core/crypto"
	"github.com/libp2p/go-libp2p-core/host"
	peer "github.com/libp2p/go-libp2p-core/peer"
	"github.com/libp2p/go-libp2p-core/routing"
	kaddht "github.com/libp2p/go-libp2p-kad-dht"
	noise "github.com/libp2p/go-libp2p-noise"
)

func NewPeer(ctx context.Context, addr string) host.Host {
	// Set your own keypair
	priv, _, err := crypto.GenerateKeyPair(
		crypto.Ed25519, // Select your key type. Ed25519 are nice short
		-1,             // Select key length when possible (i.e. RSA).
	)
	if err != nil {
		panic(err)
	}

	var dht *kaddht.IpfsDHT
	newDHT := func(h host.Host) (routing.PeerRouting, error) {
		var err error
		dht, err = kaddht.New(ctx, h)
		return dht, err
	}

	gsynchost, err := libp2p.New(
		ctx,
		// Use the keypair we generated
		libp2p.Identity(priv),
		libp2p.Security(noise.ID, noise.New),
		// Multiple listen addresses
		libp2p.ListenAddrStrings(addr),
		libp2p.ConnectionManager(connmgr.NewConnManager(
			100,         // Lowwater
			400,         // HighWater,
			time.Minute, // GracePeriod
		)),
		libp2p.NATPortMap(),
		libp2p.Routing(newDHT),
		libp2p.EnableAutoRelay(),
		libp2p.EnableNATService(),
	)
	if err != nil {
		panic(err)
	}
	return gsynchost
}
type ReceivedMessage struct {
	Message gsmsg.GraphSyncMessage
	Sender  peer.ID
}

// Receiver is an interface for receiving messages from the GraphSyncNetwork.
type Receiver struct {
	MessageReceived chan ReceivedMessage
}

func (r *Receiver) ReceiveMessage(
	ctx context.Context,
	sender peer.ID,
	incoming gsmsg.GraphSyncMessage) {

	select {
	case <-ctx.Done():
	case r.MessageReceived <- ReceivedMessage{incoming, sender}:
	}
}

func (r *Receiver) ReceiveError(_ peer.ID, err error) {
	fmt.Println("got receive err")
}

func (r *Receiver) Connected(p peer.ID) {
}

func (r *Receiver) Disconnected(p peer.ID) {
}

func VerifyHasErrors(ctx context.Context, errChan <-chan error) error {

	for {
		select {
		case e, ok := <-errChan:
			if ok {
				return nil
			} else {
				return e
			}
		case <-ctx.Done():
		}
	}
}

func PrintProgress(ctx context.Context, pgChan <-chan gsync.ResponseProgress) {
	errCount := 0
	for {
		select {
		case _, ok := <-pgChan:
			if ok {
				fmt.Println("ok")
			}
			errCount++
		case <-ctx.Done():
		}
	}

}

var selectAll ipld.Node = func() ipld.Node {
	ssb := builder.NewSelectorSpecBuilder(basicnode.Prototype.Any)
	return ssb.ExploreRecursive(
		ipldselector.RecursionLimitDepth(100), // default max
		ssb.ExploreAll(ssb.ExploreRecursiveEdge()),
	).Node()
}()

func FetchBlock(ctx context.Context, exchange graphsync.GraphExchange, ipfspeer *peer.AddrInfo, c ipld.Link) error {
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	resps, errs := exchange.Request(ctx, ipfspeer.ID, c, selectAll)
	for {
		select {
		case <-ctx.Done():
			return ctx.Err()
		case _, ok := <-resps:
			if !ok {
				resps = nil
			}
		case err, ok := <-errs:
			if !ok {
				// done.
				return nil
			}
			if err != nil {
				return fmt.Errorf("got an unexpected error: %s", err)
			}
		}
	}
}
func PushBlock(ctx context.Context, exchange graphsync.GraphExchange, ipfspeer *peer.AddrInfo, c ipld.Link) error {
	ctx, cancel := context.WithCancel(ctx)
	defer cancel()

	resps, errs := exchange.Request(ctx, ipfspeer.ID, c, selectAll, gsync.ExtensionData{
		Name: graphsync.ExtensionMetadata,
		Data: []byte{},
	})
	for {
		select {
		case <-ctx.Done():
			return ctx.Err()
		case _, ok := <-resps:
			if !ok {
				resps = nil
			}
		case err, ok := <-errs:
			if !ok {
				// done.
				return nil
			}
			if err != nil {
				return fmt.Errorf("got an unexpected error: %s", err)
			}
		}
	}
}
```



