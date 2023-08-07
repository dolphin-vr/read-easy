(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const To="data:image/png;base64,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",_o="data:image/png;base64,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",So="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAAAPCAYAAADtX41qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUBSURBVHgB7ZlniF1FFMf/0cSaxJa1IDEWMNgQDSiWGCvWYMSgREQRwfIhGpVYUGJAsSMoYgUbKGLv5YOIaKKixorEjlhSrInGxJjNen575rp3787Mu/v2aTbh/eHH7rszd+7cmTPnnJk7RG2tKdrcmGDsb4wztjM2MdYzVhpLjQXGZ8Zs41XjTePvTJtDjOON3ZTXS6HNbg0NfzfN3LDE+CvysJHG2ol7/jSGBVJaFupV2x1R6les3bXkAxXTikCqvBktNoaH5zarTvk4jlRzWi5/95WRMvp1ojHT2DFxP/M0PLCDcWTo04vGhcYniXYpm2Gsr7wWKWJUr2RuuMx4pnKtw3hAvjqq6jKuNA429lNavMhZoUOFNjDuNHZK3HOdMdY4NlHOymMlnqLWabpxsbGZmtcc4zbjLjUnjGqh8Y7cEN6TL0rEGN8kn5P+CEM7Wj7mh6q3wbK4L5Eb6lA1qa4MJ0fqj5a70lh9Oneq8UKDduFZuWcqxP/vZupPkxtzqvx54/oaz+0PJ2XetS4vyyeuFf3BYz0ljy5M+HOJehjiB+HZeJEfM/O1V2kO8FDnycNite5viTbOV6WBVSlWyu3qbVht5UUomij3fORMO0fq/GocZRwQ6h5mHGj8FKmLV9o2/I/3usi4Wn091N3Gvaqhpl1bC4Un2FBxjzjYRQi6QX1zw6q+led6KXH/z5VrTDDeKJYfYgjHyNMSPHd1Uc6TeydyqF3lRnWQ4rkznuYLuS1cJY8G5VyYfPpmeSi8VDU0GIwKkSOx8mZo4HrCmBu5vrsxNXEPA0cOsThSNldpFQlwV6L8CvXsrvZVWl8ah8vDSyHmBi/0kHo8SVnkQrzT9NI1vBg7P0Ltg6F8jNwIY6LfhM+PjWuMc9XXJm6VG1SjhdOr44i4mgqFsQSVXcw6SqtLeZGjdFSeeYJ8VTbaaTQSSfHsyPXJShsVXuRRuUepaiulxYqelilnonJb9kKMF4a9tHL9Lbk3SvV7dPjLXEyRb3z2MNZVXvSJfOsx4xbjOHkeVbWBYsd6bfi9T6K9SfIjDDS1MCpW6MaJGzineFjuUhETf6axUaI+CeIi5cXL8GLnqGcVMTBM/Aq1VVZuV8dYjzJulKcRsSMeHAZz97nxqfF24Afjl1COccacCmnJ6Wqs8QH0r1Gx4zokcwMdmhNeYhdjS6WFC39feZGLkBCyEgg7Zfc8WEJyHfEehO75ifIRgWX5ZrqjAQvqj9I1DGRP+aJO6UN52jBZ8b6RChDe5lXKRgXQcrVYxQTeL98ppA4rsdjxqqcnjW9q1MMjXS4f0DOUjvuDWYQZxq6Rd31d+TOqrY071D8tCKTO7IgoUwI5cdRQN0xj6DGPhrfrLH4URvW4/Cie2N0oHuc0S70Tx0ZiMoozjtXRsOjvFjXqdai178a4cSDLIfEwDVwk9a/VqHe2cVrkOt7yvuJHYVS43ZnyEMfWntPwup86cJ8fGU/Ldwq/q39iV3GBfBUQv1dHj/V/iXSBhcuZ0SPy8W6F5isdwsualLj+lTxP61ZsAgl17Hj4jrSNfCUS+vaWGxrbTz4gfm98J8+3FgbK4mBzjOJi5zGrco2tObuQ3EEoYYRVPzZRTtjlM0ZnpGx744jEfbh+VuuSSBlbd76tDWRXyjjxaWWi+i92huwKmfSv5eNe5F4T5DnuQETb99Ssiw2Mi1x/Q/5+bbX13+gf9H5hHfWZqFoAAAAASUVORK5CYII=",Co="/read-easy/assets/fund04-1aacaf5f.png",Ro="/read-easy/assets/fund05-94c331ce.png",ko="data:image/png;base64,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",Oo="data:image/png;base64,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",Do="data:image/png;base64,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",bo="data:image/png;base64,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",Po=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:To},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:_o},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:bo},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:Co},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:Ro},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:ko},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:Oo},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:Do},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:So}],No=document.querySelector(".funds-list"),ve=document.querySelector(".funds-buttons");ve.addEventListener("click",Mo);const Lo=t=>t.map(({title:e,url:n,img:i},r)=>`<li class="funds-item">
    <a class ="funds-href" href="${n}" target="_blank">
      <span class="funds-number">${(r+1).toString().padStart(2,0)}</span>
      <img class="funds-img" src="${i}" alt="${e}" height="32"/>
    </a>
  </li>`).join("");No.insertAdjacentHTML("beforeend",Lo(Po));function Mo(){ve.lastElementChild.classList.contains("is-hidden")?(ve.firstElementChild.classList.add("is-hidden"),ve.lastElementChild.classList.remove("is-hidden")):(ve.lastElementChild.classList.add("is-hidden"),ve.firstElementChild.classList.remove("is-hidden"))}/**
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
 */const _r=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Uo=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Sr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,h=c?t[r+2]:0,u=s>>2,p=(s&3)<<4|a>>4;let I=(a&15)<<2|h>>6,b=h&63;c||(b=64,o||(I=64)),i.push(n[u],n[p],n[I],n[b])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Uo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const h=r<t.length?n[t.charAt(r)]:64;++r;const p=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||h==null||p==null)throw new xo;const I=s<<2|a>>4;if(i.push(I),h!==64){const b=a<<4&240|h>>2;if(i.push(b),p!==64){const U=h<<6&192|p;i.push(U)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class xo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jo=function(t){const e=_r(t);return Sr.encodeByteArray(e,!0)},St=function(t){return jo(t).replace(/\./g,"")},Cr=function(t){try{return Sr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Fo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vo=()=>Fo().__FIREBASE_DEFAULTS__,Bo=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ho=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cr(t[1]);return e&&JSON.parse(e)},Bn=()=>{try{return Vo()||Bo()||Ho()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rr=t=>{var e,n;return(n=(e=Bn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Go=t=>{const e=Rr(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},kr=()=>{var t;return(t=Bn())===null||t===void 0?void 0:t.config},Or=t=>{var e;return(e=Bn())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class zo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Wo(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[St(JSON.stringify(n)),St(JSON.stringify(o)),a].join(".")}/**
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
 */function D(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ko(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(D())}function Yo(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xo(){const t=D();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jo(){try{return typeof indexedDB=="object"}catch{return!1}}function Qo(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Zo="FirebaseError";class X extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Zo,Object.setPrototypeOf(this,X.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,et.prototype.create)}}class et{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?$o(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new X(r,a,i)}}function $o(t,e){return t.replace(ea,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const ea=/\{\$([^}]+)}/g;function ta(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ct(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Li(s)&&Li(o)){if(!Ct(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Li(t){return t!==null&&typeof t=="object"}/**
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
 */function tt(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Me(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Ue(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function na(t,e){const n=new ia(t,e);return n.subscribe.bind(n)}class ia{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");ra(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=hn),r.error===void 0&&(r.error=hn),r.complete===void 0&&(r.complete=hn);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ra(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hn(){}/**
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
 */function pe(t){return t&&t._delegate?t._delegate:t}class ue{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const oe="[DEFAULT]";/**
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
 */class sa{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new zo;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aa(e))try{this.getOrInitializeService({instanceIdentifier:oe})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=oe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oe){return this.instances.has(e)}getOptions(e=oe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:oa(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=oe){return this.component?this.component.multipleInstances?e:oe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oa(t){return t===oe?void 0:t}function aa(t){return t.instantiationMode==="EAGER"}/**
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
 */class ca{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new sa(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var m;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(m||(m={}));const ha={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},la=m.INFO,ua={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},da=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=ua[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hn{constructor(e){this.name=e,this._logLevel=la,this._logHandler=da,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in m))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ha[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...e),this._logHandler(this,m.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...e),this._logHandler(this,m.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,m.INFO,...e),this._logHandler(this,m.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,m.WARN,...e),this._logHandler(this,m.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...e),this._logHandler(this,m.ERROR,...e)}}const fa=(t,e)=>e.some(n=>t instanceof n);let Mi,Ui;function pa(){return Mi||(Mi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ga(){return Ui||(Ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dr=new WeakMap,Tn=new WeakMap,br=new WeakMap,ln=new WeakMap,Gn=new WeakMap;function ma(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(te(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Dr.set(n,t)}).catch(()=>{}),Gn.set(e,t),e}function va(t){if(Tn.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Tn.set(t,e)}let _n={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tn.get(t);if(e==="objectStoreNames")return t.objectStoreNames||br.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return te(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ya(t){_n=t(_n)}function Aa(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(un(this),e,...n);return br.set(i,e.sort?e.sort():[e]),te(i)}:ga().includes(t)?function(...e){return t.apply(un(this),e),te(Dr.get(this))}:function(...e){return te(t.apply(un(this),e))}}function Ia(t){return typeof t=="function"?Aa(t):(t instanceof IDBTransaction&&va(t),fa(t,pa())?new Proxy(t,_n):t)}function te(t){if(t instanceof IDBRequest)return ma(t);if(ln.has(t))return ln.get(t);const e=Ia(t);return e!==t&&(ln.set(t,e),Gn.set(e,t)),e}const un=t=>Gn.get(t);function Ea(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=te(o);return i&&o.addEventListener("upgradeneeded",c=>{i(te(o.result),c.oldVersion,c.newVersion,te(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),r&&c.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const wa=["get","getKey","getAll","getAllKeys","count"],Ta=["put","add","delete","clear"],dn=new Map;function xi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dn.get(e))return dn.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Ta.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||wa.includes(n)))return;const s=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let h=c.store;return i&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),r&&c.done]))[0]};return dn.set(e,s),s}ya(t=>({...t,get:(e,n,i)=>xi(e,n)||t.get(e,n,i),has:(e,n)=>!!xi(e,n)||t.has(e,n)}));/**
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
 */class _a{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sa(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Sa(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sn="@firebase/app",ji="0.9.15";/**
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
 */const de=new Hn("@firebase/app"),Ca="@firebase/app-compat",Ra="@firebase/analytics-compat",ka="@firebase/analytics",Oa="@firebase/app-check-compat",Da="@firebase/app-check",ba="@firebase/auth",Pa="@firebase/auth-compat",Na="@firebase/database",La="@firebase/database-compat",Ma="@firebase/functions",Ua="@firebase/functions-compat",xa="@firebase/installations",ja="@firebase/installations-compat",Fa="@firebase/messaging",Va="@firebase/messaging-compat",Ba="@firebase/performance",Ha="@firebase/performance-compat",Ga="@firebase/remote-config",za="@firebase/remote-config-compat",Wa="@firebase/storage",Ka="@firebase/storage-compat",Ya="@firebase/firestore",qa="@firebase/firestore-compat",Xa="firebase",Ja="10.1.0";/**
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
 */const Cn="[DEFAULT]",Qa={[Sn]:"fire-core",[Ca]:"fire-core-compat",[ka]:"fire-analytics",[Ra]:"fire-analytics-compat",[Da]:"fire-app-check",[Oa]:"fire-app-check-compat",[ba]:"fire-auth",[Pa]:"fire-auth-compat",[Na]:"fire-rtdb",[La]:"fire-rtdb-compat",[Ma]:"fire-fn",[Ua]:"fire-fn-compat",[xa]:"fire-iid",[ja]:"fire-iid-compat",[Fa]:"fire-fcm",[Va]:"fire-fcm-compat",[Ba]:"fire-perf",[Ha]:"fire-perf-compat",[Ga]:"fire-rc",[za]:"fire-rc-compat",[Wa]:"fire-gcs",[Ka]:"fire-gcs-compat",[Ya]:"fire-fst",[qa]:"fire-fst-compat","fire-js":"fire-js",[Xa]:"fire-js-all"};/**
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
 */const Rt=new Map,Rn=new Map;function Za(t,e){try{t.container.addComponent(e)}catch(n){de.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _e(t){const e=t.name;if(Rn.has(e))return de.debug(`There were multiple attempts to register component ${e}.`),!1;Rn.set(e,t);for(const n of Rt.values())Za(n,t);return!0}function zn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const $a={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ne=new et("app","Firebase",$a);/**
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
 */class ec{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ne.create("app-deleted",{appName:this._name})}}/**
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
 */const Re=Ja;function Pr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Cn,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw ne.create("bad-app-name",{appName:String(r)});if(n||(n=kr()),!n)throw ne.create("no-options");const s=Rt.get(r);if(s){if(Ct(n,s.options)&&Ct(i,s.config))return s;throw ne.create("duplicate-app",{appName:r})}const o=new ca(r);for(const c of Rn.values())o.addComponent(c);const a=new ec(n,i,o);return Rt.set(r,a),a}function Nr(t=Cn){const e=Rt.get(t);if(!e&&t===Cn&&kr())return Pr();if(!e)throw ne.create("no-app",{appName:t});return e}function ie(t,e,n){var i;let r=(i=Qa[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),de.warn(a.join(" "));return}_e(new ue(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const tc="firebase-heartbeat-database",nc=1,Be="firebase-heartbeat-store";let fn=null;function Lr(){return fn||(fn=Ea(tc,nc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Be)}}}).catch(t=>{throw ne.create("idb-open",{originalErrorMessage:t.message})})),fn}async function ic(t){try{return await(await Lr()).transaction(Be).objectStore(Be).get(Mr(t))}catch(e){if(e instanceof X)de.warn(e.message);else{const n=ne.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});de.warn(n.message)}}}async function Fi(t,e){try{const i=(await Lr()).transaction(Be,"readwrite");await i.objectStore(Be).put(e,Mr(t)),await i.done}catch(n){if(n instanceof X)de.warn(n.message);else{const i=ne.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});de.warn(i.message)}}}function Mr(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rc=1024,sc=30*24*60*60*1e3;class oc{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cc(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=sc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vi(),{heartbeatsToSend:n,unsentEntries:i}=ac(this._heartbeatsCache.heartbeats),r=St(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Vi(){return new Date().toISOString().substring(0,10)}function ac(t,e=rc){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),Bi(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Bi(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class cc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jo()?Qo().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ic(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Fi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Fi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Bi(t){return St(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function hc(t){_e(new ue("platform-logger",e=>new _a(e),"PRIVATE")),_e(new ue("heartbeat",e=>new oc(e),"PRIVATE")),ie(Sn,ji,t),ie(Sn,ji,"esm2017"),ie("fire-js","")}hc("");var lc="firebase",uc="10.1.0";/**
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
 */ie(lc,uc,"app");function Wn(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function Ur(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dc=Ur,xr=new et("auth","Firebase",Ur());/**
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
 */const kt=new Hn("@firebase/auth");function fc(t,...e){kt.logLevel<=m.WARN&&kt.warn(`Auth (${Re}): ${t}`,...e)}function Et(t,...e){kt.logLevel<=m.ERROR&&kt.error(`Auth (${Re}): ${t}`,...e)}/**
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
 */function x(t,...e){throw Kn(t,...e)}function B(t,...e){return Kn(t,...e)}function pc(t,e,n){const i=Object.assign(Object.assign({},dc()),{[e]:n});return new et("auth","Firebase",i).create(e,{appName:t.name})}function Kn(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return xr.create(t,...e)}function d(t,e,...n){if(!t)throw Kn(e,...n)}function z(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Et(e),new Error(e)}function Y(t,e){t||z(e)}/**
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
 */function kn(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gc(){return Hi()==="http:"||Hi()==="https:"}function Hi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function mc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gc()||Yo()||"connection"in navigator)?navigator.onLine:!0}function vc(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class nt{constructor(e,n){this.shortDelay=e,this.longDelay=n,Y(n>e,"Short delay should be less than long delay!"),this.isMobile=Ko()||qo()}get(){return mc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yn(t,e){Y(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class jr{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;z("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;z("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;z("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ac=new nt(3e4,6e4);function it(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ke(t,e,n,i,r={}){return Fr(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=tt(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),jr.fetch()(Vr(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Fr(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},yc),e);try{const r=new Ic(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw mt(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,h]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mt(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mt(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mt(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw pc(t,u,h);x(t,u)}}catch(r){if(r instanceof X)throw r;x(t,"network-request-failed",{message:String(r)})}}async function Vt(t,e,n,i,r={}){const s=await ke(t,e,n,i,r);return"mfaPendingCredential"in s&&x(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Vr(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?Yn(t.config,r):`${t.config.apiScheme}://${r}`}class Ic{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(B(this.auth,"network-request-failed")),Ac.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mt(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=B(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function Ec(t,e){return ke(t,"POST","/v1/accounts:delete",e)}async function wc(t,e){return ke(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tc(t,e=!1){const n=pe(t),i=await n.getIdToken(e),r=qn(i);d(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Fe(pn(r.auth_time)),issuedAtTime:Fe(pn(r.iat)),expirationTime:Fe(pn(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function pn(t){return Number(t)*1e3}function qn(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Et("JWT malformed, contained fewer than 3 sections"),null;try{const r=Cr(n);return r?JSON.parse(r):(Et("Failed to decode base64 JWT payload"),null)}catch(r){return Et("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function _c(t){const e=qn(t);return d(e,"internal-error"),d(typeof e.exp<"u","internal-error"),d(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function He(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof X&&Sc(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Sc({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Cc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Br{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fe(this.lastLoginAt),this.creationTime=Fe(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ot(t){var e;const n=t.auth,i=await t.getIdToken(),r=await He(t,wc(n,{idToken:i}));d(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Oc(s.providerUserInfo):[],a=kc(t.providerData,o),c=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=c?h:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Br(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,p)}async function Rc(t){const e=pe(t);await Ot(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kc(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Oc(t){return t.map(e=>{var{providerId:n}=e,i=Wn(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Dc(t,e){const n=await Fr(t,{},async()=>{const i=tt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Vr(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",jr.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ge{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){d(e.idToken,"internal-error"),d(typeof e.idToken<"u","internal-error"),d(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_c(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return d(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Dc(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Ge;return i&&(d(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(d(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(d(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ge,this.toJSON())}_performRefresh(){return z("not implemented")}}/**
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
 */function J(t,e){d(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class he{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=Wn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Cc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Br(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await He(this,this.stsTokenManager.getToken(this.auth,e));return d(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Tc(this,e)}reload(){return Rc(this)}_assign(e){this!==e&&(d(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){d(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await Ot(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await He(this,Ec(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,c,h,u;const p=(i=n.displayName)!==null&&i!==void 0?i:void 0,I=(r=n.email)!==null&&r!==void 0?r:void 0,b=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,U=(o=n.photoURL)!==null&&o!==void 0?o:void 0,ge=(a=n.tenantId)!==null&&a!==void 0?a:void 0,sn=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,Oi=(h=n.createdAt)!==null&&h!==void 0?h:void 0,Di=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:on,emailVerified:bi,isAnonymous:Pi,providerData:an,stsTokenManager:Ni}=n;d(on&&Ni,e,"internal-error");const Eo=Ge.fromJSON(this.name,Ni);d(typeof on=="string",e,"internal-error"),J(p,e.name),J(I,e.name),d(typeof bi=="boolean",e,"internal-error"),d(typeof Pi=="boolean",e,"internal-error"),J(b,e.name),J(U,e.name),J(ge,e.name),J(sn,e.name),J(Oi,e.name),J(Di,e.name);const cn=new he({uid:on,auth:e,email:I,emailVerified:bi,displayName:p,isAnonymous:Pi,photoURL:U,phoneNumber:b,tenantId:ge,stsTokenManager:Eo,createdAt:Oi,lastLoginAt:Di});return an&&Array.isArray(an)&&(cn.providerData=an.map(wo=>Object.assign({},wo))),sn&&(cn._redirectEventId=sn),cn}static async _fromIdTokenResponse(e,n,i=!1){const r=new Ge;r.updateFromServerResponse(n);const s=new he({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await Ot(s),s}}/**
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
 */const Gi=new Map;function W(t){Y(t instanceof Function,"Expected a class definition");let e=Gi.get(t);return e?(Y(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gi.set(t,e),e)}/**
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
 */class Hr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hr.type="NONE";const zi=Hr;/**
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
 */function wt(t,e,n){return`firebase:${t}:${e}:${n}`}class Ie{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=wt(this.userKey,r.apiKey,s),this.fullPersistenceKey=wt("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ie(W(zi),e,i);const r=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=r[0]||W(zi);const o=wt(i,e.config.apiKey,e.name);let a=null;for(const h of n)try{const u=await h._get(o);if(u){const p=he._fromJSON(e,u);h!==s&&(a=p),s=h;break}}catch{}const c=r.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ie(s,e,i):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Ie(s,e,i))}}/**
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
 */function Wi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yr(e))return"Blackberry";if(qr(e))return"Webos";if(Xn(e))return"Safari";if((e.includes("chrome/")||zr(e))&&!e.includes("edge/"))return"Chrome";if(Kr(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Gr(t=D()){return/firefox\//i.test(t)}function Xn(t=D()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zr(t=D()){return/crios\//i.test(t)}function Wr(t=D()){return/iemobile/i.test(t)}function Kr(t=D()){return/android/i.test(t)}function Yr(t=D()){return/blackberry/i.test(t)}function qr(t=D()){return/webos/i.test(t)}function Bt(t=D()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bc(t=D()){var e;return Bt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Pc(){return Xo()&&document.documentMode===10}function Xr(t=D()){return Bt(t)||Kr(t)||qr(t)||Yr(t)||/windows phone/i.test(t)||Wr(t)}function Nc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Jr(t,e=[]){let n;switch(t){case"Browser":n=Wi(D());break;case"Worker":n=`${Wi(D())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Re}/${i}`}async function Qr(t,e){return ke(t,"GET","/v2/recaptchaConfig",it(t,e))}function Ki(t){return t!==void 0&&t.enterprise!==void 0}class Zr{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Lc(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $r(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=B("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Lc().appendChild(i)})}function Mc(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Uc="https://www.google.com/recaptcha/enterprise.js?render=",xc="recaptcha-enterprise",jc="NO_RECAPTCHA";class es{constructor(e){this.type=xc,this.auth=rt(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{Qr(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new Zr(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(c=>{a(c)})})}function r(s,o,a){const c=window.grecaptcha;Ki(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(jc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&Ki(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}$r(Uc+a).then(()=>{r(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Yi(t,e,n,i=!1){const r=new es(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Fc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const c=e(s);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class Vc{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qi(this),this.idTokenSubscription=new qi(this),this.beforeStateQueue=new Fc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xr,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=W(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Ie.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return d(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ot(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?pe(e):null;return n&&d(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&d(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(W(e))})}async initializeRecaptchaConfig(){const e=await Qr(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Zr(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new es(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new et("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&W(e)||this._popupRedirectResolver;d(n,this,"argument-error"),this.redirectPersistenceManager=await Ie.create(this,[W(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return d(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return d(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&fc(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rt(t){return pe(t)}class qi{constructor(e){this.auth=e,this.observer=null,this.addObserver=na(n=>this.observer=n)}get next(){return d(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Bc(t,e){const n=zn(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(Ct(s,e??{}))return r;x(r,"already-initialized")}return n.initialize({options:e})}function Hc(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(W);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Gc(t,e,n){const i=rt(t);d(i._canInitEmulator,i,"emulator-config-failed"),d(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=ts(e),{host:o,port:a}=zc(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Wc()}function ts(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zc(t){const e=ts(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:Xi(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:Xi(o)}}}function Xi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Wc(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Jn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return z("not implemented")}_getIdTokenResponse(e){return z("not implemented")}_linkToIdToken(e,n){return z("not implemented")}_getReauthenticationResolver(e){return z("not implemented")}}async function Kc(t,e){return ke(t,"POST","/v1/accounts:update",e)}/**
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
 */async function gn(t,e){return Vt(t,"POST","/v1/accounts:signInWithPassword",it(t,e))}/**
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
 */async function Yc(t,e){return Vt(t,"POST","/v1/accounts:signInWithEmailLink",it(t,e))}async function qc(t,e){return Vt(t,"POST","/v1/accounts:signInWithEmailLink",it(t,e))}/**
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
 */class ze extends Jn{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ze(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new ze(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await Yi(e,i,"signInWithPassword");return gn(e,r)}else return gn(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Yi(e,i,"signInWithPassword");return gn(e,s)}else return Promise.reject(r)});case"emailLink":return Yc(e,{email:this._email,oobCode:this._password});default:x(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Kc(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qc(e,{idToken:n,email:this._email,oobCode:this._password});default:x(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ee(t,e){return Vt(t,"POST","/v1/accounts:signInWithIdp",it(t,e))}/**
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
 */const Xc="http://localhost";class fe extends Jn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):x("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=Wn(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new fe(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ee(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ee(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ee(e,n)}buildRequest(){const e={requestUri:Xc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=tt(n)}return e}}/**
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
 */function Jc(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qc(t){const e=Me(Ue(t)).link,n=e?Me(Ue(e)).deep_link_id:null,i=Me(Ue(t)).deep_link_id;return(i?Me(Ue(i)).link:null)||i||n||e||t}class Qn{constructor(e){var n,i,r,s,o,a;const c=Me(Ue(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,p=Jc((r=c.mode)!==null&&r!==void 0?r:null);d(h&&u&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Qc(e);try{return new Qn(n)}catch{return null}}}/**
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
 */class Oe{constructor(){this.providerId=Oe.PROVIDER_ID}static credential(e,n){return ze._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Qn.parseLink(n);return d(i,"argument-error"),ze._fromEmailAndCode(e,i.code,i.tenantId)}}Oe.PROVIDER_ID="password";Oe.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ns{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class st extends ns{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Q extends st{constructor(){super("facebook.com")}static credential(e){return fe._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Q.credential(e.oauthAccessToken)}catch{return null}}}Q.FACEBOOK_SIGN_IN_METHOD="facebook.com";Q.PROVIDER_ID="facebook.com";/**
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
 */class Z extends st{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fe._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Z.credential(n,i)}catch{return null}}}Z.GOOGLE_SIGN_IN_METHOD="google.com";Z.PROVIDER_ID="google.com";/**
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
 */class $ extends st{constructor(){super("github.com")}static credential(e){return fe._fromParams({providerId:$.PROVIDER_ID,signInMethod:$.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $.credentialFromTaggedObject(e)}static credentialFromError(e){return $.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $.credential(e.oauthAccessToken)}catch{return null}}}$.GITHUB_SIGN_IN_METHOD="github.com";$.PROVIDER_ID="github.com";/**
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
 */class ee extends st{constructor(){super("twitter.com")}static credential(e,n){return fe._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return ee.credential(n,i)}catch{return null}}}ee.TWITTER_SIGN_IN_METHOD="twitter.com";ee.PROVIDER_ID="twitter.com";/**
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
 */class Se{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await he._fromIdTokenResponse(e,i,r),o=Ji(i);return new Se({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=Ji(i);return new Se({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function Ji(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Dt extends X{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,Dt.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new Dt(e,n,i,r)}}function is(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Dt._fromErrorAndOperation(t,s,e,i):s})}async function Zc(t,e,n=!1){const i=await He(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Se._forOperation(t,"link",i)}/**
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
 */async function $c(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await He(t,is(i,r,e,t),n);d(s.idToken,i,"internal-error");const o=qn(s.idToken);d(o,i,"internal-error");const{sub:a}=o;return d(t.uid===a,i,"user-mismatch"),Se._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&x(i,"user-mismatch"),s}}/**
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
 */async function rs(t,e,n=!1){const i="signIn",r=await is(t,i,e),s=await Se._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function eh(t,e){return rs(rt(t),e)}function th(t,e,n){return eh(pe(t),Oe.credential(e,n))}function nh(t,e,n,i){return pe(t).onIdTokenChanged(e,n,i)}function ih(t,e,n){return pe(t).beforeAuthStateChanged(e,n)}const bt="__sak";/**
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
 */class ss{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bt,"1"),this.storage.removeItem(bt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function rh(){const t=D();return Xn(t)||Bt(t)}const sh=1e3,oh=10;class os extends ss{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rh()&&Nc(),this.fallbackToPolling=Xr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Pc()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,oh):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},sh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}os.type="LOCAL";const ah=os;/**
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
 */class as extends ss{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}as.type="SESSION";const cs=as;/**
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
 */function ch(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ht{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Ht(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async h=>h(n.origin,s)),c=await ch(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ht.receivers=[];/**
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
 */function Zn(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class hh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const h=Zn("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(p){const I=p;if(I.data.eventId===h)switch(I.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(I.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function H(){return window}function lh(t){H().location.href=t}/**
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
 */function hs(){return typeof H().WorkerGlobalScope<"u"&&typeof H().importScripts=="function"}async function uh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fh(){return hs()?self:null}/**
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
 */const ls="firebaseLocalStorageDb",ph=1,Pt="firebaseLocalStorage",us="fbase_key";class ot{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Gt(t,e){return t.transaction([Pt],e?"readwrite":"readonly").objectStore(Pt)}function gh(){const t=indexedDB.deleteDatabase(ls);return new ot(t).toPromise()}function On(){const t=indexedDB.open(ls,ph);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(Pt,{keyPath:us})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(Pt)?e(i):(i.close(),await gh(),e(await On()))})})}async function Qi(t,e,n){const i=Gt(t,!0).put({[us]:e,value:n});return new ot(i).toPromise()}async function mh(t,e){const n=Gt(t,!1).get(e),i=await new ot(n).toPromise();return i===void 0?null:i.value}function Zi(t,e){const n=Gt(t,!0).delete(e);return new ot(n).toPromise()}const vh=800,yh=3;class ds{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await On(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>yh)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ht._getInstance(fh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uh(),!this.activeServiceWorker)return;this.sender=new hh(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await On();return await Qi(e,bt,"1"),await Zi(e,bt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Qi(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>mh(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zi(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Gt(r,!1).getAll();return new ot(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ds.type="LOCAL";const Ah=ds;new nt(3e4,6e4);/**
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
 */function Ih(t,e){return e?W(e):(d(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $n extends Jn{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ee(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ee(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ee(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Eh(t){return rs(t.auth,new $n(t),t.bypassAuthState)}function wh(t){const{auth:e,user:n}=t;return d(n,e,"internal-error"),$c(n,new $n(t),t.bypassAuthState)}async function Th(t){const{auth:e,user:n}=t;return d(n,e,"internal-error"),Zc(n,new $n(t),t.bypassAuthState)}/**
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
 */class fs{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Eh;case"linkViaPopup":case"linkViaRedirect":return Th;case"reauthViaPopup":case"reauthViaRedirect":return wh;default:x(this.auth,"internal-error")}}resolve(e){Y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _h=new nt(2e3,1e4);class ye extends fs{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,ye.currentPopupAction&&ye.currentPopupAction.cancel(),ye.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return d(e,this.auth,"internal-error"),e}async onExecution(){Y(this.filter.length===1,"Popup operations only handle one event");const e=Zn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(B(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(B(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ye.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(B(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_h.get())};e()}}ye.currentPopupAction=null;/**
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
 */const Sh="pendingRedirect",Tt=new Map;class Ch extends fs{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Tt.get(this.auth._key());if(!e){try{const i=await Rh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Tt.set(this.auth._key(),e)}return this.bypassAuthState||Tt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rh(t,e){const n=Dh(e),i=Oh(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function kh(t,e){Tt.set(t._key(),e)}function Oh(t){return W(t._redirectPersistence)}function Dh(t){return wt(Sh,t.config.apiKey,t.name)}async function bh(t,e,n=!1){const i=rt(t),r=Ih(i,e),o=await new Ch(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Ph=10*60*1e3;class Nh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lh(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!ps(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(B(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ph&&this.cachedEventUids.clear(),this.cachedEventUids.has($i(e))}saveEventToCache(e){this.cachedEventUids.add($i(e)),this.lastProcessedEventTime=Date.now()}}function $i(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ps({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lh(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ps(t);default:return!1}}/**
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
 */async function Mh(t,e={}){return ke(t,"GET","/v1/projects",e)}/**
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
 */const Uh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xh=/^https?/;async function jh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Mh(t);for(const n of e)try{if(Fh(n))return}catch{}x(t,"unauthorized-domain")}function Fh(t){const e=kn(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!xh.test(n))return!1;if(Uh.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const Vh=new nt(3e4,6e4);function er(){const t=H().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Bh(t){return new Promise((e,n)=>{var i,r,s;function o(){er(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{er(),n(B(t,"network-request-failed"))},timeout:Vh.get()})}if(!((r=(i=H().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=H().gapi)===null||s===void 0)&&s.load)o();else{const a=Mc("iframefcb");return H()[a]=()=>{gapi.load?o():n(B(t,"network-request-failed"))},$r(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw _t=null,e})}let _t=null;function Hh(t){return _t=_t||Bh(t),_t}/**
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
 */const Gh=new nt(5e3,15e3),zh="__/auth/iframe",Wh="emulator/auth/iframe",Kh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qh(t){const e=t.config;d(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yn(e,Wh):`https://${t.config.authDomain}/${zh}`,i={apiKey:e.apiKey,appName:t.name,v:Re},r=Yh.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${tt(i).slice(1)}`}async function Xh(t){const e=await Hh(t),n=H().gapi;return d(n,t,"internal-error"),e.open({where:document.body,url:qh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Kh,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=B(t,"network-request-failed"),a=H().setTimeout(()=>{s(o)},Gh.get());function c(){H().clearTimeout(a),r(i)}i.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const Jh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qh=500,Zh=600,$h="_blank",el="http://localhost";class tr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tl(t,e,n,i=Qh,r=Zh){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Jh),{width:i.toString(),height:r.toString(),top:s,left:o}),h=D().toLowerCase();n&&(a=zr(h)?$h:n),Gr(h)&&(e=e||el,c.scrollbars="yes");const u=Object.entries(c).reduce((I,[b,U])=>`${I}${b}=${U},`,"");if(bc(h)&&a!=="_self")return nl(e||"",a),new tr(null);const p=window.open(e||"",a,u);d(p,t,"popup-blocked");try{p.focus()}catch{}return new tr(p)}function nl(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const il="__/auth/handler",rl="emulator/auth/handler",sl=encodeURIComponent("fac");async function nr(t,e,n,i,r,s){d(t.config.authDomain,t,"auth-domain-config-required"),d(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Re,eventId:r};if(e instanceof ns){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ta(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,p]of Object.entries(s||{}))o[u]=p}if(e instanceof st){const u=e.getScopes().filter(p=>p!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),h=c?`#${sl}=${encodeURIComponent(c)}`:"";return`${ol(t)}?${tt(a).slice(1)}${h}`}function ol({config:t}){return t.emulator?Yn(t,rl):`https://${t.authDomain}/${il}`}/**
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
 */const mn="webStorageSupport";class al{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cs,this._completeRedirectFn=bh,this._overrideRedirectResult=kh}async _openPopup(e,n,i,r){var s;Y((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await nr(e,n,i,kn(),r);return tl(e,o,Zn())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await nr(e,n,i,kn(),r);return lh(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(Y(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Xh(e),i=new Nh(e);return n.register("authEvent",r=>(d(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mn,{type:mn},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[mn];o!==void 0&&n(!!o),x(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xr()||Xn()||Bt()}}const cl=al;var ir="@firebase/auth",rr="1.1.0";/**
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
 */class hl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){d(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ll(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ul(t){_e(new ue("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;d(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jr(t)},h=new Vc(i,r,s,c);return Hc(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),_e(new ue("auth-internal",e=>{const n=rt(e.getProvider("auth").getImmediate());return(i=>new hl(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ie(ir,rr,ll(t)),ie(ir,rr,"esm2017")}/**
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
 */const dl=5*60,fl=Or("authIdTokenMaxAge")||dl;let sr=null;const pl=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>fl)return;const r=n==null?void 0:n.token;sr!==r&&(sr=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function gs(t=Nr()){const e=zn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bc(t,{popupRedirectResolver:cl,persistence:[Ah,ah,cs]}),i=Or("authTokenSyncURL");if(i){const s=pl(i);ih(n,s,()=>s(n.currentUser)),nh(n,o=>s(o))}const r=Rr("auth");return r&&Gc(n,`http://${r}`),n}ul("Browser");var gl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},l,ei=ei||{},f=gl||self;function zt(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function at(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function ml(t){return Object.prototype.hasOwnProperty.call(t,vn)&&t[vn]||(t[vn]=++vl)}var vn="closure_uid_"+(1e9*Math.random()>>>0),vl=0;function yl(t,e,n){return t.call.apply(t.bind,arguments)}function Al(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function k(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k=yl:k=Al,k.apply(null,arguments)}function vt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function w(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function re(){this.s=this.s,this.o=this.o}var Il=0;re.prototype.s=!1;re.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Il!=0)&&ml(this)};re.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ms=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ti(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function or(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(zt(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function O(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var El=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{f.addEventListener("test",()=>{},e),f.removeEventListener("test",()=>{},e)}catch{}return t}();function We(t){return/^[\s\xa0]*$/.test(t)}function Wt(){var t=f.navigator;return t&&(t=t.userAgent)?t:""}function j(t){return Wt().indexOf(t)!=-1}function ni(t){return ni[" "](t),t}ni[" "]=function(){};function wl(t,e){var n=gu;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Tl=j("Opera"),Ke=j("Trident")||j("MSIE"),vs=j("Edge"),Dn=vs||Ke,ys=j("Gecko")&&!(Wt().toLowerCase().indexOf("webkit")!=-1&&!j("Edge"))&&!(j("Trident")||j("MSIE"))&&!j("Edge"),_l=Wt().toLowerCase().indexOf("webkit")!=-1&&!j("Edge");function As(){var t=f.document;return t?t.documentMode:void 0}e:{var ar="",yn=function(){var t=Wt();if(ys)return/rv:([^\);]+)(\)|;)/.exec(t);if(vs)return/Edge\/([\d\.]+)/.exec(t);if(Ke)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_l)return/WebKit\/(\S+)/.exec(t);if(Tl)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(yn&&(ar=yn?yn[1]:""),Ke){var cr=As();if(cr!=null&&cr>parseFloat(ar))break e}}f.document&&Ke&&As();function Ye(t,e){if(O.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ys){e:{try{ni(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Sl[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ye.$.h.call(this)}}w(Ye,O);var Sl={2:"touch",3:"pen",4:"mouse"};Ye.prototype.h=function(){Ye.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ct="closure_listenable_"+(1e6*Math.random()|0),Cl=0;function Rl(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++Cl,this.fa=this.ia=!1}function Kt(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ii(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function kl(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Is(t){const e={};for(const n in t)e[n]=t[n];return e}const hr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Es(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<hr.length;s++)n=hr[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Yt(t){this.src=t,this.g={},this.h=0}Yt.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Pn(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Rl(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};function bn(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=ms(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Kt(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Pn(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}var ri="closure_lm_"+(1e6*Math.random()|0),An={};function ws(t,e,n,i,r){if(i&&i.once)return _s(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ws(t,e[s],n,i,r);return null}return n=ai(n),t&&t[ct]?t.O(e,n,at(i)?!!i.capture:!!i,r):Ts(t,e,n,!1,i,r)}function Ts(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=at(r)?!!r.capture:!!r,a=oi(t);if(a||(t[ri]=a=new Yt(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=Ol(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)El||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Cs(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ol(){function t(n){return e.call(t.src,t.listener,n)}const e=Dl;return t}function _s(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)_s(t,e[s],n,i,r);return null}return n=ai(n),t&&t[ct]?t.P(e,n,at(i)?!!i.capture:!!i,r):Ts(t,e,n,!0,i,r)}function Ss(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)Ss(t,e[s],n,i,r);else i=at(i)?!!i.capture:!!i,n=ai(n),t&&t[ct]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Pn(s,n,i,r),-1<n&&(Kt(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=oi(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Pn(e,n,i,r)),(n=-1<t?e[t]:null)&&si(n))}function si(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ct])bn(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Cs(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=oi(e))?(bn(n,t),n.h==0&&(n.src=null,e[ri]=null)):Kt(t)}}}function Cs(t){return t in An?An[t]:An[t]="on"+t}function Dl(t,e){if(t.fa)t=!0;else{e=new Ye(e,this);var n=t.listener,i=t.la||t.src;t.ia&&si(t),t=n.call(i,e)}return t}function oi(t){return t=t[ri],t instanceof Yt?t:null}var In="__closure_events_fn_"+(1e9*Math.random()>>>0);function ai(t){return typeof t=="function"?t:(t[In]||(t[In]=function(e){return t.handleEvent(e)}),t[In])}function E(){re.call(this),this.i=new Yt(this),this.S=this,this.J=null}w(E,re);E.prototype[ct]=!0;E.prototype.removeEventListener=function(t,e,n,i){Ss(this,t,e,n,i)};function _(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new O(e,t);else if(e instanceof O)e.target=e.target||t;else{var r=e;e=new O(i,t),Es(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=yt(o,i,!0,e)&&r}if(o=e.g=t,r=yt(o,i,!0,e)&&r,r=yt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=yt(o,i,!1,e)&&r}E.prototype.N=function(){if(E.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Kt(n[i]);delete t.g[e],t.h--}}this.J=null};E.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};E.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function yt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&bn(t.i,o),r=a.call(c,i)!==!1&&r}}return r&&!i.defaultPrevented}var ci=f.JSON.stringify;class bl{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Pl(){var t=hi;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Nl{constructor(){this.h=this.g=null}add(e,n){const i=Rs.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var Rs=new bl(()=>new Ll,t=>t.reset());class Ll{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Ml(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Ul(t){f.setTimeout(()=>{throw t},0)}let qe,Xe=!1,hi=new Nl,ks=()=>{const t=f.Promise.resolve(void 0);qe=()=>{t.then(xl)}};var xl=()=>{for(var t;t=Pl();){try{t.h.call(t.g)}catch(n){Ul(n)}var e=Rs;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Xe=!1};function qt(t,e){E.call(this),this.h=t||1,this.g=e||f,this.j=k(this.qb,this),this.l=Date.now()}w(qt,E);l=qt.prototype;l.ga=!1;l.T=null;l.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),_(this,"tick"),this.ga&&(li(this),this.start()))}};l.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function li(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}l.N=function(){qt.$.N.call(this),li(this),delete this.g};function ui(t,e,n){if(typeof t=="function")n&&(t=k(t,n));else if(t&&typeof t.handleEvent=="function")t=k(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:f.setTimeout(t,e||0)}function Os(t){t.g=ui(()=>{t.g=null,t.i&&(t.i=!1,Os(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jl extends re{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Os(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(t){re.call(this),this.h=t,this.g={}}w(Je,re);var lr=[];function Ds(t,e,n,i){Array.isArray(n)||(n&&(lr[0]=n.toString()),n=lr);for(var r=0;r<n.length;r++){var s=ws(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function bs(t){ii(t.g,function(e,n){this.g.hasOwnProperty(n)&&si(e)},t),t.g={}}Je.prototype.N=function(){Je.$.N.call(this),bs(this)};Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xt(){this.g=!0}Xt.prototype.Ea=function(){this.g=!1};function Fl(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var h=a[c].split("=");if(1<h.length){var u=h[0];h=h[1];var p=u.split("_");o=2<=p.length&&p[1]=="type"?o+(u+"="+h+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Vl(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function Ae(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Hl(t,n)+(i?" "+i:"")})}function Bl(t,e){t.info(function(){return"TIMEOUT: "+e})}Xt.prototype.info=function(){};function Hl(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ci(n)}catch{return e}}var De={},ur=null;function di(){return ur=ur||new E}De.Ta="serverreachability";function Ps(t){O.call(this,De.Ta,t)}w(Ps,O);function Qe(t){const e=di();_(e,new Ps(e))}De.STAT_EVENT="statevent";function Ns(t,e){O.call(this,De.STAT_EVENT,t),this.stat=e}w(Ns,O);function P(t){const e=di();_(e,new Ns(e,t))}De.Ua="timingevent";function Ls(t,e){O.call(this,De.Ua,t),this.size=e}w(Ls,O);function ht(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){t()},e)}var fi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Gl={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function pi(){}pi.prototype.h=null;function dr(t){return t.h||(t.h=t.i())}function zl(){}var lt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function gi(){O.call(this,"d")}w(gi,O);function mi(){O.call(this,"c")}w(mi,O);var Nn;function Jt(){}w(Jt,pi);Jt.prototype.g=function(){return new XMLHttpRequest};Jt.prototype.i=function(){return{}};Nn=new Jt;function ut(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new Je(this),this.P=Wl,t=Dn?125:void 0,this.V=new qt(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ms}function Ms(){this.i=null,this.g="",this.h=!1}var Wl=45e3,Ln={},Nt={};l=ut.prototype;l.setTimeout=function(t){this.P=t};function Mn(t,e,n){t.L=1,t.v=Zt(q(e)),t.s=n,t.S=!0,Us(t,null)}function Us(t,e){t.G=Date.now(),dt(t),t.A=q(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),zs(n.i,"t",i),t.C=0,n=t.l.J,t.h=new Ms,t.g=uo(t.l,n?e:null,!t.s),0<t.O&&(t.M=new jl(k(t.Pa,t,t.g),t.O)),Ds(t.U,t.g,"readystatechange",t.nb),e=t.I?Is(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Qe(),Fl(t.j,t.u,t.A,t.m,t.W,t.s)}l.nb=function(t){t=t.target;const e=this.M;e&&F(t)==3?e.l():this.Pa(t)};l.Pa=function(t){try{if(t==this.g)e:{const u=F(this.g);var e=this.g.Ia();const p=this.g.da();if(!(3>u)&&(u!=3||Dn||this.g&&(this.h.h||this.g.ja()||mr(this.g)))){this.J||u!=4||e==7||(e==8||0>=p?Qe(3):Qe(2)),Qt(this);var n=this.g.da();this.ca=n;t:if(xs(this)){var i=mr(this.g);t="";var r=i.length,s=F(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ae(this),Ve(this);var o="";break t}this.h.i=new f.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Vl(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!We(a)){var h=a;break t}}h=null}if(n=h)Ae(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Un(this,n);else{this.i=!1,this.o=3,P(12),ae(this),Ve(this);break e}}this.S?(js(this,u,o),Dn&&this.i&&u==3&&(Ds(this.U,this.V,"tick",this.mb),this.V.start())):(Ae(this.j,this.m,o,null),Un(this,o)),u==4&&ae(this),this.i&&!this.J&&(u==4?ao(this.l,this):(this.i=!1,dt(this)))}else du(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,P(12)):(this.o=0,P(13)),ae(this),Ve(this)}}}catch{}finally{}};function xs(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function js(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if(r=Kl(t,n),r==Nt){e==4&&(t.o=4,P(14),i=!1),Ae(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ln){t.o=4,P(15),Ae(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else Ae(t.j,t.m,r,null),Un(t,r);xs(t)&&r!=Nt&&r!=Ln&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,P(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),wi(e),e.M=!0,P(11))):(Ae(t.j,t.m,n,"[Invalid Chunked Response]"),ae(t),Ve(t))}l.mb=function(){if(this.g){var t=F(this.g),e=this.g.ja();this.C<e.length&&(Qt(this),js(this,t,e),this.i&&t!=4&&dt(this))}};function Kl(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?Nt:(n=Number(e.substring(n,i)),isNaN(n)?Ln:(i+=1,i+n>e.length?Nt:(e=e.slice(i,i+n),t.C=i+n,e)))}l.cancel=function(){this.J=!0,ae(this)};function dt(t){t.Y=Date.now()+t.P,Fs(t,t.P)}function Fs(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ht(k(t.lb,t),e)}function Qt(t){t.B&&(f.clearTimeout(t.B),t.B=null)}l.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Bl(this.j,this.A),this.L!=2&&(Qe(),P(17)),ae(this),this.o=2,Ve(this)):Fs(this,this.Y-t)};function Ve(t){t.l.H==0||t.J||ao(t.l,t)}function ae(t){Qt(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,li(t.V),bs(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Un(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||xn(n.i,t))){if(!t.K&&xn(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ut(n),nn(n);else break e;Ei(n),P(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=ht(k(n.ib,n),6e3));if(1>=Ys(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ce(n,11)}else if((t.K||n.g==t)&&Ut(n),!We(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let h=r[e];if(n.V=h[0],h=h[1],n.H==2)if(h[0]=="c"){n.K=h[1],n.pa=h[2];const u=h[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const p=h[4];p!=null&&(n.Ga=p,n.l.info("SVER="+n.Ga));const I=h[5];I!=null&&typeof I=="number"&&0<I&&(i=1.5*I,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const b=t.g;if(b){const U=b.g?b.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(U){var s=i.i;s.g||U.indexOf("spdy")==-1&&U.indexOf("quic")==-1&&U.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(vi(s,s.h),s.h=null))}if(i.F){const ge=b.g?b.g.getResponseHeader("X-HTTP-Session-Id"):null;ge&&(i.Da=ge,y(i.I,i.F,ge))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=lo(i,i.J?i.pa:null,i.Y),o.K){qs(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&(Qt(a),dt(a)),i.g=o}else so(i);0<n.j.length&&rn(n)}else h[0]!="stop"&&h[0]!="close"||ce(n,7);else n.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?ce(n,7):Ii(n):h[0]!="noop"&&n.h&&n.h.Aa(h),n.A=0)}}Qe(4)}catch{}}function Yl(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(zt(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function ql(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(zt(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Vs(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(zt(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ql(t),i=Yl(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var Bs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Xl(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function le(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof le){this.h=t.h,Lt(this,t.j),this.s=t.s,this.g=t.g,Mt(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),fr(this,n),this.o=t.o}else t&&(e=String(t).match(Bs))?(this.h=!1,Lt(this,e[1]||"",!0),this.s=xe(e[2]||""),this.g=xe(e[3]||"",!0),Mt(this,e[4]),this.l=xe(e[5]||"",!0),fr(this,e[6]||"",!0),this.o=xe(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}le.prototype.toString=function(){var t=[],e=this.j;e&&t.push(je(e,pr,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(je(e,pr,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(je(n,n.charAt(0)=="/"?Zl:Ql,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",je(n,eu)),t.join("")};function q(t){return new le(t)}function Lt(t,e,n){t.j=n?xe(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mt(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fr(t,e,n){e instanceof Ze?(t.i=e,tu(t.i,t.h)):(n||(e=je(e,$l)),t.i=new Ze(e,t.h))}function y(t,e,n){t.i.set(e,n)}function Zt(t){return y(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function xe(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function je(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Jl),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Jl(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pr=/[#\/\?@]/g,Ql=/[#\?:]/g,Zl=/[#\?]/g,$l=/[#\?@]/g,eu=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function se(t){t.g||(t.g=new Map,t.h=0,t.i&&Xl(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}l=Ze.prototype;l.add=function(t,e){se(this),this.i=null,t=be(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hs(t,e){se(t),e=be(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Gs(t,e){return se(t),e=be(t,e),t.g.has(e)}l.forEach=function(t,e){se(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};l.ta=function(){se(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};l.Z=function(t){se(this);let e=[];if(typeof t=="string")Gs(this,t)&&(e=e.concat(this.g.get(be(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};l.set=function(t,e){return se(this),this.i=null,t=be(this,t),Gs(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};l.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function zs(t,e,n){Hs(t,e),0<n.length&&(t.i=null,t.g.set(be(t,e),ti(n)),t.h+=n.length)}l.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function be(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function tu(t,e){e&&!t.j&&(se(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(Hs(this,i),zs(this,r,n))},t)),t.j=e}var nu=class{constructor(t,e){this.g=t,this.map=e}};function Ws(t){this.l=t||iu,f.PerformanceNavigationTiming?(t=f.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(f.g&&f.g.Ka&&f.g.Ka()&&f.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var iu=10;function Ks(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ys(t){return t.h?1:t.g?t.g.size:0}function xn(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function vi(t,e){t.g?t.g.add(e):t.h=e}function qs(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ws.prototype.cancel=function(){if(this.i=Xs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xs(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ti(t.i)}var ru=class{stringify(t){return f.JSON.stringify(t,void 0)}parse(t){return f.JSON.parse(t,void 0)}};function su(){this.g=new ru}function ou(t,e,n){const i=n||"";try{Vs(t,function(r,s){let o=r;at(r)&&(o=ci(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function au(t,e){const n=new Xt;if(f.Image){const i=new Image;i.onload=vt(At,n,i,"TestLoadImage: loaded",!0,e),i.onerror=vt(At,n,i,"TestLoadImage: error",!1,e),i.onabort=vt(At,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=vt(At,n,i,"TestLoadImage: timeout",!1,e),f.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function At(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function $t(t){this.l=t.fc||null,this.j=t.ob||!1}w($t,pi);$t.prototype.g=function(){return new en(this.l,this.j)};$t.prototype.i=function(t){return function(){return t}}({});function en(t,e){E.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=yi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}w(en,E);var yi=0;l=en.prototype;l.open=function(t,e){if(this.readyState!=yi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,$e(this)};l.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||f).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};l.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ft(this)),this.readyState=yi};l.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$e(this)),this.g&&(this.readyState=3,$e(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Js(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Js(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}l.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ft(this):$e(this),this.readyState==3&&Js(this)}};l.Za=function(t){this.g&&(this.response=this.responseText=t,ft(this))};l.Ya=function(t){this.g&&(this.response=t,ft(this))};l.ka=function(){this.g&&ft(this)};function ft(t){t.readyState=4,t.l=null,t.j=null,t.A=null,$e(t)}l.setRequestHeader=function(t,e){this.v.append(t,e)};l.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};l.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function $e(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(en.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var cu=f.JSON.parse;function A(t){E.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Qs,this.L=this.M=!1}w(A,E);var Qs="",hu=/^https?$/i,lu=["POST","PUT"];l=A.prototype;l.Oa=function(t){this.M=t};l.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nn.g(),this.C=this.u?dr(this.u):dr(Nn),this.g.onreadystatechange=k(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){gr(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=f.FormData&&t instanceof f.FormData,!(0<=ms(lu,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{eo(this),0<this.B&&((this.L=uu(this.g))?(this.g.timeout=this.B,this.g.ontimeout=k(this.ua,this)):this.A=ui(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){gr(this,s)}};function uu(t){return Ke&&typeof t.timeout=="number"&&t.ontimeout!==void 0}l.ua=function(){typeof ei<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_(this,"timeout"),this.abort(8))};function gr(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Zs(t),tn(t)}function Zs(t){t.F||(t.F=!0,_(t,"complete"),_(t,"error"))}l.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,_(this,"complete"),_(this,"abort"),tn(this))};l.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),tn(this,!0)),A.$.N.call(this)};l.La=function(){this.s||(this.G||this.v||this.l?$s(this):this.kb())};l.kb=function(){$s(this)};function $s(t){if(t.h&&typeof ei<"u"&&(!t.C[1]||F(t)!=4||t.da()!=2)){if(t.v&&F(t)==4)ui(t.La,0,t);else if(_(t,"readystatechange"),F(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var r=String(t.I).match(Bs)[1]||null;!r&&f.self&&f.self.location&&(r=f.self.location.protocol.slice(0,-1)),i=!hu.test(r?r.toLowerCase():"")}n=i}if(n)_(t,"complete"),_(t,"success");else{t.m=6;try{var s=2<F(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Zs(t)}}finally{tn(t)}}}}function tn(t,e){if(t.g){eo(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||_(t,"ready");try{n.onreadystatechange=i}catch{}}}function eo(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(f.clearTimeout(t.A),t.A=null)}l.isActive=function(){return!!this.g};function F(t){return t.g?t.g.readyState:0}l.da=function(){try{return 2<F(this)?this.g.status:-1}catch{return-1}};l.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};l.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),cu(e)}};function mr(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Qs:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function du(t){const e={};t=(t.g&&2<=F(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(We(t[i]))continue;var n=Ml(t[i]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}kl(e,function(i){return i.join(", ")})}l.Ia=function(){return this.m};l.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function to(t){let e="";return ii(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Ai(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=to(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):y(t,e,n))}function Ne(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function no(t){this.Ga=0,this.j=[],this.l=new Xt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ne("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ne("baseRetryDelayMs",5e3,t),this.hb=Ne("retryDelaySeedMs",1e4,t),this.eb=Ne("forwardChannelMaxRetries",2,t),this.xa=Ne("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Ws(t&&t.concurrentRequestLimit),this.Ja=new su,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}l=no.prototype;l.ra=8;l.H=1;function Ii(t){if(io(t),t.H==3){var e=t.W++,n=q(t.I);if(y(n,"SID",t.K),y(n,"RID",e),y(n,"TYPE","terminate"),pt(t,n),e=new ut(t,t.l,e),e.L=2,e.v=Zt(q(n)),n=!1,f.navigator&&f.navigator.sendBeacon)try{n=f.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&f.Image&&(new Image().src=e.v,n=!0),n||(e.g=uo(e.l,null),e.g.ha(e.v)),e.G=Date.now(),dt(e)}ho(t)}function nn(t){t.g&&(wi(t),t.g.cancel(),t.g=null)}function io(t){nn(t),t.u&&(f.clearTimeout(t.u),t.u=null),Ut(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&f.clearTimeout(t.m),t.m=null)}function rn(t){if(!Ks(t.i)&&!t.m){t.m=!0;var e=t.Na;qe||ks(),Xe||(qe(),Xe=!0),hi.add(e,t),t.C=0}}function fu(t,e){return Ys(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=ht(k(t.Na,t,e),co(t,t.C)),t.C++,!0)}l.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new ut(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Is(s),Es(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=ro(this,r,e),n=q(this.I),y(n,"RID",t),y(n,"CVER",22),this.F&&y(n,"X-HTTP-Session-Id",this.F),pt(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(to(s)))+"&"+e:this.o&&Ai(n,this.o,s)),vi(this.i,r),this.bb&&y(n,"TYPE","init"),this.P?(y(n,"$req",e),y(n,"SID","null"),r.aa=!0,Mn(r,n,null)):Mn(r,n,e),this.H=2}}else this.H==3&&(t?vr(this,t):this.j.length==0||Ks(this.i)||vr(this))};function vr(t,e){var n;e?n=e.m:n=t.W++;const i=q(t.I);y(i,"SID",t.K),y(i,"RID",n),y(i,"AID",t.V),pt(t,i),t.o&&t.s&&Ai(i,t.o,t.s),n=new ut(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=ro(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),vi(t.i,n),Mn(n,i,e)}function pt(t,e){t.na&&ii(t.na,function(n,i){y(e,i,n)}),t.h&&Vs({},function(n,i){y(e,i,n)})}function ro(t,e,n){n=Math.min(t.j.length,n);var i=t.h?k(t.h.Va,t.h,t):null;e:{var r=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<n;c++){let h=r[c].g;const u=r[c].map;if(h-=s,0>h)s=Math.max(0,r[c].g-100),a=!1;else try{ou(u,o,"req"+h+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function so(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;qe||ks(),Xe||(qe(),Xe=!0),hi.add(e,t),t.A=0}}function Ei(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=ht(k(t.Ma,t),co(t,t.A)),t.A++,!0)}l.Ma=function(){if(this.u=null,oo(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=ht(k(this.jb,this),t)}};l.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,P(10),nn(this),oo(this))};function wi(t){t.B!=null&&(f.clearTimeout(t.B),t.B=null)}function oo(t){t.g=new ut(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=q(t.wa);y(e,"RID","rpc"),y(e,"SID",t.K),y(e,"AID",t.V),y(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&y(e,"TO",t.qa),y(e,"TYPE","xmlhttp"),pt(t,e),t.o&&t.s&&Ai(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Zt(q(e)),n.s=null,n.S=!0,Us(n,t)}l.ib=function(){this.v!=null&&(this.v=null,nn(this),Ei(this),P(19))};function Ut(t){t.v!=null&&(f.clearTimeout(t.v),t.v=null)}function ao(t,e){var n=null;if(t.g==e){Ut(t),wi(t),t.g=null;var i=2}else if(xn(t.i,e))n=e.F,qs(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;i=di(),_(i,new Ls(i,n)),rn(t)}else so(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(i==1&&fu(t,e)||i==2&&Ei(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ce(t,5);break;case 4:ce(t,10);break;case 3:ce(t,6);break;default:ce(t,2)}}}function co(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ce(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=k(t.pb,t);n||(n=new le("//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Lt(n,"https"),Zt(n)),au(n.toString(),i)}else P(2);t.H=0,t.h&&t.h.za(e),ho(t),io(t)}l.pb=function(t){t?(this.l.info("Successfully pinged google.com"),P(2)):(this.l.info("Failed to ping google.com"),P(1))};function ho(t){if(t.H=0,t.ma=[],t.h){const e=Xs(t.i);(e.length!=0||t.j.length!=0)&&(or(t.ma,e),or(t.ma,t.j),t.i.i.length=0,ti(t.j),t.j.length=0),t.h.ya()}}function lo(t,e,n){var i=n instanceof le?q(n):new le(n);if(i.g!="")e&&(i.g=e+"."+i.g),Mt(i,i.m);else{var r=f.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new le(null);i&&Lt(s,i),e&&(s.g=e),r&&Mt(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&y(i,n,e),y(i,"VER",t.ra),pt(t,i),i}function uo(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new A(new $t({ob:!0})):new A(t.va),e.Oa(t.J),e}l.isActive=function(){return!!this.h&&this.h.isActive(this)};function fo(){}l=fo.prototype;l.Ba=function(){};l.Aa=function(){};l.za=function(){};l.ya=function(){};l.isActive=function(){return!0};l.Va=function(){};function M(t,e){E.call(this),this.g=new no(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!We(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!We(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Pe(this)}w(M,E);M.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;P(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=lo(t,null,t.Y),rn(t)};M.prototype.close=function(){Ii(this.g)};M.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ci(t),t=n);e.j.push(new nu(e.fb++,t)),e.H==3&&rn(e)};M.prototype.N=function(){this.g.h=null,delete this.j,Ii(this.g),delete this.g,M.$.N.call(this)};function po(t){gi.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}w(po,gi);function go(){mi.call(this),this.status=1}w(go,mi);function Pe(t){this.g=t}w(Pe,fo);Pe.prototype.Ba=function(){_(this.g,"a")};Pe.prototype.Aa=function(t){_(this.g,new po(t))};Pe.prototype.za=function(t){_(this.g,new go)};Pe.prototype.ya=function(){_(this.g,"b")};function pu(){this.blockSize=-1}function G(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}w(G,pu);G.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function En(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}G.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)En(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){En(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){En(this,i),r=0;break}}this.h=r,this.i+=e};G.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function v(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;i&&s==e||(n[r]=s,i=!1)}this.g=n}var gu={};function Ti(t){return-128<=t&&128>t?wl(t,function(e){return new v([e|0],0>e?-1:0)}):new v([t|0],0>t?-1:0)}function V(t){if(isNaN(t)||!isFinite(t))return we;if(0>t)return T(V(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=jn;return new v(e,0)}function mo(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return T(mo(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=V(Math.pow(e,8)),i=we,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=V(Math.pow(e,s)),i=i.R(s).add(V(o))):(i=i.R(n),i=i.add(V(o)))}return i}var jn=4294967296,we=Ti(0),Fn=Ti(1),yr=Ti(16777216);l=v.prototype;l.ea=function(){if(L(this))return-T(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:jn+i)*e,e*=jn}return t};l.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(K(this))return"0";if(L(this))return"-"+T(this).toString(t);for(var e=V(Math.pow(t,6)),n=this,i="";;){var r=jt(n,e).g;n=xt(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,K(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};l.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function K(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function L(t){return t.h==-1}l.X=function(t){return t=xt(this,t),L(t)?-1:K(t)?0:1};function T(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new v(n,~t.h).add(Fn)}l.abs=function(){return L(this)?T(this):this};l.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(t.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new v(n,n[n.length-1]&-2147483648?-1:0)};function xt(t,e){return t.add(T(e))}l.R=function(t){if(K(this)||K(t))return we;if(L(this))return L(t)?T(this).R(T(t)):T(T(this).R(t));if(L(t))return T(this.R(T(t)));if(0>this.X(yr)&&0>t.X(yr))return V(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(r)>>>16,c=t.D(r)&65535;n[2*i+2*r]+=o*c,It(n,2*i+2*r),n[2*i+2*r+1]+=s*c,It(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,It(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,It(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new v(n,0)};function It(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Le(t,e){this.g=t,this.h=e}function jt(t,e){if(K(e))throw Error("division by zero");if(K(t))return new Le(we,we);if(L(t))return e=jt(T(t),e),new Le(T(e.g),T(e.h));if(L(e))return e=jt(t,T(e)),new Le(T(e.g),e.h);if(30<t.g.length){if(L(t)||L(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Fn,i=e;0>=i.X(t);)n=Ar(n),i=Ar(i);var r=me(n,1),s=me(i,1);for(i=me(i,2),n=me(n,2);!K(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=me(i,1),n=me(n,1)}return e=xt(t,r.R(e)),new Le(r,e)}for(r=we;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=V(n),o=s.R(e);L(o)||0<o.X(t);)n-=i,s=V(n),o=s.R(e);K(s)&&(s=Fn),r=r.add(s),t=xt(t,o)}return new Le(r,t)}l.gb=function(t){return jt(this,t).h};l.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new v(n,this.h&t.h)};l.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new v(n,this.h|t.h)};l.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new v(n,this.h^t.h)};function Ar(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new v(n,t.h)}function me(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new v(r,t.h)}M.prototype.send=M.prototype.u;M.prototype.open=M.prototype.m;M.prototype.close=M.prototype.close;fi.NO_ERROR=0;fi.TIMEOUT=8;fi.HTTP_ERROR=6;Gl.COMPLETE="complete";zl.EventType=lt;lt.OPEN="a";lt.CLOSE="b";lt.ERROR="c";lt.MESSAGE="d";E.prototype.listen=E.prototype.O;A.prototype.listenOnce=A.prototype.P;A.prototype.getLastError=A.prototype.Sa;A.prototype.getLastErrorCode=A.prototype.Ia;A.prototype.getStatus=A.prototype.da;A.prototype.getResponseJson=A.prototype.Wa;A.prototype.getResponseText=A.prototype.ja;A.prototype.send=A.prototype.ha;A.prototype.setWithCredentials=A.prototype.Oa;G.prototype.digest=G.prototype.l;G.prototype.reset=G.prototype.reset;G.prototype.update=G.prototype.j;v.prototype.add=v.prototype.add;v.prototype.multiply=v.prototype.R;v.prototype.modulo=v.prototype.gb;v.prototype.compare=v.prototype.X;v.prototype.toNumber=v.prototype.ea;v.prototype.toString=v.prototype.toString;v.prototype.getBits=v.prototype.D;v.fromNumber=V;v.fromString=mo;var mu=v;const Ir="@firebase/firestore";/**
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
 */class S{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}S.UNAUTHENTICATED=new S(null),S.GOOGLE_CREDENTIALS=new S("google-credentials-uid"),S.FIRST_PARTY=new S("first-party-uid"),S.MOCK_USER=new S("mock-user");/**
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
 */let gt="10.1.0";/**
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
 */const Ce=new Hn("@firebase/firestore");function N(t,...e){if(Ce.logLevel<=m.DEBUG){const n=e.map(Si);Ce.debug(`Firestore (${gt}): ${t}`,...n)}}function _i(t,...e){if(Ce.logLevel<=m.ERROR){const n=e.map(Si);Ce.error(`Firestore (${gt}): ${t}`,...n)}}function vu(t,...e){if(Ce.logLevel<=m.WARN){const n=e.map(Si);Ce.warn(`Firestore (${gt}): ${t}`,...n)}}function Si(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Ci(t="Unexpected state"){const e=`FIRESTORE (${gt}) INTERNAL ASSERTION FAILED: `+t;throw _i(e),new Error(e)}function Vn(t,e){t||Ci()}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class R extends X{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Te{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class vo{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(S.UNAUTHENTICATED))}shutdown(){}}class Au{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Iu{constructor(e){this.t=e,this.currentUser=S.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let s=new Te;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Te,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Te)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Vn(typeof i.accessToken=="string"),new vo(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Vn(e===null||typeof e=="string"),new S(e)}}class Eu{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=S.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wu{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new Eu(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(S.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _u{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=s=>{s.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,N("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Vn(typeof n.token=="string"),this.R=n.token,new Tu(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Su(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Cu{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Su(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function yo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ru{constructor(e,n,i,r,s,o,a,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=h}}class Ft{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ft("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ft&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Er,g;(g=Er||(Er={}))[g.OK=0]="OK",g[g.CANCELLED=1]="CANCELLED",g[g.UNKNOWN=2]="UNKNOWN",g[g.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",g[g.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",g[g.NOT_FOUND=5]="NOT_FOUND",g[g.ALREADY_EXISTS=6]="ALREADY_EXISTS",g[g.PERMISSION_DENIED=7]="PERMISSION_DENIED",g[g.UNAUTHENTICATED=16]="UNAUTHENTICATED",g[g.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",g[g.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",g[g.ABORTED=10]="ABORTED",g[g.OUT_OF_RANGE=11]="OUT_OF_RANGE",g[g.UNIMPLEMENTED=12]="UNIMPLEMENTED",g[g.INTERNAL=13]="INTERNAL",g[g.UNAVAILABLE=14]="UNAVAILABLE",g[g.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new mu([4294967295,4294967295],0);function wn(){return typeof document<"u"?document:null}/**
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
 */class ku{constructor(e,n,i=1e3,r=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=i,this.bo=r,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),i=Math.max(0,Date.now()-this.Fo),r=Math.max(0,n-i);r>0&&N("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class Ri{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new Te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Ri(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new R(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ou(t,e){if(_i("AsyncQueue",`${e}: ${t}`),yo(t))return new R(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Du{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=S.UNAUTHENTICATED,this.clientId=Cu.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{N("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(N("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new R(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Ou(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
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
 */function Ao(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const wr=new Map;function bu(t,e,n,i){if(e===!0&&i===!0)throw new R(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ci()}function Nu(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new R(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pu(t);throw new R(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Tr{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new R(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new R(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ao((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new R(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new R(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new R(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Io{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new R(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new R(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tr(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new yu;switch(i.type){case"firstParty":return new wu(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new R(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=wr.get(n);i&&(N("ComponentProvider","Removing Datastore"),wr.delete(n),i.terminate())}(this),Promise.resolve()}}function Lu(t,e,n,i={}){var r;const s=(t=Nu(t,Io))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&vu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=S.MOCK_USER;else{a=Wo(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const h=i.mockUserToken.sub||i.mockUserToken.user_id;if(!h)throw new R(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new S(h)}t._authCredentials=new Au(new vo(a,c))}}/**
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
 */class Mu{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new ku(this,"async_queue_retry"),this.Xa=()=>{const n=wn();n&&N("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=wn();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=wn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Te;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!yo(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(i=>{this.Ha=i,this.Ja=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw _i("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ja=!1,i))));return this.Wa=n,n}enqueueAfterDelay(e,n,i){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const r=Ri.createAndSchedule(this,e,n,i,s=>this.ru(s));return this.ja.push(r),r}eu(){this.Ha&&Ci()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}class Uu extends Io{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=function(){return new Mu}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ju(this),this._firestoreClient.terminate()}}function xu(t,e){const n=typeof t=="object"?t:Nr(),i=typeof t=="string"?t:e||"(default)",r=zn(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Go("firestore");s&&Lu(r,...s)}return r}function ju(t){var e,n,i;const r=t._freezeSettings(),s=function(a,c,h,u){return new Ru(a,c,h,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ao(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Du(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}(function(e,n=!0){(function(r){gt=r})(Re),_e(new ue("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new Uu(new Iu(i.getProvider("auth-internal")),new _u(i.getProvider("app-check-internal")),function(h,u){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new R(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ft(h.options.projectId,u)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ie(Ir,"4.1.0",e),ie(Ir,"4.1.0","esm2017")})();const Fu={apiKey:"AIzaSyA-2vOA4b3zy4HmUepySpDPR8zKgKfhAME",authDomain:"read-easy-a785a.firebaseapp.com",projectId:"read-easy-a785a",storageBucket:"read-easy-a785a.appspot.com",messagingSenderId:"672240774710",appId:"1:672240774710:web:1093f9e83dded932d97297",measurementId:"G-PFEBLXEB67"},ki=Pr(Fu);xu(ki);gs(ki);const Vu=async(t,e)=>th(gs(ki),t,e);export{Vu as s};
