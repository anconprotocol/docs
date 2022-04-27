"use strict";(self.webpackChunkancon_docs=self.webpackChunkancon_docs||[]).push([[688],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,k=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?o.createElement(k,l(l({ref:t},s),{},{components:n})):o.createElement(k,l({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<a;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7382:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={id:"index",slug:"/",sidebar_position:1},c="Ancon Protocol",d={unversionedId:"index",id:"version-1.5.0/index",isDocsHomePage:!1,title:"Ancon Protocol",description:"Protocol for secure offchain data economy",source:"@site/versioned_docs/version-1.5.0/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/anconprotocol/ancon-docs/versioned_docs/version-1.5.0/intro.md",tags:[],version:"1.5.0",sidebarPosition:1,frontMatter:{id:"index",slug:"/",sidebar_position:1},sidebar:"version-1.5.0/tutorialSidebar",next:{title:"WIP - TODO",permalink:"/docs/api/reference"}},s=[{value:"Protocol for secure offchain data economy",id:"protocol-for-secure-offchain-data-economy",children:[],level:3},{value:"Ancon Protocol Node - L2 Gateway",id:"ancon-protocol-node---l2-gateway",children:[],level:2},{value:"Testnet",id:"testnet",children:[{value:"Protocol Contract - AnconProtocol.sol",id:"protocol-contract---anconprotocolsol",children:[],level:3},{value:"XDVNFT.sol",id:"xdvnftsol",children:[],level:3},{value:"DAG Network",id:"dag-network",children:[],level:3},{value:"Features incubator dapp",id:"features-incubator-dapp",children:[],level:3}],level:2},{value:"Mainnet",id:"mainnet",children:[{value:"Protocol Contract - AnconProtocol.sol",id:"protocol-contract---anconprotocolsol-1",children:[],level:3},{value:"Ancon Token",id:"ancon-token",children:[],level:3},{value:"XDVNFT.sol",id:"xdvnftsol-1",children:[],level:3},{value:"DAG Network",id:"dag-network-1",children:[],level:3},{value:"Ancon Marketplace",id:"ancon-marketplace",children:[],level:3}],level:2},{value:"Source code",id:"source-code",children:[],level:2},{value:"API Reference",id:"api-reference",children:[],level:2},{value:"API - Core Features",id:"api---core-features",children:[],level:2},{value:"Tutorials",id:"tutorials",children:[],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],u={toc:s};function p(e){var t=e.components,i=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ancon-protocol"},"Ancon Protocol"),(0,a.kt)("h3",{id:"protocol-for-secure-offchain-data-economy"},"Protocol for secure offchain data economy"),(0,a.kt)("p",null,"Ancon protocol is a new kind of SDK and technology that can be used to implement secure offchain data integrations using best of breed offchain protocols like ipfs and any blockchain with smart contracts support."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AnconChainIntegrations",src:n(6553).Z})),(0,a.kt)("h2",{id:"ancon-protocol-node---l2-gateway"},"Ancon Protocol Node - L2 Gateway"),(0,a.kt)("p",null,"Node manages offchain data integrations and trusted offchain gateways.  It has DID web and DID key, Graphsync, and dag-json / dag-cbor technology support."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AnconBasicArquitecture",src:n(1268).Z})),(0,a.kt)("h2",{id:"testnet"},"Testnet"),(0,a.kt)("h3",{id:"protocol-contract---anconprotocolsol"},"Protocol Contract - AnconProtocol.sol"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BSC Testnet"),": 0x3A942779cBc73D5DA159DDcCe3FE9c1A16E5Fcba")),(0,a.kt)("h3",{id:"xdvnftsol"},"XDVNFT.sol"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BSC Testnet"),": 0xe756ee6397CAE88E7d3bfec73514D215E2a36f09")),(0,a.kt)("h3",{id:"dag-network"},"DAG Network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Address"),": 0xA6c53D3FE40ec6966653dE6503b079Dba306f589"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Moniker"),": tensta")),(0,a.kt)("h3",{id:"features-incubator-dapp"},"Features incubator dapp"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DApp"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"https://mint.ancon.did.pa")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"DAI Token BSC Testnet"),": 0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867")),(0,a.kt)("h2",{id:"mainnet"},"Mainnet"),(0,a.kt)("h3",{id:"protocol-contract---anconprotocolsol-1"},"Protocol Contract - AnconProtocol.sol"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BSC Mainnet"),": 0x190cd8F5C699FCA0762fF23877a06fD2E8ae3Db2")),(0,a.kt)("h3",{id:"ancon-token"},"Ancon Token"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BSC Mainnet"),": 0x217f3bdbb0358082c99e1de01c47d1b2dba45ad5")),(0,a.kt)("h3",{id:"xdvnftsol-1"},"XDVNFT.sol"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BSC Mainnet"),": Pending release")),(0,a.kt)("h3",{id:"dag-network-1"},"DAG Network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Address"),": pending"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Moniker"),": anconprotocol")),(0,a.kt)("h3",{id:"ancon-marketplace"},"Ancon Marketplace"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pending")),(0,a.kt)("h2",{id:"source-code"},"Source code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/anconprotocol/node"},"Ancon Protocol Node"))),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/reference"},"Ancon Protocol Node"))),(0,a.kt)("h2",{id:"api---core-features"},"API - Core Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/metadata"},"Verifiable DAG Store"))),(0,a.kt)("h2",{id:"tutorials"},"Tutorials"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/networks"},"Relayers, Networks and Nodes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/crossownership"},"EVM to EVM cross ownership metadata transfer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/crossownership-flow"},"EVM to Flow cross ownership metadata transfer"))),(0,a.kt)("h2",{id:"use-cases"},"Use cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/data-unions"},"Data unions"))))}p.isMDXComponent=!0},1268:function(e,t,n){t.Z=n.p+"assets/images/anconbasicarquitecture-e30f70f765a86fe49c6c55af4f5a1bc0.png"},6553:function(e,t,n){t.Z=n.p+"assets/images/anconintegrations-f546cd510754c65921dd79573880c82d.png"}}]);