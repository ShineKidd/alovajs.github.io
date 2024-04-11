"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3697],{5374:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=a(5893),t=a(1151),l=a(4866),o=a(5162);const i={title:"Uniapp\u9002\u914d\u5668",sidebar_position:50},s=void 0,d={id:"tutorial/request-adapter/alova-adapter-uniapp",title:"Uniapp\u9002\u914d\u5668",description:"\u6b64\u63d2\u4ef6\u53ea\u652f\u6301 vue3 \u7248\u672c\u7684 uniapp \u5e94\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/08-request-adapter/05-alova-adapter-uniapp.md",sourceDirName:"tutorial/08-request-adapter",slug:"/tutorial/request-adapter/alova-adapter-uniapp",permalink:"/zh-CN/tutorial/request-adapter/alova-adapter-uniapp",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/08-request-adapter/05-alova-adapter-uniapp.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Uniapp\u9002\u914d\u5668",sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"Taro\u9002\u914d\u5668",permalink:"/zh-CN/tutorial/request-adapter/alova-adapter-taro"},next:{title:"Framework",permalink:"/zh-CN/category/framework"}},c={},u=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u521b\u5efa alova",id:"\u521b\u5efa-alova",level:3},{value:"\u8bf7\u6c42",id:"\u8bf7\u6c42",level:3},{value:"\u4e0a\u4f20",id:"\u4e0a\u4f20",level:3},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:3},{value:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",level:2},{value:"Typescript",id:"typescript",level:2},{value:"method \u914d\u7f6e",id:"method-\u914d\u7f6e",level:3},{value:"\u54cd\u5e94\u6570\u636e",id:"\u54cd\u5e94\u6570\u636e",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"\u63d0\u793a",type:"info",children:(0,r.jsx)(n.p,{children:"\u6b64\u63d2\u4ef6\u53ea\u652f\u6301 vue3 \u7248\u672c\u7684 uniapp \u5e94\u7528\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsxs)(l.Z,{groupId:"framework",children:[(0,r.jsx)(o.Z,{value:"1",label:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install @alova/adapter-uniapp --save\n"})})}),(0,r.jsx)(o.Z,{value:"2",label:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @alova/adapter-uniapp\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,r.jsx)(n.h3,{id:"\u521b\u5efa-alova",children:"\u521b\u5efa alova"}),"\n",(0,r.jsxs)(n.p,{children:["\u8c03\u7528 ",(0,r.jsx)(n.strong,{children:"AdapterUniapp"})," \u5c06\u8fd4\u56de",(0,r.jsx)(n.em,{children:"\u8bf7\u6c42\u9002\u914d\u5668"}),"\u3001",(0,r.jsx)(n.em,{children:"\u5b58\u50a8\u9002\u914d\u5668"}),"\uff0c\u4ee5\u53ca",(0,r.jsx)(n.em,{children:"VueHook"}),"\uff0c\u56e0\u6b64\u4f60\u4e0d\u518d\u9700\u8981\u8bbe\u7f6e\u8fd9\u4e09\u4e2a\u9879\uff0c\u4f7f\u7528\u65b9\u6cd5\u5b8c\u5168\u4e00\u81f4\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { createAlova } from 'alova';\r\nimport AdapterUniapp from '@alova/adapter-uniapp';\r\n\r\nconst alovaInst = createAlova({\r\n  baseURL: 'https://api.alovajs.org',\r\n  ...AdapterUniapp()\r\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u8bf7\u6c42",children:"\u8bf7\u6c42"}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u6c42\u7684\u4f7f\u7528\u65b9\u6cd5\u4e0e web \u73af\u5883\u4e2d\u4f7f\u7528\u5b8c\u5168\u4e00\u81f4\u3002\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,r.jsx)(n.code,{children:"uni.request"}),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,r.jsx)(n.em,{children:"config"}),"\u4e2d\u6307\u5b9a",(0,r.jsx)(n.code,{children:"uni.request"}),"\u652f\u6301\u7684",(0,r.jsx)(n.a,{href:"https://uniapp.dcloud.net.cn/api/request/request.html",children:"\u5168\u90e8\u914d\u7f6e\u9879"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<tempate>\r\n  <view v-if=\"loading\">\u52a0\u8f7d\u4e2d...</view>\r\n  <view>\u8bf7\u6c42\u6570\u636e\u4e3a\uff1a{{ data }}</view>\r\n</tempate>\r\n\r\n<script setup>\r\n  const list = () =>\r\n    alovaInst.Get('/list', {\r\n      // \u8bbe\u7f6e\u7684\u53c2\u6570\u5c06\u4f20\u9012\u7ed9uni.request\r\n      enableHttp2: true,\r\n      sslVerify: true\r\n    });\r\n  const { loading, data } = useRequest(list);\r\n<\/script>\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528",(0,r.jsx)(n.code,{children:"useRequest/useWatcher"}),"\u7acb\u5373\u53d1\u9001\u8bf7\u6c42\u65f6\uff0c\u5b83\u5c06\u4f1a\u5728",(0,r.jsx)(n.code,{children:"onLoad"}),"\u94a9\u5b50\u4e2d\u5f02\u6b65\u6267\u884c\uff0c\u56e0\u6b64\u4f60\u53ef\u4ee5\u5728",(0,r.jsx)(n.code,{children:"methodHandler"}),"\u4e2d\u8bbf\u95ee options \u6570\u636e\uff0c\u8bbf\u95ee\u65b9\u5f0f\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { onLoad } from '@dcloudio/uni-app';\r\n\r\nlet options = {};\r\nonLoad(opt => {\r\n  options = opt;\r\n});\r\nconst { loading, data } = useRequest(() => getDetail(options.id));\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4e0a\u4f20",children:"\u4e0a\u4f20"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 method \u5b9e\u4f8b\u7684",(0,r.jsx)(n.em,{children:"config"}),"\u4e2d\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"requestType: 'upload'"}),"\u65f6\u8868\u793a\u4e0a\u4f20\u6587\u4ef6\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u5c06\u4f1a\u8c03\u7528",(0,r.jsx)(n.code,{children:"uni.uploadFile"}),"\uff0c\u4e0a\u4f20\u7684\u6587\u4ef6\u6570\u636e\u653e\u5728 method \u5b9e\u4f8b\u7684 data \u4e2d\uff0c\u4f60\u9700\u8981\u5728 data \u4e2d\u6307\u5b9a",(0,r.jsx)(n.code,{children:"name"}),"\u3001",(0,r.jsx)(n.code,{children:"filePath\u6216files"}),"\uff0c\u4ee5\u53ca",(0,r.jsx)(n.code,{children:"file"}),"(\u5982\u679c\u9700\u8981)\uff0c\u8fd9 4 \u4e2a\u53c2\u6570\u5c06\u4f20\u5230",(0,r.jsx)(n.code,{children:"uni.uploadFile"}),"\u4e2d\uff0c\u540c\u65f6\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728 data \u4e2d\u6307\u5b9a\u8fd9 4 \u4e2a\u53c2\u6570\u5916\u7684\u5176\u4ed6\u53c2\u6570\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u4f1a\u5c06\u5b83\u4eec\u4f20\u5165\u5230",(0,r.jsx)(n.code,{children:"formData"}),"\u53c2\u6570\u4e2d\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u540c\u6837\u7684\uff0c\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,r.jsx)(n.code,{children:"uni.uploadFile"}),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,r.jsx)(n.em,{children:"config"}),"\u4e2d\u6307\u5b9a",(0,r.jsx)(n.code,{children:"uni.uploadFile"}),"\u652f\u6301\u7684",(0,r.jsx)(n.a,{href:"https://uniapp.dcloud.net.cn/api/request/network-file.html#uploadfile",children:"\u5168\u90e8\u914d\u7f6e\u9879"}),"\uff0c\u5982\u679c\u8fd8\u6709\u989d\u5916\u7684\u53c2\u6570\u9700\u8981\u8bbe\u7f6e\uff0c\u8bf7\u5728 method \u5b9e\u4f8b\u7684",(0,r.jsx)(n.em,{children:"config"}),"\u4e2d\u6307\u5b9a\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<tempate>\r\n  <view v-if=\"loading\">\u4e0a\u4f20\u4e2d...</view>\r\n  <view>\u4e0a\u4f20\u8fdb\u5ea6\uff1a{{ uploading.loaded }}/{{ uploading.total }}</view>\r\n  <button @click=\"handleImageChoose\">\u4e0a\u4f20\u56fe\u7247</button>\r\n  \x3c!-- ... --\x3e\r\n</tempate>\r\n\r\n<script setup>\r\n  const uploadFile = (name, filePath, formData) =>\r\n    alovaInst.Post(\r\n      '/uploadImg',\r\n      {\r\n        name,\r\n        filePath,\r\n\r\n        // \u989d\u5916\u6570\u636e\u5c06\u4f20\u5165uni.uploadFile\u7684formData\u4e2d\r\n        ...formData\r\n      },\r\n      {\r\n        // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0a\u4f20\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528uni.uploadFile\r\n        requestType: 'upload',\r\n        fileType: 'image',\r\n\r\n        // \u5f00\u542f\u4e0a\u4f20\u8fdb\u5ea6\r\n        enableUpload: true\r\n      }\r\n    );\r\n\r\n  const { loading, data, uploading, send } = useRequest(uploadFile, {\r\n    immediate: false\r\n  });\r\n\r\n  const handleImageChoose = () => {\r\n    uni.chooseImage({\r\n      success: chooseImageRes => {\r\n        const tempFilePaths = chooseImageRes.tempFilePaths;\r\n        send('fileName', tempFilePaths[0], {\r\n          extra1: 'a',\r\n          extra2: 'b'\r\n        });\r\n      }\r\n    });\r\n  };\r\n<\/script>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u4e0b\u8f7d",children:"\u4e0b\u8f7d"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728 method \u5b9e\u4f8b\u7684",(0,r.jsx)(n.em,{children:"config"}),"\u4e2d\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"requestType: 'download'"}),"\u65f6\u8868\u793a\u4e0b\u8f7d\u6587\u4ef6\uff0c\u8bf7\u6c42\u9002\u914d\u5668\u5c06\u4f1a\u8c03\u7528",(0,r.jsx)(n.code,{children:"uni.downloadFile"}),"\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u540c\u6837\u7684\uff0c\u5df2\u7ecf\u5b8c\u5168\u517c\u5bb9",(0,r.jsx)(n.code,{children:"uni.downloadFile"}),"\uff0c\u4f60\u53ef\u4ee5\u5728\u521b\u5efa method \u5b9e\u4f8b\u7684",(0,r.jsx)(n.em,{children:"config"}),"\u4e2d\u6307\u5b9a",(0,r.jsx)(n.code,{children:"uni.downloadFile"}),"\u652f\u6301\u7684",(0,r.jsx)(n.a,{href:"https://uniapp.dcloud.net.cn/api/request/network-file.html#downloadfile",children:"\u5168\u90e8\u914d\u7f6e\u9879"}),"\uff0c\u5982\u679c\u8fd8\u6709\u989d\u5916\u7684\u53c2\u6570\u9700\u8981\u8bbe\u7f6e\uff0c\u8bf7\u5728 method \u5b9e\u4f8b\u7684",(0,r.jsx)(n.em,{children:"config"}),"\u4e2d\u6307\u5b9a\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:"<tempate>\r\n  <view v-if=\"loading\">\u4e0b\u8f7d\u4e2d...</view>\r\n  <view>\u4e0b\u8f7d\u8fdb\u5ea6\uff1a{{ downloading.loaded }}/{{ downloading.total }}</view>\r\n  <button @click=\"handleImageDownload\">\u4e0b\u8f7d\u56fe\u7247</button>\r\n  \x3c!-- ... --\x3e\r\n</tempate>\r\n\r\n<script setup>\r\n  const downloadFile = filePath =>\r\n    alovaInst.Get('/bigImage.jpg', {\r\n      // \u8bbe\u7f6e\u8bf7\u6c42\u65b9\u5f0f\u4e3a\u4e0b\u8f7d\uff0c\u9002\u914d\u5668\u5185\u5c06\u8c03\u7528uni.downloadFile\r\n      requestType: 'download',\r\n      filePath,\r\n\r\n      // \u5f00\u542f\u4e0b\u8f7d\u8fdb\u5ea6\r\n      enableDownload: true\r\n    });\r\n\r\n  const { loading, data, downloading, send } = useRequest(downloadFile, {\r\n    immediate: false\r\n  });\r\n\r\n  const handleImageDownload = () => {\r\n    send('file_save_path');\r\n  };\r\n<\/script>\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9",children:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u517c\u5bb9"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4f7f\u7528 uniapp \u5f00\u53d1\u5e94\u7528\u65f6\uff0c\u6211\u4eec\u4ecd\u7136\u53ef\u80fd\u9700\u8981\u7528\u5230\u6a21\u62df\u8bf7\u6c42\uff0c\u53ea\u662f\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.jsx)(n.a,{href:"/tutorial/request-adapter/alova-mock",children:"\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668(@alova/mock)"}),"\u7684\u54cd\u5e94\u6570\u636e\u662f\u4e00\u4e2a",(0,r.jsx)(n.code,{children:"Response"}),"\u5b9e\u4f8b\uff0c\u5373\u9ed8\u8ba4\u517c\u5bb9",(0,r.jsx)(n.code,{children:"GlobalFetch"}),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u5f53\u5728 uniapp \u73af\u5883\u4e0b\u4f7f\u7528\u65f6\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\u7684\u54cd\u5e94\u6570\u636e\u662f\u517c\u5bb9 uniapp \u9002\u914d\u5668\u7684\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u4f7f\u7528**@alova/adapter-uniapp**\u5305\u4e2d\u5bfc\u51fa\u7684",(0,r.jsx)(n.code,{children:"uniappMockResponse"}),"\u4f5c\u4e3a\u54cd\u5e94\u9002\u914d\u5668\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { defineMock, createAlovaMockAdapter } from '@alova/mock';\r\nimport AdapterUniapp, { uniappRequestAdapter, uniappMockResponse } from '@alova/adapter-uniapp';\r\n\r\nconst mocks = defineMock({\r\n  // ...\r\n});\r\n\r\n// \u6a21\u62df\u6570\u636e\u8bf7\u6c42\u9002\u914d\u5668\r\nexport default createAlovaMockAdapter([mocks], {\r\n  // \u6307\u5b9auniapp\u8bf7\u6c42\u9002\u914d\u5668\u540e\uff0c\u672a\u5339\u914d\u6a21\u62df\u63a5\u53e3\u7684\u8bf7\u6c42\u5c06\u4f7f\u7528\u8fd9\u4e2a\u9002\u914d\u5668\u53d1\u9001\u8bf7\u6c42\r\n  httpAdapter: uniappRequestAdapter,\r\n\r\n  //  \u6a21\u62df\u54cd\u5e94\u9002\u914d\u5668\uff0c\u6307\u5b9a\u540e\u54cd\u5e94\u6570\u636e\u5c06\u8f6c\u6362\u4e3auniapp\u517c\u5bb9\u7684\u6570\u636e\u683c\u5f0f\r\n  onMockResponse: uniappMockResponse\r\n});\r\n\r\nexport const alovaInst = createAlova({\r\n  baseURL: 'https://api.alovajs.org',\r\n  timeout: 5000,\r\n  ...AdapterUniapp({\r\n    // \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u63a7\u5236\u662f\u5426\u4f7f\u7528\u6a21\u62df\u8bf7\u6c42\u9002\u914d\u5668\r\n    mockRequest: process.env.NODE_ENV === 'development' ? mockAdapter : undefined\r\n  })\r\n  // ...\r\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"typescript",children:"Typescript"}),"\n",(0,r.jsx)(n.p,{children:"uniapp \u8bf7\u6c42\u9002\u914d\u5668\u63d0\u4f9b\u4e86\u5b8c\u6574\u7684\u7c7b\u578b\u9002\u914d\uff0cmethod \u914d\u7f6e\u3001\u54cd\u5e94\u6570\u636e\u7684\u7c7b\u578b\u5c06\u4e0e uniapp \u7684\u7c7b\u578b\u5b8c\u5168\u5339\u914d\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"method-\u914d\u7f6e",children:"method \u914d\u7f6e"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u521b\u5efa method \u5b9e\u4f8b\u65f6\uff0c\u9664\u4e86 method \u4e2d\u901a\u7528\u7684\u914d\u7f6e\u9879\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"uniapp.request"}),"\u3001",(0,r.jsx)(n.code,{children:"uniapp.uploadFile"}),"\u548c",(0,r.jsx)(n.code,{children:"uniapp.downloadFile"}),"\u4e2d\u7684\u914d\u7f6e\u9879\uff0c\u6211\u4eec\u5df2\u7ecf\u5728\u7c7b\u578b\u4e2d\u53bb\u9664\u4e86\u548c method \u5b9e\u4f8b\u901a\u7528\u914d\u7f6e\u51b2\u7a81\u7684\u9879\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"/**\r\n * uni.request\u8bf7\u6c42\u989d\u5916\u53c2\u6570\r\n */\r\nexport type UniappRequestConfig = Omit<\r\n  UniNamespace.RequestOptions,\r\n  'url' | 'data' | 'header' | 'method' | 'timeout' | 'success' | 'fail' | 'complete'\r\n>;\r\n\r\n/**\r\n * uni.uploadFile\u989d\u5916\u53c2\u6570\r\n */\r\nexport type UniappUploadConfig = Omit<\r\n  UniNamespace.UploadFileOption,\r\n  'url' | 'name' | 'header' | 'formData' | 'timeout' | 'success' | 'fail' | 'complete'\r\n>;\r\n\r\n/**\r\n * uni.downloadFile\u989d\u5916\u53c2\u6570\r\n */\r\nexport type UniappDownloadConfig = Omit<\r\n  UniNamespace.DownloadFileOption,\r\n  'url' | 'header' | 'timeout' | 'success' | 'fail' | 'complete'\r\n>;\r\n\r\n/**\r\n * \u5408\u5e76\u7684\u8bf7\u6c42\u914d\u7f6e\u53c2\u6570\r\n */\r\nexport type UniappConfig = {\r\n  /**\r\n   * \u8bf7\u6c42\u7c7b\u578b\uff0cupload\u8868\u793a\u4e0a\u4f20\uff0cdownload\u8868\u793a\u4e0b\u8f7d\uff0c\u4e0d\u586b\u5199\u8868\u793a\u6b63\u5e38\u8bf7\u6c42\r\n   */\r\n  requestType?: 'upload' | 'download';\r\n} & UniappRequestConfig &\r\n  UniappUploadConfig &\r\n  UniappDownloadConfig;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u54cd\u5e94\u6570\u636e",children:"\u54cd\u5e94\u6570\u636e"}),"\n",(0,r.jsxs)(n.p,{children:["\u56e0\u4e3a uniapp \u8bf7\u6c42\u9002\u914d\u5668\u540c\u65f6\u517c\u5bb9\u4e86",(0,r.jsx)(n.code,{children:"uniapp.request"}),"\u3001",(0,r.jsx)(n.code,{children:"uniapp.uploadFile"}),"\u548c",(0,r.jsx)(n.code,{children:"uniapp.downloadFile"}),"\uff0c\u4f46\u5b83\u4eec\u7684\u54cd\u5e94\u503c\u7c7b\u578b\u7a0d\u6709\u4e0d\u540c\uff0c\u6240\u4ee5\u54cd\u5e94\u6570\u636e\u7c7b\u578b\u662f\u8fd9\u6837\u7684\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type UniappResponse =\r\n  // uni.request\u7684\u54cd\u5e94\u7c7b\u578b\r\n  | UniNamespace.RequestSuccessCallbackResult\r\n\r\n  // uni.uploadFile\u7684\u54cd\u5e94\u7c7b\u578b\r\n  | UniNamespace.UploadFileSuccessCallbackResult\r\n\r\n  // uni.downloadFile\u7684\u54cd\u5e94\u7c7b\u578b\r\n  | UniNamespace.DownloadSuccessData;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u9700\u8981\u5728\u5168\u5c40\u5904\u7406\u54cd\u5e94\u6570\u636e\uff0c\u5efa\u8bae\u5206\u5f00\u573a\u666f\u5224\u65ad\u8fd4\u56de\u6570\u636e\uff0c\u4e00\u4e2a\u7b80\u5355\u7684\u5b9e\u4f8b\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const alovaInst = createAlova(\r\n  baseURL: 'https://api.alovajs.org',\r\n  ...AdapterUniapp(),\r\n  responded(response) {\r\n    const { statusCode, data } = response as UniNamespace.RequestSuccessCallbackResult;\r\n    if (statusCode >= 400) {\r\n      throw new Error('\u8bf7\u6c42\u9519\u8bef');\r\n    }\r\n    return data || null;\r\n  }\r\n});\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>o});a(7294);var r=a(512);const t={tabItem:"tabItem_Ymn6"};var l=a(5893);function o(e){let{children:n,hidden:a,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,o),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>q});var r=a(7294),t=a(512),l=a(2466),o=a(6550),i=a(469),s=a(1980),d=a(7392),c=a(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function h(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function v(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,l=p(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[d,u]=m({queryString:a,groupId:t}),[v,f]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,c.Nk)(a);return[t,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:t}),x=(()=>{const e=d??v;return h({value:e,tabValues:l})?e:null})();(0,i.Z)((()=>{x&&s(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=a(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=a(5893);function g(e){let{className:n,block:a,selectedValue:r,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const n=e.currentTarget,a=s.indexOf(n),t=i[a].value;t!==r&&(d(n),o(t))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;n=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;n=s[a]??s[s.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>s.push(e),onKeyDown:u,onClick:c,...l,className:(0,t.Z)("tabs__item",x.tabItem,l?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function b(e){let{lazy:n,children:a,selectedValue:t}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=v(e);return(0,j.jsxs)("div",{className:(0,t.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(b,{...e,...n})]})}function q(e){const n=(0,f.Z)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>o});var r=a(7294);const t={},l=r.createContext(t);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);