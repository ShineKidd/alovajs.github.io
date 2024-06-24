"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[972],{12636:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=n(85893),a=n(11151);const o={title:"Update states across components"},i=void 0,d={id:"tutorial/client/in-depth/update-across-components",title:"Update states across components",description:"Client useHook",source:"@site/docs/tutorial/03-client/02-in-depth/01-update-across-components.md",sourceDirName:"tutorial/03-client/02-in-depth",slug:"/tutorial/client/in-depth/update-across-components",permalink:"/next/tutorial/client/in-depth/update-across-components",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/02-in-depth/01-update-across-components.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Update states across components"},sidebar:"tutorial",previous:{title:"Request rate limit",permalink:"/next/tutorial/client/strategy/rate-limit-middleware"},next:{title:"Method Matcher",permalink:"/next/tutorial/client/in-depth/method-matcher"}},r={},c=[{value:"Use method instance to find response states",id:"use-method-instance-to-find-response-states",level:2},{value:"Dynamically update response states",id:"dynamically-update-response-states",level:2},{value:"Listen for matching events",id:"listen-for-matching-events",level:2},{value:"Notes",id:"notes",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{title:"usage scope",type:"info",children:(0,s.jsx)(t.p,{children:"Client useHook"})}),"\n",(0,s.jsxs)(t.p,{children:["There is a scenario where when the user clicks on an item in the todo list, enters the todo details page and edits it, at this time we hope that the todo list data on the previous page will also be updated without resetting the situation. For edited content, ",(0,s.jsx)(t.code,{children:"useFetcher"})," is no longer applicable."]}),"\n",(0,s.jsxs)(t.p,{children:["At this time, you can use ",(0,s.jsx)(t.code,{children:"updateState"})," to update the existing responsive state under any module/page. It can find and modify the responsive state in other modules."]}),"\n",(0,s.jsx)(t.h2,{id:"use-method-instance-to-find-response-states",children:"Use method instance to find response states"}),"\n",(0,s.jsxs)(t.p,{children:["When determining the method instance corresponding to the updated response state, you can pass in this method instance in ",(0,s.jsx)(t.code,{children:"updateState"}),". It will find whether there is a corresponding response state under this instance and provide it to you for modification in the callback function. Finally Just return the modified data."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { updateState } from 'alova';\n\n//Todo item being edited\nconst editingTodo = {\n  id: 1,\n  title: 'todo1',\n  time: '09:00'\n};\n\nconst { send, onSuccess } = useRequest(createTodoPoster, { immediate: false });\nonSuccess(() => {\n  // highlight-start\n  // Fixed modification of todo data on the first page\n  // updateState will return whether the update is successful\n  const updated = updateState(getTodoList(1), todoList => {\n    return todoList.map(item => {\n      if (item.id === editingTodo.id) {\n        return {\n          ...item,\n          ...editingTodo\n        };\n      }\n      return item;\n    });\n  });\n  // highlight-end\n});\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"note",type:"warning",children:(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["When updating the state through ",(0,s.jsx)(t.code,{children:"updateState"}),", if the cache (memory cache and persistent cache) is detected, the new data update cache will also be updated."]}),"\n",(0,s.jsx)(t.li,{children:"Only when a request has been initiated using useRequest or useWatcher, alova will manage the states returned by the hook. The reason is that the response states is generated and saved through a Method instance, but when no request is initiated, the url and URL in the Method instance are Parameters such as params, query, and headers are still uncertain."}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"dynamically-update-response-states",children:"Dynamically update response states"}),"\n",(0,s.jsxs)(t.p,{children:["Maybe sometimes you are not sure that you need to update the response states under the method, but you know how to find the cached data that needs to be invalidated. We can use ",(0,s.jsx)(t.a,{href:"/next/tutorial/client/in-depth/method-matcher",children:"Method instance matcher"})," to dynamically Find the corresponding method instance. The following example shows adding a piece of data to the list corresponding to the method instance named todoList."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"updateState('todoList', todoListRaw => {\n  todoListRaw.push({\n    title: 'new todo',\n    time: '10:00'\n  });\n  return todoListRaw;\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"/next/tutorial/client/in-depth/method-matcher",children:"Method instance matcher"})," will be introduced in detail in subsequent chapters."]}),"\n",(0,s.jsx)(t.h2,{id:"listen-for-matching-events",children:"Listen for matching events"}),"\n",(0,s.jsxs)(t.p,{children:["When dynamically updating the response state, sometimes you may want to do some processing when a method instance is matched, or you may want to obtain the matching method instance. ",(0,s.jsx)(t.code,{children:"updateState"})," can also pass in a third parameter to set a matching event to achieve these purposes. ."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"updateState(\n  'todoList',\n  todoListRaw => {\n    // ...\n  },\n  {\n    // Called when a method instance is matched, and the parameter is the matched method instance.\n    onMatch: method => {\n      // ...\n    }\n  }\n);\n"})}),"\n",(0,s.jsxs)(t.admonition,{title:"\u26a0\ufe0f Please make sure the component is not destroyed",type:"warning",children:[(0,s.jsxs)(t.p,{children:["By default, ",(0,s.jsx)(t.code,{children:"updateState"})," will look for the response state created by alova's useHooks when sending a request. However, to prevent memory overflow, the destruction of a component will also recycle all the states created internally, so please make sure you use ",(0,s.jsx)(t.code,{children:"updateState"})," It is hoped that the container component corresponding to the updated response states has not been destroyed, otherwise the corresponding response states will not be found and the update will fail."]}),(0,s.jsx)(t.p,{children:"This problem often occurs when updating states across pages. What we tend to overlook is that by default, the previous page has been destroyed when the page jumps. Therefore, if you want to update states across pages, here are two suggestions:"}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Persist the page components to ensure that the updated states can still be found;"}),"\n",(0,s.jsxs)(t.li,{children:["Use ",(0,s.jsx)(t.a,{href:"/next/tutorial/cache/set-and-query",children:"setCache"})," instead of ",(0,s.jsx)(t.code,{children:"updateState"}),". The principle is that when the request for the previous page exists in the cache, update its cache to ensure that when the page is created again, the The request can hit the updated cache to achieve the same effect."]}),"\n"]})]}),"\n",(0,s.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["In actual use, whether you use ",(0,s.jsx)(t.code,{children:"useRequest"})," or ",(0,s.jsx)(t.code,{children:"useWatcher"})," to send a request, you can call the ",(0,s.jsx)(t.code,{children:"send"})," function to specify different parameters to send the request repeatedly. The response states returned by these use hooks will be used by multiple method instances. Reference, so you can choose any method instance to match the same response states value;"]}),"\n",(0,s.jsx)(t.li,{children:"When dynamically searching and updating the response states, the method instance matcher finds multiple method instances, and the first instance will prevail;"}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>i});var s=n(67294);const a={},o=s.createContext(a);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);