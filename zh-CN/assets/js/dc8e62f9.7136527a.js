"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5332],{21167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(85893),o=t(11151);t(74866),t(85162);const a={title:"\u5904\u7406\u54cd\u5e94"},s=void 0,l={id:"tutorial/combine-framework/response",title:"\u5904\u7406\u54cd\u5e94",description:"\u8bf7\u6c42\u5b8c\u6210\u540e\uff0c\u54cd\u5e94\u6570\u636e\u4f1a\u7ecf\u8fc7\u591a\u4e2a\u6d41\u7a0b\u7684\u5904\u7406\uff0c\u6700\u7ec8\u624d\u4f1a\u5728\u53d1\u9001\u8bf7\u6c42\u7684\u4f4d\u7f6e\u83b7\u5f97\u6700\u7ec8\u6570\u636e\uff0c\u6d41\u7a0b\u5982\u4e0b\uff1a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.x/tutorial/03-combine-framework/05-response.md",sourceDirName:"tutorial/03-combine-framework",slug:"/tutorial/combine-framework/response",permalink:"/zh-CN/tutorial/combine-framework/response",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/03-combine-framework/05-response.md",tags:[],version:"2.x",sidebarPosition:5,frontMatter:{title:"\u5904\u7406\u54cd\u5e94"},sidebar:"tutorial",previous:{title:"\u521d\u59cb\u6570\u636e",permalink:"/zh-CN/tutorial/combine-framework/initial-data"},next:{title:"\u4e2d\u65ad\u8bf7\u6c42",permalink:"/zh-CN/tutorial/combine-framework/abort-request"}},i={},u=[{value:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",id:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",level:2},{value:"\u7ed1\u5b9a\u54cd\u5e94\u56de\u8c03",id:"\u7ed1\u5b9a\u54cd\u5e94\u56de\u8c03",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",mermaid:"mermaid",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u8bf7\u6c42\u5b8c\u6210\u540e\uff0c\u54cd\u5e94\u6570\u636e\u4f1a\u7ecf\u8fc7\u591a\u4e2a\u6d41\u7a0b\u7684\u5904\u7406\uff0c\u6700\u7ec8\u624d\u4f1a\u5728\u53d1\u9001\u8bf7\u6c42\u7684\u4f4d\u7f6e\u83b7\u5f97\u6700\u7ec8\u6570\u636e\uff0c\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR\n  classDef condition fill:#a8bcff\n\n  R1[\u54cd\u5e94\u6210\u529f] --\x3e global.onSuccess\n  global.onSuccess --\x3e global.onComplete\n  global.onSuccess --\x3e throw{\u662f\u5426\u629b\u51fa\u9519\u8bef\uff1f}:::condition\n  throw --\x3e|\u5426| method.transformData\n  method.transformData --\x3e useHook.onSuccess\n  throw --\x3e|\u662f| useHook.onError\n\n  method.transformData --\x3e throw2{\u662f\u5426\u629b\u51fa\u9519\u8bef\uff1f}:::condition\n  throw2 --\x3e|\u5426| useHook.onSuccess\n  throw2 --\x3e|\u662f| useHook.onError\n\n  useHook.onSuccess --\x3e throw3{\u662f\u5426\u629b\u51fa\u9519\u8bef\uff1f}:::condition\n  throw3 --\x3e|\u662f| useHook.onError\n\n  R2[\u54cd\u5e94\u9519\u8bef] --\x3e global.onError\n  global.onError --\x3e global.onComplete\n  global.onError --\x3e throw4{\u662f\u5426\u629b\u51fa\u9519\u8bef\uff1f}:::condition\n  throw4 --\x3e|\u662f| useHook.onError\n  throw4 --\x3e|\u5426| method.transformData"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u6ca1\u6709\u629b\u51fa\u9519\u8bef\u65f6\uff0c\u4e0b\u4e00\u4e2a\u8282\u70b9\u4f1a\u63a5\u6536\u5230\u4e0a\u4e00\u4e2a\u8282\u70b9\u7684\u8fd4\u56de\u503c\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e",children:"\u8f6c\u6362\u54cd\u5e94\u6570\u636e"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.a,{href:"/tutorial/getting-started/method",children:"method \u8be6\u89e3"}),"\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u4e86\u89e3\u8fc7",(0,r.jsx)(n.code,{children:"transformData"}),"\u4e86\uff0c\u8fd9\u5728 useHook \u4e2d\u4f7f\u7528\u4e5f\u975e\u5e38\u6709\u7528\uff0c\u5b83\u53ef\u4ee5\u8ba9 useHook \u7684 data \u63a5\u6536\u5230\u8f6c\u6362\u540e\u7684\u6570\u636e\uff0c\u800c\u4e0d\u7528\u518d\u8f6c\u6362\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const todoListGetter = alovaInstance.Get('/todo/list', {\n  // \u51fd\u6570\u63a5\u53d7\u672a\u52a0\u5de5\u7684\u6570\u636e\u548c\u54cd\u5e94\u5934\u5bf9\u8c61\uff0c\u5e76\u8981\u6c42\u5c06\u8f6c\u6362\u540e\u7684\u6570\u636e\u8fd4\u56de\uff0c\u5b83\u5c06\u4f1a\u88ab\u8d4b\u503c\u7ed9data\u72b6\u6001\u3002\n  // \u6ce8\u610f\uff1arawData\u662f\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668\uff08\u5982\u679c\u6709\u8bbe\u7f6e\uff09\u8fc7\u6ee4\u540e\u7684\u6570\u636e\uff0c\u54cd\u5e94\u62e6\u622a\u5668\u7684\u914d\u7f6e\u53ef\u4ee5\u53c2\u8003[\u8bbe\u7f6e\u5168\u5c40\u54cd\u5e94\u62e6\u622a\u5668]\u7ae0\u8282\u3002\n  transformData(rawData, headers) {\n    return rawData.list.map(item => ({\n      ...item,\n      statusText: item.done ? '\u5df2\u5b8c\u6210' : '\u8fdb\u884c\u4e2d'\n    });\n  }\n});\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const { data } = useRequest(todoListGetter);\nconst { data } = useWatcher(() => todoListGetter, [userInfo]);\n"})}),"\n",(0,r.jsx)(n.p,{children:"data \u503c\u5c06\u63a5\u6536\u5230\u8f6c\u6362\u540e\u7684\u6570\u636e\u683c\u5f0f\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type data = {\n  // ...\n  statusText: '\u5df2\u5b8c\u6210' | '\u8fdb\u884c\u4e2d';\n}[];\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,r.jsxs)(n.p,{children:["\u5728 usehooks \u4e2d\u4f7f\u7528\u65f6\uff0c\u5728",(0,r.jsx)(n.code,{children:"transformData"}),"\u4e2d\u629b\u51fa\u9519\u8bef\u4e5f\u4f1a\u89e6\u53d1",(0,r.jsx)(n.code,{children:"onError"}),"\uff1b"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u7ed1\u5b9a\u54cd\u5e94\u56de\u8c03",children:"\u7ed1\u5b9a\u54cd\u5e94\u56de\u8c03"}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u9700\u8bbe\u7f6e\u8bf7\u6c42\u56de\u8c03\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728 useHooks \u7684\u8fd4\u56de\u53c2\u6570\u4e2d\u63a5\u6536\u56de\u8c03\u7684\u8bbe\u7f6e\u51fd\u6570\uff0c\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const {\n  // ...\n\n  // \u6210\u529f\u56de\u8c03\u7ed1\u5b9a\n  onSuccess,\n\n  // \u5931\u8d25\u56de\u8c03\u7ed1\u5b9a\n  onError,\n\n  // \u5b8c\u6210\u56de\u8c03\u7ed1\u5b9a\uff0c\u56de\u8c03\u5728\u6210\u529f\u6216\u5931\u8d25\u90fd\u4f1a\u8c03\u7528\n  onComplete\n} = useRequest(todoListGetter); // \u4e5f\u9002\u7528useWatcher\nonSuccess(event => {\n  console.log('\u8bf7\u6c42\u6210\u529f\uff0c\u54cd\u5e94\u6570\u636e\u4e3a:', event.data);\n  console.log('\u672c\u6b21\u8bf7\u6c42\u7684method\u5b9e\u4f8b\u4e3a:', event.method);\n  console.log('\u54cd\u5e94\u6570\u636e\u662f\u5426\u6765\u81ea\u7f13\u5b58:', event.fromCache);\n});\nonError(event => {\n  console.log('\u8bf7\u6c42\u5931\u8d25\uff0c\u9519\u8bef\u4fe1\u606f\u4e3a:', event.error);\n  console.log('\u672c\u6b21\u8bf7\u6c42\u7684method\u5b9e\u4f8b\u4e3a:', event.method);\n});\nonComplete(event => {\n  // event.status\u5728\u6210\u529f\u65f6\u4e3asuccess\uff0c\u5931\u8d25\u65f6\u4e3aerror\n  console.log('\u8bf7\u6c42\u5b8c\u6210\uff0c\u72b6\u6001\u4e3a\uff1a', event.status);\n  console.log('\u672c\u6b21\u8bf7\u6c42\u7684method\u5b9e\u4f8b\u4e3a:', event.method);\n  console.log('\u54cd\u5e94\u6570\u636e\u662f\u5426\u6765\u81ea\u7f13\u5b58:', event.fromCache);\n  if (event.data) {\n    console.log('\u8bf7\u6c42\u6570\u636e\uff1a'\uff0cevent.data)\n  } else if (event.error) {\n    console.log('\u9519\u8bef\u4fe1\u606f\uff1a'\uff0cevent.error)\n  }\n});\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"onSuccess"}),"\u4e2d\u629b\u51fa\u9519\u8bef\u5c06\u4f1a\u89e6\u53d1",(0,r.jsx)(n.code,{children:"onError"}),"\u3002"]})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(90512);const o={tabItem:"tabItem_Ymn6"};var a=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),o=t(90512),a=t(12466),s=t(16550),l=t(20469),i=t(91980),u=t(67392),c=t(20812);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const o=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(o.location.search);n.set(a,e),o.replace({...o.location,search:n.toString()})}),[a,o])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,a=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,d]=p({queryString:t,groupId:o}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,a]=(0,c.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:o}),v=(()=>{const e=u??f;return m({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),o=l[t].value;o!==r&&(u(n),s(o))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,o.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:o}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...n,...e}),(0,x.jsx)(w,{...n,...e})]})}function k(e){const n=(0,b.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>s});var r=t(67294);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);