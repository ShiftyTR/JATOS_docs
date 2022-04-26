"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[3601],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),m=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var m=2;m<i;m++)a[m]=n[m];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1395:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var o=n(3117),r=n(102),i=(n(7294),n(3905)),a=["components"],l={title:"Customize JATOS' Home Page",slug:"/Customize-JATOS-Home-Page.html",sidebar_position:11},s=void 0,m={unversionedId:"Serving_the_Internet/Customize-JATOS-Home-Page",id:"version-3.6.1/Serving_the_Internet/Customize-JATOS-Home-Page",title:"Customize JATOS' Home Page",description:"Link to Terms of Use (since JATOS v3.5.9)",source:"@site/versioned_docs/version-3.6.1/Serving_the_Internet/Customize-JATOS-Home-Page.md",sourceDirName:"Serving_the_Internet",slug:"/Customize-JATOS-Home-Page.html",permalink:"/3.6.1/Customize-JATOS-Home-Page.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Serving_the_Internet/Customize-JATOS-Home-Page.md",tags:[],version:"3.6.1",lastUpdatedBy:"elisafilevich",lastUpdatedAt:1650983347,formattedLastUpdatedAt:"4/26/2022",sidebarPosition:11,frontMatter:{title:"Customize JATOS' Home Page",slug:"/Customize-JATOS-Home-Page.html",sidebar_position:11},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"Updating a JATOS server installation",permalink:"/3.6.1/Updating-a-JATOS-server-installation.html"},next:{title:"Install JATOS via Docker",permalink:"/3.6.1/Install-JATOS-via-Docker.html"}},p=[{value:"Link to Terms of Use (since JATOS v3.5.9)",id:"link-to-terms-of-use-since-jatos-v359",children:[],level:2},{value:"Welcome Block (since JATOS v3.5.9)",id:"welcome-block-since-jatos-v359",children:[{value:"With GitHub",id:"with-github",children:[],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"link-to-terms-of-use-since-jatos-v359"},"Link to Terms of Use (since JATOS v3.5.9)"),(0,i.kt)("p",null,"You can configure JATOS to show a link to your 'Terms of Use' that will be shown in a info box on the home page. "),(0,i.kt)("p",null,"In your JATOS installation folder edit ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," and add the URL under ",(0,i.kt)("inlineCode",{parentName:"p"},"jatos.termsOfUseUrl"),". If left empty the info box is not shown."),(0,i.kt)("h2",{id:"welcome-block-since-jatos-v359"},"Welcome Block (since JATOS v3.5.9)"),(0,i.kt)("p",null,"You can customize JATOS' home page to e.g."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"show your university's logo,"),(0,i.kt)("li",{parentName:"ul"},"add some introduction text, or"),(0,i.kt)("li",{parentName:"ul"},"announce an upcoming event. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"template customized home page",src:n(9035).Z})),(0,i.kt)("p",null,"This is done by configuring JATOS with an URL that points to some static HTML that describes your individual welcome block. This HTML block will then be loaded and displayed in every home page."),(0,i.kt)("p",null,"Have a look at this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JATOS/customized-home-page-template/blob/main/foobar-university-welcome.html"},"example welcome block"),"."),(0,i.kt)("p",null,"You can update your welcome block at any time to add new information (e.g. anouncement of JATOS maintance work). But since the HMTL is cached it can take ",(0,i.kt)("strong",{parentName:"p"},"up to an hour to be visible to your users"),". If you want to see it right away for testing you can disable caching in your browser."),(0,i.kt)("p",null,"This welcome block can be fetched from ",(0,i.kt)("strong",{parentName:"p"},"any HTTP server")," that is able to serve HTML. One way is to do it via GitHub."),(0,i.kt)("h3",{id:"with-github"},"With GitHub"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/JATOS/customized-home-page-template"},"https://github.com/JATOS/customized-home-page-template"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click 'Use this template' button to create a copy of this repository")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the content of ",(0,i.kt)("inlineCode",{parentName:"p"},"foobar-university-welcome.html")," to your needs")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add necessary files (e.g. logo images) to your repository")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure JATOS: In your JATOS installation folder edit ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/production.conf")," - add ",(0,i.kt)("inlineCode",{parentName:"p"},"jatos.brandingUrl"),":"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Easy but with rate limit"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'jatos.brandingUrl = "https://raw.githubusercontent.com/my-user/my-repo/main/foobar-university-welcome.html"\n')),(0,i.kt)("p",{parentName:"li"},"Remember to change ",(0,i.kt)("inlineCode",{parentName:"p"},"my-user"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"my-repo"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"foobar-university-welcome.html"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Better use ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site"},"GitHub pages")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'jatos.brandingUrl = "https://my-user.github.io/my-repo/foobar-university-welcome.html"\n')),(0,i.kt)("p",{parentName:"li"},"Remember to change ",(0,i.kt)("inlineCode",{parentName:"p"},"my-user"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"my-repo"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"foobar-university-welcome.html"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Restart JATOS"))))}u.isMDXComponent=!0},9035:function(e,t,n){t.Z=n.p+"assets/images/screenshot-branding-6b6e021db43da7b742fbbb7d4775ea52.png"}}]);