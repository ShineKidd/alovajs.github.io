"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4043],{66827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=t(85893),s=t(11151);const l={title:"method\u8be6\u89e3"},r=void 0,d={id:"tutorial/getting-started/basic/method",title:"method\u8be6\u89e3",description:"\u5728\u4e0a\u4e00\u4e2a\u7ae0\u8282\u4e2d\u6211\u4eec\u5c1d\u8bd5\u53d1\u9001\u4e86\u8bf7\u6c42\uff0c\u83b7\u53d6\u54cd\u5e94\u6570\u636e\u3002\u5b9e\u9645\u4e0a\uff0calovaInstance.Get(...)\u5e76\u4e0d\u662f\u4e00\u4e2a\u53d1\u8d77\u8bf7\u6c42\u7684\u51fd\u6570\uff0c\u800c\u662f\u521b\u5efa\u4e86\u4e00\u4e2a method \u5b9e\u4f8b\uff0c\u5b83\u662f\u4e00\u4e2a PromiseLike \u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7then\u3001catch\u3001finally\u65b9\u6cd5\u6216await\u53d1\u9001\u8bf7\u6c42\uff0c\u5c31\u50cf Promise \u5bf9\u8c61\u4e00\u6837\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/02-getting-started/03-basic/03-method.md",sourceDirName:"tutorial/02-getting-started/03-basic",slug:"/tutorial/getting-started/basic/method",permalink:"/zh-CN/next/tutorial/getting-started/basic/method",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-getting-started/03-basic/03-method.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"method\u8be6\u89e3"},sidebar:"tutorial",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-CN/next/tutorial/getting-started/quick-start"},next:{title:"alova\u8be6\u89e3",permalink:"/zh-CN/next/tutorial/getting-started/basic/alova"}},i={},c=[{value:"\u8bf7\u6c42\u7c7b\u578b",id:"\u8bf7\u6c42\u7c7b\u578b",level:2},{value:"\u8bf7\u6c42\u53c2\u6570",id:"\u8bf7\u6c42\u53c2\u6570",level:2},{value:"URL \u53c2\u6570",id:"url-\u53c2\u6570",level:3},{value:"\u8bf7\u6c42\u4f53",id:"\u8bf7\u6c42\u4f53",level:3},{value:"\u8bf7\u6c42\u5934",id:"\u8bf7\u6c42\u5934",level:3},{value:"\u5176\u4ed6\u8bf7\u6c42\u9002\u914d\u5668\u652f\u6301\u7684\u53c2\u6570",id:"\u5176\u4ed6\u8bf7\u6c42\u9002\u914d\u5668\u652f\u6301\u7684\u53c2\u6570",level:3},{value:"\u8bf7\u6c42\u884c\u4e3a",id:"\u8bf7\u6c42\u884c\u4e3a",level:2},{value:"\u8d85\u65f6\u65f6\u95f4",id:"\u8d85\u65f6\u65f6\u95f4",level:3},{value:"\u8bf7\u6c42\u5171\u4eab",id:"\u8bf7\u6c42\u5171\u4eab",level:3},{value:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",id:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",level:3},{value:"\u54cd\u5e94\u7f13\u5b58",id:"\u54cd\u5e94\u7f13\u5b58",level:3},{value:"\u4e2d\u65ad\u8bf7\u6c42",id:"\u4e2d\u65ad\u8bf7\u6c42",level:2},{value:"\u76d1\u542c\u4e0a\u4f20\u4e0b\u8f7d\u8fdb\u5ea6",id:"\u76d1\u542c\u4e0a\u4f20\u4e0b\u8f7d\u8fdb\u5ea6",level:2}];function o(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\u5728\u4e0a\u4e00\u4e2a\u7ae0\u8282\u4e2d\u6211\u4eec\u5c1d\u8bd5\u53d1\u9001\u4e86\u8bf7\u6c42\uff0c\u83b7\u53d6\u54cd\u5e94\u6570\u636e\u3002\u5b9e\u9645\u4e0a\uff0c",(0,a.jsx)(n.code,{children:"alovaInstance.Get(...)"}),"\u5e76\u4e0d\u662f\u4e00\u4e2a\u53d1\u8d77\u8bf7\u6c42\u7684\u51fd\u6570\uff0c\u800c\u662f\u521b\u5efa\u4e86\u4e00\u4e2a method \u5b9e\u4f8b\uff0c\u5b83\u662f\u4e00\u4e2a PromiseLike \u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,a.jsx)(n.code,{children:"then\u3001catch\u3001finally"}),"\u65b9\u6cd5\u6216",(0,a.jsx)(n.code,{children:"await"}),"\u53d1\u9001\u8bf7\u6c42\uff0c\u5c31\u50cf Promise \u5bf9\u8c61\u4e00\u6837\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const userMethodInstance = alovaInstance.Get('/api/user');\n\nuserMethodInstance.then(response => {\n  // ...\n});\n\nuserMethodInstance.catch(error => {\n  // ...\n});\n\nuserMethodInstance.finally(() => {\n  // ...\n});\n\ntry {\n  await userMethodInstance;\n} catch (error) {\n  // ...\n} finally {\n  // ...\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u7b80\u4fbf\u5199\u6cd5\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const response = await alovaInstance.Get('/api/user');\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u6bcf\u4e2a method \u5b9e\u4f8b\u63cf\u8ff0\u4e86\u6bcf\u4e2a\u8bf7\u6c42\u7684\u7c7b\u578b\u3001\u8bf7\u6c42 url\u3001\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u53c2\u6570\u7b49\u3002\u6b64\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728 method \u5b9e\u4f8b\u4e0a\u5b9a\u4e49\u8bf7\u6c42\u884c\u4e3a\uff0c\u6765\u63a7\u5236 method \u4ee5\u4ec0\u4e48\u65b9\u5f0f\u5904\u7406\u8bf7\u6c42\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8bf7\u6c42\u7c7b\u578b",children:"\u8bf7\u6c42\u7c7b\u578b"}),"\n",(0,a.jsx)(n.p,{children:"alova \u5171\u63d0\u4f9b\u4e86 GET\u3001POST\u3001PUT\u3001DELETE\u3001HEAD\u3001OPTIONS\u3001PATCH 7 \u79cd\u8bf7\u6c42\u7c7b\u578b\u3002"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570"}),(0,a.jsx)(n.th,{children:"\u53c2\u6570"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"GET"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"alovaInstance.Get(url[, config])"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"POST"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"alovaInstance.Post(url[, data[, config]])"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"PUT"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"alovaInstance.Put(url[, data[, config]])"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"DELETE"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"alovaInstance.Delete(url[, data[, config]])"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"HEAD"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"alovaInstance.Head(url[, config])"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"OPTIONS"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"alovaInstance.Options(url[, config])"})})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"PATCH"}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"alovaInstance.Patch(url[, data[, config]])"})})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"url"}),"\u662f\u8bf7\u6c42\u8def\u5f84\uff1b"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"data"}),"\u4e3a\u8bf7\u6c42\u4f53\u6570\u636e\uff1b"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"config"}),"\u4e3a\u8bf7\u6c42\u914d\u7f6e\u5bf9\u8c61\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u8bf7\u6c42\u5934\u3001params \u53c2\u6570\u7b49\u3001\u8bf7\u6c42\u884c\u4e3a\u53c2\u6570\u7b49\u914d\u7f6e\uff1b"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u4f60\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u521b\u5efa method \u5b9e\u4f8b\uff0c\u8fd9\u5728\u52a8\u6001\u6307\u5b9a\u8bf7\u6c42\u7c7b\u578b\u65f6\u5f88\u6709\u7528\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import { Method } from 'alova';\n\nconst method = new Method('GET', alovaInstance, '/api/users', {\n  params: {\n    ID: 1\n  }\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\u6211\u4eec\u5148\u6765\u770b\u4e0b\u5982\u4f55\u5b9a\u4e49\u8bf7\u6c42\u53c2\u6570\uff0c\u4f60\u5e94\u8be5\u4f1a\u89c9\u5f97\u5f88\u719f\u6089\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8bf7\u6c42\u53c2\u6570",children:"\u8bf7\u6c42\u53c2\u6570"}),"\n",(0,a.jsx)(n.h3,{id:"url-\u53c2\u6570",children:"URL \u53c2\u6570"}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7 params \u4f20\u5165 URL \u53c2\u6570\uff0cparams \u53c2\u6570\u4f1a\u5728 url \u540e\u9762\u4ee5?\u7684\u5f62\u5f0f\u62fc\u63a5\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"alovaInstance.Get('/todo/list', {\n  params: {\n    userId: 1\n  }\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u4f60\u4e5f\u53ef\u4ee5\u76f4\u63a5\u62fc\u63a5\u5728 url \u540e\u9762\uff0c\u6548\u679c\u662f\u76f8\u540c\u7684\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"alovaInstance.Get('/todo/list?userId=1');\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u8bf7\u6c42\u4f53",children:"\u8bf7\u6c42\u4f53"}),"\n",(0,a.jsxs)(n.p,{children:["\u5f53\u53d1\u9001 ",(0,a.jsx)(n.strong,{children:"POST\u3001PUT\u3001DELETE\u3001PATCH \u8bf7\u6c42"})," \u65f6\u53ef\u4ee5\u901a\u8fc7\u8bf7\u6c42\u4f53\u53d1\u9001\u6570\u636e\uff0c\u6b64\u65f6\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u5165\u7684\u662f\u8bf7\u6c42\u4f53\uff0c\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0cPOST \u8bf7\u6c42\u4e5f\u53ef\u4ee5\u4f20\u5165 params \u53c2\u6570\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"alovaInstance.Post(\n  '/todo',\n  // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u8bf7\u6c42\u4f53\n  {\n    title: 'test todo',\n    time: '12:00'\n  },\n  // \u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u914d\u7f6e\n  {\n    params: {\n      userId: 1\n    }\n  }\n);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u8bf7\u6c42\u5934",children:"\u8bf7\u6c42\u5934"}),"\n",(0,a.jsx)(n.p,{children:"\u901a\u8fc7 headers \u6307\u5b9a\u8bf7\u6c42\u5934\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"alovaInstance.Get('/user', {\n  headers: {\n    'Content-Type': 'application/json;charset=UTF-8'\n  }\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u5176\u4ed6\u8bf7\u6c42\u9002\u914d\u5668\u652f\u6301\u7684\u53c2\u6570",children:"\u5176\u4ed6\u8bf7\u6c42\u9002\u914d\u5668\u652f\u6301\u7684\u53c2\u6570"}),"\n",(0,a.jsxs)(n.p,{children:["\u9664\u4e86\u8bf7\u6c42\u5934\u3001params \u53c2\u6570\u7b49\u5916\uff0c\u8fd8\u652f\u6301\u914d\u7f6e\u5bf9\u5e94\u8bf7\u6c42\u9002\u914d\u5668\u652f\u6301\u7684\u53c2\u6570\uff0c\u5f53\u4f7f\u7528",(0,a.jsx)(n.code,{children:"alova/fetch"}),"\u4f5c\u4e3a alova \u7684\u8bf7\u6c42\u9002\u914d\u5668\u65f6\uff0c\u5c31\u53ef\u4ee5\u5728 method \u5b9e\u4f8b\u4e0a\u914d\u7f6e\u4efb\u4f55",(0,a.jsx)(n.code,{children:"fetch API"}),"\u652f\u6301\u7684\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u4f1a\u5728\u8bf7\u6c42\u65f6\u4f20\u7ed9",(0,a.jsx)(n.code,{children:"fetch"}),"\u51fd\u6570\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"alovaInstance.Get('/todo/list', {\n  // ...\n  // highlight-start\n  credentials: 'same-origin',\n  referrerPolicy: 'no-referrer',\n  mode: 'cors'\n  // highlight-end\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u4ee5\u4e0a method \u5b9e\u4f8b\u5728\u901a\u8fc7",(0,a.jsx)(n.code,{children:"fetch"}),"\u53d1\u9001\u8bf7\u6c42\u65f6\uff0c\u5c06\u4f1a\u4ee5\u4ee5\u4e0b\u53c2\u6570\u8bf7\u6c42\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"fetch('/todo/list', {\n  // ...\n  // highlight-start\n  credentials: 'same-origin',\n  referrerPolicy: 'no-referrer',\n  mode: 'cors'\n  // highlight-end\n});\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["\u8bf7\u6c42\u4f53\u9664\u4e86\u53ef\u4ee5\u4f20\u9012 Object\uff0c\u8fd8\u80fd\u4f20\u9012\u8bf7\u6c42\u9002\u914d\u5668\u652f\u6301\u7684\u8bf7\u6c42\u4f53\u53c2\u6570\uff0c\u4f8b\u5982 ",(0,a.jsx)(n.code,{children:"alova/fetch"})," \u652f\u6301\u4f20\u9012",(0,a.jsx)(n.code,{children:"string | FormData | Blob | ArrayBuffer | URLSearchParams | ReadableStream"}),"\u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679c\u4f60\u4f7f\u7528\u4e86\u5176\u4ed6\u7684\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u4e5f\u53ef\u4ee5\u4f20\u9012\u5b83\u4eec\u652f\u6301\u7684\u53c2\u6570\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u8bf7\u6c42\u884c\u4e3a",children:"\u8bf7\u6c42\u884c\u4e3a"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728",(0,a.jsx)(n.a,{href:"/about/RSM",children:"RSM"}),"\u4e2d\uff0c\u8bf7\u6c42\u884c\u4e3a\u7528\u4e8e\u63cf\u8ff0\u5c06\u4ee5\u600e\u6837\u7684\u65b9\u5f0f\u5904\u7406\u8bf7\u6c42\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"\u8d85\u65f6\u65f6\u95f4",children:"\u8d85\u65f6\u65f6\u95f4"}),"\n",(0,a.jsx)(n.p,{children:"\u8bbe\u7f6e\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// \u8bf7\u6c42\u7ea7\u522b\u7684\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\nalovaInstance.Get('/todo/list', {\n  // ...\n  // highlight-start\n  timeout: 10000\n  // highlight-end\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u8bf7\u6c42\u5171\u4eab",children:"\u8bf7\u6c42\u5171\u4eab"}),"\n",(0,a.jsx)(n.p,{children:"\u6211\u4eec\u603b\u4f1a\u9047\u5230\u8fd9\u79cd\u60c5\u51b5\uff0c\u5f53\u4e00\u4e2a\u8bf7\u6c42\u53d1\u51fa\u4f46\u8fd8\u672a\u54cd\u5e94\u65f6\uff0c\u53c8\u53d1\u8d77\u4e86\u76f8\u540c\u8bf7\u6c42\uff0c\u5c31\u9020\u6210\u4e86\u8bf7\u6c42\u6d6a\u8d39\uff0c\u6216\u8005\u91cd\u590d\u63d0\u4ea4\u95ee\u9898\uff0c\u4f8b\u5982\u4ee5\u4e0b\u4e09\u79cd\u573a\u666f\uff1a"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u4e00\u4e2a\u7ec4\u4ef6\u5728\u521b\u5efa\u65f6\u4f1a\u83b7\u53d6\u521d\u59cb\u5316\u6570\u636e\uff0c\u5f53\u4e00\u4e2a\u9875\u9762\u540c\u65f6\u6e32\u67d3\u591a\u4e2a\u6b64\u7ec4\u4ef6\u65f6\uff0c\u5c06\u4f1a\u540c\u65f6\u53d1\u51fa\u591a\u6b21\u76f8\u540c\u8bf7\u6c42\uff1b"}),"\n",(0,a.jsx)(n.li,{children:"\u63d0\u4ea4\u6309\u94ae\u672a\u88ab\u7981\u7528\uff0c\u7528\u6237\u70b9\u51fb\u4e86\u591a\u6b21\u63d0\u4ea4\u6309\u94ae\uff1b"}),"\n",(0,a.jsx)(n.li,{children:"\u5f53\u9884\u52a0\u8f7d\u8fd8\u672a\u5b8c\u6210\u65f6\u8fdb\u5165\u4e86\u9884\u52a0\u8f7d\u9875\u9762\uff0c\u5c06\u4f1a\u53d1\u8d77\u591a\u6b21\u76f8\u540c\u8bf7\u6c42\uff1b"}),"\n",(0,a.jsx)(n.li,{children:"\u5728 react \u7684 StrictMode \u4e0b\u9632\u6b62\u91cd\u590d\u53d1\u9001\u8bf7\u6c42\uff1b"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u5171\u4eab\u8bf7\u6c42\u5c31\u662f\u7528\u6765\u89e3\u51b3\u8fd9\u4e9b\u95ee\u9898\u7684\uff0c\u5b83\u4e0d\u4ec5\u53ef\u4ee5\u63d0\u5347\u5e94\u7528\u6d41\u7545\u6027\uff0c\u8fd8\u80fd\u964d\u4f4e\u670d\u52a1\u7aef\u538b\u529b\u3002"}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart LR\n  classDef response fill:#a8bcff\n  R1[\u8bf7\u6c421] --\x3e S1[\u53d1\u9001\u8bf7\u6c42] --\x3e W1[\u7b49\u5f85\u54cd\u5e94]:::response --\x3e RE1[\u63a5\u6536\u6570\u636e1]\n  R2[\u4e0e\u8bf7\u6c421\u76f8\u540c\u7684\u8bf7\u6c42] --\x3e W1[\u7b49\u5f85\u54cd\u5e94]:::response --\x3e RE2[\u63a5\u6536\u6570\u636e1]"}),"\n",(0,a.jsx)(n.p,{children:"\u8bf7\u6c42\u5171\u4eab\u9ed8\u8ba4\u5f00\u542f\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u5728\u7279\u5b9a\u8bf7\u6c42\u4e0a\u5173\u95ed\u5171\u4eab\u8bf7\u6c42\uff0c\u53ef\u4ee5\u8fd9\u6837\u505a\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"alovaInst.Get('/todo', {\n  // ...\n  // highlight-start\n  shareRequest: false\n  // highlight-end\n});\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"\u5982\u4f55\u8bc6\u522b\u76f8\u540c\u8bf7\u6c42",type:"warning",children:(0,a.jsx)(n.p,{children:"\u901a\u8fc7 method \u5b9e\u4f8b\u7684\u8bf7\u6c42\u65b9\u6cd5\u3001\u8bf7\u6c42 url\u3001\u8bf7\u6c42\u5934\u3001url \u53c2\u6570\u3001\u8bf7\u6c42\u4f53\u7ec4\u5408\u4f5c\u4e3a\u552f\u4e00\u6807\u8bc6\uff0c\u6807\u8bc6\u76f8\u540c\u5373\u8868\u793a\u4e3a\u76f8\u540c\u8bf7\u6c42\uff0c\u800c\u4e0d\u662f\u5bf9\u6bd4 method \u5b9e\u4f8b\u7684\u5f15\u7528\u5730\u5740\u3002"})}),"\n",(0,a.jsx)(n.h3,{id:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",children:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e"}),"\n",(0,a.jsxs)(n.p,{children:["\u6709\u65f6\u5019\u6211\u4eec\u9700\u8981\u7edf\u4e00\u8f6c\u6362\u54cd\u5e94\u6570\u636e\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a method \u5b9e\u4f8b\u8bbe\u7f6e",(0,a.jsx)(n.code,{children:"transform"}),"\u51fd\u6570\u5c06\u54cd\u5e94\u6570\u636e\u8f6c\u6362\u6210\u9700\u8981\u7684\u7ed3\u6784\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"alovaInstance.Get('/todo/list', {\n  // \u51fd\u6570\u63a5\u53d7\u54cd\u5e94\u6570\u636e\u548c\u54cd\u5e94\u5934\u6570\u636e\uff0c\u5e76\u8981\u6c42\u5c06\u8f6c\u6362\u540e\u7684\u6570\u636e\u8fd4\u56de\u3002\n  transform(rawData, headers) {\n    return rawData.list.map(item => {\n      return {\n        ...item,\n        statusText: item.done ? '\u5df2\u5b8c\u6210' : '\u8fdb\u884c\u4e2d'\n      };\n    });\n  }\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"\u54cd\u5e94\u7f13\u5b58",children:"\u54cd\u5e94\u7f13\u5b58"}),"\n",(0,a.jsx)(n.p,{children:"\u54cd\u5e94\u7f13\u5b58\u8ba9\u4f60\u53ef\u4ee5\u66f4\u597d\u5730\u591a\u6b21\u5229\u7528\u670d\u52a1\u7aef\u6570\u636e\uff0c\u800c\u4e0d\u9700\u8981\u6bcf\u6b21\u8bf7\u6c42\u65f6\u90fd\u53d1\u9001\u8bf7\u6c42\u83b7\u53d6\u6570\u636e\u3002GET \u8bf7\u6c42\u5c06\u9ed8\u8ba4\u8bbe\u7f6e 5 \u5206\u949f\u7684\u5185\u5b58\u7f13\u5b58\u65f6\u95f4\uff0c\u5982\u679c\u4f60\u4e0d\u9700\u8981\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u5173\u95ed\u5f53\u524d\u8bf7\u6c42\u7684\u7f13\u5b58\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"alovaInstance.Get('/todo/list', {\n  // \u8bbe\u7f6e\u4e3a0\u6216\u8005null\u5173\u95ed\u9ed8\u8ba4\u7684\u54cd\u5e94\u7f13\u5b58\n  cacheFor: 0\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u8be6\u7ec6\u5185\u5bb9\u53ef\u53c2\u8003",(0,a.jsx)(n.a,{href:"/next/tutorial/cache/mode",children:"\u54cd\u5e94\u7f13\u5b58"})]}),"\n",(0,a.jsx)(n.h2,{id:"\u4e2d\u65ad\u8bf7\u6c42",children:"\u4e2d\u65ad\u8bf7\u6c42"}),"\n",(0,a.jsxs)(n.p,{children:["\u8c03\u7528 method \u5b9e\u4f8b\u7684",(0,a.jsx)(n.code,{children:"abort"}),"\u4e2d\u65ad\u8bf7\u6c42\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const userMethod = alovaInstance.Get('/api/user');\nuserMethod.then(res => {\n  // ...\n});\n\nconst handleCancel = () => {\n  // highlight-start\n  userMethod.abort();\n  // highlight-end\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u76d1\u542c\u4e0a\u4f20\u4e0b\u8f7d\u8fdb\u5ea6",children:"\u76d1\u542c\u4e0a\u4f20\u4e0b\u8f7d\u8fdb\u5ea6"}),"\n",(0,a.jsxs)(n.p,{children:["\u901a\u8fc7 method \u5b9e\u4f8b\u7684",(0,a.jsx)(n.code,{children:"onUpload"}),"\u7ed1\u5b9a\u4e0a\u4f20\u8fdb\u5ea6\u4e8b\u4ef6\uff0c",(0,a.jsx)(n.code,{children:"onDownload"}),"\u7ed1\u5b9a\u4e0b\u8f7d\u8fdb\u5ea6\u4e8b\u4ef6\uff0c\u5b83\u5c06\u8fd4\u56de\u89e3\u7ed1\u51fd\u6570\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const uploadMethod = alovaInstance.Post('/todo/uploadfile', formData);\nconst offUploadEvent = uploadMethod.onUpload(event => {\n  console.log('\u6587\u4ef6\u5927\u5c0f\uff1a'\uff0cevent.total);\n  console.log('\u5df2\u4e0a\u4f20\uff1a'\uff0cevent.loaded);\n});\n\nuploadMethod.then(res => {\n  // ...\n});\n\n// \u89e3\u7ed1\u4e0a\u4f20\u56de\u8c03\nconst handleOffEvent = () => {\n  offUploadEvent();\n};\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const downloadMethod = alovaInstance.Get('/todo/downloadfile');\nconst offDownloadEvent = downloadMethod.onDownload(event => {\n  console.log('\u6587\u4ef6\u5927\u5c0f\uff1a'\uff0cevent.total);\n  console.log('\u5df2\u4e0b\u8f7d\uff1a'\uff0cevent.loaded);\n});\n\ndownloadMethod.then(res => {\n  // ...\n});\n\n// \u89e3\u7ed1\u4e0b\u8f7d\u56de\u8c03\nconst handleOffEvent = () => {\n  offDownloadEvent();\n};\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["\u4f7f\u7528",(0,a.jsx)(n.code,{children:"alova/fetch"}),"\u9002\u914d\u5668\u9700\u6ce8\u610f"]}),(0,a.jsxs)(n.p,{children:["\u56e0 fetch api \u9650\u5236\uff0calova \u63d0\u4f9b\u7684 ",(0,a.jsx)(n.code,{children:"alova/fetch"})," \u9002\u914d\u5668\u4e0d\u652f\u6301\u4e0a\u4f20\u8fdb\u5ea6\uff0c\u5982\u679c\u9700\u8981\u4e0a\u4f20\u8fdb\u5ea6\uff0c\u8bf7\u4f7f\u7528",(0,a.jsx)(n.a,{href:"/next/resource/request-adapter/alova-adapter-xhr",children:"XMLHttpRequest \u9002\u914d\u5668"}),"\u6216",(0,a.jsx)(n.a,{href:"/next/resource/request-adapter/alova-adapter-axios",children:"axios \u9002\u914d\u5668"}),"\u3002"]}),(0,a.jsxs)(n.p,{children:["\u4e5f\u53ef\u4ee5\u81ea\u884c\u7f16\u5199\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u8be6\u89c1 ",(0,a.jsx)(n.a,{href:"/next/tutorial/advanced/custom/http-adapter",children:"\u7f16\u5199\u8bf7\u6c42\u9002\u914d\u5668"}),"\u3002"]})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"\u4e0a\u4f20/\u4e0b\u8f7d\u72b6\u6001\u7c7b\u578b"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"type Progress = {\n  /** \u4e0a\u4f20\u6216\u4e0b\u8f7d\u7684\u6570\u636e\u603b\u6570\u636e\u91cf */\n  total: number;\n  /** \u5df2\u5b8c\u6210\u7684\u6570\u636e */\n  loaded: number;\n};\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var a=t(67294);const s={},l=a.createContext(s);function r(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);