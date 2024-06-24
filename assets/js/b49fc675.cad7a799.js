"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4442],{74188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=t(85893),o=t(11151),s=t(74866),r=t(85162);const l={title:"vue2/3 options"},i=void 0,c={id:"tutorial/framework/vue-options",title:"vue2/3 options",description:"Usually, use hook can only be used in vue's setup, but through the helper function provided by @alova/vue-options, you can also use alova's use hook in vue's options, which is perfectly compatible with almost all functions of alova.",source:"@site/versioned_docs/version-2.x/tutorial/09-framework/01-vue-options.md",sourceDirName:"tutorial/09-framework",slug:"/tutorial/framework/vue-options",permalink:"/tutorial/framework/vue-options",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/09-framework/01-vue-options.md",tags:[],version:"2.x",sidebarPosition:1,frontMatter:{title:"vue2/3 options"},sidebar:"tutorial",previous:{title:"Framework",permalink:"/category/framework"},next:{title:"solid",permalink:"/tutorial/framework/solid"}},d={},u=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"Map hook status and functions to vue instances",id:"map-hook-status-and-functions-to-vue-instances",level:3},{value:"Computed properties",id:"computed-properties",level:3},{value:"Watch hook status changes",id:"watch-hook-status-changes",level:3},{value:"Define single watch handler",id:"define-single-watch-handler",level:4},{value:"Batch define watch handlers",id:"batch-define-watch-handlers",level:4},{value:"Function description",id:"function-description",level:2},{value:"mapAlovaHook",id:"mapalovahook",level:3},{value:"mapWatcher",id:"mapwatcher",level:3},{value:"Type support",id:"type-support",level:2},{value:"Automatic inference",id:"automatic-inference",level:3},{value:"Add types for response data",id:"add-types-for-response-data",level:3},{value:"limit",id:"limit",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Usually, use hook can only be used in vue's setup, but through the helper function provided by ",(0,a.jsx)(n.code,{children:"@alova/vue-options"}),", you can also use alova's use hook in vue's options, which is perfectly compatible with almost all functions of alova."]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Available in both vue2 and vue3."}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/@alova/vue-options",children:(0,a.jsx)(n.img,{src:"https://img.shields.io/npm/v/@alova/vue-options",alt:"npm"})}),"\n",(0,a.jsx)(n.a,{href:"https://github.com/alovajs/vue-options/actions/workflows/release.yml",children:(0,a.jsx)(n.img,{src:"https://github.com/alovajs/vue-options/actions/workflows/release.yml/badge.svg?branch=main",alt:"build"})}),"\n",(0,a.jsx)(n.a,{href:"https://coveralls.io/github/alovajs/vue-options?branch=main",children:(0,a.jsx)(n.img,{src:"https://coveralls.io/repos/github/alovajs/vue-options/badge.svg?branch=main",alt:"coverage status"})}),"\n",(0,a.jsx)(n.img,{src:"https://badgen.net/badge/icon/typescript?icon=typescript&label",alt:"typescript"}),"\n",(0,a.jsx)(n.img,{src:"https://img.shields.io/badge/license-MIT-blue.svg",alt:"license"})]}),"\n",(0,a.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(r.Z,{value:"1",label:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install alova @alova/vue-options --save\n"})})}),(0,a.jsx)(r.Z,{value:"2",label:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add alova @alova/vue-options\n"})})})]}),"\n",(0,a.jsx)(n.admonition,{title:"alova requirements",type:"info",children:(0,a.jsx)(n.p,{children:"alova version >= 2.13.2"})}),"\n",(0,a.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.h3,{id:"map-hook-status-and-functions-to-vue-instances",children:"Map hook status and functions to vue instances"}),"\n",(0,a.jsxs)(n.p,{children:["First use ",(0,a.jsx)(n.code,{children:"vueOptionHook"})," to create an alova instance."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import { createAlova, Method } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport { VueOptionsHook } from '@alova/vue-options';\n\n// api.js\nconst alovaInst = createAlova({\n  baseURL: 'http://example.com',\n  statesHook: VueOptionsHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n\n/** @type {() => Method<unknown, unknown, { content: string, time: string }[]>} */\nexport const getData = () => alovaInst.Get('/todolist');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then use ",(0,a.jsx)(n.code,{children:"mapAlovaHook"})," to map the return value set of use hook to the component instance. The following is how to access the reactive state and operation functions:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["You can access responsive status such as ",(0,a.jsx)(n.code,{children:"loading/data/error"})," through the key of the collection, such as ",(0,a.jsx)(n.code,{children:"this.key.loading"}),", ",(0,a.jsx)(n.code,{children:"this.key.data"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["You can access the operation function through the key of the collection plus the function name, and use ",(0,a.jsx)(n.code,{children:"$"})," to splice it, such as ",(0,a.jsx)(n.code,{children:"this.key$send"}),", ",(0,a.jsx)(n.code,{children:"this.key$onSuccess"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Below is a complete example."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:"<template>\n  <div>\n    <span role=\"loading\">{{ todoRequest.loading ? 'loading' : 'loaded' }}</span>\n    <span role=\"error\">{{ todoRequest.error ? todoRequest.error.message : '' }}</span>\n    <div role=\"data\">{{ JSON.stringify(todoRequest.data) }}</div>\n    <button\n      @click=\"todoRequest$send\"\n      role=\"btnSend\">\n      send\n    </button>\n  </div>\n</template>\n\n<script>\n  import { useRequest } from 'alova';\n  import { mapAlovaHook } from '@alova/vue-options';\n  import { getData } from './api';\n\n  export default {\n    // mapAlovaHook will return the mixins array, and the usage of use hook is the same as before\n    mixins: mapAlovaHook(function (vm) {\n      // The component instance can be accessed through this or vm\n      // When using this, this callback function cannot be an arrow function\n      console.log(this, vm);\n      return {\n        todoRequest: useRequest(getData)\n      };\n    }),\n    created() {\n      this.todoRequest.loading;\n      this.todoRequest$send();\n      this.todoRequest$onSuccess(event => {\n        event.data.match;\n        event.sendArgs.copyWithin;\n      });\n      this.todoRequest$onSuccess(event => {\n        console.log('success', event);\n      });\n      this.todoRequest$onError(event => {\n        console.log('error', event);\n      });\n    },\n    mounted() {\n      this.todoRequest$onComplete(event => {\n        console.log('complete', event);\n      });\n    }\n  };\n<\/script>\n"})}),"\n",(0,a.jsx)(n.h3,{id:"computed-properties",children:"Computed properties"}),"\n",(0,a.jsx)(n.p,{children:"If you need to define a computed property that depends on hook-related request status, just write it as usual."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"export default {\n  computed: {\n    todoRequestLoading() {\n      return this.todoRequest.loading;\n    },\n    todoRequestData() {\n      return this.todoRequest.data;\n    }\n  }\n};\n"})}),"\n",(0,a.jsx)(n.h3,{id:"watch-hook-status-changes",children:"Watch hook status changes"}),"\n",(0,a.jsxs)(n.p,{children:["Due to the limitations of vue2, all hook states are mounted on an object named ",(0,a.jsx)(n.code,{children:"alovaHook$"}),", so you need to add the ",(0,a.jsx)(n.code,{children:"alovaHook$"})," prefix when listening."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"export default {\n  watch: {\n    // \u274cUnable to watch\n    'todoRequest.loading'(newVal, oldVal) {\n      // ...\n    },\n    // \u2705watching is work\n    'alovaHook$.todoRequest.loading'(newVal, oldVal) {\n      // ...\n    }\n  }\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["But this is a bit troublesome, so a ",(0,a.jsx)(n.code,{children:"mapWatcher"})," helper function is provided, which can not only automatically add prefixes, nested watching, but also batch watching."]}),"\n",(0,a.jsx)(n.h4,{id:"define-single-watch-handler",children:"Define single watch handler"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"export default {\n  watch: mapWatcher({\n    // Usage 1\n    'todoRequest.loading'(newVal, oldVal) {},\n\n    // Usage 2\n    todoRequest: {\n      loading(newVal, oldVal) {},\n      data(newVal, oldVal) {}\n    }\n  })\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Watching object is also supported."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"export default {\n  watch: mapWatcher({\n    todoRequest: {\n      data: {\n        handler(newVal, oldVal) {},\n        deep: true\n      }\n    }\n  })\n};\n"})}),"\n",(0,a.jsx)(n.h4,{id:"batch-define-watch-handlers",children:"Batch define watch handlers"}),"\n",(0,a.jsxs)(n.p,{children:["Multiple watching keys are separated by ",(0,a.jsx)(n.code,{children:","}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"export default {\n  watch: mapWatcher({\n    // Usage 1\n    'todoRequest1.data, todoRequest2.data'(newVal, oldVal) {},\n\n    // Usage 2\n    'todoRequest1, todoRequest2': {\n      loading(newVal, oldVal) {},\n      data(newVal, oldVal) {}\n    },\n\n    // Usage 3\n    todoRequest1: {\n      'loading, data'(newVal, oldVal) {}\n    },\n\n    // Usage 4\n    'todoRequest1, todoRequest2': {\n      'loading, data'(newVal, oldVal) {}\n    }\n  })\n};\n"})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"Batch watching also supports watching object."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"function-description",children:"Function description"}),"\n",(0,a.jsx)(n.h3,{id:"mapalovahook",children:"mapAlovaHook"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"mapAlovaHook"})," is used to map the state and function collection returned by alova's use hook to the vue component instance through mixins. It receives a callback function and returns the return value collection of use hook."]}),"\n",(0,a.jsxs)(n.p,{children:["It is worth noting that the callback function will be executed in the ",(0,a.jsx)(n.code,{children:"created"})," phase, and you can access the vue component instance in the following way."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// 1. Access the component instance through this. Note that the callback function cannot be an arrow function.\nmapAlovaHook(function () {\n  console.log(this);\n  return {\n    todoRequest: useRequest(getData)\n  };\n});\n\n// =======================\n// 2. Access the component instance through function parameters. In this case, arrow functions can be used\nmapAlovaHook(vm => {\n  console.log(vm);\n  return {\n    todoRequest: useRequest(getData)\n  };\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"mapwatcher",children:"mapWatcher"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"mapWatcher"})," is an helper function used to quickly define the watching handlers of hook states. It receives an object whose key is the key of the hook state or a string representation of the nested value, and whose value is the watching handler or watching object."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"mapWatcher({\n   'todoRequest.loading'(newVal, oldVal) {\n     //...\n   },\n   todoRequest: {\n     data(newVal, oldVal) {\n       //...\n     }\n   },\n   todoRequest: {\n     'loading, data'(newVal, oldVal) {\n       //...\n     }\n   }\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["In addition to supporting watching assistance for alova useHook, ",(0,a.jsx)(n.code,{children:"mapWatcher"})," can also be used to batch set watching handlers of custom states."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"export default {\n   data() {\n     state1: '',\n     state2: 0\n   },\n\n   // pass false at the second parameter to watch the custom states\n   watch: mapWatcher({\n    'state1, state2'(newVal, oldVal) {\n       //...\n     }\n   }, false)\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"type-support",children:"Type support"}),"\n",(0,a.jsx)(n.h3,{id:"automatic-inference",children:"Automatic inference"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@alova/vue-options"})," provides complete ts type support. Whether using typescript or not, the mapped value type will be automatically inferred, for example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"this.todoRequest.loading; // boolean\nthis.todoRequest.error; // Error | undefined\nthis.todoRequest.data; // any\nthis.todoRequest$send; // (...args: any[]) => Promise<any>\nthis.todoRequest$onSuccess; // (handler: SuccessHandler) => void\nthis.todoRequest$onError; // (handler: ErrorHandler) => void\nthis.todoRequest$onComplete; // (handler: CompleteHandler) => void\n// ...\n"})}),"\n",(0,a.jsx)(n.h3,{id:"add-types-for-response-data",children:"Add types for response data"}),"\n",(0,a.jsxs)(n.p,{children:["Except for ",(0,a.jsx)(n.code,{children:"this.todoRequest.data"}),", all other values have the correct type, so how to set the type for ",(0,a.jsx)(n.code,{children:"data"})," too? In fact, it is the same as alova used in other environments."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"javascript"})}),"\n",(0,a.jsxs)(n.p,{children:["In javascript, you can use type annotations to add types. The first two generic parameters of Method are ",(0,a.jsx)(n.code,{children:"unknown"}),", and the third generic parameter is the type of response data."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import { Method } from 'alova';\n\n/** @type {() => Method<unknown, unknown, { content: string, time: string }[]>} */\nexport const getData = () => alovaInst.Get('/todolist');\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"typescript"})}),"\n",(0,a.jsxs)(n.p,{children:["To add response data type in typescript, please read ",(0,a.jsx)(n.a,{href:"/tutorial/combine-framework/typescript",children:"alova documentation typescript chapter"})]}),"\n",(0,a.jsx)(n.h2,{id:"limit",children:"limit"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"/tutorial/advanced/manage-extra-states",children:"Manage extra states"})," is not supported yet."]}),"\n",(0,a.jsxs)(n.li,{children:["Currently, only alova\u2019s three core useHooks of ",(0,a.jsx)(n.code,{children:"useRequest/useWatcher/useFetcher"})," are supported, as well as the encapsulation based on the core useHook in your own project. ",(0,a.jsx)(n.a,{href:"https://github.com/alovajs/scene",children:"@alova/scene"})," is not supported yet. extension useHook."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(90512);const o={tabItem:"tabItem_Ymn6"};var s=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(67294),o=t(90512),s=t(12466),r=t(16550),l=t(20469),i=t(91980),c=t(67392),d=t(20812);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=h(e),[r,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,u]=v({queryString:t,groupId:o}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Nk)(t);return[o,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),g=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function j(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),o=l[t].value;o!==a&&(c(n),r(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(b,{...n,...e})]})}function k(e){const n=(0,f.Z)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>r});var a=t(67294);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);