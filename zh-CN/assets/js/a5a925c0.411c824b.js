"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8019],{34646:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(85893),r=a(11151),o=a(74866),l=a(85162);const s={title:"\u7ed3\u5408\u6846\u67b6"},i=void 0,u={id:"tutorial/combine-framework/README",title:"\u7ed3\u5408\u6846\u67b6",description:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u4e0e UI \u6846\u67b6\u7ed3\u5408\u4f7f\u7528\uff0c\u8fd9\u53ef\u4ee5\u8ba9 alova \u53d1\u6325\u51fa\u771f\u6b63\u7684\u529b\u91cf\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.x/tutorial/03-combine-framework/README.md",sourceDirName:"tutorial/03-combine-framework",slug:"/tutorial/combine-framework/",permalink:"/zh-CN/tutorial/combine-framework/",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/03-combine-framework/README.md",tags:[],version:"2.x",frontMatter:{title:"\u7ed3\u5408\u6846\u67b6"},sidebar:"tutorial",previous:{title:"method\u5143\u6570\u636e",permalink:"/zh-CN/tutorial/getting-started/method-metadata"},next:{title:"\u81ea\u52a8\u7ba1\u7406\u8bf7\u6c42\u72b6\u6001",permalink:"/zh-CN/tutorial/combine-framework/use-request"}},c={},d=[{value:"\u8bbe\u7f6e statesHook",id:"\u8bbe\u7f6e-stateshook",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u4e0e UI \u6846\u67b6\u7ed3\u5408\u4f7f\u7528\uff0c\u8fd9\u53ef\u4ee5\u8ba9 alova \u53d1\u6325\u51fa\u771f\u6b63\u7684\u529b\u91cf\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u5728",(0,n.jsx)(t.a,{href:"/tutorial/others/RSM",children:"RSM"}),"\u4e2d\uff0c\u8bf7\u6c42\u65f6\u673a\u63cf\u8ff0\u4e86\u8bf7\u6c42\u5e94\u8be5\u5728\u4ec0\u4e48\u65f6\u5019\u53d1\u9001\uff0c\u5728 UI \u6846\u67b6\u4e2d\u4f7f\u7528\u65f6\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u8ba9 alova \u81ea\u52a8\u7ba1\u7406\u54cd\u5e94\u5f0f\u7684\u8bf7\u6c42\u72b6\u6001\uff0c\u8fd8\u80fd\u901a\u8fc7\u4e00\u5b9a\u89c4\u5219\u81ea\u52a8\u63a7\u5236\u4ec0\u4e48\u65f6\u5019\u5e94\u8be5\u53d1\u9001\u8bf7\u6c42\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"alova"}),"\u4e2d\u63d0\u4f9b\u4e86",(0,n.jsx)(t.code,{children:"useRequest"}),"\u3001",(0,n.jsx)(t.code,{children:"useWatcher"}),"\u3001",(0,n.jsx)(t.code,{children:"useFetcher"}),"\u4e09\u4e2a\u6838\u5fc3 useHook \u5b9e\u73b0\u8bf7\u6c42\u65f6\u673a\uff0c\u7531\u5b83\u4eec\u63a7\u5236\u4f55\u65f6\u5e94\u8be5\u53d1\u51fa\u8bf7\u6c42\uff0c\u540c\u65f6\u5c06\u4f1a\u4e3a\u6211\u4eec\u521b\u5efa\u548c\u7ef4\u62a4\u8bf7\u6c42\u7684\u54cd\u5e94\u5f0f\u72b6\u6001\uff0c\u5982",(0,n.jsx)(t.code,{children:"loading/data/error"}),"\u7b49\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728\u89c6\u56fe\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u54cd\u5e94\u5f0f\u72b6\u6001\uff0c\u5f53\u5b83\u4eec\u66f4\u6539\u65f6\uff0c\u89c6\u56fe\u4e5f\u5c06\u968f\u4e4b\u53d8\u5316\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u8bbe\u7f6e-stateshook",children:"\u8bbe\u7f6e statesHook"}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u4f7f\u7528\u5b83\u4eec\u524d\uff0c\u6211\u4eec\u9700\u8981\u5728 alova \u5b9e\u4f8b\u4e0a\u8bbe\u7f6e\u5bf9\u5e94\u7684 statesHook\uff0c\u5b83\u5fc5\u987b\u548c\u9879\u76ee\u4f7f\u7528\u7684 UI \u6846\u67b6\u5bf9\u5e94\uff0c\u8fd9\u975e\u5e38\u91cd\u8981\uff0c\u5b83\u5c06\u544a\u8bc9 alova \u5e94\u8be5\u521b\u5efa\u5bf9\u5e94 UI \u6846\u67b6\u7684\u54cd\u5e94\u5f0f\u72b6\u6001\uff0c\u76ee\u524d\u652f\u6301\u4ee5\u4e0b\u6846\u67b6\uff1a"}),"\n",(0,n.jsxs)(o.Z,{groupId:"framework",children:[(0,n.jsx)(l.Z,{value:"1",label:"vue composition",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { createAlova } from 'alova';\nimport VueHook from 'alova/vue';\n\nexport const alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  statesHook: VueHook\n  // highlight-end\n});\n"})})}),(0,n.jsx)(l.Z,{value:"2",label:"react",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { createAlova } from 'alova';\nimport ReactHook from 'alova/react';\n\nexport const alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  statesHook: ReactHook\n  // highlight-end\n});\n"})})}),(0,n.jsx)(l.Z,{value:"3",label:"svelte",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { createAlova } from 'alova';\nimport SvelteHook from 'alova/svelte';\n\nexport const alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  statesHook: SvelteHook\n  // highlight-end\n});\n"})})}),(0,n.jsxs)(l.Z,{value:"4",label:"vue options",children:[(0,n.jsxs)(t.p,{children:["\u5728 vue options \u98ce\u683c\u4e2d\u4f7f\u7528\uff0c\u9700\u8981\u989d\u5916\u5b89\u88c5",(0,n.jsx)(t.code,{children:"@alova/vue-options"}),"\u5305\u3002"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { createAlova } from 'alova';\nimport { VueOptionsHook } from '@alova/vue-options';\n\nexport const alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  statesHook: VueOptionsHook\n  // highlight-end\n});\n"})})]})]}),"\n",(0,n.jsxs)(t.p,{children:["\u5982\u679c\u4f60\u5e0c\u671b\u5728\u8fd9\u4e9b UI \u6846\u67b6\u5916\u4f7f\u7528 alova\uff0c\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e2a",(0,n.jsx)(t.a,{href:"/tutorial/custom/custom-stateshook",children:"\u81ea\u5b9a\u4e49\u7684 statesHook"}),"\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u7b49\u4ec0\u4e48\uff1f\u8d76\u7d27\u7ee7\u7eed\u4e86\u89e3\u4e0b\u6838\u5fc3\u7684 useHook \u5427\uff01"})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var n=a(90512);const r={tabItem:"tabItem_Ymn6"};var o=a(85893);function l(e){let{children:t,hidden:a,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(67294),r=a(90512),o=a(12466),l=a(16550),s=a(20469),i=a(91980),u=a(67392),c=a(20812);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function v(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=h(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:a,groupId:r}),[v,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=u??v;return m({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function x(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),r=s[a].value;r!==n&&(u(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=v(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(k,{...t,...e})]})}function w(e){const t=(0,f.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>l});var n=a(67294);const r={},o=n.createContext(r);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);