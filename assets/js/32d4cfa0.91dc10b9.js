"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[1792],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),p=s,y=d["".concat(u,".").concat(p)]||d[p]||m[p]||a;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function p(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2459:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(3117),s=r(102),a=(r(7294),r(3905)),o=["components"],i={title:"Change study's members",slug:"/Change-studys-members.html",sidebar_position:5},u=void 0,l={unversionedId:"Run_your_study/Change-studys-members",id:"version-3.6.1/Run_your_study/Change-studys-members",title:"Change study's members",description:"Each experimenter with access to the JATOS server (though the GUI) is a JATOS User. Users can create, modify and delete the studies they are members of. They can also export and delete results.",source:"@site/versioned_docs/version-3.6.1/Run_your_study/Change-studys-members.md",sourceDirName:"Run_your_study",slug:"/Change-studys-members.html",permalink:"/3.6.1/Change-studys-members.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Run_your_study/Change-studys-members.md",tags:[],version:"3.6.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1661716246,formattedLastUpdatedAt:"8/28/2022",sidebarPosition:5,frontMatter:{title:"Change study's members",slug:"/Change-studys-members.html",sidebar_position:5},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Worker Types",permalink:"/3.6.1/Worker-Types.html"},next:{title:"Use MTurk",permalink:"/3.6.1/Connect-to-Mechanical-Turk.html"}},c=[],m={toc:c};function d(e){var t=e.components,i=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Each experimenter with access to the JATOS server (though the GUI) is a JATOS User. Users can create, modify and delete the studies they are members of. They can also export and delete results."),(0,a.kt)("p",null,"A study in JATOS is allowed to have more than one users, also called members. Each member has the same rights, e.g. can run the study, create new Workers, add/change/delete components, export/delete results. Especially each member can add new members or remove existing members."),(0,a.kt)("p",null,"Each study has a ",(0,a.kt)("strong",{parentName:"p"},"Change Users")," button in its study toolbar."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Change study&#39;s members button",src:r(5045).Z})),(0,a.kt)("p",null,"In this menu you can add single users by their username. Of course this works only if this is already a JATOS user. For privacy reasons JATOS never shows the username (which is often an email address) in the member list."),(0,a.kt)("p",null,"A single user is removed by unchecking the checkbox in front of its name."),(0,a.kt)("p",null,"Additionally it is possible, if your admins allow it, to add all JATOS users at once or remove all members at once. Then you will see the ",(0,a.kt)("em",{parentName:"p"},"Add All")," and ",(0,a.kt)("em",{parentName:"p"},"Remove All")," buttons."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Change study&#39;s members",src:r(2989).Z})))}d.isMDXComponent=!0},2989:function(e,t,r){t.Z=r.p+"assets/images/change_studys_members-d6079c662fb9d48110b4faee5b4558b3.png"},5045:function(e,t,r){t.Z=r.p+"assets/images/change_studys_members_button-b7842a337a942c0619d2b70ddc0c86c3.png"}}]);