"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7601],{37029:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var t=r(85893),n=r(11151),l=r(74866),o=r(85162);const s={title:"\u4e0e\u5176\u4ed6\u5e93\u6bd4\u8f83"},i=void 0,u={id:"tutorial/others/comparison",title:"\u4e0e\u5176\u4ed6\u5e93\u6bd4\u8f83",description:"\u4e0e axios \u5bf9\u6bd4",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.x/tutorial/11-others/02-comparison.md",sourceDirName:"tutorial/11-others",slug:"/tutorial/others/comparison",permalink:"/zh-CN/tutorial/others/comparison",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/11-others/02-comparison.md",tags:[],version:"2.x",sidebarPosition:2,frontMatter:{title:"\u4e0e\u5176\u4ed6\u5e93\u6bd4\u8f83"},sidebar:"tutorial",previous:{title:"\u8bf7\u6c42\u573a\u666f\u6a21\u578b\uff08RSM\uff09",permalink:"/zh-CN/tutorial/others/RSM"},next:{title:"\u63d0\u95ee&\u56de\u7b54",permalink:"/zh-CN/tutorial/others/Q&A"}},c={},d=[{value:"\u4e0e axios \u5bf9\u6bd4",id:"\u4e0e-axios-\u5bf9\u6bd4",level:2},{value:"alova \u4e3a axios \u63d0\u4f9b\u81ea\u52a8\u5316\u8bf7\u6c42\u72b6\u6001\u7ba1\u7406",id:"alova-\u4e3a-axios-\u63d0\u4f9b\u81ea\u52a8\u5316\u8bf7\u6c42\u72b6\u6001\u7ba1\u7406",level:3},{value:"alova \u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u9ad8\u6027\u80fd\u8bf7\u6c42\u7b56\u7565",id:"alova-\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u9ad8\u6027\u80fd\u8bf7\u6c42\u7b56\u7565",level:3},{value:"alova \u4e3a axios \u63d0\u4f9b\u54cd\u5e94\u6570\u636e\u7f13\u5b58",id:"alova-\u4e3a-axios-\u63d0\u4f9b\u54cd\u5e94\u6570\u636e\u7f13\u5b58",level:3},{value:"alova \u4e3a axios \u63d0\u4f9b\u8bf7\u6c42\u5171\u4eab\u529f\u80fd",id:"alova-\u4e3a-axios-\u63d0\u4f9b\u8bf7\u6c42\u5171\u4eab\u529f\u80fd",level:3},{value:"alova \u4e3a axios \u63d0\u4f9b\u6570\u636e\u9884\u62c9\u53d6",id:"alova-\u4e3a-axios-\u63d0\u4f9b\u6570\u636e\u9884\u62c9\u53d6",level:3},{value:"alova \u53ef\u7ba1\u7406\u8bf7\u6c42\u72b6\u6001",id:"alova-\u53ef\u7ba1\u7406\u8bf7\u6c42\u72b6\u6001",level:3},{value:"\u4e0e react-query\u3001swr \u5bf9\u6bd4",id:"\u4e0e-react-queryswr-\u5bf9\u6bd4",level:2},{value:"alova \u7684\u76ee\u6807\u4e0d\u540c",id:"alova-\u7684\u76ee\u6807\u4e0d\u540c",level:3},{value:"Method \u4ee3\u7406\u8bbe\u8ba1",id:"method-\u4ee3\u7406\u8bbe\u8ba1",level:3},{value:"\u9ad8\u7075\u6d3b\u6027",id:"\u9ad8\u7075\u6d3b\u6027",level:3},{value:"\u8f7b\u91cf\u5316",id:"\u8f7b\u91cf\u5316",level:3}];function h(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"\u4e0e-axios-\u5bf9\u6bd4",children:"\u4e0e axios \u5bf9\u6bd4"}),"\n",(0,t.jsx)(a.p,{children:"axios \u63d0\u4f9b\u4e86\u57fa\u4e8e promise \u7684\u975e\u5e38\u7b80\u5355\u6613\u7528\u7684 HTTP \u8bf7\u6c42\u529f\u80fd\uff0c\u53ea\u9700\u8981\u7b80\u5355\u7684\u4e00\u884c\u4ee3\u7801\u5373\u53ef\u53d1\u9001\u548c\u63a5\u6536\u8bf7\u6c42\uff0c\u5e76\u4e14\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u548c nodejs \u73af\u5883\u4e0b\u8fd0\u884c\uff0c\u662f\u4e00\u4e2a\u975e\u5e38\u4f18\u79c0\u7684\u8bf7\u6c42 js \u5e93\u3002"}),"\n",(0,t.jsx)(a.p,{children:"\u4f46\u662f axios \u805a\u7126\u4e8e\u8bf7\u6c42\u53d1\u9001\u548c\u63a5\u6536\u54cd\u5e94\uff0c\u8fd9\u610f\u5473\u7740\u5982\u679c\u4f60\u9700\u8981\u81ea\u884c\u7f16\u5199\u66f4\u591a\u4ee3\u7801\u6765\u4e3b\u52a8\u4f18\u5316\u8bf7\u6c42\u529f\u80fd\uff0c\u800c alova \u50cf\u662f axios \u7684\u6b66\u5668\u88c5\u5907\uff0c\u5c06 axios \u4e0e alova \u7ec4\u5408\u4f7f\u7528\u53ef\u4ee5\u83b7\u5f97\u66f4\u5f3a\u5927\u7684\u8bf7\u6c42\u80fd\u529b\uff0c\u4ee5\u4e0b\u662f alova \u4e3a axios \u9644\u52a0\u7684\u8bf7\u6c42\u7ba1\u7406\u80fd\u529b\u3002"}),"\n",(0,t.jsx)(a.h3,{id:"alova-\u4e3a-axios-\u63d0\u4f9b\u81ea\u52a8\u5316\u8bf7\u6c42\u72b6\u6001\u7ba1\u7406",children:"alova \u4e3a axios \u63d0\u4f9b\u81ea\u52a8\u5316\u8bf7\u6c42\u72b6\u6001\u7ba1\u7406"}),"\n",(0,t.jsx)(a.p,{children:"\u4ec5\u4f7f\u7528 axios \u65f6\uff0c\u901a\u5e38\u9700\u8981\u4f60\u81ea\u884c\u7ef4\u62a4\u8bf7\u6c42\u76f8\u5173\u72b6\u6001\uff0c\u4f7f\u7528 alova \u7684 use hook \u540e\u53ef\u4ee5\u83b7\u5f97\u81ea\u52a8\u5316\u7684\u8bf7\u6c42\u72b6\u6001\u7ba1\u7406\u80fd\u529b\u3002"}),"\n",(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(o.Z,{value:"1",label:"\u4ec5axios",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"// vue3\u4ee3\u7801\u793a\u4f8b\nconst loading = ref(false);\nconst data = ref({});\nconst error = ref(null);\nconst request = async () => {\n  try {\n    loading.value = true;\n    data.value = await axios.get('/xxx');\n  } catch (e) {\n    error.value = e;\n  }\n  loading.value = false;\n};\nmounted(request);\n"})})}),(0,t.jsx)(o.Z,{value:"2",label:"axios+alova",children:(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"// \u5c06axios\u4f5c\u4e3aalova\u7684\u8bf7\u6c42\u9002\u914d\u5668\nconst { loading, data, error } = useRequest(alova.Get('/xxx'));\n"})})})]}),"\n",(0,t.jsx)(a.h3,{id:"alova-\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u9ad8\u6027\u80fd\u8bf7\u6c42\u7b56\u7565",children:"alova \u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u9ad8\u6027\u80fd\u8bf7\u6c42\u7b56\u7565"}),"\n",(0,t.jsxs)(a.p,{children:["alova \u4e3a\u4f60\u63d0\u4f9b\u4e86",(0,t.jsx)(a.a,{href:"/tutorial/strategy",children:"\u591a\u4e2a\u9ad8\u6027\u80fd\u7684\u8bf7\u6c42\u7b56\u7565\u6a21\u5757"}),"\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u4e0d\u540c\u8bf7\u6c42\u573a\u666f\u4f7f\u7528\u4e0d\u540c\u7684\u6a21\u5757\uff0c\u8fd9\u662f axios \u4e0d\u5177\u5907\u7684\u3002"]}),"\n",(0,t.jsx)(a.h3,{id:"alova-\u4e3a-axios-\u63d0\u4f9b\u54cd\u5e94\u6570\u636e\u7f13\u5b58",children:"alova \u4e3a axios \u63d0\u4f9b\u54cd\u5e94\u6570\u636e\u7f13\u5b58"}),"\n",(0,t.jsx)(a.p,{children:"alova \u5206\u522b\u63d0\u4f9b\u4e86 3 \u79cd\u7f13\u5b58\u6a21\u5f0f\u6765\u6ee1\u8db3\u4e0d\u540c\u7684\u7f13\u5b58\u573a\u666f\uff0c\u5206\u522b\u4e3a\u5185\u5b58\u6a21\u5f0f\u3001\u7f13\u5b58\u5360\u4f4d\u6a21\u5f0f\u3001\u6062\u590d\u6a21\u5f0f\u3002\u5b83\u4eec\u662f\u7ec4\u4ef6\u65e0\u5173\u7684\uff0c\u53ea\u8981\u8bf7\u6c42\u5730\u5740\u548c\u53c2\u6570\u76f8\u540c\u90fd\u53ef\u4ee5\u547d\u4e2d\u7f13\u5b58\uff0c\u9664\u975e\u4f60\u5173\u95ed\u4e86\u5b83\u3002\u54cd\u5e94\u6570\u636e\u7f13\u5b58\u53ef\u4ee5\u6781\u5927\u5730\u63d0\u9ad8\u8bf7\u6c42\u6d41\u7545\u6027\uff0c\u964d\u4f4e\u670d\u52a1\u7aef\u538b\u529b\u3002"}),"\n",(0,t.jsx)(a.h3,{id:"alova-\u4e3a-axios-\u63d0\u4f9b\u8bf7\u6c42\u5171\u4eab\u529f\u80fd",children:"alova \u4e3a axios \u63d0\u4f9b\u8bf7\u6c42\u5171\u4eab\u529f\u80fd"}),"\n",(0,t.jsx)(a.p,{children:"\u8bf7\u6c42\u5171\u4eab\u5728\u540c\u65f6\u53d1\u9001\u591a\u4e2a\u76f8\u540c\u8bf7\u6c42\u65f6\uff0c\u5c06\u4f1a\u590d\u7528\u540c\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5b83\u4e5f\u53ef\u4ee5\u63d0\u5347\u5e94\u7528\u6d41\u7545\u6027\u548c\u964d\u4f4e\u670d\u52a1\u7aef\u538b\u529b\u3002"}),"\n",(0,t.jsx)(a.h3,{id:"alova-\u4e3a-axios-\u63d0\u4f9b\u6570\u636e\u9884\u62c9\u53d6",children:"alova \u4e3a axios \u63d0\u4f9b\u6570\u636e\u9884\u62c9\u53d6"}),"\n",(0,t.jsx)(a.p,{children:"\u63d0\u524d\u8bf7\u6c42\u5c06\u8981\u4f7f\u7528\u7684\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u6781\u5927\u63d0\u5347\u5e94\u7528\u6d41\u7545\u6027\u3002"}),"\n",(0,t.jsx)(a.h3,{id:"alova-\u53ef\u7ba1\u7406\u8bf7\u6c42\u72b6\u6001",children:"alova \u53ef\u7ba1\u7406\u8bf7\u6c42\u72b6\u6001"}),"\n",(0,t.jsx)(a.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528 alova \u8de8\u4efb\u610f\u7684\u7ec4\u4ef6\u5c42\u7ea7\u6765\u8bbf\u95ee\u5176\u4ed6\u7ec4\u4ef6\u5185\u7684\u72b6\u6001\u5316\u6570\u636e\uff0c\u8fd9\u53ef\u4ee5\u8ba9\u4f60\u51cf\u5c11\u8de8\u7ec4\u4ef6\u901a\u4fe1\u7684\u4e00\u4e9b\u9ebb\u70e6\u3002"}),"\n",(0,t.jsx)(a.h2,{id:"\u4e0e-react-queryswr-\u5bf9\u6bd4",children:"\u4e0e react-query\u3001swr \u5bf9\u6bd4"}),"\n",(0,t.jsx)(a.p,{children:"react-query \u662f\u4e00\u4e2a\u5f3a\u5927\u7684\u5f02\u6b65\u72b6\u6001\u7ba1\u7406\uff0cswr \u662f\u4e00\u4e2a\u7528\u4e8e\u6570\u636e\u8bf7\u6c42\u7684 React Hooks \u5e93\uff0c\u5b83\u4eec\u7684\u5171\u540c\u7279\u6027\u4e5f\u662f\u4f7f\u7528 use hook \u6765\u53d1\u9001\u548c\u7ba1\u7406\u8bf7\u6c42\uff0c\u548c\u6570\u636e\u7f13\u5b58\u529f\u80fd\uff0c\u5bf9\u4e8e\u5b83\u4eec\uff0calova \u6709\u4ee5\u4e0b\u4e0d\u540c\u4e4b\u5904\u3002"}),"\n",(0,t.jsx)(a.h3,{id:"alova-\u7684\u76ee\u6807\u4e0d\u540c",children:"alova \u7684\u76ee\u6807\u4e0d\u540c"}),"\n",(0,t.jsx)(a.p,{children:"\u5b9e\u9645\u4e0a\uff0calova \u7684 use hook \u4e5f\u662f\u53c2\u8003\u4e86 react-query \u548c swr \u7684\u8bbe\u8ba1\uff0c\u4f46\u662f alova \u9009\u62e9\u4e86\u8bf7\u6c42\u7b56\u7565\u5e93\u7684\u65b9\u5411\uff0c\u4f60\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u8bf7\u6c42\u573a\u666f\u4e0b\u4f7f\u7528\u4e0d\u540c\u7684\u8bf7\u6c42\u7b56\u7565\u6a21\u5757\uff0c\u8ba9\u4f60\u5728\u7f16\u5199\u66f4\u5c11\u91cf\u4ee3\u7801\u540c\u65f6\uff0c\u4e5f\u80fd\u5b9e\u73b0\u66f4\u9ad8\u6548\u5730 Client-Server \u6570\u636e\u4ea4\u4e92\u3002"}),"\n",(0,t.jsx)(a.h3,{id:"method-\u4ee3\u7406\u8bbe\u8ba1",children:"Method \u4ee3\u7406\u8bbe\u8ba1"}),"\n",(0,t.jsxs)(a.p,{children:["react-query \u548c swr \u90fd\u662f\u5728 use hook \u4e2d\u76f4\u63a5\u4f7f\u7528",(0,t.jsx)(a.code,{children:"axios"}),"\u6216",(0,t.jsx)(a.code,{children:"fetch api"}),"\u53d1\u9001\u8bf7\u6c42\uff0c\u800c alova \u4f7f\u7528\u4e86 ",(0,t.jsx)(a.code,{children:"Method"})," \u4ee3\u7406\u7684\u8bbe\u8ba1\u6a21\u5f0f\uff0c\u8fd9\u6837\u8bbe\u8ba1\u5177\u6709\u4ee5\u4e0b 3 \u4e2a\u597d\u5904\uff1a"]}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"\u7edf\u4e00\u7684\u4f7f\u7528\u4f53\u9a8c\uff0c\u4e0d\u4f1a\u56e0\u5e73\u53f0\u6216 UI \u6846\u67b6\u4e0d\u540c\u800c\u5b58\u5728\u4e0d\u540c\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"axios"}),"\u548c",(0,t.jsx)(a.code,{children:"fetch api"}),"\u7b49\u8bf7\u6c42\u5e93\u4ee5\u8bf7\u6c42\u9002\u914d\u5668\u7684\u65b9\u5f0f\uff0c\u4e0e\u6bcf\u4e2a api \u89e3\u8026\uff0c\u8fd9\u8ba9 alova \u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u5f00\u53d1\u4f53\u9a8c\u548c\u5b8c\u7f8e\u7684\u4ee3\u7801\u8fc1\u79fb\u3002"]}),"\n",(0,t.jsx)(a.li,{children:"\u6bcf\u4e2a method \u5b9e\u4f8b\u90fd\u4ee3\u8868\u4e0d\u540c\u7684 api\uff0c\u4f60\u53ef\u4ee5\u5c06\u540c\u4e00\u4e2a api \u7684\u8bf7\u6c42\u53c2\u6570\u4e0e\u8bf7\u6c42\u884c\u4e3a\u53c2\u6570\u805a\u5408\u5230\u540c\u4e00\u4e2a method \u5b9e\u4f8b\u4e2d\uff0c\u800c\u4e0d\u4f1a\u5206\u6563\u5f00\uff0c\u66f4\u9002\u5408\u7ba1\u7406\u5927\u91cf\u7684 api\u3002"}),"\n",(0,t.jsxs)(a.li,{children:["alova \u901a\u8fc7\u5bf9 method \u5b9e\u4f8b\u4e0a\u7684\u8bf7\u6c42\u53c2\u6570\u5e8f\u5217\u5316\uff0c\u5b9e\u73b0\u4e86\u81ea\u52a8\u5316\u7ba1\u7406\u54cd\u5e94\u6570\u636e\u7f13\u5b58\uff0c\u4f60\u4e0d\u9700\u8981\u6307\u5b9a\u7f13\u5b58 key\uff0c\u800c react-query \u548c swr \u90fd\u9700\u8981\u81ea\u5b9a\u4e49\u8bbe\u7f6e",(0,t.jsx)(a.code,{children:"queryKey"}),"\u6765\u7ba1\u7406\u7f13\u5b58\u3002"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"\u9ad8\u7075\u6d3b\u6027",children:"\u9ad8\u7075\u6d3b\u6027"}),"\n",(0,t.jsx)(a.p,{children:"alova \u901a\u8fc7\u5404\u79cd\u9002\u914d\u5668\u3001\u4e2d\u95f4\u4ef6\u5b9e\u73b0\u4e86\u5f88\u9ad8\u7684\u7075\u6d3b\u6027\uff0c\u4e0d\u4ec5\u53ef\u4ee5\u8fd0\u884c\u5728\u4efb\u4f55 js \u73af\u5883\uff0c\u8fd8\u53ef\u4ee5\u652f\u6301\u7528\u6237\u81ea\u5b9a\u4e49\u4e0d\u540c\u573a\u666f\u4e0b\u7684\u8bf7\u6c42\u6a21\u5757\u3002"}),"\n",(0,t.jsx)(a.h3,{id:"\u8f7b\u91cf\u5316",children:"\u8f7b\u91cf\u5316"}),"\n",(0,t.jsx)(a.p,{children:"alova \u5f88\u8f7b\u91cf\uff0c\u4f53\u79ef\u53ea\u6709 react-query \u548c axios \u7684 30%+\u3002\u4e0e swr \u4f53\u79ef\u76f8\u4f3c\uff0c\u4f46\u63d0\u4f9b\u66f4\u4e30\u5bcc\u7684\u529f\u80fd\u3002"})]})}function v(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,a,r)=>{r.d(a,{Z:()=>o});r(67294);var t=r(90512);const n={tabItem:"tabItem_Ymn6"};var l=r(85893);function o(e){let{children:a,hidden:r,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(n.tabItem,o),hidden:r,children:a})}},74866:(e,a,r)=>{r.d(a,{Z:()=>w});var t=r(67294),n=r(90512),l=r(12466),o=r(16550),s=r(20469),i=r(91980),u=r(67392),c=r(20812);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:r}=e;return(0,t.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:r,attributes:t,default:n}}=e;return{value:a,label:r,attributes:t,default:n}}))}(r);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function v(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function x(e){let{queryString:a=!1,groupId:r}=e;const n=(0,o.k6)(),l=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,i._X)(l),(0,t.useCallback)((e=>{if(!l)return;const a=new URLSearchParams(n.location.search);a.set(l,e),n.replace({...n.location,search:a.toString()})}),[l,n])]}function p(e){const{defaultValue:a,queryString:r=!1,groupId:n}=e,l=h(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!v({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:l}))),[u,d]=x({queryString:r,groupId:n}),[p,f]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,l]=(0,c.Nk)(r);return[n,(0,t.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),m=(()=>{const e=u??p;return v({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!v({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=r(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function j(e){let{className:a,block:r,selectedValue:t,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),c=e=>{const a=e.currentTarget,r=i.indexOf(a),n=s[r].value;n!==t&&(u(a),o(n))},d=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;a=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;a=i[r]??i[i.length-1];break}}a?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},a),children:s.map((e=>{let{value:a,label:r,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>i.push(e),onKeyDown:d,onClick:c,...l,className:(0,n.Z)("tabs__item",m.tabItem,l?.className,{"tabs__item--active":t===a}),children:r??a},a)}))})}function g(e){let{lazy:a,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===n));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function y(e){const a=p(e);return(0,b.jsxs)("div",{className:(0,n.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(j,{...a,...e}),(0,b.jsx)(g,{...a,...e})]})}function w(e){const a=(0,f.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(a))}},11151:(e,a,r)=>{r.d(a,{Z:()=>s,a:()=>o});var t=r(67294);const n={},l=t.createContext(n);function o(e){const a=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(l.Provider,{value:a},e.children)}}}]);