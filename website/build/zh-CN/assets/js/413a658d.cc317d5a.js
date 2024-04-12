"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6307],{75580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(85893),a=t(11151);const i={sidebar_label:"Credentials"},s="Credentials",l={id:"build/data-infrastructure/lake-framework/running-near-lake/credentials",title:"Credentials",description:"Please, keep in mind, currently using the AWS Credentials is the only way to access the data provided by NEAR Lake ecosystem. But it is about to change with Pagoda DevConsole release. Stay tuned!",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.build/6.data-infrastructure/lake-framework/running-near-lake/credentials.md",sourceDirName:"2.build/6.data-infrastructure/lake-framework/running-near-lake",slug:"/build/data-infrastructure/lake-framework/running-near-lake/credentials",permalink:"/zh-CN/build/data-infrastructure/lake-framework/running-near-lake/credentials",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/6.data-infrastructure/lake-framework/running-near-lake/credentials.md",tags:[],version:"current",frontMatter:{sidebar_label:"Credentials"},sidebar:"build",previous:{title:"Start options",permalink:"/zh-CN/build/data-infrastructure/lake-framework/running-near-lake/lake-start-options"},next:{title:"Table of contents",permalink:"/zh-CN/build/data-infrastructure/lake-data-structures/toc"}},o={},d=[{value:"AWS S3 Credentials",id:"aws-s3-credentials",level:3},{value:"Environment varibales",id:"environment-varibales",level:4}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"credentials",children:"Credentials"}),"\n",(0,r.jsx)(n.admonition,{title:"DevConsole",type:"info",children:(0,r.jsxs)(n.p,{children:["Please, keep in mind, currently using the AWS Credentials is the only way to access the data provided by ",(0,r.jsx)(n.a,{href:"/tools/realtime#near-lake-indexer",children:"NEAR Lake"})," ecosystem. But it is about to change with Pagoda DevConsole release. Stay tuned!"]})}),"\n",(0,r.jsxs)(n.p,{children:["To access the data provided by ",(0,r.jsx)(n.a,{href:"/tools/realtime#near-lake-indexer",children:"NEAR Lake"})," you need to provide valid AWS credentials in order to be charged by the AWS for the S3 usage."]}),"\n",(0,r.jsx)(n.h3,{id:"aws-s3-credentials",children:"AWS S3 Credentials"}),"\n",(0,r.jsx)(n.p,{children:"To be able to get objects from the AWS S3 bucket you need to provide the AWS credentials."}),"\n",(0,r.jsx)(n.p,{children:"AWS default profile configuration with aws configure looks similar to the following:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"~/.aws/credentials\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[default]\naws_access_key_id=AKIAIOSFODNN7EXAMPLE\naws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html",children:"AWS docs: Configuration and credential file settings"})}),"\n",(0,r.jsx)(n.h4,{id:"environment-varibales",children:"Environment varibales"}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you can provide your AWS credentials via environment variables with constant names:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"$ export AWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE\n$ AWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n$ AWS_DEFAULT_REGION=eu-central-1\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(67294);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);