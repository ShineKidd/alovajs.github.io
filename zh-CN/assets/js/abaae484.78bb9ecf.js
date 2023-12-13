"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7252],{5996:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var s=l(5893),r=l(1151);const t={title:"alova\u5b9e\u4f8b",sidebar_position:10},i=void 0,d={id:"api/alova",title:"alova\u5b9e\u4f8b",description:"createAlova()",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/01-alova.md",sourceDirName:"api",slug:"/api/alova",permalink:"/zh-CN/api/alova",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/api/01-alova.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"alova\u5b9e\u4f8b",sidebar_position:10},sidebar:"apiSidebar",next:{title:"method\u5b9e\u4f8b",permalink:"/zh-CN/api/method"}},a={},o=[{value:"createAlova()",id:"createalova",level:2},{value:"alova.id",id:"alovaid",level:2},{value:"alova.options",id:"alovaoptions",level:2},{value:"alova.storage",id:"alovastorage",level:2},{value:"alova.Get()",id:"alovaget",level:2},{value:"alova.Post()",id:"alovapost",level:2},{value:"alova.Delete()",id:"alovadelete",level:2},{value:"alova.Put()",id:"alovaput",level:2},{value:"alova.Head()",id:"alovahead",level:2},{value:"alova.Patch()",id:"alovapatch",level:2},{value:"alova.Options()",id:"alovaoptions-1",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"createalova",children:"createAlova()"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa\u4e00\u4e2a alova \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"function createAlova(options?: AlovaOptions): Alova;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"options: \u914d\u7f6e\u53c2\u6570"}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570\u540d"}),(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"baseURL"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["\u57fa\u7840\u8def\u5f84\uff0c\u9ed8\u8ba4\u4e3a\u7a7a\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/getting-started/base-url",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"statesHook"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["\u72b6\u6001\u7ba1\u7406\u94a9\u5b50\uff0c\u5fc5\u586b\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/getting-started/first-request",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"requestAdapter"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5fc5\u586b\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/custom/custom-http-adapter",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeout"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsxs)(n.td,{children:["\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e0d\u8d85\u65f6\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/getting-started/timeout",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"localCache"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["\u672c\u5730\u7f13\u5b58\u914d\u7f6e\uff0c\u9ed8\u8ba4 GET \u6709 5000ms \u7f13\u5b58\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/cache/mode",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"storageAdapter"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["\u672c\u5730\u5b58\u50a8\u9002\u914d\u5668\uff0c\u9ed8\u8ba4\u4e3a",(0,s.jsx)(n.code,{children:"localStorage"}),"\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/custom/custom-storage-adapter",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"beforeRequest"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsxs)(n.td,{children:["\u8bf7\u6c42\u524d\u94a9\u5b50\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/getting-started/global-interceptor",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"responded"}),(0,s.jsx)(n.td,{children:"object | function"}),(0,s.jsxs)(n.td,{children:["\u8bf7\u6c42\u54cd\u5e94\u94a9\u5b50\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/getting-started/global-interceptor",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"shareRequest"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["\u5171\u4eab\u8bf7\u6c42\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/getting-started/share-request",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"errorLogger"}),(0,s.jsx)(n.td,{children:"boolean| null | function"}),(0,s.jsxs)(n.td,{children:["\u9519\u8bef\u65e5\u5fd7\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/advanced/error-logger",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cacheLogger"}),(0,s.jsx)(n.td,{children:"boolean | null | function"}),(0,s.jsxs)(n.td,{children:["\u7f13\u5b58\u65e5\u5fd7\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/advanced/cache-logger",children:"\u67e5\u770b\u8be6\u60c5"})]})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Alova \u5b9e\u4f8b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { createAlova } from 'alova';\n\nconst alova = createAlova({\n  baseURL: 'https://example.com',\n  statesHook: VueHook,\n  requestAdapter: GlobalFetch(),\n  timeout: 3000\n  // ...\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"alovaid",children:"alova.id"}),"\n",(0,s.jsxs)(n.p,{children:["alova \u5b9e\u4f8b id\uff0c\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u7684 alova \u5b9e\u4f8b\uff0c\u53ef\u5728",(0,s.jsx)(n.a,{href:"/tutorial/advanced/method-matcher",children:"method \u5b9e\u4f8b\u5339\u914d\u5668"}),"\u4e2d\u7cbe\u51c6\u5339\u914d\u6307\u5b9a alova \u7684 method \u5b9e\u4f8b\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"}),"\uff1astring"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"alovaoptions",children:"alova.options"}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7",(0,s.jsx)(n.code,{children:"createAlova"}),"\u521b\u5efa alova \u5b9e\u4f8b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4e0e\u4f20\u5165\u7684\u914d\u7f6e\u5bf9\u8c61\u5408\u5e76\u540e\u7684\u5bf9\u8c61\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface AlovaOptions {\n  statesHook: StatesHook;\n  requestAdapter: AlovaRequestAdapter;\n  baseURL?: string;\n  timeout?: number;\n  localCache?: GlobalLocalCacheConfig;\n  storageAdapter?: AlovaStorageAdapter;\n  beforeRequest?: Function;\n  responded?: Function | ResponsedHandlerRecord;\n  shareRequest?: boolean;\n  errorLogger?: boolean | null | Function;\n  cacheLogger?: boolean | null | Function;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"alovastorage",children:"alova.storage"}),"\n",(0,s.jsxs)(n.p,{children:["alova \u5b9e\u4f8b\u5bf9\u5e94\u7684\u5b58\u50a8\u9002\u914d\u5668\u5b9e\u4f8b\uff0c\u9ed8\u8ba4\u4e3a",(0,s.jsx)(n.code,{children:"AlovaGlobalStorage"}),"\uff0c\u5b83\u4f7f\u7528\u7684\u662f",(0,s.jsx)(n.code,{children:"localStorage"}),"\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface AlovaStorageAdapter {\n  get(key: string): any;\n  set(key: string, value: any): void;\n  remove(key: string): void;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"alovaget",children:"alova.Get()"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa GET \u8bf7\u6c42\u7684 method \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Get(url: string, options?: AlovaMethodCreateConfig): Method;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"url: \u8bf7\u6c42\u5730\u5740"}),"\n",(0,s.jsx)(n.li,{children:"options: \u914d\u7f6e\u53c2\u6570"}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570\u540d"}),(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"headers"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["\u8bf7\u6c42\u5934\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/getting-started/method",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"params"}),(0,s.jsx)(n.td,{children:"object"}),(0,s.jsxs)(n.td,{children:["\u8bf7\u6c42\u53c2\u6570\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/getting-started/method",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"name"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["method \u5bf9\u8c61\u540d\u79f0\uff0c\u5728 ",(0,s.jsx)(n.a,{href:"/tutorial/advanced/update-states-across-modules",children:"updateState"}),"\u3001",(0,s.jsx)(n.a,{href:"/tutorial/cache/manually-invalidate",children:"invalidateCache"}),"\u3001",(0,s.jsx)(n.a,{href:"/tutorial/cache/set-and-query",children:"setCache"}),"\u3001\u4ee5\u53ca ",(0,s.jsx)(n.a,{href:"/tutorial/advanced/data-fetching",children:"fetch \u51fd\u6570"}),"\u4e2d\u53ef\u4ee5\u901a\u8fc7\u540d\u79f0\u6216\u901a\u914d\u7b26\u83b7\u53d6\u5bf9\u5e94 method \u5b9e\u4f8b"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"timeout"}),(0,s.jsx)(n.td,{children:"number"}),(0,s.jsxs)(n.td,{children:["\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/getting-started/timeout",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"localCache"}),(0,s.jsx)(n.td,{children:"LocalCacheConfig"}),(0,s.jsxs)(n.td,{children:["\u54cd\u5e94\u7f13\u5b58\u65f6\u95f4\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/cache/mode",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"hitSource"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsxs)(n.td,{children:["\u6253\u51fb\u6e90\u65b9\u6cd5\u5b9e\u4f8b\uff0c\u5f53\u6e90\u65b9\u6cd5\u5b9e\u4f8b\u8bf7\u6c42\u6210\u529f\u65f6\uff0c\u5f53\u524d\u65b9\u6cd5\u5b9e\u4f8b\u7684\u7f13\u5b58\u5c06\u88ab\u5931\u6548\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/cache/auto-invalidate",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"enableDownload"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["\u5f00\u542f\u4e0b\u8f7d\u8fdb\u5ea6\u4fe1\u606f\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/getting-started/download-upload-progress",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"enableUpload"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["\u5f00\u542f\u4e0a\u4f20\u8fdb\u5ea6\u4fe1\u606f\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/getting-started/download-upload-progress",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"transformData"}),(0,s.jsx)(n.td,{children:"function"}),(0,s.jsxs)(n.td,{children:["\u8f6c\u6362\u54cd\u5e94\u6570\u636e\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/getting-started/response",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"shareRequest"}),(0,s.jsx)(n.td,{children:"boolean"}),(0,s.jsxs)(n.td,{children:["\u8bf7\u6c42\u7ea7\u5171\u4eab\u8bf7\u6c42\u5f00\u5173\uff0c",(0,s.jsx)(n.a,{href:"/tutorial/getting-started/share-request",children:"\u67e5\u770b\u8be6\u60c5"})]})]})]})]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u9664\u4e86\u53ef\u914d\u7f6e\u4e0a\u9762\u7684\u53c2\u6570\u5916\uff0c\u8fd8\u652f\u6301\u8bf7\u6c42\u9002\u914d\u5668\u652f\u6301\u7684\u5176\u4ed6\u53c2\u6570\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"method \u5b9e\u4f8b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const getUsers = alovaInstance.Get('/users', {\n  params: {\n    id: 1\n  }\n  // ...\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"alovapost",children:"alova.Post()"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa POST \u8bf7\u6c42\u7684 method \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Post(url: string, data?: object | FormData | string | null, options?: AlovaMethodCreateConfig): Method;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"url: \u8bf7\u6c42\u5730\u5740"}),"\n",(0,s.jsx)(n.li,{children:"data: \u8bf7\u6c42 body"}),"\n",(0,s.jsxs)(n.li,{children:["options: \u914d\u7f6e\u53c2\u6570\uff0c\u53c2\u6570\u7c7b\u578b\u540c",(0,s.jsx)(n.a,{href:"#alovaget",children:"alova.Get"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"method \u5b9e\u4f8b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const postUsers = alovaInstance.Post(\n  '/createUser',\n  {\n    name: 'alova',\n    age: 18,\n    gender: 'male'\n  },\n  {\n    // \u914d\u7f6e\u53c2\u6570...\n  }\n);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"alovadelete",children:"alova.Delete()"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa DELETE \u8bf7\u6c42\u7684 method \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Delete(url: string, data?: object | FormData | string | null, options?: AlovaMethodCreateConfig): Method;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"url: \u8bf7\u6c42\u5730\u5740"}),"\n",(0,s.jsx)(n.li,{children:"data: \u8bf7\u6c42 body"}),"\n",(0,s.jsxs)(n.li,{children:["options: \u914d\u7f6e\u53c2\u6570\uff0c\u53c2\u6570\u7c7b\u578b\u540c",(0,s.jsx)(n.a,{href:"#alovaget",children:"alova.Get"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"method \u5b9e\u4f8b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const deleteUsers = alovaInstance.Delete(\n  '/deleteUser',\n  {\n    id: 1\n  },\n  {\n    // \u914d\u7f6e\u53c2\u6570...\n  }\n);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"alovaput",children:"alova.Put()"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa PUT \u8bf7\u6c42\u7684 method \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Put(url: string, data?: object | FormData | string | null, options?: AlovaMethodCreateConfig): Method;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"url: \u8bf7\u6c42\u5730\u5740"}),"\n",(0,s.jsx)(n.li,{children:"data: \u8bf7\u6c42 body"}),"\n",(0,s.jsxs)(n.li,{children:["options: \u914d\u7f6e\u53c2\u6570\uff0c\u53c2\u6570\u7c7b\u578b\u540c",(0,s.jsx)(n.a,{href:"#alovaget",children:"alova.Get"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"method \u5b9e\u4f8b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const putUsers = alovaInstance.Put(\n  '/updateUser',\n  {\n    id: 1,\n    name: 'alova'\n  },\n  {\n    // \u914d\u7f6e\u53c2\u6570...\n  }\n);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"alovahead",children:"alova.Head()"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa HEAD \u8bf7\u6c42\u7684 method \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Head(url: string, options?: AlovaMethodCreateConfig): Method;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"url: \u8bf7\u6c42\u5730\u5740"}),"\n",(0,s.jsxs)(n.li,{children:["options: \u914d\u7f6e\u53c2\u6570\uff0c\u53c2\u6570\u7c7b\u578b\u540c",(0,s.jsx)(n.a,{href:"#alovaget",children:"alova.Get"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"method \u5b9e\u4f8b"}),"\n",(0,s.jsx)(n.h2,{id:"alovapatch",children:"alova.Patch()"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa PATCH \u8bf7\u6c42\u7684 method \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Patch(url: string, data?: object | FormData | string | null, options?: AlovaMethodCreateConfig): Method;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"url: \u8bf7\u6c42\u5730\u5740"}),"\n",(0,s.jsx)(n.li,{children:"data: \u8bf7\u6c42 body"}),"\n",(0,s.jsxs)(n.li,{children:["options: \u914d\u7f6e\u53c2\u6570\uff0c\u53c2\u6570\u7c7b\u578b\u540c",(0,s.jsx)(n.a,{href:"#alovaget",children:"alova.Get"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"method \u5b9e\u4f8b"}),"\n",(0,s.jsx)(n.h2,{id:"alovaoptions-1",children:"alova.Options()"}),"\n",(0,s.jsx)(n.p,{children:"\u521b\u5efa OPTIONS \u8bf7\u6c42\u7684 method \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Options(url: string, options?: AlovaMethodCreateConfig): Method;\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"url: \u8bf7\u6c42\u5730\u5740"}),"\n",(0,s.jsxs)(n.li,{children:["options: \u914d\u7f6e\u53c2\u6570\uff0c\u53c2\u6570\u7c7b\u578b\u540c",(0,s.jsx)(n.a,{href:"#alovaget",children:"alova.Get"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"method \u5b9e\u4f8b"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>d,a:()=>i});var s=l(7294);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);