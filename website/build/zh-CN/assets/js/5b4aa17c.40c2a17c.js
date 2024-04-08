"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6139],{91887:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(85893),s=i(11151);const a={id:"data-availability",title:"Rollup Data Availability",sidebar_label:"Rollup Data Availability"},r=void 0,o={id:"abstraction/data-availability",title:"Rollup Data Availability",description:"Utilizing NEAR as storage data availability with a focus on lowering rollup DA fees.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/8.abstraction/DA.md",sourceDirName:"8.abstraction",slug:"/abstraction/data-availability",permalink:"/zh-CN/abstraction/data-availability",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/8.abstraction/DA.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712567569e3,frontMatter:{id:"data-availability",title:"Rollup Data Availability",sidebar_label:"Rollup Data Availability"},sidebar:"build",previous:{title:"Relayer + Gas Station",permalink:"/zh-CN/develop/relayers/relayer-gas-example"},next:{title:"What is a Contract?",permalink:"/zh-CN/develop/contracts/whatisacontract"}},l={},c=[{value:"System Context",id:"system-context",level:2},{value:"Blob Store Contract",id:"blob-store-contract",level:2},{value:"Light Client",id:"light-client",level:2},{value:"DA RPC",id:"da-rpc",level:2},{value:"Integrations",id:"integrations",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",mermaid:"mermaid",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Utilizing NEAR as storage data availability with a focus on lowering rollup DA fees."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#blob-store-contract",children:"Blob Store Contract"}),": A contract that provides the store for arbitrary DA blobs."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#light-client",children:"Light Client"}),": A trustless off-chain light client for NEAR with DA-enabled features."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#da-rpc",children:"RPC Client"}),": The defacto client for submitting data blobs to NEAR."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#integrations",children:"Integrations"}),": Proof of concept works for integrating with L2 rollups."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["For the latest information, please check the ",(0,n.jsx)(t.a,{href:"https://github.com/near/rollup-data-availability/",children:"Near DA"})," repository."]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"system-context",children:"System Context"}),"\n",(0,n.jsx)(t.p,{children:"This outlines the system components that we build and how it interacts with external components."}),"\n",(0,n.jsx)(t.p,{children:"Red lines denote external flow of commitments.\nWhite lines denote flow of blob data."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Fisherman"})," is just an example how a rollup can work with the light client in the initial stage of DA, until we implement a more non-interactive approach, such as KZG."]})}),"\n",(0,n.jsx)(t.mermaid,{value:'C4Context\n    title NEAR Data Availability System Context\n\n    Enterprise_Boundary(b1, "Ethereum") {\n        System_Ext(SystemEth, "Ethereum")\n\n        System_Boundary(b2, "Rollup") {\n            System_Ext(SystemRollup, "Rollup", "Derives blocks, execute transactions, posts commitments & sequence data")\n            System(SystemNearDa, "NEAR DA Client", "Submits/Gets blob data, creates commitments")\n        }\n        BiRel(SystemRollup, SystemEth, "Posts sequences, proofs of execution, DA frame references")\n        BiRel(SystemRollup, SystemNearDa, "Post batches, retrieves commitments")\n        Rel(fisherman, SystemEth, "Looks for commitments, posts results")\n    }      \n    \n    Enterprise_Boundary(b0, "NEAR") {\n        \n        System(SystemLc, "Light Client", "Syncs headers, provides inclusion proofs")\n        System(SystemNear, "NEAR Protocol", "NEAR validators, archival nodes")\n        \n        Rel(SystemLc, SystemNear, "Syncs headers")    \n        Rel(SystemNearDa, SystemNear, "Submits/Gets blob")\n\n        %% This doesn\'t exist yet\n        %% System(SystemDas, "Data Availability Sampling", "Data redundancy, retrieval, sample responses")\n        %% BiRel(SystemDas, SystemLc, "Commitments")\n    }\n     \n    Person_Ext(fisherman, "Fisherman")\n    Rel(fisherman, SystemLc, "Requests inclusion proofs, validates inclusion proofs")\n      \n\n    UpdateRelStyle(fisherman, SystemEth, $offsetY="-10" $lineColor="red")\n    UpdateRelStyle(fisherman, SystemLc, $offsetY="-10", $lineColor="red")\n    UpdateRelStyle(SystemRollup, SystemEth, $offsetY="-30", $lineColor="white")\n    UpdateElementStyle(fisherman, $bgColor="grey", $borderColor="red")\n\n    UpdateRelStyle(SystemRollup, SystemNearDa, $offsetX="-200", $lineColor="white", $textColor="white")\n    UpdateRelStyle(SystemNearDa, SystemNear, $textColor="white", $lineColor="white", $offsetY="10")\n    UpdateRelStyle(SystemNearLc, SystemNear, $offsetX="30")'}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"blob-store-contract",children:(0,n.jsx)(t.a,{href:"https://github.com/near/rollup-data-availability/tree/main/contracts/blob-store",children:"Blob Store Contract"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/near/rollup-data-availability/tree/main/contracts/blob-store",children:"blob store contract"}),' provides the store for arbitrary DA blobs. In practice, these "blobs" are sequencing data from rollups, but they can be any data.']}),"\n",(0,n.jsx)(t.p,{children:"NEAR blockchain state storage is pretty cheap. At the time of writing, 100KiB is a flat fee of 1NEAR. To limit the costs of NEAR storage even more, we don't store the blob data in the blockchain state."}),"\n",(0,n.jsx)(t.p,{children:"It works by taking advantage of NEAR consensus around receipts. When a chunk producer processes a receipt, there is consensus around the receipt. However, once the chunk has been processed and included in the block, the receipt is no longer required for consensus and can be pruned. The pruning time is at least 3 NEAR epochs, where each epoch is 12 Hours; in practice, this is around five epochs. Once the receipt has been pruned, it is the responsibility of archival nodes to retain the transaction data, and we can even get the data from indexers."}),"\n",(0,n.jsx)(t.p,{children:"We can validate that the blob was retrieved from ecosystem actors in the format submitted by checking the blob commitment. The blob commitment currently needs to be more efficient and will be improved, but it benefits us because anybody can build this with limited expertise and tooling. It is created by taking a blob, chunking it into 256-byte pieces, and creating a Merkle tree, where each leaf is a Sha-256 hash of the shard. The root of the Merkle tree is the blob commitment, which is provided as [transaction_id ++ commitment] to the L1 contract, which is 64 bytes."}),"\n",(0,n.jsx)(t.p,{children:"What this means:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Consensus is provided around the submission of a blob by NEAR validators"}),"\n",(0,n.jsx)(t.li,{children:"The function input data is stored by full nodes for at least three days"}),"\n",(0,n.jsx)(t.li,{children:"Archival nodes can store the data for longer"}),"\n",(0,n.jsx)(t.li,{children:"We don't occupy consensus with more data than needs to be"}),"\n",(0,n.jsx)(t.li,{children:"Indexers can also be used, and this Data is currently indexed by all significant explorers in NEAR"}),"\n",(0,n.jsx)(t.li,{children:"The commitment is available for a long time, and the commitment is straightforward to create"}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"light-client",children:(0,n.jsx)(t.a,{href:"https://github.com/near/rollup-data-availability/tree/main/",children:"Light Client"})}),"\n",(0,n.jsx)(t.p,{children:"A trustless off-chain light client for NEAR with DA-enabled features, Such as KZG commitments, Reed-Solomon erasure coding & storage connectors."}),"\n",(0,n.jsx)(t.p,{children:"The light client provides easy access to transaction and receipt inclusion proofs within a block or chunk. This is useful for checking any dubious blobs which may not have been submitted or validating that a blob has been submitted to NEAR."}),"\n",(0,n.jsx)(t.p,{children:"A blob submission can be verified by:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Taking the NEAR transaction ID from Ethereum for the blob commitment."}),"\n",(0,n.jsx)(t.li,{children:"Ask the light client for an inclusion proof for the transaction ID or the receipt ID if you're feeling specific; this will give you a Merkle inclusion proof for the transaction/receipt."}),"\n",(0,n.jsx)(t.li,{children:"Once you have the inclusion proof, you can ask the light client to verify the proof for you, or advanced users can manually verify it themselves."}),"\n",(0,n.jsx)(t.li,{children:"Armed with this knowledge, rollup providers can have advanced integration with light clients and build proving systems around it."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In the future, we will provide extensions to light clients such that non-interactive proofs can be supplied for blob commitments and other data availability features."}),"\n",(0,n.jsx)(t.p,{children:"It's also possible that the light client may be on-chain for the header syncing and inclusion proof verification, but this is a low priority right now."}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"da-rpc",children:"DA RPC"}),"\n",(0,n.jsxs)(t.p,{children:['This client is the defacto client for submitting blobs to NEAR. These crates allow a client to interact with the blob store. It can be treated as a "black box", where blobs go in, and ',(0,n.jsx)(t.code,{children:"[transaction_id ++ commitment]"})," emerges."]}),"\n",(0,n.jsx)(t.p,{children:"There are multiple versions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsxs)(t.a,{href:"https://github.com/near/rollup-data-availability/tree/main/crates/da-rpc",children:[(0,n.jsx)(t.code,{children:"da-rpc"})," crate"]})," is the rust client, which anyone can use if they prefer rust in their application.\nThe responsibility of this client is to provide a simple interface for interacting with NEAR DA."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsxs)(t.a,{href:"https://github.com/near/rollup-data-availability/tree/main/crates/da-rpc-sys",children:[(0,n.jsx)(t.code,{children:"da-rpc-sys"})," crate"]})," is the FFI client binding for use by non-rust applications. This calls through to ",(0,n.jsx)(t.code,{children:"da-rpc"})," to interact with the blob store, with some additional black box functionality for dealing with pointers wrangling and such."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsxs)(t.a,{href:"https://github.com/near/rollup-data-availability/tree/main/gopkg/da-rpc",children:[(0,n.jsx)(t.code,{children:"da-rpc-go"})," package"]})," is the go client bindings for use by non-rust applications, and this calls through to ",(0,n.jsx)(t.code,{children:"da-rpc-sys"}),", which provides another application-level layer for easy interaction with the bindings."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["See also ",(0,n.jsx)(t.a,{href:"https://github.com/near/rollup-data-availability/blob/main/docs/da_rpc_client.md",children:"the diagram"})]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"integrations",children:"Integrations"}),"\n",(0,n.jsx)(t.p,{children:"We have developed some proof of concept works for integrating with L2 rollups:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/firatNEAR/cdk-validium-node/tree/near",children:"CDK Stack"}),": We have integrated with the Polygon CDK stack. Using the Sequence Sender for submissions to NEAR."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/near/optimism",children:"Optimism"}),": We have integrated with the Optimism OP stack. Using the ",(0,n.jsx)(t.code,{children:"Batcher"})," for submissions to NEAR and the proposer for submitting NEAR commitment data to Ethereum."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/near/nitro",children:"Arbitrum Nitro"}),": We have integrated a small plugin into the DAC daserver. This is much like our http sidecar and provides a very modular integration into NEAR DA whilst supporting arbitrum DACs."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["In the future, the ",(0,n.jsx)(t.code,{children:"Arbitrum Nitro"}),' integration will likely be the easiest way to support NEAR DA as it acts as an independent sidecar which can be scaled as needed. This also means that the DAC can opt-in and out of NEAR DA, lowering their infrastructure burden. With this approach, the DAC committee members just need to have a "dumb" signing service, with the store backed by NEAR.']})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>r});var n=i(67294);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);