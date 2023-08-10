(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nl={exports:{}};(function(e){(function(t,n){e.exports=n(t)})(typeof Xi<"u"?Xi:typeof window<"u"?window:Xi,function(t){if(typeof t>"u"&&typeof t.document>"u")return!1;var n="Notiflix",r=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,i='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',s={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},o,a={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},c=function(E){return console.error("%c "+n+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+E+r)},l=function(E){return E||(E="head"),t.document[E]===null?(c(`
Notiflix needs to be appended to the "<`+E+'>" element, but you called it before the "<'+E+'>" element has been created.'),!1):!0},u=function(E,w){if(!l("head"))return!1;if(E()!==null&&!t.document.getElementById(w)){var A=t.document.createElement("style");A.id=w,A.innerHTML=E(),t.document.head.appendChild(A)}},h=function(){var E={},w=!1,A=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(w=arguments[0],A++);for(var B=function(G){for(var F in G)Object.prototype.hasOwnProperty.call(G,F)&&(w&&Object.prototype.toString.call(G[F])==="[object Object]"?E[F]=h(E[F],G[F]):E[F]=G[F])};A<arguments.length;A++)B(arguments[A]);return E},d=function(E){var w=t.document.createElement("div");return w.innerHTML=E,w.textContent||w.innerText||""},f=function(){var E='[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';return E||null},m=0,_=function(E,w,A,B){if(!l("body"))return!1;o||I.Notify.init({});var G=h(!0,o,{});if(typeof A=="object"&&!Array.isArray(A)||typeof B=="object"&&!Array.isArray(B)){var F={};typeof A=="object"?F=A:typeof B=="object"&&(F=B),o=h(!0,o,F)}var J=o[E.toLocaleLowerCase("en")];m++,typeof w!="string"&&(w="Notiflix "+E),o.plainText&&(w=d(w)),!o.plainText&&w.length>o.messageMaxLength&&(o=h(!0,o,{closeButton:!0,messageMaxLength:150}),w='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),w.length>o.messageMaxLength&&(w=w.substring(0,o.messageMaxLength)+"..."),o.fontAwesomeIconStyle==="shadow"&&(J.fontAwesomeIconColor=J.background),o.cssAnimation||(o.cssAnimationDuration=0);var R=t.document.getElementById(a.wrapID)||t.document.createElement("div");if(R.id=a.wrapID,R.style.width=o.width,R.style.zIndex=o.zindex,R.style.opacity=o.opacity,o.position==="center-center"?(R.style.left=o.distance,R.style.top=o.distance,R.style.right=o.distance,R.style.bottom=o.distance,R.style.margin="auto",R.classList.add("nx-flex-center-center"),R.style.maxHeight="calc((100vh - "+o.distance+") - "+o.distance+")",R.style.display="flex",R.style.flexWrap="wrap",R.style.flexDirection="column",R.style.justifyContent="center",R.style.alignItems="center",R.style.pointerEvents="none"):o.position==="center-top"?(R.style.left=o.distance,R.style.right=o.distance,R.style.top=o.distance,R.style.bottom="auto",R.style.margin="auto"):o.position==="center-bottom"?(R.style.left=o.distance,R.style.right=o.distance,R.style.bottom=o.distance,R.style.top="auto",R.style.margin="auto"):o.position==="right-bottom"?(R.style.right=o.distance,R.style.bottom=o.distance,R.style.top="auto",R.style.left="auto"):o.position==="left-top"?(R.style.left=o.distance,R.style.top=o.distance,R.style.right="auto",R.style.bottom="auto"):o.position==="left-bottom"?(R.style.left=o.distance,R.style.bottom=o.distance,R.style.top="auto",R.style.right="auto"):(R.style.right=o.distance,R.style.top=o.distance,R.style.left="auto",R.style.bottom="auto"),o.backOverlay){var Y=t.document.getElementById(a.overlayID)||t.document.createElement("div");Y.id=a.overlayID,Y.style.width="100%",Y.style.height="100%",Y.style.position="fixed",Y.style.zIndex=o.zindex-1,Y.style.left=0,Y.style.top=0,Y.style.right=0,Y.style.bottom=0,Y.style.background=J.backOverlayColor||o.backOverlayColor,Y.className=o.cssAnimation?"nx-with-animation":"",Y.style.animationDuration=o.cssAnimation?o.cssAnimationDuration+"ms":"",t.document.getElementById(a.overlayID)||t.document.body.appendChild(Y)}t.document.getElementById(a.wrapID)||t.document.body.appendChild(R);var W=t.document.createElement("div");W.id=o.ID+"-"+m,W.className=o.className+" "+J.childClassName+" "+(o.cssAnimation?"nx-with-animation":"")+" "+(o.useIcon?"nx-with-icon":"")+" nx-"+o.cssAnimationStyle+" "+(o.closeButton&&typeof A!="function"?"nx-with-close-button":"")+" "+(typeof A=="function"?"nx-with-callback":"")+" "+(o.clickToClose?"nx-notify-click-to-close":""),W.style.fontSize=o.fontSize,W.style.color=J.textColor,W.style.background=J.background,W.style.borderRadius=o.borderRadius,W.style.pointerEvents="all",o.rtl&&(W.setAttribute("dir","rtl"),W.classList.add("nx-rtl-on")),W.style.fontFamily='"'+o.fontFamily+'", '+i,o.cssAnimation&&(W.style.animationDuration=o.cssAnimationDuration+"ms");var yr="";if(o.closeButton&&typeof A!="function"&&(yr='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+J.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),o.useIcon)if(o.useFontAwesome)W.innerHTML='<i style="color:'+J.fontAwesomeIconColor+"; font-size:"+o.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+J.fontAwesomeClassName+" "+(o.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+w+"</span>"+(o.closeButton?yr:"");else{var hn="";E===s.Success?hn='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+J.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':E===s.Failure?hn='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+J.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':E===s.Warning?hn='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+J.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':E===s.Info&&(hn='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+J.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),W.innerHTML=hn+'<span class="nx-message nx-with-icon">'+w+"</span>"+(o.closeButton?yr:"")}else W.innerHTML='<span class="nx-message">'+w+"</span>"+(o.closeButton?yr:"");if(o.position==="left-bottom"||o.position==="right-bottom"){var Ra=t.document.getElementById(a.wrapID);Ra.insertBefore(W,Ra.firstChild)}else t.document.getElementById(a.wrapID).appendChild(W);var Tt=t.document.getElementById(W.id);if(Tt){var Ki,Gi,Qi=function(){Tt.classList.add("nx-remove");var At=t.document.getElementById(a.overlayID);At&&R.childElementCount<=0&&At.classList.add("nx-remove"),clearTimeout(Ki)},$i=function(){if(Tt&&Tt.parentNode!==null&&Tt.parentNode.removeChild(Tt),R.childElementCount<=0&&R.parentNode!==null){R.parentNode.removeChild(R);var At=t.document.getElementById(a.overlayID);At&&At.parentNode!==null&&At.parentNode.removeChild(At)}clearTimeout(Gi)};if(o.closeButton&&typeof A!="function"){var Fd=t.document.getElementById(W.id).querySelector("span.nx-close-button");Fd.addEventListener("click",function(){Qi();var At=setTimeout(function(){$i(),clearTimeout(At)},o.cssAnimationDuration)})}if((typeof A=="function"||o.clickToClose)&&Tt.addEventListener("click",function(){typeof A=="function"&&A(),Qi();var At=setTimeout(function(){$i(),clearTimeout(At)},o.cssAnimationDuration)}),!o.closeButton&&typeof A!="function"){var ba=function(){Ki=setTimeout(function(){Qi()},o.timeout),Gi=setTimeout(function(){$i()},o.timeout+o.cssAnimationDuration)};ba(),o.pauseOnHover&&(Tt.addEventListener("mouseenter",function(){Tt.classList.add("nx-paused"),clearTimeout(Ki),clearTimeout(Gi)}),Tt.addEventListener("mouseleave",function(){Tt.classList.remove("nx-paused"),ba()}))}}if(o.showOnlyTheLastOne&&m>0)for(var Sa=t.document.querySelectorAll("[id^="+o.ID+"-]:not([id="+o.ID+"-"+m+"])"),Ji=0;Ji<Sa.length;Ji++){var Yi=Sa[Ji];Yi.parentNode!==null&&Yi.parentNode.removeChild(Yi)}o=h(!0,o,G)},I={Notify:{init:function(E){o=h(!0,a,E),u(f,"NotiflixNotifyInternalCSS")},merge:function(E){if(o)o=h(!0,o,E);else return c("You have to initialize the Notify module before call Merge function."),!1},success:function(E,w,A){_(s.Success,E,w,A)},failure:function(E,w,A){_(s.Failure,E,w,A)},warning:function(E,w,A){_(s.Warning,E,w,A)},info:function(E,w,A){_(s.Info,E,w,A)}}};return typeof t.Notiflix=="object"?h(!0,t.Notiflix,{Notify:I.Notify}):{Notify:I.Notify}})})(nl);var Ud=nl.exports;function rl(e,t){return function(){return e.apply(t,arguments)}}const{toString:Bd}=Object.prototype,{getPrototypeOf:oo}=Object,li=(e=>t=>{const n=Bd.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Ft=e=>(e=e.toLowerCase(),t=>li(t)===e),ui=e=>t=>typeof t===e,{isArray:Xe}=Array,Sn=ui("undefined");function jd(e){return e!==null&&!Sn(e)&&e.constructor!==null&&!Sn(e.constructor)&&vt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const il=Ft("ArrayBuffer");function zd(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&il(e.buffer),t}const Wd=ui("string"),vt=ui("function"),sl=ui("number"),hi=e=>e!==null&&typeof e=="object",qd=e=>e===!0||e===!1,Cr=e=>{if(li(e)!=="object")return!1;const t=oo(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Hd=Ft("Date"),Kd=Ft("File"),Gd=Ft("Blob"),Qd=Ft("FileList"),$d=e=>hi(e)&&vt(e.pipe),Jd=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||vt(e.append)&&((t=li(e))==="formdata"||t==="object"&&vt(e.toString)&&e.toString()==="[object FormData]"))},Yd=Ft("URLSearchParams"),Xd=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Qn(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,i;if(typeof e!="object"&&(e=[e]),Xe(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{const s=n?Object.getOwnPropertyNames(e):Object.keys(e),o=s.length;let a;for(r=0;r<o;r++)a=s[r],t.call(null,e[a],a,e)}}function ol(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,i;for(;r-- >0;)if(i=n[r],t===i.toLowerCase())return i;return null}const al=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),cl=e=>!Sn(e)&&e!==al;function As(){const{caseless:e}=cl(this)&&this||{},t={},n=(r,i)=>{const s=e&&ol(t,i)||i;Cr(t[s])&&Cr(r)?t[s]=As(t[s],r):Cr(r)?t[s]=As({},r):Xe(r)?t[s]=r.slice():t[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Qn(arguments[r],n);return t}const Zd=(e,t,n,{allOwnKeys:r}={})=>(Qn(t,(i,s)=>{n&&vt(i)?e[s]=rl(i,n):e[s]=i},{allOwnKeys:r}),e),tf=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ef=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},nf=(e,t,n,r)=>{let i,s,o;const a={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),s=i.length;s-- >0;)o=i[s],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&oo(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},rf=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},sf=e=>{if(!e)return null;if(Xe(e))return e;let t=e.length;if(!sl(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},of=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&oo(Uint8Array)),af=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let i;for(;(i=r.next())&&!i.done;){const s=i.value;t.call(e,s[0],s[1])}},cf=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},lf=Ft("HTMLFormElement"),uf=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Ca=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),hf=Ft("RegExp"),ll=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Qn(n,(i,s)=>{t(i,s,e)!==!1&&(r[s]=i)}),Object.defineProperties(e,r)},df=e=>{ll(e,(t,n)=>{if(vt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(vt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},ff=(e,t)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Xe(e)?r(e):r(String(e).split(t)),n},pf=()=>{},mf=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Zi="abcdefghijklmnopqrstuvwxyz",Pa="0123456789",ul={DIGIT:Pa,ALPHA:Zi,ALPHA_DIGIT:Zi+Zi.toUpperCase()+Pa},gf=(e=16,t=ul.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function yf(e){return!!(e&&vt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const _f=e=>{const t=new Array(10),n=(r,i)=>{if(hi(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[i]=r;const s=Xe(r)?[]:{};return Qn(r,(o,a)=>{const c=n(o,i+1);!Sn(c)&&(s[a]=c)}),t[i]=void 0,s}}return r};return n(e,0)},Ef=Ft("AsyncFunction"),vf=e=>e&&(hi(e)||vt(e))&&vt(e.then)&&vt(e.catch),p={isArray:Xe,isArrayBuffer:il,isBuffer:jd,isFormData:Jd,isArrayBufferView:zd,isString:Wd,isNumber:sl,isBoolean:qd,isObject:hi,isPlainObject:Cr,isUndefined:Sn,isDate:Hd,isFile:Kd,isBlob:Gd,isRegExp:hf,isFunction:vt,isStream:$d,isURLSearchParams:Yd,isTypedArray:of,isFileList:Qd,forEach:Qn,merge:As,extend:Zd,trim:Xd,stripBOM:tf,inherits:ef,toFlatObject:nf,kindOf:li,kindOfTest:Ft,endsWith:rf,toArray:sf,forEachEntry:af,matchAll:cf,isHTMLForm:lf,hasOwnProperty:Ca,hasOwnProp:Ca,reduceDescriptors:ll,freezeMethods:df,toObjectSet:ff,toCamelCase:uf,noop:pf,toFiniteNumber:mf,findKey:ol,global:al,isContextDefined:cl,ALPHABET:ul,generateString:gf,isSpecCompliantForm:yf,toJSONObject:_f,isAsyncFn:Ef,isThenable:vf};function O(e,t,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}p.inherits(O,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:p.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const hl=O.prototype,dl={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{dl[e]={value:e}});Object.defineProperties(O,dl);Object.defineProperty(hl,"isAxiosError",{value:!0});O.from=(e,t,n,r,i,s)=>{const o=Object.create(hl);return p.toFlatObject(e,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),O.call(o,e.message,t,n,r,i),o.cause=e,o.name=e.name,s&&Object.assign(o,s),o};const If=null;function Rs(e){return p.isPlainObject(e)||p.isArray(e)}function fl(e){return p.endsWith(e,"[]")?e.slice(0,-2):e}function ka(e,t,n){return e?e.concat(t).map(function(i,s){return i=fl(i),!n&&s?"["+i+"]":i}).join(n?".":""):t}function wf(e){return p.isArray(e)&&!e.some(Rs)}const Tf=p.toFlatObject(p,{},null,function(t){return/^is[A-Z]/.test(t)});function di(e,t,n){if(!p.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=p.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,I){return!p.isUndefined(I[_])});const r=n.metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&p.isSpecCompliantForm(t);if(!p.isFunction(i))throw new TypeError("visitor must be a function");function l(m){if(m===null)return"";if(p.isDate(m))return m.toISOString();if(!c&&p.isBlob(m))throw new O("Blob is not supported. Use a Buffer instead.");return p.isArrayBuffer(m)||p.isTypedArray(m)?c&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function u(m,_,I){let E=m;if(m&&!I&&typeof m=="object"){if(p.endsWith(_,"{}"))_=r?_:_.slice(0,-2),m=JSON.stringify(m);else if(p.isArray(m)&&wf(m)||(p.isFileList(m)||p.endsWith(_,"[]"))&&(E=p.toArray(m)))return _=fl(_),E.forEach(function(A,B){!(p.isUndefined(A)||A===null)&&t.append(o===!0?ka([_],B,s):o===null?_:_+"[]",l(A))}),!1}return Rs(m)?!0:(t.append(ka(I,_,s),l(m)),!1)}const h=[],d=Object.assign(Tf,{defaultVisitor:u,convertValue:l,isVisitable:Rs});function f(m,_){if(!p.isUndefined(m)){if(h.indexOf(m)!==-1)throw Error("Circular reference detected in "+_.join("."));h.push(m),p.forEach(m,function(E,w){(!(p.isUndefined(E)||E===null)&&i.call(t,E,p.isString(w)?w.trim():w,_,d))===!0&&f(E,_?_.concat(w):[w])}),h.pop()}}if(!p.isObject(e))throw new TypeError("data must be an object");return f(e),t}function Na(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function ao(e,t){this._pairs=[],e&&di(e,this,t)}const pl=ao.prototype;pl.append=function(t,n){this._pairs.push([t,n])};pl.toString=function(t){const n=t?function(r){return t.call(this,r,Na)}:Na;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Af(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ml(e,t,n){if(!t)return e;const r=n&&n.encode||Af,i=n&&n.serialize;let s;if(i?s=i(t,n):s=p.isURLSearchParams(t)?t.toString():new ao(t,n).toString(r),s){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Rf{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){p.forEach(this.handlers,function(r){r!==null&&t(r)})}}const xa=Rf,gl={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},bf=typeof URLSearchParams<"u"?URLSearchParams:ao,Sf=typeof FormData<"u"?FormData:null,Cf=typeof Blob<"u"?Blob:null,Pf=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),kf=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),kt={isBrowser:!0,classes:{URLSearchParams:bf,FormData:Sf,Blob:Cf},isStandardBrowserEnv:Pf,isStandardBrowserWebWorkerEnv:kf,protocols:["http","https","file","blob","url","data"]};function Nf(e,t){return di(e,new kt.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return kt.isNode&&p.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},t))}function xf(e){return p.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Df(e){const t={},n=Object.keys(e);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],t[s]=e[s];return t}function yl(e){function t(n,r,i,s){let o=n[s++];const a=Number.isFinite(+o),c=s>=n.length;return o=!o&&p.isArray(i)?i.length:o,c?(p.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!a):((!i[o]||!p.isObject(i[o]))&&(i[o]=[]),t(n,r,i[o],s)&&p.isArray(i[o])&&(i[o]=Df(i[o])),!a)}if(p.isFormData(e)&&p.isFunction(e.entries)){const n={};return p.forEachEntry(e,(r,i)=>{t(xf(r),i,n,0)}),n}return null}const Vf={"Content-Type":void 0};function Of(e,t,n){if(p.isString(e))try{return(t||JSON.parse)(e),p.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const fi={transitional:gl,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=p.isObject(t);if(s&&p.isHTMLForm(t)&&(t=new FormData(t)),p.isFormData(t))return i&&i?JSON.stringify(yl(t)):t;if(p.isArrayBuffer(t)||p.isBuffer(t)||p.isStream(t)||p.isFile(t)||p.isBlob(t))return t;if(p.isArrayBufferView(t))return t.buffer;if(p.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Nf(t,this.formSerializer).toString();if((a=p.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return di(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),Of(t)):t}],transformResponse:[function(t){const n=this.transitional||fi.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(t&&p.isString(t)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?O.from(a,O.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:kt.classes.FormData,Blob:kt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(t){fi.headers[t]={}});p.forEach(["post","put","patch"],function(t){fi.headers[t]=p.merge(Vf)});const co=fi,Lf=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Mf=e=>{const t={};let n,r,i;return e&&e.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||t[n]&&Lf[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Da=Symbol("internals");function dn(e){return e&&String(e).trim().toLowerCase()}function Pr(e){return e===!1||e==null?e:p.isArray(e)?e.map(Pr):String(e)}function Ff(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Uf=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ts(e,t,n,r,i){if(p.isFunction(r))return r.call(this,t,n);if(i&&(t=n),!!p.isString(t)){if(p.isString(r))return t.indexOf(r)!==-1;if(p.isRegExp(r))return r.test(t)}}function Bf(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function jf(e,t){const n=p.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(i,s,o){return this[r].call(this,t,i,s,o)},configurable:!0})})}class pi{constructor(t){t&&this.set(t)}set(t,n,r){const i=this;function s(a,c,l){const u=dn(c);if(!u)throw new Error("header name must be a non-empty string");const h=p.findKey(i,u);(!h||i[h]===void 0||l===!0||l===void 0&&i[h]!==!1)&&(i[h||c]=Pr(a))}const o=(a,c)=>p.forEach(a,(l,u)=>s(l,u,c));return p.isPlainObject(t)||t instanceof this.constructor?o(t,n):p.isString(t)&&(t=t.trim())&&!Uf(t)?o(Mf(t),n):t!=null&&s(n,t,r),this}get(t,n){if(t=dn(t),t){const r=p.findKey(this,t);if(r){const i=this[r];if(!n)return i;if(n===!0)return Ff(i);if(p.isFunction(n))return n.call(this,i,r);if(p.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=dn(t),t){const r=p.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ts(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let i=!1;function s(o){if(o=dn(o),o){const a=p.findKey(r,o);a&&(!n||ts(r,r[a],a,n))&&(delete r[a],i=!0)}}return p.isArray(t)?t.forEach(s):s(t),i}clear(t){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!t||ts(this,this[s],s,t,!0))&&(delete this[s],i=!0)}return i}normalize(t){const n=this,r={};return p.forEach(this,(i,s)=>{const o=p.findKey(r,s);if(o){n[o]=Pr(i),delete n[s];return}const a=t?Bf(s):String(s).trim();a!==s&&delete n[s],n[a]=Pr(i),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return p.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=t&&p.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(i=>r.set(i)),r}static accessor(t){const r=(this[Da]=this[Da]={accessors:{}}).accessors,i=this.prototype;function s(o){const a=dn(o);r[a]||(jf(i,o),r[a]=!0)}return p.isArray(t)?t.forEach(s):s(t),this}}pi.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);p.freezeMethods(pi.prototype);p.freezeMethods(pi);const zt=pi;function es(e,t){const n=this||co,r=t||n,i=zt.from(r.headers);let s=r.data;return p.forEach(e,function(a){s=a.call(n,s,i.normalize(),t?t.status:void 0)}),i.normalize(),s}function _l(e){return!!(e&&e.__CANCEL__)}function $n(e,t,n){O.call(this,e??"canceled",O.ERR_CANCELED,t,n),this.name="CanceledError"}p.inherits($n,O,{__CANCEL__:!0});function zf(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new O("Request failed with status code "+n.status,[O.ERR_BAD_REQUEST,O.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Wf=kt.isStandardBrowserEnv?function(){return{write:function(n,r,i,s,o,a){const c=[];c.push(n+"="+encodeURIComponent(r)),p.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),p.isString(s)&&c.push("path="+s),p.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function qf(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Hf(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function El(e,t){return e&&!qf(t)?Hf(e,t):t}const Kf=kt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const a=p.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function Gf(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Qf(e,t){e=e||10;const n=new Array(e),r=new Array(e);let i=0,s=0,o;return t=t!==void 0?t:1e3,function(c){const l=Date.now(),u=r[s];o||(o=l),n[i]=c,r[i]=l;let h=s,d=0;for(;h!==i;)d+=n[h++],h=h%e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),l-o<t)return;const f=u&&l-u;return f?Math.round(d*1e3/f):void 0}}function Va(e,t){let n=0;const r=Qf(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a),l=s<=o;n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-s)/c:void 0,event:i};u[t?"download":"upload"]=!0,e(u)}}const $f=typeof XMLHttpRequest<"u",Jf=$f&&function(e){return new Promise(function(n,r){let i=e.data;const s=zt.from(e.headers).normalize(),o=e.responseType;let a;function c(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}p.isFormData(i)&&(kt.isStandardBrowserEnv||kt.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let l=new XMLHttpRequest;if(e.auth){const f=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.set("Authorization","Basic "+btoa(f+":"+m))}const u=El(e.baseURL,e.url);l.open(e.method.toUpperCase(),ml(u,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function h(){if(!l)return;const f=zt.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),_={data:!o||o==="text"||o==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:f,config:e,request:l};zf(function(E){n(E),c()},function(E){r(E),c()},_),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){l&&(r(new O("Request aborted",O.ECONNABORTED,e,l)),l=null)},l.onerror=function(){r(new O("Network Error",O.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let m=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const _=e.transitional||gl;e.timeoutErrorMessage&&(m=e.timeoutErrorMessage),r(new O(m,_.clarifyTimeoutError?O.ETIMEDOUT:O.ECONNABORTED,e,l)),l=null},kt.isStandardBrowserEnv){const f=(e.withCredentials||Kf(u))&&e.xsrfCookieName&&Wf.read(e.xsrfCookieName);f&&s.set(e.xsrfHeaderName,f)}i===void 0&&s.setContentType(null),"setRequestHeader"in l&&p.forEach(s.toJSON(),function(m,_){l.setRequestHeader(_,m)}),p.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),o&&o!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Va(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Va(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=f=>{l&&(r(!f||f.type?new $n(null,e,l):f),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const d=Gf(u);if(d&&kt.protocols.indexOf(d)===-1){r(new O("Unsupported protocol "+d+":",O.ERR_BAD_REQUEST,e));return}l.send(i||null)})},kr={http:If,xhr:Jf};p.forEach(kr,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Yf={getAdapter:e=>{e=p.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let i=0;i<t&&(n=e[i],!(r=p.isString(n)?kr[n.toLowerCase()]:n));i++);if(!r)throw r===!1?new O(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(p.hasOwnProp(kr,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!p.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:kr};function ns(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new $n(null,e)}function Oa(e){return ns(e),e.headers=zt.from(e.headers),e.data=es.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Yf.getAdapter(e.adapter||co.adapter)(e).then(function(r){return ns(e),r.data=es.call(e,e.transformResponse,r),r.headers=zt.from(r.headers),r},function(r){return _l(r)||(ns(e),r&&r.response&&(r.response.data=es.call(e,e.transformResponse,r.response),r.response.headers=zt.from(r.response.headers))),Promise.reject(r)})}const La=e=>e instanceof zt?e.toJSON():e;function ze(e,t){t=t||{};const n={};function r(l,u,h){return p.isPlainObject(l)&&p.isPlainObject(u)?p.merge.call({caseless:h},l,u):p.isPlainObject(u)?p.merge({},u):p.isArray(u)?u.slice():u}function i(l,u,h){if(p.isUndefined(u)){if(!p.isUndefined(l))return r(void 0,l,h)}else return r(l,u,h)}function s(l,u){if(!p.isUndefined(u))return r(void 0,u)}function o(l,u){if(p.isUndefined(u)){if(!p.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function a(l,u,h){if(h in t)return r(l,u);if(h in e)return r(void 0,l)}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,u)=>i(La(l),La(u),!0)};return p.forEach(Object.keys(Object.assign({},e,t)),function(u){const h=c[u]||i,d=h(e[u],t[u],u);p.isUndefined(d)&&h!==a||(n[u]=d)}),n}const vl="1.4.0",lo={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{lo[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ma={};lo.transitional=function(t,n,r){function i(s,o){return"[Axios v"+vl+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,a)=>{if(t===!1)throw new O(i(o," has been removed"+(n?" in "+n:"")),O.ERR_DEPRECATED);return n&&!Ma[o]&&(Ma[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(s,o,a):!0}};function Xf(e,t,n){if(typeof e!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let i=r.length;for(;i-- >0;){const s=r[i],o=t[s];if(o){const a=e[s],c=a===void 0||o(a,s,e);if(c!==!0)throw new O("option "+s+" must be "+c,O.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new O("Unknown option "+s,O.ERR_BAD_OPTION)}}const bs={assertOptions:Xf,validators:lo},Yt=bs.validators;class Ur{constructor(t){this.defaults=t,this.interceptors={request:new xa,response:new xa}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=ze(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&bs.assertOptions(r,{silentJSONParsing:Yt.transitional(Yt.boolean),forcedJSONParsing:Yt.transitional(Yt.boolean),clarifyTimeoutError:Yt.transitional(Yt.boolean)},!1),i!=null&&(p.isFunction(i)?n.paramsSerializer={serialize:i}:bs.assertOptions(i,{encode:Yt.function,serialize:Yt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&p.merge(s.common,s[n.method]),o&&p.forEach(["delete","get","head","post","put","patch","common"],m=>{delete s[m]}),n.headers=zt.concat(o,s);const a=[];let c=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(c=c&&_.synchronous,a.unshift(_.fulfilled,_.rejected))});const l=[];this.interceptors.response.forEach(function(_){l.push(_.fulfilled,_.rejected)});let u,h=0,d;if(!c){const m=[Oa.bind(this),void 0];for(m.unshift.apply(m,a),m.push.apply(m,l),d=m.length,u=Promise.resolve(n);h<d;)u=u.then(m[h++],m[h++]);return u}d=a.length;let f=n;for(h=0;h<d;){const m=a[h++],_=a[h++];try{f=m(f)}catch(I){_.call(this,I);break}}try{u=Oa.call(this,f)}catch(m){return Promise.reject(m)}for(h=0,d=l.length;h<d;)u=u.then(l[h++],l[h++]);return u}getUri(t){t=ze(this.defaults,t);const n=El(t.baseURL,t.url);return ml(n,t.params,t.paramsSerializer)}}p.forEach(["delete","get","head","options"],function(t){Ur.prototype[t]=function(n,r){return this.request(ze(r||{},{method:t,url:n,data:(r||{}).data}))}});p.forEach(["post","put","patch"],function(t){function n(r){return function(s,o,a){return this.request(ze(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}Ur.prototype[t]=n(),Ur.prototype[t+"Form"]=n(!0)});const Nr=Ur;class uo{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(a=>{r.subscribe(a),s=a}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},t(function(s,o,a){r.reason||(r.reason=new $n(s,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new uo(function(i){t=i}),cancel:t}}}const Zf=uo;function tp(e){return function(n){return e.apply(null,n)}}function ep(e){return p.isObject(e)&&e.isAxiosError===!0}const Ss={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ss).forEach(([e,t])=>{Ss[t]=e});const np=Ss;function Il(e){const t=new Nr(e),n=rl(Nr.prototype.request,t);return p.extend(n,Nr.prototype,t,{allOwnKeys:!0}),p.extend(n,t,null,{allOwnKeys:!0}),n.create=function(i){return Il(ze(e,i))},n}const tt=Il(co);tt.Axios=Nr;tt.CanceledError=$n;tt.CancelToken=Zf;tt.isCancel=_l;tt.VERSION=vl;tt.toFormData=di;tt.AxiosError=O;tt.Cancel=tt.CanceledError;tt.all=function(t){return Promise.all(t)};tt.spread=tp;tt.isAxiosError=ep;tt.mergeConfig=ze;tt.AxiosHeaders=zt;tt.formToJSON=e=>yl(p.isHTMLForm(e)?new FormData(e):e);tt.HttpStatusCode=np;tt.default=tt;const mi=tt,gi="https://books-backend.p.goit.global/",rp="books/category-list",ip="books/top-books",sp="books/category",op="books/",wI=async()=>await mi.get(gi+rp),TI=async()=>await mi.get(gi+ip),AI=async e=>{const t={category:e},n=new URLSearchParams(t);return await mi.get(`${gi}${sp}/?${n}`)},ap=async e=>await mi.get(`${gi}${op}/${e}`),wl="shoping_list",Tl=e=>{localStorage.setItem(wl,JSON.stringify(e))},ho=()=>JSON.parse(localStorage.getItem(wl)),cp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAUCAYAAADV9o4UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdISURBVHgBxVhrbFRFFD4z97a0pQsttiKUdrvLo1JERKxUBIMBgSghghZMSLQK8jBIQSAaIiI2/vCHQjBASggJEB5CgiQmiILEEOQR3hoUod293W0bSym0PLbLdveO39zOXRZow0LXeJrpzJw5c95zZu4yigGn0zlQM83RGKYS5xfM5uYjRlNTk72em5vblzHWJRQKNaSlpYUoHC4ixpJNxo4YhtFUUFDguB0IjBCcc9AdlbhY/nl5eZk6YyME0UBGdJUTna2srj5trxdkZTlCDoeL2od6r9dbb0/yAeiGoAXRzkHWPzFrGaZp9kZrrampuQS5gzTI1Bjz2PKYRZid/YTWtWuFMM1XYYhuM8BiJUtKer2ysvK8nLudTsm8J9pGtOfQnrYIhfgDlpaaRFsxe1JtN3g4PKqytrZG7Z2CbgNaZowxAg5aXWUYC+XYnZc3BvIPtGs2Y195DOOTYcOGJV1rbCyHTLknWa1Jh6zA+jpLVn5+GdZXWWum+QGCuBKjLpZA0yz3+v2fcTnRUlPLhRCTwEDO96DttoiI+olQ6MtY8Qo/IWp0m+DBMHpbjNGWP4Wuz5GDfjk5fdCtUUZ7Yex68KiTOyG3rK/T+YJyYDP+N8W01qgIIW7IHkYvBt3HyuhfoNBfmPcEn6/dbneRok2OasH5Mttoa43zBcjsXtyiY+yZNntoh6e6ejLaGxgft3Th/NnRo0frMQYRNnUxI5FiCJsag87WOB8HJV5RvGQ4Cy2na5p0SIYchoUYiwjPZpo2396IKBTL3uP3n4TsTNlI04aASUQ5xH8zGFxl6SHEAsX7GOjGIiOHwvhGJo9nJFJG9wB0PMGCwZ4Y/KxQDji+pzRcgEERWkpmVlZpjx49uvXLzy8GIVc7dZyfuwyHQseNmprjXp9vN9bDCn3mkte73+PzHUAGXLG8i2SyDAIO/FNTAoHuPp/P6IdagRTMi/LjPCWWf0lJiSYikT3Yb+GhaGl9ff0tnHGZZY9bONPcJ3scw9sw7pjaOlkFSdi8koUor6qvv4zI77BxuhCpUYNcTuesq1euvJfhcAw1hZDSqCMQKu1IRoQxWVzSEYGbsQTKQaaNkoUThIv65udPBX8HCdEh/1MnTiyG9KGK1Xo47qAcJwkxyLT14vx6dEPbGZeQVnfxYgYlJUWXgpzXWiRELbZEaZ0VVRSetVj4VgnbBmHTsHimI8UQgajWwsp8i3GsJXd5TVZgTYifMJwB3rVg8BGMX94eb3efPv1Bs0xNqxCxFVFZQmjt6mMfCUAkNZV3pGsscJR6t1RIzXcjJacjhXdiQwPFB+JBBNDkHWiQK8daKDQF1XclrpbD1J4Nur4LhnS19jE282+/vy66qGlGVKgQXe0xnNjNRkPvZooDcOPybFLXAjZZVw8ClALOgxVNuqZp3ehRQKU8+v42KsD5ZaVhkY2DobLqU1+XayZoh9Adg35Exa9BRm7IyckZAKecjtYUxl6SnbzesP9FJeewPPMUB0jDr5E6i9CzxOVyvY18koWgl6JxsNbWhdQ5iJ7HLrpejnoyT93DpIyYMhBXDKr78Hv2pcBzOehnpOh6BYy6DtrNluJCvAw+n15raFgNnOU4XFVrKU7QPR7PJVde3i5EexrmvVAtN0FYEE3e3wvhzWZE5xB1AqDkGpPz6dSWknNlAUA7Ar7fAzcH7WgLYy2gk0sn5SMGelxAtQ9hPgABmUDqfAO3FGvDod8gEJfHFOFvcE1+F69OVulvxetG5/wgk+nNeQvCv726uvoMKvEZFg5XGbW1Zy1qxj7HWjYUPBU1irGlqCwZLBI5G+XK2PJYukqf77yrd+/nWXJyKYxIB+oc7uldmZmZAdwkpwLB4HZ5XRUWFi4JALylRpiyqDuloTyk0042lb7A8SuQvOSzNTs7uzg9Le0tmFyMgEWQKT+g8u8lVW/g5P2Qsxz2mEWG0WBIlXT990g4bBXU5HC4msXjHbGBxqBuHmWzKUD/IYh1lI9UKIO5OOuUrtCyWE2E7MOUQOBxUQXJD0VOiPVUhnIVl7MeCQTloh2iME1E1RkJSUuA7Q7cY5RgiNsIsZHcFKJ92JGMVgFltiIKPkowiE0wMkRzYPhFZJkHbz+ceXqKzaLzlEB4qOiJCnifaCnaEuwMwPhfpQMw/q0zThCrqRs+IyZj+BraJJIfHoymgbf8eFkO3m5KMDxS2oo1NBBlcT2GI2M4VULRY+j/RDuHiHlwYv1sPN2K7qsg+ZbshVQuxGgo6N1oxaCXHzGy0N7AvkV4oW9h7+JmqaD9OIxb2Pu0mRIMnTqvYi2NgrpzMZwIAxwdSIhgTT46ZD3R6X6ZsmpcIPmtHqJNbB41Wsit+IS9getqNn2IG+uBr8OHhYQUKkQmC5zehHrjqe07XX556R1IFPiTz+Ea9HvhjgPojyCdW+/jK+RjMvFGt6mRYBAlKEfjYHgrfqlhqAkcxUrACZpVE+qQyg2IbD2bf+c193/AvwYDFioRTrZrAAAAAElFTkSuQmCC",lp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN4SURBVHgB7VdLaBRBEH3Vk91VokYFv/EQA0bjwQ8i8RAEiRc/KCp4EsWLN8GDiF48BmL8YC4aUERv6inghxwSEUQCQTQBMRdjkHzRIEmUmM1ulzUzSXZ6ZnZ2jOstBc1sd7+uel1d1V0LLIgrFDXJD1NVWZ2pJdAqBSTB0XifZtYa0wwetBJWJ51Of8oPDTN+H5sZicfyczv+VWwL7PzqJTVdR2fRFwYxCTQnt7DFHTJVhmILI0NJ7KIz6W7vcEkAR3gJrYpPYNZemp8wo5poxj8iyovI3E0eFxYVzrQ09n2L0bSmzdnm1AGTmUeIaR+zeULs+xZDJNAPyedFOAlNlWEJQCVLgcrDQKJU2GSBsT5wf5tMKBNXvhdYWglYSWByGBjpBP8aCuojrPf2zZhgShmxKudAuy+DdlwAUstMRSPvwK2nwBNfQaXlwP57oA17TWtTY0BnA7irCYYvNZZ4YcZWdFYpAWC2UcVRUM3VAAFH1uwSww8EJ0SPtAQJ2JIqA9XWgypPwKtXNqciPOF4I9cv3YAoofV7wMuqgZXVkTgsWiPGvR42j9wkoX3xwDEuyBXbCmNsPV7dPrUBEt4soDgpQYnCGDvNPST8W/OR8EF0DE/EIco+Xb7d+WJC/f2FMB8SiIqJLJwkNhbHMRAHY8RXlCdstga28HFwnOB1AtPTpwhP2MFDzstiM7ULAhQuIDQKikNUq7xLAjHB7BJw+zF2GTN42WOZaJ4xwb/lCv7e6/Cj8p3hmOw0MCqYScGurgItXp4jGvuesHfOvh0MdEE/vyJF2ntRlHEHFy2HqjkHVXdpDq/bb4I77oAnf8xtxCarjjWFZEcUCS2+oFw9xh9boDsfyfg0cuzI2al+1Sgvj+UQ16310G9uuRCaCUI7tvo/IHu7VjxSZnqMI0hIPTHhRrvLmsdHc4ZDQlS3XQcqauWVfOoSmvGe8YUl3vkJ463UPJWXhFQ9Q/mc5glX7wrg82uZs6QWibvGHqcv3r7xpCpWz+w0DbSZB8j+BueVOxfSEKKH3fep3WuXfMwpfXFtjxxnFf6f9CUbhzcinyfs3CDLOilezsylVTFbFuMJooN+Vso/kGwY6EoksEnc0lusCttNUe5mUjV0bSjwTyzyups6v3YrlVi75RTXiY8S8R6KWc1S97FKy4pvbOFt6sZgDxakgPwBnSGqSUuOBR0AAAAASUVORK5CYII=",up="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAYAAADl9UilAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaoSURBVHgB7ZdpTJRXFIZfdpUdGVG0WnABUUQUUKNQBjQgKKiltgk2mpgm5YetbaIpJtoqCumPmlqT2riURkGsWhGmolXDokGIlh0KWijK5rDDsA/MTM+5KEVkNVCbxpMc7syE797nvme59wPe2P/EdDB+9hb5JnIJeQW5Cq/ZrLS1tb+msZFcQ67U0tJK0tPTW4HXZLMI6Dsam58BDXQGvEXjSvwLpmVgYDCPgH6iz61DAL0ESH5bV1d3DSbIrAnoLI1towQa6N2kYAoBumOcbBoB/YChQzZmQPJUAvShUQuvYBICOkpj/TgBDXQ1zV+go6OzAaM0LXrgExprJwjoBafwKm1t3z4wGrBl6O1BEw41Y8YMzZEjRzQJCQll9N2wP4T2IGCbh/h93Gz69Ok48OUByH6VoaW1BVFRUQxljhHA7PlPRESEmGA8jRTC3r17cenyJUyePBnnz5+H0xInSCQS5tAdCUyP/3h4eAg4Ozs7UO8C5QJe1XiDDHTx4kWYW5gj9kos5trOhYmxCfLz8+Hk5MShVY0EpqBSxpQpUzBv/jw4OzsjKTkJlAtjhutT6NIlWFhYIPYqAc2dC2MTY2RnZ8NhkQN6enpQVlb20rODgWXo6+ujs6sTNTU1cHNzQ3d3N8zMzeAp9cSOHTvEgsOZubl5n0LPgWxtbYVC2VnZWLRoEVQqFYoKi7DEaQnq6uqYQ6//HIPdLtT00Ecx52Og7FYiPT0dvj6+kMvl8HD3wMaAjSw9cnJyhIIdHR19DzL8rl27EB4Rjmp5NTIyM+C4xBHNzc2oqqwSnysrK6FoVsDR0RHFJcUiMi7LXXQaGhp+Ky4uLhkOTHvbh9s+D9wUiOjoaBT/WSwm3r59O6is0dnRicbGRhGS0H2haKhvQHV1NZRKJQ6HHYbBJAPcv39fLKxQKAQIJ3h/oJKSEujo6kDqKUVcfBzCwsJ0CEpNdnW4UNaT3GpWIuFaAg6FHUJiYiKWOi3FiRMnYGJqAqmXFIoWRV/Zcx4aGRkhICAACxYsgLHRPzmkUqtQWFiIZcuXoampCU/lTxEYGIi83Dz4+fkh6lwU2traONf4mqQ7HFgHJX8r7/L69evo6e7BjRs3cPDgQegb6CP0i1Ac+/YYHhY9FArU1tQiNTUV9gvtwbmZ8XsGljov7cuhZc69QPKn8heAzpw5g66uLnh6emLVqlXQaDQWtLblcGCYPXt2071798DVydKfOnWKew1k8TL4+/sjLi4Oubm5OHr0KCTTJFizZo1IbFaNcyYlOQXu7u7o6OxA0cMibH1/K548edIHRBCYNGkShxB79u4Bp82ztBpWMdTW1tbxwwsXLkRycjJsbGxgZmaGmJgYLHdZjmvXriHovSDcvHUTQe8GiRysr69Ha2srXFxcBFxmZiYCAwLR3NQML6mX2ASnB2/w9JnTuPzLZVE8LS0tOHf2HC/L97aOYcFoN1WcKw8ePABdkTF//nwkpxCgrQ00ag0fIUJ+LgbOq9LSUhQVFUFeLRdhZWgOn7e3twDiXsXFsn//foSHh4MrftVKET5ciLmAgoICXracvOE5g+5gYP4b/bMMjQw3kHJwcXVBWnoaDA0NIbGUICsrSyQ47553KpVKEbwtGNFR0ZDJZFD1qERo29vaQbcUWFlZ4fjx42JxDrvbCjdR7awoVzCr/Eyp79F7uAsbqpUb04LfBAcHf6DWqI3T0tLg5uomlOEzjkPLPYoBWVHuaT4+PiJvtmzegvb2dlGpO3fuFC3Dx9cHFeUVomVMs5qGOXPmIOTjEIbjFpFJ64WTX+0PNtTrm/Lx48ey+Pj4OJp4sp+/3zyawKCiogIzZ81ECfVB7u6WUy2Rk5uDxYsXo0XRIlTlE4PViY2NFUcNh9vby1uo5ODggJCQEET+GKmi+XMplPtorc/ICwYCjPReWUvVFE8hkhGgqcc7Hjbdym4DTnRra2s8evRIhMrUxFSotnr1arS1tom+x0Xi5eUlEpxVvnPnDuebmkKXQ804lOb+lJzVGvT9Uxejs/y7d+9uI3ddv3797rXr1gbSCWDISc0tIi8vj1sMplpOhampqXjA3s4e9XX1iIyMBHV1FcHk0c/HyKPRe+8f1sb6Jl5Fi1xJSkxKpAZq5ermasdZQWER56BapUZZeRlu37qN8vJy0afoIlBK/8tX9d3oVUg9moVe/ZLVayupJXzl6+vLbzywnmktmuvJkyf56x/kEeQ/YxQKTYjxy+y6deviCUhNF8G/6KcgTPD1fKxmhP8Y0Bt77fY33dVdVE1EW0cAAAAASUVORK5CYII=",hp="/read-easy/assets/shop1x2-4f53fde0.png",dp="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABACAYAAACunKHjAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdaSURBVHgB7VprbBVFFP7O3kdvWxEEAi34AF8BBOWhgRikiGhiokYxAfSPiqAxyi8VkR8GY0KUCIgYxURBxYQYjBJM/EEIIgJiACXBiAhSebUWQSCmlPbenePZe3vbbbszu3e7JVxyv2a6d+fMnDlz5syZMzMLlFBCCSWU4AtCCPBuJLAvPhlMDzHxUDCul+y+kq6QFJcUC8U4SNvOP4KSvxZ5Nko7f9uMBiKqtZi/Qq/MFpoutAJRsLy8OvEkK7woP0dma7MPVx09SD13OXLlwSO/ncevRFiMIem1dDcyCIjAiuCPMYgpvlKs4EEUBehrUi3P0Rw0BCodpBCvwjVsJzZK6WEoJhAOUiY9lZ7FUf+iPuB3cSVXJL4RS5iEogRvoRPpe2mheZpY8EN52RwoUYIzD4sy0WQMTi6ED4wW0bgM1anKZK0UKkNx4xzF4iPo6fN1ugJGi0hVlE0jpjLRKoo89UbaftzUV6MiiDGLxbzyCa7fuvwgZQpJ8HhHCN42S3Rh6quOwKuRUhdSjQjiR4oDyrIu9JIV5LwXMa6rdaGpbFDy8lGCA+lLWTXQ/KeG6I0UaHA4Ly3/lJIfokZyIu5yIKNabTQML+R4ONG7knGzw/ISMWy6WtdfrUWArT65CeiCLjRGq9B9hoFumi4qvAu46gbhLh1gW5afBnDdDvDva4GGHcLHsFg5JCW8qicKrxmgQRNEB1WS7yjhAnDmEPj4NvDBL+T3fhlKy1+2fGdJ9dbStLWYy7vmeZYD9R8PmrIcGHAbPJHqB+o3AjRqNnB6P9TGOfLc46kQumoM6P41otTrvXlVVImiRUnj5wMn90q49BL45HYECZJt2yrX0bRTw2aOB1maqOZ90MwteiV0Rr/hsGZuBQ1/viMvsXgaNQ80fbNeCZ0xYLSU3wSavNKxYPjLy/GCFZGl+cw5GvuqCP8UCgZZoHveBgZOaudVXQOaIJvaWOGxG418AjRugb+fUHqz0SvCjnViRB3f08J19Gx0B1bNm86ilh1NuvN18a+9EBbZAUmrrnK63xHT1o8buXNnBbreHW8eK0e3MOBWoP9oZKWsvgPdQqIiJ1O2wwa5NfBRhB/Nx037QnxM35tzKw75C+uLtpHXNqdFgRbRmRaB8LHw06EL8k5RB6XXkl4Rdlfluk/LuLvG0Ao59YpCnTlenN0ftcnYgeZT12ARsS69ZfczIkU4IrMTiyACsMMrx8lTPA5jEVpuAWiFIEKF+voIA/SKaPPA3mCOyqARrVLZEGsrfVWjj4BlcpaIBj2iUDLQvGGeGipIoxEgSoswyRwuoIr5cI1oJKNUKPyW9O44S6+1yIFR8wUiKmX4+LVwAZXjI/LRnuf2O0qLiMpP9ERA5aColk/00PKZXTXyLx1iyvZGo0DkinDLms9sherG7rOdZZ4xtdGi6QQhungdHlMt2LQzKoJNg3+pWQSj/d5DAwoVUGWZX4SAKkpePrtPO9Ty6bc8XpI+Ivx0NViE5d9oFIhSEdnBM8mlp0UbYssk5X//Ao7vAZ+ty91DUAxU0Re4To78q0YgMFiBGw4Ir93g//6RjIzwKgP1lsuqoRNAfa5FwTIbxtYnoHJnGHZ1DmXfBqg9n4Fr5Y5BNWdPqttXMKmn5Fju6nGwpi4A3VjjqujB68BmqK1LwUd+zAnvPsbL3nIJryETYU18AXTzlFxbWZqPldp6UvjD29Zlj08fhlo3F3xsp2xP8rdOreu1ezfoHFbX/Qz7k2mg22ch9sAb0nqqI1+VkcufRVDb3pHysfZbLO4kg9P0ke2wa38AXScKeXgZqFd/VxyhgR0qspTFxjR/4wnp1AwxX7l2s5tyQruPsHTyyOjx7tUS7WZgPbKsQyft9S+D93yaU0IQ3+HwOroD9nKZdoPHikxxYz1FpKWaFJHxE4ZP/JIv60E01SSoXZ/LUf4w5Kcc/7RGFCRXfVY8lAPNyWIZ6yag/45K7z4UN/neHHUnybxX2z+QW/rz2WR/tzQ313uyTWU16bqrtYiYorMd1eceddbkw1CGuz7PHJOb/l1yQ9UCnDveeiLWeY9AmvYY3l+kQvuehn0OGug/FGE6oZ83QWIInaN1PZ1pIM4292p1dYpaXl78TG3mkLKt49BA29dUc7I+nWxxVuUue9AgKKRslNC269wZVFaeMNXTIj1/4E6Ja8bjsgDvTS4+OUZHNcfRitbhcgHRKhPZqIiW85m1YmfnetSTX4Qk0UNzImZ/ibCKqHzvVJ1MjRU9+CHoRUlK8Wu06FR9aEU4SI5vWCiPLcVkAR0TbUvG0x/CB0HWQfAr1demM9gkjG9CceEPm3Bf+ZL6I34FA31QSm/VH21pykwSBa9HkUBk/TbDLVOCKMFBIItoY/4MEvYVVY8ppnnyegsuRRD/JivEsuSS+o8KqoYQODj3xrIh8cYaCVEeldeh0vBAYVQlW6dKYSl7G3a+yAvF2xfZg/XsztjZATRKx09LxmFiriWiDfFM5fe04lAzSiihhBJKiB7/AzwISqjrQjxXAAAAAElFTkSuQmCC",fp="/read-easy/assets/shop3x2-c2fe6fe2.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},pp=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Rl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Al(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):pp(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const h=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw new mp;const d=s<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const m=l<<6&192|h;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class mp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gp=function(e){const t=Al(e);return Rl.encodeByteArray(t,!0)},Br=function(e){return gp(e).replace(/\./g,"")},bl=function(e){try{return Rl.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=()=>yp().__FIREBASE_DEFAULTS__,Ep=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},vp=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&bl(e[1]);return t&&JSON.parse(t)},fo=()=>{try{return _p()||Ep()||vp()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Sl=e=>{var t,n;return(n=(t=fo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ip=e=>{const t=Sl(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Cl=()=>{var e;return(e=fo())===null||e===void 0?void 0:e.config},Pl=e=>{var t;return(t=fo())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[Br(JSON.stringify(n)),Br(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ap(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function Rp(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function bp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Sp(){const e=pt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Cp(){try{return typeof indexedDB=="object"}catch{return!1}}function Pp(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="FirebaseError";class Jt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=kp,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jn.prototype.create)}}class Jn{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Np(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,a,r)}}function Np(e,t){return e.replace(xp,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const xp=/\{\$([^}]+)}/g;function Dp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function jr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Fa(s)&&Fa(o)){if(!jr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fa(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function mn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function gn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Vp(e,t){const n=new Op(e,t);return n.subscribe.bind(n)}class Op{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Lp(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=rs),i.error===void 0&&(i.error=rs),i.complete===void 0&&(i.complete=rs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Lp(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function rs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e){return e&&e._delegate?e._delegate:e}class ve{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new wp;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Up(t))try{this.getOrInitializeService({instanceIdentifier:pe})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=pe){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=pe){return this.instances.has(t)}getOptions(t=pe){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Fp(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=pe){return this.component?this.component.multipleInstances?t:pe:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fp(e){return e===pe?void 0:e}function Up(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Mp(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(L||(L={}));const jp={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},zp=L.INFO,Wp={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},qp=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Wp[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class po{constructor(t){this.name=t,this._logLevel=zp,this._logHandler=qp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in L))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...t),this._logHandler(this,L.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...t),this._logHandler(this,L.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,L.INFO,...t),this._logHandler(this,L.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,L.WARN,...t),this._logHandler(this,L.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...t),this._logHandler(this,L.ERROR,...t)}}const Hp=(e,t)=>t.some(n=>e instanceof n);let Ua,Ba;function Kp(){return Ua||(Ua=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gp(){return Ba||(Ba=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kl=new WeakMap,Cs=new WeakMap,Nl=new WeakMap,is=new WeakMap,mo=new WeakMap;function Qp(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(ie(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&kl.set(n,e)}).catch(()=>{}),mo.set(t,e),t}function $p(e){if(Cs.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Cs.set(e,t)}let Ps={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Cs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Nl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ie(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Jp(e){Ps=e(Ps)}function Yp(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ss(this),t,...n);return Nl.set(r,t.sort?t.sort():[t]),ie(r)}:Gp().includes(e)?function(...t){return e.apply(ss(this),t),ie(kl.get(this))}:function(...t){return ie(e.apply(ss(this),t))}}function Xp(e){return typeof e=="function"?Yp(e):(e instanceof IDBTransaction&&$p(e),Hp(e,Kp())?new Proxy(e,Ps):e)}function ie(e){if(e instanceof IDBRequest)return Qp(e);if(is.has(e))return is.get(e);const t=Xp(e);return t!==e&&(is.set(e,t),mo.set(t,e)),t}const ss=e=>mo.get(e);function Zp(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=ie(o);return r&&o.addEventListener("upgradeneeded",c=>{r(ie(o.result),c.oldVersion,c.newVersion,ie(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const tm=["get","getKey","getAll","getAllKeys","count"],em=["put","add","delete","clear"],os=new Map;function ja(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(os.get(t))return os.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=em.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||tm.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return os.set(t,s),s}Jp(e=>({...e,get:(t,n,r)=>ja(t,n)||e.get(t,n,r),has:(t,n)=>!!ja(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rm(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rm(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ks="@firebase/app",za="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ie=new po("@firebase/app"),im="@firebase/app-compat",sm="@firebase/analytics-compat",om="@firebase/analytics",am="@firebase/app-check-compat",cm="@firebase/app-check",lm="@firebase/auth",um="@firebase/auth-compat",hm="@firebase/database",dm="@firebase/database-compat",fm="@firebase/functions",pm="@firebase/functions-compat",mm="@firebase/installations",gm="@firebase/installations-compat",ym="@firebase/messaging",_m="@firebase/messaging-compat",Em="@firebase/performance",vm="@firebase/performance-compat",Im="@firebase/remote-config",wm="@firebase/remote-config-compat",Tm="@firebase/storage",Am="@firebase/storage-compat",Rm="@firebase/firestore",bm="@firebase/firestore-compat",Sm="firebase",Cm="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="[DEFAULT]",Pm={[ks]:"fire-core",[im]:"fire-core-compat",[om]:"fire-analytics",[sm]:"fire-analytics-compat",[cm]:"fire-app-check",[am]:"fire-app-check-compat",[lm]:"fire-auth",[um]:"fire-auth-compat",[hm]:"fire-rtdb",[dm]:"fire-rtdb-compat",[fm]:"fire-fn",[pm]:"fire-fn-compat",[mm]:"fire-iid",[gm]:"fire-iid-compat",[ym]:"fire-fcm",[_m]:"fire-fcm-compat",[Em]:"fire-perf",[vm]:"fire-perf-compat",[Im]:"fire-rc",[wm]:"fire-rc-compat",[Tm]:"fire-gcs",[Am]:"fire-gcs-compat",[Rm]:"fire-fst",[bm]:"fire-fst-compat","fire-js":"fire-js",[Sm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new Map,xs=new Map;function km(e,t){try{e.container.addComponent(t)}catch(n){Ie.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function We(e){const t=e.name;if(xs.has(t))return Ie.debug(`There were multiple attempts to register component ${t}.`),!1;xs.set(t,e);for(const n of zr.values())km(n,e);return!0}function go(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},se=new Jn("app","Firebase",Nm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ve("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw se.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=Cm;function xl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ns,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw se.create("bad-app-name",{appName:String(i)});if(n||(n=Cl()),!n)throw se.create("no-options");const s=zr.get(i);if(s){if(jr(n,s.options)&&jr(r,s.config))return s;throw se.create("duplicate-app",{appName:i})}const o=new Bp(i);for(const c of xs.values())o.addComponent(c);const a=new xm(n,r,o);return zr.set(i,a),a}function Dl(e=Ns){const t=zr.get(e);if(!t&&e===Ns&&Cl())return xl();if(!t)throw se.create("no-app",{appName:e});return t}function oe(e,t,n){var r;let i=(r=Pm[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ie.warn(a.join(" "));return}We(new ve(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="firebase-heartbeat-database",Vm=1,Cn="firebase-heartbeat-store";let as=null;function Vl(){return as||(as=Zp(Dm,Vm,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Cn)}}}).catch(e=>{throw se.create("idb-open",{originalErrorMessage:e.message})})),as}async function Om(e){try{return await(await Vl()).transaction(Cn).objectStore(Cn).get(Ol(e))}catch(t){if(t instanceof Jt)Ie.warn(t.message);else{const n=se.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ie.warn(n.message)}}}async function Wa(e,t){try{const r=(await Vl()).transaction(Cn,"readwrite");await r.objectStore(Cn).put(t,Ol(e)),await r.done}catch(n){if(n instanceof Jt)Ie.warn(n.message);else{const r=se.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ie.warn(r.message)}}}function Ol(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=1024,Mm=30*24*60*60*1e3;class Fm{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qa();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Mm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qa(),{heartbeatsToSend:n,unsentEntries:r}=Um(this._heartbeatsCache.heartbeats),i=Br(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qa(){return new Date().toISOString().substring(0,10)}function Um(e,t=Lm){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ha(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ha(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bm{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Cp()?Pp().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Om(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wa(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ha(e){return Br(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(e){We(new ve("platform-logger",t=>new nm(t),"PRIVATE")),We(new ve("heartbeat",t=>new Fm(t),"PRIVATE")),oe(ks,za,e),oe(ks,za,"esm2017"),oe("fire-js","")}jm("");var zm="firebase",Wm="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oe(zm,Wm,"app");function yo(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Ll(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qm=Ll,Ml=new Jn("auth","Firebase",Ll());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new po("@firebase/auth");function Hm(e,...t){Wr.logLevel<=L.WARN&&Wr.warn(`Auth (${Ze}): ${e}`,...t)}function xr(e,...t){Wr.logLevel<=L.ERROR&&Wr.error(`Auth (${Ze}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e,...t){throw _o(e,...t)}function Dt(e,...t){return _o(e,...t)}function Km(e,t,n){const r=Object.assign(Object.assign({},qm()),{[t]:n});return new Jn("auth","Firebase",r).create(t,{appName:e.name})}function _o(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Ml.create(e,...t)}function C(e,t,...n){if(!e)throw _o(t,...n)}function Ut(e){const t="INTERNAL ASSERTION FAILED: "+e;throw xr(t),new Error(t)}function qt(e,t){e||Ut(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Gm(){return Ka()==="http:"||Ka()==="https:"}function Ka(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gm()||Rp()||"connection"in navigator)?navigator.onLine:!0}function $m(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t,n){this.shortDelay=t,this.longDelay=n,qt(n>t,"Short delay should be less than long delay!"),this.isMobile=Ap()||bp()}get(){return Qm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(e,t){qt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new Xn(3e4,6e4);function tn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function en(e,t,n,r,i={}){return Ul(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Yn(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),Fl.fetch()(Bl(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function Ul(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jm),t);try{const i=new Xm(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _r(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _r(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _r(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw _r(e,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Km(e,u,l);bt(e,u)}}catch(i){if(i instanceof Jt)throw i;bt(e,"network-request-failed",{message:String(i)})}}async function Zn(e,t,n,r,i={}){const s=await en(e,t,n,r,i);return"mfaPendingCredential"in s&&bt(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Bl(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Eo(e.config,i):`${e.config.apiScheme}://${i}`}class Xm{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),Ym.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _r(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(e,t){return en(e,"POST","/v1/accounts:delete",t)}async function tg(e,t){return en(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function eg(e,t=!1){const n=wt(e),r=await n.getIdToken(t),i=vo(r);C(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:In(cs(i.auth_time)),issuedAtTime:In(cs(i.iat)),expirationTime:In(cs(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function cs(e){return Number(e)*1e3}function vo(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return xr("JWT malformed, contained fewer than 3 sections"),null;try{const i=bl(n);return i?JSON.parse(i):(xr("Failed to decode base64 JWT payload"),null)}catch(i){return xr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ng(e){const t=vo(e);return C(t,"internal-error"),C(typeof t.exp<"u","internal-error"),C(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Jt&&rg(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function rg({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=In(this.lastLoginAt),this.creationTime=In(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Pn(e,tg(n,{idToken:r}));C(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?ag(s.providerUserInfo):[],a=og(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jl(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function sg(e){const t=wt(e);await qr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function og(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function ag(e){return e.map(t=>{var{providerId:n}=t,r=yo(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(e,t){const n=await Ul(e,{},async()=>{const r=Yn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=Bl(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){C(t.idToken,"internal-error"),C(typeof t.idToken<"u","internal-error"),C(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ng(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return C(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await cg(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new kn;return r&&(C(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(C(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(C(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new kn,this.toJSON())}_performRefresh(){return Ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e,t){C(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class _e{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=yo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ig(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Pn(this,this.stsTokenManager.getToken(this.auth,t));return C(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return eg(this,t)}reload(){return sg(this)}_assign(t){this!==t&&(C(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new _e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await qr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Pn(this,Zm(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,w=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:A,emailVerified:B,isAnonymous:G,providerData:F,stsTokenManager:J}=n;C(A&&J,t,"internal-error");const R=kn.fromJSON(this.name,J);C(typeof A=="string",t,"internal-error"),Xt(h,t.name),Xt(d,t.name),C(typeof B=="boolean",t,"internal-error"),C(typeof G=="boolean",t,"internal-error"),Xt(f,t.name),Xt(m,t.name),Xt(_,t.name),Xt(I,t.name),Xt(E,t.name),Xt(w,t.name);const Y=new _e({uid:A,auth:t,email:d,emailVerified:B,displayName:h,isAnonymous:G,photoURL:m,phoneNumber:f,tenantId:_,stsTokenManager:R,createdAt:E,lastLoginAt:w});return F&&Array.isArray(F)&&(Y.providerData=F.map(W=>Object.assign({},W))),I&&(Y._redirectEventId=I),Y}static async _fromIdTokenResponse(t,n,r=!1){const i=new kn;i.updateFromServerResponse(n);const s=new _e({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await qr(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Map;function Bt(e){qt(e instanceof Function,"Expected a class definition");let t=Ga.get(e);return t?(qt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ga.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}zl.type="NONE";const Qa=zl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(e,t,n){return`firebase:${e}:${t}:${n}`}class Le{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Dr(this.userKey,i.apiKey,s),this.fullPersistenceKey=Dr("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?_e._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Le(Bt(Qa),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Bt(Qa);const o=Dr(r,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=_e._fromJSON(t,u);l!==s&&(a=h),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Le(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Le(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Hl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Gl(t))return"Blackberry";if(Ql(t))return"Webos";if(Io(t))return"Safari";if((t.includes("chrome/")||ql(t))&&!t.includes("edge/"))return"Chrome";if(Kl(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Wl(e=pt()){return/firefox\//i.test(e)}function Io(e=pt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ql(e=pt()){return/crios\//i.test(e)}function Hl(e=pt()){return/iemobile/i.test(e)}function Kl(e=pt()){return/android/i.test(e)}function Gl(e=pt()){return/blackberry/i.test(e)}function Ql(e=pt()){return/webos/i.test(e)}function yi(e=pt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function lg(e=pt()){var t;return yi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function ug(){return Sp()&&document.documentMode===10}function $l(e=pt()){return yi(e)||Kl(e)||Ql(e)||Gl(e)||/windows phone/i.test(e)||Hl(e)}function hg(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(e,t=[]){let n;switch(e){case"Browser":n=$a(pt());break;case"Worker":n=`${$a(pt())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ze}/${r}`}async function Yl(e,t){return en(e,"GET","/v2/recaptchaConfig",tn(e,t))}function Ja(e){return e!==void 0&&e.enterprise!==void 0}class Xl{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Zl(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Dt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dg().appendChild(r)})}function fg(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const pg="https://www.google.com/recaptcha/enterprise.js?render=",mg="recaptcha-enterprise",gg="NO_RECAPTCHA";class tu{constructor(t){this.type=mg,this.auth=nn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Yl(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Xl(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Ja(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(l=>{o(l)}).catch(()=>{o(gg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ja(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Zl(pg+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Hr(e,t,n,r=!1){const i=new tu(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ya(this),this.idTokenSubscription=new Ya(this),this.beforeStateQueue=new yg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ml,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Le.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await qr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=$m()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?wt(t):null;return n&&C(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&C(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(t))})}async initializeRecaptchaConfig(){const t=await Yl(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Xl(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new tu(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Jn("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Bt(t)||this._popupRedirectResolver;C(n,this,"argument-error"),this.redirectPersistenceManager=await Le.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return C(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Jl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Hm(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nn(e){return wt(e)}class Ya{constructor(t){this.auth=t,this.observer=null,this.addObserver=Vp(n=>this.observer=n)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(e,t){const n=go(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(jr(s,t??{}))return i;bt(i,"already-initialized")}return n.initialize({options:t})}function vg(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Ig(e,t,n){const r=nn(e);C(r._canInitEmulator,r,"emulator-config-failed"),C(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=eu(t),{host:o,port:a}=wg(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Tg()}function eu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function wg(e){const t=eu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xa(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xa(o)}}}function Xa(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Tg(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ut("not implemented")}_getIdTokenResponse(t){return Ut("not implemented")}_linkToIdToken(t,n){return Ut("not implemented")}_getReauthenticationResolver(t){return Ut("not implemented")}}async function Ag(e,t){return en(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(e,t){return Zn(e,"POST","/v1/accounts:signInWithPassword",tn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rg(e,t){return Zn(e,"POST","/v1/accounts:signInWithEmailLink",tn(e,t))}async function bg(e,t){return Zn(e,"POST","/v1/accounts:signInWithEmailLink",tn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends wo{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Nn(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Nn(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Hr(t,r,"signInWithPassword");return ls(t,i)}else return ls(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Hr(t,r,"signInWithPassword");return ls(t,s)}else return Promise.reject(i)});case"emailLink":return Rg(t,{email:this._email,oobCode:this._password});default:bt(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Ag(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bg(t,{idToken:n,email:this._email,oobCode:this._password});default:bt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t){return Zn(e,"POST","/v1/accounts:signInWithIdp",tn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sg="http://localhost";class we extends wo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new we(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=yo(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new we(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Me(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Me(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Me(t,n)}buildRequest(){const t={requestUri:Sg,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Yn(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cg(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pg(e){const t=mn(gn(e)).link,n=t?mn(gn(t)).deep_link_id:null,r=mn(gn(e)).deep_link_id;return(r?mn(gn(r)).link:null)||r||n||t||e}class To{constructor(t){var n,r,i,s,o,a;const c=mn(gn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=Cg((i=c.mode)!==null&&i!==void 0?i:null);C(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=Pg(t);try{return new To(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.providerId=rn.PROVIDER_ID}static credential(t,n){return Nn._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=To.parseLink(n);return C(r,"argument-error"),Nn._fromEmailAndCode(t,r.code,r.tenantId)}}rn.PROVIDER_ID="password";rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends nu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends tr{constructor(){super("facebook.com")}static credential(t){return we._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Zt.credentialFromTaggedObject(t)}static credentialFromError(t){return Zt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Zt.credential(t.oauthAccessToken)}catch{return null}}}Zt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends tr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return we._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return te.credentialFromTaggedObject(t)}static credentialFromError(t){return te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return te.credential(n,r)}catch{return null}}}te.GOOGLE_SIGN_IN_METHOD="google.com";te.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends tr{constructor(){super("github.com")}static credential(t){return we._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return ee.credentialFromTaggedObject(t)}static credentialFromError(t){return ee.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return ee.credential(t.oauthAccessToken)}catch{return null}}}ee.GITHUB_SIGN_IN_METHOD="github.com";ee.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends tr{constructor(){super("twitter.com")}static credential(t,n){return we._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return ne.credentialFromTaggedObject(t)}static credentialFromError(t){return ne.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return ne.credential(n,r)}catch{return null}}}ne.TWITTER_SIGN_IN_METHOD="twitter.com";ne.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(e,t){return Zn(e,"POST","/v1/accounts:signUp",tn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await _e._fromIdTokenResponse(t,r,i),o=Za(r);return new Te({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Za(r);return new Te({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Za(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Jt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Kr.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Kr(t,n,r,i)}}function ru(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Kr._fromErrorAndOperation(e,s,t,r):s})}async function kg(e,t,n=!1){const r=await Pn(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Te._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ng(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Pn(e,ru(r,i,t,e),n);C(s.idToken,r,"internal-error");const o=vo(s.idToken);C(o,r,"internal-error");const{sub:a}=o;return C(e.uid===a,r,"user-mismatch"),Te._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iu(e,t,n=!1){const r="signIn",i=await ru(e,r,t),s=await Te._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function xg(e,t){return iu(nn(e),t)}async function Dg(e,t,n){var r;const i=nn(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Hr(i,s,"signUpPassword");o=us(i,l)}else o=us(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Hr(i,s,"signUpPassword");return us(i,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await Te._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Vg(e,t,n){return xg(wt(e),rn.credential(t,n))}function Og(e,t,n,r){return wt(e).onIdTokenChanged(t,n,r)}function Lg(e,t,n){return wt(e).beforeAuthStateChanged(t,n)}function Mg(e){return wt(e).signOut()}const Gr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gr,"1"),this.storage.removeItem(Gr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(){const e=pt();return Io(e)||yi(e)}const Ug=1e3,Bg=10;class ou extends su{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fg()&&hg(),this.fallbackToPolling=$l(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ug()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Bg):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Ug)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}ou.type="LOCAL";const jg=ou;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends su{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}au.type="SESSION";const cu=au;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new _i(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),c=await zg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_i.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const l=Ao("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return window}function qg(e){Vt().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(){return typeof Vt().WorkerGlobalScope<"u"&&typeof Vt().importScripts=="function"}async function Hg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Kg(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Gg(){return lu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu="firebaseLocalStorageDb",Qg=1,Qr="firebaseLocalStorage",hu="fbase_key";class er{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ei(e,t){return e.transaction([Qr],t?"readwrite":"readonly").objectStore(Qr)}function $g(){const e=indexedDB.deleteDatabase(uu);return new er(e).toPromise()}function Vs(){const e=indexedDB.open(uu,Qg);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Qr,{keyPath:hu})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Qr)?t(r):(r.close(),await $g(),t(await Vs()))})})}async function tc(e,t,n){const r=Ei(e,!0).put({[hu]:t,value:n});return new er(r).toPromise()}async function Jg(e,t){const n=Ei(e,!1).get(t),r=await new er(n).toPromise();return r===void 0?null:r.value}function ec(e,t){const n=Ei(e,!0).delete(t);return new er(n).toPromise()}const Yg=800,Xg=3;class du{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vs(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>Xg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_i._getInstance(Gg()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await Hg(),!this.activeServiceWorker)return;this.sender=new Wg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Kg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Vs();return await tc(t,Gr,"1"),await ec(t,Gr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>Jg(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>ec(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Ei(i,!1).getAll();return new er(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}du.type="LOCAL";const Zg=du;new Xn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(e,t){return t?Bt(t):(C(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends wo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Me(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Me(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Me(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function ey(e){return iu(e.auth,new Ro(e),e.bypassAuthState)}function ny(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),Ng(n,new Ro(e),e.bypassAuthState)}async function ry(e){const{auth:t,user:n}=e;return C(n,t,"internal-error"),kg(n,new Ro(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ey;case"linkViaPopup":case"linkViaRedirect":return ry;case"reauthViaPopup":case"reauthViaRedirect":return ny;default:bt(this.auth,"internal-error")}}resolve(t){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new Xn(2e3,1e4);class Ve extends fu{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ve.currentPopupAction&&Ve.currentPopupAction.cancel(),Ve.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return C(t,this.auth,"internal-error"),t}async onExecution(){qt(this.filter.length===1,"Popup operations only handle one event");const t=Ao();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ve.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,iy.get())};t()}}Ve.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="pendingRedirect",Vr=new Map;class oy extends fu{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Vr.get(this.auth._key());if(!t){try{const r=await ay(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Vr.set(this.auth._key(),t)}return this.bypassAuthState||Vr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ay(e,t){const n=uy(t),r=ly(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function cy(e,t){Vr.set(e._key(),t)}function ly(e){return Bt(e._redirectPersistence)}function uy(e){return Dr(sy,e.config.apiKey,e.name)}async function hy(e,t,n=!1){const r=nn(e),i=ty(r,t),o=await new oy(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=10*60*1e3;class fy{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!py(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!pu(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=dy&&this.cachedEventUids.clear(),this.cachedEventUids.has(nc(t))}saveEventToCache(t){this.cachedEventUids.add(nc(t)),this.lastProcessedEventTime=Date.now()}}function nc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function pu({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function py(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pu(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function my(e,t={}){return en(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yy=/^https?/;async function _y(e){if(e.config.emulator)return;const{authorizedDomains:t}=await my(e);for(const n of t)try{if(Ey(n))return}catch{}bt(e,"unauthorized-domain")}function Ey(e){const t=Ds(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yy.test(n))return!1;if(gy.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=new Xn(3e4,6e4);function rc(){const e=Vt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Iy(e){return new Promise((t,n)=>{var r,i,s;function o(){rc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{rc(),n(Dt(e,"network-request-failed"))},timeout:vy.get()})}if(!((i=(r=Vt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Vt().gapi)===null||s===void 0)&&s.load)o();else{const a=fg("iframefcb");return Vt()[a]=()=>{gapi.load?o():n(Dt(e,"network-request-failed"))},Zl(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Or=null,t})}let Or=null;function wy(e){return Or=Or||Iy(e),Or}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty=new Xn(5e3,15e3),Ay="__/auth/iframe",Ry="emulator/auth/iframe",by={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Cy(e){const t=e.config;C(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Eo(t,Ry):`https://${e.config.authDomain}/${Ay}`,r={apiKey:t.apiKey,appName:e.name,v:Ze},i=Sy.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yn(r).slice(1)}`}async function Py(e){const t=await wy(e),n=Vt().gapi;return C(n,e,"internal-error"),t.open({where:document.body,url:Cy(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:by,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dt(e,"network-request-failed"),a=Vt().setTimeout(()=>{s(o)},Ty.get());function c(){Vt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ny=500,xy=600,Dy="_blank",Vy="http://localhost";class ic{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Oy(e,t,n,r=Ny,i=xy){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ky),{width:r.toString(),height:i.toString(),top:s,left:o}),l=pt().toLowerCase();n&&(a=ql(l)?Dy:n),Wl(l)&&(t=t||Vy,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(lg(l)&&a!=="_self")return Ly(t||"",a),new ic(null);const h=window.open(t||"",a,u);C(h,e,"popup-blocked");try{h.focus()}catch{}return new ic(h)}function Ly(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const My="__/auth/handler",Fy="emulator/auth/handler",Uy=encodeURIComponent("fac");async function sc(e,t,n,r,i,s){C(e.config.authDomain,e,"auth-domain-config-required"),C(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ze,eventId:i};if(t instanceof nu){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Dp(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,h]of Object.entries(s||{}))o[u]=h}if(t instanceof tr){const u=t.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${Uy}=${encodeURIComponent(c)}`:"";return`${By(e)}?${Yn(a).slice(1)}${l}`}function By({config:e}){return e.emulator?Eo(e,Fy):`https://${e.authDomain}/${My}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs="webStorageSupport";class jy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cu,this._completeRedirectFn=hy,this._overrideRedirectResult=cy}async _openPopup(t,n,r,i){var s;qt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sc(t,n,r,Ds(),i);return Oy(t,o,Ao())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await sc(t,n,r,Ds(),i);return qg(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Py(t),r=new fy(t);return n.register("authEvent",i=>(C(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(hs,{type:hs},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[hs];o!==void 0&&n(!!o),bt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_y(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return $l()||Io()||yi()}}const zy=jy;var oc="@firebase/auth",ac="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Hy(e){We(new ve("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;C(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jl(e)},l=new _g(r,i,s,c);return vg(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),We(new ve("auth-internal",t=>{const n=nn(t.getProvider("auth").getImmediate());return(r=>new Wy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),oe(oc,ac,qy(e)),oe(oc,ac,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=5*60,Gy=Pl("authIdTokenMaxAge")||Ky;let cc=null;const Qy=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Gy)return;const i=n==null?void 0:n.token;cc!==i&&(cc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ce(e=Dl()){const t=go(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Eg(e,{popupRedirectResolver:zy,persistence:[Zg,jg,cu]}),r=Pl("authTokenSyncURL");if(r){const s=Qy(r);Lg(n,s,()=>s(n.currentUser)),Og(n,o=>s(o))}const i=Sl("auth");return i&&Ig(n,`http://${i}`),n}Hy("Browser");var $y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,bo=bo||{},P=$y||self;function vi(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function nr(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Jy(e){return Object.prototype.hasOwnProperty.call(e,ds)&&e[ds]||(e[ds]=++Yy)}var ds="closure_uid_"+(1e9*Math.random()>>>0),Yy=0;function Xy(e,t,n){return e.call.apply(e.bind,arguments)}function Zy(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ht(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=Xy:ht=Zy,ht.apply(null,arguments)}function Er(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function rt(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function de(){this.s=this.s,this.o=this.o}var t_=0;de.prototype.s=!1;de.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),t_!=0)&&Jy(this)};de.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mu=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function So(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function lc(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(vi(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function dt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var e_=function(){if(!P.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{P.addEventListener("test",()=>{},t),P.removeEventListener("test",()=>{},t)}catch{}return e}();function xn(e){return/^[\s\xa0]*$/.test(e)}function Ii(){var e=P.navigator;return e&&(e=e.userAgent)?e:""}function Pt(e){return Ii().indexOf(e)!=-1}function Co(e){return Co[" "](e),e}Co[" "]=function(){};function n_(e,t){var n=Q_;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var r_=Pt("Opera"),qe=Pt("Trident")||Pt("MSIE"),gu=Pt("Edge"),Os=gu||qe,yu=Pt("Gecko")&&!(Ii().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge"))&&!(Pt("Trident")||Pt("MSIE"))&&!Pt("Edge"),i_=Ii().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge");function _u(){var e=P.document;return e?e.documentMode:void 0}var Ls;t:{var fs="",ps=function(){var e=Ii();if(yu)return/rv:([^\);]+)(\)|;)/.exec(e);if(gu)return/Edge\/([\d\.]+)/.exec(e);if(qe)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(i_)return/WebKit\/(\S+)/.exec(e);if(r_)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(ps&&(fs=ps?ps[1]:""),qe){var ms=_u();if(ms!=null&&ms>parseFloat(fs)){Ls=String(ms);break t}}Ls=fs}var Ms;if(P.document&&qe){var uc=_u();Ms=uc||parseInt(Ls,10)||void 0}else Ms=void 0;var s_=Ms;function Dn(e,t){if(dt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(yu){t:{try{Co(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:o_[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Dn.$.h.call(this)}}rt(Dn,dt);var o_={2:"touch",3:"pen",4:"mouse"};Dn.prototype.h=function(){Dn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var rr="closure_listenable_"+(1e6*Math.random()|0),a_=0;function c_(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++a_,this.fa=this.ia=!1}function wi(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Po(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function l_(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Eu(e){const t={};for(const n in e)t[n]=e[n];return t}const hc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vu(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<hc.length;s++)n=hc[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Ti(e){this.src=e,this.g={},this.h=0}Ti.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=Us(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new c_(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function Fs(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=mu(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(wi(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Us(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var ko="closure_lm_"+(1e6*Math.random()|0),gs={};function Iu(e,t,n,r,i){if(r&&r.once)return Tu(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Iu(e,t[s],n,r,i);return null}return n=Do(n),e&&e[rr]?e.O(t,n,nr(r)?!!r.capture:!!r,i):wu(e,t,n,!1,r,i)}function wu(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=nr(i)?!!i.capture:!!i,a=xo(e);if(a||(e[ko]=a=new Ti(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=u_(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)e_||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ru(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function u_(){function e(n){return t.call(e.src,e.listener,n)}const t=h_;return e}function Tu(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Tu(e,t[s],n,r,i);return null}return n=Do(n),e&&e[rr]?e.P(t,n,nr(r)?!!r.capture:!!r,i):wu(e,t,n,!0,r,i)}function Au(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Au(e,t[s],n,r,i);else r=nr(r)?!!r.capture:!!r,n=Do(n),e&&e[rr]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=Us(s,n,r,i),-1<n&&(wi(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=xo(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Us(t,n,r,i)),(n=-1<e?t[e]:null)&&No(n))}function No(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[rr])Fs(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ru(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=xo(t))?(Fs(n,e),n.h==0&&(n.src=null,t[ko]=null)):wi(e)}}}function Ru(e){return e in gs?gs[e]:gs[e]="on"+e}function h_(e,t){if(e.fa)e=!0;else{t=new Dn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&No(e),e=n.call(r,t)}return e}function xo(e){return e=e[ko],e instanceof Ti?e:null}var ys="__closure_events_fn_"+(1e9*Math.random()>>>0);function Do(e){return typeof e=="function"?e:(e[ys]||(e[ys]=function(t){return e.handleEvent(t)}),e[ys])}function nt(){de.call(this),this.i=new Ti(this),this.S=this,this.J=null}rt(nt,de);nt.prototype[rr]=!0;nt.prototype.removeEventListener=function(e,t,n,r){Au(this,e,t,n,r)};function ot(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new dt(t,e);else if(t instanceof dt)t.target=t.target||e;else{var i=t;t=new dt(r,e),vu(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=vr(o,r,!0,t)&&i}if(o=t.g=e,i=vr(o,r,!0,t)&&i,i=vr(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=vr(o,r,!1,t)&&i}nt.prototype.N=function(){if(nt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)wi(n[r]);delete e.g[t],e.h--}}this.J=null};nt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};nt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function vr(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Fs(e.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Vo=P.JSON.stringify;class d_{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function f_(){var e=Oo;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class p_{constructor(){this.h=this.g=null}add(t,n){const r=bu.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bu=new d_(()=>new m_,e=>e.reset());class m_{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function g_(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function y_(e){P.setTimeout(()=>{throw e},0)}let Vn,On=!1,Oo=new p_,Su=()=>{const e=P.Promise.resolve(void 0);Vn=()=>{e.then(__)}};var __=()=>{for(var e;e=f_();){try{e.h.call(e.g)}catch(n){y_(n)}var t=bu;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}On=!1};function Ai(e,t){nt.call(this),this.h=e||1,this.g=t||P,this.j=ht(this.qb,this),this.l=Date.now()}rt(Ai,nt);v=Ai.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ot(this,"tick"),this.ga&&(Lo(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Lo(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}v.N=function(){Ai.$.N.call(this),Lo(this),delete this.g};function Mo(e,t,n){if(typeof e=="function")n&&(e=ht(e,n));else if(e&&typeof e.handleEvent=="function")e=ht(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:P.setTimeout(e,t||0)}function Cu(e){e.g=Mo(()=>{e.g=null,e.i&&(e.i=!1,Cu(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class E_ extends de{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Cu(this)}N(){super.N(),this.g&&(P.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ln(e){de.call(this),this.h=e,this.g={}}rt(Ln,de);var dc=[];function Pu(e,t,n,r){Array.isArray(n)||(n&&(dc[0]=n.toString()),n=dc);for(var i=0;i<n.length;i++){var s=Iu(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function ku(e){Po(e.g,function(t,n){this.g.hasOwnProperty(n)&&No(t)},e),e.g={}}Ln.prototype.N=function(){Ln.$.N.call(this),ku(this)};Ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ri(){this.g=!0}Ri.prototype.Ea=function(){this.g=!1};function v_(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function I_(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function Oe(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+T_(e,n)+(r?" "+r:"")})}function w_(e,t){e.info(function(){return"TIMEOUT: "+t})}Ri.prototype.info=function(){};function T_(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vo(n)}catch{return t}}var Ce={},fc=null;function bi(){return fc=fc||new nt}Ce.Ta="serverreachability";function Nu(e){dt.call(this,Ce.Ta,e)}rt(Nu,dt);function Mn(e){const t=bi();ot(t,new Nu(t))}Ce.STAT_EVENT="statevent";function xu(e,t){dt.call(this,Ce.STAT_EVENT,e),this.stat=t}rt(xu,dt);function gt(e){const t=bi();ot(t,new xu(t,e))}Ce.Ua="timingevent";function Du(e,t){dt.call(this,Ce.Ua,e),this.size=t}rt(Du,dt);function ir(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return P.setTimeout(function(){e()},t)}var Si={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Vu={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Fo(){}Fo.prototype.h=null;function pc(e){return e.h||(e.h=e.i())}function Ou(){}var sr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Uo(){dt.call(this,"d")}rt(Uo,dt);function Bo(){dt.call(this,"c")}rt(Bo,dt);var Bs;function Ci(){}rt(Ci,Fo);Ci.prototype.g=function(){return new XMLHttpRequest};Ci.prototype.i=function(){return{}};Bs=new Ci;function or(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Ln(this),this.P=A_,e=Os?125:void 0,this.V=new Ai(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Lu}function Lu(){this.i=null,this.g="",this.h=!1}var A_=45e3,js={},$r={};v=or.prototype;v.setTimeout=function(e){this.P=e};function zs(e,t,n){e.L=1,e.v=ki(Ht(t)),e.s=n,e.S=!0,Mu(e,null)}function Mu(e,t){e.G=Date.now(),ar(e),e.A=Ht(e.v);var n=e.A,r=e.W;Array.isArray(r)||(r=[String(r)]),Hu(n.i,"t",r),e.C=0,n=e.l.J,e.h=new Lu,e.g=dh(e.l,n?t:null,!e.s),0<e.O&&(e.M=new E_(ht(e.Pa,e,e.g),e.O)),Pu(e.U,e.g,"readystatechange",e.nb),t=e.I?Eu(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),Mn(),v_(e.j,e.u,e.A,e.m,e.W,e.s)}v.nb=function(e){e=e.target;const t=this.M;t&&Nt(e)==3?t.l():this.Pa(e)};v.Pa=function(e){try{if(e==this.g)t:{const u=Nt(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Os||this.g&&(this.h.h||this.g.ja()||_c(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?Mn(3):Mn(2)),Pi(this);var n=this.g.da();this.ca=n;e:if(Fu(this)){var r=_c(this.g);e="";var i=r.length,s=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){me(this),wn(this);var o="";break e}this.h.i=new P.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,I_(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!xn(a)){var l=a;break e}}l=null}if(n=l)Oe(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ws(this,n);else{this.i=!1,this.o=3,gt(12),me(this),wn(this);break t}}this.S?(Uu(this,u,o),Os&&this.i&&u==3&&(Pu(this.U,this.V,"tick",this.mb),this.V.start())):(Oe(this.j,this.m,o,null),Ws(this,o)),u==4&&me(this),this.i&&!this.J&&(u==4?ch(this.l,this):(this.i=!1,ar(this)))}else H_(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,gt(12)):(this.o=0,gt(13)),me(this),wn(this)}}}catch{}finally{}};function Fu(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function Uu(e,t,n){let r=!0,i;for(;!e.J&&e.C<n.length;)if(i=R_(e,n),i==$r){t==4&&(e.o=4,gt(14),r=!1),Oe(e.j,e.m,null,"[Incomplete Response]");break}else if(i==js){e.o=4,gt(15),Oe(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Oe(e.j,e.m,i,null),Ws(e,i);Fu(e)&&i!=$r&&i!=js&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,gt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ko(t),t.M=!0,gt(11))):(Oe(e.j,e.m,n,"[Invalid Chunked Response]"),me(e),wn(e))}v.mb=function(){if(this.g){var e=Nt(this.g),t=this.g.ja();this.C<t.length&&(Pi(this),Uu(this,e,t),this.i&&e!=4&&ar(this))}};function R_(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?$r:(n=Number(t.substring(n,r)),isNaN(n)?js:(r+=1,r+n>t.length?$r:(t=t.slice(r,r+n),e.C=r+n,t)))}v.cancel=function(){this.J=!0,me(this)};function ar(e){e.Y=Date.now()+e.P,Bu(e,e.P)}function Bu(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ir(ht(e.lb,e),t)}function Pi(e){e.B&&(P.clearTimeout(e.B),e.B=null)}v.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(w_(this.j,this.A),this.L!=2&&(Mn(),gt(17)),me(this),this.o=2,wn(this)):Bu(this,this.Y-e)};function wn(e){e.l.H==0||e.J||ch(e.l,e)}function me(e){Pi(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Lo(e.V),ku(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Ws(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||qs(n.i,e))){if(!e.K&&qs(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Xr(n),Di(n);else break t;Ho(n),gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ir(ht(n.ib,n),6e3));if(1>=Qu(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ge(n,11)}else if((e.K||n.g==e)&&Xr(n),!xn(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=e.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(jo(s,s.h),s.h=null))}if(r.F){const _=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,j(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=hh(r,r.J?r.pa:null,r.Y),o.K){$u(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Pi(a),ar(a)),r.g=o}else oh(r);0<n.j.length&&Vi(n)}else l[0]!="stop"&&l[0]!="close"||ge(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ge(n,7):qo(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Mn(4)}catch{}}function b_(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(vi(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function S_(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(vi(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function ju(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(vi(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=S_(e),r=b_(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var zu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function C_(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ee(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ee){this.h=e.h,Jr(this,e.j),this.s=e.s,this.g=e.g,Yr(this,e.m),this.l=e.l;var t=e.i,n=new Fn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),mc(this,n),this.o=e.o}else e&&(t=String(e).match(zu))?(this.h=!1,Jr(this,t[1]||"",!0),this.s=yn(t[2]||""),this.g=yn(t[3]||"",!0),Yr(this,t[4]),this.l=yn(t[5]||"",!0),mc(this,t[6]||"",!0),this.o=yn(t[7]||"")):(this.h=!1,this.i=new Fn(null,this.h))}Ee.prototype.toString=function(){var e=[],t=this.j;t&&e.push(_n(t,gc,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(_n(t,gc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(_n(n,n.charAt(0)=="/"?N_:k_,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",_n(n,D_)),e.join("")};function Ht(e){return new Ee(e)}function Jr(e,t,n){e.j=n?yn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Yr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function mc(e,t,n){t instanceof Fn?(e.i=t,V_(e.i,e.h)):(n||(t=_n(t,x_)),e.i=new Fn(t,e.h))}function j(e,t,n){e.i.set(t,n)}function ki(e){return j(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function yn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function _n(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,P_),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function P_(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var gc=/[#\/\?@]/g,k_=/[#\?:]/g,N_=/[#\?]/g,x_=/[#\?@]/g,D_=/#/g;function Fn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function fe(e){e.g||(e.g=new Map,e.h=0,e.i&&C_(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}v=Fn.prototype;v.add=function(e,t){fe(this),this.i=null,e=sn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Wu(e,t){fe(e),t=sn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function qu(e,t){return fe(e),t=sn(e,t),e.g.has(t)}v.forEach=function(e,t){fe(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};v.ta=function(){fe(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};v.Z=function(e){fe(this);let t=[];if(typeof e=="string")qu(this,e)&&(t=t.concat(this.g.get(sn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};v.set=function(e,t){return fe(this),this.i=null,e=sn(this,e),qu(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};v.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Hu(e,t,n){Wu(e,t),0<n.length&&(e.i=null,e.g.set(sn(e,t),So(n)),e.h+=n.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function sn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function V_(e,t){t&&!e.j&&(fe(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Wu(this,r),Hu(this,i,n))},e)),e.j=t}var O_=class{constructor(e,t){this.g=e,this.map=t}};function Ku(e){this.l=e||L_,P.PerformanceNavigationTiming?(e=P.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(P.g&&P.g.Ka&&P.g.Ka()&&P.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var L_=10;function Gu(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Qu(e){return e.h?1:e.g?e.g.size:0}function qs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function jo(e,t){e.g?e.g.add(t):e.h=t}function $u(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Ku.prototype.cancel=function(){if(this.i=Ju(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Ju(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return So(e.i)}var M_=class{stringify(e){return P.JSON.stringify(e,void 0)}parse(e){return P.JSON.parse(e,void 0)}};function F_(){this.g=new M_}function U_(e,t,n){const r=n||"";try{ju(e,function(i,s){let o=i;nr(i)&&(o=Vo(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function B_(e,t){const n=new Ri;if(P.Image){const r=new Image;r.onload=Er(Ir,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Er(Ir,n,r,"TestLoadImage: error",!1,t),r.onabort=Er(Ir,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Er(Ir,n,r,"TestLoadImage: timeout",!1,t),P.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ir(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function cr(e){this.l=e.fc||null,this.j=e.ob||!1}rt(cr,Fo);cr.prototype.g=function(){return new Ni(this.l,this.j)};cr.prototype.i=function(e){return function(){return e}}({});function Ni(e,t){nt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=zo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rt(Ni,nt);var zo=0;v=Ni.prototype;v.open=function(e,t){if(this.readyState!=zo)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Un(this)};v.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||P).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lr(this)),this.readyState=zo};v.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof P.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yu(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Yu(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}v.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?lr(this):Un(this),this.readyState==3&&Yu(this)}};v.Za=function(e){this.g&&(this.response=this.responseText=e,lr(this))};v.Ya=function(e){this.g&&(this.response=e,lr(this))};v.ka=function(){this.g&&lr(this)};function lr(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Un(e)}v.setRequestHeader=function(e,t){this.v.append(e,t)};v.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Un(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Ni.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var j_=P.JSON.parse;function K(e){nt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Xu,this.L=this.M=!1}rt(K,nt);var Xu="",z_=/^https?$/i,W_=["POST","PUT"];v=K.prototype;v.Oa=function(e){this.M=e};v.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Bs.g(),this.C=this.u?pc(this.u):pc(Bs),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){yc(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=P.FormData&&e instanceof P.FormData,!(0<=mu(W_,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{eh(this),0<this.B&&((this.L=q_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=Mo(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){yc(this,s)}};function q_(e){return qe&&typeof e.timeout=="number"&&e.ontimeout!==void 0}v.ua=function(){typeof bo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ot(this,"timeout"),this.abort(8))};function yc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Zu(e),xi(e)}function Zu(e){e.F||(e.F=!0,ot(e,"complete"),ot(e,"error"))}v.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ot(this,"complete"),ot(this,"abort"),xi(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xi(this,!0)),K.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?th(this):this.kb())};v.kb=function(){th(this)};function th(e){if(e.h&&typeof bo<"u"&&(!e.C[1]||Nt(e)!=4||e.da()!=2)){if(e.v&&Nt(e)==4)Mo(e.La,0,e);else if(ot(e,"readystatechange"),Nt(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(zu)[1]||null;!i&&P.self&&P.self.location&&(i=P.self.location.protocol.slice(0,-1)),r=!z_.test(i?i.toLowerCase():"")}n=r}if(n)ot(e,"complete"),ot(e,"success");else{e.m=6;try{var s=2<Nt(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",Zu(e)}}finally{xi(e)}}}}function xi(e,t){if(e.g){eh(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||ot(e,"ready");try{n.onreadystatechange=r}catch{}}}function eh(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(P.clearTimeout(e.A),e.A=null)}v.isActive=function(){return!!this.g};function Nt(e){return e.g?e.g.readyState:0}v.da=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),j_(t)}};function _c(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Xu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function H_(e){const t={};e=(e.g&&2<=Nt(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(xn(e[r]))continue;var n=g_(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}l_(t,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function nh(e){let t="";return Po(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Wo(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=nh(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):j(e,t,n))}function fn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function rh(e){this.Ga=0,this.j=[],this.l=new Ri,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=fn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=fn("baseRetryDelayMs",5e3,e),this.hb=fn("retryDelaySeedMs",1e4,e),this.eb=fn("forwardChannelMaxRetries",2,e),this.xa=fn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Ku(e&&e.concurrentRequestLimit),this.Ja=new F_,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=rh.prototype;v.ra=8;v.H=1;function qo(e){if(ih(e),e.H==3){var t=e.W++,n=Ht(e.I);if(j(n,"SID",e.K),j(n,"RID",t),j(n,"TYPE","terminate"),ur(e,n),t=new or(e,e.l,t),t.L=2,t.v=ki(Ht(n)),n=!1,P.navigator&&P.navigator.sendBeacon)try{n=P.navigator.sendBeacon(t.v.toString(),"")}catch{}!n&&P.Image&&(new Image().src=t.v,n=!0),n||(t.g=dh(t.l,null),t.g.ha(t.v)),t.G=Date.now(),ar(t)}uh(e)}function Di(e){e.g&&(Ko(e),e.g.cancel(),e.g=null)}function ih(e){Di(e),e.u&&(P.clearTimeout(e.u),e.u=null),Xr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&P.clearTimeout(e.m),e.m=null)}function Vi(e){if(!Gu(e.i)&&!e.m){e.m=!0;var t=e.Na;Vn||Su(),On||(Vn(),On=!0),Oo.add(t,e),e.C=0}}function K_(e,t){return Qu(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=ir(ht(e.Na,e,t),lh(e,e.C)),e.C++,!0)}v.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new or(this,this.l,e);let s=this.s;if(this.U&&(s?(s=Eu(s),vu(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=sh(this,i,t),n=Ht(this.I),j(n,"RID",e),j(n,"CVER",22),this.F&&j(n,"X-HTTP-Session-Id",this.F),ur(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(nh(s)))+"&"+t:this.o&&Wo(n,this.o,s)),jo(this.i,i),this.bb&&j(n,"TYPE","init"),this.P?(j(n,"$req",t),j(n,"SID","null"),i.aa=!0,zs(i,n,null)):zs(i,n,t),this.H=2}}else this.H==3&&(e?Ec(this,e):this.j.length==0||Gu(this.i)||Ec(this))};function Ec(e,t){var n;t?n=t.m:n=e.W++;const r=Ht(e.I);j(r,"SID",e.K),j(r,"RID",n),j(r,"AID",e.V),ur(e,r),e.o&&e.s&&Wo(r,e.o,e.s),n=new or(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=sh(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),jo(e.i,n),zs(n,r,t)}function ur(e,t){e.na&&Po(e.na,function(n,r){j(t,r,n)}),e.h&&ju({},function(n,r){j(t,r,n)})}function sh(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ht(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let l=i[c].g;const u=i[c].map;if(l-=s,0>l)s=Math.max(0,i[c].g-100),a=!1;else try{U_(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function oh(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Vn||Su(),On||(Vn(),On=!0),Oo.add(t,e),e.A=0}}function Ho(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=ir(ht(e.Ma,e),lh(e,e.A)),e.A++,!0)}v.Ma=function(){if(this.u=null,ah(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ir(ht(this.jb,this),e)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),Di(this),ah(this))};function Ko(e){e.B!=null&&(P.clearTimeout(e.B),e.B=null)}function ah(e){e.g=new or(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ht(e.wa);j(t,"RID","rpc"),j(t,"SID",e.K),j(t,"AID",e.V),j(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&j(t,"TO",e.qa),j(t,"TYPE","xmlhttp"),ur(e,t),e.o&&e.s&&Wo(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ki(Ht(t)),n.s=null,n.S=!0,Mu(n,e)}v.ib=function(){this.v!=null&&(this.v=null,Di(this),Ho(this),gt(19))};function Xr(e){e.v!=null&&(P.clearTimeout(e.v),e.v=null)}function ch(e,t){var n=null;if(e.g==t){Xr(e),Ko(e),e.g=null;var r=2}else if(qs(e.i,t))n=t.F,$u(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;r=bi(),ot(r,new Du(r,n)),Vi(e)}else oh(e);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&K_(e,t)||r==2&&Ho(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ge(e,5);break;case 4:ge(e,10);break;case 3:ge(e,6);break;default:ge(e,2)}}}function lh(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ge(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ht(e.pb,e);n||(n=new Ee("//www.google.com/images/cleardot.gif"),P.location&&P.location.protocol=="http"||Jr(n,"https"),ki(n)),B_(n.toString(),r)}else gt(2);e.H=0,e.h&&e.h.za(t),uh(e),ih(e)}v.pb=function(e){e?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function uh(e){if(e.H=0,e.ma=[],e.h){const t=Ju(e.i);(t.length!=0||e.j.length!=0)&&(lc(e.ma,t),lc(e.ma,e.j),e.i.i.length=0,So(e.j),e.j.length=0),e.h.ya()}}function hh(e,t,n){var r=n instanceof Ee?Ht(n):new Ee(n);if(r.g!="")t&&(r.g=t+"."+r.g),Yr(r,r.m);else{var i=P.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Ee(null);r&&Jr(s,r),t&&(s.g=t),i&&Yr(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&j(r,n,t),j(r,"VER",e.ra),ur(e,r),r}function dh(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ha&&!e.va?new K(new cr({ob:!0})):new K(e.va),t.Oa(e.J),t}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function fh(){}v=fh.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function Zr(){if(qe&&!(10<=Number(s_)))throw Error("Environmental error: no available transport.")}Zr.prototype.g=function(e,t){return new yt(e,t)};function yt(e,t){nt.call(this),this.g=new rh(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!xn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!xn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new on(this)}rt(yt,nt);yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;gt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=hh(e,null,e.Y),Vi(e)};yt.prototype.close=function(){qo(this.g)};yt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Vo(e),e=n);t.j.push(new O_(t.fb++,e)),t.H==3&&Vi(t)};yt.prototype.N=function(){this.g.h=null,delete this.j,qo(this.g),delete this.g,yt.$.N.call(this)};function ph(e){Uo.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}rt(ph,Uo);function mh(){Bo.call(this),this.status=1}rt(mh,Bo);function on(e){this.g=e}rt(on,fh);on.prototype.Ba=function(){ot(this.g,"a")};on.prototype.Aa=function(e){ot(this.g,new ph(e))};on.prototype.za=function(e){ot(this.g,new mh)};on.prototype.ya=function(){ot(this.g,"b")};function G_(){this.blockSize=-1}function St(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}rt(St,G_);St.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _s(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}St.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)_s(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){_s(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){_s(this,r),i=0;break}}this.h=i,this.i+=t};St.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function U(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Q_={};function Go(e){return-128<=e&&128>e?n_(e,function(t){return new U([t|0],0>t?-1:0)}):new U([e|0],0>e?-1:0)}function xt(e){if(isNaN(e)||!isFinite(e))return Fe;if(0>e)return st(xt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Hs;return new U(t,0)}function gh(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return st(gh(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=xt(Math.pow(t,8)),r=Fe,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=xt(Math.pow(t,s)),r=r.R(s).add(xt(o))):(r=r.R(n),r=r.add(xt(o)))}return r}var Hs=4294967296,Fe=Go(0),Ks=Go(1),vc=Go(16777216);v=U.prototype;v.ea=function(){if(_t(this))return-st(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Hs+r)*t,t*=Hs}return e};v.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(jt(this))return"0";if(_t(this))return"-"+st(this).toString(e);for(var t=xt(Math.pow(e,6)),n=this,r="";;){var i=ei(n,t).g;n=ti(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,jt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};v.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function jt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function _t(e){return e.h==-1}v.X=function(e){return e=ti(this,e),_t(e)?-1:jt(e)?0:1};function st(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new U(n,~e.h).add(Ks)}v.abs=function(){return _t(this)?st(this):this};v.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new U(n,n[n.length-1]&-2147483648?-1:0)};function ti(e,t){return e.add(st(t))}v.R=function(e){if(jt(this)||jt(e))return Fe;if(_t(this))return _t(e)?st(this).R(st(e)):st(st(this).R(e));if(_t(e))return st(this.R(st(e)));if(0>this.X(vc)&&0>e.X(vc))return xt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,c=e.D(i)&65535;n[2*r+2*i]+=o*c,wr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,wr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,wr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,wr(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new U(n,0)};function wr(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function pn(e,t){this.g=e,this.h=t}function ei(e,t){if(jt(t))throw Error("division by zero");if(jt(e))return new pn(Fe,Fe);if(_t(e))return t=ei(st(e),t),new pn(st(t.g),st(t.h));if(_t(t))return t=ei(e,st(t)),new pn(st(t.g),t.h);if(30<e.g.length){if(_t(e)||_t(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ks,r=t;0>=r.X(e);)n=Ic(n),r=Ic(r);var i=Ne(n,1),s=Ne(r,1);for(r=Ne(r,2),n=Ne(n,2);!jt(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Ne(r,1),n=Ne(n,1)}return t=ti(e,i.R(t)),new pn(i,t)}for(i=Fe;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=xt(n),o=s.R(t);_t(o)||0<o.X(e);)n-=r,s=xt(n),o=s.R(t);jt(s)&&(s=Ks),i=i.add(s),e=ti(e,o)}return new pn(i,e)}v.gb=function(e){return ei(this,e).h};v.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new U(n,this.h&e.h)};v.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new U(n,this.h|e.h)};v.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new U(n,this.h^e.h)};function Ic(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new U(n,e.h)}function Ne(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new U(i,e.h)}Zr.prototype.createWebChannel=Zr.prototype.g;yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;Si.NO_ERROR=0;Si.TIMEOUT=8;Si.HTTP_ERROR=6;Vu.COMPLETE="complete";Ou.EventType=sr;sr.OPEN="a";sr.CLOSE="b";sr.ERROR="c";sr.MESSAGE="d";nt.prototype.listen=nt.prototype.O;K.prototype.listenOnce=K.prototype.P;K.prototype.getLastError=K.prototype.Sa;K.prototype.getLastErrorCode=K.prototype.Ia;K.prototype.getStatus=K.prototype.da;K.prototype.getResponseJson=K.prototype.Wa;K.prototype.getResponseText=K.prototype.ja;K.prototype.send=K.prototype.ha;K.prototype.setWithCredentials=K.prototype.Oa;St.prototype.digest=St.prototype.l;St.prototype.reset=St.prototype.reset;St.prototype.update=St.prototype.j;U.prototype.add=U.prototype.add;U.prototype.multiply=U.prototype.R;U.prototype.modulo=U.prototype.gb;U.prototype.compare=U.prototype.X;U.prototype.toNumber=U.prototype.ea;U.prototype.toString=U.prototype.toString;U.prototype.getBits=U.prototype.D;U.fromNumber=xt;U.fromString=gh;var $_=function(){return new Zr},J_=function(){return bi()},Es=Si,Y_=Vu,X_=Ce,wc={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Z_=cr,Tr=Ou,t0=K,e0=St,Ue=U;const Tc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae=new po("@firebase/firestore");function Ac(){return Ae.logLevel}function T(e,...t){if(Ae.logLevel<=L.DEBUG){const n=t.map(Qo);Ae.debug(`Firestore (${an}): ${e}`,...n)}}function Kt(e,...t){if(Ae.logLevel<=L.ERROR){const n=t.map(Qo);Ae.error(`Firestore (${an}): ${e}`,...n)}}function He(e,...t){if(Ae.logLevel<=L.WARN){const n=t.map(Qo);Ae.warn(`Firestore (${an}): ${e}`,...n)}}function Qo(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e="Unexpected state"){const t=`FIRESTORE (${an}) INTERNAL ASSERTION FAILED: `+e;throw Kt(t),new Error(t)}function z(e,t){e||k()}function x(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends Jt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class n0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class r0{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class i0{constructor(t){this.t=t,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new ae;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ae,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ae)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new yh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string"),new ct(t)}}class s0{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class o0{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new s0(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class a0{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class c0{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(z(typeof n.token=="string"),this.R=n.token,new a0(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=l0(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function M(e,t){return e<t?-1:e>t?1:0}function Ke(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new S(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new S(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new S(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new S(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Z.fromMillis(Date.now())}static fromDate(t){return Z.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Z(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?M(this.nanoseconds,t.nanoseconds):M(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.timestamp=t}static fromTimestamp(t){return new N(t)}static min(){return new N(new Z(0,0))}static max(){return new N(new Z(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t,n,r){n===void 0?n=0:n>t.length&&k(),r===void 0?r=t.length-n:r>t.length-n&&k(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Bn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Bn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class H extends Bn{construct(t,n,r){return new H(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new S(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new H(n)}static emptyPath(){return new H([])}}const u0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Bn{construct(t,n,r){return new ut(t,n,r)}static isValidIdentifier(t){return u0.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new S(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new S(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new S(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new S(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(t){this.path=t}static fromPath(t){return new b(H.fromString(t))}static fromName(t){return new b(H.fromString(t).popFirst(5))}static empty(){return new b(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return H.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new b(new H(t.slice()))}}function h0(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=N.fromTimestamp(r===1e9?new Z(n+1,0):new Z(n,r));return new le(i,b.empty(),t)}function d0(e){return new le(e.readTime,e.key,-1)}class le{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new le(N.min(),b.empty(),-1)}static max(){return new le(N.max(),b.empty(),-1)}}function f0(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=b.comparator(e.documentKey,t.documentKey),n!==0?n:M(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class m0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==p0)throw e;T("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&k(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new y((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):y.reject(n)}static resolve(t){return new y((n,r)=>{n(t)})}static reject(t){return new y((n,r)=>{r(t)})}static waitFor(t){return new y((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(t){let n=y.resolve(!1);for(const r of t)n=n.next(i=>i?y.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new y((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;n(t[l]).next(u=>{o[l]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(t,n){return new y((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function dr(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}$o.ae=-1;function Oi(e){return e==null}function ni(e){return e===0&&1/e==-1/0}function g0(e){return typeof e=="number"&&Number.isInteger(e)&&!ni(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function cn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Eh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,n){this.comparator=t,this.root=n||it.EMPTY}insert(t,n){return new q(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new q(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ar(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ar(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ar(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ar(this.root,t,this.comparator,!0)}}class Ar{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class it{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??it.RED,this.left=i??it.EMPTY,this.right=s??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new it(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return it.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const t=this.left.check();if(t!==this.right.check())throw k();return t+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(t,n,r,i,s){return this}insert(t,n,r){return new it(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.comparator=t,this.data=new q(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new bc(this.data.getIterator())}getIteratorFrom(t){return new bc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof ft)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new ft(this.comparator);return n.data=t,n}}class bc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t){this.fields=t,t.sort(ut.comparator)}static empty(){return new Rt([])}unionWith(t){let n=new ft(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Rt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ke(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new vh("Invalid base64 string: "+s):s}}(t);return new mt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new mt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return M(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const y0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ue(e){if(z(!!e),typeof e=="string"){let t=0;const n=y0.exec(e);if(z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:$(e.seconds),nanos:$(e.nanos)}}function $(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Re(e){return typeof e=="string"?mt.fromBase64String(e):mt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Yo(e){const t=e.mapValue.fields.__previous_value__;return Jo(t)?Yo(t):t}function jn(e){const t=ue(e.mapValue.fields.__local_write_time__.timestampValue);return new Z(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(t,n,r,i,s,o,a,c,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class zn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new zn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof zn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function be(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Jo(e)?4:E0(e)?9007199254740991:10:k()}function Lt(e,t){if(e===t)return!0;const n=be(e);if(n!==be(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return jn(e).isEqual(jn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ue(i.timestampValue),a=ue(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Re(i.bytesValue).isEqual(Re(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return $(i.geoPointValue.latitude)===$(s.geoPointValue.latitude)&&$(i.geoPointValue.longitude)===$(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return $(i.integerValue)===$(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=$(i.doubleValue),a=$(s.doubleValue);return o===a?ni(o)===ni(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Ke(e.arrayValue.values||[],t.arrayValue.values||[],Lt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Rc(o)!==Rc(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Lt(o[c],a[c])))return!1;return!0}(e,t);default:return k()}}function Wn(e,t){return(e.values||[]).find(n=>Lt(n,t))!==void 0}function Ge(e,t){if(e===t)return 0;const n=be(e),r=be(t);if(n!==r)return M(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return M(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=$(s.integerValue||s.doubleValue),c=$(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Sc(e.timestampValue,t.timestampValue);case 4:return Sc(jn(e),jn(t));case 5:return M(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Re(s),c=Re(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=M(a[l],c[l]);if(u!==0)return u}return M(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=M($(s.latitude),$(o.latitude));return a!==0?a:M($(s.longitude),$(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ge(a[l],c[l]);if(u)return u}return M(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Rr.mapValue&&o===Rr.mapValue)return 0;if(s===Rr.mapValue)return 1;if(o===Rr.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=M(c[h],u[h]);if(d!==0)return d;const f=Ge(a[c[h]],l[u[h]]);if(f!==0)return f}return M(c.length,u.length)}(e.mapValue,t.mapValue);default:throw k()}}function Sc(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return M(e,t);const n=ue(e),r=ue(t),i=M(n.seconds,r.seconds);return i!==0?i:M(n.nanos,r.nanos)}function Qe(e){return Gs(e)}function Gs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=ue(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Re(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return b.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Gs(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Gs(n.fields[o])}`;return i+"}"}(e.mapValue):k()}function Qs(e){return!!e&&"integerValue"in e}function Xo(e){return!!e&&"arrayValue"in e}function Cc(e){return!!e&&"nullValue"in e}function Pc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Lr(e){return!!e&&"mapValue"in e}function Tn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return cn(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Tn(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Tn(e.arrayValue.values[n]);return t}return Object.assign({},e)}function E0(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.value=t}static empty(){return new Et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Lr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Tn(n)}setAll(t){let n=ut.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Tn(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Lr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Lt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Lr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){cn(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Et(Tn(this.value))}}function Ih(e){const t=[];return cn(e.fields,(n,r)=>{const i=new ut([n]);if(Lr(r)){const s=Ih(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new Rt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new lt(t,0,N.min(),N.min(),N.min(),Et.empty(),0)}static newFoundDocument(t,n,r,i){return new lt(t,1,n,N.min(),r,i,0)}static newNoDocument(t,n){return new lt(t,2,n,N.min(),N.min(),Et.empty(),0)}static newUnknownDocument(t,n){return new lt(t,3,n,N.min(),N.min(),Et.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(N.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof lt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n){this.position=t,this.inclusive=n}}function kc(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=b.comparator(b.fromName(o.referenceValue),n.key):r=Ge(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Nc(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Lt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t,n="asc"){this.field=t,this.dir=n}}function v0(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{}class X extends wh{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new w0(t,n,r):n==="array-contains"?new R0(t,r):n==="in"?new b0(t,r):n==="not-in"?new S0(t,r):n==="array-contains-any"?new C0(t,r):new X(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new T0(t,r):new A0(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ge(n,this.value)):n!==null&&be(this.value)===be(n)&&this.matchesComparison(Ge(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return k()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Mt extends wh{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new Mt(t,n)}matches(t){return Th(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(n=>n.isInequality());return t!==null?t.field:null}le(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Th(e){return e.op==="and"}function Ah(e){return I0(e)&&Th(e)}function I0(e){for(const t of e.filters)if(t instanceof Mt)return!1;return!0}function $s(e){if(e instanceof X)return e.field.canonicalString()+e.op.toString()+Qe(e.value);if(Ah(e))return e.filters.map(t=>$s(t)).join(",");{const t=e.filters.map(n=>$s(n)).join(",");return`${e.op}(${t})`}}function Rh(e,t){return e instanceof X?function(r,i){return i instanceof X&&r.op===i.op&&r.field.isEqual(i.field)&&Lt(r.value,i.value)}(e,t):e instanceof Mt?function(r,i){return i instanceof Mt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Rh(o,i.filters[a]),!0):!1}(e,t):void k()}function bh(e){return e instanceof X?function(n){return`${n.field.canonicalString()} ${n.op} ${Qe(n.value)}`}(e):e instanceof Mt?function(n){return n.op.toString()+" {"+n.getFilters().map(bh).join(" ,")+"}"}(e):"Filter"}class w0 extends X{constructor(t,n,r){super(t,n,r),this.key=b.fromName(r.referenceValue)}matches(t){const n=b.comparator(t.key,this.key);return this.matchesComparison(n)}}class T0 extends X{constructor(t,n){super(t,"in",n),this.keys=Sh("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class A0 extends X{constructor(t,n){super(t,"not-in",n),this.keys=Sh("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Sh(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>b.fromName(r.referenceValue))}class R0 extends X{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Xo(n)&&Wn(n.arrayValue,this.value)}}class b0 extends X{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Wn(this.value.arrayValue,n)}}class S0 extends X{constructor(t,n){super(t,"not-in",n)}matches(t){if(Wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Wn(this.value.arrayValue,n)}}class C0 extends X{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Xo(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Wn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function xc(e,t=null,n=[],r=[],i=null,s=null,o=null){return new P0(e,t,n,r,i,s,o)}function Zo(e){const t=x(e);if(t.he===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>$s(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Oi(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Qe(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Qe(r)).join(",")),t.he=n}return t.he}function ta(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!v0(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Rh(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Nc(e.startAt,t.startAt)&&Nc(e.endAt,t.endAt)}function Js(e){return b.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function k0(e,t,n,r,i,s,o,a){return new Li(e,t,n,r,i,s,o,a)}function ea(e){return new Li(e)}function Dc(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function N0(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function x0(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function D0(e){return e.collectionGroup!==null}function Be(e){const t=x(e);if(t.Pe===null){t.Pe=[];const n=x0(t),r=N0(t);if(n!==null&&r===null)n.isKeyField()||t.Pe.push(new An(n)),t.Pe.push(new An(ut.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new An(ut.keyField(),s))}}}return t.Pe}function Gt(e){const t=x(e);if(!t.Ie)if(t.limitType==="F")t.Ie=xc(t.path,t.collectionGroup,Be(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const s of Be(t)){const o=s.dir==="desc"?"asc":"desc";n.push(new An(s.field,o))}const r=t.endAt?new ri(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new ri(t.startAt.position,t.startAt.inclusive):null;t.Ie=xc(t.path,t.collectionGroup,n,t.filters,t.limit,r,i)}return t.Ie}function Ys(e,t,n){return new Li(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Mi(e,t){return ta(Gt(e),Gt(t))&&e.limitType===t.limitType}function Ch(e){return`${Zo(Gt(e))}|lt:${e.limitType}`}function Xs(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>bh(i)).join(", ")}]`),Oi(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Qe(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Qe(i)).join(",")),`Target(${r})`}(Gt(e))}; limitType=${e.limitType})`}function Fi(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):b.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Be(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const l=kc(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,Be(r),i)||r.endAt&&!function(o,a,c){const l=kc(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,Be(r),i))}(e,t)}function V0(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Ph(e){return(t,n)=>{let r=!1;for(const i of Be(e)){const s=O0(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function O0(e,t,n){const r=e.field.isKeyField()?b.comparator(t.key,n.key):function(s,o,a){const c=o.data.field(s),l=a.data.field(s);return c!==null&&l!==null?Ge(c,l):k()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return k()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){cn(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Eh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L0=new q(b.comparator);function Qt(){return L0}const kh=new q(b.comparator);function En(...e){let t=kh;for(const n of e)t=t.insert(n.key,n);return t}function Nh(e){let t=kh;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function ye(){return Rn()}function xh(){return Rn()}function Rn(){return new ln(e=>e.toString(),(e,t)=>e.isEqual(t))}const M0=new q(b.comparator),F0=new ft(b.comparator);function D(...e){let t=F0;for(const n of e)t=t.add(n);return t}const U0=new ft(M);function B0(){return U0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ni(t)?"-0":t}}function Vh(e){return{integerValue:""+e}}function j0(e,t){return g0(t)?Vh(t):Dh(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(){this._=void 0}}function z0(e,t,n){return e instanceof ii?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jo(s)&&(s=Yo(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof qn?Lh(e,t):e instanceof Hn?Mh(e,t):function(i,s){const o=Oh(i,s),a=Vc(o)+Vc(i.Te);return Qs(o)&&Qs(i.Te)?Vh(a):Dh(i.serializer,a)}(e,t)}function W0(e,t,n){return e instanceof qn?Lh(e,t):e instanceof Hn?Mh(e,t):n}function Oh(e,t){return e instanceof si?function(r){return Qs(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class ii extends Ui{}class qn extends Ui{constructor(t){super(),this.elements=t}}function Lh(e,t){const n=Fh(t);for(const r of e.elements)n.some(i=>Lt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Hn extends Ui{constructor(t){super(),this.elements=t}}function Mh(e,t){let n=Fh(t);for(const r of e.elements)n=n.filter(i=>!Lt(i,r));return{arrayValue:{values:n}}}class si extends Ui{constructor(t,n){super(),this.serializer=t,this.Te=n}}function Vc(e){return $(e.integerValue||e.doubleValue)}function Fh(e){return Xo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function q0(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof qn&&i instanceof qn||r instanceof Hn&&i instanceof Hn?Ke(r.elements,i.elements,Lt):r instanceof si&&i instanceof si?Lt(r.Te,i.Te):r instanceof ii&&i instanceof ii}(e.transform,t.transform)}class H0{constructor(t,n){this.version=t,this.transformResults=n}}class Wt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Wt}static exists(t){return new Wt(void 0,t)}static updateTime(t){return new Wt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mr(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Bi{}function Uh(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new jh(e.key,Wt.none()):new fr(e.key,e.data,Wt.none());{const n=e.data,r=Et.empty();let i=new ft(ut.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pe(e.key,r,new Rt(i.toArray()),Wt.none())}}function K0(e,t,n){e instanceof fr?function(i,s,o){const a=i.value.clone(),c=Lc(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Pe?function(i,s,o){if(!Mr(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Lc(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(Bh(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function bn(e,t,n,r){return e instanceof fr?function(s,o,a,c){if(!Mr(s.precondition,o))return a;const l=s.value.clone(),u=Mc(s.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(e,t,n,r):e instanceof Pe?function(s,o,a,c){if(!Mr(s.precondition,o))return a;const l=Mc(s.fieldTransforms,c,o),u=o.data;return u.setAll(Bh(s)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(s,o,a){return Mr(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function G0(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=Oh(r.transform,i||null);s!=null&&(n===null&&(n=Et.empty()),n.set(r.field,s))}return n||null}function Oc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ke(r,i,(s,o)=>q0(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class fr extends Bi{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pe extends Bi{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Bh(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Lc(e,t,n){const r=new Map;z(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,W0(o,a,n[i]))}return r}function Mc(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,z0(s,o,t))}return r}class jh extends Bi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Q0 extends Bi{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&K0(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=bn(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=bn(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=xh();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const c=Uh(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(N.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),D())}isEqual(t){return this.batchId===t.batchId&&Ke(this.mutations,t.mutations,(n,r)=>Oc(n,r))&&Ke(this.baseMutations,t.baseMutations,(n,r)=>Oc(n,r))}}class na{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){z(t.mutations.length===r.length);let i=function(){return M0}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new na(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q,V;function X0(e){switch(e){default:return k();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function zh(e){if(e===void 0)return Kt("GRPC error has no .code"),g.UNKNOWN;switch(e){case Q.OK:return g.OK;case Q.CANCELLED:return g.CANCELLED;case Q.UNKNOWN:return g.UNKNOWN;case Q.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case Q.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case Q.INTERNAL:return g.INTERNAL;case Q.UNAVAILABLE:return g.UNAVAILABLE;case Q.UNAUTHENTICATED:return g.UNAUTHENTICATED;case Q.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case Q.NOT_FOUND:return g.NOT_FOUND;case Q.ALREADY_EXISTS:return g.ALREADY_EXISTS;case Q.PERMISSION_DENIED:return g.PERMISSION_DENIED;case Q.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case Q.ABORTED:return g.ABORTED;case Q.OUT_OF_RANGE:return g.OUT_OF_RANGE;case Q.UNIMPLEMENTED:return g.UNIMPLEMENTED;case Q.DATA_LOSS:return g.DATA_LOSS;default:return k()}}(V=Q||(Q={}))[V.OK=0]="OK",V[V.CANCELLED=1]="CANCELLED",V[V.UNKNOWN=2]="UNKNOWN",V[V.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",V[V.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",V[V.NOT_FOUND=5]="NOT_FOUND",V[V.ALREADY_EXISTS=6]="ALREADY_EXISTS",V[V.PERMISSION_DENIED=7]="PERMISSION_DENIED",V[V.UNAUTHENTICATED=16]="UNAUTHENTICATED",V[V.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",V[V.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",V[V.ABORTED=10]="ABORTED",V[V.OUT_OF_RANGE=11]="OUT_OF_RANGE",V[V.UNIMPLEMENTED=12]="UNIMPLEMENTED",V[V.INTERNAL=13]="INTERNAL",V[V.UNAVAILABLE=14]="UNAVAILABLE",V[V.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return br}static getOrCreateInstance(){return br===null&&(br=new ra),br}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let br=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE=new Ue([4294967295,4294967295],0);function Fc(e){const t=Z0().encode(e),n=new e0;return n.update(t),new Uint8Array(n.digest())}function Uc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Ue([n,r],0),new Ue([i,s],0)]}class ia{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vn(`Invalid padding: ${n}`);if(r<0)throw new vn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new vn(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new vn(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*t.length-n,this.Ae=Ue.fromNumber(this.de)}Re(t,n,r){let i=t.add(n.multiply(Ue.fromNumber(r)));return i.compare(tE)===1&&(i=new Ue([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const n=Fc(t),[r,i]=Uc(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new ia(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const n=Fc(t),[r,i]=Uc(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class vn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,pr.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new ji(N.min(),i,new q(M),Qt(),D())}}class pr{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new pr(r,n,D(),D(),D())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,n,r,i){this.fe=t,this.removedTargetIds=n,this.key=r,this.ge=i}}class Wh{constructor(t,n){this.targetId=t,this.pe=n}}class qh{constructor(t,n,r=mt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Bc{constructor(){this.ye=0,this.we=zc(),this.Se=mt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=D(),n=D(),r=D();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:k()}}),new pr(this.Se,this.be,t,n,r)}xe(){this.De=!1,this.we=zc()}Oe(t,n){this.De=!0,this.we=this.we.insert(t,n)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class eE{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=Qt(),this.$e=jc(),this.Ue=new q(M)}We(t){for(const n of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(n,t.ge):this.ze(n,t.key,t.ge);for(const n of t.removedTargetIds)this.ze(n,t.key,t.ge)}je(t){this.forEachTarget(t,n=>{const r=this.He(n);switch(t.state){case 0:this.Je(n)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(t.resumeToken));break;default:k()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(t){var n,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(Js(a))if(s===0){const c=new b(a.path);this.ze(i,c,lt.newNoDocument(c,N.min()))}else z(s===1);else{const c=this.et(i);if(c!==s){const l=this.tt(t,c);if(l.status!==0){this.Ye(i);const u=l.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,u)}(n=ra.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(h,d,f,m){var _,I,E,w,A,B;const G={localCacheCount:f,existenceFilterCount:m.count},F=m.unchangedNames;return F&&(G.bloomFilter={applied:h===0,hashCount:(_=F==null?void 0:F.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(w=(E=(I=F==null?void 0:F.bits)===null||I===void 0?void 0:I.bitmap)===null||E===void 0?void 0:E.length)!==null&&w!==void 0?w:0,padding:(B=(A=F==null?void 0:F.bits)===null||A===void 0?void 0:A.padding)!==null&&B!==void 0?B:0},d&&(G.bloomFilter.mightContain=d)),G}(l.status,(r=l.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,n){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,l;try{c=Re(s).toUint8Array()}catch(h){if(h instanceof vh)return He("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{l=new ia(c,o,a)}catch(h){return He(h instanceof vn?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const u=h=>{const d=this.qe.rt();return l.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return l.de===0?{status:1}:{status:i===n-this.it(t.targetId,u)?0:2,nt:u}}it(t,n){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&Js(a.target)){const c=new b(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,lt.newNoDocument(c,t))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=D();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Xe(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new ji(t,n,this.Ue,this.Ke,r);return this.Ke=Qt(),this.$e=jc(),this.Ue=new q(M),i}Ge(t,n){if(!this.Je(t))return;const r=this.ot(t,n.key)?2:0;this.He(t).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(t))}ze(t,n,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(t)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(t){this.Qe.delete(t)}et(t){const n=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let n=this.Qe.get(t);return n||(n=new Bc,this.Qe.set(t,n)),n}_t(t){let n=this.$e.get(t);return n||(n=new ft(M),this.$e=this.$e.insert(t,n)),n}Je(t){const n=this.Xe(t)!==null;return n||T("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.Qe.get(t);return n&&n.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Bc),this.qe.getRemoteKeysForTarget(t).forEach(n=>{this.ze(t,n,null)})}ot(t,n){return this.qe.getRemoteKeysForTarget(t).has(n)}}function jc(){return new q(b.comparator)}function zc(){return new q(b.comparator)}const nE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),rE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),iE=(()=>({and:"AND",or:"OR"}))();class sE{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Zs(e,t){return e.useProto3Json||Oi(t)?t:{value:t}}function oi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Hh(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function oE(e,t){return oi(e,t.toTimestamp())}function Ot(e){return z(!!e),N.fromTimestamp(function(n){const r=ue(n);return new Z(r.seconds,r.nanos)}(e))}function sa(e,t){return function(r){return new H(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function Kh(e){const t=H.fromString(e);return z(Jh(t)),t}function to(e,t){return sa(e.databaseId,t.path)}function vs(e,t){const n=Kh(t);if(n.get(1)!==e.databaseId.projectId)throw new S(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new S(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new b(Gh(n))}function eo(e,t){return sa(e.databaseId,t)}function aE(e){const t=Kh(e);return t.length===4?H.emptyPath():Gh(t)}function no(e){return new H(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Gh(e){return z(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Wc(e,t,n){return{name:to(e,t),fields:n.value.mapValue.fields}}function cE(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:k()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(z(u===void 0||typeof u=="string"),mt.fromBase64String(u||"")):(z(u===void 0||u instanceof Uint8Array),mt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const u=l.code===void 0?g.UNKNOWN:zh(l.code);return new S(u,l.message||"")}(o);n=new qh(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=vs(e,r.document.name),s=Ot(r.document.updateTime),o=r.document.createTime?Ot(r.document.createTime):N.min(),a=new Et({mapValue:{fields:r.document.fields}}),c=lt.newFoundDocument(i,s,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Fr(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=vs(e,r.document),s=r.readTime?Ot(r.readTime):N.min(),o=lt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Fr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=vs(e,r.document),s=r.removedTargetIds||[];n=new Fr([],s,i,null)}else{if(!("filter"in t))return k();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Y0(i,s),a=r.targetId;n=new Wh(a,o)}}return n}function lE(e,t){let n;if(t instanceof fr)n={update:Wc(e,t.key,t.value)};else if(t instanceof jh)n={delete:to(e,t.key)};else if(t instanceof Pe)n={update:Wc(e,t.key,t.data),updateMask:_E(t.fieldMask)};else{if(!(t instanceof Q0))return k();n={verify:to(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ii)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof qn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Hn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof si)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw k()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:oE(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:k()}(e,t.precondition)),n}function uE(e,t){return e&&e.length>0?(z(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Ot(i.updateTime):Ot(s);return o.isEqual(N.min())&&(o=Ot(s)),new H0(o,i.transformResults||[])}(n,t))):[]}function hE(e,t){return{documents:[eo(e,t.path)]}}function dE(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=eo(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=eo(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return $h(Mt.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:xe(h.field),direction:mE(h.dir)}}(l))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Zs(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),n}function fE(e){let t=aE(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){z(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let s=[];n.where&&(s=function(h){const d=Qh(h);return d instanceof Mt&&Ah(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(m){return new An(De(m.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Oi(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new ri(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new ri(f,d)}(n.endAt)),k0(t,i,o,s,a,"F",c,l)}function pE(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return k()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Qh(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=De(n.unaryFilter.field);return X.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=De(n.unaryFilter.field);return X.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=De(n.unaryFilter.field);return X.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=De(n.unaryFilter.field);return X.create(o,"!=",{nullValue:"NULL_VALUE"});default:return k()}}(e):e.fieldFilter!==void 0?function(n){return X.create(De(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return k()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Mt.create(n.compositeFilter.filters.map(r=>Qh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return k()}}(n.compositeFilter.op))}(e):k()}function mE(e){return nE[e]}function gE(e){return rE[e]}function yE(e){return iE[e]}function xe(e){return{fieldPath:e.canonicalString()}}function De(e){return ut.fromServerFormat(e.fieldPath)}function $h(e){return e instanceof X?function(n){if(n.op==="=="){if(Pc(n.value))return{unaryFilter:{field:xe(n.field),op:"IS_NAN"}};if(Cc(n.value))return{unaryFilter:{field:xe(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Pc(n.value))return{unaryFilter:{field:xe(n.field),op:"IS_NOT_NAN"}};if(Cc(n.value))return{unaryFilter:{field:xe(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xe(n.field),op:gE(n.op),value:n.value}}}(e):e instanceof Mt?function(n){const r=n.getFilters().map(i=>$h(i));return r.length===1?r[0]:{compositeFilter:{op:yE(n.op),filters:r}}}(e):k()}function _E(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Jh(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,n,r,i,s=N.min(),o=N.min(),a=mt.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new re(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new re(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(t){this.ct=t}}function vE(e){const t=fE({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Ys(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this.sn=new wE}addToCollectionParentIndex(t,n){return this.sn.add(n),y.resolve()}getCollectionParents(t,n){return y.resolve(this.sn.getEntries(n))}addFieldIndex(t,n){return y.resolve()}deleteFieldIndex(t,n){return y.resolve()}getDocumentsMatchingTarget(t,n){return y.resolve(null)}getIndexType(t,n){return y.resolve(0)}getFieldIndexes(t,n){return y.resolve([])}getNextCollectionGroupToUpdate(t){return y.resolve(null)}getMinOffset(t,n){return y.resolve(le.min())}getMinOffsetFromCollectionGroup(t,n){return y.resolve(le.min())}updateCollectionGroup(t,n,r){return y.resolve()}updateIndexEntries(t,n){return y.resolve()}}class wE{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new ft(H.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ft(H.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new $e(0)}static On(){return new $e(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(){this.changes=new ln(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,lt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?y.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&bn(r.mutation,i,Rt.empty(),Z.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,D()).next(()=>r))}getLocalViewOfDocuments(t,n,r=D()){const i=ye();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=En();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=ye();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,D()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Qt();const o=Rn(),a=function(){return Rn()}();return n.forEach((c,l)=>{const u=r.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof Pe)?s=s.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),bn(u.mutation,l,u.mutation.getFieldMask(),Z.now())):o.set(l.key,Rt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new AE(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Rn();let i=new q((o,a)=>o-a),s=D();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Rt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(i.get(a.batchId)||D()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=xh();u.forEach(d=>{if(!s.has(d)){const f=Uh(n.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return y.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r){return function(s){return b.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):D0(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r):this.getDocumentsMatchingCollectionQuery(t,n,r)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):y.resolve(ye());let a=-1,c=s;return o.next(l=>y.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(u)?y.resolve():this.remoteDocumentCache.getEntry(t,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,c,l,D())).next(u=>({batchId:a,changes:Nh(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new b(n)).next(r=>{let i=En();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r){const i=n.collectionGroup;let s=En();return this.indexManager.getCollectionParents(t,i).next(o=>y.forEach(o,a=>{const c=function(u,h){return new Li(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(l=>{l.forEach((u,h)=>{s=s.insert(u,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i))).next(s=>{i.forEach((a,c)=>{const l=c.getKey();s.get(l)===null&&(s=s.insert(l,lt.newInvalidDocument(l)))});let o=En();return s.forEach((a,c)=>{const l=i.get(a);l!==void 0&&bn(l.mutation,c,Rt.empty(),Z.now()),Fi(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,n){return y.resolve(this.ar.get(n))}saveBundleMetadata(t,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ot(i.createTime)}}(n)),y.resolve()}getNamedQuery(t,n){return y.resolve(this.ur.get(n))}saveNamedQuery(t,n){return this.ur.set(n.name,function(i){return{name:i.name,query:vE(i.bundledQuery),readTime:Ot(i.readTime)}}(n)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(){this.overlays=new q(b.comparator),this.cr=new Map}getOverlay(t,n){return y.resolve(this.overlays.get(n))}getOverlays(t,n){const r=ye();return y.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),y.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),y.resolve()}getOverlaysForCollection(t,n,r){const i=ye(),s=n.length+1,o=new b(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return y.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new q((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=s.get(l.largestBatchId);u===null&&(u=ye(),s=s.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=ye(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=i)););return y.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new J0(n,r));let s=this.cr.get(n);s===void 0&&(s=D(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.lr=new ft(et.hr),this.Pr=new ft(et.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,n){const r=new et(t,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Er(new et(t,n))}dr(t,n){t.forEach(r=>this.removeReference(r,n))}Ar(t){const n=new b(new H([])),r=new et(n,t),i=new et(n,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const n=new b(new H([])),r=new et(n,t),i=new et(n,t+1);let s=D();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new et(t,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class et{constructor(t,n){this.key=t,this.mr=n}static hr(t,n){return b.comparator(t.key,n.key)||M(t.mr,n.mr)}static Ir(t,n){return M(t.mr,n.mr)||b.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new ft(et.hr)}checkEmpty(t){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $0(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new et(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(t,n){return y.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return y.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),y.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new ft(M);return n.forEach(i=>{const s=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),y.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;b.isDocumentKey(s)||(s=s.child(""));const o=new et(new b(s),0);let a=new ft(M);return this.pr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.mr)),!0)},o),y.resolve(this.Sr(a))}Sr(t){const n=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){z(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return y.forEach(n.mutations,i=>{const s=new et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,n){const r=new et(n,0),i=this.pr.firstAfterOrEqual(r);return y.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,y.resolve()}br(t,n){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const n=this.wr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(t){this.Dr=t,this.docs=function(){return new q(b.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return y.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(t,n){let r=Qt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():lt.newInvalidDocument(i))}),y.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Qt();const o=n.path,a=new b(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||f0(d0(u),r)<=0||(i.has(u.key)||Fi(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return y.resolve(s)}getAllFromCollectionGroup(t,n,r,i){k()}vr(t,n){return y.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new kE(this)}getSize(t){return y.resolve(this.size)}}class kE extends TE{constructor(t){super(),this.sr=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),y.waitFor(n)}getFromCache(t,n){return this.sr.getEntry(t,n)}getAllFromCache(t,n){return this.sr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(t){this.persistence=t,this.Cr=new ln(n=>Zo(n),ta),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new oa,this.targetCount=0,this.Or=$e.xn()}forEachTarget(t,n){return this.Cr.forEach((r,i)=>n(i)),y.resolve()}getLastRemoteSnapshotVersion(t){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return y.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),y.resolve()}Ln(t){this.Cr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Or=new $e(n),this.highestTargetId=n),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,n){return this.Ln(n),this.targetCount+=1,y.resolve()}updateTargetData(t,n){return this.Ln(n),y.resolve()}removeTargetData(t,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),y.waitFor(s).next(()=>i)}getTargetCount(t){return y.resolve(this.targetCount)}getTargetData(t,n){const r=this.Cr.get(n)||null;return y.resolve(r)}addMatchingKeys(t,n,r){return this.Mr.Tr(n,r),y.resolve()}removeMatchingKeys(t,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),y.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Mr.Ar(n),y.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Mr.Vr(n);return y.resolve(r)}containsKey(t,n){return y.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(t,n){this.Nr={},this.overlays={},this.Br=new $o(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new NE(this),this.indexManager=new IE,this.remoteDocumentCache=function(i){return new PE(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new EE(n),this.Qr=new bE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new SE,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Nr[t.toKey()];return r||(r=new CE(n,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,n,r){T("MemoryPersistence","Starting transaction:",t);const i=new DE(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,n){return y.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,n)))}}class DE extends m0{constructor(t){super(),this.currentSequenceNumber=t}}class aa{constructor(t){this.persistence=t,this.Wr=new oa,this.Gr=null}static zr(t){return new aa(t)}get jr(){if(this.Gr)return this.Gr;throw k()}addReference(t,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),y.resolve()}removeReference(t,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),y.resolve()}markPotentiallyOrphaned(t,n){return this.jr.add(n.toString()),y.resolve()}removeTarget(t,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Kr(){this.Gr=new Set}$r(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.jr,r=>{const i=b.fromPath(r);return this.Hr(t,i).next(s=>{s||n.removeEntry(i,N.min())})}).next(()=>(this.Gr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Hr(t,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(t){return 0}Hr(t,n){return y.or([()=>y.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ur(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.Li=r,this.ki=i}static qi(t,n){let r=D(),i=D();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ca(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(){this.Qi=!1}initialize(t,n){this.Ki=t,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(t,n,r,i){return this.$i(t,n).next(s=>s||this.Ui(t,n,i,r)).next(s=>s||this.Wi(t,n))}$i(t,n){if(Dc(n))return y.resolve(null);let r=Gt(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ys(n,null,"F"),r=Gt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=D(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const l=this.Gi(n,a);return this.zi(n,l,o,c.readTime)?this.$i(t,Ys(n,null,"F")):this.ji(t,l,n,c)}))})))}Ui(t,n,r,i){return Dc(n)||i.isEqual(N.min())?this.Wi(t,n):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(t,n):(Ac()<=L.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xs(n)),this.ji(t,o,n,h0(i,-1)))})}Gi(t,n){let r=new ft(Ph(t));return n.forEach((i,s)=>{Fi(t,s)&&(r=r.add(s))}),r}zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,n){return Ac()<=L.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",Xs(n)),this.Ki.getDocumentsMatchingQuery(t,n,le.min())}ji(t,n,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(t,n,r,i){this.persistence=t,this.Hi=n,this.serializer=i,this.Ji=new q(M),this.Yi=new ln(s=>Zo(s),ta),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new RE(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ji))}}function LE(e,t,n,r){return new OE(e,t,n,r)}async function Yh(e,t){const n=x(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=D();for(const l of i){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of s){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({ts:l,removedBatchIds:o,addedBatchIds:a}))})})}function ME(e,t){const n=x(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=y.resolve();return d.forEach(m=>{f=f.next(()=>u.getEntry(c,m)).next(_=>{const I=l.docVersions.get(m);z(I!==null),_.version.compareTo(I)<0&&(h.applyToRemoteDocument(_,l),_.isValidDocument()&&(_.setReadTime(l.commitVersion),u.addEntry(_)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=D();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function Xh(e){const t=x(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.kr.getLastRemoteSnapshotVersion(n))}function FE(e,t){const n=x(e),r=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];t.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;a.push(n.kr.removeMatchingKeys(s,u.removedDocuments,h).next(()=>n.kr.addMatchingKeys(s,u.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(mt.EMPTY_BYTE_STRING,N.min()).withLastLimboFreeSnapshotVersion(N.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),i=i.insert(h,f),function(_,I,E){return _.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,u)&&a.push(n.kr.updateTargetData(s,f))});let c=Qt(),l=D();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(UE(s,o,t.documentUpdates).next(u=>{c=u.ns,l=u.rs})),!r.isEqual(N.min())){const u=n.kr.getLastRemoteSnapshotVersion(s).next(h=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return y.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(n.Ji=i,s))}function UE(e,t,n){let r=D(),i=D();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Qt();return n.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(N.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{ns:o,rs:i}})}function BE(e,t){const n=x(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function jE(e,t){const n=x(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,t).next(s=>s?(i=s,y.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new re(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(t,r.targetId)),r})}async function ro(e,t,n){const r=x(e),i=r.Ji.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!dr(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function qc(e,t,n){const r=x(e);let i=N.min(),s=D();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,l,u){const h=x(c),d=h.Yi.get(u);return d!==void 0?y.resolve(h.Ji.get(d)):h.kr.getTargetData(l,u)}(r,o,Gt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,n?i:N.min(),n?s:D())).next(a=>(zE(r,V0(t),a),{documents:a,ss:s})))}function zE(e,t,n){let r=e.Zi.get(t)||N.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.Zi.set(t,r)}class Hc{constructor(){this.activeTargetIds=B0()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class WE{constructor(){this.Hs=new Hc,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,n,r){this.Js[t]=n}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Hc,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{Ys(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr=null;function Is(){return Sr===null?Sr=function(){return 268435456+Math.round(2147483648*Math.random())}():Sr++,"0x"+Sr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="WebChannelConnection";class GE extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=Is(),c=this.mo(n,r);T("RestConnection",`Sending RPC '${n}' ${a}:`,c,i);const l={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(l,s,o),this.po(n,c,l,i).then(u=>(T("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw He("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",i),u})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+an}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=HE[n];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,n,r,i){const s=Is();return new Promise((o,a)=>{const c=new t0;c.setWithCredentials(!0),c.listenOnce(Y_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Es.NO_ERROR:const u=c.getResponseJson();T(at,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(u)),o(u);break;case Es.TIMEOUT:T(at,`RPC '${t}' ${s} timed out`),a(new S(g.DEADLINE_EXCEEDED,"Request time out"));break;case Es.HTTP_ERROR:const h=c.getStatus();if(T(at,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(I){const E=I.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(E)>=0?E:g.UNKNOWN}(f.status);a(new S(m,f.message))}else a(new S(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new S(g.UNAVAILABLE,"Connection failed."));break;default:k()}}finally{T(at,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);T(at,`RPC '${t}' ${s} sending request:`,i),c.send(n,"POST",l,r,15)})}wo(t,n,r){const i=Is(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=$_(),a=J_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Z_({})),this.fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=s.join("");T(at,`Creating RPC '${t}' stream ${i}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const m=new KE({so:I=>{f?T(at,`Not sending because RPC '${t}' stream ${i} is closed:`,I):(d||(T(at,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),T(at,`RPC '${t}' stream ${i} sending:`,I),h.send(I))},oo:()=>h.close()}),_=(I,E,w)=>{I.listen(E,A=>{try{w(A)}catch(B){setTimeout(()=>{throw B},0)}})};return _(h,Tr.EventType.OPEN,()=>{f||T(at,`RPC '${t}' stream ${i} transport opened.`)}),_(h,Tr.EventType.CLOSE,()=>{f||(f=!0,T(at,`RPC '${t}' stream ${i} transport closed`),m.Po())}),_(h,Tr.EventType.ERROR,I=>{f||(f=!0,He(at,`RPC '${t}' stream ${i} transport errored:`,I),m.Po(new S(g.UNAVAILABLE,"The operation could not be completed")))}),_(h,Tr.EventType.MESSAGE,I=>{var E;if(!f){const w=I.data[0];z(!!w);const A=w,B=A.error||((E=A[0])===null||E===void 0?void 0:E.error);if(B){T(at,`RPC '${t}' stream ${i} received error:`,B);const G=B.status;let F=function(Y){const W=Q[Y];if(W!==void 0)return zh(W)}(G),J=B.message;F===void 0&&(F=g.INTERNAL,J="Unknown error status: "+G+" with message "+B.message),f=!0,m.Po(new S(F,J)),h.close()}else T(at,`RPC '${t}' stream ${i} received:`,w),m.Io(w)}}),_(a,X_.STAT_EVENT,I=>{I.stat===wc.PROXY?T(at,`RPC '${t}' stream ${i} detected buffering proxy`):I.stat===wc.NOPROXY&&T(at,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.ho()},0),m}}function ws(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e){return new sE(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,n,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&T("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(t,n,r,i,s,o,a,c){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Zh(t,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(Kt(n.toString()),Kt("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{t(()=>{const i=new S(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,n){const r=this.Xo(this.ko);this.stream=this.n_(t,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return T("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return n=>{this.ii.enqueueAndForget(()=>this.ko===t?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class QE extends td{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Ko.reset();const n=cE(this.serializer,t),r=function(s){if(!("targetChange"in s))return N.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?N.min():o.readTime?Ot(o.readTime):N.min()}(t);return this.listener.r_(n,r)}i_(t){const n={};n.database=no(this.serializer),n.addTarget=function(s,o){let a;const c=o.target;if(a=Js(c)?{documents:hE(s,c)}:{query:dE(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Hh(s,o.resumeToken);const l=Zs(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(N.min())>0){a.readTime=oi(s,o.snapshotVersion.toTimestamp());const l=Zs(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=pE(this.serializer,t);r&&(n.labels=r),this.Ho(n)}s_(t){const n={};n.database=no(this.serializer),n.removeTarget=t,this.Ho(n)}}class $E extends td{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const n=uE(t.writeResults,t.commitTime),r=Ot(t.commitTime);return this.listener.u_(r,n)}return z(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=no(this.serializer),this.Ho(t)}a_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>lE(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new S(g.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new S(g.UNKNOWN,i.toString())})}yo(t,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new S(g.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class YE{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Kt(n),this.d_=!1):T("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{ke(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=x(c);l.y_.add(4),await mr(l),l.b_.set("Unknown"),l.y_.delete(4),await Wi(l)}(this))})}),this.b_=new YE(r,i)}}async function Wi(e){if(ke(e))for(const t of e.w_)await t(!0)}async function mr(e){for(const t of e.w_)await t(!1)}function ed(e,t){const n=x(e);n.p_.has(t.targetId)||(n.p_.set(t.targetId,t),ha(n)?ua(n):un(n).Uo()&&la(n,t))}function nd(e,t){const n=x(e),r=un(n);n.p_.delete(t),r.Uo()&&rd(n,t),n.p_.size===0&&(r.Uo()?r.zo():ke(n)&&n.b_.set("Unknown"))}function la(e,t){if(e.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(N.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}un(e).i_(t)}function rd(e,t){e.D_.Be(t),un(e).s_(t)}function ua(e){e.D_=new eE({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>e.p_.get(t)||null,rt:()=>e.datastore.serializer.databaseId}),un(e).start(),e.b_.A_()}function ha(e){return ke(e)&&!un(e).$o()&&e.p_.size>0}function ke(e){return x(e).y_.size===0}function id(e){e.D_=void 0}async function ZE(e){e.p_.forEach((t,n)=>{la(e,t)})}async function tv(e,t){id(e),ha(e)?(e.b_.m_(t),ua(e)):e.b_.set("Unknown")}async function ev(e,t,n){if(e.b_.set("Online"),t instanceof qh&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(e,t)}catch(r){T("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ai(e,r)}else if(t instanceof Fr?e.D_.We(t):t instanceof Wh?e.D_.Ze(t):e.D_.je(t),!n.isEqual(N.min()))try{const r=await Xh(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=s.p_.get(l);u&&s.p_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=s.p_.get(c);if(!u)return;s.p_.set(c,u.withResumeToken(mt.EMPTY_BYTE_STRING,u.snapshotVersion)),rd(s,c);const h=new re(u.target,c,l,u.sequenceNumber);la(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){T("RemoteStore","Failed to raise snapshot:",r),await ai(e,r)}}async function ai(e,t,n){if(!dr(t))throw t;e.y_.add(1),await mr(e),e.b_.set("Offline"),n||(n=()=>Xh(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),e.y_.delete(1),await Wi(e)})}function sd(e,t){return t().catch(n=>ai(e,n,t))}async function qi(e){const t=x(e),n=he(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;nv(t);)try{const i=await BE(t.localStore,r);if(i===null){t.g_.length===0&&n.zo();break}r=i.batchId,rv(t,i)}catch(i){await ai(t,i)}od(t)&&ad(t)}function nv(e){return ke(e)&&e.g_.length<10}function rv(e,t){e.g_.push(t);const n=he(e);n.Uo()&&n.__&&n.a_(t.mutations)}function od(e){return ke(e)&&!he(e).$o()&&e.g_.length>0}function ad(e){he(e).start()}async function iv(e){he(e).l_()}async function sv(e){const t=he(e);for(const n of e.g_)t.a_(n.mutations)}async function ov(e,t,n){const r=e.g_.shift(),i=na.from(r,t,n);await sd(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await qi(e)}async function av(e,t){t&&he(e).__&&await async function(r,i){if(function(o){return X0(o)&&o!==g.ABORTED}(i.code)){const s=r.g_.shift();he(r).Go(),await sd(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await qi(r)}}(e,t),od(e)&&ad(e)}async function Gc(e,t){const n=x(e);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const r=ke(n);n.y_.add(3),await mr(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.y_.delete(3),await Wi(n)}async function cv(e,t){const n=x(e);t?(n.y_.delete(2),await Wi(n)):t||(n.y_.add(2),await mr(n),n.b_.set("Unknown"))}function un(e){return e.v_||(e.v_=function(n,r,i){const s=x(n);return s.P_(),new QE(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:ZE.bind(null,e),uo:tv.bind(null,e),r_:ev.bind(null,e)}),e.w_.push(async t=>{t?(e.v_.Go(),ha(e)?ua(e):e.b_.set("Unknown")):(await e.v_.stop(),id(e))})),e.v_}function he(e){return e.C_||(e.C_=function(n,r,i){const s=x(n);return s.P_(),new $E(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{_o:iv.bind(null,e),uo:av.bind(null,e),c_:sv.bind(null,e),u_:ov.bind(null,e)}),e.w_.push(async t=>{t?(e.C_.Go(),await qi(e)):(await e.C_.stop(),e.g_.length>0&&(T("RemoteStore",`Stopping write stream with ${e.g_.length} pending writes`),e.g_=[]))})),e.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ae,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new da(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new S(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fa(e,t){if(Kt("AsyncQueue",`${t}: ${e}`),dr(e))return new S(g.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t){this.comparator=t?(n,r)=>t(n,r)||b.comparator(n.key,r.key):(n,r)=>b.comparator(n.key,r.key),this.keyedMap=En(),this.sortedSet=new q(this.comparator)}static emptySet(t){return new je(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof je)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new je;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(){this.F_=new q(b.comparator)}track(t){const n=t.doc.key,r=this.F_.get(n);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(n,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(n):t.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:t.doc}):k():this.F_=this.F_.insert(n,t)}M_(){const t=[];return this.F_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Je{constructor(t,n,r,i,s,o,a,c,l){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Je(t,n,je.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Mi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(){this.x_=void 0,this.listeners=[]}}class uv{constructor(){this.queries=new ln(t=>Ch(t),Mi),this.onlineState="Unknown",this.O_=new Set}}async function hv(e,t){const n=x(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new lv),i)try{s.x_=await n.onListen(r)}catch(o){const a=fa(o,`Initialization of query '${Xs(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.N_(n.onlineState),s.x_&&t.B_(s.x_)&&pa(n)}async function dv(e,t){const n=x(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function fv(e,t){const n=x(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&pa(n)}function pv(e,t,n){const r=x(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function pa(e){e.O_.forEach(t=>{t.next()})}class mv{constructor(t,n,r){this.query=t,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Je(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),n=!0):this.K_(t,this.onlineState)&&(this.U_(t),n=!0),this.q_=t,n}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),n=!0),n}K_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(t){t=Je.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t){this.key=t}}class ld{constructor(t){this.key=t}}class gv{constructor(t,n){this.query=t,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=D(),this.mutatedKeys=D(),this.na=Ph(t),this.ra=new je(this.na)}get ia(){return this.X_}sa(t,n){const r=n?n.oa:new Qc,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,h)=>{const d=i.get(u),f=Fi(this.query,h)?h:null,m=!!d&&this.mutatedKeys.has(d.key),_=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let I=!1;d&&f?d.data.isEqual(f.data)?m!==_&&(r.track({type:3,doc:f}),I=!0):this._a(d,f)||(r.track({type:2,doc:f}),I=!0,(c&&this.na(f,c)>0||l&&this.na(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),I=!0):d&&!f&&(r.track({type:1,doc:d}),I=!0,(c||l)&&(a=!0)),I&&(f?(o=o.add(f),s=_?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r){const i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const s=t.oa.M_();s.sort((l,u)=>function(d,f){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k()}};return m(d)-m(f)}(l.type,u.type)||this.na(l.doc,u.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new Je(this.query,t.ra,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Qc,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=D(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return t.forEach(r=>{this.ta.has(r)||n.push(new ld(r))}),this.ta.forEach(r=>{t.has(r)||n.push(new cd(r))}),n}ha(t){this.X_=t.ss,this.ta=D();const n=this.sa(t.documents);return this.applyChanges(n,!0)}Pa(){return Je.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class yv{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class _v{constructor(t){this.key=t,this.Ia=!1}}class Ev{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new ln(a=>Ch(a),Mi),this.da=new Map,this.Aa=new Set,this.Ra=new q(b.comparator),this.Va=new Map,this.ma=new oa,this.fa={},this.ga=new Map,this.pa=$e.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function vv(e,t){const n=kv(e);let r,i;const s=n.Ea.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await jE(n.localStore,Gt(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Iv(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&ed(n.remoteStore,o)}return i}async function Iv(e,t,n,r,i){e.wa=(h,d,f)=>async function(_,I,E,w){let A=I.view.sa(E);A.zi&&(A=await qc(_.localStore,I.query,!1).then(({documents:F})=>I.view.sa(F,A)));const B=w&&w.targetChanges.get(I.targetId),G=I.view.applyChanges(A,_.isPrimaryClient,B);return Jc(_,I.targetId,G.ca),G.snapshot}(e,h,d,f);const s=await qc(e.localStore,t,!0),o=new gv(t,s.ss),a=o.sa(s.documents),c=pr.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),l=o.applyChanges(a,e.isPrimaryClient,c);Jc(e,n,l.ca);const u=new yv(t,n,o);return e.Ea.set(t,u),e.da.has(n)?e.da.get(n).push(t):e.da.set(n,[t]),l.snapshot}async function wv(e,t){const n=x(e),r=n.Ea.get(t),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Mi(s,t))),void n.Ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ro(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),nd(n.remoteStore,r.targetId),io(n,r.targetId)}).catch(hr)):(io(n,r.targetId),await ro(n.localStore,r.targetId,!0))}async function Tv(e,t,n){const r=Nv(e);try{const i=await function(o,a){const c=x(o),l=Z.now(),u=a.reduce((f,m)=>f.add(m.key),D());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Qt(),_=D();return c.Xi.getEntries(f,u).next(I=>{m=I,m.forEach((E,w)=>{w.isValidDocument()||(_=_.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,m)).next(I=>{h=I;const E=[];for(const w of a){const A=G0(w,h.get(w.key).overlayedDocument);A!=null&&E.push(new Pe(w.key,A,Ih(A.value.mapValue),Wt.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,E,a)}).next(I=>{d=I;const E=I.applyToLocalDocumentSet(h,_);return c.documentOverlayCache.saveOverlays(f,I.batchId,E)})}).then(()=>({batchId:d.batchId,changes:Nh(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let l=o.fa[o.currentUser.toKey()];l||(l=new q(M)),l=l.insert(a,c),o.fa[o.currentUser.toKey()]=l}(r,i.batchId,n),await gr(r,i.changes),await qi(r.remoteStore)}catch(i){const s=fa(i,"Failed to persist write");n.reject(s)}}async function ud(e,t){const n=x(e);try{const r=await FE(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?z(o.Ia):i.removedDocuments.size>0&&(z(o.Ia),o.Ia=!1))}),await gr(n,r,t)}catch(r){await hr(r)}}function $c(e,t,n){const r=x(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=x(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.N_(a)&&(l=!0)}),l&&pa(c)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Av(e,t,n){const r=x(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Va.get(t),s=i&&i.key;if(s){let o=new q(b.comparator);o=o.insert(s,lt.newNoDocument(s,N.min()));const a=D().add(s),c=new ji(N.min(),new Map,new q(M),o,a);await ud(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(t),ma(r)}else await ro(r.localStore,t,!1).then(()=>io(r,t,n)).catch(hr)}async function Rv(e,t){const n=x(e),r=t.batch.batchId;try{const i=await ME(n.localStore,t);dd(n,r,null),hd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gr(n,i)}catch(i){await hr(i)}}async function bv(e,t,n){const r=x(e);try{const i=await function(o,a){const c=x(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(z(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,t);dd(r,t,n),hd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await gr(r,i)}catch(i){await hr(i)}}function hd(e,t){(e.ga.get(t)||[]).forEach(n=>{n.resolve()}),e.ga.delete(t)}function dd(e,t,n){const r=x(e);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function io(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.da.get(t))e.Ea.delete(r),n&&e.Ta.Sa(r,n);e.da.delete(t),e.isPrimaryClient&&e.ma.Ar(t).forEach(r=>{e.ma.containsKey(r)||fd(e,r)})}function fd(e,t){e.Aa.delete(t.path.canonicalString());const n=e.Ra.get(t);n!==null&&(nd(e.remoteStore,n),e.Ra=e.Ra.remove(t),e.Va.delete(n),ma(e))}function Jc(e,t,n){for(const r of n)r instanceof cd?(e.ma.addReference(r.key,t),Sv(e,r)):r instanceof ld?(T("SyncEngine","Document no longer in limbo: "+r.key),e.ma.removeReference(r.key,t),e.ma.containsKey(r.key)||fd(e,r.key)):k()}function Sv(e,t){const n=t.key,r=n.path.canonicalString();e.Ra.get(n)||e.Aa.has(r)||(T("SyncEngine","New document in limbo: "+n),e.Aa.add(r),ma(e))}function ma(e){for(;e.Aa.size>0&&e.Ra.size<e.maxConcurrentLimboResolutions;){const t=e.Aa.values().next().value;e.Aa.delete(t);const n=new b(H.fromString(t)),r=e.pa.next();e.Va.set(r,new _v(n)),e.Ra=e.Ra.insert(n,r),ed(e.remoteStore,new re(Gt(ea(n.path)),r,"TargetPurposeLimboResolution",$o.ae))}}async function gr(e,t,n){const r=x(e),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,t,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=ca.qi(c.targetId,l);s.push(u)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(c,l){const u=x(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>y.forEach(l,d=>y.forEach(d.Li,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>y.forEach(d.ki,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!dr(h))throw h;T("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.Ji.get(d),m=f.snapshotVersion,_=f.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(d,_)}}}(r.localStore,s))}async function Cv(e,t){const n=x(e);if(!n.currentUser.isEqual(t)){T("SyncEngine","User change. New user:",t.toKey());const r=await Yh(n.localStore,t);n.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new S(g.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await gr(n,r.ts)}}function Pv(e,t){const n=x(e),r=n.Va.get(t);if(r&&r.Ia)return D().add(r.key);{let i=D();const s=n.da.get(t);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function kv(e){const t=x(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ud.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pv.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Av.bind(null,t),t.Ta.r_=fv.bind(null,t.eventManager),t.Ta.Sa=pv.bind(null,t.eventManager),t}function Nv(e){const t=x(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Rv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=bv.bind(null,t),t}class Yc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=zi(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return LE(this.persistence,new VE,t.initialUser,this.serializer)}createPersistence(t){return new xE(aa.zr,this.serializer)}createSharedClientState(t){return new WE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class xv{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$c(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cv.bind(null,this.syncEngine),await cv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new uv}()}createDatastore(t){const n=zi(t.databaseInfo.databaseId),r=function(s){return new GE(s)}(t.databaseInfo);return function(s,o,a,c){return new JE(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new XE(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>$c(this.syncEngine,n,0),function(){return Kc.v()?new Kc:new qE}())}createSyncEngine(t,n){return function(i,s,o,a,c,l,u){const h=new Ev(i,s,o,a,c,l);return u&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=x(n);T("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await mr(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):Kt("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ct.UNAUTHENTICATED,this.clientId=_h.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{T("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(T("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ae;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=fa(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Ts(e,t){e.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Yh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Xc(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Lv(e);T("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>Gc(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>Gc(t.remoteStore,s)),e._onlineComponents=t}function Ov(e){return e.name==="FirebaseError"?e.code===g.FAILED_PRECONDITION||e.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Lv(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ts(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Ov(n))throw n;He("Error using user provided cache. Falling back to memory cache: "+n),await Ts(e,new Yc)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await Ts(e,new Yc);return e._offlineComponents}async function pd(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await Xc(e,e._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await Xc(e,new xv))),e._onlineComponents}function Mv(e){return pd(e).then(t=>t.syncEngine)}async function Fv(e){const t=await pd(e),n=t.eventManager;return n.onListen=vv.bind(null,t.syncEngine),n.onUnlisten=wv.bind(null,t.syncEngine),n}function Uv(e,t,n={}){const r=new ae;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,l){const u=new Dv({next:d=>{o.enqueueAndForget(()=>dv(s,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new S(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new S(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new mv(ea(a.path),u,{includeMetadataChanges:!0,W_:!0});return hv(s,h)}(await Fv(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bv(e,t,n){if(!n)throw new S(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function jv(e,t,n,r){if(t===!0&&r===!0)throw new S(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function tl(e){if(!b.isDocumentKey(e))throw new S(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ga(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":k()}function Kn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new S(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ga(e);throw new S(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new S(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new S(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}jv("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=md((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new S(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new S(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new S(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ya{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new el({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new S(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new el(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new n0;switch(r.type){case"firstParty":return new o0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new S(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Zc.get(n);r&&(T("ComponentProvider","Removing Datastore"),Zc.delete(n),r.terminate())}(this),Promise.resolve()}}function zv(e,t,n,r={}){var i;const s=(e=Kn(e,ya))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&He("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ct.MOCK_USER;else{a=Tp(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new S(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ct(l)}e._authCredentials=new r0(new yh(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new _a(this.firestore,t,this._query)}}class It{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new It(this.firestore,t,this._key)}}class Gn extends _a{constructor(t,n,r){super(t,n,ea(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new It(this.firestore,null,new b(t))}withConverter(t){return new Gn(this.firestore,t,this._path)}}function gd(e,t,...n){if(e=wt(e),arguments.length===1&&(t=_h.V()),Bv("doc","path",t),e instanceof ya){const r=H.fromString(t,...n);return tl(r),new It(e,null,new b(r))}{if(!(e instanceof It||e instanceof Gn))throw new S(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(H.fromString(t,...n));return tl(r),new It(e.firestore,e instanceof Gn?e.converter:null,new b(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Zh(this,"async_queue_retry"),this.Xa=()=>{const n=ws();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const t=ws();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const n=ws();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const n=new ae;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!dr(t))throw t;T("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const n=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Kt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(t,n,r){this.eu(),this.Za.indexOf(t)>-1&&(n=0);const i=da.createAndSchedule(this,t,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&k()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const n of this.ja)if(n.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const n=this.ja.indexOf(t);this.ja.splice(n,1)}}class Ea extends ya{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Wv}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||_d(this),this._firestoreClient.terminate()}}function qv(e,t){const n=typeof e=="object"?e:Dl(),r=typeof e=="string"?e:t||"(default)",i=go(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ip("firestore");s&&zv(i,...s)}return i}function yd(e){return e._firestoreClient||_d(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function _d(e){var t,n,r;const i=e._freezeSettings(),s=function(a,c,l,u){return new _0(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,md(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new Vv(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ye(mt.fromBase64String(t))}catch(n){throw new S(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ye(mt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new S(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new S(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new S(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return M(this._lat,t._lat)||M(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=/^__.*__$/;class Kv{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Pe(t,this.data,this.fieldMask,n,this.fieldTransforms):new fr(t,this.data,n,this.fieldTransforms)}}function vd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class wa{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new wa(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return ci(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(vd(this.uu)&&Hv.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class Gv{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||zi(t)}Ru(t,n,r,i=!1){return new wa({uu:t,methodName:n,Au:r,path:ut.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qv(e){const t=e._freezeSettings(),n=zi(e._databaseId);return new Gv(e._databaseId,!!t.ignoreUndefinedProperties,n)}function $v(e,t,n,r,i,s={}){const o=e.Ru(s.merge||s.mergeFields?2:0,t,n,i);Ad("Data must be an object, but it was:",o,r);const a=wd(r,o);let c,l;if(s.merge)c=new Rt(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const d=Jv(t,h,n);if(!o.contains(d))throw new S(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Xv(u,d)||u.push(d)}c=new Rt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Kv(new Et(a),c,l)}function Id(e,t){if(Td(e=wt(e)))return Ad("Unsupported field value:",t,e),wd(e,t);if(e instanceof Ed)return function(r,i){if(!vd(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Id(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return j0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Z.fromDate(r);return{timestampValue:oi(i.serializer,s)}}if(r instanceof Z){const s=new Z(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oi(i.serializer,s)}}if(r instanceof Ia)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ye)return{bytesValue:Hh(i.serializer,r._byteString)};if(r instanceof It){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:sa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${ga(r)}`)}(e,t)}function wd(e,t){const n={};return Eh(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):cn(e,(r,i)=>{const s=Id(i,t.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Td(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Z||e instanceof Ia||e instanceof Ye||e instanceof It||e instanceof Ed)}function Ad(e,t,n){if(!Td(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=ga(n);throw r==="an object"?t.Eu(e+" a custom object"):t.Eu(e+" "+r)}}function Jv(e,t,n){if((t=wt(t))instanceof va)return t._internalPath;if(typeof t=="string")return Rd(e,t);throw ci("Field path arguments must be of type string or ",e,!1,void 0,n)}const Yv=new RegExp("[~\\*/\\[\\]]");function Rd(e,t,n){if(t.search(Yv)>=0)throw ci(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new va(...t.split("."))._internalPath}catch{throw ci(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ci(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new S(g.INVALID_ARGUMENT,a+e+c)}function Xv(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Zv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Sd("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Zv extends bd{data(){return super.data()}}function Sd(e,t){return typeof t=="string"?Rd(e,t):t instanceof va?t._internalPath:t._delegate._internalPath}class tI{convertValue(t,n="none"){switch(be(t)){case 0:return null;case 1:return t.booleanValue;case 2:return $(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw k()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return cn(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Ia($(t.latitude),$(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Yo(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(jn(t));default:return null}}convertTimestamp(t){const n=ue(t);return new Z(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=H.fromString(t);z(Jh(r));const i=new zn(r.get(1),r.get(3)),s=new b(r.popFirst(5));return i.isEqual(n)||Kt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Cd extends bd{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new rI(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Sd("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class rI extends Cd{data(t={}){return super.data(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(e){e=Kn(e,It);const t=Kn(e.firestore,Ea);return Uv(yd(t),e._key).then(n=>cI(t,e,n))}class sI extends tI{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ye(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new It(this.firestore,null,n)}}function oI(e,t,n){e=Kn(e,It);const r=Kn(e.firestore,Ea),i=eI(e.converter,t,n);return aI(r,[$v(Qv(r),"setDoc",e._key,i,e.converter!==null,n).toMutation(e._key,Wt.none())])}function aI(e,t){return function(r,i){const s=new ae;return r.asyncQueue.enqueueAndForget(async()=>Tv(await Mv(r),i,s)),s.promise}(yd(e),t)}function cI(e,t,n){const r=n.docs.get(t._key),i=new sI(e);return new Cd(e,i,t._key,r,new nI(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(i){an=i})(Ze),We(new ve("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ea(new i0(r.getProvider("auth-internal")),new c0(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new S(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zn(l.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),oe(Tc,"4.1.0",t),oe(Tc,"4.1.0","esm2017")})();const lI={apiKey:"AIzaSyA-2vOA4b3zy4HmUepySpDPR8zKgKfhAME",authDomain:"read-easy-a785a.firebaseapp.com",projectId:"read-easy-a785a",storageBucket:"read-easy-a785a.appspot.com",messagingSenderId:"672240774710",appId:"1:672240774710:web:1093f9e83dded932d97297",measurementId:"G-PFEBLXEB67"},$t=xl(lI),Pd=qv($t);ce($t);const CI=async(e,t)=>Dg(ce($t),e,t),PI=async e=>{const t=gd(Pd,"users",ce($t).currentUser.uid);return oI(t,{name:e})},kI=async(e,t)=>Vg(ce($t),e,t),kd=async()=>(await ce($t)._initializationPromise,ce($t).currentUser!==null),uI=()=>{Mg(ce($t))},hI=async()=>iI(gd(Pd,"users",ce($t).currentUser.uid)),Ta="/read-easy/assets/sprite-5f25f0dd.svg",Hi={openModalBtnEl:document.querySelector(".js-modal-book-open"),modalEl:document.querySelector(".js-modal-book-backdrop"),booksList:document.querySelector(".book-list")};Hi.booksList.addEventListener("click",dI);Hi.modalEl.addEventListener("click",pI);function dI(e){const t=e.target.closest(".book-link");if(e.target.closest(".book-link")){const n=t.id;fI(n)}}async function fI(e){try{const t=await ap(e),n=_I(t.data);Hi.modalEl.innerHTML=n;const r=document.querySelector(".modal-book-text"),i=document.querySelector(".js-modal-book-localstostorage-add-btn"),s=document.querySelector(".js-modal-book-localstostorage-remove-btn");kd().then(o=>{o||(i.disabled=!0,i.style.pointerEvents="none",r.textContent="You need to log in to add a book to the shopping list!",Ct(r))}),mI(e)&&(Ct(i),Ct(s),Ct(r)),i.addEventListener("click",()=>{gI(t.data),Ct(i),Ct(s),Ct(r)}),s.addEventListener("click",()=>{yI(e),Ct(i),Ct(s),Ct(r)}),Aa(),document.addEventListener("keydown",Nd)}catch(t){Ud.Notify.failure(`${t.messsage}`)}}function pI(e){(e.target.classList.contains("js-modal-book-backdrop")||e.target.closest(".js-modal-book-close-btn"))&&Aa()}function Nd(e){e.code==="Escape"&&(Aa(),document.removeEventListener("keydown",Nd))}function Aa(){Hi.modalEl.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function Ct(e){e.classList.toggle("is-hidden")}function mI(e){const t=ho();return t?t.map(r=>r._id).includes(e):void 0}function gI(e){let t=ho();t||(t=[]),t.push(e),Tl(t)}function yI(e){const t=ho(),r=t.map(i=>i._id).indexOf(e);t.splice(r,1),Tl(t)}function _I(e){const{book_image:t,title:n,author:r,description:i,buy_links:s,_id:o}=e;return` <div class="modal-book" id="${o}">
  <button type="button" class="modal-book-close-btn js-modal-book-close-btn">
    <svg class="modal-book-close-svg">
      <use href="${Ta}#close"></use>
    </svg>
  </button>
  <div class="modal-book-wrap">
    <img src="${t}" alt="${n}" class="modal-book-img" />
    <div class="modal-book-info-wrap">
      <h2 class="modal-book-name">${n}</h2>
      <p class="modal-book-autor">${r}</p>
      <p class="modal-book-info">${i}</p>
      <div class="modal-book-linc-box">
        <a href="${s[0].url}" class="modal-book-linc" target="_blank" rel="noreferrer noopener">
          <img
            srcset="${hp} 2x"
            src="${cp}"
            alt="${s[0].name}"
            class="modal-book-linc-icon amazon"
          />
        </a>
        <a href="${s[1].url}" class="modal-book-linc" target="_blank" rel="noreferrer noopener">
          <img
            srcset="${dp} 2x"
            src="${lp}"
            alt="${s[1].name}"
            class="modal-book-linc-icon"
          />
        </a>
        <a href="https://bookshop.org/" class="modal-book-linc" target="_blank" rel="noreferrer noopener">
          <img
            srcset="${fp} 2x"
            src="${up}"
            alt="${s[4].name}"
            class="modal-book-linc-icon"
          />
        </a>
      </div>
    </div>
  </div>
  <button class="modal-book-ls-btn js-modal-book-localstostorage-add-btn">
    add to shopping list
  </button>
  <button
    class="modal-book-ls-btn remove js-modal-book-localstostorage-remove-btn is-hidden"
  >
    remove from the shopping list
  </button>
  <p class="modal-book-text is-hidden">
    Сongratulations! You have added the book to the shopping list. To delete,
    press the button “Remove from the shopping list”.
  </p>
</div>`}const Se={openModalBtn:document.querySelector(".js-authorization-open"),closeModalBtn:document.querySelector(".js-authorization-close"),modal:document.querySelector(".js-authorization-modal"),backdrop:document.querySelector(".js-authorization-backdrop")};Se.openModalBtn.addEventListener("click",xd);Se.closeModalBtn.addEventListener("click",xd);function xd(){Se.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.addEventListener("keydown",Dd),Se.modal.addEventListener("click",EI)}function Dd(e){e.key==="Escape"&&(Se.modal.classList.toggle("is-hidden"),document.removeEventListener("keydown",Dd))}function EI(e){e.target===Se.backdrop&&Se.modal.classList.toggle("is-hidden")}const vI="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSkupCLWDiEOG6mQXFXEsVSyChdJWaNXB5NI/aGJIUlwcBdeCgz+LVQcXZ10dXAVB8AfE1cVJ0UVK/C4ptIjxjuMe3vvel7vvAKFVZ6rZlwBUzTKyqaRYKK6IgVcEaYYQQURipp7OLeThOb7u4eP7XZxnedf9OQaUkskAn0icYLphEa8Tz2xaOud94iirSgrxOfGEQRckfuS67PIb54rDAs+MGvnsHHGUWKz0sNzDrGqoxNPEMUXVKF8ouKxw3uKs1husc0/+wnBJW85xndYoUlhEGhmIkNFADXVYiNOukWIiS+dJD/+I48+QSyZXDYwc89iACsnxg//B796a5alJNymcBPpfbPtjDAjsAu2mbX8f23b7BPA/A1da17/RAmY/SW92tdgRMLgNXFx3NXkPuNwBhp90yZAcyU9LKJeB9zP6piIwdAuEVt2+dc5x+gDkqVdLN8DBITBeoew1j3cHe/v2b02nfz9WN3KbuA7doAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAADGFJREFUWMOtmWtwXNV9wH/n3Ofevbt7tdKudvWwJVlGCLCN7RBonGQqUpKGMiSknRDclg+Eth/Mh37rFz5kOp12ptNO20xopqlhMqQ4tNA0iSkYSGxjHqHGJsbGJrKxhWXLkvXalfa993H6QZIryy9B+c/cubtn7znnd//Pc84KPqEUivPbgLuBrQrV26hVBgzTtvxmAzvmNISQw0KIEeAwsDeVdN/8JPOIjwnVDTwGPAzkoihidOQUL/3kGU6/9zoqivBDhZfpILtmgM6uNXzpvm+QSHpoUpsQQjwNfC+ZiJ/7VAELxfkM8FfAI4CulKJaKfPqz3/Mq88/yfnJEmfGC1iWyZqOLLVKjUhFtLUkkaaFl27lD7+9g02bP4Nh2oFpxZ4SQjyeTMSn/t+AheL8duAJwAMIgoDJiTGe2/l37H11D8fOzKAbGgIwDJMtt/QTBQGCkEYQ0JJ0MTRBzrMZHLyZLV9+kL7b7kJKrQjsSCbiu643v34dMHMR7NGltmazwbuH3uaVXf/ES/sOcrFYJ5N2CSNFqbYAU63VcWyTXEuCuu/TaDQZ7F9DX3eOyHLxqyWqlRKJZIsHPFMqV4eAHQnXaa4acLYw5yilXhBCDC21KaU4cfwoP/iH7zB6dozRyQqtKYdarYluGAilIIq4MD5Fe6tHvVqhWm8Q+D6lUp0gVJTmi+Ty3dR7BnETHkIIFhWwrlSu3pdwneoNAWcLcybwAjC0vD2KIl7bv5eDh0/QbARsWZumN5PCi9tIKSiUa5RqTSIh8TyHTKtHPpvDBI4eP8EvDhykp7uDc2Pn6ZcaoJZ72BDwQqlc/d2VmryaBp9YCQdw/vwoz/5oJ/WGz7239/DlLTeT8Rxc2yLltWLFHISmEcQ8LC8LmkQzXYRhMjQzxXe/+4+8f/os/Sc/YG5mgpZMJ+LyCBhanPtPrgk4M1vcrpR6VIgrY2fkzGkq5QqtcYO7Bnvo7mrHjcVIxl1cL43lJhCGCYaDrzRC3USYDkpqpDu6+cLQPQyP7CSRSCKlztXmAB4tlav7Eq5zKXDk0ofpmUJm8Q1Y7ndLMjdXJGr65Lwk/et6Sba0kUjnsBNpLNdDT7QgTXthSCEQUgNNIrUFHQys72egtxuhIlQUXS9wnyiVq5krABfznHetXsW5AoYu6My3kWxtQzdjaKaNFksgTIsoDFAqJAx9wihARRECiRACTdPJ5PJ0ZNJ0999Cft0t1wP0Fln+D3B6ptANPLJcY8u1qJRCNy1SCYeE62JZCTTdWPBxTUdJC4VOpExCaRDW6ygliKIIpQRCMzGdBKmETTKTxzTNG6XfR0rlavclQKXUY9fLiQCt6VZQIIWGMGII3UVJF6HHEGYc6XgoYYDSUMIkQieSNug2SuhoRgzHiWO4KcSN64O+WFIvQT18ox7t2XYiBLZlMl/1eeutNynMlYk7DkPbtnHrZz6LMAQCSb0xz5E3fkXFV0SE9PT2sP7WDQSRRGr2asvww8Bf6FPTs9uA3EqzLo8yIQTRXAE/CPHSbVycnuXO3/o82bY26tUylqbj12sYdgzddojpNl35VqanZujsvZlYup0wUmimRbsILo15A8mVytVtUil192peJ37uI35ny2Zy7TnW33QT1alJdh/4Nc+9/Bavv7yHqZNHCOfGiLW0YDs2Yx98wL//9L855zuEhSkcL01nzwC5ZOvHWUDdrQNbl2ttpfaWxHQdvrhxELstjWrOk0pYfK4tz9yZKuMnR5k4fphcSxqaTUQU0t/dzY6H1tDaHieV7UOqgJvWD6InkyBWt8oTQmzVgd5rQS0Xw2vDmi/h9vaihU1y+XYMqVPzs3TFmiS8LGG5iKrVsGMO7bdtoF6pYDoWmoogCEnGEoTFItrql6G9OjBwLd+7DDDpEVkWiAhDM9D9JtIvYqoadtdaRKAQmiAqz0BsLWaqFVBIAUKpBaVpIDPdH8fEAxKwVlaNld+VUiQ615Dv6KIwXUDTbIQCqenoZozmXBndTmF63QivA6XAr5QRUkdqOkopatUKZksGUmkUalV0SilLXis5r4SMtbeTaOukPj1FpJvIWGKhvDlxIsPhYrFKORQ0azXK588SNesE8zMgJUpKSvMFpGETGTar5LuUEBtKKWvJtCuDZekuEOTu/X26snnGRg7Tn+8kVCFjkxMce/9DXn/3N3z1K/fQlG+hy4iNWzfjujEsAZFQ1JoNVDqHFGI1KWYpSBo6MAxsvJ4PLrVLTcdr7+Tw6z9FhT5BZZ6nnn+RXDLNnYO30uGmqFTraOlWXv/FHrxshru/3snszAyBZny8HdqCDOvAyBLgcrMuaW9lUs3k8pw4e4Hz4xNcnJzCNW02eu30WTniEz5r+9cjO7LEnSR7Xn2em7feQanh07Z+y6X0spqssfjciFRKHV7qFAlFJEChrho0Sils22Ht5i8yMjHN+Ow8G/s76b/rFlKb1iAH2qm1Weg9Wbo23EQml6dYmqNaq9PW3rWaGrxSDuuRYC+ov1SCxQEWluISdYUzCyFAKX77nt/jpZ88y8WpeYjOkc22Ml8ocmJkjDtuG+R2vcp8pUSmM8/whyP0D27CNGPA6v1vUfbKjmzmzQg1saShpSu6usoXzJxt595tn6VYrnGhWObYyDj1hs/mm3pxE0k+OnuWyWKFckNRacCG2+8A1MeFm0i4zptLy62nl5sxQhEpRcjl0EuXYZjctq6b+4c+x8VCiX1HhjlfLDNRqnB6bJzXDh1j/ztH+c1YgW9+azuWqRNePElQKRKtGOs68vSljfu5ixe7gTNCCP0ycy7edcQl/1GRz9SZ95l8dz8z1Tr7D73HC/sO0pWKYZsGmqYxVmxw/9e/yh8/9CBprwXDNBDlGfz5cWqRychsgJlewy0bN6Bp+tVqcwD0JVzn3KVfRicm/kUI8acrARGgKcHwsWOMHP0VmcYI1GaIpdbSECbFSpmJ6WnmmpBwXXJdfaxZt451fX0QhUghsCwL0awS1edQjRqRbvLck89RK8XZ9kd/wM133oFuGMsBf5BwnT+7bFenlHoc+ObyfUkQ+IwMn+TAnj08/6872X7/JroGu8CKoZSPFBqWJvFsg45sinRrlo51A8TTGZTvoyIfhEak6WhSIi0HZcRolku8d3SYqGRQ+psJ3unpYOs37mPd1s3EvVQRePyKbefafH7q7Pj4DuCZ0twc7x08yAu7nmX40CEq9RrNMGLvoZNs6O/GMS2CoIlhWDiWRWjZhJUKUayOYVhomo4UEj8IkFIhogikAKkTNqvs/dl/cfr0BJvyfRTKc8wen+PC6Y/ItbWz6cH7dww99MDUVffFa/P5Xc/88IdD//a3f//o3GyBYqVEPWiilEQBx09N8cob7/GVL9yOYSgkYAmJsGM06nV0FRHUysikh6ZrBEohpFwICCGJGj5H973If+zajS09CpV5YjEHXdMplIvUGrWdf/7QA5cdJmlXnCC8+fbLpXL58/VGvVehkEoSRhGmpoGC0YkZOrNJctl2NGmgmyZSSsIwwIonsJwEtusihSQMfQzDAkNHSI2pU0d5+vv/zImzDTpdj2KjQnuylcnyLFKpfbmUt33/2VPhch65EvDg1ESzGfj3RYJ9upBoUmJpGlKAoxuUayEvvnGEckMhLIswDNGdOG6qBV03UH6dsNEgaNbQNX0hSpWiOj/Dkdd+yTvDMyQtl3oYUGrUQUEz8PeV6tX7vnPgxStOuLSrJaDJRt3PWvaPLWnkBWzR5cIaOFSgFBTnm3gpm77+9Qt1R4DbmsW0bUARqQCiANtNIDWNysw459/5JT/bvYfZWZuYYWGbFgGKjpb2naOFi9t/PnqqfjUW7VpZcrJRDy/Uq7szpnVKCvElKaStaxIpBI0w5Pz5abJpBy/lomsa6c4e7FQrQaVMZeoCmlTEEmkac5PMHjvA7j17OXBojrhp4doOXjxZDIi+/eTxt//6dKkQXotDu1G9mWzWj+Wt2FMRKqVgky6k1ISgVG8w/MEoKmjQ050n2zOA5XqUpseZn7yALSWSiA+PHuH7u3bz1jtTpG0XXdeDTNLbWfGbD/znmff/51M9RL81keqWiMc0tIf9KMyV/DpJw6YlmeBr3/oaff3dzJ49xdjZM6hQ8OG5SX79/iiOHqPFdiYU6mkh5fdeGT/96R6iX002uultZb9xt60bWxOW09sM/YEgDC0lFZVGrWFq5rAmtRFD6odb7Pje/ZMffaK/If4Xdhx8bDvZS4YAAAAASUVORK5CYII=",so=document.querySelector(".sign-up"),Vd=document.querySelector(".sign-up-button"),Od=async()=>{await kd()&&hI().then(t=>{const n=t.data().name;II(n),console.log(t.data().name)}).catch(t=>{console.log("getUserName wrong"),console.log(t.code)})};Od();function II(e){let t=`
          <button type="button" class="user-btn">
          <img src="${vI}" alt="userFoto" class="user-foto"/>
          ${e}
          <svg class="user-icon">
            <use href="${Ta}#ddown"></use>
          </svg>
          </button>
        `;Vd.classList.add("is-hidden"),so.insertAdjacentHTML("beforeend",t),document.querySelector(".user-btn").addEventListener("click",Ld)}function Ld(e){console.log("onUserBtnEL"),console.log(e.composedPath());const t=document.querySelector(".user-btn"),n=`
      <button class="logout-btn">
        Log out
        <svg class="logout-icon">
          <use href="${Ta}#loginout"></use>
        </svg>
      </button>
    `;t.insertAdjacentHTML("beforeend",n),t.removeEventListener("click",Ld),document.querySelector(".logout-btn"),setTimeout(()=>document.addEventListener("click",Md),200)}function Md(e){console.log("onLogoutBtn"),console.log(e.composedPath());const t=document.querySelector(".user-btn"),n=document.querySelector(".logout-btn");console.log(e.composedPath().includes(n)),e.composedPath().includes(n)?(uI(),console.log("logout"),t.removeChild(n),so.removeChild(t),Vd.classList.remove("is-hidden")):(t.removeChild(n),so.removeChild(t),Od()),document.removeEventListener("click",Md)}export{kI as a,AI as b,CI as c,TI as d,Ta as e,cp as f,wI as g,hp as h,Od as i,lp as j,dp as k,up as l,fp as m,Ud as n,ho as o,kd as p,yI as r,PI as s};
