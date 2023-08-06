(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const $s=t=>t.map(({title:e,url:n,img:i},r)=>`<li>
        <a class ="funds-href" href="${n}" target="_blank">
            <div class="funds-number">${(r+1).toString().padStart(2,0)}</>
            <img class="funds-img" src="${i}" alt="${e}"/>
        </a>
      </li>
      `).join(""),dc=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"./img/fund-01.png"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"./img/fund-02.png"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"./img/fund-03.png"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"./img/fund-04.png"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"./img/fund-05.png"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"./img/fund-06.png"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"./img/fund-07.png"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"./img/fund-08.png"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"./img/fund-09.png"}],zs=document.querySelector(".bf");zs.addEventListener("click",$s);zs.insertAdjacentHTML("beforeend",$s(dc));function Vs(t,e){return function(){return t.apply(e,arguments)}}const{toString:fc}=Object.prototype,{getPrototypeOf:Wi}=Object,Tn=(t=>e=>{const n=fc.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),ue=t=>(t=t.toLowerCase(),e=>Tn(e)===t),kn=t=>e=>typeof e===t,{isArray:Xe}=Array,gt=kn("undefined");function pc(t){return t!==null&&!gt(t)&&t.constructor!==null&&!gt(t.constructor)&&X(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Ws=ue("ArrayBuffer");function gc(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Ws(t.buffer),e}const mc=kn("string"),X=kn("function"),qs=kn("number"),An=t=>t!==null&&typeof t=="object",yc=t=>t===!0||t===!1,Qt=t=>{if(Tn(t)!=="object")return!1;const e=Wi(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},vc=ue("Date"),_c=ue("File"),wc=ue("Blob"),Ec=ue("FileList"),Ic=t=>An(t)&&X(t.pipe),bc=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||X(t.append)&&((e=Tn(t))==="formdata"||e==="object"&&X(t.toString)&&t.toString()==="[object FormData]"))},Tc=ue("URLSearchParams"),kc=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Rt(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Xe(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let a;for(i=0;i<o;i++)a=s[i],e.call(null,t[a],a,t)}}function Ks(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Gs=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Js=t=>!gt(t)&&t!==Gs;function Ii(){const{caseless:t}=Js(this)&&this||{},e={},n=(i,r)=>{const s=t&&Ks(e,r)||r;Qt(e[s])&&Qt(i)?e[s]=Ii(e[s],i):Qt(i)?e[s]=Ii({},i):Xe(i)?e[s]=i.slice():e[s]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Rt(arguments[i],n);return e}const Ac=(t,e,n,{allOwnKeys:i}={})=>(Rt(e,(r,s)=>{n&&X(r)?t[s]=Vs(r,n):t[s]=r},{allOwnKeys:i}),t),Sc=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Cc=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},Rc=(t,e,n,i)=>{let r,s,o;const a={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)o=r[s],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Wi(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},xc=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},Nc=t=>{if(!t)return null;if(Xe(t))return t;let e=t.length;if(!qs(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},Pc=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Wi(Uint8Array)),Oc=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},Dc=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Lc=ue("HTMLFormElement"),Mc=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),zr=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Uc=ue("RegExp"),Xs=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Rt(n,(r,s)=>{e(r,s,t)!==!1&&(i[s]=r)}),Object.defineProperties(t,i)},Fc=t=>{Xs(t,(e,n)=>{if(X(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(X(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Bc=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Xe(t)?i(t):i(String(t).split(e)),n},jc=()=>{},Hc=(t,e)=>(t=+t,Number.isFinite(t)?t:e),ni="abcdefghijklmnopqrstuvwxyz",Vr="0123456789",Ys={DIGIT:Vr,ALPHA:ni,ALPHA_DIGIT:ni+ni.toUpperCase()+Vr},$c=(t=16,e=Ys.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function zc(t){return!!(t&&X(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Vc=t=>{const e=new Array(10),n=(i,r)=>{if(An(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const s=Xe(i)?[]:{};return Rt(i,(o,a)=>{const l=n(o,r+1);!gt(l)&&(s[a]=l)}),e[r]=void 0,s}}return i};return n(t,0)},Wc=ue("AsyncFunction"),qc=t=>t&&(An(t)||X(t))&&X(t.then)&&X(t.catch),h={isArray:Xe,isArrayBuffer:Ws,isBuffer:pc,isFormData:bc,isArrayBufferView:gc,isString:mc,isNumber:qs,isBoolean:yc,isObject:An,isPlainObject:Qt,isUndefined:gt,isDate:vc,isFile:_c,isBlob:wc,isRegExp:Uc,isFunction:X,isStream:Ic,isURLSearchParams:Tc,isTypedArray:Pc,isFileList:Ec,forEach:Rt,merge:Ii,extend:Ac,trim:kc,stripBOM:Sc,inherits:Cc,toFlatObject:Rc,kindOf:Tn,kindOfTest:ue,endsWith:xc,toArray:Nc,forEachEntry:Oc,matchAll:Dc,isHTMLForm:Lc,hasOwnProperty:zr,hasOwnProp:zr,reduceDescriptors:Xs,freezeMethods:Fc,toObjectSet:Bc,toCamelCase:Mc,noop:jc,toFiniteNumber:Hc,findKey:Ks,global:Gs,isContextDefined:Js,ALPHABET:Ys,generateString:$c,isSpecCompliantForm:zc,toJSONObject:Vc,isAsyncFn:Wc,isThenable:qc};function k(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}h.inherits(k,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:h.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Qs=k.prototype,Zs={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Zs[t]={value:t}});Object.defineProperties(k,Zs);Object.defineProperty(Qs,"isAxiosError",{value:!0});k.from=(t,e,n,i,r,s)=>{const o=Object.create(Qs);return h.toFlatObject(t,o,function(l){return l!==Error.prototype},a=>a!=="isAxiosError"),k.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const Kc=null;function bi(t){return h.isPlainObject(t)||h.isArray(t)}function eo(t){return h.endsWith(t,"[]")?t.slice(0,-2):t}function Wr(t,e,n){return t?t.concat(e).map(function(r,s){return r=eo(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function Gc(t){return h.isArray(t)&&!t.some(bi)}const Jc=h.toFlatObject(h,{},null,function(e){return/^is[A-Z]/.test(e)});function Sn(t,e,n){if(!h.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=h.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,L){return!h.isUndefined(L[v])});const i=n.metaTokens,r=n.visitor||u,s=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&h.isSpecCompliantForm(e);if(!h.isFunction(r))throw new TypeError("visitor must be a function");function c(p){if(p===null)return"";if(h.isDate(p))return p.toISOString();if(!l&&h.isBlob(p))throw new k("Blob is not supported. Use a Buffer instead.");return h.isArrayBuffer(p)||h.isTypedArray(p)?l&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,v,L){let g=p;if(p&&!L&&typeof p=="object"){if(h.endsWith(v,"{}"))v=i?v:v.slice(0,-2),p=JSON.stringify(p);else if(h.isArray(p)&&Gc(p)||(h.isFileList(p)||h.endsWith(v,"[]"))&&(g=h.toArray(p)))return v=eo(v),g.forEach(function(b,Q){!(h.isUndefined(b)||b===null)&&e.append(o===!0?Wr([v],Q,s):o===null?v:v+"[]",c(b))}),!1}return bi(p)?!0:(e.append(Wr(L,v,s),c(p)),!1)}const d=[],E=Object.assign(Jc,{defaultVisitor:u,convertValue:c,isVisitable:bi});function y(p,v){if(!h.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(p),h.forEach(p,function(g,I){(!(h.isUndefined(g)||g===null)&&r.call(e,g,h.isString(I)?I.trim():I,v,E))===!0&&y(g,v?v.concat(I):[I])}),d.pop()}}if(!h.isObject(t))throw new TypeError("data must be an object");return y(t),e}function qr(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function qi(t,e){this._pairs=[],t&&Sn(t,this,e)}const to=qi.prototype;to.append=function(e,n){this._pairs.push([e,n])};to.toString=function(e){const n=e?function(i){return e.call(this,i,qr)}:qr;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function Xc(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function no(t,e,n){if(!e)return t;const i=n&&n.encode||Xc,r=n&&n.serialize;let s;if(r?s=r(e,n):s=h.isURLSearchParams(e)?e.toString():new qi(e,n).toString(i),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Yc{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){h.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Kr=Yc,io={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Qc=typeof URLSearchParams<"u"?URLSearchParams:qi,Zc=typeof FormData<"u"?FormData:null,el=typeof Blob<"u"?Blob:null,tl=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),nl=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),re={isBrowser:!0,classes:{URLSearchParams:Qc,FormData:Zc,Blob:el},isStandardBrowserEnv:tl,isStandardBrowserWebWorkerEnv:nl,protocols:["http","https","file","blob","url","data"]};function il(t,e){return Sn(t,new re.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,s){return re.isNode&&h.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function rl(t){return h.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function sl(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function ro(t){function e(n,i,r,s){let o=n[s++];const a=Number.isFinite(+o),l=s>=n.length;return o=!o&&h.isArray(r)?r.length:o,l?(h.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!a):((!r[o]||!h.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],s)&&h.isArray(r[o])&&(r[o]=sl(r[o])),!a)}if(h.isFormData(t)&&h.isFunction(t.entries)){const n={};return h.forEachEntry(t,(i,r)=>{e(rl(i),r,n,0)}),n}return null}const ol={"Content-Type":void 0};function al(t,e,n){if(h.isString(t))try{return(e||JSON.parse)(t),h.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Cn={transitional:io,adapter:["xhr","http"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=h.isObject(e);if(s&&h.isHTMLForm(e)&&(e=new FormData(e)),h.isFormData(e))return r&&r?JSON.stringify(ro(e)):e;if(h.isArrayBuffer(e)||h.isBuffer(e)||h.isStream(e)||h.isFile(e)||h.isBlob(e))return e;if(h.isArrayBufferView(e))return e.buffer;if(h.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return il(e,this.formSerializer).toString();if((a=h.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Sn(a?{"files[]":e}:e,l&&new l,this.formSerializer)}}return s||r?(n.setContentType("application/json",!1),al(e)):e}],transformResponse:[function(e){const n=this.transitional||Cn.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(e&&h.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?k.from(a,k.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:re.classes.FormData,Blob:re.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};h.forEach(["delete","get","head"],function(e){Cn.headers[e]={}});h.forEach(["post","put","patch"],function(e){Cn.headers[e]=h.merge(ol)});const Ki=Cn,cl=h.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ll=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&cl[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Gr=Symbol("internals");function ot(t){return t&&String(t).trim().toLowerCase()}function Zt(t){return t===!1||t==null?t:h.isArray(t)?t.map(Zt):String(t)}function ul(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const hl=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function ii(t,e,n,i,r){if(h.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!h.isString(e)){if(h.isString(i))return e.indexOf(i)!==-1;if(h.isRegExp(i))return i.test(e)}}function dl(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function fl(t,e){const n=h.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,s,o){return this[i].call(this,e,r,s,o)},configurable:!0})})}class Rn{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(a,l,c){const u=ot(l);if(!u)throw new Error("header name must be a non-empty string");const d=h.findKey(r,u);(!d||r[d]===void 0||c===!0||c===void 0&&r[d]!==!1)&&(r[d||l]=Zt(a))}const o=(a,l)=>h.forEach(a,(c,u)=>s(c,u,l));return h.isPlainObject(e)||e instanceof this.constructor?o(e,n):h.isString(e)&&(e=e.trim())&&!hl(e)?o(ll(e),n):e!=null&&s(n,e,i),this}get(e,n){if(e=ot(e),e){const i=h.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return ul(r);if(h.isFunction(n))return n.call(this,r,i);if(h.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ot(e),e){const i=h.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||ii(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(o){if(o=ot(o),o){const a=h.findKey(i,o);a&&(!n||ii(i,i[a],a,n))&&(delete i[a],r=!0)}}return h.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||ii(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i={};return h.forEach(this,(r,s)=>{const o=h.findKey(i,s);if(o){n[o]=Zt(r),delete n[s];return}const a=e?dl(s):String(s).trim();a!==s&&delete n[s],n[a]=Zt(r),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return h.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&h.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Gr]=this[Gr]={accessors:{}}).accessors,r=this.prototype;function s(o){const a=ot(o);i[a]||(fl(r,o),i[a]=!0)}return h.isArray(e)?e.forEach(s):s(e),this}}Rn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);h.freezeMethods(Rn.prototype);h.freezeMethods(Rn);const pe=Rn;function ri(t,e){const n=this||Ki,i=e||n,r=pe.from(i.headers);let s=i.data;return h.forEach(t,function(a){s=a.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function so(t){return!!(t&&t.__CANCEL__)}function xt(t,e,n){k.call(this,t??"canceled",k.ERR_CANCELED,e,n),this.name="CanceledError"}h.inherits(xt,k,{__CANCEL__:!0});function pl(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new k("Request failed with status code "+n.status,[k.ERR_BAD_REQUEST,k.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const gl=re.isStandardBrowserEnv?function(){return{write:function(n,i,r,s,o,a){const l=[];l.push(n+"="+encodeURIComponent(i)),h.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),h.isString(s)&&l.push("path="+s),h.isString(o)&&l.push("domain="+o),a===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const i=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function ml(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function yl(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function oo(t,e){return t&&!ml(e)?yl(t,e):e}const vl=re.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function r(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(o){const a=h.isString(o)?r(o):o;return a.protocol===i.protocol&&a.host===i.host}}():function(){return function(){return!0}}();function _l(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function wl(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[s];o||(o=c),n[r]=l,i[r]=c;let d=s,E=0;for(;d!==r;)E+=n[d++],d=d%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),c-o<e)return;const y=u&&c-u;return y?Math.round(E*1e3/y):void 0}}function Jr(t,e){let n=0;const i=wl(50,250);return r=>{const s=r.loaded,o=r.lengthComputable?r.total:void 0,a=s-n,l=i(a),c=s<=o;n=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:l||void 0,estimated:l&&o&&c?(o-s)/l:void 0,event:r};u[e?"download":"upload"]=!0,t(u)}}const El=typeof XMLHttpRequest<"u",Il=El&&function(t){return new Promise(function(n,i){let r=t.data;const s=pe.from(t.headers).normalize(),o=t.responseType;let a;function l(){t.cancelToken&&t.cancelToken.unsubscribe(a),t.signal&&t.signal.removeEventListener("abort",a)}h.isFormData(r)&&(re.isStandardBrowserEnv||re.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(t.auth){const y=t.auth.username||"",p=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(y+":"+p))}const u=oo(t.baseURL,t.url);c.open(t.method.toUpperCase(),no(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout;function d(){if(!c)return;const y=pe.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:t,request:c};pl(function(g){n(g),l()},function(g){i(g),l()},v),c=null}if("onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(i(new k("Request aborted",k.ECONNABORTED,t,c)),c=null)},c.onerror=function(){i(new k("Network Error",k.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let p=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||io;t.timeoutErrorMessage&&(p=t.timeoutErrorMessage),i(new k(p,v.clarifyTimeoutError?k.ETIMEDOUT:k.ECONNABORTED,t,c)),c=null},re.isStandardBrowserEnv){const y=(t.withCredentials||vl(u))&&t.xsrfCookieName&&gl.read(t.xsrfCookieName);y&&s.set(t.xsrfHeaderName,y)}r===void 0&&s.setContentType(null),"setRequestHeader"in c&&h.forEach(s.toJSON(),function(p,v){c.setRequestHeader(v,p)}),h.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),o&&o!=="json"&&(c.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&c.addEventListener("progress",Jr(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Jr(t.onUploadProgress)),(t.cancelToken||t.signal)&&(a=y=>{c&&(i(!y||y.type?new xt(null,t,c):y),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(a),t.signal&&(t.signal.aborted?a():t.signal.addEventListener("abort",a)));const E=_l(u);if(E&&re.protocols.indexOf(E)===-1){i(new k("Unsupported protocol "+E+":",k.ERR_BAD_REQUEST,t));return}c.send(r||null)})},en={http:Kc,xhr:Il};h.forEach(en,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const bl={getAdapter:t=>{t=h.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=h.isString(n)?en[n.toLowerCase()]:n));r++);if(!i)throw i===!1?new k(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(h.hasOwnProp(en,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!h.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:en};function si(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new xt(null,t)}function Xr(t){return si(t),t.headers=pe.from(t.headers),t.data=ri.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),bl.getAdapter(t.adapter||Ki.adapter)(t).then(function(i){return si(t),i.data=ri.call(t,t.transformResponse,i),i.headers=pe.from(i.headers),i},function(i){return so(i)||(si(t),i&&i.response&&(i.response.data=ri.call(t,t.transformResponse,i.response),i.response.headers=pe.from(i.response.headers))),Promise.reject(i)})}const Yr=t=>t instanceof pe?t.toJSON():t;function Ke(t,e){e=e||{};const n={};function i(c,u,d){return h.isPlainObject(c)&&h.isPlainObject(u)?h.merge.call({caseless:d},c,u):h.isPlainObject(u)?h.merge({},u):h.isArray(u)?u.slice():u}function r(c,u,d){if(h.isUndefined(u)){if(!h.isUndefined(c))return i(void 0,c,d)}else return i(c,u,d)}function s(c,u){if(!h.isUndefined(u))return i(void 0,u)}function o(c,u){if(h.isUndefined(u)){if(!h.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,d){if(d in e)return i(c,u);if(d in t)return i(void 0,c)}const l={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(c,u)=>r(Yr(c),Yr(u),!0)};return h.forEach(Object.keys(Object.assign({},t,e)),function(u){const d=l[u]||r,E=d(t[u],e[u],u);h.isUndefined(E)&&d!==a||(n[u]=E)}),n}const ao="1.4.0",Gi={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Gi[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Qr={};Gi.transitional=function(e,n,i){function r(s,o){return"[Axios v"+ao+"] Transitional option '"+s+"'"+o+(i?". "+i:"")}return(s,o,a)=>{if(e===!1)throw new k(r(o," has been removed"+(n?" in "+n:"")),k.ERR_DEPRECATED);return n&&!Qr[o]&&(Qr[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function Tl(t,e,n){if(typeof t!="object")throw new k("options must be an object",k.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],o=e[s];if(o){const a=t[s],l=a===void 0||o(a,s,t);if(l!==!0)throw new k("option "+s+" must be "+l,k.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new k("Unknown option "+s,k.ERR_BAD_OPTION)}}const Ti={assertOptions:Tl,validators:Gi},ve=Ti.validators;class an{constructor(e){this.defaults=e,this.interceptors={request:new Kr,response:new Kr}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ke(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Ti.assertOptions(i,{silentJSONParsing:ve.transitional(ve.boolean),forcedJSONParsing:ve.transitional(ve.boolean),clarifyTimeoutError:ve.transitional(ve.boolean)},!1),r!=null&&(h.isFunction(r)?n.paramsSerializer={serialize:r}:Ti.assertOptions(r,{encode:ve.function,serialize:ve.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=s&&h.merge(s.common,s[n.method]),o&&h.forEach(["delete","get","head","post","put","patch","common"],p=>{delete s[p]}),n.headers=pe.concat(o,s);const a=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let u,d=0,E;if(!l){const p=[Xr.bind(this),void 0];for(p.unshift.apply(p,a),p.push.apply(p,c),E=p.length,u=Promise.resolve(n);d<E;)u=u.then(p[d++],p[d++]);return u}E=a.length;let y=n;for(d=0;d<E;){const p=a[d++],v=a[d++];try{y=p(y)}catch(L){v.call(this,L);break}}try{u=Xr.call(this,y)}catch(p){return Promise.reject(p)}for(d=0,E=c.length;d<E;)u=u.then(c[d++],c[d++]);return u}getUri(e){e=Ke(this.defaults,e);const n=oo(e.baseURL,e.url);return no(n,e.params,e.paramsSerializer)}}h.forEach(["delete","get","head","options"],function(e){an.prototype[e]=function(n,i){return this.request(Ke(i||{},{method:e,url:n,data:(i||{}).data}))}});h.forEach(["post","put","patch"],function(e){function n(i){return function(s,o,a){return this.request(Ke(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}an.prototype[e]=n(),an.prototype[e+"Form"]=n(!0)});const tn=an;class Ji{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const o=new Promise(a=>{i.subscribe(a),s=a}).then(r);return o.cancel=function(){i.unsubscribe(s)},o},e(function(s,o,a){i.reason||(i.reason=new xt(s,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Ji(function(r){e=r}),cancel:e}}}const kl=Ji;function Al(t){return function(n){return t.apply(null,n)}}function Sl(t){return h.isObject(t)&&t.isAxiosError===!0}const ki={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ki).forEach(([t,e])=>{ki[e]=t});const Cl=ki;function co(t){const e=new tn(t),n=Vs(tn.prototype.request,e);return h.extend(n,tn.prototype,e,{allOwnKeys:!0}),h.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return co(Ke(t,r))},n}const P=co(Ki);P.Axios=tn;P.CanceledError=xt;P.CancelToken=kl;P.isCancel=so;P.VERSION=ao;P.toFormData=Sn;P.AxiosError=k;P.Cancel=P.CanceledError;P.all=function(e){return Promise.all(e)};P.spread=Al;P.isAxiosError=Sl;P.mergeConfig=Ke;P.AxiosHeaders=pe;P.formToJSON=t=>ro(h.isHTMLForm(t)?new FormData(t):t);P.HttpStatusCode=Cl;P.default=P;const xn=P,Nn="https://books-backend.p.goit.global/",Rl="books/category-list",xl="books/top-books",Nl="books/category",Pl="books/",Ol=async()=>await xn.get(Nn+Rl),Dl=async()=>await xn.get(Nn+xl),Ll=async t=>{const e={category:t},n=new URLSearchParams(e);return await xn.get(`${Nn}${Nl}/?${n}`)},Ml=async t=>await xn.get(`${Nn}${Pl}/${t}`),Xi={openModalBtnEl:document.querySelector(".js-modal-book-open"),modalEl:document.querySelector(".js-modal-book-backdrop"),shoppingListBtnEl:document.querySelector(".js-modal-book-localstostorage-add-btn")};Xi.openModalBtnEl.addEventListener("click",Ul);Xi.modalEl.addEventListener("click",Fl);async function Ul(t){try{const e=await Ml(t),n=Bl(e);modalEl.innerHTL=n,Yi(),document.addEventListener("keydown",lo)}catch{}}function Fl(t){(t.target.classList.contains("js-modal-book-backdrop")||t.target.closest(".js-modal-book-close-btn"))&&Yi()}function lo(t){t.code==="Escape"&&(Yi(),document.removeEventListener("keydown",lo))}function Yi(){Xi.modalEl.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function Bl(t){const{book_image:e,list_name:n,author:i,description:r,buy_links:s}=t,o=s.map(a=>a);return` <div class="modal-book">
    <button type="button" class="modal-book-close-btn js-modal-book-close-btn">
      <svg class="modal-book-close-svg">
        <use href="./img/sprite.svg#close"></use>
      </svg>
    </button>
    <div class="modal-book-wrap">
      <img src="${e}" alt="${n}" class="modal-book-img" />
      <div class="modal-book-info-wrap">
        <h2 class="modal-book-name">${n}</h2>
        <p class="modal-book-autor">${i}</p>
        <p class="modal-book-info">
         ${r}
        </p>
        <div class="modal-book-linc-box">
          <a href="${o.url}" class="modal-book-linc" target="_blank">
            <img src="./img/shop1.png" alt="${o.name}" class="modal-book-linc-icon" />
          </a>
          <a href="" class="modal-book-linc" target="_blank">
            <img src="./img/shop2.png" alt="" class="modal-book-linc-icon" />
          </a>
          <a href="" class="modal-book-linc" target="_blank">
            <img src="./img/shop3.png" alt="" class="modal-book-linc-icon" />
          </a>
        </div>
      </div>
    </div>
    <button class="modal-book-ls-btn js-modal-book-localstostorage-add-btn">
      add to shopping list
    </button>
  </div>`}const De={openModalBtn:document.querySelector(".js-authorization-open"),closeModalBtn:document.querySelector(".js-authorization-close"),modal:document.querySelector(".js-authorization-modal"),backdrop:document.querySelector(".js-authorization-backdrop")};De.openModalBtn.addEventListener("click",uo);De.closeModalBtn.addEventListener("click",uo);document.addEventListener("keydown",ho);De.modal.addEventListener("click",jl);function uo(){De.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function ho(t){t.key==="Escape"&&(De.modal.classList.toggle("is-hidden"),document.removeEventListener("keydown",ho))}function jl(t){t.target===De.backdrop&&De.modal.classList.toggle("is-hidden")}/**
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
 */const fo=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Hl=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},po={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let E=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(E=64)),i.push(n[u],n[d],n[E],n[y])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fo(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Hl(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const d=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw new $l;const E=s<<2|a>>4;if(i.push(E),c!==64){const y=a<<4&240|c>>2;if(i.push(y),d!==64){const p=c<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $l extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zl=function(t){const e=fo(t);return po.encodeByteArray(e,!0)},cn=function(t){return zl(t).replace(/\./g,"")},go=function(t){try{return po.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Wl=()=>Vl().__FIREBASE_DEFAULTS__,ql=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kl=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&go(t[1]);return e&&JSON.parse(e)},Qi=()=>{try{return Wl()||ql()||Kl()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mo=t=>{var e,n;return(n=(e=Qi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gl=t=>{const e=mo(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},yo=()=>{var t;return(t=Qi())===null||t===void 0?void 0:t.config},vo=t=>{var e;return(e=Qi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Jl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Xl(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[cn(JSON.stringify(n)),cn(JSON.stringify(o)),a].join(".")}/**
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
 */function W(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(W())}function Ql(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Zl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eu(){const t=W();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tu(){try{return typeof indexedDB=="object"}catch{return!1}}function nu(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const iu="FirebaseError";class ye extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=iu,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nt.prototype.create)}}class Nt{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?ru(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ye(r,a,i)}}function ru(t,e){return t.replace(su,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const su=/\{\$([^}]+)}/g;function ou(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ln(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],o=e[r];if(Zr(s)&&Zr(o)){if(!ln(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Zr(t){return t!==null&&typeof t=="object"}/**
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
 */function Pt(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function lt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function ut(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function au(t,e){const n=new cu(t,e);return n.subscribe.bind(n)}class cu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");lu(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=oi),r.error===void 0&&(r.error=oi),r.complete===void 0&&(r.complete=oi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lu(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oi(){}/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}class Le{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Re="[DEFAULT]";/**
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
 */class uu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Jl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(du(e))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=Re){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Re){return this.instances.has(e)}getOptions(e=Re){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&e(o,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:hu(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Re){return this.component?this.component.multipleInstances?e:Re:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hu(t){return t===Re?void 0:t}function du(t){return t.instantiationMode==="EAGER"}/**
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
 */class fu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var A;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(A||(A={}));const pu={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},gu=A.INFO,mu={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},yu=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=mu[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zi{constructor(e){this.name=e,this._logLevel=gu,this._logHandler=yu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}const vu=(t,e)=>e.some(n=>t instanceof n);let es,ts;function _u(){return es||(es=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wu(){return ts||(ts=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _o=new WeakMap,Ai=new WeakMap,wo=new WeakMap,ai=new WeakMap,er=new WeakMap;function Eu(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Te(t.result)),r()},o=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_o.set(n,t)}).catch(()=>{}),er.set(e,t),e}function Iu(t){if(Ai.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ai.set(t,e)}let Si={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ai.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Te(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bu(t){Si=t(Si)}function Tu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(ci(this),e,...n);return wo.set(i,e.sort?e.sort():[e]),Te(i)}:wu().includes(t)?function(...e){return t.apply(ci(this),e),Te(_o.get(this))}:function(...e){return Te(t.apply(ci(this),e))}}function ku(t){return typeof t=="function"?Tu(t):(t instanceof IDBTransaction&&Iu(t),vu(t,_u())?new Proxy(t,Si):t)}function Te(t){if(t instanceof IDBRequest)return Eu(t);if(ai.has(t))return ai.get(t);const e=ku(t);return e!==t&&(ai.set(t,e),er.set(e,t)),e}const ci=t=>er.get(t);function Au(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=Te(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Te(o.result),l.oldVersion,l.newVersion,Te(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Su=["get","getKey","getAll","getAllKeys","count"],Cu=["put","add","delete","clear"],li=new Map;function ns(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(li.get(e))return li.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=Cu.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||Su.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return li.set(e,s),s}bu(t=>({...t,get:(e,n,i)=>ns(e,n)||t.get(e,n,i),has:(e,n)=>!!ns(e,n)||t.has(e,n)}));/**
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
 */class Ru{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xu(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function xu(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ci="@firebase/app",is="0.9.15";/**
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
 */const Me=new Zi("@firebase/app"),Nu="@firebase/app-compat",Pu="@firebase/analytics-compat",Ou="@firebase/analytics",Du="@firebase/app-check-compat",Lu="@firebase/app-check",Mu="@firebase/auth",Uu="@firebase/auth-compat",Fu="@firebase/database",Bu="@firebase/database-compat",ju="@firebase/functions",Hu="@firebase/functions-compat",$u="@firebase/installations",zu="@firebase/installations-compat",Vu="@firebase/messaging",Wu="@firebase/messaging-compat",qu="@firebase/performance",Ku="@firebase/performance-compat",Gu="@firebase/remote-config",Ju="@firebase/remote-config-compat",Xu="@firebase/storage",Yu="@firebase/storage-compat",Qu="@firebase/firestore",Zu="@firebase/firestore-compat",eh="firebase",th="10.1.0";/**
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
 */const Ri="[DEFAULT]",nh={[Ci]:"fire-core",[Nu]:"fire-core-compat",[Ou]:"fire-analytics",[Pu]:"fire-analytics-compat",[Lu]:"fire-app-check",[Du]:"fire-app-check-compat",[Mu]:"fire-auth",[Uu]:"fire-auth-compat",[Fu]:"fire-rtdb",[Bu]:"fire-rtdb-compat",[ju]:"fire-fn",[Hu]:"fire-fn-compat",[$u]:"fire-iid",[zu]:"fire-iid-compat",[Vu]:"fire-fcm",[Wu]:"fire-fcm-compat",[qu]:"fire-perf",[Ku]:"fire-perf-compat",[Gu]:"fire-rc",[Ju]:"fire-rc-compat",[Xu]:"fire-gcs",[Yu]:"fire-gcs-compat",[Qu]:"fire-fst",[Zu]:"fire-fst-compat","fire-js":"fire-js",[eh]:"fire-js-all"};/**
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
 */const un=new Map,xi=new Map;function ih(t,e){try{t.container.addComponent(e)}catch(n){Me.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ge(t){const e=t.name;if(xi.has(e))return Me.debug(`There were multiple attempts to register component ${e}.`),!1;xi.set(e,t);for(const n of un.values())ih(n,t);return!0}function tr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const rh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ke=new Nt("app","Firebase",rh);/**
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
 */class sh{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ke.create("app-deleted",{appName:this._name})}}/**
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
 */const Ye=th;function Eo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ri,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw ke.create("bad-app-name",{appName:String(r)});if(n||(n=yo()),!n)throw ke.create("no-options");const s=un.get(r);if(s){if(ln(n,s.options)&&ln(i,s.config))return s;throw ke.create("duplicate-app",{appName:r})}const o=new fu(r);for(const l of xi.values())o.addComponent(l);const a=new sh(n,i,o);return un.set(r,a),a}function Io(t=Ri){const e=un.get(t);if(!e&&t===Ri&&yo())return Eo();if(!e)throw ke.create("no-app",{appName:t});return e}function Ae(t,e,n){var i;let r=(i=nh[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Me.warn(a.join(" "));return}Ge(new Le(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const oh="firebase-heartbeat-database",ah=1,mt="firebase-heartbeat-store";let ui=null;function bo(){return ui||(ui=Au(oh,ah,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(mt)}}}).catch(t=>{throw ke.create("idb-open",{originalErrorMessage:t.message})})),ui}async function ch(t){try{return await(await bo()).transaction(mt).objectStore(mt).get(To(t))}catch(e){if(e instanceof ye)Me.warn(e.message);else{const n=ke.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Me.warn(n.message)}}}async function rs(t,e){try{const i=(await bo()).transaction(mt,"readwrite");await i.objectStore(mt).put(e,To(t)),await i.done}catch(n){if(n instanceof ye)Me.warn(n.message);else{const i=ke.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Me.warn(i.message)}}}function To(t){return`${t.name}!${t.options.appId}`}/**
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
 */const lh=1024,uh=30*24*60*60*1e3;class hh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fh(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ss();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(r=>r.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=uh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ss(),{heartbeatsToSend:n,unsentEntries:i}=dh(this._heartbeatsCache.heartbeats),r=cn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ss(){return new Date().toISOString().substring(0,10)}function dh(t,e=lh){const n=[];let i=t.slice();for(const r of t){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),os(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),os(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class fh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tu()?nu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ch(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return rs(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return rs(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function os(t){return cn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function ph(t){Ge(new Le("platform-logger",e=>new Ru(e),"PRIVATE")),Ge(new Le("heartbeat",e=>new hh(e),"PRIVATE")),Ae(Ci,is,t),Ae(Ci,is,"esm2017"),Ae("fire-js","")}ph("");var gh="firebase",mh="10.1.0";/**
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
 */Ae(gh,mh,"app");function nr(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}function ko(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yh=ko,Ao=new Nt("auth","Firebase",ko());/**
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
 */const hn=new Zi("@firebase/auth");function vh(t,...e){hn.logLevel<=A.WARN&&hn.warn(`Auth (${Ye}): ${t}`,...e)}function nn(t,...e){hn.logLevel<=A.ERROR&&hn.error(`Auth (${Ye}): ${t}`,...e)}/**
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
 */function te(t,...e){throw ir(t,...e)}function ae(t,...e){return ir(t,...e)}function _h(t,e,n){const i=Object.assign(Object.assign({},yh()),{[e]:n});return new Nt("auth","Firebase",i).create(e,{appName:t.name})}function ir(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Ao.create(t,...e)}function _(t,e,...n){if(!t)throw ir(e,...n)}function he(t){const e="INTERNAL ASSERTION FAILED: "+t;throw nn(e),new Error(e)}function ge(t,e){t||he(e)}/**
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
 */function Ni(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wh(){return as()==="http:"||as()==="https:"}function as(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Eh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wh()||Ql()||"connection"in navigator)?navigator.onLine:!0}function Ih(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ot{constructor(e,n){this.shortDelay=e,this.longDelay=n,ge(n>e,"Short delay should be less than long delay!"),this.isMobile=Yl()||Zl()}get(){return Eh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rr(t,e){ge(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class So{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;he("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;he("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;he("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const bh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Th=new Ot(3e4,6e4);function Qe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ze(t,e,n,i,r={}){return Co(t,r,async()=>{let s={},o={};i&&(e==="GET"?o=i:s={body:JSON.stringify(i)});const a=Pt(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),So.fetch()(Ro(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Co(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},bh),e);try{const r=new kh(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Kt(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kt(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Kt(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Kt(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _h(t,u,c);te(t,u)}}catch(r){if(r instanceof ye)throw r;te(t,"network-request-failed",{message:String(r)})}}async function Dt(t,e,n,i,r={}){const s=await Ze(t,e,n,i,r);return"mfaPendingCredential"in s&&te(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ro(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?rr(t.config,r):`${t.config.apiScheme}://${r}`}class kh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ae(this.auth,"network-request-failed")),Th.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kt(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ae(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */async function Ah(t,e){return Ze(t,"POST","/v1/accounts:delete",e)}async function Sh(t,e){return Ze(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ft(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ch(t,e=!1){const n=Be(t),i=await n.getIdToken(e),r=sr(i);_(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:ft(hi(r.auth_time)),issuedAtTime:ft(hi(r.iat)),expirationTime:ft(hi(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hi(t){return Number(t)*1e3}function sr(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return nn("JWT malformed, contained fewer than 3 sections"),null;try{const r=go(n);return r?JSON.parse(r):(nn("Failed to decode base64 JWT payload"),null)}catch(r){return nn("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Rh(t){const e=sr(t);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function yt(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof ye&&xh(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function xh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Nh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ft(this.lastLoginAt),this.creationTime=ft(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function dn(t){var e;const n=t.auth,i=await t.getIdToken(),r=await yt(t,Sh(n,{idToken:i}));_(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Dh(s.providerUserInfo):[],a=Oh(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xo(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Ph(t){const e=Be(t);await dn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Oh(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function Dh(t){return t.map(e=>{var{providerId:n}=e,i=nr(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Lh(t,e){const n=await Co(t,{},async()=>{const i=Pt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,o=Ro(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",So.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class vt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await Lh(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new vt;return i&&(_(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),r&&(_(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&(_(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vt,this.toJSON())}_performRefresh(){return he("not implemented")}}/**
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
 */function _e(t,e){_(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pe{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=nr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await yt(this,this.stsTokenManager.getToken(this.auth,e));return _(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ch(this,e)}reload(){return Ph(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await dn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yt(this,Ah(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,o,a,l,c,u;const d=(i=n.displayName)!==null&&i!==void 0?i:void 0,E=(r=n.email)!==null&&r!==void 0?r:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(c=n.createdAt)!==null&&c!==void 0?c:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:Q,isAnonymous:ne,providerData:q,stsTokenManager:B}=n;_(b&&B,e,"internal-error");const m=vt.fromJSON(this.name,B);_(typeof b=="string",e,"internal-error"),_e(d,e.name),_e(E,e.name),_(typeof Q=="boolean",e,"internal-error"),_(typeof ne=="boolean",e,"internal-error"),_e(y,e.name),_e(p,e.name),_e(v,e.name),_e(L,e.name),_e(g,e.name),_e(I,e.name);const M=new Pe({uid:b,auth:e,email:E,emailVerified:Q,displayName:d,isAnonymous:ne,photoURL:p,phoneNumber:y,tenantId:v,stsTokenManager:m,createdAt:g,lastLoginAt:I});return q&&Array.isArray(q)&&(M.providerData=q.map(N=>Object.assign({},N))),L&&(M._redirectEventId=L),M}static async _fromIdTokenResponse(e,n,i=!1){const r=new vt;r.updateFromServerResponse(n);const s=new Pe({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await dn(s),s}}/**
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
 */const cs=new Map;function de(t){ge(t instanceof Function,"Expected a class definition");let e=cs.get(t);return e?(ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cs.set(t,e),e)}/**
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
 */class No{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}No.type="NONE";const ls=No;/**
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
 */function rn(t,e,n){return`firebase:${t}:${e}:${n}`}class ze{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=rn(this.userKey,r.apiKey,s),this.fullPersistenceKey=rn("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ze(de(ls),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||de(ls);const o=rn(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Pe._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ze(s,e,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ze(s,e,i))}}/**
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
 */function us(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Do(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Po(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mo(e))return"Blackberry";if(Uo(e))return"Webos";if(or(e))return"Safari";if((e.includes("chrome/")||Oo(e))&&!e.includes("edge/"))return"Chrome";if(Lo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Po(t=W()){return/firefox\//i.test(t)}function or(t=W()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Oo(t=W()){return/crios\//i.test(t)}function Do(t=W()){return/iemobile/i.test(t)}function Lo(t=W()){return/android/i.test(t)}function Mo(t=W()){return/blackberry/i.test(t)}function Uo(t=W()){return/webos/i.test(t)}function Pn(t=W()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Mh(t=W()){var e;return Pn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Uh(){return eu()&&document.documentMode===10}function Fo(t=W()){return Pn(t)||Lo(t)||Uo(t)||Mo(t)||/windows phone/i.test(t)||Do(t)}function Fh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Bo(t,e=[]){let n;switch(t){case"Browser":n=us(W());break;case"Worker":n=`${us(W())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ye}/${i}`}async function jo(t,e){return Ze(t,"GET","/v2/recaptchaConfig",Qe(t,e))}function hs(t){return t!==void 0&&t.enterprise!==void 0}class Ho{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Bh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $o(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=ae("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",Bh().appendChild(i)})}function jh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Hh="https://www.google.com/recaptcha/enterprise.js?render=",$h="recaptcha-enterprise",zh="NO_RECAPTCHA";class zo{constructor(e){this.type=$h,this.auth=et(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{jo(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ho(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function r(s,o,a){const l=window.grecaptcha;hs(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(zh)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{i(this.auth).then(a=>{if(!n&&hs(window.grecaptcha))r(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}$o(Hh+a).then(()=>{r(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function fn(t,e,n,i=!1){const r=new zo(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Vh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class Wh{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ds(this),this.idTokenSubscription=new ds(this),this.beforeStateQueue=new Vh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ao,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=de(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await ze.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await dn(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ih()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Be(e):null;return n&&_(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(de(e))})}async initializeRecaptchaConfig(){const e=await jo(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Ho(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new zo(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nt("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&de(e)||this._popupRedirectResolver;_(n,this,"argument-error"),this.redirectPersistenceManager=await ze.create(this,[de(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return _(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,i,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function et(t){return Be(t)}class ds{constructor(e){this.auth=e,this.observer=null,this.addObserver=au(n=>this.observer=n)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function qh(t,e){const n=tr(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(ln(s,e??{}))return r;te(r,"already-initialized")}return n.initialize({options:e})}function Kh(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(de);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Gh(t,e,n){const i=et(t);_(i._canInitEmulator,i,"emulator-config-failed"),_(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Vo(e),{host:o,port:a}=Jh(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${s}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Xh()}function Vo(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Jh(t){const e=Vo(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:fs(i.substr(s.length+1))}}else{const[s,o]=i.split(":");return{host:s,port:fs(o)}}}function fs(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Xh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ar{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return he("not implemented")}_getIdTokenResponse(e){return he("not implemented")}_linkToIdToken(e,n){return he("not implemented")}_getReauthenticationResolver(e){return he("not implemented")}}async function Yh(t,e){return Ze(t,"POST","/v1/accounts:update",e)}/**
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
 */async function di(t,e){return Dt(t,"POST","/v1/accounts:signInWithPassword",Qe(t,e))}/**
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
 */async function Qh(t,e){return Dt(t,"POST","/v1/accounts:signInWithEmailLink",Qe(t,e))}async function Zh(t,e){return Dt(t,"POST","/v1/accounts:signInWithEmailLink",Qe(t,e))}/**
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
 */class _t extends ar{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new _t(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new _t(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const r=await fn(e,i,"signInWithPassword");return di(e,r)}else return di(e,i).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await fn(e,i,"signInWithPassword");return di(e,s)}else return Promise.reject(r)});case"emailLink":return Qh(e,{email:this._email,oobCode:this._password});default:te(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Yh(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Zh(e,{idToken:n,email:this._email,oobCode:this._password});default:te(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ve(t,e){return Dt(t,"POST","/v1/accounts:signInWithIdp",Qe(t,e))}/**
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
 */const ed="http://localhost";class Ue extends ar{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ue(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):te("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=nr(n,["providerId","signInMethod"]);if(!i||!r)return null;const o=new Ue(i,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ve(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ve(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ve(e,n)}buildRequest(){const e={requestUri:ed,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pt(n)}return e}}/**
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
 */function td(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nd(t){const e=lt(ut(t)).link,n=e?lt(ut(e)).deep_link_id:null,i=lt(ut(t)).deep_link_id;return(i?lt(ut(i)).link:null)||i||n||e||t}class cr{constructor(e){var n,i,r,s,o,a;const l=lt(ut(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=td((r=l.mode)!==null&&r!==void 0?r:null);_(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=nd(e);try{return new cr(n)}catch{return null}}}/**
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
 */class tt{constructor(){this.providerId=tt.PROVIDER_ID}static credential(e,n){return _t._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=cr.parseLink(n);return _(i,"argument-error"),_t._fromEmailAndCode(e,i.code,i.tenantId)}}tt.PROVIDER_ID="password";tt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";tt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Wo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lt extends Wo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class we extends Lt{constructor(){super("facebook.com")}static credential(e){return Ue._fromParams({providerId:we.PROVIDER_ID,signInMethod:we.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return we.credentialFromTaggedObject(e)}static credentialFromError(e){return we.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return we.credential(e.oauthAccessToken)}catch{return null}}}we.FACEBOOK_SIGN_IN_METHOD="facebook.com";we.PROVIDER_ID="facebook.com";/**
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
 */class Ee extends Lt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ue._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Ee.credential(n,i)}catch{return null}}}Ee.GOOGLE_SIGN_IN_METHOD="google.com";Ee.PROVIDER_ID="google.com";/**
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
 */class Ie extends Lt{constructor(){super("github.com")}static credential(e){return Ue._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ie.credential(e.oauthAccessToken)}catch{return null}}}Ie.GITHUB_SIGN_IN_METHOD="github.com";Ie.PROVIDER_ID="github.com";/**
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
 */class be extends Lt{constructor(){super("twitter.com")}static credential(e,n){return Ue._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return be.credentialFromTaggedObject(e)}static credentialFromError(e){return be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return be.credential(n,i)}catch{return null}}}be.TWITTER_SIGN_IN_METHOD="twitter.com";be.PROVIDER_ID="twitter.com";/**
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
 */async function fi(t,e){return Dt(t,"POST","/v1/accounts:signUp",Qe(t,e))}/**
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
 */class Fe{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Pe._fromIdTokenResponse(e,i,r),o=ps(i);return new Fe({user:s,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=ps(i);return new Fe({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function ps(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class pn extends ye{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,pn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new pn(e,n,i,r)}}function qo(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?pn._fromErrorAndOperation(t,s,e,i):s})}async function id(t,e,n=!1){const i=await yt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Fe._forOperation(t,"link",i)}/**
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
 */async function rd(t,e,n=!1){const{auth:i}=t,r="reauthenticate";try{const s=await yt(t,qo(i,r,e,t),n);_(s.idToken,i,"internal-error");const o=sr(s.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(t.uid===a,i,"user-mismatch"),Fe._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&te(i,"user-mismatch"),s}}/**
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
 */async function Ko(t,e,n=!1){const i="signIn",r=await qo(t,i,e),s=await Fe._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function sd(t,e){return Ko(et(t),e)}async function od(t,e,n){var i;const r=et(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=r._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const c=await fn(r,s,"signUpPassword");o=fi(r,c)}else o=fi(r,s).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await fn(r,s,"signUpPassword");return fi(r,u)}else return Promise.reject(c)});const a=await o.catch(c=>Promise.reject(c)),l=await Fe._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function ad(t,e,n){return sd(Be(t),tt.credential(e,n))}function cd(t,e,n,i){return Be(t).onIdTokenChanged(e,n,i)}function ld(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}const gn="__sak";/**
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
 */class Go{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gn,"1"),this.storage.removeItem(gn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function ud(){const t=W();return or(t)||Pn(t)}const hd=1e3,dd=10;class Jo extends Go{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ud()&&Fh(),this.fallbackToPolling=Fo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},s=this.storage.getItem(i);Uh()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,dd):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},hd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jo.type="LOCAL";const fd=Jo;/**
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
 */class Xo extends Go{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xo.type="SESSION";const Yo=Xo;/**
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
 */function pd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class On{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new On(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await pd(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}On.receivers=[];/**
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
 */function lr(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class gd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=lr("",20);r.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:r,onMessage(d){const E=d;if(E.data.eventId===c)switch(E.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(E.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ce(){return window}function md(t){ce().location.href=t}/**
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
 */function Qo(){return typeof ce().WorkerGlobalScope<"u"&&typeof ce().importScripts=="function"}async function yd(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vd(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function _d(){return Qo()?self:null}/**
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
 */const Zo="firebaseLocalStorageDb",wd=1,mn="firebaseLocalStorage",ea="fbase_key";class Mt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dn(t,e){return t.transaction([mn],e?"readwrite":"readonly").objectStore(mn)}function Ed(){const t=indexedDB.deleteDatabase(Zo);return new Mt(t).toPromise()}function Pi(){const t=indexedDB.open(Zo,wd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(mn,{keyPath:ea})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(mn)?e(i):(i.close(),await Ed(),e(await Pi()))})})}async function gs(t,e,n){const i=Dn(t,!0).put({[ea]:e,value:n});return new Mt(i).toPromise()}async function Id(t,e){const n=Dn(t,!1).get(e),i=await new Mt(n).toPromise();return i===void 0?null:i.value}function ms(t,e){const n=Dn(t,!0).delete(e);return new Mt(n).toPromise()}const bd=800,Td=3;class ta{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pi(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Td)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=On._getInstance(_d()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await yd(),!this.activeServiceWorker)return;this.sender=new gd(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pi();return await gs(e,gn,"1"),await ms(e,gn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>gs(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Id(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ms(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Dn(r,!1).getAll();return new Mt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ta.type="LOCAL";const kd=ta;new Ot(3e4,6e4);/**
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
 */function Ad(t,e){return e?de(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ur extends ar{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ve(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ve(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ve(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Sd(t){return Ko(t.auth,new ur(t),t.bypassAuthState)}function Cd(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),rd(n,new ur(t),t.bypassAuthState)}async function Rd(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),id(n,new ur(t),t.bypassAuthState)}/**
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
 */class na{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sd;case"linkViaPopup":case"linkViaRedirect":return Rd;case"reauthViaPopup":case"reauthViaRedirect":return Cd;default:te(this.auth,"internal-error")}}resolve(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xd=new Ot(2e3,1e4);class He extends na{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,He.currentPopupAction&&He.currentPopupAction.cancel(),He.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){ge(this.filter.length===1,"Popup operations only handle one event");const e=lr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,He.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xd.get())};e()}}He.currentPopupAction=null;/**
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
 */const Nd="pendingRedirect",sn=new Map;class Pd extends na{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=sn.get(this.auth._key());if(!e){try{const i=await Od(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}sn.set(this.auth._key(),e)}return this.bypassAuthState||sn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Od(t,e){const n=Md(e),i=Ld(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}function Dd(t,e){sn.set(t._key(),e)}function Ld(t){return de(t._redirectPersistence)}function Md(t){return rn(Nd,t.config.apiKey,t.name)}async function Ud(t,e,n=!1){const i=et(t),r=Ad(i,e),o=await new Pd(i,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Fd=10*60*1e3;class Bd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jd(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!ia(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ae(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Fd&&this.cachedEventUids.clear(),this.cachedEventUids.has(ys(e))}saveEventToCache(e){this.cachedEventUids.add(ys(e)),this.lastProcessedEventTime=Date.now()}}function ys(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ia({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jd(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ia(t);default:return!1}}/**
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
 */async function Hd(t,e={}){return Ze(t,"GET","/v1/projects",e)}/**
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
 */const $d=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zd=/^https?/;async function Vd(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hd(t);for(const n of e)try{if(Wd(n))return}catch{}te(t,"unauthorized-domain")}function Wd(t){const e=Ni(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!zd.test(n))return!1;if($d.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const qd=new Ot(3e4,6e4);function vs(){const t=ce().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Kd(t){return new Promise((e,n)=>{var i,r,s;function o(){vs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vs(),n(ae(t,"network-request-failed"))},timeout:qd.get()})}if(!((r=(i=ce().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=ce().gapi)===null||s===void 0)&&s.load)o();else{const a=jh("iframefcb");return ce()[a]=()=>{gapi.load?o():n(ae(t,"network-request-failed"))},$o(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw on=null,e})}let on=null;function Gd(t){return on=on||Kd(t),on}/**
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
 */const Jd=new Ot(5e3,15e3),Xd="__/auth/iframe",Yd="emulator/auth/iframe",Qd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ef(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rr(e,Yd):`https://${t.config.authDomain}/${Xd}`,i={apiKey:e.apiKey,appName:t.name,v:Ye},r=Zd.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Pt(i).slice(1)}`}async function tf(t){const e=await Gd(t),n=ce().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:ef(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qd,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const o=ae(t,"network-request-failed"),a=ce().setTimeout(()=>{s(o)},Jd.get());function l(){ce().clearTimeout(a),r(i)}i.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const nf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rf=500,sf=600,of="_blank",af="http://localhost";class _s{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cf(t,e,n,i=rf,r=sf){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},nf),{width:i.toString(),height:r.toString(),top:s,left:o}),c=W().toLowerCase();n&&(a=Oo(c)?of:n),Po(c)&&(e=e||af,l.scrollbars="yes");const u=Object.entries(l).reduce((E,[y,p])=>`${E}${y}=${p},`,"");if(Mh(c)&&a!=="_self")return lf(e||"",a),new _s(null);const d=window.open(e||"",a,u);_(d,t,"popup-blocked");try{d.focus()}catch{}return new _s(d)}function lf(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const uf="__/auth/handler",hf="emulator/auth/handler",df=encodeURIComponent("fac");async function ws(t,e,n,i,r,s){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ye,eventId:r};if(e instanceof Wo){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ou(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(s||{}))o[u]=d}if(e instanceof Lt){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${df}=${encodeURIComponent(l)}`:"";return`${ff(t)}?${Pt(a).slice(1)}${c}`}function ff({config:t}){return t.emulator?rr(t,hf):`https://${t.authDomain}/${uf}`}/**
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
 */const pi="webStorageSupport";class pf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yo,this._completeRedirectFn=Ud,this._overrideRedirectResult=Dd}async _openPopup(e,n,i,r){var s;ge((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await ws(e,n,i,Ni(),r);return cf(e,o,lr())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await ws(e,n,i,Ni(),r);return md(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(ge(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await tf(e),i=new Bd(e);return n.register("authEvent",r=>(_(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pi,{type:pi},r=>{var s;const o=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[pi];o!==void 0&&n(!!o),te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vd(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fo()||or()||Pn()}}const gf=pf;var Es="@firebase/auth",Is="1.1.0";/**
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
 */class mf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yf(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vf(t){Ge(new Le("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bo(t)},c=new Wh(i,r,s,l);return Kh(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Ge(new Le("auth-internal",e=>{const n=et(e.getProvider("auth").getImmediate());return(i=>new mf(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ae(Es,Is,yf(t)),Ae(Es,Is,"esm2017")}/**
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
 */const _f=5*60,wf=vo("authIdTokenMaxAge")||_f;let bs=null;const Ef=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>wf)return;const r=n==null?void 0:n.token;bs!==r&&(bs=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function hr(t=Io()){const e=tr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qh(t,{popupRedirectResolver:gf,persistence:[kd,fd,Yo]}),i=vo("authTokenSyncURL");if(i){const s=Ef(i);ld(n,s,()=>s(n.currentUser)),cd(n,o=>s(o))}const r=mo("auth");return r&&Gh(n,`http://${r}`),n}vf("Browser");var If=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},f,dr=dr||{},w=If||self;function Ln(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ut(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function bf(t){return Object.prototype.hasOwnProperty.call(t,gi)&&t[gi]||(t[gi]=++Tf)}var gi="closure_uid_"+(1e9*Math.random()>>>0),Tf=0;function kf(t,e,n){return t.call.apply(t.bind,arguments)}function Af(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,i),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function z(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?z=kf:z=Af,z.apply(null,arguments)}function Gt(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function D(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,r,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(i,o)}}function Se(){this.s=this.s,this.o=this.o}var Sf=0;Se.prototype.s=!1;Se.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Sf!=0)&&bf(this)};Se.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ra=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function fr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ts(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Ln(i)){const r=t.length||0,s=i.length||0;t.length=r+s;for(let o=0;o<s;o++)t[r+o]=i[o]}else t.push(i)}}function V(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}V.prototype.h=function(){this.defaultPrevented=!0};var Cf=function(){if(!w.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{w.addEventListener("test",()=>{},e),w.removeEventListener("test",()=>{},e)}catch{}return t}();function wt(t){return/^[\s\xa0]*$/.test(t)}function Mn(){var t=w.navigator;return t&&(t=t.userAgent)?t:""}function ie(t){return Mn().indexOf(t)!=-1}function pr(t){return pr[" "](t),t}pr[" "]=function(){};function Rf(t,e){var n=Ip;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var xf=ie("Opera"),Et=ie("Trident")||ie("MSIE"),sa=ie("Edge"),Oi=sa||Et,oa=ie("Gecko")&&!(Mn().toLowerCase().indexOf("webkit")!=-1&&!ie("Edge"))&&!(ie("Trident")||ie("MSIE"))&&!ie("Edge"),Nf=Mn().toLowerCase().indexOf("webkit")!=-1&&!ie("Edge");function aa(){var t=w.document;return t?t.documentMode:void 0}e:{var ks="",mi=function(){var t=Mn();if(oa)return/rv:([^\);]+)(\)|;)/.exec(t);if(sa)return/Edge\/([\d\.]+)/.exec(t);if(Et)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Nf)return/WebKit\/(\S+)/.exec(t);if(xf)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(mi&&(ks=mi?mi[1]:""),Et){var As=aa();if(As!=null&&As>parseFloat(ks))break e}}w.document&&Et&&aa();function It(t,e){if(V.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(oa){e:{try{pr(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Pf[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&It.$.h.call(this)}}D(It,V);var Pf={2:"touch",3:"pen",4:"mouse"};It.prototype.h=function(){It.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ft="closure_listenable_"+(1e6*Math.random()|0),Of=0;function Df(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++Of,this.fa=this.ia=!1}function Un(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function gr(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Lf(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function ca(t){const e={};for(const n in t)e[n]=t[n];return e}const Ss="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function la(t,e){let n,i;for(let r=1;r<arguments.length;r++){i=arguments[r];for(n in i)t[n]=i[n];for(let s=0;s<Ss.length;s++)n=Ss[s],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Fn(t){this.src=t,this.g={},this.h=0}Fn.prototype.add=function(t,e,n,i,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Li(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Df(e,this.src,s,!!i,r),e.ia=n,t.push(e)),e};function Di(t,e){var n=e.type;if(n in t.g){var i=t.g[n],r=ra(i,e),s;(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(Un(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Li(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}var mr="closure_lm_"+(1e6*Math.random()|0),yi={};function ua(t,e,n,i,r){if(i&&i.once)return da(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ua(t,e[s],n,i,r);return null}return n=_r(n),t&&t[Ft]?t.O(e,n,Ut(i)?!!i.capture:!!i,r):ha(t,e,n,!1,i,r)}function ha(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=Ut(r)?!!r.capture:!!r,a=vr(t);if(a||(t[mr]=a=new Fn(t)),n=a.add(e,n,i,o,s),n.proxy)return n;if(i=Mf(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Cf||(r=o),r===void 0&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(pa(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Mf(){function t(n){return e.call(t.src,t.listener,n)}const e=Uf;return t}function da(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)da(t,e[s],n,i,r);return null}return n=_r(n),t&&t[Ft]?t.P(e,n,Ut(i)?!!i.capture:!!i,r):ha(t,e,n,!0,i,r)}function fa(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)fa(t,e[s],n,i,r);else i=Ut(i)?!!i.capture:!!i,n=_r(n),t&&t[Ft]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Li(s,n,i,r),-1<n&&(Un(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=vr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Li(e,n,i,r)),(n=-1<t?e[t]:null)&&yr(n))}function yr(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ft])Di(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(pa(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=vr(e))?(Di(n,t),n.h==0&&(n.src=null,e[mr]=null)):Un(t)}}}function pa(t){return t in yi?yi[t]:yi[t]="on"+t}function Uf(t,e){if(t.fa)t=!0;else{e=new It(e,this);var n=t.listener,i=t.la||t.src;t.ia&&yr(t),t=n.call(i,e)}return t}function vr(t){return t=t[mr],t instanceof Fn?t:null}var vi="__closure_events_fn_"+(1e9*Math.random()>>>0);function _r(t){return typeof t=="function"?t:(t[vi]||(t[vi]=function(e){return t.handleEvent(e)}),t[vi])}function O(){Se.call(this),this.i=new Fn(this),this.S=this,this.J=null}D(O,Se);O.prototype[Ft]=!0;O.prototype.removeEventListener=function(t,e,n,i){fa(this,t,e,n,i)};function F(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new V(e,t);else if(e instanceof V)e.target=e.target||t;else{var r=e;e=new V(i,t),la(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Jt(o,i,!0,e)&&r}if(o=e.g=t,r=Jt(o,i,!0,e)&&r,r=Jt(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)o=e.g=n[s],r=Jt(o,i,!1,e)&&r}O.prototype.N=function(){if(O.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Un(n[i]);delete t.g[e],t.h--}}this.J=null};O.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};O.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function Jt(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Di(t.i,o),r=a.call(l,i)!==!1&&r}}return r&&!i.defaultPrevented}var wr=w.JSON.stringify;class Ff{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Bf(){var t=Er;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jf{constructor(){this.h=this.g=null}add(e,n){const i=ga.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var ga=new Ff(()=>new Hf,t=>t.reset());class Hf{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $f(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function zf(t){w.setTimeout(()=>{throw t},0)}let bt,Tt=!1,Er=new jf,ma=()=>{const t=w.Promise.resolve(void 0);bt=()=>{t.then(Vf)}};var Vf=()=>{for(var t;t=Bf();){try{t.h.call(t.g)}catch(n){zf(n)}var e=ga;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Tt=!1};function Bn(t,e){O.call(this),this.h=t||1,this.g=e||w,this.j=z(this.qb,this),this.l=Date.now()}D(Bn,O);f=Bn.prototype;f.ga=!1;f.T=null;f.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),F(this,"tick"),this.ga&&(Ir(this),this.start()))}};f.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ir(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}f.N=function(){Bn.$.N.call(this),Ir(this),delete this.g};function br(t,e,n){if(typeof t=="function")n&&(t=z(t,n));else if(t&&typeof t.handleEvent=="function")t=z(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:w.setTimeout(t,e||0)}function ya(t){t.g=br(()=>{t.g=null,t.i&&(t.i=!1,ya(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Wf extends Se{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ya(this)}N(){super.N(),this.g&&(w.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kt(t){Se.call(this),this.h=t,this.g={}}D(kt,Se);var Cs=[];function va(t,e,n,i){Array.isArray(n)||(n&&(Cs[0]=n.toString()),n=Cs);for(var r=0;r<n.length;r++){var s=ua(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function _a(t){gr(t.g,function(e,n){this.g.hasOwnProperty(n)&&yr(e)},t),t.g={}}kt.prototype.N=function(){kt.$.N.call(this),_a(this)};kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function jn(){this.g=!0}jn.prototype.Ea=function(){this.g=!1};function qf(t,e,n,i,r,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var d=u.split("_");o=2<=d.length&&d[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+`
`+n+`
`+o})}function Kf(t,e,n,i,r,s,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+o})}function $e(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Jf(t,n)+(i?" "+i:"")})}function Gf(t,e){t.info(function(){return"TIMEOUT: "+e})}jn.prototype.info=function(){};function Jf(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return wr(n)}catch{return e}}var nt={},Rs=null;function Tr(){return Rs=Rs||new O}nt.Ta="serverreachability";function wa(t){V.call(this,nt.Ta,t)}D(wa,V);function At(t){const e=Tr();F(e,new wa(e))}nt.STAT_EVENT="statevent";function Ea(t,e){V.call(this,nt.STAT_EVENT,t),this.stat=e}D(Ea,V);function K(t){const e=Tr();F(e,new Ea(e,t))}nt.Ua="timingevent";function Ia(t,e){V.call(this,nt.Ua,t),this.size=e}D(Ia,V);function Bt(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return w.setTimeout(function(){t()},e)}var kr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Xf={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ar(){}Ar.prototype.h=null;function xs(t){return t.h||(t.h=t.i())}function Yf(){}var jt={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Sr(){V.call(this,"d")}D(Sr,V);function Cr(){V.call(this,"c")}D(Cr,V);var Mi;function Hn(){}D(Hn,Ar);Hn.prototype.g=function(){return new XMLHttpRequest};Hn.prototype.i=function(){return{}};Mi=new Hn;function Ht(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new kt(this),this.P=Qf,t=Oi?125:void 0,this.V=new Bn(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ba}function ba(){this.i=null,this.g="",this.h=!1}var Qf=45e3,Ui={},yn={};f=Ht.prototype;f.setTimeout=function(t){this.P=t};function Fi(t,e,n){t.L=1,t.v=zn(me(e)),t.s=n,t.S=!0,Ta(t,null)}function Ta(t,e){t.G=Date.now(),$t(t),t.A=me(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Pa(n.i,"t",i),t.C=0,n=t.l.J,t.h=new ba,t.g=Za(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Wf(z(t.Pa,t,t.g),t.O)),va(t.U,t.g,"readystatechange",t.nb),e=t.I?ca(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),At(),qf(t.j,t.u,t.A,t.m,t.W,t.s)}f.nb=function(t){t=t.target;const e=this.M;e&&se(t)==3?e.l():this.Pa(t)};f.Pa=function(t){try{if(t==this.g)e:{const u=se(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>u)&&(u!=3||Oi||this.g&&(this.h.h||this.g.ja()||Ds(this.g)))){this.J||u!=4||e==7||(e==8||0>=d?At(3):At(2)),$n(this);var n=this.g.da();this.ca=n;t:if(ka(this)){var i=Ds(this.g);t="";var r=i.length,s=se(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xe(this),pt(this);var o="";break t}this.h.i=new w.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.splice(0,r),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Kf(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wt(a)){var c=a;break t}}c=null}if(n=c)$e(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bi(this,n);else{this.i=!1,this.o=3,K(12),xe(this),pt(this);break e}}this.S?(Aa(this,u,o),Oi&&this.i&&u==3&&(va(this.U,this.V,"tick",this.mb),this.V.start())):($e(this.j,this.m,o,null),Bi(this,o)),u==4&&xe(this),this.i&&!this.J&&(u==4?Ja(this.l,this):(this.i=!1,$t(this)))}else _p(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,K(12)):(this.o=0,K(13)),xe(this),pt(this)}}}catch{}finally{}};function ka(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Aa(t,e,n){let i=!0,r;for(;!t.J&&t.C<n.length;)if(r=Zf(t,n),r==yn){e==4&&(t.o=4,K(14),i=!1),$e(t.j,t.m,null,"[Incomplete Response]");break}else if(r==Ui){t.o=4,K(15),$e(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else $e(t.j,t.m,r,null),Bi(t,r);ka(t)&&r!=yn&&r!=Ui&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,K(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dr(e),e.M=!0,K(11))):($e(t.j,t.m,n,"[Invalid Chunked Response]"),xe(t),pt(t))}f.mb=function(){if(this.g){var t=se(this.g),e=this.g.ja();this.C<e.length&&($n(this),Aa(this,t,e),this.i&&t!=4&&$t(this))}};function Zf(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?yn:(n=Number(e.substring(n,i)),isNaN(n)?Ui:(i+=1,i+n>e.length?yn:(e=e.slice(i,i+n),t.C=i+n,e)))}f.cancel=function(){this.J=!0,xe(this)};function $t(t){t.Y=Date.now()+t.P,Sa(t,t.P)}function Sa(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bt(z(t.lb,t),e)}function $n(t){t.B&&(w.clearTimeout(t.B),t.B=null)}f.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Gf(this.j,this.A),this.L!=2&&(At(),K(17)),xe(this),this.o=2,pt(this)):Sa(this,this.Y-t)};function pt(t){t.l.H==0||t.J||Ja(t.l,t)}function xe(t){$n(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ir(t.V),_a(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Bi(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ji(n.i,t))){if(!t.K&&ji(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var r=i;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)wn(n),Kn(n);else break e;Or(n),K(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=Bt(z(n.ib,n),6e3));if(1>=La(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ne(n,11)}else if((t.K||n.g==t)&&wn(n),!wt(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const d=c[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const E=c[5];E!=null&&typeof E=="number"&&0<E&&(i=1.5*E,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const y=t.g;if(y){const p=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(p){var s=i.i;s.g||p.indexOf("spdy")==-1&&p.indexOf("quic")==-1&&p.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Rr(s,s.h),s.h=null))}if(i.F){const v=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(i.Da=v,C(i.I,i.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=Qa(i,i.J?i.pa:null,i.Y),o.K){Ma(i.i,o);var a=o,l=i.L;l&&a.setTimeout(l),a.B&&($n(a),$t(a)),i.g=o}else Ka(i);0<n.j.length&&Gn(n)}else c[0]!="stop"&&c[0]!="close"||Ne(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Ne(n,7):Pr(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}At(4)}catch{}}function ep(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ln(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function tp(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ln(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Ca(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ln(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tp(t),i=ep(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}var Ra=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function np(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Oe(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Oe){this.h=t.h,vn(this,t.j),this.s=t.s,this.g=t.g,_n(this,t.m),this.l=t.l;var e=t.i,n=new St;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ns(this,n),this.o=t.o}else t&&(e=String(t).match(Ra))?(this.h=!1,vn(this,e[1]||"",!0),this.s=ht(e[2]||""),this.g=ht(e[3]||"",!0),_n(this,e[4]),this.l=ht(e[5]||"",!0),Ns(this,e[6]||"",!0),this.o=ht(e[7]||"")):(this.h=!1,this.i=new St(null,this.h))}Oe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(dt(e,Ps,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(dt(e,Ps,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(dt(n,n.charAt(0)=="/"?sp:rp,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",dt(n,ap)),t.join("")};function me(t){return new Oe(t)}function vn(t,e,n){t.j=n?ht(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _n(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ns(t,e,n){e instanceof St?(t.i=e,cp(t.i,t.h)):(n||(e=dt(e,op)),t.i=new St(e,t.h))}function C(t,e,n){t.i.set(e,n)}function zn(t){return C(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ht(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function dt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ip),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ip(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Ps=/[#\/\?@]/g,rp=/[#\?:]/g,sp=/[#\?]/g,op=/[#\?@]/g,ap=/#/g;function St(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ce(t){t.g||(t.g=new Map,t.h=0,t.i&&np(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}f=St.prototype;f.add=function(t,e){Ce(this),this.i=null,t=it(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function xa(t,e){Ce(t),e=it(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Na(t,e){return Ce(t),e=it(t,e),t.g.has(e)}f.forEach=function(t,e){Ce(this),this.g.forEach(function(n,i){n.forEach(function(r){t.call(e,r,i,this)},this)},this)};f.ta=function(){Ce(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let s=0;s<r.length;s++)n.push(e[i])}return n};f.Z=function(t){Ce(this);let e=[];if(typeof t=="string")Na(this,t)&&(e=e.concat(this.g.get(it(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};f.set=function(t,e){return Ce(this),this.i=null,t=it(this,t),Na(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};f.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Pa(t,e,n){xa(t,e),0<n.length&&(t.i=null,t.g.set(it(t,e),fr(n)),t.h+=n.length)}f.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;o[i]!==""&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};function it(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function cp(t,e){e&&!t.j&&(Ce(t),t.i=null,t.g.forEach(function(n,i){var r=i.toLowerCase();i!=r&&(xa(this,i),Pa(this,r,n))},t)),t.j=e}var lp=class{constructor(t,e){this.g=t,this.map=e}};function Oa(t){this.l=t||up,w.PerformanceNavigationTiming?(t=w.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(w.g&&w.g.Ka&&w.g.Ka()&&w.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var up=10;function Da(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function La(t){return t.h?1:t.g?t.g.size:0}function ji(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rr(t,e){t.g?t.g.add(e):t.h=e}function Ma(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Oa.prototype.cancel=function(){if(this.i=Ua(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ua(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return fr(t.i)}var hp=class{stringify(t){return w.JSON.stringify(t,void 0)}parse(t){return w.JSON.parse(t,void 0)}};function dp(){this.g=new hp}function fp(t,e,n){const i=n||"";try{Ca(t,function(r,s){let o=r;Ut(r)&&(o=wr(r)),e.push(i+s+"="+encodeURIComponent(o))})}catch(r){throw e.push(i+"type="+encodeURIComponent("_badmap")),r}}function pp(t,e){const n=new jn;if(w.Image){const i=new Image;i.onload=Gt(Xt,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Gt(Xt,n,i,"TestLoadImage: error",!1,e),i.onabort=Gt(Xt,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Gt(Xt,n,i,"TestLoadImage: timeout",!1,e),w.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function Xt(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch{}}function Vn(t){this.l=t.fc||null,this.j=t.ob||!1}D(Vn,Ar);Vn.prototype.g=function(){return new Wn(this.l,this.j)};Vn.prototype.i=function(t){return function(){return t}}({});function Wn(t,e){O.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=xr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}D(Wn,O);var xr=0;f=Wn.prototype;f.open=function(t,e){if(this.readyState!=xr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ct(this)};f.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||w).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};f.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zt(this)),this.readyState=xr};f.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ct(this)),this.g&&(this.readyState=3,Ct(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof w.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fa(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Fa(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}f.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zt(this):Ct(this),this.readyState==3&&Fa(this)}};f.Za=function(t){this.g&&(this.response=this.responseText=t,zt(this))};f.Ya=function(t){this.g&&(this.response=t,zt(this))};f.ka=function(){this.g&&zt(this)};function zt(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ct(t)}f.setRequestHeader=function(t,e){this.v.append(t,e)};f.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};f.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ct(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var gp=w.JSON.parse;function x(t){O.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ba,this.L=this.M=!1}D(x,O);var Ba="",mp=/^https?$/i,yp=["POST","PUT"];f=x.prototype;f.Oa=function(t){this.M=t};f.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Mi.g(),this.C=this.u?xs(this.u):xs(Mi),this.g.onreadystatechange=z(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Os(this,s);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const s of i.keys())n.set(s,i.get(s));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=w.FormData&&t instanceof w.FormData,!(0<=ra(yp,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{$a(this),0<this.B&&((this.L=vp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=z(this.ua,this)):this.A=br(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Os(this,s)}};function vp(t){return Et&&typeof t.timeout=="number"&&t.ontimeout!==void 0}f.ua=function(){typeof dr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,F(this,"timeout"),this.abort(8))};function Os(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ja(t),qn(t)}function ja(t){t.F||(t.F=!0,F(t,"complete"),F(t,"error"))}f.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,F(this,"complete"),F(this,"abort"),qn(this))};f.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qn(this,!0)),x.$.N.call(this)};f.La=function(){this.s||(this.G||this.v||this.l?Ha(this):this.kb())};f.kb=function(){Ha(this)};function Ha(t){if(t.h&&typeof dr<"u"&&(!t.C[1]||se(t)!=4||t.da()!=2)){if(t.v&&se(t)==4)br(t.La,0,t);else if(F(t,"readystatechange"),se(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var r=String(t.I).match(Ra)[1]||null;!r&&w.self&&w.self.location&&(r=w.self.location.protocol.slice(0,-1)),i=!mp.test(r?r.toLowerCase():"")}n=i}if(n)F(t,"complete"),F(t,"success");else{t.m=6;try{var s=2<se(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",ja(t)}}finally{qn(t)}}}}function qn(t,e){if(t.g){$a(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||F(t,"ready");try{n.onreadystatechange=i}catch{}}}function $a(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(w.clearTimeout(t.A),t.A=null)}f.isActive=function(){return!!this.g};function se(t){return t.g?t.g.readyState:0}f.da=function(){try{return 2<se(this)?this.g.status:-1}catch{return-1}};f.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};f.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),gp(e)}};function Ds(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ba:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function _p(t){const e={};t=(t.g&&2<=se(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(wt(t[i]))continue;var n=$f(t[i]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}Lf(e,function(i){return i.join(", ")})}f.Ia=function(){return this.m};f.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function za(t){let e="";return gr(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Nr(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=za(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):C(t,e,n))}function at(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Va(t){this.Ga=0,this.j=[],this.l=new jn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=at("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=at("baseRetryDelayMs",5e3,t),this.hb=at("retryDelaySeedMs",1e4,t),this.eb=at("forwardChannelMaxRetries",2,t),this.xa=at("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new Oa(t&&t.concurrentRequestLimit),this.Ja=new dp,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}f=Va.prototype;f.ra=8;f.H=1;function Pr(t){if(Wa(t),t.H==3){var e=t.W++,n=me(t.I);if(C(n,"SID",t.K),C(n,"RID",e),C(n,"TYPE","terminate"),Vt(t,n),e=new Ht(t,t.l,e),e.L=2,e.v=zn(me(n)),n=!1,w.navigator&&w.navigator.sendBeacon)try{n=w.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&w.Image&&(new Image().src=e.v,n=!0),n||(e.g=Za(e.l,null),e.g.ha(e.v)),e.G=Date.now(),$t(e)}Ya(t)}function Kn(t){t.g&&(Dr(t),t.g.cancel(),t.g=null)}function Wa(t){Kn(t),t.u&&(w.clearTimeout(t.u),t.u=null),wn(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&w.clearTimeout(t.m),t.m=null)}function Gn(t){if(!Da(t.i)&&!t.m){t.m=!0;var e=t.Na;bt||ma(),Tt||(bt(),Tt=!0),Er.add(e,t),t.C=0}}function wp(t,e){return La(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Bt(z(t.Na,t,e),Xa(t,t.C)),t.C++,!0)}f.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new Ht(this,this.l,t);let s=this.s;if(this.U&&(s?(s=ca(s),la(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=qa(this,r,e),n=me(this.I),C(n,"RID",t),C(n,"CVER",22),this.F&&C(n,"X-HTTP-Session-Id",this.F),Vt(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(za(s)))+"&"+e:this.o&&Nr(n,this.o,s)),Rr(this.i,r),this.bb&&C(n,"TYPE","init"),this.P?(C(n,"$req",e),C(n,"SID","null"),r.aa=!0,Fi(r,n,null)):Fi(r,n,e),this.H=2}}else this.H==3&&(t?Ls(this,t):this.j.length==0||Da(this.i)||Ls(this))};function Ls(t,e){var n;e?n=e.m:n=t.W++;const i=me(t.I);C(i,"SID",t.K),C(i,"RID",n),C(i,"AID",t.V),Vt(t,i),t.o&&t.s&&Nr(i,t.o,t.s),n=new Ht(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=qa(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Rr(t.i,n),Fi(n,i,e)}function Vt(t,e){t.na&&gr(t.na,function(n,i){C(e,i,n)}),t.h&&Ca({},function(n,i){C(e,i,n)})}function qa(t,e,n){n=Math.min(t.j.length,n);var i=t.h?z(t.h.Va,t.h,t):null;e:{var r=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=r[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let c=r[l].g;const u=r[l].map;if(c-=s,0>c)s=Math.max(0,r[l].g-100),a=!1;else try{fp(u,o,"req"+c+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function Ka(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;bt||ma(),Tt||(bt(),Tt=!0),Er.add(e,t),t.A=0}}function Or(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Bt(z(t.Ma,t),Xa(t,t.A)),t.A++,!0)}f.Ma=function(){if(this.u=null,Ga(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Bt(z(this.jb,this),t)}};f.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,K(10),Kn(this),Ga(this))};function Dr(t){t.B!=null&&(w.clearTimeout(t.B),t.B=null)}function Ga(t){t.g=new Ht(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=me(t.wa);C(e,"RID","rpc"),C(e,"SID",t.K),C(e,"AID",t.V),C(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&C(e,"TO",t.qa),C(e,"TYPE","xmlhttp"),Vt(t,e),t.o&&t.s&&Nr(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=zn(me(e)),n.s=null,n.S=!0,Ta(n,t)}f.ib=function(){this.v!=null&&(this.v=null,Kn(this),Or(this),K(19))};function wn(t){t.v!=null&&(w.clearTimeout(t.v),t.v=null)}function Ja(t,e){var n=null;if(t.g==e){wn(t),Dr(t),t.g=null;var i=2}else if(ji(t.i,e))n=e.F,Ma(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var r=t.C;i=Tr(),F(i,new Ia(i,n)),Gn(t)}else Ka(t);else if(r=e.o,r==3||r==0&&0<e.ca||!(i==1&&wp(t,e)||i==2&&Or(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Ne(t,5);break;case 4:Ne(t,10);break;case 3:Ne(t,6);break;default:Ne(t,2)}}}function Xa(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ne(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=z(t.pb,t);n||(n=new Oe("//www.google.com/images/cleardot.gif"),w.location&&w.location.protocol=="http"||vn(n,"https"),zn(n)),pp(n.toString(),i)}else K(2);t.H=0,t.h&&t.h.za(e),Ya(t),Wa(t)}f.pb=function(t){t?(this.l.info("Successfully pinged google.com"),K(2)):(this.l.info("Failed to ping google.com"),K(1))};function Ya(t){if(t.H=0,t.ma=[],t.h){const e=Ua(t.i);(e.length!=0||t.j.length!=0)&&(Ts(t.ma,e),Ts(t.ma,t.j),t.i.i.length=0,fr(t.j),t.j.length=0),t.h.ya()}}function Qa(t,e,n){var i=n instanceof Oe?me(n):new Oe(n);if(i.g!="")e&&(i.g=e+"."+i.g),_n(i,i.m);else{var r=w.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Oe(null);i&&vn(s,i),e&&(s.g=e),r&&_n(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&C(i,n,e),C(i,"VER",t.ra),Vt(t,i),i}function Za(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new x(new Vn({ob:!0})):new x(t.va),e.Oa(t.J),e}f.isActive=function(){return!!this.h&&this.h.isActive(this)};function ec(){}f=ec.prototype;f.Ba=function(){};f.Aa=function(){};f.za=function(){};f.ya=function(){};f.isActive=function(){return!0};f.Va=function(){};function Y(t,e){O.call(this),this.g=new Va(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!wt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wt(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new rt(this)}D(Y,O);Y.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;K(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Qa(t,null,t.Y),Gn(t)};Y.prototype.close=function(){Pr(this.g)};Y.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wr(t),t=n);e.j.push(new lp(e.fb++,t)),e.H==3&&Gn(e)};Y.prototype.N=function(){this.g.h=null,delete this.j,Pr(this.g),delete this.g,Y.$.N.call(this)};function tc(t){Sr.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}D(tc,Sr);function nc(){Cr.call(this),this.status=1}D(nc,Cr);function rt(t){this.g=t}D(rt,ec);rt.prototype.Ba=function(){F(this.g,"a")};rt.prototype.Aa=function(t){F(this.g,new tc(t))};rt.prototype.za=function(t){F(this.g,new nc)};rt.prototype.ya=function(){F(this.g,"b")};function Ep(){this.blockSize=-1}function le(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}D(le,Ep);le.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function _i(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[2]+606105819&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[3]+3250441966&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[6]+2821735955&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[7]+4249261313&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[10]+4294925233&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[11]+2304563134&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(s^n&(r^s))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(r^e&(n^r))+i[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=r+(n^s&(e^n))+i[14]+2792965006&4294967295,r=s+(o<<17&4294967295|o>>>15),o=n+(e^r&(s^e))+i[15]+1236535329&4294967295,n=r+(o<<22&4294967295|o>>>10),o=e+(r^s&(n^r))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[11]+643717713&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[0]+3921069994&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[15]+3634488961&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[4]+3889429448&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[3]+4107603335&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[8]+1163531501&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(r^s&(n^r))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^r&(e^n))+i[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=r+(e^n&(s^e))+i[7]+1735328473&4294967295,r=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(r^s))+i[12]+2368359562&4294967295,n=r+(o<<20&4294967295|o>>>12),o=e+(n^r^s)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[11]+1839030562&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[14]+4259657740&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[7]+4139469664&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[10]+3200236656&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[3]+3572445317&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[6]+76029189&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(n^r^s)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^r)+i[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=r+(s^e^n)+i[15]+530742520&4294967295,r=s+(o<<16&4294967295|o>>>16),o=n+(r^s^e)+i[2]+3299628645&4294967295,n=r+(o<<23&4294967295|o>>>9),o=e+(r^(n|~s))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[14]+2878612391&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[5]+4237533241&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[10]+4293915773&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[1]+2240044497&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[6]+2734768916&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[13]+1309151649&4294967295,n=r+(o<<21&4294967295|o>>>11),o=e+(r^(n|~s))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~r))+i[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=r+(e^(s|~n))+i[2]+718787259&4294967295,r=s+(o<<15&4294967295|o>>>17),o=n+(s^(r|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}le.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)_i(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){_i(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){_i(this,i),r=0;break}}this.h=r,this.i+=e};le.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function S(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;i&&s==e||(n[r]=s,i=!1)}this.g=n}var Ip={};function Lr(t){return-128<=t&&128>t?Rf(t,function(e){return new S([e|0],0>e?-1:0)}):new S([t|0],0>t?-1:0)}function oe(t){if(isNaN(t)||!isFinite(t))return We;if(0>t)return U(oe(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Hi;return new S(e,0)}function ic(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return U(ic(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=oe(Math.pow(e,8)),i=We,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),o=parseInt(t.substring(r,r+s),e);8>s?(s=oe(Math.pow(e,s)),i=i.R(s).add(oe(o))):(i=i.R(n),i=i.add(oe(o)))}return i}var Hi=4294967296,We=Lr(0),$i=Lr(1),Ms=Lr(16777216);f=S.prototype;f.ea=function(){if(J(this))return-U(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Hi+i)*e,e*=Hi}return t};f.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(fe(this))return"0";if(J(this))return"-"+U(this).toString(t);for(var e=oe(Math.pow(t,6)),n=this,i="";;){var r=In(n,e).g;n=En(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,fe(n))return s+i;for(;6>s.length;)s="0"+s;i=s+i}};f.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function fe(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function J(t){return t.h==-1}f.X=function(t){return t=En(this,t),J(t)?-1:fe(t)?0:1};function U(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new S(n,~t.h).add($i)}f.abs=function(){return J(this)?U(this):this};f.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(this.D(r)&65535)+(t.D(r)&65535),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new S(n,n[n.length-1]&-2147483648?-1:0)};function En(t,e){return t.add(U(e))}f.R=function(t){if(fe(this)||fe(t))return We;if(J(this))return J(t)?U(this).R(U(t)):U(U(this).R(t));if(J(t))return U(this.R(U(t)));if(0>this.X(Ms)&&0>t.X(Ms))return oe(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(r)>>>16,l=t.D(r)&65535;n[2*i+2*r]+=o*l,Yt(n,2*i+2*r),n[2*i+2*r+1]+=s*l,Yt(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,Yt(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,Yt(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new S(n,0)};function Yt(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ct(t,e){this.g=t,this.h=e}function In(t,e){if(fe(e))throw Error("division by zero");if(fe(t))return new ct(We,We);if(J(t))return e=In(U(t),e),new ct(U(e.g),U(e.h));if(J(e))return e=In(t,U(e)),new ct(U(e.g),e.h);if(30<t.g.length){if(J(t)||J(e))throw Error("slowDivide_ only works with positive integers.");for(var n=$i,i=e;0>=i.X(t);)n=Us(n),i=Us(i);var r=je(n,1),s=je(i,1);for(i=je(i,2),n=je(n,2);!fe(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=je(i,1),n=je(n,1)}return e=En(t,r.R(e)),new ct(r,e)}for(r=We;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),s=oe(n),o=s.R(e);J(o)||0<o.X(t);)n-=i,s=oe(n),o=s.R(e);fe(s)&&(s=$i),r=r.add(s),t=En(t,o)}return new ct(r,t)}f.gb=function(t){return In(this,t).h};f.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new S(n,this.h&t.h)};f.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new S(n,this.h|t.h)};f.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new S(n,this.h^t.h)};function Us(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new S(n,t.h)}function je(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new S(r,t.h)}Y.prototype.send=Y.prototype.u;Y.prototype.open=Y.prototype.m;Y.prototype.close=Y.prototype.close;kr.NO_ERROR=0;kr.TIMEOUT=8;kr.HTTP_ERROR=6;Xf.COMPLETE="complete";Yf.EventType=jt;jt.OPEN="a";jt.CLOSE="b";jt.ERROR="c";jt.MESSAGE="d";O.prototype.listen=O.prototype.O;x.prototype.listenOnce=x.prototype.P;x.prototype.getLastError=x.prototype.Sa;x.prototype.getLastErrorCode=x.prototype.Ia;x.prototype.getStatus=x.prototype.da;x.prototype.getResponseJson=x.prototype.Wa;x.prototype.getResponseText=x.prototype.ja;x.prototype.send=x.prototype.ha;x.prototype.setWithCredentials=x.prototype.Oa;le.prototype.digest=le.prototype.l;le.prototype.reset=le.prototype.reset;le.prototype.update=le.prototype.j;S.prototype.add=S.prototype.add;S.prototype.multiply=S.prototype.R;S.prototype.modulo=S.prototype.gb;S.prototype.compare=S.prototype.X;S.prototype.toNumber=S.prototype.ea;S.prototype.toString=S.prototype.toString;S.prototype.getBits=S.prototype.D;S.fromNumber=oe;S.fromString=ic;var bp=S;const Fs="@firebase/firestore";/**
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
 */class j{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}j.UNAUTHENTICATED=new j(null),j.GOOGLE_CREDENTIALS=new j("google-credentials-uid"),j.FIRST_PARTY=new j("first-party-uid"),j.MOCK_USER=new j("mock-user");/**
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
 */let Wt="10.1.0";/**
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
 */const Je=new Zi("@firebase/firestore");function G(t,...e){if(Je.logLevel<=A.DEBUG){const n=e.map(Ur);Je.debug(`Firestore (${Wt}): ${t}`,...n)}}function Mr(t,...e){if(Je.logLevel<=A.ERROR){const n=e.map(Ur);Je.error(`Firestore (${Wt}): ${t}`,...n)}}function Tp(t,...e){if(Je.logLevel<=A.WARN){const n=e.map(Ur);Je.warn(`Firestore (${Wt}): ${t}`,...n)}}function Ur(t){if(typeof t=="string")return t;try{/**
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
 */function Fr(t="Unexpected state"){const e=`FIRESTORE (${Wt}) INTERNAL ASSERTION FAILED: `+t;throw Mr(e),new Error(e)}function zi(t,e){t||Fr()}/**
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
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends ye{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qe{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class rc{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(j.UNAUTHENTICATED))}shutdown(){}}class Ap{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Sp{constructor(e){this.t=e,this.currentUser=j.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new qe;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new qe,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new qe)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(zi(typeof i.accessToken=="string"),new rc(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return zi(e===null||typeof e=="string"),new j(e)}}class Cp{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=j.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Rp{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new Cp(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(j.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Np{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(zi(typeof n.token=="string"),this.R=n.token,new xp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Pp(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Op{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=Pp(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function sc(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Dp{constructor(e,n,i,r,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class bn{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new bn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof bn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var Bs,T;(T=Bs||(Bs={}))[T.OK=0]="OK",T[T.CANCELLED=1]="CANCELLED",T[T.UNKNOWN=2]="UNKNOWN",T[T.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",T[T.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",T[T.NOT_FOUND=5]="NOT_FOUND",T[T.ALREADY_EXISTS=6]="ALREADY_EXISTS",T[T.PERMISSION_DENIED=7]="PERMISSION_DENIED",T[T.UNAUTHENTICATED=16]="UNAUTHENTICATED",T[T.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",T[T.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",T[T.ABORTED=10]="ABORTED",T[T.OUT_OF_RANGE=11]="OUT_OF_RANGE",T[T.UNIMPLEMENTED=12]="UNIMPLEMENTED",T[T.INTERNAL=13]="INTERNAL",T[T.UNAVAILABLE=14]="UNAVAILABLE",T[T.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new bp([4294967295,4294967295],0);function wi(){return typeof document<"u"?document:null}/**
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
 */class Lp{constructor(e,n,i=1e3,r=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=i,this.bo=r,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),i=Math.max(0,Date.now()-this.Fo),r=Math.max(0,n-i);r>0&&G("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class Br{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new qe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,r,s){const o=Date.now()+i,a=new Br(e,n,o,r,s);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mp(t,e){if(Mr("AsyncQueue",`${e}: ${t}`),sc(t))return new $(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Up{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=j.UNAUTHENTICATED,this.clientId=Op.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new $(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Mp(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}/**
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
 */function oc(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const js=new Map;function Fp(t,e,n,i){if(e===!0&&i===!0)throw new $(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Bp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Fr()}function jp(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bp(t);throw new $(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Hs{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new $(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new $(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Fp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=oc((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ac{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hs({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new $(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new $(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hs(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new kp;switch(i.type){case"firstParty":return new Rp(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new $(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=js.get(n);i&&(G("ComponentProvider","Removing Datastore"),js.delete(n),i.terminate())}(this),Promise.resolve()}}function Hp(t,e,n,i={}){var r;const s=(t=jp(t,ac))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Tp("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=j.MOCK_USER;else{a=Xl(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new $(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new j(c)}t._authCredentials=new Ap(new rc(a,l))}}/**
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
 */class $p{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Lp(this,"async_queue_retry"),this.Xa=()=>{const n=wi();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=wi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=wi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new qe;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!sc(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(i=>{this.Ha=i,this.Ja=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw Mr("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.Ja=!1,i))));return this.Wa=n,n}enqueueAfterDelay(e,n,i){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const r=Br.createAndSchedule(this,e,n,i,s=>this.ru(s));return this.ja.push(r),r}eu(){this.Ha&&Fr()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}class zp extends ac{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=function(){return new $p}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wp(this),this._firestoreClient.terminate()}}function Vp(t,e){const n=typeof t=="object"?t:Io(),i=typeof t=="string"?t:e||"(default)",r=tr(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=Gl("firestore");s&&Hp(r,...s)}return r}function Wp(t){var e,n,i;const r=t._freezeSettings(),s=function(a,l,c,u){return new Dp(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,oc(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new Up(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}(function(e,n=!0){(function(r){Wt=r})(Ye),Ge(new Le("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new zp(new Sp(i.getProvider("auth-internal")),new Np(i.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new $(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new bn(c.options.projectId,u)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ae(Fs,"4.1.0",e),Ae(Fs,"4.1.0","esm2017")})();const qp={apiKey:"AIzaSyA-2vOA4b3zy4HmUepySpDPR8zKgKfhAME",authDomain:"read-easy-a785a.firebaseapp.com",projectId:"read-easy-a785a",storageBucket:"read-easy-a785a.appspot.com",messagingSenderId:"672240774710",appId:"1:672240774710:web:1093f9e83dded932d97297",measurementId:"G-PFEBLXEB67"},Jn=Eo(qp);Vp(Jn);hr(Jn);const Kp=async(t,e)=>od(hr(Jn),t,e),cc=async(t,e)=>ad(hr(Jn),t,e),R={form:document.querySelector(".authorization-form"),name:document.querySelector("#authorization-text"),mail:document.querySelector("#authorization-mail"),password:document.querySelector("#authorization-password"),buttonSignUp:document.querySelector(".authorization-sign-up-btn"),buttonSignIn:document.querySelector(".authorization-sign-in-btn"),link:document.querySelectorAll(".authorization-link")};R.buttonSignUp.addEventListener("click",()=>{const t=Kp(R.mail.value,R.password.value,R.name.value);console.log(t)});R.buttonSignIn.addEventListener("click",()=>{const t=cc(R.mail.value,R.password.value);console.log(t)});R.link[0].addEventListener("click",lc);R.link[1].addEventListener("click",lc);R.link[0].classList.add("authorization-link-active");function lc(t){t.preventDefault(),this===R.link[1]?(R.link[0].classList.remove("authorization-link-active"),R.link[1].classList.add("authorization-link-active"),R.name.classList.add("is-hidden"),R.buttonSignUp.classList.add("is-hidden"),R.buttonSignIn.classList.remove("is-hidden")):this===R.link[0]&&(R.link[1].classList.remove("authorization-link-active"),R.link[0].classList.add("authorization-link-active"),R.name.classList.remove("is-hidden"),R.buttonSignUp.classList.remove("is-hidden"),R.buttonSignIn.classList.add("is-hidden"))}cc("test@g.com","12345678").then(t=>{console.log("signInApp success"),console.log(t)}).catch(t=>{console.log("signInApp wrong")});const Gp=document.querySelector(".js-shopping-remove-btn");Gp.addEventListener("click",shoppingRemove);const Vi=document.getElementById("top-book-container");Vi.innerHTML="";const Jp=t=>{const e=document.createElement("li");e.classList.add("book-thumb","js-book-thumb");const n=document.createElement("img");n.classList.add("img-book","js-img-book"),n.src=t.book_image,n.alt=t.title;const i=document.createElement("p");i.classList.add("book-name","js-book-name"),i.textContent=t.title;const r=document.createElement("p");return r.classList.add("author","js-author"),r.textContent=t.author,e.appendChild(n),e.appendChild(i),e.appendChild(r),e},Xp=t=>{const e=document.createElement("h1");e.classList.add("book-list-title");const n=document.createElement("span");return n.classList.add("spn-books"),n.textContent="Books",e.textContent=t,e.appendChild(n),e};async function uc(){try{const e=(await Dl()).data,n=Xp("Best Sellers");Vi.appendChild(n),e.forEach(i=>{const r=document.createElement("div");r.classList.add("container-top-book");const s=document.createElement("p");s.classList.add("book-category","js-book-cat"),s.textContent=i.list_name,r.appendChild(s);const o=document.createElement("ul");o.classList.add("best-category","js-top-cat"),r.appendChild(o);for(let l=0;l<5;l++)if(i.books[l]){const c=Jp(i.books[l]);o.appendChild(c)}const a=document.createElement("button");a.classList.add("btn-see-more"),a.textContent="SEE MORE",a.type="button",a.dataset.categoryName=i.list_name,r.appendChild(a),Vi.appendChild(r)})}catch(t){console.error("Помилка:",t)}}var Ei=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yp={exports:{}};(function(t){(function(e,n){t.exports=n(e)})(typeof Ei<"u"?Ei:typeof window<"u"?window:Ei,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var n="Notiflix",i=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,r='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',s={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},o,a={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},l=function(g){return console.error("%c "+n+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+g+i)},c=function(g){return g||(g="head"),e.document[g]===null?(l(`
Notiflix needs to be appended to the "<`+g+'>" element, but you called it before the "<'+g+'>" element has been created.'),!1):!0},u=function(g,I){if(!c("head"))return!1;if(g()!==null&&!e.document.getElementById(I)){var b=e.document.createElement("style");b.id=I,b.innerHTML=g(),e.document.head.appendChild(b)}},d=function(){var g={},I=!1,b=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(I=arguments[0],b++);for(var Q=function(ne){for(var q in ne)Object.prototype.hasOwnProperty.call(ne,q)&&(I&&Object.prototype.toString.call(ne[q])==="[object Object]"?g[q]=d(g[q],ne[q]):g[q]=ne[q])};b<arguments.length;b++)Q(arguments[b]);return g},E=function(g){var I=e.document.createElement("div");return I.innerHTML=g,I.textContent||I.innerText||""},y=function(){var g='[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';return g||null},p=0,v=function(g,I,b,Q){if(!c("body"))return!1;o||L.Notify.init({});var ne=d(!0,o,{});if(typeof b=="object"&&!Array.isArray(b)||typeof Q=="object"&&!Array.isArray(Q)){var q={};typeof b=="object"?q=b:typeof Q=="object"&&(q=Q),o=d(!0,o,q)}var B=o[g.toLocaleLowerCase("en")];p++,typeof I!="string"&&(I="Notiflix "+g),o.plainText&&(I=E(I)),!o.plainText&&I.length>o.messageMaxLength&&(o=d(!0,o,{closeButton:!0,messageMaxLength:150}),I='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),I.length>o.messageMaxLength&&(I=I.substring(0,o.messageMaxLength)+"..."),o.fontAwesomeIconStyle==="shadow"&&(B.fontAwesomeIconColor=B.background),o.cssAnimation||(o.cssAnimationDuration=0);var m=e.document.getElementById(a.wrapID)||e.document.createElement("div");if(m.id=a.wrapID,m.style.width=o.width,m.style.zIndex=o.zindex,m.style.opacity=o.opacity,o.position==="center-center"?(m.style.left=o.distance,m.style.top=o.distance,m.style.right=o.distance,m.style.bottom=o.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+o.distance+") - "+o.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):o.position==="center-top"?(m.style.left=o.distance,m.style.right=o.distance,m.style.top=o.distance,m.style.bottom="auto",m.style.margin="auto"):o.position==="center-bottom"?(m.style.left=o.distance,m.style.right=o.distance,m.style.bottom=o.distance,m.style.top="auto",m.style.margin="auto"):o.position==="right-bottom"?(m.style.right=o.distance,m.style.bottom=o.distance,m.style.top="auto",m.style.left="auto"):o.position==="left-top"?(m.style.left=o.distance,m.style.top=o.distance,m.style.right="auto",m.style.bottom="auto"):o.position==="left-bottom"?(m.style.left=o.distance,m.style.bottom=o.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=o.distance,m.style.top=o.distance,m.style.left="auto",m.style.bottom="auto"),o.backOverlay){var M=e.document.getElementById(a.overlayID)||e.document.createElement("div");M.id=a.overlayID,M.style.width="100%",M.style.height="100%",M.style.position="fixed",M.style.zIndex=o.zindex-1,M.style.left=0,M.style.top=0,M.style.right=0,M.style.bottom=0,M.style.background=B.backOverlayColor||o.backOverlayColor,M.className=o.cssAnimation?"nx-with-animation":"",M.style.animationDuration=o.cssAnimation?o.cssAnimationDuration+"ms":"",e.document.getElementById(a.overlayID)||e.document.body.appendChild(M)}e.document.getElementById(a.wrapID)||e.document.body.appendChild(m);var N=e.document.createElement("div");N.id=o.ID+"-"+p,N.className=o.className+" "+B.childClassName+" "+(o.cssAnimation?"nx-with-animation":"")+" "+(o.useIcon?"nx-with-icon":"")+" nx-"+o.cssAnimationStyle+" "+(o.closeButton&&typeof b!="function"?"nx-with-close-button":"")+" "+(typeof b=="function"?"nx-with-callback":"")+" "+(o.clickToClose?"nx-notify-click-to-close":""),N.style.fontSize=o.fontSize,N.style.color=B.textColor,N.style.background=B.background,N.style.borderRadius=o.borderRadius,N.style.pointerEvents="all",o.rtl&&(N.setAttribute("dir","rtl"),N.classList.add("nx-rtl-on")),N.style.fontFamily='"'+o.fontFamily+'", '+r,o.cssAnimation&&(N.style.animationDuration=o.cssAnimationDuration+"ms");var qt="";if(o.closeButton&&typeof b!="function"&&(qt='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+B.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),o.useIcon)if(o.useFontAwesome)N.innerHTML='<i style="color:'+B.fontAwesomeIconColor+"; font-size:"+o.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+B.fontAwesomeClassName+" "+(o.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+I+"</span>"+(o.closeButton?qt:"");else{var st="";g===s.Success?st='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+B.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':g===s.Failure?st='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+B.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':g===s.Warning?st='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+B.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':g===s.Info&&(st='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+B.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),N.innerHTML=st+'<span class="nx-message nx-with-icon">'+I+"</span>"+(o.closeButton?qt:"")}else N.innerHTML='<span class="nx-message">'+I+"</span>"+(o.closeButton?qt:"");if(o.position==="left-bottom"||o.position==="right-bottom"){var jr=e.document.getElementById(a.wrapID);jr.insertBefore(N,jr.firstChild)}else e.document.getElementById(a.wrapID).appendChild(N);var Z=e.document.getElementById(N.id);if(Z){var Xn,Yn,Qn=function(){Z.classList.add("nx-remove");var ee=e.document.getElementById(a.overlayID);ee&&m.childElementCount<=0&&ee.classList.add("nx-remove"),clearTimeout(Xn)},Zn=function(){if(Z&&Z.parentNode!==null&&Z.parentNode.removeChild(Z),m.childElementCount<=0&&m.parentNode!==null){m.parentNode.removeChild(m);var ee=e.document.getElementById(a.overlayID);ee&&ee.parentNode!==null&&ee.parentNode.removeChild(ee)}clearTimeout(Yn)};if(o.closeButton&&typeof b!="function"){var hc=e.document.getElementById(N.id).querySelector("span.nx-close-button");hc.addEventListener("click",function(){Qn();var ee=setTimeout(function(){Zn(),clearTimeout(ee)},o.cssAnimationDuration)})}if((typeof b=="function"||o.clickToClose)&&Z.addEventListener("click",function(){typeof b=="function"&&b(),Qn();var ee=setTimeout(function(){Zn(),clearTimeout(ee)},o.cssAnimationDuration)}),!o.closeButton&&typeof b!="function"){var Hr=function(){Xn=setTimeout(function(){Qn()},o.timeout),Yn=setTimeout(function(){Zn()},o.timeout+o.cssAnimationDuration)};Hr(),o.pauseOnHover&&(Z.addEventListener("mouseenter",function(){Z.classList.add("nx-paused"),clearTimeout(Xn),clearTimeout(Yn)}),Z.addEventListener("mouseleave",function(){Z.classList.remove("nx-paused"),Hr()}))}}if(o.showOnlyTheLastOne&&p>0)for(var $r=e.document.querySelectorAll("[id^="+o.ID+"-]:not([id="+o.ID+"-"+p+"])"),ei=0;ei<$r.length;ei++){var ti=$r[ei];ti.parentNode!==null&&ti.parentNode.removeChild(ti)}o=d(!0,o,ne)},L={Notify:{init:function(g){o=d(!0,a,g),u(y,"NotiflixNotifyInternalCSS")},merge:function(g){if(o)o=d(!0,o,g);else return l("You have to initialize the Notify module before call Merge function."),!1},success:function(g,I,b){v(s.Success,g,I,b)},failure:function(g,I,b){v(s.Failure,g,I,b)},warning:function(g,I,b){v(s.Warning,g,I,b)},info:function(g,I,b){v(s.Info,g,I,b)}}};return typeof e.Notiflix=="object"?d(!0,e.Notiflix,{Notify:L.Notify}):{Notify:L.Notify}})})(Yp);uc();const Qp=document.querySelector(".js-category-list"),Zp=document.querySelector(".book-list");document.querySelector(".modal-book");Ol().then(t=>{if(!t.statusText==="OK")throw new Error(t.statusText);const n=t.data.map(r=>`
    <li><a href="" class="category-link">${r.list_name}</a></li>
    `).join("");Qp.insertAdjacentHTML("beforeend",n),document.querySelectorAll(".category-link").forEach(r=>{r.addEventListener("click",function(s){s.preventDefault(),document.querySelectorAll(".selected-category").forEach(o=>{o.classList.remove("selected-category")}),r.classList.add("selected-category"),s.target.textContent==="All Categories"?uc():Ll(s.target.textContent).then(o=>{const a=o.data;console.log(a);const l=s.target.textContent.split(" "),c=l.length-1;let d=`
              <h1 class="book-list-title">${l.slice(0,c).join(" ")} <span class="spn-books">${l[c]}</span>
    </h1>
    <ul class="category-ul">`;a.forEach(y=>{d+=` 
      
    <li class="book-thumb-category">
            <a href="" class="book-link" id="${y._id}"> 
          <img class="img-book-category" src="${y.book_image}" alt="book-test" />
       <p class="book-name">${y.title}</p>
       <p class="author">${y.author}</p>
             </a>
     </li>
      `}),d+="</ul>",Zp.innerHTML=d,document.querySelectorAll(".book-link").forEach(y=>{y.addEventListener("click",function(p){p.preventDefault()})})}).catch(o=>console.log(o))})})}).catch(t=>console.log(t));
