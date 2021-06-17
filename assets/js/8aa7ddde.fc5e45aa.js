(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[375],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5180:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:2,slug:"/reaction"},s={unversionedId:"database-query/reaction",id:"database-query/reaction",isDocsHomePage:!1,title:"Reactions",description:"Each reaction page contains atom mapping data, mapping images, and additional information. The following tabs are available:",source:"@site/docs/database-query/reaction.md",sourceDirName:"database-query",slug:"/reaction",permalink:"/metamdb-docs/reaction",editUrl:"https://github.com/CollinStark/metamdb-docs/edit/master/docs/database-query/reaction.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/reaction"},sidebar:"mySidebar",previous:{title:"Database Search",permalink:"/metamdb-docs/database-search"},next:{title:"Metabolites",permalink:"/metamdb-docs/metabolite"}},l=[{value:"Reaction",id:"reaction",children:[]},{value:"Identifiers",id:"identifiers",children:[]},{value:"Compounds",id:"compounds",children:[]},{value:"Atom Mappings",id:"atom-mappings",children:[]}],p={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Each reaction page contains atom mapping data, mapping images, and additional information. The following tabs are available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/metamdb-docs/reaction#reaction"},"Reaction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/metamdb-docs/reaction#identifiers"},"Identifiers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/metamdb-docs/reaction#compounds"},"Compounds")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/metamdb-docs/reaction#atom-mappings"},"Atom Mappings"))),(0,i.kt)("h2",{id:"reaction"},"Reaction"),(0,i.kt)("p",null,"The reaction tab shows the reaction formula."),(0,i.kt)("h2",{id:"identifiers"},"Identifiers"),(0,i.kt)("p",null,"Identifiers include all collected identifiers separated by database."),(0,i.kt)("h2",{id:"compounds"},"Compounds"),(0,i.kt)("p",null,"Substrate and product metabolite names with links to their respective ",(0,i.kt)("a",{parentName:"p",href:"/metamdb-docs/metabolite"},"Metabolite")," pages."),(0,i.kt)("h2",{id:"atom-mappings"},"Atom Mappings"),(0,i.kt)("p",null,"In this tab the atom mapping information is stored in the RXN file format, as well as the corresponding reaction image. Both files can be opened with the respective buttons and can be downloaded. The manual curation status is also depicted."))}d.isMDXComponent=!0}}]);