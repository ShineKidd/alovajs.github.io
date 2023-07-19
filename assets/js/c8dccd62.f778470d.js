"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5169],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),v=r,m=d["".concat(l,".").concat(v)]||d[v]||p[v]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),i=n(6010),o=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function v(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!v({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[l,u]=m({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=l??p;return v({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!v({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var f=n(2389);const g="tabList__CuJ",k="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},v=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:v,onClick:d},o,{className:(0,i.Z)("tabs__item",k,null==o?void 0:o.className,{"tabs__item--active":s===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function N(e){const t=(0,f.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},2865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),o=n(5162);const s={title:"Server-Side Rendering(SSR)",sidebar_position:140},l=void 0,u={unversionedId:"next-step/ssr",id:"next-step/ssr",title:"Server-Side Rendering(SSR)",description:"2.8.0+",source:"@site/docs/06-next-step/14-ssr.md",sourceDirName:"06-next-step",slug:"/next-step/ssr",permalink:"/next-step/ssr",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/06-next-step/14-ssr.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{title:"Server-Side Rendering(SSR)",sidebar_position:140},sidebar:"tutorialSidebar",previous:{title:"cache logger",permalink:"/next-step/cache-logger"},next:{title:"Strategy",permalink:"/category/strategy"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Call apis on server",id:"call-apis-on-server",level:2},{value:"Nuxt3.x",id:"nuxt3x",level:3},{value:"Nextjs",id:"nextjs",level:3},{value:"Sveltekit",id:"sveltekit",level:3},{value:"Using usehooks in SSR",id:"using-usehooks-in-ssr",level:2},{value:"Precautions",id:"precautions",level:2},{value:"Client and server caches are separate",id:"client-and-server-caches-are-separate",level:3}],d={toc:p};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"version required",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"2.8.0+")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Although the positioning of alova is not to make requests in nodejs, we have also adapted it in order to combine the server-side rendering(",(0,r.kt)("a",{parentName:"p",href:"https://nuxt.com/"},"Nuxt3.x")," / ",(0,r.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Nextjs")," / ",(0,r.kt)("a",{parentName:"p",href:"https://kit.svelte.dev/"},"sveltekit"),") of the UI framework. Although built-in request functionality is provided in e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Nuxt3.x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Sveltekit"),", if you choose to use alova, you can use alova to manage requests in both server and client, instead of server and client separately. Use different request schemes to manage them."),(0,r.kt)("p",null,"Here are some caveats for using alova in SSR, and examples of usage in SSR for different UI frameworks."),(0,r.kt)("h2",{id:"call-apis-on-server"},"Call apis on server"),(0,r.kt)("p",null,"In SSR, it is necessary to get data on server and render it into HTML. In this case, we cannot use alova's use hooks (and do not need to use them) to obtain data. Below we will show the supported SSR frameworks respectively."),(0,r.kt)("h3",{id:"nuxt3x"},"Nuxt3.x"),(0,r.kt)("p",null,"In Nuxt3.x, ",(0,r.kt)("inlineCode",{parentName:"p"},"useAsyncData")," is provided to initialize page data on server, and ",(0,r.kt)("inlineCode",{parentName:"p"},"useFetch")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$fetch")," request functions are also provided. These request functions that can be used on both server and client are really convenient. However, if you want to use alova in nuxt, you can use the combination of ",(0,r.kt)("strong",{parentName:"p"},"useAsyncData + alova.Method")," to complete the server-side data fetching, which is no different from your usual ",(0,r.kt)("inlineCode",{parentName:"p"},"useAsyncData"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script setup>\n  const todoListGetter = alovaInstance.Get('/todo/list', {\n    headers: {\n      'Content-Type': 'application/json;charset=UTF-8'\n    }\n  });\n\n  // return promise in useAsyncData\n  const { data, pending, refresh } = useAsyncData(async () => {\n    return todoListGetter.send();\n  });\n<\/script>\n")),(0,r.kt)("h3",{id:"nextjs"},"Nextjs"),(0,r.kt)("p",null,"Nextjs provides fixed server-side initialization page data functions, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"getStaticProps"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),", etc., you can ",(0,r.kt)("a",{parentName:"p",href:"/next-step/send-request-directly"},"directly use the method instance")," call apis in the function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const todoListGetter = alovaInstance.Get('/todo/list', {\n  headers: {\n    'Content-Type': 'application/json;charset=UTF-8'\n  }\n});\n\nexport const getServerSideProps = async ctx => {\n  const list = await todoListGetter.send();\n  return {\n    props: {\n      list\n    }\n  };\n};\nexport default function App(props) {\n  return props.list.map(item => (\n    <div>\n      <span>{item.title}</span>\n      <span>{item.time}</span>\n    </div>\n  ));\n}\n")),(0,r.kt)("h3",{id:"sveltekit"},"Sveltekit"),(0,r.kt)("p",null,"Sveltekit also provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"load")," function to initialize the page data on server, and you can also ",(0,r.kt)("a",{parentName:"p",href:"/next-step/send-request-directly"},"directly use the method instance")," call apis in the function. For example, call apis in ",(0,r.kt)("inlineCode",{parentName:"p"},"+page.server.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=+page.server.js",title:"+page.server.js"},"const todoListGetter = alovaInstance.Get('/todo/list', {\n  headers: {\n    'Content-Type': 'application/json;charset=UTF-8'\n  }\n});\n\n/** @type {import('./$types'). PageServerLoad} */\nexport async function load({ params }) {\n  return {\n    list: todoListGetter.send()\n  };\n}\n")),(0,r.kt)("h2",{id:"using-usehooks-in-ssr"},"Using usehooks in SSR"),(0,r.kt)("p",null,"Since each SSR framework has its own way to initialize data on server, when generating html in SSR, ",(0,r.kt)("inlineCode",{parentName:"p"},"useRequest")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useWatcher")," in the component will not be initiated even if ",(0,r.kt)("inlineCode",{parentName:"p"},"immediate")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," request, as this is more like client initialization data."),(0,r.kt)("p",null,"However, if you need to initialize the data of the page as in the client, you can also set ",(0,r.kt)("inlineCode",{parentName:"p"},"immediate")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", and when the page is running in the browser, you can use all the functions of alova as usual."),(0,r.kt)("h2",{id:"precautions"},"Precautions"),(0,r.kt)("h3",{id:"client-and-server-caches-are-separate"},"Client and server caches are separate"),(0,r.kt)("p",null,"If you use alova's caching function, you may need to pay attention here that the client and server caches are not shared, which means that if you directly use ",(0,r.kt)("strong",{parentName:"p"},"usehooks")," to get data when initializing the page, you may Run into inconsistencies in client-side and server-side rendering, although few people do."),(0,r.kt)("p",null,"Please see the following code snippet."),(0,r.kt)(i.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"vue",value:"1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div v-if="loading">loading</div>\n  <div>{{ data }}</div>\n</template>\n\n<script setup>\n  const { loading, data } = useRequest(alovaGetter);\n<\/script>\n'))),(0,r.kt)(o.Z,{label:"react",value:"2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"function App(props) {\n  const { loading, data } = useRequest(alovaGetter);\n  return (\n    <>\n      {loading ? <div>loading</div> : null}\n      <div>{data}</div>\n    </>\n  );\n}\n"))),(0,r.kt)(o.Z,{label:"svelte",value:"3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  export let data;\n  const { loading, data } = useRequest(alovaGetter);\n<\/script>\n\n{#if $loading}\n<div>loading</div>\n{/if}\n<div>{{ data }}</div>\n")))),(0,r.kt)("p",null,"The following code assumes that ",(0,r.kt)("inlineCode",{parentName:"p"},"alovaGetter")," requests are cached on server, but not on the client."),(0,r.kt)("p",null,"At this time, when the html is generated on server , ",(0,r.kt)("inlineCode",{parentName:"p"},"loading")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and does not display ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>loading</div>")," because it hits the cache, but when the client is initialized, because it misses the cache, ",(0,r.kt)("inlineCode",{parentName:"p"},"loading")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," will cause ",(0,r.kt)("inlineCode",{parentName:"p"},"<div>loading</div>")," to be displayed, and the SSR framework will prompt that the rendering of the two ends is inconsistent."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Try to put the page data initialization work in the acquisition function instead of the component;"),(0,r.kt)("li",{parentName:"ol"},"If you must do this, you can avoid using the same apis on the client and server, or turn off the problematic api caches;"),(0,r.kt)("li",{parentName:"ol"},"If caching is also required, you can clear the cache on server in the data initialization function of server. The sample code is as follows:")),(0,r.kt)(i.Z,{groupId:"framework",mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"vue",value:"1",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div v-if=\"loading\">loading</div>\n  <div>{{ data }}</div>\n</template>\n\n<script setup>\n  import { invalidateCache } from 'alova';\n  const { loading, data } = useRequest(alovaGetter);\n\n  // Clear the cache on server\n  useAsyncData(\n    () => {\n      invalidateCache(alovaGetter);\n    },\n    {\n      server: true\n    }\n  );\n<\/script>\n"))),(0,r.kt)(o.Z,{label:"react",value:"2",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { invalidateCache } from 'alova';\n\nfunction App(props) {\n  const { loading, data } = useRequest(alovaGetter);\n  return (\n    <>\n      {loading ? <div>loading</div> : null}\n      <div>{data}</div>\n    </>\n  );\n}\n\nexport const getServerSideProps = async () => {\n  // Clear the cache on server\n  invalidateCache(alovaGetter);\n  return {\n    props: {}\n  };\n};\n"))),(0,r.kt)(o.Z,{label:"svelte",value:"3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=+page.server.js",title:"+page.server.js"},"import { invalidateCache } from 'alova';\n\n/** @type {import('./$types'). PageServerLoad} */\nexport async function load({ params }) {\n  // Clear the cache on server\n  invalidateCache(alovaGetter);\n  return {};\n}\n")))))}v.isMDXComponent=!0}}]);