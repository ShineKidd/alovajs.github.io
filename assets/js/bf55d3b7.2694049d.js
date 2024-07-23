"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2116],{49829:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>o,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var t=a(85893),s=a(11151);const c={title:"Cache Operations"},i=void 0,r={id:"api/cache",title:"Cache Operations",description:"invalidateCache()",source:"@site/docs/api/04-cache.md",sourceDirName:"api",slug:"/api/cache",permalink:"/api/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/api/04-cache.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Cache Operations"},sidebar:"api",previous:{title:"Core useHooks",permalink:"/api/core-hooks"},next:{title:"Response Status Operation",permalink:"/api/states"}},l={},h=[{value:"invalidateCache()",id:"invalidatecache",level:2},{value:"setCache()",id:"setcache",level:2},{value:"queryCache()",id:"querycache",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"invalidatecache",children:"invalidateCache()"}),"\n",(0,t.jsx)(n.p,{children:"Actively invalidate the cache."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"/tutorial/cache/manually-invalidate",children:"Manually Invalidate Cache"})," for details."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function invalidateCache(matcher?: Method | Method[]): Promise<void>;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"matcher"}),": method instance or array for cache invalidation."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Promise Example"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { invalidateCache } from 'alova';\n\nawait invalidateCache(method);\nawait invalidateCache([method1, method2]);\nconst methodSnapshots = alova.snapshots.match('method-name');\nawait invalidateCache(methodSnapshots);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"setcache",children:"setCache()"}),"\n",(0,t.jsx)(n.p,{children:"Set the response cache."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"/tutorial/cache/set-and-query",children:"Cache Update and Lookup"})," for details."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function setCache(\n  matcher: Method | Method[],\n  dataOrUpdater: R | ((oldCache: R) => R | undefined | void),\n  options?: CacheSetOptions\n): Promise<void>;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"matcher"}),": value is method instance or instance array."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dataOrUpdater"}),": cache data or update function. If it is a function, it needs to return the new cache data. If it returns ",(0,t.jsx)(n.code,{children:"undefined"})," or does not return, the update is canceled."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"options"}),": Configuration parameters"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"policy"}),(0,t.jsx)(n.td,{children:"'l1' | 'l2' | 'all'"}),(0,t.jsxs)(n.td,{children:["Cache update policy, ",(0,t.jsx)(n.code,{children:"l1"})," means only updating the l1 layer cache, ",(0,t.jsx)(n.code,{children:"l2"})," means only updating the l2 layer cache, and ",(0,t.jsx)(n.code,{children:"all"})," means updating both the l1 and l2 layers cache."]})]})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Return"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Promise instance"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { setCache } from 'alova';\n\nawait setCache(method, {});\n\nawait setCache([method1, method2], {});\n\nconst methodSnapshots = alova.snapshots.match('method-name');\n\nawait setCache(\n  methodSnapshots,\n  {},\n  {\n    policy: 'l1'\n  }\n);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"querycache",children:"queryCache()"}),"\n",(0,t.jsx)(n.p,{children:"Query cache."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to ",(0,t.jsx)(n.a,{href:"/tutorial/cache/set-and-query",children:"Cache Update and Lookup"})," for details."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function queryCache(\n  matcher?: Method,\n  options?: CacheQueryOptions\n): Promise<Responded | undefined>;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Parameter"})}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"matcher"}),": The value is a method instance, a method name string, or a method name regular expression. It can also be set to a ",(0,t.jsx)(n.a,{href:"/tutorial/client/in-depth/method-matcher",children:"method matcher"}),". The cache data will be queried for the first method instance that meets the conditions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"options"}),": Configuration parameters"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"policy"}),(0,t.jsx)(n.td,{children:"'l1' | 'l2' | 'all'"}),(0,t.jsxs)(n.td,{children:["Cache acquisition strategy, ",(0,t.jsx)(n.code,{children:"l1"})," means only obtaining the l1 layer cache, ",(0,t.jsx)(n.code,{children:"l2"})," means only obtaining the l2 layer cache, and ",(0,t.jsx)(n.code,{children:"all"})," means querying both the l1 and l2 layer caches."]})]})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Return"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Promise instance of cache data, returns ",(0,t.jsx)(n.code,{children:"undefined"})," if there is no cache."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { queryCache } from 'alova';\n\nconst responseCache = await queryCache(method);\nconst methodSnapshot = alova.snapshots.match('method-name', true);\nconst responseCache = await queryCache(methodSnapshot, {\n  policy: 'l2'\n});\n"})})]})}function o(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>i});var t=a(67294);const s={},c=t.createContext(s);function i(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);