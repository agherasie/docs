"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3858],{61527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var a=n(85893),r=n(11151),s=n(74866),o=n(85162),i=n(71183);const l={id:"guest-book",title:"Guest Book"},c=void 0,u={id:"tutorials/examples/guest-book",title:"Guest Book",description:"Our Guest Book example is a simple app composed by two main components:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/examples/guest-book.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/guest-book",permalink:"/zh-CN/tutorials/examples/guest-book",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/guest-book.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1712954223e3,frontMatter:{id:"guest-book",title:"Guest Book"},sidebar:"tutorials",previous:{title:"Count on NEAR",permalink:"/zh-CN/tutorials/examples/count-near"},next:{title:"Donation",permalink:"/zh-CN/tutorials/examples/donation"}},d={},h=[{value:"Obtaining the Guest book Example",id:"obtaining-the-guest-book-example",level:2},{value:"Structure of the Example",id:"structure-of-the-example",level:2},{value:"Frontend",id:"frontend",level:2},{value:"Running the Frontend",id:"running-the-frontend",level:3},{value:"Understanding the Frontend",id:"understanding-the-frontend",level:3},{value:"Smart Contract",id:"smart-contract",level:2},{value:"Testing the Contract",id:"testing-the-contract",level:3},{value:"Deploying the Contract to the NEAR network",id:"deploying-the-contract-to-the-near-network",level:3},{value:"CLI: Interacting with the Contract",id:"cli-interacting-with-the-contract",level:3},{value:"Moving Forward",id:"moving-forward",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Our Guest Book example is a simple app composed by two main components:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"A smart contract that stores messages from users, allowing to attach money to them."}),"\n",(0,a.jsx)(t.li,{children:"A simple web-based frontend that displays the last 10 messages posted."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"img",src:n(12679).Z+"",width:"1080",height:"457"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"obtaining-the-guest-book-example",children:"Obtaining the Guest book Example"}),"\n",(0,a.jsx)(t.p,{children:"You have two options to start the Guest book Example."}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["You can use the app through ",(0,a.jsx)(t.code,{children:"GitHub Codespaces"}),", which will open a web-based interactive environment."]}),"\n",(0,a.jsx)(t.li,{children:"Clone the repository locally and use it from your computer."}),"\n"]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Codespaces"}),(0,a.jsx)(t.th,{children:"Clone locally"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:(0,a.jsx)(t.a,{href:"https://codespaces.new/near-examples/guest-book-examples",children:(0,a.jsx)(t.img,{src:"https://github.com/codespaces/badge.svg",alt:"Open in GitHub Codespaces"})})}),(0,a.jsxs)(t.td,{children:["\ud83c\udf10 ",(0,a.jsx)(t.code,{children:"https://github.com/near-examples/guest-book-examples"})]})]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"structure-of-the-example",children:"Structure of the Example"}),"\n",(0,a.jsx)(t.p,{children:"The example is divided in two main components:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"The smart contract, available in two flavors: Rust and JavaScript"}),"\n",(0,a.jsx)(t.li,{children:"The frontend, that interacts with an already deployed contract."}),"\n"]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\u250c\u2500\u2500 sandbox-ts # sandbox testing\n\u2502    \u251c\u2500\u2500 src\n\u2502    \u2502    \u2514\u2500\u2500 main.ava.ts\n\u2502    \u251c\u2500\u2500 ava.config.cjs\n\u2502    \u2514\u2500\u2500 package.json\n\u251c\u2500\u2500 src # contract's code\n\u2502    \u251c\u2500\u2500 contract.ts\n\u2502    \u2514\u2500\u2500 model.ts\n\u251c\u2500\u2500 package.json # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 tsconfig.json # test script\n"})})}),(0,a.jsx)(o.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"\u250c\u2500\u2500 tests # workspaces testing\n\u2502    \u251c\u2500\u2500 workspaces.rs\n\u251c\u2500\u2500 src # contract's code\n\u2502    \u2514\u2500\u2500 lib.rs\n\u251c\u2500\u2500 Cargo.toml # package manager\n\u251c\u2500\u2500 README.md\n\u2514\u2500\u2500 rust-toolchain.toml\n"})})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"frontend",children:"Frontend"}),"\n",(0,a.jsx)(t.p,{children:"The guest book example includes a frontend that interacts with an already deployed smart contract, allowing user to sign a message."}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"running-the-frontend",children:"Running the Frontend"}),"\n",(0,a.jsx)(t.p,{children:"To start the frontend you will need to install the dependencies and start the server."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd frontend\nyarn\nyarn start\n"})}),"\n",(0,a.jsx)(t.p,{children:'Go ahead and login with your NEAR account. If you don\'t have one, you will be able to create one in the moment. Once logged in, you will be able to sign a message in the guest book. You can further send some money alongside your message. If you attach more than 0.01\u24c3 then your message will be marked as "premium".'}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"understanding-the-frontend",children:"Understanding the Frontend"}),"\n",(0,a.jsxs)(t.p,{children:["The frontend is composed by a single HTML file (",(0,a.jsx)(t.code,{children:"/index.html"}),") and uses REACT. Check ",(0,a.jsx)(t.code,{children:"/App.js"})," and ",(0,a.jsx)(t.code,{children:"/index.js"})," to understand how components are displayed in the screen."]}),"\n",(0,a.jsxs)(t.p,{children:["You will notice in ",(0,a.jsx)(t.code,{children:"/src/App.jsx"})," the following code:"]}),"\n",(0,a.jsx)(i.O2,{children:(0,a.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,a.jsx)(i.Ey,{fname:"App.jsx",url:"https://github.com/near-examples/guest-book-examples/blob/main/frontend/src/App.jsx"})})}),"\n",(0,a.jsx)(t.p,{children:"It setups the necessary variables and starts the app."}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"smart-contract",children:"Smart Contract"}),"\n",(0,a.jsxs)(t.p,{children:["The contract presents 3 methods: ",(0,a.jsx)(t.code,{children:"add_message"}),", ",(0,a.jsx)(t.code,{children:"get_message"})," and ",(0,a.jsx)(t.code,{children:"total_messages"}),"."]}),"\n",(0,a.jsxs)(i.O2,{children:[(0,a.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,a.jsx)(i.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/guest-book-examples/blob/main/contract-ts/src/contract.ts",start:"4",end:"27"})}),(0,a.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,a.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/guest-book-examples/blob/main/contract-rs/src/lib.rs",start:"31",end:"64"})})]}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(t.h3,{id:"testing-the-contract",children:"Testing the Contract"}),"\n",(0,a.jsx)(t.p,{children:"The contract readily includes a set of unit and sandbox testing to validate its functionality. To execute the tests, run the following commands:"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd contract-ts\nyarn\nyarn test\n"})})}),(0,a.jsx)(o.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"cd contract-rs\ncargo test\n"})})})]}),"\n",(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["The ",(0,a.jsx)(t.code,{children:"integration tests"})," use a sandbox to create NEAR users and simulate interactions with the contract. :::"]}),(0,a.jsx)("hr",{class:"subsection"}),(0,a.jsx)(t.h3,{id:"deploying-the-contract-to-the-near-network",children:"Deploying the Contract to the NEAR network"}),(0,a.jsx)(t.p,{children:"In order to deploy the contract you will need to create a NEAR account."}),(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(o.Z,{value:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# Optional - create an account\nnear create-account <accountId> --useFaucet\n\n# Deploy the contract\ncd contract-ts\nyarn build\nnear deploy <accountId> ./build/guestbook.wasm\n"})})}),(0,a.jsx)(o.Z,{value:"\ud83e\udd80 Rust",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"# Optional - create an account\nnear create-account <accountId> --useFaucet\n\n# Deploy the contract\ncd contract-rs\ncargo near build\nnear deploy <accountId> ./target/wasm32-unknown-unknown/release/guestbook.wasm\n"})})})]}),(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["To interact with your contract from the ",(0,a.jsx)(t.a,{href:"#frontend",children:"frontend"}),", simply replace the variable ",(0,a.jsx)(t.code,{children:"CONTRACT_NAME"})," in the ",(0,a.jsx)(t.code,{children:"index.js"})," file. :::"]}),(0,a.jsx)("hr",{class:"subsection"}),(0,a.jsx)(t.h3,{id:"cli-interacting-with-the-contract",children:"CLI: Interacting with the Contract"}),(0,a.jsx)(t.p,{children:"To interact with the contract through the console, you can use the following commands"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'# Get messages with optional arguments for pagination\nnear view guestbook.near-examples.testnet get_messages --args=\'{"from_index": "0","limit": "10"}\'\n\n# Get total number of messages\nnear view guestbook.near-examples.testnet total_messages\n\n# Add a message\n# Replace <accountId> with your account ID\n# Required a text\n# Optional deposit to make the message premium\nnear call guestbook.near-examples.testnet add_message \'{"text":"Hello Near"}\' --accountId <accountId> --deposit 0.1\n'})}),(0,a.jsxs)(t.admonition,{type:"tip",children:[(0,a.jsxs)(t.mdxAdmonitionTitle,{children:["If you're using your own account, replace ",(0,a.jsx)(t.code,{children:"guestbook.near-examples.testnet"})," with your ",(0,a.jsx)(t.code,{children:"accountId"}),". :::"]}),(0,a.jsx)(t.hr,{}),(0,a.jsx)(t.h2,{id:"moving-forward",children:"Moving Forward"}),(0,a.jsx)(t.p,{children:"A nice way to learn is by trying to expand a contract. You can modify the guestbook example to incorporate a feature where users can give likes to messages. Additionally, implement a method to toggle the like."}),(0,a.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,a.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["near-cli: ",(0,a.jsx)(t.code,{children:"4.0.13"})]}),"\n",(0,a.jsxs)(t.li,{children:["node: ",(0,a.jsx)(t.code,{children:"18.19.1"})]}),"\n",(0,a.jsxs)(t.li,{children:["rustc: ",(0,a.jsx)(t.code,{children:"1.77.0"})]}),"\n"]})]})]})]})]})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(36905);const r={tabItem:"tabItem_Ymn6"};var s=n(85893);function o(e){var t=e.children,n=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),r=n(36905),s=n(12466),o=n(16550),i=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,l._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function g(e){var t,n,r,s,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,g=h(e),x=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:g})})),b=x[0],f=x[1],j=m({queryString:c,groupId:d}),v=j[0],y=j[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(t),r=n[0],s=n[1],[r,(0,a.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],I=w[1],A=function(){var e=null!=v?v:k;return p({value:e,tabValues:g})?e:null}();return(0,i.Z)((function(){A&&f(A)}),[A]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);f(e),y(e),I(e)}),[y,I,g]),tabValues:g}}var x=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function j(e){var t=e.className,n=e.block,a=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(c(t),o(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;n=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var s,o=l.indexOf(e.currentTarget)-1;n=null!=(s=l[o])?s:l[l.length-1]}null==(t=n)||t.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,f.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var o=s.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=g(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(j,Object.assign({},t,e)),(0,f.jsx)(v,Object.assign({},t,e))]})}function w(e){var t=(0,x.Z)();return(0,f.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>m,Ey:()=>x,SQ:()=>g});var a=n(67294),r=n(74866),s=n(85162),o=n(74165),i=n(15861),l=n(1841),c=n.n(l),u=n(85893);function d(){return(d=(0,i.Z)((0,o.Z)().mark((function e(t,n,a){var r,s,i,l;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((s=localStorage.getItem(t+"-until"))&&s>Date.now())){e.next=5;break}r=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:r=e.sent,localStorage.setItem(t,r),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return i=r.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):i.length,i=i.slice(n,a),l=i.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",i.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,r=e.end,s=e.language,o=e.fname,i=e.metastring,l=(0,a.useState)("Loading..."),h=l[0],p=l[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),r=a[0],s=a[1];return a[2],"https://raw.githubusercontent.com/"+r+"/"+s+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return d.apply(this,arguments)}(e,n,r);a.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:o,children:[(0,u.jsx)(c(),{language:s,metastring:i+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,u.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function g(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),r=n.start,s=n.end,o=n.fname;if(e.type===x)return x({url:a,start:r,end:s,language:t,fname:o});return e}(e,n)})),1==t.length?(0,u.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,u.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,u.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function x(e){var t=e.url,n=e.start,a=e.end,r=e.language,s=e.fname,o=e.metastring;return h({url:t,start:n,end:a,language:r,fname:s,metastring:o})}},12679:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/guest-book-b305a87a35cbef2b632ebe289d44f7b2.png"}}]);