"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[679],{66945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(85893),a=n(11151),o=n(71183);const i={id:"upgrade-contract",title:"Upgrading the Contract",sidebar_label:"Upgrade a Contract"},s=void 0,l={id:"tutorials/nfts/upgrade-contract",title:"Upgrading the Contract",description:"In this tutorial, you'll build off the work you previously did to implement the minting functionality on a skeleton smart contract. You got to the point where NFTs could be minted and the wallet correctly picked up on the fact that you owned an NFT. However, it had no way of displaying the tokens since your contract didn't implement the method that the wallet was trying to call.",source:"@site/../docs/3.tutorials/nfts/2-upgrade.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/upgrade-contract",permalink:"/tutorials/nfts/upgrade-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/2-upgrade.md",tags:[],version:"current",lastUpdatedBy:"Guille",lastUpdatedAt:1714487707e3,sidebarPosition:2,frontMatter:{id:"upgrade-contract",title:"Upgrading the Contract",sidebar_label:"Upgrade a Contract"},sidebar:"tutorials",previous:{title:"Minting",permalink:"/tutorials/nfts/minting"},next:{title:"Enumeration",permalink:"/tutorials/nfts/enumeration"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Upgrading contracts overview",id:"upgrading-contracts",level:2},{value:"Modifications to our contract",id:"modifications-to-contract",level:2},{value:"Redeploying the contract",id:"redeploying-contract",level:2},{value:"Viewing NFTs in the wallet",id:"viewing-nfts-in-wallet",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:i}=t;return i||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In this tutorial, you'll build off the work you previously did to implement the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/minting",children:"minting functionality"})," on a skeleton smart contract. You got to the point where NFTs could be minted and the wallet correctly picked up on the fact that you owned an NFT. However, it had no way of displaying the tokens since your contract didn't implement the method that the wallet was trying to call."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(t.p,{children:["Today you'll learn about deploying patch fixes to smart contracts and you'll use that knowledge to implement the ",(0,r.jsx)(t.code,{children:"nft_tokens_for_owner"})," function on the contract you deployed in the previous tutorial."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"upgrading-contracts",children:"Upgrading contracts overview"}),"\n",(0,r.jsx)(t.p,{children:"Upgrading contracts, when done right, can be an immensely powerful tool. If done wrong, it can lead to a lot of headaches. It's important to distinguish between the code and state of a smart contract. When a contract is deployed on top of an existing contract, the only thing that changes is the code. The state will remain the same and that's where a lot of developer's issues come to fruition."}),"\n",(0,r.jsx)(t.p,{children:"The NEAR Runtime will read the serialized state from disk and it will attempt to load it using the current contract code. When your code changes, it might not be able to figure out how to do this."}),"\n",(0,r.jsxs)(t.p,{children:["You need to strategically upgrade your contracts and make sure that the runtime will be able to read your current state with the new contract code. For more information about upgrading contracts and some best practices, see the NEAR SDK's ",(0,r.jsx)(t.a,{href:"/sdk/rust/building/prototyping",children:"upgrading contracts"})," write-up."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"modifications-to-contract",children:"Modifications to our contract"}),"\n",(0,r.jsxs)(t.p,{children:["In order for the wallet to properly display your NFTs, you need to implement the ",(0,r.jsx)(t.code,{children:"nft_tokens_for_owner"})," method. This will allow anyone to query for a paginated list of NFTs owned by a given account ID."]}),"\n",(0,r.jsxs)(t.p,{children:["To accomplish this, let's break it down into some smaller subtasks. First, you need to get access to a list of all token IDs owned by a user. This information can be found in the ",(0,r.jsx)(t.code,{children:"tokens_per_owner"})," data structure. Now that you have a set of token IDs, you need to convert them into ",(0,r.jsx)(t.code,{children:"JsonToken"})," objects as that's what you'll be returning from the function."]}),"\n",(0,r.jsxs)(t.p,{children:["Luckily, you wrote a function ",(0,r.jsx)(t.code,{children:"nft_token"})," which takes a token ID and returns a ",(0,r.jsx)(t.code,{children:"JsonToken"})," in the ",(0,r.jsx)(t.code,{children:"nft_core.rs"})," file. As you can guess, in order to get a list of ",(0,r.jsx)(t.code,{children:"JsonToken"})," objects, you would need to iterate through the token IDs owned by the user and then convert each token ID into a ",(0,r.jsx)(t.code,{children:"JsonToken"})," and store that in a list."]}),"\n",(0,r.jsxs)(t.p,{children:["As for the pagination, Rust has some awesome functions for skipping to a starting index and taking the first ",(0,r.jsx)(t.code,{children:"n"})," elements of an iterator."]}),"\n",(0,r.jsxs)(t.p,{children:["Let's move over to the ",(0,r.jsx)(t.code,{children:"enumeration.rs"})," file and implement that logic:"]}),"\n",(0,r.jsx)(o.Ey,{language:"rust",start:"46",end:"75",url:"https://github.com/near-examples/nft-tutorial/blob/main/nft-contract-basic/src/enumeration.rs"}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"redeploying-contract",children:"Redeploying the contract"}),"\n",(0,r.jsxs)(t.p,{children:["Now that you've implemented the necessary logic for ",(0,r.jsx)(t.code,{children:"nft_tokens_for_owner"}),", it's time to build and re-deploy the contract to your account. Using the cargo-near, deploy the contract as you did in the previous tutorial:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cargo near deploy $NFT_CONTRACT_ID without-init-call network-config testnet sign-with-keychain send\n"})}),"\n",(0,r.jsx)(t.p,{children:"Once the contract has been redeployed, let's test and see if the state migrated correctly by running a simple view function:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"near view $NFT_CONTRACT_ID nft_metadata\n"})}),"\n",(0,r.jsx)(t.p,{children:"This should return an output similar to the following:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"{\n  spec: 'nft-1.0.0',\n  name: 'NFT Tutorial Contract',\n  symbol: 'GOTEAM',\n  icon: null,\n  base_uri: null,\n  reference: null,\n  reference_hash: null\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Go team!"})," At this point, you can now test and see if the new function you wrote works correctly. Let's query for the list of tokens that you own:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_tokens_for_owner \'{"account_id": "\'$NFT_CONTRACT_ID\'", "limit": 5}\'\n'})}),"\n",(0,r.jsxs)(i,{children:[(0,r.jsx)("summary",{children:"Example response: "}),(0,r.jsx)("p",{children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"[\n  {\n    token_id: 'token-1',\n    owner_id: 'goteam.examples.testnet',\n    metadata: {\n      title: 'My Non Fungible Team Token',\n      description: 'The Team Most Certainly Goes :)',\n      media: 'https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif',\n      media_hash: null,\n      copies: null,\n      issued_at: null,\n      expires_at: null,\n      starts_at: null,\n      updated_at: null,\n      extra: null,\n      reference: null,\n      reference_hash: null\n    }\n  }\n]\n"})})})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"viewing-nfts-in-wallet",children:"Viewing NFTs in the wallet"}),"\n",(0,r.jsxs)(t.p,{children:["Now that your contract implements the necessary functions that the wallet uses to display NFTs, you should be able to see your tokens on display in the ",(0,r.jsx)(t.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"collectibles tab"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"filled-nft-in-wallet",src:n(95044).Z+"",width:"635",height:"432"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(t.p,{children:["In this tutorial, you learned about the basics of ",(0,r.jsx)(t.a,{href:"#upgrading-contracts",children:"upgrading contracts"}),". Then, you implemented the necessary ",(0,r.jsx)(t.a,{href:"#modifications-to-contract",children:"modifications to your smart contract"})," and ",(0,r.jsx)(t.a,{href:"#redeploying-contract",children:"redeployed it"}),". Finally you navigated to the wallet collectibles tab and ",(0,r.jsx)(t.a,{href:"#viewing-nfts-in-wallet",children:"viewed your NFTs"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.a,{href:"/tutorials/nfts/enumeration",children:"next tutorial"}),", you'll implement the remaining functions needed to complete the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration"})," standard."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["near-cli: ",(0,r.jsx)(t.code,{children:"4.0.13"})]}),"\n",(0,r.jsxs)(t.li,{children:["cargo-near ",(0,r.jsx)(t.code,{children:"0.6.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["NFT standard: ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,r.jsx)(t.code,{children:"1.1.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var o=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(67294),a=n(36905),o=n(12466),i=n(16550),s=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,o=(0,i.k6)(),s=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((function(e){if(s){var t=new URLSearchParams(o.location.search);t.set(s,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[s,o])]}function m(e){var t,n,a,o,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,m=h(e),g=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),b=g[0],v=g[1],y=p({queryString:c,groupId:d}),x=y[0],w=y[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),a=n[0],o=n[1],[a,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=j[0],T=j[1],N=function(){var e=null!=x?x:k;return f({value:e,tabValues:m})?e:null}();return(0,s.Z)((function(){N&&v(N)}),[N]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),T(e)}),[w,T,m]),tabValues:m}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function y(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,s=e.tabValues,l=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==r&&(c(t),i(a))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;n=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;n=null!=(o=l[i])?o:l[l.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},o,{className:(0,a.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function x(e){var t=e.lazy,n=e.children,a=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function w(e){var t=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(y,Object.assign({},t,e)),(0,v.jsx)(x,Object.assign({},t,e))]})}function j(e){var t=(0,g.Z)();return(0,v.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>p,Ey:()=>g,SQ:()=>m});var r=n(67294),a=n(74866),o=n(85162),i=n(74165),s=n(15861),l=n(1841),c=n.n(l),u=n(85893);function d(){return(d=(0,s.Z)((0,i.Z)().mark((function e(t,n,r){var a,o,s,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((o=localStorage.getItem(t+"-until"))&&o>Date.now())){e.next=5;break}a=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:a=e.sent,localStorage.setItem(t,a),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return s=a.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):s.length,s=s.slice(n,r),l=s.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",s.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,a=e.end,o=e.language,i=e.fname,s=e.metastring,l=(0,r.useState)("Loading..."),h=l[0],f=l[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),a=r[0],o=r[1];return r[2],"https://raw.githubusercontent.com/"+a+"/"+o+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return d.apply(this,arguments)}(e,n,a);r.then((function(e){return f(e)}))})),(0,u.jsxs)("div",{fname:i,children:[(0,u.jsx)(c(),{language:o,metastring:s+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(o.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,o=n.end,i=n.fname;if(e.type===g)return g({url:r,start:a,end:o,language:t,fname:i});return e}(e,n)})),1==t.length?(0,u.jsx)(o.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(o.Z,{value:t,label:e.props.fname,children:e})}))})}function g(e){var t=e.url,n=e.start,r=e.end,a=e.language,o=e.fname,i=e.metastring;return h({url:t,start:n,end:r,language:a,fname:o,metastring:i})}},95044:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/filled-nft-in-wallet-e661209d2dbff2bb2551db943ecfc43b.png"}}]);