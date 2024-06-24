"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[1487],{72565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(85893),o=n(11151),s=n(52991);const i={title:"Server Strategy"},a=void 0,c={id:"tutorial/server/strategy/README",title:"Server Strategy",description:"Like using a component library, you can learn it when you need a specific request strategy!",source:"@site/docs/tutorial/04-server/01-strategy/README.md",sourceDirName:"tutorial/04-server/01-strategy",slug:"/tutorial/server/strategy/",permalink:"/next/tutorial/server/strategy/",draft:!1,unlisted:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/blob/main/docs/tutorial/04-server/01-strategy/README.md",tags:[],version:"current",frontMatter:{title:"Server Strategy"},sidebar:"tutorial",previous:{title:"Manage Extra states",permalink:"/next/tutorial/client/in-depth/manage-extra-states"},next:{title:"Request retry strategy",permalink:"/next/tutorial/server/strategy/retry"}},l={},u=[{value:"Table of contents",id:"table-of-contents",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Like using a component library, you can learn it when you need a specific request strategy!"}),"\n",(0,r.jsx)(t.p,{children:"The following is the specification of server hooks, which receives a method instance and returns a new method instance, so it is very convenient to combine multiple server hooks."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"/**\n * Server hook model, representing the types of all server hooks.\n * Pass a method or hooked method instance, set options, and return a hooked method instance.\n * You can continue to modify this method to achieve the effect of combining multiple server hooks.\n */\nexport interface AlovaServerHook<Options extends Record<string, any>> {\n  (method: Method, options: Options): Method;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,r.jsx)(s.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},52991:(e,t,n)=>{n.d(t,{Z:()=>v});n(67294);var r=n(90512),o=n(53438),s=n(33692),i=n(88824),a=n(13919),c=n(95999),l=n(92503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function h(e){let{href:t,children:n}=e;return(0,d.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:o,description:s}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),s&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const n=(0,o.LM)(t),r=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.jA)();return(0,d.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,o.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},88824:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(67294),o=n(52263);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);