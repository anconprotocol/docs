"use strict";(self.webpackChunkancon_docs=self.webpackChunkancon_docs||[]).push([[671],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?o.createElement(h,c(c({ref:t},u),{},{components:n})):o.createElement(h,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),c=["components"],i={id:"index",slug:"/",sidebar_position:1},l="Ancon Protocol",s={unversionedId:"index",id:"index",isDocsHomePage:!1,title:"Ancon Protocol",description:"Hybrid Smart Contracts protocol for secure offchain data economy",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/anconprotocol/ancon-docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"index",slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API Reference",permalink:"/docs/api/reference"}},u=[{value:"Hybrid Smart Contracts protocol for secure offchain data economy",id:"hybrid-smart-contracts-protocol-for-secure-offchain-data-economy",children:[],level:3},{value:"Ancon Protocol Chain - Polygon SDK",id:"ancon-protocol-chain---polygon-sdk",children:[],level:2},{value:"Ancon Protocol Node - L2 Gateway",id:"ancon-protocol-node---l2-gateway",children:[],level:2},{value:"Source code",id:"source-code",children:[],level:2},{value:"API Reference",id:"api-reference",children:[],level:2},{value:"API - Core Features",id:"api---core-features",children:[],level:2},{value:"Tutorials",id:"tutorials",children:[],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ancon-protocol"},"Ancon Protocol"),(0,a.kt)("h3",{id:"hybrid-smart-contracts-protocol-for-secure-offchain-data-economy"},"Hybrid Smart Contracts protocol for secure offchain data economy"),(0,a.kt)("p",null,"Ancon protocol is a new kind of SDK and technology that can be used to implement secure offchain data integrations using best of breed offchain protocols like ipfs and any blockchain with smart contracts support."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/1248071/145845629-fc2b7e0d-4877-474e-87cb-ef205e35e159.png",alt:"Ancon_Products"})),(0,a.kt)("h2",{id:"ancon-protocol-chain---polygon-sdk"},"Ancon Protocol Chain - Polygon SDK"),(0,a.kt)("p",null,"Chain will host consensus related use cases for data economy. It is an EVM implementation which uses Polygon SDK and has Ancon Protocol libraries to work with DAGs and Graphsync. It supports Solidity smart contracts and has an experimental implementation for Rust contracts."),(0,a.kt)("h2",{id:"ancon-protocol-node---l2-gateway"},"Ancon Protocol Node - L2 Gateway"),(0,a.kt)("p",null,"Node manages offchain data integrations and trusted offchain gateways.  It has DID web and DID key, Graphsync, and dag-json / dag-cbor technology support."),(0,a.kt)("h2",{id:"source-code"},"Source code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/anconprotocol/chain"},"Ancon Protocol Chain")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/anconprotocol/node"},"Ancon Protocol Node"))),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ancon Protocol Chain - Polygon SDK"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/reference"},"Ancon Protocol Node"))),(0,a.kt)("h2",{id:"api---core-features"},"API - Core Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/metadata"},"DAG compatible schema onchain metadata")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/durin"},"Cross chain transactions with trusted offchain gateways")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/ipld"},"Developing IPLD operations with GraphQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/graphsync"},"Working with subgraphs using Graphsync protocol"))),(0,a.kt)("h2",{id:"tutorials"},"Tutorials"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/crossownership"},"EVM to EVM cross ownership metadata transfer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/crossownership-flow"},"EVM to Flow cross ownership metadata transfer"))),(0,a.kt)("h2",{id:"use-cases"},"Use cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/data-unions"},"Data unions"))))}d.isMDXComponent=!0}}]);