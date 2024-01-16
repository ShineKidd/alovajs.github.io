"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8124],{4532:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(5893),n=r(1151);const o={title:"\u5728\u670d\u52a1\u7aef\u4f7f\u7528",sidebar_position:180},s=void 0,i={id:"tutorial/getting-started/server",title:"\u5728\u670d\u52a1\u7aef\u4f7f\u7528",description:"v2.17.0+",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/02-getting-started/18-server.md",sourceDirName:"tutorial/02-getting-started",slug:"/tutorial/getting-started/server",permalink:"/zh-CN/tutorial/getting-started/server",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-getting-started/18-server.md",tags:[],version:"current",sidebarPosition:180,frontMatter:{title:"\u5728\u670d\u52a1\u7aef\u4f7f\u7528",sidebar_position:180},sidebar:"tutorialSidebar",previous:{title:"Typescript",permalink:"/zh-CN/tutorial/getting-started/typescript"},next:{title:"Response Cache",permalink:"/zh-CN/category/response-cache"}},c={},l=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{title:"\u7248\u672c\u8981\u6c42",type:"info",children:(0,a.jsx)(t.p,{children:"v2.17.0+"})}),"\n",(0,a.jsxs)(t.p,{children:["alova \u652f\u6301 commonjs \u89c4\u8303\uff0c\u5728\u670d\u52a1\u7aef\u4f7f\u7528 alova \u65f6\uff0c\u4e0d\u518d\u9700\u8981\u4f7f\u7528 useHooks\uff0c\u56e0\u6b64\u4e5f\u4e0d\u518d\u9700\u8981\u8bbe\u7f6e",(0,a.jsx)(t.code,{children:"statesHook"}),"\u3002"]}),"\n",(0,a.jsx)(t.p,{children:"\u4e00\u4e2a\u7b80\u5355\u7684\u4f7f\u7528\u793a\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const { createAlova } = require('alova');\r\nconst GlobalFetch = require('alova/GlobalFetch');\r\n\r\nconst alova = createAlova({\r\n  requestAdapter: GlobalFetch();\r\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["\u5728 nodejs \u4e2d\u4f7f\u7528 GlobalFetch \u65f6\uff0cnodejs \u7248\u672c\u8981\u6c42",(0,a.jsx)(t.code,{children:"v17.5"}),"\uff0c\u6216\u8005\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.jsx)(t.a,{href:"/tutorial/request-adapter/alova-adapter-axios/",children:"axios \u8bf7\u6c42\u9002\u914d\u5668"}),"\u3002"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const { createAlova } = require('alova');\r\nconst { axiosRequestAdapter } = require('@alova/adapter-axios');\r\n\r\nconst alova = createAlova({\r\n  requestAdapter: axiosRequestAdapter();\r\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>s});var a=r(7294);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);