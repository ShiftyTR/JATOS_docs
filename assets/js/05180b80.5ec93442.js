"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[2986],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9976:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={title:"JATOS on AWS",slug:"/JATOS-in-Amazons-Cloud-without-Docker.html",sidebar_position:4},s=void 0,u={unversionedId:"Serving_the_Internet/JATOS-in-Amazons-Cloud-without-Docker",id:"version-3.7.1/Serving_the_Internet/JATOS-in-Amazons-Cloud-without-Docker",title:"JATOS on AWS",description:"On this page is additional information in how to install JATOS on a server on AWS. All general installation advice is in JATOS on a server and applies here too. If you are looking for an easier way to install JATOS in the cloud, the tutorial JATOS on DigitalOcean might be what you are looking for.",source:"@site/versioned_docs/version-3.7.1/Serving_the_Internet/JATOS-in-Amazons-Cloud-without-Docker.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-in-Amazons-Cloud-without-Docker.html",permalink:"/JATOS-in-Amazons-Cloud-without-Docker.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.7.1/Serving_the_Internet/JATOS-in-Amazons-Cloud-without-Docker.md",tags:[],version:"3.7.1",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1642198652,formattedLastUpdatedAt:"1/14/2022",sidebarPosition:4,frontMatter:{title:"JATOS on AWS",slug:"/JATOS-in-Amazons-Cloud-without-Docker.html",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"JATOS on DigitalOcean",permalink:"/JATOS-on-DigitalOcean.html"},next:{title:"Install JATOS on a server",permalink:"/JATOS-on-a-server.html"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"On this page is additional information in how to install JATOS on a server on AWS. All general installation advice is in ",(0,a.kt)("a",{parentName:"p",href:"JATOS-on-a-server.html"},"JATOS on a server")," and applies here too. If you are looking for an easier way to install JATOS in the cloud, the tutorial ",(0,a.kt)("a",{parentName:"p",href:"JATOS-on-DigitalOcean.html"},"JATOS on DigitalOcean")," might be what you are looking for."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First you need to register at ",(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/"},"AWS")," (they'll want your credit card)."),(0,a.kt)("li",{parentName:"ol"},"In AWS webpage move to EC2 and launch a new instance with Ubuntu (you can use other Linux too)"),(0,a.kt)("li",{parentName:"ol"},"During the creation of the new EC2 instance you will be ask whether you want to create a key pair. Do so. Download the file with the key (a *.pem file). Store it in a safe place - with this key you will access your server."),(0,a.kt)("li",{parentName:"ol"},"Login via SSH: ",(0,a.kt)("inlineCode",{parentName:"li"},"ssh -i /path/to/your/pem_key_file ubuntu@xx.xx.xx.xx")," (Use your instance's IP address: In AWS / EC2 / Instances / Description are two IPs 'Private IP' and 'Public IP'. Use the ",(0,a.kt)("strong",{parentName:"li"},"public")," one.)"),(0,a.kt)("li",{parentName:"ol"},"Get the latest JATOS bundled with Java ",(0,a.kt)("inlineCode",{parentName:"li"},"wget https://github.com/JATOS/JATOS/releases/latest/download/jatos_linux_java.zip")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"unzip jatos_linux_java.zip")," (You probably have to install 'unzip' first with ",(0,a.kt)("inlineCode",{parentName:"li"},"sudo apt-get install unzip"),".)"),(0,a.kt)("li",{parentName:"ol"},"Configure IP and port in ",(0,a.kt)("inlineCode",{parentName:"li"},"conf/production.conf"),": Use the '",(0,a.kt)("strong",{parentName:"li"},"Private IP"),"' from your instance description (the one that starts with 172.x.x.x) and port 80"),(0,a.kt)("li",{parentName:"ol"},"Allow inbound HTTP/HTTPS traffic: ",(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/premiumsupport/knowledge-center/connect-http-https-ec2/"},"This is done in AWS GUI"),"."),(0,a.kt)("li",{parentName:"ol"},"(Optional) ",(0,a.kt)("a",{parentName:"li",href:"JATOS-on-a-server.html#7-optional-auto-start-jatos"},"auto-start JATOS")),(0,a.kt)("li",{parentName:"ol"},"Change JATOS' admin password")))}m.isMDXComponent=!0}}]);