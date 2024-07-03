"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6707],{34549:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>u,metadata:()=>h,toc:()=>m});var r=t(85893),s=t(11151),a=t(71183);const i=t.p+"assets/images/crossword-actions-c5a7a08bac9abd41fa5fae029ce8aba4.png",o=t.p+"assets/images/transfer-brand-blue--qiqi04.near--blankworl-ae01b13e0567a25c47605ab4b0e72a94.png",c=t.p+"assets/images/yoctoNEAR-magnifying--jrbemint.near--JrbeMad-7664563cd1b1c33c5068ec24d30bb29a.jpg",l=t.p+"assets/images/predecessor-signer-current--yasuoarts.near--YasuoArt69-2c9b701d045112f7acb6214adb861da0.png",u={sidebar_position:4,sidebar_label:"Actions and sending NEAR",title:"There are several Actions an account can do, including sending the winner of the crossword puzzle NEAR using the Transfer Action"},d="Actions (including sending NEAR)",h={id:"tutorials/crosswords/beginner/actions",title:"There are several Actions an account can do, including sending the winner of the crossword puzzle NEAR using the Transfer Action",description:"We're going to introduce a new Action: Transfer. In this chapter, we'd like the first person to solve the crossword puzzle to earn some prize money, sent in NEAR.",source:"@site/../docs/3.tutorials/crosswords/02-beginner/03-actions.md",sourceDirName:"3.tutorials/crosswords/02-beginner",slug:"/tutorials/crosswords/beginner/actions",permalink:"/tutorials/crosswords/beginner/actions",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/02-beginner/03-actions.md",tags:[],version:"current",lastUpdatedBy:"matiasbenary",lastUpdatedAt:1720020198e3,sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Actions and sending NEAR",title:"There are several Actions an account can do, including sending the winner of the crossword puzzle NEAR using the Transfer Action"},sidebar:"tutorials",previous:{title:"Using structs and enums",permalink:"/tutorials/crosswords/beginner/structs-enums"},next:{title:"Add a puzzle",permalink:"/tutorials/crosswords/beginner/adding-a-puzzle"}},p={},m=[{value:"Actions from within a contract",id:"actions-from-within-a-contract",level:2},{value:"Define the prize amount",id:"define-the-prize-amount",level:2},{value:"Adding <code>Transfer</code>",id:"adding-transfer",level:2},{value:"Predecessor, signer, and current account",id:"predecessor-signer-and-current-account",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"actions-including-sending-near",children:"Actions (including sending NEAR)"}),"\n",(0,r.jsxs)(n.p,{children:["We're going to introduce a new Action: ",(0,r.jsx)(n.code,{children:"Transfer"}),". In this chapter, we'd like the first person to solve the crossword puzzle to earn some prize money, sent in NEAR."]}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:o,alt:"Two hands exchanging a coin emblazoned with the NEAR Protocol logo. Art created by qiqi04.near",width:"400"}),(0,r.jsxs)("figcaption",{className:"small",children:["Art by ",(0,r.jsx)("a",{href:"https://twitter.com/blankworl",target:"_blank",rel:"noopener noreferrer",children:"qiqi04.near"})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.p,{children:["We've already used Actions in the ",(0,r.jsx)(n.a,{href:"/tutorials/crosswords/basics/hashing-and-unit-tests#using-batch-actions",children:"previous chapter"}),", when we deployed and initialized the contract, which used the ",(0,r.jsx)(n.code,{children:"DeployContract"})," and ",(0,r.jsx)(n.code,{children:"FunctionCall"})," Action, respectively."]}),"\n",(0,r.jsxs)(n.p,{children:["The full list of Actions are available at the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/RuntimeSpec/Actions.html",children:"NEAR specification site"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"By the end of this entire tutorial we'll have used all the Actions highlighted below:"}),"\n",(0,r.jsx)("img",{src:i,alt:"All Actions that will be used when the entire crossword puzzle tutorial is complete",width:"600"}),"\n",(0,r.jsx)(n.h2,{id:"actions-from-within-a-contract",children:"Actions from within a contract"}),"\n",(0,r.jsx)(n.p,{children:"When we deployed and initialized the contract, we used NEAR CLI in our Terminal or Command Prompt app. At a high level, this might feel like we're lobbing a transaction into the blockchain, instructing it to do a couple actions."}),"\n",(0,r.jsxs)(n.p,{children:["It's important to note that you can also execute Actions inside a smart contract, which is what we'll be doing. In the sidebar on the left, you'll see a section called ",(0,r.jsx)(n.a,{href:"/build/smart-contracts/anatomy/actions",children:(0,r.jsx)(n.strong,{children:"Promises"})}),", which provides examples of this. Perhaps it's worth mentioning that for the Rust SDK, Promises and Actions are somewhat synonymous."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Actions only effect the current contract",type:"note",children:[(0,r.jsxs)(n.p,{children:["A contract cannot use the ",(0,r.jsx)(n.code,{children:"AddKey"})," Action on another account, including the account that just called it. It can only add a key to ",(0,r.jsx)(n.em,{children:"itself"}),", if that makes sense."]}),(0,r.jsx)(n.p,{children:"The same idea applies for the other actions as well. You cannot deploy a contract to someone else's account, or delete a different account. (Thankfully \ud83d\ude05)"}),(0,r.jsxs)(n.p,{children:["Similarly, when we use the ",(0,r.jsx)(n.code,{children:"Transfer"})," Action to send the crossword puzzle winner their prize, the amount is being subtracted from the account balance of the account where the crossword contract is deployed."]}),(0,r.jsxs)(n.p,{children:["The only interesting wrinkle (and what may ",(0,r.jsx)(n.em,{children:"seem like"})," an exception) is when a subaccount is created using the ",(0,r.jsx)(n.code,{children:"CreateAccount"})," Action. During that transaction, you may use Batch Actions to do several things like deploy a contract, transfer NEAR, add a key, call a function, etc. This is common in smart contracts that use a factory pattern, and we'll get to this in future chapters of this tutorial."]})]}),"\n",(0,r.jsx)(n.h2,{id:"define-the-prize-amount",children:"Define the prize amount"}),"\n",(0,r.jsx)(n.p,{children:"Let's make it simple and hardcode the prize amount. This is how much NEAR will be given to the first person who solves the crossword puzzle, and will apply to all the crossword puzzles we add. We'll make this amount adjustable in future chapters."}),"\n",(0,r.jsxs)(n.p,{children:["At the top of the ",(0,r.jsx)(n.code,{children:"lib.rs"})," file we'll add this constant:"]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"10",end:"11",url:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/master/contract/src/lib.rs"}),"\n",(0,r.jsx)(n.p,{children:"As the code comment mentions, this is 5 NEAR, but look at all those zeroes in the code!"}),"\n",(0,r.jsx)(n.p,{children:"That's the value in yoctoNEAR. This concept is similar to other blockchains. Bitcoin's smallest unit is a satoshi and Ethereum's is a wei."}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:c,alt:"Depiction of bills of NEAR, coins for partial NEAR, and then a magnifying glass showing a tiny yoctoNEAR next to an ant. Art created by jrbemint.near"}),(0,r.jsxs)("figcaption",{className:"full-width",children:["Art by ",(0,r.jsx)("a",{href:"https://twitter.com/JrbeMad",target:"_blank",rel:"noopener noreferrer",children:"jrbemint.near"})]})]}),"\n",(0,r.jsxs)(n.h2,{id:"adding-transfer",children:["Adding ",(0,r.jsx)(n.code,{children:"Transfer"})]}),"\n",(0,r.jsxs)(n.p,{children:["In the last chapter we had a simple function called ",(0,r.jsx)(n.code,{children:"guess_solution"})," that returned ",(0,r.jsx)(n.code,{children:"true"})," if the solution was correct, and ",(0,r.jsx)(n.code,{children:"false"})," otherwise. We'll be replacing that function with ",(0,r.jsx)(n.code,{children:"submit_solution"})," as shown below:"]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"85",end:"118",url:"https://github.com/near-examples/crossword-tutorial-chapter-2/blob/master/contract/src/lib.rs"}),"\n",(0,r.jsx)(n.p,{children:"Note the last line in this function, which sends NEAR to the predecessor."}),"\n",(0,r.jsxs)(n.admonition,{title:"Returning a Promise",type:"info",children:[(0,r.jsx)(n.p,{children:"The last line of the function above ends with a semicolon. If the semicolon were removed, that would tell Rust that we'd like to return this Promise object."}),(0,r.jsx)(n.p,{children:"It would be perfectly fine to write the function like this:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub fn submit_solution(&mut self, solution: String, memo: String) -> Promise {\n    // \u2026\n    // Transfer the prize money to the winner\n    Promise::new(env::predecessor_account_id()).transfer(PRIZE_AMOUNT)\n}\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"predecessor-signer-and-current-account",children:"Predecessor, signer, and current account"}),"\n",(0,r.jsxs)(n.p,{children:["When writing a smart contract you'll commonly want to use ",(0,r.jsx)(n.code,{children:"env"})," and the details it provides. We used this in the last chapter for:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["logging (ex: ",(0,r.jsx)(n.code,{children:'env::log_str("hello friend")'}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["hashing using sha256 (ex: ",(0,r.jsx)(n.code,{children:"env::sha256(solution.as_bytes())"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["There are more functions detailed in the ",(0,r.jsx)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/env/index.html",children:"SDK reference docs"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Let's cover three commonly-used functions regarding accounts: predecessor, signer, and current account."}),"\n",(0,r.jsxs)("figure",{children:[(0,r.jsx)("img",{src:l,alt:"Illustration of Alice sending a transaction to a smart contract named Banana, which does a cross-contract call to the smart contract Cucumber. Art created by yasuoarts.near"}),(0,r.jsxs)("figcaption",{className:"full-width",children:["Alice sends a transaction to the contract on banana.near, which does a cross-contract call to cucumber.near.",(0,r.jsx)("br",{}),"From the perspective of a contract on cucumber.near, we see a list of the predecessor, signer, and current account.",(0,r.jsx)("br",{}),"Art by ",(0,r.jsx)("a",{href:"https://twitter.com/YasuoArt69",target:"_blank",rel:"noopener noreferrer",children:"yasuoarts.near"})]})]}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/env/fn.predecessor_account_id.html",children:"predecessor account"})," \u2014 ",(0,r.jsx)(n.code,{children:"env::predecessor_account_id()"})]}),"\n",(0,r.jsxs)(n.p,{children:["This is the account that was the immediate caller to the smart contract. If this is a simple transaction (no cross-contract calls) from ",(0,r.jsx)(n.strong,{children:"alice.near"})," to ",(0,r.jsx)(n.strong,{children:"banana.near"}),", the smart contract at ",(0,r.jsx)(n.strong,{children:"banana.near"})," considers Alice the predecessor. In this case, Alice would ",(0,r.jsx)(n.em,{children:"also"})," be the signer."]}),"\n",(0,r.jsxs)(n.admonition,{title:"When in doubt, use predecessor",type:"tip",children:[(0,r.jsxs)(n.p,{children:["As we explore the differences between predecessor and signer, know that it's a more common ",(0,r.jsx)(n.strong,{children:"best practice to choose the predecessor"}),"."]}),(0,r.jsx)(n.p,{children:'Using the predecessor guards against a potentially malicious contract trying to "fool" another contract that only checks the signer.'})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/env/fn.signer_account_id.html",children:"signer account"})," \u2014 ",(0,r.jsx)(n.code,{children:"env::signer_account_id()"})]}),"\n",(0,r.jsxs)(n.p,{children:["The signer is the account that originally ",(0,r.jsx)(n.em,{children:"signed"})," the transaction that began the blockchain activity, which may or may not include cross-contract calls. If a function calls results in several cross-contract calls, think of the signer as the account that pushed over the first domino in that chain reaction."]}),"\n",(0,r.jsxs)(n.admonition,{title:"Beware of middlemen",type:"caution",children:[(0,r.jsx)(n.p,{children:"If your smart contract is checking the ownership over some assets (fungible token, NFTs, etc.) it's probably a bad idea to use the signer account."}),(0,r.jsxs)(n.p,{children:["A confused or malicious contract might act as a middleman and cause unexpected behavior. If ",(0,r.jsx)(n.strong,{children:"alice.near"})," accidentally calls ",(0,r.jsx)(n.strong,{children:"evil.near"}),", the contract at that account might do a cross-contract call to ",(0,r.jsx)(n.strong,{children:"vulnerable-nft.near"}),", instructing it to transfer an NFT."]}),(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.strong,{children:"vulnerable-nft.near"})," only checks the signer account to determine ownership of the NFT, it might unwittingly give away Alice's property. Checking the predecessor account eliminates this problem."]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/env/fn.current_account_id.html",children:"current account"})," \u2014 ",(0,r.jsx)(n.code,{children:"env::current_account_id()"})]}),"\n",(0,r.jsx)(n.p,{children:'The current account is "me" from the perspective of a smart contract.'}),"\n",(0,r.jsxs)(n.admonition,{title:"Why would I use that?",type:"tip",children:[(0,r.jsx)(n.p,{children:"There might be various reasons to use the current account, but a common use case is checking ownership or handling callbacks to cross-contract calls."}),(0,r.jsx)(n.p,{children:"Many smart contracts will want to implement some sort of permission system. A common, rudimentary permission allows certain functions to only be called by the contract owner, AKA the person who owns a private key to the account for this contract."}),(0,r.jsx)(n.p,{children:"The contract can check that the predecessor and current account are the same, and trust offer more permissions like changing contract settings, upgrading the contract, or other privileged modifications."})]}),"\n"]}),"\n"]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const s={tabItem:"tabItem_Ymn6"};var a=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),s=t(36905),a=t(12466),i=t(16550),o=t(20469),c=t(91980),l=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,s=e.groupId,a=(0,i.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:s});return[(0,c._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(a.location.search);n.set(o,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[o,a])]}function f(e){var n,t,s,a,i=e.defaultValue,c=e.queryString,l=void 0!==c&&c,d=e.groupId,f=h(e),g=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var s=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:f})})),b=g[0],x=g[1],j=m({queryString:l,groupId:d}),v=j[0],w=j[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),s=t[0],a=t[1],[s,(0,r.useCallback)((function(e){n&&a.set(e)}),[n,a])]),A=y[0],k=y[1],T=function(){var e=null!=v?v:A;return p({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){T&&x(T)}),[T]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),k(e)}),[w,k,f]),tabValues:f}}var g=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function j(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,c=[],l=(0,a.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=c.indexOf(n),s=o[t].value;s!==r&&(l(n),i(s))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,s=c.indexOf(e.currentTarget)+1;t=null!=(r=c[s])?r:c[0];break;case"ArrowLeft":var a,i=c.indexOf(e.currentTarget)-1;t=null!=(a=c[i])?a:c[c.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,a=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:u},a,{className:(0,s.Z)("tabs__item",b.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,s=e.selectedValue,a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=a.find((function(e){return e.props.value===s}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})}))})}function w(e){var n=f(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(j,Object.assign({},n,e)),(0,x.jsx)(v,Object.assign({},n,e))]})}function y(e){var n=(0,g.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(n))}},71183:(e,n,t)=>{t.d(n,{O2:()=>m,Ey:()=>g,SQ:()=>f});var r=t(67294),s=t(74866),a=t(85162),i=t(74165),o=t(15861),c=t(1841),l=t.n(c),u=t(85893);function d(){return(d=(0,o.Z)((0,i.Z)().mark((function e(n,t,r){var s,a,o,c;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((a=localStorage.getItem(n+"-until"))&&a>Date.now())){e.next=5;break}s=localStorage.getItem(n),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(n);case 8:return e.next=10,e.sent.text();case 10:s=e.sent,localStorage.setItem(n,s),localStorage.setItem(n+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=s.split("\n"),t=t?Number(t)-1:0,r=r?Number(r):o.length,o=o.slice(t,r),c=o.reduce((function(e,n){if(0===n.length)return e;var t=n.match(/^\s+/);return t?Math.min(e,t[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(c)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var n=e.url,t=e.start,s=e.end,a=e.language,i=e.fname,o=e.metastring,c=(0,r.useState)("Loading..."),h=c[0],p=c[1];return(0,r.useEffect)((function(){var e=function(e){var n=e.slice(e.indexOf("https")).split("#"),t=n[0],r=(n[1],new URL(t).pathname.split("/").slice(1)),s=r[0],a=r[1];return r[2],"https://raw.githubusercontent.com/"+s+"/"+a+"/"+r[3]+"/"+r.slice(4).join("/")}(n),r=function(e,n,t){return d.apply(this,arguments)}(e,t,s);r.then((function(e){return p(e)}))})),(0,u.jsxs)("div",{fname:i,children:[(0,u.jsx)(l(),{language:a,metastring:o+" showLineNumbers",children:h}),(0,u.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,u.jsx)("a",{href:n,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var p={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function m(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,u.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,u.jsx)(a.Z,{value:e.props.value,label:p[e.props.value],children:e})}))})}function f(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),s=t.start,a=t.end,i=t.fname;if(e.type===g)return g({url:r,start:s,end:a,language:n,fname:i});return e}(e,t)})),1==n.length?(0,u.jsx)(a.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,u.jsx)(s.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,u.jsx)(a.Z,{value:n,label:e.props.fname,children:e})}))})}function g(e){var n=e.url,t=e.start,r=e.end,s=e.language,a=e.fname,i=e.metastring;return h({url:n,start:t,end:r,language:s,fname:a,metastring:i})}}}]);