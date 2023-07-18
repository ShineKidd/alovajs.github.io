"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[889],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,f=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3894:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294);const n=e=>{let{src:t}=e;return r.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},1088:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>m});var r=a(7462),n=a(7294),o=a(3905),i=a(3894);const l=()=>n.createElement(i.Z,{src:"https://codesandbox.io/embed/github/alovajs/alova-examples/tree/main/packages/load-more?fontsize=14&hidenavigation=1&theme=dark"}),p={title:"Load more",sidebar_position:90},s=void 0,c={unversionedId:"example/load-more",id:"example/load-more",title:"Load more",description:"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the Getting Started Guide;",source:"@site/docs/02-example/09-load-more.md",sourceDirName:"02-example",slug:"/example/load-more",permalink:"/zh-CN/example/load-more",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/02-example/09-load-more.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"Load more",sidebar_position:90},sidebar:"tutorialSidebar",previous:{title:"Data Prefetch",permalink:"/zh-CN/example/prefetch"},next:{title:"\u9875\u7801\u5217\u8868",permalink:"/zh-CN/example/paginated-list"}},d={},m=[],u={toc:m};function f(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the ",(0,o.kt)("a",{parentName:"p",href:"/get-started/overview"},"Getting Started Guide"),";")),(0,o.kt)(l,{mdxType:"LoadMore"}),(0,o.kt)("admonition",{title:"example description",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Using pagination strategy, achieve a more high-performance and easy-to-use pagination function, automatic management of paging-related status, preloading of previous and previous pages, and automatic maintenance of data addition/editing/replacement/ Removed, and request-level stabilization."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"Operation guide:")),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"After the initialization is completed, the next page of data will be preloaded, and there is no need to wait for scrolling down the page;"),(0,o.kt)("li",{parentName:"ol"},"Adding, deleting, and modifying list items does not need to reset the list, it will be automatically processed into the same effect as the re-request;")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/strategy/usePagination"},"usePagination documentation"))))}f.isMDXComponent=!0}}]);