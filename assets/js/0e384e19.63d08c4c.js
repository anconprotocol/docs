"use strict";(self.webpackChunkancon_docs=self.webpackChunkancon_docs||[]).push([[671],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(o),f=r,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return o?n.createElement(m,c(c({ref:t},u),{},{components:o})):n.createElement(m,c({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=o[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},9881:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=o(7462),r=o(3366),a=(o(7294),o(3905)),c=["components"],i={id:"index",slug:"/",sidebar_position:1},l="Ancon Protocol",s={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Ancon Protocol",description:"Hybrid Smart Contracts protocol for secure offchain data economy",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/anconprotocol/ancon-docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API Reference",permalink:"/docs/api/reference"}},u=[{value:"Hybrid Smart Contracts protocol for secure offchain data economy",id:"hybrid-smart-contracts-protocol-for-secure-offchain-data-economy",children:[],level:3},{value:"Ancon Protocol Node - L2 Gateway",id:"ancon-protocol-node---l2-gateway",children:[],level:2},{value:"Testnet contracts - AnconProtocol.sol",id:"testnet-contracts---anconprotocolsol",children:[],level:2},{value:"DAG Store Root Key - Ancon Protocol Node",id:"dag-store-root-key---ancon-protocol-node",children:[],level:2},{value:"Source code",id:"source-code",children:[],level:2},{value:"API Reference",id:"api-reference",children:[],level:2},{value:"API - Core Features",id:"api---core-features",children:[],level:2},{value:"Tutorials",id:"tutorials",children:[],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],d={toc:u};function p(e){var t=e.components,o=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ancon-protocol"},"Ancon Protocol"),(0,a.kt)("h3",{id:"hybrid-smart-contracts-protocol-for-secure-offchain-data-economy"},"Hybrid Smart Contracts protocol for secure offchain data economy"),(0,a.kt)("p",null,"Ancon protocol is a new kind of SDK and technology that can be used to implement secure offchain data integrations using best of breed offchain protocols like ipfs and any blockchain with smart contracts support."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1248071/147708647-f0e25a24-8c54-4a62-923e-5a73bb0c9e60.png",alt:"AnconProtocolProducts"})),(0,a.kt)("h2",{id:"ancon-protocol-node---l2-gateway"},"Ancon Protocol Node - L2 Gateway"),(0,a.kt)("p",null,"Node manages offchain data integrations and trusted offchain gateways.  It has DID web and DID key, Graphsync, and dag-json / dag-cbor technology support."),(0,a.kt)("h2",{id:"testnet-contracts---anconprotocolsol"},"Testnet contracts - AnconProtocol.sol"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Ropsten"),": 0x067f04932a4808124541521e940fd2d21a44feeb"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BSC Testnet"),": 0x3AD9090a3E3af4e288805d8c020F4CCd20212036")),(0,a.kt)("h2",{id:"dag-store-root-key---ancon-protocol-node"},"DAG Store Root Key - Ancon Protocol Node"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"bafyreibqiqbcafnzmjqmv3iy7uzjiimneiq2cqsp3bmhtcjbrwyqwvywbi")),(0,a.kt)("h2",{id:"source-code"},"Source code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/anconprotocol/node"},"Ancon Protocol Node"))),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/reference"},"Ancon Protocol Node"))),(0,a.kt)("h2",{id:"api---core-features"},"API - Core Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/metadata"},"Verifiable DAG Store")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/durin"},"Cross chain messaging"))),(0,a.kt)("h2",{id:"tutorials"},"Tutorials"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/crossownership"},"EVM to EVM cross ownership metadata transfer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/crossownership-flow"},"EVM to Flow cross ownership metadata transfer"))),(0,a.kt)("h2",{id:"use-cases"},"Use cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/data-unions"},"Data unions"))))}p.isMDXComponent=!0}}]);