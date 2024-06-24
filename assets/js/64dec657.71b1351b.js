"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6642],{94461:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var n=a(85893),s=a(11151),o=a(74866),i=a(85162);const r={title:"Set & Query Cache"},c=void 0,l={id:"tutorial/cache/set-and-query",title:"Set & Query Cache",description:"The cache also supports updating and querying, As we mentioned in cache mode, each cached data is saved with the method instance that sends the request as the key, so the method instance will also be used when updating the cache manually to find the corresponding cached data.",source:"@site/versioned_docs/version-2.x/tutorial/04-cache/05-set-and-query.md",sourceDirName:"tutorial/04-cache",slug:"/tutorial/cache/set-and-query",permalink:"/tutorial/cache/set-and-query",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/04-cache/05-set-and-query.md",tags:[],version:"2.x",sidebarPosition:5,frontMatter:{title:"Set & Query Cache"},sidebar:"tutorial",previous:{title:"Force Request",permalink:"/tutorial/cache/force-request"},next:{title:"Controlled Cache",permalink:"/tutorial/cache/controlled-cache"}},d={},h=[{value:"Update static cache data",id:"update-static-cache-data",level:2},{value:"Dynamically set cache data",id:"dynamically-set-cache-data",level:2},{value:"Abort to set cache",id:"abort-to-set-cache",level:2},{value:"Cache query",id:"cache-query",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The cache also supports updating and querying, As we mentioned in ",(0,n.jsx)(t.a,{href:"/tutorial/cache/mode",children:"cache mode"}),", each cached data is saved with the method instance that sends the request as the key, so the method instance will also be used when updating the cache manually to find the corresponding cached data."]}),"\n",(0,n.jsx)(t.h2,{id:"update-static-cache-data",children:"Update static cache data"}),"\n",(0,n.jsxs)(o.Z,{groupId:"framework",children:[(0,n.jsx)(i.Z,{value:"1",label:"vue composition",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<template>\n  <button @click=\"handleTodolistToggle\">Switch date, hit cache</button>\n</template>\n<script setup>\n  import { setCache } from 'alova';\n  import { ref } from 'vue';\n\n  const getTodoListByDate = dateList =>\n    alovaInstance.Get('/todo/list/dates', {\n      params: { dateList }\n    });\n  // Get 5 days of data in batches during initialization\n  const dates = ref(['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']);\n  const {\n    //...\n    onSuccess\n  } = useWatcher(() => getTodoListByDate(dates.value.join()), [dates], {\n    immediate: true\n  });\n  onSuccess(todoListDates => {\n    if (todoListDates.length <= 1) {\n      return;\n    }\n\n    // highlight-start\n    // By default, the data of these 5 days will be cached together in a key\n    // In order to make subsequent requests for data of a certain day also hit the cache, we can disassemble the data of 5 days into days, and manually set the response cache successively through setCache\n    todoListDates.forEach(todoDate => {\n      // setCache parameter description:\n      // Parameter 1: method instance object, which is used to specify the key of the cache\n      // Parameter 2: Cache data\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\n    });\n    // highlight-end\n  });\n\n  // highlight-start\n  const handleTodolistToggle = () => {\n    // At this time, when the switching date is May 1, it will hit the response cache we manually set.\n    // The dates value is being monitored by useWatcher, so changing it can automatically trigger the request\n    dates.value = ['2022-05-01'];\n  };\n  // highlight-end\n<\/script>\n"})})}),(0,n.jsx)(i.Z,{value:"2",label:"react",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:"import { setCache } from 'alova';\nimport { useState } from 'react';\n\nconst getTodoListByDate = dateList =>\n  alovaInstance.Get('/todo/list/dates', {\n    params: { dateList }\n  });\n\nconst App = () => {\n  // Get 5 days of data in batches during initialization\n  const [dates, setDates] = useState([\n    '2022-05-01',\n    '2022-05-02',\n    '2022-05-03',\n    '2022-05-04',\n    '2022-05-05'\n  ]);\n  const {\n    //...\n    onSuccess\n  } = useWatcher(() => getTodoListByDate(dates.join()), [dates], {\n    immediate: true\n  });\n  onSuccess(todoListDates => {\n    if (todoListDates.length <= 1) {\n      return;\n    }\n\n    // highlight-start\n    // By default, the data of these 5 days will be cached together in a key\n    // In order to make subsequent requests for data of a certain day also hit the cache, we can disassemble the data of 5 days into days, and manually set the response cache one by one through setCache\n    // The first parameter of setCache is the method instance object, which is used to specify the key of the cache\n    // The second parameter is the cached data\n    todoListDates.forEach(todoDate => {\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\n    });\n    // highlight-end\n  });\n\n  // highlight-start\n  const handleTodolistToggle = () => {\n    // At this time, when the switching date is May 1, it will hit the response cache we manually set.\n    // The dates value is being monitored by useWatcher, so changing it can automatically trigger the request\n    setDates(['2022-05-01']);\n  };\n  // highlight-end\n\n  return <button onClick={handleTodolistToggle}>Switch date, hit cache</button>;\n};\n"})})}),(0,n.jsx)(i.Z,{value:"3",label:"svelte",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<script>\n  import { setCache } from 'alova';\n  import { writable } from 'svelte/store';\n\n  const getTodoListByDate = dateList =>\n    alovaInstance.Get('/todo/list/dates', {\n      params: { dateList }\n    });\n  // Get 5 days of data in batches during initialization\n  const dates = writable([\n    '2022-05-01',\n    '2022-05-02',\n    '2022-05-03',\n    '2022-05-04',\n    '2022-05-05'\n  ]);\n  const {\n    //...\n    onSuccess\n  } = useWatcher(() => getTodoListByDate($dates.join()), [dates], {\n    immediate: true\n  });\n  onSuccess(todoListDates => {\n    if (todoListDates.length <= 1) {\n      return;\n    }\n\n    // highlight-start\n    // By default, the data of these 5 days will be cached together in a key\n    // In order to make subsequent requests for data of a certain day also hit the cache, we can disassemble the data of 5 days into days, and manually set the response cache one by one through setCache\n    // The first parameter of setCache is the method instance object, which is used to specify the key of the cache\n    // The second parameter is the cached data\n    todoListDates.forEach(todoDate => {\n      setCache(getTodoListByDate(todoDate.date), [todoDate]);\n    });\n    // highlight-end\n  });\n\n  // highlight-start\n  const handleTodolistToggle = () => {\n    // At this time, when the switching date is May 1, it will hit the response cache we manually set.\n    // The dates value is being monitored by useWatcher, so changing it can automatically trigger the request\n    $dates = ['2022-05-01'];\n  };\n  // highlight-end\n<\/script>\n<button on:click=\"{handleTodolistToggle}\">Switch date, hit cache</button>\n"})})}),(0,n.jsx)(i.Z,{value:"4",label:"vue options",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:"<template>\n  <button @click=\"handleTodolistToggle\">Switch date, hit cache</button>\n</template>\n<script>\n  import { setCache, useWatcher } from 'alova';\n  import { mapAlovaHook } from '@alova/vue-options';\n\n  const getTodoListByDate = dateList =>\n    alovaInstance.Get('/todo/list/dates', {\n      params: { dateList }\n    });\n\n  export default {\n    mixins: mapAlovaHook(function () {\n      return {\n        todo: useWatcher(() => getTodoListByDate(this.dates.join()), ['dates'], {\n          immediate: true\n        })\n      };\n    }),\n    data() {\n      return {\n        // Get 5 days of data in batches during initialization\n        dates: ['2022-05-01', '2022-05-02', '2022-05-03', '2022-05-04', '2022-05-05']\n      };\n    },\n    mounted() {\n      this.todo$onSuccess(({ data: todoListDates }) => {\n        if (todoListDates.length <= 1) {\n          return;\n        }\n\n        // highlight-start\n        // By default, the data of these 5 days will be cached together in a key\n        // In order to make subsequent requests for data of a certain day also hit the cache, we can disassemble the data of 5 days into days, and manually set the response cache successively through setCache\n        todoListDates.forEach(todoDate => {\n          // setCache parameter description:\n          // Parameter 1: method instance object, which is used to specify the key of the cache\n          // Parameter 2: Cache data\n          setCache(getTodoListByDate(todoDate.date), [todoDate]);\n        });\n        // highlight-end\n      });\n    },\n    methods: {\n      // highlight-start\n      handleTodolistToggle() {\n        // At this time, when the switching date is May 1, it will hit the response cache we manually set.\n        // The dates value is being monitored by useWatcher, so changing it can automatically trigger the request\n        this.dates = ['2022-05-01'];\n      }\n      // highlight-end\n    }\n  };\n<\/script>\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"dynamically-set-cache-data",children:"Dynamically set cache data"}),"\n",(0,n.jsxs)(t.p,{children:["You can also pass in a callback function in ",(0,n.jsx)(t.code,{children:"setCache"})," to dynamically calculate the cache data and return the cache data that needs to be updated."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"setCache(getTodoListByDate('2022-10-01'), oldCache => {\n  // Return the data that needs to be cached\n  return {\n    ...oldCache,\n    expire: isAfter('2022-10-01', new Date())\n  };\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Similarly, you can also dynamically find method instances through ",(0,n.jsx)(t.a,{href:"/tutorial/advanced/method-matcher",children:"method instance matcher"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"setCache(\n  {\n    name: 'todoList',\n    filter: (method, index, ary) => {\n      return index < 5;\n    }\n  },\n  'newCache'\n);\n"})}),"\n",(0,n.jsx)(t.h2,{id:"abort-to-set-cache",children:"Abort to set cache"}),"\n",(0,n.jsxs)(t.p,{children:["Sometimes you need to dynamically determine whether to update the cache. If no data is returned in the callback function of ",(0,n.jsx)(t.code,{children:"setCache"}),", or ",(0,n.jsx)(t.code,{children:"undefined"})," is returned, the original cache data will not be updated at this time"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"setCache(getTodoListByDate('2022-10-01'), oldCache => {\n  const isExpired = isAfter('2022-10-01', new Date());\n  if (!isExpired) {\n    return; // abort cache updating when return the undefined\n  }\n  return null; // update the cache to null\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"cache-query",children:"Cache query"}),"\n",(0,n.jsx)(t.p,{children:"At the same time, we also provide a cache query method."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { queryCache } from 'alova';\n\nconst cacheData = queryCache(getTodoListByDate('2022-10-01'));\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can also dynamically find method instances via ",(0,n.jsx)(t.a,{href:"/tutorial/advanced/method-matcher",children:"method instance matcher"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const cacheData = queryCache({\n  name: 'todoList',\n  filter: (method, index, ary) => {\n    return index < 5;\n  }\n});\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>i});a(67294);var n=a(90512);const s={tabItem:"tabItem_Ymn6"};var o=a(85893);function i(e){let{children:t,hidden:a,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>j});var n=a(67294),s=a(90512),o=a(12466),i=a(16550),r=a(20469),c=a(91980),l=a(67392),d=a(20812);function h(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:s}}=e;return{value:t,label:a,attributes:n,default:s}}))}(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const s=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,o=u(e),[i,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,h]=p({queryString:a,groupId:s}),[g,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,d.Nk)(a);return[s,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:s}),y=(()=>{const e=l??g;return m({value:e,tabValues:o})?e:null})();(0,r.Z)((()=>{y&&c(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),f(e)}),[h,f,o]),tabValues:o}}var f=a(72389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(85893);function v(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),s=r[a].value;s!==n&&(l(t),i(s))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t),children:r.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:h,onClick:d,...o,className:(0,s.Z)("tabs__item",y.tabItem,o?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:s}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(w,{...t,...e})]})}function j(e){const t=(0,f.Z)();return(0,b.jsx)(x,{...e,children:h(e.children)},String(t))}},11151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>i});var n=a(67294);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);