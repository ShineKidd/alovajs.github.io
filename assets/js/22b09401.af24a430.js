"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5981],{72685:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var n=a(85893),r=a(11151);a(74866),a(85162);const c={title:"Set & Query Cache"},l=void 0,s={id:"tutorial/cache/set-and-query",title:"Set & Query Cache",description:"Cache also supports update and search. In cache mode, we mentioned that each cache data is saved with the method instance that sent the request as the key, so when manually updating the cache, the method instance will also be used to search for the corresponding cache data.",source:"@site/docs/tutorial/05-cache/05-set-and-query.md",sourceDirName:"tutorial/05-cache",slug:"/tutorial/cache/set-and-query",permalink:"/next/tutorial/cache/set-and-query",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/05-cache/05-set-and-query.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Set & Query Cache"},sidebar:"tutorial",previous:{title:"Forced Request",permalink:"/next/tutorial/cache/force-request"},next:{title:"Controlled Cache",permalink:"/next/tutorial/cache/controlled-cache"}},o={},i=[{value:"Update cache",id:"update-cache",level:2},{value:"Update static values",id:"update-static-values",level:3},{value:"Dynamic cache update",id:"dynamic-cache-update",level:3},{value:"Update strategy",id:"update-strategy",level:3},{value:"Query cache",id:"query-cache",level:2},{value:"Query strategy",id:"query-strategy",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Cache also supports update and search. In ",(0,n.jsx)(t.a,{href:"/next/tutorial/cache/mode",children:"cache mode"}),", we mentioned that each cache data is saved with the method instance that sent the request as the key, so when manually updating the cache, the method instance will also be used to search for the corresponding cache data."]}),"\n",(0,n.jsx)(t.h2,{id:"update-cache",children:"Update cache"}),"\n",(0,n.jsx)(t.h3,{id:"update-static-values",children:"Update static values"}),"\n",(0,n.jsxs)(t.p,{children:["Use ",(0,n.jsx)(t.code,{children:"setCache"})," to update cache data. Its first parameter is the method instance, the second is the new cache data, and returns a Promise instance to indicate whether the execution is completed."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import { setCache } from 'alova';\nawait setCache(todoDetail(id), detailedData);\n"})}),"\n",(0,n.jsx)(t.h3,{id:"dynamic-cache-update",children:"Dynamic cache update"}),"\n",(0,n.jsxs)(t.p,{children:["You can also pass a callback function in ",(0,n.jsx)(t.code,{children:"setCache"})," to dynamically calculate cache data and return the cache data to be updated. If ",(0,n.jsx)(t.code,{children:"undefined"})," is returned in the function, the cache update will be aborted."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"await setCache(todoDetail(id), oldCache => {\n  if (!oldCache.allowUpdate) {\n    return; // Return undefined to abort cache update\n  }\n\n  // Return the data to be cached\n  return {\n    ...oldCache,\n    name: 'new name'\n  };\n});\n"})}),"\n",(0,n.jsx)(t.h3,{id:"update-strategy",children:"Update strategy"}),"\n",(0,n.jsxs)(t.p,{children:["When the passed method sets multi-level cache, the L1 cache and L2 cache will be updated by default. You can control the update of the specified cache separately through ",(0,n.jsx)(t.code,{children:"policy"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"await setCache(todoDetail(id), detailedData, {\n  /**\n   * Cache policy.\n   * - l1: Update only l1 cache.\n   * - l2: Update only l2 cache.\n   * - all: Update l1 cache and update l2 cache (method cache mode needs to be 'restore').\n   * @default 'all'\n   */\n  policy: 'l1'\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"query-cache",children:"Query cache"}),"\n",(0,n.jsxs)(t.p,{children:["Query cached data through the ",(0,n.jsx)(t.code,{children:"queryCache"})," method, which receives a method instance."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { queryCache } from 'alova';\n\nconst cachedData = await queryCache(getTodoListByDate('2022-10-01'));\n"})}),"\n",(0,n.jsxs)(t.p,{children:["You can also dynamically find method instances through ",(0,n.jsx)(t.a,{href:"/next/tutorial/client/in-depth/method-matcher",children:"method snapshot matchers"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const lastMethod = alovaInstance.snapshots.match('todoList', true);\nconst cachedData = lastMethod ? await queryCache(lastMethod) : undefined;\n"})}),"\n",(0,n.jsx)(t.h3,{id:"query-strategy",children:"Query strategy"}),"\n",(0,n.jsxs)(t.p,{children:["When the incoming method is set with multi-level cache, the default is to query the L1 cache first, then the L2 cache. You can use ",(0,n.jsx)(t.code,{children:"policy"})," to control only the specified cache."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const cachedData = await queryCache(getTodoListByDate('2022-10-01'), {\n  /**\n   * Cache strategy.\n   * - l1: query only the l1 cache.\n   * - l2: query only the l2 cache.\n   * - all: query the l1 cache and query the l2 cache (the method cache mode needs to be 'restore').\n   * @default 'all'\n   */\n  policy: 'l1'\n});\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>l});a(67294);var n=a(90512);const r={tabItem:"tabItem_Ymn6"};var c=a(85893);function l(e){let{children:t,hidden:a,className:l}=e;return(0,c.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(67294),r=a(90512),c=a(12466),l=a(16550),s=a(20469),o=a(91980),i=a(67392),u=a(20812);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),c=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(c),(0,n.useCallback)((e=>{if(!c)return;const t=new URLSearchParams(r.location.search);t.set(c,e),r.replace({...r.location,search:t.toString()})}),[c,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,c=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:c}))),[i,d]=m({queryString:a,groupId:r}),[f,y]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,c]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&c.set(e)}),[a,c])]}({groupId:r}),b=(()=>{const e=i??f;return p({value:e,tabValues:c})?e:null})();(0,s.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:c}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),y(e)}),[d,y,c]),tabValues:c}}var y=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(85893);function g(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,c.o5)(),u=e=>{const t=e.currentTarget,a=o.indexOf(t),r=s[a].value;r!==n&&(i(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;t=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;t=o[a]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:c}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:u,...c,className:(0,r.Z)("tabs__item",b.tabItem,c?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const c=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=c.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:c.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function w(e){const t=(0,y.Z)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(t))}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>l});var n=a(67294);const r={},c=n.createContext(r);function l(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);