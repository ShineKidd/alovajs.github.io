"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9154],{930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var n=r(5893),a=r(1151);const s={title:"Request method instance",sidebar_position:20},i=void 0,o={id:"tutorial/learning/method-instance",title:"Request method instance",description:"In alova, each request corresponds to a method instance, which describes the url, request header, request parameters, and request behavior parameters such as response data processing and cache data processing. Through the method instance, you can experience a unified user experience in any js environment, and it can run normally with very few changes. At the same time, the method instance puts the request parameters and request behavior parameters together, which is more convenient for api managed, rather than scattered across multiple code files.",source:"@site/docs/tutorial/03-learning/02-method-instance.md",sourceDirName:"tutorial/03-learning",slug:"/tutorial/learning/method-instance",permalink:"/tutorial/learning/method-instance",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/03-learning/02-method-instance.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Request method instance",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"About alova instance",permalink:"/tutorial/learning/alova-instance"},next:{title:"Send request",permalink:"/tutorial/learning/use-request"}},d={},h=[{value:"create instance",id:"create-instance",level:2},{value:"Set request-level timeout",id:"set-request-level-timeout",level:2},{value:"Request behavior parameters",id:"request-behavior-parameters",level:2},{value:"Set the parameters supported by the request adapter",id:"set-the-parameters-supported-by-the-request-adapter",level:2},{value:"Request method type",id:"request-method-type",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"In alova, each request corresponds to a method instance, which describes the url, request header, request parameters, and request behavior parameters such as response data processing and cache data processing. Through the method instance, you can experience a unified user experience in any js environment, and it can run normally with very few changes. At the same time, the method instance puts the request parameters and request behavior parameters together, which is more convenient for api managed, rather than scattered across multiple code files."}),"\n",(0,n.jsx)(t.h2,{id:"create-instance",children:"create instance"}),"\n",(0,n.jsx)(t.p,{children:"The creation of a method instance is also very similar to the request sending function of axios. You need to create method instance by alova instance created in last term. Let's first create a Method instance to get the todo list."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// Create a Get instance to describe the information of a Get request\r\nconst todoListGetter = alovaInstance.Get('/todo/list', {\r\n  // request header\r\n  headers: {\r\n    'Content-Type': 'application/json;charset=UTF-8'\r\n  },\r\n  // The params parameter will be spliced after the url in the form of?\r\n  params: {\r\n    userId: 1\r\n  }\r\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"Then create a POST request Method instance to submit the todo item, but now the second param is the request body."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// Create a Post instance\r\nconst createTodoPoster = alovaInstance.Post(\r\n  '/todo/create',\r\n  // The second parameter is the http body data\r\n  {\r\n    title: 'test todo',\r\n    time: '12:00'\r\n  },\r\n  // The third parameter is request configuration related information\r\n  {\r\n    headers: {\r\n      'Content-Type': 'application/json;charset=UTF-8'\r\n    },\r\n    params: {\r\n      //...\r\n    }\r\n  }\r\n);\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["\u26a0\ufe0f Note: The ",(0,n.jsx)(t.code,{children:"Method"})," instance only saves the information needed for the request, it does not send the request, but needs to send the request through the ",(0,n.jsx)(t.code,{children:"use hook"})," (will be explained in detail later), or call ",(0,n.jsx)(t.code,{children:"methodInstance.send"})," to send request, which is different from ",(0,n.jsx)(t.code,{children:"axios"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"set-request-level-timeout",children:"Set request-level timeout"}),"\n",(0,n.jsxs)(t.p,{children:["The global request timeout applies to all ",(0,n.jsx)(t.code,{children:"Method"})," instances, but many times we need to set different timeouts according to special requests. At this time, we can set the request-level timeout, which will override the global ",(0,n.jsx)(t.code,{children:"timeout"})," parameter"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// Request timeout at the request level\r\nconst todoListGetter = alovaInstance.Get('/todo/list', {\r\n  //...\r\n  // highlight-start\r\n  timeout: 10000\r\n  // highlight-end\r\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"request-behavior-parameters",children:"Request behavior parameters"}),"\n",(0,n.jsxs)(t.p,{children:["In addition to setting request parameters, ",(0,n.jsx)(t.code,{children:"method"})," instances can also set request behavior parameters. The following are the supported request behavior parameters, which will also be explained in detail in subsequent chapters."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsxs)(t.td,{children:["method instance name, which is generally used to ",(0,n.jsx)(t.a,{href:"/tutorial/next-step/method-instance-matcher",children:"match method instances"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"transformData"}),(0,n.jsxs)(t.td,{children:["Set the response data conversion function, see ",(0,n.jsx)(t.a,{href:"/tutorial/learning/transform-response-data",children:"Convert Response Data"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"localCache"}),(0,n.jsxs)(t.td,{children:["Set the request-level cache mode, see ",(0,n.jsx)(t.a,{href:"/tutorial/learning/response-cache",children:"cache mode"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"enableDownload"}),(0,n.jsxs)(t.td,{children:["Enable download progress information, see ",(0,n.jsx)(t.a,{href:"/tutorial/next-step/download-upload-progress",children:"Download/Upload Progress"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"enableUpload"}),(0,n.jsxs)(t.td,{children:["Enable upload progress information, see ",(0,n.jsx)(t.a,{href:"/tutorial/next-step/download-upload-progress",children:"Download/Upload Progress"})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hitSource"}),(0,n.jsxs)(t.td,{children:["Cache auto-invalidation settings, see ",(0,n.jsx)(t.a,{href:"/tutorial/next-step/auto-invalidate-cache",children:"Auto-invalidate cache"})," for details"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"shareRequest"}),(0,n.jsxs)(t.td,{children:["Sharing request, see ",(0,n.jsx)(t.a,{href:"/tutorial/next-step/share-request",children:"Share Request"})]})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"set-the-parameters-supported-by-the-request-adapter",children:"Set the parameters supported by the request adapter"}),"\n",(0,n.jsxs)(t.p,{children:["Except the ",(0,n.jsx)(t.a,{href:"/tutorial/next-step/method-details",children:"10 common configuration items"})," of ",(0,n.jsx)(t.code,{children:"method"})," instance, it also can config any parameters supported by the corresponding request adapter, for example, in the ",(0,n.jsx)(t.a,{href:"/tutorial/learning/alova-instance",children:"Chapter about understanding the alova instance"}),", we have built-in and recommended ",(0,n.jsx)(t.code,{children:"GlobalFetch"})," as alova's request adapter, which will internally send requests through the ",(0,n.jsx)(t.code,{children:"fetch"})," function. At this time, you can also configure any parameters supported by ",(0,n.jsx)(t.code,{children:"fetch"})," on the ",(0,n.jsx)(t.code,{children:"method"})," instance, and these parameters will be passed to the ",(0,n.jsx)(t.code,{children:"fetch"})," function when requesting."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"const todoListGetter = alovaInstance.Get('/todo/list', {\r\n  // ...\r\n  // highlight-start\r\n  credentials: 'same-origin',\r\n  referrerPolicy: 'no-referrer',\r\n  mode: 'cors'\r\n  // highlight-end\r\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["When the above ",(0,n.jsx)(t.code,{children:"method"})," instance sends a request, it will be requested through ",(0,n.jsx)(t.code,{children:"fetch"})," with the following parameters."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"fetch('/todo/list', {\r\n  // ...\r\n  // highlight-start\r\n  credentials: 'same-origin',\r\n  referrerPolicy: 'no-referrer',\r\n  mode: 'cors'\r\n  // highlight-end\r\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["In the extensions, we also provide ",(0,n.jsx)(t.a,{href:"/tutorial/extension/alova-adapter-xhr",children:"XMLHttpRequest Adapter"}),", ",(0,n.jsx)(t.a,{href:"/tutorial/extension/alova-adapter-axios",children:"axios Adapter"}),", ",(0,n.jsx)(t.a,{href:"/tutorial/extension/alova-adapter-uniapp",children:"Uniapp Adapter"}),", ",(0,n.jsx)(t.a,{href:"/tutorial/extension/alova-adapter-taro",children:"Taro adapter"})," etc. Each adapter also has the parameters they support."]}),"\n",(0,n.jsx)(t.h2,{id:"request-method-type",children:"Request method type"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Alova"})," provides abstract instances of seven request methods including GET, POST, PUT, DELETE, HEAD, OPTIONS, and PATCH. For specific usage methods, please read ",(0,n.jsx)(t.a,{href:"/tutorial/next-step/method-details",children:"Request Method Details"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var n=r(7294);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);