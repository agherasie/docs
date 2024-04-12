"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5153],{29407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(85893),r=n(11151),l=(n(74866),n(85162),n(77229));const s={id:"frontend-multiple-contracts",title:"Frontend Interacting with Multiple Contracts",sidebar_label:"Frontend & Multiple Contracts"},i=void 0,o={id:"tutorials/examples/frontend-multiple-contracts",title:"Frontend Interacting with Multiple Contracts",description:"This example showcases how to interact with multiple contracts from a single frontend.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/examples/frontend-multiple-contracts.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/frontend-multiple-contracts",permalink:"/zh-CN/tutorials/examples/frontend-multiple-contracts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/frontend-multiple-contracts.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{id:"frontend-multiple-contracts",title:"Frontend Interacting with Multiple Contracts",sidebar_label:"Frontend & Multiple Contracts"},sidebar:"tutorials",previous:{title:"Self Upgrade & State Migration",permalink:"/zh-CN/tutorials/examples/update-contract-migrate-state"},next:{title:"BOS Loader",permalink:"/zh-CN/tutorials/near-components/bos-loader"}},u={},c=[{value:"Query Data from Multiple Contracts",id:"query-data-from-multiple-contracts",level:2},{value:"Dispatching Multiple Transactions",id:"dispatching-multiple-transactions",level:2},{value:"Batch Actions",id:"batch-actions",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"This example showcases how to interact with multiple contracts from a single frontend."}),"\n",(0,a.jsx)(t.p,{children:"Particularly, this example shows how to:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Query data from multiple contracts."}),"\n",(0,a.jsx)(t.li,{children:"Call methods in multiple contracts simultaneously."}),"\n"]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"query-data-from-multiple-contracts",children:"Query Data from Multiple Contracts"}),"\n",(0,a.jsxs)(t.p,{children:["To query multiple contracts simply perform multiple ",(0,a.jsx)(t.code,{children:"view"})," calls:"]}),"\n",(0,a.jsx)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,a.jsx)(l.Ey,{fname:"index.js",url:"https://github.com/near-examples/frontend-multiple-contracts/blob/main/frontend/index.js",start:"70",end:"76"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"dispatching-multiple-transactions",children:"Dispatching Multiple Transactions"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"wallet"})," object enables to dispatch multiple transactions simultaneously. However, please notice that the transactions execute independently."]}),"\n",(0,a.jsx)(t.p,{children:"Dispatching multiple transactions at once is just a nice way to improve UX, because the user interacts with the wallet only once."}),"\n",(0,a.jsx)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,a.jsx)(l.Ey,{fname:"index.js",url:"https://github.com/near-examples/frontend-multiple-contracts/blob/main/frontend/index.js",start:"39",end:"66"})}),"\n",(0,a.jsx)(t.p,{children:"In this example, the user signs two independent transactions:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["A transaction to call ",(0,a.jsx)(t.code,{children:"set_greeting"})," in our ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples",children:"Hello NEAR example"})]}),"\n",(0,a.jsxs)(t.li,{children:["A transaction to call ",(0,a.jsx)(t.code,{children:"add_message"})," in our ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/guest-book-examples",children:"GuestBook example"})]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsxs)(t.p,{children:["Even when the user accepts signing the transactions at the same time, the transactions remain ",(0,a.jsx)(t.strong,{children:"independent"}),". This is, if one fails, the other is ",(0,a.jsx)(t.strong,{children:"NOT"})," rolled back."]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"batch-actions",children:"Batch Actions"}),"\n",(0,a.jsxs)(t.p,{children:["You can aggregate multiple ",(0,a.jsx)(t.a,{href:"/zh-CN/build/smart-contracts/anatomy/actions",children:"actions"})," directed towards a same contract into a single transaction. Batched actions execute ",(0,a.jsx)(t.strong,{children:"sequentially"}),", with the added benefit that, if ",(0,a.jsx)(t.strong,{children:"one fails"})," then they ",(0,a.jsx)(t.strong,{children:"all"})," get reverted."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"  // Register a user and transfer them FT on a single take\n  const REGISTER_DEPOSIT = \"1250000000000000000000\";\n\n  const ftTx = {\n    receiverId: FT_ADDRESS,\n    actions: [\n      {\n        type: 'FunctionCall',\n        params: {\n          methodName: 'storage_deposit',\n          args: { account_id: \"<receiver-account>\" },\n          gas: THIRTY_TGAS, deposit: REGISTER_DEPOSIT\n        }\n      },\n      {\n        type: 'FunctionCall',\n        params: {\n          methodName: 'ft_transfer',\n          args: { receiver_id: \"<receiver-account>\", amount: amount_in_yocto },\n          gas: THIRTY_TGAS, deposit: 1 }\n      }\n    ]\n  }\n\n  // Ask the wallet to sign and send the transaction\n  await wallet.signAndSendTransactions({ transactions: [ ftTx ] })\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var l=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),l=n(12466),s=n(16550),i=n(20469),o=n(91980),u=n(67392),c=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,s.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,o._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function f(e){var t,n,r,l,s=e.defaultValue,o=e.queryString,u=void 0!==o&&o,d=e.groupId,f=h(e),v=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:f})})),g=v[0],b=v[1],x=m({queryString:u,groupId:d}),j=x[0],y=x[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,c.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),T=w[0],I=w[1],S=function(){var e=null!=j?j:T;return p({value:e,tabValues:f})?e:null}();return(0,i.Z)((function(){S&&b(S)}),[S]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),I(e)}),[y,I,f]),tabValues:f}}var v=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function x(e){var t=e.className,n=e.block,a=e.selectedValue,s=e.selectValue,i=e.tabValues,o=[],u=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=o.indexOf(t),r=i[n].value;r!==a&&(u(t),s(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,r=o.indexOf(e.currentTarget)+1;n=null!=(a=o[r])?a:o[0];break;case"ArrowLeft":var l,s=o.indexOf(e.currentTarget)-1;n=null!=(l=o[s])?l:o[o.length-1]}null==(t=n)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,l=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:c},l,{className:(0,r.Z)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function j(e){var t=e.lazy,n=e.children,r=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var s=l.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=f(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(x,Object.assign({},e,t)),(0,b.jsx)(j,Object.assign({},e,t))]})}function w(e){var t=(0,v.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>c,O2:()=>o,SQ:()=>u});n(67294);var a=n(74866),r=n(85162),l=n(95665),s=n.n(l),i=n(85893);function o(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,i.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,i.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function u(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,l=n.end,s=n.fname;if(e.type===c)return c({url:a,start:r,end:l,language:t,fname:s});return e}(e,n)})),1==t.length?(0,i.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,i.jsx)(a.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,i.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function c(e){var t=e.url,n=e.start,a=e.end,r=e.language,l=e.fname,o=t+"#";return n&&a&&(o+="L"+n+"-L"+a+"#"),(0,i.jsx)(s(),{language:r,fname:l,children:o})}}}]);