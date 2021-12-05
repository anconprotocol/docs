"use strict";(self.webpackChunkancon_docs=self.webpackChunkancon_docs||[]).push([[688],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=c(e.components);return r.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2143:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:3},d="Trusted offchain gateways",c={unversionedId:"api/durin",id:"api/durin",isDocsHomePage:!1,title:"Trusted offchain gateways",description:"Ancon Protocol node can be used to integrate onchain and offchain sources using EIP-3668 Durin or also called Trusted Offchain gateway. Further in Subgraph networks chapter, we'll revisit this feature as we replace REST with Graphsync.",source:"@site/docs/api/durin.md",sourceDirName:"api",slug:"/api/durin",permalink:"/docs/api/durin",editUrl:"https://github.com/anconprotocol/docs/docs/api/durin.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Onchain metadata",permalink:"/docs/api/metadata"},next:{title:"IPLD Operations",permalink:"/docs/api/ipld"}},l=[{value:"What is trustless and trusted",id:"what-is-trustless-and-trusted",children:[],level:2},{value:"Trustless with Ancon Protocol",id:"trustless-with-ancon-protocol",children:[],level:2},{value:"Trusted with Ancon Protocol",id:"trusted-with-ancon-protocol",children:[],level:2},{value:"Design and Architecture of a Hybrid Smart Contract",id:"design-and-architecture-of-a-hybrid-smart-contract",children:[],level:2},{value:"Server side schemas",id:"server-side-schemas",children:[],level:2},{value:"DAG Operations or Mutation",id:"dag-operations-or-mutation",children:[],level:2},{value:"Smart Contract",id:"smart-contract",children:[],level:2},{value:"Onchain adapter",id:"onchain-adapter",children:[],level:2},{value:"Generate client bindings for schemas",id:"generate-client-bindings-for-schemas",children:[],level:2}],u={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"trusted-offchain-gateways"},"Trusted offchain gateways"),(0,o.kt)("p",null,"Ancon Protocol node can be used to integrate onchain and offchain sources using EIP-3668 Durin or also called Trusted Offchain gateway. Further in ",(0,o.kt)("inlineCode",{parentName:"p"},"Subgraph networks")," chapter, we'll revisit this feature as we replace REST with Graphsync."),(0,o.kt)("h2",{id:"what-is-trustless-and-trusted"},"What is trustless and trusted"),(0,o.kt)("p",null,"A trustless setting onchain means the consensus of a blockchain is enough to validate a transaction is valid and has no bad behavior."),(0,o.kt)("p",null,"In cross chain use cases, there are many to accomplish this, one is with atomic swaps, whichi we'll use in parts, other is with ZK technology and other with protocols that are based on Merkle Proofs."),(0,o.kt)("h2",{id:"trustless-with-ancon-protocol"},"Trustless with Ancon Protocol"),(0,o.kt)("p",null,"We use ",(0,o.kt)("inlineCode",{parentName:"p"},"ICS23")," for trustless, the current implementation supports any Cosmos chain and can be integrated with Ethereum and Flow. The setup can be found in the Cosmos middleware repo."),(0,o.kt)("h2",{id:"trusted-with-ancon-protocol"},"Trusted with Ancon Protocol"),(0,o.kt)("p",null,"The recommended way to use Ancon Protocol is with trusted, is oriented towards data economy use cases. For example, a data union needs to stream a batch of data from different sources, merge and compute using DAG blocks and then put these changes to blockchain."),(0,o.kt)("p",null,"Before Ancon Protocol, you would have to develop most of these tasks, that can be mechaninc and repeatable."),(0,o.kt)("h2",{id:"design-and-architecture-of-a-hybrid-smart-contract"},"Design and Architecture of a Hybrid Smart Contract"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Hybrid Smart Contracts")," is the term used for integrating both offchain and onchain seamlessly in a secure way. To start using the Node SDK, these are the steps that needs to be planned."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Server side schemas")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"DAG Operations or Mutation")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Smart Contract")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Onchain adapter")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Generate client bindings for schemas"))),(0,o.kt)("p",null,"The Node SDK uses a set of technologies, the developer should have a good grasp of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go language"),(0,o.kt)("li",{parentName:"ul"},"IPLD"),(0,o.kt)("li",{parentName:"ul"},"GraphQL"),(0,o.kt)("li",{parentName:"ul"},"Smart Contract language of the onchain implementation")),(0,o.kt)("h2",{id:"server-side-schemas"},"Server side schemas"),(0,o.kt)("p",null,"Download the ",(0,o.kt)("inlineCode",{parentName:"p"},"github.com/anconprotocol.com/node-template")," and label it with the name of your project."),(0,o.kt)("p",null,"Create your domain model or message model, you can call it ",(0,o.kt)("inlineCode",{parentName:"p"},"packet"),", in ",(0,o.kt)("inlineCode",{parentName:"p"},"x/anconsync/codegen/graph/schema.graphqls"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Bytes\n\nschema {\n    query: Query\n    mutation: Transaction\n}\n\ntype Ancon721Metadata {\n  name: String!\n  description: String!\n  image: String!\n  parent: String\n  owner: String\n  sources: [DagLink!]\n}\n\ntype DagLink {\n  path: String!\n  cid: String!\n}\n\ntype DagContractTrusted {\n  data: DagLink!\n  payload: Ancon721Metadata!\n}\n\ntype Query {\n  metadata(cid: String!, path: String!): Ancon721Metadata\n}\n\ninput MetadataTransactionPacketInput {\n  path: String!\n  cid: String!\n  owner: String!\n  newOwner: String!\n}\n\n\n\ntype Transaction {\n  metadata(tx: MetadataTransactionPacketInput!): DagLink!\n}\n\n")),(0,o.kt)("p",null,"Then run ",(0,o.kt)("inlineCode",{parentName:"p"},"generateServeModels.sh")," from repo directory. It will generate and models inside codegen."),(0,o.kt)("h2",{id:"dag-operations-or-mutation"},"DAG Operations or Mutation"),(0,o.kt)("p",null,"Now we are going to apply a GraphQL mutation, which is an update to an immutable object, means it will discard the old CID and create a new CID from the latest update in the DAG block. "),(0,o.kt)("p",null,"Why are we abstracting on top of GraphQL? The main reason is to provide a better and more expedite approach to software engineering differents pieces of technologies like IPFS and blockchain. By enforcing the schemas with code generation in server side, we also get a similar developer experience as when you do smart contract development. "),(0,o.kt)("p",null,"In this example, we'll use one of the easiest IPLD Operator, which is the ",(0,o.kt)("inlineCode",{parentName:"p"},"focused transform"),", where we "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pinpoint or ",(0,o.kt)("strong",{parentName:"li"},"select")," a path inside a root node"),(0,o.kt)("li",{parentName:"ul"},"Patch or mutate that selection with a function call. In our case, a diff patch, eg if previous node matches previous node requested a change, then apply requested change to node.")),(0,o.kt)("p",null,"It returns a new CID and we can iterate again with another change request."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package graph\n\n// This file will be automatically regenerated based on the schema, any resolver implementations\n// will be copied through when generating and any unknown code will be moved to the end.\n\nimport (\n    "context"\n    "encoding/json"\n    "fmt"\n\n    "github.com/anconprotocol/node/x/anconsync"\n    "github.com/anconprotocol/node/x/anconsync/codegen/graph/generated"\n    "github.com/anconprotocol/node/x/anconsync/codegen/graph/model"\n    "github.com/anconprotocol/node/x/anconsync/handler"\n    ipld "github.com/ipld/go-ipld-prime"\n    "github.com/ipld/go-ipld-prime/datamodel"\n    "github.com/ipld/go-ipld-prime/must"\n    "github.com/ipld/go-ipld-prime/node/basicnode"\n    "github.com/ipld/go-ipld-prime/traversal"\n)\n\nfunc (r *queryResolver) Metadata(ctx context.Context, cid string, path string) (*model.Ancon721Metadata, error) {\n    dag := ctx.Value("dag").(*handler.AnconSyncContext)\n\n    jsonmodel, err := anconsync.ReadFromStore(dag.Store, cid, path)\n    if err != nil {\n        return nil, err\n    }\n    var metadata model.Ancon721Metadata\n    json.Unmarshal([]byte(jsonmodel), &metadata)\n    return &metadata, nil\n}\n\nfunc (r *transactionResolver) Metadata(ctx context.Context, tx model.MetadataTransactionInput) (*model.DagLink, error) {\n    dag := ctx.Value("dag").(*handler.AnconSyncContext)\n\n    lnk, err := anconsync.ParseCidLink(tx.Cid)\n    if err != nil {\n        return nil, err\n    }\n    rootNode, err := dag.Store.Load(ipld.LinkContext{}, lnk)\n    if err != nil {\n        return nil, err\n    }\n\n    // owner update\n    n, err := traversal.FocusedTransform(\n        rootNode,\n        datamodel.ParsePath("owner"),\n        func(progress traversal.Progress, prev datamodel.Node) (datamodel.Node, error) {\n            if progress.Path.String() == "owner" && must.String(prev) == tx.Owner {\n                nb := prev.Prototype().NewBuilder()\n                nb.AssignString(tx.NewOwner)\n                return nb.Build(), nil\n            }\n            return nil, fmt.Errorf("Owner not found")\n        }, false)\n\n    if err != nil {\n        return nil, err\n    }\n\n    // parent update\n    n, err = traversal.FocusedTransform(\n        n,\n        datamodel.ParsePath("parent"),\n        func(progress traversal.Progress, prev datamodel.Node) (datamodel.Node, error) {\n            nb := basicnode.Prototype.Any.NewBuilder()\n            // set previous hash, not current\n            l, _ := anconsync.ParseCidLink(tx.Cid)\n            nb.AssignLink(l)\n            return nb.Build(), nil\n        }, false)\n\n    if err != nil {\n        return nil, fmt.Errorf("Focused transform error")\n    }\n\n    link := dag.Store.Store(ipld.LinkContext{}, n)\n\n    return &model.DagLink{\n        Path: "/",\n        Cid:  link.String(),\n    }, nil\n}\n\n// Query returns generated.QueryResolver implementation.\nfunc (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }\n\n// Transaction returns generated.TransactionResolver implementation.\nfunc (r *Resolver) Transaction() generated.TransactionResolver { return &transactionResolver{r} }\n\ntype queryResolver struct{ *Resolver }\ntype transactionResolver struct{ *Resolver }\n\n')),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"schema.resolvers.go")," the generator creates code stubs, where you put the DAG operations implementation."),(0,o.kt)("h2",{id:"smart-contract"},"Smart Contract"),(0,o.kt)("p",null,"Next task is to implement an EIP-3668 Durin contract. It works similar to challenge and response scheme, where Alice requests some data or packet to be anchored offchain (in the metadata example, the updated metadata uri and owner)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-solidity"},'\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.7;\n\nimport "@openzeppelin/contracts/access/Ownable.sol";\nimport "@openzeppelin/contracts/token/ERC20/IERC20.sol";\nimport "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";\nimport "@openzeppelin/contracts/token/ERC721/ERC721.sol";\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";\nimport "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";\nimport "@openzeppelin/contracts/utils/Counters.sol";\nimport "./ancon/TrustedOffchainHelper.sol";\n\n//  a NFT secure document\ncontract XDVNFT is\n    ERC721Burnable,\n    ERC721Pausable,\n    ERC721URIStorage,\n    Ownable,\n    IERC721Receiver,\n    TrustedOffchainHelper\n{\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n    IERC20 public stablecoin;\n    address public dagContractOperator;\n    uint256 public serviceFeeForPaymentAddress = 0;\n    uint256 public serviceFeeForContract = 0;\n\n    event Withdrawn(address indexed paymentAddress, uint256 amount);\n\n    event ServiceFeePaid(\n        address indexed from,\n        uint256 paidToContract,\n        uint256 paidToPaymentAddress\n    );\n\n    /**\n     * XDVNFT Data Token\n     */\n    constructor(\n        string memory name,\n        string memory symbol,\n        address tokenERC20\n    ) ERC721(name, symbol) {\n        stablecoin = IERC20(tokenERC20);\n    }\n\n    function setServiceFeeForPaymentAddress(uint256 _fee) public onlyOwner {\n        serviceFeeForPaymentAddress = _fee;\n    }\n\n    function setServiceFeeForContract(uint256 _fee) public onlyOwner {\n        serviceFeeForContract = _fee;\n    }\n\n    /**\n     * @dev Requests a DAG contract offchain execution\n     */\n    function transferURI(address toAddress, uint256 tokenId)\n        external\n        returns (bytes32)\n    {\n        revert OffchainLookup(\n            url,\n            abi.encodeWithSignature(\n                "transferURIWithProof(address toAddress, uint256 tokenId, bytes memory proof)",\n                toAddress,\n                tokenId\n            )\n        );\n    }\n\n    /**\n     * @dev Transfer a XDV Data Token URI with proof\n     */\n    function transferURIWithProof(\n        string memory toAddress,\n        string memory tokenId,\n        bytes memory proof\n    ) public returns (uint256) {\n        bool proofRef = _requestWithProof(toAddress, tokenId, proof);\n                                    \n        require(proofRef, "Invalid proof");\n        (\n            bytes memory metadataCid,\n            bytes memory fromOwner,\n            bytes memory resultCid,\n            bytes memory toOwner,\n            ,\n            ,\n            bytes memory prefix,\n            bytes memory signature\n        ) = abi.decode(\n                proof,\n                (bytes, bytes, bytes, bytes, bytes, bytes, bytes, bytes)\n            );\n        uint256 newItemId = _tokenIds.current();\n        _setTokenURI(newItemId, string(metadataCid));\n        //       _transfer()\n        //send the method name\n        //make set token uri work\n        return newItemId;\n    }\n\n    /**\n     * @dev Requests a DAG contract offchain execution with proof\n     */\n    function _requestWithProof(\n        string memory toAddress,\n        string memory tokenId,\n        bytes memory proof\n    ) internal returns (bool) {\n        (\n            bytes memory metadataCid,\n            bytes memory fromOwner,\n            bytes memory resultCid,\n            bytes memory toOwner,\n            ,\n            ,\n            bytes memory prefix,\n            bytes memory signature\n        ) = abi.decode(\n                proof,\n                (bytes, bytes, bytes, bytes, bytes, bytes, bytes, bytes)\n            );\n\n        if (executed[bytes32(signature)]) {\n            revert("metadata dag transfer:  invalid proof");\n        } else {\n            bytes32 digest = keccak256(\n                abi.encodePacked(\n                    "\\x19Ethereum Signed Message:\\n32",\n                    keccak256(\n                        abi.encodePacked(\n                            metadataCid,\n                            fromOwner,\n                            resultCid,\n                            toOwner,\n                            toAddress,\n                            tokenId,\n                            prefix\n                        )\n                    )\n                )\n            );\n\n            require(\n                isValidProof(digest, signature),\n                "Signer is not the signer of the token"\n            );\n            {\n                executed[bytes32(signature)] = true;\n                emit ProofAccepted(msg.sender, bytes32(signature));\n            }\n            return (true);\n        }\n    }\n\n    /**\n     * @dev Mints a XDV Data Token\n     */\n    function mint(address user, string memory uri) public returns (uint256) {\n        _tokenIds.increment();\n\n        uint256 newItemId = _tokenIds.current();\n        _safeMint(user, newItemId);\n        _setTokenURI(newItemId, uri);\n\n        return newItemId;\n    }\n\n    /**\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\n     * by `operator` from `from`, this function is called.\n     *\n     * It must return its Solidity selector to confirm the token transfer.\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\n     *\n     * The selector can be obtained in Solidity with `IERC721.onERC721Received.selector`.\n     */\n    function onERC721Received(\n        address operator,\n        address from,\n        uint256 tokenId,\n        bytes calldata data\n    ) external returns (bytes4) {\n        return this.onERC721Received.selector;\n    }\n\n    /**\n     * @dev Just overrides the superclass\' function. Fixes inheritance\n     * source: https://forum.openzeppelin.com/t/how-do-inherit-from-erc721-erc721enumerable-and-erc721uristorage-in-v4-of-openzeppelin-contracts/6656/4\n     */\n    function _burn(uint256 tokenId)\n        internal\n        override(ERC721, ERC721URIStorage)\n    {\n        super._burn(tokenId);\n    }\n\n    /**\n     * @dev Just overrides the superclass\' function. Fixes inheritance\n     * source: https://forum.openzeppelin.com/t/how-do-inherit-from-erc721-erc721enumerable-and-erc721uristorage-in-v4-of-openzeppelin-contracts/6656/4\n     */\n    function tokenURI(uint256 tokenId)\n        public\n        view\n        override(ERC721, ERC721URIStorage)\n        returns (string memory)\n    {\n        return super.tokenURI(tokenId);\n    }\n\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal virtual override(ERC721, ERC721Pausable) {\n        require(!paused(), "XDV: Token execution is paused");\n\n        if (from == address(0)) {\n            paymentBeforeMint(msg.sender);\n        }\n\n        super._beforeTokenTransfer(from, to, tokenId);\n    }\n\n    /**\n     * @dev tries to execute the payment when the token is minted.\n     * Reverts if the payment procedure could not be completed.\n     */\n    function paymentBeforeMint(address tokenHolder) internal virtual {\n        // Transfer tokens to pay service fee\n        require(\n            stablecoin.transferFrom(\n                tokenHolder,\n                address(this),\n                serviceFeeForContract\n            ),\n            "XDV: Transfer failed for recipient"\n        );\n\n        emit ServiceFeePaid(\n            tokenHolder,\n            serviceFeeForContract,\n            serviceFeeForPaymentAddress\n        );\n    }\n\n    function withdrawBalance(address payable payee) public onlyOwner {\n        uint256 balance = stablecoin.balanceOf(address(this));\n\n        require(stablecoin.transfer(payee, balance), "XDV: Transfer failed");\n\n        emit Withdrawn(payee, balance);\n    }\n}\n\n')),(0,o.kt)("h2",{id:"onchain-adapter"},"Onchain adapter"),(0,o.kt)("p",null,"The adapter gets called through Node SDK JSON-RPC 2.0 endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'package transfer\n\nimport (\n    "bytes"\n    "context"\n    "crypto/ecdsa"\n    "encoding/hex"\n    "fmt"\n    "math/big"\n\n    "github.com/ethereum/go-ethereum/accounts/abi"\n    "github.com/ethereum/go-ethereum/common/hexutil"\n    "github.com/ethereum/go-ethereum/common/math"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\nfunc SignedProofAbiMethod() abi.Method {\n\n    // uint256Type, _ := abi.NewType("uint256", "", nil)\n    uintType, _ := abi.NewType("uint", "", nil)\n    bytesType, _ := abi.NewType("bytes", "", nil)\n    stringType, _ := abi.NewType("string", "", nil)\n    request := abi.NewMethod(\n        "transferURIWithProof",\n        "transferURIWithProof",\n        abi.Function,\n        "nonpayable",\n        false,\n        false,\n        abi.Arguments{{\n            Name:    "metadataCid",\n            Type:    stringType,\n            Indexed: false,\n        },\n            {\n                Name:    "fromOwner",\n                Type:    stringType,\n                Indexed: false,\n            },\n            {\n                Name:    "resultCid",\n                Type:    stringType,\n                Indexed: false,\n            },\n            {\n                Name:    "toOwner",\n                Type:    stringType,\n                Indexed: false,\n            },\n            {\n                Name:    "toAddress",\n                Type:    stringType,\n                Indexed: false,\n            },\n            {\n                Name:    "tokenId",\n                Type:    stringType,\n                Indexed: false,\n            },\n            {\n                Name:    "prefix",\n                Type:    stringType,\n                Indexed: false,\n            },\n            {\n                Name:    "signature",\n                Type:    bytesType,\n                Indexed: false,\n            },\n        },\n        abi.Arguments{abi.Argument{\n            Type: uintType,\n        }},\n    )\n\n    return request\n}\n\ntype OnchainAdapter struct {\n    PrivateKey *ecdsa.PrivateKey\n    ChainName  string\n    ChainID    int\n}\n\nfunc NewOnchainAdapter(pk *ecdsa.PrivateKey) OnchainAdapter {\n\n    return OnchainAdapter{\n        PrivateKey: pk,\n        ChainName:  "Ethereum",\n        ChainID:    5,\n    }\n}\n\n// https://gist.github.com/miguelmota/bc4304bb21a8f4cc0a37a0f9347b8bbb\nfunc encodePacked(input ...[]byte) []byte {\n    return bytes.Join(input, nil)\n}\n\nfunc encodeBytesString(v string) []byte {\n    decoded, err := hex.DecodeString(v)\n    if err != nil {\n        panic(err)\n    }\n    return decoded\n}\n\nfunc encodeUint256(v string) []byte {\n    bn := new(big.Int)\n    bn.SetString(v, 10)\n    return math.U256Bytes(bn)\n}\n\nfunc encodeUint256Array(arr []string) []byte {\n    var res [][]byte\n    for _, v := range arr {\n        b := encodeUint256(v)\n        res = append(res, b)\n    }\n\n    return bytes.Join(res, nil)\n}\nfunc (adapter *OnchainAdapter) ApplyRequestWithProof(\n    ctx context.Context,\n    metadataCid string,\n    resultCid string,\n    fromOwner string,\n    toOwner string,\n    toAddress string,\n    tokenId string,\n    prefix string,\n) (hexutil.Bytes, string, error) {\n\n    id := (tokenId)\n    unsignedProofData := encodePacked(\n        []byte("\\x19Ethereum Signed Message:\\n32"),\n        // Proof\n        crypto.Keccak256(encodePacked(\n            // Current metadata cid\n            []byte(metadataCid),\n            // Current owner (opaque)\n            []byte(fromOwner),\n            // Updated metadata cid\n            []byte(resultCid),\n            // New owner address\n            []byte(toOwner),\n            // Token Address\n            []byte(toAddress),\n            // Token Id\n            []byte(id),\n            // Contract Prefix\n            []byte(prefix)),\n        ))\n\n    hash := crypto.Keccak256Hash(unsignedProofData)\n\n    signature, err := crypto.Sign(hash.Bytes(), adapter.PrivateKey)\n    if err != nil {\n        return nil, "", fmt.Errorf("signing failed")\n    }\n\n    signedProofData, err := SignedProofAbiMethod().Inputs.Pack(\n        metadataCid, fromOwner, resultCid, toOwner, toAddress, id, prefix, signature)\n\n    if err != nil {\n        return nil, "", fmt.Errorf("packing for signature proof generation failed")\n    }\n\n    return signedProofData, resultCid, nil\n}\n\n')),(0,o.kt)("h2",{id:"generate-client-bindings-for-schemas"},"Generate client bindings for schemas"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"generateClientModels.sh")," and then update   ",(0,o.kt)("inlineCode",{parentName:"p"},"durin.go")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'\npackage durin\n\nimport (\n    "context"\n    "encoding/json"\n    "fmt"\n\n    "github.com/anconprotocol/node/adapters/ethereum/erc721/transfer"\n    "github.com/anconprotocol/node/x/anconsync/handler/graphql"\n    "github.com/ethereum/go-ethereum/common/hexutil"\n)\n\ntype DurinAPI struct {\n    Namespace string\n    Version   string\n    Service   *DurinService\n    Public    bool\n}\n\ntype DurinService struct {\n    Adapter   *transfer.OnchainAdapter\n    GqlClient *graphql.Client\n}\n\nfunc NewDurinAPI(evm transfer.OnchainAdapter, gqlClient *graphql.Client) *DurinAPI {\n    return &DurinAPI{\n        Namespace: "durin",\n        Version:   "1.0",\n        Service: &DurinService{\n            Adapter:   &evm,\n            GqlClient: gqlClient,\n        },\n        Public: true,\n    }\n}\n\nfunc msgHandler(ctx *DurinService, to string, name string, args map[string]string) (hexutil.Bytes, string, error) {\n    switch name {\n    default:\n        tokenId := args["tokenId"]\n        input := graphql.MetadataTransactionInput{\n            Path:     "/",\n            Cid:      args["metadataCid"],\n            Owner:    args["fromOwner"],\n            NewOwner: args["toOwner"],\n        }\n        // Send graphql mutation for IPLD DAG computing\n        res, err := ctx.GqlClient.TransferOwnership(context.Background(), input)\n        if err != nil {\n            return nil, "", fmt.Errorf("transfer ownership reverted")\n        }\n        metadataCid := args["metadataCid"]\n        newCid := res.Metadata.Cid\n        newOwner := args["toOwner"]\n        fromOwner := args["fromOwner"]\n        prefix := args["prefix"]\n\n        // Apply signature to create proof\n        txdata, resultCid, err := ctx.Adapter.ApplyRequestWithProof(context.Background(),\n            metadataCid,\n            newCid,\n            fromOwner,\n            newOwner,\n            to,\n            tokenId,\n            prefix)\n        if err != nil {\n            return nil, "", fmt.Errorf("request with proof raw tx failed")\n        }\n        return txdata, resultCid, nil\n    }\n}\n\nfunc (s *DurinService) Call(to string, from string, data json.RawMessage, abis json.RawMessage) hexutil.Bytes {\n\n    p := []byte(data)\n    var values map[string]string\n    val := make(map[string]string, 2)\n    err := json.Unmarshal(p, &values)\n    if err != nil {\n        return hexutil.Bytes(hexutil.Encode([]byte(fmt.Errorf("fail unpack data").Error())))\n    }\n    // Execute graphql\n    txdata, resultCid, err := msgHandler(s, to, "", values)\n    if err != nil {\n        return hexutil.Bytes(hexutil.Encode([]byte(fmt.Errorf("reverted").Error())))\n    }\n\n    val["txdata"] = txdata.String()\n    val["resultCid"] = resultCid\n    jsonval, err := json.Marshal(val)\n    if err != nil {\n        return hexutil.Bytes(hexutil.Encode([]byte(fmt.Errorf("reverted, json marshal").Error())))\n    }\n    return jsonval\n}\n\n')))}p.isMDXComponent=!0}}]);