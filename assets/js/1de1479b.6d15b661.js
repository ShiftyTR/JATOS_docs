"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[499],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(r),k=a,d=h["".concat(l,".").concat(k)]||h[k]||p[k]||o;return r?n.createElement(d,s(s({ref:t},c),{},{components:r})):n.createElement(d,s({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3210:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),s=["components"],i={title:"Run your Study with Worker & Batch Manager",slug:"/Run-your-Study-with-Worker-and-Batch-Manager.html",sidebar_position:2},l=void 0,u={unversionedId:"Run_your_study/Run-your-Study-with-Worker-and-Batch-Manager",id:"version-3.6.1/Run_your_study/Run-your-Study-with-Worker-and-Batch-Manager",title:"Run your Study with Worker & Batch Manager",description:"Worker & Batch Manager",source:"@site/versioned_docs/version-3.6.1/Run_your_study/Run-your-Study-with-Worker-and-Batch-Manager.md",sourceDirName:"Run_your_study",slug:"/Run-your-Study-with-Worker-and-Batch-Manager.html",permalink:"/3.6.1/Run-your-Study-with-Worker-and-Batch-Manager.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Run_your_study/Run-your-Study-with-Worker-and-Batch-Manager.md",tags:[],version:"3.6.1",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1652171407,formattedLastUpdatedAt:"5/10/2022",sidebarPosition:2,frontMatter:{title:"Run your Study with Worker & Batch Manager",slug:"/Run-your-Study-with-Worker-and-Batch-Manager.html",sidebar_position:2},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Deploy to a server installation",permalink:"/3.6.1/Deploy-to-a-server-installation.html"},next:{title:"Restricting study flow - reloading, linear studies, single-use workers and previews",permalink:"/3.6.1/Restricting-study-flow.html"}},c=[{value:"Worker &amp; Batch Manager",id:"worker--batch-manager",children:[],level:2},{value:"How to let participants run your study: Workers",id:"how-to-let-participants-run-your-study-workers",children:[{value:"Worker Setup",id:"worker-setup",children:[{value:"Get Links",id:"get-links",children:[],level:4},{value:"See Workers",id:"see-workers",children:[],level:4}],level:3}],level:2},{value:"How to organize your workers: Batches",id:"how-to-organize-your-workers-batches",children:[{value:"Batch Properties",id:"batch-properties",children:[],level:3},{value:"Groups (since v3.3.1)",id:"groups-since-v331",children:[],level:3}],level:2}],p={toc:c};function h(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"worker--batch-manager"},"Worker & Batch Manager"),(0,o.kt)("p",null,"The Worker & Batch Manager is the place where you generate links for your particpants to run the your study, organize them into Batches and handle their results."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Worker &amp; Batch manager screenshot",src:r(5571).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This is a screenshot of JATOS v3.3.1. In earlier versions it was called Batch Manager and looked a bit simpler. Each row represents a batch which in turn is a collection of workers.")),(0,o.kt)("h2",{id:"how-to-let-participants-run-your-study-workers"},"How to let participants run your study: Workers"),(0,o.kt)("p",null,'During development of your study you would usually run it with the "Run" button in the study page. But then, when you are done developing you want to let others run your study - you want participants (or workers as they are called in JATOS) do it. For this JATOS lets you create links that you can hand out to your workers (e.g. via email or social media).'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Generate links and hand them to your workers")),(0,o.kt)("p",null,"JATOS has different worker types (each with different properties). That's well explained in a dedicated page: ",(0,o.kt)("a",{parentName:"p",href:"Worker-Types.html"},"Worker Types"),"."),(0,o.kt)("p",null,'Click on the "',(0,o.kt)("span",{class:"glyphicon glyphicon-chevron-right"}),'" button in the left in each batch row to expand the Worker Setup.'),(0,o.kt)("h3",{id:"worker-setup"},"Worker Setup"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Worker Setup",src:r(2786).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'Screenshot of a Worker & Batch Mangager with an open Worker Setup for the second batch. In JATOS version < 3.3.1 it is reachable via the "Worker Setup" button.')),(0,o.kt)("p",null,"The Worker Setup is the place where you generate or view (for Jatos and MTurk workers) the links for all workers types."),(0,o.kt)("h4",{id:"get-links"},"Get Links"),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"Personal Single Workers")," and ",(0,o.kt)("strong",{parentName:"p"},"Personal Multiple Workers"),' click "',(0,o.kt)("strong",{parentName:"p"},"Get Links ",(0,o.kt)("span",{class:"glyphicon glyphicon-link"})),'" ("Add" in older versions). You can enter a description or identification for the worker in the \'Comments\' box. You can also create several at once.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"General Single Workers"),' only have one link. Each time somebody clicks on the link, JATOS will create a new separate worker. Get this link by clicking on "',(0,o.kt)("strong",{parentName:"p"},"Get Link ",(0,o.kt)("span",{class:"glyphicon glyphicon-link"})),'" in its row.'),(0,o.kt)("p",null,"How to connect to MTurk and create links to run with ",(0,o.kt)("strong",{parentName:"p"},"MTurk Workers")," is described in its own page: ",(0,o.kt)("a",{parentName:"p",href:"Connect-to-Mechanical-Turk.html"},"Connect to Mechanical Turk"),"."),(0,o.kt)("p",null,'Alternatively there is a "',(0,o.kt)("strong",{parentName:"p"},"Get Worker Links ",(0,o.kt)("span",{class:"glyphicon glyphicon-link"})),'" button in the top of the Worker & Batch Manger page that is a shortcut to create those links.'),(0,o.kt)("h4",{id:"see-workers"},"See Workers"),(0,o.kt)("p",null,'Click on the "',(0,o.kt)("span",{class:"glyphicon glyphicon-chevron-right"}),'" button in the left in each worker type row to expand it and see all generated workers. The column "Study State" indicates in which ',(0,o.kt)("a",{parentName:"p",href:"Manage-Results.html#state"},"state")," this study run currently is."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Worker Table",src:r(3599).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Screenshot with expanded Personal Single Worker")),(0,o.kt)("p",null,'Another way to see your workers is the button "',(0,o.kt)("strong",{parentName:"p"},"All Workers"),'" in the top of the Worker & Batch Manager page.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"All Workers Table",src:r(1926).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Screenshot of All Workers table: Here one can search and filter through all workers of all batches and all types that belong to this study.")),(0,o.kt)("h2",{id:"how-to-organize-your-workers-batches"},"How to organize your workers: Batches"),(0,o.kt)("p",null,'A batch is a collection of workers together with some properties. Using different batches is useful to organize your study runs, separate their results and vary their setup. E.g. you could separate a pilot run from the "proper" experiment, or you could use different batches for different worker types.'),(0,o.kt)("p",null,"Batches are organized in the Worker & Batch Manager. Here you can create and delete batches, access each batch's properties and edit its ",(0,o.kt)("strong",{parentName:"p"},"Batch Session Data")," or look through their results."),(0,o.kt)("p",null,'Each study comes with a "Default" batch.'),(0,o.kt)("p",null,"You can ",(0,o.kt)("strong",{parentName:"p"},"deactivate")," or ",(0,o.kt)("strong",{parentName:"p"},"activate")," a batch by clicking on the checkbox button in each batch row. A deactivated batch doesn't allow any study runs."),(0,o.kt)("h3",{id:"batch-properties"},"Batch Properties"),(0,o.kt)("p",null,"For each batch, you can limit the maximum number of workers that will ever be able to run a study in this batch by setting the ",(0,o.kt)("strong",{parentName:"p"},"Maximum Total Workers"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Worker &amp; Batch manager screenshot",src:r(7910).Z})),(0,o.kt)("p",null,"Additionally you can switch on or off worker types in the ",(0,o.kt)("strong",{parentName:"p"},"Allowed Worker Types"),". Unchecked worker types are not allowed to run a study. Always check before you send out links to study runs that the corresponding worker types are switched on."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Group Properties")," relate to ",(0,o.kt)("a",{parentName:"p",href:"Write-Group-Studies-I-Setup.html#group-settings-in-each-batchs-properties"},"group studies"),"."),(0,o.kt)("h3",{id:"groups-since-v331"},"Groups (since v3.3.1)"),(0,o.kt)("p",null,"A batch is also the place where ",(0,o.kt)("a",{parentName:"p",href:"Write-Group-Studies-I-Setup.html"},"JATOS groups")," are handled. Here you can an get an overview of the Groups that belong to this batch: see what their member workers are or edit the ",(0,o.kt)("strong",{parentName:"p"},"Group Session Data"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Groups table",src:r(5164).Z})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},'Screenshot of a Groups table (available JATOS >= 3.3.1): "Active Workers" are the workers that are currently members in the group, "Past Workers" the ones that were members at one point in the past. "Results" shows only the study results that belong to this group. "Group State" can be START, FINISHED, or FIXED.')))}h.isMDXComponent=!0},7910:function(e,t,r){t.Z=r.p+"assets/images/batch_properties-2bf165e3876623c64a91738865eb46a5.png"},5164:function(e,t,r){t.Z=r.p+"assets/images/groups_view-7f280e8797158976488fe7a90e0bb59a.png"},5571:function(e,t,r){t.Z=r.p+"assets/images/worker_and_batch_manager1-2bf985fa54f1d320141f4ae80c30d2fb.png"},2786:function(e,t,r){t.Z=r.p+"assets/images/worker_and_batch_manager2-32e0c2740defc5d392116623c77c1667.png"},3599:function(e,t,r){t.Z=r.p+"assets/images/worker_and_batch_manager4-ba2bb837340a259b934bd92821424cdb.png"},1926:function(e,t,r){t.Z=r.p+"assets/images/worker_and_batch_manager6-2005455a339781f7d7e62be47d877625.png"}}]);