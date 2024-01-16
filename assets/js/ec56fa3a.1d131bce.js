"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[7266],{1452:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=n(5893),a=n(1151),s=n(4866),o=n(5162);const i={title:"Typescript",sidebar_position:170},l=void 0,d={id:"tutorial/getting-started/typescript",title:"Typescript",description:"In terms of Typescript, we have indeed spent a lot of energy on optimization in order to provide a better user experience. We try our best to use automatic inference types to reduce your trouble in defining types.",source:"@site/docs/tutorial/02-getting-started/17-typescript.md",sourceDirName:"tutorial/02-getting-started",slug:"/tutorial/getting-started/typescript",permalink:"/tutorial/getting-started/typescript",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/02-getting-started/17-typescript.md",tags:[],version:"current",sidebarPosition:170,frontMatter:{title:"Typescript",sidebar_position:170},sidebar:"tutorialSidebar",previous:{title:"method metadata",permalink:"/tutorial/getting-started/method-metadata"},next:{title:"Use on server side",permalink:"/tutorial/getting-started/server"}},c={},u=[{value:"Automatically infer alova useHooks state type",id:"automatically-infer-alova-usehooks-state-type",level:2},{value:"The type of response data",id:"the-type-of-response-data",level:2},{value:"Case 1",id:"case-1",level:3},{value:"Case 2",id:"case-2",level:3},{value:"The type inferred from the request adapter",id:"the-type-inferred-from-the-request-adapter",level:2},{value:"Global response interceptor parameter type",id:"global-response-interceptor-parameter-type",level:2},{value:"Method configuration object type",id:"method-configuration-object-type",level:2},{value:"request adapter type",id:"request-adapter-type",level:2},{value:"Customize the type of States Hook",id:"customize-the-type-of-states-hook",level:2}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"In terms of Typescript, we have indeed spent a lot of energy on optimization in order to provide a better user experience. We try our best to use automatic inference types to reduce your trouble in defining types."}),"\n",(0,r.jsx)(t.h2,{id:"automatically-infer-alova-usehooks-state-type",children:"Automatically infer alova useHooks state type"}),"\n",(0,r.jsxs)(t.p,{children:["When createAlova creates an alova instance, it will automatically infer the state types created by ",(0,r.jsx)(t.code,{children:"useRequest"}),", ",(0,r.jsx)(t.code,{children:"useWatcher"}),", and ",(0,r.jsx)(t.code,{children:"useFetcher"})," according to the incoming ",(0,r.jsx)(t.code,{children:"statesHook"}),". Currently only supports Vue, React, Svelte."]}),"\n",(0,r.jsx)(t.p,{children:"The following are the state types returned by useHooks by default."}),"\n",(0,r.jsxs)(s.Z,{groupId:"framework",children:[(0,r.jsx)(o.Z,{value:"1",label:"VueHook",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const vueAlova = createAlova({\r\n  statesHook: VueHook\r\n  //...\r\n});\r\nconst {\r\n  loading, // Ref<boolean>\r\n  data, // Ref<{ data: any }>\r\n  error // Ref<Error>\r\n} = useRequest(vueAlova.Get<{ data: any }>('/todo/list'));\n"})})}),(0,r.jsx)(o.Z,{value:"2",label:"ReactHook",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const reactAlova = createAlova({\r\n  statesHook: ReactHook\r\n  //...\r\n});\r\nconst {\r\n  loading, // boolean\r\n  data, // { data: any }\r\n  error // Error\r\n} = useRequest(reactAlova.Get<{ data: any }>('/todo/list'));\n"})})}),(0,r.jsx)(o.Z,{value:"3",label:"SvelteHook",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"const svelteAlova = createAlova({\r\n  statesHook: SvelteHook\r\n  //...\r\n});\r\nconst {\r\n  loading, // Writable<boolean>\r\n  data, // Writable<{ data: any }>\r\n  error // Writable<Error>\r\n} = useRequest(svelteAlova.Get<{ data: any }>('/todo/list'));\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"The type of data will be different according to the response data type specified in different Method instances, let's continue to look down."}),"\n",(0,r.jsx)(t.h2,{id:"the-type-of-response-data",children:"The type of response data"}),"\n",(0,r.jsx)(t.p,{children:"When you specify a type for a data interface, there are two cases."}),"\n",(0,r.jsx)(t.h3,{id:"case-1",children:"Case 1"}),"\n",(0,r.jsxs)(t.p,{children:["When the response data does not need to call ",(0,r.jsx)(t.code,{children:"transformData"})," conversion, specify the type directly through generics"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"interface Todo {\r\n  title: string;\r\n  time: string;\r\n  done: boolean;\r\n}\r\nconst Get = alovaInstance.Get<Todo[]>('/todo/list');\r\nconst { data } = useRequest(Get);\r\n// vue: The type of data is Ref<Todo[]>\r\n// react: The type of data is Todo[]\r\n// svelte: The type of data is Writable<Todo[]>\n"})}),"\n",(0,r.jsx)(t.h3,{id:"case-2",children:"Case 2"}),"\n",(0,r.jsxs)(t.p,{children:["When the response data needs to be transformed by calling ",(0,r.jsx)(t.code,{children:"transformData"})," again, it is necessary to specify the type in the transformation function parameter, and then its return value type will be used as the response data type."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"interface Todo {\r\n  title: string;\r\n  time: string;\r\n  done: boolean;\r\n}\r\nconst Get = alovaInstance.Get('/todo/list', {\r\n  // Write the type to the data parameter, and the headers will automatically infer, you don't need to specify the type\r\n  transformData(data: Todo[], headers) {\r\n    return data.map(item => ({\r\n      ...item,\r\n      status: item.done ? 'Completed' : 'Not completed'\r\n    }));\r\n  }\r\n});\r\n\r\nconst { data } = useRequest(Get);\r\n// vue: The type of data is Ref<(Todo & { status: string })[]>\r\n// react: The type of data is (Todo & { status: string })[]\r\n// svelte: The type of data is Writable<(Todo & { status: string })[]>\n"})}),"\n",(0,r.jsx)(t.admonition,{title:"Caution",type:"warning",children:(0,r.jsx)(t.p,{children:"The response data is converted by the global response interceptor, so when setting the type, it should also be set to the converted type."})}),"\n",(0,r.jsx)(t.h2,{id:"the-type-inferred-from-the-request-adapter",children:"The type inferred from the request adapter"}),"\n",(0,r.jsxs)(t.p,{children:["Because alova supports custom request adapters, and different adapters may have different request configuration objects, response objects, and response headers, the global ",(0,r.jsx)(t.code,{children:"beforeRequest"}),", ",(0,r.jsx)(t.code,{children:"responded"})," interceptors, and the configuration objects when ",(0,r.jsx)(t.code,{children:"Method"})," instances are created The type will be automatically inferred based on the type provided by the request adapter. Let's look at these types first."]}),"\n",(0,r.jsx)(t.p,{children:"Following are the types of GlobalFetch"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"type GlobalFetch = () => (\r\n  elements: RequestElements,\r\n  method: Method<any, any, any, any, RequestInit, Response, Headers>\r\n) => {\r\n  response: () => Promise<Response>,\r\n  headers: () => Promise<Headers>,\r\n  onDownload: (handler: ProgressUpdater) => void,\r\n  abort: () => void\r\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In this type, three types of values ",(0,r.jsx)(t.code,{children:"RC"}),", ",(0,r.jsx)(t.code,{children:"RE"})," and ",(0,r.jsx)(t.code,{children:"RH"})," are respectively specified, so in the global interceptor, method instance configuration, etc., it will be automatically inferred as the type given by the request adapter."]}),"\n",(0,r.jsx)(t.p,{children:"They are respectively expressed as:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"RC"}),": Abbreviation of ",(0,r.jsx)(t.em,{children:"RequestConfig"}),", request configuration object type"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"RH"}),": Abbreviation of ",(0,r.jsx)(t.em,{children:"ResponseHeader"}),", response header object type"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"RE"}),": Abbreviation for ",(0,r.jsx)(t.em,{children:"Response"}),", response type"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If you are using ",(0,r.jsx)(t.strong,{children:"GlobalFetch"}),", their types will be inferred as:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"RC"}),": fetch api request configuration object ",(0,r.jsx)(t.code,{children:"RequestInit"}),";"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"RH"}),": response header object ",(0,r.jsx)(t.code,{children:"Headers"}),";"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"RE"}),": response object ",(0,r.jsx)(t.code,{children:"Response"}),";"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"global-response-interceptor-parameter-type",children:"Global response interceptor parameter type"}),"\n",(0,r.jsxs)(t.p,{children:["The global response interceptor ",(0,r.jsx)(t.code,{children:"responded"})," receives two parameters:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The first one is the response data, its type is the response object ",(0,r.jsx)(t.strong,{children:"RE"}),";"]}),"\n",(0,r.jsx)(t.li,{children:"The second is the method instance of the current request, you can get the parameters of this request, or use it as the data transfer context before and after the request;"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"type RespondedHandler<R, T, RC, RE, RH> = (response: RE, methodInstance: Method<any, any, R, T, RC, RE, RH>) => any;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["When the request adapter uses ",(0,r.jsx)(t.code,{children:"GlobalFetch"}),", ",(0,r.jsx)(t.strong,{children:"RE"})," will be automatically inferred to be of type ",(0,r.jsx)(t.code,{children:"Response"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"method-configuration-object-type",children:"Method configuration object type"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"/**\r\n  * request cache settings\r\n  * expire: expiration time\r\n  * 1. When set to a number: if it is greater than 0, the cached data will be returned first, and the expiration time unit is milliseconds, if it is less than or equal to 0, it will not be cached, and Infinity will never expire;\r\n  * 2. When set to a Date object, it means\r\n  * mode: cache mode, optional values are memory, placeholder, restore\r\n  */\r\ntype CacheExpire = number | Date;\r\ntypeDetailLocalCacheConfig = {\r\n   expire: CacheExpire;\r\n   mode?: 'memory' | 'placeholder' | 'restore';\r\n\r\n   /** Persistent cache tag, the original persistent data will be invalid after the tag is changed */\r\n   tag?: string | number;\r\n};\r\ntype LocalCacheConfig = CacheExpire | DetailLocalCacheConfig;\r\n\r\ntype AlovaMethodConfig<R, T, RC, RH> = {\r\n   /** method object name, in the updateState, invalidateCache, setCache, and fetch functions, the corresponding method object can be obtained by name or wildcard */\r\n   name?: string | number;\r\n   params?: Arg;\r\n   headers?: Arg;\r\n\r\n   /** Current interrupt time */\r\n   timeout?: number;\r\n\r\n   /** The response data will not be requested again within the cache time. Get and head requests are kept fresh for 5 minutes (300000 milliseconds) by default, and other requests are not cached by default */\r\n   localCache?: LocalCacheConfig;\r\n\r\n   /**\r\n    * Strike the source method instance, when the source method instance request is successful, the cache of the current method instance will be invalidated\r\n    * As an automatic invalidation function, you only need to set the strike source instead of manually calling invalidateCache to invalidate the cache\r\n    * At the same time, this function is more concise than the invalidateCache method in the intricate invalidation relationship\r\n    * The value of this field can be set as a method instance, the name of other method instances, a name regular match, or an array of them\r\n    */\r\n   hitSource?: string | RegExp | Method | (string | RegExp | Method)[];\r\n\r\n   /** Whether to enable the download progress information, after enabling it, each time the progress is requested, there will be a progress value, otherwise it will be 0, and it will not be enabled by default */\r\n   enableDownload?: boolean;\r\n\r\n   /** Whether to enable the upload progress information, the progress value will be available every time the progress is requested after enabling, otherwise the value is 0, and it is not enabled by default */\r\n   enableUpload?: boolean;\r\n\r\n   /** Response data conversion, the converted data will be converted to the data state, if there is no converted data, the response data will be directly used as the data state */\r\n   transformData?: (data: T, headers: RH) => R;\r\n} & RC;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In the Method configuration object, it contains the union of general configuration parameters and ",(0,r.jsx)(t.strong,{children:"RC"})," inferred from the request adapter. When the request adapter uses ",(0,r.jsx)(t.strong,{children:"GlobalFetch"}),", ",(0,r.jsx)(t.strong,{children:"RC"})," will be automatically inferred as ",(0,r.jsx)(t.code,{children:"RequestInit"})," type ."]}),"\n",(0,r.jsx)(t.h2,{id:"request-adapter-type",children:"request adapter type"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"interface RequestElements {\r\n  readonly url: string;\r\n  readonly type: MethodType;\r\n  readonly headers: Arg;\r\n  readonly data?: RequestBody;\r\n}\r\ntype ProgressUpdater = (loaded: number, total: number) => void;\r\ntype AlovaRequestAdapter<R, T, RC, RE, RH> = (\r\n  elements: RequestElements,\r\n  method: Method<any, any, R, T, RC, RE, RH>\r\n) => {\r\n  response: () => Promise<RE>;\r\n  headers: () => Promise<RH>;\r\n  onDownload?: (handler: ProgressUpdater) => void;\r\n  onUpload?: (handler: ProgressUpdater) => void;\r\n  abort: () => void;\r\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["It should be noted that if the ",(0,r.jsx)(t.strong,{children:"RC"}),", ",(0,r.jsx)(t.strong,{children:"RE"}),", ",(0,r.jsx)(t.strong,{children:"RH"})," types need to be automatically inferred in alova, then no generics should be specified on the request adapter, otherwise it will cause type inference errors."]}),"\n",(0,r.jsxs)(t.p,{children:["Take ",(0,r.jsx)(t.strong,{children:"GlobalFetch"})," as an example."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/alovajs/alova/blob/main/src/predefine/GlobalFetch.ts",children:"GlobalFetch source code click here to view"})}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"type GlobalFetch = (defaultRequestInit?: RequestInit) => (\r\n  adapterConfig: AlovaRequestAdapterConfig<unknown, unknown, RequestInit, Headers>\r\n) => {\r\n  response: () => Promise<Response>;\r\n  headers: () => Promise<Headers>;\r\n  onDownload: (handler: (total: number, loaded: number) => void) => void;\r\n  abort: () => void;\r\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"customize-the-type-of-states-hook",children:"Customize the type of States Hook"}),"\n",(0,r.jsx)(t.p,{children:"Ccming soon..."})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var r=n(4334);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>R});var r=n(7294),a=n(4334),s=n(2466),o=n(6550),i=n(469),l=n(1980),d=n(7392),c=n(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[d,u]=f({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),y=(()=>{const e=d??m;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{y&&l(y)}),[y]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(d(t),o(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function R(e){const t=(0,b.Z)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(7294);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);