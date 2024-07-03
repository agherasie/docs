"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6891],{72120:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>w,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var r=s(85893),o=s(11151),i=s(35148);const n=s.p+"assets/images/rust-scary--ksart.near-975e8b677340632dc794cde723ad74ff.png",a=s.p+"assets/images/rust-good--ksart.near-8901bcac2bb83ad4da893bae9e0ca4f0.png",c={id:"overview",sidebar_position:1,sidebar_label:"Crossword Game Overview",title:"Basics overview laying out what will be accomplished in this first section."},l="Basics overview",d={id:"tutorials/crosswords/basics/overview",title:"Basics overview laying out what will be accomplished in this first section.",description:"This first chapter of the crossword puzzle tutorial will introduce fundamental concepts to smart contract development in a beginner-friendly way. By the end of this chapter you'll have a proof-of-concept contract that can be interacted with via NEAR CLI and a simple frontend that uses the near-api-js library.",source:"@site/../docs/3.tutorials/crosswords/01-basics/00-overview.md",sourceDirName:"3.tutorials/crosswords/01-basics",slug:"/tutorials/crosswords/basics/overview",permalink:"/tutorials/crosswords/basics/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/01-basics/00-overview.md",tags:[],version:"current",lastUpdatedBy:"matiasbenary",lastUpdatedAt:1720020198e3,sidebarPosition:1,frontMatter:{id:"overview",sidebar_position:1,sidebar_label:"Crossword Game Overview",title:"Basics overview laying out what will be accomplished in this first section."},sidebar:"tutorials",previous:{title:"Lazy Minting, Collections, and More!",permalink:"/tutorials/nfts/series"},next:{title:"Set up Rust and a contract skeleton",permalink:"/tutorials/crosswords/basics/set-up-skeleton"}},h={},u=[{value:"It&#39;s not as bad as you think",id:"its-not-as-bad-as-you-think",level:2},{value:"Assumptions for this first chapter",id:"assumptions-for-this-first-chapter",level:2},{value:"Completed project",id:"completed-project",level:2},{value:"How it works",id:"how-it-works",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"basics-overview",children:"Basics overview"}),"\n",(0,r.jsxs)(t.p,{children:["This first chapter of the crossword puzzle tutorial will introduce fundamental concepts to smart contract development in a beginner-friendly way. By the end of this chapter you'll have a proof-of-concept contract that can be interacted with via ",(0,r.jsx)(t.a,{href:"https://docs.near.org/tools/near-cli",children:"NEAR CLI"})," and a simple frontend that uses the ",(0,r.jsxs)(t.a,{href:"https://www.npmjs.com/package/near-api-js",children:[(0,r.jsx)(t.code,{children:"near-api-js"})," library"]}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"its-not-as-bad-as-you-think",children:"It's not as bad as you think"}),"\n",(0,r.jsx)(t.p,{children:"Rust is a serious systems programming language. There are pointers, lifetimes, macros, and other things that may look foreign. Don't worry if this is how you feel:"}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:n,alt:"Programmer looking at Rust code and looking worried. Art created by ksart.near",width:"600"}),(0,r.jsxs)("figcaption",{children:["Art by ",(0,r.jsx)("a",{href:"https://twitter.com/ksartworks",target:"_blank",rel:"noopener noreferrer",children:"ksart.near"})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.p,{children:"The good news is the Rust SDK takes care of a lot of the heavy lifting."}),"\n",(0,r.jsx)(t.p,{children:"We'll also have the compiler on our side, often telling us exactly what went wrong and offering suggestions. As we go through this tutorial, you'll begin to see patterns that we'll use over and over again."}),"\n",(0,r.jsx)(t.p,{children:"So don't worry, writing smart contracts in Rust on NEAR doesn't require a heavy engineering background."}),"\n",(0,r.jsx)("img",{src:a,alt:"Programmer looking quite relieved at the Rust code from the NEAR SDK. Art created by ksart.near",width:"600"}),"\n",(0,r.jsx)(t.h2,{id:"assumptions-for-this-first-chapter",children:"Assumptions for this first chapter"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"There will be only one crossword puzzle with one solution."}),"\n",(0,r.jsx)(t.li,{children:"The user solving the crossword puzzle will not be able to know the solution."}),"\n",(0,r.jsx)(t.li,{children:"Only the author of the crossword puzzle smart contract can set the solution."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"completed-project",children:"Completed project"}),"\n",(0,r.jsx)(t.p,{children:"Here's the final code for this chapter:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/near-examples/crossword-tutorial-chapter-1",children:"https://github.com/near-examples/crossword-tutorial-chapter-1"})}),"\n",(0,r.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,r.jsx)("img",{src:i.Z,alt:"Basic crossword puzzle",width:"600"}),"\n",(0,r.jsx)(t.p,{children:"We'll have a rule about how to get the words in the proper order. We collect words in ascending order by number, and if there's and across and a down for a number, the across goes first."}),"\n",(0,r.jsxs)(t.p,{children:["So in the image above, the solution will be ",(0,r.jsx)(t.strong,{children:"near nomicon ref finance"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Let's begin!"})]})}function w(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},35148:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/basics-crossword-2f471ec61520f252fe4526be2c4ff72c.jpg"},11151:(e,t,s)=>{s.d(t,{Z:()=>a,a:()=>n});var r=s(67294);const o={},i=r.createContext(o);function n(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);