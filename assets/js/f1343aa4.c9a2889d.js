"use strict";(self.webpackChunkscvi_tools_site=self.webpackChunkscvi_tools_site||[]).push([[708],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1438:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"get_started",title:"Get started",slug:"/"},s=void 0,c={unversionedId:"get_started",id:"get_started",isDocsHomePage:!1,title:"Get started",description:"scvi-tools (single-cell variational inference tools) is a package for probabilistic modeling of single-cell omics data, built on top of PyTorch and AnnData. The package hosts implementations of models that perform a wide range of single-cell data analysis tasks, as well as the building blocks to rapidly prototype new probabilstic models.",source:"@site/get_started/get_started.md",sourceDirName:".",slug:"/",permalink:"/get_started/",editUrl:"https://github.com/YosefLab/scvi-tools-site/get_started/get_started.md",tags:[],version:"current",frontMatter:{id:"get_started",title:"Get started",slug:"/"},sidebar:"get_started",next:{title:"scVI (scRNA-seq)",permalink:"/get_started/scvi"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Resources",id:"resources",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"scvi-tools")," (single-cell variational inference tools) is a package for probabilistic modeling of single-cell omics data, built on top of PyTorch and AnnData. The package hosts implementations of models that perform a wide range of single-cell data analysis tasks, as well as the building blocks to rapidly prototype new probabilstic models."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"scvi-tools")," can be installed with ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"conda"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pip install scvi-tools\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"conda install scvi-tools -c bioconda -c conda-forge\n")),(0,a.kt)("p",null,"To leverage a GPU for inference, a version of ",(0,a.kt)("a",{parentName:"p",href:"https://pytorch.org/get-started/locally/"},"PyTorch")," that supports your GPU will need to be installed separately."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tutorials, API reference, and advanced installation guides are available in the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.scvi-tools.org/en/stable/"},"docs"),"."),(0,a.kt)("li",{parentName:"ul"},"For discussion of usage, checkout out our ",(0,a.kt)("a",{parentName:"li",href:"https://discourse.scvi-tools.org/"},"forum"),"."),(0,a.kt)("li",{parentName:"ul"},"To report bugs, make an issue on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/YosefLab/scvi-tools/issues"},"GitHub"),".")))}d.isMDXComponent=!0}}]);