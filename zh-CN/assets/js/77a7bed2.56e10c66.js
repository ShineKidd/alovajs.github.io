"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3227],{90404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(85893),r=n(11151);const s={title:"\u4e2d\u65ad\u8bf7\u6c42"},a=void 0,i={id:"tutorial/combine-framework/abort-request",title:"\u4e2d\u65ad\u8bf7\u6c42",description:"\u901a\u8fc7 useHook \u63a5\u6536abort\u7528\u4e8e\u624b\u52a8\u4e2d\u65ad\u8bf7\u6c42\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-v2/tutorial/03-combine-framework/06-abort-request.md",sourceDirName:"tutorial/03-combine-framework",slug:"/tutorial/combine-framework/abort-request",permalink:"/zh-CN/v2/tutorial/combine-framework/abort-request",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-v2/tutorial/03-combine-framework/06-abort-request.md",tags:[],version:"v2",sidebarPosition:6,frontMatter:{title:"\u4e2d\u65ad\u8bf7\u6c42"},sidebar:"tutorial",previous:{title:"\u5904\u7406\u54cd\u5e94",permalink:"/zh-CN/v2/tutorial/combine-framework/response"},next:{title:"\u4e0b\u8f7d\u548c\u4e0a\u4f20\u8fdb\u5ea6",permalink:"/zh-CN/v2/tutorial/combine-framework/download-upload-progress"}},c={},l=[];function d(e){const t={blockquote:"blockquote",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u901a\u8fc7 useHook \u63a5\u6536",(0,o.jsx)(t.code,{children:"abort"}),"\u7528\u4e8e\u624b\u52a8\u4e2d\u65ad\u8bf7\u6c42\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"// useRequest\nconst {\n  // ...\n  // highlight-start\n  // abort\u51fd\u6570\u7528\u4e8e\u4e2d\u65ad\u8bf7\u6c42\n  abort\n  // highlight-end\n} = useRequest(todoListGetter);\n\n// useWatcher\nconst {\n  // ...\n  // highlight-start\n  // abort\u51fd\u6570\u7528\u4e8e\u4e2d\u65ad\u8bf7\u6c42\n  abort\n  // highlight-end\n} = useWatcher(todoListGetter, [page]);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["\u7136\u540e\u518d\u8c03\u7528",(0,o.jsx)(t.code,{children:"abort"}),"\u65b9\u6cd5\u5373\u53ef\u4e2d\u65ad\u8bf7\u6c42\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const handleCancel = () => {\n  abort();\n};\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"[2.9.0+]"})," \u5728 react \u4e2d\uff0cabort \u51fd\u6570\u4f7f\u7528\u4e86",(0,o.jsx)(t.code,{children:"useCallback"}),"\u5305\u88f9\uff0c\u540c\u65f6\u5b83\u4e5f\u4e0d\u53d7\u95ed\u5305\u9677\u9631\u9650\u5236\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u5728\u4e8b\u4ef6\u4e2d\u4f7f\u7528\u5b83\uff0c\u4e0d\u7528\u62c5\u5fc3\u5f15\u8d77\u6027\u80fd\u95ee\u9898\u3002"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"[2.6.2+]"})," \u53e6\u5916\uff0c\u8fd9\u4e2a",(0,o.jsx)(t.code,{children:"abort"}),"\u51fd\u6570\u4e5f\u4f1a\u540c\u65f6\u7ed1\u5b9a\u5230\u5f53\u524d\u7684 method \u5b9e\u4f8b\u4e0a\uff0c\u56e0\u6b64\u901a\u8fc7",(0,o.jsx)(t.code,{children:"useRequest/useWatcher"}),"\u53d1\u9001\u7684\u8bf7\u6c42\uff0c\u4e5f\u53ef\u4ee5\u8fd9\u6837\u6765\u4e2d\u65ad\u8bf7\u6c42\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const todoListGetter = alovaInstance.Get('todo/list');\nuseRequest(todoListGetter);\nuseWatcher(() => todoListGetter);\n\n// highlight-start\n// \u8c03\u7528method\u4e0a\u7684abort\u4e5f\u53ef\u4ee5\u4e2d\u65ad\u8bf7\u6c42\nconst handleCancel = () => {\n  todoListGetter.abort();\n};\n// highlight-end\n"})}),"\n",(0,o.jsxs)(t.p,{children:["\u56e0\u6b64\uff0c\u5982\u679c\u9700\u8981\u5b9e\u73b0\u5728\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\u65f6\u6279\u91cf\u4e2d\u65ad\u8bf7\u6c42\uff0c\u8fd8\u53ef\u4ee5\u5728",(0,o.jsx)(t.code,{children:"beforeRequest"}),"\u4e2d\u8c03\u7528",(0,o.jsx)(t.code,{children:"abort"}),"\u4e2d\u65ad\u8bf7\u6c42\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const alovaInst = createAlova({\n  // ...\n  beforeRequest(method) {\n    if (someCondition) {\n      method.abort();\n    }\n  }\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var o=n(67294);const r={},s=o.createContext(r);function a(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);