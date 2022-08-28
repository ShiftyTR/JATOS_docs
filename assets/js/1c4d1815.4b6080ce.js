"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[2859],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=u(n),d=o,m=y["".concat(s,".").concat(d)]||y[d]||c[d]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3100:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return y}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),l=["components"],i={title:"Deploy to a server installation",slug:"/Deploy-to-a-server-installation.html",sidebar_position:1},s=void 0,u={unversionedId:"Run_your_study/Deploy-to-a-server-installation",id:"Run_your_study/Deploy-to-a-server-installation",title:"Deploy to a server installation",description:"Usually you conveniently develop your study on your local computer where you have a local installation of JATOS. Then just use the export and import buttons in your installations to transfer the study to your JATOS server.",source:"@site/docs/Run_your_study/Deploy-to-a-server-installation.md",sourceDirName:"Run_your_study",slug:"/Deploy-to-a-server-installation.html",permalink:"/next/Deploy-to-a-server-installation.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/docs/Run_your_study/Deploy-to-a-server-installation.md",tags:[],version:"current",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1661716246,formattedLastUpdatedAt:"8/28/2022",sidebarPosition:1,frontMatter:{title:"Deploy to a server installation",slug:"/Deploy-to-a-server-installation.html",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Session Data - Three Types",permalink:"/next/Session-Data-Three-Types.html"},next:{title:"Run your Study with Study Links",permalink:"/next/Run-your-Study-with-Study-Links.html"}},p=[],c={toc:p};function y(e){var t=e.components,i=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Usually you conveniently develop your study on your local computer where you have a ",(0,a.kt)("a",{parentName:"p",href:"Installation.html"},"local installation of JATOS"),". Then just use the export and import buttons in your installations to transfer the study to your ",(0,a.kt)("a",{parentName:"p",href:"Bring-your-JATOS-online.html"},"JATOS server"),"."),(0,a.kt)("p",null,"If you have a server already, you will need to take your ready-to-run study from your local installation and deploy it to the server. In order to do this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"On your ",(0,a.kt)("em",{parentName:"li"},"local")," JATOS installation, where your study is, click on the study you want to export on the left sidebar. "),(0,a.kt)("li",{parentName:"ol"},"On the Study bar, click Export. A pop-up window will appear. Save the .jzip file wherever you like on your computer.  "),(0,a.kt)("li",{parentName:"ol"},"On your ",(0,a.kt)("em",{parentName:"li"},"server")," installation, simply click Import. ")),(0,a.kt)("p",null,"Here's a little sketch of the same three steps above\n",(0,a.kt)("img",{alt:"jzip workflow",src:n(6175).Z})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Please note that:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The two JATOS look almost identical, and you will (basically) only distinguish them on the basis of the URL in the browser. To prevent confusion, we've made it easier: A local JATOS installation has a ",(0,a.kt)("strong",{parentName:"li"},"black bar")," on top. A server installation has a ",(0,a.kt)("strong",{parentName:"li"},"light-grey bar"),". "),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("strong",{parentName:"li"},".jzip")," file is a normal .zip file. We just changed the name to make this process clearer. (JATOS users got confused and often tried to unzip the file they had downloaded, add HTML files in it, and re-zip it. This will lead to all sorts of problems. Don't do this.\nYou should do all modifications of files and study properties from the JATOS GUI.)"),(0,a.kt)("li",{parentName:"ul"},"In the process of exporting/importing you'll transfer all assets of your study (HTML/JS/CSS files, images, audio, etc) contained in the local study folder. You will ",(0,a.kt)("strong",{parentName:"li"},"not")," transfer result data. "),(0,a.kt)("li",{parentName:"ul"},"If you want to make changes to a study, we also recommend that you so in the local JATOS. There you have full access to the study assets and can change and edit them easily. Then again you can Export \u2192 Import to the JATOS server.")))}y.isMDXComponent=!0},6175:function(e,t,n){t.Z=n.p+"assets/images/jzipWorkflow-47650464ad30958453e7bef3a52dd94a.png"}}]);