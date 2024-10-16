"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5152],{7885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(85893),a=t(11151);t(74866),t(85162);const o={title:"\u5168\u5c40\u62e6\u622a\u5668"},s=void 0,l={id:"tutorial/getting-started/basic/global-interceptor",title:"\u5168\u5c40\u62e6\u622a\u5668",description:"\u5168\u5c40\u7684\u8bf7\u6c42\u62e6\u622a\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/02-getting-started/03-basic/05-global-interceptor.md",sourceDirName:"tutorial/02-getting-started/03-basic",slug:"/tutorial/getting-started/basic/global-interceptor",permalink:"/zh-CN/tutorial/getting-started/basic/global-interceptor",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-getting-started/03-basic/05-global-interceptor.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"\u5168\u5c40\u62e6\u622a\u5668"},sidebar:"tutorial",previous:{title:"alova\u8be6\u89e3",permalink:"/zh-CN/tutorial/getting-started/basic/alova"},next:{title:"method\u5143\u6570\u636e",permalink:"/zh-CN/tutorial/getting-started/basic/method-metadata"}},i={},c=[{value:"\u5168\u5c40\u7684\u8bf7\u6c42\u62e6\u622a\u5668",id:"\u5168\u5c40\u7684\u8bf7\u6c42\u62e6\u622a\u5668",level:2},{value:"\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668",id:"\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u5168\u5c40\u7684\u8bf7\u6c42\u62e6\u622a\u5668",children:"\u5168\u5c40\u7684\u8bf7\u6c42\u62e6\u622a\u5668"}),"\n",(0,r.jsx)(n.p,{children:"\u901a\u5e38\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u6240\u6709\u8bf7\u6c42\u90fd\u7528\u4e0a\u76f8\u540c\u7684\u914d\u7f6e\uff0c\u4f8b\u5982\u6dfb\u52a0 token\u3001timestamp \u5230\u8bf7\u6c42\u5934\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a\u5168\u5c40\u7684\u8bf7\u6c42\u62e6\u622a\u5668\uff0c\u5b83\u5c06\u5728\u6240\u6709\u8bf7\u6c42\u524d\u88ab\u89e6\u53d1\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u6b64\u62e6\u622a\u5668\u4e2d\u7edf\u4e00\u8bbe\u7f6e\u8bf7\u6c42\u53c2\u6570\u3002"}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n  R1[\u8bf7\u6c421] --\x3e beforeRequest\n  R2[\u8bf7\u6c422] --\x3e beforeRequest\n  R3[\u8bf7\u6c423] --\x3e beforeRequest\n  RN[\u8bf7\u6c42N] --\x3e beforeRequest\n  beforeRequest --\x3e S1[\u53d1\u9001\u8bf7\u6c42]"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  // ...\n  // \u51fd\u6570\u53c2\u6570\u4e3a\u4e00\u4e2amethod\u5b9e\u4f8b\uff0c\u5305\u542b\u5982url\u3001params\u3001data\u3001headers\u7b49\u8bf7\u6c42\u6570\u636e\n  // \u4f60\u53ef\u4ee5\u81ea\u7531\u4fee\u6539\u8fd9\u4e9b\u6570\u636e\n  // highlight-start\n  beforeRequest(method) {\n    // \u5047\u8bbe\u6211\u4eec\u9700\u8981\u6dfb\u52a0token\u5230\u8bf7\u6c42\u5934\n    method.config.headers.token = 'token';\n  }\n  // highlight-end\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u4e5f\u53ef\u4ee5\u5c06 beforeRequest \u8bbe\u7f6e\u4e3a\u5f02\u6b65\u51fd\u6570\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  async beforeRequest(method) {\n    // \u6267\u884c\u4e00\u4e9b\u5f02\u6b65\u4efb\u52a1\n    // ...\n  }\n  // highlight-end\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668",children:"\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u6211\u4eec\u5e0c\u671b\u7edf\u4e00\u89e3\u6790\u54cd\u5e94\u6570\u636e\u3001\u7edf\u4e00\u5904\u7406\u9519\u8bef\uff0c\u4ee5\u53ca\u7edf\u4e00\u5904\u7406\u8bf7\u6c42\u5b8c\u6210\u65f6\uff0c\u6b64\u65f6\u53ef\u4ee5\u5728\u521b\u5efa alova \u5b9e\u4f8b\u65f6\u6307\u5b9a\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668\uff0c\u54cd\u5e94\u62e6\u622a\u5668\u5305\u62ec\u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\u3001\u8bf7\u6c42\u5931\u8d25\u7684\u62e6\u622a\u5668\uff0c\u548c\u8bf7\u6c42\u5b8c\u6210\u7684\u62e6\u622a\u5668\u3002"}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n  classDef error fill:#f96,stroke:#f00,stroke-width:2px;\n\n  R1[\u8bf7\u6c421\u6210\u529f] --\x3e responded.onSuccess\n  R2[\u8bf7\u6c422\u6210\u529f] --\x3e responded.onSuccess\n  RN[\u8bf7\u6c42N\u6210\u529f] --\x3e responded.onSuccess\n  R4[\u8bf7\u6c424\u5931\u8d25]:::error --\x3e responded.onError:::error\n  R5[\u8bf7\u6c42M\u5931\u8d25]:::error --\x3e responded.onError:::error\n  responded.onSuccess --\x3e responded.onComplete\n  responded.onError --\x3e responded.onComplete"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  // ...\n  // \u4f7f\u7528 responded \u5bf9\u8c61\u5206\u522b\u6307\u5b9a\u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\u548c\u8bf7\u6c42\u5931\u8d25\u7684\u62e6\u622a\u5668\n  responded: {\n    // highlight-start\n    // \u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\n    // \u5f53\u4f7f\u7528 `alova/fetch` \u8bf7\u6c42\u9002\u914d\u5668\u65f6\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u63a5\u6536Response\u5bf9\u8c61\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u5f53\u524d\u8bf7\u6c42\u7684method\u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u540c\u6b65\u8bf7\u6c42\u524d\u540e\u7684\u914d\u7f6e\u4fe1\u606f\n    onSuccess: async (response, method) => {\n      if (response.status >= 400) {\n        throw new Error(response.statusText);\n      }\n      const json = await response.json();\n      if (json.code !== 200) {\n        // \u629b\u51fa\u9519\u8bef\u6216\u8fd4\u56dereject\u72b6\u6001\u7684Promise\u5b9e\u4f8b\u65f6\uff0c\u6b64\u8bf7\u6c42\u5c06\u629b\u51fa\u9519\u8bef\n        throw new Error(json.message);\n      }\n\n      // \u89e3\u6790\u7684\u54cd\u5e94\u6570\u636e\u5c06\u4f20\u7ed9method\u5b9e\u4f8b\u7684transform\u94a9\u5b50\u51fd\u6570\uff0c\u8fd9\u4e9b\u51fd\u6570\u5c06\u5728\u540e\u7eed\u8bb2\u89e3\n      return json.data;\n    },\n    // highlight-end\n\n    // highlight-start\n    // \u8bf7\u6c42\u5931\u8d25\u7684\u62e6\u622a\u5668\n    // \u8bf7\u6c42\u9519\u8bef\u65f6\u5c06\u4f1a\u8fdb\u5165\u8be5\u62e6\u622a\u5668\u3002\n    // \u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u5f53\u524d\u8bf7\u6c42\u7684method\u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u7528\u5b83\u540c\u6b65\u8bf7\u6c42\u524d\u540e\u7684\u914d\u7f6e\u4fe1\u606f\n    onError: (err, method) => {\n      alert(error.message);\n    },\n    // highlight-end\n\n    // highlight-start\n    // \u8bf7\u6c42\u5b8c\u6210\u7684\u62e6\u622a\u5668\n    // \u5f53\u4f60\u9700\u8981\u5728\u8bf7\u6c42\u4e0d\u8bba\u662f\u6210\u529f\u3001\u5931\u8d25\u3001\u8fd8\u662f\u547d\u4e2d\u7f13\u5b58\u90fd\u9700\u8981\u6267\u884c\u7684\u903b\u8f91\u65f6\uff0c\u53ef\u4ee5\u5728\u521b\u5efaalova\u5b9e\u4f8b\u65f6\u6307\u5b9a\u5168\u5c40\u7684`onComplete`\u62e6\u622a\u5668\uff0c\u4f8b\u5982\u5173\u95ed\u8bf7\u6c42 loading \u72b6\u6001\u3002\n    // \u63a5\u6536\u5f53\u524d\u8bf7\u6c42\u7684method\u5b9e\u4f8b\n    onComplete: async method => {\n      // \u5904\u7406\u8bf7\u6c42\u5b8c\u6210\u903b\u8f91\n    }\n    // highlight-end\n  }\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u9700\u8981\u8bbe\u7f6e\u8bf7\u6c42\u5931\u8d25\u6216\u5b8c\u6210\u7684\u62e6\u622a\u5668\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f20\u5165\u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\u51fd\u6570\uff0c\u800c\u4e0d\u518d\u9700\u8981\u901a\u8fc7\u5bf9\u8c61\u6765\u8bbe\u7f6e\u56de\u8c03\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  async responded(response, method) {\n    // \u8bf7\u6c42\u6210\u529f\u7684\u62e6\u622a\u5668\n  }\n  // highlight-end\n});\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u62e6\u622a\u5668\u89e6\u53d1\u8bf4\u660e",type:"info",children:(0,r.jsxs)(n.p,{children:["\u5f53\u4f60\u4f7f\u7528",(0,r.jsx)(n.code,{children:"alova/fetch"}),"\u8bf7\u6c42\u9002\u914d\u5668\u65f6\uff0c\u7531\u4e8e",(0,r.jsx)(n.code,{children:"window.fetch"}),"\u7684\u7279\u70b9\uff0c\u53ea\u6709\u5728\u8fde\u63a5\u8d85\u65f6\u6216\u8fde\u63a5\u4e2d\u65ad\u65f6\u624d\u4f1a\u89e6\u53d1",(0,r.jsx)(n.code,{children:"onError"}),"\u62e6\u622a\u5668\uff0c\u5176\u4ed6\u60c5\u51b5\u5747\u4f1a\u89e6\u53d1",(0,r.jsx)(n.code,{children:"onSuccess"}),"\u62e6\u622a\u5668\uff0c",(0,r.jsx)(n.a,{href:"https://developer.mozilla.org/docs/Web/API/fetch",children:"\u8be6\u60c5\u8bf7\u67e5\u770b\u8fd9\u8fb9"})]})}),"\n",(0,r.jsx)(n.admonition,{title:"\u7279\u522b\u6ce8\u610f",type:"warning",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onSuccess"}),"\u3001",(0,r.jsx)(n.code,{children:"onError"}),"\u548c",(0,r.jsx)(n.code,{children:"onComplete"}),"\u5747\u53ef\u4ee5\u8bbe\u4e3a\u540c\u6b65\u51fd\u6570\u548c\u5f02\u6b65\u51fd\u6570\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onError"})," \u56de\u8c03\u662f\u8bf7\u6c42\u9519\u8bef\u7684\u6355\u83b7\u51fd\u6570\uff0c",(0,r.jsx)(n.code,{children:"onSuccess"})," \u4e2d\u629b\u51fa\u9519\u8bef\u4e0d\u4f1a\u89e6\u53d1 ",(0,r.jsx)(n.code,{children:"onError"}),"\u3002\u5f53\u6355\u83b7\u9519\u8bef\u4f46\u6ca1\u6709\u629b\u51fa\u9519\u8bef\u6216\u8fd4\u56de reject \u72b6\u6001\u7684 Promise \u5b9e\u4f8b\uff0c\u5c06\u8ba4\u4e3a\u8bf7\u6c42\u662f\u6210\u529f\u7684\uff0c\u4e14\u4e0d\u4f1a\u83b7\u5f97\u54cd\u5e94\u6570\u636e\u3002"]}),"\n"]})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(90512);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(90512),o=t(12466),s=t(16550),l=t(20469),i=t(91980),c=t(67392),u=t(20812);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=m({queryString:t,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),b=(()=>{const e=c??f;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),g(e)}),[d,g,o]),tabValues:o}}var g=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),a=l[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function y(e){const n=(0,g.Z)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(67294);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);