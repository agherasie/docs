"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1871],{30867:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(85893),a=t(11151),i=t(74866),s=t(85162),c=t(71183);const l={id:"chain-signatures",title:"Implementing Chain Signatures"},o=void 0,u={id:"build/chain-abstraction/chain-signatures",title:"Implementing Chain Signatures",description:"Chain signatures enable NEAR accounts, including smart contracts, to sign and execute transactions across many blockchain protocols.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/1.chain-abstraction/chain-signatures.md",sourceDirName:"2.build/1.chain-abstraction",slug:"/build/chain-abstraction/chain-signatures",permalink:"/ko/build/chain-abstraction/chain-signatures",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/1.chain-abstraction/chain-signatures.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1720746022e3,frontMatter:{id:"chain-signatures",title:"Implementing Chain Signatures"},sidebar:"build",previous:{title:"What are Chain Signatures?",permalink:"/ko/concepts/abstraction/chain-signatures"},next:{title:"NFT Chain Keys Contract",permalink:"/ko/build/chain-abstraction/nft-chain-keys"}},h={},d=[{value:"Create a Chain Signature",id:"create-a-chain-signature",level:2},{value:"1. Deriving the Foreign Address",id:"1-deriving-the-foreign-address",level:2},{value:"v2.multichain-mpc.testnet",id:"v2multichain-mpctestnet",level:4},{value:"2. Creating the Transaction",id:"2-creating-the-transaction",level:2},{value:"3. Requesting the Signature",id:"3-requesting-the-signature",level:2},{value:"4. Reconstructing the Signature",id:"4-reconstructing-the-signature",level:2},{value:"5. Relaying the Signature",id:"5-relaying-the-signature",level:2}];function g(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Chain signatures enable NEAR accounts, including smart contracts, to sign and execute transactions across many blockchain protocols."}),"\n",(0,r.jsx)(n.p,{children:"This unlocks the next level of blockchain interoperability by giving ownership of diverse assets, cross-chain accounts, and data to a single NEAR account."}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"This guide will take you through a step by step process for creating a Chain Signature."}),(0,r.jsx)(n.p,{children:"\u2b50\ufe0f For complete examples of a NEAR account performing transactions in other chains:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/mattlockyer/mpc-script",children:"CLI script"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near-examples/near-multichain",children:"web-app example"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://test.near.social/bot.testnet/widget/chainsig-sign-eth-tx",children:"component example"})}),"\n"]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"create-a-chain-signature",children:"Create a Chain Signature"}),"\n",(0,r.jsx)(n.p,{children:"There are five steps to create a Chain Signature:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#1-deriving-the-foreign-address",children:"Deriving the Foreign Address"})," - Construct the address that will be controlled on the target blockchain"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#2-creating-the-transaction",children:"Creating a Transaction"})," - Create the transaction or message to be signed"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#3-requesting-the-signature",children:"Requesting a Signature"})," - Call the NEAR ",(0,r.jsx)(n.code,{children:"multichain"})," contract requesting it to sign the transaction"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#4-reconstructing-the-signature",children:"Reconstructing the Signature"})," - Reconstruct the signature from the MPC service's response"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#5-relaying-the-signature",children:"Relaying the Signed Transaction"})," - Send the signed transaction to the destination chain for execution"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"chain-signatures",src:t(81530).Z+"",width:"2478",height:"523"}),"\n",(0,r.jsx)(n.em,{children:"Diagram of a chain signature in NEAR"})]}),"\n",(0,r.jsxs)(n.admonition,{title:"MPC testnet contracts",type:"info",children:[(0,r.jsxs)(n.p,{children:["If you want to try things out, these are the smart contracts available on ",(0,r.jsx)(n.code,{children:"testnet"}),":"]}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"v2.multichain-mpc.testnet"}),": ",(0,r.jsx)(n.a,{href:"https://github.com/near/mpc/tree/v0.2.0/contract",children:"MPC signer"})," contract, latest release, made up of 8 MPC nodes"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"canhazgas.testnet"}),": ",(0,r.jsx)(n.a,{href:"/ko/build/chain-abstraction/multichain-gas-relayer/gas-station",children:"Multichain Gas Station"})," contract"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"nft.kagi.testnet"}),": ",(0,r.jsx)(n.a,{href:"/ko/build/chain-abstraction/nft-chain-keys",children:"NFT Chain Key"})," contract"]}),"\n"]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"1-deriving-the-foreign-address",children:"1. Deriving the Foreign Address"}),"\n",(0,r.jsxs)(n.p,{children:["Chain Signatures use ",(0,r.jsx)(n.a,{href:"/ko/concepts/abstraction/chain-signatures#one-account-multiple-chains",children:(0,r.jsx)(n.code,{children:"derivation paths"})})," to represent accounts on the target blockchain. The external address to be controlled can be deterministically derived from:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The NEAR address (e.g., ",(0,r.jsx)(n.code,{children:"example.near"}),", ",(0,r.jsx)(n.code,{children:"example.testnet"}),", etc.)"]}),"\n",(0,r.jsxs)(n.li,{children:["A derivation path (a string such as ",(0,r.jsx)(n.code,{children:"ethereum-1"}),", ",(0,r.jsx)(n.code,{children:"ethereum-2"}),", etc.)"]}),"\n",(0,r.jsxs)(n.li,{children:["The MPC service's public key","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"secp256k1:4NfTiv3UsGahebgTaHyD9vF8KYKMBnfd6kh94mK6xv8fGBiJB8TBtFMP5WWXz6B89Ac1fbpzPwAvoyQebemHFwx3"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We provide code to derive the address, as it's a complex process that involves multiple steps of hashing and encoding:"}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\u039e Ethereum",children:(0,r.jsx)(c.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/services/ethereum.js",start:"16",end:"20"})}),(0,r.jsx)(s.Z,{value:"\u20bf Bitcoin",children:(0,r.jsx)(c.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/services/bitcoin.js",start:"12",end:"16"})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"The same NEAR account and path will always produce the same address on the target blockchain."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"example.near"})," + ",(0,r.jsx)(n.code,{children:"ethereum-1"})," = ",(0,r.jsx)(n.code,{children:"0x1b48b83a308ea4beb845db088180dc3389f8aa3b"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"example.near"})," + ",(0,r.jsx)(n.code,{children:"ethereum-2"})," = ",(0,r.jsx)(n.code,{children:"0x99c5d3025dc736541f2d97c3ef3c90de4d221315"})]}),"\n"]})]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"We recommend hardcoding the derivation paths in your application to ensure the signature request is made to the correct account"}),(0,r.jsx)(n.h4,{id:"v2multichain-mpctestnet",children:"v2.multichain-mpc.testnet"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"secp256k1:4NfTiv3UsGahebgTaHyD9vF8KYKMBnfd6kh94mK6xv8fGBiJB8TBtFMP5WWXz6B89Ac1fbpzPwAvoyQebemHFwx3"})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"2-creating-the-transaction",children:"2. Creating the Transaction"}),"\n",(0,r.jsx)(n.p,{children:"Constructing the transaction to be signed (transaction, message, data, etc.) varies depending on the target blockchain, but generally it's the hash of the message or transaction to be signed."}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsxs)(s.Z,{value:"\u039e Ethereum",children:[(0,r.jsx)(c.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/services/ethereum.js",start:"46",end:"69"}),(0,r.jsx)(n.p,{children:"In Ethereum, constructing the transaction is simple since you only need to specify the address of the receiver and how much you want to send."})]}),(0,r.jsxs)(s.Z,{value:"\u20bf Bitcoin",children:[(0,r.jsx)(c.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/services/bitcoin.js",start:"26",end:"80"}),(0,r.jsx)(n.p,{children:"In bitcoin, you construct a new transaction by using all the Unspent Transaction Outputs (UTXOs) of the account as input, and then specify the output address and amount you want to send."})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"3-requesting-the-signature",children:"3. Requesting the Signature"}),"\n",(0,r.jsxs)(n.p,{children:["Once the transaction is created and ready to be signed, a signature request is made by calling ",(0,r.jsx)(n.code,{children:"sign"})," on the ",(0,r.jsx)(n.a,{href:"https://github.com/near/mpc-recovery/blob/f31e39f710f2fb76706e7bb638a13cf1fa1dbf26/contract/src/lib.rs#L298",children:"MPC smart contract"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The method requires two parameters:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"transaction"})," to be signed for the target blockchain"]}),"\n",(0,r.jsxs)(n.li,{children:["The derivation ",(0,r.jsx)(n.code,{children:"path"})," for the account we want to use to sign the transaction"]}),"\n"]}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\u039e Ethereum",children:(0,r.jsx)(c.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/services/ethereum.js",start:"72",end:"74"})}),(0,r.jsxs)(s.Z,{value:"\u20bf Bitcoin",children:[(0,r.jsx)(c.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/services/bitcoin.js",start:"82",end:"101"}),(0,r.jsx)(n.p,{children:"For bitcoin, all UTXOs are signed independently and then combined into a single transaction."})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Notice that the ",(0,r.jsx)(n.code,{children:"payload"})," is being reversed before requesting the signature, to match the little-endian format expected by the contract"]})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["The contract will take some time to respond, as the ",(0,r.jsx)(n.code,{children:"sign"})," method starts recursively calling itself waiting for the ",(0,r.jsx)(n.strong,{children:"MPC service"})," to sign the transaction."]}),(0,r.jsxs)(l,{children:[(0,r.jsx)("summary",{children:" A Contract Recursively Calling Itself? "}),(0,r.jsxs)(n.p,{children:["NEAR smart contracts are currently unable to halt execution and await the completion of a process. To solve this while we await the ability to ",(0,r.jsx)(n.a,{href:"https://docs.near.org/blog/yield-resume",children:"yield & resume"}),", one can make the contract call itself again and again checking on each iteration to see if the result is ready."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Each call will take one block which equates to ~1 second of waiting. After some time the contract will either return a result that an external party provided or return an error running out of GAS waiting."]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"4-reconstructing-the-signature",children:"4. Reconstructing the Signature"}),"\n",(0,r.jsx)(n.p,{children:"The MPC contract will not return the signature of the transaction itself, but the elements needed to reconstruct the signature."}),"\n",(0,r.jsx)(n.p,{children:"This allows the contract to generalize the signing process for multiple blockchains."}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsxs)(s.Z,{value:"\u039e Ethereum",children:[(0,r.jsx)(c.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/services/ethereum.js",start:"76",end:"90"}),(0,r.jsxs)(n.p,{children:["In Ethereum, the signature is reconstructed by concatenating the ",(0,r.jsx)(n.code,{children:"r"}),", ",(0,r.jsx)(n.code,{children:"s"}),", and ",(0,r.jsx)(n.code,{children:"v"})," values returned by the contract."]}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"v"})," parameter is a parity bit that depends on the ",(0,r.jsx)(n.code,{children:"sender"})," address. We reconstruct the signature using both possible values (",(0,r.jsx)(n.code,{children:"v=0"})," and ",(0,r.jsx)(n.code,{children:"v=1"}),") and check which one corresponds to our ",(0,r.jsx)(n.code,{children:"sender"})," address."]})]}),(0,r.jsxs)(s.Z,{value:"\u20bf Bitcoin",children:[(0,r.jsx)(c.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/services/bitcoin.js",start:"103",end:"114"}),(0,r.jsxs)(n.p,{children:["In Bitcoin, the signature is reconstructed by concatenating the ",(0,r.jsx)(n.code,{children:"r"})," and ",(0,r.jsx)(n.code,{children:"s"})," values returned by the contract."]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"5-relaying-the-signature",children:"5. Relaying the Signature"}),"\n",(0,r.jsx)(n.p,{children:"Once we have reconstructed the signature, we can relay it to the corresponding network. This will once again vary depending on the target blockchain."}),"\n",(0,r.jsxs)(i.Z,{groupId:"code-tabs",children:[(0,r.jsx)(s.Z,{value:"\u039e Ethereum",children:(0,r.jsx)(c.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/services/ethereum.js",start:"94",end:"98"})}),(0,r.jsx)(s.Z,{value:"\u20bf Bitcoin",children:(0,r.jsx)(c.Ey,{language:"js",url:"https://github.com/near-examples/near-multichain/blob/main/src/services/bitcoin.js",start:"117",end:"125"})})]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["\u2b50\ufe0f For a deep dive into the concepts of Chain Signatures see ",(0,r.jsx)(n.a,{href:"/concepts/abstraction/chain-signatures",children:"What are Chain Signatures?"})]}),(0,r.jsx)(n.p,{children:"\u2b50\ufe0f For complete examples of a NEAR account performing Eth transactions:"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/near-examples/near-multichain",children:"web-app example"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://test.near.social/bot.testnet/widget/chainsig-sign-eth-tx",children:"component example"})}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(g,{...e})}):g(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),i=t(12466),s=t(16550),c=t(20469),l=t(91980),o=t(67392),u=t(20812);function h(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function d(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function g(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,s.k6)(),c=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(c),(0,r.useCallback)((function(e){if(c){var n=new URLSearchParams(i.location.search);n.set(c,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[c,i])]}function m(e){var n,t,a,i,s=e.defaultValue,l=e.queryString,o=void 0!==l&&l,h=e.groupId,m=d(e),x=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),b=x[0],f=x[1],j=p({queryString:o,groupId:h}),v=j[0],y=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,u.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),k=w[0],E=w[1],T=function(){var e=null!=v?v:k;return g({value:e,tabValues:m})?e:null}();return(0,c.Z)((function(){T&&f(T)}),[T]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!g({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),E(e)}),[y,E,m]),tabValues:m}}var x=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function j(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,c=e.tabValues,l=[],o=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),a=c[t].value;a!==r&&(o(n),s(a))},h=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;t=null!=(i=l[s])?i:l[l.length-1]}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:c.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:h,onClick:u},i,{className:(0,a.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=m(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(j,Object.assign({},n,e)),(0,f.jsx)(v,Object.assign({},n,e))]})}function w(e){var n=(0,x.Z)();return(0,f.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>p,Ey:()=>x,SQ:()=>m});var r=t(67294),a=t(74866),i=t(85162),s=t(74165),c=t(15861),l=t(1841),o=t.n(l),u=t(85893);function h(){return(h=(0,c.Z)((0,s.Z)().mark((function e(n,t,r){var a,i,c,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((i=localStorage.getItem(n+"-until"))&&i>Date.now())){e.next=5;break}a=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(n,a),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return c=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):c.length,c=c.slice(t,r),l=c.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",c.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const d=function(e){var n=e.url,t=e.start,a=e.end,i=e.language,s=e.fname,c=e.metastring,l=(0,r.useState)("Loading..."),d=l[0],g=l[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),a=r[0],i=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+i+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return h.apply(this,arguments)}(e,t,a);r.then((function(e){return g(e)}))})),(0,u.jsxs)("div",{fname:s,children:[(0,u.jsx)(o(),{language:i,metastring:c+" showLineNumbers",children:d}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var g={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,u.jsx)(i.Z,{value:e.props.value,label:g[e.props.value],children:e})}))})}function m(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,i=t.end,s=t.fname;if(e.type===x)return x({url:r,start:a,end:i,language:n,fname:s});return e}(e,t)})),1==n.length?(0,u.jsx)(i.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,u.jsx)(i.Z,{value:n,label:e.props.fname,children:e})}))})}function x(e){var n=e.url,t=e.start,r=e.end,a=e.language,i=e.fname,s=e.metastring;return d({url:n,start:t,end:r,language:a,fname:i,metastring:s})}},81530:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/chain-signatures-overview-6f4d63597857c1a140fc0196475caa0f.png"}}]);