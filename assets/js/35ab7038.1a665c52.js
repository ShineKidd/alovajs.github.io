"use strict";(self.webpackChunkalova_website=self.webpackChunkalova_website||[]).push([[631],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>m});var a=t(7294);function s(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){s(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,a,s=function(n,e){if(null==n)return{};var t,a,s={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(s[t]=n[t]);return s}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(s[t]=n[t])}return s}var r=a.createContext({}),d=function(n){var e=a.useContext(r),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=d(n.components);return a.createElement(r.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(n,e){var t=n.components,s=n.mdxType,o=n.originalType,r=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),u=d(t),m=s,f=u["".concat(r,".").concat(m)]||u[m]||c[m]||o;return t?a.createElement(f,l(l({ref:e},p),{},{components:t})):a.createElement(f,l({ref:e},p))}));function m(n,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var r in e)hasOwnProperty.call(e,r)&&(i[r]=e[r]);i.originalType=n,i.mdxType="string"==typeof n?n:s,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},298:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=t(7462),s=(t(7294),t(3905));const o={},l=void 0,i={unversionedId:"example-code/safer-ptimistic-update",id:"example-code/safer-ptimistic-update",title:"safer-ptimistic-update",description:"@file App.vue",source:"@site/docs/example-code/safer-ptimistic-update.md",sourceDirName:"example-code",slug:"/example-code/safer-ptimistic-update",permalink:"/example-code/safer-ptimistic-update",draft:!1,editUrl:"https://github.com/alovajs/alovajs.github.io/tree/main/docs/templates/shared/docs/example-code/safer-ptimistic-update.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"prefetch",permalink:"/example-code/prefetch"},next:{title:"storage-placeholder",permalink:"/example-code/storage-placeholder"}},r={},d=[],p={toc:d};function c(n){let{components:e,...t}=n;return(0,s.kt)("wrapper",(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"::: vue-playground Click right btn to view code"),(0,s.kt)("p",null,"@file App.vue"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <span>{{\n    loading\n      ? \'Loading...\'\n      : \'Mouse move to items below, it will prefetch detail data.\'\n  }}</span>\n  <div>\n    <button @click="handleStudentAdd">Add student</button>\n  </div>\n  <ul v-if="students.length > 0" class="list">\n    <li class="title">\n      <span class="id">ID</span>\n      <span class="name">Name</span>\n      <span>Class</span>\n    </li>\n    <li v-for="item in students" :key="item.id">\n      <span class="id">{{ item.id || \'--\' }}</span>\n      <span class="name">{{ item.name }}</span>\n      <span>{{ item.cls }}</span>\n    </li>\n  </ul>\n\n  <detail v-model:show="showDetail"></detail>\n  <div id="request-console">\n    <strong>List data update records</strong>\n    <div></div>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from \'vue\';\nimport { queryStudents } from \'./api.js\';\nimport { useRequest, useFetcher } from \'alova\';\nimport Detail from \'./Detail.vue\';\n\nconst showDetail = ref(false);\nconst viewingId = ref(0);\nconst { loading, data: students } = useRequest(() => queryStudents(), {\n  initialData: [],\n  immediate: true,\n});\n\nconst handleStudentAdd = () => {\n  showDetail.value = true;\n};\n<\/script>\n\n<style scoped>\n.list {\n  padding: 0;\n  border-top: solid 1px #ddd;\n}\n.list li {\n  list-style-type: none;\n  padding: 10px 0;\n  border-bottom: solid 1px #ddd;\n  display: flex;\n}\n.list .title {\n  background: #eee;\n  font-weight: bolder;\n}\n.list li .id {\n  width: 60px;\n}\n.list li .name {\n  width: 100px;\n}\n\n#request-console {\n  width: 90%;\n  padding: 10px;\n  box-sizing: border-box;\n  box-shadow: 1px 1px 20px #ddd;\n  position: fixed;\n  left: 5%;\n  bottom: 10px;\n  z-index: 100;\n  background: white;\n  height: 100px;\n  overflow: auto;\n}\n#request-console > div {\n  color: #999;\n}\n</style>\n\n')),(0,s.kt)("p",null,"@file api.js"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { createAlova } from 'alova';\nimport VueHook from 'alova/vue';\nimport { createAlovaMockAdapter, defineMock } from '@alova/mock';\n\n// mock data.\nconst mockData = defineMock({\n  '/query-students': () => allStudents,\n  '[POST]/student': ({ data }) => {\n    const newId = allStudents.length + 1;\n    allStudents.unshift({\n      id: newId,\n      ...data,\n    });\n    return { newId };\n  },\n});\n\nconst alovaInst = createAlova({\n  baseURL: 'http://example.com',\n  statesHook: VueHook,\n  requestAdapter: createAlovaMockAdapter([mockData], { delay: 1500 }),\n  responsed: (response) => response.json(),\n});\n\nexport const queryStudents = (studentName, clsName) =>\n  alovaInst.Get('/query-students', {\n    name: 'student-list',\n    params: { studentName, clsName },\n  });\nexport const addStudent = (studentData) =>\n  alovaInst.Post('/student', studentData);\n\nconst allStudents = [\n  {\n    id: 1,\n    name: 'August',\n    cls: 'class 1',\n    age: 14,\n    sex: 'male',\n  },\n  {\n    id: 2,\n    name: 'Marshall',\n    cls: 'class 3',\n    age: 13,\n    sex: 'male',\n  },\n  {\n    id: 3,\n    name: 'Maxwell',\n    cls: 'class 1',\n    age: 15,\n    sex: 'female',\n  },\n  {\n    id: 4,\n    name: 'Kevin',\n    cls: 'class 1',\n    age: 15,\n    sex: 'male',\n  },\n  {\n    id: 5,\n    name: 'Julian',\n    cls: 'class 2',\n    age: 12,\n    sex: 'female',\n  },\n  {\n    id: 6,\n    name: 'Maxwell',\n    cls: 'class 2',\n    age: 17,\n    sex: 'female',\n  },\n  {\n    id: 7,\n    name: 'August',\n    cls: 'class 1',\n    age: 15,\n    sex: 'male',\n  },\n];\n\n")),(0,s.kt)("p",null,"@file Detail.vue"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <div v-if="show" class="detail-modal">\n    <div class="modal-mask" @click="emit(\'update:show\', false)"></div>\n    <div class="modal-body">\n      <div class="detail-wrapper">\n        <span class="title">Add student</span>\n        <span>\n          <label>Name: </label>\n          <input v-model="name" />\n        </span>\n        <span>\n          <label>Class: </label>\n          <select v-model="cls">\n            <option value="class 1">class 1</option>\n            <option value="class 2">class 2</option>\n            <option value="class 3">class 3</option>\n          </select>\n        </span>\n        <span>\n          <label>Age: </label>\n          <select v-model="age">\n            <option v-for="(_, i) in 5" :value="i + 12">{{ i + 12 }}</option>\n          </select>\n        </span>\n        <span>\n          <label>Sex: </label>\n          <select v-model="sex">\n            <option value="male">male</option>\n            <option value="female">female</option>\n          </select>\n        </span>\n        <button @click="submitStudent" :disabled="loading">Submit</button>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script setup>\nimport { defineProps, watchEffect, defineEmits, ref } from \'vue\';\nimport { useRequest, updateState } from \'alova\';\nimport { addStudent } from \'./api.js\';\n\nconst props = defineProps({\n  show: {\n    type: Boolean,\n    required: true,\n  },\n});\nconst emit = defineEmits([\'update:show\']);\n\nconst name = ref(\'\');\nconst cls = ref(\'class 1\');\nconst age = ref(12);\nconst sex = ref(\'male\');\nconst studentData = () => ({\n  name: name.value,\n  cls: cls.value,\n  age: age.value,\n  sex: sex.value,\n});\n\nconst consoleListDataUpdateRecord2Panel = (content) => {\n  const consoleDiv = document.querySelector(\'#request-console div\');\n  const elDiv = document.createElement(\'div\');\n  elDiv.appendChild(document.createTextNode(content));\n  consoleDiv.appendChild(elDiv);\n  elDiv.scrollIntoView(false);\n};\n\nconst {\n  loading,\n  send: sendStudentAdd,\n  onSuccess,\n} = useRequest(() => addStudent(studentData()), {\n  immediate: false,\n  silent: true,\n});\nonSuccess(() => {\n  updateState(\'student-list\', (studentList) => {\n    studentList.unshift({\n      // delayed data update.\n      \'+id\': ({ newId }) => {\n        consoleListDataUpdateRecord2Panel(\n          \'Update the id of newest student, now it has the id where from server\'\n        );\n        return newId;\n      },\n      ...studentData(),\n    });\n\n    consoleListDataUpdateRecord2Panel(\n      \'Add new student data to list without id\'\n    );\n    return studentList;\n  });\n});\n\nconst submitStudent = () => {\n  if (!name.value) {\n    alert(\'Please input student name\');\n    return;\n  }\n  sendStudentAdd();\n  emit(\'update:show\', false);\n};\n<\/script>\n\n<style scoped>\n.detail-modal {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n}\n.modal-mask {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n}\n.modal-body {\n  width: 80%;\n  background-color: white;\n  z-index: 20;\n  position: absolute;\n  left: 10%;\n  top: 5%;\n  padding: 20px;\n  box-sizing: border-box;\n}\n.modal-body label {\n  display: inline-block;\n  width: 60px;\n}\n.loading {\n  font-size: 20px;\n  font-weight: bolder;\n  text-align: center;\n  margin-top: 20px;\n}\n.detail-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.detail-wrapper > span {\n  margin-bottom: 6px;\n}\n.title {\n  font-weight: bolder;\n  margin-bottom: 10px;\n  font-size: 20px;\n}\n</style>\n\n')),(0,s.kt)("p",null,"@import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "imports": {\n    "alova": "https://unpkg.com/alova/dist/alova.esm.js",\n    "alova/GlobalFetch": "https://unpkg.com/alova/dist/adapter/globalfetch.esm.js",\n    "alova/vue": "https://unpkg.com/alova/dist/hooks/vuehook.esm.js",\n    "@alova/mock": "https://unpkg.com/@alova/mock/dist/alova-mock.esm.js"\n  }\n}\n')),(0,s.kt)("p",null,":::"))}c.isMDXComponent=!0}}]);