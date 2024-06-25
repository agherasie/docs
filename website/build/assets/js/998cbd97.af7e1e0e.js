"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6084],{72329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(85893),s=n(11151),a=n(71183);const i={id:"skeleton",title:"Skeleton and Rust Architecture",sidebar_label:"Contract Architecture"},o=void 0,l={id:"tutorials/fts/skeleton",title:"Skeleton and Rust Architecture",description:"In this article, you'll learn about the basic architecture behind the FT contract that you'll develop while following this \"Zero to Hero\" series. You'll discover the contract's layout and you'll see how the Rust files are structured in order to build a feature-complete smart contract.",source:"@site/../docs/3.tutorials/fts/1-skeleton.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/skeleton",permalink:"/tutorials/fts/skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/1-skeleton.md",tags:[],version:"current",lastUpdatedBy:"Dami\xe1n Parrino",lastUpdatedAt:1719308391e3,sidebarPosition:1,frontMatter:{id:"skeleton",title:"Skeleton and Rust Architecture",sidebar_label:"Contract Architecture"},sidebar:"tutorials",previous:{title:"Pre-deployed Contract",permalink:"/tutorials/fts/predeployed-contract"},next:{title:"Defining Your Token",permalink:"/tutorials/fts/defining-a-token"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Files structure",id:"files-structure",level:2},{value:"Source files",id:"source-files",level:3},{value:"<code>ft_core.rs</code>",id:"ft_corers",level:2},{value:"<code>lib.rs</code>",id:"librs",level:2},{value:"<code>metadata.rs</code>",id:"metadatars",level:2},{value:"<code>storage.rs</code>",id:"storagers",level:2},{value:"Building the skeleton",id:"building-the-skeleton",level:2},{value:"Conclusion",id:"conclusion",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["In this article, you'll learn about the basic architecture behind the FT contract that you'll develop while following this ",(0,r.jsx)(t.em,{children:'"Zero to Hero"'})," series. You'll discover the contract's layout and you'll see how the Rust files are structured in order to build a feature-complete smart contract."]}),"\n",(0,r.jsx)(t.admonition,{title:"New to Rust?",type:"info",children:(0,r.jsxs)(t.p,{children:["If you are new to Rust and want to dive into smart contract development, our ",(0,r.jsx)(t.a,{href:"/build/smart-contracts/quickstart",children:"Quick-start guide"})," is a great place to start."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"This tutorial presents the code skeleton for the FT smart contract and its file structure.\nYou'll find how all the functions are laid out as well as the missing Rust code that needs to be filled in.\nOnce every file and function has been covered, you'll go through the process of building the mock-up contract to confirm that your Rust toolchain works as expected."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"files-structure",children:"Files structure"}),"\n",(0,r.jsxs)(t.p,{children:["The repository comes with many different folders. Each folder represents a different milestone of this tutorial starting with the skeleton folder and ending with the finished contract folder. If you step into any of these folders, you'll find that they each follow a regular ",(0,r.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"})," project. The file structure for these smart contracts have:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Cargo.toml"})," file to define the code dependencies (similar to ",(0,r.jsx)(t.code,{children:"package.json"})," in JavaScript and node projects)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"src"})," folder where all the Rust source files are stored"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"target"})," folder where the compiled ",(0,r.jsx)(t.code,{children:"wasm"})," will output to."]}),"\n"]}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(t.h3,{id:"source-files",children:"Source files"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"File"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#corers",children:"ft_core.rs"})}),(0,r.jsxs)(t.td,{children:["Contains the logic for transferring and controlling FTs. This file represents the implementation of the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"core"})," standard."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#librs",children:"lib.rs"})}),(0,r.jsx)(t.td,{children:"Holds the smart contract initialization functions and dictates what information is kept on-chain."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#metadatars",children:"metadata.rs"})}),(0,r.jsxs)(t.td,{children:["Defines the metadata structure. This file represents the implementation of the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Metadata",children:"metadata"})," extension of the standard."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"#storagers",children:"storage.rs"})}),(0,r.jsxs)(t.td,{children:["Contains the logic for registration and storage.  This file represents the implementation of the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"storage management"})," standard."]})]})]})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"skeleton\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 ft_core.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 metadata.rs\n    \u2514\u2500\u2500 storage.rs\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Explore the code in our ",(0,r.jsx)(t.a,{href:"https://github.com/near-examples/ft-tutorial/tree/main/1.skeleton",children:"GitHub repository"}),"."]})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"ft_corers",children:(0,r.jsx)(t.code,{children:"ft_core.rs"})}),"\n",(0,r.jsx)(t.p,{children:"Core logic that allows you to transfer FTs between users and query for important information."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"ft_transfer"})}),(0,r.jsx)(t.td,{children:"Transfers a specified amount of FTs to a receiver ID."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"ft_transfer_call"})}),(0,r.jsxs)(t.td,{children:["Transfers a specified amount of FTs to a receiver and attempts to perform a cross-contract call on the receiver\u2019s contract to execute the ",(0,r.jsx)(t.code,{children:"ft_on_transfer"})," method. The implementation of this ",(0,r.jsx)(t.code,{children:"ft_on_transfer"})," method is up to the contract writer. You\u2019ll see an example implementation in the marketplace section of this tutorial. Once ",(0,r.jsx)(t.code,{children:"ft_on_transfer"})," finishes executing, ",(0,r.jsx)(t.code,{children:"ft_resolve_transfer"})," is called to check if things were successful or not."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"ft_total_supply"})}),(0,r.jsx)(t.td,{children:"Returns the total amount of fungible tokens in circulation on the contract."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"ft_balance_of"})}),(0,r.jsx)(t.td,{children:"Returns how many fungible tokens a specific user owns."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"ft_on_transfer"})}),(0,r.jsxs)(t.td,{children:["Method that lives on a receiver's contract. It is called when FTs are transferred to the receiver's contract account via the ",(0,r.jsx)(t.code,{children:"ft_transfer_call"})," method. It returns how many FTs should be refunded back to the sender."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"ft_resolve_transfer"})}),(0,r.jsxs)(t.td,{children:["Invoked after the ",(0,r.jsx)(t.code,{children:"ft_on_transfer"})," is finished executing. This function will refund any FTs not used by the receiver contract and will return the net number of FTs sent to the receiver after the refund (if any)."]})]})]})]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"61",end:"167",url:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/ft_core.rs"}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/fts/circulating-supply",children:"circulating supply"})," and ",(0,r.jsx)(t.a,{href:"/tutorials/fts/transfers",children:"transfers"})," sections of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"librs",children:(0,r.jsx)(t.code,{children:"lib.rs"})}),"\n",(0,r.jsx)(t.p,{children:"This file outlines what information the contract stores and keeps track of."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"new_default_meta"})}),(0,r.jsxs)(t.td,{children:["Initializes the contract with default ",(0,r.jsx)(t.code,{children:"metadata"})," so the user doesn't have to provide any input. In addition, a total supply is passed in which is sent to the owner."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"new"})}),(0,r.jsxs)(t.td,{children:["Initializes the contract with the user-provided ",(0,r.jsx)(t.code,{children:"metadata"})," and total supply."]})]})]})]}),"\n",(0,r.jsx)(t.admonition,{title:"Keep in mind",type:"info",children:(0,r.jsxs)(t.p,{children:["The initialization functions (",(0,r.jsx)(t.code,{children:"new"}),", ",(0,r.jsx)(t.code,{children:"new_default_meta"}),") can only be called once."]})}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"36",end:"60",url:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/lib.rs"}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/fts/defining-a-token",children:"define a token"})," section of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"metadatars",children:(0,r.jsx)(t.code,{children:"metadata.rs"})}),"\n",(0,r.jsxs)(t.p,{children:["This file is used to outline the metadata for the Fungible Token itself.\nIn addition, you can define a function to view the contract's metadata which is part of the standard's ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Metadata",children:"metadata"})," extension."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"FungibleTokenMetadata"})}),(0,r.jsx)(t.td,{children:"This structure defines the metadata for the fungible token."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"ft_metadata"})}),(0,r.jsx)(t.td,{children:"This function allows users to query for the token's metadata."})]})]})]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"11",end:"30",url:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/metadata.rs"}),"\n",(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/fts/defining-a-token",children:"define a token"})," section of the tutorial series."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"storagers",children:(0,r.jsx)(t.code,{children:"storage.rs"})}),"\n",(0,r.jsxs)(t.p,{children:["Contains the registration logic as per the ",(0,r.jsx)(t.a,{href:"https://nomicon.io/Standards/StorageManagement",children:"storage management"})," standard."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Method"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"storage_deposit"})}),(0,r.jsx)(t.td,{children:"Payable method that receives an attached deposit of \u24c3 for a given account. This will register the user on the contract."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"storage_balance_bounds"})}),(0,r.jsx)(t.td,{children:"Returns the minimum and maximum allowed storage deposit required to interact with the contract. In the FT contract's case, min = max."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"storage_balance_of"})}),(0,r.jsx)(t.td,{children:"Returns the total and available storage paid by a given user. In the FT contract's case, available is always 0 since it's used by the contract for registration and you can't overpay for storage."})]})]})]}),"\n",(0,r.jsx)(a.Ey,{language:"rust",start:"81",end:"108",url:"https://github.com/near-examples/ft-tutorial/blob/main/1.skeleton/src/storage.rs"}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["You'll learn more about these functions in the ",(0,r.jsx)(t.a,{href:"/tutorials/fts/registering-accounts",children:"storage"})," section of the tutorial series."]})}),"\n",(0,r.jsx)(t.h2,{id:"building-the-skeleton",children:"Building the skeleton"}),"\n",(0,r.jsx)(t.p,{children:"If you haven't cloned the main repository yet, open a terminal and run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"git clone https://github.com/near-examples/ft-tutorial/\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Next, build the skeleton contract with the build script found in the ",(0,r.jsx)(t.code,{children:"1.skeleton/build.sh"})," file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"cd ft-tutorial/1.skeleton\ncargo near build\n"})}),"\n",(0,r.jsx)(t.p,{children:"Since this source is just a skeleton you'll get many warnings about unused code, such as:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"   = note: `#[warn(dead_code)]` on by default\n\nwarning: constant is never used: `GAS_FOR_RESOLVE_TRANSFER`\n --\x3e src/ft_core.rs:5:1\n  |\n5 | const GAS_FOR_RESOLVE_TRANSFER: Gas = Gas(5_000_000_000_000);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nwarning: constant is never used: `GAS_FOR_FT_TRANSFER_CALL`\n --\x3e src/ft_core.rs:6:1\n  |\n6 | const GAS_FOR_FT_TRANSFER_CALL: Gas = Gas(25_000_000_000_000 + GAS_FOR_RESOLVE_TRANSFER.0);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n\nwarning: `fungible-token` (lib) generated 25 warnings\n    Finished release [optimized] target(s) in 1.93s\n\u2728  Done in 2.03s.\n"})}),"\n",(0,r.jsx)(t.p,{children:"Don't worry about these warnings, you're not going to deploy this contract yet.\nBuilding the skeleton is useful to validate that your Rust toolchain works properly and that you'll be able to compile improved versions of this FT contract in the upcoming tutorials."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsxs)(t.p,{children:["You've seen the layout of this FT smart contract, and how all the functions are laid out across the different source files.\nUsing ",(0,r.jsx)(t.code,{children:"yarn"}),", you've been able to compile the contract, and you'll start fleshing out this skeleton in the next ",(0,r.jsx)(t.a,{href:"/tutorials/fts/circulating-supply",children:"section"})," of the tutorial."]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,r.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["rustc: ",(0,r.jsx)(t.code,{children:"1.77.1"})]}),"\n",(0,r.jsxs)(t.li,{children:["near-sdk-rs: ",(0,r.jsx)(t.code,{children:"5.1.0"})," (with enabled ",(0,r.jsx)(t.code,{children:"legacy"})," feature)"]}),"\n",(0,r.jsxs)(t.li,{children:["cargo-near: ",(0,r.jsx)(t.code,{children:"0.6.1"})]}),"\n"]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>i});n(67294);var r=n(36905);const s={tabItem:"tabItem_Ymn6"};var a=n(85893);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),s=n(36905),a=n(12466),i=n(16550),o=n(20469),l=n(91980),c=n(67392),d=n(50012);function u(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function x(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId,a=(0,i.k6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:s});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var t=new URLSearchParams(a.location.search);t.set(o,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[o,a])]}function p(e){var t,n,s,a,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,p=h(e),j=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var s=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:p})})),m=j[0],g=j[1],b=x({queryString:c,groupId:u}),v=b[0],y=b[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),s=n[0],a=n[1],[s,(0,r.useCallback)((function(e){t&&a.set(e)}),[t,a])]),k=w[0],_=w[1],T=function(){var e=null!=v?v:k;return f({value:e,tabValues:p})?e:null}();return(0,o.Z)((function(){T&&g(T)}),[T]),{selectedValue:m,selectValue:(0,r.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),_(e)}),[y,_,p]),tabValues:p}}var j=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function b(e){var t=e.className,n=e.block,r=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,a.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==r&&(c(t),i(s))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,s=l.indexOf(e.currentTarget)+1;n=null!=(r=l[s])?r:l[0];break;case"ArrowLeft":var a,i=l.indexOf(e.currentTarget)-1;n=null!=(a=l[i])?a:l[l.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},a,{className:(0,s.Z)("tabs__item",m.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,s=e.selectedValue,a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=a.find((function(e){return e.props.value===s}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function y(e){var t=p(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(b,Object.assign({},t,e)),(0,g.jsx)(v,Object.assign({},t,e))]})}function w(e){var t=(0,j.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>x,Ey:()=>j,SQ:()=>p});var r=n(67294),s=n(74866),a=n(85162),i=n(74165),o=n(15861),l=n(1841),c=n.n(l),d=n(85893);function u(){return(u=(0,o.Z)((0,i.Z)().mark((function e(t,n,r){var s,a,o,l;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((a=localStorage.getItem(t+"-until"))&&a>Date.now())){e.next=5;break}s=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:s=e.sent,localStorage.setItem(t,s),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return o=s.split("\n"),n=n?Number(n)-1:0,r=r?Number(r):o.length,o=o.slice(n,r),l=o.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",o.map((function(e){return e.slice(l)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,s=e.end,a=e.language,i=e.fname,o=e.metastring,l=(0,r.useState)("Loading..."),h=l[0],f=l[1];return(0,r.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],r=(t[1],new URL(n).pathname.split("/").slice(1)),s=r[0],a=r[1];return r[2],"https://raw.githubusercontent.com/"+s+"/"+a+"/"+r[3]+"/"+r.slice(4).join("/")}(t),r=function(e,t,n){return u.apply(this,arguments)}(e,n,s);r.then((function(e){return f(e)}))})),(0,d.jsxs)("div",{fname:i,children:[(0,d.jsx)(c(),{language:a,metastring:o+" showLineNumbers",children:h}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function x(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,d.jsx)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,d.jsx)(a.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function p(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),s=n.start,a=n.end,i=n.fname;if(e.type===j)return j({url:r,start:s,end:a,language:t,fname:i});return e}(e,n)})),1==t.length?(0,d.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,d.jsx)(s.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,d.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function j(e){var t=e.url,n=e.start,r=e.end,s=e.language,a=e.fname,i=e.metastring;return h({url:t,start:n,end:r,language:s,fname:a,metastring:i})}}}]);