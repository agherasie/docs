"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9364],{50383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=t(85893),a=t(11151),i=t(74866),o=t(85162);const l={},s=void 0,u={id:"build/primitives/nft/web-app/mint",title:"mint",description:"In order to use nft_mint method of the x.paras.near contract you have to be a creator of a particular token series.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/5.primitives/nft/web-app/mint.md",sourceDirName:"2.build/5.primitives/nft/web-app",slug:"/build/primitives/nft/web-app/mint",permalink:"/zh-CN/build/primitives/nft/web-app/mint",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/nft/web-app/mint.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Z,{groupId:"nft-contract-tabs",className:"file-tabs",children:[(0,r.jsx)(o.Z,{value:"NFT Primitive",label:"Reference",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst CONTRACT_ADDRESS = "nft.primitives.near";\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'nft_mint\',\n  args: {\n    token_id: "1",\n    receiver_id: "bob.near", \n    token_metadata: {\n      title: "NFT Primitive Token",\n      description: "Awesome NFT Primitive Token",\n      media: "string", // URL to associated media, preferably to decentralized, content-addressed storage\n    }\n  },\n  contractId: CONTRACT_ADDRESS,\n  deposit: 10000000000000000000000\n});\n'})})}),(0,r.jsxs)(o.Z,{value:"Paras",label:"Paras",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst CONTRACT_ADDRESS = "x.paras.near";\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'nft_mint\',\n  args: {\n    token_series_id: "490641",\n    receiver_id: "bob.near",\n  },\n  contractId: CONTRACT_ADDRESS,\n  deposit: 10000000000000000000000 // Depends on your NFT metadata\n});\n'})}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["In order to use ",(0,r.jsx)(n.code,{children:"nft_mint"})," method of the ",(0,r.jsx)(n.code,{children:"x.paras.near"})," contract you have to be a creator of a particular token series."]})})]}),(0,r.jsxs)(o.Z,{value:"Mintbase",label:"Mintbase",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { Wallet } from './near-wallet';\n\nconst CONTRACT_ADDRESS = \"thomasettorreiv.mintbase1.near\";\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: 'nft_batch_mint',\n  args: {\n    num_to_mint: 1,\n    owner_id: \"bob.near\",\n    metadata: {},\n  },\n  contractId: CONTRACT_ADDRESS,\n  deposit: 10000000000000000000000 // Depends on your NFT metadata\n});\n"})}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["In order to use ",(0,r.jsx)(n.code,{children:"nft_batch_mint"})," method of Mintbase store contract your account have to be a in the contract minters list."]})}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Check how to do this using ",(0,r.jsx)(n.a,{href:"https://docs.mintbase.xyz/dev/mintbase-sdk-ref/sdk/mint",children:(0,r.jsx)(n.code,{children:"Mintbase JS"})})]})})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["The ",(0,r.jsx)(n.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]})}function f(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(67294),a=t(36905),i=t(12466),o=t(16550),l=t(20469),s=t(91980),u=t(67392),c=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function m(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,o.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(i.location.search);n.set(l,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[l,i])]}function h(e){var n,t,a,i,o=e.defaultValue,s=e.queryString,u=void 0!==s&&s,d=e.groupId,h=m(e),b=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:o,tabValues:h})})),v=b[0],g=b[1],x=p({queryString:u,groupId:d}),j=x[0],w=x[1],T=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),y=T[0],_=T[1],C=function(){var e=null!=j?j:y;return f({value:e,tabValues:h})?e:null}();return(0,l.Z)((function(){C&&g(C)}),[C]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),_(e)}),[w,_,h]),tabValues:h}}var b=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function x(e){var n=e.className,t=e.block,r=e.selectedValue,o=e.selectValue,l=e.tabValues,s=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=s.indexOf(n),a=l[t].value;a!==r&&(u(n),o(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var i,o=s.indexOf(e.currentTarget)-1;t=null!=(i=s[o])?i:s[s.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var o=i.find((function(e){return e.props.value===a}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function w(e){var n=h(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,Object.assign({},e,n)),(0,g.jsx)(j,Object.assign({},e,n))]})}function T(e){var n=(0,b.Z)();return(0,g.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var r=t(67294);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);