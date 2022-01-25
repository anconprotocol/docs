"use strict";(self.webpackChunkancon_docs=self.webpackChunkancon_docs||[]).push([[615],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2801:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:2},c="Using a Verifiable DAG store",s={unversionedId:"api/metadata",id:"api/metadata",isDocsHomePage:!1,title:"Using a Verifiable DAG store",description:"Ancon Protocol Node is an Layer 2, offchain DAG Store with verifiable data. Anyone can use it once they registered a DID with the L2, which will generate a vector commitment proof, if indeed the register exists or not in the merkle tree.",source:"@site/docs/api/metadata.md",sourceDirName:"api",slug:"/api/metadata",permalink:"/docs/api/metadata",editUrl:"https://github.com/anconprotocol/ancon-docs/docs/api/metadata.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"API Reference",permalink:"/docs/api/reference"},next:{title:"Trusted offchain gateways",permalink:"/docs/api/durin"}},p=[{value:"Staking and Validators",id:"staking-and-validators",children:[],level:2},{value:"Onchain metadata",id:"onchain-metadata",children:[{value:"Smart contracts",id:"smart-contracts",children:[],level:3},{value:"Client",id:"client",children:[],level:3}],level:2},{value:"AnconProtocol.sol",id:"anconprotocolsol",children:[],level:2},{value:"Metadata JSON Schema",id:"metadata-json-schema",children:[{value:"Example",id:"example",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-a-verifiable-dag-store"},"Using a Verifiable DAG store"),(0,a.kt)("p",null,"Ancon Protocol Node is an Layer 2, offchain DAG Store with verifiable data. Anyone can use it once they registered a DID with the L2, which will generate a vector commitment proof, if indeed the register exists or not in the merkle tree."),(0,a.kt)("p",null,"Because there is no consensus involved, we can only be sure that it was signed by someone using a DID identifier. To be able to have a more decentralized feature, is recommended to anchor both DID and proofs in a ICS23 Vector Commitment compatible smart contract chain."),(0,a.kt)("p",null,"Once is submitted to a onchain solution, any offchain operation can be properly validated onchain for any proofs."),(0,a.kt)("h2",{id:"staking-and-validators"},"Staking and Validators"),(0,a.kt)("p",null,"Ancon Protocol will implement a smart contract based validator approach, where the incentives will be to batch proofs operations, validate them, and then submit or commit to protocol header updates. Using $ANCON token, validators will be able to stake and obtain a income by supporting the protocol."),(0,a.kt)("h2",{id:"onchain-metadata"},"Onchain metadata"),(0,a.kt)("p",null,"To use DID identifier with onchain metadata:"),(0,a.kt)("h3",{id:"smart-contracts"},"Smart contracts"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install or place ",(0,a.kt)("inlineCode",{parentName:"li"},"AnconProtocol.sol")),(0,a.kt)("li",{parentName:"ol"},"The NFT Dapp or App will use these calls: ",(0,a.kt)("inlineCode",{parentName:"li"},"verifyProof"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"submitPacketWithProof"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"enrollL2Account")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"updateProtocolHeader"),"."),(0,a.kt)("li",{parentName:"ol"},"Before starting, create a DID account and obtain the CID and username of the DID."),(0,a.kt)("li",{parentName:"ol"},"Execute a hybrid smart contract and send the result as input for the next call."),(0,a.kt)("li",{parentName:"ol"},"Prepare a Packet, which is the cross chain message, fill the packet message with the values returned from node API."),(0,a.kt)("li",{parentName:"ol"},"Use your recently activated DID identifier to sign the message , and send it to  ",(0,a.kt)("inlineCode",{parentName:"li"},"submitPacketWithProof")," for transaction."),(0,a.kt)("li",{parentName:"ol"},"Once proof is submitted to L1, your packet is validated and anchored.")),(0,a.kt)("h3",{id:"client"},"Client"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use Node API to registerd DIDs."),(0,a.kt)("li",{parentName:"ol"},"Following API requires DID authentication:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Any write DAG operation (JSON or CBOR)"),(0,a.kt)("li",{parentName:"ul"},"Any hybrid smart contract transaction")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Following onchain operations requires gas and protocol fees:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enrollL2Acccount")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"submitPacketWithProof")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"updateProtocolHeader"))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Verifiable DID with KYC (only Panama) has a KYC cost to verify ID.")),(0,a.kt)("h2",{id:"anconprotocolsol"},"AnconProtocol.sol"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.7;\nimport "../ics23/ics23.sol";\n\ncontract AnconProtocol is ICS23 {\n    address public owner;\n    bytes public relayNetworkHash;\n\n    mapping(bytes => bytes) public accountProofs;\n    mapping(address => bytes) public accountByAddrProofs;\n    mapping(bytes => bool) public proofs;\n\n    event ProofPacketSubmitted(bytes key, bytes packet);\n    event EnrollL2Account(bool enrolledStatus, bytes key, bytes value);\n\n    constructor(address _onlyOwner) public {\n        owner = _onlyOwner;\n    }\n\n\n    // Register L2 Account\n    function enrollL2Account(\n        bytes memory key, // proof key "/anconprotocol/root/user/diddocid"\n        bytes memory did, // proof value did doc id\n        ExistenceProof memory proof\n    ) public payable returns (bool) {\n        require(verifyProof(proof));\n        accountProofs[(did)] = key;\n        accountByAddrProofs[msg.sender] = key;\n        emit EnrollL2Account(true, key, did);\n        return true;\n    }\n\n\n\n    // Updates latest hash from a node or subgraph, only owner using updater service\n    function updateProtocolHeader(bytes memory rootHash) public returns (bool) {\n        require(msg.sender == owner);\n        relayNetworkHash = rootHash;\n        return true;\n    }\n\n    // Submits packet with proof and emits event\n    function submitPacketWithProof(\n        bytes memory key,\n        bytes memory packet,\n        ExistenceProof memory proof\n    ) public payable returns (bool) {\n        // 1. Verify\n        require(verifyProof(proof));\n\n        proofs[key] = true;\n\n        // 2. Submit event\n        emit ProofPacketSubmitted(key, packet);\n\n        return true;\n    }\n\n    // Verifies vector commitment existence in remote merkle tree, given a last updated hash submitted by trusted party.\n    function verifyProof(ExistenceProof memory exProof)\n        public\n        view\n        returns (bool)\n    {\n        // Verify membership\n        verify(\n            exProof,\n            getIavlSpec(),\n            relayNetworkHash,\n            exProof.key,\n            exProof.value\n        );\n\n        return true;\n    }\n\n    // Calculates a root hash from an existence proof\n    function queryRootCalculation(ExistenceProof memory proof)\n        public\n        pure\n        returns (bytes memory)\n    {\n        return bytes(calculate(proof));\n    }\n}\n')),(0,a.kt)("h2",{id:"metadata-json-schema"},"Metadata JSON Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://json-schema.org/draft/2020-12/schema",\n  "$id": "https://ancon.did.pa/v0/protocol/metadata",\n  "title": "metadata",\n  "description": "Ancon Protocol metadata schema",\n  "type": "object",\n  "properties": {\n      "name": {\n          "type": "string",\n          "description": "Identifies the asset to which this token represents",\n      },\n      "description": {\n          "type": "string",\n          "description": "Describes the asset to which this token represents",\n      },\n      "image": {\n          "type": "string",\n          "description": "A URI pointing to a resource with mime type image/* representing the asset to which this token represents.",\n      },\n      "sources": {\n          "type": "cid array",\n          "description": "Current intellectual property",\n      },\n      "owner": {\n          "type": "string",\n          "description": "The owner is a DID identifier",\n      },\n      "parent": {\n          "type": "cid",\n          "description": "Direct ascendant of the current intellectual property",\n      }\n  },\n  "required": [ "name", "description", "image", "sources" ]\n}\n')),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},'\nconst payload = {\n  "name": "XDV metadata sample",\n  "description": "testing sample",\n  "image": "https://explore.ipld.io/#/explore/QmSnuWmxptJZdLJpKRarxBMS2Ju2oANVrgbr2xWbie9b2D",\n  "sources": [\n    "QmSnuWmxptJZdLJpKRarxBMS2Ju2oANVrgbr2xWbie9b2D",\n    "z8mWaJHXieAVxxLagBpdaNWFEBKVWmMiE",\n    "QmdmQXB2mzChmMeKY47C43LxUdg1NDJ5MWcKMKxDu7RgQm",\n  ],\n};\n\n\n')))}u.isMDXComponent=!0}}]);