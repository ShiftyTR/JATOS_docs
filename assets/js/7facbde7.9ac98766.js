"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[6072],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3885:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"JATOS with Apache",slug:"/JATOS-with-Apache.html",sidebar_position:9},l=void 0,c={unversionedId:"Serving_the_Internet/JATOS-with-Apache",id:"version-3.6.1/Serving_the_Internet/JATOS-with-Apache",title:"JATOS with Apache",description:"This is an example of a configuration of Apache as a proxy in front of JATOS. While it's not necessary to run JATOS with a proxy, it's common to do so in order to allow encryption.",source:"@site/versioned_docs/version-3.6.1/Serving_the_Internet/JATOS-with-Apache.md",sourceDirName:"Serving_the_Internet",slug:"/JATOS-with-Apache.html",permalink:"/3.6.1/JATOS-with-Apache.html",editUrl:"https://github.com/JATOS/JATOS_docs/tree/master/versioned_docs/version-3.6.1/Serving_the_Internet/JATOS-with-Apache.md",tags:[],version:"3.6.1",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1642198652,formattedLastUpdatedAt:"1/14/2022",sidebarPosition:9,frontMatter:{title:"JATOS with Apache",slug:"/JATOS-with-Apache.html",sidebar_position:9},sidebar:"version-3.6.1/tutorialSidebar",previous:{title:"JATOS with Nginx",permalink:"/3.6.1/JATOS-with-Nginx.html"},next:{title:"Updating a JATOS server installation",permalink:"/3.6.1/Updating-a-JATOS-server-installation.html"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is an example of a configuration of ",(0,a.kt)("a",{parentName:"p",href:"https://httpd.apache.org/"},"Apache")," as a proxy in front of JATOS. While it's not necessary to run JATOS with a proxy, it's common to do so in order to allow encryption."),(0,a.kt)("p",null,"Here I used Apache 2.4.18 on a Ubuntu system. I recommend to use at least ",(0,a.kt)("strong",{parentName:"p"},"version 2.4")," since JATOS relies on WebSockets that aren't supported by earlier Apache versions. "),(0,a.kt)("p",null,"I had to add some modules to Apache to get it working:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo a2enmod rewrite\nsudo a2enmod proxy_wstunnel\nsudo a2enmod proxy\nsudo a2enmod headers\nsudo a2enmod ssl\nsudo a2enmod lbmethod_byrequests\nsudo a2enmod proxy_balancer\nsudo a2enmod proxy_http\nsudo a2enmod remoteip\n")),(0,a.kt)("p",null,"The following is an example of a proxy config with Apache. I stored it in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/apache2/sites-available/example.com.conf")," and added it to Apache with the command ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo a2ensite example.com.conf"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"It enforces access via HTTPS by redirecting all HTTP traffic."),(0,a.kt)("li",{parentName:"ul"},"As an additional security measurement you can uncomment the ",(0,a.kt)("inlineCode",{parentName:"li"},'<Location "/jatos">')," and config your local network. This will restrict the access to JATOS' GUI (every URL starting with ",(0,a.kt)("inlineCode",{parentName:"li"},"/jatos"),") to the local network.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'<VirtualHost *:80>\n  ServerName www.example.com\n  \n  # Redirect all unencrypted traffic to the respective HTTPS page\n  Redirect "/" "https://www.example.com/"\n</VirtualHost>\n\n<VirtualHost *:443>\n  ServerName www.example.com\n\n  # Restrict access to JATOS GUI to local network\n  #<Location "/jatos">\n  #  Order deny,allow\n  #  Deny from all\n  #  Allow from 127.0.0.1 ::1\n  #  Allow from localhost\n  #  Allow from 192.168\n  #</Location>\n\n  # Needed for JATOS to get the correct host and protocol\n  ProxyPreserveHost On\n  RequestHeader set X-Forwarded-Proto "https"\n  RequestHeader set X-Forwarded-Ssl "on"\n  \n  # Your certificate for encryption\n  SSLEngine On\n  SSLCertificateFile /etc/ssl/certs/localhost.crt\n  SSLCertificateKeyFile /etc/ssl/private/localhost.key\n\n  # JATOS uses WebSockets for its batch and group channels\n  RewriteEngine On\n  RewriteCond %{HTTP:Upgrade} =websocket [NC]\n  RewriteRule /(.*)           ws://localhost:9000/$1 [P,L]\n  RewriteCond %{HTTP:Upgrade} !=websocket [NC]\n  RewriteRule /(.*)           http://localhost:9000/$1 [P,L]\n\n  # Proxy everything to the JATOS running on localhost on port 9000\n  ProxyPass / http://localhost:9000/\n  ProxyPassReverse / http://localhost:9000/\n</VirtualHost>\n')))}d.isMDXComponent=!0}}]);