"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[579],{26029:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=r(85893),l=r(11151),s=r(74866),i=r(85162);const a={title:"\u8bf7\u6c42\u91cd\u8bd5\u7b56\u7565"},d=void 0,c={id:"tutorial/strategy/useRetriableRequest",title:"\u8bf7\u6c42\u91cd\u8bd5\u7b56\u7565",description:"use hook",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.x/tutorial/05-strategy/12-useRetriableRequest.md",sourceDirName:"tutorial/05-strategy",slug:"/tutorial/strategy/useRetriableRequest",permalink:"/zh-CN/tutorial/strategy/useRetriableRequest",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/05-strategy/12-useRetriableRequest.md",tags:[],version:"2.x",sidebarPosition:12,frontMatter:{title:"\u8bf7\u6c42\u91cd\u8bd5\u7b56\u7565"},sidebar:"tutorial",previous:{title:"\u4e32\u884c\u8bf7\u6c42\u7684useWatcher",permalink:"/zh-CN/tutorial/strategy/useSerialWatcher"},next:{title:"Server-sent events\u53d1\u9001\u8bf7\u6c42",permalink:"/zh-CN/tutorial/strategy/useSSE"}},h={},o=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u8bbe\u7f6e\u9759\u6001\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570",id:"\u8bbe\u7f6e\u9759\u6001\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570",level:3},{value:"\u52a8\u6001\u8bbe\u7f6e\u6700\u5927\u91cd\u8bd5\u6b21\u6570",id:"\u52a8\u6001\u8bbe\u7f6e\u6700\u5927\u91cd\u8bd5\u6b21\u6570",level:3},{value:"\u8bbe\u7f6e\u5ef6\u8fdf\u65f6\u95f4",id:"\u8bbe\u7f6e\u5ef6\u8fdf\u65f6\u95f4",level:3},{value:"\u8bbe\u7f6e\u4e0d\u56fa\u5b9a\u7684\u91cd\u8bd5\u5ef6\u8fdf\u65f6\u95f4",id:"\u8bbe\u7f6e\u4e0d\u56fa\u5b9a\u7684\u91cd\u8bd5\u5ef6\u8fdf\u65f6\u95f4",level:3},{value:"\u624b\u52a8\u505c\u6b62\u91cd\u8bd5",id:"\u624b\u52a8\u505c\u6b62\u91cd\u8bd5",level:3},{value:"API",id:"api",level:2},{value:"Hook \u914d\u7f6e",id:"hook-\u914d\u7f6e",level:3},{value:"BackoffPolicy",id:"backoffpolicy",level:4},{value:"\u54cd\u5e94\u5f0f\u6570\u636e",id:"\u54cd\u5e94\u5f0f\u6570\u636e",level:3},{value:"\u64cd\u4f5c\u51fd\u6570",id:"\u64cd\u4f5c\u51fd\u6570",level:3},{value:"\u4e8b\u4ef6",id:"\u4e8b\u4ef6",level:3},{value:"RetriableRetryEvent",id:"retriableretryevent",level:4},{value:"RetriableFailEvent",id:"retriablefailevent",level:4}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"\u7b56\u7565\u7c7b\u578b",type:"info",children:(0,t.jsx)(n.p,{children:"use hook"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u6269\u5c55 hooks \u524d\uff0c\u786e\u4fdd\u4f60\u5df2\u719f\u6089\u4e86 alova \u7684\u57fa\u672c\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u8bf7\u6c42\u5931\u8d25\u53ef\u81ea\u52a8\u91cd\u8bd5\u7684 use hook\uff0c\u4f60\u53ef\u4ee5\u5c06\u5b83\u7528\u4e8e\u91cd\u8981\u7684\u8bf7\u6c42\u4e0a\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/tutorial/example/retriable-hook",children:"\u8bf7\u6c42\u91cd\u8bd5 Demo"})}),"\n",(0,t.jsx)(n.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49\u91cd\u8bd5\u6b21\u6570\u6216\u6309\u6761\u4ef6\u5224\u65ad\u662f\u5426\u9700\u8981\u91cd\u8bd5\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u91cd\u8bd5\u5ef6\u8fdf\u673a\u5236\uff1b"}),"\n",(0,t.jsx)(n.li,{children:"\u624b\u52a8\u505c\u6b62\u91cd\u8bd5\uff1b"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsxs)(s.Z,{groupId:"framework",children:[(0,t.jsx)(i.Z,{value:"1",label:"vue composition",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-vue --save\n# yarn\nyarn add @alova/scene-vue\n\n"})})}),(0,t.jsx)(i.Z,{value:"2",label:"react",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-react --save\n# yarn\nyarn add @alova/scene-react\n\n"})})}),(0,t.jsx)(i.Z,{value:"3",label:"svelte",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-svelte --save\n# yarn\nyarn add @alova/scene-svelte\n\n"})})})]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,t.jsx)(n.h3,{id:"\u57fa\u672c\u7528\u6cd5",children:"\u57fa\u672c\u7528\u6cd5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const {\n  // \u52a0\u8f7d\u72b6\u6001\uff0c\u5728\u91cd\u8bd5\u671f\u95f4\u4e00\u76f4\u4e3atrue\uff0c\u76f4\u5230\u91cd\u8bd5\u6210\u529f\u6216\u5931\u8d25\n  loading,\n\n  // \u54cd\u5e94\u6570\u636e\n  data,\n\n  // \u8bf7\u6c42\u9519\u8bef\u4fe1\u606f\uff0c\u6bcf\u6b21\u8bf7\u6c42\u6216\u91cd\u8bd5\u5931\u8d25\u90fd\u5c06\u4f1a\u6709error\u5b9e\u4f8b\n  // \u4e0a\u4e00\u6b21\u7684error\u5b9e\u4f8b\u5c06\u88ab\u8986\u76d6\n  error,\n\n  // \u6bcf\u6b21\u8bf7\u6c42\u6216\u91cd\u8bd5\u5931\u8d25\u90fd\u5c06\u89e6\u53d1onError\u4e8b\u4ef6\n  onError,\n\n  // \u8bf7\u6c42\u91cd\u8bd5\u4e8b\u4ef6\uff0c\u5728\u6bcf\u6b21\u91cd\u8bd5\u8bf7\u6c42\u53d1\u51fa\u540e\u7acb\u5373\u89e6\u53d1\n  onRetry,\n\n  // \u8bf7\u6c42\u91cd\u8bd5\u5931\u8d25\u4e8b\u4ef6\n  // \u8fbe\u5230\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u4ecd\u672a\u8bf7\u6c42\u6210\u529f\uff0c\u6216\u624b\u52a8\u505c\u6b62\u91cd\u8bd5\u90fd\u5c06\u89e6\u53d1\n  onFail,\n\n  // \u8bf7\u6c42\u6216\u91cd\u8bd5\u6210\u529f\u4e8b\u4ef6\n  onSuccess,\n\n  // \u6bcf\u6b21\u8bf7\u6c42\u6216\u91cd\u8bd5\uff0c\u65e0\u8bba\u6210\u529f\u6216\u5931\u8d25\u90fd\u5c06\u89e6\u53d1\u5b8c\u6210\u4e8b\u4ef6\n  onComplete\n} = useRetriableRequest(request);\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"useRetriableRequest"}),"\u7684\u6700\u5927\u8bf7\u6c42\u91cd\u8bd5\u6b21\u6570\u9ed8\u8ba4\u4e3a 3\uff0c\u4e14\u6bcf\u6b21\u5c06\u5ef6\u8fdf 1 \u79d2\u91cd\u8bd5\u3002\u540c\u65f6\u4e5f\u4f1a\u9ed8\u8ba4\u53d1\u51fa\u8bf7\u6c42\uff0c\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e",(0,t.jsx)(n.code,{children:"immediate"}),"\u4e3a false \u6539\u53d8\u884c\u4e3a\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u8bbe\u7f6e\u9759\u6001\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570",children:"\u8bbe\u7f6e\u9759\u6001\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570"}),"\n",(0,t.jsx)(n.p,{children:"\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u8868\u793a\u9996\u6b21\u8bf7\u6c42\u5931\u8d25\u540e\uff0c\u6700\u591a\u91cd\u8bd5\u8bf7\u6c42\u7684\u6b21\u6570\uff0c\u671f\u95f4\u5982\u679c\u8bf7\u6c42\u6210\u529f\u7684\u8bdd\u5c06\u4f1a\u505c\u6b62\u7ee7\u7eed\u91cd\u8bd5\u3002\u9ed8\u8ba4\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u4e3a 3 \u6b21\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u8bf7\u6c42\u91cd\u8bd5\u8fbe\u5230\u6700\u5927\u6b21\u6570\u4ecd\u7136\u672a\u6210\u529f\u65f6\uff0c\u5c06\u4f1a\u89e6\u53d1",(0,t.jsx)(n.code,{children:"onFail"}),"\u4e8b\u4ef6\u5e76\u505c\u6b62\u8bf7\u6c42\u91cd\u8bd5\uff0c\u5982\u679c\u4f60\u5728\u5931\u8d25\u540e\u5e0c\u671b\u7ee7\u7eed\u91cd\u8bd5\uff0c\u53ef\u4ee5\u8c03\u7528",(0,t.jsx)(n.code,{children:"send"}),"\u51fd\u6570\uff0c\u6b64\u65f6\u5b83\u5c06\u8fdb\u884c\u65b0\u4e00\u8f6e\u7684\u8bf7\u6c42\u548c\u91cd\u8bd5\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const { send } = useRetriableRequest(request, {\n  // ...\n  // highlight-start\n  // \u8bbe\u7f6e\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u4e3a5\n  retry: 5\n  // highlight-end\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u52a8\u6001\u8bbe\u7f6e\u6700\u5927\u91cd\u8bd5\u6b21\u6570",children:"\u52a8\u6001\u8bbe\u7f6e\u6700\u5927\u91cd\u8bd5\u6b21\u6570"}),"\n",(0,t.jsxs)(n.p,{children:["\u53ef\u80fd\u6709\u65f6\u5019\u4f60\u5e0c\u671b\u901a\u8fc7\u67d0\u4e2a\u6761\u4ef6\u6765\u5224\u65ad\u662f\u5426\u9700\u8981\u7ee7\u7eed\u91cd\u8bd5\uff0c\u6b64\u65f6\u4f60\u53ef\u4ee5\u5c06",(0,t.jsx)(n.code,{children:"retry"}),"\u8bbe\u7f6e\u4e3a\u8fd4\u56de boolean \u503c\u7684\u51fd\u6570\uff0c\u6765\u52a8\u6001\u5224\u65ad\u662f\u5426\u7ee7\u7eed\u91cd\u8bd5\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"useRetriableRequest(request, {\n  // ...\n  // highlight-start\n  // \u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u4e0a\u4e00\u6b21\u7684\u9519\u8bef\u5b9e\u4f8b\uff0c\u4ece\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5f00\u59cb\u4e3asend\u4f20\u5165\u7684\u53c2\u6570\n  retry(error, ...args) {\n    // \u8bf7\u6c42\u8d85\u65f6\u5219\u7ee7\u7eed\u91cd\u8bd5\n    return /network timeout/i.test(error.message);\n  }\n  // highlight-end\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8bbe\u7f6e\u5ef6\u8fdf\u65f6\u95f4",children:"\u8bbe\u7f6e\u5ef6\u8fdf\u65f6\u95f4"}),"\n",(0,t.jsx)(n.p,{children:"\u9ed8\u8ba4\u91cd\u8bd5\u5ef6\u8fdf\u65f6\u95f4\u4e3a 1 \u79d2\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"useRetriableRequest(request, {\n  // ...\n  backoff: {\n    // highlight-start\n    // \u8bbe\u7f6e\u5ef6\u8fdf\u65f6\u95f4\u4e3a2\u79d2\n    delay: 2000\n    // highlight-end\n  }\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8bbe\u7f6e\u4e0d\u56fa\u5b9a\u7684\u91cd\u8bd5\u5ef6\u8fdf\u65f6\u95f4",children:"\u8bbe\u7f6e\u4e0d\u56fa\u5b9a\u7684\u91cd\u8bd5\u5ef6\u8fdf\u65f6\u95f4"}),"\n",(0,t.jsx)(n.p,{children:"\u6709\u65f6\u5019\u4f60\u5e0c\u671b\u6bcf\u6b21\u8bf7\u6c42\u5ef6\u8fdf\u65f6\u95f4\u90fd\u4e0d\u662f\u56fa\u5b9a\u7684\uff0c\u4f60\u53ef\u4ee5\u6309\u4ee5\u4e0b\u65b9\u5f0f\u8bbe\u7f6e\u5ef6\u8fdf\u589e\u957f\u500d\u6570\uff0c\u5ef6\u8fdf\u65f6\u95f4\u5c06\u6309\u91cd\u8bd5\u6b21\u6570\u6307\u6570\u589e\u957f\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"useRetriableRequest(request, {\n  // ...\n  backoff: {\n    delay: 2000,\n    // highlight-start\n    // multiplier\u8bbe\u7f6e\u4e3a2\u65f6\uff0c\u7b2c\u4e00\u6b21\u91cd\u8bd5\u5ef6\u8fdf\u4e3a2\u79d2\uff0c\u7b2c\u4e8c\u6b21\u4e3a4\u79d2\uff0c\u7b2c\u4e09\u6b21\u4e3a8\u79d2\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002\n    multiplier: 2\n    // highlight-end\n  }\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8fd8\u4e0d\u591f\uff1f\u4f60\u751a\u81f3\u8fd8\u53ef\u4ee5\u4e3a\u6bcf\u6b21\u5ef6\u8fdf\u65f6\u95f4\u589e\u52a0\u968f\u673a\u6296\u52a8\u503c\uff0c\u8ba9\u5b83\u770b\u7740\u4e0d\u90a3\u4e48\u89c4\u5f8b\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"useRetriableRequest(request, {\n  // ...\n  backoff: {\n    delay: 2000,\n    multiplier: 2,\n    // highlight-start\n    /**\n     * \u5ef6\u8fdf\u8bf7\u6c42\u7684\u6296\u52a8\u8d77\u59cb\u767e\u5206\u6bd4\u503c\uff0c\u8303\u56f4\u4e3a0-1\n     * \u5f53\u53ea\u8bbe\u7f6e\u4e86startQuiver\u65f6\uff0cendQuiver\u9ed8\u8ba4\u4e3a1\n     * \u4f8b\u5982\u8bbe\u7f6e\u4e3a0.5\uff0c\u5b83\u5c06\u5728\u5f53\u524d\u5ef6\u8fdf\u65f6\u95f4\u4e0a\u589e\u52a050%\u5230100%\u7684\u968f\u673a\u65f6\u95f4\n     * \u5982\u679cendQuiver\u6709\u503c\uff0c\u5219\u5ef6\u8fdf\u65f6\u95f4\u5c06\u589e\u52a0startQuiver\u548cendQuiver\u8303\u56f4\u7684\u968f\u673a\u503c\n     */\n    startQuiver: 0.5,\n\n    /**\n     * \u5ef6\u8fdf\u8bf7\u6c42\u7684\u6296\u52a8\u7ed3\u675f\u767e\u5206\u6bd4\u503c\uff0c\u8303\u56f4\u4e3a0-1\n     * \u5f53\u53ea\u8bbe\u7f6e\u4e86endQuiver\u65f6\uff0cstartQuiver\u9ed8\u8ba4\u4e3a0\n     * \u4f8b\u5982\u8bbe\u7f6e\u4e3a0.8\uff0c\u5b83\u5c06\u5728\u5f53\u524d\u5ef6\u8fdf\u65f6\u95f4\u4e0a\u589e\u52a00%\u523080%\u7684\u968f\u673a\u65f6\u95f4\n     * \u5982\u679cstartQuiver\u6709\u503c\uff0c\u5219\u5ef6\u8fdf\u65f6\u95f4\u5c06\u589e\u52a0startQuiver\u548cendQuiver\u8303\u56f4\u7684\u968f\u673a\u503c\n     */\n    endQuiver: 0.8;\n    // highlight-end\n  }\n});\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u624b\u52a8\u505c\u6b62\u91cd\u8bd5",children:"\u624b\u52a8\u505c\u6b62\u91cd\u8bd5"}),"\n",(0,t.jsxs)(n.p,{children:["\u56e0\u67d0\u4e9b\u60c5\u51b5\u9700\u8981\u624b\u52a8\u505c\u6b62\u91cd\u8bd5\uff0c\u65e0\u8bba\u5f53\u524d\u6b63\u5728\u8bf7\u6c42\u4e2d\uff0c\u8fd8\u662f\u5728\u7b49\u5f85\u4e0b\u4e00\u6b21\u91cd\u8bd5\uff0c\u4f60\u90fd\u53ef\u4ee5\u4f7f\u7528",(0,t.jsx)(n.code,{children:"stop"}),"\u6765\u505c\u6b62\u5b83\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const { stop } = useRetriableRequest(request, {\n  // ...\n});\n\nconst handleStop = () => {\n  stop();\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(n.h3,{id:"hook-\u914d\u7f6e",children:"Hook \u914d\u7f6e"}),"\n",(0,t.jsxs)(n.p,{children:["\u7ee7\u627f",(0,t.jsx)(n.a,{href:"/api/core-hooks#userequest",children:(0,t.jsx)(n.strong,{children:"useRequest"})}),"\u6240\u6709\u914d\u7f6e\u3002"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,t.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"}),(0,t.jsx)(n.th,{children:"\u7248\u672c"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"retry"}),(0,t.jsx)(n.td,{children:"\u6700\u5927\u91cd\u8bd5\u6b21\u6570\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u8fd4\u56de boolean \u503c\u7684\u51fd\u6570\uff0c\u6765\u52a8\u6001\u5224\u65ad\u662f\u5426\u7ee7\u7eed\u91cd\u8bd5\u3002"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"(error: Error, ...args: any[]) => boolean | 3"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"backoff"}),(0,t.jsx)(n.td,{children:"\u907f\u8ba9\u7b56\u7565\uff0c\u8bbe\u7f6e\u91cd\u8bd5\u5ef6\u8fdf\u65f6\u95f4\u7b49"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"#backoffpolicy",children:"BackoffPolicy"})}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"backoffpolicy",children:"BackoffPolicy"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,t.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"}),(0,t.jsx)(n.th,{children:"\u7248\u672c"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"delay"}),(0,t.jsx)(n.td,{children:"\u518d\u6b21\u8bf7\u6c42\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"1000"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"multiplier"}),(0,t.jsx)(n.td,{children:"\u6307\u5b9a\u5ef6\u8fdf\u500d\u6570\uff0c\u4f8b\u5982\u628a multiplier \u8bbe\u7f6e\u4e3a 2\u3001delay \u4e3a 1 \u79d2\u65f6\uff0c\u7b2c\u4e00\u6b21\u91cd\u8bd5\u4e3a 1 \u79d2\uff0c\u7b2c\u4e8c\u6b21\u4e3a 2 \u79d2\uff0c\u7b2c\u4e09\u6b21\u4e3a 4 \u79d2\uff0c\u4ee5\u6b64\u7c7b\u63a8"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"startQuiver"}),(0,t.jsx)(n.td,{children:"\u5ef6\u8fdf\u8bf7\u6c42\u7684\u6296\u52a8\u8d77\u59cb\u767e\u5206\u6bd4\u503c\uff0c\u8303\u56f4\u4e3a 0-1\uff0c\u5f53\u53ea\u8bbe\u7f6e\u4e86 startQuiver \u65f6\uff0cendQuiver \u9ed8\u8ba4\u4e3a 1\uff0c\u4f8b\u5982\u8bbe\u7f6e\u4e3a 0.5\uff0c\u5b83\u5c06\u5728\u5f53\u524d\u5ef6\u8fdf\u65f6\u95f4\u4e0a\u589e\u52a0 50%\u5230 100%\u7684\u968f\u673a\u65f6\u95f4\uff0c\u5982\u679c endQuiver \u6709\u503c\uff0c\u5219\u5ef6\u8fdf\u65f6\u95f4\u5c06\u589e\u52a0 startQuiver \u548c endQuiver \u8303\u56f4\u7684\u968f\u673a\u503c"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"endQuiver"}),(0,t.jsx)(n.td,{children:"\u5ef6\u8fdf\u8bf7\u6c42\u7684\u6296\u52a8\u7ed3\u675f\u767e\u5206\u6bd4\u503c\uff0c\u8303\u56f4\u4e3a 0-1\uff0c\u5f53\u53ea\u8bbe\u7f6e\u4e86 endQuiver \u65f6\uff0cstartQuiver \u9ed8\u8ba4\u4e3a 0\uff0c\u4f8b\u5982\u8bbe\u7f6e\u4e3a 0.5\uff0c\u5b83\u5c06\u5728\u5f53\u524d\u5ef6\u8fdf\u65f6\u95f4\u4e0a\u589e\u52a0 0%\u5230 50%\u7684\u968f\u673a\u65f6\u95f4\uff0c\u5982\u679c startQuiver \u6709\u503c\uff0c\u5219\u5ef6\u8fdf\u65f6\u95f4\u5c06\u589e\u52a0 startQuiver \u548c endQuiver \u8303\u56f4\u7684\u968f\u673a\u503c"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"\u54cd\u5e94\u5f0f\u6570\u636e",children:"\u54cd\u5e94\u5f0f\u6570\u636e"}),"\n",(0,t.jsxs)(n.p,{children:["\u7ee7\u627f",(0,t.jsx)(n.a,{href:"/api/core-hooks#userequest",children:(0,t.jsx)(n.strong,{children:"useRequest"})}),"\u6240\u6709\u54cd\u5e94\u5f0f\u6570\u636e\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u64cd\u4f5c\u51fd\u6570",children:"\u64cd\u4f5c\u51fd\u6570"}),"\n",(0,t.jsxs)(n.p,{children:["\u7ee7\u627f",(0,t.jsx)(n.a,{href:"/api/core-hooks#userequest",children:(0,t.jsx)(n.strong,{children:"useRequest"})}),"\u6240\u6709\u64cd\u4f5c\u51fd\u6570\u3002"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,t.jsx)(n.th,{children:"\u51fd\u6570\u53c2\u6570"}),(0,t.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,t.jsx)(n.th,{children:"\u7248\u672c"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"stop"}),(0,t.jsx)(n.td,{children:"\u505c\u6b62\u91cd\u8bd5\uff0c\u53ea\u5728\u91cd\u8bd5\u671f\u95f4\u8c03\u7528\u6709\u6548\uff0c\u505c\u6b62\u540e\u5c06\u7acb\u5373\u89e6\u53d1 onFail \u4e8b\u4ef6"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"}),(0,t.jsx)(n.td,{children:"-"})]})})]}),"\n",(0,t.jsx)(n.h3,{id:"\u4e8b\u4ef6",children:"\u4e8b\u4ef6"}),"\n",(0,t.jsxs)(n.p,{children:["\u7ee7\u627f",(0,t.jsx)(n.a,{href:"/api/core-hooks#userequest",children:(0,t.jsx)(n.strong,{children:"useRequest"})}),"\u6240\u6709\u4e8b\u4ef6\u3002"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,t.jsx)(n.th,{children:"\u56de\u8c03\u53c2\u6570"}),(0,t.jsx)(n.th,{children:"\u7248\u672c"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onRetry"}),(0,t.jsx)(n.td,{children:"\u91cd\u8bd5\u4e8b\u4ef6\u7ed1\u5b9a\uff0c\u5b83\u4eec\u5c06\u5728\u91cd\u8bd5\u53d1\u8d77\u540e\u89e6\u53d1"}),(0,t.jsxs)(n.td,{children:["\u91cd\u8bd5\u4e8b\u4ef6\u5b9e\u4f8b ",(0,t.jsx)(n.a,{href:"#retriableretryevent",children:"RetriableRetryEvent"})]}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onFail"}),(0,t.jsxs)(n.td,{children:["\u8bf7\u6c42\u5931\u8d25\u65f6\u89e6\u53d1\uff0c\u5c06\u5728\u4e0d\u518d\u91cd\u8bd5\u65f6\u89e6\u53d1\uff0c\u4f8b\u5982\u5230\u8fbe\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u65f6\uff0c\u91cd\u8bd5\u56de\u8c03\u8fd4\u56de false \u65f6\uff0c\u624b\u52a8\u8c03\u7528 stop \u505c\u6b62\u91cd\u8bd5\u65f6",(0,t.jsx)("br",{}),"\u6ce8\u610f\uff1a",(0,t.jsx)("br",{}),"1. onError \u4e8b\u4ef6\u662f\u5728\u6bcf\u6b21\u8bf7\u6c42\u62a5\u9519\u65f6\u90fd\u5c06\u88ab\u89e6\u53d1",(0,t.jsx)("br",{}),"2. \u5982\u679c\u6ca1\u6709\u91cd\u8bd5\u6b21\u6570\u65f6\uff0conError\u3001onComplete \u548c onFail \u4f1a\u88ab\u540c\u65f6\u89e6\u53d1"]}),(0,t.jsxs)(n.td,{children:["\u91cd\u8bd5\u4e8b\u4ef6\u5b9e\u4f8b ",(0,t.jsx)(n.a,{href:"#retriablefailevent",children:"RetriableFailEvent"})]}),(0,t.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"retriableretryevent",children:"RetriableRetryEvent"}),"\n",(0,t.jsx)(n.p,{children:"\u7ee7\u627f\u4e8e alova \u7684 Event \u4e8b\u4ef6\u5b9e\u4f8b\u3002"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,t.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"}),(0,t.jsx)(n.th,{children:"\u7248\u672c"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"retryTimes"}),(0,t.jsx)(n.td,{children:"\u5f53\u524d\u7684\u91cd\u8bd5\u6b21\u6570"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{children:"-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"retryDelay"}),(0,t.jsx)(n.td,{children:"\u672c\u6b21\u91cd\u8bd5\u7684\u5ef6\u8fdf\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a ms"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{children:"-"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"retriablefailevent",children:"RetriableFailEvent"}),"\n",(0,t.jsx)(n.p,{children:"\u7ee7\u627f\u4e8e alova \u7684 Event \u4e8b\u4ef6\u5b9e\u4f8b\u3002"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u540d\u79f0"}),(0,t.jsx)(n.th,{children:"\u63cf\u8ff0"}),(0,t.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,t.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"}),(0,t.jsx)(n.th,{children:"\u7248\u672c"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"retryTimes"}),(0,t.jsx)(n.td,{children:"\u5f53\u524d\u7684\u91cd\u8bd5\u6b21\u6570"}),(0,t.jsx)(n.td,{children:"number"}),(0,t.jsx)(n.td,{children:"required"}),(0,t.jsx)(n.td,{children:"-"})]})})]})]})}function x(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>i});r(67294);var t=r(90512);const l={tabItem:"tabItem_Ymn6"};var s=r(85893);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(l.tabItem,i),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>k});var t=r(67294),l=r(90512),s=r(12466),i=r(16550),a=r(20469),d=r(91980),c=r(67392),h=r(20812);function o(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return o(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:l}}=e;return{value:n,label:r,attributes:t,default:l}}))}(r);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const l=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(l.location.search);n.set(s,e),l.replace({...l.location,search:n.toString()})}),[s,l])]}function v(e){const{defaultValue:n,queryString:r=!1,groupId:l}=e,s=u(e),[i,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,o]=j({queryString:r,groupId:l}),[v,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,s]=(0,h.Nk)(r);return[l,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:l}),p=(()=>{const e=c??v;return x({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{p&&d(p)}),[p]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),o(e),b(e)}),[o,b,s]),tabValues:s}}var b=r(72389);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(85893);function f(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:a}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),h=e=>{const n=e.currentTarget,r=d.indexOf(n),l=a[r].value;l!==t&&(c(n),i(l))},o=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},n),children:a.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:o,onClick:h,...s,className:(0,l.Z)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function g(e){let{lazy:n,children:r,selectedValue:l}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function y(e){const n=v(e);return(0,m.jsxs)("div",{className:(0,l.Z)("tabs-container",p.tabList),children:[(0,m.jsx)(f,{...n,...e}),(0,m.jsx)(g,{...n,...e})]})}function k(e){const n=(0,b.Z)();return(0,m.jsx)(y,{...e,children:o(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var t=r(67294);const l={},s=t.createContext(l);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);