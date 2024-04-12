"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1559],{2606:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var t=r(85893),s=r(11151),l=r(77229);const a={id:"skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"},i=void 0,d={id:"tutorials/fts/skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",description:'\uc774 \uae00\uc5d0\uc11c\ub294 \uc774 "Zero to Hero" \uc2dc\ub9ac\uc988\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uac1c\ubc1c\ud558\uac8c \ub420 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uc744 \ubc1c\uacac\ud558\uace0 \uc644\uc804\ud55c \uae30\ub2a5\uc744 \uac16\ucd98 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud574 Rust \ud30c\uc77c\uc774 \uc5b4\ub5bb\uac8c \uad6c\uc131\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/fts/1-skeleton.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/skeleton",permalink:"/ko/tutorials/fts/skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1705914809e3,sidebarPosition:1,frontMatter:{id:"skeleton",title:"\ubf08\ub300 \ubc0f Rust \uc544\ud0a4\ud14d\ucc98",sidebar_label:"\ucee8\ud2b8\ub799\ud2b8 \uc544\ud0a4\ud14d\ucc98"},sidebar:"tutorials",previous:{title:"\uc0ac\uc804 \ubc30\ud3ec\ub41c \ucee8\ud2b8\ub799\ud2b8",permalink:"/ko/tutorials/fts/predeployed-contract"},next:{title:"\ud1a0\ud070 \uc815\uc758",permalink:"/ko/tutorials/fts/defining-a-token"}},c={},o=[{value:"\uc18c\uac1c",id:"\uc18c\uac1c",level:2},{value:"\ud30c\uc77c \uad6c\uc870",id:"\ud30c\uc77c-\uad6c\uc870",level:2},{value:"\uc18c\uc2a4 \ud30c\uc77c",id:"\uc18c\uc2a4-\ud30c\uc77c",level:3},{value:"<code>ft_core.rs</code>",id:"ft_corers",level:2},{value:"<code>lib.rs</code>",id:"librs",level:2},{value:"<code>metadata.rs</code>",id:"metadatars",level:2},{value:"<code>storage.rs</code>",id:"storagers",level:2},{value:"\ubf08\ub300 \ub9cc\ub4e4\uae30",id:"\ubf08\ub300-\ub9cc\ub4e4\uae30",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\uc774 \uae00\uc5d0\uc11c\ub294 \uc774 ",(0,t.jsx)(n.em,{children:'"Zero to Hero"'})," \uc2dc\ub9ac\uc988\ub97c \uc9c4\ud589\ud558\uba74\uc11c \uac1c\ubc1c\ud558\uac8c \ub420 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \uc544\ud0a4\ud14d\ucc98\uc5d0 \ub300\ud574 \uc54c\uc544\ubd05\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uc744 \ubc1c\uacac\ud558\uace0 \uc644\uc804\ud55c \uae30\ub2a5\uc744 \uac16\ucd98 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud574 Rust \ud30c\uc77c\uc774 \uc5b4\ub5bb\uac8c \uad6c\uc131\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"New to Rust?",type:"info",children:(0,t.jsxs)(n.p,{children:["If you are new to Rust and want to dive into smart contract development, our ",(0,t.jsx)(n.a,{href:"/ko/build/smart-contracts/quickstart",children:"Quick-start guide"})," is a great place to start."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\uc18c\uac1c",children:"\uc18c\uac1c"}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc740 FT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ucf54\ub4dc \ubf08\ub300\uc640 \ud30c\uc77c \uad6c\uc870\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ubaa8\ub4e0 \ud568\uc218\uac00 \ubc30\uce58\ub41c \ubc29\ubc95\uacfc \ucc44\uc6cc\uc57c \ud558\ub294 \ub204\ub77d\ub41c Rust \ucf54\ub4dc\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubaa8\ub4e0 \ud30c\uc77c\uacfc \ud568\uc218\uac00 \ub2e4\ub8e8\uc5b4\uc9c0\uba74 \ubaa8\ud615 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud558\ub294 \ud504\ub85c\uc138\uc2a4\ub97c \uac70\uccd0 \ubaa8\ub4e0 \uac83\uc774 \uc62c\ubc14\ub974\uac8c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"\ud30c\uc77c-\uad6c\uc870",children:"\ud30c\uc77c \uad6c\uc870"}),"\n",(0,t.jsxs)(n.p,{children:["\ub808\ud37c\uc9c0\ud1a0\ub9ac\uc5d0\ub294 \ub2e4\uc591\ud55c \ud3f4\ub354\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uac01 \ud3f4\ub354\ub294 \ubf08\ub300 \ud3f4\ub354\uc5d0\uc11c \uc2dc\uc791\ud558\uc5ec \uc644\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8 \ud3f4\ub354\ub85c \ub05d\ub098\ub294 \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc758 \ub2e4\ub978 \uc774\uc815\ud45c\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uc774 \ud3f4\ub354\ub4e4 \uc911 \ud558\ub098\uc5d0 \ub4e4\uc5b4\uac00\uba74, \uac01\uac01 \uc77c\ubc18 ",(0,t.jsx)(n.a,{href:"https://www.rust-lang.org/",children:"Rust"})," \ud504\ub85c\uc81d\ud2b8\ub97c \ub530\ub974\uace0 \uc788\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ud30c\uc77c \uad6c\uc870\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Cargo.toml"}),": \ucf54\ub4dc \uc758\uc874\uc131(dependency)\uc744 \uc815\uc758\ud558\uae30 \uc704\ud55c \ud30c\uc77c(Javascript\ub098 node \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\uc758 ",(0,t.jsx)(n.code,{children:"package.json"}),"\uacfc \uc720\uc0ac)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"src"}),": \ubaa8\ub4e0 Rust \uc18c\uc2a4 \ud30c\uc77c\uc774 \uc800\uc7a5\ub418\ub294 \ud3f4\ub354\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"target"}),": \ucef4\ud30c\uc77c\ub41c ",(0,t.jsx)(n.code,{children:"wasm"})," \ud30c\uc77c\uc774 \ucd9c\ub825\ub420 \ud3f4\ub354\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"build.sh"}),": \uc18c\uc2a4 \ucf54\ub4dc\ub97c \ucef4\ud30c\uc77c\ud558\ub294 \ub354 \ud3b8\ub9ac\ud55c \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 \ucd94\uac00\ub41c \uc2a4\ud06c\ub9bd\ud2b8"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\uc18c\uc2a4-\ud30c\uc77c",children:"\uc18c\uc2a4 \ud30c\uc77c"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\ud30c\uc77c"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#corers",children:"ft_core.rs"})}),(0,t.jsxs)(n.td,{children:["\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070(FT)\uc758 \uc561\uc138\uc2a4 \ubc0f \uc804\uc1a1\uc744 \uc81c\uc5b4\ud558\ub294 \ub85c\uc9c1\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4. \uc774 \ud30c\uc77c\uc740 ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"\ud575\uc2ec"})," \ud45c\uc900\uc758 \uad6c\ud604\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#librs",children:"lib.rs"})}),(0,t.jsx)(n.td,{children:"\uacf5\uac1c\ub41c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud568\uc218\ub4e4\uc744 \uac00\uc9c0\uace0 \uc788\uace0, \uc5b4\ub5a4 \uc815\ubcf4\uac00 \uc628\uccb4\uc778\uc5d0 \uc800\uc7a5\ub420\uc9c0 \uc9c0\uc2dc\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#metadatars",children:"metadata.rs"})}),(0,t.jsxs)(n.td,{children:["\ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130 \uad6c\uc870\ub97c \uc815\uc758\ud569\ub2c8\ub2e4. \uc774 \ud30c\uc77c\uc740 \ud45c\uc900\uc758 ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Metadata",children:"\uba54\ud0c0\ub370\uc774\ud130"})," \ud655\uc7a5 \uad6c\ud604\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#storagers",children:"storage.rs"})}),(0,t.jsxs)(n.td,{children:["\ub4f1\ub85d \ubc0f \uc800\uc7a5\uc744 \uc704\ud55c \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4.  \uc774 \ud30c\uc77c\uc740 ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac"})," \ud45c\uc900\uc758 \uad6c\ud604\uc744 \ub098\ud0c0\ub0c5\ub2c8\ub2e4."]})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"skeleton\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 build.sh\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 ft_core.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 metadata.rs\n    \u2514\u2500\u2500 storage.rs\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/near-examples/ft-tutorial/tree/main/1.skeleton",children:"GitHub \ub808\ud37c\uc9c0\ud1a0\ub9ac"}),"\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uc138\uc694."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"ft_corers",children:(0,t.jsx)(n.code,{children:"ft_core.rs"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uc0ac\uc6a9\uc790 \uac04\uc5d0 FT\ub97c \uc804\uc1a1\ud558\uace0 \uc911\uc694\ud55c \uc815\ubcf4\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\ub294 \ud575\uc2ec \ub85c\uc9c1\uc785\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"ft_transfer"})}),(0,t.jsx)(n.td,{children:"\uc9c0\uc815\ub41c \uc591\uc758 FT\ub97c \uc218\uc2e0\uc790 ID\ub85c \uc804\uc1a1\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"ft_transfer_call"})}),(0,t.jsxs)(n.td,{children:["\uc9c0\uc815\ub41c \uc591\uc758 FT\ub97c \uc218\uc2e0\uc790\uc5d0\uac8c \uc804\uc1a1\ud558\uace0, \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(cross-contract call)\uc744 \uc218\ud589\ud558\uc5ec ",(0,t.jsx)(n.code,{children:"ft_on_transfer"})," \uba54\uc11c\ub4dc\ub97c \uc2e4\ud589\ud558\ub824\uace0 \uc2dc\ub3c4\ud569\ub2c8\ub2e4. \uc774 ",(0,t.jsx)(n.code,{children:"ft_on_transfer"})," \uba54\uc11c\ub4dc\uc758 \uad6c\ud604\uc740 \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131\uc790\uc5d0\uac8c \ub2ec\ub824 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc758 \ub9c8\ucf13\ud50c\ub808\uc774\uc2a4 \uc139\uc158\uc5d0\uc11c \uc608\uc81c \uad6c\ud604\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"ft_on_transfer"}),"\uc758 \uc2e4\ud589\uc774 \ub05d\ub098\uba74, ",(0,t.jsx)(n.code,{children:"ft_resolve_transfer"}),"\ub294 \ud638\ucd9c\ub418\uc5b4\uc11c \uc131\uacf5\uc801\uc73c\ub85c \uc218\ud589\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ub429\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"ft_total_supply"})}),(0,t.jsx)(n.td,{children:"\ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc720\ud1b5\ub418\ub294 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc758 \ucd1d\ub7c9\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"ft_balance_of"})}),(0,t.jsx)(n.td,{children:"\ud2b9\uc815 \uc0ac\uc6a9\uc790\uac00 \uc18c\uc720\ud55c \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070 \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"ft_on_transfer"})}),(0,t.jsxs)(n.td,{children:["\uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub530\ub77c \uc9c4\ud589\ub418\ub294 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"ft_transfer_call"})," \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 FT\uac00 \uc218\uc2e0\uc790\uc758 \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815\uc73c\ub85c \uc804\uc1a1\ub420 \ub54c \ud638\ucd9c\ub429\ub2c8\ub2e4. \uc774\ub294 \ubcf4\ub0b8 \uc0ac\ub78c\uc5d0\uac8c \ub2e4\uc2dc \ud658\ubd88\ud574\uc57c \ud558\ub294 FT \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"ft_resolve_transfer"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"ft_on_transfer"})," \uc2e4\ud589\uc774 \uc644\ub8cc\ub41c \ud6c4 \ud638\ucd9c\ub429\ub2c8\ub2e4. \uc774 \ud568\uc218\ub294 \uc218\uc2e0\uc790 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc740 FT\ub97c \ud658\ubd88\ud558\uace0 \ud658\ubd88 \ud6c4 \uc218\uc2e0\uc790\uc5d0\uac8c \uc804\uc1a1\ub41c \uc21c FT \uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4(\uc788\ub294 \uacbd\uc6b0)."]})]})]})]}),"\n",(0,t.jsx)(l.Ey,{language:"rust",start:"61",end:"166",url:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/ft_core.rs"}),"\n",(0,t.jsxs)(n.p,{children:["You'll learn more about these functions in the ",(0,t.jsx)(n.a,{href:"/tutorials/fts/circulating-supply",children:"circulating supply"})," and ",(0,t.jsx)(n.a,{href:"/tutorials/fts/transfers",children:"transfers"})," sections of the tutorial series."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"librs",children:(0,t.jsx)(n.code,{children:"lib.rs"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\uc774 \ud30c\uc77c\uc740 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc800\uc7a5\ud558\uace0 \ucd94\uc801\ud558\ub294 \uc815\ubcf4\ub97c \uac04\ub7b5\ud558\uac8c \uc124\uba85\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"new_default_meta"})}),(0,t.jsxs)(n.td,{children:["\uae30\ubcf8 ",(0,t.jsx)(n.code,{children:"metadata"}),"\ub97c \uc774\uc6a9\ud574 \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud574, \uc0ac\uc6a9\uc790\uac00 \uc785\ub825\uac12\uc744 \uc81c\uacf5\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub3c4\ub85d \ud569\ub2c8\ub2e4. \ub610\ud55c \uc18c\uc720\uc790\uc5d0\uac8c \uc804\uc1a1\ub418\ub294 \uc804\uccb4 \ud1a0\ud070 \uc218\ub7c9\uc744 \uc804\ub2ec\ub429\ub2c8\ub2e4."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"new"})}),(0,t.jsxs)(n.td,{children:["\uc0ac\uc6a9\uc790\uac00 \uc81c\uacf5\ud55c ",(0,t.jsx)(n.code,{children:"metadata"}),"\uc640 \ucd1d \uacf5\uae09\ub7c9\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4."]})]})]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Keep in mind",type:"info",children:(0,t.jsxs)(n.p,{children:["The initialization functions (",(0,t.jsx)(n.code,{children:"new"}),", ",(0,t.jsx)(n.code,{children:"new_default_meta"}),") can only be called once."]})}),"\n",(0,t.jsx)(l.Ey,{language:"rust",start:"34",end:"58",url:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/lib.rs"}),"\n",(0,t.jsxs)(n.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,t.jsx)(n.a,{href:"/ko/tutorials/fts/defining-a-token",children:"\ud1a0\ud070 \uc815\uc758"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"metadatars",children:(0,t.jsx)(n.code,{children:"metadata.rs"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\uc774 \ud30c\uc77c\uc740 \ud1a0\ud070 \ubc0f \uba54\ud0c0\ub370\uc774\ud130\uc5d0 \ub300\ud574 \uc800\uc7a5\ud560 \uc815\ubcf4\ub97c \ucd94\uc801\ud558\ub294 \ub370 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub610\ud55c \ud45c\uc900 \uba54\ud0c0\ub370\uc774\ud130 \ud655\uc7a5\uc758 \uc77c\ubd80\uc778 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Metadata",children:"\uba54\ud0c0\ub370\uc774\ud130"}),"\ub97c \ubcf4\ub294 \uae30\ub2a5\uc744 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uc774\ub984"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"FungibleTokenMetadata"})}),(0,t.jsx)(n.td,{children:"\uc774 \uad6c\uc870\ub294 \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070\uc758 \uba54\ud0c0\ub370\uc774\ud130\ub97c \uc815\uc758\ud569\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"ft_metadata"})}),(0,t.jsx)(n.td,{children:"\uc774 \ud568\uc218\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\ub294 \ud1a0\ud070\uc758 \uba54\ud0c0\ub370\uc774\ud130\ub97c \ucffc\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]})]})]}),"\n",(0,t.jsx)(l.Ey,{language:"rust",start:"10",end:"30",url:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/metadata.rs"}),"\n",(0,t.jsxs)(n.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,t.jsx)(n.a,{href:"/ko/tutorials/fts/defining-a-token",children:"\ud1a0\ud070 \uc815\uc758"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"storagers",children:(0,t.jsx)(n.code,{children:"storage.rs"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac"})," \ud45c\uc900\uc5d0 \ub530\ub978 \ub4f1\ub85d \ub85c\uc9c1\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\uba54\uc11c\ub4dc"}),(0,t.jsx)(n.th,{children:"\uc124\uba85"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"storage_deposit"})}),(0,t.jsx)(n.td,{children:"\uc8fc\uc5b4\uc9c4 \uacc4\uc815\uc5d0 \ub300\ud574 \u24c3\uc758 \uc785\uae08\uc744 \ubc1b\ub294 \uc9c0\uae09 \uba54\uc11c\ub4dc\uc785\ub2c8\ub2e4. \uc774\ub807\uac8c \ud558\uba74 \ucee8\ud2b8\ub799\ud2b8 \uc0ac\uc6a9\uc790\uac00 \ub4f1\ub85d\ub429\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"storage_balance_bounds"})}),(0,t.jsx)(n.td,{children:"\ucee8\ud2b8\ub799\ud2b8\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\ub294 \ub370 \ud544\uc694\ud55c \ucd5c\uc18c \ubc0f \ucd5c\ub300 \ud5c8\uc6a9 \uc2a4\ud1a0\ub9ac\uc9c0 \uae08\uc561\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. FT \ucee8\ud2b8\ub799\ud2b8\uc758 \uacbd\uc6b0 \ucd5c\uc18c\uac12 = \ucd5c\ub300\uac12\uc785\ub2c8\ub2e4."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"storage_balance_of"})}),(0,t.jsx)(n.td,{children:"\uc9c0\uc815\ub41c \uc0ac\uc6a9\uc790\uac00 \uc9c0\ubd88\ud55c \ucd1d \uc2a4\ud1a0\ub9ac\uc9c0 \ubc0f \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. FT \ucee8\ud2b8\ub799\ud2b8\uc758 \uacbd\uc6b0 \ub4f1\ub85d\uc744 \uc704\ud574 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud558\uace0 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \ub300\ud574 \ucd08\uacfc \uc9c0\ubd88\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0, \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc2a4\ud1a0\ub9ac\uc9c0\ub294 \ud56d\uc0c1 0\uc785\ub2c8\ub2e4."})]})]})]}),"\n",(0,t.jsx)(l.Ey,{language:"rust",start:"79",end:"106",url:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/storage.rs"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\ud29c\ud1a0\ub9ac\uc5bc \uc2dc\ub9ac\uc988\uc758 ",(0,t.jsx)(n.a,{href:"/ko/tutorials/fts/registering-accounts",children:"\uc2a4\ud1a0\ub9ac\uc9c0"}),"\uc5d0\uc11c \uc774\ub7ec\ud55c \uae30\ub2a5\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc54c\uc544\ubcfc \uac83\uc785\ub2c8\ub2e4."]})}),"\n",(0,t.jsx)(n.h2,{id:"\ubf08\ub300-\ub9cc\ub4e4\uae30",children:"\ubf08\ub300 \ub9cc\ub4e4\uae30"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\uc544\uc9c1 \uae30\ubcf8 \ub808\ud37c\uc9c0\ud1a0\ub9ac\ub97c \ubcf5\uc81c\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0 \ud130\ubbf8\ub110\uc744 \uc5f4\uace0 \ub2e4\uc74c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"git clone https://github.com/near-examples/ft-tutorial/\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\ub2e4\uc74c\uc73c\ub85c ",(0,t.jsx)(n.code,{children:"1.skeleton/build.sh"})," \ud30c\uc77c \ub0b4\uc5d0 \uc788\ub294 \ube4c\ub4dc \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubf08\ub300 \ucee8\ud2b8\ub799\ud2b8\ub97c \ube4c\ub4dc\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"cd ft-tutorial/1.skeleton\n./build.sh\ncd ..\n"})}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \uc18c\uc2a4\ub294 \ubf08\ub300\uc77c \ubfd0\uc774\ubbc0\ub85c \ub2e4\uc74c\uacfc \uac19\uc774 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ucf54\ub4dc\uc5d0 \ub300\ud55c \ub9ce\uc740 \uacbd\uace0\ub97c \ubc1b\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"   = note: `#[warn(dead_code)]` on by default\n\nwarning: constant is never used: `GAS_FOR_RESOLVE_TRANSFER`\n --\x3e src/ft_core.rs:5:1\n  |\n5 | const GAS_FOR_RESOLVE_TRANSFER: Gas = Gas(5_000_000_000_000);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nwarning: constant is never used: `GAS_FOR_FT_TRANSFER_CALL`\n --\x3e src/ft_core.rs:6:1\n  |\n6 | const GAS_FOR_FT_TRANSFER_CALL: Gas = Gas(25_000_000_000_000 + GAS_FOR_RESOLVE_TRANSFER.0);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nwarning: `fungible-token` (lib) generated 25 warnings\n    Finished release [optimized] target(s) in 1.93s\n\u2728  Done in 2.03s.\n"})}),"\n",(0,t.jsx)(n.p,{children:"\uc774\ub7ec\ud55c \uacbd\uace0\uc5d0 \ub300\ud574 \uac71\uc815\ud558\uc9c0 \ub9c8\uc138\uc694. \uc544\uc9c1 \uc774 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4. \ubf08\ub300 \uad6c\ucd95\ud558\ub294 \uac83\uc740 Rust \ud234\uccb4\uc778\uc774 \uc81c\ub300\ub85c \uc791\ub3d9\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc774\uace0, \uc774\ub294 \ub2e4\uc74c \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c \uc774 NFT \ucee8\ud2b8\ub799\ud2b8\uc758 \uac1c\uc120\ub41c \ubc84\uc804\uc744 \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ub370 \uc720\uc6a9\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,t.jsxs)(n.p,{children:["\uc774 NFT \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \ub808\uc774\uc544\uc6c3\uacfc \ub2e4\uc591\ud55c \uc18c\uc2a4 \ud30c\uc77c\uc5d0 \ubaa8\ub4e0 \ud568\uc218\uac00 \uc5b4\ub5bb\uac8c \ubc30\uce58\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"yarn"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ucef4\ud30c\uc77c\ud560 \uc218 \uc788\uc5c8\uace0, \ud29c\ud1a0\ub9ac\uc5bc\uc758 \ub2e4\uc74c ",(0,t.jsx)(n.a,{href:"/tutorials/fts/circulating-supply",children:"\uc139\uc158"}),"\uc5d0\uc11c \uc774 \ubf08\ub300\ub97c \uad6c\uccb4\ud654\ud558\uae30 \uc2dc\uc791\ud560 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.admonition,{title:"\ubb38\uc11c\uc758 \ubc84\uc804 \uad00\ub9ac",type:"note",children:[(0,t.jsx)(n.p,{children:"\uc774 \uae00\uc744 \uc4f0\ub294 \uc2dc\uc810\uc5d0\uc11c \uc774 \uc608\uc81c\ub294 \ub2e4\uc74c \ubc84\uc804\uc5d0\uc11c \uc791\ub3d9\ud569\ub2c8\ub2e4."}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["rustc: ",(0,t.jsx)(n.code,{children:"1.6.0"})]}),"\n",(0,t.jsxs)(n.li,{children:["near-sdk-rs: ",(0,t.jsx)(n.code,{children:"4.0.0"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>a});r(67294);var t=r(36905);const s={tabItem:"tabItem_Ymn6"};var l=r(85893);function a(e){var n=e.children,r=e.hidden,a=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(s.tabItem,a),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>k});var t=r(67294),s=r(36905),l=r(12466),a=r(16550),i=r(20469),d=r(91980),c=r(67392),o=r(50012);function u(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function x(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,r=void 0!==n&&n,s=e.groupId,l=(0,a.k6)(),i=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:s});return[(0,d._X)(i),(0,t.useCallback)((function(e){if(i){var n=new URLSearchParams(l.location.search);n.set(i,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[i,l])]}function f(e){var n,r,s,l,a=e.defaultValue,d=e.queryString,c=void 0!==d&&d,u=e.groupId,f=h(e),p=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!x({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var s=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:f})})),b=p[0],g=p[1],m=j({queryString:c,groupId:u}),v=m[0],_=m[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,o.Nk)(n),s=r[0],l=r[1],[s,(0,t.useCallback)((function(e){n&&l.set(e)}),[n,l])]),y=k[0],T=k[1],w=function(){var e=null!=v?v:y;return x({value:e,tabValues:f})?e:null}();return(0,i.Z)((function(){w&&g(w)}),[w]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!x({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),_(e),T(e)}),[_,T,f]),tabValues:f}}var p=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function m(e){var n=e.className,r=e.block,t=e.selectedValue,a=e.selectValue,i=e.tabValues,d=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,o=function(e){var n=e.currentTarget,r=d.indexOf(n),s=i[r].value;s!==t&&(c(n),a(s))},u=function(e){var n,r=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var t,s=d.indexOf(e.currentTarget)+1;r=null!=(t=d[s])?t:d[0];break;case"ArrowLeft":var l,a=d.indexOf(e.currentTarget)-1;r=null!=(l=d[a])?l:d[d.length-1]}null==(n=r)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},n),children:i.map((function(e){var n=e.value,r=e.label,l=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return d.push(e)},onKeyDown:u,onClick:o},l,{className:(0,s.Z)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function v(e){var n=e.lazy,r=e.children,s=e.selectedValue,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var a=l.find((function(e){return e.props.value===s}));return a?(0,t.cloneElement)(a,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function _(e){var n=f(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(m,Object.assign({},e,n)),(0,g.jsx)(v,Object.assign({},e,n))]})}function k(e){var n=(0,p.Z)();return(0,g.jsx)(_,Object.assign({},e,{children:u(e.children)}),String(n))}},77229:(e,n,r)=>{r.d(n,{Ey:()=>o,O2:()=>d,SQ:()=>c});r(67294);var t=r(74866),s=r(85162),l=r(95665),a=r.n(l),i=r(85893);function d(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,i.jsx)(t.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,i.jsx)(s.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var n=e.children,r=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var r=e.props,t=(r.children,r.url),s=r.start,l=r.end,a=r.fname;if(e.type===o)return o({url:t,start:s,end:l,language:n,fname:a});return e}(e,r)})),1==n.length?(0,i.jsx)(s.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,i.jsx)(t.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,i.jsx)(s.Z,{value:n,label:e.props.fname,children:e})}))})}function o(e){var n=e.url,r=e.start,t=e.end,s=e.language,l=e.fname,d=n+"#";return r&&t&&(d+="L"+r+"-L"+t+"#"),(0,i.jsx)(a(),{language:s,fname:l,children:d})}}}]);