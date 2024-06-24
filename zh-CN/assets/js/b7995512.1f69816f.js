"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7218],{94272:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>a,frontMatter:()=>r,metadata:()=>h,toc:()=>t});var s=l(85893),d=l(11151);const r={title:"method\u5b9e\u4f8b"},i=void 0,h={id:"api/method",title:"method\u5b9e\u4f8b",description:"\u4e00\u4e2a method \u5b9e\u4f8b\u5bf9\u5e94\u4e00\u4e2a\u8bf7\u6c42\u4fe1\u606f\u63cf\u8ff0\uff0c\u5b83\u62e5\u6709\u4e00\u6b21\u8bf7\u6c42\u7684 url\u3001\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u53c2\u6570\uff0c\u4ee5\u53ca\u54cd\u5e94\u6570\u636e\u5904\u7406\u3001\u7f13\u5b58\u6570\u636e\u5904\u7406\u7b49\u8bf7\u6c42\u884c\u4e3a\u53c2\u6570\u3002\u901a\u8fc7 method \u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u610f\u7684 js \u73af\u5883\u4e0b\u611f\u53d7\u5230\u7edf\u4e00\u7684\u4f7f\u7528\u4f53\u9a8c\uff0c\u53ea\u9700\u8981\u975e\u5e38\u5c11\u7684\u6539\u52a8\u5c31\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u8d77\u6765\uff0c\u6b64\u5916\uff0cmethod \u5b9e\u4f8b\u5c06\u8bf7\u6c42\u53c2\u6570\u548c\u8bf7\u6c42\u884c\u4e3a\u53c2\u6570\u653e\u5728\u4e86\u4e00\u8d77\uff0c\u66f4\u4fbf\u4e8e api \u7684\u7ba1\u7406\uff0c\u800c\u4e0d\u662f\u5206\u6563\u5728\u591a\u4e2a\u4ee3\u7801\u6587\u4ef6\u4e2d\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/02-method.md",sourceDirName:"api",slug:"/api/method",permalink:"/zh-CN/next/api/method",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/api/02-method.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"method\u5b9e\u4f8b"},sidebar:"api",previous:{title:"alova\u5b9e\u4f8b",permalink:"/zh-CN/next/api/alova"},next:{title:"\u6838\u5fc3useHooks",permalink:"/zh-CN/next/api/core-hooks"}},o={},t=[{value:"PromiseLike \u7279\u6027",id:"promiselike-\u7279\u6027",level:2},{value:"new Method()",id:"new-method",level:2},{value:"getMethodKey()",id:"getmethodkey",level:2},{value:"matchSnapshotMethod()",id:"matchsnapshotmethod",level:2},{value:"method.headers",id:"methodheaders",level:2},{value:"method.baseURL",id:"methodbaseurl",level:2},{value:"method.url",id:"methodurl",level:2},{value:"method.type",id:"methodtype",level:2},{value:"method.data",id:"methoddata",level:2},{value:"method.context",id:"methodcontext",level:2},{value:"method.hitSource",id:"methodhitsource",level:2},{value:"method.meta",id:"methodmeta",level:2},{value:"method.config",id:"methodconfig",level:2},{value:"method.fromCache",id:"methodfromcache",level:2},{value:"method.send()",id:"methodsend",level:2},{value:"method.abort()",id:"methodabort",level:2},{value:"method.then()",id:"methodthen",level:2},{value:"method.catch()",id:"methodcatch",level:2},{value:"method.finally()",id:"methodfinally",level:2},{value:"method.onDownload()",id:"methodondownload",level:2},{value:"method.onUpload()",id:"methodonupload",level:2},{value:"method.setName()",id:"methodsetname",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u4e00\u4e2a method \u5b9e\u4f8b\u5bf9\u5e94\u4e00\u4e2a\u8bf7\u6c42\u4fe1\u606f\u63cf\u8ff0\uff0c\u5b83\u62e5\u6709\u4e00\u6b21\u8bf7\u6c42\u7684 url\u3001\u8bf7\u6c42\u5934\u3001\u8bf7\u6c42\u53c2\u6570\uff0c\u4ee5\u53ca\u54cd\u5e94\u6570\u636e\u5904\u7406\u3001\u7f13\u5b58\u6570\u636e\u5904\u7406\u7b49\u8bf7\u6c42\u884c\u4e3a\u53c2\u6570\u3002\u901a\u8fc7 method \u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u5728\u4efb\u610f\u7684 js \u73af\u5883\u4e0b\u611f\u53d7\u5230\u7edf\u4e00\u7684\u4f7f\u7528\u4f53\u9a8c\uff0c\u53ea\u9700\u8981\u975e\u5e38\u5c11\u7684\u6539\u52a8\u5c31\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c\u8d77\u6765\uff0c\u6b64\u5916\uff0cmethod \u5b9e\u4f8b\u5c06\u8bf7\u6c42\u53c2\u6570\u548c\u8bf7\u6c42\u884c\u4e3a\u53c2\u6570\u653e\u5728\u4e86\u4e00\u8d77\uff0c\u66f4\u4fbf\u4e8e api \u7684\u7ba1\u7406\uff0c\u800c\u4e0d\u662f\u5206\u6563\u5728\u591a\u4e2a\u4ee3\u7801\u6587\u4ef6\u4e2d\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"promiselike-\u7279\u6027",children:"PromiseLike \u7279\u6027"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.code,{children:"[v2.16.0]"}),"\u4e4b\u540e\uff0cmethod \u5b9e\u4f8b\u662f\u4e00\u4e2a PromiseLike \u5b9e\u4f8b\uff0c\u5b83\u62e5\u6709",(0,s.jsx)(n.code,{children:"then/catch/finally"}),"\u51fd\u6570\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u6309\u5982\u4e0b\u65b9\u5f0f\u4f7f\u7528\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// \u8c03\u7528method\u7684then\u51fd\u6570\nmethod.then(res => {\n  console.log(res);\n});\n\n// \u6355\u83b7\u5f02\u5e38\nmethod.catch(e => {\n  console.log(e);\n});\n\n// \u8bf7\u6c42\u5b8c\u6210\u8c03\u7528\nmethod.finally(() => {\n  console.log('\u8bf7\u6c42\u5b8c\u6210');\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u6b64\u5916\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,s.jsx)(n.code,{children:"await method"}),"\u6765\u53d1\u9001\u8bf7\u6c42\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"new-method",children:"new Method()"}),"\n",(0,s.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49\u521b\u5efa method \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface MethodConstructor {\n  new (\n    type: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH',\n    context: Alova,\n    url: string,\n    config?: AlovaMethodCreateConfig,\n    data?: Arg | string | FormData | Blob | ArrayBuffer | URLSearchParams | ReadableStream\n  ): Method;\n  readonly prototype: Method;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"type"}),"\uff1a\u8bf7\u6c42\u7c7b\u578b"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"context"}),"\uff1aalova \u5b9e\u4f8b"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"url"}),"\uff1a\u8bf7\u6c42 url"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"config"}),"\uff1a\u914d\u7f6e\u53c2\u6570, \u7c7b\u578b\u4e0e",(0,s.jsx)(n.a,{href:"/next/api/alova#alovaget",children:"alova.Get"}),"\u7684 config \u53c2\u6570\u7c7b\u578b\u4e00\u81f4"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data"}),"\uff1a\u8bf7\u6c42\u4f53\u6570\u636e"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { Method } from 'alova';\nimport { alovaInstance } from './api';\n\nconst method = new Method('GET', alovaInstance, '/api/users', {\n  params: {\n    id: 1\n  }\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"getmethodkey",children:"getMethodKey()"}),"\n",(0,s.jsx)(n.p,{children:"\u83b7\u53d6 method \u7684 key \u503c\uff0c\u6b64 key \u503c\u4f5c\u4e3a alova \u5185\u90e8\u7f13\u5b58 key \u4f7f\u7528\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function getMethodKey(method: Method): string;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"method"}),"\uff1amethod \u5b9e\u4f8b"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4f20\u5165\u7684 method \u5b9e\u4f8b\u7684 key \u503c\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { getMethodKey } from 'alova';\n\nconst method = alova.Get('/api/users');\nconst methodKey = getMethodKey(method);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"matchsnapshotmethod",children:"matchSnapshotMethod()"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5",(0,s.jsx)(n.a,{href:"/next/tutorial/client/in-depth/method-matcher",children:"method \u5339\u914d\u5668"}),"\u7684\u5339\u914d\u65b9\u5f0f\u83b7\u53d6\u5df2\u7ecf\u8bf7\u6c42\u8fc7\u7684 method \u5b9e\u4f8b\u5feb\u7167\uff0c\u5e76\u8fd4\u56de\u5339\u914d\u7684\u7ed3\u679c\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type MethodFilter =\n  | string\n  | RegExp\n  | {\n      name?: string | RegExp;\n      filter?: MethodFilterHandler;\n      alova?: Alova;\n    };\nfunction matchSnapshotMethod(\n  matcher: MethodFilter,\n  matchAll?: boolean\n): Method[] | Method | undefined;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"matcher"}),"\uff1amethod \u5339\u914d\u5668"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"matchAll"}),"\uff1a\u662f\u5426\u5339\u914d\u5168\u90e8\uff0c\u9ed8\u8ba4\u4e3a true"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"matchAll"})," \u4e3a true \u65f6\u8fd4\u56de method \u5b9e\u4f8b\u6570\u7ec4\uff0c\u5426\u5219\u8fd4\u56de method \u5b9e\u4f8b\u6216 undefined"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { matchSnapshotMethod } from 'alova';\n\nawait alova.Get('/api/users');\nconst snapshotMethod = matchSnapshotMethod({\n  name: 'user',\n  filter(method, i, methodArray) {\n    return method.url.includes('users');\n  },\n  alova: alova\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodheaders",children:"method.headers"}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u6c42\u5934\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  headers?: any;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodbaseurl",children:"method.baseURL"}),"\n",(0,s.jsxs)(n.p,{children:["\u8bf7\u6c42\u7684\u57fa\u7840\u8def\u5f84\uff0c\u7ee7\u627f\u4e8e",(0,s.jsx)(n.a,{href:"/next/api/alova",children:"alova \u5b9e\u4f8b"}),"\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  baseURL: string;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodurl",children:"method.url"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa method \u5b9e\u4f8b\u7684 url\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  url: string;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodtype",children:"method.type"}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u6c42\u7c7b\u578b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"}),":"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  type: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH';\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methoddata",children:"method.data"}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u6c42 body\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  data?: any;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodcontext",children:"method.context"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa\u5f53\u524d method \u7684 alova \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  context: Alova;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodhitsource",children:"method.hitSource"}),"\n",(0,s.jsxs)(n.p,{children:["\u6253\u51fb\u6e90\u65b9\u6cd5\u5b9e\u4f8b\uff0c\u5f53\u6e90\u65b9\u6cd5\u5b9e\u4f8b\u8bf7\u6c42\u6210\u529f\u65f6\uff0c\u5f53\u524d\u65b9\u6cd5\u5b9e\u4f8b\u7684\u7f13\u5b58\u5c06\u88ab\u5931\u6548\u3002\u4f5c\u4e3a\u81ea\u52a8\u5931\u6548\u529f\u80fd\uff0c\u53ea\u9700\u8bbe\u7f6e\u6253\u51fb\u6e90\u5373\u53ef\uff0c\u800c\u4e0d\u9700\u8981\u624b\u52a8\u8c03\u7528",(0,s.jsx)(n.code,{children:"invalidateCache"}),"\u5931\u6548\u7f13\u5b58\u3002\u6b64\u5916\uff0c\u6b64\u529f\u80fd\u5728\u9519\u7efc\u590d\u6742\u7684\u5931\u6548\u5173\u7cfb\u4e2d\u6bd4",(0,s.jsx)(n.code,{children:"invalidateCache"}),"\u65b9\u6cd5\u66f4\u7b80\u6d01\u6709\u6548\uff0c\u8be5\u5b57\u6bb5\u503c\u53ef\u8bbe\u7f6e\u4e3a method \u5b9e\u4f8b\u3001\u5176\u4ed6 method \u5b9e\u4f8b\u7684 name\u3001name \u6b63\u5219\u5339\u914d\uff0c\u6216\u8005\u5b83\u4eec\u7684\u6570\u7ec4\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  hitSource?: Method | string | RegExp | (Method | string | RegExp)[];\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodmeta",children:"method.meta"}),"\n",(0,s.jsxs)(n.p,{children:["method \u7684 \u5143\u6570\u636e\uff0c\u7528\u4e8e\u8bb0\u5f55\u8bf7\u6c42\u7279\u6027\u4fe1\u606f\uff0c",(0,s.jsx)(n.a,{href:"/next/tutorial/getting-started/basic/method-metadata",children:"\u8be6\u60c5\u67e5\u770b"}),"\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  meta?: any;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodconfig",children:"method.config"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7",(0,s.jsx)(n.code,{children:"alova.Get/alova.Post"}),"\u7b49\u65b9\u6cd5\u521b\u5efa method \u65f6\u7684\u914d\u7f6e\u4fe1\u606f\uff0c",(0,s.jsx)(n.a,{href:"/next/api/alova#alovaget",children:"\u8be6\u60c5\u67e5\u770b"}),"\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  config: AlovaMethodCreateConfig;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodfromcache",children:"method.fromCache"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u524d\u8bf7\u6c42\u7684\u6570\u636e\u662f\u5426\u6765\u81ea\u7f13\u5b58\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  fromCache: boolean;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodsend",children:"method.send()"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u6b64 method \u5b9e\u4f8b\u76f4\u63a5\u53d1\u9001\u8bf7\u6c42\uff0c\u5728",(0,s.jsx)(n.code,{children:"[v2.16.0]"}),"\u4e4b\u540e\u53d1\u9001\u8bf7\u6c42\u53ef\u7701\u7565\u8c03\u7528\u6b64\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  send(forceRequest?: boolean): Promise<Response>;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"forceRequest"}),"\uff1a\u662f\u5426\u5f3a\u5236\u8bf7\u6c42\uff0c\u9ed8\u8ba4\u4e3a false"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u9644\u5e26\u54cd\u5e94\u6570\u636e\u7684 Promise \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/users');\nconst response = await method.send();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodabort",children:"method.abort()"}),"\n",(0,s.jsx)(n.p,{children:"\u4e2d\u6b62\u5f53\u524d\u8bf7\u6c42\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  abort(): void;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/users');\nmethod.abort();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodthen",children:"method.then()"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.code,{children:"[v2.16.0]"}),"\u4e4b\u540e\uff0cmethod \u5b9e\u4f8b\u662f\u4e00\u4e2a PromiseLike \u5b9e\u4f8b\uff0c\u53ef\u76f4\u63a5\u8c03\u7528\u6b64\u65b9\u6cd5\u6216",(0,s.jsx)(n.code,{children:"await method"}),"\u53d1\u9001\u8bf7\u6c42\uff0c\u83b7\u5f97\u54cd\u5e94\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  then(\n    onFulfilled?: (value: Response) => any,\n    onRejected?: (reason: any) => any\n  ): Promise<Response>;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onFulfilled"}),"\uff1a\u8bf7\u6c42\u6210\u529f\u65f6\u7684\u56de\u8c03\u51fd\u6570"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onRejected"}),"\uff1a\u8bf7\u6c42\u5931\u8d25\u65f6\u7684\u56de\u8c03\u51fd\u6570"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u9644\u5e26\u54cd\u5e94\u6570\u636e\u7684 Promise \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/users');\nconst response = await method;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodcatch",children:"method.catch()"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.code,{children:"[v2.16.0]"}),"\u4e4b\u540e\uff0cmethod \u5b9e\u4f8b\u662f\u4e00\u4e2a PromiseLike \u5b9e\u4f8b\uff0c\u53ef\u76f4\u63a5\u8c03\u7528\u6b64\u65b9\u6cd5\u53d1\u9001\u8bf7\u6c42\uff0c\u5e76\u6355\u83b7\u9519\u8bef\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  catch<TResult = never>(\n    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null\n  ): Promise<Response | TResult>;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"onrejected"}),"\uff1a\u8bf7\u6c42\u9519\u8bef\u65f6\u7684\u56de\u8c03\u51fd\u6570"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Promise \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/users');\nconst response = await method.catch(error => {\n  console.error('\u8bf7\u6c42\u9519\u8bef');\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodfinally",children:"method.finally()"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.code,{children:"[v2.16.0]"}),"\u4e4b\u540e\uff0cmethod \u5b9e\u4f8b\u662f\u4e00\u4e2a PromiseLike \u5b9e\u4f8b\uff0c\u53ef\u76f4\u63a5\u8c03\u7528\u6b64\u65b9\u6cd5\u53d1\u9001\u8bf7\u6c42\uff0c\u5e76\u5904\u7406\u54cd\u5e94\u5b8c\u6210\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  finally(onfinally?: (() => void) | undefined | null): Promise<Response>;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Promise \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/users');\nconst response = await method.finally(() => {\n  console.log('\u8bf7\u6c42\u5b8c\u6210');\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodondownload",children:"method.onDownload()"}),"\n",(0,s.jsx)(n.p,{children:"\u7ed1\u5b9a\u4e0b\u8f7d\u4e8b\u4ef6\uff0c\u53ef\u83b7\u5f97\u4e0b\u8f7d\u8fdb\u5ea6\u4fe1\u606f\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  onDownload(handler: ProgressHandler): () => void;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"handler"}),"\u4e0b\u8f7d\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u89e3\u7ed1\u51fd\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/download_file');\nconst offEvent = method.onDownload(event => {\n  console.log('\u6587\u4ef6\u5927\u5c0f\uff1a', event.total);\n  console.log('\u5df2\u4e0b\u8f7d\uff1a', event.loaded);\n});\n\noffEvent();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodonupload",children:"method.onUpload()"}),"\n",(0,s.jsx)(n.p,{children:"\u7ed1\u5b9a\u4e0a\u4f20\u4e8b\u4ef6\uff0c\u53ef\u83b7\u5f97\u4e0a\u4f20\u8fdb\u5ea6\u4fe1\u606f\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  onUpload(handler: ProgressHandler): () => void;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"handler"}),"\u4e0a\u4f20\u4e8b\u4ef6\u56de\u8c03\u51fd\u6570"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u89e3\u7ed1\u51fd\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/upload_file', formData);\nconst offEvent = method.onUpload(event => {\n  console.log('\u6587\u4ef6\u5927\u5c0f\uff1a', event.total);\n  console.log('\u5df2\u4e0a\u4f20\uff1a', event.loaded);\n});\n\noffEvent();\n"})}),"\n",(0,s.jsx)(n.h2,{id:"methodsetname",children:"method.setName()"}),"\n",(0,s.jsx)(n.p,{children:"\u8bbe\u7f6e method \u5b9e\u4f8b\u7684 name\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Method {\n  setName(name: string | number): void;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),"\uff1amethod \u5b9e\u4f8b\u7684 name"]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u65e0"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const method = alova.Get('/api/users', {\n  name: 'user'\n});\nmethod.setName('newUser');\n"})})]})}function a(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>h,a:()=>i});var s=l(67294);const d={},r=s.createContext(d);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function h(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);