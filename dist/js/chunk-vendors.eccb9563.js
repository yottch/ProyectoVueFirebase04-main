"use strict";(self["webpackChunkfirebase9"]=self["webpackChunkfirebase9"]||[]).push([[998],{444:function(e,t,n){n.d(t,{BH:function(){return O},L:function(){return a},LL:function(){return x},P0:function(){return I},Pz:function(){return A},Sg:function(){return C},ZB:function(){return l},ZR:function(){return P},aH:function(){return S},b$:function(){return m},eu:function(){return v},hl:function(){return _},jU:function(){return f},m9:function(){return W},ne:function(){return B},pd:function(){return V},q4:function(){return T},r3:function(){return D},ru:function(){return p},tV:function(){return c},uI:function(){return d},vZ:function(){return U},w1:function(){return g},xO:function(){return F},xb:function(){return M},z$:function(){return h},zd:function(){return j}});
/**
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
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const l=i<e.length,u=l?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==c||null==u)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==c){const e=o<<4&240|c>>2;if(r.push(e),64!==u){const e=c<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},c=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
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
 */function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&u(n)&&(e[n]=l(e[n],t[n]));return e}function u(e){return"__proto__"!==e}
/**
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
 */function h(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function d(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(h())}function f(){return"object"===typeof self&&self.self===self}function p(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function m(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function g(){const e=h();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _(){return"object"===typeof indexedDB}function v(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function y(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
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
 */const b=()=>y().__FIREBASE_DEFAULTS__,w=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},E=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&c(e[1]);return t&&JSON.parse(t)},k=()=>{try{return b()||w()||E()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},T=e=>{var t,n;return null===(n=null===(t=k())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},I=e=>{const t=T(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},S=()=>{var e;return null===(e=k())||void 0===e?void 0:e.config},A=e=>{var t;return null===(t=k())||void 0===t?void 0:t[`_${e}`]};
/**
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
 */
class O{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
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
 */function C(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
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
 */const R="FirebaseError";class P extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=R,Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,x.prototype.create)}}class x{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?N(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new P(r,o,n);return a}}function N(e,t){return e.replace(L,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const L=/\{\$([^}]+)}/g;
/**
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
 */
/**
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
 */
function D(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function M(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function U(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if($(n)&&$(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $(e){return null!==e&&"object"===typeof e}
/**
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
 */
/**
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
 */
function F(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function j(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function V(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
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
 */function B(e,t){const n=new H(e,t);return n.subscribe.bind(n)}class H{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=z(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=q),void 0===r.error&&(r.error=q),void 0===r.complete&&(r.complete=q);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function z(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function q(){}
/**
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
 */
/**
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
 */
function W(e){return e&&e._delegate?e._delegate:e}},262:function(e,t,n){n.d(t,{Bj:function(){return o},Fl:function(){return qe},IU:function(){return Re},Jd:function(){return I},PG:function(){return Ae},SU:function(){return Ve},Um:function(){return Te},WL:function(){return He},X$:function(){return P},X3:function(){return Ce},XI:function(){return $e},Xl:function(){return Pe},dq:function(){return Me},iH:function(){return Ue},j:function(){return O},lk:function(){return A},qj:function(){return ke},qq:function(){return w}});var r=n(577);let i;const s=[];class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(s.push(this),i=this)}off(){this.active&&(s.pop(),i=s[s.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&m)>0,u=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];l(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30,_=[];let v;const y=Symbol(""),b=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!_.includes(this))try{return _.push(v=this),S(),m=1<<++p,p<=g?h(this):E(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,A(),_.pop();const e=_.length;v=e>0?_[e-1]:void 0}}stop(){this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let k=!0;const T=[];function I(){T.push(k),k=!1}function S(){T.push(k),k=!0}function A(){const e=T.pop();k=void 0===e||e}function O(e,t,n){if(!C())return;let r=f.get(e);r||f.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=c());const s=void 0;R(i,s)}function C(){return k&&void 0!==v}function R(e,t){let n=!1;p<=g?u(e)||(e.n|=m,n=!l(e)):n=!e.has(v),n&&(e.add(v),v.deps.push(e))}function P(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let l=[];if("clear"===t)l=[...a.values()];else if("length"===n&&(0,r.kJ)(e))a.forEach(((e,t)=>{("length"===t||t>=i)&&l.push(e)}));else switch(void 0!==n&&l.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&l.push(a.get("length")):(l.push(a.get(y)),(0,r._N)(e)&&l.push(a.get(b)));break;case"delete":(0,r.kJ)(e)||(l.push(a.get(y)),(0,r._N)(e)&&l.push(a.get(b)));break;case"set":(0,r._N)(e)&&l.push(a.get(y));break}if(1===l.length)l[0]&&x(l[0]);else{const e=[];for(const t of l)t&&e.push(...t);x(c(e))}}function x(e,t){for(const n of(0,r.kJ)(e)?e:[...e])(n!==v||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(r.yk)),D=j(),M=j(!1,!0),U=j(!0),$=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Re(this);for(let t=0,i=this.length;t<i;t++)O(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Re)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){I();const n=Re(this)[t].apply(this,e);return A(),n}})),e}function j(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&s===(e?t?be:ye:t?ve:_e).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)($,i))return Reflect.get($,i,s);const a=Reflect.get(n,i,s);if((0,r.yk)(i)?L.has(i):N(i))return a;if(e||O(n,"get",i),t)return a;if(Me(a)){const e=!o||!(0,r.S0)(i);return e?a.value:a}return(0,r.Kn)(a)?e?Ie(a):ke(a):a}}const V=H(),B=H(!0);function H(e=!1){return function(t,n,i,s){let o=t[n];if(!e&&(i=Re(i),o=Re(o),!(0,r.kJ)(t)&&Me(o)&&!Me(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),c=Reflect.set(t,n,i,s);return t===Re(s)&&(a?(0,r.aU)(i,o)&&P(t,"set",n,i,o):P(t,"add",n,i)),c}}function z(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&P(e,"delete",t,void 0,i),s}function q(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&L.has(t)||O(e,"has",t),n}function W(e){return O(e,"iterate",(0,r.kJ)(e)?"length":y),Reflect.ownKeys(e)}const G={get:D,set:V,deleteProperty:z,has:q,ownKeys:W},K={get:U,set(e,t){return!0},deleteProperty(e,t){return!0}},J=(0,r.l7)({},G,{get:M,set:B}),X=e=>e,Y=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Re(e),s=Re(t);t!==s&&!n&&O(i,"get",t),!n&&O(i,"get",s);const{has:o}=Y(i),a=r?X:n?Ne:xe;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=Re(n),i=Re(e);return e!==i&&!t&&O(r,"has",e),!t&&O(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&O(Re(e),"iterate",y),Reflect.get(e,"size",e)}function te(e){e=Re(e);const t=Re(this),n=Y(t),r=n.has.call(t,e);return r||(t.add(e),P(t,"add",e,e)),this}function ne(e,t){t=Re(t);const n=Re(this),{has:i,get:s}=Y(n);let o=i.call(n,e);o||(e=Re(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&P(n,"set",e,t,a):P(n,"add",e,t),this}function re(e){const t=Re(this),{has:n,get:r}=Y(t);let i=n.call(t,e);i||(e=Re(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&P(t,"delete",e,void 0,s),o}function ie(){const e=Re(this),t=0!==e.size,n=void 0,r=e.clear();return t&&P(e,"clear",void 0,void 0,n),r}function se(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Re(s),a=t?X:e?Ne:xe;return!e&&O(o,"iterate",y),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function oe(e,t,n){return function(...i){const s=this["__v_raw"],o=Re(s),a=(0,r._N)(o),c="entries"===e||e===Symbol.iterator&&a,l="keys"===e&&a,u=s[e](...i),h=n?X:t?Ne:xe;return!t&&O(o,"iterate",l?b:y),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return Q(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=oe(i,!1,!1),n[i]=oe(i,!0,!1),t[i]=oe(i,!1,!0),r[i]=oe(i,!0,!0)})),[e,n,t,r]}const[le,ue,he,de]=ce();function fe(e,t){const n=t?e?de:he:e?ue:le;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const pe={get:fe(!1,!1)},me={get:fe(!1,!0)},ge={get:fe(!0,!1)};const _e=new WeakMap,ve=new WeakMap,ye=new WeakMap,be=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ee(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we((0,r.W7)(e))}function ke(e){return e&&e["__v_isReadonly"]?e:Se(e,!1,G,pe,_e)}function Te(e){return Se(e,!1,J,me,ve)}function Ie(e){return Se(e,!0,K,ge,ye)}function Se(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=Ee(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return s.set(e,c),c}function Ae(e){return Oe(e)?Ae(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Oe(e){return!(!e||!e["__v_isReadonly"])}function Ce(e){return Ae(e)||Oe(e)}function Re(e){const t=e&&e["__v_raw"];return t?Re(t):e}function Pe(e){return(0,r.Nj)(e,"__v_skip",!0),e}const xe=e=>(0,r.Kn)(e)?ke(e):e,Ne=e=>(0,r.Kn)(e)?Ie(e):e;function Le(e){C()&&(e=Re(e),e.dep||(e.dep=c()),R(e.dep))}function De(e,t){e=Re(e),e.dep&&x(e.dep)}function Me(e){return Boolean(e&&!0===e.__v_isRef)}function Ue(e){return Fe(e,!1)}function $e(e){return Fe(e,!0)}function Fe(e,t){return Me(e)?e:new je(e,t)}class je{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Re(e),this._value=t?e:xe(e)}get value(){return Le(this),this._value}set value(e){e=this._shallow?e:Re(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:xe(e),De(this,e))}}function Ve(e){return Me(e)?e.value:e}const Be={get:(e,t,n)=>Ve(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Me(i)&&!Me(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function He(e){return Ae(e)?e:new Proxy(e,Be)}class ze{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,De(this))})),this["__v_isReadonly"]=n}get value(){const e=Re(this);return Le(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qe(e,t){let n,i;const s=(0,r.mf)(e);s?(n=e,i=r.dG):(n=e.get,i=e.set);const o=new ze(n,i,s||!i);return o}Promise.resolve()},252:function(e,t,n){n.d(t,{$d:function(){return Jt},FN:function(){return xt},HY:function(){return Je},JJ:function(){return b},Ko:function(){return Tt},P$:function(){return I},Q6:function(){return P},U2:function(){return A},Uk:function(){return vt},Us:function(){return Ue},Wm:function(){return pt},Y3:function(){return dn},Y8:function(){return E},YP:function(){return In},_:function(){return ft},aZ:function(){return x},f3:function(){return w},h:function(){return Rn},iD:function(){return ot},ic:function(){return G},j4:function(){return at},kq:function(){return yt},nK:function(){return R},up:function(){return qe},w5:function(){return h},wg:function(){return tt},wy:function(){return Re}});var r=n(262),i=n(577);new Set;new Map;function s(e,t,...n){const r=e.vnode.props||i.kT;let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in r){const e=`${"modelValue"===a?"model":a}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o?s=n.map((e=>e.trim())):t&&(s=n.map(i.He))}let c;let l=r[c=(0,i.hR)(t)]||r[c=(0,i.hR)((0,i._A)(t))];!l&&o&&(l=r[c=(0,i.hR)((0,i.rs)(t))]),l&&Jt(l,e,6,s);const u=r[c+"Once"];if(u){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Jt(u,e,6,s)}}function o(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const a=e.emits;let c={},l=!1;if(!(0,i.mf)(e)){const r=e=>{const n=o(e,t,!0);n&&(l=!0,(0,i.l7)(c,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return a||l?((0,i.kJ)(a)?a.forEach((e=>c[e]=null)):(0,i.l7)(c,a),r.set(e,c),c):(r.set(e,null),null)}function a(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let c=null,l=null;function u(e){const t=c;return c=e,l=e&&e.type.__scopeId||null,t}function h(e,t=c,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&it(-1);const i=u(t),s=e(...n);return u(i),r._d&&it(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function d(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:c,attrs:l,emit:h,render:d,renderCache:m,data:g,setupState:_,ctx:v,inheritAttrs:y}=e;let b,w;const E=u(e);try{if(4&n.shapeFlag){const e=s||r;b=bt(d.call(e,e,m,o,_,g,v)),w=l}else{const e=t;0,b=bt(e.length>1?e(o,{attrs:l,slots:c,emit:h}):e(o,null)),w=t.props?l:f(l)}}catch(T){Ze.length=0,Xt(T,e,1),b=pt(Ye)}let k=b;if(w&&!1!==y){const e=Object.keys(w),{shapeFlag:t}=k;e.length&&7&t&&(a&&e.some(i.tR)&&(w=p(w,a)),k=_t(k,w))}return n.dirs&&(k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),b=k,u(E),b}const f=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},p=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function m(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:c,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!c||c&&c.$stable)||r!==o&&(r?!o||g(r,o,u):!!o);if(1024&l)return!0;if(16&l)return r?g(r,o,u):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!a(u,n))return!0}}return!1}function g(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!a(n,s))return!0}return!1}function _({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const v=e=>e.__isSuspense;function y(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):yn(e)}function b(e,t){if(Pt){let n=Pt.provides;const r=Pt.parent&&Pt.parent.provides;r===n&&(n=Pt.provides=Object.create(r)),n[e]=t}else 0}function w(e,t,n=!1){const r=Pt||c;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}function E(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return q((()=>{e.isMounted=!0})),K((()=>{e.isUnmounting=!0})),e}const k=[Function,Array],T={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:k,onEnter:k,onAfterEnter:k,onEnterCancelled:k,onBeforeLeave:k,onLeave:k,onAfterLeave:k,onLeaveCancelled:k,onBeforeAppear:k,onAppear:k,onAfterAppear:k,onAppearCancelled:k},setup(e,{slots:t}){const n=xt(),i=E();let s;return()=>{const o=t.default&&P(t.default(),!0);if(!o||!o.length)return;const a=(0,r.IU)(e),{mode:c}=a;const l=o[0];if(i.isLeaving)return O(l);const u=C(l);if(!u)return O(l);const h=A(u,a,i,n);R(u,h);const d=n.subTree,f=d&&C(d);let p=!1;const{getTransitionKey:m}=u.type;if(m){const e=m();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Ye&&(!lt(u,f)||p)){const e=A(f,a,i,n);if(R(f,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},O(l);"in-out"===c&&u.type!==Ye&&(e.delayLeave=(e,t,n)=>{const r=S(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return l}}},I=T;function S(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function A(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:_,onAppearCancelled:v}=t,y=String(e.key),b=S(n,e),w=(e,t)=>{e&&Jt(e,r,9,t)},E={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const s=b[y];s&&lt(e,s)&&s.el._leaveCb&&s.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=l,s=u;if(!n.isMounted){if(!i)return;t=g||c,r=_||l,s=v||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,w(t?s:r,[e]),E.delayedLeave&&E.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),w(n?p:f,[t]),t._leaveCb=void 0,b[i]===e&&delete b[i])};b[i]=e,d?(d(t,o),d.length<=1&&o()):o()},clone(e){return A(e,t,n,r)}};return E}function O(e){if(L(e))return e=_t(e),e.children=null,e}function C(e){return L(e)?e.children?e.children[0]:void 0:e}function R(e,t){6&e.shapeFlag&&e.component?R(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function P(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===Je?(128&s.patchFlag&&r++,n=n.concat(P(s.children,t))):(t||s.type!==Ye)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function x(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const N=e=>!!e.type.__asyncLoader;const L=e=>e.type.__isKeepAlive;RegExp,RegExp;function D(e,t){return(0,i.kJ)(e)?e.some((e=>D(e,t))):(0,i.HD)(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function M(e,t){$(e,"a",t)}function U(e,t){$(e,"da",t)}function $(e,t,n=Pt){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}e()});if(B(t,r,n),n){let e=n.parent;while(e&&e.parent)L(e.parent.vnode)&&F(r,t,n,e),e=e.parent}}function F(e,t,n,r){const s=B(t,e,r,!0);J((()=>{(0,i.Od)(r[t],s)}),n)}function j(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function V(e){return 128&e.shapeFlag?e.ssContent:e}function B(e,t,n=Pt,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),Nt(n);const s=Jt(t,n,e,i);return Lt(),(0,r.lk)(),s});return i?s.unshift(o):s.push(o),o}}const H=e=>(t,n=Pt)=>(!$t||"sp"===e)&&B(e,t,n),z=H("bm"),q=H("m"),W=H("bu"),G=H("u"),K=H("bum"),J=H("um"),X=H("sp"),Y=H("rtg"),Q=H("rtc");function Z(e,t=Pt){B("ec",e,t)}let ee=!0;function te(e){const t=se(e),n=e.proxy,s=e.ctx;ee=!1,t.beforeCreate&&re(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:m,updated:g,activated:_,deactivated:v,beforeDestroy:y,beforeUnmount:w,destroyed:E,unmounted:k,render:T,renderTracked:I,renderTriggered:S,errorCaptured:A,serverPrefetch:O,expose:C,inheritAttrs:R,components:P,directives:x,filters:N}=t,L=null;if(h&&ne(h,s,L,e.appContext.config.unwrapInjectedRef),c)for(const r in c){const e=c[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(ee=!0,a)for(const b in a){const e=a[b],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,c=(0,r.Fl)({get:t,set:o});Object.defineProperty(s,b,{enumerable:!0,configurable:!0,get:()=>c.value,set:e=>c.value=e})}if(l)for(const r in l)ie(l[r],s,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{b(t,e[t])}))}function D(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&re(d,e,"c"),D(z,f),D(q,p),D(W,m),D(G,g),D(M,_),D(U,v),D(Z,A),D(Q,I),D(Y,S),D(K,w),D(J,k),D(X,O),(0,i.kJ)(C))if(C.length){const t=e.exposed||(e.exposed={});C.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});T&&e.render===i.dG&&(e.render=T),null!=R&&(e.inheritAttrs=R),P&&(e.components=P),x&&(e.directives=x)}function ne(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=ue(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?w(n.from||o,n.default,!0):w(n.from||o):w(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function re(e,t,n){Jt((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function ie(e,t,n,r){const s=r.includes(".")?On(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&In(s,n)}else if((0,i.mf)(e))In(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>ie(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&In(s,r,e)}else 0}function se(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((e=>oe(c,e,o,!0))),oe(c,t,o)):c=t,s.set(t,c),c}function oe(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&oe(e,s,n,!0),i&&i.forEach((t=>oe(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=ae[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const ae={data:ce,props:de,emits:de,methods:de,computed:de,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:de,directives:de,watch:fe,provide:ce,inject:le};function ce(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function le(e,t){return de(ue(e),ue(t))}function ue(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function he(e,t){return e?[...new Set([].concat(e,t))]:t}function de(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function fe(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=he(e[r],t[r]);return n}function pe(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,ut,1),e.propsDefaults=Object.create(null),ge(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function me(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=e,l=(0,r.IU)(o),[u]=e.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ge(e,t,o,a)&&(h=!0);for(const s in l)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=_e(u,l,s,void 0,e,!0)):delete o[s]);if(a!==l)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&c){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];const c=t[s];if(u)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const t=(0,i._A)(s);o[t]=_e(u,l,t,c,e,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function ge(e,t,n,s){const[o,c]=e.propsOptions;let l,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const h=t[r];let d;o&&(0,i.RI)(o,d=(0,i._A)(r))?c&&c.includes(d)?(l||(l={}))[d]=h:n[d]=h:a(e.emitsOptions,r)||h!==s[r]&&(s[r]=h,u=!0)}if(c){const t=(0,r.IU)(n),s=l||i.kT;for(let r=0;r<c.length;r++){const a=c[r];n[a]=_e(o,t,a,s[a],e,!(0,i.RI)(s,a))}}return u}function _e(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(Nt(s),r=i[n]=e.call(null,t),Lt())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function ve(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},c=[];let l=!1;if(!(0,i.mf)(e)){const r=e=>{l=!0;const[n,r]=ve(e,t,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!l)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);ye(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(ye(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=Ee(Boolean,r.type),n=Ee(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&c.push(t)}}}}const u=[a,c];return r.set(e,u),u}function ye(e){return"$"!==e[0]}function be(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function we(e,t){return be(e)===be(t)}function Ee(e,t){return(0,i.kJ)(t)?t.findIndex((t=>we(t,e))):(0,i.mf)(t)&&we(t,e)?0:-1}const ke=e=>"_"===e[0]||"$stable"===e,Te=e=>(0,i.kJ)(e)?e.map(bt):[bt(e)],Ie=(e,t,n)=>{const r=h(((...e)=>Te(t(...e))),n);return r._c=!1,r},Se=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ke(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=Ie(s,n,r);else if(null!=n){0;const e=Te(n);t[s]=()=>e}}},Ae=(e,t)=>{const n=Te(t);e.slots.default=()=>n},Oe=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):Se(t,e.slots={})}else e.slots={},t&&Ae(e,t);(0,i.Nj)(e.slots,ut,1)},Ce=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,Se(t,s)),a=t}else t&&(Ae(e,t),a={default:1});if(o)for(const i in s)ke(i)||i in a||delete s[i]};function Re(e,t){const n=c;if(null===n)return e;const r=n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,c=i.kT]=t[o];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Cn(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function Pe(e,t,n,i){const s=e.dirs,o=t&&t.dirs;for(let a=0;a<s.length;a++){const c=s[a];o&&(c.oldValue=o[a].value);let l=c.dir[i];l&&((0,r.Jd)(),Jt(l,n,8,[e.el,c,e,t]),(0,r.lk)())}}function xe(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ne=0;function Le(e,t){return function(n,r=null){null==r||(0,i.Kn)(r)||(r=null);const s=xe(),o=new Set;let a=!1;const c=s.app={_uid:Ne++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Pn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(c,...t)):(0,i.mf)(e)&&(o.add(e),e(c,...t))),c},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),c},component(e,t){return t?(s.components[e]=t,c):s.components[e]},directive(e,t){return t?(s.directives[e]=t,c):s.directives[e]},mount(i,o,l){if(!a){const u=pt(n,r);return u.appContext=s,o&&t?t(u,i):e(u,i,l),a=!0,c._container=i,i.__vue_app__=c,qt(u.component)||u.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return s.provides[e]=t,c}};return c}}function De(){}const Me=y;function Ue(e){return $e(e)}function $e(e,t){De();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:v=i.dG,cloneNode:y,insertStaticContent:b}=e,w=(e,t,n,r=null,i=null,s=null,o=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!lt(e,t)&&(r=Y(e),W(e,i,s,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Xe:E(e,t,n,r);break;case Ye:k(e,t,n,r);break;case Qe:null==e&&T(t,n,r,o);break;case Je:M(e,t,n,r,i,s,o,a,c);break;default:1&h?A(e,t,n,r,i,s,o,a,c):6&h?U(e,t,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,i,s,o,a,c,Z)}null!=u&&i&&Fe(u,e&&e.ref,s,t||e,!t)},E=(e,t,n,r)=>{if(null==e)s(t.el=l(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},k=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},T=(e,t,n,r)=>{[e.el,e.anchor]=b(e.children,t,n,r)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=g(e),s(e,n,r),e=i;s(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=g(e),o(e),e=n;o(t)},A=(e,t,n,r,i,s,o,a,c)=>{o=o||"svg"===t.type,null==e?O(t,n,r,i,s,o,a,c):P(e,t,i,s,o,a,c)},O=(e,t,n,r,o,l,u,h)=>{let d,p;const{type:m,props:g,shapeFlag:_,transition:v,patchFlag:b,dirs:w}=e;if(e.el&&void 0!==y&&-1===b)d=e.el=y(e.el);else{if(d=e.el=c(e.type,l,g&&g.is,g),8&_?f(d,e.children):16&_&&R(e.children,d,null,r,o,l&&"foreignObject"!==m,u,h),w&&Pe(e,null,r,"created"),g){for(const t in g)"value"===t||(0,i.Gg)(t)||a(d,t,null,g[t],l,e.children,r,o,X);"value"in g&&a(d,"value",null,g.value),(p=g.onVnodeBeforeMount)&&je(p,r,e)}C(d,e,e.scopeId,u,r)}w&&Pe(e,null,r,"beforeMount");const E=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;E&&v.beforeEnter(d),s(d,t,n),((p=g&&g.onVnodeMounted)||E||w)&&Me((()=>{p&&je(p,r,e),E&&v.enter(d),w&&Pe(e,null,r,"mounted")}),o)},C=(e,t,n,r,i)=>{if(n&&v(e,n),r)for(let s=0;s<r.length;s++)v(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;C(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},R=(e,t,n,r,i,s,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=a?wt(e[l]):bt(e[l]);w(null,c,t,n,r,i,s,o,a)}},P=(e,t,n,r,s,o,c)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:d}=t;u|=16&e.patchFlag;const p=e.props||i.kT,m=t.props||i.kT;let g;(g=m.onVnodeBeforeUpdate)&&je(g,n,t,e),d&&Pe(t,e,n,"beforeUpdate");const _=s&&"foreignObject"!==t.type;if(h?x(e.dynamicChildren,h,l,n,r,_,o):c||B(e,t,l,null,n,r,_,o,!1),u>0){if(16&u)D(l,t,p,m,n,r,s);else if(2&u&&p.class!==m.class&&a(l,"class",null,m.class,s),4&u&&a(l,"style",p.style,m.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],c=p[o],u=m[o];u===c&&"value"!==o||a(l,o,c,u,s,e.children,n,r,X)}}1&u&&e.children!==t.children&&f(l,t.children)}else c||null!=h||D(l,t,p,m,n,r,s);((g=m.onVnodeUpdated)||d)&&Me((()=>{g&&je(g,n,t,e),d&&Pe(t,e,n,"updated")}),r)},x=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.el&&(c.type===Je||!lt(c,l)||70&c.shapeFlag)?p(c.el):n;w(c,l,u,null,r,i,s,o,!0)}},D=(e,t,n,r,s,o,c)=>{if(n!==r){for(const l in r){if((0,i.Gg)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(e,l,h,u,c,t.children,s,o,X)}if(n!==i.kT)for(const l in n)(0,i.Gg)(l)||l in r||a(e,l,n[l],null,c,t.children,s,o,X);"value"in r&&a(e,"value",n.value,r.value)}},M=(e,t,n,r,i,o,a,c,u)=>{const h=t.el=e?e.el:l(""),d=t.anchor=e?e.anchor:l("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(s(h,n,r),s(d,n,r),R(t.children,n,d,i,o,a,c,u)):f>0&&64&f&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,i,o,a,c),(null!=t.key||i&&t===i.subTree)&&Ve(e,t,!0)):B(e,t,n,d,i,o,a,c,u)},U=(e,t,n,r,i,s,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,c):$(t,n,r,i,s,o,c):F(e,t,c)},$=(e,t,n,r,i,s,o)=>{const a=e.component=Rt(e,r,i);if(L(e)&&(a.ctx.renderer=Z),Ft(a),a.asyncDep){if(i&&i.registerDep(a,j),!e.el){const e=a.subTree=pt(Ye);k(null,e,t,n)}}else j(a,e,t,n,i,s,o)},F=(e,t,n)=>{const r=t.component=e.component;if(m(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,gn(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},j=(e,t,n,s,o,a,c)=>{const l=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:l,vnode:h}=e,f=n;0,u.allowRecurse=!1,n?(n.el=h.el,V(e,n,c)):n=h,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&je(t,l,n,h),u.allowRecurse=!0;const m=d(e);0;const g=e.subTree;e.subTree=m,w(g,m,p(g.el),Y(g),e,o,a),n.el=m.el,null===f&&_(e,m.el),s&&Me(s,o),(t=n.props&&n.props.onVnodeUpdated)&&Me((()=>je(t,l,n,h)),o)}else{let r;const{el:c,props:l}=t,{bm:h,m:f,parent:p}=e,m=N(t);if(u.allowRecurse=!1,h&&(0,i.ir)(h),!m&&(r=l&&l.onVnodeBeforeMount)&&je(r,p,t),u.allowRecurse=!0,c&&te){const n=()=>{e.subTree=d(e),te(c,e.subTree,e,o,null)};m?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=d(e);0,w(null,r,n,s,e,o,a),t.el=r.el}if(f&&Me(f,o),!m&&(r=l&&l.onVnodeMounted)){const e=t;Me((()=>je(r,p,e)),o)}256&t.shapeFlag&&e.a&&Me(e.a,o),e.isMounted=!0,t=n=s=null}},u=new r.qq(l,(()=>pn(e.update)),e.scope),h=e.update=u.run.bind(u);h.id=e.uid,u.allowRecurse=h.allowRecurse=!0,h()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,me(e,t.props,i,n),Ce(e,t.children,n),(0,r.Jd)(),bn(void 0,e.update),(0,r.lk)()},B=(e,t,n,r,i,s,o,a,c=!1)=>{const l=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:d,shapeFlag:p}=t;if(d>0){if(128&d)return void z(l,h,n,r,i,s,o,a,c);if(256&d)return void H(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&X(l,i,s),h!==l&&f(n,h)):16&u?16&p?z(l,h,n,r,i,s,o,a,c):X(l,i,s,!0):(8&u&&f(n,""),16&p&&R(h,n,r,i,s,o,a,c))},H=(e,t,n,r,s,o,a,c,l)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=l?wt(t[f]):bt(t[f]);w(e[f],r,n,null,s,o,a,c,l)}u>h?X(e,s,o,!0,!1,d):R(t,n,r,s,o,a,c,l,d)},z=(e,t,n,r,s,o,a,c,l)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=l?wt(t[u]):bt(t[u]);if(!lt(r,i))break;w(r,i,n,null,s,o,a,c,l),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=l?wt(t[f]):bt(t[f]);if(!lt(r,i))break;w(r,i,n,null,s,o,a,c,l),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)w(null,t[u]=l?wt(t[u]):bt(t[u]),n,i,s,o,a,c,l),u++}}else if(u>f)while(u<=d)W(e[u],s,o,!0),u++;else{const p=u,m=u,g=new Map;for(u=m;u<=f;u++){const e=t[u]=l?wt(t[u]):bt(t[u]);null!=e.key&&g.set(e.key,u)}let _,v=0;const y=f-m+1;let b=!1,E=0;const k=new Array(y);for(u=0;u<y;u++)k[u]=0;for(u=p;u<=d;u++){const r=e[u];if(v>=y){W(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(_=m;_<=f;_++)if(0===k[_-m]&&lt(r,t[_])){i=_;break}void 0===i?W(r,s,o,!0):(k[i-m]=u+1,i>=E?E=i:b=!0,w(r,t[i],n,null,s,o,a,c,l),v++)}const T=b?Be(k):i.Z6;for(_=T.length-1,u=y-1;u>=0;u--){const e=m+u,i=t[e],d=e+1<h?t[e+1].el:r;0===k[u]?w(null,i,n,d,s,o,a,c,l):b&&(_<0||u!==T[_]?q(i,n,d,2):_--)}}},q=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void q(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,Z);if(a===Je){s(o,t,n);for(let e=0;e<l.length;e++)q(l[e],t,n,r);return void s(e.anchor,t,n)}if(a===Qe)return void I(e,t,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),s(o,t,n),Me((()=>c.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=c,a=()=>s(o,t,n),l=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,l):l()}else s(o,t,n)},W=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Fe(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!N(e);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&je(m,t,e),6&u)J(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&Pe(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,Z,r):l&&(s!==Je||h>0&&64&h)?X(l,t,n,!1,!0):(s===Je&&384&h||!i&&16&u)&&X(c,t,n),r&&G(e)}(p&&(m=o&&o.onVnodeUnmounted)||f)&&Me((()=>{m&&je(m,t,e),f&&Pe(e,null,t,"unmounted")}),n)},G=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Je)return void K(n,r);if(t===Qe)return void S(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},K=(e,t)=>{let n;while(e!==t)n=g(e),o(e),e=n;o(t)},J=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,W(a,e,t,n)),c&&Me(c,t),Me((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},X=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)W(e[o],t,n,r,i)},Y=e=>6&e.shapeFlag?Y(e.component.subTree):128&e.shapeFlag?e.suspense.next():g(e.anchor||e.el),Q=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):w(t._vnode||null,e,t,null,null,null,n),wn(),t._vnode=e},Z={p:w,um:W,m:q,r:G,mt:$,mc:R,pc:B,pbc:x,n:Y,o:e};let ee,te;return t&&([ee,te]=t(Z)),{render:Q,hydrate:ee,createApp:Le(Q,ee)}}function Fe(e,t,n,s,o=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Fe(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,o)));if(N(s)&&!o)return;const a=4&s.shapeFlag?qt(s.component)||s.component.proxy:s.el,c=o?null:a,{i:l,r:u}=e;const h=t&&t.r,d=l.refs===i.kT?l.refs={}:l.refs,f=l.setupState;if(null!=h&&h!==u&&((0,i.HD)(h)?(d[h]=null,(0,i.RI)(f,h)&&(f[h]=null)):(0,r.dq)(h)&&(h.value=null)),(0,i.HD)(u)){const e=()=>{d[u]=c,(0,i.RI)(f,u)&&(f[u]=c)};c?(e.id=-1,Me(e,n)):e()}else if((0,r.dq)(u)){const e=()=>{u.value=c};c?(e.id=-1,Me(e,n)):e()}else(0,i.mf)(u)&&Kt(u,l,12,[c,d])}function je(e,t,n,r=null){Jt(e,t,7,[n,r])}function Ve(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=wt(s[i]),t.el=e.el),n||Ve(e,t))}}function Be(e){const t=e.slice(),n=[0];let r,i,s,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<c?s=a+1:o=a;c<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const He=e=>e.__isTeleport;const ze="components";function qe(e,t){return Ge(ze,e,!0,t)||e}const We=Symbol();function Ge(e,t,n=!0,r=!1){const s=c||Pt;if(s){const n=s.type;if(e===ze){const e=Wt(n);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Ke(s[e]||n[e],t)||Ke(s.appContext[e],t);return!o&&r?n:o}}function Ke(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const Je=Symbol(void 0),Xe=Symbol(void 0),Ye=Symbol(void 0),Qe=Symbol(void 0),Ze=[];let et=null;function tt(e=!1){Ze.push(et=e?null:[])}function nt(){Ze.pop(),et=Ze[Ze.length-1]||null}let rt=1;function it(e){rt+=e}function st(e){return e.dynamicChildren=rt>0?et||i.Z6:null,nt(),rt>0&&et&&et.push(e),e}function ot(e,t,n,r,i,s){return st(ft(e,t,n,r,i,s,!0))}function at(e,t,n,r,i){return st(pt(e,t,n,r,i,!0))}function ct(e){return!!e&&!0===e.__v_isVNode}function lt(e,t){return e.type===t.type&&e.key===t.key}const ut="__vInternal",ht=({key:e})=>null!=e?e:null,dt=({ref:e})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:c,r:e}:e:null;function ft(e,t=null,n=null,r=0,s=null,o=(e===Je?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ht(t),ref:t&&dt(t),scopeId:l,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(Et(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),rt>0&&!a&&et&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&et.push(u),u}const pt=mt;function mt(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==We||(e=Ye),ct(e)){const r=_t(e,t,!0);return n&&Et(r,n),r}if(Gt(e)&&(e=e.__vccOpts),t){t=gt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const c=(0,i.HD)(e)?1:v(e)?128:He(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return ft(e,t,n,s,o,c,a,!0)}function gt(e){return e?(0,r.X3)(e)||ut in e?(0,i.l7)({},e):e:null}function _t(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,c=t?kt(r||{},t):r,l={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&ht(c),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(dt(t)):[s,dt(t)]:dt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Je?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_t(e.ssContent),ssFallback:e.ssFallback&&_t(e.ssFallback),el:e.el,anchor:e.anchor};return l}function vt(e=" ",t=0){return pt(Xe,null,e,t)}function yt(e="",t=!1){return t?(tt(),at(Ye,null,e)):pt(Ye,null,e)}function bt(e){return null==e||"boolean"===typeof e?pt(Ye):(0,i.kJ)(e)?pt(Je,null,e.slice()):"object"===typeof e?wt(e):pt(Xe,null,String(e))}function wt(e){return null===e.el||e.memo?e:_t(e)}function Et(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),Et(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||ut in t?3===r&&c&&(1===c.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=c}}else(0,i.mf)(t)?(t={default:t,_ctx:c},n=32):(t=String(t),64&r?(n=16,t=[vt(t)]):n=8);e.children=t,e.shapeFlag|=n}function kt(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],i=r[e];n!==i&&(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}function Tt(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const It=e=>e?Dt(e)?qt(e)||e.proxy:It(e.parent):null,St=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>It(e.parent),$root:e=>It(e.root),$emit:e=>e.emit,$options:e=>se(e),$forceUpdate:e=>()=>pn(e.update),$nextTick:e=>dn.bind(e.proxy),$watch:e=>An.bind(e)}),At={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=e;let h;if("$"!==t[0]){const r=c[t];if(void 0!==r)switch(r){case 0:return s[t];case 1:return o[t];case 3:return n[t];case 2:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return c[t]=0,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return c[t]=1,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return c[t]=2,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return c[t]=3,n[t];ee&&(c[t]=4)}}const d=St[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=l.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(c[t]=3,n[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;if(s!==i.kT&&(0,i.RI)(s,t))s[t]=n;else if(r!==i.kT&&(0,i.RI)(r,t))r[t]=n;else if((0,i.RI)(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return void 0!==n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(St,a)||(0,i.RI)(s.config.globalProperties,a)}};const Ot=xe();let Ct=0;function Rt(e,t,n){const a=e.type,c=(t?t.appContext:e.appContext)||Ot,l={uid:Ct++,vnode:e,type:a,parent:t,appContext:c,root:null,next:null,subTree:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(c.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ve(a,c),emitsOptions:o(a,c),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:a.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=s.bind(null,l),e.ce&&e.ce(l),l}let Pt=null;const xt=()=>Pt||c,Nt=e=>{Pt=e,e.scope.on()},Lt=()=>{Pt&&Pt.scope.off(),Pt=null};function Dt(e){return 4&e.vnode.shapeFlag}let Mt,Ut,$t=!1;function Ft(e,t=!1){$t=t;const{props:n,children:r}=e.vnode,i=Dt(e);pe(e,n,i,t),Oe(e,r);const s=i?jt(e,t):void 0;return $t=!1,s}function jt(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,At));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?zt(e):null;Nt(e),(0,r.Jd)();const o=Kt(s,e,0,[e.props,n]);if((0,r.lk)(),Lt(),(0,i.tI)(o)){if(o.then(Lt,Lt),t)return o.then((n=>{Vt(e,n,t)})).catch((t=>{Xt(t,e,0)}));e.asyncDep=o}else Vt(e,o,t)}else Bt(e,t)}function Vt(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Bt(e,n)}function Bt(e,t,n){const s=e.type;if(!e.render){if(!t&&Mt&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Mt(t,c)}}e.render=s.render||i.dG,Ut&&Ut(e)}Nt(e),(0,r.Jd)(),te(e),(0,r.lk)(),Lt()}function Ht(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function zt(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Ht(e))},slots:e.slots,emit:e.emit,expose:t}}function qt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in St?St[n](e):void 0}}))}function Wt(e){return(0,i.mf)(e)&&e.displayName||e.name}function Gt(e){return(0,i.mf)(e)&&"__vccOpts"in e}function Kt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Xt(s,t,n)}return i}function Jt(e,t,n,r){if((0,i.mf)(e)){const s=Kt(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{Xt(e,t,n)})),s}const s=[];for(let i=0;i<e.length;i++)s.push(Jt(e[i],t,n,r));return s}function Xt(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void Kt(o,null,10,[e,i,s])}Yt(e,n,i,r)}function Yt(e,t,n,r=!0){console.error(e)}let Qt=!1,Zt=!1;const en=[];let tn=0;const nn=[];let rn=null,sn=0;const on=[];let an=null,cn=0;const ln=Promise.resolve();let un=null,hn=null;function dn(e){const t=un||ln;return e?t.then(this?e.bind(this):e):t}function fn(e){let t=tn+1,n=en.length;while(t<n){const r=t+n>>>1,i=En(en[r]);i<e?t=r+1:n=r}return t}function pn(e){en.length&&en.includes(e,Qt&&e.allowRecurse?tn+1:tn)||e===hn||(null==e.id?en.push(e):en.splice(fn(e.id),0,e),mn())}function mn(){Qt||Zt||(Zt=!0,un=ln.then(kn))}function gn(e){const t=en.indexOf(e);t>tn&&en.splice(t,1)}function _n(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),mn()}function vn(e){_n(e,rn,nn,sn)}function yn(e){_n(e,an,on,cn)}function bn(e,t=null){if(nn.length){for(hn=t,rn=[...new Set(nn)],nn.length=0,sn=0;sn<rn.length;sn++)rn[sn]();rn=null,sn=0,hn=null,bn(e,t)}}function wn(e){if(on.length){const e=[...new Set(on)];if(on.length=0,an)return void an.push(...e);for(an=e,an.sort(((e,t)=>En(e)-En(t))),cn=0;cn<an.length;cn++)an[cn]();an=null,cn=0}}const En=e=>null==e.id?1/0:e.id;function kn(e){Zt=!1,Qt=!0,bn(e),en.sort(((e,t)=>En(e)-En(t)));i.dG;try{for(tn=0;tn<en.length;tn++){const e=en[tn];e&&!1!==e.active&&Kt(e,null,14)}}finally{tn=0,en.length=0,wn(e),Qt=!1,un=null,(en.length||nn.length||on.length)&&kn(e)}}const Tn={};function In(e,t,n){return Sn(e,t,n)}function Sn(e,t,{immediate:n,deep:s,flush:o,onTrack:a,onTrigger:c}=i.kT){const l=Pt;let u,h,d=!1,f=!1;if((0,r.dq)(e)?(u=()=>e.value,d=!!e._shallow):(0,r.PG)(e)?(u=()=>e,s=!0):(0,i.kJ)(e)?(f=!0,d=e.some(r.PG),u=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Cn(e):(0,i.mf)(e)?Kt(e,l,2):void 0))):u=(0,i.mf)(e)?t?()=>Kt(e,l,2):()=>{if(!l||!l.isUnmounted)return h&&h(),Jt(e,l,3,[p])}:i.dG,t&&s){const e=u;u=()=>Cn(e())}let p=e=>{h=v.onStop=()=>{Kt(e,l,4)}};if($t)return p=i.dG,t?n&&Jt(t,l,3,[u(),f?[]:void 0,p]):u(),i.dG;let m=f?[]:Tn;const g=()=>{if(v.active)if(t){const e=v.run();(s||d||(f?e.some(((e,t)=>(0,i.aU)(e,m[t]))):(0,i.aU)(e,m)))&&(h&&h(),Jt(t,l,3,[e,m===Tn?void 0:m,p]),m=e)}else v.run()};let _;g.allowRecurse=!!t,_="sync"===o?g:"post"===o?()=>Me(g,l&&l.suspense):()=>{!l||l.isMounted?vn(g):g()};const v=new r.qq(u,_);return t?n?g():m=v.run():"post"===o?Me(v.run.bind(v),l&&l.suspense):v.run(),()=>{v.stop(),l&&l.scope&&(0,i.Od)(l.scope.effects,v)}}function An(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?On(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=Pt;Nt(this);const c=Sn(s,o.bind(r),n);return a?Nt(a):Lt(),c}function On(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Cn(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Cn(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Cn(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Cn(e,t)}));else if((0,i.PO)(e))for(const n in e)Cn(e[n],t);return e}function Rn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?ct(t)?pt(e,null,[t]):pt(e,t):pt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&ct(n)&&(n=[n]),pt(e,t,n))}Symbol("");const Pn="3.2.19"},963:function(e,t,n){n.d(t,{F8:function(){return ae},iM:function(){return oe},nr:function(){return re},ri:function(){return de}});var r=n(577),i=n(252);n(262);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=new Map,c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?o.createElementNS(s,e):o.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>o.createTextNode(e),createComment:e=>o.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>o.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let s=a.get(e);if(!s){const t=o.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,s=t.content,r){const e=s.firstChild;while(e.firstChild)s.appendChild(e.firstChild);s.removeChild(e)}a.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function l(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function u(e,t,n){const i=e.style,s=i.display;if(n)if((0,r.HD)(n))t!==n&&(i.cssText=n);else{for(const e in n)d(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&d(i,e,"")}else e.removeAttribute("style");"_vod"in e&&(i.display=s)}const h=/\s*!important$/;function d(e,t,n){if((0,r.kJ)(n))n.forEach((n=>d(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);h.test(n)?e.setProperty((0,r.rs)(i),n.replace(h,""),"important"):e[i]=n}}const f=["Webkit","Moz","ms"],p={};function m(e,t){const n=p[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return p[t]=i;i=(0,r.kC)(i);for(let r=0;r<f.length;r++){const n=f[r]+i;if(n in e)return p[t]=n}return t}const g="http://www.w3.org/1999/xlink";function _(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(g,t.slice(6,t.length)):e.setAttributeNS(g,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function v(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const r=null==n?"":n;return e.value!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=(0,r.yA)(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(l){0}}let y=Date.now,b=!1;if("undefined"!==typeof window){y()>document.createEvent("Event").timeStamp&&(y=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);b=!!(e&&Number(e[1])<=53)}let w=0;const E=Promise.resolve(),k=()=>{w=0},T=()=>w||(E.then(k),w=y());function I(e,t,n,r){e.addEventListener(t,n,r)}function S(e,t,n,r){e.removeEventListener(t,n,r)}function A(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=C(t);if(r){const o=s[t]=R(r,i);I(e,n,o,a)}else o&&(S(e,n,o,a),s[t]=void 0)}}const O=/(?:Once|Passive|Capture)$/;function C(e){let t;if(O.test(e)){let n;t={};while(n=e.match(O))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function R(e,t){const n=e=>{const r=e.timeStamp||y();(b||r>=n.attached-1)&&(0,i.$d)(P(e,n.value),t,5,[e])};return n.value=e,n.attached=T(),n}function P(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}const x=/^on[a-z]/,N=(e,t,n,i,s=!1,o,a,c,h)=>{"class"===t?l(e,i,s):"style"===t?u(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||A(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):L(e,t,i,s))?v(e,t,i,o,a,c,h):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),_(e,t,i,s))};function L(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&x.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!x.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const D="transition",M="animation",U=(e,{slots:t})=>(0,i.h)(i.P$,V(e),t);U.displayName="Transition";const $={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=(U.props=(0,r.l7)({},i.P$.props,$),(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)}),j=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function V(e){const t={};for(const r in e)r in $||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,m=B(s),g=m&&m[0],_=m&&m[1],{onBeforeEnter:v,onEnter:y,onEnterCancelled:b,onLeave:w,onLeaveCancelled:E,onBeforeAppear:k=v,onAppear:T=y,onAppearCancelled:I=b}=t,S=(e,t,n)=>{q(e,t?h:c),q(e,t?u:a),n&&n()},A=(e,t)=>{q(e,p),q(e,f),t&&t()},O=e=>(t,n)=>{const r=e?T:y,s=()=>S(t,e,n);F(r,[t,s]),W((()=>{q(t,e?l:o),z(t,e?h:c),j(r)||K(t,i,g,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){F(v,[e]),z(e,o),z(e,a)},onBeforeAppear(e){F(k,[e]),z(e,l),z(e,u)},onEnter:O(!1),onAppear:O(!0),onLeave(e,t){const n=()=>A(e,t);z(e,d),Q(),z(e,f),W((()=>{q(e,d),z(e,p),j(w)||K(e,i,_,n)})),F(w,[e,n])},onEnterCancelled(e){S(e,!1),F(b,[e])},onAppearCancelled(e){S(e,!0),F(I,[e])},onLeaveCancelled(e){A(e),F(E,[e])}})}function B(e){if(null==e)return null;if((0,r.Kn)(e))return[H(e.enter),H(e.leave)];{const t=H(e);return[t,t]}}function H(e){const t=(0,r.He)(e);return t}function z(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function q(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function W(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let G=0;function K(e,t,n,r){const i=e._endId=++G,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=J(e,t);if(!o)return r();const l=o+"end";let u=0;const h=()=>{e.removeEventListener(l,d),s()},d=t=>{t.target===e&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),e.addEventListener(l,d)}function J(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(D+"Delay"),s=r(D+"Duration"),o=X(i,s),a=r(M+"Delay"),c=r(M+"Duration"),l=X(a,c);let u=null,h=0,d=0;t===D?o>0&&(u=D,h=o,d=s.length):t===M?l>0&&(u=M,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?D:M:null,d=u?u===D?s.length:c.length:0);const f=u===D&&/\b(transform|all)(,|$)/.test(n[D+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function X(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Y(t)+Y(e[n]))))}function Y(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function Q(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=e=>{const t=e.props["onUpdate:modelValue"];return(0,r.kJ)(t)?e=>(0,r.ir)(t,e):t};function ee(e){e.target.composing=!0}function te(e){const t=e.target;t.composing&&(t.composing=!1,ne(t,"input"))}function ne(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const re={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e._assign=Z(s);const o=i||s.props&&"number"===s.props.type;I(e,t?"change":"input",(t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():o&&(i=(0,r.He)(i)),e._assign(i)})),n&&I(e,"change",(()=>{e.value=e.value.trim()})),t||(I(e,"compositionstart",ee),I(e,"compositionend",te),I(e,"change",te))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:s}},o){if(e._assign=Z(o),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((s||"number"===e.type)&&(0,r.He)(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const ie=["ctrl","shift","alt","meta"],se={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ie.some((n=>e[`${n}Key`]&&!t.includes(n)))},oe=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=se[t[e]];if(r&&r(n,t))return}return e(n,...r)},ae={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):ce(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),ce(e,!0),r.enter(e)):r.leave(e,(()=>{ce(e,!1)})):ce(e,t))},beforeUnmount(e,{value:t}){ce(e,t)}};function ce(e,t){e.style.display=t?e._vod:"none"}const le=(0,r.l7)({patchProp:N},c);let ue;function he(){return ue||(ue=(0,i.Us)(le))}const de=(...e)=>{const t=he().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=fe(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function fe(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},577:function(e,t,n){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:function(){return f},DM:function(){return x},E9:function(){return re},F7:function(){return T},Gg:function(){return z},HD:function(){return D},He:function(){return te},Kn:function(){return U},NO:function(){return E},Nj:function(){return ee},Od:function(){return A},PO:function(){return B},Pq:function(){return a},RI:function(){return C},S0:function(){return H},W7:function(){return V},WV:function(){return m},Z6:function(){return b},_A:function(){return G},_N:function(){return P},aU:function(){return Q},dG:function(){return w},e1:function(){return s},fY:function(){return r},hR:function(){return Y},hq:function(){return g},ir:function(){return Z},j5:function(){return l},kC:function(){return X},kJ:function(){return R},kT:function(){return y},l7:function(){return S},mf:function(){return L},rs:function(){return J},tI:function(){return $},tR:function(){return I},yA:function(){return c},yk:function(){return M},zw:function(){return _}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(e){return!!e||""===e}function l(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=D(r)?d(r):l(r);if(i)for(const e in i)t[e]=i[e]}return t}return D(e)||U(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(D(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(U(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=m(e[r],t[r]);return n}function m(e,t){if(e===t)return!0;let n=N(e),r=N(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=R(e),r=R(t),n||r)return!(!n||!r)&&p(e,t);if(n=U(e),r=U(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!m(e[n],t[n]))return!1}}return String(e)===String(t)}function g(e,t){return e.findIndex((e=>m(e,t)))}const _=e=>null==e?"":R(e)||U(e)&&(e.toString===F||!L(e.toString))?JSON.stringify(e,v,2):String(e),v=(e,t)=>t&&t.__v_isRef?v(e,t.value):P(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:x(t)?{[`Set(${t.size})`]:[...t.values()]}:!U(t)||R(t)||B(t)?t:String(t),y={},b=[],w=()=>{},E=()=>!1,k=/^on[^a-z]/,T=e=>k.test(e),I=e=>e.startsWith("onUpdate:"),S=Object.assign,A=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},O=Object.prototype.hasOwnProperty,C=(e,t)=>O.call(e,t),R=Array.isArray,P=e=>"[object Map]"===j(e),x=e=>"[object Set]"===j(e),N=e=>e instanceof Date,L=e=>"function"===typeof e,D=e=>"string"===typeof e,M=e=>"symbol"===typeof e,U=e=>null!==e&&"object"===typeof e,$=e=>U(e)&&L(e.then)&&L(e.catch),F=Object.prototype.toString,j=e=>F.call(e),V=e=>j(e).slice(8,-1),B=e=>"[object Object]"===j(e),H=e=>D(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,z=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),q=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},W=/-(\w)/g,G=q((e=>e.replace(W,((e,t)=>t?t.toUpperCase():"")))),K=/\B([A-Z])/g,J=q((e=>e.replace(K,"-$1").toLowerCase())),X=q((e=>e.charAt(0).toUpperCase()+e.slice(1))),Y=q((e=>e?`on${X(e)}`:"")),Q=(e,t)=>!Object.is(e,t),Z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},244:function(e,t,n){var r={};n.r(r),n.d(r,{afterMain:function(){return k},afterRead:function(){return b},afterWrite:function(){return S},applyStyles:function(){return D},arrow:function(){return ie},auto:function(){return c},basePlacements:function(){return l},beforeMain:function(){return w},beforeRead:function(){return v},beforeWrite:function(){return T},bottom:function(){return s},clippingParents:function(){return d},computeStyles:function(){return ue},createPopper:function(){return at},createPopperBase:function(){return st},createPopperLite:function(){return lt},detectOverflow:function(){return Pe},end:function(){return h},eventListeners:function(){return fe},flip:function(){return De},hide:function(){return Fe},left:function(){return a},main:function(){return E},modifierPhases:function(){return A},offset:function(){return Be},placements:function(){return _},popper:function(){return p},popperGenerator:function(){return it},popperOffsets:function(){return ze},preventOverflow:function(){return Ge},read:function(){return y},reference:function(){return m},right:function(){return o},start:function(){return u},top:function(){return i},variationPlacements:function(){return g},viewport:function(){return f},write:function(){return I}});var i="top",s="bottom",o="right",a="left",c="auto",l=[i,s,o,a],u="start",h="end",d="clippingParents",f="viewport",p="popper",m="reference",g=l.reduce((function(e,t){return e.concat([t+"-"+u,t+"-"+h])}),[]),_=[].concat(l,[c]).reduce((function(e,t){return e.concat([t,t+"-"+u,t+"-"+h])}),[]),v="beforeRead",y="read",b="afterRead",w="beforeMain",E="main",k="afterMain",T="beforeWrite",I="write",S="afterWrite",A=[v,y,b,w,E,k,T,I,S];function O(e){return e?(e.nodeName||"").toLowerCase():null}function C(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function R(e){var t=C(e).Element;return e instanceof t||e instanceof Element}function P(e){var t=C(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function x(e){if("undefined"===typeof ShadowRoot)return!1;var t=C(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function N(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];P(i)&&O(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function L(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),o=s.reduce((function(e,t){return e[t]="",e}),{});P(r)&&O(r)&&(Object.assign(r.style,o),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}}var D={name:"applyStyles",enabled:!0,phase:"write",fn:N,effect:L,requires:["computeStyles"]};function M(e){return e.split("-")[0]}function U(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,i=1;return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function $(e){var t=U(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function F(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&x(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function j(e){return C(e).getComputedStyle(e)}function V(e){return["table","td","th"].indexOf(O(e))>=0}function B(e){return((R(e)?e.ownerDocument:e.document)||window.document).documentElement}function H(e){return"html"===O(e)?e:e.assignedSlot||e.parentNode||(x(e)?e.host:null)||B(e)}function z(e){return P(e)&&"fixed"!==j(e).position?e.offsetParent:null}function q(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&P(e)){var r=j(e);if("fixed"===r.position)return null}var i=H(e);while(P(i)&&["html","body"].indexOf(O(i))<0){var s=j(i);if("none"!==s.transform||"none"!==s.perspective||"paint"===s.contain||-1!==["transform","perspective"].indexOf(s.willChange)||t&&"filter"===s.willChange||t&&s.filter&&"none"!==s.filter)return i;i=i.parentNode}return null}function W(e){var t=C(e),n=z(e);while(n&&V(n)&&"static"===j(n).position)n=z(n);return n&&("html"===O(n)||"body"===O(n)&&"static"===j(n).position)?t:n||q(e)||t}function G(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var K=Math.max,J=Math.min,X=Math.round;function Y(e,t,n){return K(e,J(t,n))}function Q(){return{top:0,right:0,bottom:0,left:0}}function Z(e){return Object.assign({},Q(),e)}function ee(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var te=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,Z("number"!==typeof e?e:ee(e,l))};function ne(e){var t,n=e.state,r=e.name,c=e.options,l=n.elements.arrow,u=n.modifiersData.popperOffsets,h=M(n.placement),d=G(h),f=[a,o].indexOf(h)>=0,p=f?"height":"width";if(l&&u){var m=te(c.padding,n),g=$(l),_="y"===d?i:a,v="y"===d?s:o,y=n.rects.reference[p]+n.rects.reference[d]-u[d]-n.rects.popper[p],b=u[d]-n.rects.reference[d],w=W(l),E=w?"y"===d?w.clientHeight||0:w.clientWidth||0:0,k=y/2-b/2,T=m[_],I=E-g[p]-m[v],S=E/2-g[p]/2+k,A=Y(T,S,I),O=d;n.modifiersData[r]=(t={},t[O]=A,t.centerOffset=A-S,t)}}function re(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&F(t.elements.popper,i)&&(t.elements.arrow=i)}var ie={name:"arrow",enabled:!0,phase:"main",fn:ne,effect:re,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function se(e){return e.split("-")[1]}var oe={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ae(e){var t=e.x,n=e.y,r=window,i=r.devicePixelRatio||1;return{x:X(X(t*i)/i)||0,y:X(X(n*i)/i)||0}}function ce(e){var t,n=e.popper,r=e.popperRect,c=e.placement,l=e.variation,u=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,m=e.roundOffsets,g=!0===m?ae(u):"function"===typeof m?m(u):u,_=g.x,v=void 0===_?0:_,y=g.y,b=void 0===y?0:y,w=u.hasOwnProperty("x"),E=u.hasOwnProperty("y"),k=a,T=i,I=window;if(p){var S=W(n),A="clientHeight",O="clientWidth";S===C(n)&&(S=B(n),"static"!==j(S).position&&"absolute"===d&&(A="scrollHeight",O="scrollWidth")),c!==i&&(c!==a&&c!==o||l!==h)||(T=s,b-=S[A]-r.height,b*=f?1:-1),c!==a&&(c!==i&&c!==s||l!==h)||(k=o,v-=S[O]-r.width,v*=f?1:-1)}var R,P=Object.assign({position:d},p&&oe);return f?Object.assign({},P,(R={},R[T]=E?"0":"",R[k]=w?"0":"",R.transform=(I.devicePixelRatio||1)<=1?"translate("+v+"px, "+b+"px)":"translate3d("+v+"px, "+b+"px, 0)",R)):Object.assign({},P,(t={},t[T]=E?b+"px":"",t[k]=w?v+"px":"",t.transform="",t))}function le(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,s=n.adaptive,o=void 0===s||s,a=n.roundOffsets,c=void 0===a||a,l={placement:M(t.placement),variation:se(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ce(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ce(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var ue={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:le,data:{}},he={passive:!0};function de(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,o=r.resize,a=void 0===o||o,c=C(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&l.forEach((function(e){e.addEventListener("scroll",n.update,he)})),a&&c.addEventListener("resize",n.update,he),function(){s&&l.forEach((function(e){e.removeEventListener("scroll",n.update,he)})),a&&c.removeEventListener("resize",n.update,he)}}var fe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:de,data:{}},pe={left:"right",right:"left",bottom:"top",top:"bottom"};function me(e){return e.replace(/left|right|bottom|top/g,(function(e){return pe[e]}))}var ge={start:"end",end:"start"};function _e(e){return e.replace(/start|end/g,(function(e){return ge[e]}))}function ve(e){var t=C(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function ye(e){return U(B(e)).left+ve(e).scrollLeft}function be(e){var t=C(e),n=B(e),r=t.visualViewport,i=n.clientWidth,s=n.clientHeight,o=0,a=0;return r&&(i=r.width,s=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(o=r.offsetLeft,a=r.offsetTop)),{width:i,height:s,x:o+ye(e),y:a}}function we(e){var t,n=B(e),r=ve(e),i=null==(t=e.ownerDocument)?void 0:t.body,s=K(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=K(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+ye(e),c=-r.scrollTop;return"rtl"===j(i||n).direction&&(a+=K(n.clientWidth,i?i.clientWidth:0)-s),{width:s,height:o,x:a,y:c}}function Ee(e){var t=j(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function ke(e){return["html","body","#document"].indexOf(O(e))>=0?e.ownerDocument.body:P(e)&&Ee(e)?e:ke(H(e))}function Te(e,t){var n;void 0===t&&(t=[]);var r=ke(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),s=C(r),o=i?[s].concat(s.visualViewport||[],Ee(r)?r:[]):r,a=t.concat(o);return i?a:a.concat(Te(H(o)))}function Ie(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Se(e){var t=U(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Ae(e,t){return t===f?Ie(be(e)):P(t)?Se(t):Ie(we(B(e)))}function Oe(e){var t=Te(H(e)),n=["absolute","fixed"].indexOf(j(e).position)>=0,r=n&&P(e)?W(e):e;return R(r)?t.filter((function(e){return R(e)&&F(e,r)&&"body"!==O(e)})):[]}function Ce(e,t,n){var r="clippingParents"===t?Oe(e):[].concat(t),i=[].concat(r,[n]),s=i[0],o=i.reduce((function(t,n){var r=Ae(e,n);return t.top=K(r.top,t.top),t.right=J(r.right,t.right),t.bottom=J(r.bottom,t.bottom),t.left=K(r.left,t.left),t}),Ae(e,s));return o.width=o.right-o.left,o.height=o.bottom-o.top,o.x=o.left,o.y=o.top,o}function Re(e){var t,n=e.reference,r=e.element,c=e.placement,l=c?M(c):null,d=c?se(c):null,f=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2;switch(l){case i:t={x:f,y:n.y-r.height};break;case s:t={x:f,y:n.y+n.height};break;case o:t={x:n.x+n.width,y:p};break;case a:t={x:n.x-r.width,y:p};break;default:t={x:n.x,y:n.y}}var m=l?G(l):null;if(null!=m){var g="y"===m?"height":"width";switch(d){case u:t[m]=t[m]-(n[g]/2-r[g]/2);break;case h:t[m]=t[m]+(n[g]/2-r[g]/2);break;default:}}return t}function Pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,a=void 0===r?e.placement:r,c=n.boundary,u=void 0===c?d:c,h=n.rootBoundary,g=void 0===h?f:h,_=n.elementContext,v=void 0===_?p:_,y=n.altBoundary,b=void 0!==y&&y,w=n.padding,E=void 0===w?0:w,k=Z("number"!==typeof E?E:ee(E,l)),T=v===p?m:p,I=e.rects.popper,S=e.elements[b?T:v],A=Ce(R(S)?S:S.contextElement||B(e.elements.popper),u,g),O=U(e.elements.reference),C=Re({reference:O,element:I,strategy:"absolute",placement:a}),P=Ie(Object.assign({},I,C)),x=v===p?P:O,N={top:A.top-x.top+k.top,bottom:x.bottom-A.bottom+k.bottom,left:A.left-x.left+k.left,right:x.right-A.right+k.right},L=e.modifiersData.offset;if(v===p&&L){var D=L[a];Object.keys(N).forEach((function(e){var t=[o,s].indexOf(e)>=0?1:-1,n=[i,s].indexOf(e)>=0?"y":"x";N[e]+=D[n]*t}))}return N}function xe(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,s=n.rootBoundary,o=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?_:c,h=se(r),d=h?a?g:g.filter((function(e){return se(e)===h})):l,f=d.filter((function(e){return u.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=Pe(e,{placement:n,boundary:i,rootBoundary:s,padding:o})[M(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function Ne(e){if(M(e)===c)return[];var t=me(e);return[_e(e),t,_e(t)]}function Le(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var l=n.mainAxis,h=void 0===l||l,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,m=n.padding,g=n.boundary,_=n.rootBoundary,v=n.altBoundary,y=n.flipVariations,b=void 0===y||y,w=n.allowedAutoPlacements,E=t.options.placement,k=M(E),T=k===E,I=p||(T||!b?[me(E)]:Ne(E)),S=[E].concat(I).reduce((function(e,n){return e.concat(M(n)===c?xe(t,{placement:n,boundary:g,rootBoundary:_,padding:m,flipVariations:b,allowedAutoPlacements:w}):n)}),[]),A=t.rects.reference,O=t.rects.popper,C=new Map,R=!0,P=S[0],x=0;x<S.length;x++){var N=S[x],L=M(N),D=se(N)===u,U=[i,s].indexOf(L)>=0,$=U?"width":"height",F=Pe(t,{placement:N,boundary:g,rootBoundary:_,altBoundary:v,padding:m}),j=U?D?o:a:D?s:i;A[$]>O[$]&&(j=me(j));var V=me(j),B=[];if(h&&B.push(F[L]<=0),f&&B.push(F[j]<=0,F[V]<=0),B.every((function(e){return e}))){P=N,R=!1;break}C.set(N,B)}if(R)for(var H=b?3:1,z=function(e){var t=S.find((function(t){var n=C.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},q=H;q>0;q--){var W=z(q);if("break"===W)break}t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}}var De={name:"flip",enabled:!0,phase:"main",fn:Le,requiresIfExists:["offset"],data:{_skip:!1}};function Me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Ue(e){return[i,o,s,a].some((function(t){return e[t]>=0}))}function $e(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,s=t.modifiersData.preventOverflow,o=Pe(t,{elementContext:"reference"}),a=Pe(t,{altBoundary:!0}),c=Me(o,r),l=Me(a,i,s),u=Ue(c),h=Ue(l);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:l,isReferenceHidden:u,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}var Fe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:$e};function je(e,t,n){var r=M(e),s=[a,i].indexOf(r)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,l=c[0],u=c[1];return l=l||0,u=(u||0)*s,[a,o].indexOf(r)>=0?{x:u,y:l}:{x:l,y:u}}function Ve(e){var t=e.state,n=e.options,r=e.name,i=n.offset,s=void 0===i?[0,0]:i,o=_.reduce((function(e,n){return e[n]=je(n,t.rects,s),e}),{}),a=o[t.placement],c=a.x,l=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=l),t.modifiersData[r]=o}var Be={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ve};function He(e){var t=e.state,n=e.name;t.modifiersData[n]=Re({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var ze={name:"popperOffsets",enabled:!0,phase:"read",fn:He,data:{}};function qe(e){return"x"===e?"y":"x"}function We(e){var t=e.state,n=e.options,r=e.name,c=n.mainAxis,l=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,m=n.altBoundary,g=n.padding,_=n.tether,v=void 0===_||_,y=n.tetherOffset,b=void 0===y?0:y,w=Pe(t,{boundary:f,rootBoundary:p,padding:g,altBoundary:m}),E=M(t.placement),k=se(t.placement),T=!k,I=G(E),S=qe(I),A=t.modifiersData.popperOffsets,O=t.rects.reference,C=t.rects.popper,R="function"===typeof b?b(Object.assign({},t.rects,{placement:t.placement})):b,P={x:0,y:0};if(A){if(l||d){var x="y"===I?i:a,N="y"===I?s:o,L="y"===I?"height":"width",D=A[I],U=A[I]+w[x],F=A[I]-w[N],j=v?-C[L]/2:0,V=k===u?O[L]:C[L],B=k===u?-C[L]:-O[L],H=t.elements.arrow,z=v&&H?$(H):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Q(),X=q[x],Z=q[N],ee=Y(0,O[L],z[L]),te=T?O[L]/2-j-ee-X-R:V-ee-X-R,ne=T?-O[L]/2+j+ee+Z+R:B+ee+Z+R,re=t.elements.arrow&&W(t.elements.arrow),ie=re?"y"===I?re.clientTop||0:re.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][I]:0,ae=A[I]+te-oe-ie,ce=A[I]+ne-oe;if(l){var le=Y(v?J(U,ae):U,D,v?K(F,ce):F);A[I]=le,P[I]=le-D}if(d){var ue="x"===I?i:a,he="x"===I?s:o,de=A[S],fe=de+w[ue],pe=de-w[he],me=Y(v?J(fe,ae):fe,de,v?K(pe,ce):pe);A[S]=me,P[S]=me-de}}t.modifiersData[r]=P}}var Ge={name:"preventOverflow",enabled:!0,phase:"main",fn:We,requiresIfExists:["offset"]};function Ke(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Je(e){return e!==C(e)&&P(e)?Ke(e):ve(e)}function Xe(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}function Ye(e,t,n){void 0===n&&(n=!1);var r=P(t),i=P(t)&&Xe(t),s=B(t),o=U(e,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==O(t)||Ee(s))&&(a=Je(t)),P(t)?(c=U(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):s&&(c.x=ye(s))),{x:o.left+a.scrollLeft-c.x,y:o.top+a.scrollTop-c.y,width:o.width,height:o.height}}function Qe(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var s=[].concat(e.requires||[],e.requiresIfExists||[]);s.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function Ze(e){var t=Qe(e);return A.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function et(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function tt(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var nt={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function it(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?nt:i;return function(e,t,n){void 0===n&&(n=s);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},nt,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},o=[],a=!1,c={state:i,setOptions:function(n){var o="function"===typeof n?n(i.options):n;u(),i.options=Object.assign({},s,i.options,o),i.scrollParents={reference:R(e)?Te(e):e.contextElement?Te(e.contextElement):[],popper:Te(t)};var a=Ze(tt([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(e){return e.enabled})),l(),c.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,n=e.popper;if(rt(t,n)){i.rects={reference:Ye(t,W(n),"fixed"===i.options.strategy),popper:$(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var s=i.orderedModifiers[r],o=s.fn,l=s.options,u=void 0===l?{}:l,h=s.name;"function"===typeof o&&(i=o({state:i,options:u,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:et((function(){return new Promise((function(e){c.forceUpdate(),e(i)}))})),destroy:function(){u(),a=!0}};if(!rt(e,t))return c;function l(){i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,s=e.effect;if("function"===typeof s){var a=s({state:i,name:t,instance:c,options:r}),l=function(){};o.push(a||l)}}))}function u(){o.forEach((function(e){return e()})),o=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var st=it(),ot=[fe,ze,ue,D,Be,De,Ge,ie,Fe],at=it({defaultModifiers:ot}),ct=[fe,ze,ue,D],lt=it({defaultModifiers:ct});
/*!
  * Bootstrap v5.1.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const ut=1e6,ht=1e3,dt="transitionend",ft=e=>null===e||void 0===e?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),pt=e=>{do{e+=Math.floor(Math.random()*ut)}while(document.getElementById(e));return e},mt=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},gt=e=>{const t=mt(e);return t&&document.querySelector(t)?t:null},_t=e=>{const t=mt(e);return t?document.querySelector(t):null},vt=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),i=Number.parseFloat(n);return r||i?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*ht):0},yt=e=>{e.dispatchEvent(new Event(dt))},bt=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),wt=e=>bt(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,Et=(e,t,n)=>{Object.keys(n).forEach((r=>{const i=n[r],s=t[r],o=s&&bt(s)?"element":ft(s);if(!new RegExp(i).test(o))throw new TypeError(`${e.toUpperCase()}: Option "${r}" provided type "${o}" but expected type "${i}".`)}))},kt=e=>!(!bt(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),Tt=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),It=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?It(e.parentNode):null},St=()=>{},At=e=>{e.offsetHeight},Ot=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},Ct=[],Rt=e=>{"loading"===document.readyState?(Ct.length||document.addEventListener("DOMContentLoaded",(()=>{Ct.forEach((e=>e()))})),Ct.push(e)):e()},Pt=()=>"rtl"===document.documentElement.dir,xt=e=>{Rt((()=>{const t=Ot();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}}))},Nt=e=>{"function"===typeof e&&e()},Lt=(e,t,n=!0)=>{if(!n)return void Nt(e);const r=5,i=vt(t)+r;let s=!1;const o=({target:n})=>{n===t&&(s=!0,t.removeEventListener(dt,o),Nt(e))};t.addEventListener(dt,o),setTimeout((()=>{s||yt(t)}),i)},Dt=(e,t,n,r)=>{let i=e.indexOf(t);if(-1===i)return e[!n&&r?e.length-1:0];const s=e.length;return i+=n?1:-1,r&&(i=(i+s)%s),e[Math.max(0,Math.min(i,s-1))]},Mt=/[^.]*(?=\..*)\.|.*/,Ut=/\..*/,$t=/::\d+$/,Ft={};let jt=1;const Vt={mouseenter:"mouseover",mouseleave:"mouseout"},Bt=/^(mouseenter|mouseleave)/i,Ht=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function zt(e,t){return t&&`${t}::${jt++}`||e.uidEvent||jt++}function qt(e){const t=zt(e);return e.uidEvent=t,Ft[t]=Ft[t]||{},Ft[t]}function Wt(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&en.off(e,r.type,t),t.apply(e,[r])}}function Gt(e,t,n){return function r(i){const s=e.querySelectorAll(t);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(let a=s.length;a--;)if(s[a]===o)return i.delegateTarget=o,r.oneOff&&en.off(e,i.type,t,n),n.apply(o,[i]);return null}}function Kt(e,t,n=null){const r=Object.keys(e);for(let i=0,s=r.length;i<s;i++){const s=e[r[i]];if(s.originalHandler===t&&s.delegationSelector===n)return s}return null}function Jt(e,t,n){const r="string"===typeof t,i=r?n:t;let s=Zt(e);const o=Ht.has(s);return o||(s=e),[r,i,s]}function Xt(e,t,n,r,i){if("string"!==typeof t||!e)return;if(n||(n=r,r=null),Bt.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};r?r=e(r):n=e(n)}const[s,o,a]=Jt(t,n,r),c=qt(e),l=c[a]||(c[a]={}),u=Kt(l,o,s?n:null);if(u)return void(u.oneOff=u.oneOff&&i);const h=zt(o,t.replace(Mt,"")),d=s?Gt(e,n,r):Wt(e,n);d.delegationSelector=s?n:null,d.originalHandler=o,d.oneOff=i,d.uidEvent=h,l[h]=d,e.addEventListener(a,d,s)}function Yt(e,t,n,r,i){const s=Kt(t[n],r,i);s&&(e.removeEventListener(n,s,Boolean(i)),delete t[n][s.uidEvent])}function Qt(e,t,n,r){const i=t[n]||{};Object.keys(i).forEach((s=>{if(s.includes(r)){const r=i[s];Yt(e,t,n,r.originalHandler,r.delegationSelector)}}))}function Zt(e){return e=e.replace(Ut,""),Vt[e]||e}const en={on(e,t,n,r){Xt(e,t,n,r,!1)},one(e,t,n,r){Xt(e,t,n,r,!0)},off(e,t,n,r){if("string"!==typeof t||!e)return;const[i,s,o]=Jt(t,n,r),a=o!==t,c=qt(e),l=t.startsWith(".");if("undefined"!==typeof s){if(!c||!c[o])return;return void Yt(e,c,o,s,i?n:null)}l&&Object.keys(c).forEach((n=>{Qt(e,c,n,t.slice(1))}));const u=c[o]||{};Object.keys(u).forEach((n=>{const r=n.replace($t,"");if(!a||t.includes(r)){const t=u[n];Yt(e,c,o,t.originalHandler,t.delegationSelector)}}))},trigger(e,t,n){if("string"!==typeof t||!e)return null;const r=Ot(),i=Zt(t),s=t!==i,o=Ht.has(i);let a,c=!0,l=!0,u=!1,h=null;return s&&r&&(a=r.Event(t,n),r(e).trigger(a),c=!a.isPropagationStopped(),l=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),o?(h=document.createEvent("HTMLEvents"),h.initEvent(i,c,!0)):h=new CustomEvent(t,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach((e=>{Object.defineProperty(h,e,{get(){return n[e]}})})),u&&h.preventDefault(),l&&e.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),h}},tn=new Map,nn={set(e,t,n){tn.has(e)||tn.set(e,new Map);const r=tn.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(e,t){return tn.has(e)&&tn.get(e).get(t)||null},remove(e,t){if(!tn.has(e))return;const n=tn.get(e);n.delete(t),0===n.size&&tn.delete(e)}},rn="5.1.2";class sn{constructor(e){e=wt(e),e&&(this._element=e,nn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){nn.remove(this._element,this.constructor.DATA_KEY),en.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){Lt(e,t,n)}static getInstance(e){return nn.get(wt(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return rn}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const on=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,r=e.NAME;en.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Tt(this))return;const i=_t(this)||this.closest(`.${r}`),s=e.getOrCreateInstance(i);s[t]()}))},an="alert",cn="bs.alert",ln=`.${cn}`,un=`close${ln}`,hn=`closed${ln}`,dn="fade",fn="show";class pn extends sn{static get NAME(){return an}close(){const e=en.trigger(this._element,un);if(e.defaultPrevented)return;this._element.classList.remove(fn);const t=this._element.classList.contains(dn);this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),en.trigger(this._element,hn),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=pn.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}on(pn,"close"),xt(pn);const mn="button",gn="bs.button",_n=`.${gn}`,vn=".data-api",yn="active",bn='[data-bs-toggle="button"]',wn=`click${_n}${vn}`;class En extends sn{static get NAME(){return mn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(yn))}static jQueryInterface(e){return this.each((function(){const t=En.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function kn(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function Tn(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}en.on(document,wn,bn,(e=>{e.preventDefault();const t=e.target.closest(bn),n=En.getOrCreateInstance(t);n.toggle()})),xt(En);const In={setDataAttribute(e,t,n){e.setAttribute(`data-bs-${Tn(t)}`,n)},removeDataAttribute(e,t){e.removeAttribute(`data-bs-${Tn(t)}`)},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter((e=>e.startsWith("bs"))).forEach((n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=kn(e.dataset[n])})),t},getDataAttribute(e,t){return kn(e.getAttribute(`data-bs-${Tn(t)}`))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}},Sn=3,An={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let r=e.parentNode;while(r&&r.nodeType===Node.ELEMENT_NODE&&r.nodeType!==Sn)r.matches(t)&&n.push(r),r=r.parentNode;return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(t,e).filter((e=>!Tt(e)&&kt(e)))}},On="carousel",Cn="bs.carousel",Rn=`.${Cn}`,Pn=".data-api",xn="ArrowLeft",Nn="ArrowRight",Ln=500,Dn=40,Mn={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Un={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},$n="next",Fn="prev",jn="left",Vn="right",Bn={[xn]:Vn,[Nn]:jn},Hn=`slide${Rn}`,zn=`slid${Rn}`,qn=`keydown${Rn}`,Wn=`mouseenter${Rn}`,Gn=`mouseleave${Rn}`,Kn=`touchstart${Rn}`,Jn=`touchmove${Rn}`,Xn=`touchend${Rn}`,Yn=`pointerdown${Rn}`,Qn=`pointerup${Rn}`,Zn=`dragstart${Rn}`,er=`load${Rn}${Pn}`,tr=`click${Rn}${Pn}`,nr="carousel",rr="active",ir="slide",sr="carousel-item-end",or="carousel-item-start",ar="carousel-item-next",cr="carousel-item-prev",lr="pointer-event",ur=".active",hr=".active.carousel-item",dr=".carousel-item",fr=".carousel-item img",pr=".carousel-item-next, .carousel-item-prev",mr=".carousel-indicators",gr="[data-bs-target]",_r="[data-bs-slide], [data-bs-slide-to]",vr='[data-bs-ride="carousel"]',yr="touch",br="pen";class wr extends sn{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=An.findOne(mr,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Mn}static get NAME(){return On}next(){this._slide($n)}nextWhenVisible(){!document.hidden&&kt(this._element)&&this.next()}prev(){this._slide(Fn)}pause(e){e||(this._isPaused=!0),An.findOne(pr,this._element)&&(yt(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=An.findOne(hr,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void en.one(this._element,zn,(()=>this.to(e)));if(t===e)return this.pause(),void this.cycle();const n=e>t?$n:Fn;this._slide(n,this._items[e])}_getConfig(e){return e={...Mn,...In.getDataAttributes(this._element),..."object"===typeof e?e:{}},Et(On,e,Un),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=Dn)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?Vn:jn)}_addEventListeners(){this._config.keyboard&&en.on(this._element,qn,(e=>this._keydown(e))),"hover"===this._config.pause&&(en.on(this._element,Wn,(e=>this.pause(e))),en.on(this._element,Gn,(e=>this.cycle(e)))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&(e.pointerType===br||e.pointerType===yr),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},n=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},r=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((e=>this.cycle(e)),Ln+this._config.interval))};An.find(fr,this._element).forEach((e=>{en.on(e,Zn,(e=>e.preventDefault()))})),this._pointerEvent?(en.on(this._element,Yn,(e=>t(e))),en.on(this._element,Qn,(e=>r(e))),this._element.classList.add(lr)):(en.on(this._element,Kn,(e=>t(e))),en.on(this._element,Jn,(e=>n(e))),en.on(this._element,Xn,(e=>r(e))))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Bn[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?An.find(dr,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===$n;return Dt(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),r=this._getItemIndex(An.findOne(hr,this._element));return en.trigger(this._element,Hn,{relatedTarget:e,direction:t,from:r,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=An.findOne(ur,this._indicatorsElement);t.classList.remove(rr),t.removeAttribute("aria-current");const n=An.find(gr,this._indicatorsElement);for(let r=0;r<n.length;r++)if(Number.parseInt(n[r].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[r].classList.add(rr),n[r].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||An.findOne(hr,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),r=An.findOne(hr,this._element),i=this._getItemIndex(r),s=t||this._getItemByOrder(n,r),o=this._getItemIndex(s),a=Boolean(this._interval),c=n===$n,l=c?or:sr,u=c?ar:cr,h=this._orderToDirection(n);if(s&&s.classList.contains(rr))return void(this._isSliding=!1);if(this._isSliding)return;const d=this._triggerSlideEvent(s,h);if(d.defaultPrevented)return;if(!r||!s)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(s),this._activeElement=s;const f=()=>{en.trigger(this._element,zn,{relatedTarget:s,direction:h,from:i,to:o})};if(this._element.classList.contains(ir)){s.classList.add(u),At(s),r.classList.add(l),s.classList.add(l);const e=()=>{s.classList.remove(l,u),s.classList.add(rr),r.classList.remove(rr,u,l),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(e,r,!0)}else r.classList.remove(rr),s.classList.add(rr),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(e){return[Vn,jn].includes(e)?Pt()?e===jn?Fn:$n:e===jn?$n:Fn:e}_orderToDirection(e){return[$n,Fn].includes(e)?Pt()?e===Fn?jn:Vn:e===Fn?Vn:jn:e}static carouselInterface(e,t){const n=wr.getOrCreateInstance(e,t);let{_config:r}=n;"object"===typeof t&&(r={...r,...t});const i="string"===typeof t?t:r.slide;if("number"===typeof t)n.to(t);else if("string"===typeof i){if("undefined"===typeof n[i])throw new TypeError(`No method named "${i}"`);n[i]()}else r.interval&&r.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){wr.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=_t(this);if(!t||!t.classList.contains(nr))return;const n={...In.getDataAttributes(t),...In.getDataAttributes(this)},r=this.getAttribute("data-bs-slide-to");r&&(n.interval=!1),wr.carouselInterface(t,n),r&&wr.getInstance(t).to(r),e.preventDefault()}}en.on(document,tr,_r,wr.dataApiClickHandler),en.on(window,er,(()=>{const e=An.find(vr);for(let t=0,n=e.length;t<n;t++)wr.carouselInterface(e[t],wr.getInstance(e[t]))})),xt(wr);const Er="collapse",kr="bs.collapse",Tr=`.${kr}`,Ir=".data-api",Sr={toggle:!0,parent:null},Ar={toggle:"boolean",parent:"(null|element)"},Or=`show${Tr}`,Cr=`shown${Tr}`,Rr=`hide${Tr}`,Pr=`hidden${Tr}`,xr=`click${Tr}${Ir}`,Nr="show",Lr="collapse",Dr="collapsing",Mr="collapsed",Ur=`:scope .${Lr} .${Lr}`,$r="collapse-horizontal",Fr="width",jr="height",Vr=".collapse.show, .collapse.collapsing",Br='[data-bs-toggle="collapse"]';class Hr extends sn{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=An.find(Br);for(let r=0,i=n.length;r<i;r++){const e=n[r],t=gt(e),i=An.find(t).filter((e=>e===this._element));null!==t&&i.length&&(this._selector=t,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Sr}static get NAME(){return Er}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=An.find(Ur,this._config.parent);t=An.find(Vr,this._config.parent).filter((t=>!e.includes(t)))}const n=An.findOne(this._selector);if(t.length){const r=t.find((e=>n!==e));if(e=r?Hr.getInstance(r):null,e&&e._isTransitioning)return}const r=en.trigger(this._element,Or);if(r.defaultPrevented)return;t.forEach((t=>{n!==t&&Hr.getOrCreateInstance(t,{toggle:!1}).hide(),e||nn.set(t,kr,null)}));const i=this._getDimension();this._element.classList.remove(Lr),this._element.classList.add(Dr),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Dr),this._element.classList.add(Lr,Nr),this._element.style[i]="",en.trigger(this._element,Cr)},o=i[0].toUpperCase()+i.slice(1),a=`scroll${o}`;this._queueCallback(s,this._element,!0),this._element.style[i]=`${this._element[a]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const e=en.trigger(this._element,Rr);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,At(this._element),this._element.classList.add(Dr),this._element.classList.remove(Lr,Nr);const n=this._triggerArray.length;for(let i=0;i<n;i++){const e=this._triggerArray[i],t=_t(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Dr),this._element.classList.add(Lr),en.trigger(this._element,Pr)};this._element.style[t]="",this._queueCallback(r,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Nr)}_getConfig(e){return e={...Sr,...In.getDataAttributes(this._element),...e},e.toggle=Boolean(e.toggle),e.parent=wt(e.parent),Et(Er,e,Ar),e}_getDimension(){return this._element.classList.contains($r)?Fr:jr}_initializeChildren(){if(!this._config.parent)return;const e=An.find(Ur,this._config.parent);An.find(Br,this._config.parent).filter((t=>!e.includes(t))).forEach((e=>{const t=_t(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}))}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach((e=>{t?e.classList.remove(Mr):e.classList.add(Mr),e.setAttribute("aria-expanded",t)}))}static jQueryInterface(e){return this.each((function(){const t={};"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=Hr.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}en.on(document,xr,Br,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=gt(this),n=An.find(t);n.forEach((e=>{Hr.getOrCreateInstance(e,{toggle:!1}).toggle()}))})),xt(Hr);const zr="dropdown",qr="bs.dropdown",Wr=`.${qr}`,Gr=".data-api",Kr="Escape",Jr="Space",Xr="Tab",Yr="ArrowUp",Qr="ArrowDown",Zr=2,ei=new RegExp(`${Yr}|${Qr}|${Kr}`),ti=`hide${Wr}`,ni=`hidden${Wr}`,ri=`show${Wr}`,ii=`shown${Wr}`,si=`click${Wr}${Gr}`,oi=`keydown${Wr}${Gr}`,ai=`keyup${Wr}${Gr}`,ci="show",li="dropup",ui="dropend",hi="dropstart",di="navbar",fi='[data-bs-toggle="dropdown"]',pi=".dropdown-menu",mi=".navbar-nav",gi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",_i=Pt()?"top-end":"top-start",vi=Pt()?"top-start":"top-end",yi=Pt()?"bottom-end":"bottom-start",bi=Pt()?"bottom-start":"bottom-end",wi=Pt()?"left-start":"right-start",Ei=Pt()?"right-start":"left-start",ki={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Ti={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Ii extends sn{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return ki}static get DefaultType(){return Ti}static get NAME(){return zr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Tt(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element},t=en.trigger(this._element,ri,e);if(t.defaultPrevented)return;const n=Ii.getParentFromElement(this._element);this._inNavbar?In.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(mi)&&[].concat(...document.body.children).forEach((e=>en.on(e,"mouseover",St))),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ci),this._element.classList.add(ci),en.trigger(this._element,ii,e)}hide(){if(Tt(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=en.trigger(this._element,ti,e);t.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>en.off(e,"mouseover",St))),this._popper&&this._popper.destroy(),this._menu.classList.remove(ci),this._element.classList.remove(ci),this._element.setAttribute("aria-expanded","false"),In.removeDataAttribute(this._menu,"popper"),en.trigger(this._element,ni,e))}_getConfig(e){if(e={...this.constructor.Default,...In.getDataAttributes(this._element),...e},Et(zr,e,this.constructor.DefaultType),"object"===typeof e.reference&&!bt(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(`${zr.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(e){if("undefined"===typeof r)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:bt(this._config.reference)?t=wt(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const n=this._getPopperConfig(),i=n.modifiers.find((e=>"applyStyles"===e.name&&!1===e.enabled));this._popper=at(t,this._menu,n),i&&In.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(ci)}_getMenuElement(){return An.next(this._element,pi)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(ui))return wi;if(e.classList.contains(hi))return Ei;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(li)?t?vi:_i:t?bi:yi}_detectNavbar(){return null!==this._element.closest(`.${di}`)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=An.find(gi,this._menu).filter(kt);n.length&&Dt(n,t,e===Qr,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=Ii.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(e.button===Zr||"keyup"===e.type&&e.key!==Xr))return;const t=An.find(fi);for(let n=0,r=t.length;n<r;n++){const r=Ii.getInstance(t[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const i={relatedTarget:r._element};if(e){const t=e.composedPath(),n=t.includes(r._menu);if(t.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(e.target)&&("keyup"===e.type&&e.key===Xr||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(i.clickEvent=e)}r._completeHide(i)}}static getParentFromElement(e){return _t(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===Jr||e.key!==Kr&&(e.key!==Qr&&e.key!==Yr||e.target.closest(pi)):!ei.test(e.key))return;const t=this.classList.contains(ci);if(!t&&e.key===Kr)return;if(e.preventDefault(),e.stopPropagation(),Tt(this))return;const n=this.matches(fi)?this:An.prev(this,fi)[0],r=Ii.getOrCreateInstance(n);if(e.key!==Kr)return e.key===Yr||e.key===Qr?(t||r.show(),void r._selectMenuItem(e)):void(t&&e.key!==Jr||Ii.clearMenus());r.hide()}}en.on(document,oi,fi,Ii.dataApiKeydownHandler),en.on(document,oi,pi,Ii.dataApiKeydownHandler),en.on(document,si,Ii.clearMenus),en.on(document,ai,Ii.clearMenus),en.on(document,si,fi,(function(e){e.preventDefault(),Ii.getOrCreateInstance(this).toggle()})),xt(Ii);const Si=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ai=".sticky-top";class Oi{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(t=>t+e)),this._setElementAttributes(Si,"paddingRight",(t=>t+e)),this._setElementAttributes(Ai,"marginRight",(t=>t-e))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth(),i=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);const i=window.getComputedStyle(e)[t];e.style[t]=`${n(Number.parseFloat(i))}px`};this._applyManipulationCallback(e,i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(Si,"paddingRight"),this._resetElementAttributes(Ai,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&In.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=In.getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(In.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){bt(e)?t(e):An.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const Ci={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Ri={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Pi="backdrop",xi="fade",Ni="show",Li=`mousedown.bs.${Pi}`;class Di{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&At(this._getElement()),this._getElement().classList.add(Ni),this._emulateAnimation((()=>{Nt(e)}))):Nt(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(Ni),this._emulateAnimation((()=>{this.dispose(),Nt(e)}))):Nt(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(xi),this._element=e}return this._element}_getConfig(e){return e={...Ci,..."object"===typeof e?e:{}},e.rootElement=wt(e.rootElement),Et(Pi,e,Ri),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),en.on(this._getElement(),Li,(()=>{Nt(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(en.off(this._element,Li),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){Lt(e,this._getElement(),this._config.isAnimated)}}const Mi={trapElement:null,autofocus:!0},Ui={trapElement:"element",autofocus:"boolean"},$i="focustrap",Fi="bs.focustrap",ji=`.${Fi}`,Vi=`focusin${ji}`,Bi=`keydown.tab${ji}`,Hi="Tab",zi="forward",qi="backward";class Wi{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),en.off(document,ji),en.on(document,Vi,(e=>this._handleFocusin(e))),en.on(document,Bi,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,en.off(document,ji))}_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const r=An.focusableChildren(n);0===r.length?n.focus():this._lastTabNavDirection===qi?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===Hi&&(this._lastTabNavDirection=e.shiftKey?qi:zi)}_getConfig(e){return e={...Mi,..."object"===typeof e?e:{}},Et($i,e,Ui),e}}const Gi="modal",Ki="bs.modal",Ji=`.${Ki}`,Xi=".data-api",Yi="Escape",Qi={backdrop:!0,keyboard:!0,focus:!0},Zi={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},es=`hide${Ji}`,ts=`hidePrevented${Ji}`,ns=`hidden${Ji}`,rs=`show${Ji}`,is=`shown${Ji}`,ss=`resize${Ji}`,os=`click.dismiss${Ji}`,as=`keydown.dismiss${Ji}`,cs=`mouseup.dismiss${Ji}`,ls=`mousedown.dismiss${Ji}`,us=`click${Ji}${Xi}`,hs="modal-open",ds="fade",fs="show",ps="modal-static",ms=".modal.show",gs=".modal-dialog",_s=".modal-body",vs='[data-bs-toggle="modal"]';class ys extends sn{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=An.findOne(gs,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Oi}static get Default(){return Qi}static get NAME(){return Gi}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=en.trigger(this._element,rs,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(hs),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),en.on(this._dialog,ls,(()=>{en.one(this._element,cs,(e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=en.trigger(this._element,es);if(e.defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(fs),en.off(this._element,os),en.off(this._dialog,ls),this._queueCallback((()=>this._hideModal()),this._element,t)}dispose(){[window,this._dialog].forEach((e=>en.off(e,Ji))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Di({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Wi({trapElement:this._element})}_getConfig(e){return e={...Qi,...In.getDataAttributes(this._element),..."object"===typeof e?e:{}},Et(Gi,e,Zi),e}_showElement(e){const t=this._isAnimated(),n=An.findOne(_s,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&At(this._element),this._element.classList.add(fs);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,en.trigger(this._element,is,{relatedTarget:e})};this._queueCallback(r,this._dialog,t)}_setEscapeEvent(){this._isShown?en.on(this._element,as,(e=>{this._config.keyboard&&e.key===Yi?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==Yi||this._triggerBackdropTransition()})):en.off(this._element,as)}_setResizeEvent(){this._isShown?en.on(window,ss,(()=>this._adjustDialog())):en.off(window,ss)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(hs),this._resetAdjustments(),this._scrollBar.reset(),en.trigger(this._element,ns)}))}_showBackdrop(e){en.on(this._element,os,(e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(ds)}_triggerBackdropTransition(){const e=en.trigger(this._element,ts);if(e.defaultPrevented)return;const{classList:t,scrollHeight:n,style:r}=this._element,i=n>document.documentElement.clientHeight;!i&&"hidden"===r.overflowY||t.contains(ps)||(i||(r.overflowY="hidden"),t.add(ps),this._queueCallback((()=>{t.remove(ps),i||this._queueCallback((()=>{r.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!Pt()||n&&!e&&Pt())&&(this._element.style.paddingLeft=`${t}px`),(n&&!e&&!Pt()||!n&&e&&Pt())&&(this._element.style.paddingRight=`${t}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=ys.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}en.on(document,us,vs,(function(e){const t=_t(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),en.one(t,rs,(e=>{e.defaultPrevented||en.one(t,ns,(()=>{kt(this)&&this.focus()}))}));const n=An.findOne(ms);n&&ys.getInstance(n).hide();const r=ys.getOrCreateInstance(t);r.toggle(this)})),on(ys),xt(ys);const bs="offcanvas",ws="bs.offcanvas",Es=`.${ws}`,ks=".data-api",Ts=`load${Es}${ks}`,Is="Escape",Ss={backdrop:!0,keyboard:!0,scroll:!1},As={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},Os="show",Cs="offcanvas-backdrop",Rs=".offcanvas.show",Ps=`show${Es}`,xs=`shown${Es}`,Ns=`hide${Es}`,Ls=`hidden${Es}`,Ds=`click${Es}${ks}`,Ms=`keydown.dismiss${Es}`,Us='[data-bs-toggle="offcanvas"]';class $s extends sn{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return bs}static get Default(){return Ss}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=en.trigger(this._element,Ps,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Oi).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Os);const n=()=>{this._config.scroll||this._focustrap.activate(),en.trigger(this._element,xs,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=en.trigger(this._element,Ns);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(Os),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Oi).reset(),en.trigger(this._element,Ls)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...Ss,...In.getDataAttributes(this._element),..."object"===typeof e?e:{}},Et(bs,e,As),e}_initializeBackDrop(){return new Di({className:Cs,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Wi({trapElement:this._element})}_addEventListeners(){en.on(this._element,Ms,(e=>{this._config.keyboard&&e.key===Is&&this.hide()}))}static jQueryInterface(e){return this.each((function(){const t=$s.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}en.on(document,Ds,Us,(function(e){const t=_t(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Tt(this))return;en.one(t,Ls,(()=>{kt(this)&&this.focus()}));const n=An.findOne(Rs);n&&n!==t&&$s.getInstance(n).hide();const r=$s.getOrCreateInstance(t);r.toggle(this)})),en.on(window,Ts,(()=>An.find(Rs).forEach((e=>$s.getOrCreateInstance(e).show())))),on($s),xt($s);const Fs=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),js=/^aria-[\w-]*$/i,Vs=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Bs=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,Hs=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!Fs.has(n)||Boolean(Vs.test(e.nodeValue)||Bs.test(e.nodeValue));const r=t.filter((e=>e instanceof RegExp));for(let i=0,s=r.length;i<s;i++)if(r[i].test(n))return!0;return!1},zs={"*":["class","dir","id","lang","role",js],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function qs(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const r=new window.DOMParser,i=r.parseFromString(e,"text/html"),s=[].concat(...i.body.querySelectorAll("*"));for(let o=0,a=s.length;o<a;o++){const e=s[o],n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const r=[].concat(...e.attributes),i=[].concat(t["*"]||[],t[n]||[]);r.forEach((t=>{Hs(t,i)||e.removeAttribute(t.nodeName)}))}return i.body.innerHTML}const Ws="tooltip",Gs="bs.tooltip",Ks=`.${Gs}`,Js="bs-tooltip",Xs=new Set(["sanitize","allowList","sanitizeFn"]),Ys={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Qs={AUTO:"auto",TOP:"top",RIGHT:Pt()?"left":"right",BOTTOM:"bottom",LEFT:Pt()?"right":"left"},Zs={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:zs,popperConfig:null},eo={HIDE:`hide${Ks}`,HIDDEN:`hidden${Ks}`,SHOW:`show${Ks}`,SHOWN:`shown${Ks}`,INSERTED:`inserted${Ks}`,CLICK:`click${Ks}`,FOCUSIN:`focusin${Ks}`,FOCUSOUT:`focusout${Ks}`,MOUSEENTER:`mouseenter${Ks}`,MOUSELEAVE:`mouseleave${Ks}`},to="fade",no="modal",ro="show",io="show",so="out",oo=".tooltip-inner",ao=`.${no}`,co="hide.bs.modal",lo="hover",uo="focus",ho="click",fo="manual";class po extends sn{constructor(e,t){if("undefined"===typeof r)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return Zs}static get NAME(){return Ws}static get Event(){return eo}static get DefaultType(){return Ys}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(ro))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),en.off(this._element.closest(ao),co,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=en.trigger(this._element,this.constructor.Event.SHOW),t=It(this._element),n=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(oo).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const r=this.getTipElement(),i=pt(this.constructor.NAME);r.setAttribute("id",i),this._element.setAttribute("aria-describedby",i),this._config.animation&&r.classList.add(to);const s="function"===typeof this._config.placement?this._config.placement.call(this,r,this._element):this._config.placement,o=this._getAttachment(s);this._addAttachmentClass(o);const{container:a}=this._config;nn.set(r,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(r),en.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=at(this._element,r,this._getPopperConfig(o)),r.classList.add(ro);const c=this._resolvePossibleFunction(this._config.customClass);c&&r.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>{en.on(e,"mouseover",St)}));const l=()=>{const e=this._hoverState;this._hoverState=null,en.trigger(this._element,this.constructor.Event.SHOWN),e===so&&this._leave(null,this)},u=this.tip.classList.contains(to);this._queueCallback(l,this.tip,u)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==io&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),en.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=en.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;e.classList.remove(ro),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach((e=>en.off(e,"mouseover",St))),this._activeTrigger[ho]=!1,this._activeTrigger[uo]=!1,this._activeTrigger[lo]=!1;const r=this.tip.classList.contains(to);this._queueCallback(t,this.tip,r),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(to,ro),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),oo)}_sanitizeAndSetContent(e,t,n){const r=An.findOne(n,e);t||!r?this.setElementContent(r,t):r.remove()}setElementContent(e,t){if(null!==e)return bt(t)?(t=wt(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=qs(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map((e=>Number.parseInt(e,10))):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"===typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return Qs[e.toUpperCase()]}_setListeners(){const e=this._config.trigger.split(" ");e.forEach((e=>{if("click"===e)en.on(this._element,this.constructor.Event.CLICK,this._config.selector,(e=>this.toggle(e)));else if(e!==fo){const t=e===lo?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===lo?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;en.on(this._element,t,this._config.selector,(e=>this._enter(e))),en.on(this._element,n,this._config.selector,(e=>this._leave(e)))}})),this._hideModalHandler=()=>{this._element&&this.hide()},en.on(this._element.closest(ao),co,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?uo:lo]=!0),t.getTipElement().classList.contains(ro)||t._hoverState===io?t._hoverState=io:(clearTimeout(t._timeout),t._hoverState=io,t._config.delay&&t._config.delay.show?t._timeout=setTimeout((()=>{t._hoverState===io&&t.show()}),t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?uo:lo]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=so,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout((()=>{t._hoverState===so&&t.hide()}),t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=In.getDataAttributes(this._element);return Object.keys(t).forEach((e=>{Xs.has(e)&&delete t[e]})),e={...this.constructor.Default,...t,..."object"===typeof e&&e?e:{}},e.container=!1===e.container?document.body:wt(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),Et(Ws,e,this.constructor.DefaultType),e.sanitize&&(e.template=qs(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=e.getAttribute("class").match(t);null!==n&&n.length>0&&n.map((e=>e.trim())).forEach((t=>e.classList.remove(t)))}_getBasicClassPrefix(){return Js}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=po.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}xt(po);const mo="popover",go="bs.popover",_o=`.${go}`,vo="bs-popover",yo={...po.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},bo={...po.DefaultType,content:"(string|element|function)"},wo={HIDE:`hide${_o}`,HIDDEN:`hidden${_o}`,SHOW:`show${_o}`,SHOWN:`shown${_o}`,INSERTED:`inserted${_o}`,CLICK:`click${_o}`,FOCUSIN:`focusin${_o}`,FOCUSOUT:`focusout${_o}`,MOUSEENTER:`mouseenter${_o}`,MOUSELEAVE:`mouseleave${_o}`},Eo=".popover-header",ko=".popover-body";class To extends po{static get Default(){return yo}static get NAME(){return mo}static get Event(){return wo}static get DefaultType(){return bo}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),Eo),this._sanitizeAndSetContent(e,this._getContent(),ko)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return vo}static jQueryInterface(e){return this.each((function(){const t=To.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}xt(To);const Io="scrollspy",So="bs.scrollspy",Ao=`.${So}`,Oo=".data-api",Co={offset:10,method:"auto",target:""},Ro={offset:"number",method:"string",target:"(string|element)"},Po=`activate${Ao}`,xo=`scroll${Ao}`,No=`load${Ao}${Oo}`,Lo="dropdown-item",Do="active",Mo='[data-bs-spy="scroll"]',Uo=".nav, .list-group",$o=".nav-link",Fo=".nav-item",jo=".list-group-item",Vo=`${$o}, ${jo}, .${Lo}`,Bo=".dropdown",Ho=".dropdown-toggle",zo="offset",qo="position";class Wo extends sn{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,en.on(this._scrollElement,xo,(()=>this._process())),this.refresh(),this._process()}static get Default(){return Co}static get NAME(){return Io}refresh(){const e=this._scrollElement===this._scrollElement.window?zo:qo,t="auto"===this._config.method?e:this._config.method,n=t===qo?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const r=An.find(Vo,this._config.target);r.map((e=>{const r=gt(e),i=r?An.findOne(r):null;if(i){const e=i.getBoundingClientRect();if(e.width||e.height)return[In[t](i).top+n,r]}return null})).filter((e=>e)).sort(((e,t)=>e[0]-t[0])).forEach((e=>{this._offsets.push(e[0]),this._targets.push(e[1])}))}dispose(){en.off(this._scrollElement,Ao),super.dispose()}_getConfig(e){return e={...Co,...In.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},e.target=wt(e.target)||document.documentElement,Et(Io,e,Ro),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;){const n=this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&("undefined"===typeof this._offsets[t+1]||e<this._offsets[t+1]);n&&this._activate(this._targets[t])}}}_activate(e){this._activeTarget=e,this._clear();const t=Vo.split(",").map((t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),n=An.findOne(t.join(","),this._config.target);n.classList.add(Do),n.classList.contains(Lo)?An.findOne(Ho,n.closest(Bo)).classList.add(Do):An.parents(n,Uo).forEach((e=>{An.prev(e,`${$o}, ${jo}`).forEach((e=>e.classList.add(Do))),An.prev(e,Fo).forEach((e=>{An.children(e,$o).forEach((e=>e.classList.add(Do)))}))})),en.trigger(this._scrollElement,Po,{relatedTarget:e})}_clear(){An.find(Vo,this._config.target).filter((e=>e.classList.contains(Do))).forEach((e=>e.classList.remove(Do)))}static jQueryInterface(e){return this.each((function(){const t=Wo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}en.on(window,No,(()=>{An.find(Mo).forEach((e=>new Wo(e)))})),xt(Wo);const Go="tab",Ko="bs.tab",Jo=`.${Ko}`,Xo=".data-api",Yo=`hide${Jo}`,Qo=`hidden${Jo}`,Zo=`show${Jo}`,ea=`shown${Jo}`,ta=`click${Jo}${Xo}`,na="dropdown-menu",ra="active",ia="fade",sa="show",oa=".dropdown",aa=".nav, .list-group",ca=".active",la=":scope > li > .active",ua='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ha=".dropdown-toggle",da=":scope > .dropdown-menu .active";class fa extends sn{static get NAME(){return Go}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ra))return;let e;const t=_t(this._element),n=this._element.closest(aa);if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?la:ca;e=An.find(t,n),e=e[e.length-1]}const r=e?en.trigger(e,Yo,{relatedTarget:this._element}):null,i=en.trigger(this._element,Zo,{relatedTarget:e});if(i.defaultPrevented||null!==r&&r.defaultPrevented)return;this._activate(this._element,n);const s=()=>{en.trigger(e,Qo,{relatedTarget:this._element}),en.trigger(this._element,ea,{relatedTarget:e})};t?this._activate(t,t.parentNode,s):s()}_activate(e,t,n){const r=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?An.children(t,ca):An.find(la,t),i=r[0],s=n&&i&&i.classList.contains(ia),o=()=>this._transitionComplete(e,i,n);i&&s?(i.classList.remove(sa),this._queueCallback(o,e,!0)):o()}_transitionComplete(e,t,n){if(t){t.classList.remove(ra);const e=An.findOne(da,t.parentNode);e&&e.classList.remove(ra),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(ra),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),At(e),e.classList.contains(ia)&&e.classList.add(sa);let r=e.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&r.classList.contains(na)){const t=e.closest(oa);t&&An.find(ha,t).forEach((e=>e.classList.add(ra))),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each((function(){const t=fa.getOrCreateInstance(this);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}en.on(document,ta,ua,(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Tt(this))return;const t=fa.getOrCreateInstance(this);t.show()})),xt(fa);const pa="toast",ma="bs.toast",ga=`.${ma}`,_a=`mouseover${ga}`,va=`mouseout${ga}`,ya=`focusin${ga}`,ba=`focusout${ga}`,wa=`hide${ga}`,Ea=`hidden${ga}`,ka=`show${ga}`,Ta=`shown${ga}`,Ia="fade",Sa="hide",Aa="show",Oa="showing",Ca={animation:"boolean",autohide:"boolean",delay:"number"},Ra={animation:!0,autohide:!0,delay:5e3};class Pa extends sn{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return Ca}static get Default(){return Ra}static get NAME(){return pa}show(){const e=en.trigger(this._element,ka);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Ia);const t=()=>{this._element.classList.remove(Oa),en.trigger(this._element,Ta),this._maybeScheduleHide()};this._element.classList.remove(Sa),At(this._element),this._element.classList.add(Aa),this._element.classList.add(Oa),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Aa))return;const e=en.trigger(this._element,wa);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(Sa),this._element.classList.remove(Oa),this._element.classList.remove(Aa),en.trigger(this._element,Ea)};this._element.classList.add(Oa),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Aa)&&this._element.classList.remove(Aa),super.dispose()}_getConfig(e){return e={...Ra,...In.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},Et(pa,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){en.on(this._element,_a,(e=>this._onInteraction(e,!0))),en.on(this._element,va,(e=>this._onInteraction(e,!1))),en.on(this._element,ya,(e=>this._onInteraction(e,!0))),en.on(this._element,ba,(e=>this._onInteraction(e,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=Pa.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}on(Pa),xt(Pa)},503:function(e,t,n){n.d(t,{ZF:function(){return r.initializeApp}});var r=n(816),i="firebase",s="9.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.registerVersion)(i,s,"app")},263:function(e,t,n){n.d(t,{Xb:function(){return ft},v0:function(){return wr},Aj:function(){return _t},e5:function(){return pt},w7:function(){return vt}});var r=n(444),i=n(816),s=n(333);function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var a=n(463);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=c,u=new r.LL("auth","Firebase",c()),h=new s.Yd("@firebase/auth");function d(e,...t){h.logLevel<=s["in"].ERROR&&h.error(`Auth (${i.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},l()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function _(e,t,...n){if(!e)throw g(t,...n)}function v(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function y(e,t){e||v(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function w(e){y(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){const n=(0,i._getProvider)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function k(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function O(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return A()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void v("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void v("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void v("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,n,i,s={}){return M(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),P.fetch()($(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function M(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},x),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw j(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw j(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw j(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw j(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw m(e,a,o);f(e,a)}}catch(s){if(s instanceof r.ZR)throw s;f(e,"network-request-failed")}}async function U(e,t,n,r,i={}){const s=await D(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function $(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?R(e.config,i):`${e.config.apiScheme}://${i}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),N.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function j(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=W(i);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:H(q(s.auth_time)),issuedAtTime:H(q(s.iat)),expirationTime:H(q(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function q(e){return 1e3*Number(e)}function W(e){var t;const[n,i,s]=e.split(".");if(void 0===n||void 0===i||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(i);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(t=o)||void 0===t?void 0:t.toString()),null}}function G(e){const t=W(e);return _(t,"internal-error"),_("undefined"!==typeof t.exp,"internal-error"),_("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&J(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
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
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,B(n,{idToken:r}));_(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!c&&l,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Y(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Z(e){const t=(0,r.m9)(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await M(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=$(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",P.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_("undefined"!==typeof e.idToken,"internal-error"),_("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new re;return n&&(_("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(_("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(_("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){_("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,V(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:E,stsTokenManager:k}=t;_(y&&k,e,"internal-error");const T=re.fromJSON(this.name,k);_("string"===typeof y,e,"internal-error"),ie(u,e.name),ie(h,e.name),_("boolean"===typeof b,e,"internal-error"),_("boolean"===typeof w,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(g,e.name),ie(v,e.name);const I=new se({uid:y,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(I.providerData=E.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
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
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
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
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class le{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new le(w(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||w(ae);const s=ce(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(s);if(t){const n=se._fromJSON(e,t);l!==i&&(o=n),i=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new le(i,e,n)):new le(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(_e(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function me(e=(0,r.z$)()){return/android/i.test(e)}function ge(e=(0,r.z$)()){return/blackberry/i.test(e)}function _e(e=(0,r.z$)()){return/webos/i.test(e)}function ve(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ye(e=(0,r.z$)()){var t;return ve(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,r.w1)()&&10===document.documentMode}function we(e=(0,r.z$)()){return ve(e)||me(e)||_e(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.z$)());break;case"Worker":n=`${ue((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${s}`}
/**
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
 */class Te{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ae(this),this.idTokenSubscription=new Ae(this),this.beforeStateQueue=new Te(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await le.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Q(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=O()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(w(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await le.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ke(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Se(e){return(0,r.m9)(e)}class Ae{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Oe(e,t,n){const r=Se(e);_(r._canInitEmulator,r,"emulator-config-failed"),_(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Ce(t),{host:o,port:a}=Re(t),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||xe()}function Ce(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Re(e){const t=Ce(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Pe(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Pe(t)}}}function Pe(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function xe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return v("not implemented")}_getIdTokenResponse(e){return v("not implemented")}_linkToIdToken(e,t){return v("not implemented")}_getReauthenticationResolver(e){return v("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Le(e,t){return D(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function De(e,t){return U(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Me(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Ue(e,t){return U(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Ne{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new $e(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new $e(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return De(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Me(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Le(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ue(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(e,t){return U(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je="http://localhost";class Ve extends Ne{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Ve(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Fe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fe(e,t)}buildRequest(){const e={requestUri:je,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Be(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function He(e,t){return U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function ze(e,t){const n=await U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw j(e,"account-exists-with-different-credential",n);return n}const qe={["USER_NOT_FOUND"]:"user-not-found"};async function We(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return U(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),qe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends Ne{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ge({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ge({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return He(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return ze(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return We(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Ge({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Je(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class Xe{constructor(e){var t,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(e)),l=null!==(t=c["apiKey"])&&void 0!==t?t:null,u=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Ke(null!==(i=c["mode"])&&void 0!==i?i:null);_(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=Je(e);try{return new Xe(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(){this.providerId=Ye.PROVIDER_ID}static credential(e,t){return $e._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xe.parseLink(t);return _(n,"argument-error"),$e._fromEmailAndCode(e,n.code,n.tenantId)}}Ye.PROVIDER_ID="password",Ye.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ye.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
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
 */class Ze extends Qe{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et extends Ze{constructor(){super("facebook.com")}static credential(e){return Ve._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch(t){return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com",et.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends Ze{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ve._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return tt.credential(t,n)}catch(r){return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com",tt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt extends Ze{constructor(){super("github.com")}static credential(e){return Ve._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch(t){return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com",nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt extends Ze{constructor(){super("twitter.com")}static credential(e,t){return Ve._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rt.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t){return U(e,"POST","/v1/accounts:signUp",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt.TWITTER_SIGN_IN_METHOD="twitter.com",rt.PROVIDER_ID="twitter.com";class st{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await se._fromIdTokenResponse(e,n,r),s=ot(n),o=new st({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=ot(n);return new st({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function ot(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,at.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new at(e,t,n,r)}}function ct(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw at._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return st._forOperation(e,"link",r)}
/**
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
 */
async function ut(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await K(e,ct(i,s,t,e),n);_(r.idToken,i,"internal-error");const o=W(r.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(e.uid===a,i,"user-mismatch"),st._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(e,t,n=!1){const r="signIn",i=await ct(e,r,t),s=await st._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function dt(e,t){return ht(Se(e),t)}async function ft(e,t,n){const r=Se(e),i=await it(r,{returnSecureToken:!0,email:t,password:n}),s=await st._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function pt(e,t,n){return dt((0,r.m9)(e),Ye.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(e,t,n,i){return(0,r.m9)(e).onIdTokenChanged(t,n,i)}function gt(e,t,n){return(0,r.m9)(e).beforeAuthStateChanged(t,n)}function _t(e,t,n,i){return(0,r.m9)(e).onAuthStateChanged(t,n,i)}function vt(e){return(0,r.m9)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function bt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const wt="__sak";
/**
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
 */class Et{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wt,"1"),this.storage.removeItem(wt),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){const e=(0,r.z$)();return de(e)||ve(e)}const Tt=1e3,It=10;class St extends Et{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kt()&&Ee(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);be()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,It):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Tt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}St.type="LOCAL";const At=St;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Et{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ot.type="SESSION";const Ct=Ot;
/**
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
 */function Rt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
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
 */class Pt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Pt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await Rt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
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
 */Pt.receivers=[];class Nt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=xt("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function Dt(e){Lt().location.href=e}
/**
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
 */function Mt(){return"undefined"!==typeof Lt()["WorkerGlobalScope"]&&"function"===typeof Lt()["importScripts"]}async function Ut(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function $t(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Ft(){return Mt()?self:null}
/**
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
 */const jt="firebaseLocalStorageDb",Vt=1,Bt="firebaseLocalStorage",Ht="fbase_key";class zt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function qt(e,t){return e.transaction([Bt],t?"readwrite":"readonly").objectStore(Bt)}function Wt(){const e=indexedDB.deleteDatabase(jt);return new zt(e).toPromise()}function Gt(){const e=indexedDB.open(jt,Vt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Bt,{keyPath:Ht})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Bt)?t(n):(n.close(),await Wt(),t(await Gt()))}))}))}async function Kt(e,t,n){const r=qt(e,!0).put({[Ht]:t,value:n});return new zt(r).toPromise()}async function Jt(e,t){const n=qt(e,!1).get(t),r=await new zt(n).toPromise();return void 0===r?null:r.value}function Xt(e,t){const n=qt(e,!0).delete(t);return new zt(n).toPromise()}const Yt=800,Qt=3;class Zt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Gt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Qt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pt._getInstance(Ft()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ut(),!this.activeServiceWorker)return;this.sender=new Nt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&$t()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gt();return await Kt(e,wt,"1"),await Xt(e,wt),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Kt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Jt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Xt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=qt(e,!1).getAll();return new zt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Yt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Zt.type="LOCAL";const en=Zt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function nn(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rn(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function sn(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",rn().appendChild(r)}))}function on(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
on("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const an="recaptcha";async function cn(e,t,n){var r;const i=await n.verify();try{let s;if(_("string"===typeof i,e,"argument-error"),_(n.type===an,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){_("enroll"===t.type,e,"internal-error");const n=await yt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;_(n,e,"missing-multi-factor-info");const o=await tn(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Be(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln{constructor(e){this.providerId=ln.PROVIDER_ID,this.auth=Se(e)}verifyPhoneNumber(e,t){return cn(this.auth,e,(0,r.m9)(t))}static credential(e,t){return Ge._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ln.credentialFromTaggedObject(t)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Ge._fromTokenResponse(t,n):null}}
/**
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
 */
function un(e,t){return t?w(t):(_(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
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
 */ln.PROVIDER_ID="phone",ln.PHONE_SIGN_IN_METHOD="phone";class hn extends Ne{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function dn(e){return ht(e.auth,new hn(e),e.bypassAuthState)}function fn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),ut(n,new hn(e),e.bypassAuthState)}async function pn(e){const{auth:t,user:n}=e;return _(n,t,"internal-error"),lt(n,new hn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dn;case"linkViaPopup":case"linkViaRedirect":return pn;case"reauthViaPopup":case"reauthViaRedirect":return fn;default:f(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new C(2e3,1e4);class _n extends mn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=xt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,gn.get())};e()}}_n.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn="pendingRedirect",yn=new Map;class bn extends mn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=yn.get(this.auth._key());if(!e){try{const t=await wn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}yn.set(this.auth._key(),e)}return this.bypassAuthState||yn.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function wn(e,t){const n=Tn(t),r=kn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function En(e,t){yn.set(e._key(),t)}function kn(e){return w(e._redirectPersistence)}function Tn(e){return ce(vn,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(e,t,n=!1){const r=Se(e),i=un(r,t),s=new bn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Sn=6e5;class An{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!Rn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Cn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sn&&this.cachedEventUids.clear(),this.cachedEventUids.has(On(e))}saveEventToCache(e){this.cachedEventUids.add(On(e)),this.lastProcessedEventTime=Date.now()}}function On(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Cn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function Rn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(e,t={}){return D(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nn=/^https?/;async function Ln(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Pn(e);for(const r of t)try{if(Dn(r))return}catch(n){}f(e,"unauthorized-domain")}function Dn(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Nn.test(n))return!1;if(xn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
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
 */const Mn=new C(3e4,6e4);function Un(){const e=Lt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function $n(e){return new Promise(((t,n)=>{var r,i,s;function o(){Un(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Un(),n(p(e,"network-request-failed"))},timeout:Mn.get()})}if(null===(i=null===(r=Lt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Lt().gapi)||void 0===s?void 0:s.load)){const t=on("iframefcb");return Lt()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},sn(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Fn=null,e}))}let Fn=null;function jn(e){return Fn=Fn||$n(e),Fn}
/**
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
 */const Vn=new C(5e3,15e3),Bn="__/auth/iframe",Hn="emulator/auth/iframe",zn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wn(e){const t=e.config;_(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,Hn):`https://${e.config.authDomain}/${Bn}`,s={apiKey:t.apiKey,appName:e.name,v:i.SDK_VERSION},o=qn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Gn(e){const t=await jn(e),n=Lt().gapi;return _(n,e,"internal-error"),t.open({where:document.body,url:Wn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zn,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=Lt().setTimeout((()=>{r(i)}),Vn.get());function o(){Lt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
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
 */const Kn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Jn=500,Xn=600,Yn="_blank",Qn="http://localhost";class Zn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function er(e,t,n,i=Jn,s=Xn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Kn),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.z$)().toLowerCase();n&&(c=fe(u)?Yn:n),he(u)&&(t=t||Qn,l.scrollbars="yes");const h=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ye(u)&&"_self"!==c)return tr(t||"",c),new Zn(null);const d=window.open(t||"",c,h);_(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Zn(d)}function tr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
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
 */const nr="__/auth/handler",rr="emulator/auth/handler";function ir(e,t,n,s,o,a){_(e.config.authDomain,e,"auth-domain-config-required"),_(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.SDK_VERSION,eventId:o};if(t instanceof Qe){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ze){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const l=c;for(const r of Object.keys(l))void 0===l[r]&&delete l[r];return`${sr(e)}?${(0,r.xO)(l).slice(1)}`}function sr({config:e}){return e.emulator?R(e,rr):`https://${e.authDomain}/${nr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="webStorageSupport";class ar{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ct,this._completeRedirectFn=In,this._overrideRedirectResult=En}async _openPopup(e,t,n,r){var i;y(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=ir(e,t,n,T(),r);return er(e,s,xt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Dt(ir(e,t,n,T(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Gn(e),n=new An(e);return t.register("authEvent",(t=>{_(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(or,{type:or},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[or];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ln(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||ve()}}const cr=ar;class lr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return v("unexpected MultiFactorSessionType")}}}class ur extends lr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ur(e)}_finalizeEnroll(e,t,n){return bt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return nn(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class hr{constructor(){}static assertion(e){return ur._fromCredential(e)}}hr.FACTOR_ID="phone";var dr="@firebase/auth",fr="0.20.10";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function gr(e){(0,i._registerComponent)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{_(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),_(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ke(e)},a=new Ie(t,r,i);return k(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i._registerComponent)(new a.wA("auth-internal",(e=>{const t=Se(e.getProvider("auth").getImmediate());return(e=>new pr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(dr,fr,mr(e)),(0,i.registerVersion)(dr,fr,"esm2017")}
/**
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
 */const _r=300,vr=(0,r.Pz)("authIdTokenMaxAge")||_r;let yr=null;const br=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vr)return;const i=null===n||void 0===n?void 0:n.token;yr!==i&&(yr=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wr(e=(0,i.getApp)()){const t=(0,i._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();const n=E(e,{popupRedirectResolver:cr,persistence:[en,At,Ct]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const e=br(s);gt(n,e,(()=>e(n.currentUser))),mt(n,(t=>e(t)))}const o=(0,r.q4)("auth");return o&&Oe(n,`http://${o}`),n}gr("Browser")},902:function(e,t,n){n.d(t,{Z:function(){return r.Z}});var r=n(180),i="firebase",s="9.12.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r.Z.registerVersion(i,s,"app-compat")},63:function(e,t,n){var r=n(180),i=n(816),s=n(444),o=n(463);
/**
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
 */
const a="firebasestorage.googleapis.com",c="storageBucket",l=12e4,u=6e5,h=1e3;
/**
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
 */
class d extends s.ZR{constructor(e,t,n=0){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function f(e){return"storage/"+e}function p(){const e="An unknown error occurred, please check the error payload for server response.";return new d("unknown",e)}function m(e){return new d("object-not-found","Object '"+e+"' does not exist.")}function g(e){return new d("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d("unauthenticated",e)}function v(){return new d("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function y(e){return new d("unauthorized","User does not have permission to access '"+e+"'.")}function b(){return new d("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new d("canceled","User canceled the upload/download.")}function E(e){return new d("invalid-url","Invalid URL '"+e+"'.")}function k(e){return new d("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function T(){return new d("no-default-bucket","No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function I(){return new d("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function S(){return new d("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function A(){return new d("no-download-url","The given file does not have any download URLs.")}function O(e){return new d("invalid-argument",e)}function C(){return new d("app-deleted","The Firebase app was deleted.")}function R(e){return new d("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function P(e,t){return new d("invalid-format","String does not match format '"+e+"': "+t)}function x(e){throw new d("internal-error","Internal error: "+e)}
/**
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
 */class N{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=N.makeFromUrl(e,t)}catch(r){return new N(e,"")}if(""===n.path)return n;throw k(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function l(e){e.path_=decodeURIComponent(e.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",_=new RegExp(`^https?://${m}/${r}/${g}`,"i"),v={bucket:1,path:2},y=[{regex:o,indices:c,postModify:i},{regex:f,indices:p,postModify:l},{regex:_,indices:v,postModify:l}];for(let a=0;a<y.length;a++){const t=y[a],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new N(e,i),t.postModify(n);break}}if(null==n)throw E(e);return n}}class L{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
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
 */function D(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function h(t){i=setTimeout((()=>{i=null,e(f,c())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(l)return void d();if(e)return d(),void u.call(null,e,...t);const n=c()||o;if(n)return d(),void u.call(null,e,...t);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function m(e){p||(p=!0,d(),l||(null!==i?(e||(a=2),clearTimeout(i),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function M(e){e(!1)}
/**
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
 */function U(e){return void 0!==e}function $(e){return"function"===typeof e}function F(e){return"object"===typeof e&&!Array.isArray(e)}function j(e){return"string"===typeof e||e instanceof String}function V(e){return B()&&e instanceof Blob}function B(){return"undefined"!==typeof Blob}function H(e,t,n,r){if(r<t)throw O(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw O(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
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
 */function z(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function q(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
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
 */var W;
/**
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
 */
function G(e,t){const n=e>=500&&e<600,r=[408,429],i=-1!==r.indexOf(e),s=-1!==t.indexOf(e);return n||i||s}
/**
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
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(W||(W={}));class K{constructor(e,t,n,r,i,s,o,a,c,l,u,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new J(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===W.NO_ERROR,i=n.getStatus();if((!t||G(i,this.additionalRetryCodes_))&&this.retry){const t=n.getErrorCode()===W.ABORT;return void e(!1,new J(!1,null,t))}const s=-1!==this.successCodes_.indexOf(i);e(!0,new J(s,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,i=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(i,i.getResponse());U(e)?n(e):n()}catch(s){r(s)}else if(null!==i){const e=p();e.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,e)):r(e)}else if(t.canceled){const e=this.appDelete_?C():w();r(e)}else{const e=b();r(e)}};this.canceled_?t(!1,new J(!1,null,!0)):this.backoffId_=D(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&M(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class J{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function X(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Y(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Q(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Z(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function ee(e,t,n,r,i,s,o=!0){const a=q(e.urlParams),c=e.url+a,l=Object.assign({},e.headers);return Q(l,t),X(l,n),Y(l,s),Z(l,r),new K(c,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}
/**
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
 */function te(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ne(...e){const t=te();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(B())return new Blob(e);throw new d("unsupported-environment","This browser doesn't seem to support creating Blobs")}function re(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
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
 */function ie(e){return atob(e)}
/**
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
 */const se={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class oe{constructor(e,t){this.data=e,this.contentType=t||null}}function ae(e,t){switch(e){case se.RAW:return new oe(ce(t));case se.BASE64:case se.BASE64URL:return new oe(ue(e,t));case se.DATA_URL:return new oe(de(t),fe(t))}throw p()}function ce(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,s=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function le(e){let t;try{t=decodeURIComponent(e)}catch(n){throw P(se.DATA_URL,"Malformed data URL.")}return ce(t)}function ue(e,t){switch(e){case se.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw P(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case se.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw P(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ie(t)}catch(i){throw P(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class he{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw P(se.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=pe(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function de(e){const t=new he(e);return t.base64?ue(se.BASE64,t.rest):le(t.rest)}function fe(e){const t=new he(e);return t.contentType}function pe(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
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
 */class me{constructor(e,t){let n=0,r="";V(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(V(this.data_)){const n=this.data_,r=re(n,e,t);return null===r?null:new me(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new me(n,!0)}}static getBlob(...e){if(B()){const t=e.map((e=>e instanceof me?e.data_:e));return new me(ne.apply(null,t))}{const t=e.map((e=>j(e)?ae(se.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new me(r,!0)}}uploadData(){return this.data_}}
/**
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
 */function ge(e){let t;try{t=JSON.parse(e)}catch(n){return null}return F(t)?t:null}
/**
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
 */function _e(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function ve(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function ye(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
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
 */function be(e,t){return t}class we{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||be}}let Ee=null;function ke(e){return!j(e)||e.length<2?e:ye(e)}function Te(){if(Ee)return Ee;const e=[];function t(e,t){return ke(t)}e.push(new we("bucket")),e.push(new we("generation")),e.push(new we("metageneration")),e.push(new we("name","fullPath",!0));const n=new we("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new we("size");return i.xform=r,e.push(i),e.push(new we("timeCreated")),e.push(new we("updated")),e.push(new we("md5Hash",null,!0)),e.push(new we("cacheControl",null,!0)),e.push(new we("contentDisposition",null,!0)),e.push(new we("contentEncoding",null,!0)),e.push(new we("contentLanguage",null,!0)),e.push(new we("contentType",null,!0)),e.push(new we("metadata","customMetadata",!0)),Ee=e,Ee}function Ie(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new N(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Se(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return Ie(r,e),r}function Ae(e,t,n){const r=ge(t);if(null===r)return null;const i=r;return Se(e,i,n)}function Oe(e,t,n,r){const i=ge(t);if(null===i)return null;if(!j(i["downloadTokens"]))return null;const s=i["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((t=>{const i=e["bucket"],s=e["fullPath"],a="/b/"+o(i)+"/o/"+o(s),c=z(a,n,r),l=q({alt:"media",token:t});return c+l}));return c[0]}function Ce(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
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
 */const Re="prefixes",Pe="items";function xe(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[Re])for(const i of n[Re]){const n=i.replace(/\/$/,""),s=e._makeStorageReference(new N(t,n));r.prefixes.push(s)}if(n[Pe])for(const i of n[Pe]){const n=e._makeStorageReference(new N(t,i["name"]));r.items.push(n)}return r}function Ne(e,t,n){const r=ge(n);if(null===r)return null;const i=r;return xe(e,t,i)}class Le{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
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
 */function De(e){if(!e)throw p()}function Me(e,t){function n(n,r){const i=Ae(e,r,t);return De(null!==i),i}return n}function Ue(e,t){function n(n,r){const i=Ne(e,t,r);return De(null!==i),i}return n}function $e(e,t){function n(n,r){const i=Ae(e,r,t);return De(null!==i),Oe(i,r,e.host,e._protocol)}return n}function Fe(e){function t(t,n){let r;return r=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?v():_():402===t.getStatus()?g(e.bucket):403===t.getStatus()?y(e.path):n,r.status=t.getStatus(),r.serverResponse=n.serverResponse,r}return t}function je(e){const t=Fe(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=m(e.path)),i.serverResponse=r.serverResponse,i}return n}function Ve(e,t,n){const r=t.fullServerUrl(),i=z(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Le(i,s,Me(e,n),o);return a.errorHandler=je(t),a}function Be(e,t,n,r,i){const s={};t.isRoot?s["prefix"]="":s["prefix"]=t.path+"/",n&&n.length>0&&(s["delimiter"]=n),r&&(s["pageToken"]=r),i&&(s["maxResults"]=i);const o=t.bucketOnlyServerUrl(),a=z(o,e.host,e._protocol),c="GET",l=e.maxOperationRetryTime,u=new Le(a,c,Ue(e,t.bucket),l);return u.urlParams=s,u.errorHandler=Fe(t),u}function He(e,t,n){const r=t.fullServerUrl(),i=z(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new Le(i,s,$e(e,n),o);return a.errorHandler=je(t),a}function ze(e,t,n,r){const i=t.fullServerUrl(),s=z(i,e.host,e._protocol),o="PATCH",a=Ce(n,r),c={"Content-Type":"application/json; charset=utf-8"},l=e.maxOperationRetryTime,u=new Le(s,o,Me(e,r),l);return u.headers=c,u.body=a,u.errorHandler=je(t),u}function qe(e,t){const n=t.fullServerUrl(),r=z(n,e.host,e._protocol),i="DELETE",s=e.maxOperationRetryTime;function o(e,t){}const a=new Le(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=je(t),a}function We(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Ge(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=We(null,t)),r}function Ke(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=Ge(t,r,i),u=Ce(l,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+c+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=me.getBlob(h,r,d);if(null===f)throw I();const p={name:l["fullPath"]},m=z(s,e.host,e._protocol),g="POST",_=e.maxUploadRetryTime,v=new Le(m,g,Me(e,n),_);return v.urlParams=p,v.headers=o,v.body=f.uploadData(),v.errorHandler=Fe(t),v}class Je{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function Xe(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){De(!1)}const r=t||["active"];return De(!!n&&-1!==r.indexOf(n)),n}function Ye(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=Ge(t,r,i),a={name:o["fullPath"]},c=z(s,e.host,e._protocol),l="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Ce(o,n),d=e.maxUploadRetryTime;function f(e){let t;Xe(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){De(!1)}return De(j(t)),t}const p=new Le(c,l,f,d);return p.urlParams=a,p.headers=u,p.body=h,p.errorHandler=Fe(t),p}function Qe(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function s(e){const t=Xe(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){De(!1)}n||De(!1);const i=Number(n);return De(!isNaN(i)),new Je(i,r.size(),"final"===t)}const o="POST",a=e.maxUploadRetryTime,c=new Le(n,o,s,a);return c.headers=i,c.errorHandler=Fe(t),c}const Ze=262144;function et(e,t,n,r,i,s,o,a){const c=new Je(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw S();const l=c.total-c.current;let u=l;i>0&&(u=Math.min(u,i));const h=c.current,d=h+u;let f="";f=0===u?"finalize":l===u?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},m=r.slice(h,d);if(null===m)throw I();function g(e,n){const i=Xe(e,["active","final"]),o=c.current+u,a=r.size();let l;return l="final"===i?Me(t,s)(e,n):null,new Je(o,a,"final"===i,l)}const _="POST",v=t.maxUploadRetryTime,y=new Le(n,_,g,v);return y.headers=p,y.body=m.uploadData(),y.progressCallback=a||null,y.errorHandler=Fe(e),y}
/**
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
 */const tt={STATE_CHANGED:"state_changed"},nt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function rt(e){switch(e){case"running":case"pausing":case"canceling":return nt.RUNNING;case"paused":return nt.PAUSED;case"success":return nt.SUCCESS;case"canceled":return nt.CANCELED;case"error":return nt.ERROR;default:return nt.ERROR}}
/**
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
 */class it{constructor(e,t,n){const r=$(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
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
 */function st(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
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
 */let ot=null;class at{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=W.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=W.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=W.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw x("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw x("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw x("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw x("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw x("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class ct extends at{initXhr(){this.xhr_.responseType="text"}}function lt(){return ot?ot():new ct}
/**
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
 */
class ut{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Te(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(G(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,h),this._needToFetchStatus=!0,void this.completeTransitions_();e=b()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=Ye(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,lt,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=Qe(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,lt,t,n);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=Ze*this._chunkMultiplier,t=new Je(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=et(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,lt,r,i,!1);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const e=Ze*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=Ve(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,lt,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=Ke(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,lt,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=w(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=rt(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new it(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(rt(this._state)){case nt.SUCCESS:st(this._resolve.bind(null,this.snapshot))();break;case nt.CANCELED:case nt.ERROR:const t=this._reject;st(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=rt(this._state);switch(t){case nt.RUNNING:case nt.PAUSED:e.next&&st(e.next.bind(e,this.snapshot))();break;case nt.SUCCESS:e.complete&&st(e.complete.bind(e))();break;case nt.CANCELED:case nt.ERROR:e.error&&st(e.error.bind(e,this._error))();break;default:e.error&&st(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
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
 */class ht{constructor(e,t){this._service=e,this._location=t instanceof N?t:N.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ht(e,t)}get root(){const e=new N(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ye(this._location.path)}get storage(){return this._service}get parent(){const e=_e(this._location.path);if(null===e)return null;const t=new N(this._location.bucket,e);return new ht(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw R(e)}}function dt(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new ut(e,new me(t),n)}function ft(e){const t={prefixes:[],items:[]};return pt(e,t).then((()=>t))}async function pt(e,t,n){const r={pageToken:n},i=await mt(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await pt(e,t,i.nextPageToken)}function mt(e,t){null!=t&&"number"===typeof t.maxResults&&H("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=Be(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,lt)}function gt(e){e._throwIfRoot("getMetadata");const t=Ve(e.storage,e._location,Te());return e.storage.makeRequestWithTokens(t,lt)}function _t(e,t){e._throwIfRoot("updateMetadata");const n=ze(e.storage,e._location,t,Te());return e.storage.makeRequestWithTokens(n,lt)}function vt(e){e._throwIfRoot("getDownloadURL");const t=He(e.storage,e._location,Te());return e.storage.makeRequestWithTokens(t,lt).then((e=>{if(null===e)throw A();return e}))}function yt(e){e._throwIfRoot("deleteObject");const t=qe(e.storage,e._location);return e.storage.makeRequestWithTokens(t,lt)}function bt(e,t){const n=ve(e._location.path,t),r=new N(e._location.bucket,n);return new ht(e.storage,r)}
/**
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
 */function wt(e){return/^[A-Za-z]+:\/\//.test(e)}function Et(e,t){return new ht(e,t)}function kt(e,t){if(e instanceof At){const n=e;if(null==n._bucket)throw T();const r=new ht(n,n._bucket);return null!=t?kt(r,t):r}return void 0!==t?bt(e,t):e}function Tt(e,t){if(t&&wt(t)){if(e instanceof At)return Et(e,t);throw O("To use ref(service, url), the first argument must be a Storage instance.")}return kt(e,t)}function It(e,t){const n=null===t||void 0===t?void 0:t[c];return null==n?null:N.makeFromBucketSpec(n,e)}function St(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"===typeof i?i:(0,s.Sg)(i,e.app.options.projectId))}class At{constructor(e,t,n,r,i){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?N.makeFromBucketSpec(r,this._host):It(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=N.makeFromBucketSpec(this._url,e):this._bucket=It(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){H("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){H("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ht(this,e)}_makeRequest(e,t,n,r,i=!0){if(this._deleted)return new L(C());{const s=ee(e,this._appId,n,r,t,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Ot="@firebase/storage",Ct="0.9.12",Rt="storage";function Pt(e,t,n){return e=(0,s.m9)(e),dt(e,t,n)}function xt(e){return e=(0,s.m9)(e),gt(e)}function Nt(e,t){return e=(0,s.m9)(e),_t(e,t)}function Lt(e,t){return e=(0,s.m9)(e),mt(e,t)}function Dt(e){return e=(0,s.m9)(e),ft(e)}function Mt(e){return e=(0,s.m9)(e),vt(e)}function Ut(e){return e=(0,s.m9)(e),yt(e)}function $t(e,t){return e=(0,s.m9)(e),Tt(e,t)}function Ft(e,t){return bt(e,t)}function jt(e,t,n,r={}){St(e,t,n,r)}
/**
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
 */function Vt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new At(n,r,s,t,i.SDK_VERSION)}function Bt(){(0,i._registerComponent)(new o.wA(Rt,Vt,"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(Ot,Ct,""),(0,i.registerVersion)(Ot,Ct,"esm2017")}Bt();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ht(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then((t=>{if(e)return e(new Ht(t,this,this._ref))}),t)}on(e,t,n,r){let i;return t&&(i="function"===typeof t?e=>t(new Ht(e,this,this._ref)):{next:t.next?e=>t.next(new Ht(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)}}class qt{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map((e=>new Wt(e,this._service)))}get items(){return this._delegate.items.map((e=>new Wt(e,this._service)))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=Ft(this._delegate,e);return new Wt(t,this.storage)}get root(){return new Wt(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new Wt(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new zt(Pt(this._delegate,e,t),this)}putString(e,t=se.RAW,n){this._throwIfRoot("putString");const r=ae(t,e),i=Object.assign({},n);return null==i["contentType"]&&null!=r.contentType&&(i["contentType"]=r.contentType),new zt(new ut(this._delegate,new me(r.data,!0),i),this)}listAll(){return Dt(this._delegate).then((e=>new qt(e,this.storage)))}list(e){return Lt(this._delegate,e||void 0).then((e=>new qt(e,this.storage)))}getMetadata(){return xt(this._delegate)}updateMetadata(e){return Nt(this._delegate,e)}getDownloadURL(){return Mt(this._delegate)}delete(){return this._throwIfRoot("delete"),Ut(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw R(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Kt(e))throw O("ref() expected a child path but got a URL, use refFromURL instead.");return new Wt($t(this._delegate,e),this)}refFromURL(e){if(!Kt(e))throw O("refFromURL() expected a full URL but got a child path, use ref() instead.");try{N.makeFromUrl(e,this._delegate.host)}catch(t){throw O("refFromUrl() expected a valid full URL but got an invalid one.")}return new Wt($t(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){jt(this._delegate,e,t,n)}}function Kt(e){return/^[A-Za-z]+:\/\//.test(e)}const Jt="@firebase/storage-compat",Xt="0.1.20",Yt="storage-compat";function Qt(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t}),i=new Gt(n,r);return i}function Zt(e){const t={TaskState:nt,TaskEvent:tt,StringFormat:se,Storage:Gt,Reference:Wt};e.INTERNAL.registerComponent(new o.wA(Yt,Qt,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(Jt,Xt)}Zt(r.Z)},857:function(e,t,n){n.d(t,{ET:function(){return wn},hJ:function(){return $t},oe:function(){return bn},JU:function(){return Ft},QT:function(){return _n},PL:function(){return vn},ad:function(){return Nt},r7:function(){return yn}});var r=n(816),i=n(463),s=n(333),o=n(444);
/**
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
 */
class a{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user");
/**
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
 */
let c="9.12.1";
/**
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
 */const l=new s.Yd("@firebase/firestore");function u(e,...t){if(l.logLevel<=s["in"].DEBUG){const n=t.map(f);l.debug(`Firestore (${c}): ${e}`,...n)}}function h(e,...t){if(l.logLevel<=s["in"].ERROR){const n=t.map(f);l.error(`Firestore (${c}): ${e}`,...n)}}function d(e,...t){if(l.logLevel<=s["in"].WARN){const n=t.map(f);l.warn(`Firestore (${c}): ${e}`,...n)}}function f(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
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
 */function p(e="Unexpected state"){const t=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+e;throw h(t),new Error(t)}function m(e,t){e||p()}function g(e,t){return e}
/**
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
 */const _="ok",v="cancelled",y="unknown",b="invalid-argument",w="deadline-exceeded",E="not-found",k="permission-denied",T="unauthenticated",I="resource-exhausted",S="failed-precondition",A="aborted",O="out-of-range",C="unimplemented",R="internal",P="unavailable";class x extends o.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
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
 */
/**
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
 */
class N{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(a.UNAUTHENTICATED)))}shutdown(){}}class D{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class M{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(m("string"==typeof e.accessToken),new N(e.accessToken,new a(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class U{constructor(e,t,n,r){this.t=e,this.i=t,this.o=n,this.u=r,this.type="FirstParty",this.user=a.FIRST_PARTY,this.h=new Map}l(){return this.u?this.u():(m(!("object"!=typeof this.t||null===this.t||!this.t.auth||!this.t.auth.getAuthHeaderValueForFirstParty)),this.t.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.h.set("X-Goog-AuthUser",this.i);const e=this.l();return e&&this.h.set("Authorization",e),this.o&&this.h.set("X-Goog-Iam-Authorization-Token",this.o),this.h}}class ${constructor(e,t,n,r){this.t=e,this.i=t,this.o=n,this.u=r}getToken(){return Promise.resolve(new U(this.t,this.i,this.o,this.u))}start(e,t){e.enqueueRetryable((()=>t(a.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class F{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j{constructor(e){this.m=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(m("string"==typeof e.token),new F(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
/**
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
 */class V{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class B{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new B("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof B&&e.projectId===this.projectId&&e.database===this.database}}class H{constructor(e,t,n){void 0===t?t=0:t>e.length&&p(),void 0===n?n=e.length-t:n>e.length-t&&p(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===H.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof H?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class z extends H{construct(e,t,n){return new z(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new x(b,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new z(t)}static emptyPath(){return new z([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class W extends H{construct(e,t,n){return new W(e,t,n)}static isValidIdentifier(e){return q.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),W.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new W(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new x(b,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new x(b,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new x(b,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new x(b,"Unterminated ` in path: "+e);return new W(t)}static emptyPath(){return new W([])}}
/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(z.fromString(e))}static fromName(e){return new G(z.fromString(e).popFirst(5))}static empty(){return new G(z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===z.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new z(e.slice()))}}
/**
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
 */function K(e,t,n){if(!n)throw new x(b,`Function ${e}() cannot be called with an empty ${t}.`)}function J(e){if(!G.isDocumentKey(e))throw new x(b,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function X(e){if(G.isDocumentKey(e))throw new x(b,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Y(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":p()}function Q(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new x(b,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Y(e);throw new x(b,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
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
 */
function Z(e){return null==e}function ee(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
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
 */var ne,re;function ie(e){if(void 0===e)return h("RPC_ERROR","HTTP error has no status"),y;switch(e){case 200:return _;case 400:return S;case 401:return T;case 403:return k;case 404:return E;case 409:return A;case 416:return O;case 429:return I;case 499:return v;case 500:return y;case 501:return C;case 503:return P;case 504:return w;default:return e>=200&&e<300?_:e>=400&&e<500?S:e>=500&&e<600?R:y}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(re=ne||(ne={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";class se extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.p=t+"://"+e.host,this.g="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get v(){return!1}I(e,t,n,r,i){const s=this.T(e,t);u("RestConnection","Sending: ",s,n);const o={};return this.A(o,r,i),this.R(e,s,o,n).then((e=>(u("RestConnection","Received: ",e),e)),(t=>{throw d("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}P(e,t,n,r,i,s){return this.I(e,t,n,r,i)}A(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+c,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}T(e,t){const n=te[e];return`${this.p}/v1/${t}:${n}`}}{constructor(e,t){super(e),this.V=t}N(e,t){throw new Error("Not supported by FetchConnection")}async R(e,t,n,r){const i=JSON.stringify(r);let s;try{s=await this.V(t,{method:"POST",headers:n,body:i})}catch(e){throw new x(ie(e.status),"Request failed with error: "+e.statusText)}if(!s.ok)throw new x(ie(s.status),"Request failed with error: "+s.statusText);return s.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
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
 */class ae{static D(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=oe(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function ce(e,t){return e<t?-1:e>t?1:0}function le(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
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
 */class ue{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new x(b,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new x(b,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new x(b,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(b,"Timestamp seconds out of range: "+e)}static now(){return ue.fromMillis(Date.now())}static fromDate(e){return ue.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ue(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
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
 */class he{constructor(e){this.timestamp=e}static fromTimestamp(e){return new he(e)}static min(){return new he(new ue(0,0))}static max(){return new he(new ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
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
 */function de(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function fe(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
/**
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
 */class pe{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new me(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new me(this.root,e,this.comparator,!1)}getReverseIterator(){return new me(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new me(this.root,e,this.comparator,!0)}}class me{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ge.RED,this.left=null!=r?r:ge.EMPTY,this.right=null!=i?i:ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new ge(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ge.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw p();if(this.right.isRed())throw p();const e=this.left.check();if(e!==this.right.check())throw p();return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1,ge.EMPTY=new class{constructor(){this.size=0}get key(){throw p()}get value(){throw p()}get color(){throw p()}get left(){throw p()}get right(){throw p()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
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
 */
class _e{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ve(this.data.getIterator())}getIteratorFrom(e){return new ve(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof _e))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new _e(this.comparator);return t.data=e,t}}class ve{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.fields=e,e.sort(W.comparator)}static empty(){return new ye([])}unionWith(e){let t=new _e(W.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ye(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return le(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new be(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const we=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ee(e){if(m(!!e),"string"==typeof e){let t=0;const n=we.exec(e);if(m(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ke(e.seconds),nanos:ke(e.nanos)}}function ke(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Te(e){return"string"==typeof e?be.fromBase64String(e):be.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Se(e){const t=e.mapValue.fields.__previous_value__;return Ie(t)?Se(t):t}function Ae(e){const t=Ee(e.mapValue.fields.__local_write_time__.timestampValue);return new ue(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ie(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
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
 */(e)?9007199254740991:10:p()}function Ce(e,t){if(e===t)return!0;const n=Oe(e);if(n!==Oe(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ae(e).isEqual(Ae(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ee(e.timestampValue),r=Ee(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Te(e.bytesValue).isEqual(Te(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ke(e.geoPointValue.latitude)===ke(t.geoPointValue.latitude)&&ke(e.geoPointValue.longitude)===ke(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ke(e.integerValue)===ke(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ke(e.doubleValue),r=ke(t.doubleValue);return n===r?ee(n)===ee(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return le(e.arrayValue.values||[],t.arrayValue.values||[],Ce);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(de(n)!==de(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ce(n[i],r[i])))return!1;return!0}(e,t);default:return p()}}function Re(e){return!!e&&"nullValue"in e}function Pe(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function xe(e){return!!e&&"mapValue"in e}function Ne(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return fe(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ne(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ne(e.arrayValue.values[n]);return t}return Object.assign({},e)}class Le{constructor(e){this.value=e}static empty(){return new Le({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!xe(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ne(t)}setAll(e){let t=W.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ne(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());xe(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ce(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];xe(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){fe(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Le(Ne(this.value))}}
/**
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
 */class De{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new De(e,0,he.min(),he.min(),Le.empty(),0)}static newFoundDocument(e,t,n){return new De(e,1,t,he.min(),n,0)}static newNoDocument(e,t){return new De(e,2,t,he.min(),Le.empty(),0)}static newUnknownDocument(e,t){return new De(e,3,t,he.min(),Le.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Le.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Le.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=he.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
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
 */class Me{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.$=null}}function Ue(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Me(e,t,n,r,i,s,o)}class $e{constructor(e,t){this.position=e,this.inclusive=t}}class Fe{constructor(e,t="asc"){this.field=e,this.dir=t}}
/**
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
 */
class je{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.O=null,this.k=null,this.startAt,this.endAt}}function Ve(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Be(e){for(const t of e.filters)if(t.q())return t.field;return null}function He(e){const t=g(e);if(null===t.O){t.O=[];const e=Be(t),n=Ve(t);if(null!==e&&null===n)e.isKeyField()||t.O.push(new Fe(e)),t.O.push(new Fe(W.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.O.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.O.push(new Fe(W.keyField(),e))}}}return t.O}function ze(e){const t=g(e);if(!t.k)if("F"===t.limitType)t.k=Ue(t.path,t.collectionGroup,He(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of He(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Fe(i.field,t))}const n=t.endAt?new $e(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new $e(t.startAt.position,t.startAt.inclusive):null;t.k=Ue(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.k}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qe(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!ee(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ee(t)?"-0":t}}(e,t)}
/**
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
 */class We{constructor(){this._=void 0}}class Ge extends We{}class Ke extends We{constructor(e){super(),this.elements=e}}class Je extends We{constructor(e){super(),this.elements=e}}class Xe extends We{constructor(e,t){super(),this.L=e,this.M=t}}
/**
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
 */class Ye{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ye}static exists(e){return new Ye(void 0,e)}static updateTime(e){return new Ye(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Qe{}class Ze extends Qe{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class et extends Qe{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}class tt extends Qe{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nt extends Qe{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
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
 */const rt=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),it=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class st{constructor(e,t){this.databaseId=e,this.C=t}}function ot(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function at(e,t){return e.C?t.toBase64():t.toUint8Array()}function ct(e,t){return ot(e,t.toTimestamp())}function lt(e){return m(!!e),he.fromTimestamp(function(e){const t=Ee(e);return new ue(t.seconds,t.nanos)}(e))}function ut(e,t){return function(e){return new z(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function ht(e,t){return ut(e.databaseId,t.path)}function dt(e,t){const n=function(e){const t=z.fromString(e);return m(kt(t)),t}(t);if(n.get(1)!==e.databaseId.projectId)throw new x(b,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new x(b,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new G((m((r=n).length>4&&"documents"===r.get(4)),r.popFirst(5)));var r}function ft(e,t){return ut(e.databaseId,t)}function pt(e){return new z(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function mt(e,t,n){return{name:ht(e,t),fields:n.value.mapValue.fields}}function gt(e,t){return"found"in t?function(e,t){m(!!t.found),t.found.name,t.found.updateTime;const n=dt(e,t.found.name),r=lt(t.found.updateTime),i=new Le({mapValue:{fields:t.found.fields}});return De.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){m(!!t.missing),m(!!t.readTime);const n=dt(e,t.missing),r=lt(t.readTime);return De.newNoDocument(n,r)}(e,t):p()}function _t(e,t){let n;if(t instanceof Ze)n={update:mt(e,t.key,t.value)};else if(t instanceof tt)n={delete:ht(e,t.key)};else if(t instanceof et)n={update:mt(e,t.key,t.data),updateMask:Et(t.fieldMask)};else{if(!(t instanceof nt))return p();n={verify:ht(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ge)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ke)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Je)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Xe)return{fieldPath:t.field.canonicalString(),increment:n.M};throw p()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ct(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:p()}(e,t.precondition)),n}function vt(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ft(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ft(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Pe(e.value))return{unaryFilter:{field:wt(e.field),op:"IS_NAN"}};if(Re(e.value))return{unaryFilter:{field:wt(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Pe(e.value))return{unaryFilter:{field:wt(e.field),op:"IS_NOT_NAN"}};if(Re(e.value))return{unaryFilter:{field:wt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:wt(e.field),op:bt(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:wt(e.field),direction:yt(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.C||Z(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function yt(e){return rt[e]}function bt(e){return it[e]}function wt(e){return{fieldPath:e.canonicalString()}}function Et(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function kt(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e){return new st(e,!0)}
/**
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
 */
/**
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
 */
class It extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.tt=n,this.L=r,this.et=!1}nt(){if(this.et)throw new x(S,"The client has already been terminated.")}I(e,t,n){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.tt.I(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===T&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new x(y,e.toString())}))}P(e,t,n,r){return this.nt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.tt.P(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===T&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new x(y,e.toString())}))}terminate(){this.et=!0}}async function St(e,t){const n=g(e),r=pt(n.L)+"/documents",i={writes:t.map((e=>_t(n.L,e)))};await n.I("Commit",r,i)}async function At(e,t){const n=g(e),r=pt(n.L)+"/documents",i={documents:t.map((e=>ht(n.L,e)))},s=await n.P("BatchGetDocuments",r,i,t.length),o=new Map;s.forEach((e=>{const t=gt(n.L,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());m(!!t),a.push(t)})),a}async function Ot(e,t){const n=g(e),r=vt(n.L,ze(t));return(await n.P("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter((e=>!!e.document)).map((e=>function(e,t,n){const r=dt(e,t.name),i=lt(t.updateTime),s=new Le({mapValue:{fields:t.fields}}),o=De.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}(n.L,e.document,void 0)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ct=new Map;function Rt(e){if(e._terminated)throw new x(S,"The client has already been terminated.");if(!Ct.has(e)){u("ComponentProvider","Initializing Datastore");const s=function(e){return new se(e,fetch.bind(null))}((t=e._databaseId,n=e.app.options.appId||"",r=e._persistenceKey,i=e._freezeSettings(),new V(t,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),o=Tt(e._databaseId),a=function(e,t,n,r){return new It(e,t,n,r)}(e._authCredentials,e._appCheckCredentials,s,o);Ct.set(e,a)}var t,n,r,i;
/**
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
 */return Ct.get(e)}class Pt{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new x(b,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new x(b,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new x(b,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pt({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(S,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new x(S,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pt(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new L;switch(e.type){case"gapi":const t=e.client;return new $(t,e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new x(b,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Ct.get(e);t&&(u("ComponentProvider","Removing Datastore"),Ct.delete(e),t.terminate())}(this),Promise.resolve()}}function Nt(e,t){const n="object"==typeof e?e:(0,r.getApp)(),i="string"==typeof e?e:t||"(default)",s=(0,r._getProvider)(n,"firestore/lite").getImmediate({identifier:i});if(!s._initialized){const e=(0,o.P0)("firestore");e&&Lt(s,...e)}return s}function Lt(e,t,n,r={}){var i;const s=(e=Q(e,xt))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&d("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),r.mockUserToken){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=a.MOCK_USER;else{t=(0,o.Sg)(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new x(b,"mockUserToken must contain 'sub' or 'user_id' field!");n=new a(s)}e._authCredentials=new D(new N(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ut(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Dt(this.firestore,e,this._key)}}class Mt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Mt(this.firestore,e,this._query)}}class Ut extends Mt{constructor(e,t,n){super(e,t,new je(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Dt(this.firestore,null,new G(e))}withConverter(e){return new Ut(this.firestore,e,this._path)}}function $t(e,t,...n){if(e=(0,o.m9)(e),K("collection","path",t),e instanceof xt){const r=z.fromString(t,...n);return X(r),new Ut(e,null,r)}{if(!(e instanceof Dt||e instanceof Ut))throw new x(b,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(z.fromString(t,...n));return X(r),new Ut(e.firestore,null,r)}}function Ft(e,t,...n){if(e=(0,o.m9)(e),1===arguments.length&&(t=ae.D()),K("doc","path",t),e instanceof xt){const r=z.fromString(t,...n);return J(r),new Dt(e,null,new G(r))}{if(!(e instanceof Dt||e instanceof Ut))throw new x(b,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(z.fromString(t,...n));return J(r),new Dt(e.firestore,e instanceof Ut?e.converter:null,new G(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jt(be.fromBase64String(e))}catch(e){throw new x(b,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new jt(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new x(b,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new W(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bt{constructor(e){this._methodName=e}}
/**
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
 */class Ht{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new x(b,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new x(b,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}}
/**
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
 */const zt=/^__.*__$/;class qt{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new et(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ze(e,this.data,t,this.fieldTransforms)}}class Wt{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new et(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Gt(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class Kt{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.L=n,this.ignoreUndefinedProperties=r,void 0===i&&this.rt(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get st(){return this.settings.st}it(e){return new Kt(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.L,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ot(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.it({path:n,ut:!1});return r.ct(e),r}at(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.it({path:n,ut:!1});return r.rt(),r}ht(e){return this.it({path:void 0,ut:!0})}lt(e){return ln(e,this.settings.methodName,this.settings.ft||!1,this.path,this.settings.dt)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}rt(){if(this.path)for(let e=0;e<this.path.length;e++)this.ct(this.path.get(e))}ct(e){if(0===e.length)throw this.lt("Document fields must not be empty");if(Gt(this.st)&&zt.test(e))throw this.lt('Document fields cannot begin and end with "__"')}}class Jt{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.L=n||Tt(e)}wt(e,t,n,r=!1){return new Kt({st:e,methodName:t,dt:n,path:W.emptyPath(),ut:!1,ft:r},this.databaseId,this.L,this.ignoreUndefinedProperties)}}function Xt(e){const t=e._freezeSettings(),n=Tt(e._databaseId);return new Jt(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Yt(e,t,n,r,i,s={}){const o=e.wt(s.merge||s.mergeFields?2:0,t,n,i);sn("Data must be an object, but it was:",o,r);const a=nn(r,o);let c,l;if(s.merge)c=new ye(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=on(t,r,n);if(!o.contains(i))throw new x(b,`Field '${i}' is specified in your field mask but missing from your input data.`);un(e,i)||e.push(i)}c=new ye(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new qt(new Le(a),c,l)}class Qt extends Bt{_toFieldTransform(e){if(2!==e.st)throw 1===e.st?e.lt(`${this._methodName}() can only appear at the top level of your update data`):e.lt(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qt}}function Zt(e,t,n,r){const i=e.wt(1,t,n);sn("Data must be an object, but it was:",i,r);const s=[],a=Le.empty();fe(r,((e,r)=>{const c=cn(t,e,n);r=(0,o.m9)(r);const l=i.at(c);if(r instanceof Qt)s.push(c);else{const e=tn(r,l);null!=e&&(s.push(c),a.set(c,e))}}));const c=new ye(s);return new Wt(a,c,i.fieldTransforms)}function en(e,t,n,r,i,s){const a=e.wt(1,t,n),c=[on(t,r,n)],l=[i];if(s.length%2!=0)throw new x(b,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(on(t,s[o])),l.push(s[o+1]);const u=[],h=Le.empty();for(let f=c.length-1;f>=0;--f)if(!un(u,c[f])){const e=c[f];let t=l[f];t=(0,o.m9)(t);const n=a.at(e);if(t instanceof Qt)u.push(e);else{const r=tn(t,n);null!=r&&(u.push(e),h.set(e,r))}}const d=new ye(u);return new Wt(h,d,a.fieldTransforms)}function tn(e,t){if(rn(e=(0,o.m9)(e)))return sn("Unsupported field value:",t,e),nn(e,t);if(e instanceof Bt)return function(e,t){if(!Gt(t.st))throw t.lt(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.lt(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ut&&4!==t.st)throw t.lt("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=tn(i,t.ht(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,o.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return qe(t.L,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ue.fromDate(e);return{timestampValue:ot(t.L,n)}}if(e instanceof ue){const n=new ue(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:ot(t.L,n)}}if(e instanceof Ht)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof jt)return{bytesValue:at(t.L,e._byteString)};if(e instanceof Dt){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.lt(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ut(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.lt(`Unsupported field value: ${Y(e)}`)}(e,t)}function nn(e,t){const n={};return function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):fe(e,((e,r)=>{const i=tn(r,t.ot(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function rn(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ue||e instanceof Ht||e instanceof jt||e instanceof Dt||e instanceof Bt)}function sn(e,t,n){if(!rn(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=Y(n);throw"an object"===r?t.lt(e+" a custom object"):t.lt(e+" "+r)}}function on(e,t,n){if((t=(0,o.m9)(t))instanceof Vt)return t._internalPath;if("string"==typeof t)return cn(e,t);throw ln("Field path arguments must be of type string or ",e,!1,void 0,n)}const an=new RegExp("[~\\*/\\[\\]]");function cn(e,t,n){if(t.search(an)>=0)throw ln(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Vt(...t.split("."))._internalPath}catch(r){throw ln(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ln(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new x(b,a+e+c)}function un(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Dt(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new dn(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(pn("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class dn extends hn{data(){return super.data()}}class fn{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,t){this._docs.forEach(e,t)}}function pn(e,t){return"string"==typeof t?cn(e,t):t instanceof Vt?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mn(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class gn extends class{convertValue(e,t="none"){switch(Oe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Te(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw p()}}convertObject(e,t){const n={};return fe(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Ht(ke(e.latitude),ke(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Se(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Ae(e));default:return null}}convertTimestamp(e){const t=Ee(e);return new ue(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=z.fromString(e);m(kt(n));const r=new B(n.get(1),n.get(3)),i=new G(n.popFirst(5));return r.isEqual(t)||h(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new jt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Dt(this.firestore,null,t)}}function _n(e){const t=Rt((e=Q(e,Dt)).firestore),n=new gn(e.firestore);return At(t,[e._key]).then((t=>{m(1===t.length);const r=t[0];return new hn(e.firestore,n,e._key,r.isFoundDocument()?r:null,e.converter)}))}function vn(e){!function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new x(C,"limitToLast() queries require specifying at least one orderBy() clause")}((e=Q(e,Mt))._query);const t=Rt(e.firestore),n=new gn(e.firestore);return Ot(t,e._query).then((t=>{const r=t.map((t=>new dn(e.firestore,n,t.key,t,e.converter)));return"L"===e._query.limitType&&r.reverse(),new fn(e,r)}))}function yn(e,t,n,...r){const i=Xt((e=Q(e,Dt)).firestore);let s;return s="string"==typeof(t=(0,o.m9)(t))||t instanceof Vt?en(i,"updateDoc",e._key,t,n,r):Zt(i,"updateDoc",e._key,t),St(Rt(e.firestore),[s.toMutation(e._key,Ye.exists(!0))])}function bn(e){return St(Rt((e=Q(e,Dt)).firestore),[new tt(e._key,Ye.none())])}function wn(e,t){const n=Ft(e=Q(e,Ut)),r=mn(e.converter,t),i=Yt(Xt(e.firestore),"addDoc",n._key,r,null!==n.converter,{});return St(Rt(e.firestore),[i.toMutation(n._key,Ye.exists(!1))]).then((()=>n))}
/**
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
 */!function(e){c=e}(`${r.SDK_VERSION}_lite`),(0,r._registerComponent)(new i.wA("firestore/lite",((e,{instanceIdentifier:t,options:n})=>{const r=e.getProvider("app").getImmediate(),i=new xt(new M(e.getProvider("auth-internal")),new j(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new x(b,'"projectId" not provided in firebase.initializeApp.');return new B(e.options.projectId,t)}
/**
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
 */(r,t),r);return n&&i._setSettings(n),i}),"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)("firestore-lite","3.7.1",""),(0,r.registerVersion)("firestore-lite","3.7.1","esm2017")},744:function(e,t){t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},119:function(e,t,n){n.d(t,{p7:function(){return tt},r5:function(){return W}});var r=n(252),i=n(262);
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>s?Symbol(e):"_vr_"+e,a=o("rvlm"),c=o("rvd"),l=o("r"),u=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||s&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function m(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const g=()=>{};const _=/\/$/,v=e=>e.replace(_,"");function y(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,c>-1?c:t.length),i=e(s)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=A(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function w(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function E(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&k(t.matched[r],n.matched[i])&&T(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function k(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function T(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!I(e[n],t[n]))return!1;return!0}function I(e,t){return Array.isArray(e)?S(e,t):Array.isArray(t)?S(t,e):e===t}function S(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function A(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var O,C;(function(e){e["pop"]="pop",e["push"]="push"})(O||(O={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(C||(C={}));function R(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const P=/^[^#]+#/;function x(e,t){return e.replace(P,"#")+t}function N(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const L=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=N(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function M(e,t){const n=history.state?history.state.position-t:-1;return n+e}const U=new Map;function $(e,t){U.set(e,t)}function F(e){const t=U.get(e);return U.delete(e),t}let j=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),w(n,"")}const o=w(n,e);return o+r+i}function B(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=V(e,location),c=n.value,l=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((e=>{e(n.value,c,{delta:u,type:O.pop,direction:u?u>0?C.forward:C.back:C.unknown})}))};function c(){o=n.value}function l(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:L()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:c,listen:l,destroy:h}}function H(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?L():null}}function z(e){const{history:t,location:n}=window,r={value:V(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:j()+e+r;try{t[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(e,n){const o=p({},t.state,H(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=p({},i.value,t.state,{forward:e,scroll:L()});s(o.current,o,!0);const a=p({},H(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function q(e){e=R(e);const t=z(e),n=B(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=p({location:"",base:e,go:r,createHref:x.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function W(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),q(e)}function G(e){return"string"===typeof e||e&&"object"===typeof e}function K(e){return"string"===typeof e||"symbol"===typeof e}const J={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},X=o("nf");var Y;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(Y||(Y={}));function Q(e,t){return p(new Error,{type:e,[X]:!0},t)}function Z(e,t){return e instanceof Error&&X in e&&(null==t||!!(e.type&t))}const ee="[^/]+?",te={sensitive:!1,strict:!1,start:!0,end:!0},ne=/[.+*?^${}()[\]/\\]/g;function re(e,t){const n=p({},te,t),r=[];let i=n.start?"^":"";const s=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let t=0;t<u.length;t++){const r=u[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ne,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;s.push({name:e,repeatable:n,optional:a});const h=c||ee;if(h!==ee){o+=10;try{new RegExp(`(${h})`)}catch(l){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+l.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,c=s in t?t[s]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}return{re:o,score:r,keys:s,parse:a,stringify:c}}function ie(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function se(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ie(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const oe={type:0,value:""},ae=/[a-zA-Z0-9_]/;function ce(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ae.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function le(e,t,n){const r=re(ce(e.path),n);const i=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ue(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=de(e);a.aliasOf=r&&r.record;const l=ge(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=le(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!pe(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{o(d)}:g}function o(e){if(K(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function c(e){let t=0;while(t<n.length&&se(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!pe(e)&&r.set(e.record.name,e)}function l(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Q(1,{location:e});o=i.record.name,a=p(he(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Q(1,{location:e,currentLocation:t});o=i.record.name,a=p({},t.params,e.params),s=i.stringify(a)}const c=[];let l=i;while(l)c.unshift(l.record),l=l.parent;return{name:o,path:s,params:a,matched:c,meta:me(c)}}return t=ge({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function he(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function de(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function pe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function me(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function ge(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const _e=/#/g,ve=/&/g,ye=/\//g,be=/=/g,we=/\?/g,Ee=/\+/g,ke=/%5B/g,Te=/%5D/g,Ie=/%5E/g,Se=/%60/g,Ae=/%7B/g,Oe=/%7C/g,Ce=/%7D/g,Re=/%20/g;function Pe(e){return encodeURI(""+e).replace(Oe,"|").replace(ke,"[").replace(Te,"]")}function xe(e){return Pe(e).replace(Ae,"{").replace(Ce,"}").replace(Ie,"^")}function Ne(e){return Pe(e).replace(Ee,"%2B").replace(Re,"+").replace(_e,"%23").replace(ve,"%26").replace(Se,"`").replace(Ae,"{").replace(Ce,"}").replace(Ie,"^")}function Le(e){return Ne(e).replace(be,"%3D")}function De(e){return Pe(e).replace(_e,"%23").replace(we,"%3F")}function Me(e){return null==e?"":De(e).replace(ye,"%2F")}function Ue(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function $e(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(Ee," "),n=e.indexOf("="),s=Ue(n<0?e:e.slice(0,n)),o=n<0?null:Ue(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Fe(e){let t="";for(let n in e){const r=e[n];if(n=Le(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((e=>e&&Ne(e))):[r&&Ne(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function je(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function Ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=e=>{!1===e?a(Q(4,{from:n,to:t})):e instanceof Error?a(e):G(e)?a(Q(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function He(e,t,n,r){const i=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(ze(o)){const a=o.__vccOpts||o,c=a[t];c&&i.push(Be(c,n,r,s,e))}else{let a=o();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=f(i)?i.default:i;s.components[e]=o;const a=o.__vccOpts||o,c=a[t];return c&&Be(c,n,r,s,e)()}))))}}return i}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function qe(e){const t=(0,r.f3)(l),n=(0,r.f3)(u),s=(0,i.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,i.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(k.bind(null,r));if(o>-1)return o;const a=Xe(e[t-2]);return t>1&&Xe(r)===a&&i[i.length-1].path!==a?i.findIndex(k.bind(null,e[t-2])):o})),a=(0,i.Fl)((()=>o.value>-1&&Je(n.params,s.value.params))),c=(0,i.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&T(n.params,s.value.params)));function h(n={}){return Ke(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(g):Promise.resolve()}return{route:s,href:(0,i.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:h}}const We=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qe,setup(e,{slots:t}){const n=(0,i.qj)(qe(e)),{options:s}=(0,r.f3)(l),o=(0,i.Fl)((()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Ge=We;function Ke(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Qe=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(h),o=(0,i.Fl)((()=>e.route||s.value)),l=(0,r.f3)(c,0),u=(0,i.Fl)((()=>o.value.matched[l]));(0,r.JJ)(c,l+1),(0,r.JJ)(a,u),(0,r.JJ)(h,o);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,u.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&k(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Ze(n.default,{Component:a,route:i});const l=s.props[e.name],h=l?!0===l?i.params:"function"===typeof l?l(i):l:null,f=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=(0,r.h)(a,p({},h,t,{onVnodeUnmounted:f,ref:d}));return Ze(n.default,{Component:m,route:i})||m}}});function Ze(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Qe;function tt(e){const t=ue(e.routes,e),n=e.parseQuery||$e,s=e.stringifyQuery||Fe,o=e.history;const a=Ve(),c=Ve(),f=Ve(),_=(0,i.XI)(J);let v=J;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=m.bind(null,(e=>""+e)),k=m.bind(null,Me),T=m.bind(null,Ue);function I(e,n){let r,i;return K(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function A(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function R(e,r){if(r=p({},r||_.value),"string"===typeof e){const i=y(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return p(i,s,{params:T(s.params),hash:Ue(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in e)i=p({},e,{path:y(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];i=p({},e,{params:k(e.params)}),r.params=k(r.params)}const a=t.resolve(i,r),c=e.hash||"";a.params=w(T(a.params));const l=b(s,p({},e,{hash:xe(c),path:a.path})),u=o.createHref(l);return p({fullPath:l,hash:c,query:s===Fe?je(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function P(e){return"string"===typeof e?y(n,e,_.value.path):p({},e)}function x(e,t){if(v!==e)return Q(8,{from:t,to:e})}function N(e){return V(e)}function U(e){return N(p(P(e),{replace:!0}))}function j(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function V(e,t){const n=v=R(e),r=_.value,i=e.state,o=e.force,a=!0===e.replace,c=j(n);if(c)return V(p(P(c),{state:i,force:o,replace:a}),t||n);const l=n;let u;return l.redirectedFrom=t,!o&&E(s,r,n)&&(u=Q(16,{to:l,from:r}),ie(r,r,!0,!1)),(u?Promise.resolve(u):H(l,r)).catch((e=>Z(e)?e:te(e,l,r))).then((e=>{if(e){if(Z(e,2))return V(p(P(e.to),{state:i,force:o,replace:a}),t||l)}else e=q(l,r,!0,a,i);return z(l,r,e),e}))}function B(e,t){const n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function H(e,t){let n;const[r,i,s]=rt(e,t);n=He(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const o=B.bind(null,e,t);return n.push(o),nt(n).then((()=>{n=[];for(const r of a.list())n.push(Be(r,e,t));return n.push(o),nt(n)})).then((()=>{n=He(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(o),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(o),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=He(s,"beforeRouteEnter",e,t),n.push(o),nt(n)))).then((()=>{n=[];for(const r of c.list())n.push(Be(r,e,t));return n.push(o),nt(n)})).catch((e=>Z(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of f.list())r(e,t,n)}function q(e,t,n,r,i){const s=x(e,t);if(s)return s;const a=t===J,c=d?history.state:{};n&&(r||a?o.replace(e.fullPath,p({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),_.value=e,ie(e,t,n,a),re()}let W;function G(){W=o.listen(((e,t,n)=>{const r=R(e),i=j(r);if(i)return void V(p(i,{replace:!0}),r).catch(g);v=r;const s=_.value;d&&$(M(s.fullPath,n.delta),L()),H(r,s).catch((e=>Z(e,12)?e:Z(e,2)?(V(e.to,r).then((e=>{Z(e,20)&&!n.delta&&n.type===O.pop&&o.go(-1,!1)})).catch(g),Promise.reject()):(n.delta&&o.go(-n.delta,!1),te(e,r,s)))).then((e=>{e=e||q(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===O.pop&&Z(e,20)&&o.go(-1,!1)),z(r,s,e)})).catch(g)}))}let X,Y=Ve(),ee=Ve();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return X&&_.value!==J?Promise.resolve():new Promise(((e,t)=>{Y.add([e,t])}))}function re(e){X||(X=!0,G(),Y.list().forEach((([t,n])=>e?n(e):t())),Y.reset())}function ie(t,n,i,s){const{scrollBehavior:o}=e;if(!d||!o)return Promise.resolve();const a=!i&&F(M(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(t,n,a))).then((e=>e&&D(e))).catch((e=>te(e,t,n)))}const se=e=>o.go(e);let oe;const ae=new Set,ce={currentRoute:_,addRoute:I,removeRoute:S,hasRoute:C,getRoutes:A,resolve:R,options:e,push:N,replace:U,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:c.add,afterEach:f.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(_)}),d&&!oe&&_.value===J&&(oe=!0,N(o.location).catch((e=>{0})));const n={};for(const s in J)n[s]=(0,i.Fl)((()=>_.value[s]));e.provide(l,t),e.provide(u,(0,i.qj)(n)),e.provide(h,_);const r=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(v=J,W&&W(),_.value=J,oe=!1,X=!1),r()}}};return ce}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>k(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>k(e,a)))||i.push(a))}return[n,r,i]}},637:function(e,t,n){n.d(t,{MT:function(){return X},Se:function(){return Z}});var r=n(252),i=n(262);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",l="plugin:settings:set";class u{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let i={...n};try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(i,t)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(s){}i=e}},t.on(l,((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function h(e,t){const n=o(),r=s(),i=a&&e.enableEarlyProxy;if(!r||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&i){const s=i?new u(e,r):null,o=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];o.push({pluginDescriptor:e,setupFn:t,proxy:s}),s&&t(s.proxiedTarget)}else r.emit(c,e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */
var d="store";function f(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function p(e){return null!==e&&"object"===typeof e}function m(e){return e&&"function"===typeof e.then}function g(e,t){return function(){return e(t)}}function _(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function v(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;b(e,n,[],e._modules.root,!0),y(e,n,t)}function y(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,o={};f(s,(function(t,n){o[n]=g(t,e),Object.defineProperty(e.getters,n,{get:function(){return o[n]()},enumerable:!0})})),e._state=(0,i.qj)({data:t}),e.strict&&S(e),r&&n&&e._withCommit((function(){r.data=null}))}function b(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=A(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){a[c]=r.state}))}var l=r.context=w(e,o,n);r.forEachMutation((function(t,n){var r=o+n;k(e,r,t,l)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;T(e,r,i,l)})),r.forEachGetter((function(t,n){var r=o+n;I(e,r,t,l)})),r.forEachChild((function(r,s){b(e,t,n.concat(s),r,i)}))}function w(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=O(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=t+c),e.dispatch(c,o)},commit:r?e.commit:function(n,r,i){var s=O(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=t+c),e.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return E(e,t)}},state:{get:function(){return A(e.state,n)}}}),i}function E(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function k(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function T(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return m(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function I(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)})}function S(e){(0,r.YP)((function(){return e._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function A(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return p(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var C="vuex bindings",R="vuex:mutations",P="vuex:actions",x="vuex",N=0;function L(e,t){h({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[C]},(function(n){n.addTimelineLayer({id:R,label:"Vuex Mutations",color:D}),n.addTimelineLayer({id:P,label:"Vuex Actions",color:D}),n.addInspector({id:x,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===x)if(n.filter){var r=[];V(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[j(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===x){var r=n.nodeId;E(t,r),n.state=B(z(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===x){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(x),n.sendInspectorState(x),n.addTimelineEvent({layerId:R,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=N++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:P,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var D=8702998,M=6710886,U=16777215,$={label:"namespaced",textColor:U,backgroundColor:M};function F(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function j(e,t){return{id:t||"root",label:F(t),tags:e.namespaced?[$]:[],children:Object.keys(e._children).map((function(n){return j(e._children[n],t+n+"/")}))}}function V(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[$]:[]}),Object.keys(t._children).forEach((function(i){V(e,t._children[i],n,r+i+"/")}))}function B(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=H(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?F(e):e,editable:!1,value:q((function(){return s[e]}))}}))}return i}function H(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=q((function(){return e[n]}))}else t[n]=q((function(){return e[n]}))})),t}function z(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var s=e[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?s:s._children}),"root"===t?e:e.root._children)}function q(e){try{return e()}catch(t){return t}}var W=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},G={namespaced:{configurable:!0}};G.namespaced.get=function(){return!!this._rawModule.namespaced},W.prototype.addChild=function(e,t){this._children[e]=t},W.prototype.removeChild=function(e){delete this._children[e]},W.prototype.getChild=function(e){return this._children[e]},W.prototype.hasChild=function(e){return e in this._children},W.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},W.prototype.forEachChild=function(e){f(this._children,e)},W.prototype.forEachGetter=function(e){this._rawModule.getters&&f(this._rawModule.getters,e)},W.prototype.forEachAction=function(e){this._rawModule.actions&&f(this._rawModule.actions,e)},W.prototype.forEachMutation=function(e){this._rawModule.mutations&&f(this._rawModule.mutations,e)},Object.defineProperties(W.prototype,G);var K=function(e){this.register([],e,!1)};function J(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void 0;J(e.concat(r),t.getChild(r),n.modules[r])}}K.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},K.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},K.prototype.update=function(e){J([],this.root,e)},K.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new W(t,n);if(0===e.length)this.root=i;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],i)}t.modules&&f(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},K.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},K.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};function X(e){return new Y(e)}var Y=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new K(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(e,t){return a.call(s,e,t)},this.commit=function(e,t,n){return c.call(s,e,t,n)},this.strict=r;var l=this._modules.root.state;b(this,l,[],this._modules.root),y(this,l),n.forEach((function(e){return e(t)}))},Q={state:{configurable:!0}};Y.prototype.install=function(e,t){e.provide(t||d,this),e.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&L(e,this)},Q.state.get=function(){return this._state.data},Q.state.set=function(e){0},Y.prototype.commit=function(e,t,n){var r=this,i=O(e,t,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},Y.prototype.dispatch=function(e,t){var n=this,r=O(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(l){0}var c=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(l){0}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(l){0}t(e)}))}))}},Y.prototype.subscribe=function(e,t){return _(e,this._subscribers,t)},Y.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return _(n,this._actionSubscribers,t)},Y.prototype.watch=function(e,t,n){var i=this;return(0,r.YP)((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},Y.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Y.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),this._modules.register(e,t),b(this,this.state,e,this._modules.get(e),n.preserveState),y(this,this.state)},Y.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){var n=A(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),v(this)},Y.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),this._modules.isRegistered(e)},Y.prototype.hotUpdate=function(e){this._modules.update(e),v(this,!0)},Y.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Y.prototype,Q);ne((function(e,t){var n={};return ee(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=re(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),ne((function(e,t){var n={};return ee(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=re(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));var Z=ne((function(e,t){var n={};return ee(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||re(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n}));ne((function(e,t){var n={};return ee(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var s=re(this.$store,"mapActions",e);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function ee(e){return te(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function te(e){return Array.isArray(e)||p(e)}function ne(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function re(e,t,n){var r=e._modulesNamespaceMap[n];return r}},180:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(444),i=n(463),s=n(816),o=n(333);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new i.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
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
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},l=new r.LL("app-compat","Firebase",c);
/**
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
 */
function u(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:u,removeApp:i,useAsService:h,modularAPIs:s}};function i(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,r.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}function a(i,o={}){const a=s.initializeApp(i,o);if((0,r.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function u(t){const i=t.name,a=i.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw l.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&(0,r.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
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
 */function h(){const e=u(a);function t(t){(0,r.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r.ne,ErrorFactory:r.LL,deepExtend:r.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.37";
/**
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
 */
/**
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
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,r.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const _=d;g()},816:function(e,t,n){n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ve},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return le},_addOrOverwriteComponent:function(){return ue},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ee},getApp:function(){return be},getApps:function(){return we},initializeApp:function(){return ye},onLog:function(){return Te},registerVersion:function(){return ke},setLogLevel:function(){return Ie}});var r=n(463),i=n(333),s=n(444);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(E(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function _(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let v={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function y(e){v=e(v)}function b(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(e)?function(...t){return e.apply(k(this),t),E(h.get(this))}:function(...t){return E(e.apply(k(this),t))}:function(t,...n){const r=e.call(k(this),t,...n);return f.set(r,t.sort?t.sort():[t]),E(r)}}function w(e){return"function"===typeof e?b(e):(e instanceof IDBTransaction&&_(e),o(e,l())?new Proxy(e,v):e)}function E(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=w(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const k=e=>m.get(e);function T(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=E(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(E(o.result),e.oldVersion,e.newVersion,E(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const I=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],A=new Map;function O(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(A.get(t))return A.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!I.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return A.set(t,s),s}y((e=>({...e,get:(t,n,r)=>O(t,n)||e.get(t,n,r),has:(t,n)=>!!O(t,n)||e.has(t,n)})));
/**
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
 */
class C{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(R(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function R(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const P="@firebase/app",x="0.8.2",N=new i.Yd("@firebase/app"),L="@firebase/app-compat",D="@firebase/analytics-compat",M="@firebase/analytics",U="@firebase/app-check-compat",$="@firebase/app-check",F="@firebase/auth",j="@firebase/auth-compat",V="@firebase/database",B="@firebase/database-compat",H="@firebase/functions",z="@firebase/functions-compat",q="@firebase/installations",W="@firebase/installations-compat",G="@firebase/messaging",K="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Y="@firebase/remote-config",Q="@firebase/remote-config-compat",Z="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",re="firebase",ie="9.12.1",se="[DEFAULT]",oe={[P]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[D]:"fire-analytics-compat",[$]:"fire-app-check",[U]:"fire-app-check-compat",[F]:"fire-auth",[j]:"fire-auth-compat",[V]:"fire-rtdb",[B]:"fire-rtdb-compat",[H]:"fire-fn",[z]:"fire-fn-compat",[q]:"fire-iid",[W]:"fire-iid-compat",[G]:"fire-fcm",[K]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Y]:"fire-rc",[Q]:"fire-rc-compat",[Z]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[re]:"fire-js-all"},ae=new Map,ce=new Map;function le(e,t){try{e.container.addComponent(t)}catch(n){N.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ue(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return N.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())le(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
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
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
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
 */
class _e{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
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
 */const ve=ie;function ye(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=i.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ce.values())c.addComponent(r);const l=new _e(n,i,c);return ae.set(o,l),l}function be(e=se){const t=ae.get(e);if(!t&&e===se)return ye();if(!t)throw ge.create("no-app",{appName:e});return t}function we(){return Array.from(ae.values())}async function Ee(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function ke(e,t,n){var i;let s=null!==(i=oe[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void N.warn(e.join(" "))}he(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Te(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,i.Am)(e,t)}function Ie(e){(0,i.Ub)(e)}
/**
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
 */const Se="firebase-heartbeat-database",Ae=1,Oe="firebase-heartbeat-store";let Ce=null;function Re(){return Ce||(Ce=T(Se,Ae,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Oe)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ce}async function Pe(e){var t;try{const t=await Re();return t.transaction(Oe).objectStore(Oe).get(Ne(e))}catch(n){if(n instanceof s.ZR)N.warn(n.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message});N.warn(e.message)}}}async function xe(e,t){var n;try{const n=await Re(),r=n.transaction(Oe,"readwrite"),i=r.objectStore(Oe);return await i.put(t,Ne(e)),r.done}catch(r){if(r instanceof s.ZR)N.warn(r.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message});N.warn(e.message)}}}function Ne(e){return`${e.name}!${e.options.appId}`}
/**
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
 */const Le=1024,De=2592e6;class Me{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Fe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Ue();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=De})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ue(),{heartbeatsToSend:t,unsentEntries:n}=$e(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Ue(){const e=new Date;return e.toISOString().substring(0,10)}function $e(e,t=Le){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),je(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),je(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Fe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Pe(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return xe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function je(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
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
 */function Ve(e){he(new r.wA("platform-logger",(e=>new C(e)),"PRIVATE")),he(new r.wA("heartbeat",(e=>new Me(e)),"PRIVATE")),ke(P,x,e),ke(P,x,"esm2017"),ke("fire-js","")}Ve("")},463:function(e,t,n){n.d(t,{H0:function(){return l},wA:function(){return i}});var r=n(444);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
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
 */const s="[DEFAULT]";
/**
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
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
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
 */class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},333:function(e,t,n){n.d(t,{Am:function(){return h},Ub:function(){return u},Yd:function(){return l},in:function(){return i}});
/**
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
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class l{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function u(e){r.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:o,args:s,type:t.name})}}}}}]);
//# sourceMappingURL=chunk-vendors.eccb9563.js.map