"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4193],{18998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=t(85893),a=t(11151),o=t(74866),c=t(85162);const l={id:"lock",title:"Locking Accounts"},u=void 0,s={id:"build/smart-contracts/release/lock",title:"Locking Accounts",description:"Removing all full access keys from an account will effectively lock it.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/release/lock.md",sourceDirName:"2.build/2.smart-contracts/release",slug:"/build/smart-contracts/release/lock",permalink:"/vi/build/smart-contracts/release/lock",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/release/lock.md",tags:[],version:"current",frontMatter:{id:"lock",title:"Locking Accounts"},sidebar:"build",previous:{title:"Updating Contracts",permalink:"/vi/build/smart-contracts/release/upgrade"},next:{title:"Security",permalink:"/vi/build/smart-contracts/security/welcome"}},i={},d=[{value:"How to Lock an Account",id:"how-to-lock-an-account",level:4},{value:"Why Locking an Account",id:"why-locking-an-account",level:4}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Removing all ",(0,r.jsx)(n.a,{href:"/vi/tools/near-cli#near-delete-key-near-delete-key",children:"full access keys"})," from an account will effectively ",(0,r.jsx)(n.strong,{children:"lock it"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"When an account is locked nobody can perform transactions in the account's name (e.g. update the code or transfer money)."}),"\n",(0,r.jsx)(n.h4,{id:"how-to-lock-an-account",children:"How to Lock an Account"}),"\n",(0,r.jsxs)(o.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,r.jsx)(c.Z,{value:"near-cli",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near keys <dev-account>\n# result: [access_key: {\"nonce\": ..., \"public_key\": '<key>'}]\n\nnear delete-key <dev-account> '<key>'\n"})})}),(0,r.jsx)(c.Z,{value:"near-cli-rs",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near account list-keys <dev-account> network-config testnet now\n# result:\n\n+---+------------+-------+-------------+\n| # | Public Key | Nonce | Permissions |\n+---+------------+-------+-------------+\n..    '<key>'      ...        ...\n+---+------------+-------+-------------+\n\nnear account delete-key <dev-account> '<key>' network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,r.jsx)(n.h4,{id:"why-locking-an-account",children:"Why Locking an Account"}),"\n",(0,r.jsx)(n.p,{children:"Locking an account brings more reassurance to end-users, since they know no external actor will be able to manipulate the account's\ncontract or balance."}),"\n",(0,r.jsx)(n.admonition,{title:"Upgrading Locked Contracts",type:"tip",children:(0,r.jsxs)(n.p,{children:["Please do note that, while no external actor can update the contract, the contract ",(0,r.jsx)(n.strong,{children:"can still upgrade itself"}),". See ",(0,r.jsx)(n.a,{href:"/vi/build/smart-contracts/release/upgrade#programmatic-update",children:"this article"})," for details."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function c(e){var n=e.children,t=e.hidden,c=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,c),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),o=t(12466),c=t(16550),l=t(20469),u=t(91980),s=t(67392),i=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function f(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,s.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function v(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,c.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,u._X)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(o.location.search);n.set(l,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[l,o])]}function m(e){var n,t,a,o,c=e.defaultValue,u=e.queryString,s=void 0!==u&&u,d=e.groupId,m=f(e),p=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:c,tabValues:m})})),b=p[0],g=p[1],k=v({queryString:s,groupId:d}),y=k[0],x=k[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,i.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),j=w[0],I=w[1],V=function(){var e=null!=y?y:j;return h({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){V&&g(V)}),[V]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),x(e),I(e)}),[x,I,m]),tabValues:m}}var p=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function k(e){var n=e.className,t=e.block,r=e.selectedValue,c=e.selectValue,l=e.tabValues,u=[],s=(0,o.o5)().blockElementScrollPositionUntilNextRender,i=function(e){var n=e.currentTarget,t=u.indexOf(n),a=l[t].value;a!==r&&(s(n),c(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;t=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var o,c=u.indexOf(e.currentTarget)-1;t=null!=(o=u[c])?o:u[u.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return u.push(e)},onKeyDown:d,onClick:i},o,{className:(0,a.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function y(e){var n=e.lazy,t=e.children,a=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var c=o.find((function(e){return e.props.value===a}));return c?(0,r.cloneElement)(c,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function x(e){var n=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(k,Object.assign({},e,n)),(0,g.jsx)(y,Object.assign({},e,n))]})}function w(e){var n=(0,p.Z)();return(0,g.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var r=t(67294);const a={},o=r.createContext(a);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);