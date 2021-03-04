(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{109:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var o=a(0),n=a.n(o);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=o,m=p["".concat(r,".").concat(h)]||p[h]||b[h]||i;return a?n.a.createElement(m,s(s({ref:t},c),{},{components:a})):n.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},112:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return r}));var o=a(22),n=a(114);function i(){var e=Object(o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,o){var i=void 0===o?{}:o,r=i.forcePrependBaseUrl,s=void 0!==r&&r,l=i.absolute,c=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(s)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+d:d}(i,a,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},114:function(e,t,a){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!o(e)}a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return n}))},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var o=a(3),n=a(7),i=(a(0),a(109)),r=(a(112),{slug:"v090",title:"scvi-tools 0.9.0 release",date:new Date("2021-03-03T00:00:00.000Z"),author:"Adam Gayoso, Romain Lopez, Galen Xing, Nir Yosef",tags:["scvi-tools","release"]}),s={permalink:"/blog/v090",editUrl:"https://github.com/YosefLab/scvi-tools-site/blog/blog/2021-3-03-scvi-tools-v090.md",source:"@site/blog/2021-3-03-scvi-tools-v090.md",description:"Today we officially released scvi-tools version 0.9.0 (changelog). This release marks the culmination of five months of work on the backend of the codebase, which came after three months of work on the frontend.",date:"2021-03-03T00:00:00.000Z",tags:[{label:"scvi-tools",permalink:"/blog/tags/scvi-tools"},{label:"release",permalink:"/blog/tags/release"}],title:"scvi-tools 0.9.0 release",readingTime:6.11,truncated:!0,nextItem:{title:"Hyperparameter search for scVI",permalink:"/blog/autotune"}},l=[{value:"Taking a step back: the original <code>scvi</code> codebase",id:"taking-a-step-back-the-original-scvi-codebase",children:[]},{value:"Identifying key improvements, creation of <code>scvi-tools</code>",id:"identifying-key-improvements-creation-of-scvi-tools",children:[{value:"Focus on the model",id:"focus-on-the-model",children:[]},{value:"New implementations",id:"new-implementations",children:[]},{value:"Pyro integration",id:"pyro-integration",children:[]},{value:"Template repository",id:"template-repository",children:[]},{value:"New longitudinal features",id:"new-longitudinal-features",children:[]}]},{value:"Next steps",id:"next-steps",children:[]}],c={toc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Today we officially released ",Object(i.b)("inlineCode",{parentName:"p"},"scvi-tools")," version 0.9.0 (",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.scvi-tools.org/en/stable/release_notes/index.html"}),"changelog"),"). This release marks the culmination of five months of work on the backend of the codebase, which came after three months of work on the frontend.\nIn this short note, we officially introduce ",Object(i.b)("inlineCode",{parentName:"p"},"scvi-tools")," as a readily usable codebase that contains many implementations of probabilistic single-cell omics methods, and also features a high-level interface to accelerate the model development process. We start with some historical notes about our previous codebase, which was mostly used for internal developments in the last three years. We then describe the obstacles we found to its external adoption, and the foundational idea behind the new ",Object(i.b)("inlineCode",{parentName:"p"},"scvi-tools")," work: a high-level deep probabilistic programming library specialized for single-cell omics data."),Object(i.b)("h2",{id:"taking-a-step-back-the-original-scvi-codebase"},"Taking a step back: the original ",Object(i.b)("inlineCode",{parentName:"h2"},"scvi")," codebase"),Object(i.b)("p",null,"Many members of the Yosef Lab, and in particular Jeff Regier, Edouard Melhman, Romain, and Adam helped conceive, develop, and maintain the ",Object(i.b)("inlineCode",{parentName:"p"},"scvi")," codebase. The initial philosophy was to make the code available for users to run ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nature.com/articles/s41592-018-0229-2"}),"scVI"),", but also to have a proper codebase for developing novel algorithms for single-cell omics analysis. Over the last three years, we have hosted seven visiting graduate students who wrote their Master's theses in the Yosef Lab by building new functionalities, as well as new algorithms (including ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.embopress.org/doi/full/10.15252/msb.20209620"}),"scANVI"),", ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.biorxiv.org/content/biorxiv/early/2019/10/10/794875.full.pdf"}),"AutoZI")," and ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://arxiv.org/pdf/1905.02269.pdf"}),"gimVI"),") directly into the ",Object(i.b)("inlineCode",{parentName:"p"},"scvi")," codebase. Even our most recent work, such as ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nature.com/articles/s41592-020-01050-x"}),"totalVI")," for CITE-seq modeling, and our ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://papers.nips.cc/paper/2020/file/357a6fdf7642bf815a88822c447d9dc4-Paper.pdf"}),"decision-making procedure")," for differential expression was also developed this way."),Object(i.b)("p",null,"However, our ambition at the time was to solely use this infrastructure for internal developments. Consequently, some mistakes were made, in which we did not make use of the existing single-cell analysis infrastructure. First, we had built manual data formatting boilerplate code to read many different single-cell omics input formats. We also had incorporated customized plotting code while working on the dataset integration problem. Ideally, all these functions would come from another package, such as ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://scanpy.readthedocs.io/en/stable/"}),Object(i.b)("inlineCode",{parentName:"a"},"Scanpy")),". As a second striking example, each algorithm was not straightforward to use as it often required the end user to create multiple objects, such as dataloaders, trainers, and models. This was confusing for the user and also hard to maintain on our end. Indeed, over a year ago we encountered a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/YosefLab/scvi-tools/issues/669"}),"bug")," at ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/theislab/scib/issues/114"}),"benchmarking time"),", in which scVI by default was trained on one single-cell (instead of the whole training set)!"),Object(i.b)("h2",{id:"identifying-key-improvements-creation-of-scvi-tools"},"Identifying key improvements, creation of ",Object(i.b)("inlineCode",{parentName:"h2"},"scvi-tools")),Object(i.b)("p",null,"Even though we were actively branding the ",Object(i.b)("inlineCode",{parentName:"p"},"scvi")," codebase as a framework for creating new probabilistic models, we did not encounter clear success in this area. A notable exception is the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://academic.oup.com/bioinformatics/article/36/11/3418/5807606"}),Object(i.b)("inlineCode",{parentName:"a"},"LDVAE")," model"),", which was the first model in ",Object(i.b)("inlineCode",{parentName:"p"},"scvi")," developed by an external user of the codebase (thanks ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nxn.se/"}),"Valentine"),"!). Later, we became aware of some suboptimal API choices we had made, and decided to work on improving the user experience in order to make the codebase more attractive. At this point in time, Galen joined the Yosef lab and we rethought the foundations of ",Object(i.b)("inlineCode",{parentName:"p"},"scvi-tools"),":"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Host reimplementations of existing methods that are currently difficult to use."),Object(i.b)("li",{parentName:"ol"},"For all methods, provide a consistent and simplified user experience, and provide ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.scvi-tools.org/en/stable/user_guide/user.html"}),"tutorials")," that walkthrough a meaningful application."),Object(i.b)("li",{parentName:"ol"},"Focus on ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://anndata.readthedocs.io/en/latest/"}),Object(i.b)("inlineCode",{parentName:"a"},"AnnData"))," for the input data format (potentially reducing almost half of the code in the codebase), and use ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://scanpy.readthedocs.io/en/stable/"}),Object(i.b)("inlineCode",{parentName:"a"},"Scanpy"))," for all other processing."),Object(i.b)("li",{parentName:"ol"},"Build explicit tutorials for interaction with the R ecosystem (",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.bioconductor.org/"}),Object(i.b)("inlineCode",{parentName:"a"},"Bioconductor")),", ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://satijalab.org/seurat/"}),Object(i.b)("inlineCode",{parentName:"a"},"Seurat")),")."),Object(i.b)("li",{parentName:"ol"},"Rewrite all the training code, relying instead on ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.pytorchlightning.ai/"}),"PyTorch Lightning"),"."),Object(i.b)("li",{parentName:"ol"},"Add an interface to ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://pyro.ai/"}),"Pyro"),", in order to further automate inference."),Object(i.b)("li",{parentName:"ol"},"Build ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://docs.scvi-tools.org/en/stable/user_guide/developer.html"}),"tutorials")," for model developers.")),Object(i.b)("p",null,"Today, most of those features are readily usable. Visit our ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://scvi-tools.org"}),"landing page"),"! We detail below some of those developments, present in ",Object(i.b)("inlineCode",{parentName:"p"},"scvi-tools")," v0.9.0."),Object(i.b)("h3",{id:"focus-on-the-model"},"Focus on the model"),Object(i.b)("p",null,"In this release, we introduced a new paradigm for building single-cell focused probabilistic models in which model development is hyper-focused on the model at hand. Based on our experience of building variational autoencoders for single-cell data, we identified several opportunties to abstract boilerplate code in a reusable way. Therefore, we built objects in the scvi-tools codebase to handle auxiliary tasks such as data loading, training, save/load, and device management. As an example, we wrote the ",Object(i.b)("inlineCode",{parentName:"p"},"scvi.data")," module to handle ",Object(i.b)("inlineCode",{parentName:"p"},"AnnData"),' objects, including registration of model-specific tensors and generic "ann"-data loading into models. Consequently, model development solely focuses on (1) defining a probabilistic model/inference scheme and (2) expressing it in a structured way based on our abstract classes. Learn more with our ',Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.scvi-tools.org/en/stable/user_guide/developer.html"}),"tutorials"),"."),Object(i.b)("h3",{id:"new-implementations"},"New implementations"),Object(i.b)("p",null,"With these new model building blocks, we were able to implement models external to our lab with relative ease. This included ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nature.com/articles/s42003-020-01247-y"}),"Stereoscope")," for deconvolving spatial transcriptomics data, ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.sciencedirect.com/science/article/pii/S2405471220301952"}),"Solo")," for detection of doublets in scRNA-seq data, and ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.nature.com/articles/s41592-019-0529-1"}),"CellAssign")," for reference-based annotation of scRNA-seq data. These implementations required significantly fewer lines of code with ",Object(i.b)("inlineCode",{parentName:"p"},"scvi-tools"),"."),Object(i.b)("p",null,"For the example of Stereoscope, it took one afternoon and nearly 600 lines of code for its reimplementation in ",Object(i.b)("inlineCode",{parentName:"p"},"scvi-tools")," (the original codebase has 6,000 lines of code). Also, the algorithm may now be run directly from AnnData objects in a Jupyter notebook or in Google Colab. This may be more attractive to certain users compared to the original codebase, which was only usable from the command line interface."),Object(i.b)("h3",{id:"pyro-integration"},"Pyro integration"),Object(i.b)("p",null,"Another feature we are excited about is the integration with ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://pyro.ai/"}),"Pyro"),", which further abstracts the process of manually deriving optimization objectives. The core Pyro team, who joined the Broad Institute a couple of months ago, recently released a simple ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://pyro.ai/examples/scanvi.html"}),"reimplementation of our scANVI model in Pyro"),". We therefore highly encourage using Pyro for new model developments, although relying on Pyro to power a model remains completely optional. We anticipate that Pyro will be especially useful for automating inference for complex hierarchical Bayesian models, since writing the automatic differentiation variational inference (ADVI) recipe manually would require many lines of code, and the evidence lower bound would potentially be tedious to write."),Object(i.b)("h3",{id:"template-repository"},"Template repository"),Object(i.b)("p",null,"We also wrote a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://scvi-tools-skeleton.readthedocs.io/en/stable/"}),"template")," GitHub repository to accelerate the package creation process. This includes template code to setup documentation, continuous integration testing, and popular code styling practices. Additionally, we incorporated example implementations for scVI in both PyTorch and Pyro."),Object(i.b)("h3",{id:"new-longitudinal-features"},"New longitudinal features"),Object(i.b)("p",null,"Finally, thanks to our refactoring effort while implementating of all these models in the same codebase, we were able to broadcast new features across models. This included support for multiple (continuous or categorical) covariates when integrating data with scVI, scANVI, or totalVI. We are excited to see the impact of non-linear dataset integration extended in this way, and have already seen promising results in correcting, e.g., cell cycle effects. We also have extended the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://scarches.readthedocs.io/en/latest/"}),"scArches")," method for query/reference dataset integration to the scVI, scANVI, and totalVI models. This required implementing one ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/YosefLab/scvi-tools/blob/master/scvi/model/base/_archesmixin.py"}),Object(i.b)("inlineCode",{parentName:"a"},"Mixin"))," class with the core transfer learning logic."),Object(i.b)("h2",{id:"next-steps"},"Next steps"),Object(i.b)("p",null,"We are actively looking for users, as well as feedback! Integration in scvi-tools may be possible in at least two different forms. For example, methods developers may choose to either have their method directly present in the external module of our codebase (such as Stereoscope, gimVI, and CellAssign so far), or clone our template and host their independent repository."),Object(i.b)("p",null,"Please let us know if you would like to add your methods to scvi-tools, or if you have any other suggestions on ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/YosefLab/scvi-tools/issues"}),"Github issues"),", ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://discourse.scvi-tools.org/"}),"Discourse")," or ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://gitter.im/scvi-tools/development"}),"Gitter"),"!"))}d.isMDXComponent=!0}}]);