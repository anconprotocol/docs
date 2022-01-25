"use strict";(self.webpackChunkancon_docs=self.webpackChunkancon_docs||[]).push([[688],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=a,h=d["".concat(c,".").concat(f)]||d[f]||l[f]||o;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2143:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],s={sidebar_position:3},c="Trusted offchain gateways",p={unversionedId:"api/durin",id:"api/durin",isDocsHomePage:!1,title:"Trusted offchain gateways",description:"Ancon Protocol node can be used to integrate onchain and offchain sources using EIP-3668 Durin or also called Trusted Offchain gateway. Further in Subgraph networks chapter, we'll revisit this feature as we replace REST with Graphsync.",source:"@site/docs/api/durin.md",sourceDirName:"api",slug:"/api/durin",permalink:"/docs/api/durin",editUrl:"https://github.com/anconprotocol/ancon-docs/docs/api/durin.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using a Verifiable DAG store",permalink:"/docs/api/metadata"},next:{title:"IPLD Operations",permalink:"/docs/api/ipld"}},u=[{value:"What is trustless and trusted",id:"what-is-trustless-and-trusted",children:[],level:2},{value:"Design and Architecture of a Hybrid Smart Contract",id:"design-and-architecture-of-a-hybrid-smart-contract",children:[],level:2},{value:"Create Rust GraphQL Query and Mutations",id:"create-rust-graphql-query-and-mutations",children:[],level:2},{value:"DAG Operations or Mutation",id:"dag-operations-or-mutation",children:[],level:2},{value:"Smart Contract APIs",id:"smart-contract-apis",children:[],level:2}],l={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"trusted-offchain-gateways"},"Trusted offchain gateways"),(0,o.kt)("p",null,"Ancon Protocol node can be used to integrate onchain and offchain sources using EIP-3668 Durin or also called Trusted Offchain gateway. Further in ",(0,o.kt)("inlineCode",{parentName:"p"},"Subgraph networks")," chapter, we'll revisit this feature as we replace REST with Graphsync."),(0,o.kt)("h2",{id:"what-is-trustless-and-trusted"},"What is trustless and trusted"),(0,o.kt)("p",null,"A trustless setting onchain means the consensus of a blockchain is enough to validate a transaction is valid and has no bad behavior."),(0,o.kt)("p",null,"In cross chain use cases, there are many to accomplish this, one is with atomic swaps, which we'll use in parts, other is with ZK technology and other with protocols that are based on Merkle Proofs."),(0,o.kt)("h2",{id:"design-and-architecture-of-a-hybrid-smart-contract"},"Design and Architecture of a Hybrid Smart Contract"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Hybrid Smart Contracts")," is the term used for integrating both offchain and onchain seamlessly in a secure way."),(0,o.kt)("p",null,"Ancon Protocol Node SDK uses a set of technologies, the developer should have a good grasp of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go language"),(0,o.kt)("li",{parentName:"ul"},"IPLD"),(0,o.kt)("li",{parentName:"ul"},"GraphQL"),(0,o.kt)("li",{parentName:"ul"},"Rust")),(0,o.kt)("h2",{id:"create-rust-graphql-query-and-mutations"},"Create Rust GraphQL Query and Mutations"),(0,o.kt)("p",null,"Download the ",(0,o.kt)("inlineCode",{parentName:"p"},"github.com/anconprotocol/contracts")," and label it with the name of your project."),(0,o.kt)("p",null,"The current source code has an example of a onchain DID ownership trasfer for ERC721 tokens."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use crate::sdk::focused_transform_patch_str;\nuse crate::sdk::read_dag;\nuse crate::sdk::submit_proof;\nuse crate::sdk::{generate_proof, get_proof, read_dag_block, write_dag_block};\nuse juniper::FieldResult;\n\nextern crate juniper;\n\nuse juniper::{\n    graphql_object, EmptyMutation, EmptySubscription, FieldError, GraphQLEnum, GraphQLValue,\n    RootNode, Variables,\n};\nuse serde::{Deserialize, Serialize};\nuse serde_json::json;\n\nuse std::collections::HashMap;\n\nuse std::str;\nuse std::vec::*;\n\npub struct Context {\n    pub metadata: HashMap<String, Ancon721Metadata>,\n    pub transfer: HashMap<String, MetadataPacket>,\n}\n\nimpl juniper::Context for Context {}\n\n#[derive(Clone, Debug, Serialize, Deserialize)]\npub struct MetadataPacket {\n    pub cid: String,\n    pub from_owner: String,\n    pub result_cid: String,\n    pub to_owner: String,\n    pub to_address: String,\n    pub token_id: String,\n    pub proof: String,\n}\n\n#[graphql_object(context = Context)]\nimpl MetadataPacket {\n    fn cid(&self) -> &str {\n        &self.cid\n    }\n\n    fn from_owner(&self) -> &str {\n        &self.from_owner\n    }\n\n    fn result_cid(&self) -> &str {\n        &self.result_cid\n    }\n    fn to_owner(&self) -> &str {\n        &self.to_owner\n    }\n\n    fn to_address(&self) -> &str {\n        &self.to_address\n    }\n\n    fn token_id(&self) -> &str {\n        &self.token_id\n    }\n    fn proof(&self) -> &str {\n        &self.proof\n    }\n}\n\n#[derive(Clone, Debug, Serialize, Deserialize)]\npub struct Ancon721Metadata {\n    pub name: String,\n    pub description: String,\n    pub image: String,\n    pub parent: String,\n    pub owner: String,\n    pub sources: Vec<String>,\n}\n\n#[graphql_object(context = Context)]\nimpl Ancon721Metadata {\n    fn name(&self) -> &str {\n        &self.name\n    }\n\n    fn description(&self) -> &str {\n        &self.description\n    }\n\n    fn image(&self) -> &str {\n        &self.image\n    }\n    fn parent(&self) -> &str {\n        &self.parent\n    }\n\n    fn owner(&self) -> &str {\n        &self.owner\n    }\n\n    async fn sources(&self) -> &Vec<String> {\n        &self.sources\n    }\n}\n\n#[derive(Clone, Copy, Debug)]\npub struct Query;\n\n#[graphql_object(context = Context)]\nimpl Query {\n    fn api_version() -> &\'static str {\n        "0.1"\n    }\n\n    pub fn metadata(context: &Context, cid: String, path: String) -> Ancon721Metadata {\n        let v = read_dag(&cid);\n        let res = serde_json::from_slice(&v);\n        res.unwrap()\n    }\n}\n\n#[derive(Clone, Copy, Debug)]\npub struct Mutation;\n\n#[graphql_object(context = Context)]\nimpl Mutation {\n    //Dagblock mutation\n    fn transfer(context: &Context, input: MetadataTransactionInput) -> Vec<MetadataPacket> {\n        let v = read_dag(&input.cid);\n        let res = serde_json::from_slice(&v);\n        let metadata: Ancon721Metadata = res.unwrap();\n\n        //generate current metadata proof packet\n        let proof = generate_proof(&input.cid);\n\n        let updated_cid =\n            focused_transform_patch_str(&input.cid, "owner", &metadata.owner, &input.new_owner);\n        let updated =\n            focused_transform_patch_str(&updated_cid, "parent", &metadata.parent, &input.cid);\n\n        //generate updated metadata proof packet\n        let proof_cid = apply_request_with_proof(input.clone(), &proof, &updated);\n        let v = read_dag(&proof_cid);\n        let res = serde_json::from_slice(&v);\n        let packet: MetadataPacket = res.unwrap();\n        let current_packet = MetadataPacket {\n            cid: input.cid,\n            from_owner: input.owner,\n            result_cid: updated,\n            to_address: "".to_string(),\n            to_owner: input.new_owner,\n            token_id: "".to_string(),\n            proof: proof,\n        };\n        let result = vec![current_packet, packet];\n        result\n    }\n}\n\n#[derive(Clone, Debug, GraphQLInputObject, Serialize, Deserialize)]\nstruct MetadataTransactionInput {\n    path: String,\n    cid: String,\n    owner: String,\n    new_owner: String,\n}\n\ntype Schema = RootNode<\'static, Query, Mutation, EmptySubscription<Context>>;\n\npub fn schema() -> Schema {\n    Schema::new(Query, Mutation, EmptySubscription::<Context>::new())\n}\n\nfn apply_request_with_proof(\n    input: MetadataTransactionInput,\n    prev_proof: &str,\n    new_cid: &str,\n) -> String {\n    // Must combined proofs (prev and new) in host function\n    // then send to chain and return result\n    let js = json!({\n        "previous": prev_proof,\n        "next_cid": new_cid,\n        "input": input\n    });\n    submit_proof(&js.to_string())\n}\n')),(0,o.kt)("h2",{id:"dag-operations-or-mutation"},"DAG Operations or Mutation"),(0,o.kt)("p",null,"Now we are going to apply a GraphQL mutation, which is an update to an immutable object, means it will discard the old CID and create a new CID from the latest update in the DAG block. "),(0,o.kt)("p",null,"Why are we abstracting on top of GraphQL? The main reason is to provide a better and more expedite approach to software engineering differents pieces of technologies like IPFS and blockchain. By enforcing the schemas with code generation in server side, we also get a similar developer experience as when you do smart contract development. "),(0,o.kt)("p",null,"In this example, we'll use one of the easiest IPLD Operator, which is the ",(0,o.kt)("inlineCode",{parentName:"p"},"focused transform"),", where we "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pinpoint or ",(0,o.kt)("strong",{parentName:"li"},"select")," a path inside a root node"),(0,o.kt)("li",{parentName:"ul"},"Patch or mutate that selection with a function call. In our case, a diff patch, eg if previous node matches previous node requested a change, then apply requested change to node.")),(0,o.kt)("p",null,"In Ancon Protocol Contracts SDK, you can use focused transform with ",(0,o.kt)("inlineCode",{parentName:"p"},"focused_transform_patch_str")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},'\n#[derive(Clone, Copy, Debug)]\npub struct Mutation;\n\n#[graphql_object(context = Context)]\nimpl Mutation {\n    //Dagblock mutation\n    fn transfer(context: &Context, input: MetadataTransactionInput) -> Vec<MetadataPacket> {\n        let v = read_dag(&input.cid);\n        let res = serde_json::from_slice(&v);\n        let metadata: Ancon721Metadata = res.unwrap();\n\n        //generate current metadata proof packet\n        let proof = generate_proof(&input.cid);\n\n        let updated_cid =\n            focused_transform_patch_str(&input.cid, "owner", &metadata.owner, &input.new_owner);\n        let updated =\n            focused_transform_patch_str(&updated_cid, "parent", &metadata.parent, &input.cid);\n\n        //generate updated metadata proof packet\n        let proof_cid = apply_request_with_proof(input.clone(), &proof, &updated);\n        let v = read_dag(&proof_cid);\n        let res = serde_json::from_slice(&v);\n        let packet: MetadataPacket = res.unwrap();\n        let current_packet = MetadataPacket {\n            cid: input.cid,\n            from_owner: input.owner,\n            result_cid: updated,\n            to_address: "".to_string(),\n            to_owner: input.new_owner,\n            token_id: "".to_string(),\n            proof: proof,\n        };\n        let result = vec![current_packet, packet];\n        result\n    }\n}\n\n#[derive(Clone, Debug, GraphQLInputObject, Serialize, Deserialize)]\nstruct MetadataTransactionInput {\n    path: String,\n    cid: String,\n    owner: String,\n    new_owner: String,\n}\n\n\n')),(0,o.kt)("p",null,"The result must always be the previous and next packets."),(0,o.kt)("h2",{id:"smart-contract-apis"},"Smart Contract APIs"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn focused_transform_patch_str(cid: &str, path: &str, prev: &str, next: &str) -> String\n")),(0,o.kt)("p",null,"Applies an IPLD focused transform using a patch design pattern for string node values"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn read_dag(cid: &str) -> Vec<u8>\n")),(0,o.kt)("p",null,"Reads a cid from dag store"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn submit_proof(data: &str) -> String\n")),(0,o.kt)("p",null,"Submits proof (offchain)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn get_proof(cid: &str) -> String\n")),(0,o.kt)("p",null,"Retrieves proof (offchain)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn generate_proof(cid: &str) -> String\n")),(0,o.kt)("p",null,"Generates proof (offchain)"))}d.isMDXComponent=!0}}]);