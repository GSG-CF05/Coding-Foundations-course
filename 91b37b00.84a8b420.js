(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(225)),i={},c={unversionedId:"Week 05/session-12/homework",id:"Week 05/session-12/homework",isDocsHomePage:!1,title:"homework",description:"HomeWork :",source:"@site/../coursebook/Week 05/session-12/homework.md",slug:"/Week 05/session-12/homework",permalink:"/Fundamentals-course/Week 05/session-12/homework",editUrl:"https://github.com/gazaskygeeks/Fundamentals-course/edit/master/website/../coursebook/Week 05/session-12/homework.md",version:"current",sidebar:"someSidebar",previous:{title:"functions-scopes",permalink:"/Fundamentals-course/Week 05/session-12/functions-scopes"},next:{title:"intro-to-functions",permalink:"/Fundamentals-course/Week 05/session-12/intro-to-functions"}},u=[{value:"HomeWork :",id:"homework-",children:[]}],s={toc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"homework-"},"HomeWork :"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Write a function to calculate compound tax using the following table:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"For $10 and under, the tax rate should be 10%."),Object(a.b)("li",{parentName:"ul"},"For $20 and under, the tax rate on the first $10 is %10, and the tax on the rest is 7%."),Object(a.b)("li",{parentName:"ul"},"For $30 and under, the tax rate on the first $10 is still %10, the rate for the next $10 is still 7%, and everything else is 5%."),Object(a.b)("li",{parentName:"ul"},"Tack on an additional 3% for the portion of the total above $30."),Object(a.b)("li",{parentName:"ul"},"Return 0 for invalid input(anything that's not a positive real number).")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Examples:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"An input of 10, should return 1 (1 is 10% of 10)."),Object(a.b)("li",{parentName:"ul"},"An input of 21, should return 1.75 (10% of 10 + 7% of 10 + 5% of 1).")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Notes:")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"the returned value should be rounded to the nearest penny."),Object(a.b)("li",{parentName:"ul"},"solve Tax Calculator kata ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.codewars.com/kata/56314d3c326bbcf386000007"}),"here"),".")))}l.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(i,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);