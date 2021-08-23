"use strict";(self.webpackChunkscvi_tools_site=self.webpackChunkscvi_tools_site||[]).push([[183],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,d=p["".concat(c,".").concat(m)]||p[m]||l[m]||i;return r?n.createElement(d,a(a({ref:t},f),{},{components:r})):n.createElement(d,a({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){r.d(t,{C:function(){return i},Z:function(){return a}});var n=r(2263),o=r(3919);function i(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,s=void 0!==a&&a,c=i.absolute,u=void 0!==c&&c;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(s)return t+r;var f=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+f:f}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},3526:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=(r(4996),["components"]),s={slug:"autotune",title:"Hyperparameter search for scVI",date:new Date("2019-07-05T00:00:00.000Z"),description:"A study of the effects of hyperparameter optimization on scVI models.",author:"Gabriel Misrachi, Jeffrey Regier, Romain Lopez, Nir Yosef"},c={permalink:"/blog/autotune",editUrl:"https://github.com/YosefLab/scvi-tools-site/blog/blog/2019-7-5-Hyperoptimization.md",source:"@site/blog/2019-7-5-Hyperoptimization.md",title:"Hyperparameter search for scVI",description:"A study of the effects of hyperparameter optimization on scVI models.",date:"2019-07-05T00:00:00.000Z",formattedDate:"July 5, 2019",tags:[],readingTime:19.865,truncated:!0,prevItem:{title:"scvi-tools 0.9.0 release",permalink:"/blog/v090"},nextItem:{title:"Should we zero-inflate scVI?",permalink:"/blog/zero-inflation"}},u=[],f={toc:u};function l(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"While stochastic gradient-based optimization is highly successful for setting weights and other differentiable parameters of a neural network, it is in general useless for setting hyperparameters -- non-differentiable parameters that control the structure of the network (e.g. the number of hidden layers, or the dropout rate) or settings of the optimizer itself (e.g., the learning rate schedule). Yet finding good settings for hyperparameters is essential for good performance for deep methods like ",(0,i.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41592-018-0229-2"},"scVI"),". Furthermore, as pointed out by ",(0,i.kt)("a",{parentName:"p",href:"https://www.worldscientific.com/doi/pdf/10.1142/9789813279827_0033?download=true&"},"Hu and Greene (2019)")," selecting hyperparameters is nessary in order to compare different machine learning models, especially if those are substantially sensitive to hyperparameter variations."))}l.isMDXComponent=!0}}]);