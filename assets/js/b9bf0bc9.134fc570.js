"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5892],{89351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=n(85893),s=n(11151),i=n(74866),o=n(85162);const r={title:"Skills"},l=void 0,d={id:"tutorial/best-practice/skills",title:"Skills",description:"The following are the better usage skills used by alova developers when using alova. They are collected from multiple parties and organized here. I hope that everyone can use alova more smoothly.",source:"@site/versioned_docs/version-2.x/tutorial/07-best-practice/02-skills.md",sourceDirName:"tutorial/07-best-practice",slug:"/tutorial/best-practice/skills",permalink:"/tutorial/best-practice/skills",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/07-best-practice/02-skills.md",tags:[],version:"2.x",sidebarPosition:2,frontMatter:{title:"Skills"},sidebar:"tutorial",previous:{title:"Manage APIs",permalink:"/tutorial/best-practice/manage-apis"},next:{title:"Manage Cache with IndexedDB",permalink:"/tutorial/best-practice/manage-cache-by-indexeddb"}},c={},u=[{value:"Send request useRequest OR method",id:"send-request-userequest-or-method",level:2},{value:"Update state and cache at the same time",id:"update-state-and-cache-at-the-same-time",level:2},{value:"Quickly get sendArgs in onSuccess",id:"quickly-get-sendargs-in-onsuccess",level:2},{value:"Use prefixes to manage similar method instances",id:"use-prefixes-to-manage-similar-method-instances",level:2},{value:"Mock data practice",id:"mock-data-practice",level:2},{value:"Use useRequest to make parallel requests",id:"use-userequest-to-make-parallel-requests",level:2},{value:"method 1",id:"method-1",level:3},{value:"Method 2",id:"method-2",level:3},{value:"Use useRequest serial request",id:"use-userequest-serial-request",level:2},{value:"method 1",id:"method-1-1",level:3},{value:"Method 2",id:"method-2-1",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"The following are the better usage skills used by alova developers when using alova. They are collected from multiple parties and organized here. I hope that everyone can use alova more smoothly."}),"\n",(0,a.jsx)(t.h2,{id:"send-request-userequest-or-method",children:"Send request useRequest OR method"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"useRequest"})," provided by alova will only send a request and get the response data under normal circumstances, so why not use the method instance to send the request directly, because ",(0,a.jsx)(t.code,{children:"useRequest"})," can help us automatically manage ",(0,a.jsx)(t.code,{children:"loading"})," and ",(0,a.jsx)(t.code,{children:"data"})," , ",(0,a.jsx)(t.code,{children:"error"})," and other responsive data that can be used directly, so if you need to use these states, use ",(0,a.jsx)(t.code,{children:"useRequest"})," without maintaining the data yourself. But on the contrary, you don't need to only apply ",(0,a.jsx)(t.code,{children:"useRequest"})," in the whole project. For example, when you only care about getting information and don't need to use ",(0,a.jsx)(t.code,{children:"loading"}),", ",(0,a.jsx)(t.code,{children:"error"}),", etc., when getting data outside the component, you can use method instance to send the request."]}),"\n",(0,a.jsx)(t.h2,{id:"update-state-and-cache-at-the-same-time",children:"Update state and cache at the same time"}),"\n",(0,a.jsx)(t.p,{children:"When you finish editing a piece of data in a list, you don't want to re-request to update the list data again, but manually update the list data. Many developers may directly modify the list data."}),"\n",(0,a.jsxs)(i.Z,{groupId:"framework",children:[(0,a.jsx)(o.Z,{value:"1",label:"vue composition",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<template>\n  <List :data="listData"></List>\n  <Editor @submit="handleItemSubmit"></Editor>\n</template>\n<script setup>\n  //...\n\n  const { data: listData } = useRequest(getList, {\n    initialData: []\n  });\n\n  // directly updated listData\n  const handleItemSubmit = item => {\n    const index = listData.findIndex(({ id }) => id === item.id);\n    listData.splice(index, 1, item);\n  };\n<\/script>\n'})})}),(0,a.jsx)(o.Z,{value:"2",label:"react",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"//...\n\nconst App = () => {\n  const { data: listData } = useRequest(getList, {\n    initialData: []\n  });\n\n  // directly updated listData\n  const handleItemSubmit = item => {\n    const index = listData.findIndex(({ id }) => id === item.id);\n    listData.splice(index, 1, item);\n  };\n\n  return (\n    <>\n      <List data={listData}></List>\n      <Editor onSubmit={handleItemSubmit}></Editor>\n    </>\n  );\n};\n"})})}),(0,a.jsx)(o.Z,{value:"3",label:"svelte",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<script>\n  //...\n\n  const { data: listData } = useRequest(getList, {\n    initialData: []\n  });\n\n  // directly updated listData\n  const handleItemSubmit = item => {\n    const index = listData.findIndex(({ id }) => id === item.id);\n    listData.splice(index, 1, item);\n  };\n<\/script>\n<List data="{listData}"></List>\n<Editor on:submit="{handleItemSubmit}"></Editor>\n'})})})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"\u274c This way of writing is not recommended"})}),"\n",(0,a.jsx)(t.p,{children:"Although this can trigger the interface to refresh, it may cause another problem, that is, when the list data is cached, because the cached data has not been updated, the hit cache is still the original data when entering the list page again."}),"\n",(0,a.jsxs)(t.p,{children:["So you can call ",(0,a.jsx)(t.code,{children:"updateState"})," to update the stateful data and update the cache immediately."]}),"\n",(0,a.jsxs)(i.Z,{groupId:"framework",children:[(0,a.jsx)(o.Z,{value:"1",label:"vue composition",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<template>\n  <List :data="listData"></List>\n  <Editor @submit="handleItemSubmit"></Editor>\n</template>\n<script setup>\n  //...\n\n  const { data: listData } = useRequest(getList, {\n    initialData: []\n  });\n\n  // Update listData through updateState, the cache will be updated at the same time\n  const handleItemSubmit = item => {\n    updateState(getList(), oldListData => {\n      const index = oldListData.findIndex(({ id }) => id === item.id);\n      oldListData.splice(index, 1, item);\n      return oldListData;\n    });\n  };\n<\/script>\n'})})}),(0,a.jsx)(o.Z,{value:"2",label:"react",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-jsx",children:"//...\n\nconst App = () => {\n  const { data: listData } = useRequest(getList, {\n    initialData: []\n  });\n\n  // Update listData through updateState, the cache will be updated at the same time\n  const handleItemSubmit = item => {\n    updateState(getList(), oldListData => {\n      const index = oldListData.findIndex(({ id }) => id === item.id);\n      oldListData.splice(index, 1, item);\n      return oldListData;\n    });\n  };\n\n  return (\n    <>\n      <List data={listData}></List>\n      <Editor onSubmit={handleItemSubmit}></Editor>\n    </>\n  );\n};\n"})})}),(0,a.jsx)(o.Z,{value:"3",label:"svelte",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<script>\n  //...\n\n  const { data: listData } = useRequest(getList, {\n    initialData: []\n  });\n\n  // Update listData through updateState, the cache will be updated at the same time\n  const handleItemSubmit = item => {\n    updateState(getList(), oldListData => {\n      const index = oldListData.findIndex(({ id }) => id === item.id);\n      oldListData.splice(index, 1, item);\n      return oldListData;\n    });\n  };\n<\/script>\n<List data="{listData}"></List>\n<Editor on:submit="{handleItemSubmit}"></Editor>\n'})})})]}),"\n",(0,a.jsx)(t.h2,{id:"quickly-get-sendargs-in-onsuccess",children:"Quickly get sendArgs in onSuccess"}),"\n",(0,a.jsxs)(t.p,{children:["In actual projects, data is often passed through the ",(0,a.jsx)(t.code,{children:"send"})," function. If you need to use these data in callback functions such as onSuccess, since they exist in the ",(0,a.jsx)(t.code,{children:"event.sendArgs"})," array, you can use the double destructuring method to directly obtain them to the data."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"onSuccess(({ sendArgs: [content] }) => {\n  console.log(content);\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"use-prefixes-to-manage-similar-method-instances",children:"Use prefixes to manage similar method instances"}),"\n",(0,a.jsx)(t.p,{children:"In many scenarios, we need to invalidate multiple caches at the same time. For example, the data of a page comes from multiple interfaces. When editing the data of this page, it is necessary to invalidate the cached data of these interfaces at the same time. You can method instances with the same prefix to classify them, and use this regex to invalidate caches with the same prefix."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const getData1 = id => alovaInstance.Get('/data1', {\n   name: `data-${id}-1`,\n   params: {\n     id\n   }\n});\nconst getData2 = id => alovaInstance.Get('/data2', {\n   name: `data-${id}-2`,\n   params: {\n     id\n   }\n});\nconst getData3 = id => alovaInstance.Get('/data3', {\n   name: `data-${id}-3`,\n   params: {\n     id\n   }\n});\n\nconst handleInvalidateCache = id => {\n   // Simultaneously invalidate the 3 cached data of the specified id\n   invalidateCache(new RegExp(`^data-${id}`);\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"mock-data-practice",children:"Mock data practice"}),"\n",(0,a.jsx)(t.p,{children:"If your project needs to use mock data to simulate some or all interfaces in the development environment, and switch back to real network requests in production, you can control it through environment variables."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const globalFetch = GlobalFetch();\nconst mockAdapter = createAlovaMockAdapter([mockGroup1 /** ... */], {\n  httpAdapter: globalFetch,\n  delay: 1000\n});\n\nexport const alovaInst = createAlova({\n  baseURL: 'http://xxx',\n\n  // Control the production environment through environment variables, and will not package mock related codes\n  requestAdapter: process.env.NODE_ENV === 'development' ? mockAdapter : globalFetch\n  //...\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:["And it is recommended that different developers in the team can create different mock interface data according to the version number of each iteration, so as to manage these mock data in the team. For details, please refer to the chapter of ",(0,a.jsx)(t.a,{href:"/tutorial/request-adapter/alova-mock",children:"mock Data"})," ."]}),"\n",(0,a.jsx)(t.h2,{id:"use-userequest-to-make-parallel-requests",children:"Use useRequest to make parallel requests"}),"\n",(0,a.jsx)(t.p,{children:"For simple parallel requests, you only need to call multiple useRequest at the same time."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const { data: todoList } = useRequest(todoListGetter);\nconst { data: todoCounter } = useRequest(todoCountGetter);\n"})}),"\n",(0,a.jsx)(t.p,{children:"But such a request only applies to simple parallel requests. If you need to perform certain operations after all parallel requests are completed, there are two ways to achieve it:"}),"\n",(0,a.jsx)(t.h3,{id:"method-1",children:"method 1"}),"\n",(0,a.jsxs)(t.p,{children:["Manually create a promise object and use ",(0,a.jsx)(t.code,{children:"Promise.all"})," to complete the effect."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const {\n  data: todoList,\n  onSuccess: onListSuccess,\n  onError: onListError\n} = useRequest(todoListGetter);\nconst {\n  data: todoCounter,\n  onSuccess: onCountSuccess,\n  onError: onCountError\n} = useRequest(todoCountGetter);\n\n// Manually create promise object\nconst listPromise = new Promise((resolve, reject) => {\n  onListSuccess(resolve);\n  onListError(reject);\n});\nconst countPromise = new Promise((resolve, reject) => {\n  onCountSuccess(resolve);\n  onCountError(reject);\n});\nconst [listEvent, countEvent] = await Promise.all([listPromise, countPromise]);\n// Parallel request is completed, continue processing business...\n"})}),"\n",(0,a.jsx)(t.h3,{id:"method-2",children:"Method 2"}),"\n",(0,a.jsxs)(t.p,{children:["Using the ",(0,a.jsx)(t.code,{children:"send"})," function returned by the ",(0,a.jsx)(t.code,{children:"useRequest"})," function, calling ",(0,a.jsx)(t.code,{children:"send"})," will return a usable promise object."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// Let them not automatically send requests first\nconst { send: sendList } = useRequest(todoListGetter, { immediate: false });\nconst { send: sendCount } = useRequest(todoCountGetter, { immediate: false });\n\n//Use the promise object returned by the send function\nconst parallelRequest = async () => {\n  const [listResponse, countResponse] = await Promise.all([sendList(), sendCount()]);\n  // Parallel request is completed, continue processing business...\n};\n"})}),"\n",(0,a.jsx)(t.h2,{id:"use-userequest-serial-request",children:"Use useRequest serial request"}),"\n",(0,a.jsx)(t.p,{children:"Serial requests also have two modes."}),"\n",(0,a.jsx)(t.h3,{id:"method-1-1",children:"method 1"}),"\n",(0,a.jsxs)(t.p,{children:["Let the first request be sent automatically, and the second request be triggered in the ",(0,a.jsx)(t.code,{children:"onSuccess"})," callback of the first request to complete the serial request. The serial request can be completed by the following writing method:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"//\nconst { data: todoList, onSuccess } = useRequest(todoListGetter);\nconst { data: todoDetail, send: sendTodoDetail } = useRequest(\n  todoId => todoDetailGetter(todoId),\n  { immediate: false }\n);\n\n// Get the list first, then get the details of the first todo\nonSuccess(event => {\n  sendTodoDetail(event.todoList[0].id);\n});\n"})}),"\n",(0,a.jsx)(t.h3,{id:"method-2-1",children:"Method 2"}),"\n",(0,a.jsxs)(t.p,{children:["Using the ",(0,a.jsx)(t.code,{children:"send"})," function returned by the ",(0,a.jsx)(t.code,{children:"useRequest"})," function, calling ",(0,a.jsx)(t.code,{children:"send"})," will return a usable promise object."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"// Let them not automatically send requests first\nconst { send: sendList } = useRequest(todoListGetter, { immediate: false });\nconst { send: sendTodoDetail } = useRequest(todoId => todoDetailGetter(todoId), {\n  immediate: false\n});\n\n//Use the promise object returned by the send function\nconst serialRequest = async () => {\n  const todoList = await sendList();\n  const todoDetail = await sendTodoDetail(todoList[0].id);\n  // The serial request is completed, continue processing business...\n};\n"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["For serial requests, it is recommended to use ",(0,a.jsx)(t.a,{href:"/tutorial/strategy/useSerialRequest",children:"useSerialRequest"})," and ",(0,a.jsx)(t.a,{href:"/tutorial/strategy/useSerialWatcher",children:"useSerialWatcher"})," directly."]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var a=n(90512);const s={tabItem:"tabItem_Ymn6"};var i=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>q});var a=n(67294),s=n(90512),i=n(12466),o=n(16550),r=n(20469),l=n(91980),d=n(67392),c=n(20812);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,i=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[d,u]=p({queryString:n,groupId:s}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Nk)(n);return[s,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:s}),x=(()=>{const e=d??g;return m({value:e,tabValues:i})?e:null})();(0,r.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=n(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function v(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),s=r[n].value;s!==a&&(d(t),o(s))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...i,className:(0,s.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=g(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(v,{...t,...e}),(0,f.jsx)(j,{...t,...e})]})}function q(e){const t=(0,b.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(67294);const s={},i=a.createContext(s);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);