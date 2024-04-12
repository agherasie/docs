"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6261],{84891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=t(85893),a=t(11151),l=t(74866),s=t(85162);const o={},i=void 0,u={id:"build/primitives/nft/web-app/transfer",title:"transfer",description:"The Wallet object comes from our quickstart template",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/5.primitives/nft/web-app/transfer.md",sourceDirName:"2.build/5.primitives/nft/web-app",slug:"/build/primitives/nft/web-app/transfer",permalink:"/zh-CN/build/primitives/nft/web-app/transfer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/nft/web-app/transfer.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function f(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(l.Z,{groupId:"nft-contract-tabs",className:"file-tabs",children:[(0,r.jsxs)(s.Z,{value:"NFT Primitive",label:"Reference",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst CONTRACT_ADDRESS = "nft.primitives.near";\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'nft_transfer\',\n  args: {\n    token_id: "1",\n    receiver_id: "bob.near"\n  },\n  contractId: CONTRACT_ADDRESS,\n  deposit: 1\n});\n'})}),(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["The ",(0,r.jsx)(n.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]}),(0,r.jsxs)(s.Z,{value:"Paras",label:"Paras",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst CONTRACT_ADDRESS = "x.paras.near";\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'nft_transfer\',\n  args: {\n    token_id: "490641",\n    receiver_id: "bob.near"\n  },\n  contractId: CONTRACT_ADDRESS,\n  deposit: 1\n});\n'})}),(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["The ",(0,r.jsx)(n.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})})]}),(0,r.jsxs)(s.Z,{value:"Mintbase",label:"Mintbase",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst CONTRACT_ADDRESS = "thomasettorreiv.mintbase1.near";\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'nft_transfer\',\n  args: {\n    token_id: "490641",\n    receiver_id: "bob.near"\n  },\n  contractId: CONTRACT_ADDRESS,\n  deposit: 1\n});\n'})}),(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["The ",(0,r.jsx)(n.code,{children:"Wallet"})," object comes from our ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/near-wallet.js",children:"quickstart template"})]})}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Check how to also do this using ",(0,r.jsx)(n.a,{href:"https://docs.mintbase.xyz/dev/mintbase-sdk-ref/sdk/transfer",children:(0,r.jsx)(n.code,{children:"Mintbase JS"})})]})})]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var l=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(67294),a=t(36905),l=t(12466),s=t(16550),o=t(20469),i=t(91980),u=t(67392),c=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function f(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function p(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,l=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(l.location.search);n.set(o,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[o,l])]}function h(e){var n,t,a,l,s=e.defaultValue,i=e.queryString,u=void 0!==i&&i,d=e.groupId,h=f(e),b=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:h})})),v=b[0],j=b[1],x=p({queryString:u,groupId:d}),g=x[0],w=x[1],T=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(n),a=t[0],l=t[1],[a,(0,r.useCallback)((function(e){n&&l.set(e)}),[n,l])]),C=T[0],y=T[1],S=function(){var e=null!=g?g:C;return m({value:e,tabValues:h})?e:null}();return(0,o.Z)((function(){S&&j(S)}),[S]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:h}))throw new Error("Can't select invalid tab value="+e);j(e),w(e),y(e)}),[w,y,h]),tabValues:h}}var b=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function x(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,o=e.tabValues,i=[],u=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(u(n),s(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;t=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var l,s=i.indexOf(e.currentTarget)-1;t=null!=(l=i[s])?l:i[i.length-1]}null==(n=t)||n.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,l=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return i.push(e)},onKeyDown:d,onClick:c},l,{className:(0,a.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function g(e){var n=e.lazy,t=e.children,a=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=l.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function w(e){var n=h(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(x,Object.assign({},e,n)),(0,j.jsx)(g,Object.assign({},e,n))]})}function T(e){var n=(0,b.Z)();return(0,j.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const a={},l=r.createContext(a);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);