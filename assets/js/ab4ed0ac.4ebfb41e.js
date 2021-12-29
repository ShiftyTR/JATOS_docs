"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7059],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1838:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),s=["components"],o={title:"Administration",slug:"/Administration.html",sidebar_position:1},l=void 0,u={unversionedId:"Manage_your_JATOS/Administration",id:"version-3.7.1/Manage_your_JATOS/Administration",title:"Administration",description:"Here users with admin rights can get an overview of the studies and users of a JATOS installation. You can see the logs, system info, or go to the test page to check if JATOS runs correctly. It is also the place where update notifications appear when a new JATOS version is available and where admins can trigger an update.",source:"@site/versioned_docs/version-3.7.1/Manage_your_JATOS/Administration.md",sourceDirName:"Manage_your_JATOS",slug:"/Administration.html",permalink:"/Administration.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.7.1/Manage_your_JATOS/Administration.md",tags:[],version:"3.7.1",lastUpdatedBy:"Poulami Ghosh",lastUpdatedAt:1640777407,formattedLastUpdatedAt:"12/29/2021",sidebarPosition:1,frontMatter:{title:"Administration",slug:"/Administration.html",sidebar_position:1},sidebar:"version-3.7.1/tutorialSidebar",previous:{title:"Tips & Tricks",permalink:"/Tips-and-Tricks.html"},next:{title:"Manage JATOS users",permalink:"/User-Manager.html"}},c=[{value:"User Manager",id:"user-manager",children:[],level:3},{value:"Study Administration",id:"study-administration",children:[],level:3}],d={toc:c};function p(e){var t=e.components,o=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here ",(0,i.kt)("a",{parentName:"p",href:"/User-Manager.html"},"users with admin rights")," can get an overview of the studies and users of a JATOS installation. You can see the ",(0,i.kt)("strong",{parentName:"p"},"logs"),", ",(0,i.kt)("strong",{parentName:"p"},"system info"),", or go to the ",(0,i.kt)("strong",{parentName:"p"},"test page")," to check if JATOS runs correctly. It is also the place where ",(0,i.kt)("strong",{parentName:"p"},"update notifications")," appear when a new JATOS version is available and where ",(0,i.kt)("a",{parentName:"p",href:"/Update-JATOS.html#automatic-updates"},"admins can trigger an update"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Administration screenshot",src:n(8076).Z})),(0,i.kt)("p",null,"On the menu you will find links to two additional administration pages: "),(0,i.kt)("h3",{id:"user-manager"},"User Manager"),(0,i.kt)("p",null,"Manage users, passwords, and rights from here. Find more details on ",(0,i.kt)("a",{parentName:"p",href:"/User-Manager.html"},"its documentation page")),(0,i.kt)("h3",{id:"study-administration"},"Study Administration"),(0,i.kt)("p",null,"By clicking the ",(0,i.kt)("em",{parentName:"p"},"Studies")," button you'll get to an overview about all studies that are on the JATOS instance. You'll also see, for each study: whom it belongs to (the study members), how much disk space it takes, and when it was active last."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For larger JATOS installation it can take up to a couple minutes to gather all data for this page")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Studies Administration",src:n(548).Z})),(0,i.kt)("p",null,"The information is displayed in a table with the columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Active")," - In cases where e.g. a study uses to many server resources, an admin can ",(0,i.kt)("strong",{parentName:"li"},"deactivate")," (or activate again) it by clicking the checkbox in the 'Active' column. A deactivated study cannot be started by participants (workers) anymore, but an already started study run can be continued. That means, an admin will not interrupt a participant if they already started doing a study, but no new participants will be able to start it. The study members can still see and edit the study, as well as export its result data. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Study Assets Size")," - The disk size of all asset files associated to this study (HTML, JS, CSS, images, videos, etc.)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Result Count")," - The number of study results collected so far on this JATOS instance."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Result Data Size")," - The size of all result data that are stored in the database. In brackets is the average size per result count."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Result File Size")," - The size of all result files that are stored in the server's file system. In brackets is the average size per result count."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Last Started")," - When was this study last started by a participant.")))}p.isMDXComponent=!0},8076:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_Administration1-cba09a0d2d8958b160e37dc7bd4b1757.png"},548:function(e,t,n){t.Z=n.p+"assets/images/Screenshot_Study_Admin1-cf13b7ffc802c4d7bf9ee6b713f73fe1.png"}}]);