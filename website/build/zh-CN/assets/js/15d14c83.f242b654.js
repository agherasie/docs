"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5985],{65232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=t(85893),a=t(11151),i=t(74866),s=t(85162);const o={},l=void 0,u={id:"build/primitives/nft/bos/query",title:"query",description:"Example response",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/5.primitives/nft/bos/query.md",sourceDirName:"2.build/5.primitives/nft/bos",slug:"/build/primitives/nft/bos/query",permalink:"/zh-CN/build/primitives/nft/bos/query",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/5.primitives/nft/bos/query.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function f(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(i.Z,{groupId:"nft-contract-tabs",className:"file-tabs",children:[(0,r.jsxs)(s.Z,{value:"NFT Primitive",label:"Reference",default:!0,children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const tokenData = Near.view("nft.primitives.near", "nft_token", {\n  token_id: "1",\n});\n'})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:" Example response "}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "token_id": "1",\n  "owner_id": "bob.near",\n  "metadata": {\n    "title": "string", // ex. "Arch Nemesis: Mail Carrier" or "Parcel #5055"\n    "description": "string", // free-form description\n    "media": "string", // URL to associated media, preferably to decentralized, content-addressed storage\n    "media_hash": "string", // Base64-encoded sha256 hash of content referenced by the `media` field. Required if `media` is included.\n    "copies": 1, // number of copies of this set of metadata in existence when token was minted.\n    "issued_at": 1642053411068358156, // When token was issued or minted, Unix epoch in milliseconds\n    "expires_at": 1642053411168358156, // When token expires, Unix epoch in milliseconds\n    "starts_at": 1642053411068358156, // When token starts being valid, Unix epoch in milliseconds\n    "updated_at": 1642053411068358156, // When token was last updated, Unix epoch in milliseconds\n    "extra": "string", // anything extra the NFT wants to store on-chain. Can be stringified JSON.\n    "reference": "string", // URL to an off-chain JSON file with more info.\n    "reference_hash": "string" // Base64-encoded sha256 hash of JSON from reference field. Required if `reference` is included.\n  }\n}\n'})})]})]}),(0,r.jsxs)(s.Z,{value:"Paras",label:"Paras",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const tokenData = fetch("https://api-v2-mainnet.paras.id/token?token_id=84686:1154");\n'})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:" Example response "}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "status": 1,\n  "data": {\n    "results": [\n      {\n        "_id": "61dfbf27284abc1cc0b87c9d",\n        "contract_id": "x.paras.near",\n        "token_id": "84686:1154",\n        "owner_id": "bob.near",\n        "token_series_id": "84686",\n        "edition_id": "1154",\n        "metadata": {\n          "title": "Tokenfox Silver Coin #1154",\n          "description": "Holding this silver coin in your wallet will bring you health and happiness \\uD83D\\uDE0A",\n          "media": "bafkreihpapfu7rzsmejjgl2twllge6pbrfmqaahj2wkz6nq55c6trhhtrq",\n          "media_hash": null,\n          "copies": 4063,\n          "issued_at": null,\n          "expires_at": null,\n          "starts_at": null,\n          "updated_at": null,\n          "extra": null,\n          "reference": "bafkreib6uj5kxbadfvf6qes5flema7jx6u5dj5zyqcneaoyqqzlm6kpu5a",\n          "reference_hash": null,\n          "collection": "Tokenfox Collection Cards",\n          "collection_id": "tokenfox-collection-cards-by-tokenfoxnear",\n          "creator_id": "tokenfox.near",\n          "blurhash": "U7F~gc00_3D%00~q4n%M_39F-;RjM{xuWBRj",\n          "score": 0,\n          "mime_type": "image/png"\n        },\n        "royalty": {\n          "tokenfox.near": 1000\n        },\n        "price": null,\n        "approval_id": null,\n        "ft_token_id": null,\n        "has_price": null,\n        "is_creator": true,\n        "total_likes": 8,\n        "likes": null,\n        "categories": [],\n        "view": 4\n      }\n    ],\n    "count": 1,\n    "skip": 0,\n    "limit": 10\n  }\n}\n'})})]}),(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"https://parashq.github.io/",children:"Paras API documentation"})," for the full list of methods."]})}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Paras API methods returns data from all NFT contracts in NEAR. You might want to pass more parameters like ",(0,r.jsx)(n.code,{children:"contract_id"})," or ",(0,r.jsx)(n.code,{children:"owner_id"})," to make the response more accurate."]})})]}),(0,r.jsxs)(s.Z,{value:"Mintbase",label:"Mintbase",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const tokenData = fetch("https://graph.mintbase.xyz", {\n  method: "POST",\n  headers: {\n    "mb-api-key": "anon",\n    "Content-Type": "application/json",\n    "x-hasura-role": "anonymous",\n  },\n  body: JSON.stringify({\n    query: `\n      query getToken{\n        tokens: nft_tokens(\n          where: {\n            token_id: { _eq: "84686:1154" }\n          }\n        ) {\n          tokenId: token_id\n          ownerId: owner\n          contractId: nft_contract_id\n          reference\n          issuedAt: issued_at\n          copies\n          metadataId: metadata_id\n        }\n      }\n    `,\n  }),\n});\n'})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:" Example response "}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "ok": true,\n  "status": 200,\n  "contentType": "application/json",\n  "body": {\n    "data": {\n      "tokens": [\n        {\n          "tokenId": "84686:1154",\n          "ownerId": "bob.near",\n          "contractId": "x.paras.near",\n          "reference": "bafkreib6uj5kxbadfvf6qes5flema7jx6u5dj5zyqcneaoyqqzlm6kpu5a",\n          "issuedAt": "2022-01-13T05:56:51.068358",\n          "copies": 4063,\n          "metadataId": "x.paras.near:5210047642790498956c9669d6a37b98"\n        }\n      ]\n    }\n  }\n}\n'})})]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["In the future, users may be required to register using an api key. For now, simply passing the value ",(0,r.jsx)(n.code,{children:"anon"})," for ",(0,r.jsx)(n.code,{children:"mb-api-key"})," will work."]})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(36905),i=t(12466),s=t(16550),o=t(20469),l=t(91980),u=t(67392),c=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function f(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function m(e){var n,t,a,i,s=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,m=f(e),b=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),v=b[0],x=b[1],g=h({queryString:u,groupId:d}),j=g[0],k=g[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),_=y[0],w=y[1],q=function(){var e=null!=j?j:_;return p({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){q&&x(q)}),[q]),{selectedValue:v,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),k(e),w(e)}),[k,w,m]),tabValues:m}}var b=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function g(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(u(n),s(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;t=null!=(i=l[s])?i:l[l.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function k(e){var n=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,Object.assign({},e,n)),(0,x.jsx)(j,Object.assign({},e,n))]})}function y(e){var n=(0,b.Z)();return(0,x.jsx)(k,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);