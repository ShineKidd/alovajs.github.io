"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[342],{23321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(85893),s=n(11151),o=n(74866),r=n(85162);const i={title:"Question & Answer"},l=void 0,c={id:"about/qa",title:"Question & Answer",description:"Why to create alova?",source:"@site/versioned_docs/version-2.x/about/03-qa.md",sourceDirName:"about",slug:"/about/qa",permalink:"/about/qa",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/about/03-qa.md",tags:[],version:"2.x",sidebarPosition:3,frontMatter:{title:"Question & Answer"}},u={},d=[{value:"Why to create alova?",id:"why-to-create-alova",level:2},{value:"Alternative to the request libraries?",id:"alternative-to-the-request-libraries",level:2},{value:"Why binding UI framework?",id:"why-binding-ui-framework",level:2},{value:"How to use alova via cdn?",id:"how-to-use-alova-via-cdn",level:2},{value:"What to pay attention to in React-Native?",id:"what-to-pay-attention-to-in-react-native",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"why-to-create-alova",children:"Why to create alova?"}),"\n",(0,a.jsxs)(t.p,{children:["Data requests have always been an indispensable and important part of applications. Since the birth of XMLHttpRequest, request schemes have emerged in endlessly. Client-side data interaction exploration has always focused on the simplicity of requests, such as ",(0,a.jsx)(t.code,{children:"$.ajax"}),", ",(0,a.jsx)(t.code,{children:"axios"}),", ",(0,a.jsx)(t.code,{children:"fetch api"})," and Request tools such as ",(0,a.jsx)(t.code,{children:"react-query"}),", the coding form continues to evolve from callback functions, Promise, to usehook. These js libraries have done a good job in making requests simple, but they only provide common functions, which means For different request scenarios such as sharing requests, paging requests, form submissions, uploading and downloading files, etc., developers still need to write complex codes themselves, which reduces development efficiency and performance cannot be guaranteed. As user experience becomes more and more important, In this era, application fluency has become more and more important."]}),"\n",(0,a.jsx)(t.p,{children:"Additionally, the collaboration between client and server is also separated. Front-end engineers need to consult API documents and manually write API functions, and any changes of APIs need to actively notify front-end engineers, which will make your product more uncontrollable."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"We think there is a simpler solution is that based on your request scenarios such as pagination, form submission, breakpoint resumption, etc., select the corresponding useHook, which will help you manage data and control when requests should be sent"}),". This allows developers to achieve more efficient Client-Server data interaction while writing little code."]}),"\n",(0,a.jsxs)(t.p,{children:["Additionally, alova has very flexible expansion capabilities to implement request strategies in different scenarios. You can also customize your own request scenarios. This part is in ",(0,a.jsx)(t.a,{href:"/category/custom",children:"Custom Chapter"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In order to cover more request scenarios, we also abstracted the request scenarios into ",(0,a.jsx)(t.a,{href:"/tutorial/others/RSM",children:"Request scene model(RSM)"}),", which explains alova's request strategy scheme well. In the future, alova will continue to carry forward our exploration of request strategies."]}),"\n",(0,a.jsx)(t.h2,{id:"alternative-to-the-request-libraries",children:"Alternative to the request libraries?"}),"\n",(0,a.jsxs)(t.p,{children:["alova is a request strategy library, which was originally created to provide specific request strategy solutions for different request scenarios, so as to achieve a smooth request experience more concisely and elegantly, such as ",(0,a.jsx)(t.code,{children:"$.ajax"}),", ",(0,a.jsx)(t.code,{children:"axios"})," and ",(0,a.jsx)(t.code,{children:"fetch- api"}),", etc. provide good support for request sending and response receiving, they are an essential part of the ",(0,a.jsx)(t.a,{href:"/tutorial/others/RSM",children:"RSM"})," process (request events), alova still needs to dependent on them to make requests, so we can Think of alova as an weaponry of the request library, making the request library more powerful."]}),"\n",(0,a.jsx)(t.h2,{id:"why-binding-ui-framework",children:"Why binding UI framework?"}),"\n",(0,a.jsx)(t.p,{children:"Decoupling a js library means using it in more scenarios. For example, axios can be used in nodejs, but it also means that developers need to write more template code, such as using useHooks to encapsulate axios. However, alova abandons more usage scenarios brought about by decoupling, and positions the Scope of usage in conjunction with the UI framework to use alova in the most streamlined way. This is for the benefit of developers and is prevalent in a UI framework. Sometimes, deep binding can provide developers with direct-use functions and improve the developer's experience without requiring too much template code."}),"\n",(0,a.jsx)(t.h2,{id:"how-to-use-alova-via-cdn",children:"How to use alova via cdn?"}),"\n",(0,a.jsxs)(o.Z,{groupId:"framework",children:[(0,a.jsx)(r.Z,{value:"1",label:"vue",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <script src="https://unpkg.com/vue@3/dist/vue.global.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/hooks/vuehook.umd.min.js"><\/script>\n  </head>\n  <body>\n    <div id="app">\n      <div v-if="loading">Loading...</div>\n      <div v-else-if="error">{{ error.message }}</div>\n      <span v-else>responseData: {{ data }}</span>\n    </div>\n  </body>\n  <script>\n    const alovaInstance = alova.createAlova({\n      statesHook: VueHook,\n      requestAdapter: GlobalFetch(),\n      responded: response => response.json()\n    });\n\n    Vue.createApp({\n      setup() {\n        return alova.useRequest(\n          alovaInstance.Get(\'https://jsonplaceholder.typicode.com/todos/1\')\n        );\n      }\n    }).mount(\'#app\');\n  <\/script>\n</html>\n'})})}),(0,a.jsx)(r.Z,{value:"2",label:"react",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <script src="https://unpkg.com/react@18/umd/react.development.js"><\/script>\n    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"><\/script>\n    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/alova.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/adapter/globalfetch.umd.min.js"><\/script>\n    <script src="https://unpkg.com/alova/dist/hooks/reacthook.umd.min.js"><\/script>\n  </head>\n  <body>\n    <div id="app"></div>\n  </body>\n  <script type="text/babel">\n    const alovaInstance = alova.createAlova({\n      statesHook: ReactHook,\n      requestAdapter: GlobalFetch(),\n      responded: response => response.json()\n    });\n\n    const App = () => {\n      const { loading, data, error } = alova.useRequest(\n        alovaInstance.Get(\'https://jsonplaceholder.typicode.com/todos/1\')\n      );\n\n      if (loading) {\n        return <div>Loading...</div>;\n      } else if (error) {\n        return <div>{error.message}</div>;\n      }\n      return <span>responseData: {JSON.stringify(data)}</span>;\n    };\n    const root = ReactDOM.createRoot(document.getElementById(\'app\'));\n    root.render(<App />);\n  <\/script>\n</html>\n'})})}),(0,a.jsx)(r.Z,{value:"3",label:"svelte",children:(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["svelte depends on the compilation tool and cannot be used directly through CDN. For details, see ",(0,a.jsx)(t.a,{href:"https://svelte.dev/",children:"svelte.dev"})]})})})]}),"\n",(0,a.jsx)(t.h2,{id:"what-to-pay-attention-to-in-react-native",children:"What to pay attention to in React-Native?"}),"\n",(0,a.jsxs)(t.p,{children:["When using alova to develop React-Native applications, you can also use ",(0,a.jsx)(t.code,{children:"alova/fetch"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"But there are the following precautions:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Metro version"})}),"\n",(0,a.jsxs)(t.p,{children:["In alova's ",(0,a.jsx)(t.code,{children:"package.json"}),", ",(0,a.jsx)(t.code,{children:"exports"})," is used to define multiple export items, so you need to ensure these two points:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Metro version is higher than 0.76.0"}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Enable ",(0,a.jsx)(t.code,{children:"resolver.unstable_enablePackageExports"})," in ",(0,a.jsx)(t.code,{children:"metro.config.js"}),". ",(0,a.jsx)(t.a,{href:"https://facebook.github.io/metro/docs/configuration/#unstable_enablepackageexports-experimental",children:"Click here for details"})]}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>r});n(67294);var a=n(90512);const s={tabItem:"tabItem_Ymn6"};var o=n(85893);function r(e){let{children:t,hidden:n,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,r),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),s=n(90512),o=n(12466),r=n(16550),i=n(20469),l=n(91980),c=n(67392),u=n(20812);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:s}}=e;return{value:t,label:n,attributes:a,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,o=h(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,d]=m({queryString:n,groupId:s}),[v,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,o]=(0,u.Nk)(n);return[s,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:s}),f=(()=>{const e=c??v;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:r,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),s=i[n].value;s!==a&&(c(t),r(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=v(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>r});var a=n(67294);const s={},o=a.createContext(s);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);