(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{117:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(100);var c=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],c=l[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var l=0,i=!1,o=document.getElementsByClassName(e);l<o.length&&!i;){var m=o[l],s=m.href,u=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===u&&(r&&r.classList.remove(t),m.classList.add(t),c(m),i=!0),l+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=a(60),o=a.n(i),m="table-of-contents__link";function s(e){var t=e.toc,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(s,{isChild:!0,toc:e.children}))}))):null}t.a=function(e){var t=e.toc;return c(m,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(o.a.tableOfContents,"thin-scrollbar")},l.a.createElement(s,{toc:t}))}},120:function(e,t,a){"use strict";var n=a(3),l=a(7),r=a(0),c=a.n(r),i=a(100),o=a(62),m=a.n(o);t.a=function(e){var t=e.className,a=Object(l.a)(e,["className"]);return c.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(i.a)(m.a.iconEdit,t)},a),c.a.createElement("g",null,c.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}},96:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),c=a(101),i=a(23),o=a(104),m=a(102);var s=function(e){var t=e.metadata;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},t.previous&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.previous.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&l.a.createElement(m.a,{className:"pagination-nav__link",to:t.next.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),l.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},u=a(112);var d=function(){var e=Object(i.default)().siteConfig.title,t=Object(u.useActivePlugin)({failfast:!0}).pluginId,a=Object(c.useDocsPreferredVersion)(t).savePreferredVersionName,n=Object(u.useActiveVersion)(t),r=Object(u.useDocVersionSuggestions)(t),o=r.latestDocSuggestion,s=r.latestVersionSuggestion;if(!s)return l.a.createElement(l.a.Fragment,null);var d,v=null!=o?o:(d=s).docs.find((function(e){return e.id===d.mainDocId}));return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===n.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,n.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,n.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(m.a,{to:v.path,onClick:function(){return a(s.name)}},"latest version"))," ","(",s.label,")."))},v=a(117),E=a(120),g=a(100),f=a(73),p=a.n(f);t.default=function(e){var t,a=Object(i.default)().siteConfig.url,n=e.content,m=n.metadata,f=n.frontMatter,b=f.image,N=f.keywords,h=f.hide_title,_=f.hide_table_of_contents,O=m.description,j=m.title,w=m.permalink,k=m.editUrl,y=m.lastUpdatedAt,C=m.lastUpdatedBy,x=Object(u.useActivePlugin)({failfast:!0}).pluginId,L=Object(u.useVersions)(x),I=Object(u.useActiveVersion)(x),A=L.length>1,S=Object(c.useTitleFormatter)(j),V=Object(o.a)(b,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,S),l.a.createElement("meta",{property:"og:title",content:S}),O&&l.a.createElement("meta",{name:"description",content:O}),O&&l.a.createElement("meta",{property:"og:description",content:O}),N&&N.length&&l.a.createElement("meta",{name:"keywords",content:N.join(",")}),b&&l.a.createElement("meta",{property:"og:image",content:V}),b&&l.a.createElement("meta",{name:"twitter:image",content:V}),b&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j}),w&&l.a.createElement("meta",{property:"og:url",content:a+w}),w&&l.a.createElement("link",{rel:"canonical",href:a+w})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(g.a)("col",(t={},t[p.a.docItemCol]=!_,t))},l.a.createElement(d,null),l.a.createElement("div",{className:p.a.docItemContainer},l.a.createElement("article",null,A&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",I.label)),!h&&l.a.createElement("header",null,l.a.createElement("h1",{className:p.a.docTitle},j)),l.a.createElement("div",{className:"markdown"},l.a.createElement(n,null))),(k||y||C)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},k&&l.a.createElement("a",{href:k,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(E.a,null),"Edit this page")),(y||C)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",y&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*y).toISOString(),className:p.a.docLastUpdatedAt},new Date(1e3*y).toLocaleDateString()),C&&" "),C&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,C)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(s,{metadata:m})))),!_&&n.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(v.a,{toc:n.toc}))))}}}]);