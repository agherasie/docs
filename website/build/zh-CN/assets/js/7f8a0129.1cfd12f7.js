"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6724],{93780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o=n(85893),r=n(11151);const s={},i=void 0,p={id:"build/primitives/linkdrop/bos/simple-drop",title:"simple-drop",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/5.primitives/linkdrop/bos/simple-drop.md",sourceDirName:"2.build/5.primitives/linkdrop/bos",slug:"/build/primitives/linkdrop/bos/simple-drop",permalink:"/zh-CN/build/primitives/linkdrop/bos/simple-drop",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/linkdrop/bos/simple-drop.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function u(e){const t={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'const keypomContract = "v2.keypom.near";\nconst dropAmount = "10000000000000000000000";\n\nNear.call([\n  {\n    contractName: keypomContract,\n    methodName: "create_drop",\n    args: {\n      public_keys: state.publicKeys,\n      deposit_per_use: dropAmount,\n    },\n    deposit: "23000000000000000000000", // state.publicKeys.length * dropAmount + 3000000000000000000000,\n    gas: "100000000000000",\n  },\n]);\n'})})}function a(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>p,a:()=>i});var o=n(67294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);