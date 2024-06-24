"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4738],{58514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(85893),o=n(11151);n(74866),n(85162);const a={title:"Process Response"},s=void 0,l={id:"tutorial/combine-framework/response",title:"Process Response",description:"After the request is completed, the response data will be processed through multiple processes before the final data is obtained at the location where the request was sent. The process is as follows:",source:"@site/versioned_docs/version-2.x/tutorial/03-combine-framework/05-response.md",sourceDirName:"tutorial/03-combine-framework",slug:"/tutorial/combine-framework/response",permalink:"/tutorial/combine-framework/response",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/03-combine-framework/05-response.md",tags:[],version:"2.x",sidebarPosition:5,frontMatter:{title:"Process Response"},sidebar:"tutorial",previous:{title:"Initial Data",permalink:"/tutorial/combine-framework/initial-data"},next:{title:"Abort Request",permalink:"/tutorial/combine-framework/abort-request"}},i={},c=[{value:"Transform response data",id:"transform-response-data",level:2},{value:"Bind response callback",id:"bind-response-callback",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"After the request is completed, the response data will be processed through multiple processes before the final data is obtained at the location where the request was sent. The process is as follows:"}),"\n",(0,r.jsx)(t.mermaid,{value:"flowchart LR\n   classDef condition fill:#a8bcff\n\n   R1[Response successfully] --\x3e global.onSuccess\n   global.onSuccess --\x3e global.onComplete\n   global.onSuccess --\x3e throw{Is an error thrown? }:::condition\n   throw --\x3e|No| method.transformData\n   method.transformData --\x3e useHook.onSuccess\n   throw --\x3e|Yes| useHook.onError\n\n   method.transformData --\x3e throw2{Is an error thrown? }:::condition\n   throw2 --\x3e|No| useHook.onSuccess\n   throw2 --\x3e|Yes| useHook.onError\n\n   useHook.onSuccess --\x3e throw3{Throw an error? }:::condition\n   throw3 --\x3e|Yes| useHook.onError\n\n   R2[Response Error] --\x3e global.onError\n   global.onError --\x3e global.onComplete\n   global.onError --\x3e throw4{Is an error thrown? }:::condition\n   throw4 --\x3e|Yes| useHook.onError\n   throw4 --\x3e|No| method.transformData"}),"\n",(0,r.jsx)(t.p,{children:"When no error is thrown, the next node receives the return value of the previous node."}),"\n",(0,r.jsx)(t.h2,{id:"transform-response-data",children:"Transform response data"}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.a,{href:"/tutorial/getting-started/method",children:"method detailed explanation"}),", we have already learned about ",(0,r.jsx)(t.code,{children:"transformData"}),", which is also very useful when used in useHook. It allows useHook's data to receive the transformed data without transform again."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const todoListGetter = alovaInstance.Get('/todo/list', {\n   // The function accepts raw data and response header objects, and requires the transformed data to be returned, which will be assigned to the data state.\n   // Note: rawData is the data filtered by the global response interceptor (if it is set). For the configuration of the response interceptor, please refer to the [Setting the Global Response Interceptor] chapter.\n   transformData(rawData, headers) {\n     return rawData.list.map(item => ({\n       ...item,\n       statusText: item.done ? 'Completed' : 'In progress'\n     });\n   }\n});\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const { data } = useRequest(todoListGetter);\nconst { data } = useWatcher(() => todoListGetter, [userInfo]);\n"})}),"\n",(0,r.jsx)(t.p,{children:"The data value will receive the transformed data format."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"type data = {\n  // ...\n  statusText: 'Completed' | 'In progress';\n}[];\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"note",type:"warning",children:(0,r.jsxs)(t.p,{children:["When used in usehooks, throwing an error in ",(0,r.jsx)(t.code,{children:"transformData"})," will also trigger ",(0,r.jsx)(t.code,{children:"onError"}),";"]})}),"\n",(0,r.jsx)(t.h2,{id:"bind-response-callback",children:"Bind response callback"}),"\n",(0,r.jsx)(t.p,{children:"If you need to set a request callback, you can also receive the callback setting function in the return parameter of useHooks, as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const {\n  // ...\n\n  //Successful callback binding\n  onSuccess,\n\n  // Failure callback binding\n  onError,\n\n  // Complete the callback binding, the callback will be called on success or failure\n  onComplete\n} = useRequest(todoListGetter); // Also applicable to useWatcher\nonSuccess(event => {\n  console.log('The request was successful, the response data is:', event.data);\n  console.log('The method instance of this request is:', event.method);\n  console.log('Whether the response data comes from the cache:', event.fromCache);\n});\nonError(event => {\n  console.log('The request failed, the error message is:', event.error);\n  console.log('The method instance of this request is:', event.method);\n});\nonComplete(event => {\n  // event.status is success when it succeeds and error when it fails.\n  console.log('The request is completed, the status is: ', event.status);\n  console.log('The method instance of this request is:', event.method);\n  console.log('Whether the response data comes from the cache:', event.fromCache);\n  if (event.data) {\n    console.log('Request data:', event.data);\n  } else if (event.error) {\n    console.log('Error message:', event.error);\n  }\n});\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"Hint",type:"note",children:(0,r.jsxs)(t.p,{children:["Throwing an error in ",(0,r.jsx)(t.code,{children:"onSuccess"})," will trigger ",(0,r.jsx)(t.code,{children:"onError"}),"."]})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(90512);const o={tabItem:"tabItem_Ymn6"};var a=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(67294),o=n(90512),a=n(12466),s=n(16550),l=n(20469),i=n(91980),c=n(67392),u=n(20812);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=m({queryString:n,groupId:o}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,u.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),v=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function w(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),o=l[n].value;o!==r&&(c(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,o.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function k(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(w,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function j(e){const t=(0,b.Z)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var r=n(67294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);