"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9151],{9179:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=a(5893),r=a(1151),s=a(4866),o=a(5162);const i={title:"Boot silent factory",sidebar_position:30},l=void 0,u={id:"tutorial/strategy/sensorless-data-interaction/start-silent-factory",title:"Boot silent factory",description:"We put all scene request strategies in the js package called @alova/scene-*, you need to install it before using it.",source:"@site/docs/tutorial/05-strategy/01-sensorless-data-interaction/03-start-silent-factory.md",sourceDirName:"tutorial/05-strategy/01-sensorless-data-interaction",slug:"/tutorial/strategy/sensorless-data-interaction/start-silent-factory",permalink:"/tutorial/strategy/sensorless-data-interaction/start-silent-factory",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/05-strategy/01-sensorless-data-interaction/03-start-silent-factory.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Boot silent factory",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Virtual data",permalink:"/tutorial/strategy/sensorless-data-interaction/virtual-data"},next:{title:"Step 1 - Implement features with conservative requests",permalink:"/tutorial/strategy/sensorless-data-interaction/conservative-request"}},c={},d=[];function p(e){const t={admonition:"admonition",code:"code",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["We put all scene request strategies in the js package called ",(0,n.jsx)(t.code,{children:"@alova/scene-*"}),", you need to install it before using it."]}),"\n",(0,n.jsxs)(s.Z,{groupId:"framework",children:[(0,n.jsx)(o.Z,{value:"1",label:"vue composition",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-vue --save\r\n#yarn\r\nyarn add @alova/scene-vue\r\n\n"})})}),(0,n.jsx)(o.Z,{value:"2",label:"react",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-react --save\r\n#yarn\r\nyarn add @alova/scene-react\r\n\n"})})}),(0,n.jsx)(o.Z,{value:"3",label:"svelte",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# npm\r\nnpm install @alova/scene-svelte --save\r\n#yarn\r\nyarn add @alova/scene-svelte\r\n\n"})})})]}),"\n",(0,n.jsxs)(t.p,{children:["The silent queue is not started by default, and we need to specify the startup parameters for initialization. In general, call ",(0,n.jsx)(t.code,{children:"bootSilentFactory"})," in the entry file to initialize the silent factory, which will read unexecuted requests to the corresponding silent through the specified configuration items queues and start those queues."]}),"\n",(0,n.jsxs)(s.Z,{groupId:"framework",children:[(0,n.jsx)(o.Z,{value:"1",label:"vue composition",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { bootSilentFactory } from '@alova/scene-vue';\r\nimport { alovaInst } from '@/api';\r\n\r\nbootSilentFactory({\r\n  // Specify the alova instance at startup to request information storage and request sending\r\n  alova: alovaInst,\r\n\r\n  // Delay start time, in milliseconds, the default is 2000ms, see the follow-up instructions for details\r\n  delay: 1000\r\n});\n"})})}),(0,n.jsx)(o.Z,{value:"2",label:"react",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { bootSilentFactory } from '@alova/scene-react';\r\nimport { alovaInst } from '@/api';\r\n\r\nbootSilentFactory({\r\n  // Specify the alova instance at startup to request information storage and request sending\r\n  alova: alovaInst,\r\n\r\n  // Delay start time, in milliseconds, the default is 2000ms, see the follow-up instructions for details\r\n  delay: 1000\r\n});\n"})})}),(0,n.jsx)(o.Z,{value:"3",label:"svelte",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import { bootSilentFactory } from '@alova/scene-svelte';\r\nimport { alovaInst } from '@/api';\r\n\r\nbootSilentFactory({\r\n  // Specify the alova instance at startup to request information storage and request sending\r\n  alova: alovaInst,\r\n\r\n  // Delay start time, in milliseconds, the default is 2000ms, see the follow-up instructions for details\r\n  delay: 1000\r\n});\n"})})})]}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsxs)(t.mdxAdmonitionTitle,{children:[(0,n.jsx)(t.code,{children:"delay"})," parameter description"]}),(0,n.jsx)(t.p,{children:'In actual scenarios, when entering the current page, a request is also sent to load the page data. In order to ensure that the user can see the page data faster, the request to load the data needs to be forwarded to the beginning of the queue, otherwise it may cause the loading data to fail. The request is placed at the end of the queue. At this time, it is necessary to wait until all the previous requests are completed before loading the page data. This is obviously inappropriate. Therefore, by delaying initialization for a period of time, the request for loading data enters the queue first to achieve "queue jumping" effect, the specific delay time depends on the time required for page rendering.'})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var n=a(512);const r={tabItem:"tabItem_Ymn6"};var s=a(5893);function o(e){let{children:t,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,o),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7294),r=a(512),s=a(2466),o=a(6550),i=a(469),l=a(1980),u=a(7392),c=a(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:a,groupId:r}),[m,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),b=(()=>{const e=u??m;return h({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(5893);function y(e){let{className:t,block:a,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),r=i[a].value;r!==n&&(u(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function j(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function w(e){const t=(0,v.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>i,a:()=>o});var n=a(7294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);