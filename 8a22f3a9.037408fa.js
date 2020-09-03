(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{74:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(85)),c={id:"errors",title:"API Errors"},b={unversionedId:"errors",id:"errors",isDocsHomePage:!1,title:"API Errors",description:"The following error codes exist among the methods of the ARGO Web API:",source:"@site/docs/errors.md",permalink:"/argo-web-api/docs/errors",sidebar:"someSidebar",previous:{title:"API Validations",permalink:"/argo-web-api/docs/validations"}},i=[],l={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The following error codes exist among the methods of the ARGO Web API:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Error"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"HTTP Code"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bad request"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"One or more checks may have failed. More details on the carried out checks can be found ",Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/argo-web-api/docs/validations"}),"here"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wrong start_time"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Use start_time url parameter in zulu format (like ",Object(o.b)("inlineCode",{parentName:"td"},"2006-01-02T15:04:05Z"),") to indicate the query start time")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wrong end_time"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Use end_time url parameter in zulu format (like ",Object(o.b)("inlineCode",{parentName:"td"},"2006-01-02T15:04:05Z"),") to indicate the query end time")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wrong exec_time"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Use exec_time url parameter in zulu format (like ",Object(o.b)("inlineCode",{parentName:"td"},"2006-01-02T15:04:05Z"),") to indicate the exact probe execution time")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Wrong granularity"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The parameter value can be either ",Object(o.b)("inlineCode",{parentName:"td"},"daily")," or ",Object(o.b)("inlineCode",{parentName:"td"},"monthly"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unauthorized"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"401"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The client needs to provide a correct authentication token using the header ",Object(o.b)("inlineCode",{parentName:"td"},"x-api-key"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Forbidden"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"403"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Access to the resource is forbidden due to authorization policy enforced")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Item not found"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"404"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Either the path is not found or no results are available for the given query")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Content not acceptable"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"406"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ",Object(o.b)("inlineCode",{parentName:"td"},"Accept")," header either was not provided or was provided but did not contain any valid content types. Acceptable content types are ",Object(o.b)("inlineCode",{parentName:"td"},"application/xml")," or ",Object(o.b)("inlineCode",{parentName:"td"},"application/json"))))))}p.isMDXComponent=!0},85:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),O=n,m=d["".concat(c,".").concat(O)]||d[O]||u[O]||o;return r?a.a.createElement(m,b(b({ref:t},l),{},{components:r})):a.a.createElement(m,b({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);