"use strict";(self.webpackChunkancon_docs=self.webpackChunkancon_docs||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,c(c({ref:t},u),{},{components:r})):n.createElement(m,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={slug:1,sidebar_position:1},l="Ancon Protocol",s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Ancon Protocol",description:"Hybrid Smart Contracts protocol for secure offchain data economy",source:"@site/docs/intro.md",sourceDirName:".",slug:"/1",permalink:"/docs/1",editUrl:"https://github.com/anconprotocol/ancon-docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"1",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"API Reference",permalink:"/docs/api/reference"}},u=[{value:"Hybrid Smart Contracts protocol for secure offchain data economy",id:"hybrid-smart-contracts-protocol-for-secure-offchain-data-economy",children:[],level:3},{value:"API Reference",id:"api-reference",children:[],level:2},{value:"API - Core Features",id:"api---core-features",children:[],level:2},{value:"Tutorials",id:"tutorials",children:[],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ancon-protocol"},"Ancon Protocol"),(0,a.kt)("h3",{id:"hybrid-smart-contracts-protocol-for-secure-offchain-data-economy"},"Hybrid Smart Contracts protocol for secure offchain data economy"),(0,a.kt)("p",null,"Ancon protocol is a new kind of SDK and technology that can be used to implement secure offchain data integrations using best of breed offchain protocols like ipfs and any blockchain with smart contracts support ."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/reference"},"Ancon Protocol node"))),(0,a.kt)("h2",{id:"api---core-features"},"API - Core Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/metadata"},"DAG compatible schema onchain metadata")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/durin"},"Cross chain transactions with trusted offchain gateways")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/ipld"},"Developing IPLD operations with GraphQL")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api/graphsync"},"Working with subgraphs using Graphsync protocol"))),(0,a.kt)("h2",{id:"tutorials"},"Tutorials"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/crossownership"},"EVM to EVM cross ownership metadata transfer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/crossownership-flow"},"EVM to Flow cross ownership metadata transfer"))),(0,a.kt)("h2",{id:"use-cases"},"Use cases"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/data-unions"},"Data unions"))))}f.isMDXComponent=!0}}]);