"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1498],{56898:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var n=a(85893),l=a(11151);const r={title:"alova\u8be6\u89e3"},i=void 0,s={id:"tutorial/getting-started/alova",title:"alova\u8be6\u89e3",description:"alova \u5b9e\u4f8b\u4e0d\u4f46\u53ef\u4ee5\u521b\u5efa\u4e0d\u540c\u7c7b\u578b\u7684 method \u5b9e\u4f8b\uff0c\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40\u53c2\u6570\uff0c\u521b\u5efa\u7684 method \u5b9e\u4f8b\u90fd\u4f1a\u7ee7\u627f\u8fd9\u4e2a alova \u5b9e\u4f8b\u7684\u53c2\u6570\u3002\u5f53 alova \u5b9e\u4f8b\u7684\u53c2\u6570\u4e0e method \u5b9e\u4f8b\u8bbe\u7f6e\u4e86\u76f8\u540c\u7684\u53c2\u6570\u65f6\uff0c\u4f8b\u5982 timeout\u3001shareRequest\u7b49\uff0c\u5c06\u4f18\u5148\u4f7f\u7528 method \u5b9e\u4f8b\u7684\u53c2\u6570\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.x/tutorial/02-getting-started/04-alova.md",sourceDirName:"tutorial/02-getting-started",slug:"/tutorial/getting-started/alova",permalink:"/zh-CN/tutorial/getting-started/alova",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/02-getting-started/04-alova.md",tags:[],version:"2.x",sidebarPosition:4,frontMatter:{title:"alova\u8be6\u89e3"},sidebar:"tutorial",previous:{title:"method\u8be6\u89e3",permalink:"/zh-CN/tutorial/getting-started/method"},next:{title:"\u5168\u5c40\u62e6\u622a\u5668",permalink:"/zh-CN/tutorial/getting-started/global-interceptor"}},o={},d=[{value:"baseURL",id:"baseurl",level:2},{value:"\u5168\u5c40\u7684\u8d85\u65f6\u65f6\u95f4",id:"\u5168\u5c40\u7684\u8d85\u65f6\u65f6\u95f4",level:2},{value:"\u5168\u5c40\u7684\u5171\u4eab\u8bf7\u6c42",id:"\u5168\u5c40\u7684\u5171\u4eab\u8bf7\u6c42",level:2},{value:"\u8bf7\u6c42\u9002\u914d\u5668",id:"\u8bf7\u6c42\u9002\u914d\u5668",level:2},{value:"\u5168\u5c40\u7684\u54cd\u5e94\u7f13\u5b58",id:"\u5168\u5c40\u7684\u54cd\u5e94\u7f13\u5b58",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["alova \u5b9e\u4f8b\u4e0d\u4f46\u53ef\u4ee5\u521b\u5efa\u4e0d\u540c\u7c7b\u578b\u7684 method \u5b9e\u4f8b\uff0c\u8fd8\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40\u53c2\u6570\uff0c\u521b\u5efa\u7684 method \u5b9e\u4f8b\u90fd\u4f1a\u7ee7\u627f\u8fd9\u4e2a alova \u5b9e\u4f8b\u7684\u53c2\u6570\u3002\u5f53 alova \u5b9e\u4f8b\u7684\u53c2\u6570\u4e0e method \u5b9e\u4f8b\u8bbe\u7f6e\u4e86\u76f8\u540c\u7684\u53c2\u6570\u65f6\uff0c\u4f8b\u5982 ",(0,n.jsx)(t.code,{children:"timeout"}),"\u3001",(0,n.jsx)(t.code,{children:"shareRequest"}),"\u7b49\uff0c\u5c06\u4f18\u5148\u4f7f\u7528 method \u5b9e\u4f8b\u7684\u53c2\u6570\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"\u63a5\u4e0b\u6765\u6211\u4eec\u770b\u4e0b alova \u7684\u5168\u5c40\u53c2\u6570\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"baseurl",children:"baseURL"}),"\n",(0,n.jsx)(t.p,{children:"\u8bbe\u7f6e baseURL \u540e\uff0c\u4f60\u53ef\u4ee5\u4e0d\u518d\u9700\u8981\u4e3a\u6bcf\u4e2a\u8bf7\u6c42\u90fd\u6dfb\u52a0\u76f8\u540c\u7684 url \u524d\u7f00\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  baseURL: 'https://api.alovajs.dev'\n  // ...\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"\u6b64\u65f6\uff0c\u521b\u5efa method \u5b9e\u4f8b\u65f6\u53ea\u9700\u8981\u6307\u5b9a pathname \u5373\u53ef\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.Get('/todo/list');\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u5168\u5c40\u7684\u8d85\u65f6\u65f6\u95f4",children:"\u5168\u5c40\u7684\u8d85\u65f6\u65f6\u95f4"}),"\n",(0,n.jsx)(t.p,{children:"\u4ee5\u4e0b\u4e3a\u8bbe\u7f6e\u5168\u5c40\u7684\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// \u5168\u5c40\u8bbe\u7f6e\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\nconst alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  // \u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\uff0c\u9ed8\u8ba4\u4e3a0\uff0c\u8868\u793a\u6c38\u4e0d\u8d85\u65f6\n  timeout: 50000\n  // highlight-end\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u5168\u5c40\u7684\u5171\u4eab\u8bf7\u6c42",children:"\u5168\u5c40\u7684\u5171\u4eab\u8bf7\u6c42"}),"\n",(0,n.jsx)(t.p,{children:"\u5728\u5168\u5c40\u8bbe\u7f6e\u5171\u4eab\u8bf7\u6c42\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  // ...\n  // highlight-start\n  shareRequest: false\n  // highlight-end\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u8bf7\u6c42\u9002\u914d\u5668",children:"\u8bf7\u6c42\u9002\u914d\u5668"}),"\n",(0,n.jsxs)(t.p,{children:["\u5728\u4e4b\u524d\u7684\u7ae0\u8282\u4e2d\u6211\u4eec\u5df2\u7ecf\u914d\u7f6e\u4e86",(0,n.jsx)(t.code,{children:"GlobalFetch"}),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u7531\u8fd9\u4e2a alova \u5b9e\u4f8b\u53d1\u8d77\u7684\u8bf7\u6c42\u90fd\u5c06\u4f7f\u7528\u5b83\u53d1\u9001\u8bf7\u6c42\u3002\u5b9e\u9645\u4e0a\uff0c\u6211\u4eec\u9488\u5bf9\u4e0d\u540c\u7684 JS \u73af\u5883\uff0c\u8fd8\u63d0\u4f9b\u4e86\u5404\u79cd\u8bf7\u6c42\u9002\u914d\u5668\u3002"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tutorial/request-adapter/alova-mock",children:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tutorial/request-adapter/alova-adapter-xhr",children:"XMLHttpRequest \u9002\u914d\u5668"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tutorial/request-adapter/alova-adapter-axios",children:"axios \u9002\u914d\u5668"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tutorial/request-adapter/alova-adapter-uniapp",children:"uniapp \u9002\u914d\u5668"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/tutorial/request-adapter/alova-adapter-taro",children:"taro \u9002\u914d\u5668"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"\u5168\u5c40\u7684\u54cd\u5e94\u7f13\u5b58",children:"\u5168\u5c40\u7684\u54cd\u5e94\u7f13\u5b58"}),"\n",(0,n.jsxs)(t.p,{children:["\u4f60\u8fd8\u53ef\u4ee5\u5168\u5c40\u8bbe\u7f6e\u54cd\u5e94\u7f13\u5b58\uff0c\u6211\u4eec\u5c06\u5728\u540e\u9762\u7684",(0,n.jsx)(t.a,{href:"/tutorial/cache/mode",children:"\u54cd\u5e94\u7f13\u5b58"}),"\u7ae0\u8282\u4e2d\u8be6\u7ec6\u8bf4\u660e\u3002"]})]})}function h(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>s,a:()=>i});var n=a(67294);const l={},r=n.createContext(l);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);