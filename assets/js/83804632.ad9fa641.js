"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2913],{39963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=t(85893),o=t(11151);const c={title:"Controlled Cache"},a=void 0,r={id:"tutorial/cache/controlled-cache",title:"Controlled Cache",description:"When sending a request, the default response cache will be matched first. In some cases, you may need to use IndexedDB as a cache management solution and use a custom IndexedDB adapter, but this will make all requests use it as a storage solution, while controlled cache allows you to control the custom cache from a single request.",source:"@site/docs/tutorial/05-cache/06-controlled-cache.md",sourceDirName:"tutorial/05-cache",slug:"/tutorial/cache/controlled-cache",permalink:"/next/tutorial/cache/controlled-cache",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/05-cache/06-controlled-cache.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Controlled Cache"},sidebar:"tutorial",previous:{title:"Set & Query Cache",permalink:"/next/tutorial/cache/set-and-query"},next:{title:"Advanced",permalink:"/next/tutorial/advanced/in-depth/"}},i={},l=[{value:"Use transform to set cache",id:"use-transform-to-set-cache",level:2},{value:"Notes",id:"notes",level:2}];function d(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["When sending a request, the default response cache will be matched first. In some cases, you may need to use ",(0,s.jsx)(n.code,{children:"IndexedDB"})," as a cache management solution and use a custom ",(0,s.jsx)(n.code,{children:"IndexedDB"})," adapter, but this will make all requests use it as a storage solution, while controlled cache allows you to control the custom cache from a single request."]}),"\n",(0,s.jsxs)(n.p,{children:["Using controlled cache is also very simple. You can set ",(0,s.jsx)(n.code,{children:"cacheFor"})," in method to an asynchronous or synchronous function. The data returned in this function will be used as cache data. For example, read data in ",(0,s.jsx)(n.code,{children:"IndexedDB"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const getFile = fileName =>\n  alovaInstance.GET(`/file/${fileName}`, {\n    // Controlled cache functions support asynchronous and synchronous functions\n    cacheFor() {\n      return new Promise((resolve, reject) => {\n        const tx = db.transaction(['files']);\n        const getRequest = tx.objectStore('files').get(fileName);\n        getRequest.onsuccess = resolve;\n        getRequest.onerror = reject;\n      });\n    }\n  });\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also return ",(0,s.jsx)(n.code,{children:"undefined"})," or no data in ",(0,s.jsx)(n.code,{children:"cacheFor"})," and continue to send the request, which is useful in the case of cache misses when customizing cache management."]}),"\n",(0,s.jsx)(n.h2,{id:"use-transform-to-set-cache",children:"Use transform to set cache"}),"\n",(0,s.jsxs)(n.p,{children:["Because the ",(0,s.jsx)(n.code,{children:"transform"})," function has the following two features:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"It is triggered only when responding, and will not be triggered when hitting the response cache;"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"It supports asynchronous functions;"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Therefore, you can also use it to save custom caches. For example, in the scenario where files are used as response data for caching, you can use IndexedDB to cache file data."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const fileGetter = alovaInstance.Get('/file/file_name', {\n  // Use IndexedDB to cache files\n  async transform(fileBlob) {\n    await new Promise((resolve, reject) => {\n      const tx = db.transaction(['files'], 'readwrite');\n      const putRequest = tx.objectStore('files').put({\n        file: fileBlob\n      });\n      putRequest.onsuccess = resolve;\n      putRequest.onerror = reject;\n    });\n    return fileBlob;\n  }\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.p,{children:["When used in usehooks, throwing an error in the ",(0,s.jsx)(n.code,{children:"cacheFor"})," function will trigger ",(0,s.jsx)(n.code,{children:"onError"}),". When using the method instance to directly initiate a request, the promise will be rejected."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(67294);const o={},c=s.createContext(o);function a(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);