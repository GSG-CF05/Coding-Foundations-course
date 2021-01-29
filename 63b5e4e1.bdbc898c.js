(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{136:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),c=(r(0),r(225)),o={},s={unversionedId:"Week 05/session-13/exercises",id:"Week 05/session-13/exercises",isDocsHomePage:!1,title:"exercises",description:"Exercises",source:"@site/../coursebook/Week 05/session-13/exercises.md",slug:"/Week 05/session-13/exercises",permalink:"/Fundamentals-course/Week 05/session-13/exercises",editUrl:"https://github.com/gazaskygeeks/Fundamentals-course/edit/master/website/../coursebook/Week 05/session-13/exercises.md",version:"current",sidebar:"someSidebar",previous:{title:"README",permalink:"/Fundamentals-course/Week 05/session-13/README"},next:{title:"javascript-objects",permalink:"/Fundamentals-course/Week 05/session-13/javascript-objects"}},i=[{value:"Exercises",id:"exercises",children:[]}],l={toc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"exercises"},"Exercises"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Write a JavaScript program to list the properties of a JavaScript object.")),Object(c.b)("p",null,"Sample object:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'var student = {\n  name: "David Rayy",\n  sclass: "VI",\n  rollno: 12,\n};\n')),Object(c.b)("p",null,"Sample Output:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"name,sclass,rollno\n")),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"Write a JavaScript program to delete the ",Object(c.b)("inlineCode",{parentName:"li"},"rollno")," property from the following object. Also print the object before and after deleting the property.")),Object(c.b)("p",null,"Sample object:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'var student = {\n  name: "David Rayy",\n  sclass: "VI",\n  rollno: 12,\n};\n')),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Write a JavaScript program to get the length of a JavaScript object properties.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Write a JavaScript function to retrieve all the values of an object's properties.\nSample object:"))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'var country = {\n  name: "France",\n  capital: "Paris",\n};\n')),Object(c.b)("p",null,"Sample Output:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'["France", "Paris"];\n')),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Write a JavaScript function to check whether an object contains given property.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys."))),Object(c.b)("p",null,"Sample Object:"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'var colors = {\n  red: "#FF0000",\n  green: "#00FF00",\n  white: "#FFFFFF",\n};\n')),Object(c.b)("p",null,"Sample Output"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "#FF0000": "red",\n  "#00FF00": "green",\n  "#FFFFFF": "white"\n}\n')))}p.isMDXComponent=!0},225:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return j}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),b=p(r),m=n,j=b["".concat(o,".").concat(m)]||b[m]||u[m]||c;return r?a.a.createElement(j,s(s({ref:t},l),{},{components:r})):a.a.createElement(j,s({ref:t},l))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);