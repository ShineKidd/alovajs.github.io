"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[21],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(b,i(i({ref:t},m),{},{components:n})):r.createElement(b,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3894:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);const a=e=>{let{src:t}=e;return r.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:"0",borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>s,metadata:()=>m,toc:()=>u});var r=n(7462),a=n(7294),o=n(3905),i=n(3894);const l=()=>a.createElement(i.Z,{src:"https://codesandbox.io/embed/github/alovajs/alova-examples/tree/main/packages/editor-silent-react?fontsize=14&hidenavigation=1&moduleview=1&theme=dark"}),s={title:"Silent Commit - Notebook",sidebar_position:123},p=void 0,m={unversionedId:"example/silent-submit-notes",id:"example/silent-submit-notes",title:"Silent Commit - Notebook",description:"The example uses react as an example, but you can also use alova in vue3 and svelte, please read the Getting Started Guide for details;",source:"@site/docs/02-example/13-silent-submit-notes.md",sourceDirName:"02-example",slug:"/example/silent-submit-notes",permalink:"/example/silent-submit-notes",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/02-example/13-silent-submit-notes.md",tags:[],version:"current",sidebarPosition:123,frontMatter:{title:"Silent Commit - Notebook",sidebar_position:123},sidebar:"tutorialSidebar",previous:{title:"Silent Commit - Simple List",permalink:"/example/silent-submit-simple-list"},next:{title:"Learning",permalink:"/category/learning"}},c={},u=[],d={toc:u};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The example uses react as an example, but you can also use alova in vue3 and svelte, please read the ",(0,o.kt)("a",{parentName:"p",href:"/get-started/overview"},"Getting Started Guide")," for details;")),(0,o.kt)(l,{mdxType:"NoteSilentReact"}),(0,o.kt)("admonition",{title:"example description",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A simple list implemented using the silent submission strategy, which responds immediately after submission, greatly reduces the impact of network fluctuations, allowing your application to remain very smooth even when the network is unstable or even disconnected."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"Operation guidance:")),(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Add, edit, and delete notes, it will generate feedback immediately without waiting for the server to respond;"),(0,o.kt)("li",{parentName:"ol"},"Switch the request mode and network status to experience the difference between them;")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/category/sensorless-data-interaction"},"Silent submit policy document"))))}b.isMDXComponent=!0}}]);