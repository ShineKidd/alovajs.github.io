"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[946],{72573:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>j,contentTitle:()=>m,default:()=>g,frontMatter:()=>h,metadata:()=>v,toc:()=>x});var t=o(85893),s=o(11151),a=o(74866),r=o(85162),l=o(9286),i=o(5502);const d="<template>\n  <div v-if=\"loading\">Loading...</div>\n  <div v-else-if=\"error\">{{ error.message }}</div>\n  <span v-else>responseData: {{ data }}</span>\n</template>\n\n<script setup>\nimport { useRequest } from 'alova';\nimport { alovaInstance } from './api';\n\n// \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\nconst { loading, data, error } = useRequest(alovaInstance.Get('/todos/1'));\n<\/script>\n",c="import { useRequest } from 'alova';\nimport { alovaInstance } from './api';\n\nconst App = () => {\n  // \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\n  const { loading, data, error } = useRequest(alovaInstance.Get('/todos/1'));\n\n  if (loading) {\n    return <div>Loading...</div>;\n  } else if (error) {\n    return <div>{error.message}</div>;\n  }\n  return <span>responseData: {JSON.stringify(data)}</span>;\n};\nexport default App;\n",p="<script>\r\nimport { useRequest } from 'alova';\r\nimport { alovaInstance } from './api';\r\n\r\n// \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\r\nconst { loading, data, error } = useRequest(alovaInstance.Get('/todos/1'));\r\n<\/script>\r\n\r\n{#if $loading}\r\n<div>Loading...</div>\r\n{:else if $error}\r\n<div>{ $error.message }</div>\r\n{:else}\r\n<span>responseData: { data }</span>\r\n{/if}",u="<template>\n  <div v-if=\"todo.loading\">Loading...</div>\n  <div v-else-if=\"todo.error\">{{ todo.error.message }}</div>\n  <span v-else>responseData: {{ todo.data }}</span>\n</template>\n\n<script>\nimport { mapAlovaHook } from '@alova/vue-options';\nimport { useRequest } from 'alova';\nimport { alovaInstance } from './api';\n\nexport default {\n  mixins: mapAlovaHook(function () {\n    return {\n      // \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\n      todo: useRequest(alovaInstance.Get('/todos/1'))\n    };\n  }),\n  data() {\n    return {};\n  }\n};\n<\/script>\n",h={title:"\u81ea\u52a8\u7ba1\u7406\u8bf7\u6c42\u72b6\u6001"},m=void 0,v={id:"tutorial/combine-framework/use-request",title:"\u81ea\u52a8\u7ba1\u7406\u8bf7\u6c42\u72b6\u6001",description:"\u5728\u4f01\u4e1a\u7ea7\u9879\u76ee\u4e2d\uff0c\u5728\u89c6\u56fe\u4e2d\u5c55\u793a\u6570\u636e\u7684\u4f20\u8f93\u72b6\u6001\u975e\u5e38\u91cd\u8981\uff0c\u8fd9\u53ef\u4ee5\u8ba9\u7528\u6237\u6e05\u6670\u5730\u77e5\u9053\u4ed6\u4eec\u60f3\u8981\u7684\u5185\u5bb9\u73b0\u5728\u600e\u4e48\u6837\u4e86\u3002\u5728\u9875\u9762\u83b7\u53d6\u521d\u59cb\u6570\u636e\u6216\u63d0\u4ea4\u6570\u636e\u65f6\uff0c\u901a\u5e38\u53ef\u4ee5\u4f7f\u7528useRequest\u6765\u81ea\u52a8\u7ba1\u7406\u8bf7\u6c42\u7684\u72b6\u6001\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.x/tutorial/03-combine-framework/02-use-request.md",sourceDirName:"tutorial/03-combine-framework",slug:"/tutorial/combine-framework/use-request",permalink:"/zh-CN/tutorial/combine-framework/use-request",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/03-combine-framework/02-use-request.md",tags:[],version:"2.x",sidebarPosition:2,frontMatter:{title:"\u81ea\u52a8\u7ba1\u7406\u8bf7\u6c42\u72b6\u6001"},sidebar:"tutorial",previous:{title:"\u7ed3\u5408\u6846\u67b6",permalink:"/zh-CN/tutorial/combine-framework/"},next:{title:"\u76d1\u542c\u8bf7\u6c42",permalink:"/zh-CN/tutorial/combine-framework/use-watcher"}},j={},x=[{value:"\u83b7\u53d6\u521d\u59cb\u5316\u6570\u636e",id:"\u83b7\u53d6\u521d\u59cb\u5316\u6570\u636e",level:2},{value:"\u4fee\u6539\u54cd\u5e94\u5f0f\u6570\u636e",id:"\u4fee\u6539\u54cd\u5e94\u5f0f\u6570\u636e",level:3},{value:"useHook \u7684\u4f7f\u7528\u89c4\u8303",id:"usehook-\u7684\u4f7f\u7528\u89c4\u8303",level:3},{value:"\u624b\u52a8\u53d1\u9001\u8bf7\u6c42",id:"\u624b\u52a8\u53d1\u9001\u8bf7\u6c42",level:2},{value:"API",id:"api",level:2}];function f(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["\u5728\u4f01\u4e1a\u7ea7\u9879\u76ee\u4e2d\uff0c\u5728\u89c6\u56fe\u4e2d\u5c55\u793a\u6570\u636e\u7684\u4f20\u8f93\u72b6\u6001\u975e\u5e38\u91cd\u8981\uff0c\u8fd9\u53ef\u4ee5\u8ba9\u7528\u6237\u6e05\u6670\u5730\u77e5\u9053\u4ed6\u4eec\u60f3\u8981\u7684\u5185\u5bb9\u73b0\u5728\u600e\u4e48\u6837\u4e86\u3002\u5728\u9875\u9762\u83b7\u53d6\u521d\u59cb\u6570\u636e\u6216\u63d0\u4ea4\u6570\u636e\u65f6\uff0c\u901a\u5e38\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.strong,{children:"useRequest"}),"\u6765\u81ea\u52a8\u7ba1\u7406\u8bf7\u6c42\u7684\u72b6\u6001\u3002"]}),"\n",(0,t.jsx)(n.admonition,{title:"\u63d0\u9192",type:"info",children:(0,t.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 useRequest \u524d\uff0c\u8bf7\u786e\u4fdd\u5df2",(0,t.jsx)(n.a,{href:"/tutorial/combine-framework",children:"\u8bbe\u7f6e statesHook"}),"\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"\u83b7\u53d6\u521d\u59cb\u5316\u6570\u636e",children:"\u83b7\u53d6\u521d\u59cb\u5316\u6570\u636e"}),"\n",(0,t.jsx)(n.p,{children:"useRequest \u8868\u793a\u4e00\u6b21\u8bf7\u6c42\u7684\u53d1\u9001\uff0c\u8c03\u7528\u65f6\u9ed8\u8ba4\u5c06\u53d1\u9001\u4e00\u6b21\u8bf7\u6c42\u3002"}),"\n",(0,t.jsxs)(a.Z,{groupId:"framework",children:[(0,t.jsx)(r.Z,{value:"1",label:"vue composition",children:(0,t.jsx)(i.Z,{template:"vue",mainFile:d,editorHeight:400})}),(0,t.jsx)(r.Z,{value:"2",label:"react",children:(0,t.jsx)(i.Z,{template:"react",mainFile:c,editorHeight:400})}),(0,t.jsx)(r.Z,{value:"3",label:"svelte",children:(0,t.jsx)(l.Z,{language:"html",children:p})}),(0,t.jsx)(r.Z,{value:"4",label:"vue options",children:(0,t.jsx)(i.Z,{template:"vue",style:"options",mainFile:u,editorHeight:400})})]}),"\n",(0,t.jsx)(n.h3,{id:"\u4fee\u6539\u54cd\u5e94\u5f0f\u6570\u636e",children:"\u4fee\u6539\u54cd\u5e94\u5f0f\u6570\u636e"}),"\n",(0,t.jsxs)(n.p,{children:["\u4f60\u4e5f\u53ef\u4ee5\u4fee\u6539",(0,t.jsx)(n.code,{children:"useRequest"}),"\u521b\u5efa\u7684\u54cd\u5e94\u5f0f\u6570\u636e\u3002"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"framework",children:[(0,t.jsx)(r.Z,{value:"1",label:"vue composition",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const { data, loading, error, update } = useRequest(todoListGetter);\n\n// ...\n// \u76f4\u63a5\u4fee\u6539data\u503c\ndata.value = {};\n\n// \u6216\u8005\u901a\u8fc7update\u51fd\u6570\u4fee\u6539\nupdate({\n  data: {}\n});\n"})})}),(0,t.jsxs)(r.Z,{value:"2",label:"react",children:[(0,t.jsxs)(n.p,{children:["\u5728 react \u4e2d\uff0c\u8fd4\u56de\u7684\u72b6\u6001\u662f\u76f4\u63a5\u53ef\u4f7f\u7528\u7684\u6570\u636e\uff0c\u56e0\u6b64\u9700\u901a\u8fc7",(0,t.jsx)(n.code,{children:"update"}),"\u51fd\u6570\u6765\u4fee\u6539\u3002"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const { data, loading, error, update } = useRequest(todoListGetter);\n\n// ...\n// \u901a\u8fc7update\u4fee\u6539data\u503c\nupdate({\n  data: {}\n});\n"})})]}),(0,t.jsxs)(r.Z,{value:"3",label:"svelte",children:[(0,t.jsxs)(n.p,{children:["\u5728 svelte \u4e2d\uff0c",(0,t.jsx)(n.code,{children:"useRequest"}),"\u8fd4\u56de\u7684\u72b6\u6001\u4e3a",(0,t.jsx)(n.code,{children:"writable"}),"\u7c7b\u578b\u3002"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const { data, loading, error, update } = useRequest(todoListGetter);\n\n// ...\n// \u76f4\u63a5\u4fee\u6539data\u503c\n$data = {};\n// \u6216data.update(d => ({}));\n\n// \u6216\u8005\u901a\u8fc7update\u51fd\u6570\u4fee\u6539\nupdate({\n  data: {}\n});\n"})})]}),(0,t.jsx)(r.Z,{value:"4",label:"vue options",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"export default {\n  mixins: mapAlovaHook(function () {\n    todo: useRequest(todoListGetter);\n  }),\n  methods: {\n    handleModifyTodo() {\n      // \u76f4\u63a5\u4fee\u6539data\u503c\n      this.todo.data = {};\n\n      // \u6216\u8005\u901a\u8fc7update\u51fd\u6570\u4fee\u6539\n      this.todo.update({\n        data: {}\n      });\n    }\n  }\n};\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.a,{href:"/tutorial/best-practice/skills",children:["\u4f55\u65f6\u4f7f\u7528 useRequest \uff0c\u4f55\u65f6\u901a\u8fc7",(0,t.jsx)(n.code,{children:"await alovaInstance.Get"})," \u53d1\u9001\u8bf7\u6c42"]}),"\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"usehook-\u7684\u4f7f\u7528\u89c4\u8303",children:"useHook \u7684\u4f7f\u7528\u89c4\u8303"}),"\n",(0,t.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\uff0c",(0,t.jsx)(n.code,{children:"useRequest"}),"\u53ea\u80fd\u7528\u4e8e\u7ec4\u4ef6\u5185\u53d1\u9001\u8bf7\u6c42\uff0c\u5728\u7ec4\u4ef6\u5916\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 method \u5b9e\u4f8b\u76f4\u63a5\u53d1\u9001\u8bf7\u6c42\uff0c\u5e76\u4e14 ",(0,t.jsx)(n.code,{children:"useRequest"})," \u7684\u4f7f\u7528\u9700\u8981\u7b26\u5408 use hook \u4f7f\u7528\u89c4\u5219\uff0c\u5373\u53ea\u80fd\u5728\u51fd\u6570\u6700\u5916\u5c42\u8c03\u7528\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"\u274c\u274c\u274c \u4e0d\u63a8\u8350\u5728\u5728\u5faa\u73af\u3001\u6761\u4ef6\u5224\u65ad\u6216\u8005\u5b50\u51fd\u6570\u4e2d\u8c03\u7528"}),"\uff0c\u4f8b\u5982\u4ee5\u4e0b\u5728 click \u56de\u8c03\u4e2d\u7684\u4f7f\u7528\u793a\u4f8b\uff0c\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u4f7f\u7528\u65f6\uff0c\u867d\u7136\u53ef\u4ee5\u6b63\u5e38\u53d1\u8d77\u8bf7\u6c42\uff0c\u4f46 use hook \u8fd4\u56de\u7684\u54cd\u5e94\u5f0f\u6570\u636e\u65e0\u6cd5\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528\uff0c\u5faa\u73af\u548c\u6761\u4ef6\u5224\u65ad\u4e2d\u4f7f\u7528\u4e5f\u662f\u5982\u6b64\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \u274c bad\nconst handleClick = () => {\n  const { loading, data } = useRequest(getter);\n};\n\n// -------\n// \u2705 good\nconst { loading, data, send } = useRequest(getter, {\n  immediate: false\n});\nconst handleClick = () => {\n  send();\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u624b\u52a8\u53d1\u9001\u8bf7\u6c42",children:"\u624b\u52a8\u53d1\u9001\u8bf7\u6c42"}),"\n",(0,t.jsxs)(n.p,{children:["\u5f53\u4f60\u9700\u8981\u521b\u5efa\u4e00\u6761\u65b0\u7684 todo \u9879\u65f6\uff0c\u53ef\u4ee5\u5148\u5173\u95ed\u9ed8\u8ba4\u53d1\u9001\u8bf7\u6c42\uff0c\u8f6c\u4e3a\u624b\u52a8\u89e6\u53d1\u8bf7\u6c42\uff0c\u5e76\u5728 useRequest \u4e2d\u63a5\u6536",(0,t.jsx)(n.code,{children:"send"}),"\u51fd\u6570\u7528\u4e8e\u624b\u52a8\u53d1\u9001\u8bf7\u6c42\uff0c",(0,t.jsx)(n.code,{children:"send"}),"\u51fd\u6570\u5c06\u8fd4\u56de\u5e26\u54cd\u5e94\u6570\u636e\u7684 Promise \u5b9e\u4f8b\uff0c\u5b83\u5c06\u5728\u8bf7\u6c42\u54cd\u5e94\u540e\u6539\u4e3a resolve \u72b6\u6001\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u6b64\u65f6\u4e3a\u4e86\u63a5\u6536",(0,t.jsx)(n.code,{children:"send"}),"\u51fd\u6570\u4f20\u5165\u53c2\u6570\uff0c\u53ef\u4ee5\u5c06",(0,t.jsx)(n.code,{children:"useRequest"}),"\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u8bbe\u7f6e\u4e3a\u51fd\u6570\uff0c\u6211\u4eec\u79f0\u8fd9\u4e2a\u51fd\u6570\u4e3a ",(0,t.jsx)(n.strong,{children:"method handler"}),"\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const {\n  // ...\n  // \u624b\u52a8\u53d1\u9001\u5668\u8bf7\u6c42\u7684\u51fd\u6570\uff0c\u8c03\u7528\u540e\u53d1\u9001\u8bf7\u6c42\n  send: addTodo\n\n  // \u5728\u8fd9\u8fb9\u5c06\u4f1a\u63a5\u6536\u5230 send \u51fd\u6570\u7684\u53c2\u6570\n} = useRequest(newTodo => alovaInstance.Post('/todo', newTodo), {\n  // \u5f53immediate\u4e3afalse\u65f6\uff0c\u9ed8\u8ba4\u4e0d\u53d1\u51fa\n  immediate: false\n});\n\n// \u624b\u52a8\u53d1\u9001\u8bf7\u6c42\nconst handleAddTodo = () => {\n  const newTodo = {\n    title: '\u65b0\u7684todo\u9879',\n    time: new Date().toLocaleString()\n  };\n  // send\u51fd\u6570\u8fd4\u56de\u4e00\u4e2aPromise\u5bf9\u8c61\uff0c\u53ef\u63a5\u6536\u54cd\u5e94\u6570\u636e\n  addTodo(newTodo)\n    .then(result => {\n      console.log('\u65b0\u589etodo\u9879\u6210\u529f\uff0c\u54cd\u5e94\u6570\u636e\u4e3a:', result);\n    })\n    .catch(error => {\n      console.log('\u65b0\u589etodo\u9879\u5931\u8d25\uff0c\u9519\u8bef\u4fe1\u606f\u4e3a:', error);\n    });\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"send"}),"\u51fd\u6570\u53ef\u4ee5\u8ba9\u4f60\u81ea\u7531\u5730\u91cd\u590d\u53d1\u8d77\u8bf7\u6c42\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"[2.9.0+]"})," \u5728 react \u4e2d\uff0csend \u51fd\u6570\u4f7f\u7528\u4e86",(0,t.jsx)(n.code,{children:"useCallback"}),"\u5305\u88f9\uff0c\u540c\u65f6\u5b83\u4e5f\u4e0d\u53d7\u95ed\u5305\u9677\u9631\u9650\u5236\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728\u4e8b\u4ef6\u4e2d\u4f7f\u7528\u5b83\uff0c\u4e0d\u7528\u62c5\u5fc3\u5f15\u8d77\u6027\u80fd\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsxs)(n.p,{children:["\u5b8c\u6574\u7684 API \u6587\u6863\u8bf7\u67e5\u770b",(0,t.jsx)(n.a,{href:"/api/core-hooks#userequest",children:"\u6838\u5fc3 useHooks"}),"\u3002"]})]})}function g(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},5502:(e,n,o)=>{o.d(n,{Z:()=>d});var t=o(59020),s=o(73808),a=o(92949),r=o(85893);const l={vue:{root:"/src/App.vue",files:{"/src/api.js":"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport VueHook from 'alova/vue';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: VueHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"}},"vue-options":{root:"/src/App.vue",files:{"/src/api.js":"import { VueOptionsHook } from '@alova/vue-options';\nimport { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: VueOptionsHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"},deps:{"@alova/vue-options":"latest"}},react:{root:"/App.js",files:{"/api.js":"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport ReactHook from 'alova/react';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: ReactHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"}},svelte:{root:"/App.svelte",files:{"/api.js":"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport SvelteHook from 'alova/svelte';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: SvelteHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"}},static:{root:"/index.html"},vanilla:{root:"/index.js"}},i={svelte:e=>({files:{"/index.js":{code:'import App from "./App.svelte";    \n  const app = new App({\n    target: document.body\n  });\n  export default app;\n        ',hidden:!0},"/public/index.html":{code:'<!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset="utf8" />\n      <meta name="viewport" content="width=device-width" />\n      <title>Svelte app</title>\n      <link rel="stylesheet" href="public/bundle.css" />\n    </head>\n    <body>\n      <script src="bundle.js"><\/script>\n    </body>\n  </html>',hidden:!0},...e.files},customSetup:{entry:"/index.js",dependencies:{svelte:"^3.59.2",...e.customSetup.dependencies}},main:"/App.svelte",environment:"svelte"})},d=e=>{let{template:n,mainFile:o,externalFiles:d={},containBaseURL:c=!0,containResponded:p=!0,editorHeight:u,style:h}=e;const m={light:s.SF,dark:s.eq},v=l[n+(h?`-${h}`:"")],j={[v.root]:o,...v.files?v.files:{},...d},x=Object.keys(j).find((e=>/api\.js$/.test(e)));j[x]&&(c||(j[x]=j[x].replace(/baseURL.+?\s{4}/,"")),p||(j[x]=j[x].replace(/,\s+responded.+json\(\)/,"")));const f={alova:"latest",...v.deps||{}},{colorMode:g}=(0,a.I)();let b={files:j,template:n,customSetup:{dependencies:f}};return b=i[n]?i[n](b):b,(0,r.jsx)(t.xR,{...b,theme:m[g],options:{editorWidthPercentage:70,editorHeight:u}})}}}]);