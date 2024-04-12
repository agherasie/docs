"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[461],{7742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>x,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=t(85893),r=t(11151),s=t(74866),i=t(85162),l=t(77229);const c={id:"anatomy",title:"The Contract Class"},o=void 0,d={id:"build/smart-contracts/anatomy/anatomy",title:"The Contract Class",description:"\ucee8\ud2b8\ub799\ud2b8\uc758 \ub85c\uc9c1 \ubc0f \uc0c1\ud0dc(\uc2a4\ud1a0\ub9ac\uc9c0)\ub294 \ud575\uc2ec \ud074\ub798\uc2a4\uc5d0 \uc758\ud574 \uc815\uc758\ub429\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/anatomy/anatomy.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/",permalink:"/ko/build/smart-contracts/anatomy/",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/anatomy.md",tags:[],version:"current",frontMatter:{id:"anatomy",title:"The Contract Class"},sidebar:"build",previous:{title:"\ubaa8\ub4c8, \uc790\ub8cc\ud615 \ubc0f \uad6c\uc870",permalink:"/ko/build/smart-contracts/anatomy/basics"},next:{title:"\ud658\uacbd",permalink:"/ko/build/smart-contracts/anatomy/environment"}},u={},h=[{value:"\ucee8\ud2b8\ub799\ud2b8 \uc815\uc758",id:"\ucee8\ud2b8\ub799\ud2b8-\uc815\uc758",level:2},{value:"The State",id:"the-state",level:3},{value:"Initializing the State",id:"initializing-the-state",level:2},{value:"Initialization Method",id:"initialization-method",level:3},{value:"\uae30\ubcf8 \uc0c1\ud0dc",id:"\uae30\ubcf8-\uc0c1\ud0dc",level:3},{value:"\uc778\ud130\ud398\uc774\uc2a4",id:"\uc778\ud130\ud398\uc774\uc2a4",level:2},{value:"\ud37c\ube14\ub9ad \uba54\uc11c\ub4dc",id:"\ud37c\ube14\ub9ad-\uba54\uc11c\ub4dc",level:3},{value:"\ud504\ub77c\uc774\ube57 \uba54\uc11c\ub4dc",id:"\ud504\ub77c\uc774\ube57-\uba54\uc11c\ub4dc",level:3},{value:"\uc9c0\ubd88 \uac00\ub2a5 \uba54\uc11c\ub4dc",id:"\uc9c0\ubd88-\uac00\ub2a5-\uba54\uc11c\ub4dc",level:3},{value:"\uc785\ub825 \ubc0f \ubc18\ud658 \uc790\ub8cc\ud615",id:"\uc785\ub825-\ubc0f-\ubc18\ud658-\uc790\ub8cc\ud615",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8\uc758 \ub85c\uc9c1 \ubc0f \uc0c1\ud0dc(\uc2a4\ud1a0\ub9ac\uc9c0)\ub294 ",(0,a.jsx)(n.a,{href:"#near-bindgen",children:"\ud575\uc2ec \ud074\ub798\uc2a4"}),"\uc5d0 \uc758\ud574 \uc815\uc758\ub429\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\uc18d\uc131\uc740 ",(0,a.jsx)(n.a,{href:"#%EC%83%81%ED%83%9C-%EC%A0%95%EC%9D%98",children:"\ucee8\ud2b8\ub799\ud2b8\uc758 \uc0c1\ud0dc"}),"\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#%EC%83%81%ED%83%9C-%EC%B4%88%EA%B8%B0%ED%99%94",children:"\ucd08\uae30\ud654 \uba54\uc11c\ub4dc"}),"\ub294 \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654\ud558\ub294 \ubc29\uc2dd\uc5d0 \ub300\ud574 \uc815\uc758\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.li,{children:"\ud37c\ube14\ub9ad \uba54\uc11c\ub4dc\ub294 \ub098\uba38\uc9c0 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ub300\ud55c \ucee8\ud2b8\ub799\ud2b8\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub85c \uc791\uc6a9\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"\ucee8\ud2b8\ub799\ud2b8-\uc815\uc758",children:"\ucee8\ud2b8\ub799\ud2b8 \uc815\uc758"}),"\n",(0,a.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8\ub294 \uace0\uc720\ud55c \ud2b9\uc131\uacfc \uba54\uc11c\ub4dc\uac00 \uc788\ub294 \ub610 \ub2e4\ub978 \ud074\ub798\uc2a4\uc785\ub2c8\ub2e4. \uc774\ub97c \ub2e4\ub978 \ub0b4\ubd80 \ud074\ub798\uc2a4\uc640 ",(0,a.jsx)(n.strong,{children:"\uad6c\ubcc4"}),"\ud558\ub824\uba74, ",(0,a.jsxs)(n.a,{href:"#decorators--macros",children:[(0,a.jsx)(n.code,{children:"NEAR Bindgen"})," \ub370\ucf54\ub808\uc774\ud130/\ub9e4\ud06c\ub85c"]}),"\ub97c \uc0ac\uc6a9\ud574\ubcf4\uc138\uc694."]}),"\n",(0,a.jsxs)(l.O2,{children:[(0,a.jsx)(l.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,a.jsx)(l.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/contract.ts",start:"6",end:"9"})}),(0,a.jsx)(l.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,a.jsx)(l.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/lib.rs",start:"13",end:"16"})})]}),"\n",(0,a.jsxs)(n.p,{children:["Under the hood, the ",(0,a.jsx)(n.code,{children:"NEAR Bindgen"})," decorator/macro traverses the class, generating the necessary code to:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Transform the code into a valid NEAR contract."}),"\n",(0,a.jsx)(n.li,{children:"Expose public methods, so they can be called externally."}),"\n",(0,a.jsx)(n.li,{children:"Serialize objects for internal storage and communication with external actors."}),"\n"]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"the-state",children:"The State"}),"\n",(0,a.jsxs)(n.p,{children:["Each account has its own state (storage), which ",(0,a.jsx)(n.strong,{children:"only they can modify"})," but ",(0,a.jsx)(n.a,{href:"/ko/tools/near-cli#near-view-state-near-view-state",children:"anyone can see"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The state is defined and modified through the ",(0,a.jsx)(n.strong,{children:"main class' attributes"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Contracts ",(0,a.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/storage#storage-cost",children:(0,a.jsx)(n.strong,{children:"pay for their storage"})})," by locking part of their balance. Currently it costs ",(0,a.jsx)(n.strong,{children:"~1 \u24c3"})," to store ",(0,a.jsx)(n.strong,{children:"100kb"})]}),"\n",(0,a.jsx)(n.admonition,{title:"Key-Value Storage",type:"info",children:(0,a.jsxs)(n.p,{children:["The contract actually uses a ",(0,a.jsx)(n.code,{children:"key-value"})," storage to persist values. This however is abstracted from you\nby the SDK through ",(0,a.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/serialization",children:"serialization"}),"."]})}),"\n",(0,a.jsx)(n.admonition,{title:"Prefer SDK Collections",type:"tip",children:(0,a.jsxs)(n.p,{children:["When defining attributes, ",(0,a.jsxs)(n.strong,{children:["always prefer ",(0,a.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/storage",children:"SDK collections"})]})," over native ones, since they are optimized for ",(0,a.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/serialization",children:"serialization"}),"."]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"initializing-the-state",children:"Initializing the State"}),"\n",(0,a.jsx)(n.p,{children:"There are two ways to initialize the account's state, and they can co-exist:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["An ",(0,a.jsx)(n.strong,{children:"initialization method"})," that receives the attributes needed for the state"]}),"\n",(0,a.jsxs)(n.li,{children:["A ",(0,a.jsx)(n.strong,{children:"default state"}),", which will be used until ",(0,a.jsx)(n.code,{children:"init"})," is invoked, or a method writes into the state"]}),"\n"]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"initialization-method",children:"Initialization Method"}),"\n",(0,a.jsxs)(n.p,{children:["To define an initialization method simply decorate it with the ",(0,a.jsx)(n.a,{href:"#decorators--macros",children:"initialization macro"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The method will now be able to define the initial state's values, raising an error if invoked\nwhile ",(0,a.jsx)(n.strong,{children:"the state is already initialized"}),"."]}),"\n",(0,a.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsxs)(i.Z,{value:"\ud83c\udf10 JavaScript",children:[(0,a.jsx)(l.Ey,{fname:"contract.ts",language:"ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/contract.ts",start:"11",end:"14"}),(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["To make the initialization mandatory use ",(0,a.jsx)(n.code,{children:"@NearBindgen({requireInit: true})"})]})}),(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["In JavaScript you ",(0,a.jsx)(n.strong,{children:"must always"})," define a ",(0,a.jsx)(n.a,{href:"#default-state",children:"default state"})]})})]}),(0,a.jsxs)(i.Z,{value:"\ud83e\udd80 Rust",children:[(0,a.jsx)(l.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/lib.rs",start:"35",end:"40"}),(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["To make the initialization mandatory use ",(0,a.jsx)(n.code,{children:"#[derive(PanicOnDefault)]"})," in the contract's structure"]})})]})]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"\uae30\ubcf8-\uc0c1\ud0dc",children:"\uae30\ubcf8 \uc0c1\ud0dc"}),"\n",(0,a.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8\ub294 \ucd08\uae30\ud654 \uba54\uc11c\ub4dc\uac00 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \uc0ac\uc6a9\ud560 ",(0,a.jsx)(n.strong,{children:"\uae30\ubcf8 \uc0c1\ud0dc"}),"\ub97c \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc989, ",(0,a.jsx)(n.code,{children:"init"})," \uc774\ubca4\ud2b8\uac00 \ubc1c\uc0dd\ud558\uae30 \uc804\uc5d0 \uba54\uc11c\ub4dc\uac00 \ud638\ucd9c\ub418\uba74, \ucee8\ud2b8\ub799\ud2b8\ub294 \uae30\ubcf8\uac12\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.p,{children:"\uba54\uc11c\ub4dc\uac00 \uc0c1\ud0dc\uc5d0 \uae30\ub85d\ub418\uba74, \uc0c1\ud0dc\uac00 \ucd08\uae30\ud654\ub41c \uac83\uc73c\ub85c \uac04\uc8fc\ub429\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsxs)(i.Z,{value:"\ud83c\udf10 JavaScript",children:[(0,a.jsx)(l.Ey,{fname:"contract.ts",language:"ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/contract.ts",start:"6",end:"9"}),(0,a.jsx)(n.p,{children:"\ud83c\udf10 JavaScript\uc5d0\uc11c \uae30\ubcf8 \uc0c1\ud0dc\ub294 \ud074\ub798\uc2a4 \uc815\uc758 \ub0b4 \ucd08\uae30\ud654 \ub9e4\uac1c\ubcc0\uc218\uc5d0 \uc758\ud574 \uc815\uc758\ub429\ub2c8\ub2e4."}),(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Javascript\uc5d0\uc11c\ub294 \ud56d\uc0c1 ",(0,a.jsx)(n.strong,{children:"\ubaa8\ub4e0 \ud074\ub798\uc2a4\uc758 \ub9e4\uac1c\ubcc0\uc218"}),"\uc5d0 \uac12\uc744 \ud560\ub2f9",(0,a.jsx)(n.strong,{children:"\ud574\uc57c \ud569\ub2c8\ub2e4"}),". \uc774\ub807\uac8c \ud558\uba74 \uc758\ub3c4\ud55c \ud615\uc2dd\uc73c\ub85c \uc62c\ubc14\ub974\uac8c ",(0,a.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/serialization",children:"\uc5ed\uc9c1\ub82c\ud654"}),"\ub429\ub2c8\ub2e4 ."]})})]}),(0,a.jsx)(i.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(l.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/lib.rs",start:"19",end:"26"})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"\uc778\ud130\ud398\uc774\uc2a4",children:"\uc778\ud130\ud398\uc774\uc2a4"}),"\n",(0,a.jsxs)(n.p,{children:["\ubaa8\ub4e0 ",(0,a.jsx)(n.strong,{children:"\ud37c\ube14\ub9ad \uba54\uc11c\ub4dc"}),"\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub85c \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uacf5\uac1c\ub429\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"  @NearBindgen({})\n  class Contract {\n\n    @initialize({ ... })\n    init({ ... }) { /* public `init` method */ }\n\n    @view({})\n    get_message({ ...  }) { /* public `view` method */ }\n  \n    @call({})\n    add_message({ ... }) { /* public `call` method */ }\n\n    private internal_search( ... ) { /* private internal method */ }\n\n    @call({privateFunction: true})\n    set_owner({ ... }) { /* public, panics when caller is not the contract's account */ }\n  }\n"})})}),(0,a.jsx)(i.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"  #[near_bindgen]\n  impl Contract {\n    #[init]\n    pub fn init( ... ) -> Self { /* public `init` method */ }\n    pub fn get_message(&self, ... ) { /* public `view` method */ }\n    pub fn add_message(&mut self, ... ) { /* public `call` method */ }\n    fn internal_search(&self, ... ) { /* private internal method */ }\n\n    #[private]\n    pub fn set_owner(&mut self, ... ) { /* public, panics when caller is not the contract's account */ }\n  }\n"})})})]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"\ud37c\ube14\ub9ad-\uba54\uc11c\ub4dc",children:"\ud37c\ube14\ub9ad \uba54\uc11c\ub4dc"}),"\n",(0,a.jsxs)(n.p,{children:["\ud37c\ube14\ub9ad \uba54\uc11c\ub4dc\ub294 ",(0,a.jsx)(n.code,{children:"init"})," \uba54\uc11c\ub4dc, ",(0,a.jsx)(n.code,{children:"view"})," \uba54\uc11c\ub4dc, \uadf8\ub9ac\uace0 ",(0,a.jsx)(n.code,{children:"call"})," \uba54\uc11c\ub4dc\uc758 \uc138 \uac00\uc9c0 \uc720\ud615\uc73c\ub85c \ubd84\ub958\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Init \uba54\uc11c\ub4dc"})," : \ucee8\ud2b8\ub799\ud2b8 \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654\ud558\ub294 \ubc29\ubc95\uc744 \uc815\uc758\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"View \uba54\uc11c\ub4dc"}),": \uc0c1\ud0dc\ub97c ",(0,a.jsx)(n.strong,{children:"\ubcc0\uacbd"}),"\ud558\uac70\ub098 \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\ub97c ",(0,a.jsx)(n.strong,{children:"\ud638\ucd9c"}),"\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. They can be called for free by everyone, ",(0,a.jsx)(n.strong,{children:"without needing"})," a NEAR account."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Call \uba54\uc11c\ub4dc"}),": \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\uac70\ub098 \ub2e4\ub978 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud558\ub294 \uac83\uacfc \uac19\uc740 ",(0,a.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/actions",children:"\uc791\uc5c5"}),"\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["By default ",(0,a.jsx)(n.code,{children:"view"})," methods have ",(0,a.jsx)(n.code,{children:"200TGas"})," to execute, to increase this you can simply invoke them as ",(0,a.jsx)(n.code,{children:"call"})," methods."]})})}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["\uae30\ubcf8\uc801\uc73c\ub85c ",(0,a.jsx)(n.code,{children:"init"})," \uba54\uc11c\ub4dc\ub294 \uacf5\uac1c\ub418\uc5b4 \uc788\uc73c\ubbc0\ub85c, \uc774\ub97c ",(0,a.jsxs)(n.a,{href:"#private-methods",children:[(0,a.jsx)(n.code,{children:"private"}),"\uc73c\ub85c \ub9cc\ub4e4\uac70\ub098"]}),", ",(0,a.jsx)(n.a,{href:"../deploy.md#initializing-the-contract",children:"\ubc30\ud3ec \uc2dc \ucd08\uae30\ud654\ub97c \uc77c\uad04 \ud638\ucd9c"}),"\ud574\uc57c \ud569\ub2c8\ub2e4."]})})}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"\ud504\ub77c\uc774\ube57-\uba54\uc11c\ub4dc",children:"\ud504\ub77c\uc774\ube57 \uba54\uc11c\ub4dc"}),"\n",(0,a.jsxs)(n.p,{children:["\ub54c\ub85c\ub294 \uc77c\ubd80 \uba54\uc11c\ub4dc\ub97c \uacf5\uac1c \uc0c1\ud0dc\ub85c \uc720\uc9c0\ud558\ub418, \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815\uc5d0\uc11c\ub9cc \ud638\ucd9c\ud560 \uc218 \uc788\uae30\ub97c \uc6d0\ud560 \uac83\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc790\uba74 ",(0,a.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/crosscontract#callback-method",children:"\uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ucf5c\ubc31"}),"\uc774 \uadf8\ub7ec\ud55c \uacbd\uc6b0\uc785\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(n.p,{children:["\uc774\ub97c \uc704\ud574 ",(0,a.jsx)(n.code,{children:"private"})," \ub9e4\ud06c\ub85c/\ub370\ucf54\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"  @call({privateFunction: true})\n  callback( ... ){\n    // this method can only be called by the contract's account\n  }\n"})})}),(0,a.jsx)(i.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"  #[private]\n  pub fn callback(&mut self, ... ){\n    // this method can only be called by the contract's account\n  }\n"})})})]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"\uc9c0\ubd88-\uac00\ub2a5-\uba54\uc11c\ub4dc",children:"\uc9c0\ubd88 \uac00\ub2a5 \uba54\uc11c\ub4dc"}),"\n",(0,a.jsxs)(n.p,{children:["\uae30\ubcf8\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790\uac00 \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud560 \ub54c, ",(0,a.jsx)(n.strong,{children:"\ub3c8\uc744 \ucca8\ubd80\ud558\uba74"})," \ubaa8\ub4e0 \uba54\uc11c\ub4dc\uac00 ",(0,a.jsx)(n.strong,{children:"\ud328\ub2c9 \uc0c1\ud0dc"}),"\uac00 \ub429\ub2c8\ub2e4. \ub3c8\uc744 \ubc1b\ub294 \ubc29\ubc95\uc744 \ud65c\uc131\ud654\ud558\ub824\uba74, \uc9c0\ubd88 \uac00\ub2a5 \ub370\ucf54\ub808\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\uc2ed\uc2dc\uc624."]}),"\n",(0,a.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,a.jsx)(i.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"  @call({payableFunction: true})\n  deposit_and_stake( ... ){\n    // this method can receive money from the user\n  }\n"})})}),(0,a.jsx)(i.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"  #[payable]\n  pub fn deposit_and_stake(&mut self, ... ){\n    // this method can receive money from the user\n  }\n"})})})]}),"\n",(0,a.jsx)("hr",{className:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"\uc785\ub825-\ubc0f-\ubc18\ud658-\uc790\ub8cc\ud615",children:"\uc785\ub825 \ubc0f \ubc18\ud658 \uc790\ub8cc\ud615"}),"\n",(0,a.jsxs)(n.p,{children:["\ucee8\ud2b8\ub799\ud2b8\ub294 \ubcf5\uc7a1\ud55c \uad6c\uc870\ub97c \ud3ec\ud568\ud558\uc5ec \ubaa8\ub4e0 ",(0,a.jsx)(n.code,{children:"\uae30\ubcf8 \uc790\ub8cc\ud615"}),"\uc744 \uc218\uc2e0\ud558\uace0 \ubc18\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uacc4\uc57d\uc740 ",(0,a.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/serialization",children:"JSON\uc744 \uc0ac\uc6a9"}),"\ud55c \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 \ud1b5\uc2e0\ud558\uae30 \ub54c\ubb38\uc5d0:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\ud56d\uc0c1 \uc785\ub825 \ubc0f \uc790\ub8cc\ud615\uc73c\ub85c ",(0,a.jsx)(n.code,{children:"SDK Collections"}),"\ubcf4\ub2e4 **",(0,a.jsx)(n.code,{children:"\uae30\ubcf8 \uc790\ub8cc\ud615"}),"**\uc744 \uc120\ud638\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"strings"}),"\uc744 ",(0,a.jsx)(n.code,{children:"u64"}),"/",(0,a.jsx)(n.code,{children:"u128"}),"\ub85c \uad50\uccb4\ud569\ub2c8\ub2e4(Rust SDK\uc5d0\uc11c\ub294 ",(0,a.jsx)(n.code,{children:"U64"}),"/",(0,a.jsx)(n.code,{children:"U128"}),")."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(67294),r=t(36905),s=t(12466),i=t(16550),l=t(20469),c=t(91980),o=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function x(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,i.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,c._X)(l),(0,a.useCallback)((function(e){if(l){var n=new URLSearchParams(s.location.search);n.set(l,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[l,s])]}function j(e){var n,t,r,s,i=e.defaultValue,c=e.queryString,o=void 0!==c&&c,u=e.groupId,j=h(e),p=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:j})})),b=p[0],f=p[1],v=x({queryString:o,groupId:u}),g=v[0],y=v[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=w[0],N=w[1],S=function(){var e=null!=g?g:k;return m({value:e,tabValues:j})?e:null}();return(0,l.Z)((function(){S&&f(S)}),[S]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!m({value:e,tabValues:j}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),N(e)}),[y,N,j]),tabValues:j}}var p=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function v(e){var n=e.className,t=e.block,a=e.selectedValue,i=e.selectValue,l=e.tabValues,c=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=c.indexOf(n),r=l[t].value;r!==a&&(o(n),i(r))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=c.indexOf(e.currentTarget)+1;t=null!=(a=c[r])?a:c[0];break;case"ArrowLeft":var s,i=c.indexOf(e.currentTarget)-1;t=null!=(s=c[i])?s:c[c.length-1]}null==(n=t)||n.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return c.push(e)},onKeyDown:u,onClick:d},s,{className:(0,r.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function g(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=s.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=j(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(v,Object.assign({},e,n)),(0,f.jsx)(g,Object.assign({},e,n))]})}function w(e){var n=(0,p.Z)();return(0,f.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>d,O2:()=>c,SQ:()=>o});t(67294);var a=t(74866),r=t(85162),s=t(95665),i=t.n(s),l=t(85893);function c(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,l.jsx)(a.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,l.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function o(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,a=(t.children,t.url),r=t.start,s=t.end,i=t.fname;if(e.type===d)return d({url:a,start:r,end:s,language:n,fname:i});return e}(e,t)})),1==n.length?(0,l.jsx)(r.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,l.jsx)(a.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,l.jsx)(r.Z,{value:n,label:e.props.fname,children:e})}))})}function d(e){var n=e.url,t=e.start,a=e.end,r=e.language,s=e.fname,c=n+"#";return t&&a&&(c+="L"+t+"-L"+a+"#"),(0,l.jsx)(i(),{language:r,fname:s,children:c})}}}]);