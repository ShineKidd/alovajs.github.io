"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[8495],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2872:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={title:"RSM",sidebar_position:30},s=void 0,o={unversionedId:"overview/RSM",id:"overview/RSM",title:"RSM",description:"What is request scene management",source:"@site/docs/01-overview/02-RSM.md",sourceDirName:"01-overview",slug:"/overview/RSM",permalink:"/overview/RSM",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/01-overview/02-RSM.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"RSM",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/overview/index"},next:{title:"Install",permalink:"/overview/installation"}},l={},u=[{value:"What is request scene management",id:"what-is-request-scene-management",level:2},{value:"Request scene model",id:"request-scene-model",level:2},{value:"Request timing",id:"request-timing",level:2},{value:"Request behavior",id:"request-behavior",level:2},{value:"Request event",id:"request-event",level:2},{value:"Response data management",id:"response-data-management",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"what-is-request-scene-management"},"What is request scene management"),(0,r.kt)("p",null,"We always have to think about the following questions when making a request,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When is the request made;"),(0,r.kt)("li",{parentName:"ol"},"Whether to display the request status;"),(0,r.kt)("li",{parentName:"ol"},"Whether to encapsulate it into a request function for repeated calls;"),(0,r.kt)("li",{parentName:"ol"},"How to process the response data;"),(0,r.kt)("li",{parentName:"ol"},"Whether to cache frequently used response data;"),(0,r.kt)("li",{parentName:"ol"},"How to operate data across pages;"),(0,r.kt)("li",{parentName:"ol"},"Can I still submit data when I am offline?"),(0,r.kt)("li",{parentName:"ol"},"...")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fetch")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," tend to focus more on how to interact with the server, but we always need to deal with the above problems by ourselves. These functions that are beneficial to application performance and stability will always allow programmers to write low-maintenance functions. sexual code. The request scene management is to abstract all the links from the preparation of the request to the completion of the response data processing, so as to cover the model of the entire CS interaction life cycle from the perspective of the front end. ",(0,r.kt)("inlineCode",{parentName:"p"},"alova")," is a request scene management library based on the request scene model. It is a supplement to the request library such as ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),", not a replacement."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"CS interaction: refers to all client types and server-side data interaction")),(0,r.kt)("h2",{id:"request-scene-model"},"Request scene model"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/29848971/185773573-761b6153-9e6c-42df-b0b7-beddd405833c.png",alt:"model"})),(0,r.kt)("h2",{id:"request-timing"},"Request timing"),(0,r.kt)("p",null,"Describes when a request needs to be made, implemented as ",(0,r.kt)("inlineCode",{parentName:"p"},"useHook")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"alova"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initialize display data, such as just entering an interface or sub-interface;"),(0,r.kt)("li",{parentName:"ul"},"Human-computer interaction triggers CS interaction, which requires changing data to re-issue requests, such as page turning, filtering, sorting, fuzzy search, etc.;"),(0,r.kt)("li",{parentName:"ul"},"Pre-loading data, such as pre-loading the content of the next page in a pagination, predicting that the user clicks a button to pre-fetch data;"),(0,r.kt)("li",{parentName:"ul"},"To operate server-side data, it is necessary to issue a request for addition, deletion and modification, such as submitting data, deleting data, etc.;"),(0,r.kt)("li",{parentName:"ul"},"Synchronize the status of the server, such as polling requests in scenarios where data changes rapidly, and re-pulling data after operating a certain data;")),(0,r.kt)("h2",{id:"request-behavior"},"Request behavior"),(0,r.kt)("p",null,"Describes how to handle the request, implemented as a method object in ",(0,r.kt)("inlineCode",{parentName:"p"},"alova"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Placeholder request, displaying loading, skeleton diagram, or the last real data used when requesting;"),(0,r.kt)("li",{parentName:"ul"},"Cache high-frequency responses, and execute requests multiple times will use fresh data;"),(0,r.kt)("li",{parentName:"ul"},"Multi-request serial and parallel;"),(0,r.kt)("li",{parentName:"ul"},"Anti-shake for frequent requests, avoid front-end data flashing, and reduce server pressure;"),(0,r.kt)("li",{parentName:"ul"},"Important interface retry mechanism to reduce the probability of request failure caused by network instability;"),(0,r.kt)("li",{parentName:"ul"},"Silent submission, when you only care about submitting data, directly respond to the success event after submitting the request, and the background ensures that the request is successful;"),(0,r.kt)("li",{parentName:"ul"},"Offline submission, temporarily store the submitted data locally when offline, and submit it after network connection;")),(0,r.kt)("h2",{id:"request-event"},"Request event"),(0,r.kt)("p",null,"Indicates that the request is sent with the request parameters, and the response is obtained. ",(0,r.kt)("inlineCode",{parentName:"p"},"alova")," can cooperate with any request library or native solution such as ",(0,r.kt)("inlineCode",{parentName:"p"},"axios"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest"),"."),(0,r.kt)("h2",{id:"response-data-management"},"Response data management"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"alova")," will state the response data and manage it in a unified manner. The response data can be operated anywhere, and the corresponding views can be automatically updated by using the characteristics of the MVVM library."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove the cached response data and pull it from the server when the request is made again;"),(0,r.kt)("li",{parentName:"ul"},"Update cache response data, which can update response data at any location, which is very beneficial to update data across pages;"),(0,r.kt)("li",{parentName:"ul"},"Refresh the response data, which can re-refresh the response data at any location, and is also very beneficial to update data across pages;"),(0,r.kt)("li",{parentName:"ul"},"Custom setting cache, when requesting batch data, you can manually set the cache for batch data one by one, so as to satisfy the cache hit of subsequent single data;")))}p.isMDXComponent=!0}}]);