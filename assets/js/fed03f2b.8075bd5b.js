"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[3633],{20493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(85893),a=n(11151);const r={title:"Client Strategy"},s=void 0,i={id:"tutorial/advanced/custom/client-strategy",title:"Client Strategy",description:"alova's client strategies are divided into three types: middleware, interceptor, and useHook. When your project needs customization, you can refer to this section.",source:"@site/docs/tutorial/06-advanced/02-custom/03-client-strategy.md",sourceDirName:"tutorial/06-advanced/02-custom",slug:"/tutorial/advanced/custom/client-strategy",permalink:"/next/tutorial/advanced/custom/client-strategy",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/06-advanced/02-custom/03-client-strategy.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Client Strategy"},sidebar:"tutorial",previous:{title:"Storage Adapter",permalink:"/next/tutorial/advanced/custom/storage-adapter"},next:{title:"Server Strategy",permalink:"/next/tutorial/advanced/custom/server-strategy"}},l={},c=[{value:"Middleware",id:"middleware",level:2},{value:"Interceptor",id:"interceptor",level:2},{value:"useHook",id:"usehook",level:2},{value:"Create a state",id:"create-a-state",level:3},{value:"Create a computed value",id:"create-a-computed-value",level:3},{value:"Create reference value",id:"create-reference-value",level:3},{value:"Component mounting hook",id:"component-mounting-hook",level:3},{value:"Component uninstallation hook",id:"component-uninstallation-hook",level:3},{value:"Monitor state changes",id:"monitor-state-changes",level:3},{value:"State objectification",id:"state-objectification",level:3},{value:"Expose internal data",id:"expose-internal-data",level:3},{value:"<code>__referingObj</code> Description",id:"__referingobj-description",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"alova's client strategies are divided into three types: middleware, interceptor, and useHook. When your project needs customization, you can refer to this section."}),"\n",(0,o.jsx)(t.h2,{id:"middleware",children:"Middleware"}),"\n",(0,o.jsxs)(t.p,{children:["Middleware provides powerful capabilities that can control almost all behaviors of a request. You can use it to control request behavior, customize request status, error handling, etc. For details, please go to ",(0,o.jsx)(t.a,{href:"/next/tutorial/client/in-depth/middleware",children:"Request Middleware"})," to view. The following source code can tell you what the middleware can do."]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/packages/client/src/middlewares/actionDelegation.ts",children:"actionDelegationMiddleware"})," Cross-component triggering requests are implemented through middleware."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/packages/client/src/hooks/silent/useSQRequest.ts",children:"useSQRequest"})," Implement immediate response requests in middleware without waiting."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/packages/client/src/hooks/serial/useSerialRequest.ts",children:"useSerialRequest"})," Serialize requests in middleware and manage response data for multiple requests."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/packages/client/src/hooks/useRetriableRequest.ts",children:"useRetriableRequest"})," Retry failed requests in middleware."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/next/tutorial/project/best-practice/middleware",children:"Delayed update loading"})," example."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"interceptor",children:"Interceptor"}),"\n",(0,o.jsx)(t.p,{children:"Interceptors control global pre- and post-request behaviors. We can wrap global interceptors to implement interceptors with specific functions."}),"\n",(0,o.jsx)(t.p,{children:"The following is an example that interrupts all ongoing requests under certain conditions."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const methodsAborter = (handler, detector) => {\n  let requestingMethods = [];\n  // Return the pre-request interceptor\n  return method => {\n    if (detector()) {\n      requestingMethods.forEach(method => {\n        method.abort();\n      });\n      return;\n    }\n    requestingMethods.push(method);\n    method.promise\n      ?.then(() => {\n        requestingMethods = requestingMethods.filter(item => item !== method);\n      })\n      .catch(() => {}); // Prevent errors from being thrown\n    handler(method);\n  };\n};\n\ncreateAlova({\n  beforeRequest: methodsAborter(\n    method => {\n      // Original pre-request hook\n    },\n    () => {\n      // Interrupt request judgment condition\n      return false;\n    }\n  )\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["A more complex example, ",(0,o.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/packages/client/src/functions/tokenAuthentication/createTokenAuthentication.ts",children:"token Authentication interceptor"})]}),"\n",(0,o.jsx)(t.h2,{id:"usehook",children:"useHook"}),"\n",(0,o.jsx)(t.p,{children:"useHook is the most commonly used request strategy of alova, and it is cross-UI framework. When you write useHook for a specific UI framework, you can write it just like ordinary useHook. Here we mainly understand the useHook writing across UI frameworks."}),"\n",(0,o.jsxs)(t.p,{children:["We innovatively use ",(0,o.jsx)(t.strong,{children:"state proxy"})," to smooth out the differences in UI framework states. Its usage is similar to Vue's ref value. You only need to simply access the v attribute or assign a value to the v attribute, and you no longer need to care about the differences in UI frameworks."]}),"\n",(0,o.jsxs)(t.p,{children:["In order to smooth out the differences in state proxies, we provide the ",(0,o.jsx)(t.code,{children:"statesHookHelper"})," function to create auxiliary functions, and use these auxiliary functions to implement useHook across UI frameworks."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"import { statesHookHelper } from '@alova/shared/function';\nimport { promiseStatesHook } from 'alova';\n\nfunction myUseHook(methodHandler, options) {\n  const {\n    create,\n    computed,\n    ref,\n    onMounted,\n    onUnmount,\n    watch,\n    objectify,\n    exposeProvider,\n    __referingObj\n  } = statesHookHelper(promiseStatesHook());\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"Next, let's take a closer look at them."}),"\n",(0,o.jsx)(t.h3,{id:"create-a-state",children:"Create a state"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"create"})," to create a UI framework-independent state proxy FrameworkState, taking the loading state as an example."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"// Parameter 1: initial value\n// Parameter 2: export key\nconst loading = create(false, 'loading');\n\n// Get the original value\nconst dehydratedLoading = loading.v;\n// Update the state value\nloading.v = true;\n// Get the export value, call `statesHook.export` to export the value internally\nconst exportedLoading = loading.e;\n// Get the platform-related state value created by statesHook.create\nconst platformedState = loading.s;\n"})}),"\n",(0,o.jsx)(t.h3,{id:"create-a-computed-value",children:"Create a computed value"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"computed"})," to create a UI framework-independent computed value. In order to be compatible with react, you need to pass in the computed value dependency, which can be a platform-related state value and FrameworkState."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"// Parameter 1: Function of computed value\n// Parameter 2: Computed property dependency\n// Parameter 3: Export key\nconst computedState = computed(() => !loading.v, [loading], 'states');\n\n// Get the original value\nconst dehydratedComputedState = computedState.v;\n// Get the exported value, call `statesHook.export` to export the value internally\nconst exportedComputedState = computedState.e;\n// Get the platform-related state value created by statesHook.computed\nconst platformedComputedState = computedState.s;\n"})}),"\n",(0,o.jsx)(t.h3,{id:"create-reference-value",children:"Create reference value"}),"\n",(0,o.jsxs)(t.p,{children:["It is mainly used to cross the closure trap of react, call ",(0,o.jsx)(t.code,{children:"useRef"})," internally, and other frameworks directly return ",(0,o.jsx)(t.code,{children:"{ current: value }"})," objects, which are accessed and updated through ",(0,o.jsx)(t.code,{children:"unifiedValue.current"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const unifiedValue = ref({});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"component-mounting-hook",children:"Component mounting hook"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"onMounted(() => {});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"component-uninstallation-hook",children:"Component uninstallation hook"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"onUnmount(() => {});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"monitor-state-changes",children:"Monitor state changes"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"// Parameter 1: Monitor item, used for compatibility with react, can pass platform-related state values \u200b\u200band FrameworkState\n// Parameter 2: Callback function\nwatch([loading, computedState.e], () => {});\n"})}),"\n",(0,o.jsx)(t.h3,{id:"state-objectification",children:"State objectification"}),"\n",(0,o.jsxs)(t.p,{children:["Convert the state proxy array unrelated to the UI framework into a state object, generally used with ",(0,o.jsx)(t.code,{children:"exposeProvider"}),", with key as the key, and the second parameter can also specify the value of the object."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"const states = objectify([loading, data, error]);\n/* The value of states is\n{\nloading: loading,\ndata: data,\nerror: error\n}\n*/\n\nconst states = objectify([loading, data, error], 's');\n/* The value of states is\n{\nloading: loading.s,\ndata: data.s,\nerror: error.s\n}\n*/\n"})}),"\n",(0,o.jsx)(t.h3,{id:"expose-internal-data",children:"Expose internal data"}),"\n",(0,o.jsxs)(t.p,{children:["If the internal information of useHook is exported directly, it will become unusable, so ",(0,o.jsx)(t.code,{children:"exposeProvider"})," is provided for export, which will automatically help us handle the following:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Automatically convert the state proxy to the state of the corresponding UI framework."}),"\n",(0,o.jsx)(t.li,{children:"Provide a unified update function. If the incoming parameters include the states and update functions returned by useRequest, they will also be automatically compatible with these."}),"\n",(0,o.jsx)(t.li,{children:"In react, functions that do not start with on are wrapped with memorize, and those that have been wrapped are no longer wrapped."}),"\n",(0,o.jsx)(t.li,{children:"Functions that start with on are considered event binding functions and will be directly added to the export object."}),"\n",(0,o.jsx)(t.li,{children:"Export a unified referringObject."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The following is an export example of ",(0,o.jsx)(t.code,{children:"usePagination"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"export const usePagination = (/* ... */) => {\n  return exposeProvider({\n    // Return object of useWatcher in current useHook\n    ...useWatcherReturns,\n\n    // State array to object\n    ...objectify([page, pageSize, data, pageCount, total, isLastPage]),\n\n    // Operation function\n    reset: () => {\n      // ...\n    },\n\n    // Event binding function\n    onFetchSuccess: fetchState.onSuccess\n    // ...\n  });\n};\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"__referingobj-description",children:[(0,o.jsx)(t.code,{children:"__referingObj"})," Description"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"__referingObj"})," is for compatibility with options style and class style UI frameworks. It is a common reference object used to synchronize the component objects of options and class style, so that the corresponding component objects can be accessed in statesHook. The same referingObj object needs to be used in the custom useHook to ensure that the states in a useHook can access the same component object.\n",(0,o.jsx)(t.code,{children:"__referingObj"})," will be created and returned in ",(0,o.jsx)(t.code,{children:"statesHookHelper"}),", and no specific processing is required. Just export it as follows."]}),"\n",(0,o.jsx)(t.p,{children:"When the alova core hook is used in the scene hook, pass this object into the hook and ensure that it is exported in this useHook."}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"If referingObj is not passed in, the core hook will be automatically created internally"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"\nexport const useXXX = (...) => {\nconst {__referingObj,\n// ...\n} = statesHookHelper(promiseStatesHook());\n\nconst states = useReqest(methodHandler, {\n__referingObj\n});\n\nreturn {\n// ...\n__referingObj,\n}\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"When the alova core hook is not used in the scene hook, the referingObj object is exported directly in this useHook."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"export const useXXX = (/* ... */) => {\n  const {\n    __referingObj\n    // ...\n  } = statesHookHelper(promiseStatesHook());\n  // ...\n\n  return {\n    // ...\n    __referingObj\n  };\n};\n"})}),"\n",(0,o.jsxs)(t.p,{children:["When you use ",(0,o.jsx)(t.code,{children:"exposeProvider"})," to export information, it will automatically export ",(0,o.jsx)(t.code,{children:"__referingObj"})," without us having to handle it manually."]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(67294);const a={},r=o.createContext(a);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);