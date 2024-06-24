"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3340],{35527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var o=n(85893),i=n(11151),l=n(93894);n(67294);const a=()=>(0,o.jsx)(l.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/IndexedDB-cache?embed=1&file=%2Fsrc%2FApp.vue"}),r={title:"\u4f7f\u7528IndexedDB\u7ba1\u7406\u7f13\u5b58"},s=void 0,d={id:"tutorial/example/controlled-cache-by-indexeddb",title:"\u4f7f\u7528IndexedDB\u7ba1\u7406\u7f13\u5b58",description:"\u793a\u4f8b\u4ee5 vue3 \u4e3a\u4f8b\uff0c\u4f46\u4f60\u8fd8\u53ef\u4ee5\u5728 react\u3001svelte \u4e2d\u4f7f\u7528 alova\uff0c\u8be6\u7ec6\u8bf7\u9605\u8bfb \u5165\u95e8\u6307\u5357;",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.x/tutorial/01-example/11-controlled-cache-by-indexeddb.md",sourceDirName:"tutorial/01-example",slug:"/tutorial/example/controlled-cache-by-indexeddb",permalink:"/zh-CN/tutorial/example/controlled-cache-by-indexeddb",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/01-example/11-controlled-cache-by-indexeddb.md",tags:[],version:"2.x",sidebarPosition:11,frontMatter:{title:"\u4f7f\u7528IndexedDB\u7ba1\u7406\u7f13\u5b58"},sidebar:"tutorial",previous:{title:"\u9875\u7801\u5217\u8868",permalink:"/zh-CN/tutorial/example/paginated-list"},next:{title:"\u9759\u9ed8\u63d0\u4ea4-\u8bbe\u7f6e\u9875",permalink:"/zh-CN/tutorial/example/silent-submit-setting"}},c={},p=[];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",em:"em",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\u793a\u4f8b\u4ee5 vue3 \u4e3a\u4f8b\uff0c\u4f46\u4f60\u8fd8\u53ef\u4ee5\u5728 react\u3001svelte \u4e2d\u4f7f\u7528 alova\uff0c\u8be6\u7ec6\u8bf7\u9605\u8bfb ",(0,o.jsx)(t.a,{href:"/tutorial/getting-started",children:"\u5165\u95e8\u6307\u5357"}),";"]}),"\n"]}),"\n",(0,o.jsx)(a,{}),"\n",(0,o.jsxs)(t.admonition,{title:"\u793a\u4f8b\u8bf4\u660e",type:"info",children:[(0,o.jsx)(t.p,{children:"\u4f7f\u7528\u53d7\u63a7\u7f13\u5b58\u8ba9\u5f00\u53d1\u8005\u81ea\u5b9a\u4e49\u7ba1\u7406\u7f13\u5b58\uff0c\u5728\u5927\u6587\u4ef6\u7f13\u5b58\u4e0b\uff0c\u53ef\u4ee5\u914d\u5408 IndexedDB \u7ba1\u7406\u672c\u5730\u7f13\u5b58\u3002"}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"\u64cd\u4f5c\u5f15\u5bfc\uff1a"})}),(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"\u9009\u62e9\u5176\u4e2d\u4e00\u5f20\u56fe\u7247\uff0c\u56fe\u7247\u4f1a\u5148\u8bf7\u6c42\u7f51\u7edc\u52a0\u8f7d\uff0c\u56fe\u7247\u6570\u636e\u5c06\u4f1a\u4fdd\u5b58\u5728\u672c\u5730 IndexedDB \u4e2d\uff1b"}),"\n",(0,o.jsx)(t.li,{children:"\u5237\u65b0\u9875\u9762\uff0c\u518d\u6b21\u9009\u62e9\u76f8\u540c\u7684\u56fe\u7247\uff0c\u56fe\u7247\u5c06\u5728 IndexedDB \u4e2d\u83b7\u53d6\u6570\u636e\uff0c\u800c\u4e0d\u518d\u53d1\u8d77\u7f51\u7edc\u8bf7\u6c42\uff1b"}),"\n"]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/tutorial/cache/controlled-cache",children:"\u53d7\u63a7\u7f13\u5b58\u6587\u6863"})})]})]})}function x(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},93894:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(33692),i=n(95999),l=n(85893);const a=e=>{let{src:t}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)("iframe",{src:t,style:{width:"100%",height:"1000px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,l.jsx)(o.Z,{to:t,children:(0,l.jsx)(i.Z,{id:"example.open in new tab",children:"Encounter troubles? Click to open this in new page."})})]})}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var o=n(67294);const i={},l=o.createContext(i);function a(e){const t=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(l.Provider,{value:t},e.children)}}}]);