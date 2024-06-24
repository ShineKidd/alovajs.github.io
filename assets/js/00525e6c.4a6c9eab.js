"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4625],{40784:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(85893),r=a(11151),o=a(74866),i=a(85162);const s={title:"Boot silent factory"},l=void 0,u={id:"tutorial/client/strategy/sensorless-data-interaction/start-silent-factory",title:"Boot silent factory",description:"The silent queue is not started by default, and we need to specify the startup parameters for initialization. In general, call bootSilentFactory in the entry file to initialize the silent factory, which will read unexecuted requests to the corresponding silent through the specified configuration items queues and start those queues.",source:"@site/docs/tutorial/03-client/01-strategy/09-sensorless-data-interaction/03-start-silent-factory.md",sourceDirName:"tutorial/03-client/01-strategy/09-sensorless-data-interaction",slug:"/tutorial/client/strategy/sensorless-data-interaction/start-silent-factory",permalink:"/next/tutorial/client/strategy/sensorless-data-interaction/start-silent-factory",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-client/01-strategy/09-sensorless-data-interaction/03-start-silent-factory.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Boot silent factory"},sidebar:"tutorial",previous:{title:"Virtual data",permalink:"/next/tutorial/client/strategy/sensorless-data-interaction/virtual-data"},next:{title:"Step 1 - Implement features with conservative requests",permalink:"/next/tutorial/client/strategy/sensorless-data-interaction/conservative-request"}},c={},d=[];function h(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The silent queue is not started by default, and we need to specify the startup parameters for initialization. In general, call ",(0,n.jsx)(t.code,{children:"bootSilentFactory"})," in the entry file to initialize the silent factory, which will read unexecuted requests to the corresponding silent through the specified configuration items queues and start those queues."]}),"\n",(0,n.jsxs)(o.Z,{groupId:"framework",children:[(0,n.jsx)(i.Z,{value:"1",label:"vue composition",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { bootSilentFactory } from 'alova/client';\nimport { alovaInst } from '@/api';\n\nbootSilentFactory({\n  // Specify the alova instance at startup to request information storage and request sending\n  alova: alovaInst,\n\n  // Delay start time, in milliseconds, the default is 2000ms, see the follow-up instructions for details\n  delay: 1000\n});\n"})})}),(0,n.jsx)(i.Z,{value:"2",label:"react",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { bootSilentFactory } from 'alova/client';\nimport { alovaInst } from '@/api';\n\nbootSilentFactory({\n  // Specify the alova instance at startup to request information storage and request sending\n  alova: alovaInst,\n\n  // Delay start time, in milliseconds, the default is 2000ms, see the follow-up instructions for details\n  delay: 1000\n});\n"})})}),(0,n.jsx)(i.Z,{value:"3",label:"svelte",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { bootSilentFactory } from 'alova/client';\nimport { alovaInst } from '@/api';\n\nbootSilentFactory({\n  // Specify the alova instance at startup to request information storage and request sending\n  alova: alovaInst,\n\n  // Delay start time, in milliseconds, the default is 2000ms, see the follow-up instructions for details\n  delay: 1000\n});\n"})})})]}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsxs)(t.mdxAdmonitionTitle,{children:[(0,n.jsx)(t.code,{children:"delay"})," parameter description"]}),(0,n.jsx)(t.p,{children:'In actual scenarios, when entering the current page, a request is also sent to load the page data. In order to ensure that the user can see the page data faster, the request to load the data needs to be forwarded to the beginning of the queue, otherwise it may cause the loading data to fail. The request is placed at the end of the queue. At this time, it is necessary to wait until all the previous requests are completed before loading the page data. This is obviously inappropriate. Therefore, by delaying initialization for a period of time, the request for loading data enters the queue first to achieve "queue jumping" effect, the specific delay time depends on the time required for page rendering.'})]})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>i});a(67294);var n=a(90512);const r={tabItem:"tabItem_Ymn6"};var o=a(85893);function i(e){let{children:t,hidden:a,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>q});var n=a(67294),r=a(90512),o=a(12466),i=a(16550),s=a(20469),l=a(91980),u=a(67392),c=a(20812);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:a,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),v=(()=>{const e=u??m;return f({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=a(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(85893);function y(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),r=s[a].value;r!==n&&(u(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(x,{...t,...e})]})}function q(e){const t=(0,b.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>i});var n=a(67294);const r={},o=n.createContext(r);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);