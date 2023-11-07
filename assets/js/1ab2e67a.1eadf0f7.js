"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:o,s[1]=l;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),o=n(7294),r=n(6010),s=n(2466),l=n(6550),i=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,u]=h({queryString:n,groupId:a}),[p,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=i??p;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,r]),tabValues:r}}var f=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},s,{className:(0,r.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=v(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},o.createElement(k,(0,a.Z)({},e,t)),o.createElement(g,(0,a.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return o.createElement(y,(0,a.Z)({key:String(t)},e))}},9468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),s=n(5162);const l={title:"vue2/3 options",sidebar_position:10},i=void 0,u={unversionedId:"tutorial/framework/vue-options",id:"tutorial/framework/vue-options",title:"vue2/3 options",description:"Usually, use hook can only be used in vue's setup, but through the auxiliary function provided by @alova/vue-options, you can also use alova's use hook in vue options style, which is perfectly compatible with almost all functions of alova.",source:"@site/docs/tutorial/10-framework/01-vue-options.md",sourceDirName:"tutorial/10-framework",slug:"/tutorial/framework/vue-options",permalink:"/tutorial/framework/vue-options",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/10-framework/01-vue-options.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"vue2/3 options",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Framework",permalink:"/category/framework"},next:{title:"solid",permalink:"/tutorial/framework/solid"}},c={},p=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"mapAlovaHook function description",id:"mapalovahook-function-description",level:2},{value:"Type support",id:"type-support",level:2},{value:"Automatic inference",id:"automatic-inference",level:3},{value:"Add types for response data",id:"add-types-for-response-data",level:3},{value:"limited",id:"limited",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Usually, use hook can only be used in vue's setup, but through the auxiliary function provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"@alova/vue-options"),", you can also use alova's use hook in vue options style, which is perfectly compatible with almost all functions of alova."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Available in both vue2 and vue3.")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@alova/vue-options"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@alova/vue-options",alt:"npm"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/alovajs/vue-options/actions/workflows/release.yml"},(0,o.kt)("img",{parentName:"a",src:"https://github.com/alovajs/vue-options/actions/workflows/release.yml/badge.svg?branch=main",alt:"build"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://coveralls.io/github/alovajs/vue-options?branch=main"},(0,o.kt)("img",{parentName:"a",src:"https://coveralls.io/repos/github/alovajs/vue-options/badge.svg?branch=main",alt:"coverage status"})),"\n",(0,o.kt)("img",{parentName:"p",src:"https://badgen.net/badge/icon/typescript?icon=typescript&label",alt:"typescript"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/license-MIT-blue.svg",alt:"license"})),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install alova @alova/vue-options --save\n"))),(0,o.kt)(s.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add alova @alova/vue-options\n")))),(0,o.kt)("admonition",{title:"alova version requirements",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"alova version >= 2.13.1")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"First use ",(0,o.kt)("inlineCode",{parentName:"p"},"vueOptionHook")," to create an alova instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova, Method } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport { VueOptionsHook } from '@alova/vue-options';\n\n// api.js\nconst alovaInst = createAlova({\n  baseURL: 'http://example.com',\n  statesHook: VueOptionsHook,\n  requestAdapter: GlobalFetch(),\n  responded: response => response.json()\n});\n\n/** @type {() => Method<unknown, unknown, { content: string, time: string }[]>} */\nexport const getData = () => alovaInst.Get('/todolist');\n")),(0,o.kt)("p",null,"Then use ",(0,o.kt)("inlineCode",{parentName:"p"},"mapAlovaHook")," to map the return value set of use hook to the component instance. The following is how to access the reactive state and operation functions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"You can access responsive status such as ",(0,o.kt)("inlineCode",{parentName:"li"},"loading/data/error")," through the key of the collection, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"this.key.loading"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"this.key.data"),"."),(0,o.kt)("li",{parentName:"ol"},"You can access the operation function by adding the key of the collection and the function name, and use ",(0,o.kt)("inlineCode",{parentName:"li"},"$")," to splice it, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"this.key$send"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"this.key$onSuccess"),".")),(0,o.kt)("p",null,"Below is a complete example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\n    <span role=\"loading\">{{ todoRequest.loading ? 'loading' : 'loaded' }}</span>\n    <span role=\"error\">{{ todoRequest.error ? todoRequest.error.message : '' }}</span>\n    <div role=\"data\">{{ JSON.stringify(todoRequest.data) }}</div>\n    <button\n      @click=\"todoRequest$send\"\n      role=\"btnSend\">\n      send\n    </button>\n  </div>\n</template>\n\n<script>\n  import { useRequest } from 'alova';\n  import { mapAlovaHook } from '@alova/vue-options';\n  import { getData } from './api';\n\n  export default {\n    // mapAlovaHook will return the mixins array, and the usage of use hook is the same as before\n    mixins: mapAlovaHook(function (vm) {\n      // The component instance can be accessed through this or vm\n      // When using this, this callback function cannot be an arrow function\n      console.log(this, vm);\n      return {\n        todoRequest: useRequest(getData)\n      };\n    }),\n    created() {\n      this.todoRequest.loading;\n      this.todoRequest$send();\n      this.todoRequest$onSuccess(event => {\n        event.data.match;\n        event.sendArgs.copyWithin;\n      });\n      this.todoRequest$onSuccess(event => {\n        console.log('success', event);\n      });\n      this.todoRequest$onError(event => {\n        console.log('error', event);\n      });\n    },\n    mounted() {\n      this.todoRequest$onComplete(event => {\n        console.log('complete', event);\n      });\n    }\n  };\n<\/script>\n")),(0,o.kt)("h2",{id:"mapalovahook-function-description"},"mapAlovaHook function description"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mapAlovaHook")," is used to map the state and function collection returned by alova's use hook to the vue component instance through mixins. It receives a callback function and returns the return value collection of use hook."),(0,o.kt)("p",null,"It is worth noting that the callback function will be executed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"created")," phase, and you can access the vue component instance in the following way."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// 1. Access the component instance through this. Note that the callback function cannot be an arrow function.\nmapAlovaHook(function () {\n  console.log(this);\n  return {\n    todoRequest: useRequest(getData)\n  };\n});\n\n// =======================\n// 2. Access the component instance through function parameters. In this case, arrow functions can be used\nmapAlovaHook(vm => {\n  console.log(vm);\n  return {\n    todoRequest: useRequest(getData)\n  };\n});\n")),(0,o.kt)("h2",{id:"type-support"},"Type support"),(0,o.kt)("h3",{id:"automatic-inference"},"Automatic inference"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@alova/vue-options")," provides complete ts type support. Whether using typescript or not, the mapped value type will be automatically inferred, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"this.todoRequest.loading; // boolean\nthis.todoRequest.error; // Error | undefined\nthis.todoRequest.data; // any\nthis.todoRequest$send; // (...args: any[]) => Promise<any>\nthis.todoRequest$onSuccess; // (handler: SuccessHandler) => void\nthis.todoRequest$onError; // (handler: ErrorHandler) => void\nthis.todoRequest$onComplete; // (handler: CompleteHandler) => void\n// ...\n")),(0,o.kt)("h3",{id:"add-types-for-response-data"},"Add types for response data"),(0,o.kt)("p",null,"Except for ",(0,o.kt)("inlineCode",{parentName:"p"},"this.todoRequest.data"),", all other values have the correct type, so how to set the type for ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," too? In fact, it is the same as alova used in other environments."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"1",label:"javascript",mdxType:"TabItem"},(0,o.kt)("p",null,"In javascript, you can use type annotations to add types. The first two generic parameters of Method are ",(0,o.kt)("inlineCode",{parentName:"p"},"unknown"),", and the third generic parameter is the type of response data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { Method } from 'alova';\n\n/** @type {() => Method<unknown, unknown, { content: string, time: string }[]>} */\nexport const getData = () => alovaInst.Get('/todolist');\n"))),(0,o.kt)(s.Z,{value:"2",label:"typescript",mdxType:"TabItem"},(0,o.kt)("p",null,"To add response data type in typescript, please read ",(0,o.kt)("a",{parentName:"p",href:"/tutorial/advanced/typescript/#the-type-of-response-data"},"alova documentation typescript")))),(0,o.kt)("h2",{id:"limited"},"limited"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/tutorial/next-step/manage-extra-states"},"Manage extra states")," is not supported yet."),(0,o.kt)("li",{parentName:"ol"},"Currently, only alova\u2019s 3 core useHooks of ",(0,o.kt)("inlineCode",{parentName:"li"},"useRequest/useWatcher/useFetcher")," are supported, as well as the wrapped useHook based on the core useHook in your own project. The extended useHook in ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/alova/scene"},"@alova/scene")," is not supported yet.")))}h.isMDXComponent=!0}}]);