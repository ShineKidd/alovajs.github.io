"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9085],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,v=c["".concat(i,".").concat(m)]||c[m]||u[m]||l;return n?a.createElement(v,r(r({ref:t},p),{},{components:n})):a.createElement(v,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=c;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),l=n(6010),r=n(2389),d=n(7392),i=n(7094),s=n(2466);const p="tabList__CuJ",u="tabItem_LNqP";function c(e){var t;const{lazy:n,block:r,defaultValue:c,values:m,groupId:v,className:b}=e,g=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),w=(0,d.l)(f,((e,t)=>e.value===t.value));if(w.length>0)throw new Error(`Docusaurus error: Duplicate values "${w.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,i.U)(),[N,T]=(0,o.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=v){const e=h[v];null!=e&&e!==N&&f.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==N&&(O(t),T(a),null!=v&&y(v,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},b)},f.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:j,onClick:E},r,{className:(0,l.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,r.Z)();return o.createElement(c,(0,a.Z)({key:String(t)},e))}},5340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),l=n(5488),r=n(5162);const d={title:"\u4e0b\u8f7d/\u4e0a\u4f20\u8fdb\u5ea6",sidebar_position:60},i=void 0,s={unversionedId:"next-step/download-upload-progress",id:"next-step/download-upload-progress",title:"\u4e0b\u8f7d/\u4e0a\u4f20\u8fdb\u5ea6",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0a\u4f20\u548c\u4e0b\u8f7d\u8fdb\u5ea6\u662f\u5173\u95ed\u7684\uff0c\u4f60\u9700\u8981\u5728\u5728\u6307\u5b9a\u7684Method\u5b9e\u4f8b\u4e0a\u5f00\u542f\u4e0a\u4f20\u548c\u4e0b\u8f7d\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5177\u4f53\u5982\u4e0b\uff1a",source:"@site/docs/06-next-step/06-download-upload-progress.md",sourceDirName:"06-next-step",slug:"/next-step/download-upload-progress",permalink:"/next-step/download-upload-progress",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/tree/main/docs/templates/shared/docs/06-next-step/06-download-upload-progress.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{title:"\u4e0b\u8f7d/\u4e0a\u4f20\u8fdb\u5ea6",sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"\u4e32\u884c\u8bf7\u6c42",permalink:"/next-step/serial-request"},next:{title:"\u9759\u9ed8/\u79bb\u7ebf\u63d0\u4ea4",permalink:"/next-step/silent-offline-submit"}},p={},u=[{value:"\u4e0b\u8f7d\u8fdb\u5ea6",id:"\u4e0b\u8f7d\u8fdb\u5ea6",level:2},{value:"\u4e0a\u4f20\u8fdb\u5ea6",id:"\u4e0a\u4f20\u8fdb\u5ea6",level:2},{value:"\u4e0a\u4f20/\u4e0b\u8f7d\u72b6\u6001\u7c7b\u578b",id:"\u4e0a\u4f20\u4e0b\u8f7d\u72b6\u6001\u7c7b\u578b",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0a\u4f20\u548c\u4e0b\u8f7d\u8fdb\u5ea6\u662f\u5173\u95ed\u7684\uff0c\u4f60\u9700\u8981\u5728\u5728\u6307\u5b9a\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Method"),"\u5b9e\u4f8b\u4e0a\u5f00\u542f\u4e0a\u4f20\u548c\u4e0b\u8f7d\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,o.kt)("h2",{id:"\u4e0b\u8f7d\u8fdb\u5ea6"},"\u4e0b\u8f7d\u8fdb\u5ea6"),(0,o.kt)("p",null,"\u5148\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"enableDownload"),"\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5373\u8868\u793a\u5f00\u542f\u4e86\u4e0b\u8f7d\u8fdb\u5ea6\uff0c\u7136\u540e\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"useRequest"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"useWatcher"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"useFetcher"),"\u4e09\u4e2ause hook\u4e2d\u63a5\u6536",(0,o.kt)("inlineCode",{parentName:"p"},"downloading"),"\u54cd\u5e94\u5f0f\u72b6\u6001\uff0c\u4e0b\u8f7d\u8fc7\u7a0b\u4e2d\u5c06\u6301\u7eed\u66f4\u65b0\u8fd9\u4e2a\u72b6\u6001\u3002"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{label:"vue",value:"1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\u6587\u4ef6\u5927\u5c0f\uff1a{{ downloading.total }}B</div>\n  <div>\u5df2\u4e0b\u8f7d\uff1a{{ downloading.loaded }}B</div>\n  <div>\u8fdb\u5ea6\uff1a{{ downloading.loaded / downloading.total * 100 }}%</div>\n</template>\n\n<script setup>\nconst downloadGetter = alovaInstance.Get('/tood/downloadfile', {\n  enableDownload: true\n});\nconst {\n  dowinlading\n} = useRequest(downloadGetter);\n<\/script>\n"))),(0,o.kt)(r.Z,{label:"react",value:"2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const downloadGetter = alovaInstance.Get('/tood/downloadfile', {\n  enableDownload: true\n});\n\nconst App = () => {\n  const {\n    dowinlading\n  } = useRequest(downloadGetter);\n  return <>\n    <div>\u6587\u4ef6\u5927\u5c0f\uff1a{downloading.total}B</div>\n    <div>\u5df2\u4e0b\u8f7d\uff1a{downloading.loaded}B</div>\n    <div>\u8fdb\u5ea6\uff1a{downloading.loaded / downloading.total * 100}%</div>\n  </>;\n}\n"))),(0,o.kt)(r.Z,{label:"svelte",value:"3",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nconst downloadGetter = alovaInstance.Get('/tood/downloadfile', {\n  enableDownload: true\n});\nconst {\n  dowinlading\n} = useRequest(downloadGetter);\n<\/script>\n\n<div>\u6587\u4ef6\u5927\u5c0f\uff1a{downloading.total}B</div>\n<div>\u5df2\u4e0b\u8f7d\uff1a{downloading.loaded}B</div>\n<div>\u8fdb\u5ea6\uff1a{downloading.loaded / downloading.total * 100}%</div>\n")))),(0,o.kt)("h2",{id:"\u4e0a\u4f20\u8fdb\u5ea6"},"\u4e0a\u4f20\u8fdb\u5ea6"),(0,o.kt)("p",null,"\u4e0a\u4f20\u8fdb\u5ea6\u4e0e\u4e0b\u8f7d\u8fdb\u5ea6\u4f7f\u7528\u65b9\u6cd5\u76f8\u540c\uff0c\u5148\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"enableUpload"),"\u5f00\u542f\u4e0a\u4f20\u8fdb\u5ea6\u4fe1\u606f\uff0c\u518d\u901a\u8fc7\u63a5\u6536",(0,o.kt)("inlineCode",{parentName:"p"},"uploading"),"\u54cd\u5e94\u5f0f\u72b6\u6001\u63a5\u6536\u3002"),(0,o.kt)(l.Z,{mdxType:"Tabs"},(0,o.kt)(r.Z,{label:"vue",value:"1",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<template>\n  <div>\u6587\u4ef6\u5927\u5c0f\uff1a{{ uploading.total }}B</div>\n  <div>\u5df2\u4e0a\u4f20\uff1a{{ uploading.loaded }}B</div>\n  <div>\u8fdb\u5ea6\uff1a{{ uploading.loaded / uploading.total * 100 }}%</div>\n</template>\n\n<script setup>\nconst downloadGetter = alovaInstance.Get('/tood/uploadfile', {\n  enableUpload: true\n});\nconst {\n  uploading\n} = useRequest(downloadGetter);\n<\/script>\n"))),(0,o.kt)(r.Z,{label:"react",value:"2",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const downloadGetter = alovaInstance.Get('/tood/uploadfile', {\n  enableUpload: true\n});\n\nconst App = () => {\n  const {\n    uploading\n  } = useRequest(downloadGetter);\n  return <>\n    <div>\u6587\u4ef6\u5927\u5c0f\uff1a{uploading.total}B</div>\n    <div>\u5df2\u4e0a\u4f20\uff1a{uploading.loaded}B</div>\n    <div>\u8fdb\u5ea6\uff1a{uploading.loaded / uploading.total * 100}%</div>\n  </>;\n}\n"))),(0,o.kt)(r.Z,{label:"svelte",value:"3",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nconst downloadGetter = alovaInstance.Get('/tood/uploadfile', {\n  enableUpload: true\n});\nconst {\n  uploading\n} = useRequest(downloadGetter);\n<\/script>\n\n<div>\u6587\u4ef6\u5927\u5c0f\uff1a{uploading.total}B</div>\n<div>\u5df2\u4e0a\u4f20\uff1a{uploading.loaded}B</div>\n<div>\u8fdb\u5ea6\uff1a{uploading.loaded / uploading.total * 100}%</div>\n")))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"GlobalFetch"),"\u9002\u914d\u5668\u9700\u6ce8\u610f"),(0,o.kt)("p",{parentName:"admonition"},"\u56e0fetch api\u9650\u5236\uff0calova\u63d0\u4f9b\u7684 ",(0,o.kt)("strong",{parentName:"p"},"GlobalFetch")," \u9002\u914d\u5668\u4e0d\u652f\u6301\u4e0a\u4f20\u8fdb\u5ea6\uff0c\u540e\u7eed\u5c06\u9646\u7eed\u63d0\u4f9b\u66f4\u52a0\u5b8c\u5584\u7684\u8bf7\u6c42\u9002\u914d\u5668\u3002\u76ee\u524d\u5982\u9700\u8981\u4e0a\u4f20\u8fdb\u5ea6\uff0c\u8bf7\u81ea\u884c\u7f16\u5199\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u8be6\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"../advanced/custom-http-adapter"},"\u7f16\u5199\u8bf7\u6c42\u9002\u914d\u5668"),"\u3002")),(0,o.kt)("h2",{id:"\u4e0a\u4f20\u4e0b\u8f7d\u72b6\u6001\u7c7b\u578b"},"\u4e0a\u4f20/\u4e0b\u8f7d\u72b6\u6001\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"type Progress = {\n  /** \u4e0a\u4f20\u6216\u4e0b\u8f7d\u7684\u6570\u636e\u603b\u6570\u636e\u91cf */\n  total: number;\n  /** \u5df2\u5b8c\u6210\u7684\u6570\u636e */\n  loaded: number;\n};\n")))}m.isMDXComponent=!0}}]);