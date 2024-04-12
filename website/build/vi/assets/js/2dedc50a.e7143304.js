"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7068],{21930:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(85893),r=a(11151),s=(a(74866),a(85162),a(77229));const i={id:"update-contract-migrate-state",title:"Self Upgrade & State Migration"},l=void 0,u={id:"tutorials/examples/update-contract-migrate-state",title:"Self Upgrade & State Migration",description:"Three examples on how to handle updates and state migration:",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/examples/update.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/update-contract-migrate-state",permalink:"/vi/tutorials/examples/update-contract-migrate-state",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/update.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712567569e3,frontMatter:{id:"update-contract-migrate-state",title:"Self Upgrade & State Migration"},sidebar:"tutorials",previous:{title:"Complex Cross Contract Call",permalink:"/vi/tutorials/examples/advanced-xcc"},next:{title:"Frontend & Multiple Contracts",permalink:"/vi/tutorials/examples/frontend-multiple-contracts"}},o={},c=[{value:"State Migration",id:"state-migration",level:2},{value:"The Migration Method",id:"the-migration-method",level:4},{value:"State Versioning",id:"state-versioning",level:2},{value:"Self Update",id:"self-update",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Three examples on how to handle updates and ",(0,n.jsx)(t.a,{href:"/vi/build/smart-contracts/release/upgrade",children:"state migration"}),":"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/near-examples/update-migrate-rust/tree/main/basic-updates",children:"State Migration"}),": How to implement a ",(0,n.jsx)(t.code,{children:"migrate"})," method to migrate state between contract updates."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/near-examples/update-migrate-rust/tree/main/enum-updates",children:"State Versioning"}),": How to use readily use versioning on a state, to simplify updating it later."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/near-examples/update-migrate-rust/tree/main/self-updates",children:"Self Update"}),": How to implement a contract that can update itself."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"state-migration",children:"State Migration"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/near-examples/update-migrate-rust/tree/main/basic-updates",children:"State Migration example"})," shows how to handle state-breaking changes between contract updates."]}),"\n",(0,n.jsx)(t.p,{children:"It is composed by 2 contracts:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Base: A Guest Book where people can write messages."}),"\n",(0,n.jsx)(t.li,{children:"Update: An update in which we remove a parameter and change the internal structure."}),"\n"]}),"\n",(0,n.jsx)(s.O2,{children:(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"migrate.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/basic-updates/update/src/migrate.rs",start:"18",end:"45"})})}),"\n",(0,n.jsx)(t.h4,{id:"the-migration-method",children:"The Migration Method"}),"\n",(0,n.jsxs)(t.p,{children:["The migration method deserializes the current state (",(0,n.jsx)(t.code,{children:"OldState"}),") and iterates through the messages, updating them to the new ",(0,n.jsx)(t.code,{children:"PostedMessage"})," that includes the ",(0,n.jsx)(t.code,{children:"payment"})," field."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Notice that migrate is actually an ",(0,n.jsx)(t.a,{href:"/vi/build/smart-contracts/anatomy/#initialization-method",children:"initialization method"})," that ignores the existing state (",(0,n.jsx)(t.code,{children:"[#init(ignore_state)]"}),"), thus being able to execute and rewrite the state."]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"state-versioning",children:"State Versioning"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/near-examples/update-migrate-rust/tree/main/enum-updates",children:"State Versioning example"})," shows how to use ",(0,n.jsx)(t.a,{href:"https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html",children:"Enums"})," to implement state versioning on a contract."]}),"\n",(0,n.jsx)(t.p,{children:"Versioning simplifies updating the contract since you only need to add a new new version of the structure. All versions can coexist, thus you will not need to change previously existing structures."}),"\n",(0,n.jsx)(t.p,{children:"The example is composed by 2 contracts:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Base: The Guest Book contract using versioned ",(0,n.jsx)(t.code,{children:"PostedMessages"})," (",(0,n.jsx)(t.code,{children:"PostedMessagesV1"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:["Update: An update that adds a new version of ",(0,n.jsx)(t.code,{children:"PostedMessages"})," (",(0,n.jsx)(t.code,{children:"PostedMessagesV2"}),")."]}),"\n"]}),"\n",(0,n.jsx)(s.O2,{children:(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"versioned_msg.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/enum-updates/update/src/versioned_msg.rs",start:"18",end:"36"})})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"self-update",children:"Self Update"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/near-examples/update-migrate-rust/tree/main/self-updates",children:"Self Update example"})," shows how to implement a contract that can update itself."]}),"\n",(0,n.jsx)(t.p,{children:"It is composed by 2 contracts:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["Base: A Guest Book were people can write messages, implementing a ",(0,n.jsx)(t.code,{children:"update_contract"})," method."]}),"\n",(0,n.jsx)(t.li,{children:"Update: An update in which we remove a parameter and change the internal structure."}),"\n"]}),"\n",(0,n.jsx)(s.O2,{children:(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"update.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/self-updates/base/src/update.rs",start:"10",end:"31"})})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>i});a(67294);var n=a(36905);const r={tabItem:"tabItem_Ymn6"};var s=a(85893);function i(e){var t=e.children,a=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>y});var n=a(67294),r=a(36905),s=a(12466),i=a(16550),l=a(20469),u=a(91980),o=a(67392),c=a(50012);function d(e){var t,a;return null!=(t=null==(a=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}function h(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(a);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,s=(0,i.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:r});return[(0,u._X)(l),(0,n.useCallback)((function(e){if(l){var t=new URLSearchParams(s.location.search);t.set(l,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[l,s])]}function g(e){var t,a,r,s,i=e.defaultValue,u=e.queryString,o=void 0!==u&&u,d=e.groupId,g=h(e),f=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:g})})),v=f[0],x=f[1],b=m({queryString:o,groupId:d}),j=b[0],w=b[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),a=(0,c.Nk)(t),r=a[0],s=a[1],[r,(0,n.useCallback)((function(e){t&&s.set(e)}),[t,s])]),S=y[0],V=y[1],k=function(){var e=null!=j?j:S;return p({value:e,tabValues:g})?e:null}();return(0,l.Z)((function(){k&&x(k)}),[k]),{selectedValue:v,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),V(e)}),[w,V,g]),tabValues:g}}var f=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(85893);function b(e){var t=e.className,a=e.block,n=e.selectedValue,i=e.selectValue,l=e.tabValues,u=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,a=u.indexOf(t),r=l[a].value;r!==n&&(o(t),i(r))},d=function(e){var t,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;a=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var s,i=u.indexOf(e.currentTarget)-1;a=null!=(s=u[i])?s:u[u.length-1]}null==(t=a)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:l.map((function(e){var t=e.value,a=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},s,{className:(0,r.Z)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===t}),children:null!=a?a:t}),t)}))})}function j(e){var t=e.lazy,a=e.children,r=e.selectedValue,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===r}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function w(e){var t=g(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(b,Object.assign({},e,t)),(0,x.jsx)(j,Object.assign({},e,t))]})}function y(e){var t=(0,f.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,a)=>{a.d(t,{Ey:()=>c,O2:()=>u,SQ:()=>o});a(67294);var n=a(74866),r=a(85162),s=a(95665),i=a.n(s),l=a(85893);function u(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,l.jsx)(n.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,l.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function o(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,n=(a.children,a.url),r=a.start,s=a.end,i=a.fname;if(e.type===c)return c({url:n,start:r,end:s,language:t,fname:i});return e}(e,a)})),1==t.length?(0,l.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,l.jsx)(n.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,l.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function c(e){var t=e.url,a=e.start,n=e.end,r=e.language,s=e.fname,u=t+"#";return a&&n&&(u+="L"+a+"-L"+n+"#"),(0,l.jsx)(i(),{language:r,fname:s,children:u})}}}]);