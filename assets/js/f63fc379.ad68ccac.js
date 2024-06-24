"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[4241],{92287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=n(85893),a=n(11151);const r={title:"Method Instance"},o=void 0,i={id:"tutorial/getting-started/method",title:"Method Instance",description:"In the previous chapter we tried to send a request and obtain the response data. In fact, alovaInstance.Get(...) is not a function that initiates a request, but creates a method instance, which is a PromiseLike instance. You can use then, catch, finally methods or await Send the request just like a Promise object.",source:"@site/versioned_docs/version-2.x/tutorial/02-getting-started/03-method.md",sourceDirName:"tutorial/02-getting-started",slug:"/tutorial/getting-started/method",permalink:"/tutorial/getting-started/method",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/02-getting-started/03-method.md",tags:[],version:"2.x",sidebarPosition:3,frontMatter:{title:"Method Instance"},sidebar:"tutorial",previous:{title:"Quick Start",permalink:"/tutorial/getting-started/quick-start"},next:{title:"Alova Instance",permalink:"/tutorial/getting-started/alova"}},d={},l=[{value:"Request type",id:"request-type",level:2},{value:"Request parameters",id:"request-parameters",level:2},{value:"URL parameters",id:"url-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Request header",id:"request-header",level:3},{value:"Other parameters supported by the request adapter",id:"other-parameters-supported-by-the-request-adapter",level:3},{value:"Request behavior",id:"request-behavior",level:2},{value:"overtime time",id:"overtime-time",level:3},{value:"Request sharing",id:"request-sharing",level:3},{value:"Convert response data",id:"convert-response-data",level:3},{value:"Response cache",id:"response-cache",level:3},{value:"Abort request",id:"abort-request",level:2},{value:"Monitor upload and download progress",id:"monitor-upload-and-download-progress",level:2}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["In the previous chapter we tried to send a request and obtain the response data. In fact, ",(0,s.jsx)(t.code,{children:"alovaInstance.Get(...)"})," is not a function that initiates a request, but creates a method instance, which is a PromiseLike instance. You can use ",(0,s.jsx)(t.code,{children:"then, catch, finally"})," methods or ",(0,s.jsx)(t.code,{children:"await"})," Send the request just like a Promise object."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const userMethodInstance = alovaInstance.Get('/api/user');\n\nuserMethodInstance.then(response => {\n  // ...\n});\n\nuserMethodInstance.catch(error => {\n  // ...\n});\n\nuserMethodInstance.finally(() => {\n  // ...\n});\n\ntry {\n  await userMethodInstance;\n} catch (error) {\n  // ...\n} finally {\n  // ...\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Simple way to write:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const response = await alovaInstance.Get('/api/user');\n"})}),"\n",(0,s.jsx)(t.p,{children:"Each method instance describes the type of each request, request url, request headers, request parameters, etc. In addition, you can define request behavior on the method instance to control how the method handles the request."}),"\n",(0,s.jsx)(t.h2,{id:"request-type",children:"Request type"}),"\n",(0,s.jsx)(t.p,{children:"alova provides a total of 7 request types: GET, POST, PUT, DELETE, HEAD, OPTIONS, and PATCH."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Instance creation function"}),(0,s.jsx)(t.th,{children:"Parameters"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"GET"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"alovaInstance.Get(url[, config])"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"POST"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"alovaInstance.Post(url[, data[, config]])"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PUT"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"alovaInstance.Put(url[, data[, config]])"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"DELETE"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"alovaInstance.Delete(url[, data[, config]])"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"HEAD"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"alovaInstance.Head(url[, config])"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"OPTIONS"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"alovaInstance.Options(url[, config])"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"PATCH"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"alovaInstance.Patch(url[, data[, config]])"})})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Parameter Description:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"url"})," is the request path;"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"data"})," is the request body data;"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"config"})," is the request configuration object, which includes configurations such as request headers, params parameters, request behavior parameters, etc.;"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"you can also create a method instance customly. This is useful when you need to dynamically specify the request type."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"import { Method } from 'alova';\n\nconst method = new Method('GET', alovaInstance, '/api/users', {\n  params: {\n    ID: 1\n  }\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"Next, let\u2019s take a look at how to define request parameters, which should seem familiar to you."}),"\n",(0,s.jsx)(t.h2,{id:"request-parameters",children:"Request parameters"}),"\n",(0,s.jsx)(t.h3,{id:"url-parameters",children:"URL parameters"}),"\n",(0,s.jsx)(t.p,{children:"Pass in the URL parameters through params, and the params parameters will be spliced in the form of ? after the url."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.Get('/todo/list', {\n  params: {\n    userId: 1\n  }\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"Of course, you can also directly splice it behind the url, and the effect will be the same."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.Get('/todo/list?userId=1');\n"})}),"\n",(0,s.jsx)(t.h3,{id:"request-body",children:"Request body"}),"\n",(0,s.jsxs)(t.p,{children:["When sending ",(0,s.jsx)(t.strong,{children:"POST, PUT, DELETE, PATCH request"}),", you can send data through the request body. At this time, the second parameter is passed in the request body. It is worth noting that the POST request can also pass in the params parameter."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.Post(\n  '/todo',\n  //The second parameter is the request body\n  {\n    title: 'test todo',\n    time: '12:00'\n  },\n  // The third parameter is configuration\n  {\n    params: {\n      userId: 1\n    }\n  }\n);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"request-header",children:"Request header"}),"\n",(0,s.jsx)(t.p,{children:"Specify request headers via headers."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.Get('/user', {\n  headers: {\n    'Content-Type': 'application/json;charset=UTF-8'\n  }\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"other-parameters-supported-by-the-request-adapter",children:"Other parameters supported by the request adapter"}),"\n",(0,s.jsxs)(t.p,{children:["In addition to request headers, params parameters, etc., it also supports configuring parameters supported by the corresponding request adapter. When using ",(0,s.jsx)(t.code,{children:"GlobalFetch"})," as the request adapter of alova, you can configure any ",(0,s.jsx)(t.code,{children:"fetch API"})," supported parameters on the ",(0,s.jsx)(t.code,{children:"method"})," instance. These Parameters will be passed to the ",(0,s.jsx)(t.code,{children:"fetch"})," function during request."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.Get('/todo/list', {\n  // ...\n  // highlight-start\n  credentials: 'same-origin',\n  referrerPolicy: 'no-referrer',\n  mode: 'cors'\n  // highlight-end\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When the above ",(0,s.jsx)(t.code,{children:"method"})," instance sends a request through ",(0,s.jsx)(t.code,{children:"fetch"}),", it will be requested with the following parameters."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"fetch('/todo/list', {\n  // ...\n  // highlight-start\n  credentials: 'same-origin',\n  referrerPolicy: 'no-referrer',\n  mode: 'cors'\n  // highlight-end\n});\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["In addition to passing Object, the request body can also pass request body parameters supported by the request adapter. For example, GlobalFetch supports passing ",(0,s.jsx)(t.code,{children:"string | FormData | Blob | ArrayBuffer | URLSearchParams | ReadableStream"})," parameters."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If you use other request adapters, you can also pass the parameters they support."}),"\n",(0,s.jsx)(t.h2,{id:"request-behavior",children:"Request behavior"}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.a,{href:"/tutorial/others/RSM",children:"RSM"}),", request behavior is used to describe how the request will be handled."]}),"\n",(0,s.jsx)(t.h3,{id:"overtime-time",children:"overtime time"}),"\n",(0,s.jsx)(t.p,{children:"Set request timeout."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"// Request timeout at request level\nalovaInstance.Get('/todo/list', {\n  // ...\n  // highlight-start\n  timeout: 10000\n  // highlight-end\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"request-sharing",children:"Request sharing"}),"\n",(0,s.jsx)(t.p,{children:"We will always encounter this situation. When a request is issued but has not yet been responded to, the same request is issued again, resulting in a waste of requests or repeated submission of problems, such as the following three scenarios:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"A component will obtain initialization data when it is created. When a page renders multiple components at the same time, multiple identical requests will be issued at the same time;"}),"\n",(0,s.jsx)(t.li,{children:"The submit button is not disabled and the user clicks the submit button multiple times;"}),"\n",(0,s.jsx)(t.li,{children:"When the preloading page is entered before preloading is completed, multiple identical requests will be initiated;"}),"\n",(0,s.jsx)(t.li,{children:"Prevent repeated requests from being sent under react\u2019s StrictMode;"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Shared requests are used to solve these problems. It can not only improve application fluency, but also reduce server pressure."}),"\n",(0,s.jsx)(t.mermaid,{value:"flowchart LR\n   classDef response fill:#a8bcff\n   R1[Request 1] --\x3e S1[Send request] --\x3e W1[Waiting for response]:::response --\x3e RE1[Receive data 1]\n   R2[Same request as request 1] --\x3e W1[Waiting for response]:::response --\x3e RE2[Receive data 1]"}),"\n",(0,s.jsx)(t.p,{children:"Request sharing is enabled by default. If you wish to turn off request sharing on a specific request, you can do this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"alovaInst.Get('/todo', {\n  // ...\n  // highlight-start\n  shareRequest: false\n  // highlight-end\n});\n"})}),"\n",(0,s.jsx)(t.admonition,{title:"How to identify identical requests",type:"warning",children:(0,s.jsx)(t.p,{children:"The request method, request URL, request header, URL parameters, and request body of the method instance are used as a unique identifier. If the identifier is the same, it means the same request, instead of comparing the reference address of the method instance."})}),"\n",(0,s.jsx)(t.h3,{id:"convert-response-data",children:"Convert response data"}),"\n",(0,s.jsxs)(t.p,{children:["Sometimes we need to uniformly transform the response data. We can set the ",(0,s.jsx)(t.code,{children:"transformData"})," function for the method instance to convert the response data into the required structure."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"alovaInstance.Get('/todo/list', {\n  // The function accepts response data and response header data, and requires the converted data to be returned.\n  transformData(rawData, headers) {\n    return rawData.list.map(item => {\n      return {\n        ...item,\n        statusText: item.done ? 'Completed' : 'In progress'\n      };\n    });\n  }\n});\n"})}),"\n",(0,s.jsx)(t.h3,{id:"response-cache",children:"Response cache"}),"\n",(0,s.jsxs)(t.p,{children:["Response caching allows you to better utilize server-side data multiple times without having to send a request to obtain the data every time it is requested. GET requests will set a memory cache time of 5 minutes by default, which we will explain in detail in the ",(0,s.jsx)(t.a,{href:"/tutorial/cache/mode",children:"Response Caching"})," section later."]}),"\n",(0,s.jsx)(t.h2,{id:"abort-request",children:"Abort request"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"[2.6.2+]"})," calls the ",(0,s.jsx)(t.code,{children:"abort"})," of the method instance to abort the request."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const userMethod = alovaInstance.Get('/api/user');\nuserMethod.then(res => {\n  // ...\n});\n\nconst handleCancel = () => {\n  // highlight-start\n  userMethod.abort();\n  // highlight-end\n};\n"})}),"\n",(0,s.jsx)(t.h2,{id:"monitor-upload-and-download-progress",children:"Monitor upload and download progress"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"[v2.17.0+]"})," Bind the upload progress event through ",(0,s.jsx)(t.code,{children:"onUpload"})," of the method instance, and bind the download progress event through ",(0,s.jsx)(t.code,{children:"onDownload"}),", which will return the unbinding function."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const uploadMethod = alovaInstance.Post('/todo/uploadfile', formData);\nconst offUploadEvent = uploadMethod.onUpload(event => {\n  console.log('File size:', event.total);\n  console.log('Uploaded:', event.loaded);\n});\n\nuploadMethod.then(res => {\n  // ...\n});\n\n// Unbind upload callback\nconst handleOffEvent = () => {\n  offUploadEvent();\n};\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const downloadMethod = alovaInstance.Get('/todo/downloadfile');\nconst offDownloadEvent = downloadMethod.onDownload(event => {\n  console.log('File size:', event.total);\n  console.log('Downloaded:', event.loaded);\n});\n\ndownloadMethod.then(res => {\n  // ...\n});\n\n// Unbind download callback\nconst handleOffEvent = () => {\n  offDownloadEvent();\n};\n"})}),"\n",(0,s.jsxs)(t.admonition,{type:"warning",children:[(0,s.jsxs)(t.mdxAdmonitionTitle,{children:["Things to note when using the ",(0,s.jsx)(t.code,{children:"GlobalFetch"})," adapter"]}),(0,s.jsxs)(t.p,{children:["Due to fetch api limitations, the ",(0,s.jsx)(t.strong,{children:"GlobalFetch"})," adapter provided by alova does not support upload progress. If you need to upload progress, please use ",(0,s.jsx)(t.a,{href:"/tutorial/request-adapter/alova-adapter-xhr",children:"XMLHttpRequest Adapter"})," or ",(0,s.jsx)(t.a,{href:"/tutorial/request-adapter/alova-adapter-axios",children:"axios Adapter"}),"."]}),(0,s.jsxs)(t.p,{children:["You can also write your own request adapter, see ",(0,s.jsx)(t.a,{href:"/tutorial/custom/custom-http-adapter",children:"Writing Request Adapter"})," for details."]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Upload/Download Status Type"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"type Progress = {\n  /** Total amount of data uploaded or downloaded */\n  total: number;\n  /** Completed data */\n  loaded: number;\n};\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var s=n(67294);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);