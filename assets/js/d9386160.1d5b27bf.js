"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6684],{67735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var a=n(85893),i=n(11151),s=n(74866),r=n(85162);const o={title:"Step 2 - Adjust Response Handling"},l=void 0,d={id:"tutorial/strategy/sensorless-data-interaction/modify-response",title:"Step 2 - Adjust Response Handling",description:"In the conservative request example in the previous section, we called fetch to re-fetch the refreshed page after creating, editing, and deleting requests for Todo items. In order to display the results immediately after the operation, we need to make the following adjustments:",source:"@site/versioned_docs/version-2.x/tutorial/05-strategy/01-sensorless-data-interaction/05-modify-response.md",sourceDirName:"tutorial/05-strategy/01-sensorless-data-interaction",slug:"/tutorial/strategy/sensorless-data-interaction/modify-response",permalink:"/tutorial/strategy/sensorless-data-interaction/modify-response",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/05-strategy/01-sensorless-data-interaction/05-modify-response.md",tags:[],version:"2.x",sidebarPosition:5,frontMatter:{title:"Step 2 - Adjust Response Handling"},sidebar:"tutorial",previous:{title:"Step 1 - Implement features with conservative requests",permalink:"/tutorial/strategy/sensorless-data-interaction/conservative-request"},next:{title:"Step 3 - Set Request Retry",permalink:"/tutorial/strategy/sensorless-data-interaction/request-retry"}},c={},u=[{value:"Set behavior mode",id:"set-behavior-mode",level:2},{value:"Silent queue description",id:"silent-queue-description",level:2},{value:"Manually update the list in the callback",id:"manually-update-the-list-in-the-callback",level:2},{value:"Update the list after adding/editing",id:"update-the-list-after-addingediting",level:3},{value:"Update list after removal",id:"update-list-after-removal",level:3},{value:"Save the operation record",id:"save-the-operation-record",level:2},{value:"create/edit success callback",id:"createedit-success-callback",level:3},{value:"delete success callback",id:"delete-success-callback",level:3},{value:"Precautions",id:"precautions",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In the conservative request example in the previous section, we called ",(0,a.jsx)(t.code,{children:"fetch"})," to re-fetch the refreshed page after creating, editing, and deleting requests for Todo items. In order to display the results immediately after the operation, we need to make the following adjustments:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Set the behavior mode of create, edit and delete requests to ",(0,a.jsx)(t.code,{children:"silent"}),", they will trigger the success callback immediately when the request is made;"]}),"\n",(0,a.jsx)(t.li,{children:"Manually update the list, instead of pulling data, use virtual data to occupy the response data of the server;"}),"\n",(0,a.jsx)(t.li,{children:"Save operation records for data compensation when refreshing the page;"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"set-behavior-mode",children:"Set behavior mode"}),"\n",(0,a.jsxs)(t.p,{children:["Set by configuring the parameter ",(0,a.jsx)(t.code,{children:"behavior"}),", the optional parameters are ",(0,a.jsx)(t.code,{children:"queue"}),", ",(0,a.jsx)(t.code,{children:"silent"}),", ",(0,a.jsx)(t.code,{children:"static"}),", or a function that returns behavior data to dynamically set the behavior mode, the default is ",(0,a.jsx)(t.code,{children:"queue"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The following sets the behavior parameters statically."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"useSQRequest(createOrEditTodo, {\n  // highlight-start\n  behavior: 'silent',\n  // highlight-end\n  immediate: false\n});\n"})}),"\n",(0,a.jsx)(t.p,{children:"The following is to dynamically set the behavior parameter."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const { send } = useSQRequest(createOrEditTodo, {\n  // highlight-start\n  // The arg parameter can be passed in through the send function\n  behavior: arg => {\n    if (arg === 0) return 'silent';\n    return 'queue';\n  },\n  // highlight-end\n  immediate: false\n});\n"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"When behavior is set as a function, it will be called every time a request is initiated to determine which behavior to process this request."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"silent-queue-description",children:"Silent queue description"}),"\n",(0,a.jsxs)(t.p,{children:["After setting the behavior parameter to ",(0,a.jsx)(t.code,{children:"queue"})," or ",(0,a.jsx)(t.code,{children:"silent"}),", the request will enter the silent queue and wait for the request to be initiated. By default, they will enter the queue named ",(0,a.jsx)(t.code,{children:"default"}),". You can also specify other queues to save silentMethod instances. without interfering with each other."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"useSQRequest(createOrEditTodo, {\n  // highlight-start\n  // The specified request information enters the queue named queue-2\n  queue: 'queue-2',\n  // highlight-end\n  behavior: 'silent',\n  immediate: false\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"manually-update-the-list-in-the-callback",children:"Manually update the list in the callback"}),"\n",(0,a.jsx)(t.h3,{id:"update-the-list-after-addingediting",children:"Update the list after adding/editing"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsxs)(r.Z,{value:"1",label:"Page is not destroyed",children:[(0,a.jsxs)(t.p,{children:["When the list page is not destroyed, such as using the modal box operation on the current page, or using ",(0,a.jsx)(t.code,{children:"<keep-alive>"})," (Vue) to keep the page components, the data will still exist. At this time, we use ",(0,a.jsx)(t.strong,{children:"updateStateEffect"})," to Update the list data. Compared with the ",(0,a.jsx)(t.strong,{children:"updateState"})," exported by alova, it has the function of tracking virtual data. When the response data is obtained, it will automatically track the virtual data in the list data and replace it with the actual data."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { useSQRequest, updateStateEffect } from '@alova/scene-*';\nimport { createOrEditTodo, todoList } from './api.js';\n\nconst { onSuccess } = useSQRequest(createOrEditTodo, {\n  behavior: 'silent',\n  immediate: false,\n\n  // highlight-start\n  // Before processing list updates, it is necessary to construct virtual response data of the same structure according to the structure of the response data\n  // For example, when creating a Todo item, the id of this piece of data will be returned.\n  silentDefaultResponse: () => {\n    return {\n      id: '--'\n    };\n  }\n  // highlight-end\n});\n\n// highlight-start\nonSuccess(({ data, silentMethod }) => {\n  // Construct list data items\n  const editingItem = {\n    ...detail,\n\n    // When editing, use the original id, otherwise use the id in the response data\n    // When submitting silently, data.id is virtual data, and when in static behavior mode, data.id is the actual id value\n    id: id || data.id\n  };\n\n  // use updateStateEffect instead of updateState\n  updateStateEffect(todoList(), todoListRaw => {\n    if (id) {\n      todoListRaw = todoListRaw.map(item => (item.id === id ? editingItem : item));\n    } else {\n      todoListRaw.unshift(editingItem);\n    }\n    return todoListRaw;\n  });\n});\n// highlight-end\n"})}),(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsxs)(t.p,{children:["updateStateEffect is used in the same way as ",(0,a.jsx)(t.a,{href:"/tutorial/advanced/update-across-components",children:"updateState"})]}),"\n"]})]}),(0,a.jsxs)(r.Z,{value:"2",label:"Page has been destroyed",children:[(0,a.jsxs)(t.p,{children:["When the list page has been destroyed and the data has been released, such as jumping to a new page, use ",(0,a.jsx)(t.strong,{children:"setCache"})," to update the cache data. When the list page is returned, the request will be re-initiated and the updated cache will be hit."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { useSQRequest, setCache, equals } from '@alova/scene-*';\nimport { createOrEditTodo, todoList } from './api.js';\n\nconst urlParams = new URLSearchParams(window.location.search);\nconst id = urlParams.get('id') || '';\nconst { onSuccess } = useSQRequest(createOrEditTodo, {\n   behavior: 'silent',\n   immediate: false,\n\n   // highlight-start\n   // Before processing list updates, it is necessary to construct virtual response data of the same structure according to the structure of the response data\n   // For example, when creating a Todo item, the id of this piece of data will be returned.\n   silentDefaultResponse: () => {\n     return {\n       id: '--'\n     };\n   }\n   // highlight-end\n});\n// highlight-start\nonSuccess(({ data, silentMethod }) => {\n   // Construct list data items\n   const editingItem = {\n     ...detail,\n\n     // When editing, use the original id, otherwise use the id in the response data\n     // When submitting silently, data.id is virtual data, and when in static behavior mode, data.id is the actual id value\n     id: id || data.id\n   };\n\n   const method TodoList = todoList();\n   setCache(methodTodoList, todoListRaw => {\n     if (id) {\n       todoListRaw = todoListRaw.map(item => (equals(item.id, id) ? editingItem : item));\n     } else {\n       todoListRaw.unshift(editingItem);\n     }\n     return todoListRaw;\n   });\n   // Call setUpdateState to set response data tracking, so as to achieve the same delayed update effect as updateStateEffect\n   if (silentMethod) {\n     silentMethod.setUpdateState(methodTodoList);\n     silentMethod.save();\n   }\n});\n// highlight-end\n"})})]})]}),"\n",(0,a.jsx)(t.h3,{id:"update-list-after-removal",children:"Update list after removal"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"import { useSQRequest, updateStateEffect } from '@alova/scene-*';\nimport { deleteTodo, todoList } from './api.js';\n\nconst { loading, data, send, onSuccess } = useSQRequest(deleteTodo, {\n  immediate: false,\n  // highlight-start\n  behavior: 'silent'\n  // highlight-end\n});\n\nonSuccess(({ sendArgs: [deletingId] }) => {\n  updateStateEffect(todoList(), todoListRaw =>\n    todoListRaw.filter(item => item.id !== deletingId)\n  );\n});\n\n// Event callback triggers delete request\nconst handleDelete = deletingId => {\n  send(deletingId);\n};\n"})}),"\n",(0,a.jsx)(t.h2,{id:"save-the-operation-record",children:"Save the operation record"}),"\n",(0,a.jsx)(t.p,{children:"It is not enough to just update the list manually. We also need to consider that when the network is restored and there are still waiting requests in the request queue, the list data loaded at this time does not include the part of the unsubmitted request, which will cause certain problems for the user. Puzzled:"}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:'"I have clearly added multiple pieces of data, why is it not in the list?"'}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Therefore, we need to record the operation and related data in the success callback, so that when the list data is loaded again, the uncommitted data will be manually compensated to the list, so that the list data will always be kept up-to-date."}),"\n",(0,a.jsx)(t.p,{children:"Saving operation records is also very simple, you only need to mount the relevant data to the silentMethod instance, and it will be persisted along with the instance."}),"\n",(0,a.jsx)(t.h3,{id:"createedit-success-callback",children:"create/edit success callback"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"//...\nonSuccess(({ silentMethod }) => {\n  // Construct list data items\n  const editingItem = {\n    ...detail,\n    id: id || data.id\n  };\n  //...\n  // highlight-start\n  if (silentMethod) {\n    // Set the name for subsequent queries\n    // If editingItem.id is virtual data will be automatically converted to its id\n    silentMethod.entity.setName('edit' + editingItem.id);\n    silentMethod.reviewData = {\n      operate: id ? 'edit' : 'add',\n      data: editingItem\n    };\n    silentMethod.save();\n  }\n  // highlight-end\n});\n"})}),"\n",(0,a.jsx)(t.h3,{id:"delete-success-callback",children:"delete success callback"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"//...\nonSuccess(({ sendArgs: [deletingId], silentMethod }) => {\n  //...\n  // highlight-start\n  if (silentMethod) {\n    silentMethod.reviewData = {\n      operate: 'delete',\n      data: {\n        id: deletingId\n      }\n    };\n    silentMethod.save();\n  }\n  // highlight-end\n});\n"})}),"\n",(0,a.jsx)(t.h3,{id:"precautions",children:"Precautions"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["In the onSuccess callback function, silentMethod has a value only in the ",(0,a.jsx)(t.code,{children:"queue"})," and ",(0,a.jsx)(t.code,{children:"silent"})," behavior modes;"]}),"\n",(0,a.jsxs)(t.li,{children:["Generally speaking, you can use ",(0,a.jsx)(t.code,{children:"silentMethod.a = ..."})," or ",(0,a.jsx)(t.code,{children:"silentMethod.b = ..."})," to save operation records, but it will report an error in typescript, so ",(0,a.jsx)(t.em,{children:"reviewData"})," is specially provided as a silent Submit the save attribute of the operation record;"]}),"\n",(0,a.jsxs)(t.li,{children:["After modifying the silentMethod data, you need to save the modification through ",(0,a.jsx)(t.code,{children:"silentMethod.save()"}),";"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The next step is to set retry parameters on silent submit requests."})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var a=n(90512);const i={tabItem:"tabItem_Ymn6"};var s=n(85893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,r),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(67294),i=n(90512),s=n(12466),r=n(16550),o=n(20469),l=n(91980),d=n(67392),c=n(20812);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const i=(0,r.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[d,u]=m({queryString:n,groupId:i}),[g,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,c.Nk)(n);return[i,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),v=(()=>{const e=d??g;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(85893);function j(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==a&&(d(t),r(i))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,i.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=g(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(j,{...t,...e}),(0,b.jsx)(x,{...t,...e})]})}function y(e){const t=(0,f.Z)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(67294);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);