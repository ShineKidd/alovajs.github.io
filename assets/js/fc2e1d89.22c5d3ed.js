"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8735],{72737:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(85893),c=t(11151);const i={title:"Manage Cache with IndexedDB"},r=void 0,s={id:"tutorial/best-practice/manage-cache-by-indexeddb",title:"Manage Cache with IndexedDB",description:"If you are developing applications that require extensive use of local cache, such as graphics editing applications, file management applications, etc., the low-capacity localStorage can no longer meet the development needs. At this time, you can use IndexedDB and alova for large-capacity local cache management.",source:"@site/versioned_docs/version-2.x/tutorial/07-best-practice/03-manage-cache-by-indexeddb.md",sourceDirName:"tutorial/07-best-practice",slug:"/tutorial/best-practice/manage-cache-by-indexeddb",permalink:"/tutorial/best-practice/manage-cache-by-indexeddb",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/07-best-practice/03-manage-cache-by-indexeddb.md",tags:[],version:"2.x",sidebarPosition:3,frontMatter:{title:"Manage Cache with IndexedDB"},sidebar:"tutorial",previous:{title:"Skills",permalink:"/tutorial/best-practice/skills"},next:{title:"Multiple servers",permalink:"/tutorial/best-practice/multiple-servers"}},o={},d=[{value:"Create IndexedDB instance",id:"create-indexeddb-instance",level:2},{value:"save data",id:"save-data",level:2},{value:"retrieve data",id:"retrieve-data",level:2}];function l(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"If you are developing applications that require extensive use of local cache, such as graphics editing applications, file management applications, etc., the low-capacity localStorage can no longer meet the development needs. At this time, you can use IndexedDB and alova for large-capacity local cache management."}),"\n",(0,n.jsxs)(a.p,{children:["This feature is mainly due to alova's ",(0,n.jsx)(a.a,{href:"/tutorial/cache/controlled-cache",children:"Controlled Cache"})," function, which can implement custom cache management. Let's take a look at the practical steps."]}),"\n",(0,n.jsxs)(a.p,{children:["Here is an ",(0,n.jsx)(a.a,{href:"/tutorial/example/controlled-cache-by-indexeddb",children:"example of managed cache with IndexedDB"})]}),"\n",(0,n.jsx)(a.p,{children:"Let's take custom management of large image data as an example."}),"\n",(0,n.jsx)(a.h2,{id:"create-indexeddb-instance",children:"Create IndexedDB instance"}),"\n",(0,n.jsx)(a.p,{children:"First create an IndexedDB instance to operate the local cache, and export the cache operate function."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",metastring:"title=db.js",children:"const dbVersion = 1;\nlet dbInstance;\nconst request = window.indexedDB.open('MyTestDatabase', dbVersion);\nrequest.onupgradeneeded = ({ target }) => {\n  dbInstance = target.result;\n  const imgStore = dbInstance.createObjectStore('images', {\n    autoIncrement: true\n  });\n  imgStore.createIndex('fileName', 'fileName', {\n    unique: true\n  });\n};\nrequest.onerror = () => {\n  throw new Error('Database open fail');\n};\nrequest.onsuccess = ({ target }) => {\n  dbInstance = target.result;\n};\n\n// Add new data to IndexedDB\nexport const addImage2Cache = async (fileName, data) => {\n  const tx = dbInstance.transaction(['images'], 'readwrite');\n  const request = tx.objectStore('images').add({\n    fileName,\n    data\n  });\n  return new Promise((resolve, reject) => {\n    request.onerror = () => {\n      reject('data add fail');\n    };\n    request.onsuccess = ({ result }) => {\n      resolve(result);\n    };\n  });\n};\n\n// Get file data according to fileName\nexport const getImageFromCache = async fileName => {\n  const tx = dbInstance.transaction(['images']);\n  const request = tx.objectStore('images').index('fileName').get(fileName);\n  return new Promise((resolve, reject) => {\n    request.onerror = () => {\n      reject('data add fail');\n    };\n    request.onsuccess = ({ target }) => {\n      resolve(target.result);\n    };\n  });\n};\n"})}),"\n",(0,n.jsx)(a.h2,{id:"save-data",children:"save data"}),"\n",(0,n.jsxs)(a.p,{children:["When saving data, we can save the cache in the ",(0,n.jsx)(a.code,{children:"transformData"})," of the method, because ",(0,n.jsx)(a.code,{children:"transformData"})," will only be triggered when the network request responds, but will not be triggered when the cache is hit. In the sample code, convert the image blob instance to base64 data, cache and return this base64 data."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript-api.js",children:"import { addImage2Cache } from './db';\n\nexport const image = fileName =>\n   alovaInst.Get(`/image/${fileName}`, {\n     // highlight-start\n     async transformData(imgBlob) {\n       // Asynchronously convert the blob to base64\n       const reader = new FileReader();\n       reader.readAsDataURL(imgBlob);\n       const base64Img = await new Promise(resolve => {\n         reader.onload = ({ target }) => {\n           resolve(target.result);\n         };\n       });\n\n       // Cache image data to IndexedDB\n       await addImage2Cache(fileName, base64Img);\n       return base64Img;\n     }\n     // highlight-end\n   });\n"})}),"\n",(0,n.jsx)(a.h2,{id:"retrieve-data",children:"retrieve data"}),"\n",(0,n.jsxs)(a.p,{children:["Specify ",(0,n.jsx)(a.code,{children:"localCache"})," of this method instance as an asynchronous function to change the cache into a controlled state, match the cache in IndexedDB in this function, and return it if it matches, otherwise return ",(0,n.jsx)(a.code,{children:"undefined"})," and continue to initiate a request to obtain data."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-javascript",metastring:"title=api.js",children:"import { getImageFromCache } from './db';\n\nexport const image = fileName =>\n  alovaInst.Get(`/image/${fileName}`, {\n    async transformData(imgBlob) {\n      //...\n    },\n\n    // highlight-start\n    async localCache() {\n      // get cache\n      const cache = await getImageFromCache(fileName);\n      return cache && cache.data;\n    }\n    // highlight-end\n  });\n"})}),"\n",(0,n.jsxs)(a.p,{children:["In this way, a basic custom cache management is basically completed. You can also save the expiration time of the cache, and judge whether it has expired when the cache is matched in ",(0,n.jsx)(a.code,{children:"localCache"}),", so as to realize the cache expiration function."]}),"\n",(0,n.jsx)(a.p,{children:"IndexedDB is just one example of managing caches asynchronously, you can also connect to your cache servers to manage them."})]})}function h(e={}){const{wrapper:a}={...(0,c.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,a,t)=>{t.d(a,{Z:()=>s,a:()=>r});var n=t(67294);const c={},i=n.createContext(c);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);