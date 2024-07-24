"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[446],{7840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(85893),r=t(11151);const s={title:"\u4f7f\u7528IndexedDB\u7ba1\u7406\u7f13\u5b58"},c=void 0,o={id:"tutorial/project/best-practice/manage-cache-by-indexeddb",title:"\u4f7f\u7528IndexedDB\u7ba1\u7406\u7f13\u5b58",description:"\u5982\u679c\u4f60\u6b63\u5728\u5f00\u53d1\u9700\u8981\u5927\u91cf\u4f7f\u7528\u672c\u5730\u7f13\u5b58\u7684\u5e94\u7528\uff0c\u5982\u56fe\u5f62\u7f16\u8f91\u7c7b\u5e94\u7528\u3001\u6587\u4ef6\u7ba1\u7406\u7c7b\u5e94\u7528\u7b49\uff0c\u4f4e\u5bb9\u91cf\u7684 localStorage \u5df2\u7ecf\u65e0\u6cd5\u6ee1\u8db3\u5f00\u53d1\u9700\u6c42\uff0c\u6b64\u65f6\u4f60\u53ef\u4ee5\u4f7f\u7528 IndexedDB \u914d\u5408 alova \u8fdb\u884c\u5927\u5bb9\u91cf\u7684\u672c\u5730\u7f13\u5b58\u7ba1\u7406\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/07-project/01-best-practice/03-manage-cache-by-indexeddb.md",sourceDirName:"tutorial/07-project/01-best-practice",slug:"/tutorial/project/best-practice/manage-cache-by-indexeddb",permalink:"/zh-CN/tutorial/project/best-practice/manage-cache-by-indexeddb",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/07-project/01-best-practice/03-manage-cache-by-indexeddb.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"\u4f7f\u7528IndexedDB\u7ba1\u7406\u7f13\u5b58"},sidebar:"tutorial",previous:{title:"\u4f7f\u7528\u6280\u5de7",permalink:"/zh-CN/tutorial/project/best-practice/skills"},next:{title:"\u591a\u670d\u52a1\u5668",permalink:"/zh-CN/tutorial/project/best-practice/multiple-servers"}},i={},d=[{value:"\u521b\u5efa IndexedDB \u5b9e\u4f8b",id:"\u521b\u5efa-indexeddb-\u5b9e\u4f8b",level:2},{value:"\u4fdd\u5b58\u6570\u636e",id:"\u4fdd\u5b58\u6570\u636e",level:2},{value:"\u83b7\u53d6\u6570\u636e",id:"\u83b7\u53d6\u6570\u636e",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"\u5982\u679c\u4f60\u6b63\u5728\u5f00\u53d1\u9700\u8981\u5927\u91cf\u4f7f\u7528\u672c\u5730\u7f13\u5b58\u7684\u5e94\u7528\uff0c\u5982\u56fe\u5f62\u7f16\u8f91\u7c7b\u5e94\u7528\u3001\u6587\u4ef6\u7ba1\u7406\u7c7b\u5e94\u7528\u7b49\uff0c\u4f4e\u5bb9\u91cf\u7684 localStorage \u5df2\u7ecf\u65e0\u6cd5\u6ee1\u8db3\u5f00\u53d1\u9700\u6c42\uff0c\u6b64\u65f6\u4f60\u53ef\u4ee5\u4f7f\u7528 IndexedDB \u914d\u5408 alova \u8fdb\u884c\u5927\u5bb9\u91cf\u7684\u672c\u5730\u7f13\u5b58\u7ba1\u7406\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u4e00\u529f\u80fd\u4e3b\u8981\u5f97\u76ca\u4e8e alova \u7684 ",(0,a.jsx)(n.a,{href:"/tutorial/cache/controlled-cache",children:"\u53d7\u63a7\u7f13\u5b58"})," \u529f\u80fd\uff0c\u5b83\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u7f13\u5b58\u7ba1\u7406\uff0c\u6211\u4eec\u6765\u770b\u770b\u5b9e\u8df5\u6b65\u9aa4\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u6211\u4eec\u4ee5\u81ea\u5b9a\u4e49\u7ba1\u7406\u5927\u56fe\u7247\u6570\u636e\u4e3a\u4f8b\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"\u521b\u5efa-indexeddb-\u5b9e\u4f8b",children:"\u521b\u5efa IndexedDB \u5b9e\u4f8b"}),"\n",(0,a.jsx)(n.p,{children:"\u9996\u5148\u521b\u5efa\u4e00\u4e2a IndexedDB \u5b9e\u4f8b\u7528\u4e8e\u64cd\u4f5c\u672c\u5730\u7f13\u5b58\uff0c\u5e76\u5bfc\u51fa\u7f13\u5b58\u64cd\u4f5c\u7684\u51fd\u6570\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:"title=db.js",children:"const dbVersion = 1;\nlet dbInstance;\nconst request = window.indexedDB.open('MyTestDatabase', dbVersion);\nrequest.onupgradeneeded = ({ target }) => {\n  dbInstance = target.result;\n  const imgStore = dbInstance.createObjectStore('images', {\n    autoIncrement: true\n  });\n  imgStore.createIndex('fileName', 'fileName', {\n    unique: true\n  });\n};\nrequest.onerror = () => {\n  throw new Error('Database open fail');\n};\nrequest.onsuccess = ({ target }) => {\n  dbInstance = target.result;\n};\n\n// \u65b0\u589e\u6570\u636e\u5230IndexedDB\nexport const addImage2Cache = async (fileName, data) => {\n  const tx = dbInstance.transaction(['images'], 'readwrite');\n  const request = tx.objectStore('images').add({\n    fileName,\n    data\n  });\n  return new Promise((resolve, reject) => {\n    request.onerror = () => {\n      reject('data add fail');\n    };\n    request.onsuccess = ({ result }) => {\n      resolve(result);\n    };\n  });\n};\n\n// \u6839\u636efileName\u83b7\u53d6\u6587\u4ef6\u6570\u636e\nexport const getImageFromCache = async fileName => {\n  const tx = dbInstance.transaction(['images']);\n  const request = tx.objectStore('images').index('fileName').get(fileName);\n  return new Promise((resolve, reject) => {\n    request.onerror = () => {\n      reject('data add fail');\n    };\n    request.onsuccess = ({ target }) => {\n      resolve(target.result);\n    };\n  });\n};\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u4fdd\u5b58\u6570\u636e",children:"\u4fdd\u5b58\u6570\u636e"}),"\n",(0,a.jsxs)(n.p,{children:["\u5728\u4fdd\u5b58\u6570\u636e\u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5728 method \u7684",(0,a.jsx)(n.code,{children:"transform"}),"\u4e2d\u4fdd\u5b58\u7f13\u5b58\uff0c\u56e0\u4e3a",(0,a.jsx)(n.code,{children:"transform"}),"\u53ea\u4f1a\u5728\u7f51\u7edc\u8bf7\u6c42\u54cd\u5e94\u65f6\u88ab\u89e6\u53d1\uff0c\u800c\u547d\u4e2d\u7f13\u5b58\u65f6\u4e0d\u4f1a\u89e6\u53d1\u7684\u7279\u6027\u3002\u5728\u793a\u4f8b\u4ee3\u7801\u4e2d\uff0c\u5c06\u56fe\u7247 blob \u5b9e\u4f8b\u8f6c\u6362\u4e3a base64 \u6570\u636e\uff0c\u7f13\u5b58\u5e76\u8fd4\u56de\u8fd9\u4e2a base64 \u6570\u636e\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:"api.js",children:"import { addImage2Cache } from './db';\n\nexport const image = fileName =>\n  alovaInst.Get(`/image/${fileName}`, {\n    // highlight-start\n    async transform(imgBlob) {\n      // \u5c06blob\u5f02\u6b65\u8f6c\u6362\u4e3abase64\n      const reader = new FileReader();\n      reader.readAsDataURL(imgBlob);\n      const base64Img = await new Promise(resolve => {\n        reader.onload = ({ target }) => {\n          resolve(target.result);\n        };\n      });\n\n      // \u7f13\u5b58image\u6570\u636e\u5230IndexedDB\u4e2d\n      await addImage2Cache(fileName, base64Img);\n      return base64Img;\n    }\n    // highlight-end\n  });\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u83b7\u53d6\u6570\u636e",children:"\u83b7\u53d6\u6570\u636e"}),"\n",(0,a.jsxs)(n.p,{children:["\u5c06\u8fd9\u4e2a method \u5b9e\u4f8b\u7684",(0,a.jsx)(n.code,{children:"cacheFor"}),"\u6307\u5b9a\u4e3a\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u8ba9\u7f13\u5b58\u8f6c\u53d8\u4e3a\u53d7\u63a7\u72b6\u6001\uff0c\u5728\u8fd9\u4e2a\u51fd\u6570\u4e2d\u5339\u914d IndexedDB \u4e2d\u7684\u7f13\u5b58\uff0c\u5982\u679c\u5339\u914d\u5219\u8fd4\u56de\u5b83\uff0c\u5426\u5219\u8fd4\u56de",(0,a.jsx)(n.code,{children:"undefined"}),"\u7ee7\u7eed\u53d1\u8d77\u8bf7\u6c42\u83b7\u53d6\u6570\u636e\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:"title=api.js",children:"import { getImageFromCache } from './db';\n\nexport const image = fileName =>\n  alovaInst.Get(`/image/${fileName}`, {\n    async transform(imgBlob) {\n      // ...\n    },\n\n    // highlight-start\n    async cacheFor() {\n      // \u83b7\u53d6\u7f13\u5b58\n      const cache = await getImageFromCache(fileName);\n      return cache && cache.data;\n    }\n    // highlight-end\n  });\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u8fd9\u6837\u5c31\u57fa\u672c\u5b8c\u6210\u4e86\u4e00\u4e2a\u57fa\u672c\u7684\u81ea\u5b9a\u4e49\u7f13\u5b58\u7ba1\u7406\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4fdd\u5b58\u7f13\u5b58\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u5e76\u5728",(0,a.jsx)(n.code,{children:"cacheFor"}),"\u4e2d\u5339\u914d\u5230\u7f13\u5b58\u65f6\u518d\u5224\u65ad\u662f\u5426\u5df2\u8fc7\u671f\uff0c\u4ece\u800c\u5b9e\u73b0\u7f13\u5b58\u8fc7\u671f\u529f\u80fd\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"IndexedDB \u53ea\u662f\u5176\u4e2d\u4e00\u4e2a\u5f02\u6b65\u7ba1\u7406\u7f13\u5b58\u7684\u6848\u4f8b\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8fde\u63a5\u4f60\u7684\u7f13\u5b58\u670d\u52a1\u5668\u6765\u7ba1\u7406\u5b83\u4eec\u3002"})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var a=t(67294);const r={},s=a.createContext(r);function c(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);