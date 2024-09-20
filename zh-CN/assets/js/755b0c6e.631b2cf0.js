"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7976],{96827:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=a(85893),r=a(11151),l=a(74866),s=a(85162);const o={title:"\u542f\u52a8\u9759\u9ed8\u5de5\u5382"},i=void 0,c={id:"tutorial/strategy/seamless-data-interaction/start-silent-factory",title:"\u542f\u52a8\u9759\u9ed8\u5de5\u5382",description:"\u6211\u4eec\u5c06\u6240\u6709\u573a\u666f\u5316\u7684\u8bf7\u6c42\u7b56\u7565\u653e\u5728\u4e86\u53eb\u505a@alova/scene-*\u7684 js \u5305\u4e2d\uff0c\u4f7f\u7528\u524d\u4f60\u9700\u8981\u5148\u5b89\u88c5\u5b83\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-v2/tutorial/05-strategy/01-seamless-data-interaction/03-start-silent-factory.md",sourceDirName:"tutorial/05-strategy/01-seamless-data-interaction",slug:"/tutorial/strategy/seamless-data-interaction/start-silent-factory",permalink:"/zh-CN/v2/tutorial/strategy/seamless-data-interaction/start-silent-factory",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/05-strategy/01-seamless-data-interaction/03-start-silent-factory.md",tags:[],version:"v2",sidebarPosition:3,frontMatter:{title:"\u542f\u52a8\u9759\u9ed8\u5de5\u5382"},sidebar:"tutorial",previous:{title:"\u865a\u62df\u6570\u636e",permalink:"/zh-CN/v2/tutorial/strategy/seamless-data-interaction/virtual-data"},next:{title:"\u6b65\u9aa41-\u4ee5\u4fdd\u5b88\u8bf7\u6c42\u5b9e\u73b0\u529f\u80fd",permalink:"/zh-CN/v2/tutorial/strategy/seamless-data-interaction/conservative-request"}},u={},d=[];function m(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["\u6211\u4eec\u5c06\u6240\u6709\u573a\u666f\u5316\u7684\u8bf7\u6c42\u7b56\u7565\u653e\u5728\u4e86\u53eb\u505a",(0,n.jsx)(t.code,{children:"@alova/scene-*"}),"\u7684 js \u5305\u4e2d\uff0c\u4f7f\u7528\u524d\u4f60\u9700\u8981\u5148\u5b89\u88c5\u5b83\u3002"]}),"\n",(0,n.jsxs)(l.Z,{groupId:"framework",children:[(0,n.jsx)(s.Z,{value:"1",label:"vue",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-vue --save\n# yarn\nyarn add @alova/scene-vue\n\n"})})}),(0,n.jsx)(s.Z,{value:"2",label:"react",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-react --save\n# yarn\nyarn add @alova/scene-react\n\n"})})}),(0,n.jsx)(s.Z,{value:"3",label:"svelte",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-svelte --save\n# yarn\nyarn add @alova/scene-svelte\n\n"})})})]}),"\n",(0,n.jsxs)(t.p,{children:["\u9759\u9ed8\u961f\u5217\u9ed8\u8ba4\u4e0d\u542f\u52a8\uff0c\u9700\u8981\u6211\u4eec\u6307\u5b9a\u542f\u52a8\u53c2\u6570\u8fdb\u884c\u521d\u59cb\u5316\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u8c03\u7528",(0,n.jsx)(t.code,{children:"bootSilentFactory"}),"\u6765\u521d\u59cb\u5316\u9759\u9ed8\u5de5\u5382\uff0c\u5b83\u5c06\u901a\u8fc7\u6307\u5b9a\u7684\u914d\u7f6e\u9879\u6765\u8bfb\u53d6\u8fd8\u672a\u6267\u884c\u7684\u8bf7\u6c42\u5230\u5bf9\u5e94\u7684\u9759\u9ed8\u961f\u5217\u4e2d\u5e76\u542f\u52a8\u8fd9\u4e9b\u961f\u5217\u3002"]}),"\n",(0,n.jsxs)(l.Z,{groupId:"framework",children:[(0,n.jsx)(s.Z,{value:"1",label:"vue",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { bootSilentFactory } from '@alova/scene-vue';\nimport { alovaInst } from '@/api';\n\nbootSilentFactory({\n  // \u542f\u52a8\u65f6\u6307\u5b9a alova \u5b9e\u4f8b\uff0c\u7528\u4e8e\u8bf7\u6c42\u4fe1\u606f\u5b58\u50a8\u3001\u8bf7\u6c42\u53d1\u9001\n  alova: alovaInst,\n\n  // \u5ef6\u8fdf\u542f\u52a8\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u9ed8\u8ba4\u4e3a2000ms\uff0c\u5177\u4f53\u63cf\u8ff0\u770b\u540e\u7eed\u8bf4\u660e\n  delay: 1000\n});\n"})})}),(0,n.jsx)(s.Z,{value:"2",label:"react",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { bootSilentFactory } from '@alova/scene-react';\nimport { alovaInst } from '@/api';\n\nbootSilentFactory({\n  // \u542f\u52a8\u65f6\u6307\u5b9a alova \u5b9e\u4f8b\uff0c\u7528\u4e8e\u8bf7\u6c42\u4fe1\u606f\u5b58\u50a8\u3001\u8bf7\u6c42\u53d1\u9001\n  alova: alovaInst,\n\n  // \u5ef6\u8fdf\u542f\u52a8\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u9ed8\u8ba4\u4e3a2000ms\uff0c\u5177\u4f53\u63cf\u8ff0\u770b\u540e\u7eed\u8bf4\u660e\n  delay: 1000\n});\n"})})}),(0,n.jsx)(s.Z,{value:"3",label:"svelte",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { bootSilentFactory } from '@alova/scene-svelte';\nimport { alovaInst } from '@/api';\n\nbootSilentFactory({\n  // \u542f\u52a8\u65f6\u6307\u5b9a alova \u5b9e\u4f8b\uff0c\u7528\u4e8e\u8bf7\u6c42\u4fe1\u606f\u5b58\u50a8\u3001\u8bf7\u6c42\u53d1\u9001\n  alova: alovaInst,\n\n  // \u5ef6\u8fdf\u542f\u52a8\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\uff0c\u9ed8\u8ba4\u4e3a2000ms\uff0c\u5177\u4f53\u63cf\u8ff0\u770b\u540e\u7eed\u8bf4\u660e\n  delay: 1000\n});\n"})})})]}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsxs)(t.mdxAdmonitionTitle,{children:[(0,n.jsx)(t.code,{children:"delay"}),"\u53c2\u6570\u8bf4\u660e"]}),(0,n.jsx)(t.p,{children:"\u5728\u5b9e\u9645\u573a\u666f\u4e0b\uff0c\u8fdb\u5165\u5f53\u524d\u9875\u9762\u65f6\u4e5f\u4f1a\u53d1\u9001\u8bf7\u6c42\u52a0\u8f7d\u9875\u9762\u6570\u636e\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u7528\u6237\u53ef\u4ee5\u66f4\u5feb\u5730\u770b\u5230\u9875\u9762\u6570\u636e\uff0c\u9700\u8981\u5c06\u52a0\u8f7d\u6570\u636e\u7684\u8bf7\u6c42\u524d\u7f6e\u5230\u961f\u5217\u8d77\u59cb\u4f4d\u7f6e\uff0c\u5426\u5219\u53ef\u80fd\u4f1a\u9020\u6210\u52a0\u8f7d\u6570\u636e\u7684\u8bf7\u6c42\u540e\u7f6e\u5230\u961f\u5217\u5c3e\u90e8\uff0c\u6b64\u65f6\u5c31\u9700\u8981\u7b49\u5230\u524d\u9762\u7684\u6240\u6709\u8bf7\u6c42\u5b8c\u6210\u624d\u4f1a\u52a0\u8f7d\u9875\u9762\u6570\u636e\uff0c\u8fd9\u663e\u7136\u662f\u4e0d\u5408\u9002\u7684\uff0c\u56e0\u6b64\u901a\u8fc7\u5ef6\u8fdf\u4e00\u6bb5\u65f6\u95f4\u521d\u59cb\u5316\u6765\u8ba9\u52a0\u8f7d\u6570\u636e\u7684\u8bf7\u6c42\u5148\u8fdb\u5165\u961f\u5217\uff0c\u8fbe\u5230\u201c\u63d2\u961f\u201d\u7684\u6548\u679c\uff0c\u5177\u4f53\u7684\u5ef6\u8fdf\u65f6\u95f4\u9700\u8981\u6839\u636e\u9875\u9762\u6e32\u67d3\u6240\u9700\u7684\u65f6\u95f4\u800c\u5b9a\u3002"})]})]})}function v(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>s});a(67294);var n=a(90512);const r={tabItem:"tabItem_Ymn6"};var l=a(85893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,s),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(67294),r=a(90512),l=a(12466),s=a(16550),o=a(20469),i=a(91980),c=a(67392),u=a(20812);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function v(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,l=m(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!v({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[c,d]=p({queryString:a,groupId:r}),[h,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:r}),f=(()=>{const e=c??h;return v({value:e,tabValues:l})?e:null})();(0,o.Z)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!v({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function y(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const t=e.currentTarget,a=i.indexOf(t),r=o[a].value;r!==n&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function w(e){const t=(0,b.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>s});var n=a(67294);const r={},l=n.createContext(r);function s(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);