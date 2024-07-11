"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1042],{60797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=n(85893),a=n(11151);const s={title:"custom method key"},i=void 0,r={id:"tutorial/advanced/custom-method-key",title:"custom method key",description:"v2.20.0+",source:"@site/versioned_docs/version-2.x/tutorial/06-advanced/05-custom-method-key.md",sourceDirName:"tutorial/06-advanced",slug:"/tutorial/advanced/custom-method-key",permalink:"/tutorial/advanced/custom-method-key",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/06-advanced/05-custom-method-key.md",tags:[],version:"2.x",sidebarPosition:5,frontMatter:{title:"custom method key"},sidebar:"tutorial",previous:{title:"Middleware",permalink:"/tutorial/advanced/middleware"},next:{title:"Error logger",permalink:"/tutorial/advanced/error-logger"}},d={},c=[];function u(e){const t={admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{title:"version required",type:"info",children:(0,o.jsx)(t.p,{children:"v2.20.0+"})}),"\n",(0,o.jsx)(t.p,{children:"Method key is used to identify all data associated with method instances and has a great effect, for example:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Caching of associated response data"}),"\n",(0,o.jsx)(t.li,{children:"Identity sharing request\n-Associate the status value returned by useRequest and other useHook"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"By default, the method key is generated from the relevant request parameters of the method instance, which can accurately identify a request."}),"\n",(0,o.jsx)(t.p,{children:"But sometimes you want to change it so that the above three situations can be recognized as the same method in different requests."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"//The method key is generated when creating, you can customize it through __key__\nconst methodInst = alovaInstance.Get('/api/user', {});\nmethodInst.__key__ = 'my-custom-method-key';\n"})})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(67294);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);