"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8650],{65163:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=s(85893),n=s(11151);const a={title:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668"},r=void 0,c={id:"tutorial/custom/custom-storage-adapter",title:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668",description:"alova \u4e2d\u6d89\u53ca\u591a\u4e2a\u9700\u8981\u6570\u636e\u6301\u4e45\u5316\u7684\u529f\u80fd\uff0c\u5982\u6301\u4e45\u5316\u7f13\u5b58\u3001\u9759\u9ed8\u63d0\u4ea4\u548c\u79bb\u7ebf\u63d0\u4ea4\u3002\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0calova \u4f1a\u4f7f\u7528localStorage\u6765\u5b58\u50a8\u6301\u4e45\u5316\u6570\u636e\uff0c\u4f46\u8003\u8651\u5230\u975e\u6d4f\u89c8\u5668\u73af\u5883\u4e0b\uff0c\u56e0\u6b64\u4e5f\u652f\u6301\u4e86\u81ea\u5b9a\u4e49\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.x/tutorial/10-custom/03-custom-storage-adapter.md",sourceDirName:"tutorial/10-custom",slug:"/tutorial/custom/custom-storage-adapter",permalink:"/zh-CN/tutorial/custom/custom-storage-adapter",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/10-custom/03-custom-storage-adapter.md",tags:[],version:"2.x",sidebarPosition:3,frontMatter:{title:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668"},sidebar:"tutorial",previous:{title:"\u81ea\u5b9a\u4e49\u8bf7\u6c42\u9002\u914d\u5668",permalink:"/zh-CN/tutorial/custom/custom-http-adapter"},next:{title:"\u81ea\u5b9a\u4e49States Hook",permalink:"/zh-CN/tutorial/custom/custom-stateshook"}},i={},l=[{value:"SessionStorage \u5b58\u50a8\u9002\u914d\u5668\u793a\u4f8b",id:"sessionstorage-\u5b58\u50a8\u9002\u914d\u5668\u793a\u4f8b",level:2}];function u(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["alova \u4e2d\u6d89\u53ca\u591a\u4e2a\u9700\u8981\u6570\u636e\u6301\u4e45\u5316\u7684\u529f\u80fd\uff0c\u5982\u6301\u4e45\u5316\u7f13\u5b58\u3001\u9759\u9ed8\u63d0\u4ea4\u548c\u79bb\u7ebf\u63d0\u4ea4\u3002",(0,o.jsxs)(t.strong,{children:["\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0calova \u4f1a\u4f7f\u7528",(0,o.jsx)(t.code,{children:"localStorage"}),"\u6765\u5b58\u50a8\u6301\u4e45\u5316\u6570\u636e"]}),"\uff0c\u4f46\u8003\u8651\u5230\u975e\u6d4f\u89c8\u5668\u73af\u5883\u4e0b\uff0c\u56e0\u6b64\u4e5f\u652f\u6301\u4e86\u81ea\u5b9a\u4e49\u3002"]}),"\n",(0,o.jsx)(t.p,{children:"\u81ea\u5b9a\u4e49\u5b58\u50a8\u9002\u914d\u5668\u540c\u6837\u975e\u5e38\u7b80\u5355\uff0c\u4f60\u53ea\u9700\u8981\u6307\u5b9a\u4fdd\u5b58\u6570\u636e\u3001\u83b7\u53d6\u6570\u636e\uff0c\u4ee5\u53ca\u79fb\u9664\u6570\u636e\u7684\u51fd\u6570\u5373\u53ef\uff0c\u5927\u81f4\u662f\u8fd9\u6837\u7684\u3002"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const customStorageAdapter = {\n  set(key, value) {\n    // \u4fdd\u5b58\u6570\u636e\uff0cvalue\u4e3a\u7ed3\u6784\u5316\u6570\u636e\uff0c\u53ef\u8c03\u7528JSON.stringify\u8f6c\u6362\u4e3a\u5b57\u7b26\u4e32\n  },\n  get(key) {\n    // \u83b7\u53d6\u6570\u636e\uff0c\u9700\u8981\u8fd4\u56de\u7ed3\u6784\u5316\u6570\u636e\uff0c\u53ef\u8c03\u7528JSON.parse\u8f6c\u6362\u4e3a\u5bf9\u8c61\n  },\n  remove(key) {\n    // \u79fb\u9664\u6570\u636e\n  }\n};\n"})}),"\n",(0,o.jsxs)(t.p,{children:["\u7136\u540e\u5728\u521b\u5efa",(0,o.jsx)(t.code,{children:"alova"}),"\u5b9e\u4f8b\u65f6\u4f20\u5165\u8fd9\u4e2a\u9002\u914d\u5668\u5373\u53ef\u3002"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  // ...\n  storageAdapter: customStorageAdapter\n});\n"})}),"\n",(0,o.jsx)(t.h2,{id:"sessionstorage-\u5b58\u50a8\u9002\u914d\u5668\u793a\u4f8b",children:"SessionStorage \u5b58\u50a8\u9002\u914d\u5668\u793a\u4f8b"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"const sessionStorageAdapter = {\n  set(key, value) {\n    sessionStorage.setItem(key, JSON.stringify(value));\n  },\n  get(key) {\n    const data = sessionStorage.getItem(key);\n    return data ? JSON.parse(data) : data;\n  },\n  remove(key) {\n    sessionStorage.removeItem(key);\n  }\n};\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>r});var o=s(67294);const n={},a=o.createContext(n);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);