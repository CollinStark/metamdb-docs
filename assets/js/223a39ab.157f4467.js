(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[864],{4607:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},metadata:function(){return m},toc:function(){return s},default:function(){return d}});var i=a(2122),n=a(9756),o=(a(7294),a(3905)),r=["components"],l={sidebar_position:1},m={unversionedId:"atom-mapping/reaction-model",id:"atom-mapping/reaction-model",isDocsHomePage:!1,title:"Reaction Model",description:"MetAMDB allows users to upload their own reaction models. The following sections will describe how to create such a model and what options are available.",source:"@site/docs/atom-mapping/reaction-model.md",sourceDirName:"atom-mapping",slug:"/atom-mapping/reaction-model",permalink:"/metamdb-docs/atom-mapping/reaction-model",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"mySidebar",previous:{title:"About the Documentation",permalink:"/metamdb-docs/"},next:{title:"Atom Mapping Model",permalink:"/metamdb-docs/atom-mapping/atom-mapping-model"}},s=[{value:"File Format",id:"file-format",children:[]},{value:"File Structure",id:"file-structure",children:[{value:"Reaction Name",id:"reaction-name",children:[]},{value:"Substrates",id:"substrates",children:[]},{value:"Reaction Arrow",id:"reaction-arrow",children:[]},{value:"Products",id:"products",children:[]}]}],p={toc:s};function d(e){var t=e.components,l=(0,n.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"MetAMDB allows users to upload their own reaction models. The following sections will describe how to create such a model and what options are available."),(0,o.kt)("p",null,(0,o.kt)("a",{target:"_blank",href:a(3069).Z},"Download this example model to follow along!")),(0,o.kt)("h2",{id:"file-format"},"File Format"),(0,o.kt)("p",null,"Currently, the only available model format is CSV. Other file formats will be available in the future!"),(0,o.kt)("h2",{id:"file-structure"},"File Structure"),(0,o.kt)("p",null,"The file is structured in 4 columns: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/metamdb-docs/atom-mapping/reaction-model#reaction-name"},"Reaction Name")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/metamdb-docs/atom-mapping/reaction-model#substrates"},"Substrates")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/metamdb-docs/atom-mapping/reaction-model#reaction-arrow"},"Reaction Arrow")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/metamdb-docs/atom-mapping/reaction-model#products"},"Products"))),(0,o.kt)("p",null,"Each column has special fields and options."),(0,o.kt)("h3",{id:"reaction-name"},"Reaction Name"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<ReactionName/Identifier> (<ReactionIdentifier>)")),(0,o.kt)("p",null,"Reaction names can be freely chosen, but require a reaction identifier from either ",(0,o.kt)("a",{parentName:"p",href:"https://www.brenda-enzymes.org/"},"\ud83d\udd17 BRENDA"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.genome.jp/kegg/"},"\ud83d\udd17 KEGG"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://metacyc.org/"},"\ud83d\udd17 MetaCyc")," to get a database atom mapping. ",(0,o.kt)("inlineCode",{parentName:"p"},"Reaction_identifiers")," can either be used as the name itself or can be given in parenthesis behind the name ",(0,o.kt)("inlineCode",{parentName:"p"},"Name (Reaction_identifier)")," ."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reaction1 (F16ALDOLASE-RXN) - ",(0,o.kt)("strong",{parentName:"li"},"Reaction identifier in parenthesis")),(0,o.kt)("li",{parentName:"ul"},"F16ALDOLASE-RXN - ",(0,o.kt)("strong",{parentName:"li"},"Reaction identifier as name")),(0,o.kt)("li",{parentName:"ul"},"Reaction3 - ",(0,o.kt)("strong",{parentName:"li"},"No identifier, no mapping"))),(0,o.kt)("h3",{id:"substrates"},"Substrates"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<MetaboliteName> (<AtomMapping>) [<MetaboliteIdentifier>] + <Metabolite...")),(0,o.kt)("p",null,"Metabolites names, as in the reaction column, can be freely chosen and multiple metabolites are split with a plus sign ",(0,o.kt)("inlineCode",{parentName:"p"},"+"),"."),(0,o.kt)("p",null,"Optional parameters include ",(0,o.kt)("strong",{parentName:"p"},"Manual Atom Mappings"),", which can be used inside parenthesis ",(0,o.kt)("inlineCode",{parentName:"p"},"Acetyl-CoA (ab)")," after the metabolite name. The manual atom mapping needs to be in the abc format."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Metabolite Identifiers")," map metabolites to a given reaction and are required if a database atom mapping is wanted. To use metabolite identifiers square brackets can be used ",(0,o.kt)("inlineCode",{parentName:"p"},"Acetyl-CoA [ACETYL-COA]"),". Metabolite identifiers from the above databases can be utilized (",(0,o.kt)("a",{parentName:"p",href:"https://www.brenda-enzymes.org/"},"\ud83d\udd17 BRENDA"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.genome.jp/kegg/"},"\ud83d\udd17 KEGG"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://metacyc.org/"},"\ud83d\udd17 MetaCyc"),") and database specific identifiers can be mixed."),(0,o.kt)("p",null,"If a database reaction includes metabolites that should be removed from the atom mapping model the metabolite can be excluded by removing it from the model."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Acetyl-CoA (ab) + CO2 (c) - ",(0,o.kt)("strong",{parentName:"li"},"Metabolites with manual atom mappings")),(0,o.kt)("li",{parentName:"ul"},"Pyruvate ","[Pyr]"," + ... - ",(0,o.kt)("strong",{parentName:"li"},"Metabolite with metabolite identifier"))),(0,o.kt)("h3",{id:"reaction-arrow"},"Reaction Arrow"),(0,o.kt)("p",null,"The following reaction arrows can be used:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Forward: --\x3e, ->"),(0,o.kt)("li",{parentName:"ul"},"Reverse: <--, <-"),(0,o.kt)("li",{parentName:"ul"},"Reversible: <=>, <->")),(0,o.kt)("h3",{id:"products"},"Products"),(0,o.kt)("p",null,"Products effectively function like ",(0,o.kt)("a",{parentName:"p",href:"/metamdb-docs/atom-mapping/reaction-model#substrates"},"Substrates"),"."))}d.isMDXComponent=!0},3069:function(e,t,a){"use strict";t.Z=a.p+"assets/files/example_model-b584c1fd35dfdae7a2f3dc65765e407e.csv"}}]);