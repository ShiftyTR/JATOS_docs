"use strict";(self.webpackChunkjatos_docs=self.webpackChunkjatos_docs||[]).push([[7223],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=o,h=u["".concat(p,".").concat(d)]||u[d]||c[d]||r;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4075:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],s={title:"JATOS on DigitalOcean",sidebar_position:3},p=void 0,l={unversionedId:"Serving the Internet/JATOS-on-DigitalOcean",id:"Serving the Internet/JATOS-on-DigitalOcean",isDocsHomePage:!1,title:"JATOS on DigitalOcean",description:"On this page we want to explain how to install JATOS on a server running on DigitalOcean. We tried to keep this tutorial as easy as possible: if everything runs smoothly you don't have to use the terminal at all.",source:"@site/docs/Serving the Internet/JATOS-on-DigitalOcean.md",sourceDirName:"Serving the Internet",slug:"/Serving the Internet/JATOS-on-DigitalOcean",permalink:"/./Serving the Internet/JATOS-on-DigitalOcean",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/Serving the Internet/JATOS-on-DigitalOcean.md",tags:[],version:"current",lastUpdatedBy:"Kristian Lange",lastUpdatedAt:1639401001,formattedLastUpdatedAt:"12/13/2021",sidebarPosition:3,frontMatter:{title:"JATOS on DigitalOcean",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Expose your local JATOS",permalink:"/./Serving the Internet/Expose-your-local-JATOS"},next:{title:"JATOS on AWS",permalink:"/./Serving the Internet/JATOS-in-Amazons-Cloud-without-Docker"}},m=[{value:"Setup a simple JATOS server on DigitalOcean",id:"setup-a-simple-jatos-server-on-digitalocean",children:[],level:2},{value:"Deleting your server",id:"deleting-your-server",children:[],level:2},{value:"Add HTTPS with Traefik and use your own domain name",id:"add-https-with-traefik-and-use-your-own-domain-name",children:[],level:2}],c={toc:m};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"On this page we want to explain how to install JATOS on a server running on DigitalOcean. We tried to keep this tutorial as easy as possible: if everything runs smoothly you don't have to use the terminal at all."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/"},"DigitalOcean")," is a cloud provider (like ",(0,r.kt)("em",{parentName:"p"},"AWS"),", ",(0,r.kt)("em",{parentName:"p"},"Google Cloud"),", ",(0,r.kt)("em",{parentName:"p"},"Azure")," etc.) that is comparatively easy to use and has good documentation. They offer something called ",(0,r.kt)("em",{parentName:"p"},"Droplets")," and ",(0,r.kt)("em",{parentName:"p"},"One-Click Apps")," which is just a fancy name for a pre-installed server in the cloud. And btw. we have no connections to DigitalOcean whatsoever."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keep in mind: A server in the cloud will cost money (circa $5 to $10 / month) and you will need a credit card.")),(0,r.kt)("h2",{id:"setup-a-simple-jatos-server-on-digitalocean"},"Setup a simple JATOS server on DigitalOcean"),(0,r.kt)("p",null,"First we want to set up a simple JATOS server without encryption (HTTPS) or a domain name. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set up an account with ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/"},"DigitalOcean")," -you'll have to provide billing information.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use this ",(0,r.kt)("a",{parentName:"p",href:"https://cloud.digitalocean.com/droplets/new?image=docker-18-04"},"link")," to create a Droplet with ",(0,r.kt)("em",{parentName:"p"},"Docker")," on ",(0,r.kt)("em",{parentName:"p"},"Ubuntu")," pre-installed. Do not press ",(0,r.kt)("em",{parentName:"p"},"Create")," yet - we need to set up things first."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Selected Marketplace with Docker on Ubuntu",src:a(4404).Z})),(0,r.kt)("p",{parentName:"li"},"Your sreen should look similar to this one: Selected ",(0,r.kt)("em",{parentName:"p"},"Marketplace")," (was One-Click App in past) with ",(0,r.kt)("em",{parentName:"p"},"Docker")," on ",(0,r.kt)("em",{parentName:"p"},"Ubuntu")," (currently it's called ",(0,r.kt)("em",{parentName:"p"},"Docker 18.06.1-ce-3 on 18.04"),")")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down to ",(0,r.kt)("em",{parentName:"p"},"Choose a size"),": Droplet size depends on your experiments. Common numbers are 1GB, 2GB, 4GB for a single researcher or group - or 8GB for an institutional server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down to ",(0,r.kt)("em",{parentName:"p"},"Choose region"),": You can actually use any you want, but best is to choose one that is near to your participants to reduce loading time.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"Select additional options"),": Here activate ",(0,r.kt)("strong",{parentName:"p"},"User Data")," and ",(0,r.kt)("em",{parentName:"p"},"copy+paste")," the following script in the text field:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#!/bin/bash\n\n# Run JATOS as docker container\ndocker run -d --restart=always -p 80:9000 jatos/jatos:latest\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Droplet&#39;s User Data",src:a(8312).Z})),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("em",{parentName:"p"},"User Data")," should look similar to this screenshot here")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You could also add an SSH key under ",(0,r.kt)("em",{parentName:"p"},"Add your SSH keys"),". If you don't know what this is, just ignore it - you will still be able to access the server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Finally click the ",(0,r.kt)("em",{parentName:"p"},"Create")," button")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Try out your JATOS: Now the server is being created which can take a couple seconds. You should get an ",(0,r.kt)("strong",{parentName:"p"},"email")," from DigitalOcean with your ",(0,r.kt)("em",{parentName:"p"},"server's (aka Droplet) name"),", ",(0,r.kt)("em",{parentName:"p"},"IP address"),", ",(0,r.kt)("em",{parentName:"p"},"username")," and ",(0,r.kt)("em",{parentName:"p"},"password"),". Copy the IP into your browser's address bar and if everything went well, you will see a JATOS login screen.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into JATOS with \u2018admin\u2019 and password \u2018admin\u2019")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The first thing you should do is change your admin password:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Click on \u2018Admin (admin) in top-right header"),(0,r.kt)("li",{parentName:"ol"},"Click \u2018Change Password\u2019")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Voila, you have your own JATOS server.")),(0,r.kt)("p",null,"Although usually not necessary, you can also access your server via ",(0,r.kt)("em",{parentName:"p"},"SSH"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh root@xx.xx.xx.xx")," (exchange ",(0,r.kt)("em",{parentName:"p"},"xx.xx.xx.xx")," with your IP from the email). Use the password from the email. The first time you will be asked to change your password."),(0,r.kt)("h2",{id:"deleting-your-server"},"Deleting your server"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/docs/droplets/how-to/delete/"},"Deleting the server is straightforward"),". In DigitalOcean, in the left menu of your Droplet choose ",(0,r.kt)("em",{parentName:"p"},"Destroy"),". DigitalOcean charges you by second. So if you want to create a new JATOS server because something went wrong, just ",(0,r.kt)("em",{parentName:"p"},"Destroy")," the old one and start over. "),(0,r.kt)("p",null,"Now, you might want to use a nicer address than an IP and add some encryption-safety with HTTPS to your server - then read on."),(0,r.kt)("h2",{id:"add-https-with-traefik-and-use-your-own-domain-name"},"Add HTTPS with Traefik and use your own domain name"),(0,r.kt)("p",null,"This part is ",(0,r.kt)("strong",{parentName:"p"},"optional")," and is only necessary if you want to have your own domain name instead of an IP and use encryption (HTTPS)."),(0,r.kt)("p",null,"We will use ",(0,r.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik")," as a proxy. Traefik adds encryption out-of-the-box (by using ",(0,r.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let\u2019s Encrypt"),") and is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/containous/traefik"},"open source")," and free to use. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Buy your own domain name"),": Sorry, we can't give you a domain name - you have to get your own. But there are plenty ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/how-to-point-to-digitalocean-nameservers-from-common-domain-registrars"},"domain name registrars that help you with this business"),". Another option is to talk to your IT department and convince them to give you a subdomain for free."),(0,r.kt)("p",null,"Now with a domain name you can encrypt your server's communication with HTTPS."),(0,r.kt)("p",null,"To create a JATOS server with Traefik follow the instructions of the first paragraph (",(0,r.kt)("a",{parentName:"p",href:"#setup-a-simple-jatos-server-on-digitalocean"},"Setup a simple JATOS server on DigitalOcean"),") but in the ",(0,r.kt)("strong",{parentName:"p"},"User Data")," field of ",(0,r.kt)("em",{parentName:"p"},"Select additional options")," put the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/bash\n\nDOMAIN_NAME="my.domain.name"\nEMAIL="my.email@foo.com"\n\ncurl https://raw.githubusercontent.com/JATOS/JATOS/master/deploy/docker-compose.yaml > /root/docker-compose.yaml\ncurl https://raw.githubusercontent.com/JATOS/JATOS/master/deploy/traefik.toml > /root/traefik.toml\n\nsed -i "s/<DOMAIN_NAME>/${DOMAIN_NAME}/g" /root/docker-compose.yaml\nsed -i "s/<DOMAIN_NAME>/${DOMAIN_NAME}/g" /root/traefik.toml\nsed -i "s/<EMAIL>/${EMAIL}/g" /root/traefik.toml\n\ntouch /root/acme.json\nchmod 600 /root/acme.json\ndocker network create proxy\ndocker-compose -f /root/docker-compose.yaml up -d\n')),(0,r.kt)("p",null,"Exchange ",(0,r.kt)("inlineCode",{parentName:"p"},"my.domain.name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"my.email@foo.com")," with your own domain name and email address. Your email we need for encryption with ",(0,r.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt"),"."),(0,r.kt)("p",null,"This script downloads two config files, one for Traefik and one for Docker Compose. If you are interested you can examine them under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS/blob/master/deploy/docker-compose.yaml"},"https://github.com/JATOS/JATOS/blob/master/deploy/docker-compose.yaml")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/JATOS/JATOS/blob/master/deploy/traefik.toml"},"https://github.com/JATOS/JATOS/blob/master/deploy/traefik.toml"),". Docker Compose will start JATOS' and Traefik's container for us."),(0,r.kt)("p",null,"After you've created your Droplet you still have to point your domain name to your server's IP address. This involves dealing with things like ",(0,r.kt)("em",{parentName:"p"},"A records")," or ",(0,r.kt)("em",{parentName:"p"},"AAAA records")," or ",(0,r.kt)("em",{parentName:"p"},"DNS")," servers and simply can be quite annoying. You can ",(0,r.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/docs/networking/dns/how-to/manage-records/"},"manage your DNS settings with Digital Ocean")," or the registar where you got your domain name (they will have some online help). The important thing is to put the ",(0,r.kt)("em",{parentName:"p"},"IPv4")," address of your server into the ",(0,r.kt)("em",{parentName:"p"},"A record")," of your DNS settings (or if you have an ",(0,r.kt)("em",{parentName:"p"},"IPv6")," address the ",(0,r.kt)("em",{parentName:"p"},"AAAA record"),"). And remember, DNS changes can take from some minutes to a day to propagate throughout the Internet - So your domain name might take some time to work (you can use ",(0,r.kt)("a",{parentName:"p",href:"http://www.kloth.net/services/nslookup.php"},"nslookup")," to check)."),(0,r.kt)("p",null,"Then as a last step, after your domain name points to your server's IP, you have to reset your server (switch off the Droplet and back on). Now Traefik requests a certificate for your domain and use HTTPS from now on. Sometimes it's necessary to restart a second time."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Done. You have a JATOS server with encryption on your domain name.")))}u.isMDXComponent=!0},4404:function(e,t,a){t.Z=a.p+"assets/images/Screenshot-DigitalOcean-createDroplet-oneClickApp-0967fbc70d65197b84b2b5ced28a902f.png"},8312:function(e,t,a){t.Z=a.p+"assets/images/Screenshot-DigitalOcean-createDroplet-userData-4964cd0f78ee78bac536fbc1f21d7190.png"}}]);