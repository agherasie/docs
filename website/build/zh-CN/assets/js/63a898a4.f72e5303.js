"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6893],{42505:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=r(85893),a=r(11151);r(74866),r(85162);const i={id:"indexer-for-explorer",title:"Indexer for Explorer (Deprecated)"},s=void 0,o={id:"tools/indexer-for-explorer",title:"Indexer for Explorer (Deprecated)",description:"While developing a decentralized app you might want to query usage information for a contract such as:",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/4.tools/indexer4explorer.md",sourceDirName:"4.tools",slug:"/tools/indexer-for-explorer",permalink:"/zh-CN/tools/indexer-for-explorer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/indexer4explorer.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1709152665e3,frontMatter:{id:"indexer-for-explorer",title:"Indexer for Explorer (Deprecated)"}},l={},c=[{value:"Example Queries",id:"example-queries",level:2},{value:"Transactions Calling a Method",id:"transactions-calling-a-method",level:3},{value:"Users, Status, and Attached Money",id:"users-status-and-attached-money",level:3},{value:"Sent Money",id:"sent-money",level:3},{value:"NEAR Explorer sunsetting",id:"near-explorer-sunsetting",level:2},{value:"What exactly is being shut down?",id:"what-exactly-is-being-shut-down",level:3},{value:"What is the timeline?",id:"what-is-the-timeline",level:3},{value:"What does this mean for me?",id:"what-does-this-mean-for-me",level:3},{value:"What are the alternatives?",id:"what-are-the-alternatives",level:3},{value:"Analytics Use-Case",id:"analytics-use-case",level:4},{value:"Web or API usage",id:"web-or-api-usage",level:4},{value:"Can I still continue using Explorer Database?",id:"can-i-still-continue-using-explorer-database",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"While developing a decentralized app you might want to query usage information for a contract such as:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Which users have called a specific method in my contract?"}),"\n",(0,t.jsx)(n.li,{children:"How much money and gas did they deposit?"}),"\n",(0,t.jsx)(n.li,{children:"Which transactions failed?"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["In order to simplify asking these questions is that we developed the ",(0,t.jsx)(n.a,{href:"https://github.com/near/near-indexer-for-explorer",children:"NEAR Indexer for Explorer"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Both ",(0,t.jsx)(n.code,{children:"testnet"})," and ",(0,t.jsx)(n.code,{children:"mainnet"})," networks have active instances that fill the database with all the data from the network starting from the genesis as ",(0,t.jsx)(n.a,{href:"https://nearblocks.io/",children:"Explorer"})," requires."]}),"\n",(0,t.jsx)(n.admonition,{title:"GitHub repo",type:"info",children:(0,t.jsxs)(n.p,{children:["NEAR Indexer for Explorer is an indexer built on top of ",(0,t.jsx)(n.a,{href:"https://near-indexers.io/docs/projects/near-indexer-framework",children:"NEAR Indexer microframework"}),". It watches the network and stores all the data from the blockchain in the PostgreSQL database. You can find the source code on ",(0,t.jsx)(n.a,{href:"https://github.com/near/near-indexer-for-explorer",children:"this GitHub repository"}),"."]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"example-queries",children:"Example Queries"}),"\n",(0,t.jsx)(n.h3,{id:"transactions-calling-a-method",children:"Transactions Calling a Method"}),"\n",(0,t.jsxs)(n.p,{children:["Query for all transactions that called ",(0,t.jsx)(n.code,{children:"contribute"})," in the ",(0,t.jsx)(n.code,{children:"v1.faucet.nonofficial.testnet"})," testnet account."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select r.predecessor_account_id, t.transaction_hash \nfrom receipts r, action_receipt_actions ara, transactions t\nwhere r.receiver_account_id ='v1.faucet.nonofficial.testnet'\n  and ara.receipt_id = r.receipt_id\n  and ara.action_kind = 'FUNCTION_CALL'\n  and ara.args @> '{\"method_name\": \"contribute\"}'\n  and t.transaction_hash = r.originated_from_transaction_hash\n"})}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"users-status-and-attached-money",children:"Users, Status, and Attached Money"}),"\n",(0,t.jsxs)(n.p,{children:["Query for all users that called ",(0,t.jsx)(n.code,{children:"contribute"})," in ",(0,t.jsx)(n.code,{children:"v1.faucet.nonofficial.testnet"}),", how much they attached to the call, and the transaction status."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select t.transaction_hash, eo.status, r.predecessor_account_id , ara.args -> 'deposit' as deposit\nfrom receipts r, action_receipt_actions ara, transactions t, execution_outcomes eo\nwhere r.receiver_account_id ='v1.faucet.nonofficial.testnet'\n  and ara.receipt_id = r.receipt_id and ara.action_kind = 'FUNCTION_CALL'\n  and ara.args @> '{\"method_name\": \"contribute\"}'\n  and t.transaction_hash = r.originated_from_transaction_hash\n  and r.receipt_id = eo.receipt_id\n"})}),"\n",(0,t.jsx)("hr",{className:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"sent-money",children:"Sent Money"}),"\n",(0,t.jsxs)(n.p,{children:["Query for all the transfers going out from ",(0,t.jsx)(n.code,{children:"v1.faucet.nonofficial.testnet"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select r.receiver_account_id, ara.args -> 'deposit' as deposit  \nfrom receipts r, action_receipt_actions ara\nwhere r.predecessor_account_id  ='v1.faucet.nonofficial.testnet'\n  and ara.receipt_id = r.receipt_id and ara.action_kind = 'TRANSFER'\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"near-explorer-sunsetting",children:"NEAR Explorer sunsetting"}),"\n",(0,t.jsxs)(n.p,{children:["Pagoda made a decision to sunset NEAR Explorer as a product. This means that ",(0,t.jsx)(n.code,{children:"nearblocks.io"})," (and ",(0,t.jsx)(n.code,{children:"explorer.testnet.near.org"}),") will become a landing page with a list of available alternatives, and the existing ",(0,t.jsx)(n.a,{href:"https://nearblocks.io",children:"nearblocks.io"})," will be hosted under a new domain name and will be transitioned to the community through DevHub. ",(0,t.jsx)(n.a,{href:"https://near.social/devgovgigs.near/widget/gigs-board.pages.Post?id=635",children:"Read more here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"what-exactly-is-being-shut-down",children:"What exactly is being shut down?"}),"\n",(0,t.jsx)(n.p,{children:"You will lose access to databases with these URLs, or other Replicas you might have been given access to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"testnet.db.explorer.indexer.near.dev/testnet_explorer"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"mainnet.db.explorer.indexer.near.dev/mainnet_explorer"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["There is no plan to shut down any other data products, such as ",(0,t.jsx)(n.a,{href:"https://docs.near.org/concepts/advanced/near-lake-framework",children:"NEAR Lake"})," or ",(0,t.jsx)(n.a,{href:"https://www.pagoda.co/enhanced-api",children:"EnhancedAPI"})," at the moment."]}),"\n",(0,t.jsx)(n.h3,{id:"what-is-the-timeline",children:"What is the timeline?"}),"\n",(0,t.jsx)(n.p,{children:"Postgres users will lose access to data on the 30th of November, Thursday (12:00 pm Pacific Time Zone). Please migrate to one of the options listed below instead."}),"\n",(0,t.jsx)(n.h3,{id:"what-does-this-mean-for-me",children:"What does this mean for me?"}),"\n",(0,t.jsxs)(n.p,{children:["If you are using the public Postgres Explorer Database, you will need to migrate to other solutions, depending on your use-case. You should start planning for it right now and reach out to ",(0,t.jsx)(n.a,{href:"https://nearbuilders.com/tg-data",children:"this Telegram group"})," to get help."]}),"\n",(0,t.jsx)(n.h3,{id:"what-are-the-alternatives",children:"What are the alternatives?"}),"\n",(0,t.jsx)(n.p,{children:"There are two major use-cases that you might be using Explorer DB for: analytics and real-time queries from web user interfaces."}),"\n",(0,t.jsx)(n.h4,{id:"analytics-use-case",children:"Analytics Use-Case"}),"\n",(0,t.jsx)(n.p,{children:"This is if you use Explorer DB to build internal or external dashboards. Pagoda has been working with Google Web3 team to enable BigQuery public dataset that has a compatible schema with Explorer DB."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Find more information about our ",(0,t.jsx)(n.a,{href:"/zh-CN/build/data-infrastructure/big-query",children:"BigQuery solution here"}),"."]})}),"\n",(0,t.jsx)(n.h4,{id:"web-or-api-usage",children:"Web or API usage"}),"\n",(0,t.jsx)(n.p,{children:"This is if you make queries to Explorer DB in response to API requests that your users make on your application. There are various options that you can explore:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["If you are working with token balances, including $NEAR, fungible or non-fungible tokens, consider using ",(0,t.jsx)(n.a,{href:"https://www.pagoda.co/enhanced-api",children:"Enhanced API"})," hosted by Pagoda, or run it yourself using ",(0,t.jsx)(n.a,{href:"https://github.com/near/near-enhanced-api-server",children:"https://github.com/near/near-enhanced-api-server"})," and ",(0,t.jsx)(n.a,{href:"https://github.com/near/near-microindexers",children:"https://github.com/near/near-microindexers"})]}),"\n",(0,t.jsxs)(n.li,{children:["Use NEAR QueryAPI \u2013 serverless indexers and GraphQL endpoints: ",(0,t.jsx)(n.a,{href:"https://near.org/s/p?a=nearpavel.near&b=97029570",children:"https://near.org/s/p?a=nearpavel.near&b=97029570"})]}),"\n",(0,t.jsxs)(n.li,{children:["Use NEAR Lake Indexer. Create an indexer using ",(0,t.jsx)(n.a,{href:"https://github.com/near/near-lake-framework-rs",children:"Rust"}),", ",(0,t.jsx)(n.a,{href:"https://github.com/near/near-lake-framework-js",children:"JavaScript"}),". There are other languages supported by community, ",(0,t.jsx)(n.a,{href:"https://github.com/search?q=near-lake-framework&type=repositories",children:"try this search"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Consider other indexer solutions built by the community"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"can-i-still-continue-using-explorer-database",children:"Can I still continue using Explorer Database?"}),"\n",(0,t.jsxs)(n.p,{children:["No, you won\u2019t be able to continue using Public Explorer Database after the sunset. However you can start your own instance of ",(0,t.jsx)(n.a,{href:"https://github.com/near/near-indexer-for-explorer",children:"https://github.com/near/near-indexer-for-explorer"})," and reindex the history from scratch or use a latest backup. We will share a backup of Explorer DB in September if you want to run your own instance."]}),"\n",(0,t.jsx)(n.p,{children:"To run your own infra, you will need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Indexer services:"})," We use two e2-medium instances on GCP for redundancy, with 2 vCPUs and 4GB of RAM."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"A database:"})," We use Postgres version 11, with 8+ vCPUs, 52GB+ RAM and ~8TB of SSD storage. In addition, we recommend running an extra read-replica on a similar or more powerful machine."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>s});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var i=r(85893);function s(e){var n=e.children,r=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,s),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>y});var t=r(67294),a=r(36905),i=r(12466),s=r(16550),o=r(20469),l=r(91980),c=r(67392),u=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,i=(0,s.k6)(),o=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,l._X)(o),(0,t.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function x(e){var n,r,a,i,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,x=h(e),m=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:x})})),b=m[0],g=m[1],v=f({queryString:c,groupId:d}),j=v[0],w=v[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(n),a=r[0],i=r[1],[a,(0,t.useCallback)((function(e){n&&i.set(e)}),[n,i])]),_=y[0],k=y[1],E=function(){var e=null!=j?j:_;return p({value:e,tabValues:x})?e:null}();return(0,o.Z)((function(){E&&g(E)}),[E]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:x}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),k(e)}),[w,k,x]),tabValues:x}}var m=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(85893);function v(e){var n=e.className,r=e.block,t=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,r=l.indexOf(n),a=o[r].value;a!==t&&(c(n),s(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,a=l.indexOf(e.currentTarget)+1;r=null!=(t=l[a])?t:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;r=null!=(i=l[s])?i:l[l.length-1]}null==(n=r)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:o.map((function(e){var n=e.value,r=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function j(e){var n=e.lazy,r=e.children,a=e.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===a}));return s?(0,t.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function w(e){var n=x(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(v,Object.assign({},e,n)),(0,g.jsx)(j,Object.assign({},e,n))]})}function y(e){var n=(0,m.Z)();return(0,g.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>s});var t=r(67294);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);