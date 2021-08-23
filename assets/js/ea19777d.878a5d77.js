"use strict";(self.webpackChunkscvi_tools_site=self.webpackChunkscvi_tools_site||[]).push([[819],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6342:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"totalvi",title:"Total Variational Inference",sidebar_label:"totalVI (CITE-seq)"},s={unversionedId:"totalvi",id:"totalvi",isDocsHomePage:!1,title:"Total Variational Inference",description:"This page is under construction. For now, please learn more about totalVI in our user guide.",source:"@site/get_started/totalvi.md",sourceDirName:".",slug:"/totalvi",permalink:"/get_started/totalvi",editUrl:"https://github.com/YosefLab/scvi-tools-site/get_started/totalvi.md",version:"current",sidebar_label:"totalVI (CITE-seq)",frontMatter:{id:"totalvi",title:"Total Variational Inference",sidebar_label:"totalVI (CITE-seq)"},sidebar:"get_started",previous:{title:"scANVI",permalink:"/get_started/scanvi"},next:{title:"Model construction",permalink:"/get_started/construction"}},c=[],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page is under construction. For now, please learn more about totalVI in our ",(0,a.kt)("a",{parentName:"p",href:"https://docs.scvi-tools.org/en/stable/user_guide/index.html"},"user guide"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# totalVI is for end-to-end analysis of CITE-seq data\nimport anndata\nimport scvi\n\n# read data and prepare for scvi-tools\nadata = anndata.read("my_data.h5ad")\nscvi.data.setup_anndata(adata, protein_expression_obsm_key="proteins")\nmodel = scvi.model.TOTALVI(adata)\nmodel.train()\n\n# get integrated low-dimensional representation\nadata.obsm["X_totalvi"] = model.get_latent_representation()\n\n# normalized expression\nadata.layers["totalvi_norm"], adata.obsm["totalvi_pro_norm"] = model.get_normalized_expression()\n\n# differential expression\nresults = model.differential_expression(\n    groupby="cell types",\n    group1="CD4",\n    group2="CD8"\n)\n')))}p.isMDXComponent=!0}}]);