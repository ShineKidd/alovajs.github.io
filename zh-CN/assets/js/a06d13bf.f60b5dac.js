"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[9124],{17129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(85893),s=n(11151);const a={title:"\u6b65\u9aa45-\u7f16\u8f91\u6570\u636e"},r=void 0,o={id:"tutorial/strategy/sensorless-data-interaction/edit-item",title:"\u6b65\u9aa45-\u7f16\u8f91\u6570\u636e",description:"\u5f53\u7528\u6237\u5728\u65ad\u7f51\u60c5\u51b5\u4e0b\u9700\u8981\u7f16\u8f91\u6570\u636e\uff0c\u600e\u4e48\u529e\uff1f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.x/tutorial/05-strategy/01-sensorless-data-interaction/08-edit-item.md",sourceDirName:"tutorial/05-strategy/01-sensorless-data-interaction",slug:"/tutorial/strategy/sensorless-data-interaction/edit-item",permalink:"/zh-CN/tutorial/strategy/sensorless-data-interaction/edit-item",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/05-strategy/01-sensorless-data-interaction/08-edit-item.md",tags:[],version:"2.x",sidebarPosition:8,frontMatter:{title:"\u6b65\u9aa45-\u7f16\u8f91\u6570\u636e"},sidebar:"tutorial",previous:{title:"\u6b65\u9aa44-\u6570\u636e\u8865\u507f",permalink:"/zh-CN/tutorial/strategy/sensorless-data-interaction/data-compensation"},next:{title:"\u8fd8\u6709\u4ec0\u4e48\uff1f",permalink:"/zh-CN/tutorial/strategy/sensorless-data-interaction/what-more"}},d={},l=[{value:"\u7f16\u8f91\u9759\u9ed8\u63d0\u4ea4\u9879",id:"\u7f16\u8f91\u9759\u9ed8\u63d0\u4ea4\u9879",level:2},{value:"\u5f53\u6b63\u5728\u7f16\u8f91\u7684\u6570\u636e\u9879\u63d0\u4ea4\u6210\u529f\u65f6",id:"\u5f53\u6b63\u5728\u7f16\u8f91\u7684\u6570\u636e\u9879\u63d0\u4ea4\u6210\u529f\u65f6",level:2}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"\u5f53\u7528\u6237\u5728\u65ad\u7f51\u60c5\u51b5\u4e0b\u9700\u8981\u7f16\u8f91\u6570\u636e\uff0c\u600e\u4e48\u529e\uff1f"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"\u8fd9\u65f6\uff0c\u9700\u8981\u5206\u4e24\u79cd\u60c5\u51b5\u6765\u8bf4\u660e\uff1a"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"\u5217\u8868\u6570\u636e\u53ef\u4ee5\u6ee1\u8db3\u7f16\u8f91\u9875\u7684\u6570\u636e\u56de\u663e\uff0c\u6b64\u65f6\u53ef\u4ee5\u5c06\u5217\u8868\u6570\u636e\u4f20\u9012\u5230\u7f16\u8f91\u9875\uff0c\u800c\u4e0d\u9700\u8981\u901a\u8fc7\u8bf7\u6c42\u83b7\u53d6\uff0c\u6b64\u65f6\u6240\u6709\u5217\u8868\u6570\u636e\u5728\u9759\u9ed8\u63d0\u4ea4\u6a21\u5f0f\u4e0b\u90fd\u652f\u6301\u7f16\u8f91\uff1b"}),"\n",(0,i.jsxs)(t.li,{children:["\u7f16\u8f91\u9875\u56de\u663e\u6570\u636e\u9700\u8981\u901a\u8fc7 api \u83b7\u53d6\u7684\uff0c\u53ea\u6709\u5728\u672c\u5730\u6709\u7f13\u5b58\u7684\u5217\u8868\u9879\u624d\u53ef\u4ee5\u6b63\u5e38\u56de\u663e\u6570\u636e\uff0c\u4f8b\u5982\uff1a","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"\u5728\u7f51\u7edc\u65ad\u5f00\u524d\u5df2\u7ecf\u8bbf\u95ee\u8fc7\u7684\u5217\u8868\u9879\uff0c\u518d\u6b21\u8bf7\u6c42\u53ef\u4ee5\u547d\u4e2d\u7f13\u5b58\uff1b"}),"\n",(0,i.jsx)(t.li,{children:"\u901a\u8fc7\u9759\u9ed8\u63d0\u4ea4\u6a21\u5f0f\u521b\u5efa\uff0c\u4f46\u8fd8\u6ca1\u6709\u63d0\u4ea4\u6210\u529f\u7684\u5217\u8868\u9879\uff0c\u63d0\u4ea4\u6570\u636e\u8fd8\u5b58\u5728\u4e8e silentMethod \u5b9e\u4f8b\u4e2d\uff1b"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["\u800c\u5728\u8fd9\u8fb9\u6211\u4eec\u5c06\u91cd\u70b9\u8ba8\u8bba ",(0,i.jsx)(t.strong,{children:"2-2"})," \u7684\u60c5\u51b5\u3002"]}),"\n",(0,i.jsx)(t.h2,{id:"\u7f16\u8f91\u9759\u9ed8\u63d0\u4ea4\u9879",children:"\u7f16\u8f91\u9759\u9ed8\u63d0\u4ea4\u9879"}),"\n",(0,i.jsxs)(t.p,{children:["\u5728\u4e4b\u524d\u7684\u7ae0\u8282\u4e2d\u6211\u4eec\u77e5\u9053\uff0c\u5f53\u65b0\u5efa\u7684\u6570\u636e\u9879\u8fd8\u6ca1\u6709\u6210\u529f\u63d0\u4ea4\u65f6\uff0c\u5c06\u4f1a\u4f7f\u7528\u865a\u62df\u6570\u636e\u4f5c\u4e3a id \u7684\u5360\u4f4d\u7b26\uff0c\u901a\u5e38\uff0c\u6211\u4eec\u4e5f\u662f\u901a\u8fc7 id \u6765\u83b7\u53d6\u6570\u636e\u9879\u7684\uff0c\u6b64\u65f6\u6211\u4eec\u5728",(0,i.jsx)(t.code,{children:"useSQRequeset"}),"\u4e0a\u5b9e\u73b0\u4e86\u865a\u62df\u6570\u636e\u62e6\u622a\uff0c\u4e00\u4e2a\u8bf7\u6c42\u5982\u679c\u9644\u5e26\u4e86\u865a\u62df\u6570\u636e\u4fe1\u606f\uff0c\u5b83\u5c06\u5728\u53d1\u9001\u524d\u88ab\u62e6\u622a\u5e76\u53ef\u4ee5\u6307\u5b9a\u6570\u636e\u6765\u66ff\u4ee3\u54cd\u5e94\u6570\u636e\uff0c\u5e76\u4e14\u653e\u5f03\u8fd9\u6b21\u8bf7\u6c42\u3002"]}),"\n",(0,i.jsxs)(t.p,{children:["\u8fd8\u8bb0\u5f97\u5728 ",(0,i.jsx)(t.a,{href:"/tutorial/strategy/sensorless-data-interaction/modify-response",children:"\u6b65\u9aa4 2-\u8c03\u6574\u54cd\u5e94\u5904\u7406"})," \u4e2d\u4fdd\u5b58\u7684 ",(0,i.jsx)(t.strong,{children:"silentMethod.reviewData"})," \u5417\uff1f"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"onSuccess(({ silentMethod }) => {\n  // \u6784\u9020\u5217\u8868\u6570\u636e\u9879\n  const editingItem = {\n    ...detail,\n    id: id || data.id\n  };\n  // ...\n  if (silentMethod) {\n    // highlight-start\n    // \u8bbe\u7f6e\u540d\u79f0\u662f\u4e3a\u4e86\u5728\u62e6\u622a\u65f6\u67e5\u627e\u5bf9\u5e94\u7684silentMethod\u5b9e\u4f8b\n    silentMethod.entity.setName('edit' + editingItem.id);\n    silentMethod.reviewData = {\n      operate: id ? 'edit' : 'add',\n      data: editingItem\n    };\n    // \u522b\u5fd8\u4e86\u8c03\u7528save\n    silentMethod.save();\n    // highlight-end\n  }\n});\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u5b83\u4e0d\u4ec5\u53ef\u4ee5\u7528\u4e8e\u6570\u636e\u8865\u507f\uff0c\u8fd8\u53ef\u4ee5\u7528\u4e8e\u5728\u7f16\u8f91\u9875\u4e2d\u56de\u663e\u6570\u636e\u3002"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"const { loading, data } = useSQRequest(id => todoDetail(id), {\n  initialData: {\n    title: '',\n    time: new Date()\n  },\n  immediate: false,\n\n  // highlight-start\n  // \u8bbe\u7f6e\u62e6\u622a\u51fd\u6570\uff0c\u5f53\u8fd9\u4e2a\u8bf7\u6c42\u5b58\u5728\u865a\u62df\u6570\u636e\u65f6\u51fd\u6570\u5c06\u88ab\u8c03\u7528\n  // \u5982\u679c\u8fd4\u56de\u4e86reviewData\u5219\u4f1a\u66ff\u4ee3\u54cd\u5e94\u6570\u636e\uff0c\u5e76\u653e\u5f03\u672c\u6b21\u8bf7\u6c42\uff0c\u5426\u5219\u4ecd\u7136\u53d1\u8d77\u8bf7\u6c42\n  vDataCaptured: () => {\n    const targetSM = filterSilentMethods('edit' + todoId).pop();\n    if (targetSM?.reviewData) {\n      return { ...targetSM.reviewData.data };\n    }\n  }\n  // highlight-end\n});\n"})}),"\n",(0,i.jsx)(t.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,i.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u5728 ",(0,i.jsx)(t.strong,{children:"silentMethod.reviewData"})," \u4e2d\u4fdd\u5b58\u8db3\u591f\u591a\u7684\u6570\u636e\uff0c\u8ba9\u5b83\u65e2\u53ef\u4ee5\u6ee1\u8db3\u5217\u8868\u6570\u636e\u8865\u507f\uff0c\u4e5f\u53ef\u4ee5\u6ee1\u8db3\u7f16\u8f91\u9875\u6570\u636e\u56de\u663e\u3002"]})}),"\n",(0,i.jsx)(t.p,{children:"\u81f3\u6b64\uff0c\u901a\u8fc7\u9759\u9ed8\u63d0\u4ea4\u6a21\u5f0f\u521b\u5efa\u7684\u6570\u636e\u9879\u4e5f\u652f\u6301\u7f16\u8f91\u4e86\uff01\u8fd8\u6709\u4ec0\u4e48\u95ee\u9898\u5462\uff0c\u55ef...\u8fd8\u6709\u6700\u540e\u4e00\u4e2a\u3002"}),"\n",(0,i.jsx)(t.h2,{id:"\u5f53\u6b63\u5728\u7f16\u8f91\u7684\u6570\u636e\u9879\u63d0\u4ea4\u6210\u529f\u65f6",children:"\u5f53\u6b63\u5728\u7f16\u8f91\u7684\u6570\u636e\u9879\u63d0\u4ea4\u6210\u529f\u65f6"}),"\n",(0,i.jsx)(t.p,{children:"\u5f53\u7528\u6237\u6b63\u5728\u7f16\u8f91\u4e00\u6761\u8fd8\u672a\u63d0\u4ea4\u6210\u529f\u7684\u6570\u636e\u9879\u65f6\uff0c\u5b83\u7a81\u7136\u63d0\u4ea4\u6210\u529f\u4e86\uff01\u8fd9\u65f6\u6211\u4eec\u9700\u8981\u5c06\u7f16\u8f91\u9875\u4e2d\u4f7f\u7528\u5230\u7684\u865a\u62df\u6570\u636e\u66ff\u6362\u4e3a\u5b9e\u9645\u6570\u636e\uff0c\u4f8b\u5982\u5c06\u865a\u62df id \u66ff\u6362\u4e3a\u5b9e\u9645\u7684 id\uff0c\u5728\u63a5\u4e0b\u6765\u7684\u7f16\u8f91\u4e2d\u4f7f\u7528\u5b9e\u9645\u7684 id \u8fdb\u884c\u63d0\u4ea4\uff0c\u8fd9\u4e5f\u5f88\u7b80\u5355\uff0c\u6211\u4eec\u53ea\u9700\u8981\u76d1\u542c\u9759\u9ed8\u63d0\u4ea4\u6210\u529f\u4e8b\u4ef6\u5373\u53ef\u5b8c\u6210\uff0c\u5b83\u5c06\u63a5\u6536\u5230\u865a\u62df\u6570\u636e\u548c\u5b9e\u9645\u6570\u636e\u7ec4\u6210\u7684\u6570\u636e\u96c6\u5408\u3002"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"import { onSilentSubmitSuccess, stringifyVData } from '@alova/scene-*';\n\n// ...\n// id\u5728\u521d\u59cb\u5316\u65f6\u662f\u865a\u62df\u6570\u636e\nlet id = /* todo virtual id */;\n\n// highlight-start\n// \u7ed1\u5b9a\u76d1\u542c\u9759\u9ed8\u63d0\u4ea4\u6210\u529f\u4e8b\u4ef6\u6765\u66f4\u65b0id\uff0c\u5e76\u8fd4\u56de\u89e3\u7ed1\u51fd\u6570\uff0c\u522b\u5fd8\u4e86\u5728\u7ec4\u4ef6\u9500\u6bc1\u65f6\u8c03\u7528\u89e3\u7ed1\u51fd\u6570\nconst unbindEvent = onSilentSubmitSuccess(event => {\n  const vDataId = stringifyVData(id);\n  if (event.vDataResponse[vDataId]) {\n    id = event.vDataResponse[vDataId];\n\n    // \u4ee5\u4e0b\u662f\u5c06url\u4e2d\u7684\u865a\u62dfid\u66f4\u6539\u4e3a\u5b9e\u9645\u7684id\n    history.replaceState(null, '', '?id=' + currentId);\n  }\n});\n// highlight-end\n"})}),"\n",(0,i.jsxs)(t.p,{children:["\u5728\u8fd9\u8fb9\uff0c",(0,i.jsx)(t.code,{children:"event.vDataResponse"})," \u503c\u662f\u7531\u865a\u62df\u6570\u636e id \u548c\u5b9e\u9645\u6570\u636e\u7ec4\u6210\u7684\u96c6\u5408\uff0c\u5b83\u7684\u683c\u5f0f\u5982\u4e0b:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"{\n  '[vd:aaaaaa]': { id: 1 },\n  '[vd:bbbbbb]': 1\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u81f3\u6b64\uff0c\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u4e00\u4e2a\u7b80\u5355\u5217\u8868\u7684\u65e0\u611f\u4ea4\u4e92\u7684\u6240\u6709\u5185\u5bb9\uff0c\u4f46\u5728\u5176\u4ed6\u5e94\u7528\u573a\u666f\u4e0b\u5982\u7f16\u8f91\u7c7b\u5e94\u7528\u3001\u590d\u6742\u5217\u8868\u7ba1\u7406\u7b49\uff0c\u5c06\u53ef\u80fd\u9047\u5230\u66f4\u591a\u4e0d\u4e00\u6837\u7684\u9700\u6c42\uff0c\u6b64\u65f6 alova \u8fd8\u6709\u4ec0\u4e48\u7279\u6027\u662f\u6211\u4eec\u80fd\u4f7f\u7528\u7684\u5462\uff1f\u8bf7\u518d\u770b\u4e0b\u4e00\u7ae0\uff01"})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var i=n(67294);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);