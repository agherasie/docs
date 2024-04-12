"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7969],{48528:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(85893),a=r(11151),s=r(77229);const i={id:"storage",title:"State & Data Structures"},o=void 0,l={id:"build/smart-contracts/anatomy/storage",title:"State & Data Structures",description:"Each contract has its own state (storage), which only they can modify but anyone can see.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.build/2.smart-contracts/anatomy/storage.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/storage",permalink:"/vi/build/smart-contracts/anatomy/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/storage.md",tags:[],version:"current",frontMatter:{id:"storage",title:"State & Data Structures"},sidebar:"build",previous:{title:"Environment",permalink:"/vi/build/smart-contracts/anatomy/environment"},next:{title:"Transfers & Actions",permalink:"/vi/build/smart-contracts/anatomy/actions"}},c={},u=[{value:"Defining the State",id:"defining-the-state",level:2},{value:"Data Structures",id:"data-structures",level:2},{value:"Vector",id:"vector",level:3},{value:"Map",id:"map",level:3},{value:"Set",id:"set",level:3},{value:"Tree",id:"tree",level:3},{value:"Storage Cost",id:"storage-cost",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Each contract has its own state (storage), which ",(0,n.jsx)(t.strong,{children:"only they can modify"})," but ",(0,n.jsx)(t.a,{href:"/vi/tools/near-cli#near-view-state-near-view-state",children:"anyone can see"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["A contract stores all its data in a ",(0,n.jsx)(t.code,{children:"key-value"})," storage. This however is abstracted from you by the SDK through ",(0,n.jsx)(t.a,{href:"/vi/build/smart-contracts/anatomy/serialization",children:"serialization"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Contracts ",(0,n.jsx)(t.a,{href:"#storage-cost",children:"pay for their storage"})," by locking part of their balance. Currently it costs ",(0,n.jsx)(t.strong,{children:"~1 \u24c3"})," to store ",(0,n.jsx)(t.strong,{children:"100KB"})]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"defining-the-state",children:"Defining the State"}),"\n",(0,n.jsxs)(t.p,{children:["The contract's state is defined by the ",(0,n.jsx)(t.a,{href:"/vi/build/smart-contracts/anatomy/#defining-the-contract",children:"main class attributes"}),", and accessed through them."]}),"\n",(0,n.jsxs)(t.p,{children:["In the state you can store constants, native types, and complex objects. When in doubt, prefer to use ",(0,n.jsx)(t.a,{href:"#data-structures",children:"SDK collections"}),"\nover native ones, because they are optimized for the ",(0,n.jsx)(t.a,{href:"/vi/build/smart-contracts/anatomy/serialization#borsh-state-serialization",children:"serialized key-value storage"}),"."]}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"6",end:"12"})}),(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"14",end:"24"})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data-structures",children:"Data Structures"}),"\n",(0,n.jsxs)(t.p,{children:["The NEAR SDK exposes a series of structures (",(0,n.jsx)(t.a,{href:"#vector",children:"Vectors"}),", ",(0,n.jsx)(t.a,{href:"#set",children:"Sets"}),", ",(0,n.jsx)(t.a,{href:"#map",children:"Maps"})," and ",(0,n.jsx)(t.a,{href:"#tree",children:"Trees"}),")\nto simplify storing data in an efficient way."]}),"\n",(0,n.jsxs)(t.admonition,{title:"Instantiation",type:"info",children:[(0,n.jsxs)(t.p,{children:["All structures need to be initialized using a ",(0,n.jsxs)(t.strong,{children:["unique ",(0,n.jsx)(t.code,{children:"prefix"})]}),", which will be used to identify the structure's keys\nin the ",(0,n.jsx)(t.a,{href:"/vi/build/smart-contracts/anatomy/serialization#borsh-state-serialization",children:"serialized state"})]}),(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"8",end:"11"})}),(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"33",end:"38"})})]})]}),"\n",(0,n.jsx)("hr",{className:"subsection"}),"\n",(0,n.jsx)(t.h3,{id:"vector",children:"Vector"}),"\n",(0,n.jsxs)(t.p,{children:["Implements a ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Array_data_structure",children:"vector/array"})," which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces."]}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"25",end:"28"})}),(0,n.jsxs)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,n.jsx)(s.Ey,{fname:"vector.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/vector.rs",start:"12",end:"30"}),(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})]}),"\n",(0,n.jsx)("hr",{className:"subsection"}),"\n",(0,n.jsx)(t.h3,{id:"map",children:"Map"}),"\n",(0,n.jsxs)(t.p,{children:["Implements a ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Associative_array",children:"map/dictionary"})," which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces."]}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"33",end:"37"})}),(0,n.jsxs)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,n.jsx)(s.Ey,{fname:"map.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/map.rs",start:"9",end:"24"}),(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Nesting of Objects - Temporary Solution"}),(0,n.jsx)(t.p,{children:"In the JS SDK, you can store and retrieve elements from a nested map or object, but first you need to construct or deconstruct the structure from state. This is a temporary solution until the improvements have been implemented to the SDK. Here is an example of how to do this:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'import { NearBindgen, call, view, near, UnorderedMap } from "near-sdk-js";\n\n@NearBindgen({})\nclass StatusMessage {\n  records: UnorderedMap;\n  constructor() {\n    this.records = new UnorderedMap("a");\n  }\n\n  @call({})\n  set_status({ message, prefix }: { message: string; prefix: string }) {\n    let account_id = near.signerAccountId();\n\n    const inner: any = this.records.get("b" + prefix);\n    const inner_map: UnorderedMap = inner\n      ? UnorderedMap.deserialize(inner)\n      : new UnorderedMap("b" + prefix);\n\n    inner_map.set(account_id, message);\n\n    this.records.set("b" + prefix, inner_map);\n  }\n\n  @view({})\n  get_status({ account_id, prefix }: { account_id: string; prefix: string }) {\n    const inner: any = this.records.get("b" + prefix);\n    const inner_map: UnorderedMap = inner\n      ? UnorderedMap.deserialize(inner)\n      : new UnorderedMap("b" + prefix);\n    return inner_map.get(account_id);\n  }\n}\n'})})]}),"\n",(0,n.jsx)("hr",{className:"subsection"}),"\n",(0,n.jsx)(t.h3,{id:"set",children:"Set"}),"\n",(0,n.jsxs)(t.p,{children:["Implements a ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Set_(abstract_data_type)",children:"set"})," which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces."]}),"\n",(0,n.jsxs)(s.O2,{children:[(0,n.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(s.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"42",end:"46"})}),(0,n.jsxs)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,n.jsx)(s.Ey,{fname:"set.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/set.rs",start:"9",end:"16"}),(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})]}),"\n",(0,n.jsx)("hr",{className:"subsection"}),"\n",(0,n.jsx)(t.h3,{id:"tree",children:"Tree"}),"\n",(0,n.jsxs)(t.p,{children:["An ordered equivalent of Map. The underlying implementation is based on an ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/AVL_tree",children:"AVL"}),". You should use this structure when you need to: have a consistent order, or access the min/max keys."]}),"\n",(0,n.jsx)(s.O2,{children:(0,n.jsxs)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,n.jsx)(s.Ey,{fname:"tree.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/tree.rs",start:"9",end:"24"}),(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"storage-cost",children:"Storage Cost"}),"\n",(0,n.jsx)(t.p,{children:"Your contract needs to lock a portion of their balance proportional to the amount of data they stored in the blockchain. This means that:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If more data is added and the ",(0,n.jsx)(t.strong,{children:"storage increases \u2191"}),", then your contract's ",(0,n.jsx)(t.strong,{children:"balance decreases \u2193"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["If data is deleted and the ",(0,n.jsx)(t.strong,{children:"storage decreases \u2193"}),", then your contract's ",(0,n.jsx)(t.strong,{children:"balance increases \u2191"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Currently, it cost approximately ",(0,n.jsx)(t.strong,{children:"1 \u24c3"})," to store ",(0,n.jsx)(t.strong,{children:"100kb"})," of data."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["You can save on smart contract storage if using NEAR Account IDs by encoding them using base32. Since they consist of ",(0,n.jsx)(t.code,{children:"[a-z.-_]"})," characters with a maximum length of 64 characters, they can be encoded using 5 bits per character, with terminal ",(0,n.jsx)(t.code,{children:"\\0"}),". Going to a size of 65 * 5 = 325 bits from the original (64 + 4) * 8 = 544 bits. This is a 40% reduction in storage costs."]})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"An error will raise if your contract tries to increase its state while not having NEAR to cover for storage."})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["Be mindful of potential ",(0,n.jsx)(t.a,{href:"/vi/build/smart-contracts/security/storage",children:"small deposit attacks"})]})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>i});r(67294);var n=r(36905);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function i(e){var t=e.children,r=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(67294),a=r(36905),s=r(12466),i=r(16550),o=r(20469),l=r(91980),c=r(67392),u=r(50012);function d(e){var t,r;return null!=(t=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function h(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,s=(0,i.k6)(),o=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function f(e){var t,r,a,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=h(e),b=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),x=b[0],g=b[1],v=p({queryString:c,groupId:d}),j=v[0],y=v[1],S=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(t),a=r[0],s=r[1],[a,(0,n.useCallback)((function(e){t&&s.set(e)}),[t,s])]),w=S[0],k=S[1],E=function(){var e=null!=j?j:w;return m({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){E&&g(E)}),[E]),{selectedValue:x,selectValue:(0,n.useCallback)((function(e){if(!m({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),k(e)}),[y,k,f]),tabValues:f}}var b=r(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function v(e){var t=e.className,r=e.block,n=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==n&&(c(t),i(a))},d=function(e){var t,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var n,a=l.indexOf(e.currentTarget)+1;r=null!=(n=l[a])?n:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;r=null!=(s=l[i])?s:l[l.length-1]}null==(t=r)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:o.map((function(e){var t=e.value,r=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===t}),children:null!=r?r:t}),t)}))})}function j(e){var t=e.lazy,r=e.children,a=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===a}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(v,Object.assign({},e,t)),(0,g.jsx)(j,Object.assign({},e,t))]})}function S(e){var t=(0,b.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,r)=>{r.d(t,{Ey:()=>u,O2:()=>l,SQ:()=>c});r(67294);var n=r(74866),a=r(85162),s=r(95665),i=r.n(s),o=r(85893);function l(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,o.jsx)(n.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,o.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,r=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var r=e.props,n=(r.children,r.url),a=r.start,s=r.end,i=r.fname;if(e.type===u)return u({url:n,start:a,end:s,language:t,fname:i});return e}(e,r)})),1==t.length?(0,o.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,o.jsx)(n.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,o.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,r=e.start,n=e.end,a=e.language,s=e.fname,l=t+"#";return r&&n&&(l+="L"+r+"-L"+n+"#"),(0,o.jsx)(i(),{language:a,fname:s,children:l})}}}]);