"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[368],{13490:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var r=n(85893),s=n(11151);const a={title:"Force Request"},i=void 0,c={id:"tutorial/cache/force-request",title:"Force Request",description:"Forced request refers to a mechanism that bypasses the cache check and triggers a request. It is useful when the latest data needs to be obtained under certain conditions.",source:"@site/versioned_docs/version-2.x/tutorial/04-cache/04-force-request.md",sourceDirName:"tutorial/04-cache",slug:"/tutorial/cache/force-request",permalink:"/tutorial/cache/force-request",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/04-cache/04-force-request.md",tags:[],version:"2.x",sidebarPosition:4,frontMatter:{title:"Force Request"},sidebar:"tutorial",previous:{title:"Manually Invalidate",permalink:"/tutorial/cache/manually-invalidate"},next:{title:"Set & Query Cache",permalink:"/tutorial/cache/set-and-query"}},o={},h=[{value:"Force request with method",id:"force-request-with-method",level:2},{value:"Force request in useHook",id:"force-request-in-usehook",level:2},{value:"Dynamically set force value",id:"dynamically-set-force-value",level:3}];function u(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Forced request refers to a mechanism that bypasses the cache check and triggers a request. It is useful when the latest data needs to be obtained under certain conditions."}),"\n",(0,r.jsx)(t.h2,{id:"force-request-with-method",children:"Force request with method"}),"\n",(0,r.jsxs)(t.p,{children:["Force request by calling the send function of the method instance, and passing ",(0,r.jsx)(t.code,{children:"true"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"const response = await alovaInstance.Get('/api/user').send(true);\n"})}),"\n",(0,r.jsx)(t.h2,{id:"force-request-in-usehook",children:"Force request in useHook"}),"\n",(0,r.jsxs)(t.p,{children:["Among the three core hooks of ",(0,r.jsx)(t.code,{children:"useRequest/useWatcher/useFetcher"}),", force request parameters are supported."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"// useRequest\nuseRequest(todoListGetter, {\n  // highlight-start\n  force: true\n  // highlight-end\n});\n\n// useWatcher\nuseWatcher(todoListGetter, [page], {\n  // highlight-start\n  force: true\n  // highlight-end\n});\n\n// useFetcher\nuseFetcher({\n  // highlight-start\n  force: true\n  // highlight-end\n});\n"})}),"\n",(0,r.jsx)(t.h3,{id:"dynamically-set-force-value",children:"Dynamically set force value"}),"\n",(0,r.jsxs)(t.p,{children:["In actual situations, we often need to set whether to force the request to be sent based on different situations. In this case, force can be set to a function, which will also receive parameters passed in from the ",(0,r.jsx)(t.code,{children:"send"})," function. Please read the ",(0,r.jsx)(t.a,{href:"/tutorial/combine-framework/receive-params",children:"receive params"})," for details"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"useRequest(todoListGetter, {\n  // highlight-start\n  force: isForce => {\n    return isForce;\n  }\n  // highlight-end\n});\n\n// useWatcher\nuseWatcher(todoListGetter, [page], {\n  // highlight-start\n  force: isForce => {\n    return isForce;\n  }\n  // highlight-end\n});\n\n// useFetcher\nuseFetcher({\n  // highlight-start\n  force: isForce => {\n    return isForce;\n  }\n  // highlight-end\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useFetcher"})," is a useHook for data fetching, which will be discussed in the ",(0,r.jsx)(t.a,{href:"/tutorial/advanced/use-fetcher",children:"Data Fetching"})," chapter later."]})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var r=n(67294);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);