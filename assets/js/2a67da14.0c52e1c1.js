"use strict";(self.webpackChunkancon_docs=self.webpackChunkancon_docs||[]).push([[278],{2099:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var s=t(7462),r=t(3366),i=(t(7294),t(3905)),n=["components"],a={sidebar_position:3},c="EVM to Flow cross ownership",l={unversionedId:"tutorials/crossownership-flow",id:"tutorials/crossownership-flow",isDocsHomePage:!1,title:"EVM to Flow cross ownership",description:"Cross chain recipe",source:"@site/docs/tutorials/crossownership-flow.md",sourceDirName:"tutorials",slug:"/tutorials/crossownership-flow",permalink:"/docs/tutorials/crossownership-flow",editUrl:"https://github.com/anconprotocol/ancon-docs/docs/tutorials/crossownership-flow.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"EVM to EVM cross ownership",permalink:"/docs/tutorials/crossownership"}},u=[{value:"Cross chain recipe",id:"cross-chain-recipe",children:[],level:2},{value:"Results",id:"results",children:[],level:2},{value:"Use cases",id:"use-cases",children:[],level:2}],p={toc:u};function d(e){var o=e.components,t=(0,r.Z)(e,n);return(0,i.kt)("wrapper",(0,s.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"evm-to-flow-cross-ownership"},"EVM to Flow cross ownership"),(0,i.kt)("h2",{id:"cross-chain-recipe"},"Cross chain recipe"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create metadata"),(0,i.kt)("li",{parentName:"ol"},"Add UUID, and Sources ","[https://api.ancon.did.pa/..., ipfs://..., swarm://...]"),(0,i.kt)("li",{parentName:"ol"},"Add didOwner formatted as ethr:did"),(0,i.kt)("li",{parentName:"ol"},"POST /dag"),(0,i.kt)("li",{parentName:"ol"},"GET /proof"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"mintWithProof(moniker, UUID, uri)")," // make sure DAG network is supported in the destination chain")),(0,i.kt)("h2",{id:"results"},"Results"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 cross chain metadata (same cid hash)"),(0,i.kt)("li",{parentName:"ul"},"Same token ID in each chain"),(0,i.kt)("li",{parentName:"ul"},"Same init owner")),(0,i.kt)("h2",{id:"use-cases"},"Use cases"),(0,i.kt)("p",null,"Cross chain nft fragmentation"))}d.isMDXComponent=!0}}]);