"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4094],{52379:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var o=t(85893),r=t(11151);const s={},i=void 0,a={id:"build/primitives/dao/bos/create-proposal",title:"create-proposal",description:"",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/5.primitives/dao/bos/create-proposal.md",sourceDirName:"2.build/5.primitives/dao/bos",slug:"/build/primitives/dao/bos/create-proposal",permalink:"/vi/build/primitives/dao/bos/create-proposal",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/dao/bos/create-proposal.md",tags:[],version:"current",frontMatter:{}},c={},p=[];function d(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'Near.call(\n  "primitives.sputnik-dao.near",\n  "add_proposal",\n  {\n    proposal: {\n      description: "My first proposal",\n      kind: {\n        Transfer: {\n          token_id: "",\n          receiver_id: "bob.near",\n          amount: "10000000000000000000000000",\n        },\n      },\n    },\n  },\n  300000000000000,\n  100000000000000000000000\n);\n'})})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(67294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);