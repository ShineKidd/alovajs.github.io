"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2948],{4595:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=o(85893),r=o(11151);const s={title:"Abort Request"},a=void 0,i={id:"tutorial/combine-framework/abort-request",title:"Abort Request",description:"Receive abort for manual abort request via useHook.",source:"@site/versioned_docs/version-2.x/tutorial/03-combine-framework/06-abort-request.md",sourceDirName:"tutorial/03-combine-framework",slug:"/tutorial/combine-framework/abort-request",permalink:"/tutorial/combine-framework/abort-request",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/03-combine-framework/06-abort-request.md",tags:[],version:"2.x",sidebarPosition:6,frontMatter:{title:"Abort Request"},sidebar:"tutorial",previous:{title:"Process Response",permalink:"/tutorial/combine-framework/response"},next:{title:"Download & Upload Progress",permalink:"/tutorial/combine-framework/download-upload-progress"}},c={},l=[];function u(e){const t={blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Receive ",(0,n.jsx)(t.code,{children:"abort"})," for manual abort request via useHook."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// useRequest\nconst {\n  // ...\n  // highlight-start\n  // abort function is used to abort requests\n  abort\n  // highlight-end\n} = useRequest(todoListGetter);\n\n// useWatcher\nconst {\n  // ...\n  // highlight-start\n  // abort function is used to abort requests\n  abort\n  // highlight-end\n} = useWatcher(todoListGetter, [page]);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Then call the ",(0,n.jsx)(t.code,{children:"abort"})," method to abort the request."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const handleCancel = () => {\n  abort();\n};\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"[2.9.0+]"})," In react, the abort function is wrapped using ",(0,n.jsx)(t.code,{children:"useCallback"}),", and it is not restricted by closure traps. You can use it directly in events without worrying about causing performance problems."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"[2.6.2+]"})," In addition, this ",(0,n.jsx)(t.code,{children:"abort"})," function will also be bound to the current method instance, so requests sent through ",(0,n.jsx)(t.code,{children:"useRequest/useWatcher"})," can also be aborted in this way."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const todoListGetter = alovaInstance.Get('todo/list');\nuseRequest(todoListGetter);\nuseWatcher(() => todoListGetter);\n\n// highlight-start\n// Calling abort on the method can also abort the request\nconst handleCancel = () => {\n  todoListGetter.abort();\n};\n// highlight-end\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Therefore, if you need to abort requests in batches when certain conditions are met, you can also call ",(0,n.jsx)(t.code,{children:"abort"})," in ",(0,n.jsx)(t.code,{children:"beforeRequest"})," to abort requests."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const alovaInst = createAlova({\n  // ...\n  beforeRequest(method) {\n    if (someCondition) {\n      method.abort();\n    }\n  }\n});\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>a});var n=o(67294);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);