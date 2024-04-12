"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3045],{52066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=t(85893),a=t(11151),l=t(74866),u=t(85162);const o={sidebar_position:2,sidebar_label:"Block"},s="Block Structure",i={id:"build/data-infrastructure/lake-data-structures/block",title:"Block Structure",description:"Definition",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/6.data-infrastructure/lake-data-structures/block.mdx",sourceDirName:"2.build/6.data-infrastructure/lake-data-structures",slug:"/build/data-infrastructure/lake-data-structures/block",permalink:"/zh-CN/build/data-infrastructure/lake-data-structures/block",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/lake-data-structures/block.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Block"},sidebar:"build",previous:{title:"Table of contents",permalink:"/zh-CN/build/data-infrastructure/lake-data-structures/toc"},next:{title:"Chunk",permalink:"/zh-CN/build/data-infrastructure/lake-data-structures/chunk"}},c={},d=[{value:"Definition",id:"definition",level:2},{value:"Representation",id:"representation",level:2},{value:"<code>Block</code>",id:"block",level:3},{value:"<code>BlockHeaderView</code>",id:"blockheaderview",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"block-structure",children:[(0,r.jsx)(n.code,{children:"Block"})," Structure"]}),"\n",(0,r.jsx)(n.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Block"})," is the main entity in NEAR Protocol blockchain. ",(0,r.jsx)(n.code,{children:"Blocks"})," are produced in NEAR Protocol every second."]}),"\n",(0,r.jsx)(n.p,{children:"It contains the info:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["about the ",(0,r.jsx)(n.code,{children:"Block"})," producer (",(0,r.jsx)(n.code,{children:"AccountId"})," of the validator responsible for particular ",(0,r.jsx)(n.code,{children:"Block"})," production)"]}),"\n",(0,r.jsx)(n.li,{children:"Block Header"}),"\n",(0,r.jsx)(n.li,{children:"List of Chunk Headers"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"representation",children:"Representation"}),"\n",(0,r.jsx)(n.h3,{id:"block",children:(0,r.jsx)(n.code,{children:"Block"})}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(u.Z,{value:"rust",label:"Rust",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"links=1",children:"pub struct BlockView {\n    pub author: AccountId,\n    pub header: BlockHeaderView,\n    pub chunks: Vec<ChunkHeaderView>,\n}\n"})})}),(0,r.jsx)(u.Z,{value:"typescript",label:"TypeScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"links=1",children:"export interface Block {\n  author: string;\n  header: BlockHeader;\n  chunks: ChunkHeader[];\n};\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"blockheaderview",children:(0,r.jsx)(n.code,{children:"BlockHeaderView"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"BlockHeaderView"})," contains main info about the block."]}),"\n",(0,r.jsxs)(l.Z,{children:[(0,r.jsx)(u.Z,{value:"rust",label:"Rust",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:"pub struct BlockHeaderView {\n    pub height: BlockHeight,\n    pub prev_height: Option<BlockHeight>,\n    pub epoch_id: CryptoHash,\n    pub next_epoch_id: CryptoHash,\n    pub hash: CryptoHash,\n    pub prev_hash: CryptoHash,\n    pub prev_state_root: CryptoHash,\n    pub chunk_receipts_root: CryptoHash,\n    pub chunk_headers_root: CryptoHash,\n    pub chunk_tx_root: CryptoHash,\n    pub outcome_root: CryptoHash,\n    pub chunks_included: u64,\n    pub challenges_root: CryptoHash,\n    /// Legacy json number. Should not be used.\n    pub timestamp: u64,\n    pub timestamp_nanosec: u64,\n    pub random_value: CryptoHash,\n    pub validator_proposals: Vec<ValidatorStakeView>,\n    pub chunk_mask: Vec<bool>,\n    pub gas_price: Balance,\n    pub block_ordinal: Option<NumBlocks>,\n    /// TODO(2271): deprecated.\n    pub rent_paid: Balance,\n    /// TODO(2271): deprecated.\n    pub validator_reward: Balance,\n    pub total_supply: Balance,\n    pub challenges_result: ChallengesResult,\n    pub last_final_block: CryptoHash,\n    pub last_ds_final_block: CryptoHash,\n    pub next_bp_hash: CryptoHash,\n    pub block_merkle_root: CryptoHash,\n    pub epoch_sync_data_hash: Option<CryptoHash>,\n    pub approvals: Vec<Option<Signature>>,\n    pub signature: Signature,\n    pub latest_protocol_version: ProtocolVersion,\n}\n"})})}),(0,r.jsx)(u.Z,{value:"typescript",label:"TypeScript",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",metastring:"links=1",children:"export interface BlockHeader {\n  approvals: (string | null)[];\n  blockMerkleRoot: string;\n  blockOrdinal: number;\n  challengesResult: ChallengeResult[];\n  challengesRoot: string;\n  chunkHeadersRoot: string;\n  chunkMask: boolean[];\n  chunkReceiptsRoot: string;\n  chunkTxRoot: string;\n  chunksIncluded: number;\n  epochId: string;\n  epochSyncDataHash: string | null;\n  gasPrice: string;\n  hash: string;\n  height: number;\n  lastDsFinalBlock: string;\n  lastFinalBlock: string;\n  latestProtocolVersion: number;\n  nextBpHash: string;\n  nextEpochId: string;\n  outcomeRoot: string;\n  prevHash: string;\n  prevHeight: number;\n  prevStateRoot: string;\n  randomValue: string;\n  rentPaid: string;\n  signature: string;\n  timestamp: number;\n  timestampNanosec: string;\n  totalSupply: string;\n  validatorProposals: [];\n  validatorReward: string;\n};\n"})})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>u});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var l=t(85893);function u(e){var n=e.children,t=e.hidden,u=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,u),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(36905),l=t(12466),u=t(16550),o=t(20469),s=t(91980),i=t(67392),c=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,i.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function b(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,l=(0,u.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(l.location.search);n.set(o,e),l.replace(Object.assign({},l.location,{search:n.toString()}))}}),[o,l])]}function f(e){var n,t,a,l,u=e.defaultValue,s=e.queryString,i=void 0!==s&&s,d=e.groupId,f=p(e),v=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:u,tabValues:f})})),k=v[0],m=v[1],g=b({queryString:i,groupId:d}),x=g[0],j=g[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(n),a=t[0],l=t[1],[a,(0,r.useCallback)((function(e){n&&l.set(e)}),[n,l])]),_=y[0],C=y[1],w=function(){var e=null!=x?x:_;return h({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){w&&m(w)}),[w]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);m(e),j(e),C(e)}),[j,C,f]),tabValues:f}}var v=t(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function g(e){var n=e.className,t=e.block,r=e.selectedValue,u=e.selectValue,o=e.tabValues,s=[],i=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=s.indexOf(n),a=o[t].value;a!==r&&(i(n),u(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var l,u=s.indexOf(e.currentTarget)-1;t=null!=(l=s[u])?l:s[s.length-1]}null==(n=t)||n.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,l=e.attributes;return(0,m.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},l,{className:(0,a.Z)("tabs__item",k.tabItem,null==l?void 0:l.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function x(e){var n=e.lazy,t=e.children,a=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var u=l.find((function(e){return e.props.value===a}));return u?(0,r.cloneElement)(u,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function j(e){var n=f(e);return(0,m.jsxs)("div",{className:(0,a.Z)("tabs-container",k.tabList),children:[(0,m.jsx)(g,Object.assign({},e,n)),(0,m.jsx)(x,Object.assign({},e,n))]})}function y(e){var n=(0,v.Z)();return(0,m.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>u});var r=t(67294);const a={},l=r.createContext(a);function u(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:u(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);