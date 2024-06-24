"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[2249],{32335:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>x,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=t(85893),a=t(11151),s=t(74866),c=t(85162);const o={title:"\u8bf7\u6c42\u4e2d\u95f4\u4ef6"},l=void 0,d={id:"tutorial/advanced/middleware",title:"\u8bf7\u6c42\u4e2d\u95f4\u4ef6",description:"\u8bf7\u6c42\u4e2d\u95f4\u4ef6\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u5b83\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\uff0c\u51e0\u4e4e\u80fd\u63a7\u5236\u4e00\u4e2a\u8bf7\u6c42\u7684\u6240\u6709\u884c\u4e3a\u7684\u80fd\u529b\u3002\u5982\u679c\u4f60\u53ea\u662f\u4f7f\u7528 alova\uff0c\u90a3\u4f60\u5e94\u8be5\u5f88\u53ef\u80fd\u4e0d\u9700\u8981\u4f7f\u7528\u8bf7\u6c42\u4e2d\u95f4\u4ef6\uff0c\u56e0\u4e3a\u5b83\u4e3b\u8981\u7528\u4e8e\u5b8c\u6210\u81ea\u5b9a\u4e49\u7684\u8bf7\u6c42\u7b56\u7565\uff0c\u65e0\u8bba\u7b80\u5355\u8fd8\u662f\u590d\u6742\u7684\u8bf7\u6c42\u7b56\u7565\uff0c\u53ef\u80fd\u4f60\u90fd\u4f1a\u7528\u4e0a\u5b83\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u770b\u4e0b\u5b83\u5230\u5e95\u6709\u4ec0\u4e48\u795e\u901a\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.x/tutorial/06-advanced/04-middleware.md",sourceDirName:"tutorial/06-advanced",slug:"/tutorial/advanced/middleware",permalink:"/zh-CN/tutorial/advanced/middleware",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/06-advanced/04-middleware.md",tags:[],version:"2.x",sidebarPosition:4,frontMatter:{title:"\u8bf7\u6c42\u4e2d\u95f4\u4ef6"},sidebar:"tutorial",previous:{title:"method\u5339\u914d\u5668",permalink:"/zh-CN/tutorial/advanced/method-matcher"},next:{title:"\u81ea\u5b9a\u4e49method key",permalink:"/zh-CN/tutorial/advanced/custom-method-key"}},i={},u=[{value:"\u4e2d\u95f4\u4ef6\u51fd\u6570",id:"\u4e2d\u95f4\u4ef6\u51fd\u6570",level:2},{value:"\u63a7\u5236\u54cd\u5e94\u6570\u636e",id:"\u63a7\u5236\u54cd\u5e94\u6570\u636e",level:2},{value:"\u66f4\u6539\u8bf7\u6c42",id:"\u66f4\u6539\u8bf7\u6c42",level:2},{value:"\u63a7\u5236\u9519\u8bef",id:"\u63a7\u5236\u9519\u8bef",level:2},{value:"\u6355\u83b7\u9519\u8bef",id:"\u6355\u83b7\u9519\u8bef",level:3},{value:"\u629b\u51fa\u9519\u8bef",id:"\u629b\u51fa\u9519\u8bef",level:3},{value:"\u63a7\u5236\u54cd\u5e94\u5ef6\u8fdf",id:"\u63a7\u5236\u54cd\u5e94\u5ef6\u8fdf",level:2},{value:"\u4e0d\u6b62\u4e8e\u6b64",id:"\u4e0d\u6b62\u4e8e\u6b64",level:2},{value:"\u5305\u542b\u7684\u8bf7\u6c42\u4fe1\u606f",id:"\u5305\u542b\u7684\u8bf7\u6c42\u4fe1\u606f",level:2},{value:"\u4fee\u6539\u54cd\u5e94\u5f0f\u6570\u636e",id:"\u4fee\u6539\u54cd\u5e94\u5f0f\u6570\u636e",level:2},{value:"\u88c5\u9970\u4e8b\u4ef6",id:"\u88c5\u9970\u4e8b\u4ef6",level:2},{value:"\u4e2d\u65ad\u6216\u91cd\u590d\u53d1\u9001\u8bf7\u6c42",id:"\u4e2d\u65ad\u6216\u91cd\u590d\u53d1\u9001\u8bf7\u6c42",level:2},{value:"\u53d7\u63a7\u7684\u52a0\u8f7d\u72b6\u6001",id:"\u53d7\u63a7\u7684\u52a0\u8f7d\u72b6\u6001",level:2}];function h(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u8bf7\u6c42\u4e2d\u95f4\u4ef6\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u5b83\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\uff0c\u51e0\u4e4e\u80fd\u63a7\u5236\u4e00\u4e2a\u8bf7\u6c42\u7684\u6240\u6709\u884c\u4e3a\u7684\u80fd\u529b\u3002\u5982\u679c\u4f60\u53ea\u662f\u4f7f\u7528 alova\uff0c\u90a3\u4f60\u5e94\u8be5\u5f88\u53ef\u80fd\u4e0d\u9700\u8981\u4f7f\u7528\u8bf7\u6c42\u4e2d\u95f4\u4ef6\uff0c\u56e0\u4e3a\u5b83\u4e3b\u8981\u7528\u4e8e\u5b8c\u6210\u81ea\u5b9a\u4e49\u7684\u8bf7\u6c42\u7b56\u7565\uff0c\u65e0\u8bba\u7b80\u5355\u8fd8\u662f\u590d\u6742\u7684\u8bf7\u6c42\u7b56\u7565\uff0c\u53ef\u80fd\u4f60\u90fd\u4f1a\u7528\u4e0a\u5b83\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u770b\u4e0b\u5b83\u5230\u5e95\u6709\u4ec0\u4e48\u795e\u901a\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4e2d\u95f4\u4ef6\u51fd\u6570",children:"\u4e2d\u95f4\u4ef6\u51fd\u6570"}),"\n",(0,r.jsxs)(n.p,{children:["\u8bf7\u6c42\u4e2d\u95f4\u4ef6\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u5728",(0,r.jsx)(n.code,{children:"useRequest"}),"\u3001",(0,r.jsx)(n.code,{children:"useWatcher"}),"\u3001",(0,r.jsx)(n.code,{children:"useFetcher"}),"\u4e2d\u5b9a\u4e49\u8bf7\u6c42\u4e2d\u95f4\u4ef6\u3002\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u8bf7\u6c42\u4e2d\u95f4\u4ef6\uff0c\u5b83\u5728\u8bf7\u6c42\u524d\u548c\u8bf7\u6c42\u540e\u5206\u522b\u6253\u5370\u4e86\u4e00\u4e9b\u4fe1\u606f\uff0c\u6ca1\u6709\u6539\u53d8\u4efb\u4f55\u8bf7\u6c42\u884c\u4e3a\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"useRequest(todoList, {\n  async middleware(_, next) {\n    console.log('before request');\n    await next();\n    console.log('after requeste');\n  }\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u6709\u51e0\u70b9\u4f60\u9700\u8981\u77e5\u9053\u7684\uff0c\u6709\u5173",(0,r.jsx)(n.code,{children:"next"}),"\u51fd\u6570\u8c03\u7528\u7684\u95ee\u9898\uff0c\u8fd9\u4e2a\u51fd\u6570\u4e5f\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u8c03\u7528\u5b83\u53ef\u4ee5\u7ee7\u7eed\u53d1\u9001\u8bf7\u6c42\uff0c\u6b64\u65f6\u5c06\u4f1a\u628a ",(0,r.jsx)(n.em,{children:"loading"})," \u72b6\u6001\u8bbe\u7f6e\u4e3a true\uff0c\u7136\u540e\u53d1\u9001\u8bf7\u6c42\u3002next \u7684\u8fd4\u56de\u503c\u662f\u5e26\u6709\u54cd\u5e94\u6570\u636e\u7684 Promise \u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u5728\u4e2d\u95f4\u4ef6\u51fd\u6570\u4e2d\u64cd\u7eb5\u8fd4\u56de\u503c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u63a7\u5236\u54cd\u5e94\u6570\u636e",children:"\u63a7\u5236\u54cd\u5e94\u6570\u636e"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e2d\u95f4\u4ef6\u51fd\u6570\u7684\u8fd4\u56de\u503c\u5c06\u4f5c\u4e3a\u672c\u6b21\u8bf7\u6c42\u7684\u54cd\u5e94\u6570\u636e\u53c2\u4e0e\u540e\u7eed\u7684\u5904\u7406\uff0c\u5982\u679c\u4e2d\u95f4\u4ef6\u6ca1\u6709\u8fd4\u56de\u4efb\u4f55\u6570\u636e\u4f46\u8c03\u7528\u4e86 ",(0,r.jsx)(n.code,{children:"next"}),"\uff0c\u5219\u4f1a\u5c06\u672c\u6b21\u8bf7\u6c42\u7684\u54cd\u5e94\u6570\u636e\u53c2\u4e0e\u540e\u7eed\u5904\u7406\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u5c06\u4f1a\u4ee5\u4fee\u6539\u540e\u7684result\u4f5c\u4e3a\u54cd\u5e94\u6570\u636e\nuseRequest(todoList, {\n  async middleware(_, next) {\n    const result = await next();\n    result.code = 500;\n    return result;\n  }\n});\n\n// \u5c06\u4f1a\u4ee5\u672c\u6b21\u8bf7\u6c42\u7684\u54cd\u5e94\u6570\u636e\u53c2\u4e0e\u540e\u7eed\u5904\u7406\nuseRequest(todoList, {\n  async middleware(_, next) {\n    await next();\n  }\n});\n\n// \u5c06\u4f1a\u4ee5\u5b57\u7b26\u4e32abc\u4f5c\u4e3a\u54cd\u5e94\u6570\u636e\nuseRequest(todoList, {\n  async middleware(_, next) {\n    await next();\n    return 'abc';\n  }\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u8fd9\u91cc\u8fd8\u6709\u4e00\u4e2a\u7279\u4f8b\uff0c\u5f53\u65e2\u6ca1\u6709\u8c03\u7528 ",(0,r.jsx)(n.code,{children:"next"}),"\uff0c\u53c8\u6ca1\u6709\u8fd4\u56de\u503c\u65f6\uff0c\u5c06\u4e0d\u518d\u6267\u884c\u540e\u7eed\u7684\u5904\u7406\uff0c\u8fd9\u8868\u793a",(0,r.jsx)(n.em,{children:"onSuccess"}),"\u3001",(0,r.jsx)(n.em,{children:"onError"}),"\u3001",(0,r.jsx)(n.em,{children:"onComplete"}),"\u54cd\u5e94\u4e8b\u4ef6\u4e0d\u4f1a\u88ab\u89e6\u53d1\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"useRequest(todoList, {\n  async middleware() {}\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u66f4\u6539\u8bf7\u6c42",children:"\u66f4\u6539\u8bf7\u6c42"}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u65f6\u5019\u4f60\u60f3\u8981\u66f4\u6539\u8bf7\u6c42\uff0c\u6b64\u65f6\u53ef\u4ee5\u5728 ",(0,r.jsx)(n.code,{children:"next"})," \u4e2d\u6307\u5b9a\u53e6\u4e00\u4e2a method \u5b9e\u4f8b\uff0c\u5728\u53d1\u9001\u8bf7\u6c42\u65f6\u5c31\u4f1a\u5c06\u8fd9\u4e2a method \u4e2d\u7684\u4fe1\u606f\u8fdb\u884c\u8bf7\u6c42\uff0c\u540c\u65f6\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"next"})," \u8bbe\u7f6e\u662f\u5426\u5f3a\u5236\u8bf7\u6c42\u6765\u7a7f\u900f\u7f13\u5b58\uff0c\u8fd9\u4e5f\u5f88\u7b80\u5355\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"useRequest(todoList, {\n  async middleware(_, next) {\n    await next({\n      // \u66f4\u6539\u8bf7\u6c42\u7684method\u5b9e\u4f8b\n      method: newMethodInstance,\n\n      // \u672c\u6b21\u662f\u5426\u5f3a\u5236\u8bf7\u6c42\n      force: true\n    });\n  }\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u63a7\u5236\u9519\u8bef",children:"\u63a7\u5236\u9519\u8bef"}),"\n",(0,r.jsx)(n.h3,{id:"\u6355\u83b7\u9519\u8bef",children:"\u6355\u83b7\u9519\u8bef"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e2d\u95f4\u4ef6\u4e2d\uff0c\u53ef\u4ee5\u6355\u83b7 ",(0,r.jsx)(n.code,{children:"next"})," \u4e2d\u4ea7\u751f\u7684\u8bf7\u6c42\u9519\u8bef\uff0c\u6355\u83b7\u540e\uff0c\u5168\u5c40\u7684",(0,r.jsx)(n.code,{children:"onError"}),"\u94a9\u5b50\u4e0d\u518d\u89e6\u53d1\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"useRequest(todoList, {\n  async middleware(_, next) {\n    try {\n      await next();\n    } catch (e) {\n      console.error('\u6355\u83b7\u5230\u9519\u8bef', e);\n    }\n  }\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u629b\u51fa\u9519\u8bef",children:"\u629b\u51fa\u9519\u8bef"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u5728\u4e2d\u95f4\u4ef6\u4e2d\u629b\u51fa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u9519\u8bef\uff0c\u5373\u4f7f\u8bf7\u6c42\u6b63\u5e38\u4e5f\u5c06\u4f1a\u8fdb\u5165\u8bf7\u6c42\u9519\u8bef\u7684\u6d41\u7a0b\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u672a\u53d1\u51fa\u8bf7\u6c42\uff0c\u540c\u65f6\u8fd8\u4f1a\u89e6\u53d1\u5168\u5c40\u7684\u4ee5\u53ca\u8bf7\u6c42\u7ea7\u7684onError\uff0c\u5982\u679c\u662f\u901a\u8fc7`method.send`\u53d1\u9001\u7684\u8bf7\u6c42\u5c06\u8fd4\u56dereject\u7684promise\u5b9e\u4f8b\nuseRequest(todoList, {\n  async middleware(_, next) {\n    throw new Error('error on before request');\n    await next();\n  }\n});\n\n// \u8bf7\u6c42\u6210\u529f\u540e\uff0c\u5c06\u89e6\u53d1\u5168\u5c40\u7684\u4ee5\u53ca\u8bf7\u6c42\u7ea7\u7684onError\uff0c\u5982\u679c\u662f\u901a\u8fc7`method.send`\u53d1\u9001\u7684\u8bf7\u6c42\u5c06\u8fd4\u56dereject\u7684promise\u5b9e\u4f8b\nuseRequest(todoList, {\n  async middleware(_, next) {\n    await next();\n    throw new Error('error on after request');\n  }\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u63a7\u5236\u54cd\u5e94\u5ef6\u8fdf",children:"\u63a7\u5236\u54cd\u5e94\u5ef6\u8fdf"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4e2d\u95f4\u4ef6\u4e2d\u6211\u4eec\u53ef\u4ee5\u5ef6\u8fdf\u54cd\u5e94\uff0c\u4e5f\u53ef\u4ee5\u63d0\u524d\u54cd\u5e94\uff0c\u5728\u63d0\u524d\u7684\u60c5\u51b5\u4e0b\uff0c\u867d\u7136\u83b7\u53d6\u4e0d\u5230\u54cd\u5e94\u6570\u636e\uff0c\u4f46\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e9b\u5176\u4ed6\u7684\u6570\u636e\u4f5c\u4e3a\u54cd\u5e94\u6570\u636e\u53c2\u4e0e\u540e\u7eed\u7684\u5904\u7406\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// \u5ef6\u8fdf1\u79d2\u54cd\u5e94\nuseRequest(todoList, {\n  async middleware(_, next) {\n    await new Promise(resolve => {\n      setTimeout(resolve, 1000);\n    });\n    return next();\n  }\n});\n\n// \u7acb\u5373\u54cd\u5e94\uff0c\u5e76\u4f7f\u7528\u5b57\u7b26\u4e32abc\u4f5c\u4e3a\u54cd\u5e94\u6570\u636e\nuseRequest(todoList, {\n  async middleware(_, next) {\n    return 'abc';\n  }\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4e0d\u6b62\u4e8e\u6b64",children:"\u4e0d\u6b62\u4e8e\u6b64"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.strong,{children:["\u81f3\u6b64\uff0c\u6211\u4eec\u6240\u63d0\u53ca\u7684\u90fd\u662f\u4e2d\u95f4\u4ef6\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"next"})," \u7684\u4f7f\u7528\uff0c\u90a3\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u505a\u4ec0\u4e48\u7684\u5462\uff1f"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e2d\u95f4\u4ef6\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e2d\u5305\u542b\u4e86\u672c\u6b21\u8bf7\u6c42\u7684\u4e00\u4e9b\u4fe1\u606f\uff0c\u4ee5\u53ca\u5bf9",(0,r.jsx)(n.code,{children:"loading"}),"\u3001",(0,r.jsx)(n.code,{children:"data"}),"\u548c",(0,r.jsx)(n.code,{children:"onSuccess"}),"\u7b49 useHook \u4e2d\u8fd4\u56de\u7684\u72b6\u6001\u548c\u4e8b\u4ef6\u7684\u63a7\u5236\u51fd\u6570\u3002\u6211\u4eec\u63a5\u7740\u5f80\u4e0b\u770b\uff01"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5305\u542b\u7684\u8bf7\u6c42\u4fe1\u606f",children:"\u5305\u542b\u7684\u8bf7\u6c42\u4fe1\u606f"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(c.Z,{value:"front",label:"front hooks",children:[(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e3a useRequest \u548c useWatcher \u7684\u4e2d\u95f4\u4ef6\u6240\u5305\u542b\u7684\u8bf7\u6c42\u4fe1\u606f"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"async function alovaFrontMiddleware(context, next) {\n  // \u672c\u6b21\u8bf7\u6c42\u7684method\u5b9e\u4f8b\n  context.method;\n\n  // send\u51fd\u6570\u53d1\u9001\u7684\u53c2\u6570\u6570\u7ec4\uff0c\u9ed8\u8ba4\u4e3a[]\n  context.sendArgs;\n\n  // \u672c\u6b21\u8bf7\u6c42\u547d\u4e2d\u7684\u7f13\u5b58\u6570\u636e\n  context.cachedResponse;\n\n  // useHook\u7684\u914d\u7f6e\u96c6\u5408\n  context.config;\n\n  // useHook\u8fd4\u56de\u7684\u5404\u9879\u72b6\u6001\uff0c\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\n  // loading\u3001data\u3001error\u3001downloading\u3001uploading\uff0c\u4ee5\u53ca\u901a\u8fc7managedStates\u7ba1\u7406\u7684\u989d\u5916\u72b6\u6001\n  context.frontStates;\n  // ...\n}\n"})})]}),(0,r.jsxs)(c.Z,{value:"fetch",label:"fetcher hook",children:[(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e3a useFetcher \u7684\u4e2d\u95f4\u4ef6\u6240\u5305\u542b\u7684\u8bf7\u6c42\u4fe1\u606f"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"async function alovaFetcherMiddleware(context, next) {\n  // \u672c\u6b21\u8bf7\u6c42\u7684method\u5b9e\u4f8b\n  context.method;\n\n  // \u7531useFetcher\u7684fetch\u4f20\u5165\u7684\u53c2\u6570\u7ec4\uff0c\u9ed8\u8ba4\u4e3a[]\n  context.fetchArgs;\n\n  // \u672c\u6b21\u8bf7\u6c42\u547d\u4e2d\u7684\u7f13\u5b58\u6570\u636e\n  context.cachedResponse;\n\n  // useHook\u7684\u914d\u7f6e\u96c6\u5408\n  context.config;\n\n  // useHook\u8fd4\u56de\u7684\u5404\u9879\u72b6\u6001\uff0c\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\n  // fetching\u3001error\u3001downloading\u3001uploading\n  context.fetchStates;\n  // ...\n}\n"})})]})]}),"\n",(0,r.jsx)(n.p,{children:"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u518d\u6765\u770b\u770b\u6709\u54ea\u4e9b\u63a7\u5236\u80fd\u529b\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4fee\u6539\u54cd\u5e94\u5f0f\u6570\u636e",children:"\u4fee\u6539\u54cd\u5e94\u5f0f\u6570\u636e"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528",(0,r.jsx)(n.code,{children:"context.update"}),"\u4fee\u6539\u54cd\u5e94\u5f0f\u6570\u636e\u3002"]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{value:"front",label:"front hooks",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"async function alovaFrontMiddleware(context, next) {\n  context.update({\n    // \u63d0\u524d\u4fee\u6539loading\u72b6\u6001\u4e3atrue\n    loading: true,\n\n    // \u4fee\u6539data\u503c\uff0c\u5982\u8bbe\u7f6e\u81ea\u5b9a\u4e49\u7684\u521d\u59cb\u5316\u6570\u636e\n    data: {\n      /* ... */\n    }\n  });\n  // ...\n}\n"})})}),(0,r.jsx)(c.Z,{value:"fetch",label:"fetcher hook",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"async function alovaFetcherMiddleware(context, next) {\n  context.update({\n    // \u63d0\u524d\u4fee\u6539fetching\u72b6\u6001\u4e3atrue\n    fetching: true,\n\n    // \u4fee\u6539error\u7684\u503c\n    error: new Error('custom midleware error')\n  });\n  // ...\n}\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u88c5\u9970\u4e8b\u4ef6",children:"\u88c5\u9970\u4e8b\u4ef6"}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u8fd8\u53ef\u4ee5\u5728\u4e2d\u95f4\u4ef6\u4e2d\u88c5\u9970",(0,r.jsx)(n.em,{children:"onSuccess"}),"\u3001",(0,r.jsx)(n.em,{children:"onError"}),"\u3001",(0,r.jsx)(n.em,{children:"onComplete"}),"\u56de\u8c03\u51fd\u6570\uff0c\u8ba9\u5b83\u4eec\u53d8\u5f97\u66f4\u4e30\u5bcc\uff0c\u4f8b\u5982\u6539\u53d8\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\uff0c\u53c8\u6216\u8005\u63a5\u6536\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\uff0c\u5b9e\u73b0\u66f4\u591a\u7684\u529f\u80fd\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,r.jsx)(n.code,{children:"decorateSuccess"}),"\u3001",(0,r.jsx)(n.code,{children:"decorateError"}),"\u3001",(0,r.jsx)(n.code,{children:"decorateComplete"}),"\u51fd\u6570\u6765\u88c5\u9970\u56de\u8c03\u51fd\u6570\u3002\u4e0b\u9762\u5c06\u6210\u529f\u56de\u8c03\u4f5c\u4e3a\u793a\u4f8b\uff0c\u5b83\u88c5\u9970\u4e86 3 \u5904\u5730\u65b9\uff1a"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4e3a event \u5bf9\u8c61\u65b0\u589e\u4e86",(0,r.jsx)(n.code,{children:"custom"}),"\u5c5e\u6027\uff1b"]}),"\n",(0,r.jsxs)(n.li,{children:["\u4e3a\u6210\u529f\u56de\u8c03\u51fd\u6570\u65b0\u589e\u4e86\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u503c\u4e3a",(0,r.jsx)(n.code,{children:"extra data"}),"\uff1b"]}),"\n",(0,r.jsx)(n.li,{children:"\u63a5\u6536\u7b2c\u4e8c\u4e2a\u6210\u529f\u56de\u8c03\u51fd\u6570\u7684\u503c\uff0c\u5e76\u6253\u5370\u5b83\uff1b"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const { onSuccess } = useRequest(todoList, {\n  // ...\n  async middleware(context, next) {\n    // \u88c5\u9970\u6210\u529f\u56de\u8c03\u51fd\u6570\uff0c\u4ee5\u4e0b\u51fd\u6570\u53c2\u6570\u89e3\u91ca\uff1a\n    // handler: \u7ed1\u5b9a\u7684\u56de\u8c03\u51fd\u6570\n    // event: \u56de\u8c03\u51fd\u6570\u5bf9\u5e94\u7684\u4e8b\u4ef6\u5bf9\u8c61\n    // index: \u56de\u8c03\u51fd\u6570\u4e0b\u6807\uff0c\u8868\u793a\u5f53\u524d\u6b63\u5728\u6267\u884c\u7b2c\u51e0\u4e2a\u56de\u8c03\u51fd\u6570\n    // length: \u56de\u8c03\u51fd\u6570\u7ed1\u5b9a\u4e2a\u6570\n    context.decorateSuccess((handler, event, index, length) => {\n      event.custom = 1;\n      const received = handler(event, 'extra data');\n      if (index === 1) {\n        console.log(`\u63a5\u6536\u5230\u7b2c${index + 1}\u4e2a\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\uff1a`, received);\n        // [\u6253\u5370\u4fe1\u606f] \u63a5\u6536\u5230\u7b2c2\u4e2a\u56de\u8c03\u51fd\u6570\u7684\u8fd4\u56de\u503c\uff1aI'm second handler\n      }\n    });\n    // ...\n  }\n});\nonSuccess((event, extra) => {\n  console.log(event.custom); // 1\n  console.log(extra); // extra data\n});\nonSuccess((event, extra) => {\n  return \"I'm second handler\";\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"decorateError"}),"\u3001",(0,r.jsx)(n.code,{children:"decorateComplete"}),"\u7684\u7528\u6cd5\u4e0e",(0,r.jsx)(n.code,{children:"decorateSuccess"}),"\u76f8\u540c\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e2d\u65ad\u6216\u91cd\u590d\u53d1\u9001\u8bf7\u6c42",children:"\u4e2d\u65ad\u6216\u91cd\u590d\u53d1\u9001\u8bf7\u6c42"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e2d\u95f4\u4ef6\u4e2d\u8fd8\u53ef\u4ee5\u63a5\u6536\u5230 use hooks \u8fd4\u56de\u7684",(0,r.jsx)(n.code,{children:"abort"}),"\u548c",(0,r.jsx)(n.code,{children:"send"}),"\u51fd\u6570\uff08useFetcher \u4e2d\u4e3a",(0,r.jsx)(n.code,{children:"fetch"}),"\uff09\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\u610f\u56fe\u65f6\uff0c\u53d1\u9001\u591a\u4e2a\u8bf7\u6c42\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5178\u578b\u7684\u4f7f\u7528\u4f8b\u5b50\u662f\u8bf7\u6c42\u91cd\u8bd5\uff0c\u53d1\u9001\u4e00\u6b21\u8bf7\u6c42\u540e\u5982\u679c\u8bf7\u6c42\u5931\u8d25\u5c06\u81ea\u52a8\u6309\u4e00\u5b9a\u7b56\u7565\u518d\u6b21\u8bf7\u6c42\uff0c\u91cd\u8bd5\u6210\u529f\u540e\u518d\u89e6\u53d1",(0,r.jsx)(n.code,{children:"onSuccess"}),"\u3002\u4ee5\u4e0b\u4e3a\u7b80\u5355\u7684\u8bf7\u6c42\u91cd\u8bd5\u793a\u4f8b\u4ee3\u7801\u3002"]}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{value:"front",label:"front hooks",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"async function alovaFrontMiddleware(context, next) {\n  return next().catch(error => {\n    if (needRetry) {\n      setTimeout(() => {\n        context.send(...context.sendArgs);\n      }, retryDelay);\n    }\n    return Promise.reject(error);\n  });\n}\n"})})}),(0,r.jsx)(c.Z,{value:"fetch",label:"fetcher hook",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"async function alovaFetcherMiddleware(context, next) {\n  return next().catch(error => {\n    if (needRetry) {\n      setTimeout(() => {\n        context.fetch(context.method, ...context.fetchArgs);\n      }, retryDelay);\n    }\n    return Promise.reject(error);\n  });\n}\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u9700\u8981\u5728\u4e2d\u95f4\u4ef6\u5185\u4e2d\u65ad\u8bf7\u6c42\uff0c\u53ef\u4ee5\u8c03\u7528",(0,r.jsx)(n.code,{children:"context.abort()"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u53d7\u63a7\u7684\u52a0\u8f7d\u72b6\u6001",children:"\u53d7\u63a7\u7684\u52a0\u8f7d\u72b6\u6001"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u4e0a\u9762\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u77e5\u9053\u4e86\u53ef\u4ee5\u901a\u8fc7",(0,r.jsx)(n.code,{children:"context.update"}),"\u81ea\u5b9a\u4e49\u4fee\u6539\u54cd\u5e94\u5f0f\u6570\u636e\uff0c\u4e0d\u8fc7\u5f53\u4f60\u5728\u4fee\u6539\u52a0\u8f7d\u72b6\u6001\u503c\uff08",(0,r.jsx)(n.code,{children:"loading"}),"\u6216",(0,r.jsx)(n.code,{children:"fetching"}),"\uff09\u65f6\u5c06\u4f1a\u6709\u6240\u963b\u788d\uff0c\u56e0\u4e3a\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\uff0c\u52a0\u8f7d\u72b6\u6001\u503c\u4f1a\u5728\u8c03\u7528",(0,r.jsx)(n.code,{children:"next"}),"\u65f6\u81ea\u52a8\u8bbe\u7f6e\u4e3a true\uff0c\u5728\u54cd\u5e94\u6d41\u7a0b\u4e2d\u81ea\u52a8\u8bbe\u7f6e false\uff0c\u8fd9\u5c06\u8986\u76d6\u901a\u8fc7",(0,r.jsx)(n.code,{children:"context.update"}),"\u4fee\u6539\u7684\u52a0\u8f7d\u72b6\u6001\u503c\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u5f00\u542f\u53d7\u63a7\u7684\u52a0\u8f7d\u72b6\u6001\uff0c\u5f00\u542f\u540e\uff0c\u5728",(0,r.jsx)(n.code,{children:"next"}),"\u51fd\u6570\u548c\u54cd\u5e94\u6d41\u7a0b\u5c06\u4e0d\u518d\u4fee\u6539\u52a0\u8f7d\u72b6\u6001\u503c\uff0c\u800c\u7531\u6211\u4eec\u5b8c\u5168\u63a7\u5236\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u8fd8\u662f\u4ee5\u8bf7\u6c42\u91cd\u8bd5\u4e3a\u4f8b\uff0c\u6211\u4eec\u5e0c\u671b\u5728\u89e6\u53d1\u4e00\u6b21\u8bf7\u6c42\u610f\u56fe\u5f00\u59cb\uff0c\u7ecf\u8fc7\u8bf7\u6c42\u91cd\u8bd5\u76f4\u5230\u8bf7\u6c42\u7ed3\u675f\u4e3a\u6b62\uff0c\u52a0\u8f7d\u72b6\u6001\u4e00\u76f4\u4fdd\u6301\u4e3a true\u3002"}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsxs)(c.Z,{value:"front",label:"front hooks",children:[(0,r.jsxs)(n.p,{children:["\u5728 useRequest \u548c useWatcher \u7684\u4e2d\u95f4\u4ef6\u4e2d\uff0c\u4f7f\u7528",(0,r.jsx)(n.code,{children:"context.controlLoading"}),"\u5f00\u542f\u81ea\u5b9a\u4e49\u63a7\u5236\u52a0\u8f7d\u72b6\u6001\u3002"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"async function alovaFrontMiddleware(context, next) {\n  context.controlLoading();\n\n  // \u8bf7\u6c42\u5f00\u59cb\u65f6\u8bbe\u7f6e\u4e3atrue\n  context.update({ loading: true });\n  return next()\n    .then(value => {\n      // \u8bf7\u6c42\u6210\u529f\u540e\u8bbe\u7f6e\u4e3afalse\n      context.update({ loading: false });\n      return value;\n    })\n    .catch(error => {\n      if (needRetry) {\n        setTimeout(() => {\n          context.send(...context.sendArgs);\n        }, retryDelay);\n      } else {\n        // \u4e0d\u518d\u91cd\u8bd5\u65f6\u4e5f\u8bbe\u7f6e\u4e3afalse\n        context.update({ loading: false });\n      }\n      return Promise.reject(error);\n    });\n}\n"})})]}),(0,r.jsxs)(c.Z,{value:"fetch",label:"fetcher hook",children:[(0,r.jsxs)(n.p,{children:["\u5728 useFetching \u7684\u4e2d\u95f4\u4ef6\u4e2d\uff0c\u4f7f\u7528",(0,r.jsx)(n.code,{children:"context.controlFetching"}),"\u5f00\u542f\u81ea\u5b9a\u4e49\u63a7\u5236\u52a0\u8f7d\u72b6\u6001\u3002"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"async function alovaFetcherMiddleware(context, next) {\n  context.controlFetching();\n\n  // \u8bf7\u6c42\u5f00\u59cb\u65f6\u8bbe\u7f6e\u4e3atrue\n  context.update({ fetching: true });\n  return next()\n    .then(value => {\n      // \u8bf7\u6c42\u6210\u529f\u540e\u8bbe\u7f6e\u4e3afalse\n      context.update({ fetching: false });\n      return value;\n    })\n    .catch(error => {\n      if (needRetry) {\n        setTimeout(() => {\n          context.fetch(context.method, ...context.fetchArgs);\n        }, retryDelay);\n      } else {\n        // \u4e0d\u518d\u91cd\u8bd5\u65f6\u4e5f\u8bbe\u7f6e\u4e3afalse\n        context.update({ fetching: false });\n      }\n      return Promise.reject(error);\n    });\n}\n"})})]})]})]})}function x(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>c});t(67294);var r=t(90512);const a={tabItem:"tabItem_Ymn6"};var s=t(85893);function c(e){let{children:n,hidden:t,className:c}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,c),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),a=t(90512),s=t(12466),c=t(16550),o=t(20469),l=t(91980),d=t(67392),i=t(20812);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const a=(0,c.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[c,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[d,u]=j({queryString:t,groupId:a}),[m,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,i.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=d??m;return x({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),p(e)}),[u,p,s]),tabValues:s}}var p=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),i=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(d(n),c(a))},u=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:i,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(g,{...n,...e}),(0,f.jsx)(b,{...n,...e})]})}function y(e){const n=(0,p.Z)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>c});var r=t(67294);const a={},s=r.createContext(a);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);