"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[523],{91735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(85893),o=t(11151),s=t(74866),a=t(85162);const l={title:"Token\u8ba4\u8bc1\u62e6\u622a\u5668"},i=void 0,c={id:"tutorial/strategy/tokenAuthentication",title:"Token\u8ba4\u8bc1\u62e6\u622a\u5668",description:"\u7b56\u7565\u7c7b\u578b\uff1a\u62e6\u622a\u5668",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.x/tutorial/05-strategy/04-tokenAuthentication.md",sourceDirName:"tutorial/05-strategy",slug:"/tutorial/strategy/tokenAuthentication",permalink:"/zh-CN/tutorial/strategy/tokenAuthentication",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/versioned_docs/version-2.x/tutorial/05-strategy/04-tokenAuthentication.md",tags:[],version:"2.x",sidebarPosition:4,frontMatter:{title:"Token\u8ba4\u8bc1\u62e6\u622a\u5668"},sidebar:"tutorial",previous:{title:"\u8868\u5355\u63d0\u4ea4\u7b56\u7565",permalink:"/zh-CN/tutorial/strategy/useForm"},next:{title:"\u901a\u7528\u7684\u4e0a\u4f20\u7b56\u7565",permalink:"/zh-CN/tutorial/strategy/useUploader"}},h={},d=[{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u7ed1\u5b9a Token \u8ba4\u8bc1\u62e6\u622a\u5668",id:"\u7ed1\u5b9a-token-\u8ba4\u8bc1\u62e6\u622a\u5668",level:2},{value:"\u7ed1\u5b9a\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u7684\u62e6\u622a\u5668",id:"\u7ed1\u5b9a\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u7684\u62e6\u622a\u5668",level:3},{value:"\u7ed1\u5b9a\u57fa\u4e8e\u670d\u52a1\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u62e6\u622a\u5668",id:"\u7ed1\u5b9a\u57fa\u4e8e\u670d\u52a1\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u62e6\u622a\u5668",level:3},{value:"\u5728\u5ba2\u6237\u7aef\u65e0\u611f\u5237\u65b0 Token",id:"\u5728\u5ba2\u6237\u7aef\u65e0\u611f\u5237\u65b0-token",level:2},{value:"\u5728\u670d\u52a1\u7aef\u65e0\u611f\u5237\u65b0 Token",id:"\u5728\u670d\u52a1\u7aef\u65e0\u611f\u5237\u65b0-token",level:2},{value:"\u5728\u8bf7\u6c42\u6210\u529f\u62e6\u622a\u5668\u4e2d\u5904\u7406",id:"\u5728\u8bf7\u6c42\u6210\u529f\u62e6\u622a\u5668\u4e2d\u5904\u7406",level:3},{value:"\u5728\u8bf7\u6c42\u9519\u8bef\u62e6\u622a\u5668\u4e2d\u5904\u7406",id:"\u5728\u8bf7\u6c42\u9519\u8bef\u62e6\u622a\u5668\u4e2d\u5904\u7406",level:3},{value:"\u653e\u884c\u8bbf\u5ba2\u8bf7\u6c42",id:"\u653e\u884c\u8bbf\u5ba2\u8bf7\u6c42",level:2},{value:"\u767b\u5f55\u62e6\u622a",id:"\u767b\u5f55\u62e6\u622a",level:2},{value:"\u9644\u52a0 token",id:"\u9644\u52a0-token",level:2},{value:"\u767b\u51fa\u62e6\u622a",id:"\u767b\u51fa\u62e6\u622a",level:2},{value:"\u81ea\u5b9a\u4e49\u6807\u8bc6\u8eab\u4efd",id:"\u81ea\u5b9a\u4e49\u6807\u8bc6\u8eab\u4efd",level:2},{value:"token \u5237\u65b0\u8eab\u4efd\u6807\u8bc6",id:"token-\u5237\u65b0\u8eab\u4efd\u6807\u8bc6",level:3},{value:"\u8bbf\u5ba2\u8eab\u4efd\u6807\u8bc6",id:"\u8bbf\u5ba2\u8eab\u4efd\u6807\u8bc6",level:3},{value:"\u767b\u5f55\u8eab\u4efd\u6807\u8bc6",id:"\u767b\u5f55\u8eab\u4efd\u6807\u8bc6",level:3},{value:"\u767b\u51fa\u8eab\u4efd\u6807\u8bc6",id:"\u767b\u51fa\u8eab\u4efd\u6807\u8bc6",level:3},{value:"Typescript",id:"typescript",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"\u7b56\u7565\u7c7b\u578b\uff1a\u62e6\u622a\u5668"}),(0,r.jsx)(n.p,{children:"\u7248\u672c\u8981\u6c42\uff1av1.3.0+"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u5728\u4f7f\u7528\u6269\u5c55 hooks \u524d\uff0c\u786e\u4fdd\u4f60\u5df2\u719f\u6089\u4e86 alova \u7684\u57fa\u672c\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Token \u8ba4\u8bc1\u62e6\u622a\u5668\uff0c\u5bf9\u57fa\u4e8e token \u7684\u767b\u5f55\u3001\u767b\u51fa\u3001token \u9644\u5e26\u3001token \u5237\u65b0\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c\u5e76\u652f\u6301\u65e0\u611f\u5237\u65b0 token\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u7edf\u4e00\u7ef4\u62a4 Token \u8eab\u4efd\u8ba4\u8bc1\u7684\u6240\u6709\u4ee3\u7801\uff0c\u5305\u62ec\u767b\u5f55\u3001\u767b\u51fa\u3001token \u9644\u5e26\u3001token \u5237\u65b0\u7b49\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u652f\u6301\u5728\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u9a8c\u8bc1 token \u8fc7\u671f\uff0c\u5e76\u65e0\u611f\u5237\u65b0 token\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u4f9d\u8d56 token \u7684\u8bf7\u6c42\u81ea\u52a8\u7b49\u5f85 token \u5237\u65b0\u5b8c\u6210\u518d\u8bf7\u6c42\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u4f7f\u7528\u5143\u6570\u636e\u8bbe\u7f6e\u8bf7\u6c42\u8eab\u4efd\uff1b"}),"\n",(0,r.jsx)(n.li,{children:"\u81ea\u52a8\u653e\u884c\u4e0d\u4f9d\u8d56 token \u7684\u8bbf\u5ba2\u8bf7\u6c42\uff1b"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsxs)(s.Z,{groupId:"framework",children:[(0,r.jsx)(a.Z,{value:"1",label:"vue composition",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-vue --save\n# yarn\nyarn add @alova/scene-vue\n\n"})})}),(0,r.jsx)(a.Z,{value:"2",label:"react",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-react --save\n# yarn\nyarn add @alova/scene-react\n\n"})})}),(0,r.jsx)(a.Z,{value:"3",label:"svelte",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# npm\nnpm install @alova/scene-svelte --save\n# yarn\nyarn add @alova/scene-svelte\n\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u6240\u6709\u62e6\u622a\u5668\u90fd\u662f\u53ef\u9009\u7684\uff0c\u53ea\u9700\u8981\u9009\u62e9\u9700\u8981\u4f7f\u7528\u7684\u5373\u53ef\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7ed1\u5b9a-token-\u8ba4\u8bc1\u62e6\u622a\u5668",children:"\u7ed1\u5b9a Token \u8ba4\u8bc1\u62e6\u622a\u5668"}),"\n",(0,r.jsxs)(n.p,{children:["Token \u8eab\u4efd\u8ba4\u8bc1\u662f\u901a\u8fc7\u5168\u5c40\u7684\u62e6\u622a\u5668\u5b8c\u6210\u7684\uff0c\u5206\u522b\u63d0\u4f9b\u4e86",(0,r.jsx)(n.code,{children:"createClientTokenAuthentication"}),"\u548c",(0,r.jsx)(n.code,{children:"createServerTokenAuthentication"})," \u7528\u4e8e\u57fa\u4e8e\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\uff1a\u8868\u793a\u4ece\u5ba2\u6237\u7aef\u5224\u65ad token \u662f\u5426\u8fc7\u671f\uff0c\u4f8b\u5982\u5728\u767b\u5f55\u65f6\u83b7\u53d6\u5230\u7684 token \u8fc7\u671f\u65f6\u95f4\uff1b"}),"\n",(0,r.jsxs)(n.li,{children:["\u57fa\u4e8e\u670d\u52a1\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\uff1a\u8868\u793a\u4ece\u670d\u52a1\u7aef\u8fd4\u56de\u7684\u72b6\u6001\u5224\u65ad token \u662f\u5426\u8fc7\u671f\uff0c\u4f8b\u5982",(0,r.jsx)(n.code,{children:"status"}),"\u4e3a 401 \u65f6\u8868\u793a\u8fc7\u671f\uff1b"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u7ed1\u5b9a\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u7684\u62e6\u622a\u5668",children:"\u7ed1\u5b9a\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u7684\u62e6\u622a\u5668"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { createClientTokenAuthentication } from '@alova/scene-*';\nimport { createAlova } from 'alova';\n\nconst { onAuthRequired, onResponseRefreshToken } = createClientTokenAuthentication({\n  // ...\n});\n\nconst alovaInstance = createAlova({\n  // ...\n  beforeRequest: onAuthRequired(method => {\n    // ...\u539f\u8bf7\u6c42\u524d\u62e6\u622a\u5668\n  }),\n  responded: onResponseRefreshToken((response, method) => {\n    //...\u539f\u54cd\u5e94\u6210\u529f\u62e6\u622a\u5668\n    return response.json();\n  })\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5728",(0,r.jsx)(n.code,{children:"onResponseRefreshToken"}),"\u4e2d\u4e5f\u53ef\u4ee5\u7ed1\u5b9a\u54cd\u5e94\u9519\u8bef\u548c\u5b8c\u6210\u7684\u62e6\u622a\u5668\uff0c\u4e5f\u548c\u539f\u6765\u7684\u7528\u6cd5\u76f8\u540c\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createAlova({\n  // ...\n  // highlight-start\n  responded: onResponseRefreshToken({\n    onSuccess: (response, method) => {\n      //...\u539f\u54cd\u5e94\u6210\u529f\u62e6\u622a\u5668\n    },\n    onError: (error, method) => {\n      //...\u539f\u54cd\u5e94\u9519\u8bef\u62e6\u622a\u5668\n    },\n    onComplete: method => {\n      //...\u539f\u54cd\u5e94\u5b8c\u6210\u62e6\u622a\u5668\n    }\n  })\n  // highlight-end\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4e0d\u9700\u8981\u8bbe\u7f6e\u62e6\u622a\u5668\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u4f20\u5165\u62e6\u622a\u5668\u51fd\u6570\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createAlova({\n  //...\n  // highlight-start\n  beforeRequest: onAuthRequired(),\n  responded: onResponseRefreshToken()\n  // highlight-end\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u7ed1\u5b9a\u57fa\u4e8e\u670d\u52a1\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u62e6\u622a\u5668",children:"\u7ed1\u5b9a\u57fa\u4e8e\u670d\u52a1\u7aef\u7684\u8eab\u4efd\u8ba4\u8bc1\u62e6\u622a\u5668"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0e\u57fa\u4e8e\u5ba2\u6237\u7aef\u7684\u7528\u6cd5\u76f8\u540c"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"import { createServerTokenAuthentication } from '@alova/scene-*';\nimport { createAlova } from 'alova';\n\nconst { onAuthRequired, onResponseRefreshToken } = createServerTokenAuthentication({\n  // ...\n});\n\nconst alovaInstance = createAlova({\n  // ...\n  beforeRequest: onAuthRequired(method => {\n    // ...\u539f\u8bf7\u6c42\u524d\u62e6\u622a\u5668\n  }),\n  responded: onResponseRefreshToken((response, method) => {\n    //...\u539f\u54cd\u5e94\u6210\u529f\u62e6\u622a\u5668\n    return response.json();\n  })\n});\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["\u5f53\u4f60\u4f7f\u7528",(0,r.jsx)(n.code,{children:"GlobalFetch"}),"\u9002\u914d\u5668\u65f6\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230",(0,r.jsx)(n.code,{children:"TypeError: Failed to execute 'json' on 'Response': body stream already read"}),"\u8fd9\u4e2a\u95ee\u9898\uff0c\u8fd9\u662f\u56e0\u4e3a",(0,r.jsx)(n.code,{children:"Response"}),"\u7684",(0,r.jsx)(n.code,{children:"body stream"}),"\u53ea\u80fd\u8bbf\u95ee\u4e00\u6b21\uff0c\u4f60\u53ef\u4ee5",(0,r.jsx)(n.code,{children:"response.clone().json()"}),"\u6765\u89e3\u51b3\u5b83\u3002"]})}),"\n",(0,r.jsx)(n.h2,{id:"\u5728\u5ba2\u6237\u7aef\u65e0\u611f\u5237\u65b0-token",children:"\u5728\u5ba2\u6237\u7aef\u65e0\u611f\u5237\u65b0 Token"}),"\n",(0,r.jsxs)(n.p,{children:["\u8bbe\u7f6e",(0,r.jsx)(n.code,{children:"refreshToken"}),"\u5e76\u6307\u5b9a token \u662f\u5426\u8fc7\u671f\uff0c\u4ee5\u53ca\u8c03\u7528\u5237\u65b0 token \u7684\u51fd\u6570\u5c31\u53ef\u4ee5\u4e86\u3002\u5f53 token \u5237\u65b0\u5b8c\u6210\u524d\uff0c\u6240\u6709\u4f9d\u8d56 token \u7684\u8bf7\u6c42\u90fd\u5c06\u4f1a\u7b49\u5f85 token \u5237\u65b0\u5b8c\u6210\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\n  refreshToken: {\n    // \u5728\u8bf7\u6c42\u524d\u89e6\u53d1\uff0c\u5c06\u63a5\u6536\u5230method\u53c2\u6570\uff0c\u5e76\u8fd4\u56deboolean\u8868\u793atoken\u662f\u5426\u8fc7\u671f\n    isExpired: method => {\n      return tokenExpireTime < Date.now();\n    },\n\n    // \u5f53token\u8fc7\u671f\u65f6\u89e6\u53d1\uff0c\u5728\u6b64\u51fd\u6570\u4e2d\u89e6\u53d1\u5237\u65b0token\n    handler: async method => {\n      try {\n        const { token, refresh_token } = await refreshToken();\n        localStorage.setItem('token', token);\n        localStorage.setItem('refresh_token', refresh_token);\n      } catch (error) {\n        // token\u5237\u65b0\u5931\u8d25\uff0c\u8df3\u8f6c\u56de\u767b\u5f55\u9875\n        location.href = '/login';\n        // \u5e76\u629b\u51fa\u9519\u8bef\n        throw error;\n      }\n    }\n  }\n});\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4e3a\u4e86\u8ba9",(0,r.jsx)(n.code,{children:"refreshToken"}),"\u8bf7\u6c42\u987a\u5229\u901a\u8fc7\uff0c\u9700\u8981\u901a\u8fc7\u5143\u6570\u636e\u6807\u8bc6",(0,r.jsx)(n.code,{children:"authRole"}),"\u4e3a",(0,r.jsx)(n.code,{children:"refreshToken"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c token \u5237\u65b0\u5931\u8d25\u5fc5\u987b\u629b\u51fa\u9519\u8bef\uff0c\u963b\u6b62\u5931\u8d25\u63a5\u53e3\u91cd\u8bd5\u548c\u7b49\u5f85\u63a5\u53e3\u7ee7\u7eed\u8bf7\u6c42\u3002"}),"\n"]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4e86\u89e3\u66f4\u591a\u5143\u6570\u636e\u7684\u4fe1\u606f\uff0c\u8bf7\u524d\u5f80",(0,r.jsx)(n.a,{href:"/tutorial/getting-started/method-metadata",children:"method \u5143\u6570\u636e"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const refreshToken = () => {\n  const method = alovaInstance.Get('/refresh_token');\n  method.meta = {\n    authRole: 'refreshToken'\n  };\n  return method;\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u5728\u670d\u52a1\u7aef\u65e0\u611f\u5237\u65b0-token",children:"\u5728\u670d\u52a1\u7aef\u65e0\u611f\u5237\u65b0 Token"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0e\u5728\u5ba2\u6237\u7aef\u65e0\u611f\u5237\u65b0 Token \u76f8\u540c\uff0c\u6307\u5b9a token \u662f\u5426\u8fc7\u671f\uff0c\u4ee5\u53ca\u8c03\u7528\u5237\u65b0 token \u7684\u51fd\u6570\u5c31\u53ef\u4ee5\u4e86\u3002\u5f53 token \u5237\u65b0\u5b8c\u6210\u524d\uff0c\u6240\u6709\u4f9d\u8d56 token \u7684\u8bf7\u6c42\u90fd\u5c06\u4f1a\u7b49\u5f85 token \u5237\u65b0\u5b8c\u6210\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5728\u8bf7\u6c42\u6210\u529f\u62e6\u622a\u5668\u4e2d\u5904\u7406",children:"\u5728\u8bf7\u6c42\u6210\u529f\u62e6\u622a\u5668\u4e2d\u5904\u7406"}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528",(0,r.jsx)(n.code,{children:"GlobalFetch"}),"\u65f6\uff0c\u53ea\u8981\u670d\u52a1\u7aef\u8fd4\u56de\u4e86\u54cd\u5e94\u6570\u636e\uff0c\u5c31\u4f1a\u89e6\u53d1\u54cd\u5e94\u6210\u529f\u62e6\u622a\u5668\uff0c\u6b64\u65f6\u6211\u4eec\u9700\u8981\u5728\u54cd\u5e94\u6210\u529f\u62e6\u622a\u5668\u4e2d\u5904\u7406 token \u7684\u5237\u65b0\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createServerTokenAuthentication({\n  refreshTokenOnSuccess: {\n    // \u54cd\u5e94\u65f6\u89e6\u53d1\uff0c\u53ef\u83b7\u53d6\u5230response\u548cmethod\uff0c\u5e76\u8fd4\u56deboolean\u8868\u793atoken\u662f\u5426\u8fc7\u671f\n    // \u5f53\u670d\u52a1\u7aef\u8fd4\u56de401\u65f6\uff0c\u8868\u793atoken\u8fc7\u671f\n    isExpired: (response, method) => {\n      return response.status === 401;\n    },\n\n    // \u5f53token\u8fc7\u671f\u65f6\u89e6\u53d1\uff0c\u5728\u6b64\u51fd\u6570\u4e2d\u89e6\u53d1\u5237\u65b0token\n    handler: async (response, method) => {\n      try {\n        const { token, refresh_token } = await refreshToken();\n        localStorage.setItem('token', token);\n        localStorage.setItem('refresh_token', refresh_token);\n      } catch (error) {\n        // token\u5237\u65b0\u5931\u8d25\uff0c\u8df3\u8f6c\u56de\u767b\u5f55\u9875\n        location.href = '/login';\n        // \u5e76\u629b\u51fa\u9519\u8bef\n        throw error;\n      }\n    }\n  }\n});\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u5728\u8bf7\u6c42\u9519\u8bef\u62e6\u622a\u5668\u4e2d\u5904\u7406",children:"\u5728\u8bf7\u6c42\u9519\u8bef\u62e6\u622a\u5668\u4e2d\u5904\u7406"}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u4f7f\u7528",(0,r.jsx)(n.code,{children:"axios"}),"\u62e6\u622a\u5668\u65f6\uff0c\u670d\u52a1\u7aef\u8fd4\u56de\u4e86\u975e",(0,r.jsx)(n.code,{children:"200/300"}),"\u7684\u72b6\u6001\u7801\u5c31\u4f1a\u89e6\u53d1\u54cd\u5e94\u9519\u8bef\u62e6\u622a\u5668\uff0c\u6b64\u65f6\u6211\u4eec\u9700\u8981\u5728\u54cd\u5e94\u9519\u8bef\u62e6\u622a\u5668\u4e2d\u5904\u7406 token \u7684\u5237\u65b0\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createServerTokenAuthentication({\n  refreshTokenOnError: {\n    // \u54cd\u5e94\u65f6\u89e6\u53d1\uff0c\u53ef\u83b7\u53d6\u5230error\u548cmethod\uff0c\u5e76\u8fd4\u56deboolean\u8868\u793atoken\u662f\u5426\u8fc7\u671f\n    // \u5f53\u670d\u52a1\u7aef\u8fd4\u56de401\u65f6\uff0c\u8868\u793atoken\u8fc7\u671f\n    isExpired: (error, method) => {\n      return error.response.status === 401;\n    },\n\n    // \u5f53token\u8fc7\u671f\u65f6\u89e6\u53d1\uff0c\u5728\u6b64\u51fd\u6570\u4e2d\u89e6\u53d1\u5237\u65b0token\n    handler: async (error, method) => {\n      try {\n        const { token, refresh_token } = await refreshToken();\n        localStorage.setItem('token', token);\n        localStorage.setItem('refresh_token', refresh_token);\n      } catch (error) {\n        // token\u5237\u65b0\u5931\u8d25\uff0c\u8df3\u8f6c\u56de\u767b\u5f55\u9875\n        location.href = '/login';\n        // \u5e76\u629b\u51fa\u9519\u8bef\n        throw error;\n      }\n    }\n  }\n});\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4e3a\u4e86\u8ba9",(0,r.jsx)(n.code,{children:"refreshToken"}),"\u8bf7\u6c42\u987a\u5229\u901a\u8fc7\uff0c\u9700\u8981\u901a\u8fc7\u5143\u6570\u636e\u6807\u8bc6",(0,r.jsx)(n.code,{children:"authRole"}),"\u4e3a",(0,r.jsx)(n.code,{children:"refreshToken"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c token \u5237\u65b0\u5931\u8d25\u5fc5\u987b\u629b\u51fa\u9519\u8bef\uff0c\u963b\u6b62\u5931\u8d25\u63a5\u53e3\u91cd\u8bd5\u548c\u7b49\u5f85\u63a5\u53e3\u7ee7\u7eed\u8bf7\u6c42\u3002"}),"\n"]})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4e86\u89e3\u66f4\u591a\u5143\u6570\u636e\u7684\u4fe1\u606f\uff0c\u8bf7\u524d\u5f80",(0,r.jsx)(n.a,{href:"/tutorial/getting-started/method-metadata",children:"method \u5143\u6570\u636e"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const refreshToken = () => {\n  const method = alovaInstance.Get('/refresh_token');\n  method.meta = {\n    authRole: 'refreshToken'\n  };\n  return method;\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u653e\u884c\u8bbf\u5ba2\u8bf7\u6c42",children:"\u653e\u884c\u8bbf\u5ba2\u8bf7\u6c42"}),"\n",(0,r.jsxs)(n.p,{children:["\u6709\u4e9b\u63a5\u53e3\u4e0d\u9700\u8981\u4f9d\u8d56 token \u8ba4\u8bc1\uff0c\u6211\u4eec\u79f0\u5b83\u4eec\u4e3a\u201c\u8bbf\u5ba2\u8bf7\u6c42\u201d\uff0c\u6b64\u65f6\u6211\u4eec\u53ef\u4ee5\u8bbe\u7f6e\u5b83\u4eec\u7684\u5143\u6570\u636e\u4e3a",(0,r.jsx)(n.code,{children:"authRole: null"}),"\u6765\u7ed5\u8fc7\u524d\u7aef\u7684\u62e6\u622a\uff0c\u8ba9\u5b83\u4eec\u987a\u5229\u53d1\u51fa\u8bf7\u6c42\u548c\u63a5\u6536\u54cd\u5e94\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const requestTokenNotRequired = () => {\n  const method = alovaInstance.Get('/token_not_required');\n  method.meta = {\n    authRole: null\n  };\n  return method;\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u767b\u5f55\u62e6\u622a",children:"\u767b\u5f55\u62e6\u622a"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u8eab\u4efd\u8ba4\u8bc1\u62e6\u622a\u5668\u4e2d\uff0c\u4f60\u8fd8\u53ef\u4ee5\u62e6\u622a\u767b\u5f55\u8bf7\u6c42\uff0c\u5728\u62e6\u622a\u5668\u4e2d\u4fdd\u5b58\u767b\u5f55\u4fe1\u606f\uff0c\u8fbe\u5230\u7edf\u4e00\u7ef4\u62a4\u8eab\u4efd\u8ba4\u8bc1\u4ee3\u7801\u7684\u76ee\u7684\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u6807\u8bc6\u767b\u5f55\u8bf7\u6c42\u7684\u5143\u6570\u636e\u4e3a",(0,r.jsx)(n.code,{children:"authRole: 'login'"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const login = () => {\n  const method = alovaInstance.Get('/login');\n  method.meta = {\n    authRole: 'login'\n  };\n  return method;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u518d\u5728\u767b\u5f55\u62e6\u622a\u5668\u4e2d\u4fdd\u5b58\u767b\u5f55\u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\n  login(response, method) {\n    localStorage.setItem('token', response.token);\n    localStorage.setItem('refresh_token', response.refresh_token);\n  }\n});\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"createServerTokenAuthentication"}),"\u7684\u767b\u5f55\u62e6\u622a\u5668\u7528\u6cd5\u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u9644\u52a0-token",children:"\u9644\u52a0 token"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u5e38\uff0c\u6211\u4eec\u4f1a\u5728",(0,r.jsx)(n.code,{children:"beforeRequest"}),"\u9644\u52a0 token \u5230\u8bf7\u6c42\u4fe1\u606f\u4e2d\u3002\u5728 Token \u8ba4\u8bc1\u62e6\u622a\u5668\u4e2d\u63d0\u4f9b\u4e86",(0,r.jsx)(n.code,{children:"assignToken"}),"\u56de\u8c03\u51fd\u6570\u7528\u4e8e\u9644\u52a0 token\uff0c\u5b83\u4f1a\u8fc7\u6ee4\u8bbf\u5ba2\u8bf7\u6c42\u548c\u767b\u5f55\u8bf7\u6c42\uff0c\u5e76\u5728\u8bf7\u6c42\u524d\u89e6\u53d1\uff0c\u4e5f\u53ef\u4ee5\u8fbe\u5230\u7edf\u4e00\u7ef4\u62a4\u8eab\u4efd\u8ba4\u8bc1\u4ee3\u7801\u7684\u76ee\u7684\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\n  assignToken: method => {\n    method.config.headers.Authorization = localStorage.getItem('token')};\n  }\n});\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"createServerTokenAuthentication"}),"\u7684 assignToken \u56de\u8c03\u51fd\u6570\u7528\u6cd5\u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u767b\u51fa\u62e6\u622a",children:"\u767b\u51fa\u62e6\u622a"}),"\n",(0,r.jsx)(n.p,{children:"\u5f53\u4f60\u7684\u767b\u51fa\u4e5f\u9700\u8981\u8c03\u7528\u63a5\u53e3\u65f6\uff0c\u4e5f\u53ef\u4ee5\u62e6\u622a\u767b\u51fa\u8bf7\u6c42\uff0c\u6e05\u9664\u767b\u5f55\u4fe1\u606f\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u5148\u6807\u8bc6\u767b\u51fa\u8bf7\u6c42\u7684\u5143\u6570\u636e\u4e3a",(0,r.jsx)(n.code,{children:"authRole: 'logout'"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const logout = () => {\n  const method = alovaInstance.Get('/logout');\n  method.meta = {\n    authRole: 'logout'\n  };\n  return method;\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u518d\u5728\u767b\u51fa\u62e6\u622a\u5668\u4e2d\u6e05\u9664\u767b\u5f55\u4fe1\u606f\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\n  logout(response, method) {\n    localStorage.removeItem('token');\n    localStorage.removeItem('refresh_token');\n  }\n});\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"createServerTokenAuthentication"}),"\u7684\u767b\u5f55\u62e6\u622a\u5668\u7528\u6cd5\u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u6807\u8bc6\u8eab\u4efd",children:"\u81ea\u5b9a\u4e49\u6807\u8bc6\u8eab\u4efd"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u4e0a\u9762\u7684\u5143\u6570\u636e\u8eab\u4efd\u6807\u8bc6\u4e2d\uff0c\u5b9e\u9645\u4e0a\u90fd\u9ed8\u8ba4\u7684\u8eab\u4efd\u6807\u8bc6\uff0c\u5982\u679c\u9700\u8981\u81ea\u5b9a\u4e49\u8eab\u4efd\u6807\u8bc6\uff0c\u4f60\u53ef\u4ee5\u6309\u4e0b\u9762\u8fd9\u6837\u8bbe\u7f6e\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"token-\u5237\u65b0\u8eab\u4efd\u6807\u8bc6",children:"token \u5237\u65b0\u8eab\u4efd\u6807\u8bc6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\n  refreshToken: {\n    // highlight-start\n    metaMatches: {\n      refreshToken: true\n    }\n    // highlight-end\n    // ...\n  }\n});\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createServerTokenAuthentication({\n  refreshTokenOnSuccess: {\n    // highlight-start\n    metaMatches: {\n      refreshToken: true\n    }\n    // highlight-end\n    // ...\n  },\n  refreshTokenOnError: {\n    // highlight-start\n    metaMatches: {\n      refreshToken: true\n    }\n    // highlight-end\n    // ...\n  }\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u5143\u6570\u636e\u4e2d\u5177\u6709",(0,r.jsx)(n.code,{children:"refreshToken: true"}),"\u7684\u8bf7\u6c42\uff0c\u5c31\u4f1a\u88ab\u8ba4\u5b9a\u4e3a",(0,r.jsx)(n.code,{children:"refreshToken"}),"\u8eab\u4efd\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const refreshToken = () => {\n  const method = alovaInstance.Get('/refresh_token');\n  method.meta = {\n    refreshToken: true\n  };\n  return method;\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u8bbf\u5ba2\u8eab\u4efd\u6807\u8bc6",children:"\u8bbf\u5ba2\u8eab\u4efd\u6807\u8bc6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\n  visitorMeta: {\n    isVisitor: true\n  }\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u5143\u6570\u636e\u4e2d\u5177\u6709",(0,r.jsx)(n.code,{children:"isVisitor: true"}),"\u7684\u8bf7\u6c42\uff0c\u5c31\u4f1a\u88ab\u8ba4\u5b9a\u4e3a\u8bbf\u5ba2\u8eab\u4efd\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const requestTokenNotRequired = () => {\n  const method = alovaInstance.Get('/token_not_required');\n  method.meta = {\n    isVisitor: true\n  };\n  return method;\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u767b\u5f55\u8eab\u4efd\u6807\u8bc6",children:"\u767b\u5f55\u8eab\u4efd\u6807\u8bc6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\n  login: {\n    // highlight-start\n    metaMatches: {\n      login: true\n    },\n    // highlight-end\n    handler(response, method) {\n      // \u767b\u5f55\u62e6\u622a\u5668\n    }\n  }\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u5143\u6570\u636e\u4e2d\u5177\u6709",(0,r.jsx)(n.code,{children:"login: true"}),"\u7684\u8bf7\u6c42\uff0c\u5c31\u4f1a\u88ab\u8ba4\u5b9a\u4e3a",(0,r.jsx)(n.code,{children:"login"}),"\u8eab\u4efd\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const login = () => {\n  const method = alovaInstance.Get('/login');\n  method.meta = {\n    login: true\n  };\n  return method;\n};\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u767b\u51fa\u8eab\u4efd\u6807\u8bc6",children:"\u767b\u51fa\u8eab\u4efd\u6807\u8bc6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"createClientTokenAuthentication({\n  logout: {\n    // highlight-start\n    metaMatches: {\n      logout: true\n    },\n    // highlight-end\n    handler(response, method) {\n      // \u767b\u51fa\u62e6\u622a\u5668\n    }\n  }\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u7136\u540e\uff0c\u5143\u6570\u636e\u4e2d\u5177\u6709",(0,r.jsx)(n.code,{children:"logout: true"}),"\u7684\u8bf7\u6c42\uff0c\u5c31\u4f1a\u88ab\u8ba4\u5b9a\u4e3a",(0,r.jsx)(n.code,{children:"logout"}),"\u8eab\u4efd\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"export const logout = () => {\n  const method = alovaInstance.Get('/logout');\n  method.meta = {\n    logout: true\n  };\n  return method;\n};\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"createServerTokenAuthentication"}),"\u7684\u767b\u5f55\u62e6\u622a\u5668\u7528\u6cd5\u76f8\u540c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"typescript",children:"Typescript"}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,r.jsx)(n.code,{children:"createClientServerTokenAuthentication"}),"\u548c",(0,r.jsx)(n.code,{children:"createServerTokenAuthentication"}),"\u9002\u914d\u4e86",(0,r.jsx)(n.code,{children:"GlobalFetch"}),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u4f60\u53ea\u9700\u8981\u6307\u5b9a",(0,r.jsx)(n.code,{children:"statesHook"}),"\u7684\u7c7b\u578b\uff0c\u5982\u4e0b\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// highlight-start\nconst { onAuthRequired, onResponseRefreshToken } = createClientTokenAuthentication<\n  typeof VueHook\n>({\n  // highlight-end\n  //...\n});\n\nconst alovaInstance = createAlova({\n  // ...\n  statesHook: VueHook,\n  beforeRequest: onAuthRequired(method => {\n    // method\u7684\u7c7b\u578b\u4e3a Method<any, any, any, any, RequestInit, Response, Headers>\n  }),\n  responded: onResponseRefreshToken((response, method) => {\n    // response\u7684\u7c7b\u578b\u4e3aResponse\n    return response.json();\n  })\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u7684\u4e0d\u662f",(0,r.jsx)(n.code,{children:"GlobalFetch"}),"\u8bf7\u6c42\u9002\u914d\u5668\uff0c\u4f60\u8fd8\u9700\u8981\u6307\u5b9a\u8bf7\u6c42\u9002\u914d\u5668\u7684\u7c7b\u578b\uff0c\u8fd9\u4e5f\u5f88\u7b80\u5355\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u4e3a axios \u8bf7\u6c42\u9002\u914d\u5668\u4e3a\u4f8b\uff0c\u5728",(0,r.jsx)(n.code,{children:"createClientTokenAuthentication"}),"\u4e2d\u6307\u5b9a\u8bf7\u6c42\u9002\u914d\u5668\u7c7b\u578b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { axiosRequestAdapter } from '@alova/adapter-axios';\n\n// highlight-start\nconst { onAuthRequired, onResponseRefreshToken } = createClientTokenAuthentication<\n  typeof VueHook,\n  typeof axiosRequestAdapter\n>({\n  // highlight-end\n  //...\n});\nconst alovaInstance = createAlova({\n  //...\n  statesHook: VueHook,\n  // highlight-start\n  beforeRequest: onAuthRequired(method => {\n    // method\u7684\u7c7b\u578b\u4e3a Method<any, any, any, any, AlovaAxiosRequestConfig, AxiosResponse, AxiosResponseHeaders>\n    // highlight-end\n  }),\n  // highlight-start\n  responded: onResponseRefreshToken((response, method) => {\n    // response\u7684\u7c7b\u578b\u4e3aAxiosResponse\n    // highlight-end\n    return response.data;\n  })\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u57fa\u4e8e\u670d\u52a1\u7aef\u7684 Token \u8ba4\u8bc1\u62e6\u622a\u5668\u7684\u7528\u6cd5\u76f8\u540c\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { axiosRequestAdapter } from '@alova/adapter-axios';\n\n// highlight-start\ncreateServerTokenAuthentication<typeof VueHook, typeof axiosRequestAdapter>({\n  // highlight-end\n  //...\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var r=t(90512);const o={tabItem:"tabItem_Ymn6"};var s=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>b});var r=t(67294),o=t(90512),s=t(12466),a=t(16550),l=t(20469),i=t(91980),c=t(67392),h=t(20812);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const o=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=u(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,d]=x({queryString:t,groupId:o}),[j,k]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,h.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),m=(()=>{const e=c??j;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{m&&i(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),k(e)}),[d,k,s]),tabValues:s}}var k=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),h=e=>{const n=e.currentTarget,t=i.indexOf(n),o=l[t].value;o!==r&&(c(n),a(o))},d=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:h,...s,className:(0,o.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function T(e){const n=j(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(f,{...n,...e})]})}function b(e){const n=(0,k.Z)();return(0,g.jsx)(T,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var r=t(67294);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);