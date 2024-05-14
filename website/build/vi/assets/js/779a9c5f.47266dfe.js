"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5367],{87410:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=t(85893),a=t(11151),i=t(71183);const c={id:"upgrade-contract",title:"Vi\u1ec7c Upgrade m\u1ed9t Contract",sidebar_label:"Upgrade m\u1ed9t Contract"},l=void 0,s={id:"tutorials/nfts/upgrade-contract",title:"Vi\u1ec7c Upgrade m\u1ed9t Contract",description:"Trong h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n s\u1ebd n\xe2ng c\u1ea5p nh\u1eefng g\xec b\u1ea1n \u0111\xe3 l\xe0m tr\u01b0\u1edbc \u0111\xe2y \u0111\u1ec3 implement ch\u1ee9c n\u0103ng mint tr\xean m\u1ed9t b\u1ed9 khung smart contract. B\u1ea1n \u0111\xe3 \u0111\u1ebfn th\u1eddi \u0111i\u1ec3m m\xe0 NFT c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c mint v\xe0 wallet \u0111\xe3 ch\xednh th\u1ee9c x\xe1c nh\u1eadn l\xe0 b\u1ea1n s\u1edf h\u1eefu m\u1ed9t NFT. Tuy nhi\xean, kh\xf4ng c\xf3 c\xe1ch n\xe0o \u0111\u1ec3 hi\u1ec3n th\u1ecb c\xe1c token v\xec contract c\u1ee7a b\u1ea1n kh\xf4ng implement method m\xe0 wallet \u0111ang c\u1ed1 g\u1eafng call.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/nfts/2-upgrade.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/upgrade-contract",permalink:"/vi/tutorials/nfts/upgrade-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/2-upgrade.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,sidebarPosition:2,frontMatter:{id:"upgrade-contract",title:"Vi\u1ec7c Upgrade m\u1ed9t Contract",sidebar_label:"Upgrade m\u1ed9t Contract"},sidebar:"tutorials",previous:{title:"Minting",permalink:"/vi/tutorials/nfts/minting"},next:{title:"Enumeration",permalink:"/vi/tutorials/nfts/enumeration"}},o={},u=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"T\u1ed5ng quan v\u1ec1 vi\u1ec7c n\xe2ng c\u1ea5p c\xe1c contract",id:"upgrading-contracts",level:2},{value:"C\xe1c s\u1eeda \u0111\u1ed5i \u0111\u1ebfn contract c\u1ee7a ch\xfang ta",id:"modifications-to-contract",level:2},{value:"Deploying l\u1ea1i m\u1ed9t contract",id:"redeploying-contract",level:2},{value:"Xem c\xe1c NFT trong wallet",id:"viewing-nfts-in-wallet",level:2},{value:"K\u1ebft lu\u1eadn",id:"k\u1ebft-lu\u1eadn",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...n.components},{Details:c}=e;return c||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["Trong h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n s\u1ebd n\xe2ng c\u1ea5p nh\u1eefng g\xec b\u1ea1n \u0111\xe3 l\xe0m tr\u01b0\u1edbc \u0111\xe2y \u0111\u1ec3 implement ",(0,r.jsx)(e.a,{href:"/tutorials/nfts/minting",children:"ch\u1ee9c n\u0103ng mint"})," tr\xean m\u1ed9t b\u1ed9 khung smart contract. B\u1ea1n \u0111\xe3 \u0111\u1ebfn th\u1eddi \u0111i\u1ec3m m\xe0 NFT c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c mint v\xe0 wallet \u0111\xe3 ch\xednh th\u1ee9c x\xe1c nh\u1eadn l\xe0 b\u1ea1n s\u1edf h\u1eefu m\u1ed9t NFT. Tuy nhi\xean, kh\xf4ng c\xf3 c\xe1ch n\xe0o \u0111\u1ec3 hi\u1ec3n th\u1ecb c\xe1c token v\xec contract c\u1ee7a b\u1ea1n kh\xf4ng implement method m\xe0 wallet \u0111ang c\u1ed1 g\u1eafng call."]}),"\n",(0,r.jsx)(e.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,r.jsxs)(e.p,{children:["H\xf4m nay, b\u1ea1n s\u1ebd t\xecm hi\u1ec3u v\u1ec1 c\xe1ch deploy c\xe1c b\u1ea3n s\u1eeda l\u1ed7i cho c\xe1c smart contract v\xe0 b\u1ea1n s\u1ebd s\u1eed d\u1ee5ng ki\u1ebfn th\u1ee9c \u0111\xf3 \u0111\u1ec3 implement function ",(0,r.jsx)(e.code,{children:"nft_tokens_for_owner"})," tr\xean contract m\xe0 b\u1ea1n \u0111\xe3 deploy trong h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc."]}),"\n",(0,r.jsx)(e.h2,{id:"upgrading-contracts",children:"T\u1ed5ng quan v\u1ec1 vi\u1ec7c n\xe2ng c\u1ea5p c\xe1c contract"}),"\n",(0,r.jsx)(e.p,{children:"Khi \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n \u0111\xfang, vi\u1ec7c n\xe2ng c\u1ea5p c\xe1c contract c\xf3 th\u1ec3 l\xe0 m\u1ed9t c\xf4ng c\u1ee5 v\xf4 c\xf9ng m\u1ea1nh m\u1ebd. N\u1ebfu l\xe0m sai, b\u1ea1n c\xf3 th\u1ec3 s\u1ebd g\u1eb7p ph\u1ea3i r\u1ea5t nhi\u1ec1u phi\u1ec1n to\xe1i. B\u1ea1n c\u1ea7n ph\u1ea3i ph\xe2n bi\u1ec7t \u0111\u01b0\u1ee3c code v\xe0 state c\u1ee7a m\u1ed9t smart contract. Khi m\u1ed9t contract \u0111\u01b0\u1ee3c deploy tr\xean m\u1ed9t contract c\xf3 s\u1eb5n, \u0111i\u1ec1u duy nh\u1ea5t thay \u0111\u1ed5i l\xe0 code. State s\u1ebd v\u1eabn nh\u01b0 c\u0169 v\xe0 t\u1eeb \u0111\xf3 m\xe0 r\u1ea5t nhi\u1ec1u v\u1ea5n \u0111\u1ec1 g\xe2y \u0111au \u0111\u1ea7u cho developer xu\u1ea5t hi\u1ec7n."}),"\n",(0,r.jsx)(e.p,{children:"NEAR Runtime s\u1ebd \u0111\u1ecdc serialized state t\u1eeb disk v\xe0 s\u1ebd c\u1ed1 g\u1eafng load n\xf3 b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng code c\u1ee7a contract hi\u1ec7n t\u1ea1i. Khi code c\u1ee7a b\u1ea1n thay \u0111\u1ed5i, n\xf3 c\xf3 th\u1ec3 kh\xf4ng t\xecm \u0111\u01b0\u1ee3c c\xe1ch \u0111\u1ec3 th\u1ef1c hi\u1ec7n vi\u1ec7c n\xe0y."}),"\n",(0,r.jsxs)(e.p,{children:["B\u1ea1n c\u1ea7n n\xe2ng c\u1ea5p c\xe1c contract c\u1ee7a m\xecnh m\u1ed9t c\xe1ch chi\u1ebfn l\u01b0\u1ee3c v\xe0 \u0111\u1ea3m b\u1ea3o r\u1eb1ng runtime s\u1ebd c\xf3 th\u1ec3 \u0111\u1ecdc state hi\u1ec7n t\u1ea1i c\u1ee7a b\u1ea1n b\u1eb1ng code m\u1edbi c\u1ee7a contract. For more information about upgrading contracts and some best practices, see the NEAR SDK's ",(0,r.jsx)(e.a,{href:"/sdk/rust/building/prototyping",children:"upgrading contracts"})," write-up."]}),"\n",(0,r.jsx)(e.h2,{id:"modifications-to-contract",children:"C\xe1c s\u1eeda \u0111\u1ed5i \u0111\u1ebfn contract c\u1ee7a ch\xfang ta"}),"\n",(0,r.jsxs)(e.p,{children:["\u0110\u1ec3 wallet hi\u1ec3n th\u1ecb \u0111\xfang c\xe1c NFT c\u1ee7a b\u1ea1n, b\u1ea1n c\u1ea7n ph\u1ea3i implement method ",(0,r.jsx)(e.code,{children:"nft_tokens_for_owner"}),". Vi\u1ec7c n\xe0y s\u1ebd cho ph\xe9p b\u1ea5t c\u1ee9 ai c\xf3 th\u1ec3 truy v\u1ea5n danh s\xe1ch c\xe1c NFT c\u1ee7a m\u1ed9t account ID c\u1ee5 th\u1ec3 \u0111\u01b0\u1ee3c ph\xe2n trang."]}),"\n",(0,r.jsxs)(e.p,{children:["\u0110\u1ec3 th\u1ef1c hi\u1ec7n \u0111i\u1ec1u n\xe0y, h\xe3y chia n\xf3 th\xe0nh m\u1ed9t s\u1ed1 nhi\u1ec7m v\u1ee5 con nh\u1ecf h\u01a1n. Tr\u01b0\u1edbc ti\xean, b\u1ea1n c\u1ea7n c\xf3 quy\u1ec1n truy c\u1eadp v\xe0o danh s\xe1ch t\u1ea5t c\u1ea3 c\xe1c token ID do ng\u01b0\u1eddi d\xf9ng s\u1edf h\u1eefu. Th\xf4ng tin n\xe0y c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c t\xecm th\u1ea5y trong data structure ",(0,r.jsx)(e.code,{children:"tokens_per_owner"}),". B\xe2y gi\u1edd b\u1ea1n \u0111\xe3 c\xf3 m\u1ed9t t\u1eadp h\u1ee3p c\xe1c token ID, b\u1ea1n c\u1ea7n convert ch\xfang th\xe0nh c\xe1c object ",(0,r.jsx)(e.code,{children:"JsonToken"})," v\xec \u0111\xf3 l\xe0 nh\u1eefng g\xec b\u1ea1n s\u1ebd tr\u1ea3 v\u1ec1 t\u1eeb function."]}),"\n",(0,r.jsxs)(e.p,{children:["May m\u1eafn thay, b\u1ea1n \u0111\xe3 vi\u1ebft function ",(0,r.jsx)(e.code,{children:"nft_token"}),", n\u01a1i m\xe0 nh\u1eadn m\u1ed9t token ID v\xe0 tr\u1ea3 v\u1ec1 m\u1ed9t ",(0,r.jsx)(e.code,{children:"JsonToken"})," trong file ",(0,r.jsx)(e.code,{children:"nft_core.rs"}),". Nh\u01b0 b\u1ea1n c\xf3 th\u1ec3 \u0111o\xe1n, \u0111\u1ec3 c\xf3 \u0111\u01b0\u1ee3c danh s\xe1ch c\xe1c object ",(0,r.jsx)(e.code,{children:"JsonToken"}),", b\u1ea1n c\u1ea7n ph\u1ea3i l\u1eb7p qua c\xe1c token ID do ng\u01b0\u1eddi d\xf9ng s\u1edf h\u1eefu v\xe0 sau \u0111\xf3 convert t\u1eebng token ID th\xe0nh m\u1ed9t ",(0,r.jsx)(e.code,{children:"JsonToken"})," v\xe0 l\u01b0u n\xf3 v\xe0o m\u1ed9t list."]}),"\n",(0,r.jsxs)(e.p,{children:["\u0110\u1ed1i v\u1edbi ph\xe2n trang, Rust c\xf3 m\u1ed9t s\u1ed1 function tuy\u1ec7t v\u1eddi \u0111\u1ec3 b\u1ecf qua starting index v\xe0 l\u1ea5y ",(0,r.jsx)(e.code,{children:"n"})," element \u0111\u1ea7u ti\xean c\u1ee7a m\u1ed9t iterator."]}),"\n",(0,r.jsxs)(e.p,{children:["Let's move over to the ",(0,r.jsx)(e.code,{children:"enumeration.rs"})," file and implement that logic:"]}),"\n",(0,r.jsx)(i.Ey,{language:"rust",start:"32",end:"62",url:"https://github.com/near-examples/nft-tutorial/blob/2.minting/nft-contract/src/enumeration.rs"}),"\n",(0,r.jsx)(e.h2,{id:"redeploying-contract",children:"Deploying l\u1ea1i m\u1ed9t contract"}),"\n",(0,r.jsxs)(e.p,{children:["Now that you've implemented the necessary logic for ",(0,r.jsx)(e.code,{children:"nft_tokens_for_owner"}),", it's time to build and re-deploy the contract to your account. Using the build script, deploy the contract as you did in the previous tutorial:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"yarn build && near deploy $NFT_CONTRACT_ID out/main.wasm\n"})}),"\n",(0,r.jsxs)(e.p,{children:["This should output a warning saying that the account has a deployed contract and will ask if you'd like to proceed. Simply type ",(0,r.jsx)(e.code,{children:"y"})," and hit enter."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)\n"})}),"\n",(0,r.jsx)(e.p,{children:"Once the contract has been redeployed, let's test and see if the state migrated correctly by running a simple view function:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"near view $NFT_CONTRACT_ID nft_metadata\n"})}),"\n",(0,r.jsx)(e.p,{children:"This should return an output similar to the following:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"{\n  spec: 'nft-1.0.0',\n  name: 'NFT Tutorial Contract',\n  symbol: 'GOTEAM',\n  icon: null,\n  base_uri: null,\n  reference: null,\n  reference_hash: null\n}\n"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"Go team!"})," At this point, you can now test and see if the new function you wrote works correctly. Let's query for the list of tokens that you own:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_tokens_for_owner \'{"account_id": "\'$NFT_CONTRACT_ID\'", "limit": 5}\'\n'})}),"\n",(0,r.jsxs)(c,{children:[(0,r.jsx)("summary",{children:"Example response: "}),(0,r.jsx)("p",{children:(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"[\n  {\n    token_id: 'token-1',\n    owner_id: 'goteam.examples.testnet',\n    metadata: {\n      title: 'My Non Fungible Team Token',\n      description: 'The Team Most Certainly Goes :)',\n      media: 'https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif',\n      media_hash: null,\n      copies: null,\n      issued_at: null,\n      expires_at: null,\n      starts_at: null,\n      updated_at: null,\n      extra: null,\n      reference: null,\n      reference_hash: null\n    }\n  }\n]\n"})})})]}),"\n",(0,r.jsx)(e.h2,{id:"viewing-nfts-in-wallet",children:"Xem c\xe1c NFT trong wallet"}),"\n",(0,r.jsxs)(e.p,{children:["Now that your contract implements the necessary functions that the wallet uses to display NFTs, you should be able to see your tokens on display in the ",(0,r.jsx)(e.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"collectibles tab"}),"."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"filled-nft-in-wallet",src:t(95044).Z+"",width:"635",height:"432"})}),"\n",(0,r.jsx)(e.h2,{id:"k\u1ebft-lu\u1eadn",children:"K\u1ebft lu\u1eadn"}),"\n",(0,r.jsxs)(e.p,{children:["In this tutorial, you learned about the basics of ",(0,r.jsx)(e.a,{href:"#upgrading-contracts",children:"upgrading contracts"}),". Then, you implemented the necessary ",(0,r.jsx)(e.a,{href:"#modifications-to-contract",children:"modifications to your smart contract"})," and ",(0,r.jsx)(e.a,{href:"#redeploying-contract",children:"redeployed it"}),". Finally you navigated to the wallet collectibles tab and ",(0,r.jsx)(e.a,{href:"#viewing-nfts-in-wallet",children:"viewed your NFTs"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["In the ",(0,r.jsx)(e.a,{href:"/tutorials/nfts/enumeration",children:"next tutorial"}),", you'll implement the remaining functions needed to complete the ",(0,r.jsx)(e.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration"})," standard."]}),"\n",(0,r.jsxs)(e.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(e.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["near-cli: ",(0,r.jsx)(e.code,{children:"4.0.4"})]}),"\n",(0,r.jsxs)(e.li,{children:["NFT standard: ",(0,r.jsx)(e.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(e.code,{children:"1.1.0"})]}),"\n"]})]})]})}function h(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},85162:(n,e,t)=>{t.d(e,{Z:()=>c});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function c(n){var e=n.children,t=n.hidden,c=n.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,c),hidden:t,children:e})}},74866:(n,e,t)=>{t.d(e,{Z:()=>w});var r=t(67294),a=t(36905),i=t(12466),c=t(16550),l=t(20469),s=t(91980),o=t(67392),u=t(50012);function d(n){var e,t;return null!=(e=null==(t=r.Children.toArray(n).filter((function(n){return"\n"!==n})).map((function(n){if(!n||(0,r.isValidElement)(n)&&((e=n.props)&&"object"==typeof e&&"value"in e))return n;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?e:[]}function h(n){var e=n.values,t=n.children;return(0,r.useMemo)((function(){var n=null!=e?e:function(n){return d(n).map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}(t);return function(n){var e=(0,o.l)(n,(function(n,e){return n.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(n),n}),[e,t])}function m(n){var e=n.value;return n.tabValues.some((function(n){return n.value===e}))}function p(n){var e=n.queryString,t=void 0!==e&&e,a=n.groupId,i=(0,c.k6)(),l=function(n){var e=n.queryString,t=void 0!==e&&e,r=n.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(n){if(l){var e=new URLSearchParams(i.location.search);e.set(l,n),i.replace(Object.assign({},i.location,{search:e.toString()}))}}),[l,i])]}function g(n){var e,t,a,i,c=n.defaultValue,s=n.queryString,o=void 0!==s&&s,d=n.groupId,g=h(n),f=(0,r.useState)((function(){return function(n){var e,t=n.defaultValue,r=n.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(e=r.find((function(n){return n.default})))?e:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:c,tabValues:g})})),b=f[0],v=f[1],y=p({queryString:o,groupId:d}),x=y[0],j=y[1],w=(e=function(n){return n?"docusaurus.tab."+n:null}({groupId:d}.groupId),t=(0,u.Nk)(e),a=t[0],i=t[1],[a,(0,r.useCallback)((function(n){e&&i.set(n)}),[e,i])]),k=w[0],T=w[1],N=function(){var n=null!=x?x:k;return m({value:n,tabValues:g})?n:null}();return(0,l.Z)((function(){N&&v(N)}),[N]),{selectedValue:b,selectValue:(0,r.useCallback)((function(n){if(!m({value:n,tabValues:g}))throw new Error("Can't select invalid tab value="+n);v(n),j(n),T(n)}),[j,T,g]),tabValues:g}}var f=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function y(n){var e=n.className,t=n.block,r=n.selectedValue,c=n.selectValue,l=n.tabValues,s=[],o=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(n){var e=n.currentTarget,t=s.indexOf(e),a=l[t].value;a!==r&&(o(e),c(a))},d=function(n){var e,t=null;switch(n.key){case"Enter":u(n);break;case"ArrowRight":var r,a=s.indexOf(n.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var i,c=s.indexOf(n.currentTarget)-1;t=null!=(i=s[c])?i:s[s.length-1]}null==(e=t)||e.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},e),children:l.map((function(n){var e=n.value,t=n.label,i=n.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:function(n){return s.push(n)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e)}))})}function x(n){var e=n.lazy,t=n.children,a=n.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){var c=i.find((function(n){return n.props.value===a}));return c?(0,r.cloneElement)(c,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(n,e){return(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==a})}))})}function j(n){var e=g(n);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(y,Object.assign({},e,n)),(0,v.jsx)(x,Object.assign({},e,n))]})}function w(n){var e=(0,f.Z)();return(0,v.jsx)(j,Object.assign({},n,{children:d(n.children)}),String(e))}},71183:(n,e,t)=>{t.d(e,{O2:()=>p,Ey:()=>f,SQ:()=>g});var r=t(67294),a=t(74866),i=t(85162),c=t(74165),l=t(15861),s=t(1841),o=t.n(s),u=t(85893);function d(){return(d=(0,l.Z)((0,c.Z)().mark((function n(e,t,r){var a,i,l,s;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!((i=localStorage.getItem(e+"-until"))&&i>Date.now())){n.next=5;break}a=localStorage.getItem(e),n.next=18;break;case 5:return n.prev=5,n.next=8,fetch(e);case 8:return n.next=10,n.sent.text();case 10:a=n.sent,localStorage.setItem(e,a),localStorage.setItem(e+"-until",Date.now()+6e4),n.next=18;break;case 15:return n.prev=15,n.t0=n.catch(5),n.abrupt("return","Error fetching code, please try reloading");case 18:return l=a.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):l.length,l=l.slice(t,r),s=l.reduce((function(n,e){if(0===e.length)return n;var t=e.match(/^\s+/);return t?Math.min(n,t[0].length):0}),1/0),n.abrupt("return",l.map((function(n){return n.slice(s)})).join("\n"));case 24:case"end":return n.stop()}}),n,null,[[5,15]])})))).apply(this,arguments)}const h=function(n){var e=n.url,t=n.start,a=n.end,i=n.language,c=n.fname,l=n.metastring,s=(0,r.useState)("Loading..."),h=s[0],m=s[1];return(0,r.useEffect)((function(){var n=function(n){var e=n.slice(n.indexOf("https")).split("#"),t=e[0],r=(e[1],new URL(t).pathname.split("/").slice(1)),a=r[0],i=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+i+"/"+r[3]+"/"+r.slice(4).join("/")}(e),r=function(n,e,t){return d.apply(this,arguments)}(n,t,a);r.then((function(n){return m(n)}))})),(0,u.jsxs)("div",{fname:c,children:[(0,u.jsx)(o(),{language:i,metastring:l+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:e,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var m={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(n){var e=n.children;return Array.isArray(e)||(e=[e]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:e.map((function(n,e){return(0,u.jsx)(i.Z,{value:n.props.value,label:m[n.props.value],children:n})}))})}function g(n){var e=n.children,t=n.language;return Array.isArray(e)||(e=[e]),e=e.map((function(n){return function(n,e){var t=n.props,r=(t.children,t.url),a=t.start,i=t.end,c=t.fname;if(n.type===f)return f({url:r,start:a,end:i,language:e,fname:c});return n}(n,t)})),1==e.length?(0,u.jsx)(i.Z,{value:0,label:e[0].props.fname,children:e[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:e.map((function(n,e){return(0,u.jsx)(i.Z,{value:e,label:n.props.fname,children:n})}))})}function f(n){var e=n.url,t=n.start,r=n.end,a=n.language,i=n.fname,c=n.metastring;return h({url:e,start:t,end:r,language:a,fname:i,metastring:c})}},95044:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/filled-nft-in-wallet-e661209d2dbff2bb2551db943ecfc43b.png"}}]);