"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7462],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(t),d=o,f=g["".concat(s,".").concat(d)]||g[d]||u[d]||a;return t?n.createElement(f,i(i({ref:r},c),{},{components:t})):n.createElement(f,i({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1458:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={title:"error log",sidebar_position:110},i=void 0,l={unversionedId:"next-step/error-log",id:"next-step/error-log",title:"error log",description:"v2.6.0+",source:"@site/docs/06-next-step/11-error-log.md",sourceDirName:"06-next-step",slug:"/next-step/error-log",permalink:"/next-step/error-log",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/06-next-step/11-error-log.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{title:"error log",sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"Download/Upload progress",permalink:"/next-step/download-upload-progress"},next:{title:"Strategy",permalink:"/category/strategy"}},s={},p=[{value:"Turn off printing error log",id:"turn-off-printing-error-log",level:2},{value:"Custom print error log",id:"custom-print-error-log",level:2}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Tips",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"v2.6.0+")),(0,o.kt)("p",null,"For the convenience of debugging, when using use hooks to request or respond to an error, the error log will be printed on the console by default. If you do not want to print an error message or customize the control to print an error message in some cases (such as a production environment), alova also Support for them is provided."),(0,o.kt)("h2",{id:"turn-off-printing-error-log"},"Turn off printing error log"),(0,o.kt)("p",null,"Log printing can be turned off by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"errorLogger")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false or null")," when creating an alova instance."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  //...\n  errorLogger: false\n});\n")),(0,o.kt)("h2",{id:"custom-print-error-log"},"Custom print error log"),(0,o.kt)("p",null,"The error log is printed by ",(0,o.kt)("inlineCode",{parentName:"p"},"console.error")," by default. If ",(0,o.kt)("inlineCode",{parentName:"p"},"console.error")," is not supported in your project environment, or if you want to collect error information, you can specify ",(0,o.kt)("inlineCode",{parentName:"p"},"errorLogger")," as a function to customize error log."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const alovaInstance = createAlova({\n  //...\n  // error is the error instance, methodInstance is the method instance corresponding to the error\n  errorLogger(error, methodInstance) {\n    reportError(`${methodInstance.url}: ${error.message}`);\n  }\n});\n")))}u.isMDXComponent=!0}}]);