"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5196],{86032:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>x,frontMatter:()=>h,metadata:()=>v,toc:()=>j});var o=n(85893),a=n(11151),s=n(74866),r=n(85162),i=n(9286),l=n(5502);const d="<template>\n  <div v-if=\"loading\">Loading...</div>\n  <div v-else-if=\"error\">{{ error.message }}</div>\n  <span v-else>responseData: {{ data }}</span>\n</template>\n\n<script setup>\nimport { useRequest } from 'alova';\nimport { alovaInstance } from './api';\n\n// \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\nconst { loading, data, error } = useRequest(alovaInstance.Get('/todos/1'));\n<\/script>\n",c="import { useRequest } from 'alova';\nimport { alovaInstance } from './api';\n\nconst App = () => {\n  // \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\n  const { loading, data, error } = useRequest(alovaInstance.Get('/todos/1'));\n\n  if (loading) {\n    return <div>Loading...</div>;\n  } else if (error) {\n    return <div>{error.message}</div>;\n  }\n  return <span>responseData: {JSON.stringify(data)}</span>;\n};\nexport default App;\n",u="<script>\r\nimport { useRequest } from 'alova';\r\nimport { alovaInstance } from './api';\r\n\r\n// \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\r\nconst { loading, data, error } = useRequest(alovaInstance.Get('/todos/1'));\r\n<\/script>\r\n\r\n{#if $loading}\r\n<div>Loading...</div>\r\n{:else if $error}\r\n<div>{ $error.message }</div>\r\n{:else}\r\n<span>responseData: { data }</span>\r\n{/if}",p="<template>\n  <div v-if=\"todo.loading\">Loading...</div>\n  <div v-else-if=\"todo.error\">{{ todo.error.message }}</div>\n  <span v-else>responseData: {{ todo.data }}</span>\n</template>\n\n<script>\nimport { mapAlovaHook } from '@alova/vue-options';\nimport { useRequest } from 'alova';\nimport { alovaInstance } from './api';\n\nexport default {\n  mixins: mapAlovaHook(function () {\n    return {\n      // \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\n      todo: useRequest(alovaInstance.Get('/todos/1'))\n    };\n  }),\n  data() {\n    return {};\n  }\n};\n<\/script>\n",h={title:"Auto Manage States"},m=void 0,v={id:"tutorial/combine-framework/use-request",title:"Auto Manage States",description:"In enterprise-level projects, it is very important to display the transfer status of data in the view, which can let users clearly know what they want now. When the page obtains initial data or submits data, you can usually use useRequest to automatically manage the status of the request.",source:"@site/versioned_docs/version-2.x/tutorial/03-combine-framework/02-use-request.md",sourceDirName:"tutorial/03-combine-framework",slug:"/tutorial/combine-framework/use-request",permalink:"/tutorial/combine-framework/use-request",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/03-combine-framework/02-use-request.md",tags:[],version:"2.x",sidebarPosition:2,frontMatter:{title:"Auto Manage States"},sidebar:"tutorial",previous:{title:"Combine Framework",permalink:"/tutorial/combine-framework/"},next:{title:"Watching Request",permalink:"/tutorial/combine-framework/use-watcher"}},f={},j=[{value:"Get initialization data",id:"get-initialization-data",level:2},{value:"Modify responsive data",id:"modify-responsive-data",level:3},{value:"UseHook usage specifications",id:"usehook-usage-specifications",level:3},{value:"Manually send request",id:"manually-send-request",level:2},{value:"API",id:"api",level:2}];function g(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"In enterprise-level projects, it is very important to display the transfer status of data in the view, which can let users clearly know what they want now. When the page obtains initial data or submits data, you can usually use useRequest to automatically manage the status of the request."}),"\n",(0,o.jsx)(t.admonition,{title:"reminder",type:"info",children:(0,o.jsxs)(t.p,{children:["Before using useRequest, make sure you have ",(0,o.jsx)(t.a,{href:"/tutorial/combine-framework",children:"set statesHook"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"get-initialization-data",children:"Get initialization data"}),"\n",(0,o.jsx)(t.p,{children:"useRequest represents the sending of a request. When called, a request will be sent by default."}),"\n",(0,o.jsxs)(s.Z,{groupId:"framework",children:[(0,o.jsx)(r.Z,{value:"1",label:"vue composition",children:(0,o.jsx)(l.Z,{template:"vue",mainFile:d,editorHeight:400})}),(0,o.jsx)(r.Z,{value:"2",label:"react",children:(0,o.jsx)(l.Z,{template:"react",mainFile:c,editorHeight:400})}),(0,o.jsx)(r.Z,{value:"3",label:"svelte",children:(0,o.jsx)(i.Z,{language:"html",children:u})}),(0,o.jsx)(r.Z,{value:"4",label:"vue options",children:(0,o.jsx)(l.Z,{template:"vue",style:"options",mainFile:p,editorHeight:400})})]}),"\n",(0,o.jsx)(t.h3,{id:"modify-responsive-data",children:"Modify responsive data"}),"\n",(0,o.jsxs)(t.p,{children:["You can also modify the reactive data created by ",(0,o.jsx)(t.code,{children:"useRequest"}),"."]}),"\n",(0,o.jsxs)(s.Z,{groupId:"framework",children:[(0,o.jsx)(r.Z,{value:"1",label:"vue composition",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const { data, loading, error, update } = useRequest(todoListGetter);\n\n// ...\n// Directly modify the data value\ndata.value = {};\n\n// Or modify it through the update function\nupdate({\n  data: {}\n});\n"})})}),(0,o.jsxs)(r.Z,{value:"2",label:"react",children:[(0,o.jsxs)(t.p,{children:["In react, the returned status is directly usable data, so it needs to be modified through the ",(0,o.jsx)(t.code,{children:"update"})," function."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const { data, loading, error, update } = useRequest(todoListGetter);\n\n// ...\n// Modify the data value through update\nupdate({\n  data: {}\n});\n"})})]}),(0,o.jsxs)(r.Z,{value:"3",label:"svelte",children:[(0,o.jsxs)(t.p,{children:["In svelte, the status returned by ",(0,o.jsx)(t.code,{children:"useRequest"})," is of ",(0,o.jsx)(t.code,{children:"writable"})," type."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const { data, loading, error, update } = useRequest(todoListGetter);\n\n// ...\n// Directly modify the data value\n$data = {};\n// or data.update(d => ({}));\n\n// Or modify it through the update function\nupdate({\n  data: {}\n});\n"})})]}),(0,o.jsx)(r.Z,{value:"4",label:"vue options",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"export default {\n  mixins: mapAlovaHook(function () {\n    todo: useRequest(todoListGetter);\n  }),\n  methods: {\n    handleModifyTodo() {\n      // Directly modify the data value\n      this.todo.data = {};\n\n      // Or modify it through the update function\n      this.todo.update({\n        data: {}\n      });\n    }\n  }\n};\n"})})})]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsxs)(t.a,{href:"/tutorial/best-practice/skills",children:["When to use useRequest and when to send requests via ",(0,o.jsx)(t.code,{children:"await alovaInstance.Get"})]}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"usehook-usage-specifications",children:"UseHook usage specifications"}),"\n",(0,o.jsxs)(t.p,{children:["Please note that ",(0,o.jsx)(t.code,{children:"useRequest"})," can only be used to send requests within the component. Outside the component, you can send requests directly through the method instance, and the use of ",(0,o.jsx)(t.code,{children:"useRequest"})," needs to comply with the use hook usage rules, that is, it can only be called in the outermost layer of the function. ."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"\u274c\u274c\u274c It is not recommended to call"})," in a loop, conditional judgment or sub-function. For example, the following usage example in the click callback. When used in the callback function, although the request can be initiated normally, the response returned by use hook Formula data cannot be used in views, nor can it be used in loops and conditional judgments."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"// \u274c bad\nconst handleClick = () => {\n  const { loading, data } = useRequest(getter);\n};\n\n// -------\n// \u2705 good\nconst { loading, data, send } = useRequest(getter, {\n  immediate: false\n});\nconst handleClick = () => {\n  send();\n};\n"})}),"\n",(0,o.jsx)(t.h2,{id:"manually-send-request",children:"Manually send request"}),"\n",(0,o.jsxs)(t.p,{children:["When you need to create a new todo item, you can first turn off the default send request, switch to manually triggering the request, and receive the ",(0,o.jsx)(t.code,{children:"send"})," function in useRequest to send the request manually. The ",(0,o.jsx)(t.code,{children:"send"})," function will return a Promise with response data instance, it will change to resolve state after request response."]}),"\n",(0,o.jsxs)(t.p,{children:["At this time, in order to receive the parameters passed by the ",(0,o.jsx)(t.code,{children:"send"})," function, you can set the first parameter of ",(0,o.jsx)(t.code,{children:"useRequest"})," to a function. We call this function ",(0,o.jsx)(t.strong,{children:"method handler"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const {\n  // ...\n  // Manual sender request function, send the request after calling\n  send: addTodo\n\n  //The parameters of the send function will be received here\n} = useRequest(newTodo => alovaInstance.Post('/todo', newTodo), {\n  // When immediate is false, it will not be emitted by default.\n  immediate: false\n});\n\n// Manually send request\nconst handleAddTodo = () => {\n  const newTodo = {\n    title: 'New todo item',\n    time: new Date().toLocaleString()\n  };\n  // The send function returns a Promise object that can receive response data\n  addTodo(newTodo)\n    .then(result => {\n      console.log('The new todo item was added successfully, the response data is:', result);\n    })\n    .catch(error => {\n      console.log('Failed to add todo item, error message is:', error);\n    });\n};\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"send"})," function allows you to freely make repeated requests."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"[2.9.0+]"})," In react, the send function is wrapped using ",(0,o.jsx)(t.code,{children:"useCallback"}),", and it is not restricted by closure traps. You can use it directly in events without worrying about causing performance problems."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,o.jsxs)(t.p,{children:["For complete API documentation, see ",(0,o.jsx)(t.a,{href:"/api/core-hooks#userequest",children:"core useHooks"}),"."]})]})}function x(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(g,{...e})}):g(e)}},5502:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(59020),a=n(73808),s=n(92949),r=n(85893);const i={vue:{root:"/src/App.vue",files:{"/src/api.js":"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport VueHook from 'alova/vue';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: VueHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"}},"vue-options":{root:"/src/App.vue",files:{"/src/api.js":"import { VueOptionsHook } from '@alova/vue-options';\nimport { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: VueOptionsHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"},deps:{"@alova/vue-options":"latest"}},react:{root:"/App.js",files:{"/api.js":"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport ReactHook from 'alova/react';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: ReactHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"}},svelte:{root:"/App.svelte",files:{"/api.js":"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport SvelteHook from 'alova/svelte';\nexport const alovaInstance = createAlova({\n  baseURL: 'https://jsonplaceholder.typicode.com',\n  statesHook: SvelteHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n"}},static:{root:"/index.html"},vanilla:{root:"/index.js"}},l={svelte:e=>({files:{"/index.js":{code:'import App from "./App.svelte";    \n  const app = new App({\n    target: document.body\n  });\n  export default app;\n        ',hidden:!0},"/public/index.html":{code:'<!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset="utf8" />\n      <meta name="viewport" content="width=device-width" />\n      <title>Svelte app</title>\n      <link rel="stylesheet" href="public/bundle.css" />\n    </head>\n    <body>\n      <script src="bundle.js"><\/script>\n    </body>\n  </html>',hidden:!0},...e.files},customSetup:{entry:"/index.js",dependencies:{svelte:"^3.59.2",...e.customSetup.dependencies}},main:"/App.svelte",environment:"svelte"})},d=e=>{let{template:t,mainFile:n,externalFiles:d={},containBaseURL:c=!0,containResponded:u=!0,editorHeight:p,style:h}=e;const m={light:a.SF,dark:a.eq},v=i[t+(h?`-${h}`:"")],f={[v.root]:n,...v.files?v.files:{},...d},j=Object.keys(f).find((e=>/api\.js$/.test(e)));f[j]&&(c||(f[j]=f[j].replace(/baseURL.+?\s{4}/,"")),u||(f[j]=f[j].replace(/,\s+responded.+json\(\)/,"")));const g={alova:"latest",...v.deps||{}},{colorMode:x}=(0,s.I)();let b={files:f,template:t,customSetup:{dependencies:g}};return b=l[t]?l[t](b):b,(0,r.jsx)(o.xR,{...b,theme:m[x],options:{editorWidthPercentage:70,editorHeight:p}})}}}]);