"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2493],{14839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=t(85893),a=t(11151),i=t(77229);const s={id:"push-notifications",title:"Push Notifications"},o=void 0,l={id:"tutorials/near-components/push-notifications",title:"Push Notifications",description:"Push messages enable your gateway to send notifications on desktop and mobile devices even when the users are not active.",source:"@site/../docs/3.tutorials/near-components/push-notifications.md",sourceDirName:"3.tutorials/near-components",slug:"/tutorials/near-components/push-notifications",permalink:"/tutorials/near-components/push-notifications",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/near-components/push-notifications.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1712759479e3,frontMatter:{id:"push-notifications",title:"Push Notifications"},sidebar:"tutorials",previous:{title:"Blog Posts",permalink:"/tutorials/near-components/blog-posts"},next:{title:"WebSockets & QueryAPI",permalink:"/tutorials/near-components/queryapi-websockets"}},u={},c=[{value:"Create the Service Worker",id:"create-the-service-worker",level:2},{value:"Subscribe to our Notifications",id:"subscribe-to-our-notifications",level:2},{value:"Create a Stream in our Server",id:"create-a-stream-in-our-server",level:2},{value:"Handle Notifications",id:"handle-notifications",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Push messages enable your gateway to send notifications on desktop and mobile devices even when the users are not active."}),"\n",(0,r.jsx)(n.p,{children:"To implement push notifications, you need to:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Create a Service Worker"}),"\n",(0,r.jsx)(n.li,{children:"Ask the user for permission to send push notifications"}),"\n",(0,r.jsxs)(n.li,{children:["Send the ",(0,r.jsx)(n.code,{children:"client identifier"})," information to our notification server"]}),"\n",(0,r.jsx)(n.li,{children:"Add logic to display the notifications"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Example",type:"tip",children:(0,r.jsxs)(n.p,{children:["Check our working example at ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/BOS-notifications",children:"https://github.com/near-examples/BOS-notifications"})]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"create-the-service-worker",children:"Create the Service Worker"}),"\n",(0,r.jsxs)(n.p,{children:["Push notifications work by having a ",(0,r.jsx)(n.a,{href:"https://codelabs.developers.google.com/codelabs/push-notifications#2",children:"service worker"})," on the client side that listens for messages from the NEAR notifications server."]}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.Ey,{fname:"main.js",language:"js",value:"Create",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/main.js",start:"16",end:"22"})}),"\n",(0,r.jsx)(n.p,{children:"Browsers readily provide native support for service workers, so you can easily check if a service worker exists, and create one if not."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"subscribe-to-our-notifications",children:"Subscribe to our Notifications"}),"\n",(0,r.jsxs)(n.p,{children:["In order to have the ",(0,r.jsx)(n.code,{children:"service worker"})," display notifications, you need to subscribe it to a notifications server."]}),"\n",(0,r.jsxs)(n.p,{children:["A notification server is identified by its ",(0,r.jsx)(n.code,{children:"public key"}),", constraining that only the server holding the ",(0,r.jsx)(n.code,{children:"private"})," counterpart can push notifications to the user."]}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.Ey,{fname:"main.js",language:"js",value:"Subscribe",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/main.js",start:"44",end:"50"})}),"\n",(0,r.jsx)(n.admonition,{title:"Permission",type:"tip",children:(0,r.jsx)(n.p,{children:"When you subscribe to the service, the user will be asked for permission to be sent notifications."})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"create-a-stream-in-our-server",children:"Create a Stream in our Server"}),"\n",(0,r.jsx)(n.p,{children:"After you subscribe the user to a notifications server, share it with us so we can start sending you notifications!"}),"\n",(0,r.jsxs)(n.p,{children:["For this, make a ",(0,r.jsx)(n.code,{children:"post"})," request to our server, add which account you want to be notified for, and a URL identifying your gateway."]}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.Ey,{fname:"main.js",language:"js",value:"Stream",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/main.js",start:"52",end:"64"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"gateway"})," parameter is there just to help us keep track of who receives notifications."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"handle-notifications",children:"Handle Notifications"}),"\n",(0,r.jsxs)(n.p,{children:["When the user receives a notification, the ",(0,r.jsx)(n.code,{children:"service worker"})," will be triggered, and you can add logic to display the notification."]}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.Ey,{fname:"sw.js",language:"js",value:"Notifications",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/sw.js",start:"20",end:"37"})}),"\n",(0,r.jsx)(n.p,{children:"Feel free to personalize the notification as you wish, and to add logic on what to do once the notification is clicked. In our example, we just open the Post page."}),"\n",(0,r.jsx)(i.O2,{children:(0,r.jsx)(i.Ey,{fname:"sw.js",language:"js",value:"Notifications",url:"https://github.com/near-examples/BOS-notifications/blob/main/app/scripts/sw.js",start:"39",end:"51"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),i=t(12466),s=t(16550),o=t(20469),l=t(91980),u=t(67392),c=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function m(e){var n,t,a,i,s=e.defaultValue,l=e.queryString,u=void 0!==l&&l,d=e.groupId,m=h(e),v=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),b=v[0],g=v[1],j=f({queryString:u,groupId:d}),x=j[0],y=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,c.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),k=w[0],S=w[1],N=function(){var e=null!=x?x:k;return p({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){N&&g(N)}),[N]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),S(e)}),[y,S,m]),tabValues:m}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function j(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],u=(0,i.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(u(n),s(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;t=null!=(i=l[s])?i:l[l.length-1]}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:c},i,{className:(0,a.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function x(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(j,Object.assign({},e,n)),(0,g.jsx)(x,Object.assign({},e,n))]})}function w(e){var n=(0,v.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},77229:(e,n,t)=>{t.d(n,{Ey:()=>c,O2:()=>l,SQ:()=>u});t(67294);var r=t(74866),a=t(85162),i=t(95665),s=t.n(i),o=t(85893);function l(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,o.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,o.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function u(e){var n=e.children,t=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var t=e.props,r=(t.children,t.url),a=t.start,i=t.end,s=t.fname;if(e.type===c)return c({url:r,start:a,end:i,language:n,fname:s});return e}(e,t)})),1==n.length?(0,o.jsx)(a.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,o.jsx)(r.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,o.jsx)(a.Z,{value:n,label:e.props.fname,children:e})}))})}function c(e){var n=e.url,t=e.start,r=e.end,a=e.language,i=e.fname,l=n+"#";return t&&r&&(l+="L"+t+"-L"+r+"#"),(0,o.jsx)(s(),{language:a,fname:i,children:l})}}}]);