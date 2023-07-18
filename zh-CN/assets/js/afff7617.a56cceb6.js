"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1975],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?a.createElement(f,i(i({ref:t},c),{},{components:r})):a.createElement(f,i({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3894:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);const n=e=>{let{src:t}=e;return a.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},2036:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var a=r(7462),n=r(7294),o=r(3905),i=r(3894);const l=()=>n.createElement(i.Z,{src:"https://codesandbox.io/embed/github/alovajs/alova-examples/tree/main/packages/prefetch?fontsize=14&hidenavigation=1&theme=dark"}),p={title:"Data Prefetch",sidebar_position:80},s=void 0,c={unversionedId:"example/prefetch",id:"example/prefetch",title:"Data Prefetch",description:"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the Getting Started Guide;",source:"@site/docs/02-example/08-prefetch.md",sourceDirName:"02-example",slug:"/example/prefetch",permalink:"/zh-CN/example/prefetch",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/02-example/08-prefetch.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"Data Prefetch",sidebar_position:80},sidebar:"tutorialSidebar",previous:{title:"\u8de8\u7ec4\u4ef6/\u9875\u9762\u66f4\u65b0\u72b6\u6001",permalink:"/zh-CN/example/update-state"},next:{title:"Load more",permalink:"/zh-CN/example/load-more"}},m={},d=[],u={toc:d};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The example uses vue3 as an example, but you can also use alova in react and svelte. For details, please read the ",(0,o.kt)("a",{parentName:"p",href:"/get-started/overview"},"Getting Started Guide"),";")),(0,o.kt)(l,{mdxType:"Prefetch"}),(0,o.kt)("admonition",{title:"example description",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Data pre-fetching is a way to predict user operation behavior to achieve a strategy of displaying content to users faster."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"Operation guide:")),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Move the mouse to any list item and stay there for 0.2 seconds, a request for detailed data will be sent on the bottom panel;"),(0,o.kt)("li",{parentName:"ol"},"Click to open this list item, you can see the detailed data immediately;"))))}f.isMDXComponent=!0}}]);