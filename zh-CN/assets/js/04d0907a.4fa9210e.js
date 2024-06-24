"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[5790],{57464:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(85893),r=t(11151);const o={title:"\u8bf7\u6c42\u9002\u914d\u5668"},d=void 0,a={id:"tutorial/advanced/custom/http-adapter",title:"\u8bf7\u6c42\u9002\u914d\u5668",description:"\u8fd8\u8bb0\u5f97\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Alova \u5b9e\u4f8b\u5417\uff1f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/06-advanced/02-custom/01-http-adapter.md",sourceDirName:"tutorial/06-advanced/02-custom",slug:"/tutorial/advanced/custom/http-adapter",permalink:"/zh-CN/next/tutorial/advanced/custom/http-adapter",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-advanced/02-custom/01-http-adapter.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u8bf7\u6c42\u9002\u914d\u5668"},sidebar:"tutorial",previous:{title:"\u6982\u89c8",permalink:"/zh-CN/next/tutorial/advanced/custom/"},next:{title:"\u5b58\u50a8\u9002\u914d\u5668",permalink:"/zh-CN/next/tutorial/advanced/custom/storage-adapter"}},l={},c=[{value:"\u8bf7\u6c42\u9002\u914d\u5668\u7ed3\u6784",id:"\u8bf7\u6c42\u9002\u914d\u5668\u7ed3\u6784",level:2},{value:"\u8bf7\u6c42\u53c2\u6570\u8be6\u7ec6",id:"\u8bf7\u6c42\u53c2\u6570\u8be6\u7ec6",level:3},{value:"\u8fd4\u56de\u53c2\u6570\u8be6\u7ec6",id:"\u8fd4\u56de\u53c2\u6570\u8be6\u7ec6",level:3},{value:"XMLHttpRequest \u8bf7\u6c42\u9002\u914d\u5668\u793a\u4f8b",id:"xmlhttprequest-\u8bf7\u6c42\u9002\u914d\u5668\u793a\u4f8b",level:2},{value:"\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b",id:"\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b",level:2}];function i(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u8fd8\u8bb0\u5f97\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Alova \u5b9e\u4f8b\u5417\uff1f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import adapterFetch from 'alova/fetch';\n\nconst alovaInstance = createAlova({\n  // ...\n  requestAdapter: adapterFetch()\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"requestAdapter"}),"\u5c31\u662f\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5185\u90e8\u7684\u8bf7\u6c42\u53d1\u9001\u548c\u63a5\u6536\u90fd\u5c06\u4f9d\u8d56\u8bf7\u6c42\u9002\u914d\u5668\uff0c",(0,s.jsx)(n.code,{children:"alova/fetch"}),"\u5c31\u662f\u901a\u8fc7 fetch api \u7684\u65b9\u5f0f\u6765\u7ba1\u7406\u8bf7\u6c42\u7684\uff0c\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u5b83\uff0c\u4f46\u662f\uff0c\u5f53",(0,s.jsx)(n.code,{children:"alova"}),"\u8fd0\u884c\u5728 fetch api \u4e0d\u53ef\u7528\u7684\u73af\u5883\u65f6\uff08\u5982 app\u3001\u5c0f\u7a0b\u5e8f\uff09\uff0c\u5c31\u9700\u8981\u66f4\u6362\u4e00\u4e2a\u652f\u6301\u5f53\u524d\u73af\u5883\u7684\u8bf7\u6c42\u9002\u914d\u5668\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u90a3\u5e94\u8be5\u5982\u4f55\u81ea\u5b9a\u4e49\u4e00\u4e2a\u8bf7\u6c42\u9002\u914d\u5668\u5462\uff1f\u5f88\u7b80\u5355\uff0c\u5b83\u5176\u5b9e\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5728\u6bcf\u6b21\u53d1\u8d77\u8bf7\u6c42\u65f6\u90fd\u4f1a\u8c03\u7528\u6b64\u51fd\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u5185\u5305\u542b\u5982",(0,s.jsx)(n.code,{children:"url"}),"\u3001",(0,s.jsx)(n.code,{children:"method"}),"\u3001",(0,s.jsx)(n.code,{children:"data"}),"\u3001",(0,s.jsx)(n.code,{children:"headers"}),"\u3001",(0,s.jsx)(n.code,{children:"timeout"}),"\u7b49\u8bf7\u6c42\u76f8\u5173\u7684\u6570\u636e\u96c6\u5408\uff0c\u867d\u7136\u5b57\u6bb5\u8f83\u591a\uff0c\u4f46\u6211\u4eec\u53ea\u9700\u8bbf\u95ee\u6211\u4eec\u9700\u8981\u7684\u6570\u636e\u5373\u53ef\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bf7\u6c42\u9002\u914d\u5668\u7ed3\u6784",children:"\u8bf7\u6c42\u9002\u914d\u5668\u7ed3\u6784"}),"\n",(0,s.jsx)(n.p,{children:"\u8bf7\u6c42\u9002\u914d\u5668\u5c06\u63a5\u6536\u5230\u8bf7\u6c42\u76f8\u5173\u7684\u53c2\u6570\uff0c\u4ee5\u53ca\u5f53\u524d\u6b63\u5728\u8bf7\u6c42\u7684 method \u5b9e\u4f8b\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u54cd\u5e94\u76f8\u5173\u7684\u51fd\u6570\u96c6\u5408\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function CustomRequestAdapter(requestElements, methodInstance) {\n  // \u5728\u6b64\u5904\u53d1\u9001\u8bf7\u6c42...\n\n  return {\n    async response() {\n      // \u8fd4\u56de\u54cd\u5e94\u6570\u636e\n    },\n    async headers() {\n      // \u8fd4\u56de\u54cd\u5e94\u5934\u7684\u5f02\u6b65\u51fd\u6570\n    },\n    abort() {\n      // \u4e2d\u65ad\u8bf7\u6c42\uff0c\u5f53\u5916\u90e8\u8c03\u7528abort\u65f6\u5c06\u89e6\u53d1\u6b64\u51fd\u6570\n    },\n    onDownload(updateDownloadProgress) {\n      // \u4e0b\u8f7d\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5185\u90e8\u6301\u7eed\u8c03\u7528updateDownloadProgress\u6765\u66f4\u65b0\u4e0b\u8f7d\u8fdb\u5ea6\n    },\n    onUpload(updateUploadProgress) {\n      // \u4e0a\u4f20\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5185\u90e8\u6301\u7eed\u8c03\u7528updateUploadProgress\u6765\u66f4\u65b0\u4e0a\u4f20\u8fdb\u5ea6\n    }\n  };\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u8bf7\u6c42\u53c2\u6570\u8be6\u7ec6",children:"\u8bf7\u6c42\u53c2\u6570\u8be6\u7ec6"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"requestElements"})}),"\n",(0,s.jsx)(n.p,{children:"\u53d1\u9001\u8bf7\u6c42\u7684\u76f8\u5173\u5143\u7d20\uff0c\u5305\u542b\u4ee5\u4e0b\u6570\u636e\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"interface RequestElements {\n  // \u8bf7\u6c42url\uff0cget\u53c2\u6570\u5df2\u5305\u542b\u5176\u4e2d\n  readonly url: string;\n\n  // \u8bf7\u6c42\u7c7b\u578b\uff0c\u5982GET\u3001POST\u3001PUT\u7b49\n  readonly type: MethodType;\n\n  // \u8bf7\u6c42\u5934\u4fe1\u606f\uff0c\u5bf9\u8c61\n  readonly headers: Arg;\n\n  // \u8bf7\u6c42\u4f53\u4fe1\u606f\n  readonly data?: RequestBody;\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"methodInstance"})}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u524d\u8bf7\u6c42\u7684 method \u5b9e\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u8fd4\u56de\u53c2\u6570\u8be6\u7ec6",children:"\u8fd4\u56de\u53c2\u6570\u8be6\u7ec6"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"response\uff08\u5fc5\u586b\uff09"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u51fd\u6570\u8fd4\u56de\u54cd\u5e94\u503c\uff0c\u5b83\u5c06\u4f1a\u4f20\u9012\u7ed9\u5168\u5c40\u7684\u54cd\u5e94\u62e6\u622a\u5668\uff08responded\uff09\uff1b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"headers\uff08\u5fc5\u586b\uff09"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u51fd\u6570\u8fd4\u56de\u7684\u54cd\u5e94\u5934\u5bf9\u8c61\u5c06\u4f20\u9012\u7ed9 Method \u5b9e\u4f8b\u7684 transform \u8f6c\u6362\u94a9\u5b50\u51fd\u6570\uff1b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"abort\uff08\u5fc5\u586b\uff09"})}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u666e\u901a\u51fd\u6570\uff0c\u5b83\u7528\u4e8e\u4e2d\u65ad\u8bf7\u6c42\uff0c\u6240\u6709\u7684\u4e2d\u65ad\u8bf7\u6c42\u6700\u7ec8\u90fd\u5c06\u4f1a\u8c03\u7528\u6b64\u51fd\u6570\u6765\u6267\u884c\uff1b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"onDownload\uff08\u53ef\u9009\uff09"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a\u666e\u901a\u51fd\u6570\uff0c\u5b83\u63a5\u6536\u4e00\u4e2a\u66f4\u65b0\u4e0b\u8f7d\u8fdb\u5ea6\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5728\u6b64\u51fd\u6570\u5185\u81ea\u5b9a\u4e49\u8fdb\u5ea6\u66f4\u65b0\u7684\u9891\u7387\uff0c\u5728\u6b64\u793a\u4f8b\u4e2d\u6a21\u62df\u6bcf\u9694 100 \u6beb\u79d2\u66f4\u65b0\u4e00\u6b21\u3002",(0,s.jsx)(n.code,{children:"updateDownloadProgress"}),"\u56de\u8c03\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u603b\u5927\u5c0f\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5df2\u4e0b\u8f7d\u5927\u5c0f\uff1b"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"onUpload\uff08\u53ef\u9009\uff09"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e00\u4e2a\u666e\u901a\u51fd\u6570\uff0c\u5b83\u63a5\u6536\u4e00\u4e2a\u66f4\u65b0\u4e0a\u4f20\u8fdb\u5ea6\u7684\u56de\u8c03\u51fd\u6570\uff0c\u5728\u6b64\u51fd\u6570\u5185\u81ea\u5b9a\u4e49\u8fdb\u5ea6\u66f4\u65b0\u7684\u9891\u7387\uff0c\u5728\u6b64\u793a\u4f8b\u4e2d\u6a21\u62df\u6bcf\u9694 100 \u6beb\u79d2\u66f4\u65b0\u4e00\u6b21\u3002",(0,s.jsx)(n.code,{children:"updateUploadProgress"}),"\u56de\u8c03\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u603b\u5927\u5c0f\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u5df2\u4e0a\u4f20\u5927\u5c0f\uff1b"]}),"\n",(0,s.jsx)(n.h2,{id:"xmlhttprequest-\u8bf7\u6c42\u9002\u914d\u5668\u793a\u4f8b",children:"XMLHttpRequest \u8bf7\u6c42\u9002\u914d\u5668\u793a\u4f8b"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u901a\u8fc7 XMLHttpRequest \u53d1\u9001\u8bf7\u6c42\u7684\u9002\u914d\u5668\u7684\u793a\u4f8b\uff0c\u4e3b\u8981\u7528\u4e8e\u6f14\u793a\u9002\u914d\u5668\u7684\u5199\u6cd5\uff0c\u4ee3\u7801\u4e0d\u5b8c\u6574\uff0c\u4e0d\u53ef\u8fd0\u884c\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"function XMLHttpRequestAdapter(requestElements, methodInstance) {\n  // \u89e3\u6784\u51fa\u9700\u8981\u7528\u5230\u7684\u6570\u636e\n  const { url, type, data, headers } = config;\n\n  // \u53d1\u9001\u8bf7\u6c42\n  const xhr = new XMLHttpRequest();\n  xhr.open(type, url);\n  for (const key in headers) {\n    xhr.setRequestHeader(key, headers[key]);\n  }\n  const responsePromise = new Promise((resolve, reject) => {\n    xhr.addEventListener('load', event => {\n      // \u5904\u7406\u54cd\u5e94\u6570\u636e\n      resolve(/* ... */);\n    });\n    xhr.addEventListener('error', event => {\n      // \u5904\u7406\u8bf7\u6c42\u9519\u8bef\n      reject(/* ... */);\n    });\n  });\n\n  xhr.send(JSON.stringify(data));\n\n  return {\n    // \u8fd4\u56de\u54cd\u5e94\u6570\u636e\u7684\u5f02\u6b65\u51fd\u6570\n    response: () => responsePromise,\n\n    // \u8fd4\u56de\u54cd\u5e94\u5934\u7684\u5f02\u6b65\u51fd\u6570\n    headers: () => responsePromise.then(() => xhr.getAllResponseHeaders()),\n    abort: () => {\n      xhr.abort();\n    },\n\n    // \u4e0b\u8f7d\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5185\u90e8\u6301\u7eed\u8c03\u7528updateDownloadProgress\u6765\u66f4\u65b0\u4e0b\u8f7d\u8fdb\u5ea6\n    onDownload: updateDownloadProgress => {\n      xhr.addEventListener('progress', event => {\n        // \u6570\u636e\u63a5\u6536\u8fdb\u5ea6\n        updateDownloadProgress(event.total, event.loaded);\n      });\n    },\n\n    // \u4e0a\u4f20\u8fdb\u5ea6\u4fe1\u606f\uff0c\u5185\u90e8\u6301\u7eed\u8c03\u7528updateUploadProgress\u6765\u66f4\u65b0\u4e0a\u4f20\u8fdb\u5ea6\n    onUpload: updateUploadProgress => {\n      xhr.upload.onprogress = event => {\n        updateUploadProgress(event.total, event.loaded);\n      };\n    }\n  };\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u66f4\u5b8c\u6574\u7684\u8bf7\u6c42\u9002\u914d\u5668\u7ec6\u8282\u53ef\u4ee5\u67e5\u9605 ",(0,s.jsx)(n.a,{href:"https://github.com/alovajs/alova/blob/main/packages/alova/src/predefine/adapterFetch.ts",children:"alova/fetch \u6e90\u7801"})," \u6765\u4e86\u89e3\u3002"]})}),"\n",(0,s.jsx)(n.h2,{id:"\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b",children:"\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b"}),"\n",(0,s.jsxs)(n.p,{children:["\u5168\u5c40\u7684",(0,s.jsx)(n.code,{children:"beforeRequest"}),"\u3001",(0,s.jsx)(n.code,{children:"responded"}),"\u62e6\u622a\u5668\uff0c\u4ee5\u53ca method \u5b9e\u4f8b\u521b\u5efa\u65f6\u7684\u914d\u7f6e\u5bf9\u8c61\u7684\u7c7b\u578b\uff0c\u90fd\u4f1a\u6839\u636e\u8bf7\u6c42\u9002\u914d\u5668\u63d0\u4f9b\u7684\u7c7b\u578b\u81ea\u52a8\u63a8\u65ad\uff0c\u4ee5\u4e0b\u662f ",(0,s.jsx)(n.code,{children:"alova/fetch"})," \u7684\u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import type { AlovaRequestAdapter } from 'alova';\n\nexport type adapterFetch = () => AlovaRequestAdapter<FetchRequestInit, Response, Headers>;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728",(0,s.jsx)(n.code,{children:"AlovaRequestAdapter"}),"\u4e2d\u7684\u6cdb\u578b\u53c2\u6570\u5206\u522b\u4e3a",(0,s.jsx)(n.code,{children:"RequestConfig"}),"\u3001",(0,s.jsx)(n.code,{children:"Response"}),"\u548c",(0,s.jsx)(n.code,{children:"ResponseHeader"}),"\u4e09\u4e2a\u7c7b\u578b\u7684\u503c\uff0c\u7528\u4e8e\u5728\u5168\u5c40\u7684\u62e6\u622a\u5668\u4e2d\u3001method \u5b9e\u4f8b\u914d\u7f6e\u4e2d\u7b49\u5730\u65b9\u5c06\u81ea\u52a8\u63a8\u65ad\u4e3a\u8bf7\u6c42\u9002\u914d\u5668\u7ed9\u5b9a\u7684\u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5b83\u4eec\u5206\u522b\u8868\u793a\u4e3a\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"RequestConfig"}),"\uff1a\u8bf7\u6c42\u914d\u7f6e\u5bf9\u8c61\u7c7b\u578b\uff0c\u5b83\u5c06\u5e94\u7528\u5728 method \u521b\u5efa\u65f6\u7684",(0,s.jsx)(n.code,{children:"config"}),"\u53c2\u6570\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Response"}),"\uff1a\u54cd\u5e94\u7c7b\u578b\uff0c\u4f8b\u5982",(0,s.jsx)(n.code,{children:"alova/fetch"}),"\u4e3a Response \u7c7b\u578b"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ResponseHeader"}),"\uff1a\u54cd\u5e94\u5934\u5bf9\u8c61\u7c7b\u578b"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>d});var s=t(67294);const r={},o=s.createContext(r);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);