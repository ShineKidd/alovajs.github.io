"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3610],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,g=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(6010);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(7294),o=t(6010),l=t(2389),s=t(7392),i=t(7094),u=t(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var n;const{lazy:t,block:l,defaultValue:p,values:m,groupId:g,className:v}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),b=(0,s.l)(k,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[T,N]=(0,a.useState)(f),P=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=g){const e=y[g];null!=e&&e!==T&&k.some((n=>n.value===e))&&N(e)}const E=e=>{const n=e.currentTarget,t=P.indexOf(n),r=k[t].value;r!==T&&(x(n),N(r),null!=g&&w(g,String(r)))},j=e=>{var n;let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const n=P.indexOf(e.currentTarget)+1;t=P[n]??P[0];break}case"ArrowLeft":{const n=P.indexOf(e.currentTarget)-1;t=P[n]??P[P.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},k.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>P.push(e),onKeyDown:j,onClick:E},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function m(e){const n=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},5641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var r=t(7462),a=(t(7294),t(3905)),o=t(5488),l=t(5162);const s={title:"\u72b6\u6001\u53d8\u5316\u8bf7\u6c42",sidebar_position:20},i=void 0,u={unversionedId:"request-timing/use-watcher",id:"request-timing/use-watcher",title:"\u72b6\u6001\u53d8\u5316\u8bf7\u6c42",description:"useWatcher \u7528\u4e8e\u76d1\u542c\u6307\u5b9a\u7684\u72b6\u6001\u53d8\u5316\u65f6\u7acb\u5373\u53d1\u9001\u8bf7\u6c42\uff0c\u4e3b\u8981\u7528\u4e8e\u6570\u636e\u968f\u72b6\u6001\u53d8\u5316\u800c\u66f4\u65b0\u7684\u573a\u666f\uff0c\u5982\u5206\u9875\u3001\u6570\u636e\u7b5b\u9009\u3001\u6a21\u7cca\u641c\u7d22\u3002",source:"@site/docs/04-request-timing/02-use-watcher.md",sourceDirName:"04-request-timing",slug:"/request-timing/use-watcher",permalink:"/request-timing/use-watcher",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/tree/main/docs/templates/shared/docs/04-request-timing/02-use-watcher.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"\u72b6\u6001\u53d8\u5316\u8bf7\u6c42",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u9001\u8bf7\u6c42",permalink:"/request-timing/use-request"},next:{title:"\u6570\u636e\u62c9\u53d6",permalink:"/request-timing/use-fetcher"}},c={},d=[{value:"\u5173\u952e\u5b57\u641c\u7d22",id:"\u5173\u952e\u5b57\u641c\u7d22",level:2},{value:"\u5206\u9875",id:"\u5206\u9875",level:2},{value:"\u624b\u52a8\u53d1\u9001\u8bf7\u6c42",id:"\u624b\u52a8\u53d1\u9001\u8bf7\u6c42",level:2},{value:"send\u51fd\u6570\u53c2\u6570\u4f20\u9012\u89c4\u5219",id:"send\u51fd\u6570\u53c2\u6570\u4f20\u9012\u89c4\u5219",level:2},{value:"useWatcher\u56de\u8c03\u51fd\u6570",id:"usewatcher\u56de\u8c03\u51fd\u6570",level:3},{value:"onSuccess\u56de\u8c03\u51fd\u6570",id:"onsuccess\u56de\u8c03\u51fd\u6570",level:3},{value:"onError\u56de\u8c03\u51fd\u6570",id:"onerror\u56de\u8c03\u51fd\u6570",level:3},{value:"onComplete\u56de\u8c03\u51fd\u6570",id:"oncomplete\u56de\u8c03\u51fd\u6570",level:3},{value:"\u8bbe\u7f6e\u521d\u59cb\u54cd\u5e94\u6570\u636e",id:"\u8bbe\u7f6e\u521d\u59cb\u54cd\u5e94\u6570\u636e",level:2},{value:"\u8bf7\u6c42\u9632\u6296",id:"\u8bf7\u6c42\u9632\u6296",level:2},{value:"\u624b\u52a8\u4e2d\u65ad\u8bf7\u6c42",id:"\u624b\u52a8\u4e2d\u65ad\u8bf7\u6c42",level:2}],p={toc:d};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useWatcher")," \u7528\u4e8e\u76d1\u542c\u6307\u5b9a\u7684\u72b6\u6001\u53d8\u5316\u65f6\u7acb\u5373\u53d1\u9001\u8bf7\u6c42\uff0c\u4e3b\u8981\u7528\u4e8e\u6570\u636e\u968f\u72b6\u6001\u53d8\u5316\u800c\u66f4\u65b0\u7684\u573a\u666f\uff0c\u5982\u5206\u9875\u3001\u6570\u636e\u7b5b\u9009\u3001\u6a21\u7cca\u641c\u7d22\u3002"),(0,a.kt)("h2",{id:"\u5173\u952e\u5b57\u641c\u7d22"},"\u5173\u952e\u5b57\u641c\u7d22"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u4ee5\u641c\u7d22 todo \u9879\u4e3a\u4f8b\u3002"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n    \x3c!-- keyword\u968f\u7740\u8f93\u5165\u5185\u5bb9\u53d8\u5316\u800c\u53d8\u5316 --\x3e\n    <input v-model="keyword" />\n\n    \x3c!-- \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 --\x3e\n    <div v-if="loading">Loading...</div>\n    <template v-else>\n        <div v-for="todo in data">\n            <div class="todo-title">{{ todo.title }}</div>\n            <div class="todo-time">{{ todo.time }}</div>\n        </div>\n    </template>\n</template>\n\n<script setup>\n// \u521b\u5efamethod\u5b9e\u4f8b\nconst filterTodoList = keyword => {\n    return alovaInstance.Get(\'/tood/list/search\', {\n        params: {\n            keyword\n        }\n    });\n};\nconst keyword = ref(\'\');\nconst {\n    loading,\n    data,\n    error\n\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u5fc5\u987b\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\n} = useWatcher(\n    () => filterTodoList(keyword.value),\n\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n    [keyword],\n    {\n        // \u8bbe\u7f6e500ms\u9632\u6296\uff0c\u5982\u679ckeyword\u9891\u7e41\u53d8\u5316\uff0c\u53ea\u6709\u5728\u505c\u6b62\u53d8\u5316\u540e500ms\u624d\u53d1\u9001\u8bf7\u6c42\n        debounce: 500\n    }\n);\n<\/script>\n'))),(0,a.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u521b\u5efamethod\u5b9e\u4f8b\nconst filterTodoList = keyword => {\n    return alovaInstance.Get('/tood/list/search', {\n        params: {\n            keyword\n        }\n    });\n};\n\nconst App = () => {\n    const [keyword, setKeyword] = useState('');\n    const {\n        loading,\n        data,\n        error\n        // \u7b2c\u4e00\u4e2a\u53c2\u6570\u5fc5\u987b\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\n    } = useWatcher(\n        () => filterTodoList(keyword),\n\n        // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n        [keyword],\n        {\n            // \u8bbe\u7f6e500ms\u9632\u6296\uff0c\u5982\u679ckeyword\u9891\u7e41\u53d8\u5316\uff0c\u53ea\u6709\u5728\u505c\u6b62\u53d8\u5316\u540e500ms\u624d\u53d1\u9001\u8bf7\u6c42\n            debounce: 500\n        }\n    );\n    \n    return <>\n        {/* keyword\u968f\u7740\u8f93\u5165\u5185\u5bb9\u53d8\u5316\u800c\u53d8\u5316 */}\n        <input value={keyword} onInput={e => setKeyword(e.target.value)} />\n\n        {/* \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 */}\n        { loading ? <div>Loading...</div> : null }\n        { !loading ? (\n            <>\n                {\n                    data.map(todo => <div>\n                        <div class=\"todo-title\">{ todo.title }</div>\n                        <div class=\"todo-time\">{ todo.time }</div>\n                    </div>)\n                }\n            </>\n        ) : null }\n    </>;\n}\n"))),(0,a.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nimport { writable } from 'svelte/store';\n\n// \u521b\u5efamethod\u5b9e\u4f8b\nconst filterTodoList = text => {\n    return alovaInstance.Get('/tood/list/search', {\n        params: {\n            keyword: text\n        }\n    });\n};\nconst keyword = writable('');\n\nconst {\n    loading,\n    data,\n    error\n\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u5fc5\u987b\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\n} = useWatcher(\n    () => filterTodoList($keyword),\n\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n    [keyword],\n    {\n        // \u8bbe\u7f6e500ms\u9632\u6296\uff0c\u5982\u679ckeyword\u9891\u7e41\u53d8\u5316\uff0c\u53ea\u6709\u5728\u505c\u6b62\u53d8\u5316\u540e500ms\u624d\u53d1\u9001\u8bf7\u6c42\n        debounce: 500\n    }\n);\n\nconst updateKeyword = e => {\n    $keyword = e.target.value;\n}\n<\/script>\n\x3c!-- keyword\u968f\u7740\u8f93\u5165\u5185\u5bb9\u53d8\u5316\u800c\u53d8\u5316 --\x3e\n<input value={$keyword} on:input={updateKeyword} />\n\n\x3c!-- \u6e32\u67d3\u7b5b\u9009\u540e\u7684todo\u5217\u8868 --\x3e\n{#if $loading}\n    <div>Loading...</div>\n{:else}\n    {#each $data as todo}\n        <div>\n            <div class=\"todo-title\">{ todo.title }</div>\n            <div class=\"todo-time\">{ todo.time }</div>\n        </div>\n    {/each}\n{/if}\n")))),(0,a.kt)("h2",{id:"\u5206\u9875"},"\u5206\u9875"),(0,a.kt)("p",null,"\u4ee5 todo \u5217\u8868\u5206\u9875\u8bf7\u6c42\u4e3a\u4f8b\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u505a\u3002"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"1",label:"vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n    \x3c!-- ... --\x3e\n</template>\n\n<script setup>\n// method\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570\nconst getTodoList = currentPage => {\n    return alovaInstance.Get('/tood/list', {\n        params: {\n            currentPage,\n            pageSize: 10\n        }\n    });\n};\n\nconst currentPage = ref(1);\nconst {\n    loading,\n    data,\n    error\n\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\uff0c\u800c\u975emethod\u5b9e\u4f8b\u672c\u8eab\n} = useWatcher(\n    () => getTodoList(currentPage.value),\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n    [currentPage],\n    {\n        // \u26a0\ufe0f\u8c03\u7528useWatcher\u9ed8\u8ba4\u4e0d\u89e6\u53d1\uff0c\u6ce8\u610f\u548cuseRequest\u7684\u533a\u522b\n        // \u624b\u52a8\u8bbe\u7f6eimmediate\u4e3atrue\u53ef\u4ee5\u521d\u59cb\u83b7\u53d6\u7b2c1\u9875\u6570\u636e\n        immediate: true\n    }\n);\n<\/script>\n"))),(0,a.kt)(l.Z,{value:"2",label:"react",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useState } from 'react';\n\n// method\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570\nconst getTodoList = currentPage => {\n    return alovaInstance.Get('/tood/list', {\n        params: {\n            currentPage,\n            pageSize: 10\n        }\n    });\n};\n\nconst App = () => {\n    const [currentPage, setCurrentPage] = useState(1);\n    const {\n        loading,\n        data,\n        error\n\n        // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\uff0c\u800c\u975emethod\u5b9e\u4f8b\u672c\u8eab\n    } = useWatcher(\n        () => getTodoList(currentPage),\n        // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n        [currentPage],\n        {\n            // \u26a0\ufe0f\u8c03\u7528useWatcher\u9ed8\u8ba4\u4e0d\u89e6\u53d1\uff0c\u6ce8\u610f\u548cuseRequest\u7684\u533a\u522b\n            // \u624b\u52a8\u8bbe\u7f6eimmediate\u4e3atrue\u53ef\u4ee5\u521d\u59cb\u83b7\u53d6\u7b2c1\u9875\u6570\u636e\n            immediate: true\n        }\n    );\n\n    return (\n        {/* ... */}\n    );\n};\n"))),(0,a.kt)(l.Z,{value:"3",label:"svelte",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nimport { writable } from 'svelte/store';\n\n// method\u5b9e\u4f8b\u521b\u5efa\u51fd\u6570\nconst getTodoList = currentPage => {\n    return alovaInstance.Get('/tood/list', {\n        params: {\n            currentPage,\n            pageSize: 10\n        }\n    });\n};\n\nconst currentPage = writable(1);\nconst {\n    loading,\n    data,\n    error\n\n    // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8fd4\u56demethod\u5b9e\u4f8b\u7684\u51fd\u6570\uff0c\u800c\u975emethod\u5b9e\u4f8b\u672c\u8eab\n} = useWatcher(\n    () => getTodoList($currentPage),\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n    [currentPage],\n    {\n        // \u26a0\ufe0f\u8c03\u7528useWatcher\u9ed8\u8ba4\u4e0d\u89e6\u53d1\uff0c\u6ce8\u610f\u548cuseRequest\u7684\u533a\u522b\n        // \u624b\u52a8\u8bbe\u7f6eimmediate\u4e3atrue\u53ef\u4ee5\u521d\u59cb\u83b7\u53d6\u7b2c1\u9875\u6570\u636e\n        immediate: true\n    }\n);\n<\/script>\n\n\x3c!-- ... --\x3e\n")))),(0,a.kt)("h2",{id:"\u624b\u52a8\u53d1\u9001\u8bf7\u6c42"},"\u624b\u52a8\u53d1\u9001\u8bf7\u6c42"),(0,a.kt)("p",null,"\u6709\u65f6\u5019\u4f60\u5e0c\u671b\u5728\u76d1\u542c\u72b6\u6001\u672a\u53d8\u5316\u65f6\u91cd\u65b0\u53d1\u9001\u8bf7\u6c42\uff08\u5982\u670d\u52a1\u7aef\u6570\u636e\u5df2\u66f4\u65b0\uff09\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"send"),"\u51fd\u6570\u624b\u52a8\u89e6\u53d1\u8bf7\u6c42\uff0c\u7528\u6cd5\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"useRequest"),"\u76f8\u540c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n    // ...\n  // highlight-start\n    send,\n  // highlight-end\n} = useWatcher(\n    () => getTodoList($currentPage),\n    // \u88ab\u76d1\u542c\u7684\u72b6\u6001\u6570\u7ec4\uff0c\u8fd9\u4e9b\u72b6\u6001\u53d8\u5316\u5c06\u4f1a\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\n    [currentPage],\n    {\n        immediate: true\n    }\n);\n\n// highlight-start\nsend();\n// highlight-end\n")),(0,a.kt)("h2",{id:"send\u51fd\u6570\u53c2\u6570\u4f20\u9012\u89c4\u5219"},"send\u51fd\u6570\u53c2\u6570\u4f20\u9012\u89c4\u5219"),(0,a.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u8c03\u7528send\u51fd\u6570\u624b\u52a8\u89e6\u53d1\u8bf7\u6c42\uff0c\u5b83\u53ef\u4ee5\u63a5\u53d7\u4efb\u610f\u591a\u4e2a\u53c2\u6570\uff0c\u8fd9\u4e9b\u53c2\u6570\u5c06\u5206\u522b\u88ab\u4ee5\u4e0b4\u4e2a\u51fd\u6570\u63a5\u6536\uff1a"),(0,a.kt)("h3",{id:"usewatcher\u56de\u8c03\u51fd\u6570"},"useWatcher\u56de\u8c03\u51fd\u6570"),(0,a.kt)("p",null,"useWatcher\u7684\u56de\u8c03\u51fd\u6570\u53ef\u63a5\u6536\u5230\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send } = useWatcher(currentPage => getTodoList(currentPage));\nsend(1);    // \u4e0a\u9762\u56de\u8c03\u51fd\u6570\u4e2d\u7684currentPage\u5c06\u63a5\u6536\u52301\n")),(0,a.kt)("h3",{id:"onsuccess\u56de\u8c03\u51fd\u6570"},"onSuccess\u56de\u8c03\u51fd\u6570"),(0,a.kt)("p",null,"onSuccess\u8bbe\u7f6e\u7684\u56de\u8c03\u4e2d\u4ece\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5f00\u59cb\u63a5\u6536\uff08\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u54cd\u5e94\u6570\u636e\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send, onSuccess } = useWatcher(currentPage => getTodoList(currentPage));\nonSuccess((responseData, currentPage) => {\n    // responseData\u4e3a\u54cd\u5e94\u7684\u6570\u636e\n    // currentPage\u5c06\u63a5\u6536\u52301\n});\nsend(1);\n")),(0,a.kt)("h3",{id:"onerror\u56de\u8c03\u51fd\u6570"},"onError\u56de\u8c03\u51fd\u6570"),(0,a.kt)("p",null,"onError\u8bbe\u7f6e\u7684\u56de\u8c03\u4e2d\u4ece\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5f00\u59cb\u63a5\u6536\uff08\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u9519\u8bef\u5bf9\u8c61\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send, onError } = useWatcher(currentPage => getTodoList(currentPage));\nonError((err, currentPage) => {\n    // err\u4e3a\u8bf7\u6c42\u9519\u8bef\u65f6\u629b\u51fa\u7684Error\u5bf9\u8c61\n    // currentPage\u5c06\u63a5\u6536\u52301\n});\nsend(1);\n")),(0,a.kt)("h3",{id:"oncomplete\u56de\u8c03\u51fd\u6570"},"onComplete\u56de\u8c03\u51fd\u6570"),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"onComplete\u8bbe\u7f6e\u7684\u56de\u8c03\u4e2d\u4ece\u7b2c\u4e00\u4e2a\u53c2\u6570\u5f00\u59cb\u63a5\u6536")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const { send, onComplete } = useWatcher(currentPage => getTodoList(currentPage));\nonComplete(id => {\n    // currentPage\u5c06\u63a5\u6536\u52301\n});\nsend(1);\n")),(0,a.kt)("h2",{id:"\u8bbe\u7f6e\u521d\u59cb\u54cd\u5e94\u6570\u636e"},"\u8bbe\u7f6e\u521d\u59cb\u54cd\u5e94\u6570\u636e"),(0,a.kt)("p",null,"\u4e00\u4e2a\u9875\u9762\u5728\u83b7\u53d6\u5230\u521d\u59cb\u6570\u636e\u524d\uff0c\u4e0d\u53ef\u907f\u514d\u5730\u9700\u8981\u7b49\u5f85\u670d\u52a1\u7aef\u54cd\u5e94\uff0c\u5728\u54cd\u5e94\u524d\u4e00\u822c\u9700\u8981\u5148\u5c06\u72b6\u6001\u521d\u59cb\u5316\u4e3a\u4e00\u4e2a\u7a7a\u6570\u7ec4\u6216\u7a7a\u5bf9\u8c61\uff0c\u4ee5\u514d\u9020\u6210\u9875\u9762\u62a5\u9519\uff0c\u6211\u4eec\u53ef\u4ee5\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"useWatcher"),"\u4e2d\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5b9e\u73b0\u521d\u59cb\u6570\u636e\u7684\u8bbe\u7f6e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5728useWatcher\u4e2d\u540c\u6837\u53ef\u4ee5\u8bbe\u7f6edata\u7684\u521d\u59cb\u503c\nconst {\n  // \u54cd\u5e94\u524ddata\u7684\u521d\u59cb\u503c\u4e3a[]\uff0c\u800c\u4e0d\u662fundefined\n  data\n} = useWatcher(\n    () => getTodoList(/* \u53c2\u6570 */),\n    [/* \u76d1\u542c\u72b6\u6001 */],\n    {\n        initialData: []\n    }\n);\n")),(0,a.kt)("h2",{id:"\u8bf7\u6c42\u9632\u6296"},"\u8bf7\u6c42\u9632\u6296"),(0,a.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u90fd\u4f1a\u5728\u9891\u7e41\u89e6\u53d1\u7684\u4e8b\u4ef6\u5c42\u9762\u7f16\u5199\u9632\u6296\u4ee3\u7801\uff0c\u8fd9\u6b21\u6211\u4eec\u5728\u8bf7\u6c42\u5c42\u9762\u5b9e\u73b0\u4e86\u9632\u6296\u529f\u80fd\uff0c\u8fd9\u610f\u5473\u7740\u4f60\u518d\u4e5f\u4e0d\u7528\u5728\u6a21\u7cca\u641c\u7d22\u529f\u80fd\u4e2d\u81ea\u5df1\u5b9e\u73b0\u9632\u6296\u4e86\uff0c\u7528\u6cd5\u4e5f\u975e\u5e38\u7b80\u5355\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  loading,\n  data,\n  error\n} = useWatcher(() => filterTodoList(keyword), \n  [keyword], {\n\n    // highlight-start\n    // \u8bbe\u7f6edebounce\u5c5e\u6027\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\n    // \u5982\u8fd9\u8fb9\u7684keyword\u9891\u7e41\u53d8\u5316\uff0c\u53ea\u6709\u5728\u505c\u6b62\u53d8\u5316\u540e500ms\u624d\u53d1\u9001\u8bf7\u6c42\n    debounce: 500,\n    // highlight-end\n  }\n);\n")),(0,a.kt)("h2",{id:"\u624b\u52a8\u4e2d\u65ad\u8bf7\u6c42"},"\u624b\u52a8\u4e2d\u65ad\u8bf7\u6c42"),(0,a.kt)("p",null,"\u672a\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"timeout"),"\u53c2\u6570\u65f6\u8bf7\u6c42\u662f\u6c38\u4e0d\u8d85\u65f6\u7684\uff0c\u5982\u679c\u9700\u8981\u624b\u52a8\u4e2d\u65ad\u8bf7\u6c42\uff0c\u53ef\u4ee5\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"useWatcher"),"\u51fd\u6570\u88ab\u8c03\u7528\u65f6\u63a5\u6536",(0,a.kt)("inlineCode",{parentName:"p"},"abort"),"\u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n  // ...\n  // highlight-start\n  // abort\u51fd\u6570\u7528\u4e8e\u4e2d\u65ad\u8bf7\u6c42\n  abort\n  // highlight-end\n} = useWatcher(() => filterTodoList(keyword), [keyword]);\n\n// highlight-start\n// \u8c03\u7528abort\u5373\u53ef\u4e2d\u65ad\u8bf7\u6c42\nconst handleCancel = () => {\n  abort();\n};\n// highlight-end\n")))}m.isMDXComponent=!0}}]);