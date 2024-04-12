"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8597],{24729:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var t=s(85893),o=s(11151);const r={id:"storage-staking",title:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9",sidebar_label:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9"},c=void 0,i={id:"concepts/storage/storage-staking",title:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9",description:"NEAR\uc5d0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud560 \ub54c, \uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9\uc774\ub77c\ub294 \uba54\ucee4\ub2c8\uc998\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ud544\uc694\ud55c \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 \uc9c0\ubd88\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/1.concepts/storage/storage-staking.md",sourceDirName:"1.concepts/storage",slug:"/concepts/storage/storage-staking",permalink:"/ko/concepts/storage/storage-staking",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/storage/storage-staking.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1711465748e3,frontMatter:{id:"storage-staking",title:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9",sidebar_label:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9"},sidebar:"concepts",previous:{title:"NEAR\uc5d0 \uc800\uc7a5\ud558\uae30",permalink:"/ko/concepts/storage/data-storage"},next:{title:"\ub300\uccb4 \uc194\ub8e8\uc158",permalink:"/ko/concepts/storage/storage-solutions"}},a={},d=[{value:"How does NEAR&#39;s design align incentives?",id:"how-does-nears-design-align-incentives",level:2},{value:"When do tokens get staked?",id:"when-do-tokens-get-staked",level:2},{value:"The &quot;million cheap data additions&quot; attack",id:"the-million-cheap-data-additions-attack",level:2},{value:"btw, you can remove data to unstake some tokens",id:"btw-you-can-remove-data-to-unstake-some-tokens",level:2},{value:"How much does it cost?",id:"how-much-does-it-cost",level:2},{value:"Example cost breakdown",id:"example-cost-breakdown",level:2},{value:"Calculate costs for your own contract",id:"calculate-costs-for-your-own-contract",level:2},{value:"Other ways to keep costs down",id:"other-ways-to-keep-costs-down",level:2},{value:"Use a binary serialization format, rather than JSON",id:"use-a-binary-serialization-format-rather-than-json",level:3},{value:"Store data off-chain",id:"store-data-off-chain",level:3},{value:"Summary",id:"summary",level:2},{value:"Footnotes",id:"footnotes",level:2}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"NEAR\uc5d0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud560 \ub54c, \uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9\uc774\ub77c\ub294 \uba54\ucee4\ub2c8\uc998\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc774 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ud544\uc694\ud55c \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 \uc9c0\ubd88\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.p,{children:["\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9(",(0,t.jsx)(n.em,{children:"\uc0c1\ud0dc"})," \uc2a4\ud14c\uc774\ud0b9\uc774\ub77c\uace0\ub3c4 \ud568)\uc5d0\uc11c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc18c\uc720\ud55c \uacc4\uc815\uc740 \ud574\ub2f9 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130\uc758 \uc591\uc5d0 \ub530\ub77c \ud1a0\ud070\uc744 \uc2a4\ud14c\uc774\ud0b9(\ub610\ub294 \uc7a0\uac00\uc57c)\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8 \uacc4\uc815\uc758 \uc794\uace0\ub97c \ud6a8\uacfc\uc801\uc73c\ub85c \uc904\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsxs)("blockquote",{className:"info",children:[(0,t.jsx)("strong",{children:"Ethereum\uc5d0\uc11c \uc624\uc168\ub098\uc694?"}),(0,t.jsx)("br",{}),(0,t.jsx)("br",{}),(0,t.jsx)(n.p,{children:'Ethereum\uc758 \uac00\uaca9 \ucc45\uc815 \ubaa8\ub378\uc5d0 \uc775\uc219\ud558\ub2e4\uba74 NEAR\uc640 \ub9c8\ucc2c\uac00\uc9c0\ub85c \ud504\ub85c\ud1a0\ucf5c\uc774 \uac01 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud574 \uc218\uc218\ub8cc("\uac00\uc2a4"\ub77c\uace0 \ud568)\ub97c \ubd80\uacfc\ud55c\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. NEAR\uc640 \ub2ec\ub9ac Ethereum\uc758 \uac00\uc2a4 \uc694\uae08\uc740 \ud574\ub2f9 \ud2b8\ub79c\uc7ad\uc158\uc744 \ud1b5\ud574 \uc800\uc7a5\ub41c \ub370\uc774\ud130\uc758 \uc591\uc744 \uc124\uba85\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \ubcf8\uc9c8\uc801\uc73c\ub85c \ub204\uad6c\ub098 \uccb4\uc778\uc5d0 \uc601\uad6c \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uae30 \uc704\ud574 \ud55c \ubc88 \uc9c0\ubd88\ud560 \uc218 \uc788\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \uc801\uc5b4\ub3c4 \ub450 \uac00\uc9c0 \uc774\uc720\ub85c \uc778\ud574 \uc88b\uc9c0 \uc54a\uc740 \uacbd\uc81c\uc801 \uc124\uacc4\uc785\ub2c8\ub2e4. 1. \ub124\ud2b8\uc6cc\ud06c\ub97c \uc6b4\uc601\ud558\ub294 \uc0ac\ub78c\ub4e4(\uc774\ub354\ub9ac\uc6c0 1\uc758 \uacbd\uc6b0 \ucc44\uad74\uc790)\uc740 \uba3c \uacfc\uac70\uc5d0 \ubd80\uacfc\ub41c \uac00\uc2a4 \uc694\uae08\uc774 \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 \uc601\uc6d0\ud788 \uc99d\uac00\uc2dc\ud0ac \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub300\ub7c9\uc758 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud560 \uc801\uc808\ud55c \ub3d9\uae30 \ubd80\uc5ec\ub97c \ubc1b\uc9c0 \ubabb\ud569\ub2c8\ub2e4. 2. \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc18c\uc720\uc790\uc5d0\uac8c \ub370\uc774\ud130 \ube44\uc6a9\uc744 \uccad\uad6c\ud558\ub294 \ub300\uc2e0, \uadf8\ub4e4\uc774 \uc800\uc7a5\ud558\uae30 \uc704\ud574 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc0ac\uc6a9\uc790\uc5d0\uac8c \ubcf4\ub0b8 \ub370\uc774\ud130\uc5d0 \ub300\ud574 \ube44\uc6a9\uc744 \uccad\uad6c\ud569\ub2c8\ub2e4.'})]}),"\n",(0,t.jsx)(n.h2,{id:"how-does-nears-design-align-incentives",children:"How does NEAR's design align incentives?"}),"\n",(0,t.jsxs)(n.p,{children:["\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9 \ud1a0\ud070\uc740 \uac80\uc99d \uc2a4\ud14c\uc774\ud0b9\uacfc \uac19\uc740 \ub2e4\ub978 \uc6a9\ub3c4\ub85c\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ub294 \ubc38\ub9ac\ub370\uc774\ud130\uac00 \ubc1b\uc744 \uc218\uc775\ub960\uc744 \uc99d\uac00\uc2dc\ud0b5\ub2c8\ub2e4. Learn more in ",(0,t.jsx)(n.a,{href:"https://pages.near.org/papers/economics-in-sharded-blockchain/",children:"the economics whitepaper"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"when-do-tokens-get-staked",children:"When do tokens get staked?"}),"\n",(0,t.jsx)(n.p,{children:"\ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\ub294 \uac01 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud574 \ud1a0\ud070\uc774 \uc2a4\ud14c\uc774\ud0b9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\uc608\ub97c \ub4e4\uc5b4 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://examples.near.org/guest-book",children:"\ubc29\uba85\ub85d \uc571"}),"\uc744 \uc2dc\uc791 \ud558\uace0 \uc571\uc758 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uacc4\uc815 ",(0,t.jsx)(n.code,{children:"example.near"}),"\uc5d0 \ubc30\ud3ec\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:["\uc571 \ubc29\ubb38\uc790\ub294 \ubc29\uba85\ub85d\uc5d0 \uba54\uc2dc\uc9c0\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. This means your users will, ",(0,t.jsx)(n.a,{href:"/concepts/protocol/gas#what-about-prepaid-gas",children:"by default"}),", pay a small gas fee to send their message to your contract."]}),"\n",(0,t.jsxs)(n.li,{children:["\uc774\ub7ec\ud55c \uc694\uccad\uc774 \ub4e4\uc5b4\uc624\uba74 NEAR\ub294 ",(0,t.jsx)(n.code,{children:"example.near"}),"\uc5d0 \uc0c8\ub85c\uc6b4 \uc2a4\ud1a0\ub9ac\uc9c0 \uc694\uad6c \uc0ac\ud56d\uc744 \ucda9\ub2f9\ud560 \uc218 \uc788\uc744 \ub9cc\ud07c \ucda9\ubd84\ud55c \uc794\uc561\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4. \uadf8\ub807\uc9c0 \uc54a\uc73c\uba74 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc2e4\ud328\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"the-million-cheap-data-additions-attack",children:'The "million cheap data additions" attack'}),"\n",(0,t.jsx)(n.p,{children:"\uc774\ub85c \uc778\ud574 \uacf5\uaca9 \ubca1\ud130\uac00 \uc0dd\uc131\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d \ubc29\uba85\ub85d\uc5d0 \ub370\uc774\ud130\ub97c \ubcf4\ub0b4\ub294 \ub370 \uc0ac\uc6a9\uc790\uc5d0\uac8c\ub294 \uac70\uc758 \ube44\uc6a9\uc774 \ub4e4\uc9c0 \uc54a\ub294 \ubc18\uba74 \ucee8\ud2b8\ub799\ud2b8 \uc18c\uc720\uc790\uc5d0\uac8c\ub294 \ud6e8\uc52c \ub354 \ub9ce\uc740 \ube44\uc6a9\uc774 \ub4e0\ub2e4\uace0 \ud55c\ub2e4\uba74, \uc545\uc758\uc801\uc778 \uc0ac\uc6a9\uc790\uac00 \uc774 \ubd88\uade0\ud615\ud55c \uc0c1\ud669\uc744 \uc545\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8 \uc720\uc9c0 \ube44\uc6a9\uc774 \uc5c4\uccad\ub098\uac8c \ub9ce\uc774 \ub4e4\uac8c \ud558\ub294 \uacf5\uaca9\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\ub530\ub77c\uc11c \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc124\uacc4\ud560 \ub54c, \uc774\ub7ec\ud55c \uacf5\uaca9\uc73c\ub85c \uc778\ud574 \uc7a0\uc7ac\uc801 \uacf5\uaca9\uc790\uc5d0\uac8c \uacf5\uaca9\uc758 \ube44\uc6a9\ubcf4\ub2e4 \ub354 \ub9ce\uc740 \uac00\uce58\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub3c4\ub85d \uc8fc\uc758\ud558\uc138\uc694."}),"\n",(0,t.jsx)(n.h2,{id:"btw-you-can-remove-data-to-unstake-some-tokens",children:"btw, you can remove data to unstake some tokens"}),"\n",(0,t.jsxs)(n.p,{children:['\ube14\ub85d\uccb4\uc778\uc5d0 \ub300\ud55c "\ubd88\ubcc0 \ub370\uc774\ud130" \ub0b4\ub7ec\ud2f0\ube0c\uc5d0 \uc775\uc219\ud55c \uc0ac\ub78c\ub4e4\uc740 \uc774\uac83\uc5d0 \ub180\ub77c\uc6cc\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. ',(0,t.jsx)(n.em,{children:"\uc778\ub371\uc2f1 \ub178\ub4dc"})," \uac00 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uc601\uc6d0\ud788 \uc720\uc9c0 \ud558\ub294 \uac83\uc740 \uc0ac\uc2e4\uc774\uc9c0\ub9cc, \ubc38\ub9ac\ub370\uc774\ud130 \ub178\ub4dc(\uc989, \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \ub300\ubd80\ubd84\uc758 \ubc38\ub9ac\ub370\uc774\ud130\uac00 \uc2e4\ud589\ud558\ub294 \ub178\ub4dc)\ub294 \uadf8\ub807\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \ub370\uc774\ud130\ub97c \uc0ad\uc81c\ud558\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud560 \uc218 \uc788\uc73c\uba70, \ud574\ub2f9 \ub370\uc774\ud130\ub294 \uba87 ",(0,t.jsx)(n.a,{href:"/ko/concepts/basics/epoch",children:"\uc5d0\ud3ec\ud06c"})," \ub0b4\uc5d0 \ub124\ud2b8\uc6cc\ud06c\uc758 \ub300\ubd80\ubd84\uc758 \ub178\ub4dc\uc5d0\uc11c \uc81c\uac70\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\ub370\uc774\ud130\ub97c \uc81c\uac70\ud558\uae30 \uc704\ud574 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud638\ucd9c\ud558\uba74 \uad00\ub828 \uac00\uc2a4 \uc694\uae08\uc774 \ubd80\uacfc\ub429\ub2c8\ub2e4. NEAR\uc758 \uac00\uc2a4 \ud55c\ub3c4\ub97c \uac10\uc548\ud560 \ub54c, \uc774\ub294 \ub2e8\uc77c \ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c \uc5bc\ub9c8\ub098 \ub9ce\uc740 \ub370\uc774\ud130\ub97c \uc0ad\uc81c\ud560 \uc218 \uc788\ub294\uc9c0\uc5d0 \ub300\ud55c \uc0c1\ud55c\uc120\uc744 \uc815\ud558\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"how-much-does-it-cost",children:"How much does it cost?"}),"\n",(0,t.jsxs)(n.p,{children:["\uc2a4\ud1a0\ub9ac\uc9c0 \uac00\uaca9\uc740 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uc124\uc815\ud55c \uae08\uc561\uc73c\ub85c \ucc45\uc815\ub418\uba70, \ubc14\uc774\ud2b8\ub2f9 ",(0,t.jsx)(n.strong,{children:"1E19 yocto NEAR"})," \ub610\ub294 ",(0,t.jsx)(n.strong,{children:"NEAR \ud1a0\ud070(\u24c3)\ub2f9 100kb"}),"\ub85c \uc124\uc815\ub429\ub2c8\ub2e4. ",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," ",(0,t.jsx)(n.sup,{children:(0,t.jsx)(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})]}),"\n",(0,t.jsxs)(n.p,{children:["NEAR\uc758 JSON RPC API\ub294 ",(0,t.jsx)(n.a,{href:"/api/rpc/setup#genesis-config",children:"\uc774 \ucd08\uae30 \uc124\uc815\uc744 \ucffc\ub9ac\ud558\ub294 \ubc29\ubc95"}),"\uacfc ",(0,t.jsx)(n.a,{href:"/api/rpc/setup#protocol-config",children:"\ub77c\uc774\ube0c \uad6c\uc131/\ucd5c\uadfc \ube14\ub85d\uc744 \ucffc\ub9ac\ud558\ub294 \ubc29\ubc95"}),"\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4 ."]}),"\n",(0,t.jsx)(n.h2,{id:"example-cost-breakdown",children:"Example cost breakdown"}),"\n",(0,t.jsx)(n.p,{children:"\uc608\uc81c\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/near/NEPs/pull/4",children:"\ub300\uccb4\ubd88\uac00\ub2a5 \ud1a0\ud070"}),"\uc740 \uace0\uc720\ud569\ub2c8\ub2e4. \uc989, \uac01 \ud1a0\ud070\uc5d0\ub294 \uace0\uc720\ud55c ID\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ucee8\ud2b8\ub799\ud2b8\ub294 \ud1a0\ud070 ID\uc5d0\uc11c \uc18c\uc720\uc790\uc758 \uacc4\uc815 ID\ub85c\uc758 \ub9f5\ud551\uc744 \uc800\uc7a5\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\ub7ec\ud55c NFT\ub97c \uc0ac\uc6a9\ud558\uc5ec ",(0,t.jsx)(n.strong,{children:"100\ub9cc \uac1c"}),"\uc758 \ud1a0\ud070\uc744 \ucd94\uc801\ud558\ub294 \uacbd\uc6b0, \ud1a0\ud070-ID-\uc18c\uc720\uc790 \ub9e4\ud551\uc5d0 \uc5bc\ub9c8\ub098 \ub9ce\uc740 \uc2a4\ud1a0\ub9ac\uc9c0\uac00 \ud544\uc694\ud560\uae4c\uc694? \uadf8\ub9ac\uace0 \ud574\ub2f9 \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc5bc\ub9c8\ub098 \ub9ce\uc740 \ud1a0\ud070\uc744 \uc2a4\ud14c\uc774\ud0b9\ud574\uc57c \ud560\uae4c\uc694?"]}),"\n",(0,t.jsxs)(n.p,{children:["\ub370\uc774\ud130\ub97c UTF-8 \ubb38\uc790\uc5f4\ub85c \uc800\uc7a5\ud558\ub294 ",(0,t.jsx)(n.code,{children:"PersistentMap"}),"\ub97c \uc0ac\uc6a9\ud560 \ub54c \ud544\uc694\ud55c \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uacc4\uc0b0\ud574 \ubd05\uc2dc\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uc5ec\uae30 \uc6b0\ub9ac\uc758 ",(0,t.jsx)(n.code,{children:"PersistentMap"}),"\uc774 \uc788\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'type AccountId = string;\ntype TokenId = u64;\nconst tokenToOwner = new PersistentMap<TokenId, AccountId>("t2o");\n'})}),"\n",(0,t.jsxs)(n.p,{children:["NEAR \ube14\ub85d\uccb4\uc778\uc5d0 \uc800\uc7a5\ub41c \ubaa8\ub4e0 \ub370\uc774\ud130\ub294 \ud0a4-\uac12 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"PersistentMap"}),"\uc5d0 \uc804\ub2ec\ub418\ub294 \ubcc0\uc218 ",(0,t.jsx)(n.code,{children:"'t2o'"})," \ub294 \ubaa8\ub4e0 \uac12\uc744 \ucd94\uc801\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4 . \uadc0\ud558\uc758 \uacc4\uc815 ",(0,t.jsx)(n.code,{children:"example.near"}),"\uac00 ID ",(0,t.jsx)(n.code,{children:"0"})," \uc778 \ud1a0\ud070\uc744 \uc18c\uc720\ud558\uace0 \uc788\ub294 \uacbd\uc6b0, \uc791\uc131 \ub2f9\uc2dc \ud0a4-\uac12 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \uc800\uc7a5\ub418\ub294 \ub370\uc774\ud130\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\ud0a4: ",(0,t.jsx)(n.code,{children:"t2o::0"})]}),"\n",(0,t.jsxs)(n.li,{children:["\uac12: ",(0,t.jsx)(n.code,{children:"example.near"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\ub530\ub77c\uc11c 100\ub9cc \ud1a0\ud070\uc758 \uacbd\uc6b0, \ub354\ud574\uc11c 100\ub9cc\uc744 \uacf1\ud574\uc57c \ud558\ub294 \ubaa8\ub4e0 \ud56d\ubaa9\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\uc811\ub450\uc0ac ",(0,t.jsx)(n.code,{children:"t2o"}),"\ub294 UTF-8\uc5d0\uc11c 3\ubc14\uc774\ud2b8\ub85c \uc9c1\ub82c\ud654\ub418\uace0, \ub450 \uac1c\uc758 \ucf5c\ub860\uc740 \ub2e4\ub978 \ub450 \uac1c\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4. \uc989, \uc774\ub294 \ucd1d 5\ubc14\uc774\ud2b8\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TokenId"}),"\uac00 \uc790\ub3d9 \uc99d\uac00 \ud558\ub294 \uacbd\uc6b0, \uac12\uc740 ",(0,t.jsx)(n.code,{children:"0"})," ~ ",(0,t.jsx)(n.code,{children:"999999"})," \uc0ac\uc774\uc5d0 \uc788\uc73c\ubbc0\ub85c \ud3c9\uade0 \uae38\uc774\ub294 5\ubc14\uc774\ud2b8\uac00 \ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:["NEAR ",(0,t.jsx)(n.code,{children:"AccountId"}),"\uac00 \uc798 \uad6c\uc131\ub418\uc5c8\ub2e4\uace0 \uac00\uc815\ud558\uace0, NEAR \uacc4\uc815 ID\uac00 \ub3c4\uba54\uc778 \uc774\ub984\uc758 \ub300\ub7b5\uc801\uc778 \ud328\ud134\uc744 \ub530\ub978\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ub3c4\uba54\uc778 \uc774\ub984\uc740 ",(0,t.jsx)(n.a,{href:"https://www.gaebler.com/Domain-Length-Research.htm",children:"\ud3c9\uade0 \uc57d 10\uc790 \uc815\ub3c4"})," \ub418\uace0, ",(0,t.jsx)(n.code,{children:".near"}),"\uc640 \uac19\uc740 \ucd5c\uc0c1\uc704 \uc774\ub984\uc774 \ucd94\uac00\ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \uc608\uc0c1\ud560 \uc218 \uc788\ub294 \ud569\ub9ac\uc801\uc778 \ud3c9\uade0 \uae38\uc774\ub294 \uc57d 15\uc790\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucd94\uc815\uce58\ub97c \ube44\uad00\uc801\uc73c\ub85c \uc0dd\uac01\ud574\uc11c 25\ub77c\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. NEAR \uacc4\uc815 ID\ub294 ASCII \uc9d1\ud569\uc758 \ubb38\uc790\ub97c \uc0ac\uc6a9\ud574\uc57c \ud558\ubbc0\ub85c 25\ubc14\uc774\ud2b8\uac00 \ub429\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\ub530\ub77c\uc11c:"}),"\n",(0,t.jsx)(n.p,{children:"1_000_000 * (5 + 5 + 25)"}),"\n",(0,t.jsxs)(n.p,{children:["\ucd1d 3,500\ub9cc \ubc14\uc774\ud2b8\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \uc774\ub294 350 \uacf1\ud558\uae30 100Kib\uc774\uace0, \u24c3350\uac00 \ud544\uc694\ud568\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4.. \uc815\ud655\ud55c \uacc4\uc0b0\uc744 \uc704\ud574: \ubc14\uc774\ud2b8\ub2f9 1e19 yoctoNEAR\ub97c \uacf1\ud558\uba74 35m \ubc14\uc774\ud2b8\uc758 ",(0,t.jsx)(n.code,{children:"tokenToOwner"})," \ub9e4\ud551\uc5d0 3.5e26 yoctoNEAR \ub610\ub294 \u24c3350\uc744 \uc2a4\ud14c\uc774\ud0b9\ud574\uc57c \ud55c\ub2e4\ub294 \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uc811\ub450\uc0ac\ub97c ",(0,t.jsx)(n.code,{children:"t2o"}),"\uc5d0\uc11c \ub2e8\uc77c \ubb38\uc790\ub85c \ubcc0\uacbd\ud558\uae30\ub9cc \ud558\uba74 \u24c3330\uae4c\uc9c0 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc544\ub2c8\uba74 \uc644\uc804\ud788 \uc81c\uac70\ud574\ub3c4 \ub429\ub2c8\ub2e4! \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ub0b4 \ud55c ",(0,t.jsx)(n.code,{children:"PersistentVector"}),"\uc5d0\uc11c \uae38\uc774\uac00 0\uc778 \uc811\ub450\uc0ac\ub97c \uac00\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub807\uac8c \ud558\uba74 \uc694\uae08\uc740 \u24c3250\uae4c\uc9c0 \ub0b4\ub824\uac08 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.h2,{id:"calculate-costs-for-your-own-contract",children:"Calculate costs for your own contract"}),"\n",(0,t.jsx)(n.p,{children:"\uc704\uc5d0 \ud45c\uc2dc\ub41c \ub300\ub85c \uc218\ub3d9\uc73c\ub85c \ubc14\uc774\ud2b8 \uc5f0\uc0b0\uc744 \uc218\ud589\ud558\ub294 \uac83\uc740 \uc5b4\ub835\uace0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uae30 \uc27d\uc2b5\ub2c8\ub2e4. \uc88b\uc740 \uc18c\uc2dd\uc740 \uadf8\ub7f4 \ud544\uc694\uac00 \uc5c6\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4!"}),"\n",(0,t.jsxs)(n.p,{children:["You can test the storage used using the ",(0,t.jsx)(n.a,{href:"/ko/build/smart-contracts/anatomy/environment",children:"SDK environment"})," and checking ",(0,t.jsx)(n.code,{children:"env.storage_usage()"})]}),"\n",(0,t.jsx)(n.h2,{id:"other-ways-to-keep-costs-down",children:"Other ways to keep costs down"}),"\n",(0,t.jsx)(n.p,{children:"\ub370\uc774\ud130\ub97c \uc628\uccb4\uc778\uc5d0 \uc800\uc7a5\ud558\ub294 \uac83\uc740 \ub124\ud2b8\uc6cc\ud06c\ub97c \uc6b4\uc601\ud558\ub294 \uc0ac\ub78c\ub4e4\uc5d0\uac8c \uc800\ub834\ud558\uc9c0 \uc54a\uc73c\uba70, NEAR\ub294 \uc774 \ube44\uc6a9\uc744 \uac1c\ubc1c\uc790\uc5d0\uac8c \uc804\uac00\ud569\ub2c8\ub2e4. \uadf8\ub807\ub2e4\uba74 \uac1c\ubc1c\uc790\ub85c\uc11c \uc5b4\ub5bb\uac8c \ube44\uc6a9\uc744 \uc808\uac10\ud560 \uc218 \uc788\uc744\uae4c\uc694? \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294 \ub450 \uac00\uc9c0 \uc811\uadfc \ubc29\uc2dd\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"JSON\uc774 \uc544\ub2cc \ubc14\uc774\ub108\ub9ac \uc9c1\ub82c\ud654 \ud615\uc2dd\uc744 \uc0ac\uc6a9\ud558\uc138\uc694."}),"\n",(0,t.jsx)(n.li,{children:"\ub370\uc774\ud130\ub97c \uc624\ud504\uccb4\uc778\uc5d0 \uc800\uc7a5\ud558\uc138\uc694."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"use-a-binary-serialization-format-rather-than-json",children:"Use a binary serialization format, rather than JSON"}),"\n",(0,t.jsxs)(n.p,{children:["\ud575\uc2ec NEAR \ud300\uc740 ",(0,t.jsx)(n.a,{href:"https://borsh.io/",children:"borsh"}),"\ub77c\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uad00\ub9ac\ud558\ub294\ub370, \uc774\ub294 ",(0,t.jsx)(n.code,{children:"near-sdk-rs"}),"\ub97c \uc0ac\uc6a9\ud560 \ub54c \uc790\ub3d9\uc73c\ub85c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \ub098\uc911\uc5d0\ub294 ",(0,t.jsx)(n.code,{children:"near-sdk-js"}),"\uc5d0 \uc758\ud574\uc11c\ub3c4 \uc0ac\uc6a9\ub420 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"[0, 1, 2, 3]"}),"\uc640 \uac19\uc740 \ubc30\uc5f4\uc744 \uc800\uc7a5\ud558\uace0 \uc2f6\ub2e4\uace0 \uc0dd\uac01\ud574 \ubcf4\uc138\uc694. \uc774\ub97c \ubb38\uc790\uc5f4\ub85c \uc9c1\ub82c\ud654\ud558\uace0, UTF-8 \ubc14\uc774\ud2b8\ub85c \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc774 ",(0,t.jsx)(n.code,{children:"near-sdk-js"}),"\uac00 \ud558\ub294 \uc77c\uc785\ub2c8\ub2e4. \uacf5\ubc31\uc744 \uc798\ub77c\ub0b4\uba74 \uacb0\uad6d 9\ubc14\uc774\ud2b8\ub97c \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"borsh\ub97c \uc0ac\uc6a9\ud558\uba74 \ub3d9\uc77c\ud55c \ubc30\uc5f4\uc774 \uc544\ub798\uc640 \uac19\uc774 8\ubc14\uc774\ud2b8\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\\u0004\\u0000\\u0000\\u0000\\u0000\\u0001\\u0002\\u0003"}),"\n",(0,t.jsx)(n.p,{children:"\uc5b8\ub73b \ubcf4\uae30\uc5d0 1\ubc14\uc774\ud2b8\ub97c \uc808\uc57d\ud558\ub294 \uac83\uc774 \uc911\uc694\ud574 \ubcf4\uc774\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.p,{children:["\uc5ec\uae30\uc11c \ucc98\uc74c 4\ubc14\uc774\ud2b8\uc778 ",(0,t.jsx)(n.code,{children:"\\u0004\\u0000\\u0000\\u0000"}),"\ub294 \ub9ac\ud2c0 \uc5d4\ub514\uc548 \uc778\ucf54\ub529\uc744 \uc0ac\uc6a9\ud558\ub294 \uae38\uc774 ",(0,t.jsx)(n.code,{children:"4"}),"\uc758 ",(0,t.jsx)(n.code,{children:"u32"}),"\ubc30\uc5f4\uc784\uc744 \uc9c1\ub82c \ubcc0\ud658\uae30\uc5d0 \uc54c\ub824\uc90d\ub2c8\ub2e4. \ub098\uba38\uc9c0 \ubc14\uc774\ud2b8\ub294 \ubc30\uc5f4\uc758 \ub9ac\ud130\ub7f4 \ubc88\ud638 \u2013",(0,t.jsx)(n.code,{children:"\\u0000\\u0001\\u0002\\u0003"}),"- \uc785\ub2c8\ub2e4. \ub354 \ub9ce\uc740 \uc694\uc18c\ub97c \uc9c1\ub82c\ud654\ud568\uc5d0 \ub530\ub77c, \uac01 \uc694\uc18c\ub294 \ub370\uc774\ud130 \uad6c\uc870\uc5d0 1\ubc14\uc774\ud2b8\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4. JSON\uc744 \uc0ac\uc6a9\ud558\uba74 \uc0c8 \uc694\uc18c\ub9c8\ub2e4 \ub2e4\ub978 \uc27c\ud45c\uc640 \uc22b\uc790\ub97c \ubaa8\ub450 \ub098\ud0c0\ub0b4\uae30 \uc704\ud574 2\ubc14\uc774\ud2b8\ub97c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uc77c\ubc18\uc801\uc73c\ub85c Borsh\ub294 \ub354 \ube60\ub974\uace0 \ub354 \uc801\uc740 \uc800\uc7a5 \uacf5\uac04\uc744 \uc0ac\uc6a9\ud558\uba70 \uac00\uc2a4 \ube44\uc6a9\ub3c4 \ub354 \uc801\uac8c \ub4ed\ub2c8\ub2e4. \uac00\ub2a5\ud558\uba74 \uc0ac\uc6a9\ud558\uc2dc\ub294 \uac83\uc744 \ucd94\ucc9c\ub4dc\ub9bd\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h3,{id:"store-data-off-chain",children:"Store data off-chain"}),"\n",(0,t.jsx)(n.p,{children:"\uc774\ub294 \uc0ac\uc6a9\uc790 \uc0dd\uc131 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\ub294 \uacbd\uc6b0 \ud2b9\ud788 \uc911\uc694\ud569\ub2c8\ub2e4!"}),"\n",(0,t.jsxs)(n.p,{children:["Let's use this ",(0,t.jsx)(n.a,{href:"https://github.com/near-examples/guest-book-examples",children:"Guest Book"})," as an example. \uc544\uae4c \uad6c\ud604\ub41c \ub300\ub85c \uc571 \ubc29\ubb38\uc790\ub294 NEAR\ub85c \ub85c\uadf8\uc778\ud558\uace0 \uba54\uc2dc\uc9c0\ub97c \ub0a8\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub4e4\uc758 \uba54\uc2dc\uc9c0\ub294 \uc628\uccb4\uc778\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \uc571\uc774 \ud070 \uc778\uae30\ub97c \uc5bb\uc5c8\uace0 \ubc29\ubb38\uc790\uac00 \uc608\uae30\uce58 \uc54a\uac8c \uae34 \uba54\uc2dc\uc9c0\ub97c \ub0a8\uae30\uae30 \uc2dc\uc791\ud588\ub2e4\uace0 \uc0c1\uc0c1\ud574 \ubcf4\uc138\uc694. \ucee8\ud2b8\ub799\ud2b8 \uc18c\uc720\uc790\uc758 \ubcf4\uad00 \uc790\uae08\uc740 \ub9e4\uc6b0 \ube68\ub9ac \ubc14\ub2e5\ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4!"}),"\n",(0,t.jsxs)(n.p,{children:["\ub354 \ub098\uc740 \uc804\ub7b5\uc740 \ub370\uc774\ud130\ub97c \uc624\ud504\uccb4\uc778\uc5d0 \uc800\uc7a5\ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc571\uc744 \ubd84\uc0b0\ub41c \uc0c1\ud0dc\ub85c \uc720\uc9c0\ud558\ub824\ub294 \uacbd\uc6b0 \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294 \uc624\ud504\uccb4\uc778 \ub370\uc774\ud130 \uc2a4\ud1a0\ub9ac\uc9c0 \uc194\ub8e8\uc158\uc740 ",(0,t.jsx)(n.a,{href:"https://ipfs.io/",children:"IPFS"}),"\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub2e4\uc74c\uacfc \uac19\uc740 \uc608\uce21 \uac00\ub2a5\ud55c \ucee8\ud150\uce20 \uc8fc\uc18c\ub85c \ubaa8\ub4e0 \ub370\uc774\ud130 \uc9d1\ud569\uc744 \ub098\ud0c0\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"QmYwAPJzv5CZsnA625s3Xf2nemtYgPpHdWEz79ojWnPbdG"}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\ub7ec\ud55c \ucee8\ud150\uce20 \uc8fc\uc18c\ub294 JSON \uad6c\uc870, \uc774\ubbf8\uc9c0 \ub610\ub294 \uae30\ud0c0 \uc720\ud615\uc758 \ub370\uc774\ud130\ub97c \ub098\ud0c0\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ub370\uc774\ud130\ub294 \ubb3c\ub9ac\uc801\uc73c\ub85c \uc5b4\ub514\uc5d0 \uc800\uc7a5\ub420\uae4c\uc694? ",(0,t.jsx)(n.a,{href:"https://filecoin.io/",children:"Filecoin"}),"\uc744 \uc0ac\uc6a9\ud558\uac70\ub098 \uc790\uccb4 IPFS \uc11c\ubc84\ub97c \uc2e4\ud589\ud558\uc5ec \uc571 \ub370\uc774\ud130\ub97c \uace0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \uc811\uadfc \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud558\uba74, \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ucd94\uac00\ud558\ub294 \uac01 \ub808\ucf54\ub4dc\uc758 \ud06c\uae30\ub97c \uc608\uce21\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,t.jsx)(n.p,{children:"NEAR\uc758 \uad6c\uc870\ub294 \ub124\ud2b8\uc6cc\ud06c \uc6b4\uc601\uc790\uc5d0\uac8c \uc778\uc13c\ud2f0\ube0c\ub97c \uc81c\uacf5\ud558\ub294 \ub3d9\uc2dc\uc5d0 \ucee8\ud2b8\ub799\ud2b8 \uac1c\ubc1c\uc790\uc5d0\uac8c \uc720\uc5f0\uc131\uacfc \uc608\uce21 \uac00\ub2a5\uc131\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc2a4\ud1a0\ub9ac\uc9c0 \uad00\ub9ac\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \uc124\uacc4\uc758 \uc911\uc694\ud55c \uce21\uba74\uc774\uba70 NEAR\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud558\uba74 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc5d0 \ud544\uc694\ud55c \uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc744 \uc27d\uac8c \ud30c\uc545\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.admonition,{title:"\uc9c8\ubb38\uc774 \uc788\uc73c\uc2e0\uac00\uc694?",type:"tip",children:(0,t.jsx)("a",{href:"https://stackoverflow.com/questions/tagged/nearprotocol",children:(0,t.jsx)("h8",{children:"StackOverflow\uc5d0 \ubb3c\uc5b4\ubcf4\uc138\uc694!"})})}),"\n",(0,t.jsx)(n.h2,{id:"footnotes",children:"Footnotes"}),"\n","\n",(0,t.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,t.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://gov.near.org/t/storage-staking-price/399",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9 \uac00\uaca9"})," ",(0,t.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{id:"user-content-fn-2",children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/near/nearcore/pull/3881",children:"\uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9 10\ubc30 \uc808\uac10"})," ",(0,t.jsx)(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var t=s(67294);const o={},r=t.createContext(o);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);