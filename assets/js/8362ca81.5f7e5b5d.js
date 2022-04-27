"use strict";(self.webpackChunkancon_docs=self.webpackChunkancon_docs||[]).push([[309],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4277:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),s=["components"],a={sidebar_position:2},c="EVM to EVM cross ownership",l={unversionedId:"tutorials/crossownership",id:"version-1.5.0/tutorials/crossownership",isDocsHomePage:!1,title:"EVM to EVM cross ownership",description:"Cross chain recipe",source:"@site/versioned_docs/version-1.5.0/tutorials/crossownership.md",sourceDirName:"tutorials",slug:"/tutorials/crossownership",permalink:"/docs/tutorials/crossownership",editUrl:"https://github.com/anconprotocol/ancon-docs/versioned_docs/version-1.5.0/tutorials/crossownership.md",tags:[],version:"1.5.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"version-1.5.0/tutorialSidebar",previous:{title:"Ancon Protocol Decentrallized Infrastructure",permalink:"/docs/tutorials/networks"},next:{title:"EVM to Flow cross ownership",permalink:"/docs/tutorials/crossownership-flow"}},u=[{value:"Cross chain recipe",id:"cross-chain-recipe",children:[],level:2},{value:"Results",id:"results",children:[],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],p={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"evm-to-evm-cross-ownership"},"EVM to EVM cross ownership"),(0,i.kt)("h2",{id:"cross-chain-recipe"},"Cross chain recipe"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create metadata"),(0,i.kt)("li",{parentName:"ol"},"Add UUID, and Sources ","[https://api.ancon.did.pa/..., ipfs://..., swarm://...]"),(0,i.kt)("li",{parentName:"ol"},"Add didOwner formatted as ethr:did"),(0,i.kt)("li",{parentName:"ol"},"POST /dag"),(0,i.kt)("li",{parentName:"ol"},"GET /proof"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"mintWithProof(moniker, UUID, uri)")," // make sure DAG network is supported in the destination chain")),(0,i.kt)("h2",{id:"results"},"Results"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 cross chain metadata (same cid hash)"),(0,i.kt)("li",{parentName:"ul"},"Same token ID in each chain"),(0,i.kt)("li",{parentName:"ul"},"Same init owner")),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,"Cross chain nft fragmentation"))}d.isMDXComponent=!0}}]);