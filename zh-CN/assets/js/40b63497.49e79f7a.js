"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3931],{8925:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>k,contentTitle:()=>x,default:()=>R,frontMatter:()=>g,metadata:()=>f,toc:()=>b});var t=n(5893),o=n(1151),a=n(4866),s=n(5162),l=n(939);const i="<template>\r\n  <div v-if=\"loading\">Loading...</div>\r\n  <div v-else-if=\"error\">{{ error.message }}</div>\r\n  <span v-else>responseData: {{ data }}</span>\r\n</template>\r\n\r\n<script setup>\r\nimport { useRequest } from 'alova';\r\nimport { alovaInstance } from './api';\r\n\r\n// \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\r\nconst { loading, data, error } = useRequest(\r\n  alovaInstance.Get('https://jsonplaceholder.typicode.com/todos/1')\r\n);\r\n<\/script>",p="import { useRequest } from 'alova';\r\nimport { alovaInstance } from './api';\r\n\r\nconst App = () => {\r\n  // \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\r\n  const { loading, data, error } = useRequest(alovaInstance.Get('https://jsonplaceholder.typicode.com/todos/1'));\r\n\r\n  if (loading) {\r\n    return <div>Loading...</div>;\r\n  } else if (error) {\r\n    return <div>{error.message}</div>;\r\n  }\r\n  return <span>responseData: {JSON.stringify(data)}</span>;\r\n};\r\nexport default App;\r\n",c="<template>\r\n  <div v-if=\"todo.loading\">Loading...</div>\r\n  <div v-else-if=\"todo.error\">{{ todo.error.message }}</div>\r\n  <span v-else>responseData: {{ todo.data }}</span>\r\n</template>\r\n\r\n<script>\r\nimport { mapAlovaHook } from '@alova/vue-options';\r\nimport { useRequest } from 'alova';\r\nimport { alovaInstance } from './api';\r\n\r\nexport default {\r\n  mixins: mapAlovaHook(function() {\r\n    return {\r\n      // \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\r\n      todo: useRequest(\r\n        alovaInstance.Get('https://jsonplaceholder.typicode.com/todos/1')\r\n      )\r\n    }\r\n  }),\r\n  data() {\r\n    return {}; \r\n  }\r\n}\r\n<\/script>",d='<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>\r\n    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"><\/script>\r\n    <script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"><\/script>\r\n    <script src="https://unpkg.com/alova/dist/hooks/vuehook.umd.min.js"><\/script>\r\n  </head>\r\n  <body>\r\n    <div id="app">\r\n      <div v-if="loading">Loading...</div>\r\n      <div v-else-if="error">{{ error.message }}</div>\r\n      <span v-else>responseData: {{ data }}</span>\r\n    </div>\r\n  </body>\r\n  <script>\r\n    const alovaInstance = alova.createAlova({\r\n      statesHook: VueHook,\r\n      requestAdapter: GlobalFetch(),\r\n      responded: response => response.json()\r\n    });\r\n\r\n    Vue.createApp({\r\n      setup() {\r\n        return alova.useRequest(alovaInstance.Get(\'https://jsonplaceholder.typicode.com/todos/1\'));\r\n      }\r\n    }).mount(\'#app\');\r\n  <\/script>\r\n</html>\r\n',u='<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\r\n    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>\r\n    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\r\n    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"><\/script>\r\n    <script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"><\/script>\r\n    <script src="https://unpkg.com/alova/dist/hooks/reacthook.umd.min.js"><\/script>\r\n  </head>\r\n  <body>\r\n    <div id="app"></div>\r\n  </body>\r\n  <script type="text/babel">\r\n    const alovaInstance = alova.createAlova({\r\n      statesHook: ReactHook,\r\n      requestAdapter: GlobalFetch(),\r\n      responded: response => response.json()\r\n    });\r\n\r\n    const App = () => {\r\n      const { loading, data, error } = alova.useRequest(\r\n        alovaInstance.Get(\'https://jsonplaceholder.typicode.com/todos/1\')\r\n      );\r\n\r\n      if (loading) {\r\n        return <div>Loading...</div>;\r\n      } else if (error) {\r\n        return <div>{error.message}</div>;\r\n      }\r\n      return <span>responseData: {JSON.stringify(data)}</span>;\r\n    };\r\n    const root = ReactDOM.createRoot(document.getElementById(\'app\'));\r\n    root.render(<App />);\r\n  <\/script>\r\n</html>\r\n',v='<!DOCTYPE html>\r\n<html lang="en">\r\n  <head>\r\n    <script src="https://unpkg.com/vue@2/dist/vue.js"><\/script>\r\n    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"><\/script>\r\n    <script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"><\/script>\r\n    <script src="https://unpkg.com/@alova/vue-options/dist/alova-vue-options.umd.min.js"><\/script>\r\n  </head>\r\n  <body>\r\n    <div id="app">\r\n      <div v-if="todo.loading">Loading...</div>\r\n      <div v-else-if="todo.error">{{ todo.error.message }}</div>\r\n      <span v-else>responseData: {{ todo.data }}</span>\r\n    </div>\r\n  </body>\r\n  <script>\r\n    const alovaInstance = alova.createAlova({\r\n      statesHook: AlovaVueOptions.VueOptionsHook,\r\n      requestAdapter: GlobalFetch(),\r\n      responded: response => response.json()\r\n    });\r\n\r\n    new Vue({\r\n      el: \'#app\',\r\n      mixins: AlovaVueOptions.mapAlovaHook(function () {\r\n        return {\r\n          todo: alova.useRequest(alovaInstance.Get(\'https://jsonplaceholder.typicode.com/todos/1\'))\r\n        };\r\n      }),\r\n      data() {\r\n        return {};\r\n      }\r\n    });\r\n  <\/script>\r\n</html>\r\n',h="<template>\r\n  <span>responseData: {{ data }}</span>\r\n</template>\r\n\r\n<script setup>\r\nimport { ref } from 'vue';\r\nimport { alovaInstance } from './api';\r\n\r\nconst data = ref(null);\r\nalovaInstance.Get('https://jsonplaceholder.typicode.com/todos/1')\r\n  .send()\r\n  .then(response => {\r\n    data.value = response;\r\n  });\r\n<\/script>",m="import { useEffect, useState } from 'react';\r\nimport { alovaInstance } from './api';\r\n\r\nconst App = () => {\r\n  const [data, setData] = useState(null);\r\n  useEffect(() => {\r\n    alovaInstance\r\n      .Get('https://jsonplaceholder.typicode.com/todos/1')\r\n      .send()\r\n      .then(response => {\r\n        setData(response);\r\n      });\r\n  }, []);\r\n\r\n  return <span>responseData: {JSON.stringify(data)}</span>;\r\n};\r\nexport default App;\r\n",j="<template>\r\n  <span>responseData: {{ response }}</span>\r\n</template>\r\n\r\n<script>\r\nimport { alovaInstance } from './api';\r\n\r\nexport default {\r\n  data() {\r\n    return {\r\n      response: null\r\n    }\r\n  },\r\n  created() {\r\n    alovaInstance.Get('https://jsonplaceholder.typicode.com/todos/1')\r\n      .send()\r\n      .then(response => {\r\n        this.response = response;\r\n      });\r\n  }\r\n}\r\n<\/script>",g={title:"\u5feb\u901f\u5165\u95e8",sidebar_position:50},x=void 0,f={id:"tutorial/get-started/quick-start",title:"\u5feb\u901f\u5165\u95e8",description:"1. \u5982\u679c\u4f60\u8fd8\u672a\u4e86\u89e3 alova\uff0c\u5f3a\u70c8\u63a8\u8350\u4f60\u5148\u9605\u8bfb alova \u6982\u8ff0\u90e8\u5206\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/01-get-started/04-quick-start.md",sourceDirName:"tutorial/01-get-started",slug:"/tutorial/get-started/quick-start",permalink:"/zh-CN/tutorial/get-started/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/01-get-started/04-quick-start.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"\u5feb\u901f\u5165\u95e8",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\u4e0e\u5176\u4ed6\u5e93\u6bd4\u8f83",permalink:"/zh-CN/tutorial/get-started/comparison"},next:{title:"Examples",permalink:"/zh-CN/category/examples"}},k={},b=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a alova \u5b9e\u4f8b",id:"\u9996\u5148\u521b\u5efa\u4e00\u4e2a-alova-\u5b9e\u4f8b",level:2},{value:"\u76f4\u63a5\u53d1\u9001 get \u8bf7\u6c42",id:"\u76f4\u63a5\u53d1\u9001-get-\u8bf7\u6c42",level:2},{value:"\u4f7f\u7528 useRequest \u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42",id:"\u4f7f\u7528-userequest-\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42",level:2},{value:"useHook \u7684\u4f7f\u7528\u89c4\u8303",id:"usehook-\u7684\u4f7f\u7528\u89c4\u8303",level:3},{value:"\u5728\u9759\u6001 html \u4e2d\u4f7f\u7528",id:"\u5728\u9759\u6001-html-\u4e2d\u4f7f\u7528",level:2},{value:"\u63a5\u4e0b\u6765\u8981\u505a\u4ec0\u4e48\uff1f",id:"\u63a5\u4e0b\u6765\u8981\u505a\u4ec0\u4e48",level:2}];function H(e){const r={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.admonition,{title:"\u793a\u4f8b\u63d0\u793a",type:"tip",children:(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\u5982\u679c\u4f60\u8fd8\u672a\u4e86\u89e3 alova\uff0c\u5f3a\u70c8\u63a8\u8350\u4f60\u5148\u9605\u8bfb ",(0,t.jsx)(r.a,{href:"/tutorial/get-started/overview",children:"alova \u6982\u8ff0\u90e8\u5206"}),"\u3002"]}),"\n",(0,t.jsxs)(r.li,{children:["\u60f3\u5148\u5c1d\u8bd5\u4e00\u4e0b\u5417\uff1f\u53ef\u4ee5 ",(0,t.jsx)(r.a,{href:"/tutorial/example/init-page",children:"\u70b9\u6b64"})," \u5c1d\u8bd5\u4e00\u4e2a\u7b80\u5355\u7684\u793a\u4f8b\uff01"]}),"\n"]})}),"\n",(0,t.jsx)(r.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(s.Z,{value:"1",label:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm install alova --save\n"})})}),(0,t.jsx)(s.Z,{value:"2",label:"yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yarn add alova\n"})})})]}),"\n",(0,t.jsx)(r.h2,{id:"\u9996\u5148\u521b\u5efa\u4e00\u4e2a-alova-\u5b9e\u4f8b",children:"\u9996\u5148\uff0c\u521b\u5efa\u4e00\u4e2a alova \u5b9e\u4f8b"}),"\n",(0,t.jsxs)(a.Z,{groupId:"framework",children:[(0,t.jsx)(s.Z,{value:"1",label:"vue composition",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import { createAlova } from 'alova';\r\nimport VueHook from 'alova/vue';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\n\r\nexport const alovaInstance = createAlova({\r\n  // VueHook\u7528\u4e8e\u521b\u5efaref\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001loading\u3001\u54cd\u5e94\u6570\u636edata\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61error\u7b49\r\n  statesHook: VueHook,\r\n\r\n  // \u8bf7\u6c42\u9002\u914d\u5668\uff0c\u63a8\u8350\u4f7f\u7528fetch\u8bf7\u6c42\u9002\u914d\u5668\r\n  requestAdapter: GlobalFetch(),\r\n\r\n  // GlobalFetch\u9002\u914d\u5668\u5c06\u4f1a\u8fd4\u56deResponse\u5b9e\u4f8b\uff0c\r\n  // \u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668\u8fd4\u56dejson\u6570\u636e\r\n  responded: response => response.json()\r\n});\n"})})}),(0,t.jsx)(s.Z,{value:"2",label:"react",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import { createAlova } from 'alova';\r\nimport ReactHook from 'alova/react';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\n\r\nexport const alovaInstance = createAlova({\r\n  // ReactHook\u7528\u4e8e\u521b\u5efareact\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001loading\u3001\u54cd\u5e94\u6570\u636edata\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61error\u7b49\r\n  statesHook: ReactHook,\r\n\r\n  // \u8bf7\u6c42\u9002\u914d\u5668\uff0c\u63a8\u8350\u4f7f\u7528fetch\u8bf7\u6c42\u9002\u914d\u5668\r\n  requestAdapter: GlobalFetch(),\r\n\r\n  // GlobalFetch\u9002\u914d\u5668\u5c06\u4f1a\u8fd4\u56deResponse\u5b9e\u4f8b\uff0c\r\n  // \u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668\u8fd4\u56dejson\u6570\u636e\r\n  responded: response => response.json()\r\n});\n"})})}),(0,t.jsx)(s.Z,{value:"3",label:"svelte",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import { createAlova } from 'alova';\r\nimport SvelteHook from 'alova/svelte';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\n\r\nexport const alovaInstance = createAlova({\r\n  // SvelteHook\u7528\u4e8e\u521b\u5efawritable\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001loading\u3001\u54cd\u5e94\u6570\u636edata\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61error\u7b49\r\n  statesHook: SvelteHook,\r\n\r\n  // \u8bf7\u6c42\u9002\u914d\u5668\uff0c\u63a8\u8350\u4f7f\u7528fetch\u8bf7\u6c42\u9002\u914d\u5668\r\n  requestAdapter: GlobalFetch(),\r\n\r\n  // GlobalFetch\u9002\u914d\u5668\u5c06\u4f1a\u8fd4\u56deResponse\u5b9e\u4f8b\uff0c\r\n  // \u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668\u8fd4\u56dejson\u6570\u636e\r\n  responded: response => response.json()\r\n});\n"})})}),(0,t.jsxs)(s.Z,{value:"4",label:"vue options",children:[(0,t.jsxs)(r.p,{children:["\u5728 vue options \u98ce\u683c\u4e2d\u4f7f\u7528\uff0c\u9700\u8981\u989d\u5916\u5b89\u88c5",(0,t.jsx)(r.code,{children:"@alova/vue-options"}),"\u5305\u3002"]}),(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-js",children:"import { createAlova } from 'alova';\r\nimport GlobalFetch from 'alova/GlobalFetch';\r\nimport { VueOptionsHook } from '@alova/vue-options';\r\n\r\nexport const alovaInstance = createAlova({\r\n  // VueOptionsHook\u7528\u4e8e\u521b\u5efa\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001loading\u3001\u54cd\u5e94\u6570\u636edata\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61error\u7b49\r\n  statesHook: VueOptionsHook,\r\n\r\n  // \u8bf7\u6c42\u9002\u914d\u5668\uff0c\u63a8\u8350\u4f7f\u7528fetch\u8bf7\u6c42\u9002\u914d\u5668\r\n  requestAdapter: GlobalFetch(),\r\n\r\n  // GlobalFetch\u9002\u914d\u5668\u5c06\u4f1a\u8fd4\u56deResponse\u5b9e\u4f8b\uff0c\r\n  // \u4f60\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668\u8fd4\u56dejson\u6570\u636e\r\n  responded: response => response.json()\r\n});\n"})})]})]}),"\n",(0,t.jsx)(r.h2,{id:"\u76f4\u63a5\u53d1\u9001-get-\u8bf7\u6c42",children:"\u76f4\u63a5\u53d1\u9001 get \u8bf7\u6c42"}),"\n",(0,t.jsxs)(r.p,{children:["\u7136\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 alova \u5b9e\u4f8b\u76f4\u63a5\u53d1\u9001\u8bf7\u6c42\u4e86\uff0c\u8bf7\u6c42\u53c2\u6570\u7684\u8bbe\u7f6e\u65b9\u6cd5\u4e0e axios \u76f8\u4f3c\uff0c\u4f46\u4e0d\u540c\u7684\u662f alova \u9700\u8981\u518d\u8c03\u7528",(0,t.jsx)(r.code,{children:"send"}),"\u51fd\u6570\u53d1\u9001\u8bf7\u6c42\uff0c\u5982\u679c\u4f60\u719f\u6089 axios\uff0c\u8fd9\u5e94\u8be5\u5f88\u597d\u7406\u89e3\u3002"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"framework",children:[(0,t.jsx)(s.Z,{value:"1",label:"vue composition",children:(0,t.jsx)(l.Z,{template:"vue",mainFile:h,editorHeight:400,containBaseURL:!1})}),(0,t.jsx)(s.Z,{value:"2",label:"react",children:(0,t.jsx)(l.Z,{template:"react",mainFile:m,editorHeight:400,containBaseURL:!1})}),(0,t.jsx)(s.Z,{value:"3",label:"svelte",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:"<script>\r\n  import { alovaInstance } from './api';\r\n\r\n  let data = null;\r\n  alovaInstance\r\n    .Get('https://jsonplaceholder.typicode.com/todos/1')\r\n    .send()\r\n    .then(response => {\r\n      data = response;\r\n    });\r\n<\/script>\r\n<span>responseData: { data }</span>\n"})})}),(0,t.jsx)(s.Z,{value:"4",label:"vue options",children:(0,t.jsx)(l.Z,{template:"vue",deps:"vue-options",mainFile:j,editorHeight:400,containBaseURL:!1})})]}),"\n",(0,t.jsxs)(r.p,{children:["\u66f4\u591a\u5173\u4e8e method \u5b9e\u4f8b\u53d1\u9001\u8bf7\u6c42\u7684\u5185\u5bb9\uff0c\u8bf7\u524d\u5f80",(0,t.jsx)(r.a,{href:"/tutorial/next-step/send-request-directly",children:"\u4f7f\u7528 method \u5b9e\u4f8b\u53d1\u9001\u8bf7\u6c42"}),"\u9605\u8bfb\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"\u4f7f\u7528-userequest-\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42",children:"\u4f7f\u7528 useRequest \u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42"}),"\n",(0,t.jsxs)(r.p,{children:["\u4f46\u662f\uff0c\u4e0a\u9762\u7684\u4ec5\u4ec5\u53ea\u662f\u5f00\u59cb\u3002\u5728\u4f01\u4e1a\u7ea7\u9879\u76ee\u4e2d\uff0c\u8bf7\u6c42\u5f80\u5f80\u4e0d\u4f1a\u5982\u6b64\u7b80\u5355\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u663e\u793a\u8bf7\u6c42\u72b6\u6001\u3001\u4e0a\u4f20\u4e0b\u8f7d\u72b6\u6001\u3001\u5904\u7406\u8bf7\u6c42\u9519\u8bef\u7b49\uff0c\u4e3a\u4e86\u66f4\u7b80\u5355\u5730\u5b9e\u73b0\u4f01\u4e1a\u7ea7\u7684\u9700\u6c42\uff0calova \u7ed3\u5408 UI \u6846\u67b6\uff0c\u8ba9\u8bf7\u6c42\u53d8\u5f97\u66f4\u7b80\u5355\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 alova \u63d0\u4f9b\u7684",(0,t.jsx)(r.strong,{children:"useHooks"}),"\u53d1\u8d77\u8bf7\u6c42\uff0c\u5b83\u5c06\u8fd4\u56de\u4f8b\u5982",(0,t.jsx)(r.code,{children:"loading"}),"\u7b49\u591a\u4e2a\u8bf7\u6c42\u76f8\u5173\u7684\u72b6\u6001\u5316\u6570\u636e\uff0c\u5e76\u5728 alova \u4e2d\u81ea\u52a8\u7ba1\u7406\u5b83\u4eec\uff0c\u800c\u65e0\u9700\u81ea\u5df1\u7ef4\u62a4\u3002"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["\u4f7f\u7528 useRequest \u53d1\u9001\u8bf7\u6c42\u65f6\u4e0d\u9700\u8981\u8c03\u7528",(0,t.jsx)(r.code,{children:"send"}),"\u51fd\u6570\u3002"]}),"\n"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"framework",children:[(0,t.jsx)(s.Z,{value:"1",label:"vue composition",children:(0,t.jsx)(l.Z,{template:"vue",mainFile:i,editorHeight:400,containBaseURL:!1})}),(0,t.jsx)(s.Z,{value:"2",label:"react",children:(0,t.jsx)(l.Z,{template:"react",mainFile:p,editorHeight:400,containBaseURL:!1})}),(0,t.jsx)(s.Z,{value:"3",label:"svelte",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-html",children:"<script>\r\n  import { createAlova, useRequest } from 'alova';\r\n  import { alovaInstance } from './api';\r\n\r\n  // \u4f7f\u7528alova\u5b9e\u4f8b\u521b\u5efamethod\u5e76\u4f20\u7ed9useRequest\u5373\u53ef\u53d1\u9001\u8bf7\u6c42\r\n  const { loading, data, error } = useRequest(alovaInstance.Get('https://jsonplaceholder.typicode.com/todos/1'));\r\n<\/script>\r\n\r\n{#if $loading}\r\n<div>Loading...</div>\r\n{:else if $error}\r\n<div>{ $error.message }</div>\r\n{:else}\r\n<span>responseData: { data }</span>\r\n{/if}\n"})})}),(0,t.jsx)(s.Z,{value:"4",label:"vue options",children:(0,t.jsx)(l.Z,{template:"vue",deps:"vue-options",mainFile:c,editorHeight:400,containBaseURL:!1})})]}),"\n",(0,t.jsxs)(r.p,{children:["\u5173\u4e8e\u5728\u4f55\u65f6\u4f7f\u7528 useRequest \u53d1\u9001\u8bf7\u6c42\uff0c\u4f55\u65f6\u901a\u8fc7",(0,t.jsx)(r.code,{children:"method.send"})," \u53d1\u9001\u8bf7\u6c42\uff0c\u8bf7\u79fb\u6b65\u9605\u8bfb\u8fd9\u8fb9\u7684",(0,t.jsx)(r.a,{href:"/tutorial/best-practice/skills",children:"\u6700\u4f73\u5b9e\u8df5"}),"\u3002"]}),"\n",(0,t.jsx)(r.h3,{id:"usehook-\u7684\u4f7f\u7528\u89c4\u8303",children:"useHook \u7684\u4f7f\u7528\u89c4\u8303"}),"\n",(0,t.jsxs)(r.p,{children:["\u8bf7\u6ce8\u610f\uff0c",(0,t.jsx)(r.code,{children:"useRequest"}),"\u53ea\u80fd\u7528\u4e8e\u7ec4\u4ef6\u5185\u53d1\u9001\u8bf7\u6c42\uff0c\u5728\u7ec4\u4ef6\u5916\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 method \u5b9e\u4f8b\u76f4\u63a5\u53d1\u9001\u8bf7\u6c42\uff0c\u5e76\u4e14 ",(0,t.jsx)(r.code,{children:"useRequest"})," \u7684\u4f7f\u7528\u9700\u8981\u7b26\u5408 use hook \u4f7f\u7528\u89c4\u5219\uff0c\u5373\u53ea\u80fd\u5728\u51fd\u6570\u6700\u5916\u5c42\u8c03\u7528\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"\u274c\u274c\u274c \u4e0d\u63a8\u8350\u5728\u5728\u5faa\u73af\u3001\u6761\u4ef6\u5224\u65ad\u6216\u8005\u5b50\u51fd\u6570\u4e2d\u8c03\u7528"}),"\uff0c\u4f8b\u5982\u4ee5\u4e0b\u5728 click \u56de\u8c03\u4e2d\u7684\u4f7f\u7528\u793a\u4f8b\uff0c\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u4f7f\u7528\u65f6\uff0c\u867d\u7136\u53ef\u4ee5\u6b63\u5e38\u53d1\u8d77\u8bf7\u6c42\uff0c\u4f46 use hook \u8fd4\u56de\u7684\u54cd\u5e94\u5f0f\u6570\u636e\u65e0\u6cd5\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528\uff0c\u5faa\u73af\u548c\u6761\u4ef6\u5224\u65ad\u4e2d\u4f7f\u7528\u4e5f\u662f\u5982\u6b64\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"// \u274c bad\r\nconst handleClick = () => {\r\n  const { loading, data } = useRequest(getter);\r\n};\r\n\r\n// -------\r\n// \u2705 good\r\nconst { loading, data, send } = useRequest(getter, {\r\n  immediate: false\r\n});\r\nconst handleClick = () => {\r\n  send();\r\n};\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u5728\u9759\u6001-html-\u4e2d\u4f7f\u7528",children:"\u5728\u9759\u6001 html \u4e2d\u4f7f\u7528"}),"\n",(0,t.jsxs)(r.p,{children:["\u9664\u4e86\u4f7f\u7528 esModule \u7684\u65b9\u5f0f\u5b89\u88c5 alova \u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(r.code,{children:"<script>"}),"\u6807\u7b7e\u7684\u65b9\u5f0f\u4f7f\u7528 alova\u3002"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"framework",children:[(0,t.jsx)(s.Z,{value:"1",label:"vue composition",children:(0,t.jsx)(l.Z,{template:"static",mainFile:d,editorHeight:700})}),(0,t.jsx)(s.Z,{value:"2",label:"react",children:(0,t.jsx)(l.Z,{template:"static",mainFile:u,editorHeight:700})}),(0,t.jsx)(s.Z,{value:"3",label:"svelte",children:(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["svelte \u4f9d\u8d56\u4e8e\u7f16\u8bd1\u5de5\u5177\uff0c\u4e0d\u80fd\u901a\u8fc7 CDN \u76f4\u63a5\u4f7f\u7528\uff0c\u8be6\u60c5\u89c1 ",(0,t.jsx)(r.a,{href:"https://svelte.dev/",children:"svelte.dev"})]})})}),(0,t.jsx)(s.Z,{value:"4",label:"vue options",children:(0,t.jsx)(l.Z,{template:"static",deps:"vue-options",mainFile:v,editorHeight:700})})]}),"\n",(0,t.jsx)(r.h2,{id:"\u63a5\u4e0b\u6765\u8981\u505a\u4ec0\u4e48",children:"\u63a5\u4e0b\u6765\u8981\u505a\u4ec0\u4e48\uff1f"}),"\n",(0,t.jsx)(r.p,{children:"\u5b9e\u9645\u4e0a\uff0c\u8fd9\u53ea\u662f\u4e00\u4e2a\u6700\u7b80\u5355\u7684\u793a\u4f8b\u4ee3\u7801\uff0c\u4f46 alova \u8fd8\u5305\u62ec\u5982\u8bf7\u6c42\u548c\u54cd\u5e94\u62e6\u622a\u5668\u3001\u7f13\u5b58\u548c\u72b6\u6001\u7ba1\u7406\u3001\u4e30\u5bcc\u7684\u591a\u573a\u666f useHooks \u7b49\u529f\u80fd\uff0c\u8bf7\u7ee7\u7eed\u5f80\u4e0b\u770b\u3002"}),"\n",(0,t.jsxs)(r.p,{children:["\u5982\u679c\u4f60\u60f3\u8981\u66f4\u597d\u5730\u7ba1\u7406\u4f60\u7684\u8bf7\u6c42\u4ee3\u7801\uff0c\u8fd9\u91cc\u6709\u4e00\u4e2a ",(0,t.jsx)(r.a,{href:"/tutorial/best-practice/method-manage",children:"method \u7ba1\u7406"})," \u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u5f85\u4f60\u79fb\u6b65\u53bb\u9605\u8bfb\u3002"]})]})}function R(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(H,{...e})}):H(e)}},939:(e,r,n)=>{n.d(r,{Z:()=>c});var t=n(9020),o=n(3808),a=n(2949),s=n(5893);const l=e=>{const r={vue:e=>({apiFile:"/src/api.js",import:"vue-options"===e?"import { VueOptionsHook } from '@alova/vue-options';":"import VueHook from 'alova/vue';",hookName:"vue-options"===e?"VueOptionsHook":"VueHook"}),react:()=>({apiFile:"/api.js",import:"import ReactHook from 'alova/react';",hookName:"ReactHook"}),svelte:()=>({apiFile:"/api.js",import:"import SvelteHook from 'alova/svelte';",hookName:"SvelteHook"})}[e];return e=>{let{deps:n,containBaseURL:t}=e;return{[r?.(n).apiFile]:`import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\n${r?.(n).import}\nexport const alovaInstance = createAlova({\n  ${t?"baseURL: 'https://jsonplaceholder.typicode.com',\n  ":""}statesHook: ${r?.(n).hookName},\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});`}}},i={vue:{root:"/src/App.vue",api:l("vue")},react:{root:"/App.js",api:l("react")},svelte:{root:"/App.svelte",api:l("svelte")},static:{root:"/index.html"}},p={"vue-options":{"@alova/vue-options":"latest"}},c=e=>{let{template:r,mainFile:n,externalFiles:l={},containBaseURL:c=!0,editorHeight:d,deps:u}=e;const v={light:o.A1,dark:o.cL},h=i[r],m={[h.root]:n,..."function"==typeof h.api?h.api({deps:u,containBaseURL:c}):{},...l},j={alova:"latest",...u&&p[u]?p[u]:{}},{colorMode:g}=(0,a.I)();return(0,s.jsx)(t.xR,{theme:v[g],template:r,customSetup:{dependencies:j},options:{editorWidthPercentage:70,editorHeight:d},files:m})}}}]);