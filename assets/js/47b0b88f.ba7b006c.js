"use strict";(self.webpackChunkancon_docs=self.webpackChunkancon_docs||[]).push([[580],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return s}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),u=o(a),s=r,c=u["".concat(p,".").concat(s)]||u[s]||k[s]||l;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9266:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return m},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],d={sidebar_position:1},p="API Reference",o={unversionedId:"api/reference",id:"api/reference",isDocsHomePage:!1,title:"API Reference",description:"POST /v0/did/key",source:"@site/docs/api/reference.md",sourceDirName:"api",slug:"/api/reference",permalink:"/docs/api/reference",editUrl:"https://github.com/anconprotocol/ancon-docs/docs/api/reference.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ancon Protocol",permalink:"/docs/"},next:{title:"Using a Verifiable DAG store",permalink:"/docs/api/metadata"}},m=[{value:"<code>POST /v0/did/key</code>",id:"post-v0didkey",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Returns",id:"returns",children:[],level:3}],level:2},{value:"<code>POST /v0/did/web</code>",id:"post-v0didweb",children:[{value:"Parameters",id:"parameters-1",children:[],level:3},{value:"Returns",id:"returns-1",children:[],level:3}],level:2},{value:"<code>GET /v0/did/:did</code>",id:"get-v0diddid",children:[{value:"Parameters",id:"parameters-2",children:[],level:3},{value:"Returns",id:"returns-2",children:[],level:3}],level:2},{value:"<code>GET /proof/:key?height=n&amp;exportAs=qr</code>",id:"get-proofkeyheightnexportasqr",children:[{value:"Parameters",id:"parameters-3",children:[],level:3},{value:"Returns",id:"returns-3",children:[],level:3}],level:2},{value:"<code>POST /proofs/qr</code>",id:"post-proofsqr",children:[{value:"Parameters",id:"parameters-4",children:[],level:3},{value:"Returns",id:"returns-4",children:[],level:3}],level:2},{value:"<code>GET /proofs/lasthash</code>",id:"get-proofslasthash",children:[{value:"Returns",id:"returns-5",children:[],level:3}],level:2},{value:"<code>GET /user/:did/did.json</code>",id:"get-userdiddidjson",children:[{value:"Parameters",id:"parameters-5",children:[],level:3},{value:"Returns",id:"returns-6",children:[],level:3}],level:2},{value:"<code>PUT /v0/dagjson</code>",id:"put-v0dagjson",children:[],level:2},{value:"<code>PUT /v0/dag</code>",id:"put-v0dag",children:[{value:"Parameters",id:"parameters-6",children:[],level:3},{value:"Mutations",id:"mutations",children:[],level:3},{value:"Returns",id:"returns-7",children:[],level:3}],level:2},{value:"<code>POST /v0/dagjson</code>",id:"post-v0dagjson",children:[],level:2},{value:"<code>POST /v0/dag</code>",id:"post-v0dag",children:[{value:"Parameters",id:"parameters-7",children:[],level:3},{value:"Returns",id:"returns-8",children:[],level:3}],level:2},{value:"<code>GET /v0/dagjson/:cid/*path</code>",id:"get-v0dagjsoncidpath",children:[],level:2},{value:"<code>GET /v0/dag/:cid/*path</code>",id:"get-v0dagcidpath",children:[{value:"Parameters",id:"parameters-8",children:[],level:3},{value:"Returns",id:"returns-9",children:[],level:3}],level:2},{value:"<code>GET /v0/file/:cid/*path</code>",id:"get-v0filecidpath",children:[{value:"Parameters",id:"parameters-9",children:[],level:3},{value:"Returns",id:"returns-10",children:[],level:3}],level:2},{value:"<code>GET /swagger</code>",id:"get-swagger",children:[],level:2}],k={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"api-reference"},"API Reference"),(0,l.kt)("h2",{id:"post-v0didkey"},(0,l.kt)("inlineCode",{parentName:"h2"},"POST /v0/did/key")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Creates a new did-key")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,"None"),(0,l.kt)("h3",{id:"returns"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<Response>")),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains the CID")))),(0,l.kt)("p",null,"example of the returned object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "commitHash": "/AzWS9kE67z+wRs8htT3G+bRYDLy8V/Jg/cGUBprV/s=",\n  "content": {\n    "/": "baguqeerafkyyjhrgfai6x6djd23ot2d6vytaf35uvg6s2egc7llqkuc7nfua"\n  },\n  "height": 4892,\n  "issuer": "0xeeC58E89996496640c8b5898A7e0218E9b6E90cB",\n  "key": "L2FuY29ucHJvdG9jb2wvYmFmeXJlaWJxaXFiY2FmbnptanFtdjNpeTd1emppaW1uZWlxMmNxc3AzYm1odGNqYnJ3eXF3dnl3YmkvdXNlci9iYWd1cWVlcmFma3l5amhyZ2ZhaTZ4NmRqZDIzb3QyZDZ2eXRhZjM1dXZnNnMyZWdjN2xscWt1YzduZnVh",\n  "parent": "/anconprotocol/bafyreibqiqbcafnzmjqmv3iy7uzjiimneiq2cqsp3bmhtcjbrwyqwvywbi/user",\n  "signature": "0x971d3282785c390336860c5f5e5e1c7058f028738da7a003b8d81da7182cd6880798f8608e74d381c77d071f88adfa20e528bed1afba05f3c564bc6b59ec2dc61c",\n  "timestamp": 1642350132\n}\n')),(0,l.kt)("h2",{id:"post-v0didweb"},(0,l.kt)("inlineCode",{parentName:"h2"},"POST /v0/did/web")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Creates a new did-web")),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"domainName")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Subdomain eg alice.ipfs.pa")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pub")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"(hex) public key")))),(0,l.kt)("h3",{id:"returns-1"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<Response>")),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains the CID")))),(0,l.kt)("p",null,"example of the returned object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "commitHash": "/AzWS9kE67z+wRs8htT3G+bRYDLy8V/Jg/cGUBprV/s=",\n  "content": {\n    "/": "baguqeerafkyyjhrgfai6x6djd23ot2d6vytaf35uvg6s2egc7llqkuc7nfua"\n  },\n  "height": 4892,\n  "issuer": "0xeeC58E89996496640c8b5898A7e0218E9b6E90cB",\n  "key": "L2FuY29ucHJvdG9jb2wvYmFmeXJlaWJxaXFiY2FmbnptanFtdjNpeTd1emppaW1uZWlxMmNxc3AzYm1odGNqYnJ3eXF3dnl3YmkvdXNlci9iYWd1cWVlcmFma3l5amhyZ2ZhaTZ4NmRqZDIzb3QyZDZ2eXRhZjM1dXZnNnMyZWdjN2xscWt1YzduZnVh",\n  "parent": "/anconprotocol/bafyreibqiqbcafnzmjqmv3iy7uzjiimneiq2cqsp3bmhtcjbrwyqwvywbi/user",\n  "signature": "0x971d3282785c390336860c5f5e5e1c7058f028738da7a003b8d81da7182cd6880798f8608e74d381c77d071f88adfa20e528bed1afba05f3c564bc6b59ec2dc61c",\n  "timestamp": 1642350132\n  }\n')),(0,l.kt)("h2",{id:"get-v0diddid"},(0,l.kt)("inlineCode",{parentName:"h2"},"GET /v0/did/:did")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Returns did document as json")),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"did")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"DID Doc id")))),(0,l.kt)("h3",{id:"returns-2"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<Response>")),(0,l.kt)("td",{parentName:"tr",align:null},"A did document")))),(0,l.kt)("p",null,"example of the returned object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "@context": ["https://www.w3.org/ns/did/v1"],\n  "authentication": [\n    "",\n    {\n      "controller": "did:key:z3rc1YQMG366ttmuHeX2qodNeZAEhU6ktdjJEdLMRGX9gtpjaHitW6eu4BvZMEF",\n      "id": "did:key:z3rc1YQMG366ttmuHeX2qodNeZAEhU6ktdjJEdLMRGX9gtpjaHitW6eu4BvZMEF#",\n      "publicKeyBase58": "J8v1rHsHjrBP9khKJdiZBrfq4u2Ame2aUsv8fACmKjaF",\n      "type": "Ed25519VerificationKey2018"\n    }\n  ],\n  "created": "2021-12-04T07:57:33.030203855-05:00",\n  "id": "did:key:z3rc1YQMG366ttmuHeX2qodNeZAEhU6ktdjJEdLMRGX9gtpjaHitW6eu4BvZMEF",\n  "updated": "2021-12-04T07:57:33.030203855-05:00",\n  "verificationMethod": [\n    {\n      "controller": "did:key:z3rc1YQMG366ttmuHeX2qodNeZAEhU6ktdjJEdLMRGX9gtpjaHitW6eu4BvZMEF",\n      "id": "did:key:z3rc1YQMG366ttmuHeX2qodNeZAEhU6ktdjJEdLMRGX9gtpjaHitW6eu4BvZMEF#",\n      "publicKeyBase58": "J8v1rHsHjrBP9khKJdiZBrfq4u2Ame2aUsv8fACmKjaF",\n      "type": "Ed25519VerificationKey2018"\n    }\n  ]\n}\n\n')),(0,l.kt)("h2",{id:"get-proofkeyheightnexportasqr"},(0,l.kt)("inlineCode",{parentName:"h2"},"GET /proof/:key?height=n&exportAs=qr")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Gets a proof given a key and height")),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"key")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Key(base 64)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"height")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},"Height (int)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"exportAs")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Export as: qr")))),(0,l.kt)("h3",{id:"returns-3"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<Response>")),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains the hash")))),(0,l.kt)("h2",{id:"post-proofsqr"},(0,l.kt)("inlineCode",{parentName:"h2"},"POST /proofs/qr")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Translate  a QR to a proof")),(0,l.kt)("h3",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"file")),(0,l.kt)("td",{parentName:"tr",align:null},"Image blob"),(0,l.kt)("td",{parentName:"tr",align:null},"Image QR generated by Ancon")))),(0,l.kt)("h3",{id:"returns-4"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<Response>")),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains the hash")))),(0,l.kt)("h2",{id:"get-proofslasthash"},(0,l.kt)("inlineCode",{parentName:"h2"},"GET /proofs/lasthash")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reads current last hash")),(0,l.kt)("h3",{id:"returns-5"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<Response>")),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains the hash")))),(0,l.kt)("h2",{id:"get-userdiddidjson"},(0,l.kt)("inlineCode",{parentName:"h2"},"GET /user/:did/did.json")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reads a did-web")),(0,l.kt)("h3",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"did")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"did web domain name")))),(0,l.kt)("h3",{id:"returns-6"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<Response>")),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains the CID")))),(0,l.kt)("p",null,"example of the returned object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": ["https://www.w3.org/ns/did/v1"],\n  "authentication": [\n    "",\n    {\n      "controller": "did:web:ipfs:user:rogelio",\n      "id": "did:web:ipfs:user:rogelio",\n      "publicKeyBase58": "ER5jUmbiApGWtR4QVHjG7nHpaMGhZmf4BRMSLw4tBeEmT8RZhUKwppqsjHihwXp4RpVjVXaChRZFyKj1s41uGJs",\n      "type": "Secp256k1VerificationKey2018"\n    }\n  ],\n  "created": "2021-12-04T08:20:35.623500975-05:00",\n  "id": "did:web:ipfs:user:rogelio",\n  "updated": "2021-12-04T08:20:35.623500975-05:00",\n  "verificationMethod": [\n    {\n      "controller": "did:web:ipfs:user:rogelio",\n      "id": "did:web:ipfs:user:rogelio",\n      "publicKeyBase58": "ER5jUmbiApGWtR4QVHjG7nHpaMGhZmf4BRMSLw4tBeEmT8RZhUKwppqsjHihwXp4RpVjVXaChRZFyKj1s41uGJs",\n      "type": "Secp256k1VerificationKey2018"\n    }\n  ]\n}\n\n')),(0,l.kt)("h2",{id:"put-v0dagjson"},(0,l.kt)("inlineCode",{parentName:"h2"},"PUT /v0/dagjson")),(0,l.kt)("h2",{id:"put-v0dag"},(0,l.kt)("inlineCode",{parentName:"h2"},"PUT /v0/dag")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Mutates a dag-json in users path. Must have registerd DID and messasge must be signed with signature matching DID.")),(0,l.kt)("h3",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"from")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"DID identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"signature as hex")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"Mutations")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"cid to mutate")))),(0,l.kt)("h3",{id:"mutations"},"Mutations"),(0,l.kt)("p",null,"Mutations only apply to the current cid, and is executed sequentially. Each sequence cid stored in ",(0,l.kt)("inlineCode",{parentName:"p"},"parent")," property."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  ...,\n  "data": [\n    {\n      "path": "content/royalty",\n      "previousValue": 0.1,\n      "nextValue": 1,\n    },\n    {\n      "path": "content/owner",\n      "previousValue": "alice",\n      "nextValue": "bob",\n    },\n    {\n      // will add a new node\n      "path": "tag",\n      "previousValue": null,\n      "nextValue": "nft_from_panama",\n    },\n  ],\n  ...,\n}\n')),(0,l.kt)("h3",{id:"returns-7"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<Response>")),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains the CID")))),(0,l.kt)("p",null,"example of the returned object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cid": {\n    "/": "baguqeeraui7hue3i2smgzmzdqmrxrnicqpoggayqkoocqdcjf3q5n66smdlq"\n  }\n}\n')),(0,l.kt)("h2",{id:"post-v0dagjson"},(0,l.kt)("inlineCode",{parentName:"h2"},"POST /v0/dagjson")),(0,l.kt)("h2",{id:"post-v0dag"},(0,l.kt)("inlineCode",{parentName:"h2"},"POST /v0/dag")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Stores json as dag-json in users path. Must have registerd DID and messasge must be signed with signature matching DID.")),(0,l.kt)("h3",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"path")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"from")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"DID identifier")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"signature")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"signature as hex")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"data")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"object")),(0,l.kt)("td",{parentName:"tr",align:null},"object to store")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"encrypt")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"bool")),(0,l.kt)("td",{parentName:"tr",align:null},"enables JOSE Web Encryption")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"authorizedRecipients")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string array")),(0,l.kt)("td",{parentName:"tr",align:null},"comma delimited Ethereum address")))),(0,l.kt)("h3",{id:"returns-8"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<Response>")),(0,l.kt)("td",{parentName:"tr",align:null},"An object that contains the CID")))),(0,l.kt)("p",null,"example of the returned object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cid": {\n    "/": "baguqeeraui7hue3i2smgzmzdqmrxrnicqpoggayqkoocqdcjf3q5n66smdlq"\n  }\n}\n')),(0,l.kt)("h2",{id:"get-v0dagjsoncidpath"},(0,l.kt)("inlineCode",{parentName:"h2"},"GET /v0/dagjson/:cid/*path")),(0,l.kt)("h2",{id:"get-v0dagcidpath"},(0,l.kt)("inlineCode",{parentName:"h2"},"GET /v0/dag/:cid/*path")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reads a dag-json block")),(0,l.kt)("h3",{id:"parameters-8"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"cid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"path")))),(0,l.kt)("h3",{id:"returns-9"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<DagResponse>")),(0,l.kt)("td",{parentName:"tr",align:null},"json object")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},' {\n  "commitHash": "/AzWS9kE67z+wRs8htT3G+bRYDLy8V/Jg/cGUBprV/s=",\n  "content": {\n    "/": "baguqeerafkyyjhrgfai6x6djd23ot2d6vytaf35uvg6s2egc7llqkuc7nfua"\n  },\n  "height": 4892,\n  "issuer": "0xeeC58E89996496640c8b5898A7e0218E9b6E90cB",\n  "key": "L2FuY29ucHJvdG9jb2wvYmFmeXJlaWJxaXFiY2FmbnptanFtdjNpeTd1emppaW1uZWlxMmNxc3AzYm1odGNqYnJ3eXF3dnl3YmkvdXNlci9iYWd1cWVlcmFma3l5amhyZ2ZhaTZ4NmRqZDIzb3QyZDZ2eXRhZjM1dXZnNnMyZWdjN2xscWt1YzduZnVh",\n  "parent": "/anconprotocol/bafyreibqiqbcafnzmjqmv3iy7uzjiimneiq2cqsp3bmhtcjbrwyqwvywbi/user",\n  "signature": "0x971d3282785c390336860c5f5e5e1c7058f028738da7a003b8d81da7182cd6880798f8608e74d381c77d071f88adfa20e528bed1afba05f3c564bc6b59ec2dc61c",\n  "timestamp": 1642350132\n}\n')),(0,l.kt)("h2",{id:"get-v0filecidpath"},(0,l.kt)("inlineCode",{parentName:"h2"},"GET /v0/file/:cid/*path")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reads a dag-json block")),(0,l.kt)("h3",{id:"parameters-9"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"cid")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"cid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"path")))),(0,l.kt)("h3",{id:"returns-10"},"Returns"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Promise<Response>")),(0,l.kt)("td",{parentName:"tr",align:null},"content type stream")))),(0,l.kt)("p",null,"example of the returned object:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"<...data...>\n")),(0,l.kt)("h2",{id:"get-swagger"},(0,l.kt)("inlineCode",{parentName:"h2"},"GET /swagger")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"REST documentation")),(0,l.kt)("h1",{id:"cli-reference"},"CLI Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"peeraddr"),": Connects to subgraph node with IPFS"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"addr"),":  Host libp2p address"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"apiaddr"),":  Host API address"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"data"),": Storage directory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cors"),": Set to true to enable CORS requests"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"origins"),": Comma separated list of addresses"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"init"),": Initializes the proof storage by creating a genesis block"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"keys"),": Generates Secp256k1 keys"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hostname"),": Node identifier"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"rootkey"),": Rootkey to validate"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sync"),": Syncs with peers"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"peers"),":  List of peers to sync"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"quic"),": Enables QUIC"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tlscert"),": TLS certificate for QUIC"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"tlskey"),": TLS key for QUIC"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ipfshost"),": IPFS Host address for DAG Pinning")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Copyright IFESA 2021, 2022")))}u.isMDXComponent=!0}}]);