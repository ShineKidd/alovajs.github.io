"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[6049],{24566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(85893),o=n(11151);const r={title:"States Hook"},s=void 0,c={id:"tutorial/advanced/custom/stateshook",title:"States Hook",description:"\u8fd8\u8bb0\u5f97\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Alova \u5b9e\u4f8b\u5417\uff1f",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/tutorial/06-advanced/02-custom/05-stateshook.md",sourceDirName:"tutorial/06-advanced/02-custom",slug:"/tutorial/advanced/custom/stateshook",permalink:"/zh-CN/tutorial/advanced/custom/stateshook",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-advanced/02-custom/05-stateshook.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"States Hook"},sidebar:"tutorial",previous:{title:"\u670d\u52a1\u7aef\u7b56\u7565",permalink:"/zh-CN/tutorial/advanced/custom/server-strategy"},next:{title:"\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/tutorial/project/best-practice/"}},i={},l=[{value:"statesHook \u7ed3\u6784",id:"stateshook-\u7ed3\u6784",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"\u8fd8\u8bb0\u5f97\u5982\u4f55\u521b\u5efa\u4e00\u4e2a Alova \u5b9e\u4f8b\u5417\uff1f"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"const alovaInstance = createAlova({\n  // ...\n  statesHook: ReactHook\n});\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"statesHook"}),"\u5c06\u51b3\u5b9a\u5728\u8bf7\u6c42\u65f6\u8fd4\u56de\u54ea\u4e2a UI \u5e93\u7684\u72b6\u6001\u3002\u5728\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u4f60\u4e0d\u9700\u8981\u81ea\u5b9a\u4e49",(0,a.jsx)(t.code,{children:"statesHook"}),"\uff0c\u4f46\u5982\u679c\u4f60\u9700\u8981\u9002\u914d\u66f4\u591a alova \u4e0d\u652f\u6301\u7684 MVVM \u5e93\uff0c\u5c31\u9700\u8981\u81ea\u5b9a\u4e49\u7f16\u5199",(0,a.jsx)(t.code,{children:"statesHook"}),"\u4e86\u3002"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"statesHook"}),"\u662f\u4e00\u4e2a\u5305\u542b\u7279\u5b9a\u51fd\u6570\u7684\u666e\u901a\u5bf9\u8c61\uff0c\u6211\u4eec\u6765\u770b\u770b ",(0,a.jsx)(t.strong,{children:"VueHook"})," \u662f\u600e\u4e48\u7f16\u5199\u7684\u5427\u3002"]}),"\n",(0,a.jsx)(t.h2,{id:"stateshook-\u7ed3\u6784",children:"statesHook \u7ed3\u6784"}),"\n",(0,a.jsx)(t.p,{children:"statesHook \u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u4ee5\u4e0b\u662f\u5b83\u7684\u7c7b\u578b\u5b9a\u4e49\u3002"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"interface StatesHook<State, Computed, Watched = State | Computed, Export = State> {\n  /**\n   * \u521b\u5efa\u72b6\u6001\n   * @param initialValue \u521d\u59cb\u6570\u636e\n   * @returns \u72b6\u6001\u503c\n   */\n  create: (initialValue: any, referingObject: ReferingObject) => State;\n\n  /**\n   * \u521b\u5efa\u8ba1\u7b97\u72b6\u6001\n   * @param initialValue \u521d\u59cb\u6570\u636e\n   * @param referingObject \u5f15\u7528\u5bf9\u8c61\n   */\n  computed: (getter: () => any, deps: Export[], referingObject: ReferingObject) => Computed;\n\n  /**\n   * \u5bfc\u51fa\u7ed9\u5f00\u53d1\u8005\u4f7f\u7528\u7684\u503c\n   * @param state \u72b6\u6001\u503c\n   * @param referingObject refering object\n   * @returns \u5bfc\u51fa\u7684\u503c\n   */\n  export?: (state: State, referingObject: ReferingObject) => Export;\n\n  /** \u5c06\u72b6\u6001\u8f6c\u6362\u4e3a\u666e\u901a\u6570\u636e */\n  dehydrate: (state: State, key: string, referingObject: ReferingObject) => any;\n\n  /**\n   * \u66f4\u65b0\u72b6\u6001\u503c\n   * @param newVal \u65b0\u7684\u6570\u636e\u96c6\u5408\n   * @param state \u539f\u72b6\u6001\u503c\n   * @param @param referingObject refering object\n   */\n  update: (newVal: any, state: State, key: string, referingObject: ReferingObject) => void;\n\n  /**\n   * \u63a7\u5236\u6267\u884c\u8bf7\u6c42\u7684\u51fd\u6570\uff0c\u6b64\u51fd\u6570\u5c06\u5728useRequest\u3001useWatcher\u88ab\u8c03\u7528\u65f6\u6267\u884c\u4e00\u6b21\n   * \u5728useFetcher\u4e2d\u7684fetch\u51fd\u6570\u4e2d\u6267\u884c\u4e00\u6b21\n   * \u5f53watchingStates\u4e3a\u7a7a\u6570\u7ec4\u65f6\uff0c\u6267\u884c\u4e00\u6b21handleRequest\u51fd\u6570\n   * \u5f53watchingStates\u4e3a\u975e\u7a7a\u6570\u7ec4\u65f6\uff0c\u5f53\u72b6\u6001\u53d8\u5316\u65f6\u8c03\u7528\uff0cimmediate\u4e3atrue\u65f6\uff0c\u9700\u7acb\u5373\u8c03\u7528\u4e00\u6b21\n   * hook\u662fuse hook\u7684\u5b9e\u4f8b\uff0c\u6bcf\u6b21use hook\u8c03\u7528\u65f6\u90fd\u5c06\u751f\u6210\u4e00\u4e2ahook\u5b9e\u4f8b\n   * \u5728vue\u4e2d\u76f4\u63a5\u6267\u884c\u5373\u53ef\uff0c\u800c\u5728react\u4e2d\u9700\u8981\u5728useEffect\u4e2d\u6267\u884c\n   * removeStates\u51fd\u6570\u4e3a\u6e05\u9664\u5f53\u524d\u72b6\u6001\u7684\u51fd\u6570\uff0c\u5e94\u8be5\u5728\u7ec4\u4ef6\u5378\u8f7d\u65f6\u8c03\u7528\n   */\n  effectRequest: (\n    effectParams: EffectRequestParams<any>,\n    referingObject: ReferingObject\n  ) => void;\n\n  /**\n   * \u5305\u88c5send\u3001abort\u7b49use hooks\u64cd\u4f5c\u51fd\u6570\n   * \u8fd9\u4e3b\u8981\u7528\u4e8e\u4f18\u5316\u5728react\u4e2d\uff0c\u6bcf\u6b21\u6e32\u67d3\u90fd\u4f1a\u751f\u6210\u65b0\u51fd\u6570\u7684\u95ee\u9898\uff0c\u4f18\u5316\u6027\u80fd\n   * @param fn use hook\u64cd\u4f5c\u51fd\u6570\n   * @returns \u5305\u88c5\u540e\u7684\u64cd\u4f5c\u51fd\u6570\n   */\n  memorize?: <Callback extends (...args: any[]) => any>(fn: Callback) => Callback;\n\n  /**\n   * \u521b\u5efa\u5f15\u7528\u5bf9\u8c61\n   * @param initialValue \u521d\u59cb\u503c\n   * @returns \u5305\u542b\u521d\u59cb\u503c\u7684\u5f15\u7528\u5bf9\u8c61\n   */\n  ref?: <D>(initialValue: D) => { current: D };\n\n  /**\n   * \u72b6\u6001\u76d1\u542c\n   * @param source \u76d1\u542c\u7684\u72b6\u6001\n   * @param callback \u72b6\u6001\u6539\u53d8\u56de\u8c03\u51fd\u6570\n   * @param referingObject refering object\n   */\n  watch: (source: Watched[], callback: () => void, referingObject: ReferingObject) => void;\n\n  /**\n   * \u7ec4\u4ef6\u6302\u8f7d\u94a9\u5b50\n   * @param callback \u56de\u8c03\u51fd\u6570\n   * @param referingObject refering object\n   */\n  onMounted: (callback: () => void, referingObject: ReferingObject) => void;\n\n  /**\n   * \u7ec4\u4ef6\u5378\u8f7d\u94a9\u5b50\n   * @param callback \u56de\u8c03\u51fd\u6570\n   * @param referingObject refering object\n   */\n  onUnmounted: (callback: () => void, referingObject: ReferingObject) => void;\n}\n"})}),"\n",(0,a.jsx)(t.admonition,{title:"\u6ce8\u610f",type:"warning",children:(0,a.jsxs)(t.p,{children:["\u5982\u679c statesHook \u6d89\u53ca\u4e0e",(0,a.jsx)(t.code,{children:"react"}),"\u76f8\u4f3c\uff0c\u5f53\u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u90fd\u4f1a\u8c03\u7528",(0,a.jsx)(t.code,{children:"alova"}),"\u7684 use hook \u65f6\uff0c\u9700\u8981\u5728",(0,a.jsx)(t.code,{children:"effectRequest"}),"\u4e2d\u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u65f6\u89e6\u53d1",(0,a.jsx)(t.code,{children:"saveStates"}),"\u51fd\u6570\uff0c\u8fd9\u662f\u56e0\u4e3a",(0,a.jsx)(t.code,{children:"react"}),"\u6bcf\u6b21\u91cd\u65b0\u6e32\u67d3\u90fd\u4f1a\u5237\u65b0\u5b83\u7684\u72b6\u6001\u5f15\u7528\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u518d\u6b21\u91cd\u65b0\u4fdd\u5b58\u5b83\u4eec\u3002"]})}),"\n",(0,a.jsx)(t.p,{children:"\u4ee5\u4e0b\u662f\u7559\u4e0b UI \u6846\u67b6\u7684 statesHook \u6e90\u7801\u3002"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/packages/client/src/statesHook/react.ts",children:"react hook"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/packages/client/src/statesHook/vue.ts",children:"vue hook"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/packages/client/src/statesHook/svelte.ts",children:"svelte hook"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/packages/vue-options/src/stateHook.ts",children:"vue options hook"})}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var a=n(67294);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);