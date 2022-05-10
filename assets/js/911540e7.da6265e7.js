"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[4821],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,y=p["".concat(l,".").concat(h)]||p[h]||c[h]||a;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5158:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"Study Log",slug:"/Study-Log.html",sidebar_position:10},l=void 0,u={unversionedId:"Run_your_study/Study-Log",id:"Run_your_study/Study-Log",title:"Study Log",description:"JATOS stores a log file for each study (not to be confused with JATOS' log which is for the whole application). This file has a line for every relevant event that happened in a study, most importantly when a component result was saved, exported or deleted. Also, it contains a hash - a string that is generated by the contents of the result data itself. This, in principle, would allow any JATOS user to show that the data have not been modified, and that no result was deleted between data collection and publication.",source:"@site/docs/Run_your_study/Study-Log.md",sourceDirName:"Run_your_study",slug:"/Study-Log.html",permalink:"/next/Study-Log.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Run_your_study/Study-Log.md",tags:[],version:"current",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1652171407,formattedLastUpdatedAt:"5/10/2022",sidebarPosition:10,frontMatter:{title:"Study Log",slug:"/Study-Log.html",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"End page - After your study finished",permalink:"/next/End-page-after-your-study-finished.html"},next:{title:"Tips & Tricks",permalink:"/next/Tips-and-Tricks.html"}},d=[],c={toc:d};function p(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"JATOS stores a log file for each study (not to be confused with ",(0,a.kt)("a",{parentName:"p",href:"Troubleshooting.html#read-log-file-in-the-browser"},"JATOS' log")," which is for the whole application). This file has a line for every relevant event that happened in a study, most importantly when a component result was saved, exported or deleted. Also, it contains a hash - a string that is generated by the contents of the result data itself. This, in principle, would allow any JATOS user to show that the data have not been modified, and that no result was deleted between data collection and publication. "),(0,a.kt)("p",null,"You can see the log by clicking on ",(0,a.kt)("strong",{parentName:"p"},"More")," in the study toolbar and then ",(0,a.kt)("strong",{parentName:"p"},"Study Log"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Study Log button",src:n(1544).Z})),(0,a.kt)("p",null,"Then the log looks similar to this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Study Log pretty",src:n(9777).Z})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"A few more details:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The study log won't be necessary in most cases. Just nice to have. Just in case."),(0,a.kt)("li",{parentName:"ul"},"In the GUI you will see only the ",(0,a.kt)("strong",{parentName:"li"},"last 100 entries")," of the study log but you can get the whole log by downloading it. In the GUI the log is in ",(0,a.kt)("strong",{parentName:"li"},"reversed")," order - the downloaded one has normal order."),(0,a.kt)("li",{parentName:"ul"},"The following events are logged: ",(0,a.kt)("strong",{parentName:"li"},"create/delete study"),", ",(0,a.kt)("strong",{parentName:"li"},"run/finish study"),", ",(0,a.kt)("strong",{parentName:"li"},"store result data"),", ",(0,a.kt)("strong",{parentName:"li"},"upload result file"),", ",(0,a.kt)("strong",{parentName:"li"},"export result data")),(0,a.kt)("li",{parentName:"ul"},"In case of storing result data or uploading a result file a hash of the data is logged. Since a hash changes if a result is altered or deleted, this can prove ",(0,a.kt)("strong",{parentName:"li"},"data integrity")," should it ever being questioned."),(0,a.kt)("li",{parentName:"ul"},"The study log is only as safe as the server machine on which JATOS is running. Anybody with access to the server can potentially modify the study log file and e.g. hide that data has been deleted. We can't prevent this, so it's important to have a safe server that only admins can access."),(0,a.kt)("li",{parentName:"ul"},"The study log is in JSON format. Choose between ",(0,a.kt)("strong",{parentName:"li"},"pretty")," (like in the screenshot above) or ",(0,a.kt)("strong",{parentName:"li"},"raw"),".")))}p.isMDXComponent=!0},1544:function(e,t,n){t.Z=n.p+"assets/images/study_log_button_371-e9fb2e8f06972dd3e7dc8a4c23f984d4.png"},9777:function(e,t,n){t.Z=n.p+"assets/images/study_log_pretty_371-19bdcb8d2404a21500781d7be7861b83.png"}}]);