"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4140],{2463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var r=n(85893),s=n(11151);const a={title:"Request Adapter"},o=void 0,d={id:"tutorial/advanced/custom/http-adapter",title:"Request Adapter",description:"Remember how to create an Alova instance?",source:"@site/docs/tutorial/06-advanced/02-custom/01-http-adapter.md",sourceDirName:"tutorial/06-advanced/02-custom",slug:"/tutorial/advanced/custom/http-adapter",permalink:"/next/tutorial/advanced/custom/http-adapter",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-advanced/02-custom/01-http-adapter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Request Adapter"},sidebar:"tutorial",previous:{title:"Overview",permalink:"/next/tutorial/advanced/custom/"},next:{title:"Storage Adapter",permalink:"/next/tutorial/advanced/custom/storage-adapter"}},i={},l=[{value:"Request adapter structure",id:"request-adapter-structure",level:2},{value:"Request parameter details",id:"request-parameter-details",level:3},{value:"Return parameter details",id:"return-parameter-details",level:3},{value:"XMLHttpRequest request adapter example",id:"xmlhttprequest-request-adapter-example",level:2},{value:"Request adapter type",id:"request-adapter-type",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Remember how to create an Alova instance?"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import adapterFetch from 'alova/fetch';\n\nconst alovaInstance = createAlova({\n  // ...\n  requestAdapter: adapterFetch()\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"requestAdapter"})," is the request adapter. The internal request sending and receiving will rely on the request adapter. ",(0,r.jsx)(t.code,{children:"alova/fetch"})," manages requests through the fetch api. In most cases, we can use it. However, when ",(0,r.jsx)(t.code,{children:"alova"})," runs in an environment where the fetch api is not available (such as app, mini program), you need to replace a request adapter that supports the current environment."]}),"\n",(0,r.jsxs)(t.p,{children:["So how should you customize a request adapter? It's very simple. It is actually a function that will be called every time a request is initiated and returns an object. This object contains request-related data sets such as ",(0,r.jsx)(t.code,{children:"url"}),", ",(0,r.jsx)(t.code,{children:"method"}),", ",(0,r.jsx)(t.code,{children:"data"}),", ",(0,r.jsx)(t.code,{children:"headers"}),", ",(0,r.jsx)(t.code,{children:"timeout"}),", etc. Although there are many fields, we only need to access the data we need."]}),"\n",(0,r.jsx)(t.h2,{id:"request-adapter-structure",children:"Request adapter structure"}),"\n",(0,r.jsx)(t.p,{children:"The request adapter will receive request-related parameters and the method instance currently being requested, and return a response-related function set."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"function CustomRequestAdapter(requestElements, methodInstance) {\n  // Send the request here...\n\n  return {\n    async response() {\n      // Return response data\n    },\n    async headers() {\n      // Asynchronous function that returns the response header\n    },\n    abort() {\n      // Interrupt the request, this function will be triggered when abort is called externally\n    },\n    onDownload(updateDownloadProgress) {\n      // Download progress information, updateDownloadProgress is continuously called internally to update the download progress\n    },\n    onUpload(updateUploadProgress) {\n      // Upload progress information, updateUploadProgress is continuously called internally to update the upload progress\n    }\n  };\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"request-parameter-details",children:"Request parameter details"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"requestElements"})}),"\n",(0,r.jsx)(t.p,{children:"Send the relevant elements of the request, including the following data."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"interface RequestElements {\n  // Request url, get parameters are already included\n  readonly url: string;\n\n  // Request type, such as GET, POST, PUT, etc.\n  readonly type: MethodType;\n\n  // Request header information, object\n  readonly headers: Arg;\n\n  // Request body information\n  readonly data?: RequestBody;\n}\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"methodInstance"})}),"\n",(0,r.jsx)(t.p,{children:"The method instance of the current request"}),"\n",(0,r.jsx)(t.h3,{id:"return-parameter-details",children:"Return parameter details"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"response (required)"})}),"\n",(0,r.jsx)(t.p,{children:"An asynchronous function, the function returns a response value, which will be passed to the global response interceptor (responded);"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"headers (required)"})}),"\n",(0,r.jsx)(t.p,{children:"An asynchronous function, the response header object returned by the function will be passed to the transform of the Method instance Conversion hook function;"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"abort (required)"})}),"\n",(0,r.jsx)(t.p,{children:"A normal function, which is used to interrupt the request. All interrupt requests will eventually call this function to execute;"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"onDownload (optional)"})}),"\n",(0,r.jsxs)(t.p,{children:["A normal function, which receives a callback function to update the download progress. The frequency of progress update is customized in this function. In this example, it is simulated to update every 100 milliseconds. The ",(0,r.jsx)(t.code,{children:"updateDownloadProgress"})," callback function receives two parameters, the first parameter is the total size, and the second parameter is the downloaded size;"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"onUpload (optional)"})}),"\n",(0,r.jsxs)(t.p,{children:["A normal function, which receives a callback function to update the upload progress. The frequency of progress update is customized in this function. In this example, it is simulated to update every 100 milliseconds. The ",(0,r.jsx)(t.code,{children:"updateUploadProgress"})," callback function receives two parameters, the first parameter is the total size, and the second parameter is the uploaded size;"]}),"\n",(0,r.jsx)(t.h2,{id:"xmlhttprequest-request-adapter-example",children:"XMLHttpRequest request adapter example"}),"\n",(0,r.jsx)(t.p,{children:"The following is an example of an adapter that sends a request through XMLHttpRequest. It is mainly used to demonstrate the writing of the adapter. The code is incomplete and cannot be run."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"function XMLHttpRequestAdapter(requestElements, methodInstance) {\n  // Deconstruct the data needed\n  const { url, type, data, headers } = config;\n\n  // Send request\n  const xhr = new XMLHttpRequest();\n  xhr.open(type, url);\n  for (const key in headers) {\n    xhr.setRequestHeader(key, headers[key]);\n  }\n  const responsePromise = new Promise((resolve, reject) => {\n    xhr.addEventListener('load', event => {\n      // Process response data\n      resolve(/* ... */);\n    });\n    xhr.addEventListener('error', event => {\n      // Process request error\n      reject(/* ... */);\n    });\n  });\n\n  xhr.send(JSON.stringify(data));\n\n  return {\n    // Asynchronous function that returns response data\n    response: () => responsePromise,\n\n    // Asynchronous function that returns the response header\n    headers: () => responsePromise.then(() => xhr.getAllResponseHeaders()),\n    abort: () => {\n      xhr.abort();\n    },\n\n    // Download progress information, continuously call updateDownloadProgress internally to update the download progress\n    onDownload: updateDownloadProgress => {\n      xhr.addEventListener('progress', event => {\n        // Data receiving progress\n        updateDownloadProgress(event.total, event.loaded);\n      });\n    },\n\n    // Upload progress information, continuously call updateUploadProgress internally to update the upload progress\n    onUpload: updateUploadProgress => {\n      xhr.upload.onprogress = event => {\n        updateUploadProgress(event.total, event.loaded);\n      };\n    }\n  };\n}\n"})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["For more complete request adapter details, please refer to ",(0,r.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/packages/alova/src/predefine/adapterFetch.ts",children:"alova/fetch Source code"})," to understand."]})}),"\n",(0,r.jsx)(t.h2,{id:"request-adapter-type",children:"Request adapter type"}),"\n",(0,r.jsxs)(t.p,{children:["The global ",(0,r.jsx)(t.code,{children:"beforeRequest"}),", ",(0,r.jsx)(t.code,{children:"responded"})," interceptors, and the types of configuration objects when creating method instances are automatically inferred based on the types provided by the request adapter. The following is the type of ",(0,r.jsx)(t.code,{children:"alova/fetch"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"import type { AlovaRequestAdapter } from 'alova';\n\nexport type adapterFetch = () => AlovaRequestAdapter<FetchRequestInit, Response, Headers>;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The generic parameters in ",(0,r.jsx)(t.code,{children:"AlovaRequestAdapter"})," are values \u200b\u200bof three types: ",(0,r.jsx)(t.code,{children:"RequestConfig"}),", ",(0,r.jsx)(t.code,{children:"Response"}),", and ",(0,r.jsx)(t.code,{children:"ResponseHeader"}),", which are automatically inferred to the types given by the request adapter in global interceptors, method instance configurations, etc."]}),"\n",(0,r.jsx)(t.p,{children:"They are represented as follows:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"RequestConfig"}),": request configuration object type, which will be applied to the ",(0,r.jsx)(t.code,{children:"config"})," parameter when the method is created."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Response"}),": response type, for example, ",(0,r.jsx)(t.code,{children:"alova/fetch"})," is the Response type"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"ResponseHeader"}),": response header object type"]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>o});var r=n(67294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);