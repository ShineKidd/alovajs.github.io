"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6425],{44396:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=s(85893),r=s(11151);const a={title:"Alova Instance"},l=void 0,i={id:"api/alova",title:"Alova Instance",description:"createAlova()",source:"@site/docs/api/01-alova.md",sourceDirName:"api",slug:"/api/alova",permalink:"/api/alova",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/api/01-alova.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Alova Instance"},sidebar:"api",next:{title:"method instance",permalink:"/api/method"}},d={},c=[{value:"createAlova()",id:"createalova",level:2},{value:"alova.id",id:"alovaid",level:2},{value:"alova.options",id:"alovaoptions",level:2},{value:"alova.l1Cache",id:"aloval1cache",level:2},{value:"alova.l2Cache",id:"aloval2cache",level:2},{value:"alova.snapshots",id:"alovasnapshots",level:2},{value:"alova.Post()",id:"alovapost",level:2},{value:"alova.Delete()",id:"alovadelete",level:2},{value:"alova.Put()",id:"alovaput",level:2},{value:"alova.Head()",id:"alovahead",level:2},{value:"alova.Patch()",id:"alovapatch",level:2},{value:"alova.Options()",id:"alovaoptions-1",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"createalova",children:"createAlova()"}),"\n",(0,t.jsx)(n.p,{children:"Create an Alova instance."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function createAlova(options?: AlovaOptions): Alova;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"config: Configuration parameters"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"requestAdapter"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["Request adapter, required, ",(0,t.jsx)(n.a,{href:"/tutorial/advanced/custom/http-adapter",children:"View details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"id"}),(0,t.jsx)(n.td,{children:"string | number"}),(0,t.jsxs)(n.td,{children:["Alova instance id, optional, ",(0,t.jsx)(n.a,{href:"/tutorial/cache/mode#%E8%AE%BE%E7%BD%AE-alova-id",children:"View details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"baseURL"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsxs)(n.td,{children:["Base path, optional, default is empty, ",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/basic/alova",children:"View details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"statesHook"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["State management hook, optional, ",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/basic/combine-framework",children:"see details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeout"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["Timeout, default is no timeout, ",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/basic/alova",children:"see details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cacheFor"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["Local cache configuration, default GET has 5000ms cache, ",(0,t.jsx)(n.a,{href:"/tutorial/cache/mode",children:"see details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"l1Cache"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["Level1 cache adapter ",(0,t.jsx)(n.a,{href:"/tutorial/cache/mode",children:"see details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"l2Cache"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["Level2 cache adapter, ",(0,t.jsx)(n.a,{href:"/tutorial/cache/mode",children:"see details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"beforeRequest"}),(0,t.jsx)(n.td,{children:"function"}),(0,t.jsxs)(n.td,{children:["Before request hook, ",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/basic/global-interceptor",children:"see details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"responded"}),(0,t.jsx)(n.td,{children:"object | function"}),(0,t.jsxs)(n.td,{children:["Request response hook, ",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/basic/global-interceptor",children:"see details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"shareRequest"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsxs)(n.td,{children:["Share request, ",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/basic/alova",children:"see details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cacheLogger"}),(0,t.jsx)(n.td,{children:"boolean | null | function"}),(0,t.jsxs)(n.td,{children:["Cache log, ",(0,t.jsx)(n.a,{href:"/tutorial/advanced/in-depth/cache-logger",children:"see details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"snapshots"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["method The number of snapshots is limited, the default is 1000, ",(0,t.jsx)(n.a,{href:"/tutorial/client/in-depth/method-matcher",children:"see details"})]})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Alova instance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { createAlova } from 'alova';\nimport VueHook from 'alova/vue';\nimport adapterFetch from 'alova/fetch';\n\nconst alova = createAlova({\n  baseURL: 'https://example.com',\n  statesHook: VueHook,\n  requestAdapter: adapterFetch(),\n  timeout: 3000\n  // ...\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"alovaid",children:"alova.id"}),"\n",(0,t.jsxs)(n.p,{children:["alova instance id, used to distinguish different alova instances, can be used to accurately match the method instance of the specified alova in the ",(0,t.jsx)(n.a,{href:"/tutorial/client/in-depth/method-matcher",children:"method matcher"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Type"}),": string"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"alovaoptions",children:"alova.options"}),"\n",(0,t.jsxs)(n.p,{children:["When creating an alova instance through ",(0,t.jsx)(n.code,{children:"createAlova"}),", the object after the default configuration is merged with the passed in configuration object."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface AlovaOptions {\n  statesHook: StatesHook;\n  requestAdapter: AlovaRequestAdapter;\n  baseURL?: string;\n  timeout?: number;\n  cacheFor?: GlobalcacheForConfig;\n  l1Cache?: AlovaStorageAdapter;\n  l2Cache?: AlovaStorageAdapter;\n  beforeRequest?: Function;\n  responded?: Function | ResponsedHandlerRecord;\n  shareRequest?: boolean;\n  cacheLogger?: boolean | null | Function;\n  snapshots?: number;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"aloval1cache",children:"alova.l1Cache"}),"\n",(0,t.jsx)(n.p,{children:"The level1 cache adapter corresponding to the alova instance, the default is memory cache."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface AlovaStorageAdapter {\n  get(key: string): any;\n  set(key: string, value: any): void;\n  remove(key: string): void;\n  clear(): void;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"aloval2cache",children:"alova.l2Cache"}),"\n",(0,t.jsxs)(n.p,{children:["The level2 cache adapter corresponding to the alova instance. The default value is ",(0,t.jsx)(n.code,{children:"localStorage"})," in the client, and there is no adapter on the server by default."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface AlovaStorageAdapter {\n  get(key: string): any;\n  set(key: string, value: any): void;\n  remove(key: string): void;\n  clear(): void;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"alovasnapshots",children:"alova.snapshots"}),"\n",(0,t.jsx)(n.p,{children:"The method snapshot storage of the current instance."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Type"})," ",(0,t.jsx)(n.code,{children:"ts class MethodSnapshotContainer<AG extends AlovaGenerics> { records: Record<string, Set<Method<AG>>>; capacity: number; occupy: number; save(methodInstance: Method<AG>): void; match<M extends boolean = true>( matcher: MethodFilter<AG>, matchAll?: M ): M extends true ? Method<AG>[] : Method<AG> | undefined; } "})," ## al ova.Get() creates a method instance for a GET request."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Get(url: string, config?: AlovaMethodCreateConfig): Method;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"url: request address"}),"\n",(0,t.jsx)(n.li,{children:"config: configuration parameters"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"headers"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["Request header, ",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/basic/method",children:"see details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"params"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsxs)(n.td,{children:["Request parameters, ",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/basic/method",children:"see details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"name"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsxs)(n.td,{children:["Method object name. In ",(0,t.jsx)(n.a,{href:"/tutorial/client/in-depth/update-across-components",children:"updateState"}),", ",(0,t.jsx)(n.a,{href:"/tutorial/cache/manually-invalidate",children:"invalidateCache"}),", ",(0,t.jsx)(n.a,{href:"/tutorial/cache/set-and-query",children:"setCache"}),", and ",(0,t.jsx)(n.a,{href:"/tutorial/client/strategy/use-fetcher",children:"fetch function"}),", you can get the corresponding method instance by name or wildcard"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timeout"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsxs)(n.td,{children:["Request timeout, ",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/basic/method",children:"see details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cacheFor"}),(0,t.jsx)(n.td,{children:"cacheForConfig"}),(0,t.jsxs)(n.td,{children:["Response cache time, ",(0,t.jsx)(n.a,{href:"/tutorial/cache/mode",children:"see details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hitSource"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsxs)(n.td,{children:["Hit the source method instance. When the source method instance request succeeds, the cache of the current method instance will be invalidated. ",(0,t.jsx)(n.a,{href:"/tutorial/cache/auto-invalidate",children:"View details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"transform"}),(0,t.jsx)(n.td,{children:"function"}),(0,t.jsxs)(n.td,{children:["Transform response data. ",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/basic/method",children:"View details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"shareRequest"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsxs)(n.td,{children:["Request-level shared request switch. ",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/basic/method",children:"View details"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"meta"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsxs)(n.td,{children:["method metadata. ",(0,t.jsx)(n.a,{href:"/tutorial/getting-started/basic/method-metadata",children:"View details"})]})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"In addition to the configurable parameters above, other parameters supported by the request adapter are also supported."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"method instance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const getUsers = alovaInstance.Get('/users', {\n  params: {\n    id: 1\n  }\n  // ...\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"alovapost",children:"alova.Post()"}),"\n",(0,t.jsx)(n.p,{children:"Create a method instance for a POST request."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Post(\n    url: string,\n    data?: object | FormData | string | null,\n    config?: AlovaMethodCreateConfig\n  ): Method;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"url: request address"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"data: request body"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["config: configuration parameters, parameter type is the same as ",(0,t.jsx)(n.a,{href:"#alovaget",children:"alova.Get"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"method instance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const postUsers = alovaInstance.Post(\n  '/createUser',\n  {\n    name: 'alova',\n    age: 18,\n    gender: 'male'\n  },\n  {\n    // Configuration parameters...\n  }\n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"alovadelete",children:"alova.Delete()"}),"\n",(0,t.jsx)(n.p,{children:"Create a method instance for a DELETE request."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Delete(\n    url: string,\n    data?: object | FormData | string | null,\n    config?: AlovaMethodCreateConfig\n  ): Method;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"url: request address"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"data: request body"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["config: configuration parameters, parameter type is the same as ",(0,t.jsx)(n.a,{href:"#alovaget",children:"alova.Get"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"method instance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const deleteUsers = alovaInstance.Delete(\n  '/deleteUser',\n  {\n    id: 1\n  },\n  {\n    // Configuration parameters...\n  }\n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"alovaput",children:"alova.Put()"}),"\n",(0,t.jsx)(n.p,{children:"Create a method instance for a PUT request."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Put(\n    url: string,\n    data?: object | FormData | string | null,\n    config?: AlovaMethodCreateConfig\n  ): Method;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"url: request address"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"data: request body"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["config: configuration parameters, parameter type is the same as ",(0,t.jsx)(n.a,{href:"#alovaget",children:"alova.Get"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"method instance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const putUsers = alovaInstance.Put(\n  '/updateUser',\n  {\n    id: 1,\n    name: 'alova'\n  },\n  {\n    // Configuration parameters...\n  }\n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"alovahead",children:"alova.Head()"}),"\n",(0,t.jsx)(n.p,{children:"Create a method instance for HEAD request."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Head(url: string, config?: AlovaMethodCreateConfig): Method;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"url: request address"}),"\n",(0,t.jsxs)(n.li,{children:["config: configuration parameters, parameter type is the same as ",(0,t.jsx)(n.a,{href:"#alovaget",children:"alova.Get"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"method instance"}),"\n",(0,t.jsx)(n.h2,{id:"alovapatch",children:"alova.Patch()"}),"\n",(0,t.jsx)(n.p,{children:"Create a method instance for the PATCH request."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Patch(\n    url: string,\n    data?: object | FormData | string | null,\n    config?: AlovaMethodCreateConfig\n  ): Method;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"url: request address"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"data: request body"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["config: configuration parameters, parameter type is the same as ",(0,t.jsx)(n.a,{href:"#alovaget",children:"alova.Get"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"method instance"}),"\n",(0,t.jsx)(n.h2,{id:"alovaoptions-1",children:"alova.Options()"}),"\n",(0,t.jsx)(n.p,{children:"Create a method instance for OPTIONS request."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"interface Alova {\n  Options(url: string, config?: AlovaMethodCreateConfig): Method;\n}\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"url: request address"}),"\n",(0,t.jsxs)(n.li,{children:["config: configuration parameters, parameter type is the same as ",(0,t.jsx)(n.a,{href:"#alovaget",children:"alova.Get"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"method instance"})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>l});var t=s(67294);const r={},a=t.createContext(r);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);