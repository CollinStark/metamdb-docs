(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[663],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,f=d["".concat(p,".").concat(u)]||d[u]||l[u]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3940:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:1,slug:"/getting-started"},p={unversionedId:"getting-started/getting-started",id:"getting-started/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"MetAMDB is an easy to use tool for all things atom mappings. Be it atom mapping search by reactions/metabolites or atom mapping generation for user-uploaded models.",source:"@site/docs/getting-started/getting-started.md",sourceDirName:"getting-started",slug:"/getting-started",permalink:"/metamdb-docs/getting-started",editUrl:"https://github.com/CollinStark/metamdb-docs/edit/master/docs/getting-started/getting-started.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/getting-started"},sidebar:"mySidebar",previous:{title:"About the Documentation",permalink:"/metamdb-docs/"},next:{title:"RXN Files",permalink:"/metamdb-docs/rxn-file"}},c=[{value:"Atom Mapping Formats",id:"atom-mapping-formats",children:[{value:"RXN Files",id:"rxn-files",children:[]},{value:"Reaction Images",id:"reaction-images",children:[]},{value:"ABC-Format",id:"abc-format",children:[]}]},{value:"Model Based Atom Mappings",id:"model-based-atom-mappings",children:[]},{value:"Database Query",id:"database-query",children:[]}],m={toc:c};function l(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"MetAMDB is an easy to use tool for all things atom mappings. Be it atom mapping search by reactions/metabolites or atom mapping generation for user-uploaded models."),(0,o.kt)("h2",{id:"atom-mapping-formats"},"Atom Mapping Formats"),(0,o.kt)("p",null,"Atom mappings are accessible in three distinct formats: ",(0,o.kt)("strong",{parentName:"p"},"RXN Files"),", ",(0,o.kt)("strong",{parentName:"p"},"Reaction Images")," and the ",(0,o.kt)("strong",{parentName:"p"},"ABC-Format"),". "),(0,o.kt)("h3",{id:"rxn-files"},"RXN Files"),(0,o.kt)("p",null,"RXN Files are a type of ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Chemical_table_file"},"\ud83d\udd17 Chemical Table File"),' created by "MDL Information Systems". They can easily store atom mapping information for single reactions, include further information and can be comfortably read. Specifics about RXN Files ',(0,o.kt)("a",{parentName:"p",href:"/metamdb-docs/rxn-file"},"can be found in the documentation!")),(0,o.kt)("h3",{id:"reaction-images"},"Reaction Images"),(0,o.kt)("p",null,"Reaction Images are visual representations of a given reaction and their atom mapping. These visualizations make it easy for a beginner to identify atom mappings in a otherwise complex RXN File. Further explanations of reaction images ",(0,o.kt)("a",{parentName:"p",href:"/metamdb-docs/reaction-image"},"can be found here!")),(0,o.kt)("h3",{id:"abc-format"},"ABC-Format"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Glucose (abcdef) -> Glucose-6-phosphate (abcdef)")),(0,o.kt)("p",null,"The ABC-Format is a per element atom mapping representation, which for now can only display carbon mappings in MetAMDB. The mapping is depicted in parenthesis behind each metabolite and maps atoms based on the symbol used. For the above example the first glucose carbon (a) maps to the first glucose-6-phosphate carbon (a). The order of atoms for each metabolite depends on the order of atoms in their respective RXN Files. So the first carbon in the glucose MOL block of the above reaction would correspond to the first mapping atom."),(0,o.kt)("h2",{id:"model-based-atom-mappings"},"Model Based Atom Mappings"),(0,o.kt)("p",null,"Atom mappings can be generated for user-uploaded ",(0,o.kt)("strong",{parentName:"p"},"Reaction Models"),". These atom mappings can be inspected and downloaded in the ",(0,o.kt)("strong",{parentName:"p"},"Atom Mapping Model"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reaction Models")," are user-uploaded models of multiple reactions. Reactions and metabolites can be identified by specific database identifiers to get accurate atom mapping data, while manual atom mappings can be used for your custom or simplified reactions. ",(0,o.kt)("a",{parentName:"p",href:"/metamdb-docs/reaction-model"},"You can read about the specifications and more here!")),(0,o.kt)("h2",{id:"database-query"},"Database Query"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Database Searches")," can be performed to find specific ",(0,o.kt)("strong",{parentName:"p"},"Reactions")," and their atom mappings in the RXN and image format. Reactions also incorporate additional information like database identifiers and their respective ",(0,o.kt)("strong",{parentName:"p"},"Metabolites"),". Everything about database searches ",(0,o.kt)("a",{parentName:"p",href:"/metamdb-docs/database-search"},"can be found here!")))}l.isMDXComponent=!0}}]);