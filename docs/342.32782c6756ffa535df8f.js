(self.webpackChunkportfolio_webpack=self.webpackChunkportfolio_webpack||[]).push([[342],{342:(e,n,o)=>{"use strict";function t(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}o.r(n),o.d(n,{default:()=>a});const a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.events()}var n,o;return n=e,(o=[{key:"events",value:function(){var e=this;this.closeIcon.addEventListener("click",(function(){return e.closeTheModal()})),document.addEventListener("keyup",(function(n){return e.keyPressHandler(n)}))}},{key:"keyPressHandler",value:function(e){27==e.keyCode&&this.closeTheModal()}},{key:"openTheModal",value:function(){this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n        <div class="modal">\n        <div class="modal__inner">\n            <img class="modal__construction-image" src="images/under-construction/construction-triangle-3.png" alt="">\n            <h2> Project Under Construction </h2>\n            <p> The selected project is still under development. <br> Please check back again soon! </p>\n\n            <div class="main-doc-contact">\n                <a href="mailto:d.ogunbanjo@yahoo.com?Enquiry from your Online Portfolio">\n                    <i class="icon__contact--themeDark fas fa-envelope"></i>\n                </a>\n                <a href="https://github.com/David-again" target="_blank">\n                    <i class="icon__contact--themeDark fab fa-github"></i>\n                </a>\n                <a href="https://www.linkedin.com/in/seyiogunbanjo/" target="_blank">\n                    <i class="icon__contact--themeDark fab fa-linkedin-in"></i>\n                </a>\n                <p class="main-doc-contact__copyright"> © 2020 Copyright <em>CodeDemon </em> </p>\n            </div>\n\n            <div class="modal__close">X</div>\n        </div>\n    </div>\n        ')}}])&&t(n.prototype,o),e}()}}]);