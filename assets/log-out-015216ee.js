(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();const ja="shoping_list",iE=n=>{localStorage.setItem(ja,JSON.stringify(n))},sE=()=>JSON.parse(localStorage.getItem(ja)),oE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAUCAYAAADV9o4UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAdISURBVHgBxVhrbFRFFD4z97a0pQsttiKUdrvLo1JERKxUBIMBgSghghZMSLQK8jBIQSAaIiI2/vCHQjBASggJEB5CgiQmiILEEOQR3hoUod293W0bSym0PLbLdveO39zOXRZow0LXeJrpzJw5c95zZu4yigGn0zlQM83RGKYS5xfM5uYjRlNTk72em5vblzHWJRQKNaSlpYUoHC4ixpJNxo4YhtFUUFDguB0IjBCcc9AdlbhY/nl5eZk6YyME0UBGdJUTna2srj5trxdkZTlCDoeL2od6r9dbb0/yAeiGoAXRzkHWPzFrGaZp9kZrrampuQS5gzTI1Bjz2PKYRZid/YTWtWuFMM1XYYhuM8BiJUtKer2ysvK8nLudTsm8J9pGtOfQnrYIhfgDlpaaRFsxe1JtN3g4PKqytrZG7Z2CbgNaZowxAg5aXWUYC+XYnZc3BvIPtGs2Y195DOOTYcOGJV1rbCyHTLknWa1Jh6zA+jpLVn5+GdZXWWum+QGCuBKjLpZA0yz3+v2fcTnRUlPLhRCTwEDO96DttoiI+olQ6MtY8Qo/IWp0m+DBMHpbjNGWP4Wuz5GDfjk5fdCtUUZ7Yex68KiTOyG3rK/T+YJyYDP+N8W01qgIIW7IHkYvBt3HyuhfoNBfmPcEn6/dbneRok2OasH5Mttoa43zBcjsXtyiY+yZNntoh6e6ejLaGxgft3Th/NnRo0frMQYRNnUxI5FiCJsag87WOB8HJV5RvGQ4Cy2na5p0SIYchoUYiwjPZpo2396IKBTL3uP3n4TsTNlI04aASUQ5xH8zGFxl6SHEAsX7GOjGIiOHwvhGJo9nJFJG9wB0PMGCwZ4Y/KxQDji+pzRcgEERWkpmVlZpjx49uvXLzy8GIVc7dZyfuwyHQseNmprjXp9vN9bDCn3mkte73+PzHUAGXLG8i2SyDAIO/FNTAoHuPp/P6IdagRTMi/LjPCWWf0lJiSYikT3Yb+GhaGl9ff0tnHGZZY9bONPcJ3scw9sw7pjaOlkFSdi8koUor6qvv4zI77BxuhCpUYNcTuesq1euvJfhcAw1hZDSqCMQKu1IRoQxWVzSEYGbsQTKQaaNkoUThIv65udPBX8HCdEh/1MnTiyG9KGK1Xo47qAcJwkxyLT14vx6dEPbGZeQVnfxYgYlJUWXgpzXWiRELbZEaZ0VVRSetVj4VgnbBmHTsHimI8UQgajWwsp8i3GsJXd5TVZgTYifMJwB3rVg8BGMX94eb3efPv1Bs0xNqxCxFVFZQmjt6mMfCUAkNZV3pGsscJR6t1RIzXcjJacjhXdiQwPFB+JBBNDkHWiQK8daKDQF1XclrpbD1J4Nur4LhnS19jE282+/vy66qGlGVKgQXe0xnNjNRkPvZooDcOPybFLXAjZZVw8ClALOgxVNuqZp3ehRQKU8+v42KsD5ZaVhkY2DobLqU1+XayZoh9Adg35Exa9BRm7IyckZAKecjtYUxl6SnbzesP9FJeewPPMUB0jDr5E6i9CzxOVyvY18koWgl6JxsNbWhdQ5iJ7HLrpejnoyT93DpIyYMhBXDKr78Hv2pcBzOehnpOh6BYy6DtrNluJCvAw+n15raFgNnOU4XFVrKU7QPR7PJVde3i5EexrmvVAtN0FYEE3e3wvhzWZE5xB1AqDkGpPz6dSWknNlAUA7Ar7fAzcH7WgLYy2gk0sn5SMGelxAtQ9hPgABmUDqfAO3FGvDod8gEJfHFOFvcE1+F69OVulvxetG5/wgk+nNeQvCv726uvoMKvEZFg5XGbW1Zy1qxj7HWjYUPBU1irGlqCwZLBI5G+XK2PJYukqf77yrd+/nWXJyKYxIB+oc7uldmZmZAdwkpwLB4HZ5XRUWFi4JALylRpiyqDuloTyk0042lb7A8SuQvOSzNTs7uzg9Le0tmFyMgEWQKT+g8u8lVW/g5P2Qsxz2mEWG0WBIlXT990g4bBXU5HC4msXjHbGBxqBuHmWzKUD/IYh1lI9UKIO5OOuUrtCyWE2E7MOUQOBxUQXJD0VOiPVUhnIVl7MeCQTloh2iME1E1RkJSUuA7Q7cY5RgiNsIsZHcFKJ92JGMVgFltiIKPkowiE0wMkRzYPhFZJkHbz+ceXqKzaLzlEB4qOiJCnifaCnaEuwMwPhfpQMw/q0zThCrqRs+IyZj+BraJJIfHoymgbf8eFkO3m5KMDxS2oo1NBBlcT2GI2M4VULRY+j/RDuHiHlwYv1sPN2K7qsg+ZbshVQuxGgo6N1oxaCXHzGy0N7AvkV4oW9h7+JmqaD9OIxb2Pu0mRIMnTqvYi2NgrpzMZwIAxwdSIhgTT46ZD3R6X6ZsmpcIPmtHqJNbB41Wsit+IS9getqNn2IG+uBr8OHhYQUKkQmC5zehHrjqe07XX556R1IFPiTz+Ea9HvhjgPojyCdW+/jK+RjMvFGt6mRYBAlKEfjYHgrfqlhqAkcxUrACZpVE+qQyg2IbD2bf+c193/AvwYDFioRTrZrAAAAAElFTkSuQmCC",aE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN4SURBVHgB7VdLaBRBEH3Vk91VokYFv/EQA0bjwQ8i8RAEiRc/KCp4EsWLN8GDiF48BmL8YC4aUERv6inghxwSEUQCQTQBMRdjkHzRIEmUmM1ulzUzSXZ6ZnZ2jOstBc1sd7+uel1d1V0LLIgrFDXJD1NVWZ2pJdAqBSTB0XifZtYa0wwetBJWJ51Of8oPDTN+H5sZicfyczv+VWwL7PzqJTVdR2fRFwYxCTQnt7DFHTJVhmILI0NJ7KIz6W7vcEkAR3gJrYpPYNZemp8wo5poxj8iyovI3E0eFxYVzrQ09n2L0bSmzdnm1AGTmUeIaR+zeULs+xZDJNAPyedFOAlNlWEJQCVLgcrDQKJU2GSBsT5wf5tMKBNXvhdYWglYSWByGBjpBP8aCuojrPf2zZhgShmxKudAuy+DdlwAUstMRSPvwK2nwBNfQaXlwP57oA17TWtTY0BnA7irCYYvNZZ4YcZWdFYpAWC2UcVRUM3VAAFH1uwSww8EJ0SPtAQJ2JIqA9XWgypPwKtXNqciPOF4I9cv3YAoofV7wMuqgZXVkTgsWiPGvR42j9wkoX3xwDEuyBXbCmNsPV7dPrUBEt4soDgpQYnCGDvNPST8W/OR8EF0DE/EIco+Xb7d+WJC/f2FMB8SiIqJLJwkNhbHMRAHY8RXlCdstga28HFwnOB1AtPTpwhP2MFDzstiM7ULAhQuIDQKikNUq7xLAjHB7BJw+zF2GTN42WOZaJ4xwb/lCv7e6/Cj8p3hmOw0MCqYScGurgItXp4jGvuesHfOvh0MdEE/vyJF2ntRlHEHFy2HqjkHVXdpDq/bb4I77oAnf8xtxCarjjWFZEcUCS2+oFw9xh9boDsfyfg0cuzI2al+1Sgvj+UQ16310G9uuRCaCUI7tvo/IHu7VjxSZnqMI0hIPTHhRrvLmsdHc4ZDQlS3XQcqauWVfOoSmvGe8YUl3vkJ463UPJWXhFQ9Q/mc5glX7wrg82uZs6QWibvGHqcv3r7xpCpWz+w0DbSZB8j+BueVOxfSEKKH3fep3WuXfMwpfXFtjxxnFf6f9CUbhzcinyfs3CDLOilezsylVTFbFuMJooN+Vso/kGwY6EoksEnc0lusCttNUe5mUjV0bSjwTyzyups6v3YrlVi75RTXiY8S8R6KWc1S97FKy4pvbOFt6sZgDxakgPwBnSGqSUuOBR0AAAAASUVORK5CYII=",cE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAYAAADl9UilAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAaoSURBVHgB7ZdpTJRXFIZfdpUdGVG0WnABUUQUUKNQBjQgKKiltgk2mpgm5YetbaIpJtoqCumPmlqT2riURkGsWhGmolXDokGIlh0KWijK5rDDsA/MTM+5KEVkNVCbxpMc7syE797nvme59wPe2P/EdDB+9hb5JnIJeQW5Cq/ZrLS1tb+msZFcQ67U0tJK0tPTW4HXZLMI6Dsam58BDXQGvEXjSvwLpmVgYDCPgH6iz61DAL0ESH5bV1d3DSbIrAnoLI1towQa6N2kYAoBumOcbBoB/YChQzZmQPJUAvShUQuvYBICOkpj/TgBDXQ1zV+go6OzAaM0LXrgExprJwjoBafwKm1t3z4wGrBl6O1BEw41Y8YMzZEjRzQJCQll9N2wP4T2IGCbh/h93Gz69Ok48OUByH6VoaW1BVFRUQxljhHA7PlPRESEmGA8jRTC3r17cenyJUyePBnnz5+H0xInSCQS5tAdCUyP/3h4eAg4Ozs7UO8C5QJe1XiDDHTx4kWYW5gj9kos5trOhYmxCfLz8+Hk5MShVY0EpqBSxpQpUzBv/jw4OzsjKTkJlAtjhutT6NIlWFhYIPYqAc2dC2MTY2RnZ8NhkQN6enpQVlb20rODgWXo6+ujs6sTNTU1cHNzQ3d3N8zMzeAp9cSOHTvEgsOZubl5n0LPgWxtbYVC2VnZWLRoEVQqFYoKi7DEaQnq6uqYQ6//HIPdLtT00Ecx52Og7FYiPT0dvj6+kMvl8HD3wMaAjSw9cnJyhIIdHR19DzL8rl27EB4Rjmp5NTIyM+C4xBHNzc2oqqwSnysrK6FoVsDR0RHFJcUiMi7LXXQaGhp+Ky4uLhkOTHvbh9s+D9wUiOjoaBT/WSwm3r59O6is0dnRicbGRhGS0H2haKhvQHV1NZRKJQ6HHYbBJAPcv39fLKxQKAQIJ3h/oJKSEujo6kDqKUVcfBzCwsJ0CEpNdnW4UNaT3GpWIuFaAg6FHUJiYiKWOi3FiRMnYGJqAqmXFIoWRV/Zcx4aGRkhICAACxYsgLHRPzmkUqtQWFiIZcuXoampCU/lTxEYGIi83Dz4+fkh6lwU2traONf4mqQ7HFgHJX8r7/L69evo6e7BjRs3cPDgQegb6CP0i1Ac+/YYHhY9FArU1tQiNTUV9gvtwbmZ8XsGljov7cuhZc69QPKn8heAzpw5g66uLnh6emLVqlXQaDQWtLblcGCYPXt2071798DVydKfOnWKew1k8TL4+/sjLi4Oubm5OHr0KCTTJFizZo1IbFaNcyYlOQXu7u7o6OxA0cMibH1/K548edIHRBCYNGkShxB79u4Bp82ztBpWMdTW1tbxwwsXLkRycjJsbGxgZmaGmJgYLHdZjmvXriHovSDcvHUTQe8GiRysr69Ha2srXFxcBFxmZiYCAwLR3NQML6mX2ASnB2/w9JnTuPzLZVE8LS0tOHf2HC/L97aOYcFoN1WcKw8ePABdkTF//nwkpxCgrQ00ag0fIUJ+LgbOq9LSUhQVFUFeLRdhZWgOn7e3twDiXsXFsn//foSHh4MrftVKET5ciLmAgoICXracvOE5g+5gYP4b/bMMjQw3kHJwcXVBWnoaDA0NIbGUICsrSyQ47553KpVKEbwtGNFR0ZDJZFD1qERo29vaQbcUWFlZ4fjx42JxDrvbCjdR7awoVzCr/Eyp79F7uAsbqpUb04LfBAcHf6DWqI3T0tLg5uomlOEzjkPLPYoBWVHuaT4+PiJvtmzegvb2dlGpO3fuFC3Dx9cHFeUVomVMs5qGOXPmIOTjEIbjFpFJ64WTX+0PNtTrm/Lx48ey+Pj4OJp4sp+/3zyawKCiogIzZ81ECfVB7u6WUy2Rk5uDxYsXo0XRIlTlE4PViY2NFUcNh9vby1uo5ODggJCQEET+GKmi+XMplPtorc/ICwYCjPReWUvVFE8hkhGgqcc7Hjbdym4DTnRra2s8evRIhMrUxFSotnr1arS1tom+x0Xi5eUlEpxVvnPnDuebmkKXQ804lOb+lJzVGvT9Uxejs/y7d+9uI3ddv3797rXr1gbSCWDISc0tIi8vj1sMplpOhampqXjA3s4e9XX1iIyMBHV1FcHk0c/HyKPRe+8f1sb6Jl5Fi1xJSkxKpAZq5ermasdZQWER56BapUZZeRlu37qN8vJy0afoIlBK/8tX9d3oVUg9moVe/ZLVayupJXzl6+vLbzywnmktmuvJkyf56x/kEeQ/YxQKTYjxy+y6deviCUhNF8G/6KcgTPD1fKxmhP8Y0Bt77fY33dVdVE1EW0cAAAAASUVORK5CYII=";/**
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
 */const qa=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},eh=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[e++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[e++],o=n[e++],a=n[e++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[e++],o=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},za={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,c=i+2<n.length,u=c?n[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(e[l],e[h],e[d],e[f])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(qa(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):eh(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=e[n.charAt(i++)],a=i<n.length?e[n.charAt(i)]:0;++i;const u=i<n.length?e[n.charAt(i)]:64;++i;const h=i<n.length?e[n.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new nh;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),h!==64){const w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class nh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rh=function(n){const t=qa(n);return za.encodeByteArray(t,!0)},gr=function(n){return rh(n).replace(/\./g,"")},Wa=function(n){try{return za.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function ih(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const sh=()=>ih().__FIREBASE_DEFAULTS__,oh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ah=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Wa(n[1]);return t&&JSON.parse(t)},hs=()=>{try{return sh()||oh()||ah()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ha=n=>{var t,e;return(e=(t=hs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},ch=n=>{const t=Ha(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ka=()=>{var n;return(n=hs())===null||n===void 0?void 0:n.config},Ga=n=>{var t;return(t=hs())===null||t===void 0?void 0:t[`_${n}`]};/**
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
 */class uh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function lh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[gr(JSON.stringify(e)),gr(JSON.stringify(o)),a].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function dh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function fh(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ph(){const n=ot();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function gh(){try{return typeof indexedDB=="object"}catch{return!1}}function mh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}/**
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
 */const _h="FirebaseError";class Lt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=_h,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bn.prototype.create)}}class bn{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?yh(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Lt(i,a,r)}}function yh(n,t){return n.replace(Eh,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Eh=/\{\$([^}]+)}/g;function vh(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function mr(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const s=n[i],o=t[i];if(Ao(s)&&Ao(o)){if(!mr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ao(n){return n!==null&&typeof n=="object"}/**
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
 */function Dn(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Je(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function Xe(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Ih(n,t){const e=new Th(n,t);return e.subscribe.bind(e)}class Th{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let i;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");Ah(t,["next","error","complete"])?i=t:i={next:t,error:e,complete:r},i.next===void 0&&(i.next=di),i.error===void 0&&(i.error=di),i.complete===void 0&&(i.complete=di);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ah(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function di(){}/**
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
 */function pt(n){return n&&n._delegate?n._delegate:n}class se{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Zt="[DEFAULT]";/**
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
 */class wh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new uh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sh(t))try{this.getOrInitializeService({instanceIdentifier:Zt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Zt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Zt){return this.instances.has(t)}getOptions(t=Zt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Zt){return this.component?this.component.multipleInstances?t:Zt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rh(n){return n===Zt?void 0:n}function Sh(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ph{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new wh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var b;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(b||(b={}));const Ch={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},kh=b.INFO,bh={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Dh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=bh[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ds{constructor(t){this.name=t,this._logLevel=kh,this._logHandler=Dh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ch[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}const Vh=(n,t)=>t.some(e=>n instanceof e);let wo,Ro;function Nh(){return wo||(wo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Oh(){return Ro||(Ro=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qa=new WeakMap,Ni=new WeakMap,$a=new WeakMap,fi=new WeakMap,fs=new WeakMap;function Mh(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{e(zt(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&Qa.set(e,n)}).catch(()=>{}),fs.set(t,n),t}function Lh(n){if(Ni.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{e(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});Ni.set(n,t)}let Oi={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return Ni.get(n);if(t==="objectStoreNames")return n.objectStoreNames||$a.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return zt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function xh(n){Oi=n(Oi)}function Fh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(pi(this),t,...e);return $a.set(r,t.sort?t.sort():[t]),zt(r)}:Oh().includes(n)?function(...t){return n.apply(pi(this),t),zt(Qa.get(this))}:function(...t){return zt(n.apply(pi(this),t))}}function Uh(n){return typeof n=="function"?Fh(n):(n instanceof IDBTransaction&&Lh(n),Vh(n,Nh())?new Proxy(n,Oi):n)}function zt(n){if(n instanceof IDBRequest)return Mh(n);if(fi.has(n))return fi.get(n);const t=Uh(n);return t!==n&&(fi.set(n,t),fs.set(t,n)),t}const pi=n=>fs.get(n);function Bh(n,t,{blocked:e,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,t),a=zt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(zt(o.result),c.oldVersion,c.newVersion,zt(o.transaction),c)}),e&&o.addEventListener("blocked",c=>e(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const jh=["get","getKey","getAll","getAllKeys","count"],qh=["put","add","delete","clear"],gi=new Map;function So(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(gi.get(t))return gi.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=qh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||jh.includes(e)))return;const s=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[e](...a),i&&c.done]))[0]};return gi.set(t,s),s}xh(n=>({...n,get:(t,e,r)=>So(t,e)||n.get(t,e,r),has:(t,e)=>!!So(t,e)||n.has(t,e)}));/**
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
 */class zh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Wh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Wh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Mi="@firebase/app",Po="0.9.15";/**
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
 */const oe=new ds("@firebase/app"),Hh="@firebase/app-compat",Kh="@firebase/analytics-compat",Gh="@firebase/analytics",Qh="@firebase/app-check-compat",$h="@firebase/app-check",Yh="@firebase/auth",Jh="@firebase/auth-compat",Xh="@firebase/database",Zh="@firebase/database-compat",td="@firebase/functions",ed="@firebase/functions-compat",nd="@firebase/installations",rd="@firebase/installations-compat",id="@firebase/messaging",sd="@firebase/messaging-compat",od="@firebase/performance",ad="@firebase/performance-compat",cd="@firebase/remote-config",ud="@firebase/remote-config-compat",ld="@firebase/storage",hd="@firebase/storage-compat",dd="@firebase/firestore",fd="@firebase/firestore-compat",pd="firebase",gd="10.1.0";/**
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
 */const Li="[DEFAULT]",md={[Mi]:"fire-core",[Hh]:"fire-core-compat",[Gh]:"fire-analytics",[Kh]:"fire-analytics-compat",[$h]:"fire-app-check",[Qh]:"fire-app-check-compat",[Yh]:"fire-auth",[Jh]:"fire-auth-compat",[Xh]:"fire-rtdb",[Zh]:"fire-rtdb-compat",[td]:"fire-fn",[ed]:"fire-fn-compat",[nd]:"fire-iid",[rd]:"fire-iid-compat",[id]:"fire-fcm",[sd]:"fire-fcm-compat",[od]:"fire-perf",[ad]:"fire-perf-compat",[cd]:"fire-rc",[ud]:"fire-rc-compat",[ld]:"fire-gcs",[hd]:"fire-gcs-compat",[dd]:"fire-fst",[fd]:"fire-fst-compat","fire-js":"fire-js",[pd]:"fire-js-all"};/**
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
 */const _r=new Map,xi=new Map;function _d(n,t){try{n.container.addComponent(t)}catch(e){oe.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Pe(n){const t=n.name;if(xi.has(t))return oe.debug(`There were multiple attempts to register component ${t}.`),!1;xi.set(t,n);for(const e of _r.values())_d(e,n);return!0}function ps(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const yd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Wt=new bn("app","Firebase",yd);/**
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
 */class Ed{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new se("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
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
 */const Le=gd;function Ya(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Li,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Wt.create("bad-app-name",{appName:String(i)});if(e||(e=Ka()),!e)throw Wt.create("no-options");const s=_r.get(i);if(s){if(mr(e,s.options)&&mr(r,s.config))return s;throw Wt.create("duplicate-app",{appName:i})}const o=new Ph(i);for(const c of xi.values())o.addComponent(c);const a=new Ed(e,r,o);return _r.set(i,a),a}function Ja(n=Li){const t=_r.get(n);if(!t&&n===Li&&Ka())return Ya();if(!t)throw Wt.create("no-app",{appName:n});return t}function Ht(n,t,e){var r;let i=(r=md[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),oe.warn(a.join(" "));return}Pe(new se(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const vd="firebase-heartbeat-database",Id=1,ln="firebase-heartbeat-store";let mi=null;function Xa(){return mi||(mi=Bh(vd,Id,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(ln)}}}).catch(n=>{throw Wt.create("idb-open",{originalErrorMessage:n.message})})),mi}async function Td(n){try{return await(await Xa()).transaction(ln).objectStore(ln).get(Za(n))}catch(t){if(t instanceof Lt)oe.warn(t.message);else{const e=Wt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});oe.warn(e.message)}}}async function Co(n,t){try{const r=(await Xa()).transaction(ln,"readwrite");await r.objectStore(ln).put(t,Za(n)),await r.done}catch(e){if(e instanceof Lt)oe.warn(e.message);else{const r=Wt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});oe.warn(r.message)}}}function Za(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ad=1024,wd=30*24*60*60*1e3;class Rd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Pd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ko();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=wd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ko(),{heartbeatsToSend:e,unsentEntries:r}=Sd(this._heartbeatsCache.heartbeats),i=gr(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ko(){return new Date().toISOString().substring(0,10)}function Sd(n,t=Ad){const e=[];let r=n.slice();for(const i of n){const s=e.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),bo(e)>t){s.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),bo(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Pd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gh()?mh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Td(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Co(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Co(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function bo(n){return gr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Cd(n){Pe(new se("platform-logger",t=>new zh(t),"PRIVATE")),Pe(new se("heartbeat",t=>new Rd(t),"PRIVATE")),Ht(Mi,Po,n),Ht(Mi,Po,"esm2017"),Ht("fire-js","")}Cd("");var kd="firebase",bd="10.1.0";/**
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
 */Ht(kd,bd,"app");function gs(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function tc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Dd=tc,ec=new bn("auth","Firebase",tc());/**
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
 */const yr=new ds("@firebase/auth");function Vd(n,...t){yr.logLevel<=b.WARN&&yr.warn(`Auth (${Le}): ${n}`,...t)}function cr(n,...t){yr.logLevel<=b.ERROR&&yr.error(`Auth (${Le}): ${n}`,...t)}/**
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
 */function mt(n,...t){throw ms(n,...t)}function It(n,...t){return ms(n,...t)}function Nd(n,t,e){const r=Object.assign(Object.assign({},Dd()),{[t]:e});return new bn("auth","Firebase",r).create(t,{appName:n.name})}function ms(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return ec.create(n,...t)}function I(n,t,...e){if(!n)throw ms(t,...e)}function St(n){const t="INTERNAL ASSERTION FAILED: "+n;throw cr(t),new Error(t)}function bt(n,t){n||St(t)}/**
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
 */function Fi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Od(){return Do()==="http:"||Do()==="https:"}function Do(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Md(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Od()||dh()||"connection"in navigator)?navigator.onLine:!0}function Ld(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Vn{constructor(t,e){this.shortDelay=t,this.longDelay=e,bt(e>t,"Short delay should be less than long delay!"),this.isMobile=hh()||fh()}get(){return Md()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _s(n,t){bt(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
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
 */class nc{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;St("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;St("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;St("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Fd=new Vn(3e4,6e4);function xe(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Fe(n,t,e,r,i={}){return rc(n,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Dn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),nc.fetch()(ic(n,n.config.apiHost,e,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function rc(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},xd),t);try{const i=new Ud(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xn(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Xn(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Xn(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Nd(n,l,u);mt(n,l)}}catch(i){if(i instanceof Lt)throw i;mt(n,"network-request-failed",{message:String(i)})}}async function Nn(n,t,e,r,i={}){const s=await Fe(n,t,e,r,i);return"mfaPendingCredential"in s&&mt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function ic(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?_s(n.config,i):`${n.config.apiScheme}://${i}`}class Ud{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),Fd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xn(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=It(n,t,r);return i.customData._tokenResponse=e,i}/**
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
 */async function Bd(n,t){return Fe(n,"POST","/v1/accounts:delete",t)}async function jd(n,t){return Fe(n,"POST","/v1/accounts:lookup",t)}/**
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
 */function rn(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function qd(n,t=!1){const e=pt(n),r=await e.getIdToken(t),i=ys(r);I(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:rn(_i(i.auth_time)),issuedAtTime:rn(_i(i.iat)),expirationTime:rn(_i(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _i(n){return Number(n)*1e3}function ys(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return cr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Wa(e);return i?JSON.parse(i):(cr("Failed to decode base64 JWT payload"),null)}catch(i){return cr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function zd(n){const t=ys(n);return I(t,"internal-error"),I(typeof t.exp<"u","internal-error"),I(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function hn(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Lt&&Wd(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Wd({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Hd{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sc{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=rn(this.lastLoginAt),this.creationTime=rn(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Er(n){var t;const e=n.auth,r=await n.getIdToken(),i=await hn(n,jd(e,{idToken:r}));I(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Qd(s.providerUserInfo):[],a=Gd(n.providerData,o),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sc(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function Kd(n){const t=pt(n);await Er(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Gd(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Qd(n){return n.map(t=>{var{providerId:e}=t,r=gs(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $d(n,t){const e=await rc(n,{},async()=>{const r=Dn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=ic(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nc.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}/**
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
 */class dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){I(t.idToken,"internal-error"),I(typeof t.idToken<"u","internal-error"),I(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):zd(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return I(!this.accessToken||this.refreshToken,t,"user-token-expired"),!e&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await $d(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,o=new dn;return r&&(I(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(I(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new dn,this.toJSON())}_performRefresh(){return St("not implemented")}}/**
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
 */function xt(n,t){I(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class re{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=gs(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await hn(this,this.stsTokenManager.getToken(this.auth,t));return I(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return qd(this,t)}reload(){return Kd(this)}_assign(t){this!==t&&(I(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new re(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Er(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await hn(this,Bd(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,o,a,c,u,l;const h=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(i=e.email)!==null&&i!==void 0?i:void 0,f=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=e.photoURL)!==null&&o!==void 0?o:void 0,S=(a=e.tenantId)!==null&&a!==void 0?a:void 0,E=(c=e._redirectEventId)!==null&&c!==void 0?c:void 0,N=(u=e.createdAt)!==null&&u!==void 0?u:void 0,x=(l=e.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:B,emailVerified:X,isAnonymous:lt,providerData:Q,stsTokenManager:Ge}=e;I(B&&Ge,t,"internal-error");const To=dn.fromJSON(this.name,Ge);I(typeof B=="string",t,"internal-error"),xt(h,t.name),xt(d,t.name),I(typeof X=="boolean",t,"internal-error"),I(typeof lt=="boolean",t,"internal-error"),xt(f,t.name),xt(w,t.name),xt(S,t.name),xt(E,t.name),xt(N,t.name),xt(x,t.name);const Qe=new re({uid:B,auth:t,email:d,emailVerified:X,displayName:h,isAnonymous:lt,photoURL:w,phoneNumber:f,tenantId:S,stsTokenManager:To,createdAt:N,lastLoginAt:x});return Q&&Array.isArray(Q)&&(Qe.providerData=Q.map(Jn=>Object.assign({},Jn))),E&&(Qe._redirectEventId=E),Qe}static async _fromIdTokenResponse(t,e,r=!1){const i=new dn;i.updateFromServerResponse(e);const s=new re({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Er(s),s}}/**
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
 */const Vo=new Map;function Pt(n){bt(n instanceof Function,"Expected a class definition");let t=Vo.get(n);return t?(bt(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Vo.set(n,t),t)}/**
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
 */class oc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}oc.type="NONE";const No=oc;/**
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
 */function ur(n,t,e){return`firebase:${n}:${t}:${e}`}class Ie{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ur(this.userKey,i.apiKey,s),this.fullPersistenceKey=ur("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?re._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new Ie(Pt(No),t,r);const i=(await Promise.all(e.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Pt(No);const o=ur(r,t.config.apiKey,t.name);let a=null;for(const u of e)try{const l=await u._get(o);if(l){const h=re._fromJSON(t,l);u!==s&&(a=h),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ie(s,t,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(e.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ie(s,t,r))}}/**
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
 */function Oo(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(uc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ac(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(hc(t))return"Blackberry";if(dc(t))return"Webos";if(Es(t))return"Safari";if((t.includes("chrome/")||cc(t))&&!t.includes("edge/"))return"Chrome";if(lc(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ac(n=ot()){return/firefox\//i.test(n)}function Es(n=ot()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function cc(n=ot()){return/crios\//i.test(n)}function uc(n=ot()){return/iemobile/i.test(n)}function lc(n=ot()){return/android/i.test(n)}function hc(n=ot()){return/blackberry/i.test(n)}function dc(n=ot()){return/webos/i.test(n)}function Fr(n=ot()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Yd(n=ot()){var t;return Fr(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Jd(){return ph()&&document.documentMode===10}function fc(n=ot()){return Fr(n)||lc(n)||dc(n)||hc(n)||/windows phone/i.test(n)||uc(n)}function Xd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function pc(n,t=[]){let e;switch(n){case"Browser":e=Oo(ot());break;case"Worker":e=`${Oo(ot())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${Le}/${r}`}async function gc(n,t){return Fe(n,"GET","/v2/recaptchaConfig",xe(n,t))}function Mo(n){return n!==void 0&&n.enterprise!==void 0}class mc{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(e=>e.provider==="EMAIL_PASSWORD_PROVIDER"&&e.enforcementState!=="OFF")}}/**
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
 */function Zd(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}function _c(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=It("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",Zd().appendChild(r)})}function tf(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ef="https://www.google.com/recaptcha/enterprise.js?render=",nf="recaptcha-enterprise",rf="NO_RECAPTCHA";class yc{constructor(t){this.type=nf,this.auth=Ue(t)}async verify(t="verify",e=!1){async function r(s){if(!e){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{gc(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new mc(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){const c=window.grecaptcha;Mo(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(rf)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!e&&Mo(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}_c(ef+a).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function vr(n,t,e,r=!1){const i=new yc(n);let s;try{s=await i.verify(e)}catch{s=await i.verify(e,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class sf{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((o,a)=>{try{const c=t(s);o(c)}catch(c){a(c)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class of{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lo(this),this.idTokenSubscription=new Lo(this),this.beforeStateQueue=new sf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ec,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Pt(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ie.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var e;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Er(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Ld()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?pt(t):null;return e&&I(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&I(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(t))})}async initializeRecaptchaConfig(){const t=await gc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new mc(t);this.tenantId==null?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled&&new yc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new bn("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Pt(t)||this._popupRedirectResolver;I(e,this,"argument-error"),this.redirectPersistenceManager=await Ie.create(this,[Pt(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e),o=this._isInitialized?Promise.resolve():this._initializationPromise;return I(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof e=="function"?t.addObserver(e,r,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=pc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&Vd(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ue(n){return pt(n)}class Lo{constructor(t){this.auth=t,this.observer=null,this.addObserver=Ih(e=>this.observer=e)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function af(n,t){const e=ps(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(mr(s,t??{}))return i;mt(i,"already-initialized")}return e.initialize({options:t})}function cf(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Pt);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function uf(n,t,e){const r=Ue(n);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(e!=null&&e.disableWarnings),s=Ec(t),{host:o,port:a}=lf(t),c=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||hf()}function Ec(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function lf(n){const t=Ec(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:xo(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:xo(o)}}}function xo(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function hf(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class vs{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return St("not implemented")}_getIdTokenResponse(t){return St("not implemented")}_linkToIdToken(t,e){return St("not implemented")}_getReauthenticationResolver(t){return St("not implemented")}}async function df(n,t){return Fe(n,"POST","/v1/accounts:update",t)}/**
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
 */async function yi(n,t){return Nn(n,"POST","/v1/accounts:signInWithPassword",xe(n,t))}/**
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
 */async function ff(n,t){return Nn(n,"POST","/v1/accounts:signInWithEmailLink",xe(n,t))}async function pf(n,t){return Nn(n,"POST","/v1/accounts:signInWithEmailLink",xe(n,t))}/**
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
 */class fn extends vs{constructor(t,e,r,i=null){super("password",r),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new fn(t,e,"password")}static _fromEmailAndCode(t,e,r=null){return new fn(t,e,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t;if(e!=null&&e.email&&(e!=null&&e.password)){if(e.signInMethod==="password")return this._fromEmailAndPassword(e.email,e.password);if(e.signInMethod==="emailLink")return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((e=t._getRecaptchaConfig())===null||e===void 0)&&e.emailPasswordEnabled){const i=await vr(t,r,"signInWithPassword");return yi(t,i)}else return yi(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await vr(t,r,"signInWithPassword");return yi(t,s)}else return Promise.reject(i)});case"emailLink":return ff(t,{email:this._email,oobCode:this._password});default:mt(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return df(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pf(t,{idToken:e,email:this._email,oobCode:this._password});default:mt(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
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
 */async function Te(n,t){return Nn(n,"POST","/v1/accounts:signInWithIdp",xe(n,t))}/**
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
 */const gf="http://localhost";class ae extends vs{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new ae(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):mt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=gs(e,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ae(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Te(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,Te(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Te(t,e)}buildRequest(){const t={requestUri:gf,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Dn(e)}return t}}/**
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
 */function mf(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function _f(n){const t=Je(Xe(n)).link,e=t?Je(Xe(t)).deep_link_id:null,r=Je(Xe(n)).deep_link_id;return(r?Je(Xe(r)).link:null)||r||e||t||n}class Is{constructor(t){var e,r,i,s,o,a;const c=Je(Xe(t)),u=(e=c.apiKey)!==null&&e!==void 0?e:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=mf((i=c.mode)!==null&&i!==void 0?i:null);I(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const e=_f(t);try{return new Is(e)}catch{return null}}}/**
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
 */class Be{constructor(){this.providerId=Be.PROVIDER_ID}static credential(t,e){return fn._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const r=Is.parseLink(e);return I(r,"argument-error"),fn._fromEmailAndCode(t,r.code,r.tenantId)}}Be.PROVIDER_ID="password";Be.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Be.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class vc{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class On extends vc{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ft extends On{constructor(){super("facebook.com")}static credential(t){return ae._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ft.credential(t.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
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
 */class Ut extends On{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return ae._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Ut.credential(e,r)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
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
 */class Bt extends On{constructor(){super("github.com")}static credential(t){return ae._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Bt.credential(t.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
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
 */class jt extends On{constructor(){super("twitter.com")}static credential(t,e){return ae._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return jt.credentialFromTaggedObject(t)}static credentialFromError(t){return jt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return jt.credential(e,r)}catch{return null}}}jt.TWITTER_SIGN_IN_METHOD="twitter.com";jt.PROVIDER_ID="twitter.com";/**
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
 */async function Ei(n,t){return Nn(n,"POST","/v1/accounts:signUp",xe(n,t))}/**
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
 */class ce{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await re._fromIdTokenResponse(t,r,i),o=Fo(r);return new ce({user:s,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=Fo(r);return new ce({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function Fo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ir extends Lt{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ir.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new Ir(t,e,r,i)}}function Ic(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ir._fromErrorAndOperation(n,s,t,r):s})}async function yf(n,t,e=!1){const r=await hn(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return ce._forOperation(n,"link",r)}/**
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
 */async function Ef(n,t,e=!1){const{auth:r}=n,i="reauthenticate";try{const s=await hn(n,Ic(r,i,t,n),e);I(s.idToken,r,"internal-error");const o=ys(s.idToken);I(o,r,"internal-error");const{sub:a}=o;return I(n.uid===a,r,"user-mismatch"),ce._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),s}}/**
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
 */async function Tc(n,t,e=!1){const r="signIn",i=await Ic(n,r,t),s=await ce._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}async function vf(n,t){return Tc(Ue(n),t)}async function If(n,t,e){var r;const i=Ue(n),s={returnSecureToken:!0,email:t,password:e,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await vr(i,s,"signUpPassword");o=Ei(i,u)}else o=Ei(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const l=await vr(i,s,"signUpPassword");return Ei(i,l)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),c=await ce._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(c.user),c}function Tf(n,t,e){return vf(pt(n),Be.credential(t,e))}function Af(n,t,e,r){return pt(n).onIdTokenChanged(t,e,r)}function wf(n,t,e){return pt(n).beforeAuthStateChanged(t,e)}function Rf(n){return pt(n).signOut()}const Tr="__sak";/**
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
 */class Ac{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Tr,"1"),this.storage.removeItem(Tr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Sf(){const n=ot();return Es(n)||Fr(n)}const Pf=1e3,Cf=10;class wc extends Ac{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sf()&&Xd(),this.fallbackToPolling=fc(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Jd()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Cf):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Pf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}wc.type="LOCAL";const kf=wc;/**
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
 */class Rc extends Ac{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Rc.type="SESSION";const Sc=Rc;/**
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
 */function bf(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
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
 */class Ur{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new Ur(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(e.origin,s)),c=await bf(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ur.receivers=[];/**
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
 */function Ts(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
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
 */class Df{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Ts("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tt(){return window}function Vf(n){Tt().location.href=n}/**
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
 */function Pc(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function Nf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Of(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Mf(){return Pc()?self:null}/**
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
 */const Cc="firebaseLocalStorageDb",Lf=1,Ar="firebaseLocalStorage",kc="fbase_key";class Mn{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Br(n,t){return n.transaction([Ar],t?"readwrite":"readonly").objectStore(Ar)}function xf(){const n=indexedDB.deleteDatabase(Cc);return new Mn(n).toPromise()}function Ui(){const n=indexedDB.open(Cc,Lf);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ar,{keyPath:kc})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ar)?t(r):(r.close(),await xf(),t(await Ui()))})})}async function Uo(n,t,e){const r=Br(n,!0).put({[kc]:t,value:e});return new Mn(r).toPromise()}async function Ff(n,t){const e=Br(n,!1).get(t),r=await new Mn(e).toPromise();return r===void 0?null:r.value}function Bo(n,t){const e=Br(n,!0).delete(t);return new Mn(e).toPromise()}const Uf=800,Bf=3;class bc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ui(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>Bf)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ur._getInstance(Mf()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Nf(),!this.activeServiceWorker)return;this.sender=new Df(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Of()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ui();return await Uo(t,Tr,"1"),await Bo(t,Tr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uo(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>Ff(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>Bo(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Br(i,!1).getAll();return new Mn(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bc.type="LOCAL";const jf=bc;new Vn(3e4,6e4);/**
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
 */function qf(n,t){return t?Pt(t):(I(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class As extends vs{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Te(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Te(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Te(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function zf(n){return Tc(n.auth,new As(n),n.bypassAuthState)}function Wf(n){const{auth:t,user:e}=n;return I(e,t,"internal-error"),Ef(e,new As(n),n.bypassAuthState)}async function Hf(n){const{auth:t,user:e}=n;return I(e,t,"internal-error"),yf(e,new As(n),n.bypassAuthState)}/**
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
 */class Dc{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return zf;case"linkViaPopup":case"linkViaRedirect":return Hf;case"reauthViaPopup":case"reauthViaRedirect":return Wf;default:mt(this.auth,"internal-error")}}resolve(t){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Kf=new Vn(2e3,1e4);class Ee extends Dc{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ee.currentPopupAction&&Ee.currentPopupAction.cancel(),Ee.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return I(t,this.auth,"internal-error"),t}async onExecution(){bt(this.filter.length===1,"Popup operations only handle one event");const t=Ts();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ee.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,Kf.get())};t()}}Ee.currentPopupAction=null;/**
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
 */const Gf="pendingRedirect",lr=new Map;class Qf extends Dc{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=lr.get(this.auth._key());if(!t){try{const r=await $f(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}lr.set(this.auth._key(),t)}return this.bypassAuthState||lr.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $f(n,t){const e=Xf(t),r=Jf(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function Yf(n,t){lr.set(n._key(),t)}function Jf(n){return Pt(n._redirectPersistence)}function Xf(n){return ur(Gf,n.config.apiKey,n.name)}async function Zf(n,t,e=!1){const r=Ue(n),i=qf(r,t),o=await new Qf(r,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
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
 */const tp=10*60*1e3;class ep{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!np(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Vc(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(It(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=tp&&this.cachedEventUids.clear(),this.cachedEventUids.has(jo(t))}saveEventToCache(t){this.cachedEventUids.add(jo(t)),this.lastProcessedEventTime=Date.now()}}function jo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Vc({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function np(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vc(n);default:return!1}}/**
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
 */async function rp(n,t={}){return Fe(n,"GET","/v1/projects",t)}/**
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
 */const ip=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sp=/^https?/;async function op(n){if(n.config.emulator)return;const{authorizedDomains:t}=await rp(n);for(const e of t)try{if(ap(e))return}catch{}mt(n,"unauthorized-domain")}function ap(n){const t=Fi(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!sp.test(e))return!1;if(ip.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const cp=new Vn(3e4,6e4);function qo(){const n=Tt().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function up(n){return new Promise((t,e)=>{var r,i,s;function o(){qo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{qo(),e(It(n,"network-request-failed"))},timeout:cp.get()})}if(!((i=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=Tt().gapi)===null||s===void 0)&&s.load)o();else{const a=tf("iframefcb");return Tt()[a]=()=>{gapi.load?o():e(It(n,"network-request-failed"))},_c(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>e(c))}}).catch(t=>{throw hr=null,t})}let hr=null;function lp(n){return hr=hr||up(n),hr}/**
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
 */const hp=new Vn(5e3,15e3),dp="__/auth/iframe",fp="emulator/auth/iframe",pp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mp(n){const t=n.config;I(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?_s(t,fp):`https://${n.config.authDomain}/${dp}`,r={apiKey:t.apiKey,appName:n.name,v:Le},i=gp.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${Dn(r).slice(1)}`}async function _p(n){const t=await lp(n),e=Tt().gapi;return I(e,n,"internal-error"),t.open({where:document.body,url:mp(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pp,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=It(n,"network-request-failed"),a=Tt().setTimeout(()=>{s(o)},hp.get());function c(){Tt().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const yp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ep=500,vp=600,Ip="_blank",Tp="http://localhost";class zo{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ap(n,t,e,r=Ep,i=vp){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},yp),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ot().toLowerCase();e&&(a=cc(u)?Ip:e),ac(u)&&(t=t||Tp,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[f,w])=>`${d}${f}=${w},`,"");if(Yd(u)&&a!=="_self")return wp(t||"",a),new zo(null);const h=window.open(t||"",a,l);I(h,n,"popup-blocked");try{h.focus()}catch{}return new zo(h)}function wp(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const Rp="__/auth/handler",Sp="emulator/auth/handler",Pp=encodeURIComponent("fac");async function Wo(n,t,e,r,i,s){I(n.config.authDomain,n,"auth-domain-config-required"),I(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:Le,eventId:i};if(t instanceof vc){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",vh(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,h]of Object.entries(s||{}))o[l]=h}if(t instanceof On){const l=t.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];const c=await n._getAppCheckToken(),u=c?`#${Pp}=${encodeURIComponent(c)}`:"";return`${Cp(n)}?${Dn(a).slice(1)}${u}`}function Cp({config:n}){return n.emulator?_s(n,Sp):`https://${n.authDomain}/${Rp}`}/**
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
 */const vi="webStorageSupport";class kp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Sc,this._completeRedirectFn=Zf,this._overrideRedirectResult=Yf}async _openPopup(t,e,r,i){var s;bt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Wo(t,e,r,Fi(),i);return Ap(t,o,Ts())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await Wo(t,e,r,Fi(),i);return Vf(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(bt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await _p(t),r=new ep(t);return e.register("authEvent",i=>(I(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(vi,{type:vi},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[vi];o!==void 0&&e(!!o),mt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=op(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return fc()||Es()||Fr()}}const bp=kp;var Ho="@firebase/auth",Ko="1.1.0";/**
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
 */class Dp{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vp(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Np(n){Pe(new se("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;I(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pc(n)},u=new of(r,i,s,c);return cf(u,e),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),Pe(new se("auth-internal",t=>{const e=Ue(t.getProvider("auth").getImmediate());return(r=>new Dp(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ht(Ho,Ko,Vp(n)),Ht(Ho,Ko,"esm2017")}/**
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
 */const Op=5*60,Mp=Ga("authIdTokenMaxAge")||Op;let Go=null;const Lp=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>Mp)return;const i=e==null?void 0:e.token;Go!==i&&(Go=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Gt(n=Ja()){const t=ps(n,"auth");if(t.isInitialized())return t.getImmediate();const e=af(n,{popupRedirectResolver:bp,persistence:[jf,kf,Sc]}),r=Ga("authTokenSyncURL");if(r){const s=Lp(r);wf(e,s,()=>s(e.currentUser)),Af(e,o=>s(o))}const i=Ha("auth");return i&&uf(e,`http://${i}`),e}Np("Browser");var xp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},m,ws=ws||{},T=xp||self;function jr(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Ln(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Fp(n){return Object.prototype.hasOwnProperty.call(n,Ii)&&n[Ii]||(n[Ii]=++Up)}var Ii="closure_uid_"+(1e9*Math.random()>>>0),Up=0;function Bp(n,t,e){return n.call.apply(n.bind,arguments)}function jp(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function rt(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?rt=Bp:rt=jp,rt.apply(null,arguments)}function Zn(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function G(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Jt(){this.s=this.s,this.o=this.o}var qp=0;Jt.prototype.s=!1;Jt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),qp!=0)&&Fp(this)};Jt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Nc=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Rs(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Qo(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(jr(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function it(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var zp=function(){if(!T.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{T.addEventListener("test",()=>{},t),T.removeEventListener("test",()=>{},t)}catch{}return n}();function pn(n){return/^[\s\xa0]*$/.test(n)}function qr(){var n=T.navigator;return n&&(n=n.userAgent)?n:""}function yt(n){return qr().indexOf(n)!=-1}function Ss(n){return Ss[" "](n),n}Ss[" "]=function(){};function Wp(n,t){var e=Lg;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var Hp=yt("Opera"),Ce=yt("Trident")||yt("MSIE"),Oc=yt("Edge"),Bi=Oc||Ce,Mc=yt("Gecko")&&!(qr().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge"))&&!(yt("Trident")||yt("MSIE"))&&!yt("Edge"),Kp=qr().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge");function Lc(){var n=T.document;return n?n.documentMode:void 0}var ji;t:{var Ti="",Ai=function(){var n=qr();if(Mc)return/rv:([^\);]+)(\)|;)/.exec(n);if(Oc)return/Edge\/([\d\.]+)/.exec(n);if(Ce)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Kp)return/WebKit\/(\S+)/.exec(n);if(Hp)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ai&&(Ti=Ai?Ai[1]:""),Ce){var wi=Lc();if(wi!=null&&wi>parseFloat(Ti)){ji=String(wi);break t}}ji=Ti}var qi;if(T.document&&Ce){var $o=Lc();qi=$o||parseInt(ji,10)||void 0}else qi=void 0;var Gp=qi;function gn(n,t){if(it.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Mc){t:{try{Ss(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Qp[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&gn.$.h.call(this)}}G(gn,it);var Qp={2:"touch",3:"pen",4:"mouse"};gn.prototype.h=function(){gn.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var xn="closure_listenable_"+(1e6*Math.random()|0),$p=0;function Yp(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++$p,this.fa=this.ia=!1}function zr(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function Ps(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function Jp(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function xc(n){const t={};for(const e in n)t[e]=n[e];return t}const Yo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fc(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<Yo.length;s++)e=Yo[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Wr(n){this.src=n,this.g={},this.h=0}Wr.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Wi(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Yp(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function zi(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=Nc(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(zr(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Wi(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var Cs="closure_lm_"+(1e6*Math.random()|0),Ri={};function Uc(n,t,e,r,i){if(r&&r.once)return jc(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Uc(n,t[s],e,r,i);return null}return e=Ds(e),n&&n[xn]?n.O(t,e,Ln(r)?!!r.capture:!!r,i):Bc(n,t,e,!1,r,i)}function Bc(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Ln(i)?!!i.capture:!!i,a=bs(n);if(a||(n[Cs]=a=new Wr(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=Xp(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)zp||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(zc(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Xp(){function n(e){return t.call(n.src,n.listener,e)}const t=Zp;return n}function jc(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)jc(n,t[s],e,r,i);return null}return e=Ds(e),n&&n[xn]?n.P(t,e,Ln(r)?!!r.capture:!!r,i):Bc(n,t,e,!0,r,i)}function qc(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)qc(n,t[s],e,r,i);else r=Ln(r)?!!r.capture:!!r,e=Ds(e),n&&n[xn]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Wi(s,e,r,i),-1<e&&(zr(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=bs(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Wi(t,e,r,i)),(e=-1<n?t[n]:null)&&ks(e))}function ks(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[xn])zi(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(zc(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=bs(t))?(zi(e,n),e.h==0&&(e.src=null,t[Cs]=null)):zr(n)}}}function zc(n){return n in Ri?Ri[n]:Ri[n]="on"+n}function Zp(n,t){if(n.fa)n=!0;else{t=new gn(t,this);var e=n.listener,r=n.la||n.src;n.ia&&ks(n),n=e.call(r,t)}return n}function bs(n){return n=n[Cs],n instanceof Wr?n:null}var Si="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ds(n){return typeof n=="function"?n:(n[Si]||(n[Si]=function(t){return n.handleEvent(t)}),n[Si])}function K(){Jt.call(this),this.i=new Wr(this),this.S=this,this.J=null}G(K,Jt);K.prototype[xn]=!0;K.prototype.removeEventListener=function(n,t,e,r){qc(this,n,t,e,r)};function J(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new it(t,n);else if(t instanceof it)t.target=t.target||n;else{var i=t;t=new it(r,n),Fc(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=tr(o,r,!0,t)&&i}if(o=t.g=n,i=tr(o,r,!0,t)&&i,i=tr(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=tr(o,r,!1,t)&&i}K.prototype.N=function(){if(K.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)zr(e[r]);delete n.g[t],n.h--}}this.J=null};K.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};K.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function tr(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,c=o.la||o.src;o.ia&&zi(n.i,o),i=a.call(c,r)!==!1&&i}}return i&&!r.defaultPrevented}var Vs=T.JSON.stringify;class tg{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function eg(){var n=Ns;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class ng{constructor(){this.h=this.g=null}add(t,e){const r=Wc.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var Wc=new tg(()=>new rg,n=>n.reset());class rg{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function ig(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function sg(n){T.setTimeout(()=>{throw n},0)}let mn,_n=!1,Ns=new ng,Hc=()=>{const n=T.Promise.resolve(void 0);mn=()=>{n.then(og)}};var og=()=>{for(var n;n=eg();){try{n.h.call(n.g)}catch(e){sg(e)}var t=Wc;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}_n=!1};function Hr(n,t){K.call(this),this.h=n||1,this.g=t||T,this.j=rt(this.qb,this),this.l=Date.now()}G(Hr,K);m=Hr.prototype;m.ga=!1;m.T=null;m.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),J(this,"tick"),this.ga&&(Os(this),this.start()))}};m.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Os(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}m.N=function(){Hr.$.N.call(this),Os(this),delete this.g};function Ms(n,t,e){if(typeof n=="function")e&&(n=rt(n,e));else if(n&&typeof n.handleEvent=="function")n=rt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:T.setTimeout(n,t||0)}function Kc(n){n.g=Ms(()=>{n.g=null,n.i&&(n.i=!1,Kc(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class ag extends Jt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Kc(this)}N(){super.N(),this.g&&(T.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(n){Jt.call(this),this.h=n,this.g={}}G(yn,Jt);var Jo=[];function Gc(n,t,e,r){Array.isArray(e)||(e&&(Jo[0]=e.toString()),e=Jo);for(var i=0;i<e.length;i++){var s=Uc(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Qc(n){Ps(n.g,function(t,e){this.g.hasOwnProperty(e)&&ks(t)},n),n.g={}}yn.prototype.N=function(){yn.$.N.call(this),Qc(this)};yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Kr(){this.g=!0}Kr.prototype.Ea=function(){this.g=!1};function cg(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function ug(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function ve(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+hg(n,e)+(r?" "+r:"")})}function lg(n,t){n.info(function(){return"TIMEOUT: "+t})}Kr.prototype.info=function(){};function hg(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Vs(e)}catch{return t}}var fe={},Xo=null;function Gr(){return Xo=Xo||new K}fe.Ta="serverreachability";function $c(n){it.call(this,fe.Ta,n)}G($c,it);function En(n){const t=Gr();J(t,new $c(t))}fe.STAT_EVENT="statevent";function Yc(n,t){it.call(this,fe.STAT_EVENT,n),this.stat=t}G(Yc,it);function ct(n){const t=Gr();J(t,new Yc(t,n))}fe.Ua="timingevent";function Jc(n,t){it.call(this,fe.Ua,n),this.size=t}G(Jc,it);function Fn(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return T.setTimeout(function(){n()},t)}var Qr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Xc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ls(){}Ls.prototype.h=null;function Zo(n){return n.h||(n.h=n.i())}function Zc(){}var Un={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xs(){it.call(this,"d")}G(xs,it);function Fs(){it.call(this,"c")}G(Fs,it);var Hi;function $r(){}G($r,Ls);$r.prototype.g=function(){return new XMLHttpRequest};$r.prototype.i=function(){return{}};Hi=new $r;function Bn(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new yn(this),this.P=dg,n=Bi?125:void 0,this.V=new Hr(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new tu}function tu(){this.i=null,this.g="",this.h=!1}var dg=45e3,Ki={},wr={};m=Bn.prototype;m.setTimeout=function(n){this.P=n};function Gi(n,t,e){n.L=1,n.v=Jr(Dt(t)),n.s=e,n.S=!0,eu(n,null)}function eu(n,t){n.G=Date.now(),jn(n),n.A=Dt(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),uu(e.i,"t",r),n.C=0,e=n.l.J,n.h=new tu,n.g=bu(n.l,e?t:null,!n.s),0<n.O&&(n.M=new ag(rt(n.Pa,n,n.g),n.O)),Gc(n.U,n.g,"readystatechange",n.nb),t=n.I?xc(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),En(),cg(n.j,n.u,n.A,n.m,n.W,n.s)}m.nb=function(n){n=n.target;const t=this.M;t&&Et(n)==3?t.l():this.Pa(n)};m.Pa=function(n){try{if(n==this.g)t:{const l=Et(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||Bi||this.g&&(this.h.h||this.g.ja()||ra(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?En(3):En(2)),Yr(this);var e=this.g.da();this.ca=e;e:if(nu(this)){var r=ra(this.g);n="";var i=r.length,s=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){te(this),sn(this);var o="";break e}this.h.i=new T.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,ug(this.j,this.u,this.A,this.m,this.W,l,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!pn(a)){var u=a;break e}}u=null}if(e=u)ve(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qi(this,e);else{this.i=!1,this.o=3,ct(12),te(this),sn(this);break t}}this.S?(ru(this,l,o),Bi&&this.i&&l==3&&(Gc(this.U,this.V,"tick",this.mb),this.V.start())):(ve(this.j,this.m,o,null),Qi(this,o)),l==4&&te(this),this.i&&!this.J&&(l==4?Su(this.l,this):(this.i=!1,jn(this)))}else Ng(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),te(this),sn(this)}}}catch{}finally{}};function nu(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function ru(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=fg(n,e),i==wr){t==4&&(n.o=4,ct(14),r=!1),ve(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Ki){n.o=4,ct(15),ve(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else ve(n.j,n.m,i,null),Qi(n,i);nu(n)&&i!=wr&&i!=Ki&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,ct(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Ws(t),t.M=!0,ct(11))):(ve(n.j,n.m,e,"[Invalid Chunked Response]"),te(n),sn(n))}m.mb=function(){if(this.g){var n=Et(this.g),t=this.g.ja();this.C<t.length&&(Yr(this),ru(this,n,t),this.i&&n!=4&&jn(this))}};function fg(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?wr:(e=Number(t.substring(e,r)),isNaN(e)?Ki:(r+=1,r+e>t.length?wr:(t=t.slice(r,r+e),n.C=r+e,t)))}m.cancel=function(){this.J=!0,te(this)};function jn(n){n.Y=Date.now()+n.P,iu(n,n.P)}function iu(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Fn(rt(n.lb,n),t)}function Yr(n){n.B&&(T.clearTimeout(n.B),n.B=null)}m.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(lg(this.j,this.A),this.L!=2&&(En(),ct(17)),te(this),this.o=2,sn(this)):iu(this,this.Y-n)};function sn(n){n.l.H==0||n.J||Su(n.l,n)}function te(n){Yr(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Os(n.V),Qc(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function Qi(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||$i(e.i,n))){if(!n.K&&$i(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Pr(e),ti(e);else break t;zs(e),ct(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Fn(rt(e.ib,e),6e3));if(1>=du(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else ee(e,11)}else if((n.K||e.g==n)&&Pr(e),!pn(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(e.V=u[0],u=u[1],e.H==2)if(u[0]=="c"){e.K=u[1],e.pa=u[2];const l=u[3];l!=null&&(e.ra=l,e.l.info("VER="+e.ra));const h=u[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const w=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Us(s,s.h),s.h=null))}if(r.F){const S=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(r.Da=S,O(r.I,r.F,S))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=ku(r,r.J?r.pa:null,r.Y),o.K){fu(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Yr(a),jn(a)),r.g=o}else wu(r);0<e.j.length&&ei(e)}else u[0]!="stop"&&u[0]!="close"||ee(e,7);else e.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ee(e,7):qs(e):u[0]!="noop"&&e.h&&e.h.Aa(u),e.A=0)}}En(4)}catch{}}function pg(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(jr(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function gg(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(jr(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function su(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(jr(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=gg(n),r=pg(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var ou=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mg(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ie(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof ie){this.h=n.h,Rr(this,n.j),this.s=n.s,this.g=n.g,Sr(this,n.m),this.l=n.l;var t=n.i,e=new vn;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),ta(this,e),this.o=n.o}else n&&(t=String(n).match(ou))?(this.h=!1,Rr(this,t[1]||"",!0),this.s=Ze(t[2]||""),this.g=Ze(t[3]||"",!0),Sr(this,t[4]),this.l=Ze(t[5]||"",!0),ta(this,t[6]||"",!0),this.o=Ze(t[7]||"")):(this.h=!1,this.i=new vn(null,this.h))}ie.prototype.toString=function(){var n=[],t=this.j;t&&n.push(tn(t,ea,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(tn(t,ea,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(tn(e,e.charAt(0)=="/"?Eg:yg,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",tn(e,Ig)),n.join("")};function Dt(n){return new ie(n)}function Rr(n,t,e){n.j=e?Ze(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Sr(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function ta(n,t,e){t instanceof vn?(n.i=t,Tg(n.i,n.h)):(e||(t=tn(t,vg)),n.i=new vn(t,n.h))}function O(n,t,e){n.i.set(t,e)}function Jr(n){return O(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Ze(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function tn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,_g),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function _g(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ea=/[#\/\?@]/g,yg=/[#\?:]/g,Eg=/[#\?]/g,vg=/[#\?@]/g,Ig=/#/g;function vn(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Xt(n){n.g||(n.g=new Map,n.h=0,n.i&&mg(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}m=vn.prototype;m.add=function(n,t){Xt(this),this.i=null,n=je(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function au(n,t){Xt(n),t=je(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function cu(n,t){return Xt(n),t=je(n,t),n.g.has(t)}m.forEach=function(n,t){Xt(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};m.ta=function(){Xt(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};m.Z=function(n){Xt(this);let t=[];if(typeof n=="string")cu(this,n)&&(t=t.concat(this.g.get(je(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};m.set=function(n,t){return Xt(this),this.i=null,n=je(this,n),cu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};m.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function uu(n,t,e){au(n,t),0<e.length&&(n.i=null,n.g.set(je(n,t),Rs(e)),n.h+=e.length)}m.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function je(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Tg(n,t){t&&!n.j&&(Xt(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(au(this,r),uu(this,i,e))},n)),n.j=t}var Ag=class{constructor(n,t){this.g=n,this.map=t}};function lu(n){this.l=n||wg,T.PerformanceNavigationTiming?(n=T.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(T.g&&T.g.Ka&&T.g.Ka()&&T.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wg=10;function hu(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function du(n){return n.h?1:n.g?n.g.size:0}function $i(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Us(n,t){n.g?n.g.add(t):n.h=t}function fu(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}lu.prototype.cancel=function(){if(this.i=pu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function pu(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Rs(n.i)}var Rg=class{stringify(n){return T.JSON.stringify(n,void 0)}parse(n){return T.JSON.parse(n,void 0)}};function Sg(){this.g=new Rg}function Pg(n,t,e){const r=e||"";try{su(n,function(i,s){let o=i;Ln(i)&&(o=Vs(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Cg(n,t){const e=new Kr;if(T.Image){const r=new Image;r.onload=Zn(er,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Zn(er,e,r,"TestLoadImage: error",!1,t),r.onabort=Zn(er,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Zn(er,e,r,"TestLoadImage: timeout",!1,t),T.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function er(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function qn(n){this.l=n.fc||null,this.j=n.ob||!1}G(qn,Ls);qn.prototype.g=function(){return new Xr(this.l,this.j)};qn.prototype.i=function(n){return function(){return n}}({});function Xr(n,t){K.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Bs,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}G(Xr,K);var Bs=0;m=Xr.prototype;m.open=function(n,t){if(this.readyState!=Bs)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,In(this)};m.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||T).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};m.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zn(this)),this.readyState=Bs};m.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,In(this)),this.g&&(this.readyState=3,In(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof T.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gu(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function gu(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}m.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?zn(this):In(this),this.readyState==3&&gu(this)}};m.Za=function(n){this.g&&(this.response=this.responseText=n,zn(this))};m.Ya=function(n){this.g&&(this.response=n,zn(this))};m.ka=function(){this.g&&zn(this)};function zn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,In(n)}m.setRequestHeader=function(n,t){this.v.append(n,t)};m.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};m.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function In(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var kg=T.JSON.parse;function U(n){K.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=mu,this.L=this.M=!1}G(U,K);var mu="",bg=/^https?$/i,Dg=["POST","PUT"];m=U.prototype;m.Oa=function(n){this.M=n};m.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Hi.g(),this.C=this.u?Zo(this.u):Zo(Hi),this.g.onreadystatechange=rt(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){na(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=T.FormData&&n instanceof T.FormData,!(0<=Nc(Dg,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Eu(this),0<this.B&&((this.L=Vg(this.g))?(this.g.timeout=this.B,this.g.ontimeout=rt(this.ua,this)):this.A=Ms(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){na(this,s)}};function Vg(n){return Ce&&typeof n.timeout=="number"&&n.ontimeout!==void 0}m.ua=function(){typeof ws<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,J(this,"timeout"),this.abort(8))};function na(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,_u(n),Zr(n)}function _u(n){n.F||(n.F=!0,J(n,"complete"),J(n,"error"))}m.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,J(this,"complete"),J(this,"abort"),Zr(this))};m.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Zr(this,!0)),U.$.N.call(this)};m.La=function(){this.s||(this.G||this.v||this.l?yu(this):this.kb())};m.kb=function(){yu(this)};function yu(n){if(n.h&&typeof ws<"u"&&(!n.C[1]||Et(n)!=4||n.da()!=2)){if(n.v&&Et(n)==4)Ms(n.La,0,n);else if(J(n,"readystatechange"),Et(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(ou)[1]||null;!i&&T.self&&T.self.location&&(i=T.self.location.protocol.slice(0,-1)),r=!bg.test(i?i.toLowerCase():"")}e=r}if(e)J(n,"complete"),J(n,"success");else{n.m=6;try{var s=2<Et(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",_u(n)}}finally{Zr(n)}}}}function Zr(n,t){if(n.g){Eu(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||J(n,"ready");try{e.onreadystatechange=r}catch{}}}function Eu(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(T.clearTimeout(n.A),n.A=null)}m.isActive=function(){return!!this.g};function Et(n){return n.g?n.g.readyState:0}m.da=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}};m.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};m.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),kg(t)}};function ra(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case mu:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function Ng(n){const t={};n=(n.g&&2<=Et(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(pn(n[r]))continue;var e=ig(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}Jp(t,function(r){return r.join(", ")})}m.Ia=function(){return this.m};m.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vu(n){let t="";return Ps(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function js(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=vu(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):O(n,t,e))}function $e(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Iu(n){this.Ga=0,this.j=[],this.l=new Kr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$e("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$e("baseRetryDelayMs",5e3,n),this.hb=$e("retryDelaySeedMs",1e4,n),this.eb=$e("forwardChannelMaxRetries",2,n),this.xa=$e("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new lu(n&&n.concurrentRequestLimit),this.Ja=new Sg,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}m=Iu.prototype;m.ra=8;m.H=1;function qs(n){if(Tu(n),n.H==3){var t=n.W++,e=Dt(n.I);if(O(e,"SID",n.K),O(e,"RID",t),O(e,"TYPE","terminate"),Wn(n,e),t=new Bn(n,n.l,t),t.L=2,t.v=Jr(Dt(e)),e=!1,T.navigator&&T.navigator.sendBeacon)try{e=T.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&T.Image&&(new Image().src=t.v,e=!0),e||(t.g=bu(t.l,null),t.g.ha(t.v)),t.G=Date.now(),jn(t)}Cu(n)}function ti(n){n.g&&(Ws(n),n.g.cancel(),n.g=null)}function Tu(n){ti(n),n.u&&(T.clearTimeout(n.u),n.u=null),Pr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&T.clearTimeout(n.m),n.m=null)}function ei(n){if(!hu(n.i)&&!n.m){n.m=!0;var t=n.Na;mn||Hc(),_n||(mn(),_n=!0),Ns.add(t,n),n.C=0}}function Og(n,t){return du(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Fn(rt(n.Na,n,t),Pu(n,n.C)),n.C++,!0)}m.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Bn(this,this.l,n);let s=this.s;if(this.U&&(s?(s=xc(s),Fc(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Au(this,i,t),e=Dt(this.I),O(e,"RID",n),O(e,"CVER",22),this.F&&O(e,"X-HTTP-Session-Id",this.F),Wn(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(vu(s)))+"&"+t:this.o&&js(e,this.o,s)),Us(this.i,i),this.bb&&O(e,"TYPE","init"),this.P?(O(e,"$req",t),O(e,"SID","null"),i.aa=!0,Gi(i,e,null)):Gi(i,e,t),this.H=2}}else this.H==3&&(n?ia(this,n):this.j.length==0||hu(this.i)||ia(this))};function ia(n,t){var e;t?e=t.m:e=n.W++;const r=Dt(n.I);O(r,"SID",n.K),O(r,"RID",e),O(r,"AID",n.V),Wn(n,r),n.o&&n.s&&js(r,n.o,n.s),e=new Bn(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Au(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Us(n.i,e),Gi(e,r,t)}function Wn(n,t){n.na&&Ps(n.na,function(e,r){O(t,r,e)}),n.h&&su({},function(e,r){O(t,r,e)})}function Au(n,t,e){e=Math.min(n.j.length,e);var r=n.h?rt(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let c=0;c<e;c++){let u=i[c].g;const l=i[c].map;if(u-=s,0>u)s=Math.max(0,i[c].g-100),a=!1;else try{Pg(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function wu(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;mn||Hc(),_n||(mn(),_n=!0),Ns.add(t,n),n.A=0}}function zs(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Fn(rt(n.Ma,n),Pu(n,n.A)),n.A++,!0)}m.Ma=function(){if(this.u=null,Ru(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Fn(rt(this.jb,this),n)}};m.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ct(10),ti(this),Ru(this))};function Ws(n){n.B!=null&&(T.clearTimeout(n.B),n.B=null)}function Ru(n){n.g=new Bn(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Dt(n.wa);O(t,"RID","rpc"),O(t,"SID",n.K),O(t,"AID",n.V),O(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&O(t,"TO",n.qa),O(t,"TYPE","xmlhttp"),Wn(n,t),n.o&&n.s&&js(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=Jr(Dt(t)),e.s=null,e.S=!0,eu(e,n)}m.ib=function(){this.v!=null&&(this.v=null,ti(this),zs(this),ct(19))};function Pr(n){n.v!=null&&(T.clearTimeout(n.v),n.v=null)}function Su(n,t){var e=null;if(n.g==t){Pr(n),Ws(n),n.g=null;var r=2}else if($i(n.i,t))e=t.F,fu(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=Gr(),J(r,new Jc(r,e)),ei(n)}else wu(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&Og(n,t)||r==2&&zs(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:ee(n,5);break;case 4:ee(n,10);break;case 3:ee(n,6);break;default:ee(n,2)}}}function Pu(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function ee(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=rt(n.pb,n);e||(e=new ie("//www.google.com/images/cleardot.gif"),T.location&&T.location.protocol=="http"||Rr(e,"https"),Jr(e)),Cg(e.toString(),r)}else ct(2);n.H=0,n.h&&n.h.za(t),Cu(n),Tu(n)}m.pb=function(n){n?(this.l.info("Successfully pinged google.com"),ct(2)):(this.l.info("Failed to ping google.com"),ct(1))};function Cu(n){if(n.H=0,n.ma=[],n.h){const t=pu(n.i);(t.length!=0||n.j.length!=0)&&(Qo(n.ma,t),Qo(n.ma,n.j),n.i.i.length=0,Rs(n.j),n.j.length=0),n.h.ya()}}function ku(n,t,e){var r=e instanceof ie?Dt(e):new ie(e);if(r.g!="")t&&(r.g=t+"."+r.g),Sr(r,r.m);else{var i=T.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new ie(null);r&&Rr(s,r),t&&(s.g=t),i&&Sr(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&O(r,e,t),O(r,"VER",n.ra),Wn(n,r),r}function bu(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new U(new qn({ob:!0})):new U(n.va),t.Oa(n.J),t}m.isActive=function(){return!!this.h&&this.h.isActive(this)};function Du(){}m=Du.prototype;m.Ba=function(){};m.Aa=function(){};m.za=function(){};m.ya=function(){};m.isActive=function(){return!0};m.Va=function(){};function Cr(){if(Ce&&!(10<=Number(Gp)))throw Error("Environmental error: no available transport.")}Cr.prototype.g=function(n,t){return new ut(n,t)};function ut(n,t){K.call(this),this.g=new Iu(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!pn(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!pn(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new qe(this)}G(ut,K);ut.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;ct(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=ku(n,null,n.Y),ei(n)};ut.prototype.close=function(){qs(this.g)};ut.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=Vs(n),n=e);t.j.push(new Ag(t.fb++,n)),t.H==3&&ei(t)};ut.prototype.N=function(){this.g.h=null,delete this.j,qs(this.g),delete this.g,ut.$.N.call(this)};function Vu(n){xs.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}G(Vu,xs);function Nu(){Fs.call(this),this.status=1}G(Nu,Fs);function qe(n){this.g=n}G(qe,Du);qe.prototype.Ba=function(){J(this.g,"a")};qe.prototype.Aa=function(n){J(this.g,new Vu(n))};qe.prototype.za=function(n){J(this.g,new Nu)};qe.prototype.ya=function(){J(this.g,"b")};function Mg(){this.blockSize=-1}function _t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}G(_t,Mg);_t.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Pi(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}_t.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Pi(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Pi(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Pi(this,r),i=0;break}}this.h=i,this.i+=t};_t.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function V(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var Lg={};function Hs(n){return-128<=n&&128>n?Wp(n,function(t){return new V([t|0],0>t?-1:0)}):new V([n|0],0>n?-1:0)}function vt(n){if(isNaN(n)||!isFinite(n))return Ae;if(0>n)return Y(vt(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=Yi;return new V(t,0)}function Ou(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return Y(Ou(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=vt(Math.pow(t,8)),r=Ae,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=vt(Math.pow(t,s)),r=r.R(s).add(vt(o))):(r=r.R(e),r=r.add(vt(o)))}return r}var Yi=4294967296,Ae=Hs(0),Ji=Hs(1),sa=Hs(16777216);m=V.prototype;m.ea=function(){if(ht(this))return-Y(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:Yi+r)*t,t*=Yi}return n};m.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Ct(this))return"0";if(ht(this))return"-"+Y(this).toString(n);for(var t=vt(Math.pow(n,6)),e=this,r="";;){var i=br(e,t).g;e=kr(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,Ct(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};m.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Ct(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function ht(n){return n.h==-1}m.X=function(n){return n=kr(this,n),ht(n)?-1:Ct(n)?0:1};function Y(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new V(e,~n.h).add(Ji)}m.abs=function(){return ht(this)?Y(this):this};m.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new V(e,e[e.length-1]&-2147483648?-1:0)};function kr(n,t){return n.add(Y(t))}m.R=function(n){if(Ct(this)||Ct(n))return Ae;if(ht(this))return ht(n)?Y(this).R(Y(n)):Y(Y(this).R(n));if(ht(n))return Y(this.R(Y(n)));if(0>this.X(sa)&&0>n.X(sa))return vt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,c=n.D(i)&65535;e[2*r+2*i]+=o*c,nr(e,2*r+2*i),e[2*r+2*i+1]+=s*c,nr(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,nr(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,nr(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new V(e,0)};function nr(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Ye(n,t){this.g=n,this.h=t}function br(n,t){if(Ct(t))throw Error("division by zero");if(Ct(n))return new Ye(Ae,Ae);if(ht(n))return t=br(Y(n),t),new Ye(Y(t.g),Y(t.h));if(ht(t))return t=br(n,Y(t)),new Ye(Y(t.g),t.h);if(30<n.g.length){if(ht(n)||ht(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Ji,r=t;0>=r.X(n);)e=oa(e),r=oa(r);var i=me(e,1),s=me(r,1);for(r=me(r,2),e=me(e,2);!Ct(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=me(r,1),e=me(e,1)}return t=kr(n,i.R(t)),new Ye(i,t)}for(i=Ae;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=vt(e),o=s.R(t);ht(o)||0<o.X(n);)e-=r,s=vt(e),o=s.R(t);Ct(s)&&(s=Ji),i=i.add(s),n=kr(n,o)}return new Ye(i,n)}m.gb=function(n){return br(this,n).h};m.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new V(e,this.h&n.h)};m.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new V(e,this.h|n.h)};m.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new V(e,this.h^n.h)};function oa(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new V(e,n.h)}function me(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new V(i,n.h)}Cr.prototype.createWebChannel=Cr.prototype.g;ut.prototype.send=ut.prototype.u;ut.prototype.open=ut.prototype.m;ut.prototype.close=ut.prototype.close;Qr.NO_ERROR=0;Qr.TIMEOUT=8;Qr.HTTP_ERROR=6;Xc.COMPLETE="complete";Zc.EventType=Un;Un.OPEN="a";Un.CLOSE="b";Un.ERROR="c";Un.MESSAGE="d";K.prototype.listen=K.prototype.O;U.prototype.listenOnce=U.prototype.P;U.prototype.getLastError=U.prototype.Sa;U.prototype.getLastErrorCode=U.prototype.Ia;U.prototype.getStatus=U.prototype.da;U.prototype.getResponseJson=U.prototype.Wa;U.prototype.getResponseText=U.prototype.ja;U.prototype.send=U.prototype.ha;U.prototype.setWithCredentials=U.prototype.Oa;_t.prototype.digest=_t.prototype.l;_t.prototype.reset=_t.prototype.reset;_t.prototype.update=_t.prototype.j;V.prototype.add=V.prototype.add;V.prototype.multiply=V.prototype.R;V.prototype.modulo=V.prototype.gb;V.prototype.compare=V.prototype.X;V.prototype.toNumber=V.prototype.ea;V.prototype.toString=V.prototype.toString;V.prototype.getBits=V.prototype.D;V.fromNumber=vt;V.fromString=Ou;var xg=function(){return new Cr},Fg=function(){return Gr()},Ci=Qr,Ug=Xc,Bg=fe,aa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jg=qn,rr=Zc,qg=U,zg=_t,we=V;const ca="@firebase/firestore";/**
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
 */class tt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
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
 */let ze="10.1.0";/**
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
 */const ue=new ds("@firebase/firestore");function ua(){return ue.logLevel}function _(n,...t){if(ue.logLevel<=b.DEBUG){const e=t.map(Ks);ue.debug(`Firestore (${ze}): ${n}`,...e)}}function Vt(n,...t){if(ue.logLevel<=b.ERROR){const e=t.map(Ks);ue.error(`Firestore (${ze}): ${n}`,...e)}}function ke(n,...t){if(ue.logLevel<=b.WARN){const e=t.map(Ks);ue.warn(`Firestore (${ze}): ${n}`,...e)}}function Ks(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function A(n="Unexpected state"){const t=`FIRESTORE (${ze}) INTERNAL ASSERTION FAILED: `+n;throw Vt(t),new Error(t)}function M(n,t){n||A()}function P(n,t){return n}/**
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
 */const p={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class v extends Lt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class Mu{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(tt.UNAUTHENTICATED))}shutdown(){}}class Hg{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Kg{constructor(t){this.t=t,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=c=>this.i!==r?(r=this.i,e(c)):Promise.resolve();let s=new Kt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Kt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{_("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(_("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Kt)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(_("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(M(typeof r.accessToken=="string"),new Mu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return M(t===null||typeof t=="string"),new tt(t)}}class Gg{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Qg{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Gg(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $g{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Yg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&_("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,_("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{_("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):_("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(M(typeof e.token=="string"),this.R=e.token,new $g(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Jg(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Lu{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Jg(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function D(n,t){return n<t?-1:n>t?1:0}function be(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class W{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new v(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new v(p.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new v(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new v(p.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return W.fromMillis(Date.now())}static fromDate(t){return W.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new W(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?D(this.nanoseconds,t.nanoseconds):D(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class R{constructor(t){this.timestamp=t}static fromTimestamp(t){return new R(t)}static min(){return new R(new W(0,0))}static max(){return new R(new W(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Tn{constructor(t,e,r){e===void 0?e=0:e>t.length&&A(),r===void 0?r=t.length-e:r>t.length-e&&A(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Tn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Tn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends Tn{construct(t,e,r){return new F(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new v(p.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new F(e)}static emptyPath(){return new F([])}}const Xg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Tn{construct(t,e,r){return new nt(t,e,r)}static isValidIdentifier(t){return Xg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new v(p.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new v(p.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new v(p.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new v(p.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new nt(e)}static emptyPath(){return new nt([])}}/**
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
 */class y{constructor(t){this.path=t}static fromPath(t){return new y(F.fromString(t))}static fromName(t){return new y(F.fromString(t).popFirst(5))}static empty(){return new y(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&F.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new y(new F(t.slice()))}}function Zg(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=R.fromTimestamp(r===1e9?new W(e+1,0):new W(e,r));return new Qt(i,y.empty(),t)}function tm(n){return new Qt(n.readTime,n.key,-1)}class Qt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Qt(R.min(),y.empty(),-1)}static max(){return new Qt(R.max(),y.empty(),-1)}}function em(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=y.comparator(n.documentKey,t.documentKey),e!==0?e:D(n.largestBatchId,t.largestBatchId))}/**
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
 */const nm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Hn(n){if(n.code!==p.FAILED_PRECONDITION||n.message!==nm)throw n;_("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class g{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new g((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof g?e:g.resolve(e)}catch(e){return g.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):g.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):g.reject(e)}static resolve(t){return new g((e,r)=>{e(t)})}static reject(t){return new g((e,r)=>{r(t)})}static waitFor(t){return new g((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},c=>r(c))}),o=!0,s===i&&e()})}static or(t){let e=g.resolve(!1);for(const r of t)e=e.next(i=>i?g.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new g((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let c=0;c<s;c++){const u=c;e(t[u]).next(l=>{o[u]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,e){return new g((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function Kn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Gs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Gs.ae=-1;function ni(n){return n==null}function Dr(n){return n===0&&1/n==-1/0}function im(n){return typeof n=="number"&&Number.isInteger(n)&&!Dr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function la(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function We(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function xu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class L{constructor(t,e){this.comparator=t,this.root=e||$.EMPTY}insert(t,e){return new L(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,$.BLACK,null,null))}remove(t){return new L(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ir(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ir(this.root,t,this.comparator,!1)}getReverseIterator(){return new ir(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ir(this.root,t,this.comparator,!0)}}class ir{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ${constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??$.RED,this.left=i??$.EMPTY,this.right=s??$.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new $(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return $.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}$.EMPTY=null,$.RED=!0,$.BLACK=!1;$.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(t,e,r,i,s){return this}insert(t,e,r){return new $(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(t){this.comparator=t,this.data=new L(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ha(this.data.getIterator())}getIteratorFrom(t){return new ha(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class ha{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class gt{constructor(t){this.fields=t,t.sort(nt.comparator)}static empty(){return new gt([])}unionWith(t){let e=new st(nt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new gt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return be(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Fu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Fu("Invalid base64 string: "+s):s}}(t);return new at(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new at(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return D(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}at.EMPTY_BYTE_STRING=new at("");const sm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $t(n){if(M(!!n),typeof n=="string"){let t=0;const e=sm.exec(n);if(M(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:q(n.seconds),nanos:q(n.nanos)}}function q(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function le(n){return typeof n=="string"?at.fromBase64String(n):at.fromUint8Array(n)}/**
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
 */function Qs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function $s(n){const t=n.mapValue.fields.__previous_value__;return Qs(t)?$s(t):t}function An(n){const t=$t(n.mapValue.fields.__local_write_time__.timestampValue);return new W(t.seconds,t.nanos)}/**
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
 */class om{constructor(t,e,r,i,s,o,a,c,u){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class wn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new wn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof wn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const sr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function he(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qs(n)?4:am(n)?9007199254740991:10:A()}function wt(n,t){if(n===t)return!0;const e=he(n);if(e!==he(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return An(n).isEqual(An(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=$t(i.timestampValue),a=$t(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return le(i.bytesValue).isEqual(le(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return q(i.geoPointValue.latitude)===q(s.geoPointValue.latitude)&&q(i.geoPointValue.longitude)===q(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return q(i.integerValue)===q(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=q(i.doubleValue),a=q(s.doubleValue);return o===a?Dr(o)===Dr(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return be(n.arrayValue.values||[],t.arrayValue.values||[],wt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(la(o)!==la(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!wt(o[c],a[c])))return!1;return!0}(n,t);default:return A()}}function Rn(n,t){return(n.values||[]).find(e=>wt(e,t))!==void 0}function De(n,t){if(n===t)return 0;const e=he(n),r=he(t);if(e!==r)return D(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return D(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=q(s.integerValue||s.doubleValue),c=q(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(n,t);case 3:return da(n.timestampValue,t.timestampValue);case 4:return da(An(n),An(t));case 5:return D(n.stringValue,t.stringValue);case 6:return function(s,o){const a=le(s),c=le(o);return a.compareTo(c)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=D(a[u],c[u]);if(l!==0)return l}return D(a.length,c.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=D(q(s.latitude),q(o.latitude));return a!==0?a:D(q(s.longitude),q(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=De(a[u],c[u]);if(l)return l}return D(a.length,c.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===sr.mapValue&&o===sr.mapValue)return 0;if(s===sr.mapValue)return 1;if(o===sr.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const d=D(c[h],l[h]);if(d!==0)return d;const f=De(a[c[h]],u[l[h]]);if(f!==0)return f}return D(c.length,l.length)}(n.mapValue,t.mapValue);default:throw A()}}function da(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return D(n,t);const e=$t(n),r=$t(t),i=D(e.seconds,r.seconds);return i!==0?i:D(e.nanos,r.nanos)}function Ve(n){return Xi(n)}function Xi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=$t(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return le(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return y.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=Xi(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Xi(e.fields[o])}`;return i+"}"}(n.mapValue):A()}function Zi(n){return!!n&&"integerValue"in n}function Ys(n){return!!n&&"arrayValue"in n}function fa(n){return!!n&&"nullValue"in n}function pa(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function dr(n){return!!n&&"mapValue"in n}function on(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return We(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=on(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=on(n.arrayValue.values[e]);return t}return Object.assign({},n)}function am(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class dt{constructor(t){this.value=t}static empty(){return new dt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!dr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=on(e)}setAll(t){let e=nt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const c=this.getFieldsMap(e);this.applyChanges(c,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=on(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());dr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];dr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){We(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new dt(on(this.value))}}function Uu(n){const t=[];return We(n.fields,(e,r)=>{const i=new nt([e]);if(dr(r)){const s=Uu(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new gt(t)}/**
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
 */class et{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new et(t,0,R.min(),R.min(),R.min(),dt.empty(),0)}static newFoundDocument(t,e,r,i){return new et(t,1,e,R.min(),r,i,0)}static newNoDocument(t,e){return new et(t,2,e,R.min(),R.min(),dt.empty(),0)}static newUnknownDocument(t,e){return new et(t,3,e,R.min(),R.min(),dt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(R.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=R.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vr{constructor(t,e){this.position=t,this.inclusive=e}}function ga(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=y.comparator(y.fromName(o.referenceValue),e.key):r=De(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ma(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!wt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class an{constructor(t,e="asc"){this.field=t,this.dir=e}}function cm(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Bu{}class z extends Bu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new lm(t,e,r):e==="array-contains"?new fm(t,r):e==="in"?new pm(t,r):e==="not-in"?new gm(t,r):e==="array-contains-any"?new mm(t,r):new z(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new hm(t,r):new dm(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(De(e,this.value)):e!==null&&he(this.value)===he(e)&&this.matchesComparison(De(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Rt extends Bu{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Rt(t,e)}matches(t){return ju(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le(e=>e.isInequality());return t!==null?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function ju(n){return n.op==="and"}function qu(n){return um(n)&&ju(n)}function um(n){for(const t of n.filters)if(t instanceof Rt)return!1;return!0}function ts(n){if(n instanceof z)return n.field.canonicalString()+n.op.toString()+Ve(n.value);if(qu(n))return n.filters.map(t=>ts(t)).join(",");{const t=n.filters.map(e=>ts(e)).join(",");return`${n.op}(${t})`}}function zu(n,t){return n instanceof z?function(r,i){return i instanceof z&&r.op===i.op&&r.field.isEqual(i.field)&&wt(r.value,i.value)}(n,t):n instanceof Rt?function(r,i){return i instanceof Rt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&zu(o,i.filters[a]),!0):!1}(n,t):void A()}function Wu(n){return n instanceof z?function(e){return`${e.field.canonicalString()} ${e.op} ${Ve(e.value)}`}(n):n instanceof Rt?function(e){return e.op.toString()+" {"+e.getFilters().map(Wu).join(" ,")+"}"}(n):"Filter"}class lm extends z{constructor(t,e,r){super(t,e,r),this.key=y.fromName(r.referenceValue)}matches(t){const e=y.comparator(t.key,this.key);return this.matchesComparison(e)}}class hm extends z{constructor(t,e){super(t,"in",e),this.keys=Hu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class dm extends z{constructor(t,e){super(t,"not-in",e),this.keys=Hu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Hu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>y.fromName(r.referenceValue))}class fm extends z{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ys(e)&&Rn(e.arrayValue,this.value)}}class pm extends z{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Rn(this.value.arrayValue,e)}}class gm extends z{constructor(t,e){super(t,"not-in",e)}matches(t){if(Rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Rn(this.value.arrayValue,e)}}class mm extends z{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ys(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Rn(this.value.arrayValue,r))}}/**
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
 */class _m{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function _a(n,t=null,e=[],r=[],i=null,s=null,o=null){return new _m(n,t,e,r,i,s,o)}function Js(n){const t=P(n);if(t.he===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ts(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ni(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ve(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ve(r)).join(",")),t.he=e}return t.he}function Xs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!cm(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!zu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ma(n.startAt,t.startAt)&&ma(n.endAt,t.endAt)}function es(n){return y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ri{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=c,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function ym(n,t,e,r,i,s,o,a){return new ri(n,t,e,r,i,s,o,a)}function Zs(n){return new ri(n)}function ya(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Em(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function vm(n){for(const t of n.filters){const e=t.getFirstInequalityField();if(e!==null)return e}return null}function Im(n){return n.collectionGroup!==null}function Re(n){const t=P(n);if(t.Pe===null){t.Pe=[];const e=vm(t),r=Em(t);if(e!==null&&r===null)e.isKeyField()||t.Pe.push(new an(e)),t.Pe.push(new an(nt.keyField(),"asc"));else{let i=!1;for(const s of t.explicitOrderBy)t.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.Pe.push(new an(nt.keyField(),s))}}}return t.Pe}function Nt(n){const t=P(n);if(!t.Ie)if(t.limitType==="F")t.Ie=_a(t.path,t.collectionGroup,Re(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of Re(t)){const o=s.dir==="desc"?"asc":"desc";e.push(new an(s.field,o))}const r=t.endAt?new Vr(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Vr(t.startAt.position,t.startAt.inclusive):null;t.Ie=_a(t.path,t.collectionGroup,e,t.filters,t.limit,r,i)}return t.Ie}function ns(n,t,e){return new ri(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function ii(n,t){return Xs(Nt(n),Nt(t))&&n.limitType===t.limitType}function Ku(n){return`${Js(Nt(n))}|lt:${n.limitType}`}function rs(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Wu(i)).join(", ")}]`),ni(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Ve(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Ve(i)).join(",")),`Target(${r})`}(Nt(n))}; limitType=${n.limitType})`}function si(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of Re(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,c){const u=ga(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Re(r),i)||r.endAt&&!function(o,a,c){const u=ga(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Re(r),i))}(n,t)}function Tm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Gu(n){return(t,e)=>{let r=!1;for(const i of Re(n)){const s=Am(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Am(n,t,e){const r=n.field.isKeyField()?y.comparator(t.key,e.key):function(s,o,a){const c=o.data.field(s),u=a.data.field(s);return c!==null&&u!==null?De(c,u):A()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return A()}}/**
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
 */class He{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){We(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return xu(this.inner)}size(){return this.innerSize}}/**
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
 */const wm=new L(y.comparator);function Ot(){return wm}const Qu=new L(y.comparator);function en(...n){let t=Qu;for(const e of n)t=t.insert(e.key,e);return t}function $u(n){let t=Qu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ne(){return cn()}function Yu(){return cn()}function cn(){return new He(n=>n.toString(),(n,t)=>n.isEqual(t))}const Rm=new L(y.comparator),Sm=new st(y.comparator);function C(...n){let t=Sm;for(const e of n)t=t.add(e);return t}const Pm=new st(D);function Cm(){return Pm}/**
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
 */function Ju(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Dr(t)?"-0":t}}function Xu(n){return{integerValue:""+n}}function km(n,t){return im(t)?Xu(t):Ju(n,t)}/**
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
 */class oi{constructor(){this._=void 0}}function bm(n,t,e){return n instanceof Nr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qs(s)&&(s=$s(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof Sn?tl(n,t):n instanceof Pn?el(n,t):function(i,s){const o=Zu(i,s),a=Ea(o)+Ea(i.Te);return Zi(o)&&Zi(i.Te)?Xu(a):Ju(i.serializer,a)}(n,t)}function Dm(n,t,e){return n instanceof Sn?tl(n,t):n instanceof Pn?el(n,t):e}function Zu(n,t){return n instanceof Or?function(r){return Zi(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Nr extends oi{}class Sn extends oi{constructor(t){super(),this.elements=t}}function tl(n,t){const e=nl(t);for(const r of n.elements)e.some(i=>wt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Pn extends oi{constructor(t){super(),this.elements=t}}function el(n,t){let e=nl(t);for(const r of n.elements)e=e.filter(i=>!wt(i,r));return{arrayValue:{values:e}}}class Or extends oi{constructor(t,e){super(),this.serializer=t,this.Te=e}}function Ea(n){return q(n.integerValue||n.doubleValue)}function nl(n){return Ys(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Vm(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Sn&&i instanceof Sn||r instanceof Pn&&i instanceof Pn?be(r.elements,i.elements,wt):r instanceof Or&&i instanceof Or?wt(r.Te,i.Te):r instanceof Nr&&i instanceof Nr}(n.transform,t.transform)}class Nm{constructor(t,e){this.version=t,this.transformResults=e}}class kt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new kt}static exists(t){return new kt(void 0,t)}static updateTime(t){return new kt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ai{}function rl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new sl(n.key,kt.none()):new Gn(n.key,n.data,kt.none());{const e=n.data,r=dt.empty();let i=new st(nt.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new pe(n.key,r,new gt(i.toArray()),kt.none())}}function Om(n,t,e){n instanceof Gn?function(i,s,o){const a=i.value.clone(),c=Ia(i.fieldTransforms,s,o.transformResults);a.setAll(c),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof pe?function(i,s,o){if(!fr(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Ia(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(il(i)),c.setAll(a),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function un(n,t,e,r){return n instanceof Gn?function(s,o,a,c){if(!fr(s.precondition,o))return a;const u=s.value.clone(),l=Ta(s.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,t,e,r):n instanceof pe?function(s,o,a,c){if(!fr(s.precondition,o))return a;const u=Ta(s.fieldTransforms,c,o),l=o.data;return l.setAll(il(s)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return fr(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function Mm(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=Zu(r.transform,i||null);s!=null&&(e===null&&(e=dt.empty()),e.set(r.field,s))}return e||null}function va(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&be(r,i,(s,o)=>Vm(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Gn extends ai{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pe extends ai{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function il(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ia(n,t,e){const r=new Map;M(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Dm(o,a,e[i]))}return r}function Ta(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,bm(s,o,t))}return r}class sl extends ai{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Lm extends ai{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class xm{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Om(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=un(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=un(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Yu();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const c=rl(o,a);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(R.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),C())}isEqual(t){return this.batchId===t.batchId&&be(this.mutations,t.mutations,(e,r)=>va(e,r))&&be(this.baseMutations,t.baseMutations,(e,r)=>va(e,r))}}class to{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){M(t.mutations.length===r.length);let i=function(){return Rm}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new to(t,e,r,i)}}/**
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
 */class Fm{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Um{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var j,k;function Bm(n){switch(n){default:return A();case p.CANCELLED:case p.UNKNOWN:case p.DEADLINE_EXCEEDED:case p.RESOURCE_EXHAUSTED:case p.INTERNAL:case p.UNAVAILABLE:case p.UNAUTHENTICATED:return!1;case p.INVALID_ARGUMENT:case p.NOT_FOUND:case p.ALREADY_EXISTS:case p.PERMISSION_DENIED:case p.FAILED_PRECONDITION:case p.ABORTED:case p.OUT_OF_RANGE:case p.UNIMPLEMENTED:case p.DATA_LOSS:return!0}}function ol(n){if(n===void 0)return Vt("GRPC error has no .code"),p.UNKNOWN;switch(n){case j.OK:return p.OK;case j.CANCELLED:return p.CANCELLED;case j.UNKNOWN:return p.UNKNOWN;case j.DEADLINE_EXCEEDED:return p.DEADLINE_EXCEEDED;case j.RESOURCE_EXHAUSTED:return p.RESOURCE_EXHAUSTED;case j.INTERNAL:return p.INTERNAL;case j.UNAVAILABLE:return p.UNAVAILABLE;case j.UNAUTHENTICATED:return p.UNAUTHENTICATED;case j.INVALID_ARGUMENT:return p.INVALID_ARGUMENT;case j.NOT_FOUND:return p.NOT_FOUND;case j.ALREADY_EXISTS:return p.ALREADY_EXISTS;case j.PERMISSION_DENIED:return p.PERMISSION_DENIED;case j.FAILED_PRECONDITION:return p.FAILED_PRECONDITION;case j.ABORTED:return p.ABORTED;case j.OUT_OF_RANGE:return p.OUT_OF_RANGE;case j.UNIMPLEMENTED:return p.UNIMPLEMENTED;case j.DATA_LOSS:return p.DATA_LOSS;default:return A()}}(k=j||(j={}))[k.OK=0]="OK",k[k.CANCELLED=1]="CANCELLED",k[k.UNKNOWN=2]="UNKNOWN",k[k.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",k[k.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",k[k.NOT_FOUND=5]="NOT_FOUND",k[k.ALREADY_EXISTS=6]="ALREADY_EXISTS",k[k.PERMISSION_DENIED=7]="PERMISSION_DENIED",k[k.UNAUTHENTICATED=16]="UNAUTHENTICATED",k[k.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",k[k.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",k[k.ABORTED=10]="ABORTED",k[k.OUT_OF_RANGE=11]="OUT_OF_RANGE",k[k.UNIMPLEMENTED=12]="UNIMPLEMENTED",k[k.INTERNAL=13]="INTERNAL",k[k.UNAVAILABLE=14]="UNAVAILABLE",k[k.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class eo{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return or}static getOrCreateInstance(){return or===null&&(or=new eo),or}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(e=>e(t))}}let or=null;/**
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
 */function jm(){return new TextEncoder}/**
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
 */const qm=new we([4294967295,4294967295],0);function Aa(n){const t=jm().encode(n),e=new zg;return e.update(t),new Uint8Array(e.digest())}function wa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new we([e,r],0),new we([i,s],0)]}class no{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new nn(`Invalid padding: ${e}`);if(r<0)throw new nn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new nn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new nn(`Invalid padding when bitmap length is 0: ${e}`);this.de=8*t.length-e,this.Ae=we.fromNumber(this.de)}Re(t,e,r){let i=t.add(e.multiply(we.fromNumber(r)));return i.compare(qm)===1&&(i=new we([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.de===0)return!1;const e=Aa(t),[r,i]=wa(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new no(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.de===0)return;const e=Aa(t),[r,i]=wa(e);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ci{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Qn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ci(R.min(),i,new L(D),Ot(),C())}}class Qn{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Qn(r,e,C(),C(),C())}}/**
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
 */class pr{constructor(t,e,r,i){this.fe=t,this.removedTargetIds=e,this.key=r,this.ge=i}}class al{constructor(t,e){this.targetId=t,this.pe=e}}class cl{constructor(t,e,r=at.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Ra{constructor(){this.ye=0,this.we=Pa(),this.Se=at.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=C(),e=C(),r=C();return this.we.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:A()}}),new Qn(this.Se,this.be,t,e,r)}xe(){this.De=!1,this.we=Pa()}Oe(t,e){this.De=!0,this.we=this.we.insert(t,e)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class zm{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=Ot(),this.$e=Sa(),this.Ue=new L(D)}We(t){for(const e of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(e,t.ge):this.ze(e,t.key,t.ge);for(const e of t.removedTargetIds)this.ze(e,t.key,t.ge)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Fe(t.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(t.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(e);break;case 3:this.Je(e)&&(r.ke(),r.Fe(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Fe(t.resumeToken));break;default:A()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qe.forEach((r,i)=>{this.Je(i)&&e(i)})}Ze(t){var e,r;const i=t.targetId,s=t.pe.count,o=this.Xe(i);if(o){const a=o.target;if(es(a))if(s===0){const c=new y(a.path);this.ze(i,c,et.newNoDocument(c,R.min()))}else M(s===1);else{const c=this.et(i);if(c!==s){const u=this.tt(t,c);if(u.status!==0){this.Ye(i);const l=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,l)}(e=eo.instance)===null||e===void 0||e.notifyOnExistenceFilterMismatch(function(h,d,f,w){var S,E,N,x,B,X;const lt={localCacheCount:f,existenceFilterCount:w.count},Q=w.unchangedNames;return Q&&(lt.bloomFilter={applied:h===0,hashCount:(S=Q==null?void 0:Q.hashCount)!==null&&S!==void 0?S:0,bitmapLength:(x=(N=(E=Q==null?void 0:Q.bits)===null||E===void 0?void 0:E.bitmap)===null||N===void 0?void 0:N.length)!==null&&x!==void 0?x:0,padding:(X=(B=Q==null?void 0:Q.bits)===null||B===void 0?void 0:B.padding)!==null&&X!==void 0?X:0},d&&(lt.bloomFilter.mightContain=d)),lt}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,c,t.pe))}}}}tt(t,e){const{unchangedNames:r,count:i}=t.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let c,u;try{c=le(s).toUint8Array()}catch(h){if(h instanceof Fu)return ke("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw h}try{u=new no(c,o,a)}catch(h){return ke(h instanceof nn?"BloomFilter error: ":"Applying bloom filter failed: ",h),{status:1}}const l=h=>{const d=this.qe.rt();return u.mightContain(`projects/${d.projectId}/databases/${d.database}/documents/${h}`)};return u.de===0?{status:1}:{status:i===e-this.it(t.targetId,l)?0:2,nt:l}}it(t,e){const r=this.qe.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{e(s.path.canonicalString())||(this.ze(t,s,null),i++)}),i}st(t){const e=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&es(a.target)){const c=new y(a.target.path);this.Ke.get(c)!==null||this.ot(o,c)||this.ze(o,c,et.newNoDocument(c,t))}s.Ce&&(e.set(o,s.Me()),s.xe())}});let r=C();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xe(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(t));const i=new ci(t,e,this.Ue,this.Ke,r);return this.Ke=Ot(),this.$e=Sa(),this.Ue=new L(D),i}Ge(t,e){if(!this.Je(t))return;const r=this.ot(t,e.key)?2:0;this.He(t).Oe(e.key,r),this.Ke=this.Ke.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const i=this.He(t);this.ot(t,e)?i.Oe(e,1):i.Ne(e),this.$e=this.$e.insert(e,this._t(e).delete(t)),r&&(this.Ke=this.Ke.insert(e,r))}removeTarget(t){this.Qe.delete(t)}et(t){const e=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let e=this.Qe.get(t);return e||(e=new Ra,this.Qe.set(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new st(D),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||_("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.Qe.get(t);return e&&e.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Ra),this.qe.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ot(t,e){return this.qe.getRemoteKeysForTarget(t).has(e)}}function Sa(){return new L(y.comparator)}function Pa(){return new L(y.comparator)}const Wm=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Hm=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Km=(()=>({and:"AND",or:"OR"}))();class Gm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function is(n,t){return n.useProto3Json||ni(t)?t:{value:t}}function Mr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ul(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Qm(n,t){return Mr(n,t.toTimestamp())}function At(n){return M(!!n),R.fromTimestamp(function(e){const r=$t(e);return new W(r.seconds,r.nanos)}(n))}function ro(n,t){return function(r){return new F(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function ll(n){const t=F.fromString(n);return M(pl(t)),t}function ss(n,t){return ro(n.databaseId,t.path)}function ki(n,t){const e=ll(t);if(e.get(1)!==n.databaseId.projectId)throw new v(p.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new v(p.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new y(hl(e))}function os(n,t){return ro(n.databaseId,t)}function $m(n){const t=ll(n);return t.length===4?F.emptyPath():hl(t)}function as(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function hl(n){return M(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Ca(n,t,e){return{name:ss(n,t),fields:e.value.mapValue.fields}}function Ym(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:A()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,l){return u.useProto3Json?(M(l===void 0||typeof l=="string"),at.fromBase64String(l||"")):(M(l===void 0||l instanceof Uint8Array),at.fromUint8Array(l||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?p.UNKNOWN:ol(u.code);return new v(l,u.message||"")}(o);e=new cl(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ki(n,r.document.name),s=At(r.document.updateTime),o=r.document.createTime?At(r.document.createTime):R.min(),a=new dt({mapValue:{fields:r.document.fields}}),c=et.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];e=new pr(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ki(n,r.document),s=r.readTime?At(r.readTime):R.min(),o=et.newNoDocument(i,s),a=r.removedTargetIds||[];e=new pr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ki(n,r.document),s=r.removedTargetIds||[];e=new pr([],s,i,null)}else{if(!("filter"in t))return A();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Um(i,s),a=r.targetId;e=new al(a,o)}}return e}function Jm(n,t){let e;if(t instanceof Gn)e={update:Ca(n,t.key,t.value)};else if(t instanceof sl)e={delete:ss(n,t.key)};else if(t instanceof pe)e={update:Ca(n,t.key,t.data),updateMask:o_(t.fieldMask)};else{if(!(t instanceof Lm))return A();e={verify:ss(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Nr)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Sn)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Pn)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Or)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw A()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Qm(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:A()}(n,t.precondition)),e}function Xm(n,t){return n&&n.length>0?(M(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?At(i.updateTime):At(s);return o.isEqual(R.min())&&(o=At(s)),new Nm(o,i.transformResults||[])}(e,t))):[]}function Zm(n,t){return{documents:[os(n,t.path)]}}function t_(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=os(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=os(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(c){if(c.length!==0)return fl(Rt.create(c,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(c){if(c.length!==0)return c.map(u=>function(h){return{field:_e(h.field),direction:r_(h.dir)}}(u))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=is(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),e}function e_(n){let t=$m(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){M(r===1);const l=e.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];e.where&&(s=function(h){const d=dl(h);return d instanceof Rt&&qu(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(w){return new an(ye(w.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,ni(d)?null:d}(e.limit));let c=null;e.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new Vr(f,d)}(e.startAt));let u=null;return e.endAt&&(u=function(h){const d=!h.before,f=h.values||[];return new Vr(f,d)}(e.endAt)),ym(t,i,o,s,a,"F",c,u)}function n_(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return A()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function dl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=ye(e.unaryFilter.field);return z.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ye(e.unaryFilter.field);return z.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ye(e.unaryFilter.field);return z.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ye(e.unaryFilter.field);return z.create(o,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(n):n.fieldFilter!==void 0?function(e){return z.create(ye(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Rt.create(e.compositeFilter.filters.map(r=>dl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return A()}}(e.compositeFilter.op))}(n):A()}function r_(n){return Wm[n]}function i_(n){return Hm[n]}function s_(n){return Km[n]}function _e(n){return{fieldPath:n.canonicalString()}}function ye(n){return nt.fromServerFormat(n.fieldPath)}function fl(n){return n instanceof z?function(e){if(e.op==="=="){if(pa(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NAN"}};if(fa(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(pa(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NOT_NAN"}};if(fa(e.value))return{unaryFilter:{field:_e(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_e(e.field),op:i_(e.op),value:e.value}}}(n):n instanceof Rt?function(e){const r=e.getFilters().map(i=>fl(i));return r.length===1?r[0]:{compositeFilter:{op:s_(e.op),filters:r}}}(n):A()}function o_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function pl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class qt{constructor(t,e,r,i,s=R.min(),o=R.min(),a=at.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class a_{constructor(t){this.ct=t}}function c_(n){const t=e_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ns(t,t.limit,"L"):t}/**
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
 */class u_{constructor(){this.sn=new l_}addToCollectionParentIndex(t,e){return this.sn.add(e),g.resolve()}getCollectionParents(t,e){return g.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return g.resolve()}deleteFieldIndex(t,e){return g.resolve()}getDocumentsMatchingTarget(t,e){return g.resolve(null)}getIndexType(t,e){return g.resolve(0)}getFieldIndexes(t,e){return g.resolve([])}getNextCollectionGroupToUpdate(t){return g.resolve(null)}getMinOffset(t,e){return g.resolve(Qt.min())}getMinOffsetFromCollectionGroup(t,e){return g.resolve(Qt.min())}updateCollectionGroup(t,e,r){return g.resolve()}updateIndexEntries(t,e){return g.resolve()}}class l_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new st(F.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new st(F.comparator)).toArray()}}/**
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
 */class Ne{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new Ne(0)}static On(){return new Ne(-1)}}/**
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
 */class h_{constructor(){this.changes=new He(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?g.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class d_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class f_{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&un(r.mutation,i,gt.empty(),W.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,C()).next(()=>r))}getLocalViewOfDocuments(t,e,r=C()){const i=ne();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=en();return s.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=ne();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,C()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Ot();const o=cn(),a=function(){return cn()}();return e.forEach((c,u)=>{const l=r.get(u.key);i.has(u.key)&&(l===void 0||l.mutation instanceof pe)?s=s.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),un(l.mutation,u,l.mutation.getFieldMask(),W.now())):o.set(u.key,gt.empty())}),this.recalculateAndSaveOverlays(t,s).next(c=>(c.forEach((u,l)=>o.set(u,l)),e.forEach((u,l)=>{var h;return a.set(u,new d_(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=cn();let i=new L((o,a)=>o-a),s=C();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=e.get(c);if(u===null)return;let l=r.get(c)||gt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(i.get(a.batchId)||C()).add(c);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=Yu();l.forEach(d=>{if(!s.has(d)){const f=rl(e.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return g.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r){return function(s){return y.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Im(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r):this.getDocumentsMatchingCollectionQuery(t,e,r)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):g.resolve(ne());let a=-1,c=s;return o.next(u=>g.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(l)?g.resolve():this.remoteDocumentCache.getEntry(t,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,c,u,C())).next(l=>({batchId:a,changes:$u(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new y(e)).next(r=>{let i=en();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r){const i=e.collectionGroup;let s=en();return this.indexManager.getCollectionParents(t,i).next(o=>g.forEach(o,a=>{const c=function(l,h){return new ri(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(e,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r).next(u=>{u.forEach((l,h)=>{s=s.insert(l,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i))).next(s=>{i.forEach((a,c)=>{const u=c.getKey();s.get(u)===null&&(s=s.insert(u,et.newInvalidDocument(u)))});let o=en();return s.forEach((a,c)=>{const u=i.get(a);u!==void 0&&un(u.mutation,c,gt.empty(),W.now()),si(e,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class p_{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return g.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,function(i){return{id:i.id,version:i.version,createTime:At(i.createTime)}}(e)),g.resolve()}getNamedQuery(t,e){return g.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,function(i){return{name:i.name,query:c_(i.bundledQuery),readTime:At(i.readTime)}}(e)),g.resolve()}}/**
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
 */class g_{constructor(){this.overlays=new L(y.comparator),this.cr=new Map}getOverlay(t,e){return g.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ne();return g.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),g.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),g.resolve()}getOverlaysForCollection(t,e,r){const i=ne(),s=e.length+1,o=new y(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!e.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return g.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new L((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===e&&u.largestBatchId>r){let l=s.get(u.largestBatchId);l===null&&(l=ne(),s=s.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=ne(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=i)););return g.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Fm(e,r));let s=this.cr.get(e);s===void 0&&(s=C(),this.cr.set(e,s)),this.cr.set(e,s.add(r.key))}}/**
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
 */class io{constructor(){this.lr=new st(H.hr),this.Pr=new st(H.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const r=new H(t,e);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Er(new H(t,e))}dr(t,e){t.forEach(r=>this.removeReference(r,e))}Ar(t){const e=new y(new F([])),r=new H(e,t),i=new H(e,t+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(t=>this.Er(t))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new y(new F([])),r=new H(e,t),i=new H(e,t+1);let s=C();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new H(t,0),r=this.lr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class H{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return y.comparator(t.key,e.key)||D(t.mr,e.mr)}static Ir(t,e){return D(t.mr,e.mr)||y.comparator(t.key,e.key)}}/**
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
 */class m_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new st(H.hr)}checkEmpty(t){return g.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xm(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new H(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return g.resolve(o)}lookupMutationBatch(t,e){return g.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.wr(r),s=i<0?0:i;return g.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return g.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(t){return g.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new H(e,0),i=new H(e,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),g.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new st(D);return e.forEach(i=>{const s=new H(i,0),o=new H(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),g.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;y.isDocumentKey(s)||(s=s.child(""));const o=new H(new y(s),0);let a=new st(D);return this.pr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(c.mr)),!0)},o),g.resolve(this.Sr(a))}Sr(t){const e=[];return t.forEach(r=>{const i=this.yr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){M(this.br(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return g.forEach(e.mutations,i=>{const s=new H(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.pr=r})}Cn(t){}containsKey(t,e){const r=new H(e,0),i=this.pr.firstAfterOrEqual(r);return g.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,g.resolve()}br(t,e){return this.wr(t)}wr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class __{constructor(t){this.Dr=t,this.docs=function(){return new L(y.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return g.resolve(r?r.document.mutableCopy():et.newInvalidDocument(e))}getEntries(t,e){let r=Ot();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():et.newInvalidDocument(i))}),g.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Ot();const o=e.path,a=new y(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||em(tm(l),r)<=0||(i.has(l.key)||si(e,l))&&(s=s.insert(l.key,l.mutableCopy()))}return g.resolve(s)}getAllFromCollectionGroup(t,e,r,i){A()}vr(t,e){return g.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new y_(this)}getSize(t){return g.resolve(this.size)}}class y_ extends h_{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.sr.addEntry(t,i)):this.sr.removeEntry(r)}),g.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}/**
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
 */class E_{constructor(t){this.persistence=t,this.Cr=new He(e=>Js(e),Xs),this.lastRemoteSnapshotVersion=R.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new io,this.targetCount=0,this.Or=Ne.xn()}forEachTarget(t,e){return this.Cr.forEach((r,i)=>e(i)),g.resolve()}getLastRemoteSnapshotVersion(t){return g.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return g.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),g.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Fr&&(this.Fr=e),g.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new Ne(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,g.resolve()}updateTargetData(t,e){return this.Ln(e),g.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,g.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),g.waitFor(s).next(()=>i)}getTargetCount(t){return g.resolve(this.targetCount)}getTargetData(t,e){const r=this.Cr.get(e)||null;return g.resolve(r)}addMatchingKeys(t,e,r){return this.Mr.Tr(e,r),g.resolve()}removeMatchingKeys(t,e,r){this.Mr.dr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),g.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),g.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Mr.Vr(e);return g.resolve(r)}containsKey(t,e){return g.resolve(this.Mr.containsKey(e))}}/**
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
 */class v_{constructor(t,e){this.Nr={},this.overlays={},this.Br=new Gs(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new E_(this),this.indexManager=new u_,this.remoteDocumentCache=function(i){return new __(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new a_(e),this.Qr=new p_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new g_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Nr[t.toKey()];return r||(r=new m_(e,this.referenceDelegate),this.Nr[t.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,r){_("MemoryPersistence","Starting transaction:",t);const i=new I_(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(t,e){return g.or(Object.values(this.Nr).map(r=>()=>r.containsKey(t,e)))}}class I_ extends rm{constructor(t){super(),this.currentSequenceNumber=t}}class so{constructor(t){this.persistence=t,this.Wr=new io,this.Gr=null}static zr(t){return new so(t)}get jr(){if(this.Gr)return this.Gr;throw A()}addReference(t,e,r){return this.Wr.addReference(r,e),this.jr.delete(r.toString()),g.resolve()}removeReference(t,e,r){return this.Wr.removeReference(r,e),this.jr.add(r.toString()),g.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),g.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return g.forEach(this.jr,r=>{const i=y.fromPath(r);return this.Hr(t,i).next(s=>{s||e.removeEntry(i,R.min())})}).next(()=>(this.Gr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Hr(t,e).next(r=>{r?this.jr.delete(e.toString()):this.jr.add(e.toString())})}qr(t){return 0}Hr(t,e){return g.or([()=>g.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}/**
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
 */class oo{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Li=r,this.ki=i}static qi(t,e){let r=C(),i=C();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new oo(t,e.fromCache,r,i)}}/**
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
 */class T_{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,r,i){return this.$i(t,e).next(s=>s||this.Ui(t,e,i,r)).next(s=>s||this.Wi(t,e))}$i(t,e){if(ya(e))return g.resolve(null);let r=Nt(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ns(e,null,"F"),r=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=C(...s);return this.Ki.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.Gi(e,a);return this.zi(e,u,o,c.readTime)?this.$i(t,ns(e,null,"F")):this.ji(t,u,e,c)}))})))}Ui(t,e,r,i){return ya(e)||i.isEqual(R.min())?this.Wi(t,e):this.Ki.getDocuments(t,r).next(s=>{const o=this.Gi(e,s);return this.zi(e,o,r,i)?this.Wi(t,e):(ua()<=b.DEBUG&&_("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rs(e)),this.ji(t,o,e,Zg(i,-1)))})}Gi(t,e){let r=new st(Gu(t));return e.forEach((i,s)=>{si(t,s)&&(r=r.add(s))}),r}zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(t,e){return ua()<=b.DEBUG&&_("QueryEngine","Using full collection scan to execute query:",rs(e)),this.Ki.getDocumentsMatchingQuery(t,e,Qt.min())}ji(t,e,r,i){return this.Ki.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class A_{constructor(t,e,r,i){this.persistence=t,this.Hi=e,this.serializer=i,this.Ji=new L(D),this.Yi=new He(s=>Js(s),Xs),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(r)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new f_(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ji))}}function w_(n,t,e,r){return new A_(n,t,e,r)}async function gl(n,t){const e=P(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.es(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let c=C();for(const u of i){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of s){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return e.localDocuments.getDocuments(r,c).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function R_(n,t){const e=P(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.Xi.newChangeBuffer({trackRemovals:!0});return function(a,c,u,l){const h=u.batch,d=h.keys();let f=g.resolve();return d.forEach(w=>{f=f.next(()=>l.getEntry(c,w)).next(S=>{const E=u.docVersions.get(w);M(E!==null),S.version.compareTo(E)<0&&(h.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),l.addEntry(S)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=C();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function ml(n){const t=P(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.kr.getLastRemoteSnapshotVersion(e))}function S_(n,t){const e=P(n),r=t.snapshotVersion;let i=e.Ji;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.Xi.newChangeBuffer({trackRemovals:!0});i=e.Ji;const a=[];t.targetChanges.forEach((l,h)=>{const d=i.get(h);if(!d)return;a.push(e.kr.removeMatchingKeys(s,l.removedDocuments,h).next(()=>e.kr.addMatchingKeys(s,l.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(at.EMPTY_BYTE_STRING,R.min()).withLastLimboFreeSnapshotVersion(R.min()):l.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(l.resumeToken,r)),i=i.insert(h,f),function(S,E,N){return S.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(d,f,l)&&a.push(e.kr.updateTargetData(s,f))});let c=Ot(),u=C();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(P_(s,o,t.documentUpdates).next(l=>{c=l.ns,u=l.rs})),!r.isEqual(R.min())){const l=e.kr.getLastRemoteSnapshotVersion(s).next(h=>e.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return g.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(e.Ji=i,s))}function P_(n,t,e){let r=C(),i=C();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Ot();return e.forEach((a,c)=>{const u=s.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),c.isNoDocument()&&c.version.isEqual(R.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):_("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{ns:o,rs:i}})}function C_(n,t){const e=P(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function k_(n,t){const e=P(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.kr.getTargetData(r,t).next(s=>s?(i=s,g.resolve(i)):e.kr.allocateTargetId(r).next(o=>(i=new qt(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ji=e.Ji.insert(r.targetId,r),e.Yi.set(t,r.targetId)),r})}async function cs(n,t,e){const r=P(n),i=r.Ji.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Kn(o))throw o;_("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ji=r.Ji.remove(t),r.Yi.delete(i.target)}function ka(n,t,e){const r=P(n);let i=R.min(),s=C();return r.persistence.runTransaction("Execute query","readonly",o=>function(c,u,l){const h=P(c),d=h.Yi.get(l);return d!==void 0?g.resolve(h.Ji.get(d)):h.kr.getTargetData(u,l)}(r,o,Nt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{s=c})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,t,e?i:R.min(),e?s:C())).next(a=>(b_(r,Tm(t),a),{documents:a,ss:s})))}function b_(n,t,e){let r=n.Zi.get(t)||R.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.Zi.set(t,r)}class ba{constructor(){this.activeTargetIds=Cm()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class D_{constructor(){this.Hs=new ba,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,r){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new ba,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class V_{Ys(t){}shutdown(){}}/**
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
 */class Da{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){_("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){_("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ar=null;function bi(){return ar===null?ar=function(){return 268435456+Math.round(2147483648*Math.random())}():ar++,"0x"+ar.toString(16)}/**
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
 */const N_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class O_{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}/**
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
 */const Z="WebChannelConnection";class M_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+e.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(e,r,i,s,o){const a=bi(),c=this.mo(e,r);_("RestConnection",`Sending RPC '${e}' ${a}:`,c,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(e,c,u,i).then(l=>(_("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw ke("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",c,"request:",i),l})}yo(e,r,i,s,o,a){return this.Vo(e,r,i,s,o)}fo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ze}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}mo(e,r){const i=N_[e];return`${this.To}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,e,r,i){const s=bi();return new Promise((o,a)=>{const c=new qg;c.setWithCredentials(!0),c.listenOnce(Ug.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ci.NO_ERROR:const l=c.getResponseJson();_(Z,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case Ci.TIMEOUT:_(Z,`RPC '${t}' ${s} timed out`),a(new v(p.DEADLINE_EXCEEDED,"Request time out"));break;case Ci.HTTP_ERROR:const h=c.getStatus();if(_(Z,`RPC '${t}' ${s} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const w=function(E){const N=E.toLowerCase().replace(/_/g,"-");return Object.values(p).indexOf(N)>=0?N:p.UNKNOWN}(f.status);a(new v(w,f.message))}else a(new v(p.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new v(p.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{_(Z,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);_(Z,`RPC '${t}' ${s} sending request:`,i),c.send(e,"POST",u,r,15)})}wo(t,e,r){const i=bi(),s=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=xg(),a=Fg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new jg({})),this.fo(c.initMessageHeaders,e,r),c.encodeInitMessageHeaders=!0;const l=s.join("");_(Z,`Creating RPC '${t}' stream ${i}: ${l}`,c);const h=o.createWebChannel(l,c);let d=!1,f=!1;const w=new O_({so:E=>{f?_(Z,`Not sending because RPC '${t}' stream ${i} is closed:`,E):(d||(_(Z,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),_(Z,`RPC '${t}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),S=(E,N,x)=>{E.listen(N,B=>{try{x(B)}catch(X){setTimeout(()=>{throw X},0)}})};return S(h,rr.EventType.OPEN,()=>{f||_(Z,`RPC '${t}' stream ${i} transport opened.`)}),S(h,rr.EventType.CLOSE,()=>{f||(f=!0,_(Z,`RPC '${t}' stream ${i} transport closed`),w.Po())}),S(h,rr.EventType.ERROR,E=>{f||(f=!0,ke(Z,`RPC '${t}' stream ${i} transport errored:`,E),w.Po(new v(p.UNAVAILABLE,"The operation could not be completed")))}),S(h,rr.EventType.MESSAGE,E=>{var N;if(!f){const x=E.data[0];M(!!x);const B=x,X=B.error||((N=B[0])===null||N===void 0?void 0:N.error);if(X){_(Z,`RPC '${t}' stream ${i} received error:`,X);const lt=X.status;let Q=function(Qe){const Jn=j[Qe];if(Jn!==void 0)return ol(Jn)}(lt),Ge=X.message;Q===void 0&&(Q=p.INTERNAL,Ge="Unknown error status: "+lt+" with message "+X.message),f=!0,w.Po(new v(Q,Ge)),h.close()}else _(Z,`RPC '${t}' stream ${i} received:`,x),w.Io(x)}}),S(a,Bg.STAT_EVENT,E=>{E.stat===aa.PROXY?_(Z,`RPC '${t}' stream ${i} detected buffering proxy`):E.stat===aa.NOPROXY&&_(Z,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.ho()},0),w}}function Di(){return typeof document<"u"?document:null}/**
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
 */function ui(n){return new Gm(n,!0)}/**
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
 */class _l{constructor(t,e,r=1e3,i=1.5,s=6e4){this.ii=t,this.timerId=e,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const e=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,e-r);i>0&&_("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),t())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
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
 */class yl{constructor(t,e,r,i,s,o,a,c){this.ii=t,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new _l(t,e)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,e){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,t!==4?this.Ko.reset():e&&e.code===p.RESOURCE_EXHAUSTED?(Vt(e.toString()),Vt("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):e&&e.code===p.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),e=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===e&&this.e_(r,i)},r=>{t(()=>{const i=new v(p.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(t,e){const r=this.Xo(this.ko);this.stream=this.n_(t,e),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(t){return _("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget(()=>this.ko===t?e():(_("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class L_ extends yl{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}n_(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Ko.reset();const e=Ym(this.serializer,t),r=function(s){if(!("targetChange"in s))return R.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?R.min():o.readTime?At(o.readTime):R.min()}(t);return this.listener.r_(e,r)}i_(t){const e={};e.database=as(this.serializer),e.addTarget=function(s,o){let a;const c=o.target;if(a=es(c)?{documents:Zm(s,c)}:{query:t_(s,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ul(s,o.resumeToken);const u=is(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(R.min())>0){a.readTime=Mr(s,o.snapshotVersion.toTimestamp());const u=is(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=n_(this.serializer,t);r&&(e.labels=r),this.Ho(e)}s_(t){const e={};e.database=as(this.serializer),e.removeTarget=t,this.Ho(e)}}class x_ extends yl{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(M(!!t.streamToken),this.lastStreamToken=t.streamToken,this.o_){this.Ko.reset();const e=Xm(t.writeResults,t.commitTime),r=At(t.commitTime);return this.listener.u_(r,e)}return M(!t.writeResults||t.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const t={};t.database=as(this.serializer),this.Ho(t)}a_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Jm(this.serializer,r))};this.Ho(e)}}/**
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
 */class F_ extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new v(p.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,e,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new v(p.UNKNOWN,i.toString())})}yo(t,e,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===p.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new v(p.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class U_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(t){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,t==="Online"&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(Vt(e),this.d_=!1):_("OnlineStateTracker",e)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
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
 */class B_{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{ge(this)&&(_("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=P(c);u.y_.add(4),await $n(u),u.b_.set("Unknown"),u.y_.delete(4),await li(u)}(this))})}),this.b_=new U_(r,i)}}async function li(n){if(ge(n))for(const t of n.w_)await t(!0)}async function $n(n){for(const t of n.w_)await t(!1)}function El(n,t){const e=P(n);e.p_.has(t.targetId)||(e.p_.set(t.targetId,t),uo(e)?co(e):Ke(e).Uo()&&ao(e,t))}function vl(n,t){const e=P(n),r=Ke(e);e.p_.delete(t),r.Uo()&&Il(e,t),e.p_.size===0&&(r.Uo()?r.zo():ge(e)&&e.b_.set("Unknown"))}function ao(n,t){if(n.D_.Be(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(R.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ke(n).i_(t)}function Il(n,t){n.D_.Be(t),Ke(n).s_(t)}function co(n){n.D_=new zm({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ut:t=>n.p_.get(t)||null,rt:()=>n.datastore.serializer.databaseId}),Ke(n).start(),n.b_.A_()}function uo(n){return ge(n)&&!Ke(n).$o()&&n.p_.size>0}function ge(n){return P(n).y_.size===0}function Tl(n){n.D_=void 0}async function j_(n){n.p_.forEach((t,e)=>{ao(n,t)})}async function q_(n,t){Tl(n),uo(n)?(n.b_.m_(t),co(n)):n.b_.set("Unknown")}async function z_(n,t,e){if(n.b_.set("Online"),t instanceof cl&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(n,t)}catch(r){_("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Lr(n,r)}else if(t instanceof pr?n.D_.We(t):t instanceof al?n.D_.Ze(t):n.D_.je(t),!e.isEqual(R.min()))try{const r=await ml(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=s.p_.get(u);l&&s.p_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=s.p_.get(c);if(!l)return;s.p_.set(c,l.withResumeToken(at.EMPTY_BYTE_STRING,l.snapshotVersion)),Il(s,c);const h=new qt(l.target,c,u,l.sequenceNumber);ao(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){_("RemoteStore","Failed to raise snapshot:",r),await Lr(n,r)}}async function Lr(n,t,e){if(!Kn(t))throw t;n.y_.add(1),await $n(n),n.b_.set("Offline"),e||(e=()=>ml(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{_("RemoteStore","Retrying IndexedDB access"),await e(),n.y_.delete(1),await li(n)})}function Al(n,t){return t().catch(e=>Lr(n,e,t))}async function hi(n){const t=P(n),e=Yt(t);let r=t.g_.length>0?t.g_[t.g_.length-1].batchId:-1;for(;W_(t);)try{const i=await C_(t.localStore,r);if(i===null){t.g_.length===0&&e.zo();break}r=i.batchId,H_(t,i)}catch(i){await Lr(t,i)}wl(t)&&Rl(t)}function W_(n){return ge(n)&&n.g_.length<10}function H_(n,t){n.g_.push(t);const e=Yt(n);e.Uo()&&e.__&&e.a_(t.mutations)}function wl(n){return ge(n)&&!Yt(n).$o()&&n.g_.length>0}function Rl(n){Yt(n).start()}async function K_(n){Yt(n).l_()}async function G_(n){const t=Yt(n);for(const e of n.g_)t.a_(e.mutations)}async function Q_(n,t,e){const r=n.g_.shift(),i=to.from(r,t,e);await Al(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await hi(n)}async function $_(n,t){t&&Yt(n).__&&await async function(r,i){if(function(o){return Bm(o)&&o!==p.ABORTED}(i.code)){const s=r.g_.shift();Yt(r).Go(),await Al(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await hi(r)}}(n,t),wl(n)&&Rl(n)}async function Va(n,t){const e=P(n);e.asyncQueue.verifyOperationInProgress(),_("RemoteStore","RemoteStore received new credentials");const r=ge(e);e.y_.add(3),await $n(e),r&&e.b_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.y_.delete(3),await li(e)}async function Y_(n,t){const e=P(n);t?(e.y_.delete(2),await li(e)):t||(e.y_.add(2),await $n(e),e.b_.set("Unknown"))}function Ke(n){return n.v_||(n.v_=function(e,r,i){const s=P(e);return s.P_(),new L_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:j_.bind(null,n),uo:q_.bind(null,n),r_:z_.bind(null,n)}),n.w_.push(async t=>{t?(n.v_.Go(),uo(n)?co(n):n.b_.set("Unknown")):(await n.v_.stop(),Tl(n))})),n.v_}function Yt(n){return n.C_||(n.C_=function(e,r,i){const s=P(e);return s.P_(),new x_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{_o:K_.bind(null,n),uo:$_.bind(null,n),c_:G_.bind(null,n),u_:Q_.bind(null,n)}),n.w_.push(async t=>{t?(n.C_.Go(),await hi(n)):(await n.C_.stop(),n.g_.length>0&&(_("RemoteStore",`Stopping write stream with ${n.g_.length} pending writes`),n.g_=[]))})),n.C_}/**
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
 */class lo{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Kt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new lo(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new v(p.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ho(n,t){if(Vt("AsyncQueue",`${t}: ${n}`),Kn(n))return new v(p.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class Se{constructor(t){this.comparator=t?(e,r)=>t(e,r)||y.comparator(e.key,r.key):(e,r)=>y.comparator(e.key,r.key),this.keyedMap=en(),this.sortedSet=new L(this.comparator)}static emptySet(t){return new Se(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Se)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Se;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Na{constructor(){this.F_=new L(y.comparator)}track(t){const e=t.doc.key,r=this.F_.get(e);r?t.type!==0&&r.type===3?this.F_=this.F_.insert(e,t):t.type===3&&r.type!==1?this.F_=this.F_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.F_=this.F_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.F_=this.F_.remove(e):t.type===1&&r.type===2?this.F_=this.F_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):A():this.F_=this.F_.insert(e,t)}M_(){const t=[];return this.F_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Oe{constructor(t,e,r,i,s,o,a,c,u){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Oe(t,e,Se.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ii(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class J_{constructor(){this.x_=void 0,this.listeners=[]}}class X_{constructor(){this.queries=new He(t=>Ku(t),ii),this.onlineState="Unknown",this.O_=new Set}}async function Z_(n,t){const e=P(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new J_),i)try{s.x_=await e.onListen(r)}catch(o){const a=ho(o,`Initialization of query '${rs(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.N_(e.onlineState),s.x_&&t.B_(s.x_)&&fo(e)}async function ty(n,t){const e=P(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function ey(n,t){const e=P(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&fo(e)}function ny(n,t,e){const r=P(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function fo(n){n.O_.forEach(t=>{t.next()})}class ry{constructor(t,e,r){this.query=t,this.L_=e,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Oe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),e=!0):this.K_(t,this.onlineState)&&(this.U_(t),e=!0),this.q_=t,e}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let e=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),e=!0),e}K_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.W_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Q_(t){if(t.docChanges.length>0)return!0;const e=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}U_(t){t=Oe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}/**
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
 */class Sl{constructor(t){this.key=t}}class Pl{constructor(t){this.key=t}}class iy{constructor(t,e){this.query=t,this.X_=e,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=C(),this.mutatedKeys=C(),this.na=Gu(t),this.ra=new Se(this.na)}get ia(){return this.X_}sa(t,e){const r=e?e.oa:new Na,i=e?e.ra:this.ra;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,h)=>{const d=i.get(l),f=si(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),S=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?w!==S&&(r.track({type:3,doc:f}),E=!0):this._a(d,f)||(r.track({type:2,doc:f}),E=!0,(c&&this.na(f,c)>0||u&&this.na(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(c||u)&&(a=!0)),E&&(f?(o=o.add(f),s=S?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const s=t.oa.M_();s.sort((u,l)=>function(d,f){const w=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return A()}};return w(d)-w(f)}(u.type,l.type)||this.na(u.doc,l.doc)),this.aa(r);const o=e?this.ua():[],a=this.ta.size===0&&this.current?1:0,c=a!==this.ea;return this.ea=a,s.length!==0||c?{snapshot:new Oe(this.query,t.ra,i,s,t.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new Na,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach(e=>this.X_=this.X_.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.X_=this.X_.delete(e)),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=C(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const e=[];return t.forEach(r=>{this.ta.has(r)||e.push(new Pl(r))}),this.ta.forEach(r=>{t.has(r)||e.push(new Sl(r))}),e}ha(t){this.X_=t.ss,this.ta=C();const e=this.sa(t.documents);return this.applyChanges(e,!0)}Pa(){return Oe.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class sy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class oy{constructor(t){this.key=t,this.Ia=!1}}class ay{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new He(a=>Ku(a),ii),this.da=new Map,this.Aa=new Set,this.Ra=new L(y.comparator),this.Va=new Map,this.ma=new io,this.fa={},this.ga=new Map,this.pa=Ne.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function cy(n,t){const e=yy(n);let r,i;const s=e.Ea.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await k_(e.localStore,Nt(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await uy(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&El(e.remoteStore,o)}return i}async function uy(n,t,e,r,i){n.wa=(h,d,f)=>async function(S,E,N,x){let B=E.view.sa(N);B.zi&&(B=await ka(S.localStore,E.query,!1).then(({documents:Q})=>E.view.sa(Q,B)));const X=x&&x.targetChanges.get(E.targetId),lt=E.view.applyChanges(B,S.isPrimaryClient,X);return Ma(S,E.targetId,lt.ca),lt.snapshot}(n,h,d,f);const s=await ka(n.localStore,t,!0),o=new iy(t,s.ss),a=o.sa(s.documents),c=Qn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),u=o.applyChanges(a,n.isPrimaryClient,c);Ma(n,e,u.ca);const l=new sy(t,e,o);return n.Ea.set(t,l),n.da.has(e)?n.da.get(e).push(t):n.da.set(e,[t]),u.snapshot}async function ly(n,t){const e=P(n),r=e.Ea.get(t),i=e.da.get(r.targetId);if(i.length>1)return e.da.set(r.targetId,i.filter(s=>!ii(s,t))),void e.Ea.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await cs(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),vl(e.remoteStore,r.targetId),us(e,r.targetId)}).catch(Hn)):(us(e,r.targetId),await cs(e.localStore,r.targetId,!0))}async function hy(n,t,e){const r=Ey(n);try{const i=await function(o,a){const c=P(o),u=W.now(),l=a.reduce((f,w)=>f.add(w.key),C());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let w=Ot(),S=C();return c.Xi.getEntries(f,l).next(E=>{w=E,w.forEach((N,x)=>{x.isValidDocument()||(S=S.add(N))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,w)).next(E=>{h=E;const N=[];for(const x of a){const B=Mm(x,h.get(x.key).overlayedDocument);B!=null&&N.push(new pe(x.key,B,Uu(B.value.mapValue),kt.exists(!0)))}return c.mutationQueue.addMutationBatch(f,u,N,a)}).next(E=>{d=E;const N=E.applyToLocalDocumentSet(h,S);return c.documentOverlayCache.saveOverlays(f,E.batchId,N)})}).then(()=>({batchId:d.batchId,changes:$u(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,c){let u=o.fa[o.currentUser.toKey()];u||(u=new L(D)),u=u.insert(a,c),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,e),await Yn(r,i.changes),await hi(r.remoteStore)}catch(i){const s=ho(i,"Failed to persist write");e.reject(s)}}async function Cl(n,t){const e=P(n);try{const r=await S_(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Va.get(s);o&&(M(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?M(o.Ia):i.removedDocuments.size>0&&(M(o.Ia),o.Ia=!1))}),await Yn(e,r,t)}catch(r){await Hn(r)}}function Oa(n,t,e){const r=P(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const c=P(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const d of h.listeners)d.N_(a)&&(u=!0)}),u&&fo(c)}(r.eventManager,t),i.length&&r.Ta.r_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function dy(n,t,e){const r=P(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Va.get(t),s=i&&i.key;if(s){let o=new L(y.comparator);o=o.insert(s,et.newNoDocument(s,R.min()));const a=C().add(s),c=new ci(R.min(),new Map,new L(D),o,a);await Cl(r,c),r.Ra=r.Ra.remove(s),r.Va.delete(t),po(r)}else await cs(r.localStore,t,!1).then(()=>us(r,t,e)).catch(Hn)}async function fy(n,t){const e=P(n),r=t.batch.batchId;try{const i=await R_(e.localStore,t);bl(e,r,null),kl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Yn(e,i)}catch(i){await Hn(i)}}async function py(n,t,e){const r=P(n);try{const i=await function(o,a){const c=P(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return c.mutationQueue.lookupMutationBatch(u,a).next(h=>(M(h!==null),l=h.keys(),c.mutationQueue.removeMutationBatch(u,h))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,l,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,l)).next(()=>c.localDocuments.getDocuments(u,l))})}(r.localStore,t);bl(r,t,e),kl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Yn(r,i)}catch(i){await Hn(i)}}function kl(n,t){(n.ga.get(t)||[]).forEach(e=>{e.resolve()}),n.ga.delete(t)}function bl(n,t,e){const r=P(n);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.fa[r.currentUser.toKey()]=i}}function us(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.da.get(t))n.Ea.delete(r),e&&n.Ta.Sa(r,e);n.da.delete(t),n.isPrimaryClient&&n.ma.Ar(t).forEach(r=>{n.ma.containsKey(r)||Dl(n,r)})}function Dl(n,t){n.Aa.delete(t.path.canonicalString());const e=n.Ra.get(t);e!==null&&(vl(n.remoteStore,e),n.Ra=n.Ra.remove(t),n.Va.delete(e),po(n))}function Ma(n,t,e){for(const r of e)r instanceof Sl?(n.ma.addReference(r.key,t),gy(n,r)):r instanceof Pl?(_("SyncEngine","Document no longer in limbo: "+r.key),n.ma.removeReference(r.key,t),n.ma.containsKey(r.key)||Dl(n,r.key)):A()}function gy(n,t){const e=t.key,r=e.path.canonicalString();n.Ra.get(e)||n.Aa.has(r)||(_("SyncEngine","New document in limbo: "+e),n.Aa.add(r),po(n))}function po(n){for(;n.Aa.size>0&&n.Ra.size<n.maxConcurrentLimboResolutions;){const t=n.Aa.values().next().value;n.Aa.delete(t);const e=new y(F.fromString(t)),r=n.pa.next();n.Va.set(r,new oy(e)),n.Ra=n.Ra.insert(e,r),El(n.remoteStore,new qt(Nt(Zs(e.path)),r,"TargetPurposeLimboResolution",Gs.ae))}}async function Yn(n,t,e){const r=P(n),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,c)=>{o.push(r.wa(c,t,e).then(u=>{if((u||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const l=oo.qi(c.targetId,u);s.push(l)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(c,u){const l=P(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>g.forEach(u,d=>g.forEach(d.Li,f=>l.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>g.forEach(d.ki,f=>l.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Kn(h))throw h;_("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const f=l.Ji.get(d),w=f.snapshotVersion,S=f.withLastLimboFreeSnapshotVersion(w);l.Ji=l.Ji.insert(d,S)}}}(r.localStore,s))}async function my(n,t){const e=P(n);if(!e.currentUser.isEqual(t)){_("SyncEngine","User change. New user:",t.toKey());const r=await gl(e.localStore,t);e.currentUser=t,function(s,o){s.ga.forEach(a=>{a.forEach(c=>{c.reject(new v(p.CANCELLED,o))})}),s.ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Yn(e,r.ts)}}function _y(n,t){const e=P(n),r=e.Va.get(t);if(r&&r.Ia)return C().add(r.key);{let i=C();const s=e.da.get(t);if(!s)return i;for(const o of s){const a=e.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function yy(n){const t=P(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Cl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_y.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=dy.bind(null,t),t.Ta.r_=ey.bind(null,t.eventManager),t.Ta.Sa=ny.bind(null,t.eventManager),t}function Ey(n){const t=P(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=fy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=py.bind(null,t),t}class La{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ui(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return w_(this.persistence,new T_,t.initialUser,this.serializer)}createPersistence(t){return new v_(so.zr,this.serializer)}createSharedClientState(t){return new D_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vy{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Oa(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=my.bind(null,this.syncEngine),await Y_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new X_}()}createDatastore(t){const e=ui(t.databaseInfo.databaseId),r=function(s){return new M_(s)}(t.databaseInfo);return function(s,o,a,c){return new F_(s,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new B_(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Oa(this.syncEngine,e,0),function(){return Da.v()?new Da:new V_}())}createSyncEngine(t,e){return function(i,s,o,a,c,u,l){const h=new ay(i,s,o,a,c,u);return l&&(h.ya=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=P(e);_("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await $n(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
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
 */class Iy{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):Vt("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Ty{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=tt.UNAUTHENTICATED,this.clientId=Lu.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{_("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(_("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new v(p.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ho(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Vi(n,t){n.asyncQueue.verifyOperationInProgress(),_("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gl(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function xa(n,t){n.asyncQueue.verifyOperationInProgress();const e=await wy(n);_("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>Va(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Va(t.remoteStore,s)),n._onlineComponents=t}function Ay(n){return n.name==="FirebaseError"?n.code===p.FAILED_PRECONDITION||n.code===p.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function wy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){_("FirestoreClient","Using user provided OfflineComponentProvider");try{await Vi(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Ay(e))throw e;ke("Error using user provided cache. Falling back to memory cache: "+e),await Vi(n,new La)}}else _("FirestoreClient","Using default OfflineComponentProvider"),await Vi(n,new La);return n._offlineComponents}async function Vl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(_("FirestoreClient","Using user provided OnlineComponentProvider"),await xa(n,n._uninitializedComponentsProvider._online)):(_("FirestoreClient","Using default OnlineComponentProvider"),await xa(n,new vy))),n._onlineComponents}function Ry(n){return Vl(n).then(t=>t.syncEngine)}async function Sy(n){const t=await Vl(n),e=t.eventManager;return e.onListen=cy.bind(null,t.syncEngine),e.onUnlisten=ly.bind(null,t.syncEngine),e}function Py(n,t,e={}){const r=new Kt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,c,u){const l=new Iy({next:d=>{o.enqueueAndForget(()=>ty(s,h));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new v(p.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?u.reject(new v(p.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new ry(Zs(a.path),l,{includeMetadataChanges:!0,W_:!0});return Z_(s,h)}(await Sy(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function Nl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Fa=new Map;/**
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
 */function Cy(n,t,e){if(!e)throw new v(p.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function ky(n,t,e,r){if(t===!0&&r===!0)throw new v(p.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ua(n){if(!y.isDocumentKey(n))throw new v(p.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function go(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":A()}function Cn(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new v(p.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=go(n);throw new v(p.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Ba{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new v(p.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new v(p.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ky("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new v(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new v(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new v(p.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class mo{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ba({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new v(p.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new v(p.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ba(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wg;switch(r.type){case"firstParty":return new Qg(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new v(p.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Fa.get(e);r&&(_("ComponentProvider","Removing Datastore"),Fa.delete(e),r.terminate())}(this),Promise.resolve()}}function by(n,t,e,r={}){var i;const s=(n=Cn(n,mo))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ke("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=tt.MOCK_USER;else{a=lh(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new v(p.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new tt(u)}n._authCredentials=new Hg(new Mu(a,c))}}/**
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
 */class _o{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new _o(this.firestore,t,this._query)}}class ft{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ft(this.firestore,t,this._key)}}class kn extends _o{constructor(t,e,r){super(t,e,Zs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ft(this.firestore,null,new y(t))}withConverter(t){return new kn(this.firestore,t,this._path)}}function Ol(n,t,...e){if(n=pt(n),arguments.length===1&&(t=Lu.V()),Cy("doc","path",t),n instanceof mo){const r=F.fromString(t,...e);return Ua(r),new ft(n,null,new y(r))}{if(!(n instanceof ft||n instanceof kn))throw new v(p.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(F.fromString(t,...e));return Ua(r),new ft(n.firestore,n instanceof kn?n.converter:null,new y(r))}}/**
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
 */class Dy{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new _l(this,"async_queue_retry"),this.Xa=()=>{const e=Di();e&&_("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ko.No()};const t=Di();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const e=Di();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise(()=>{});const e=new Kt;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ga.push(t),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!Kn(t))throw t;_("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(t){const e=this.Wa.then(()=>(this.Ja=!0,t().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Vt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=e,e}enqueueAfterDelay(t,e,r){this.eu(),this.Za.indexOf(t)>-1&&(e=0);const i=lo.createAndSchedule(this,t,e,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&A()}verifyOperationInProgress(){}async iu(){let t;do t=this.Wa,await t;while(t!==this.Wa)}su(t){for(const e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then(()=>{this.ja.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.ja)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.iu()})}_u(t){this.Za.push(t)}ru(t){const e=this.ja.indexOf(t);this.ja.splice(e,1)}}class yo extends mo{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Dy}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ll(this),this._firestoreClient.terminate()}}function Vy(n,t){const e=typeof n=="object"?n:Ja(),r=typeof n=="string"?n:t||"(default)",i=ps(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ch("firestore");s&&by(i,...s)}return i}function Ml(n){return n._firestoreClient||Ll(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ll(n){var t,e,r;const i=n._freezeSettings(),s=function(a,c,u,l){return new om(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Nl(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Ty(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Me{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Me(at.fromBase64String(t))}catch(e){throw new v(p.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Me(at.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Eo{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new v(p.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class xl{constructor(t){this._methodName=t}}/**
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
 */class vo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new v(p.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new v(p.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return D(this._lat,t._lat)||D(this._long,t._long)}}/**
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
 */const Ny=/^__.*__$/;class Oy{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new pe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Gn(t,this.data,e,this.fieldTransforms)}}function Fl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class Io{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(t){return new Io(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.cu({path:r,hu:!1});return i.Pu(t),i}Iu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(t){return this.cu({path:void 0,hu:!0})}Eu(t){return xr(t,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}au(){if(this.path)for(let t=0;t<this.path.length;t++)this.Pu(this.path.get(t))}Pu(t){if(t.length===0)throw this.Eu("Document fields must not be empty");if(Fl(this.uu)&&Ny.test(t))throw this.Eu('Document fields cannot begin and end with "__"')}}class My{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ui(t)}Ru(t,e,r,i=!1){return new Io({uu:t,methodName:e,Au:r,path:nt.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ly(n){const t=n._freezeSettings(),e=ui(n._databaseId);return new My(n._databaseId,!!t.ignoreUndefinedProperties,e)}function xy(n,t,e,r,i,s={}){const o=n.Ru(s.merge||s.mergeFields?2:0,t,e,i);ql("Data must be an object, but it was:",o,r);const a=Bl(r,o);let c,u;if(s.merge)c=new gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const l=[];for(const h of s.mergeFields){const d=Fy(t,h,e);if(!o.contains(d))throw new v(p.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);By(l,d)||l.push(d)}c=new gt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new Oy(new dt(a),c,u)}function Ul(n,t){if(jl(n=pt(n)))return ql("Unsupported field value:",t,n),Bl(n,t);if(n instanceof xl)return function(r,i){if(!Fl(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.hu&&t.uu!==4)throw t.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let c=Ul(a,i.Tu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return km(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=W.fromDate(r);return{timestampValue:Mr(i.serializer,s)}}if(r instanceof W){const s=new W(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mr(i.serializer,s)}}if(r instanceof vo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Me)return{bytesValue:ul(i.serializer,r._byteString)};if(r instanceof ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ro(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${go(r)}`)}(n,t)}function Bl(n,t){const e={};return xu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):We(n,(r,i)=>{const s=Ul(i,t.lu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function jl(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof W||n instanceof vo||n instanceof Me||n instanceof ft||n instanceof xl)}function ql(n,t,e){if(!jl(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=go(e);throw r==="an object"?t.Eu(n+" a custom object"):t.Eu(n+" "+r)}}function Fy(n,t,e){if((t=pt(t))instanceof Eo)return t._internalPath;if(typeof t=="string")return zl(n,t);throw xr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Uy=new RegExp("[~\\*/\\[\\]]");function zl(n,t,e){if(t.search(Uy)>=0)throw xr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Eo(...t.split("."))._internalPath}catch{throw xr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function xr(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new v(p.INVALID_ARGUMENT,a+n+c)}function By(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Wl{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new jy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Hl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class jy extends Wl{data(){return super.data()}}function Hl(n,t){return typeof t=="string"?zl(n,t):t instanceof Eo?t._internalPath:t._delegate._internalPath}class qy{convertValue(t,e="none"){switch(he(t)){case 0:return null;case 1:return t.booleanValue;case 2:return q(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(le(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw A()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return We(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new vo(q(t.latitude),q(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=$s(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(An(t));default:return null}}convertTimestamp(t){const e=$t(t);return new W(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=F.fromString(t);M(pl(r));const i=new wn(r.get(1),r.get(3)),s=new y(r.popFirst(5));return i.isEqual(e)||Vt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function zy(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
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
 */class Wy{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Kl extends Wl{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Hy(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Hl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Hy extends Kl{data(t={}){return super.data(t)}}/**
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
 */function Ky(n){n=Cn(n,ft);const t=Cn(n.firestore,yo);return Py(Ml(t),n._key).then(e=>Yy(t,n,e))}class Gy extends qy{constructor(t){super(),this.firestore=t}convertBytes(t){return new Me(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ft(this.firestore,null,e)}}function Qy(n,t,e){n=Cn(n,ft);const r=Cn(n.firestore,yo),i=zy(n.converter,t,e);return $y(r,[xy(Ly(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,kt.none())])}function $y(n,t){return function(r,i){const s=new Kt;return r.asyncQueue.enqueueAndForget(async()=>hy(await Ry(r),i,s)),s.promise}(Ml(n),t)}function Yy(n,t,e){const r=e.docs.get(t._key),i=new Gy(n);return new Kl(n,i,t._key,r,new Wy(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){ze=i})(Le),Pe(new se("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new yo(new Kg(r.getProvider("auth-internal")),new Yg(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new v(p.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wn(u.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ht(ca,"4.1.0",t),Ht(ca,"4.1.0","esm2017")})();const Jy={apiKey:"AIzaSyA-2vOA4b3zy4HmUepySpDPR8zKgKfhAME",authDomain:"read-easy-a785a.firebaseapp.com",projectId:"read-easy-a785a",storageBucket:"read-easy-a785a.appspot.com",messagingSenderId:"672240774710",appId:"1:672240774710:web:1093f9e83dded932d97297",measurementId:"G-PFEBLXEB67"},Mt=Ya(Jy),Gl=Vy(Mt);Gt(Mt);const dE=async(n,t)=>If(Gt(Mt),n,t),fE=async n=>{const t=Ol(Gl,"users",Gt(Mt).currentUser.uid);return Qy(t,{name:n})},pE=async(n,t)=>Tf(Gt(Mt),n,t),Xy=async()=>(await Gt(Mt)._initializationPromise,Gt(Mt).currentUser!==null),Zy=()=>{Rf(Gt(Mt))},tE=async()=>Ky(Ol(Gl,"users",Gt(Mt).currentUser.uid)),Ql="/read-easy/assets/sprite-11832d25.svg",de={openModalBtn:document.querySelector(".js-authorization-open"),closeModalBtn:document.querySelector(".js-authorization-close"),modal:document.querySelector(".js-authorization-modal"),backdrop:document.querySelector(".js-authorization-backdrop")};de.openModalBtn.addEventListener("click",$l);de.closeModalBtn.addEventListener("click",$l);function $l(){de.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"),document.addEventListener("keydown",Yl),de.modal.addEventListener("click",eE)}function Yl(n){n.key==="Escape"&&(de.modal.classList.toggle("is-hidden"),document.removeEventListener("keydown",Yl))}function eE(n){n.target===de.backdrop&&de.modal.classList.toggle("is-hidden")}const nE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AYht+mSkupCLWDiEOG6mQXFXEsVSyChdJWaNXB5NI/aGJIUlwcBdeCgz+LVQcXZ10dXAVB8AfE1cVJ0UVK/C4ptIjxjuMe3vvel7vvAKFVZ6rZlwBUzTKyqaRYKK6IgVcEaYYQQURipp7OLeThOb7u4eP7XZxnedf9OQaUkskAn0icYLphEa8Tz2xaOud94iirSgrxOfGEQRckfuS67PIb54rDAs+MGvnsHHGUWKz0sNzDrGqoxNPEMUXVKF8ouKxw3uKs1husc0/+wnBJW85xndYoUlhEGhmIkNFADXVYiNOukWIiS+dJD/+I48+QSyZXDYwc89iACsnxg//B796a5alJNymcBPpfbPtjDAjsAu2mbX8f23b7BPA/A1da17/RAmY/SW92tdgRMLgNXFx3NXkPuNwBhp90yZAcyU9LKJeB9zP6piIwdAuEVt2+dc5x+gDkqVdLN8DBITBeoew1j3cHe/v2b02nfz9WN3KbuA7doAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAADGFJREFUWMOtmWtwXNV9wH/n3Ofevbt7tdKudvWwJVlGCLCN7RBonGQqUpKGMiSknRDclg+Eth/Mh37rFz5kOp12ptNO20xopqlhMqQ4tNA0iSkYSGxjHqHGJsbGJrKxhWXLkvXalfa993H6QZIryy9B+c/cubtn7znnd//Pc84KPqEUivPbgLuBrQrV26hVBgzTtvxmAzvmNISQw0KIEeAwsDeVdN/8JPOIjwnVDTwGPAzkoihidOQUL/3kGU6/9zoqivBDhZfpILtmgM6uNXzpvm+QSHpoUpsQQjwNfC+ZiJ/7VAELxfkM8FfAI4CulKJaKfPqz3/Mq88/yfnJEmfGC1iWyZqOLLVKjUhFtLUkkaaFl27lD7+9g02bP4Nh2oFpxZ4SQjyeTMSn/t+AheL8duAJwAMIgoDJiTGe2/l37H11D8fOzKAbGgIwDJMtt/QTBQGCkEYQ0JJ0MTRBzrMZHLyZLV9+kL7b7kJKrQjsSCbiu643v34dMHMR7NGltmazwbuH3uaVXf/ES/sOcrFYJ5N2CSNFqbYAU63VcWyTXEuCuu/TaDQZ7F9DX3eOyHLxqyWqlRKJZIsHPFMqV4eAHQnXaa4acLYw5yilXhBCDC21KaU4cfwoP/iH7zB6dozRyQqtKYdarYluGAilIIq4MD5Fe6tHvVqhWm8Q+D6lUp0gVJTmi+Ty3dR7BnETHkIIFhWwrlSu3pdwneoNAWcLcybwAjC0vD2KIl7bv5eDh0/QbARsWZumN5PCi9tIKSiUa5RqTSIh8TyHTKtHPpvDBI4eP8EvDhykp7uDc2Pn6ZcaoJZ72BDwQqlc/d2VmryaBp9YCQdw/vwoz/5oJ/WGz7239/DlLTeT8Rxc2yLltWLFHISmEcQ8LC8LmkQzXYRhMjQzxXe/+4+8f/os/Sc/YG5mgpZMJ+LyCBhanPtPrgk4M1vcrpR6VIgrY2fkzGkq5QqtcYO7Bnvo7mrHjcVIxl1cL43lJhCGCYaDrzRC3USYDkpqpDu6+cLQPQyP7CSRSCKlztXmAB4tlav7Eq5zKXDk0ofpmUJm8Q1Y7ndLMjdXJGr65Lwk/et6Sba0kUjnsBNpLNdDT7QgTXthSCEQUgNNIrUFHQys72egtxuhIlQUXS9wnyiVq5krABfznHetXsW5AoYu6My3kWxtQzdjaKaNFksgTIsoDFAqJAx9wihARRECiRACTdPJ5PJ0ZNJ0999Cft0t1wP0Fln+D3B6ptANPLJcY8u1qJRCNy1SCYeE62JZCTTdWPBxTUdJC4VOpExCaRDW6ygliKIIpQRCMzGdBKmETTKTxzTNG6XfR0rlavclQKXUY9fLiQCt6VZQIIWGMGII3UVJF6HHEGYc6XgoYYDSUMIkQieSNug2SuhoRgzHiWO4KcSN64O+WFIvQT18ox7t2XYiBLZlMl/1eeutNynMlYk7DkPbtnHrZz6LMAQCSb0xz5E3fkXFV0SE9PT2sP7WDQSRRGr2asvww8Bf6FPTs9uA3EqzLo8yIQTRXAE/CPHSbVycnuXO3/o82bY26tUylqbj12sYdgzddojpNl35VqanZujsvZlYup0wUmimRbsILo15A8mVytVtUil192peJ37uI35ny2Zy7TnW33QT1alJdh/4Nc+9/Bavv7yHqZNHCOfGiLW0YDs2Yx98wL//9L855zuEhSkcL01nzwC5ZOvHWUDdrQNbl2ttpfaWxHQdvrhxELstjWrOk0pYfK4tz9yZKuMnR5k4fphcSxqaTUQU0t/dzY6H1tDaHieV7UOqgJvWD6InkyBWt8oTQmzVgd5rQS0Xw2vDmi/h9vaihU1y+XYMqVPzs3TFmiS8LGG5iKrVsGMO7bdtoF6pYDoWmoogCEnGEoTFItrql6G9OjBwLd+7DDDpEVkWiAhDM9D9JtIvYqoadtdaRKAQmiAqz0BsLWaqFVBIAUKpBaVpIDPdH8fEAxKwVlaNld+VUiQ615Dv6KIwXUDTbIQCqenoZozmXBndTmF63QivA6XAr5QRUkdqOkopatUKZksGUmkUalV0SilLXis5r4SMtbeTaOukPj1FpJvIWGKhvDlxIsPhYrFKORQ0azXK588SNesE8zMgJUpKSvMFpGETGTar5LuUEBtKKWvJtCuDZekuEOTu/X26snnGRg7Tn+8kVCFjkxMce/9DXn/3N3z1K/fQlG+hy4iNWzfjujEsAZFQ1JoNVDqHFGI1KWYpSBo6MAxsvJ4PLrVLTcdr7+Tw6z9FhT5BZZ6nnn+RXDLNnYO30uGmqFTraOlWXv/FHrxshru/3snszAyBZny8HdqCDOvAyBLgcrMuaW9lUs3k8pw4e4Hz4xNcnJzCNW02eu30WTniEz5r+9cjO7LEnSR7Xn2em7feQanh07Z+y6X0spqssfjciFRKHV7qFAlFJEChrho0Sils22Ht5i8yMjHN+Ow8G/s76b/rFlKb1iAH2qm1Weg9Wbo23EQml6dYmqNaq9PW3rWaGrxSDuuRYC+ov1SCxQEWluISdYUzCyFAKX77nt/jpZ88y8WpeYjOkc22Ml8ocmJkjDtuG+R2vcp8pUSmM8/whyP0D27CNGPA6v1vUfbKjmzmzQg1saShpSu6usoXzJxt595tn6VYrnGhWObYyDj1hs/mm3pxE0k+OnuWyWKFckNRacCG2+8A1MeFm0i4zptLy62nl5sxQhEpRcjl0EuXYZjctq6b+4c+x8VCiX1HhjlfLDNRqnB6bJzXDh1j/ztH+c1YgW9+azuWqRNePElQKRKtGOs68vSljfu5ixe7gTNCCP0ycy7edcQl/1GRz9SZ95l8dz8z1Tr7D73HC/sO0pWKYZsGmqYxVmxw/9e/yh8/9CBprwXDNBDlGfz5cWqRychsgJlewy0bN6Bp+tVqcwD0JVzn3KVfRicm/kUI8acrARGgKcHwsWOMHP0VmcYI1GaIpdbSECbFSpmJ6WnmmpBwXXJdfaxZt451fX0QhUghsCwL0awS1edQjRqRbvLck89RK8XZ9kd/wM133oFuGMsBf5BwnT+7bFenlHoc+ObyfUkQ+IwMn+TAnj08/6872X7/JroGu8CKoZSPFBqWJvFsg45sinRrlo51A8TTGZTvoyIfhEak6WhSIi0HZcRolku8d3SYqGRQ+psJ3unpYOs37mPd1s3EvVQRePyKbefafH7q7Pj4DuCZ0twc7x08yAu7nmX40CEq9RrNMGLvoZNs6O/GMS2CoIlhWDiWRWjZhJUKUayOYVhomo4UEj8IkFIhogikAKkTNqvs/dl/cfr0BJvyfRTKc8wen+PC6Y/ItbWz6cH7dww99MDUVffFa/P5Xc/88IdD//a3f//o3GyBYqVEPWiilEQBx09N8cob7/GVL9yOYSgkYAmJsGM06nV0FRHUysikh6ZrBEohpFwICCGJGj5H973If+zajS09CpV5YjEHXdMplIvUGrWdf/7QA5cdJmlXnCC8+fbLpXL58/VGvVehkEoSRhGmpoGC0YkZOrNJctl2NGmgmyZSSsIwwIonsJwEtusihSQMfQzDAkNHSI2pU0d5+vv/zImzDTpdj2KjQnuylcnyLFKpfbmUt33/2VPhch65EvDg1ESzGfj3RYJ9upBoUmJpGlKAoxuUayEvvnGEckMhLIswDNGdOG6qBV03UH6dsNEgaNbQNX0hSpWiOj/Dkdd+yTvDMyQtl3oYUGrUQUEz8PeV6tX7vnPgxStOuLSrJaDJRt3PWvaPLWnkBWzR5cIaOFSgFBTnm3gpm77+9Qt1R4DbmsW0bUARqQCiANtNIDWNysw459/5JT/bvYfZWZuYYWGbFgGKjpb2naOFi9t/PnqqfjUW7VpZcrJRDy/Uq7szpnVKCvElKaStaxIpBI0w5Pz5abJpBy/lomsa6c4e7FQrQaVMZeoCmlTEEmkac5PMHjvA7j17OXBojrhp4doOXjxZDIi+/eTxt//6dKkQXotDu1G9mWzWj+Wt2FMRKqVgky6k1ISgVG8w/MEoKmjQ050n2zOA5XqUpseZn7yALSWSiA+PHuH7u3bz1jtTpG0XXdeDTNLbWfGbD/znmff/51M9RL81keqWiMc0tIf9KMyV/DpJw6YlmeBr3/oaff3dzJ49xdjZM6hQ8OG5SX79/iiOHqPFdiYU6mkh5fdeGT/96R6iX002uultZb9xt60bWxOW09sM/YEgDC0lFZVGrWFq5rAmtRFD6odb7Pje/ZMffaK/If4Xdhx8bDvZS4YAAAAASUVORK5CYII=",ls=document.querySelector(".sign-up"),Jl=document.querySelector(".sign-up-button"),Xl=async()=>{await Xy()&&tE().then(t=>{const e=t.data().name;rE(e),console.log(t.data().name)}).catch(t=>{console.log("getUserName wrong"),console.log(t.code)})};Xl();function rE(n){let t=`
          <button type="button" class="user-btn">
          <img src="${nE}" alt="userFoto" class="user-foto"/>
          ${n}
          <svg class="user-icon">
            <use href="${Ql}#ddown"></use>
          </svg>
          </button>
        `;Jl.classList.add("is-hidden"),ls.insertAdjacentHTML("beforeend",t),document.querySelector(".user-btn").addEventListener("click",Zl)}function Zl(n){console.log("onUserBtnEL"),console.log(n.composedPath());const t=document.querySelector(".user-btn"),e=`
      <button class="logout-btn">
        Log out
        <svg class="logout-icon">
          <use href="${Ql}#loginout"></use>
        </svg>
      </button>
    `;t.insertAdjacentHTML("beforeend",e),t.removeEventListener("click",Zl),document.querySelector(".logout-btn"),setTimeout(()=>document.addEventListener("click",th),200)}function th(n){console.log("onLogoutBtn"),console.log(n.composedPath());const t=document.querySelector(".user-btn"),e=document.querySelector(".logout-btn");console.log(n.composedPath().includes(e)),n.composedPath().includes(e)?(Zy(),console.log("logout"),t.removeChild(e),ls.removeChild(t),Jl.classList.remove("is-hidden")):(t.removeChild(e),ls.removeChild(t),Xl()),document.removeEventListener("click",th)}export{Ql as a,oE as b,aE as c,cE as d,dE as e,fE as f,sE as g,pE as h,Xy as i,Xl as j,iE as s};
