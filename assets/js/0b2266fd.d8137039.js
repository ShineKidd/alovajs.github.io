"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5259],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,b=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return r?n.createElement(b,i(i({ref:t},m),{},{components:r})):n.createElement(b,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3894:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{let{src:t}=e;return n.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},4085:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var n=r(7462),a=r(7294),o=r(3905),i=r(3894);const l=()=>a.createElement(i.Z,{src:"https://codesandbox.io/p/sandbox/github/alovajs/alova-examples/tree/main/packages/editor-silent-react?embed=1&file=%2Fsrc%2FApp.tsx"}),s={title:"Silent submit - Notebook",sidebar_position:140},p=void 0,m={unversionedId:"tutorial/example/silent-submit-notes",id:"tutorial/example/silent-submit-notes",title:"Silent submit - Notebook",description:"The example uses react as an example, but you can also use alova in vue3 and svelte, please read the Getting Started Guide for details;",source:"@site/docs/tutorial/02-example/14-silent-submit-notes.md",sourceDirName:"tutorial/02-example",slug:"/tutorial/example/silent-submit-notes",permalink:"/tutorial/example/silent-submit-notes",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-example/14-silent-submit-notes.md",tags:[],version:"current",sidebarPosition:140,frontMatter:{title:"Silent submit - Notebook",sidebar_position:140},sidebar:"tutorialSidebar",previous:{title:"Silent submit - Simple List",permalink:"/tutorial/example/silent-submit-simple-list"},next:{title:"Form submit strategy",permalink:"/tutorial/example/form-hook"}},c={},u=[],d={toc:u};function b(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The example uses react as an example, but you can also use alova in vue3 and svelte, please read the ",(0,o.kt)("a",{parentName:"p",href:"../get-started/overview"},"Getting Started Guide")," for details;")),(0,o.kt)(l,{mdxType:"NoteSilentReact"}),(0,o.kt)("admonition",{title:"example description",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A simple list implemented using the silent submission strategy, which responds immediately after submission, greatly reduces the impact of network fluctuations, allowing your application to remain very smooth even when the network is unstable or even disconnected."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"Operation guidance:")),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Add, edit, and delete notes, it will generate feedback immediately without waiting for the server to respond;"),(0,o.kt)("li",{parentName:"ol"},"Switch the request mode and network status to experience the difference between them;")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"../../category/sensorless-data-interaction"},"Silent submit strategy document"))))}b.isMDXComponent=!0}}]);