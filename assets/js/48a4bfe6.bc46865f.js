"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7761],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=l,v=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(v,o(o({ref:t},p),{},{components:a})):n.createElement(v,o({ref:t},p))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),l=a(7294),r=a(6010),o=a(2389),s=a(7392),i=a(7094),c=a(2466);const p="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:a,block:o,defaultValue:m,values:d,groupId:v,className:k}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,s.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[N,T]=(0,l.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=v){const e=y[v];null!=e&&e!==N&&h.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=j.indexOf(t),n=h[a].value;n!==N&&(x(t),T(n),null!=v&&w(v,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;a=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;a=j[t]??j[j.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},k)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:E,onClick:O},o,{className:(0,r.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,l.cloneElement)(b.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},1693:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=a(7462),l=(a(7294),a(3905)),r=a(5488),o=a(5162);const s={title:"\u5b89\u88c5/\u4f7f\u7528",sidebar_position:50},i=void 0,c={unversionedId:"overview/installation",id:"overview/installation",title:"\u5b89\u88c5/\u4f7f\u7528",description:"\u4f7f\u7528alova\u65f6\uff0c\u8bf7\u786e\u4fdd\u4ee5\u4e0b\u7248\u672c",source:"@site/docs/01-overview/04-installation.md",sourceDirName:"01-overview",slug:"/overview/installation",permalink:"/overview/installation",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/tree/main/docs/templates/shared/docs/01-overview/04-installation.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"\u5b89\u88c5/\u4f7f\u7528",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"\u66ff\u4ee3\u8bf7\u6c42\u5e93\uff1f",permalink:"/overview/relationship-with-http-lib"},next:{title:"\u793a\u4f8b",permalink:"/category/\u793a\u4f8b"}},p={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u5728esModule\u4e2d\u4f7f\u7528",id:"\u5728esmodule\u4e2d\u4f7f\u7528",level:2},{value:"cdn",id:"cdn",level:2},{value:"\u5f15\u5165\u6838\u5fc3\u4ee3\u7801",id:"\u5f15\u5165\u6838\u5fc3\u4ee3\u7801",level:3},{value:"\u5f15\u5165fetch adapter",id:"\u5f15\u5165fetch-adapter",level:3},{value:"\u5f15\u5165States Hook",id:"\u5f15\u5165states-hook",level:3},{value:"\u5728\u9759\u6001html\u4e2d\u4f7f\u7528",id:"\u5728\u9759\u6001html\u4e2d\u4f7f\u7528",level:3}],m={toc:u};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4f7f\u7528alova\u65f6\uff0c\u8bf7\u786e\u4fdd\u4ee5\u4e0b\u7248\u672c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"React: > v16.8"),(0,l.kt)("li",{parentName:"ol"},"Vue: 3.x"),(0,l.kt)("li",{parentName:"ol"},"Svelte: \u4efb\u610f")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u60f3\u5148\u5c1d\u8bd5\u4e00\u4e0b\u5417\uff1f\u53ef\u4ee5",(0,l.kt)("a",{parentName:"p",href:"#xx"},"\u70b9\u6b64"),"\u67e5\u770b\u793a\u4f8b\uff01")),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"1",label:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install alova --save\n"))),(0,l.kt)(o.Z,{value:"2",label:"yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add alova\n")))),(0,l.kt)("h2",{id:"\u5728esmodule\u4e2d\u4f7f\u7528"},"\u5728esModule\u4e2d\u4f7f\u7528"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport VueHook from 'alova/vue';\nconst alovaInstance = createAlova({\n    // \u670d\u52a1\u5668\u6839\u76ee\u5f55\n    baseURL: 'https://api.alovajs.org',\n\n    // VueHook\u7528\u4e8e\u521b\u5efaref\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001loading\u3001\u54cd\u5e94\u6570\u636edata\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61error\u7b49\uff08\u540e\u7eed\u8be6\u7ec6\u4ecb\u7ecd\uff09\n    statesHook: VueHook,\n\n    // \u8bf7\u6c42\u9002\u914d\u5668\uff0c\u6211\u4eec\u63a8\u8350\u5e76\u63d0\u4f9b\u4e86fetch\u8bf7\u6c42\u9002\u914d\u5668\n    requestAdapter: GlobalFetch()\n});\n"))),(0,l.kt)(o.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport ReactHook from 'alova/react';\nconst alovaInstance = createAlova({\n    // \u670d\u52a1\u5668\u6839\u76ee\u5f55\n    baseURL: 'https://api.alovajs.org',\n\n    // ReactHook\u7528\u4e8e\u521b\u5efareact\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001loading\u3001\u54cd\u5e94\u6570\u636edata\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61error\u7b49\uff08\u540e\u7eed\u8be6\u7ec6\u4ecb\u7ecd\uff09\n    statesHook: ReactHook,\n\n    // \u8bf7\u6c42\u9002\u914d\u5668\uff0c\u6211\u4eec\u63a8\u8350\u5e76\u63d0\u4f9b\u4e86fetch\u8bf7\u6c42\u9002\u914d\u5668\n    requestAdapter: GlobalFetch()\n});\n"))),(0,l.kt)(o.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createAlova } from 'alova';\nimport GlobalFetch from 'alova/GlobalFetch';\nimport SvelteHook from 'alova/svelte';\nconst alovaInstance = createAlova({\n    // \u670d\u52a1\u5668\u6839\u76ee\u5f55\n    baseURL: 'https://api.alovajs.org',\n\n    // SvelteHook\u7528\u4e8e\u521b\u5efasvelte\u7684store\u72b6\u6001\uff0c\u5305\u62ec\u8bf7\u6c42\u72b6\u6001loading\u3001\u54cd\u5e94\u6570\u636edata\u3001\u8bf7\u6c42\u9519\u8bef\u5bf9\u8c61error\u7b49\uff08\u540e\u7eed\u8be6\u7ec6\u4ecb\u7ecd\uff09\n    statesHook: SvelteHook,\n\n    // \u8bf7\u6c42\u9002\u914d\u5668\uff0c\u6211\u4eec\u63a8\u8350\u5e76\u63d0\u4f9b\u4e86fetch\u8bf7\u6c42\u9002\u914d\u5668\n    requestAdapter: GlobalFetch()\n});\n")))),(0,l.kt)("h2",{id:"cdn"},"cdn"),(0,l.kt)("h3",{id:"\u5f15\u5165\u6838\u5fc3\u4ee3\u7801"},"\u5f15\u5165\u6838\u5fc3\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/alova/dist/alova.umd.min.js"><\/script>\n')),(0,l.kt)("p",null,"\u5bfc\u5165\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"window.alova"),"\u4f7f\u7528api\u3002"),(0,l.kt)("h3",{id:"\u5f15\u5165fetch-adapter"},"\u5f15\u5165fetch adapter"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"><\/script>\n')),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"window.GlobalFetch"),"\u4f7f\u7528\uff0c\u5b83\u5c06\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"winfow.fetch"),"\u8fdb\u884c\u8bf7\u6c42\u3002"),(0,l.kt)("h3",{id:"\u5f15\u5165states-hook"},"\u5f15\u5165States Hook"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e\u9879\u76ee\u6240\u7528\u7684\u6846\u67b6\uff0c\u4f7f\u7528\u4e0d\u540c\u7684States Hook"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>\n<script src="https://unpkg.com/alova/dist/hooks/vuehook.umd.min.js"><\/script>\n')),(0,l.kt)("p",null,"\u5f53\u5728vue3\u9879\u76ee\u4e2d\u4f7f\u7528\u65f6\u9700\u5f15\u5165\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"window.VueHook"),"\u8bbf\u95ee"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5b83\u4f9d\u8d56vue\uff0c\u56e0\u6b64\u9700\u5148\u5f15\u5165vue"))),(0,l.kt)(o.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>\n<script src="https://unpkg.com/alova/dist/hooks/reacthook.umd.min.js"><\/script>\n')),(0,l.kt)("p",null,"\u5f53\u5728react\u9879\u76ee\u4e2d\u4f7f\u7528\u65f6\u9700\u5f15\u5165\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"window.ReactHook"),"\u8bbf\u95ee"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5b83\u4f9d\u8d56react\uff0c\u56e0\u6b64\u9700\u5148\u5f15\u5165react\u548creact-dom"))),(0,l.kt)(o.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"svelte\u4f9d\u8d56\u4e8e\u7f16\u8bd1\u5de5\u5177\uff0c\u4e0d\u80fd\u901a\u8fc7cdn\u76f4\u63a5\u4f7f\u7528")),(0,l.kt)("p",null,"\u8be6\u60c5\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"https://svelte.dev/"},"svelte.dev")))),(0,l.kt)("h3",{id:"\u5728\u9759\u6001html\u4e2d\u4f7f\u7528"},"\u5728\u9759\u6001html\u4e2d\u4f7f\u7528"),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nconst alovaInstance = window.alova.createAlova({\n    baseURL: 'https://api.alovajs.org',\n    statesHook: window.VueHook,\n    requestAdapter: window.GlobalFetch()\n});\n<\/script>\n"))),(0,l.kt)(o.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nconst alovaInstance = window.alova.createAlova({\n    baseURL: 'https://api.alovajs.org',\n    statesHook: window.ReactHook,\n    requestAdapter: window.GlobalFetch()\n});\n<\/script>\n")))))}d.isMDXComponent=!0}}]);