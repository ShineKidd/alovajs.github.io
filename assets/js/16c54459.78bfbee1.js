"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[574],{56274:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>u,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var t=o(85893),a=o(11151),l=o(74866),r=o(85162);const s={title:"Download & Upload Progress"},d=void 0,i={id:"tutorial/combine-framework/download-upload-progress",title:"Download & Upload Progress",description:"useHook provides downloading and uploading for displaying progress information directly in the view.",source:"@site/versioned_docs/version-2.x/tutorial/03-combine-framework/07-download-upload-progress.md",sourceDirName:"tutorial/03-combine-framework",slug:"/tutorial/combine-framework/download-upload-progress",permalink:"/tutorial/combine-framework/download-upload-progress",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/03-combine-framework/07-download-upload-progress.md",tags:[],version:"2.x",sidebarPosition:7,frontMatter:{title:"Download & Upload Progress"},sidebar:"tutorial",previous:{title:"Abort Request",permalink:"/tutorial/combine-framework/abort-request"},next:{title:"Receive Params",permalink:"/tutorial/combine-framework/receive-params"}},u={},c=[{value:"Download progress",id:"download-progress",level:2},{value:"Upload progress",id:"upload-progress",level:2}];function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["useHook provides ",(0,t.jsx)(n.code,{children:"downloading"})," and ",(0,t.jsx)(n.code,{children:"uploading"})," for displaying progress information directly in the view."]}),"\n",(0,t.jsx)(n.h2,{id:"download-progress",children:"Download progress"}),"\n",(0,t.jsxs)(n.p,{children:["For performance reasons, there is no progress information in ",(0,t.jsx)(n.code,{children:"downloading"})," by default. You need to set ",(0,t.jsx)(n.code,{children:"enableDownload"})," of the method instance to ",(0,t.jsx)(n.code,{children:"true"}),", which will continuously update the ",(0,t.jsx)(n.code,{children:"downloading"})," status during the download process."]}),"\n",(0,t.jsxs)(l.Z,{groupId:"framework",children:[(0,t.jsx)(r.Z,{value:"1",label:"vue composition",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<template>\n  <div>File size: {{ downloading.total }}B</div>\n  <div>Downloaded: {{ downloading.loaded }}B</div>\n  <div>Progress: {{ downloading.loaded / downloading.total * 100 }}%</div>\n</template>\n\n<script setup>\n  const downloadGetter = alovaInstance.Get('/todo/downloadfile', {\n    // highlight-start\n    // Start download progress\n    enableDownload: true\n    // highlight-end\n  });\n  const { downloading } = useRequest(downloadGetter);\n<\/script>\n"})})}),(0,t.jsx)(r.Z,{value:"2",label:"react",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const downloadGetter = alovaInstance.Get('/todo/downloadfile', {\n  // highlight-start\n  // Start download progress\n  enableDownload: true\n  // highlight-end\n});\n\nconst App = () => {\n  const { downloading } = useRequest(downloadGetter);\n  return (\n    <>\n      <div>File size: {downloading.total}B</div>\n      <div>Downloaded: {downloading.loaded}B</div>\n      <div>Progress: {(downloading.loaded / downloading.total) * 100}%</div>\n    </>\n  );\n};\n"})})}),(0,t.jsx)(r.Z,{value:"3",label:"svelte",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<script>\n  const downloadGetter = alovaInstance.Get('/todo/downloadfile', {\n    // highlight-start\n    // Start download progress\n    enableDownload: true\n    // highlight-end\n  });\n  const { downloading } = useRequest(downloadGetter);\n<\/script>\n\n<div>File size: {$downloading.total}B</div>\n<div>Downloaded: {$downloading.loaded}B</div>\n<div>Progress: {$downloading.loaded / $downloading.total * 100}%</div>\n"})})}),(0,t.jsx)(r.Z,{value:"4",label:"vue options",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<template>\n  <div>File size: {{ file.downloading.total }}B</div>\n  <div>Downloaded: {{ file.downloading.loaded }}B</div>\n  <div>Progress: {{ file.downloading.loaded / file.downloading.total * 100 }}%</div>\n</template>\n\n<script>\n  import { useRequest } from 'alova';\n  import { mapAlovaHook } from '@alova/vue-options';\n\n  const downloadGetter = alovaInstance.Get('/todo/downloadfile', {\n    // highlight-start\n    // Start download progress\n    enableDownload: true\n    // highlight-end\n  });\n  export default {\n    mixins: mapAlovaHook(function () {\n      return {\n        file: useRequest(downloadGetter)\n      };\n    })\n  };\n<\/script>\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"upload-progress",children:"Upload progress"}),"\n",(0,t.jsxs)(n.p,{children:["Using the upload progress status is the same as using the download progress. First enable the upload progress information through ",(0,t.jsx)(n.code,{children:"enableUpload"}),", and then receive it by receiving the ",(0,t.jsx)(n.code,{children:"uploading"})," responsive state."]}),"\n",(0,t.jsxs)(l.Z,{groupId:"framework",children:[(0,t.jsx)(r.Z,{value:"1",label:"vue",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<template>\n  <div>File size: {{ uploading.total }}B</div>\n  <div>Uploaded: {{ uploading.loaded }}B</div>\n  <div>Progress: {{ uploading.loaded / uploading.total * 100 }}%</div>\n</template>\n\n<script setup>\n  const uploadPoster = alovaInstance.Post('/todo/uploadfile', formData, {\n    // highlight-start\n    // Start upload progress\n    enableUpload: true\n    // highlight-end\n  });\n  const { uploading } = useRequest(uploadPoster);\n<\/script>\n"})})}),(0,t.jsx)(r.Z,{value:"2",label:"react",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"const uploadPoster = alovaInstance.Post('/todo/uploadfile', formData, {\n  // highlight-start\n  // Start upload progress\n  enableUpload: true\n  // highlight-end\n});\n\nconst App = () => {\n  const { uploading } = useRequest(uploadPoster);\n  return (\n    <>\n      <div>File size: {uploading.total}B</div>\n      <div>Uploaded: {uploading.loaded}B</div>\n      <div>Progress: {(uploading.loaded / uploading.total) * 100}%</div>\n    </>\n  );\n};\n"})})}),(0,t.jsx)(r.Z,{value:"3",label:"svelte",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<script>\n  const uploadPoster = alovaInstance.Post('/todo/uploadfile', formData, {\n    // highlight-start\n    // Start upload progress\n    enableUpload: true\n    // highlight-end\n  });\n  const { uploading } = useRequest(uploadPoster);\n<\/script>\n\n<div>File size: {$uploading.total}B</div>\n<div>Uploaded: {$uploading.loaded}B</div>\n<div>Progress: {$uploading.loaded / $uploading.total * 100}%</div>\n"})})}),(0,t.jsx)(r.Z,{value:"4",label:"vue options",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<template>\n  <div>File size: {{ file.uploading.total }}B</div>\n  <div>Uploaded: {{ file.uploading.loaded }}B</div>\n  <div>Progress: {{ file.uploading.loaded / uploading.total * 100 }}%</div>\n</template>\n\n<script>\n  const uploadPoster = alovaInstance.Post('/todo/uploadfile', formData, {\n    // highlight-start\n    // Start upload progress\n    enableUpload: true\n    // highlight-end\n  });\n\n  export default {\n    mixins: mapAlovaHook(function () {\n      return {\n        file: useRequest(uploadPoster)\n      };\n    })\n  };\n<\/script>\n"})})})]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},85162:(e,n,o)=>{o.d(n,{Z:()=>r});o(67294);var t=o(90512);const a={tabItem:"tabItem_Ymn6"};var l=o(85893);function r(e){let{children:n,hidden:o,className:r}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,r),hidden:o,children:n})}},74866:(e,n,o)=>{o.d(n,{Z:()=>k});var t=o(67294),a=o(90512),l=o(12466),r=o(16550),s=o(20469),d=o(91980),i=o(67392),u=o(20812);function c(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:o}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:o,attributes:t,default:a}}=e;return{value:n,label:o,attributes:t,default:a}}))}(o);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,o])}function g(e){let{value:n,tabValues:o}=e;return o.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:o}=e;const a=(0,r.k6)(),l=function(e){let{queryString:n=!1,groupId:o}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:n,groupId:o});return[(0,d._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function v(e){const{defaultValue:n,queryString:o=!1,groupId:a}=e,l=p(e),[r,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=o.find((e=>e.default))??o[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[i,c]=h({queryString:o,groupId:a}),[v,m]=function(e){let{groupId:n}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,u.Nk)(o);return[a,(0,t.useCallback)((e=>{o&&l.set(e)}),[o,l])]}({groupId:a}),f=(()=>{const e=i??v;return g({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{f&&d(f)}),[f]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);d(e),c(e),m(e)}),[c,m,l]),tabValues:l}}var m=o(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=o(85893);function w(e){let{className:n,block:o,selectedValue:t,selectValue:r,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.o5)(),u=e=>{const n=e.currentTarget,o=d.indexOf(n),a=s[o].value;a!==t&&(i(n),r(a))},c=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const o=d.indexOf(e.currentTarget)+1;n=d[o]??d[0];break}case"ArrowLeft":{const o=d.indexOf(e.currentTarget)-1;n=d[o]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},n),children:s.map((e=>{let{value:n,label:o,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:c,onClick:u,...l,className:(0,a.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":t===n}),children:o??n},n)}))})}function x(e){let{lazy:n,children:o,selectedValue:a}=e;const l=(Array.isArray(o)?o:[o]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function j(e){const n=v(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(w,{...n,...e}),(0,b.jsx)(x,{...n,...e})]})}function k(e){const n=(0,m.Z)();return(0,b.jsx)(j,{...e,children:c(e.children)},String(n))}},11151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>r});var t=o(67294);const a={},l=t.createContext(a);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);