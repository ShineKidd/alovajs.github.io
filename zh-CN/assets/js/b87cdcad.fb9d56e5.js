"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[838],{58266:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>t,default:()=>o,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var l=s(85893),c=s(11151);const i={title:"\u7f13\u5b58\u64cd\u4f5c"},t=void 0,d={id:"api/cache",title:"\u7f13\u5b58\u64cd\u4f5c",description:"invalidateCache()",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/api/04-cache.md",sourceDirName:"api",slug:"/api/cache",permalink:"/zh-CN/api/cache",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/api/04-cache.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u7f13\u5b58\u64cd\u4f5c"},sidebar:"api",previous:{title:"\u6838\u5fc3useHooks",permalink:"/zh-CN/api/core-hooks"},next:{title:"\u54cd\u5e94\u72b6\u6001\u64cd\u4f5c",permalink:"/zh-CN/api/states"}},h={},r=[{value:"invalidateCache()",id:"invalidatecache",level:2},{value:"setCache()",id:"setcache",level:2},{value:"queryCache()",id:"querycache",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"invalidatecache",children:"invalidateCache()"}),"\n",(0,l.jsx)(n.p,{children:"\u4e3b\u52a8\u5931\u6548\u7f13\u5b58\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u524d\u5f80",(0,l.jsx)(n.a,{href:"/tutorial/cache/manually-invalidate",children:"\u624b\u52a8\u5931\u6548\u7f13\u5b58"}),"\u67e5\u770b\u8be6\u60c5\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"function invalidateCache(matcher?: Method | Method[]): Promise<void>;\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"matcher"}),"\uff1a\u7f13\u5b58\u5931\u6548\u7684 method \u5b9e\u4f8b\u6216\u6570\u7ec4\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Promise \u5b9e\u4f8b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { invalidateCache } from 'alova';\n\nawait invalidateCache(method);\nawait invalidateCache([method1, method2]);\n\nconst methodSnapshots = alova.snapshots.match('method-name');\nawait invalidateCache(methodSnapshots);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"setcache",children:"setCache()"}),"\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u524d\u5f80",(0,l.jsx)(n.a,{href:"/tutorial/cache/set-and-query",children:"\u7f13\u5b58\u66f4\u65b0\u4e0e\u67e5\u627e"}),"\u67e5\u770b\u8be6\u60c5\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"function setCache(\n  matcher: Method | Method[],\n  dataOrUpdater: R | ((oldCache: R) => R | undefined | void),\n  options?: CacheSetOptions\n): Promise<void>;\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"matcher"}),"\uff1a\u503c\u4e3a method \u5b9e\u4f8b\u6216\u5b9e\u4f8b\u6570\u7ec4\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"dataOrUpdater"}),"\uff1a\u7f13\u5b58\u6570\u636e\u6216\u66f4\u65b0\u51fd\u6570\uff0c\u5982\u679c\u4e3a\u51fd\u6570\uff0c\u5219\u9700\u8981\u8fd4\u56de\u65b0\u7684\u7f13\u5b58\u6570\u636e\uff0c\u5982\u679c\u8fd4\u56de",(0,l.jsx)(n.code,{children:"undefined"}),"\u6216\u4e0d\u8fd4\u56de\u5219\u53d6\u6d88\u66f4\u65b0\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"options"}),"\uff1a\u914d\u7f6e\u53c2\u6570"]}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53c2\u6570\u540d"}),(0,l.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,l.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"policy"}),(0,l.jsx)(n.td,{children:"'l1' | 'l2' | 'all'"}),(0,l.jsxs)(n.td,{children:["\u7f13\u5b58\u66f4\u65b0\u7b56\u7565\uff0c ",(0,l.jsx)(n.code,{children:"l1"}),"\u4e3a\u53ea\u66f4\u65b0 l1 \u5c42\u7f13\u5b58\uff0c",(0,l.jsx)(n.code,{children:"l2"}),"\u4e3a\u53ea\u66f4\u65b0 l2 \u5c42\u7f13\u5b58\uff0c",(0,l.jsx)(n.code,{children:"all"}),"\u4e3a\u540c\u65f6\u66f4\u65b0 l1 \u548c l2 \u5c42\u7f13\u5b58."]})]})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Promise \u5b9e\u4f8b"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { setCache } from 'alova';\n\nawait setCache(method, {});\nawait setCache([method1, method2], {});\n\nconst methodSnapshots = alova.snapshots.match('method-name');\nawait setCache(\n  methodSnapshots,\n  {},\n  {\n    policy: 'l1'\n  }\n);\n"})}),"\n",(0,l.jsx)(n.h2,{id:"querycache",children:"queryCache()"}),"\n",(0,l.jsx)(n.p,{children:"\u67e5\u8be2\u7f13\u5b58\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u524d\u5f80",(0,l.jsx)(n.a,{href:"/tutorial/cache/set-and-query",children:"\u7f13\u5b58\u66f4\u65b0\u4e0e\u67e5\u627e"}),"\u67e5\u770b\u8be6\u60c5\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u7c7b\u578b"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"function queryCache(\n  matcher?: Method,\n  options?: CacheQueryOptions\n): Promise<Responded | undefined>;\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u53c2\u6570"})}),"\n"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"matcher"}),"\uff1a\u503c\u4e3a method \u5b9e\u4f8b\u3001method \u7684 name \u5b57\u7b26\u4e32\u3001method \u7684 name \u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a",(0,l.jsx)(n.a,{href:"/tutorial/client/in-depth/method-matcher",children:"method \u5339\u914d\u5668"}),"\uff0c\u5c06\u4f1a\u4e3a\u7b26\u5408\u6761\u4ef6\u7684\u7b2c\u4e00\u4e2a method \u5b9e\u4f8b\u67e5\u8be2\u7f13\u5b58\u6570\u636e\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"options"}),"\uff1a\u914d\u7f6e\u53c2\u6570"]}),"\n"]}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u53c2\u6570\u540d"}),(0,l.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,l.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"policy"}),(0,l.jsx)(n.td,{children:"'l1' | 'l2' | 'all'"}),(0,l.jsxs)(n.td,{children:["\u7f13\u5b58\u83b7\u53d6\u7b56\u7565\uff0c ",(0,l.jsx)(n.code,{children:"l1"}),"\u4e3a\u53ea\u83b7\u53d6 l1 \u5c42\u7f13\u5b58\uff0c",(0,l.jsx)(n.code,{children:"l2"}),"\u4e3a\u53ea\u83b7\u53d6 l2 \u5c42\u7f13\u5b58\uff0c",(0,l.jsx)(n.code,{children:"all"}),"\u4e3a\u540c\u65f6\u67e5\u8be2 l1 \u548c l2 \u5c42\u7f13\u5b58."]})]})})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u8fd4\u56de"})}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u7f13\u5b58\u6570\u636e\u7684 Promise \u5b9e\u4f8b\uff0c\u5982\u679c\u6ca1\u6709\u7f13\u5b58\u5219\u8fd4\u56de",(0,l.jsx)(n.code,{children:"undefined"}),"\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b"})}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import { queryCache } from 'alova';\n\nconst responseCache = await queryCache(method);\nconst methodSnapshot = alova.snapshots.match('method-name', true);\nconst responseCache = await queryCache(methodSnapshot, {\n  policy: 'l2'\n});\n"})})]})}function o(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>t});var l=s(67294);const c={},i=l.createContext(c);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);