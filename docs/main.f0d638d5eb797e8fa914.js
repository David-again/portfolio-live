(()=>{"use strict";var e,t,n={200:(e,t,n)=>{function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n(486),n(90);const o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".navbar__menu-icon"),this.menuContent=document.querySelector(".navbar__menu-content"),this.menuItems=document.querySelectorAll(".nav-link"),this.events()}var t,n;return t=e,(n=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleTheMenu()})),this.menuItems.forEach((function(t){return t.addEventListener("click",(function(){return e.closeTheMenu()}))}))}},{key:"toggleTheMenu",value:function(){this.menuContent.classList.toggle("navbar__menu-content--is-visible"),this.menuIcon.classList.toggle("navbar__menu-icon--close-x")}},{key:"closeTheMenu",value:function(){this.menuContent.classList.remove("navbar__menu-content--is-visible"),this.menuIcon.classList.remove("navbar__menu-icon--close-x")}}])&&r(t.prototype,n),e}();var a=n(294),c=n(935);n(213).all;const i=function(){return a.createElement("div",null,a.createElement("form",{name:"feedback",method:"POST","data-netlify":"true",className:"feedback-form"},a.createElement("div",{className:"feedback-form-content"},a.createElement("input",{type:"text",name:"feedback-name",id:"",placeholder:"Name"}),a.createElement("input",{type:"email",name:"feedback-email",id:"",placeholder:"Your email address"}),a.createElement("input",{type:"text",name:"feedback-subject",id:"",placeholder:"Subject"}),a.createElement("textarea",{name:"feedback-message",id:"",cols:"40",rows:"10",placeholder:"Your message here"}),a.createElement("button",{type:"submit",className:"feedback-submit-button"},"Send Feedback"))))};var l;c.render(a.createElement(i,null),document.querySelector("#contact-form")),new o,document.querySelectorAll(".under-construction").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===l?n.e(342).then(n.bind(n,342)).then((function(e){l=new e.default,setTimeout((function(){return l.openTheModal()}),20)})).catch((function(){return console.log("There was a problem.")})):l.openTheModal()}))}))}},r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={id:e,loaded:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=n,o.x=e=>{},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,n)=>(o.f[n](e,t),t)),[])),o.u=e=>e+".32782c6756ffa535df8f.js",o.miniCssF=e=>"styles."+{342:"32782c6756ffa535df8f",773:"2e6d20050bffd3e26b3a"}[e]+".css",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="portfolio-webpack:",o.l=(n,r,a)=>{if(e[n])e[n].push(r);else{var c,i;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var s=l[u];if(s.getAttribute("src")==n||s.getAttribute("data-webpack")==t+a){c=s;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.setAttribute("data-webpack",t+a),c.src=n),e[n]=[r];var d=(t,r)=>{c.onerror=c.onload=null,clearTimeout(f);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((e=>e(r))),t)return t(r)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=d.bind(null,c.onerror),c.onload=d.bind(null,c.onload),i&&document.head.appendChild(c)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0},t=[[200,773]];o.f.j=(t,n)=>{var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise(((n,o)=>{r=e[t]=[n,o]}));n.push(r[2]=a);var c=o.p+o.u(t),i=new Error;o.l(c,(n=>{if(o.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",i.name="ChunkLoadError",i.type=a,i.request=c,r[1](i)}}),"chunk-"+t)}};var n=e=>{},r=(r,a)=>{for(var c,i,[l,u,s,d]=a,f=0,m=[];f<l.length;f++)i=l[f],o.o(e,i)&&e[i]&&m.push(e[i][0]),e[i]=0;for(c in u)o.o(u,c)&&(o.m[c]=u[c]);for(s&&s(o),r&&r(a);m.length;)m.shift()();return d&&t.push.apply(t,d),n()},a=self.webpackChunkportfolio_webpack=self.webpackChunkportfolio_webpack||[];function c(){for(var n,r=0;r<t.length;r++){for(var a=t[r],c=!0,i=1;i<a.length;i++){var l=a[i];0!==e[l]&&(c=!1)}c&&(t.splice(r--,1),n=o(o.s=a[0]))}return 0===t.length&&(o.x(),o.x=e=>{}),n}a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a));var i=o.x;o.x=()=>(o.x=i||(e=>{}),(n=c)())})(),o.x()})();