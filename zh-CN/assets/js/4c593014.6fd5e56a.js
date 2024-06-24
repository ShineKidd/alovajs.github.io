"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9477],{99043:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var n=s(85893),o=s(11151);const c={title:"\u81ea\u5b9a\u4e49States Hook"},a=void 0,r={id:"tutorial/custom/custom-stateshook",title:"\u81ea\u5b9a\u4e49States Hook",description:"\u8fd8\u8bb0\u5f97\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Alova \u5b9e\u4f8b\u5417\uff1f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.x/tutorial/10-custom/04-custom-stateshook.md",sourceDirName:"tutorial/10-custom",slug:"/tutorial/custom/custom-stateshook",permalink:"/zh-CN/tutorial/custom/custom-stateshook",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/10-custom/04-custom-stateshook.md",tags:[],version:"2.x",sidebarPosition:4,frontMatter:{title:"\u81ea\u5b9a\u4e49States Hook"},sidebar:"tutorial",previous:{title:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668",permalink:"/zh-CN/tutorial/custom/custom-storage-adapter"},next:{title:"Others",permalink:"/zh-CN/category/others"}},i={},d=[{value:"statesHook \u7ed3\u6784",id:"stateshook-\u7ed3\u6784",level:2},{value:"\u81ea\u5b9a\u4e49 statesHook \u51fd\u6570\u8bf4\u660e",id:"\u81ea\u5b9a\u4e49-stateshook-\u51fd\u6570\u8bf4\u660e",level:2},{value:"statesHook \u7c7b\u578b",id:"stateshook-\u7c7b\u578b",level:2}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\u8fd8\u8bb0\u5f97\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Alova \u5b9e\u4f8b\u5417\uff1f"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  // ...\n  statesHook: ReactHook\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"statesHook"}),"\u5c06\u51b3\u5b9a\u5728\u8bf7\u6c42\u65f6\u8fd4\u56de\u54ea\u4e2a UI \u5e93\u7684\u72b6\u6001\uff0calova \u76ee\u524d\u63d0\u4f9b\u4e86",(0,n.jsx)(t.strong,{children:"VueHook\u3001ReactHook\u3001svelteHook"}),"\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4f60\u5e94\u8be5\u7528\u4e0d\u5230\u8fd9\u4e2a\u529f\u80fd\uff0c\u4f46\u5982\u679c\u4f60\u9700\u8981\u9002\u914d\u66f4\u591a alova \u4e0d\u652f\u6301\u7684 MVVM \u5e93\uff0c\u5c31\u9700\u8981\u81ea\u5b9a\u4e49\u7f16\u5199",(0,n.jsx)(t.code,{children:"statesHook"}),"\u4e86\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"statesHook"}),"\u662f\u4e00\u4e2a\u5305\u542b\u7279\u5b9a\u51fd\u6570\u7684\u666e\u901a\u5bf9\u8c61\uff0c\u4e0d\u8fc7\u8fd9\u4e9b\u8fd8\u662f\u57fa\u672c\u4e0d\u6d89\u53ca\u7b97\u6cd5\uff0c\u6211\u4eec\u6765\u770b\u770b ",(0,n.jsx)(t.strong,{children:"VueHook"})," \u662f\u600e\u4e48\u7f16\u5199\u7684\u5427\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"stateshook-\u7ed3\u6784",children:"statesHook \u7ed3\u6784"}),"\n",(0,n.jsxs)(t.p,{children:["statesHook \u4f7f\u7528\u4e00\u4e2a\u5bf9\u8c61\u8fdb\u884c\u8868\u793a\uff0c\u4ee5\u4e0b\u4e3a",(0,n.jsx)(t.strong,{children:"VueHook"}),"\u7684\u793a\u4f8b\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { ref, watch, onUnmounted } from 'vue';\n\nconst VueHook = {\n  // \u72b6\u6001\u521b\u5efa\u51fd\u6570\n  create: rawData => ref(data),\n\n  // \u72b6\u6001\u5bfc\u51fa\u51fd\u6570\n  export: state => state,\n\n  // \u8131\u6c34\u51fd\u6570\n  dehydrate: state => state.value,\n\n  // \u54cd\u5e94\u5f0f\u72b6\u6001\u66f4\u65b0\u51fd\u6570\n  update: (newVal, states) => {\n    Object.keys(newVal).forEach(key => {\n      states[key].value = newVal[key];\n    });\n  },\n\n  // \u8bf7\u6c42\u53d1\u9001\u63a7\u5236\u51fd\u6570\n  effectRequest({ handler, removeStates, saveStates, immediate, frontStates, watchingStates }) {\n    // \u7ec4\u4ef6\u5378\u8f7d\u65f6\u79fb\u9664\u5bf9\u5e94\u72b6\u6001\n    onUnmounted(removeStates);\n\n    // \u8c03\u7528useRequest\u548cuseFetcher\u65f6\uff0cwatchingStates\u4e3aundefined\n    if (!watchingStates) {\n      handler();\n      return;\n    }\n\n    // \u8c03\u7528useWatcher\u65f6\uff0cwatchingStates\u4e3a\u9700\u8981\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\n    // immediate\u4e3atrue\u65f6\uff0c\u8868\u793a\u9700\u8981\u7acb\u5373\u53d1\u9001\u8bf7\u6c42\n    watch(watchingStates, handler, { immediate });\n  }\n};\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u81ea\u5b9a\u4e49-stateshook-\u51fd\u6570\u8bf4\u660e",children:"\u81ea\u5b9a\u4e49 statesHook \u51fd\u6570\u8bf4\u660e"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\u4ee5\u4e0b 5 \u4e2a\u51fd\u6570\u5747\u5fc5\u987b\u6307\u5b9a\u3002"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"create"})}),"\n",(0,n.jsxs)(t.p,{children:["\u54cd\u5e94\u5f0f\u72b6\u6001\u521b\u5efa\u51fd\u6570\uff0c",(0,n.jsx)(t.code,{children:"loading"}),"\u3001",(0,n.jsx)(t.code,{children:"error"}),"\u3001",(0,n.jsx)(t.code,{children:"data"}),"\u3001",(0,n.jsx)(t.code,{children:"downloading"}),"\u3001",(0,n.jsx)(t.code,{children:"uploading"}),"\u7b49\u90fd\u662f\u8c03\u7528\u6b64\u51fd\u6570\u521b\u5efa\u7684\uff0c\u5982 vue3 \u9879\u76ee\u4e0b\u5c06\u521b\u5efa\u4e3a ref \u503c\uff1b"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"export"})}),"\n",(0,n.jsxs)(t.p,{children:["\u72b6\u6001\u5bfc\u51fa\u51fd\u6570\uff0c\u6b64\u51fd\u6570\u63a5\u6536 create \u51fd\u6570\u521b\u5efa\u7684\u54cd\u5e94\u5f0f\u72b6\u6001\uff0c\u5e76\u5bfc\u51fa\u6700\u7ec8\u7ed9\u5f00\u53d1\u8005\u4f7f\u7528\u7684\u72b6\u6001\uff0c\u8fd9\u91cc",(0,n.jsx)(t.code,{children:"VueHook"}),"\u5bfc\u51fa\u7684\u72b6\u6001\u662f\u539f\u72b6\u6001\uff1b"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"dehydrate"})}),"\n",(0,n.jsxs)(t.p,{children:["\u8131\u6c34\u51fd\u6570\uff0c\u610f\u601d\u662f\u5c06\u54cd\u5e94\u5f0f\u72b6\u6001\u8f6c\u6362\u4e3a\u666e\u901a\u6570\u636e\uff0c\u4e0e create \u662f\u76f8\u53cd\u7684\u64cd\u4f5c\uff0c\u5728",(0,n.jsx)(t.code,{children:"updateState"}),"\u4e2d\uff1b"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"update"})}),"\n",(0,n.jsxs)(t.p,{children:["\u54cd\u5e94\u5f0f\u72b6\u6001\u66f4\u65b0\u51fd\u6570\uff0c",(0,n.jsx)(t.code,{children:"alova"}),"\u5185\u90e8\u7ef4\u62a4\u7684\u72b6\u6001\u66f4\u65b0\u90fd\u662f\u901a\u8fc7\u6b64\u51fd\u6570\u5b8c\u6210\u3002\u6b64\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u65b0\u7684\u6570\u636e\u5bf9\u8c61\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u539f\u54cd\u5e94\u5f0f\u72b6\u6001\u7684 map \u96c6\u5408\uff0c\u8fd9\u91cc\u4f60\u53ef\u4ee5\u56fa\u5b9a\u5199\u4e00\u4e2a\u5faa\u73af\u66f4\u65b0",(0,n.jsx)(t.code,{children:"states"}),"\uff1b"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"effectRequest"})}),"\n",(0,n.jsxs)(t.p,{children:["\u8bf7\u6c42\u53d1\u9001\u63a7\u5236\u51fd\u6570\uff0c\u5b83\u4f1a\u5728",(0,n.jsx)(t.code,{children:"useRequest"}),"\u3001",(0,n.jsx)(t.code,{children:"useWatcher"}),"\u3001",(0,n.jsx)(t.code,{children:"useFetcher"}),"\u88ab\u8c03\u7528\u65f6\u7acb\u5373\u6267\u884c\u6b64\u51fd\u6570\uff0c\u6211\u4eec\u8981\u5728\u8fd9\u4e2a\u51fd\u6570\u5185\u8981\u5b8c\u6210\u4e09\u4ef6\u4e8b\uff1a"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"\u5f53\u524d\u7ec4\u4ef6\u5378\u8f7d\u65f6\uff0c\u8c03\u7528 removeStates \u51fd\u6570\u79fb\u9664\u5f53\u524d\u7ec4\u4ef6\u6d89\u53ca\u5230\u7684\u54cd\u5e94\u5f0f\u72b6\u6001\uff0c\u907f\u514d\u5185\u5b58\u6ea2\u51fa;"}),"\n",(0,n.jsxs)(t.li,{children:["\u5f53\u8c03\u7528 useWatcher \u65f6\uff0c\u7ed1\u5b9a\u72b6\u6001\u76d1\u542c\uff0c\u72b6\u6001\u6539\u53d8\u65f6\u8c03\u7528 sendRequest \u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u7528",(0,n.jsx)(t.code,{children:"states"}),"\u662f\u5426\u4e3a\u6570\u7ec4\u5224\u65ad\u662f\u5426\u4e3a",(0,n.jsx)(t.code,{children:"useWatcher"}),"\u88ab\u8c03\u7528\uff0c\u540c\u65f6\uff0c",(0,n.jsx)(t.code,{children:"immediate"}),"\u53c2\u6570\u7528\u4e8e\u5224\u65ad",(0,n.jsx)(t.code,{children:"useWatcher"}),"\u8c03\u7528\u65f6\u662f\u5426\u9700\u8981\u7acb\u5373\u53d1\u9001\u8bf7\u6c42\uff1b"]}),"\n",(0,n.jsxs)(t.li,{children:["\u5f53\u8c03\u7528",(0,n.jsx)(t.code,{children:"useRequest"}),"\u548c",(0,n.jsx)(t.code,{children:"useFetcher"}),"\u65f6\uff0c\u8c03\u7528 sendRequest \u53d1\u51fa\u4e00\u6b21\u8bf7\u6c42\uff0c\u6b64\u65f6",(0,n.jsx)(t.code,{children:"states"}),"\u4e3a",(0,n.jsx)(t.code,{children:"undefined"}),"\uff1b"]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,n.jsxs)(t.p,{children:["\u5982\u679c statesHook \u6d89\u53ca\u7684\u5e93\u662f\u50cf",(0,n.jsx)(t.code,{children:"react"}),"\uff0c\u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u90fd\u4f1a\u8c03\u7528",(0,n.jsx)(t.code,{children:"alova"}),"\u7684 use hook \u7684\uff0c\u90a3\u4e48\u5728",(0,n.jsx)(t.code,{children:"effectRequest"}),"\u4e2d\u8fd8\u9700\u8981\u5728\u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u65f6\u89e6\u53d1",(0,n.jsx)(t.code,{children:"saveStates"}),"\u51fd\u6570\uff0c\u8fd9\u662f\u56e0\u4e3a",(0,n.jsx)(t.code,{children:"react"}),"\u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u90fd\u4f1a\u5237\u65b0\u5b83\u7684\u72b6\u6001\u5f15\u7528\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u518d\u6b21\u91cd\u65b0\u4fdd\u5b58\u5b83\u4eec\u3002"]})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/src/predefine/ReactHook.ts",children:"ReactHook \u6e90\u7801\u70b9\u6b64\u67e5\u770b"})}),"\n",(0,n.jsx)(t.h2,{id:"stateshook-\u7c7b\u578b",children:"statesHook \u7c7b\u578b"}),"\n",(0,n.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u5728\u81ea\u5b9a\u4e49 statesHook \u65f6\uff0c\u4e5f\u5e0c\u671b\u5b83\u53ef\u4ee5\u652f\u6301 typescript\uff0c\u53ef\u4ee5 ",(0,n.jsx)(t.a,{href:"/tutorial/combine-framework/typescript",children:"\u70b9\u6b64\u67e5\u770b"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>a});var n=s(67294);const o={},c=n.createContext(o);function a(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);