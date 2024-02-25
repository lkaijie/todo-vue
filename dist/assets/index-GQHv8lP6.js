var UL=Object.defineProperty;var qL=(t,e,n)=>e in t?UL(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var h1=(t,e,n)=>(qL(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function da(t,e){const n=Object.create(null),c=t.split(",");for(let r=0;r<c.length;r++)n[c[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}const I2={},m6=[],P3=()=>{},WL=()=>!1,ir=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ma=t=>t.startsWith("onUpdate:"),n1=Object.assign,pa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jL=Object.prototype.hasOwnProperty,g2=(t,e)=>jL.call(t,e),Y=Array.isArray,p6=t=>E0(t)==="[object Map]",ar=t=>E0(t)==="[object Set]",O7=t=>E0(t)==="[object Date]",n2=t=>typeof t=="function",J2=t=>typeof t=="string",q4=t=>typeof t=="symbol",A2=t=>t!==null&&typeof t=="object",va=t=>(A2(t)||n2(t))&&n2(t.then)&&n2(t.catch),Du=Object.prototype.toString,E0=t=>Du.call(t),$L=t=>E0(t).slice(8,-1),Ou=t=>E0(t)==="[object Object]",ga=t=>J2(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$n=da(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),or=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},GL=/-(\w)/g,W3=or(t=>t.replace(GL,(e,n)=>n?n.toUpperCase():"")),KL=/\B([A-Z])/g,$e=or(t=>t.replace(KL,"-$1").toLowerCase()),lr=or(t=>t.charAt(0).toUpperCase()+t.slice(1)),O8=or(t=>t?`on${lr(t)}`:""),Ie=(t,e)=>!Object.is(t,e),Gn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},lc=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},fc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Fu=t=>{const e=J2(t)?Number(t):NaN;return isNaN(e)?t:e};let F7;const xs=()=>F7||(F7=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fr(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++){const c=t[n],r=J2(c)?JL(c):fr(c);if(r)for(const s in r)e[s]=r[s]}return e}else if(J2(t)||A2(t))return t}const QL=/;(?![^(]*\))/g,YL=/:([^]+)/,XL=/\/\*[^]*?\*\//g;function JL(t){const e={};return t.replace(XL,"").split(QL).forEach(n=>{if(n){const c=n.split(YL);c.length>1&&(e[c[0].trim()]=c[1].trim())}}),e}function Gt(t){let e="";if(J2(t))e=t;else if(Y(t))for(let n=0;n<t.length;n++){const c=Gt(t[n]);c&&(e+=c+" ")}else if(A2(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ZL="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ew=da(ZL);function Bu(t){return!!t||t===""}function tw(t,e){if(t.length!==e.length)return!1;let n=!0;for(let c=0;n&&c<t.length;c++)n=ur(t[c],e[c]);return n}function ur(t,e){if(t===e)return!0;let n=O7(t),c=O7(e);if(n||c)return n&&c?t.getTime()===e.getTime():!1;if(n=q4(t),c=q4(e),n||c)return t===e;if(n=Y(t),c=Y(e),n||c)return n&&c?tw(t,e):!1;if(n=A2(t),c=A2(e),n||c){if(!n||!c)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const i in t){const a=t.hasOwnProperty(i),o=e.hasOwnProperty(i);if(a&&!o||!a&&o||!ur(t[i],e[i]))return!1}}return String(t)===String(e)}function nw(t,e){return t.findIndex(n=>ur(n,e))}const cw=t=>J2(t)?t:t==null?"":Y(t)||A2(t)&&(t.toString===Du||!n2(t.toString))?JSON.stringify(t,Uu,2):String(t),Uu=(t,e)=>e&&e.__v_isRef?Uu(t,e.value):p6(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[c,r],s)=>(n[F8(c,s)+" =>"]=r,n),{})}:ar(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>F8(n))}:q4(e)?F8(e):A2(e)&&!Y(e)&&!Ou(e)?String(e):e,F8=(t,e="")=>{var n;return q4(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let G1;class rw{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=G1,!e&&G1&&(this.index=(G1.scopes||(G1.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=G1;try{return G1=this,e()}finally{G1=n}}}on(){G1=this}off(){G1=this.parent}stop(e){if(this._active){let n,c;for(n=0,c=this.effects.length;n<c;n++)this.effects[n].stop();for(n=0,c=this.cleanups.length;n<c;n++)this.cleanups[n]();if(this.scopes)for(n=0,c=this.scopes.length;n<c;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function sw(t,e=G1){e&&e.active&&e.effects.push(t)}function _a(){return G1}function qu(t){G1&&G1.cleanups.push(t)}const Ca=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Wu=t=>(t.w&W4)>0,ju=t=>(t.n&W4)>0,iw=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=W4},aw=t=>{const{deps:e}=t;if(e.length){let n=0;for(let c=0;c<e.length;c++){const r=e[c];Wu(r)&&!ju(r)?r.delete(t):e[n++]=r,r.w&=~W4,r.n&=~W4}e.length=n}},Is=new WeakMap;let Ht=0,W4=1;const ks=30;let h3;const Te=Symbol(""),Rs=Symbol("");class Va{constructor(e,n=null,c){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,sw(this,c)}run(){if(!this.active)return this.fn();let e=h3,n=R4;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=h3,h3=this,R4=!0,W4=1<<++Ht,Ht<=ks?iw(this):B7(this),this.fn()}finally{Ht<=ks&&aw(this),W4=1<<--Ht,h3=this.parent,R4=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){h3===this?this.deferStop=!0:this.active&&(B7(this),this.onStop&&this.onStop(),this.active=!1)}}function B7(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let R4=!0;const $u=[];function K6(){$u.push(R4),R4=!1}function Q6(){const t=$u.pop();R4=t===void 0?!0:t}function j1(t,e,n){if(R4&&h3){let c=Is.get(t);c||Is.set(t,c=new Map);let r=c.get(n);r||c.set(n,r=Ca()),Gu(r)}}function Gu(t,e){let n=!1;Ht<=ks?ju(t)||(t.n|=W4,n=!Wu(t)):n=!t.has(h3),n&&(t.add(h3),h3.deps.push(t))}function f4(t,e,n,c,r,s){const i=Is.get(t);if(!i)return;let a=[];if(e==="clear")a=[...i.values()];else if(n==="length"&&Y(t)){const o=Number(c);i.forEach((l,f)=>{(f==="length"||!q4(f)&&f>=o)&&a.push(l)})}else switch(n!==void 0&&a.push(i.get(n)),e){case"add":Y(t)?ga(n)&&a.push(i.get("length")):(a.push(i.get(Te)),p6(t)&&a.push(i.get(Rs)));break;case"delete":Y(t)||(a.push(i.get(Te)),p6(t)&&a.push(i.get(Rs)));break;case"set":p6(t)&&a.push(i.get(Te));break}if(a.length===1)a[0]&&Ps(a[0]);else{const o=[];for(const l of a)l&&o.push(...l);Ps(Ca(o))}}function Ps(t,e){const n=Y(t)?t:[...t];for(const c of n)c.computed&&U7(c);for(const c of n)c.computed||U7(c)}function U7(t,e){(t!==h3||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ow=da("__proto__,__v_isRef,__isVue"),Ku=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(q4)),q7=lw();function lw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const c=_2(this);for(let s=0,i=this.length;s<i;s++)j1(c,"get",s+"");const r=c[e](...n);return r===-1||r===!1?c[e](...n.map(_2)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){K6();const c=_2(this)[e].apply(this,n);return Q6(),c}}),t}function fw(t){const e=_2(this);return j1(e,"has",t),e.hasOwnProperty(t)}class Qu{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,c){const r=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return c===(r?s?Mw:Zu:s?Ju:Xu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(c)?e:void 0;const i=Y(e);if(!r){if(i&&g2(q7,n))return Reflect.get(q7,n,c);if(n==="hasOwnProperty")return fw}const a=Reflect.get(e,n,c);return(q4(n)?Ku.has(n):ow(n))||(r||j1(e,"get",n),s)?a:A1(a)?i&&ga(n)?a:a.value:A2(a)?r?th(a):Y6(a):a}}class Yu extends Qu{constructor(e=!1){super(!1,e)}set(e,n,c,r){let s=e[n];if(!this._shallow){const o=E6(s);if(!uc(c)&&!E6(c)&&(s=_2(s),c=_2(c)),!Y(e)&&A1(s)&&!A1(c))return o?!1:(s.value=c,!0)}const i=Y(e)&&ga(n)?Number(n)<e.length:g2(e,n),a=Reflect.set(e,n,c,r);return e===_2(r)&&(i?Ie(c,s)&&f4(e,"set",n,c):f4(e,"add",n,c)),a}deleteProperty(e,n){const c=g2(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&c&&f4(e,"delete",n,void 0),r}has(e,n){const c=Reflect.has(e,n);return(!q4(n)||!Ku.has(n))&&j1(e,"has",n),c}ownKeys(e){return j1(e,"iterate",Y(e)?"length":Te),Reflect.ownKeys(e)}}class uw extends Qu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const hw=new Yu,dw=new uw,mw=new Yu(!0),Ha=t=>t,hr=t=>Reflect.getPrototypeOf(t);function gn(t,e,n=!1,c=!1){t=t.__v_raw;const r=_2(t),s=_2(e);n||(Ie(e,s)&&j1(r,"get",e),j1(r,"get",s));const{has:i}=hr(r),a=c?Ha:n?ya:Kt;if(i.call(r,e))return a(t.get(e));if(i.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function _n(t,e=!1){const n=this.__v_raw,c=_2(n),r=_2(t);return e||(Ie(t,r)&&j1(c,"has",t),j1(c,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function Cn(t,e=!1){return t=t.__v_raw,!e&&j1(_2(t),"iterate",Te),Reflect.get(t,"size",t)}function W7(t){t=_2(t);const e=_2(this);return hr(e).has.call(e,t)||(e.add(t),f4(e,"add",t,t)),this}function j7(t,e){e=_2(e);const n=_2(this),{has:c,get:r}=hr(n);let s=c.call(n,t);s||(t=_2(t),s=c.call(n,t));const i=r.call(n,t);return n.set(t,e),s?Ie(e,i)&&f4(n,"set",t,e):f4(n,"add",t,e),this}function $7(t){const e=_2(this),{has:n,get:c}=hr(e);let r=n.call(e,t);r||(t=_2(t),r=n.call(e,t)),c&&c.call(e,t);const s=e.delete(t);return r&&f4(e,"delete",t,void 0),s}function G7(){const t=_2(this),e=t.size!==0,n=t.clear();return e&&f4(t,"clear",void 0,void 0),n}function Vn(t,e){return function(c,r){const s=this,i=s.__v_raw,a=_2(i),o=e?Ha:t?ya:Kt;return!t&&j1(a,"iterate",Te),i.forEach((l,f)=>c.call(r,o(l),o(f),s))}}function Hn(t,e,n){return function(...c){const r=this.__v_raw,s=_2(r),i=p6(s),a=t==="entries"||t===Symbol.iterator&&i,o=t==="keys"&&i,l=r[t](...c),f=n?Ha:e?ya:Kt;return!e&&j1(s,"iterate",o?Rs:Te),{next(){const{value:u,done:h}=l.next();return h?{value:u,done:h}:{value:a?[f(u[0]),f(u[1])]:f(u),done:h}},[Symbol.iterator](){return this}}}}function M4(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function pw(){const t={get(s){return gn(this,s)},get size(){return Cn(this)},has:_n,add:W7,set:j7,delete:$7,clear:G7,forEach:Vn(!1,!1)},e={get(s){return gn(this,s,!1,!0)},get size(){return Cn(this)},has:_n,add:W7,set:j7,delete:$7,clear:G7,forEach:Vn(!1,!0)},n={get(s){return gn(this,s,!0)},get size(){return Cn(this,!0)},has(s){return _n.call(this,s,!0)},add:M4("add"),set:M4("set"),delete:M4("delete"),clear:M4("clear"),forEach:Vn(!0,!1)},c={get(s){return gn(this,s,!0,!0)},get size(){return Cn(this,!0)},has(s){return _n.call(this,s,!0)},add:M4("add"),set:M4("set"),delete:M4("delete"),clear:M4("clear"),forEach:Vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Hn(s,!1,!1),n[s]=Hn(s,!0,!1),e[s]=Hn(s,!1,!0),c[s]=Hn(s,!0,!0)}),[t,n,e,c]}const[vw,gw,_w,Cw]=pw();function za(t,e){const n=e?t?Cw:_w:t?gw:vw;return(c,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?c:Reflect.get(g2(n,r)&&r in c?n:c,r,s)}const Vw={get:za(!1,!1)},Hw={get:za(!1,!0)},zw={get:za(!0,!1)},Xu=new WeakMap,Ju=new WeakMap,Zu=new WeakMap,Mw=new WeakMap;function yw(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Lw(t){return t.__v_skip||!Object.isExtensible(t)?0:yw($L(t))}function Y6(t){return E6(t)?t:Ma(t,!1,hw,Vw,Xu)}function eh(t){return Ma(t,!1,mw,Hw,Ju)}function th(t){return Ma(t,!0,dw,zw,Zu)}function Ma(t,e,n,c,r){if(!A2(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const i=Lw(t);if(i===0)return t;const a=new Proxy(t,i===2?c:n);return r.set(t,a),a}function v6(t){return E6(t)?v6(t.__v_raw):!!(t&&t.__v_isReactive)}function E6(t){return!!(t&&t.__v_isReadonly)}function uc(t){return!!(t&&t.__v_isShallow)}function nh(t){return v6(t)||E6(t)}function _2(t){const e=t&&t.__v_raw;return e?_2(e):t}function ch(t){return lc(t,"__v_skip",!0),t}const Kt=t=>A2(t)?Y6(t):t,ya=t=>A2(t)?th(t):t;function rh(t){R4&&h3&&(t=_2(t),Gu(t.dep||(t.dep=Ca())))}function sh(t,e){t=_2(t);const n=t.dep;n&&Ps(n)}function A1(t){return!!(t&&t.__v_isRef===!0)}function R1(t){return ah(t,!1)}function ih(t){return ah(t,!0)}function ah(t,e){return A1(t)?t:new ww(t,e)}class ww{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:_2(e),this._value=n?e:Kt(e)}get value(){return rh(this),this._value}set value(e){const n=this.__v_isShallow||uc(e)||E6(e);e=n?e:_2(e),Ie(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Kt(e),sh(this))}}function T2(t){return A1(t)?t.value:t}function t4(t){return n2(t)?t():T2(t)}const bw={get:(t,e,n)=>T2(Reflect.get(t,e,n)),set:(t,e,n,c)=>{const r=t[e];return A1(r)&&!A1(n)?(r.value=n,!0):Reflect.set(t,e,n,c)}};function oh(t){return v6(t)?t:new Proxy(t,bw)}class Sw{constructor(e,n,c,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Va(e,()=>{this._dirty||(this._dirty=!0,sh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=c}get value(){const e=_2(this);return rh(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Tw(t,e,n=!1){let c,r;const s=n2(t);return s?(c=t,r=P3):(c=t.get,r=t.set),new Sw(c,r,s||!r,n)}function P4(t,e,n,c){let r;try{r=c?t(...c):t()}catch(s){N0(s,e,n)}return r}function r3(t,e,n,c){if(n2(t)){const s=P4(t,e,n,c);return s&&va(s)&&s.catch(i=>{N0(i,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(r3(t[s],e,n,c));return r}function N0(t,e,n,c=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const i=e.proxy,a=n;for(;s;){const l=s.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,i,a)===!1)return}s=s.parent}const o=e.appContext.config.errorHandler;if(o){P4(o,null,10,[t,i,a]);return}}Aw(t,n,r,c)}function Aw(t,e,n,c=!0){console.error(t)}let Qt=!1,Ds=!1;const y1=[];let T3=0;const g6=[];let n4=null,pe=0;const lh=Promise.resolve();let La=null;function dr(t){const e=La||lh;return t?e.then(this?t.bind(this):t):e}function Ew(t){let e=T3+1,n=y1.length;for(;e<n;){const c=e+n>>>1,r=y1[c],s=Yt(r);s<t||s===t&&r.pre?e=c+1:n=c}return e}function wa(t){(!y1.length||!y1.includes(t,Qt&&t.allowRecurse?T3+1:T3))&&(t.id==null?y1.push(t):y1.splice(Ew(t.id),0,t),fh())}function fh(){!Qt&&!Ds&&(Ds=!0,La=lh.then(hh))}function Nw(t){const e=y1.indexOf(t);e>T3&&y1.splice(e,1)}function Os(t){Y(t)?g6.push(...t):(!n4||!n4.includes(t,t.allowRecurse?pe+1:pe))&&g6.push(t),fh()}function K7(t,e,n=Qt?T3+1:0){for(;n<y1.length;n++){const c=y1[n];if(c&&c.pre){if(t&&c.id!==t.uid)continue;y1.splice(n,1),n--,c()}}}function uh(t){if(g6.length){const e=[...new Set(g6)];if(g6.length=0,n4){n4.push(...e);return}for(n4=e,n4.sort((n,c)=>Yt(n)-Yt(c)),pe=0;pe<n4.length;pe++)n4[pe]();n4=null,pe=0}}const Yt=t=>t.id==null?1/0:t.id,xw=(t,e)=>{const n=Yt(t)-Yt(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function hh(t){Ds=!1,Qt=!0,y1.sort(xw);try{for(T3=0;T3<y1.length;T3++){const e=y1[T3];e&&e.active!==!1&&P4(e,null,14)}}finally{T3=0,y1.length=0,uh(),Qt=!1,La=null,(y1.length||g6.length)&&hh()}}function Iw(t,e,...n){if(t.isUnmounted)return;const c=t.vnode.props||I2;let r=n;const s=e.startsWith("update:"),i=s&&e.slice(7);if(i&&i in c){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:h}=c[f]||I2;h&&(r=n.map(d=>J2(d)?d.trim():d)),u&&(r=n.map(fc))}let a,o=c[a=O8(e)]||c[a=O8(W3(e))];!o&&s&&(o=c[a=O8($e(e))]),o&&r3(o,t,6,r);const l=c[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,r3(l,t,6,r)}}function dh(t,e,n=!1){const c=e.emitsCache,r=c.get(t);if(r!==void 0)return r;const s=t.emits;let i={},a=!1;if(!n2(t)){const o=l=>{const f=dh(l,e,!0);f&&(a=!0,n1(i,f))};!n&&e.mixins.length&&e.mixins.forEach(o),t.extends&&o(t.extends),t.mixins&&t.mixins.forEach(o)}return!s&&!a?(A2(t)&&c.set(t,null),null):(Y(s)?s.forEach(o=>i[o]=null):n1(i,s),A2(t)&&c.set(t,i),i)}function mr(t,e){return!t||!ir(e)?!1:(e=e.slice(2).replace(/Once$/,""),g2(t,e[0].toLowerCase()+e.slice(1))||g2(t,$e(e))||g2(t,e))}let K1=null,pr=null;function hc(t){const e=K1;return K1=t,pr=t&&t.type.__scopeId||null,e}function ba(t){pr=t}function Sa(){pr=null}function Xt(t,e=K1,n){if(!e||t._n)return t;const c=(...r)=>{c._d&&o9(-1);const s=hc(e);let i;try{i=t(...r)}finally{hc(s),c._d&&o9(1)}return i};return c._n=!0,c._c=!0,c._d=!0,c}function B8(t){const{type:e,vnode:n,proxy:c,withProxy:r,props:s,propsOptions:[i],slots:a,attrs:o,emit:l,render:f,renderCache:u,data:h,setupState:d,ctx:m,inheritAttrs:g}=t;let C,_;const z=hc(t);try{if(n.shapeFlag&4){const V=r||c,S=V;C=u3(f.call(S,V,u,s,d,h,m)),_=o}else{const V=e;C=u3(V.length>1?V(s,{attrs:o,slots:a,emit:l}):V(s,null)),_=e.props?o:Rw(o)}}catch(V){Nt.length=0,N0(V,t,1),C=q2(Y1)}let M=C;if(_&&g!==!1){const V=Object.keys(_),{shapeFlag:S}=M;V.length&&S&7&&(i&&V.some(ma)&&(_=Pw(_,i)),M=j4(M,_))}return n.dirs&&(M=j4(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),C=M,hc(z),C}function kw(t){let e;for(let n=0;n<t.length;n++){const c=t[n];if(pc(c)){if(c.type!==Y1||c.children==="v-if"){if(e)return;e=c}}else return}return e}const Rw=t=>{let e;for(const n in t)(n==="class"||n==="style"||ir(n))&&((e||(e={}))[n]=t[n]);return e},Pw=(t,e)=>{const n={};for(const c in t)(!ma(c)||!(c.slice(9)in e))&&(n[c]=t[c]);return n};function Dw(t,e,n){const{props:c,children:r,component:s}=t,{props:i,children:a,patchFlag:o}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&o>=0){if(o&1024)return!0;if(o&16)return c?Q7(c,i,l):!!i;if(o&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const h=f[u];if(i[h]!==c[h]&&!mr(l,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:c===i?!1:c?i?Q7(c,i,l):!0:!!i;return!1}function Q7(t,e,n){const c=Object.keys(e);if(c.length!==Object.keys(t).length)return!0;for(let r=0;r<c.length;r++){const s=c[r];if(e[s]!==t[s]&&!mr(n,s))return!0}return!1}function Ta({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const mh="components";function Ow(t,e){return Bw(mh,t,!0,e)||t}const Fw=Symbol.for("v-ndc");function Bw(t,e,n=!0,c=!1){const r=K1||o1;if(r){const s=r.type;if(t===mh){const a=Fb(s,!1);if(a&&(a===e||a===W3(e)||a===lr(W3(e))))return s}const i=Y7(r[t]||s[t],e)||Y7(r.appContext[t],e);return!i&&c?s:i}}function Y7(t,e){return t&&(t[e]||t[W3(e)]||t[lr(W3(e))])}const Uw=t=>t.__isSuspense,qw={name:"Suspense",__isSuspense:!0,process(t,e,n,c,r,s,i,a,o,l){t==null?jw(e,n,c,r,s,i,a,o,l):$w(t,e,n,c,r,i,a,o,l)},hydrate:Gw,create:Aa,normalize:Kw},Ww=qw;function Jt(t,e){const n=t.props&&t.props[e];n2(n)&&n()}function jw(t,e,n,c,r,s,i,a,o){const{p:l,o:{createElement:f}}=o,u=f("div"),h=t.suspense=Aa(t,r,c,e,u,n,s,i,a,o);l(null,h.pendingBranch=t.ssContent,u,null,c,h,s,i),h.deps>0?(Jt(t,"onPending"),Jt(t,"onFallback"),l(null,t.ssFallback,e,n,c,null,s,i),_6(h,t.ssFallback)):h.resolve(!1,!0)}function $w(t,e,n,c,r,s,i,a,{p:o,um:l,o:{createElement:f}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:m,pendingBranch:g,isInFallback:C,isHydrating:_}=u;if(g)u.pendingBranch=h,A3(h,g)?(o(g,h,u.hiddenContainer,null,r,u,s,i,a),u.deps<=0?u.resolve():C&&(o(m,d,n,c,r,null,s,i,a),_6(u,d))):(u.pendingId++,_?(u.isHydrating=!1,u.activeBranch=g):l(g,r,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),C?(o(null,h,u.hiddenContainer,null,r,u,s,i,a),u.deps<=0?u.resolve():(o(m,d,n,c,r,null,s,i,a),_6(u,d))):m&&A3(h,m)?(o(m,h,n,c,r,u,s,i,a),u.resolve(!0)):(o(null,h,u.hiddenContainer,null,r,u,s,i,a),u.deps<=0&&u.resolve()));else if(m&&A3(h,m))o(m,h,n,c,r,u,s,i,a),_6(u,h);else if(Jt(e,"onPending"),u.pendingBranch=h,u.pendingId++,o(null,h,u.hiddenContainer,null,r,u,s,i,a),u.deps<=0)u.resolve();else{const{timeout:z,pendingId:M}=u;z>0?setTimeout(()=>{u.pendingId===M&&u.fallback(d)},z):z===0&&u.fallback(d)}}function Aa(t,e,n,c,r,s,i,a,o,l,f=!1){const{p:u,m:h,um:d,n:m,o:{parentNode:g,remove:C}}=l;let _;const z=Yw(t);z&&e!=null&&e.pendingBranch&&(_=e.pendingId,e.deps++);const M=t.props?Fu(t.props.timeout):void 0,V={vnode:t,parent:e,parentComponent:n,isSVG:i,container:c,hiddenContainer:r,anchor:s,deps:0,pendingId:0,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(S=!1,B=!1){const{vnode:G,activeBranch:x,pendingBranch:Q,pendingId:t2,effects:w2,parentComponent:W,container:h2}=V;let j2=!1;if(V.isHydrating)V.isHydrating=!1;else if(!S){j2=x&&Q.transition&&Q.transition.mode==="out-in",j2&&(x.transition.afterLeave=()=>{t2===V.pendingId&&(h(Q,h2,m(x),0),Os(w2))});let{anchor:V2}=V;x&&(V2=m(x),d(x,W,V,!0)),j2||h(Q,h2,V2,0)}_6(V,Q),V.pendingBranch=null,V.isInFallback=!1;let N1=V.parent,B2=!1;for(;N1;){if(N1.pendingBranch){N1.effects.push(...w2),B2=!0;break}N1=N1.parent}!B2&&!j2&&Os(w2),V.effects=[],z&&e&&e.pendingBranch&&_===e.pendingId&&(e.deps--,e.deps===0&&!B&&e.resolve()),Jt(G,"onResolve")},fallback(S){if(!V.pendingBranch)return;const{vnode:B,activeBranch:G,parentComponent:x,container:Q,isSVG:t2}=V;Jt(B,"onFallback");const w2=m(G),W=()=>{V.isInFallback&&(u(null,S,Q,w2,x,null,t2,a,o),_6(V,S))},h2=S.transition&&S.transition.mode==="out-in";h2&&(G.transition.afterLeave=W),V.isInFallback=!0,d(G,x,null,!0),h2||W()},move(S,B,G){V.activeBranch&&h(V.activeBranch,S,B,G),V.container=S},next(){return V.activeBranch&&m(V.activeBranch)},registerDep(S,B){const G=!!V.pendingBranch;G&&V.deps++;const x=S.vnode.el;S.asyncDep.catch(Q=>{N0(Q,S,0)}).then(Q=>{if(S.isUnmounted||V.isUnmounted||V.pendingId!==S.suspenseId)return;S.asyncResolved=!0;const{vnode:t2}=S;Ks(S,Q,!1),x&&(t2.el=x);const w2=!x&&S.subTree.el;B(S,t2,g(x||S.subTree.el),x?null:m(S.subTree),V,i,o),w2&&C(w2),Ta(S,t2.el),G&&--V.deps===0&&V.resolve()})},unmount(S,B){V.isUnmounted=!0,V.activeBranch&&d(V.activeBranch,n,S,B),V.pendingBranch&&d(V.pendingBranch,n,S,B)}};return V}function Gw(t,e,n,c,r,s,i,a,o){const l=e.suspense=Aa(e,c,n,t.parentNode,document.createElement("div"),null,r,s,i,a,!0),f=o(t,l.pendingBranch=e.ssContent,n,l,s,i);return l.deps===0&&l.resolve(!1,!0),f}function Kw(t){const{shapeFlag:e,children:n}=t,c=e&32;t.ssContent=X7(c?n.default:n),t.ssFallback=c?X7(n.fallback):q2(Y1)}function X7(t){let e;if(n2(t)){const n=N6&&t._c;n&&(t._d=!1,t1()),t=t(),n&&(t._d=!0,e=n3,Eh())}return Y(t)&&(t=kw(t)),t=u3(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Qw(t,e){e&&e.pendingBranch?Y(t)?e.effects.push(...t):e.effects.push(t):Os(t)}function _6(t,e){t.activeBranch=e;const{vnode:n,parentComponent:c}=t,r=n.el=e.el;c&&c.subTree===n&&(c.vnode.el=r,Ta(c,r))}function Yw(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const zn={};function D3(t,e,n){return ph(t,e,n)}function ph(t,e,{immediate:n,deep:c,flush:r,onTrack:s,onTrigger:i}=I2){var a;const o=_a()===((a=o1)==null?void 0:a.scope)?o1:null;let l,f=!1,u=!1;if(A1(t)?(l=()=>t.value,f=uc(t)):v6(t)?(l=()=>t,c=!0):Y(t)?(u=!0,f=t.some(V=>v6(V)||uc(V)),l=()=>t.map(V=>{if(A1(V))return V.value;if(v6(V))return Ce(V);if(n2(V))return P4(V,o,2)})):n2(t)?e?l=()=>P4(t,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),r3(t,o,3,[d])}:l=P3,e&&c){const V=l;l=()=>Ce(V())}let h,d=V=>{h=z.onStop=()=>{P4(V,o,4),h=z.onStop=void 0}},m;if(Zt)if(d=P3,e?n&&r3(e,o,3,[l(),u?[]:void 0,d]):l(),r==="sync"){const V=qb();m=V.__watcherHandles||(V.__watcherHandles=[])}else return P3;let g=u?new Array(t.length).fill(zn):zn;const C=()=>{if(z.active)if(e){const V=z.run();(c||f||(u?V.some((S,B)=>Ie(S,g[B])):Ie(V,g)))&&(h&&h(),r3(e,o,3,[V,g===zn?void 0:u&&g[0]===zn?[]:g,d]),g=V)}else z.run()};C.allowRecurse=!!e;let _;r==="sync"?_=C:r==="post"?_=()=>O1(C,o&&o.suspense):(C.pre=!0,o&&(C.id=o.uid),_=()=>wa(C));const z=new Va(l,_);e?n?C():g=z.run():r==="post"?O1(z.run.bind(z),o&&o.suspense):z.run();const M=()=>{z.stop(),o&&o.scope&&pa(o.scope.effects,z)};return m&&m.push(M),M}function Xw(t,e,n){const c=this.proxy,r=J2(t)?t.includes(".")?vh(c,t):()=>c[t]:t.bind(c,c);let s;n2(e)?s=e:(s=e.handler,n=e);const i=o1;$4(this);const a=ph(r,s.bind(c),n);return i?$4(i):D4(),a}function vh(t,e){const n=e.split(".");return()=>{let c=t;for(let r=0;r<n.length&&c;r++)c=c[n[r]];return c}}function Ce(t,e){if(!A2(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),A1(t))Ce(t.value,e);else if(Y(t))for(let n=0;n<t.length;n++)Ce(t[n],e);else if(ar(t)||p6(t))t.forEach(n=>{Ce(n,e)});else if(Ou(t))for(const n in t)Ce(t[n],e);return t}function zt(t,e){const n=K1;if(n===null)return t;const c=Vr(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,o,l=I2]=e[s];i&&(n2(i)&&(i={mounted:i,updated:i}),i.deep&&Ce(a),r.push({dir:i,instance:c,value:a,oldValue:void 0,arg:o,modifiers:l}))}return t}function oe(t,e,n,c){const r=t.dirs,s=e&&e.dirs;for(let i=0;i<r.length;i++){const a=r[i];s&&(a.oldValue=s[i].value);let o=a.dir[c];o&&(K6(),r3(o,n,8,[t.el,a,t,e]),Q6())}}const T4=Symbol("_leaveCb"),Mn=Symbol("_enterCb");function Jw(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ea(()=>{t.isMounted=!0}),Hh(()=>{t.isUnmounting=!0}),t}const e3=[Function,Array],gh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:e3,onEnter:e3,onAfterEnter:e3,onEnterCancelled:e3,onBeforeLeave:e3,onLeave:e3,onAfterLeave:e3,onLeaveCancelled:e3,onBeforeAppear:e3,onAppear:e3,onAfterAppear:e3,onAppearCancelled:e3},Zw={name:"BaseTransition",props:gh,setup(t,{slots:e}){const n=x0(),c=Jw();let r;return()=>{const s=e.default&&Ch(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const g of s)if(g.type!==Y1){i=g;break}}const a=_2(t),{mode:o}=a;if(c.isLeaving)return U8(i);const l=J7(i);if(!l)return U8(i);const f=Fs(l,a,c,n);Bs(l,f);const u=n.subTree,h=u&&J7(u);let d=!1;const{getTransitionKey:m}=l.type;if(m){const g=m();r===void 0?r=g:g!==r&&(r=g,d=!0)}if(h&&h.type!==Y1&&(!A3(l,h)||d)){const g=Fs(h,a,c,n);if(Bs(h,g),o==="out-in")return c.isLeaving=!0,g.afterLeave=()=>{c.isLeaving=!1,n.update.active!==!1&&n.update()},U8(i);o==="in-out"&&l.type!==Y1&&(g.delayLeave=(C,_,z)=>{const M=_h(c,h);M[String(h.key)]=h,C[T4]=()=>{_(),C[T4]=void 0,delete f.delayedLeave},f.delayedLeave=z})}return i}}},eb=Zw;function _h(t,e){const{leavingVNodes:n}=t;let c=n.get(e.type);return c||(c=Object.create(null),n.set(e.type,c)),c}function Fs(t,e,n,c){const{appear:r,mode:s,persisted:i=!1,onBeforeEnter:a,onEnter:o,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:u,onLeave:h,onAfterLeave:d,onLeaveCancelled:m,onBeforeAppear:g,onAppear:C,onAfterAppear:_,onAppearCancelled:z}=e,M=String(t.key),V=_h(n,t),S=(x,Q)=>{x&&r3(x,c,9,Q)},B=(x,Q)=>{const t2=Q[1];S(x,Q),Y(x)?x.every(w2=>w2.length<=1)&&t2():x.length<=1&&t2()},G={mode:s,persisted:i,beforeEnter(x){let Q=a;if(!n.isMounted)if(r)Q=g||a;else return;x[T4]&&x[T4](!0);const t2=V[M];t2&&A3(t,t2)&&t2.el[T4]&&t2.el[T4](),S(Q,[x])},enter(x){let Q=o,t2=l,w2=f;if(!n.isMounted)if(r)Q=C||o,t2=_||l,w2=z||f;else return;let W=!1;const h2=x[Mn]=j2=>{W||(W=!0,j2?S(w2,[x]):S(t2,[x]),G.delayedLeave&&G.delayedLeave(),x[Mn]=void 0)};Q?B(Q,[x,h2]):h2()},leave(x,Q){const t2=String(t.key);if(x[Mn]&&x[Mn](!0),n.isUnmounting)return Q();S(u,[x]);let w2=!1;const W=x[T4]=h2=>{w2||(w2=!0,Q(),h2?S(m,[x]):S(d,[x]),x[T4]=void 0,V[t2]===t&&delete V[t2])};V[t2]=t,h?B(h,[x,W]):W()},clone(x){return Fs(x,e,n,c)}};return G}function U8(t){if(vr(t))return t=j4(t),t.children=null,t}function J7(t){return vr(t)?t.children?t.children[0]:void 0:t}function Bs(t,e){t.shapeFlag&6&&t.component?Bs(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ch(t,e=!1,n){let c=[],r=0;for(let s=0;s<t.length;s++){let i=t[s];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:s);i.type===I1?(i.patchFlag&128&&r++,c=c.concat(Ch(i.children,e,a))):(e||i.type!==Y1)&&c.push(a!=null?j4(i,{key:a}):i)}if(r>1)for(let s=0;s<c.length;s++)c[s].patchFlag=-2;return c}/*! #__NO_SIDE_EFFECTS__ */function Q3(t,e){return n2(t)?n1({name:t.name},e,{setup:t}):t}const Kn=t=>!!t.type.__asyncLoader,vr=t=>t.type.__isKeepAlive;function tb(t,e){Vh(t,"a",e)}function nb(t,e){Vh(t,"da",e)}function Vh(t,e,n=o1){const c=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(gr(e,c,n),n){let r=n.parent;for(;r&&r.parent;)vr(r.parent.vnode)&&cb(c,e,n,r),r=r.parent}}function cb(t,e,n,c){const r=gr(e,t,c,!0);Na(()=>{pa(c[e],r)},n)}function gr(t,e,n=o1,c=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;K6(),$4(n);const a=r3(e,n,t,i);return D4(),Q6(),a});return c?r.unshift(s):r.push(s),s}}const V4=t=>(e,n=o1)=>(!Zt||t==="sp")&&gr(t,(...c)=>e(...c),n),rb=V4("bm"),Ea=V4("m"),sb=V4("bu"),ib=V4("u"),Hh=V4("bum"),Na=V4("um"),zh=V4("sp"),ab=V4("rtg"),ob=V4("rtc");function lb(t,e=o1){gr("ec",t,e)}function Z7(t,e,n,c){let r;const s=n&&n[c];if(Y(t)||J2(t)){r=new Array(t.length);for(let i=0,a=t.length;i<a;i++)r[i]=e(t[i],i,void 0,s&&s[i])}else if(typeof t=="number"){r=new Array(t);for(let i=0;i<t;i++)r[i]=e(i+1,i,void 0,s&&s[i])}else if(A2(t))if(t[Symbol.iterator])r=Array.from(t,(i,a)=>e(i,a,void 0,s&&s[a]));else{const i=Object.keys(t);r=new Array(i.length);for(let a=0,o=i.length;a<o;a++){const l=i[a];r[a]=e(t[l],l,a,s&&s[a])}}else r=[];return n&&(n[c]=r),r}const Us=t=>t?Ih(t)?Vr(t)||t.proxy:Us(t.parent):null,Et=n1(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Us(t.parent),$root:t=>Us(t.root),$emit:t=>t.emit,$options:t=>xa(t),$forceUpdate:t=>t.f||(t.f=()=>wa(t.update)),$nextTick:t=>t.n||(t.n=dr.bind(t.proxy)),$watch:t=>Xw.bind(t)}),q8=(t,e)=>t!==I2&&!t.__isScriptSetup&&g2(t,e),fb={get({_:t},e){const{ctx:n,setupState:c,data:r,props:s,accessCache:i,type:a,appContext:o}=t;let l;if(e[0]!=="$"){const d=i[e];if(d!==void 0)switch(d){case 1:return c[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(q8(c,e))return i[e]=1,c[e];if(r!==I2&&g2(r,e))return i[e]=2,r[e];if((l=t.propsOptions[0])&&g2(l,e))return i[e]=3,s[e];if(n!==I2&&g2(n,e))return i[e]=4,n[e];qs&&(i[e]=0)}}const f=Et[e];let u,h;if(f)return e==="$attrs"&&j1(t,"get",e),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==I2&&g2(n,e))return i[e]=4,n[e];if(h=o.config.globalProperties,g2(h,e))return h[e]},set({_:t},e,n){const{data:c,setupState:r,ctx:s}=t;return q8(r,e)?(r[e]=n,!0):c!==I2&&g2(c,e)?(c[e]=n,!0):g2(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:c,appContext:r,propsOptions:s}},i){let a;return!!n[i]||t!==I2&&g2(t,i)||q8(e,i)||(a=s[0])&&g2(a,i)||g2(c,i)||g2(Et,i)||g2(r.config.globalProperties,i)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:g2(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function e9(t){return Y(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function ub(t){const e=x0();let n=t();return D4(),va(n)&&(n=n.catch(c=>{throw $4(e),c})),[n,()=>$4(e)]}let qs=!0;function hb(t){const e=xa(t),n=t.proxy,c=t.ctx;qs=!1,e.beforeCreate&&t9(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:i,watch:a,provide:o,inject:l,created:f,beforeMount:u,mounted:h,beforeUpdate:d,updated:m,activated:g,deactivated:C,beforeDestroy:_,beforeUnmount:z,destroyed:M,unmounted:V,render:S,renderTracked:B,renderTriggered:G,errorCaptured:x,serverPrefetch:Q,expose:t2,inheritAttrs:w2,components:W,directives:h2,filters:j2}=e;if(l&&db(l,c,null),i)for(const V2 in i){const H2=i[V2];n2(H2)&&(c[V2]=H2.bind(n))}if(r){const V2=r.call(n,n);A2(V2)&&(t.data=Y6(V2))}if(qs=!0,s)for(const V2 in s){const H2=s[V2],J3=n2(H2)?H2.bind(n,n):n2(H2.get)?H2.get.bind(n,n):P3,z4=!n2(H2)&&n2(H2.set)?H2.set.bind(n):P3,w3=Q2({get:J3,set:z4});Object.defineProperty(c,V2,{enumerable:!0,configurable:!0,get:()=>w3.value,set:P1=>w3.value=P1})}if(a)for(const V2 in a)Mh(a[V2],c,n,V2);if(o){const V2=n2(o)?o.call(n):o;Reflect.ownKeys(V2).forEach(H2=>{C6(H2,V2[H2])})}f&&t9(f,t,"c");function B2(V2,H2){Y(H2)?H2.forEach(J3=>V2(J3.bind(n))):H2&&V2(H2.bind(n))}if(B2(rb,u),B2(Ea,h),B2(sb,d),B2(ib,m),B2(tb,g),B2(nb,C),B2(lb,x),B2(ob,B),B2(ab,G),B2(Hh,z),B2(Na,V),B2(zh,Q),Y(t2))if(t2.length){const V2=t.exposed||(t.exposed={});t2.forEach(H2=>{Object.defineProperty(V2,H2,{get:()=>n[H2],set:J3=>n[H2]=J3})})}else t.exposed||(t.exposed={});S&&t.render===P3&&(t.render=S),w2!=null&&(t.inheritAttrs=w2),W&&(t.components=W),h2&&(t.directives=h2)}function db(t,e,n=P3){Y(t)&&(t=Ws(t));for(const c in t){const r=t[c];let s;A2(r)?"default"in r?s=q1(r.from||c,r.default,!0):s=q1(r.from||c):s=q1(r),A1(s)?Object.defineProperty(e,c,{enumerable:!0,configurable:!0,get:()=>s.value,set:i=>s.value=i}):e[c]=s}}function t9(t,e,n){r3(Y(t)?t.map(c=>c.bind(e.proxy)):t.bind(e.proxy),e,n)}function Mh(t,e,n,c){const r=c.includes(".")?vh(n,c):()=>n[c];if(J2(t)){const s=e[t];n2(s)&&D3(r,s)}else if(n2(t))D3(r,t.bind(n));else if(A2(t))if(Y(t))t.forEach(s=>Mh(s,e,n,c));else{const s=n2(t.handler)?t.handler.bind(n):e[t.handler];n2(s)&&D3(r,s,t)}}function xa(t){const e=t.type,{mixins:n,extends:c}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:i}}=t.appContext,a=s.get(e);let o;return a?o=a:!r.length&&!n&&!c?o=e:(o={},r.length&&r.forEach(l=>dc(o,l,i,!0)),dc(o,e,i)),A2(e)&&s.set(e,o),o}function dc(t,e,n,c=!1){const{mixins:r,extends:s}=e;s&&dc(t,s,n,!0),r&&r.forEach(i=>dc(t,i,n,!0));for(const i in e)if(!(c&&i==="expose")){const a=mb[i]||n&&n[i];t[i]=a?a(t[i],e[i]):e[i]}return t}const mb={data:n9,props:c9,emits:c9,methods:Mt,computed:Mt,beforeCreate:x1,created:x1,beforeMount:x1,mounted:x1,beforeUpdate:x1,updated:x1,beforeDestroy:x1,beforeUnmount:x1,destroyed:x1,unmounted:x1,activated:x1,deactivated:x1,errorCaptured:x1,serverPrefetch:x1,components:Mt,directives:Mt,watch:vb,provide:n9,inject:pb};function n9(t,e){return e?t?function(){return n1(n2(t)?t.call(this,this):t,n2(e)?e.call(this,this):e)}:e:t}function pb(t,e){return Mt(Ws(t),Ws(e))}function Ws(t){if(Y(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function x1(t,e){return t?[...new Set([].concat(t,e))]:e}function Mt(t,e){return t?n1(Object.create(null),t,e):e}function c9(t,e){return t?Y(t)&&Y(e)?[...new Set([...t,...e])]:n1(Object.create(null),e9(t),e9(e??{})):e}function vb(t,e){if(!t)return e;if(!e)return t;const n=n1(Object.create(null),t);for(const c in e)n[c]=x1(t[c],e[c]);return n}function yh(){return{app:null,config:{isNativeTag:WL,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gb=0;function _b(t,e){return function(c,r=null){n2(c)||(c=n1({},c)),r!=null&&!A2(r)&&(r=null);const s=yh(),i=new WeakSet;let a=!1;const o=s.app={_uid:gb++,_component:c,_props:r,_container:null,_context:s,_instance:null,version:Wb,get config(){return s.config},set config(l){},use(l,...f){return i.has(l)||(l&&n2(l.install)?(i.add(l),l.install(o,...f)):n2(l)&&(i.add(l),l(o,...f))),o},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),o},component(l,f){return f?(s.components[l]=f,o):s.components[l]},directive(l,f){return f?(s.directives[l]=f,o):s.directives[l]},mount(l,f,u){if(!a){const h=q2(c,r);return h.appContext=s,f&&e?e(h,l):t(h,l,u),a=!0,o._container=l,l.__vue_app__=o,Vr(h.component)||h.component.proxy}},unmount(){a&&(t(null,o._container),delete o._container.__vue_app__)},provide(l,f){return s.provides[l]=f,o},runWithContext(l){mc=o;try{return l()}finally{mc=null}}};return o}}let mc=null;function C6(t,e){if(o1){let n=o1.provides;const c=o1.parent&&o1.parent.provides;c===n&&(n=o1.provides=Object.create(c)),n[t]=e}}function q1(t,e,n=!1){const c=o1||K1;if(c||mc){const r=c?c.parent==null?c.vnode.appContext&&c.vnode.appContext.provides:c.parent.provides:mc._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&n2(e)?e.call(c&&c.proxy):e}}function Cb(t,e,n,c=!1){const r={},s={};lc(s,Cr,1),t.propsDefaults=Object.create(null),Lh(t,e,r,s);for(const i in t.propsOptions[0])i in r||(r[i]=void 0);n?t.props=c?r:eh(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Vb(t,e,n,c){const{props:r,attrs:s,vnode:{patchFlag:i}}=t,a=_2(r),[o]=t.propsOptions;let l=!1;if((c||i>0)&&!(i&16)){if(i&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let h=f[u];if(mr(t.emitsOptions,h))continue;const d=e[h];if(o)if(g2(s,h))d!==s[h]&&(s[h]=d,l=!0);else{const m=W3(h);r[m]=js(o,a,m,d,t,!1)}else d!==s[h]&&(s[h]=d,l=!0)}}}else{Lh(t,e,r,s)&&(l=!0);let f;for(const u in a)(!e||!g2(e,u)&&((f=$e(u))===u||!g2(e,f)))&&(o?n&&(n[u]!==void 0||n[f]!==void 0)&&(r[u]=js(o,a,u,void 0,t,!0)):delete r[u]);if(s!==a)for(const u in s)(!e||!g2(e,u))&&(delete s[u],l=!0)}l&&f4(t,"set","$attrs")}function Lh(t,e,n,c){const[r,s]=t.propsOptions;let i=!1,a;if(e)for(let o in e){if($n(o))continue;const l=e[o];let f;r&&g2(r,f=W3(o))?!s||!s.includes(f)?n[f]=l:(a||(a={}))[f]=l:mr(t.emitsOptions,o)||(!(o in c)||l!==c[o])&&(c[o]=l,i=!0)}if(s){const o=_2(n),l=a||I2;for(let f=0;f<s.length;f++){const u=s[f];n[u]=js(r,o,u,l[u],t,!g2(l,u))}}return i}function js(t,e,n,c,r,s){const i=t[n];if(i!=null){const a=g2(i,"default");if(a&&c===void 0){const o=i.default;if(i.type!==Function&&!i.skipFactory&&n2(o)){const{propsDefaults:l}=r;n in l?c=l[n]:($4(r),c=l[n]=o.call(null,e),D4())}else c=o}i[0]&&(s&&!a?c=!1:i[1]&&(c===""||c===$e(n))&&(c=!0))}return c}function wh(t,e,n=!1){const c=e.propsCache,r=c.get(t);if(r)return r;const s=t.props,i={},a=[];let o=!1;if(!n2(t)){const f=u=>{o=!0;const[h,d]=wh(u,e,!0);n1(i,h),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!s&&!o)return A2(t)&&c.set(t,m6),m6;if(Y(s))for(let f=0;f<s.length;f++){const u=W3(s[f]);r9(u)&&(i[u]=I2)}else if(s)for(const f in s){const u=W3(f);if(r9(u)){const h=s[f],d=i[u]=Y(h)||n2(h)?{type:h}:n1({},h);if(d){const m=a9(Boolean,d.type),g=a9(String,d.type);d[0]=m>-1,d[1]=g<0||m<g,(m>-1||g2(d,"default"))&&a.push(u)}}}const l=[i,a];return A2(t)&&c.set(t,l),l}function r9(t){return t[0]!=="$"}function s9(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function i9(t,e){return s9(t)===s9(e)}function a9(t,e){return Y(e)?e.findIndex(n=>i9(n,t)):n2(e)&&i9(e,t)?0:-1}const bh=t=>t[0]==="_"||t==="$stable",Ia=t=>Y(t)?t.map(u3):[u3(t)],Hb=(t,e,n)=>{if(e._n)return e;const c=Xt((...r)=>Ia(e(...r)),n);return c._c=!1,c},Sh=(t,e,n)=>{const c=t._ctx;for(const r in t){if(bh(r))continue;const s=t[r];if(n2(s))e[r]=Hb(r,s,c);else if(s!=null){const i=Ia(s);e[r]=()=>i}}},Th=(t,e)=>{const n=Ia(e);t.slots.default=()=>n},zb=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=_2(e),lc(e,"_",n)):Sh(e,t.slots={})}else t.slots={},e&&Th(t,e);lc(t.slots,Cr,1)},Mb=(t,e,n)=>{const{vnode:c,slots:r}=t;let s=!0,i=I2;if(c.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(n1(r,e),!n&&a===1&&delete r._):(s=!e.$stable,Sh(e,r)),i=e}else e&&(Th(t,e),i={default:1});if(s)for(const a in r)!bh(a)&&i[a]==null&&delete r[a]};function $s(t,e,n,c,r=!1){if(Y(t)){t.forEach((h,d)=>$s(h,e&&(Y(e)?e[d]:e),n,c,r));return}if(Kn(c)&&!r)return;const s=c.shapeFlag&4?Vr(c.component)||c.component.proxy:c.el,i=r?null:s,{i:a,r:o}=t,l=e&&e.r,f=a.refs===I2?a.refs={}:a.refs,u=a.setupState;if(l!=null&&l!==o&&(J2(l)?(f[l]=null,g2(u,l)&&(u[l]=null)):A1(l)&&(l.value=null)),n2(o))P4(o,a,12,[i,f]);else{const h=J2(o),d=A1(o);if(h||d){const m=()=>{if(t.f){const g=h?g2(u,o)?u[o]:f[o]:o.value;r?Y(g)&&pa(g,s):Y(g)?g.includes(s)||g.push(s):h?(f[o]=[s],g2(u,o)&&(u[o]=f[o])):(o.value=[s],t.k&&(f[t.k]=o.value))}else h?(f[o]=i,g2(u,o)&&(u[o]=i)):d&&(o.value=i,t.k&&(f[t.k]=i))};i?(m.id=-1,O1(m,n)):m()}}}const O1=Qw;function yb(t){return Lb(t)}function Lb(t,e){const n=xs();n.__VUE__=!0;const{insert:c,remove:r,patchProp:s,createElement:i,createText:a,createComment:o,setText:l,setElementText:f,parentNode:u,nextSibling:h,setScopeId:d=P3,insertStaticContent:m}=t,g=(p,v,H,y=null,T=null,A=null,F=!1,N=null,I=!!v.dynamicChildren)=>{if(p===v)return;p&&!A3(p,v)&&(y=w(p),P1(p,T,A,!0),p=null),v.patchFlag===-2&&(I=!1,v.dynamicChildren=null);const{type:E,ref:J,shapeFlag:j}=v;switch(E){case _r:C(p,v,H,y);break;case Y1:_(p,v,H,y);break;case W8:p==null&&z(v,H,y,F);break;case I1:W(p,v,H,y,T,A,F,N,I);break;default:j&1?S(p,v,H,y,T,A,F,N,I):j&6?h2(p,v,H,y,T,A,F,N,I):(j&64||j&128)&&E.process(p,v,H,y,T,A,F,N,I,k)}J!=null&&T&&$s(J,p&&p.ref,A,v||p,!v)},C=(p,v,H,y)=>{if(p==null)c(v.el=a(v.children),H,y);else{const T=v.el=p.el;v.children!==p.children&&l(T,v.children)}},_=(p,v,H,y)=>{p==null?c(v.el=o(v.children||""),H,y):v.el=p.el},z=(p,v,H,y)=>{[p.el,p.anchor]=m(p.children,v,H,y,p.el,p.anchor)},M=({el:p,anchor:v},H,y)=>{let T;for(;p&&p!==v;)T=h(p),c(p,H,y),p=T;c(v,H,y)},V=({el:p,anchor:v})=>{let H;for(;p&&p!==v;)H=h(p),r(p),p=H;r(v)},S=(p,v,H,y,T,A,F,N,I)=>{F=F||v.type==="svg",p==null?B(v,H,y,T,A,F,N,I):Q(p,v,T,A,F,N,I)},B=(p,v,H,y,T,A,F,N)=>{let I,E;const{type:J,props:j,shapeFlag:Z,transition:i2,dirs:f2}=p;if(I=p.el=i(p.type,A,j&&j.is,j),Z&8?f(I,p.children):Z&16&&x(p.children,I,null,y,T,A&&J!=="foreignObject",F,N),f2&&oe(p,null,y,"created"),G(I,p,p.scopeId,F,y),j){for(const b2 in j)b2!=="value"&&!$n(b2)&&s(I,b2,null,j[b2],A,p.children,y,T,_1);"value"in j&&s(I,"value",null,j.value),(E=j.onVnodeBeforeMount)&&S3(E,y,p)}f2&&oe(p,null,y,"beforeMount");const E2=wb(T,i2);E2&&i2.beforeEnter(I),c(I,v,H),((E=j&&j.onVnodeMounted)||E2||f2)&&O1(()=>{E&&S3(E,y,p),E2&&i2.enter(I),f2&&oe(p,null,y,"mounted")},T)},G=(p,v,H,y,T)=>{if(H&&d(p,H),y)for(let A=0;A<y.length;A++)d(p,y[A]);if(T){let A=T.subTree;if(v===A){const F=T.vnode;G(p,F,F.scopeId,F.slotScopeIds,T.parent)}}},x=(p,v,H,y,T,A,F,N,I=0)=>{for(let E=I;E<p.length;E++){const J=p[E]=N?A4(p[E]):u3(p[E]);g(null,J,v,H,y,T,A,F,N)}},Q=(p,v,H,y,T,A,F)=>{const N=v.el=p.el;let{patchFlag:I,dynamicChildren:E,dirs:J}=v;I|=p.patchFlag&16;const j=p.props||I2,Z=v.props||I2;let i2;H&&le(H,!1),(i2=Z.onVnodeBeforeUpdate)&&S3(i2,H,v,p),J&&oe(v,p,H,"beforeUpdate"),H&&le(H,!0);const f2=T&&v.type!=="foreignObject";if(E?t2(p.dynamicChildren,E,N,H,y,f2,A):F||H2(p,v,N,null,H,y,f2,A,!1),I>0){if(I&16)w2(N,v,j,Z,H,y,T);else if(I&2&&j.class!==Z.class&&s(N,"class",null,Z.class,T),I&4&&s(N,"style",j.style,Z.style,T),I&8){const E2=v.dynamicProps;for(let b2=0;b2<E2.length;b2++){const $2=E2[b2],l3=j[$2],t6=Z[$2];(t6!==l3||$2==="value")&&s(N,$2,l3,t6,T,p.children,H,y,_1)}}I&1&&p.children!==v.children&&f(N,v.children)}else!F&&E==null&&w2(N,v,j,Z,H,y,T);((i2=Z.onVnodeUpdated)||J)&&O1(()=>{i2&&S3(i2,H,v,p),J&&oe(v,p,H,"updated")},y)},t2=(p,v,H,y,T,A,F)=>{for(let N=0;N<v.length;N++){const I=p[N],E=v[N],J=I.el&&(I.type===I1||!A3(I,E)||I.shapeFlag&70)?u(I.el):H;g(I,E,J,null,y,T,A,F,!0)}},w2=(p,v,H,y,T,A,F)=>{if(H!==y){if(H!==I2)for(const N in H)!$n(N)&&!(N in y)&&s(p,N,H[N],null,F,v.children,T,A,_1);for(const N in y){if($n(N))continue;const I=y[N],E=H[N];I!==E&&N!=="value"&&s(p,N,E,I,F,v.children,T,A,_1)}"value"in y&&s(p,"value",H.value,y.value)}},W=(p,v,H,y,T,A,F,N,I)=>{const E=v.el=p?p.el:a(""),J=v.anchor=p?p.anchor:a("");let{patchFlag:j,dynamicChildren:Z,slotScopeIds:i2}=v;i2&&(N=N?N.concat(i2):i2),p==null?(c(E,H,y),c(J,H,y),x(v.children,H,J,T,A,F,N,I)):j>0&&j&64&&Z&&p.dynamicChildren?(t2(p.dynamicChildren,Z,H,T,A,F,N),(v.key!=null||T&&v===T.subTree)&&Ah(p,v,!0)):H2(p,v,H,J,T,A,F,N,I)},h2=(p,v,H,y,T,A,F,N,I)=>{v.slotScopeIds=N,p==null?v.shapeFlag&512?T.ctx.activate(v,H,y,F,I):j2(v,H,y,T,A,F,I):N1(p,v,I)},j2=(p,v,H,y,T,A,F)=>{const N=p.component=kb(p,y,T);if(vr(p)&&(N.ctx.renderer=k),Rb(N),N.asyncDep){if(T&&T.registerDep(N,B2),!p.el){const I=N.subTree=q2(Y1);_(null,I,v,H)}return}B2(N,p,v,H,T,A,F)},N1=(p,v,H)=>{const y=v.component=p.component;if(Dw(p,v,H))if(y.asyncDep&&!y.asyncResolved){V2(y,v,H);return}else y.next=v,Nw(y.update),y.update();else v.el=p.el,y.vnode=v},B2=(p,v,H,y,T,A,F)=>{const N=()=>{if(p.isMounted){let{next:J,bu:j,u:Z,parent:i2,vnode:f2}=p,E2=J,b2;le(p,!1),J?(J.el=f2.el,V2(p,J,F)):J=f2,j&&Gn(j),(b2=J.props&&J.props.onVnodeBeforeUpdate)&&S3(b2,i2,J,f2),le(p,!0);const $2=B8(p),l3=p.subTree;p.subTree=$2,g(l3,$2,u(l3.el),w(l3),p,T,A),J.el=$2.el,E2===null&&Ta(p,$2.el),Z&&O1(Z,T),(b2=J.props&&J.props.onVnodeUpdated)&&O1(()=>S3(b2,i2,J,f2),T)}else{let J;const{el:j,props:Z}=v,{bm:i2,m:f2,parent:E2}=p,b2=Kn(v);if(le(p,!1),i2&&Gn(i2),!b2&&(J=Z&&Z.onVnodeBeforeMount)&&S3(J,E2,v),le(p,!0),j&&z2){const $2=()=>{p.subTree=B8(p),z2(j,p.subTree,p,T,null)};b2?v.type.__asyncLoader().then(()=>!p.isUnmounted&&$2()):$2()}else{const $2=p.subTree=B8(p);g(null,$2,H,y,p,T,A),v.el=$2.el}if(f2&&O1(f2,T),!b2&&(J=Z&&Z.onVnodeMounted)){const $2=v;O1(()=>S3(J,E2,$2),T)}(v.shapeFlag&256||E2&&Kn(E2.vnode)&&E2.vnode.shapeFlag&256)&&p.a&&O1(p.a,T),p.isMounted=!0,v=H=y=null}},I=p.effect=new Va(N,()=>wa(E),p.scope),E=p.update=()=>I.run();E.id=p.uid,le(p,!0),E()},V2=(p,v,H)=>{v.component=p;const y=p.vnode.props;p.vnode=v,p.next=null,Vb(p,v.props,y,H),Mb(p,v.children,H),K6(),K7(p),Q6()},H2=(p,v,H,y,T,A,F,N,I=!1)=>{const E=p&&p.children,J=p?p.shapeFlag:0,j=v.children,{patchFlag:Z,shapeFlag:i2}=v;if(Z>0){if(Z&128){z4(E,j,H,y,T,A,F,N,I);return}else if(Z&256){J3(E,j,H,y,T,A,F,N,I);return}}i2&8?(J&16&&_1(E,T,A),j!==E&&f(H,j)):J&16?i2&16?z4(E,j,H,y,T,A,F,N,I):_1(E,T,A,!0):(J&8&&f(H,""),i2&16&&x(j,H,y,T,A,F,N,I))},J3=(p,v,H,y,T,A,F,N,I)=>{p=p||m6,v=v||m6;const E=p.length,J=v.length,j=Math.min(E,J);let Z;for(Z=0;Z<j;Z++){const i2=v[Z]=I?A4(v[Z]):u3(v[Z]);g(p[Z],i2,H,null,T,A,F,N,I)}E>J?_1(p,T,A,!0,!1,j):x(v,H,y,T,A,F,N,I,j)},z4=(p,v,H,y,T,A,F,N,I)=>{let E=0;const J=v.length;let j=p.length-1,Z=J-1;for(;E<=j&&E<=Z;){const i2=p[E],f2=v[E]=I?A4(v[E]):u3(v[E]);if(A3(i2,f2))g(i2,f2,H,null,T,A,F,N,I);else break;E++}for(;E<=j&&E<=Z;){const i2=p[j],f2=v[Z]=I?A4(v[Z]):u3(v[Z]);if(A3(i2,f2))g(i2,f2,H,null,T,A,F,N,I);else break;j--,Z--}if(E>j){if(E<=Z){const i2=Z+1,f2=i2<J?v[i2].el:y;for(;E<=Z;)g(null,v[E]=I?A4(v[E]):u3(v[E]),H,f2,T,A,F,N,I),E++}}else if(E>Z)for(;E<=j;)P1(p[E],T,A,!0),E++;else{const i2=E,f2=E,E2=new Map;for(E=f2;E<=Z;E++){const $1=v[E]=I?A4(v[E]):u3(v[E]);$1.key!=null&&E2.set($1.key,E)}let b2,$2=0;const l3=Z-f2+1;let t6=!1,R7=0;const ut=new Array(l3);for(E=0;E<l3;E++)ut[E]=0;for(E=i2;E<=j;E++){const $1=p[E];if($2>=l3){P1($1,T,A,!0);continue}let b3;if($1.key!=null)b3=E2.get($1.key);else for(b2=f2;b2<=Z;b2++)if(ut[b2-f2]===0&&A3($1,v[b2])){b3=b2;break}b3===void 0?P1($1,T,A,!0):(ut[b3-f2]=E+1,b3>=R7?R7=b3:t6=!0,g($1,v[b3],H,null,T,A,F,N,I),$2++)}const P7=t6?bb(ut):m6;for(b2=P7.length-1,E=l3-1;E>=0;E--){const $1=f2+E,b3=v[$1],D7=$1+1<J?v[$1+1].el:y;ut[E]===0?g(null,b3,H,D7,T,A,F,N,I):t6&&(b2<0||E!==P7[b2]?w3(b3,H,D7,2):b2--)}}},w3=(p,v,H,y,T=null)=>{const{el:A,type:F,transition:N,children:I,shapeFlag:E}=p;if(E&6){w3(p.component.subTree,v,H,y);return}if(E&128){p.suspense.move(v,H,y);return}if(E&64){F.move(p,v,H,k);return}if(F===I1){c(A,v,H);for(let j=0;j<I.length;j++)w3(I[j],v,H,y);c(p.anchor,v,H);return}if(F===W8){M(p,v,H);return}if(y!==2&&E&1&&N)if(y===0)N.beforeEnter(A),c(A,v,H),O1(()=>N.enter(A),T);else{const{leave:j,delayLeave:Z,afterLeave:i2}=N,f2=()=>c(A,v,H),E2=()=>{j(A,()=>{f2(),i2&&i2()})};Z?Z(A,f2,E2):E2()}else c(A,v,H)},P1=(p,v,H,y=!1,T=!1)=>{const{type:A,props:F,ref:N,children:I,dynamicChildren:E,shapeFlag:J,patchFlag:j,dirs:Z}=p;if(N!=null&&$s(N,null,H,p,!0),J&256){v.ctx.deactivate(p);return}const i2=J&1&&Z,f2=!Kn(p);let E2;if(f2&&(E2=F&&F.onVnodeBeforeUnmount)&&S3(E2,v,p),J&6)vn(p.component,H,y);else{if(J&128){p.suspense.unmount(H,y);return}i2&&oe(p,null,v,"beforeUnmount"),J&64?p.type.remove(p,v,H,T,k,y):E&&(A!==I1||j>0&&j&64)?_1(E,v,H,!1,!0):(A===I1&&j&384||!T&&J&16)&&_1(I,v,H),y&&Ze(p)}(f2&&(E2=F&&F.onVnodeUnmounted)||i2)&&O1(()=>{E2&&S3(E2,v,p),i2&&oe(p,null,v,"unmounted")},H)},Ze=p=>{const{type:v,el:H,anchor:y,transition:T}=p;if(v===I1){e6(H,y);return}if(v===W8){V(p);return}const A=()=>{r(H),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(p.shapeFlag&1&&T&&!T.persisted){const{leave:F,delayLeave:N}=T,I=()=>F(H,A);N?N(p.el,A,I):I()}else A()},e6=(p,v)=>{let H;for(;p!==v;)H=h(p),r(p),p=H;r(v)},vn=(p,v,H)=>{const{bum:y,scope:T,update:A,subTree:F,um:N}=p;y&&Gn(y),T.stop(),A&&(A.active=!1,P1(F,p,v,H)),N&&O1(N,v),O1(()=>{p.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},_1=(p,v,H,y=!1,T=!1,A=0)=>{for(let F=A;F<p.length;F++)P1(p[F],v,H,y,T)},w=p=>p.shapeFlag&6?w(p.component.subTree):p.shapeFlag&128?p.suspense.next():h(p.anchor||p.el),q=(p,v,H)=>{p==null?v._vnode&&P1(v._vnode,null,null,!0):g(v._vnode||null,p,v,null,null,null,H),K7(),uh(),v._vnode=p},k={p:g,um:P1,m:w3,r:Ze,mt:j2,mc:x,pc:H2,pbc:t2,n:w,o:t};let K,z2;return e&&([K,z2]=e(k)),{render:q,hydrate:K,createApp:_b(q,K)}}function le({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ah(t,e,n=!1){const c=t.children,r=e.children;if(Y(c)&&Y(r))for(let s=0;s<c.length;s++){const i=c[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=A4(r[s]),a.el=i.el),n||Ah(i,a)),a.type===_r&&(a.el=i.el)}}function bb(t){const e=t.slice(),n=[0];let c,r,s,i,a;const o=t.length;for(c=0;c<o;c++){const l=t[c];if(l!==0){if(r=n[n.length-1],t[r]<l){e[c]=r,n.push(c);continue}for(s=0,i=n.length-1;s<i;)a=s+i>>1,t[n[a]]<l?s=a+1:i=a;l<t[n[s]]&&(s>0&&(e[c]=n[s-1]),n[s]=c)}}for(s=n.length,i=n[s-1];s-- >0;)n[s]=i,i=e[i];return n}const Sb=t=>t.__isTeleport,I1=Symbol.for("v-fgt"),_r=Symbol.for("v-txt"),Y1=Symbol.for("v-cmt"),W8=Symbol.for("v-stc"),Nt=[];let n3=null;function t1(t=!1){Nt.push(n3=t?null:[])}function Eh(){Nt.pop(),n3=Nt[Nt.length-1]||null}let N6=1;function o9(t){N6+=t}function Nh(t){return t.dynamicChildren=N6>0?n3||m6:null,Eh(),N6>0&&n3&&n3.push(t),t}function _3(t,e,n,c,r,s){return Nh(o2(t,e,n,c,r,s,!0))}function Ae(t,e,n,c,r){return Nh(q2(t,e,n,c,r,!0))}function pc(t){return t?t.__v_isVNode===!0:!1}function A3(t,e){return t.type===e.type&&t.key===e.key}const Cr="__vInternal",xh=({key:t})=>t??null,Qn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?J2(t)||A1(t)||n2(t)?{i:K1,r:t,k:e,f:!!n}:t:null);function o2(t,e=null,n=null,c=0,r=null,s=t===I1?0:1,i=!1,a=!1){const o={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&xh(e),ref:e&&Qn(e),scopeId:pr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:c,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:K1};return a?(ka(o,n),s&128&&t.normalize(o)):n&&(o.shapeFlag|=J2(n)?8:16),N6>0&&!i&&n3&&(o.patchFlag>0||s&6)&&o.patchFlag!==32&&n3.push(o),o}const q2=Tb;function Tb(t,e=null,n=null,c=0,r=null,s=!1){if((!t||t===Fw)&&(t=Y1),pc(t)){const a=j4(t,e,!0);return n&&ka(a,n),N6>0&&!s&&n3&&(a.shapeFlag&6?n3[n3.indexOf(t)]=a:n3.push(a)),a.patchFlag|=-2,a}if(Bb(t)&&(t=t.__vccOpts),e){e=Ab(e);let{class:a,style:o}=e;a&&!J2(a)&&(e.class=Gt(a)),A2(o)&&(nh(o)&&!Y(o)&&(o=n1({},o)),e.style=fr(o))}const i=J2(t)?1:Uw(t)?128:Sb(t)?64:A2(t)?4:n2(t)?2:0;return o2(t,e,n,c,r,i,s,!0)}function Ab(t){return t?nh(t)||Cr in t?n1({},t):t:null}function j4(t,e,n=!1){const{props:c,ref:r,patchFlag:s,children:i}=t,a=e?Nb(c||{},e):c;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&xh(a),ref:e&&e.ref?n&&r?Y(r)?r.concat(Qn(e)):[r,Qn(e)]:Qn(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==I1?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&j4(t.ssContent),ssFallback:t.ssFallback&&j4(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Gs(t=" ",e=0){return q2(_r,null,t,e)}function Eb(t="",e=!1){return e?(t1(),Ae(Y1,null,t)):q2(Y1,null,t)}function u3(t){return t==null||typeof t=="boolean"?q2(Y1):Y(t)?q2(I1,null,t.slice()):typeof t=="object"?A4(t):q2(_r,null,String(t))}function A4(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:j4(t)}function ka(t,e){let n=0;const{shapeFlag:c}=t;if(e==null)e=null;else if(Y(e))n=16;else if(typeof e=="object")if(c&65){const r=e.default;r&&(r._c&&(r._d=!1),ka(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Cr in e)?e._ctx=K1:r===3&&K1&&(K1.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else n2(e)?(e={default:e,_ctx:K1},n=32):(e=String(e),c&64?(n=16,e=[Gs(e)]):n=8);t.children=e,t.shapeFlag|=n}function Nb(...t){const e={};for(let n=0;n<t.length;n++){const c=t[n];for(const r in c)if(r==="class")e.class!==c.class&&(e.class=Gt([e.class,c.class]));else if(r==="style")e.style=fr([e.style,c.style]);else if(ir(r)){const s=e[r],i=c[r];i&&s!==i&&!(Y(s)&&s.includes(i))&&(e[r]=s?[].concat(s,i):i)}else r!==""&&(e[r]=c[r])}return e}function S3(t,e,n,c=null){r3(t,e,7,[n,c])}const xb=yh();let Ib=0;function kb(t,e,n){const c=t.type,r=(e?e.appContext:t.appContext)||xb,s={uid:Ib++,vnode:t,type:c,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new rw(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wh(c,r),emitsOptions:dh(c,r),emit:null,emitted:null,propsDefaults:I2,inheritAttrs:c.inheritAttrs,ctx:I2,data:I2,props:I2,attrs:I2,slots:I2,refs:I2,setupState:I2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Iw.bind(null,s),t.ce&&t.ce(s),s}let o1=null;const x0=()=>o1||K1;let Ra,n6,l9="__VUE_INSTANCE_SETTERS__";(n6=xs()[l9])||(n6=xs()[l9]=[]),n6.push(t=>o1=t),Ra=t=>{n6.length>1?n6.forEach(e=>e(t)):n6[0](t)};const $4=t=>{Ra(t),t.scope.on()},D4=()=>{o1&&o1.scope.off(),Ra(null)};function Ih(t){return t.vnode.shapeFlag&4}let Zt=!1;function Rb(t,e=!1){Zt=e;const{props:n,children:c}=t.vnode,r=Ih(t);Cb(t,n,r,e),zb(t,c);const s=r?Pb(t,e):void 0;return Zt=!1,s}function Pb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ch(new Proxy(t.ctx,fb));const{setup:c}=n;if(c){const r=t.setupContext=c.length>1?Ob(t):null;$4(t),K6();const s=P4(c,t,0,[t.props,r]);if(Q6(),D4(),va(s)){if(s.then(D4,D4),e)return s.then(i=>{Ks(t,i,e)}).catch(i=>{N0(i,t,0)});t.asyncDep=s}else Ks(t,s,e)}else kh(t,e)}function Ks(t,e,n){n2(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:A2(e)&&(t.setupState=oh(e)),kh(t,n)}let f9;function kh(t,e,n){const c=t.type;if(!t.render){if(!e&&f9&&!c.render){const r=c.template||xa(t).template;if(r){const{isCustomElement:s,compilerOptions:i}=t.appContext.config,{delimiters:a,compilerOptions:o}=c,l=n1(n1({isCustomElement:s,delimiters:a},i),o);c.render=f9(r,l)}}t.render=c.render||P3}{$4(t),K6();try{hb(t)}finally{Q6(),D4()}}}function Db(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return j1(t,"get","$attrs"),e[n]}}))}function Ob(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Db(t)},slots:t.slots,emit:t.emit,expose:e}}function Vr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(oh(ch(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Et)return Et[n](t)},has(e,n){return n in e||n in Et}}))}function Fb(t,e=!0){return n2(t)?t.displayName||t.name:t.name||e&&t.__name}function Bb(t){return n2(t)&&"__vccOpts"in t}const Q2=(t,e)=>Tw(t,e,Zt);function Hr(t,e,n){const c=arguments.length;return c===2?A2(e)&&!Y(e)?pc(e)?q2(t,null,[e]):q2(t,e):q2(t,null,e):(c>3?n=Array.prototype.slice.call(arguments,2):c===3&&pc(n)&&(n=[n]),q2(t,e,n))}const Ub=Symbol.for("v-scx"),qb=()=>q1(Ub),Wb="3.3.13",jb="http://www.w3.org/2000/svg",ve=typeof document<"u"?document:null,u9=ve&&ve.createElement("template"),$b={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,c)=>{const r=e?ve.createElementNS(jb,t):ve.createElement(t,n?{is:n}:void 0);return t==="select"&&c&&c.multiple!=null&&r.setAttribute("multiple",c.multiple),r},createText:t=>ve.createTextNode(t),createComment:t=>ve.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ve.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,c,r,s){const i=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{u9.innerHTML=c?`<svg>${t}</svg>`:t;const a=u9.content;if(c){const o=a.firstChild;for(;o.firstChild;)a.appendChild(o.firstChild);a.removeChild(o)}e.insertBefore(a,n)}return[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},y4="transition",ht="animation",e0=Symbol("_vtc"),Pa=(t,{slots:e})=>Hr(eb,Gb(t),e);Pa.displayName="Transition";const Rh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Pa.props=n1({},gh,Rh);const fe=(t,e=[])=>{Y(t)?t.forEach(n=>n(...e)):t&&t(...e)},h9=t=>t?Y(t)?t.some(e=>e.length>1):t.length>1:!1;function Gb(t){const e={};for(const W in t)W in Rh||(e[W]=t[W]);if(t.css===!1)return e;const{name:n="v",type:c,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:o=s,appearActiveClass:l=i,appearToClass:f=a,leaveFromClass:u=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:d=`${n}-leave-to`}=t,m=Kb(r),g=m&&m[0],C=m&&m[1],{onBeforeEnter:_,onEnter:z,onEnterCancelled:M,onLeave:V,onLeaveCancelled:S,onBeforeAppear:B=_,onAppear:G=z,onAppearCancelled:x=M}=e,Q=(W,h2,j2)=>{ue(W,h2?f:a),ue(W,h2?l:i),j2&&j2()},t2=(W,h2)=>{W._isLeaving=!1,ue(W,u),ue(W,d),ue(W,h),h2&&h2()},w2=W=>(h2,j2)=>{const N1=W?G:z,B2=()=>Q(h2,W,j2);fe(N1,[h2,B2]),d9(()=>{ue(h2,W?o:s),L4(h2,W?f:a),h9(N1)||m9(h2,c,g,B2)})};return n1(e,{onBeforeEnter(W){fe(_,[W]),L4(W,s),L4(W,i)},onBeforeAppear(W){fe(B,[W]),L4(W,o),L4(W,l)},onEnter:w2(!1),onAppear:w2(!0),onLeave(W,h2){W._isLeaving=!0;const j2=()=>t2(W,h2);L4(W,u),Xb(),L4(W,h),d9(()=>{W._isLeaving&&(ue(W,u),L4(W,d),h9(V)||m9(W,c,C,j2))}),fe(V,[W,j2])},onEnterCancelled(W){Q(W,!1),fe(M,[W])},onAppearCancelled(W){Q(W,!0),fe(x,[W])},onLeaveCancelled(W){t2(W),fe(S,[W])}})}function Kb(t){if(t==null)return null;if(A2(t))return[j8(t.enter),j8(t.leave)];{const e=j8(t);return[e,e]}}function j8(t){return Fu(t)}function L4(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[e0]||(t[e0]=new Set)).add(e)}function ue(t,e){e.split(/\s+/).forEach(c=>c&&t.classList.remove(c));const n=t[e0];n&&(n.delete(e),n.size||(t[e0]=void 0))}function d9(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Qb=0;function m9(t,e,n,c){const r=t._endId=++Qb,s=()=>{r===t._endId&&c()};if(n)return setTimeout(s,n);const{type:i,timeout:a,propCount:o}=Yb(t,e);if(!i)return c();const l=i+"end";let f=0;const u=()=>{t.removeEventListener(l,h),s()},h=d=>{d.target===t&&++f>=o&&u()};setTimeout(()=>{f<o&&u()},a+1),t.addEventListener(l,h)}function Yb(t,e){const n=window.getComputedStyle(t),c=m=>(n[m]||"").split(", "),r=c(`${y4}Delay`),s=c(`${y4}Duration`),i=p9(r,s),a=c(`${ht}Delay`),o=c(`${ht}Duration`),l=p9(a,o);let f=null,u=0,h=0;e===y4?i>0&&(f=y4,u=i,h=s.length):e===ht?l>0&&(f=ht,u=l,h=o.length):(u=Math.max(i,l),f=u>0?i>l?y4:ht:null,h=f?f===y4?s.length:o.length:0);const d=f===y4&&/\b(transform|all)(,|$)/.test(c(`${y4}Property`).toString());return{type:f,timeout:u,propCount:h,hasTransform:d}}function p9(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,c)=>v9(n)+v9(t[c])))}function v9(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Xb(){return document.body.offsetHeight}function Jb(t,e,n){const c=t[e0];c&&(e=(e?[e,...c]:[...c]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Zb=Symbol("_vod"),eS=Symbol("");function tS(t,e,n){const c=t.style,r=J2(n);if(n&&!r){if(e&&!J2(e))for(const s in e)n[s]==null&&Qs(c,s,"");for(const s in n)Qs(c,s,n[s])}else{const s=c.display;if(r){if(e!==n){const i=c[eS];i&&(n+=";"+i),c.cssText=n}}else e&&t.removeAttribute("style");Zb in t&&(c.display=s)}}const g9=/\s*!important$/;function Qs(t,e,n){if(Y(n))n.forEach(c=>Qs(t,e,c));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const c=nS(t,e);g9.test(n)?t.setProperty($e(c),n.replace(g9,""),"important"):t[c]=n}}const _9=["Webkit","Moz","ms"],$8={};function nS(t,e){const n=$8[e];if(n)return n;let c=W3(e);if(c!=="filter"&&c in t)return $8[e]=c;c=lr(c);for(let r=0;r<_9.length;r++){const s=_9[r]+c;if(s in t)return $8[e]=s}return e}const C9="http://www.w3.org/1999/xlink";function cS(t,e,n,c,r){if(c&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(C9,e.slice(6,e.length)):t.setAttributeNS(C9,e,n);else{const s=ew(e);n==null||s&&!Bu(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function rS(t,e,n,c,r,s,i){if(e==="innerHTML"||e==="textContent"){c&&i(c,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,f=n??"";l!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let o=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Bu(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(e)}function ge(t,e,n,c){t.addEventListener(e,n,c)}function sS(t,e,n,c){t.removeEventListener(e,n,c)}const V9=Symbol("_vei");function iS(t,e,n,c,r=null){const s=t[V9]||(t[V9]={}),i=s[e];if(c&&i)i.value=c;else{const[a,o]=aS(e);if(c){const l=s[e]=fS(c,r);ge(t,a,l,o)}else i&&(sS(t,a,i,o),s[e]=void 0)}}const H9=/(?:Once|Passive|Capture)$/;function aS(t){let e;if(H9.test(t)){e={};let c;for(;c=t.match(H9);)t=t.slice(0,t.length-c[0].length),e[c[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):$e(t.slice(2)),e]}let G8=0;const oS=Promise.resolve(),lS=()=>G8||(oS.then(()=>G8=0),G8=Date.now());function fS(t,e){const n=c=>{if(!c._vts)c._vts=Date.now();else if(c._vts<=n.attached)return;r3(uS(c,n.value),e,5,[c])};return n.value=t,n.attached=lS(),n}function uS(t,e){if(Y(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(c=>r=>!r._stopped&&c&&c(r))}else return e}const z9=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,hS=(t,e,n,c,r=!1,s,i,a,o)=>{e==="class"?Jb(t,c,r):e==="style"?tS(t,n,c):ir(e)?ma(e)||iS(t,e,n,c,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):dS(t,e,c,r))?rS(t,e,c,s,i,a,o):(e==="true-value"?t._trueValue=c:e==="false-value"&&(t._falseValue=c),cS(t,e,c,r))};function dS(t,e,n,c){if(c)return!!(e==="innerHTML"||e==="textContent"||e in t&&z9(e)&&n2(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return z9(e)&&J2(n)?!1:e in t}const vc=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Y(e)?n=>Gn(e,n):e};function mS(t){t.target.composing=!0}function M9(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const V6=Symbol("_assign"),Yn={created(t,{modifiers:{lazy:e,trim:n,number:c}},r){t[V6]=vc(r);const s=c||r.props&&r.props.type==="number";ge(t,e?"change":"input",i=>{if(i.target.composing)return;let a=t.value;n&&(a=a.trim()),s&&(a=fc(a)),t[V6](a)}),n&&ge(t,"change",()=>{t.value=t.value.trim()}),e||(ge(t,"compositionstart",mS),ge(t,"compositionend",M9),ge(t,"change",M9))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:c,number:r}},s){if(t[V6]=vc(s),t.composing)return;const i=r||t.type==="number"?fc(t.value):t.value,a=e??"";i!==a&&(document.activeElement===t&&t.type!=="range"&&(n||c&&t.value.trim()===a)||(t.value=a))}},pS={deep:!0,created(t,{value:e,modifiers:{number:n}},c){const r=ar(e);ge(t,"change",()=>{const s=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?fc(gc(i)):gc(i));t[V6](t.multiple?r?new Set(s):s:s[0])}),t[V6]=vc(c)},mounted(t,{value:e}){y9(t,e)},beforeUpdate(t,e,n){t[V6]=vc(n)},updated(t,{value:e}){y9(t,e)}};function y9(t,e){const n=t.multiple;if(!(n&&!Y(e)&&!ar(e))){for(let c=0,r=t.options.length;c<r;c++){const s=t.options[c],i=gc(s);if(n)Y(e)?s.selected=nw(e,i)>-1:s.selected=e.has(i);else if(ur(gc(s),e)){t.selectedIndex!==c&&(t.selectedIndex=c);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function gc(t){return"_value"in t?t._value:t.value}const vS=["ctrl","shift","alt","meta"],gS={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>vS.some(n=>t[`${n}Key`]&&!e.includes(n))},Ys=(t,e)=>{const n=t._withMods||(t._withMods={}),c=e.join(".");return n[c]||(n[c]=(r,...s)=>{for(let i=0;i<e.length;i++){const a=gS[e[i]];if(a&&a(r,e))return}return t(r,...s)})},_S={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ph=(t,e)=>{const n=t._withKeys||(t._withKeys={}),c=e.join(".");return n[c]||(n[c]=r=>{if(!("key"in r))return;const s=$e(r.key);if(e.some(i=>i===s||_S[i]===s))return t(r)})},CS=n1({patchProp:hS},$b);let L9;function VS(){return L9||(L9=yb(CS))}const HS=(...t)=>{const e=VS().createApp(...t),{mount:n}=e;return e.mount=c=>{const r=zS(c);if(!r)return;const s=e._component;!n2(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},e};function zS(t){return J2(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const s6=typeof window<"u";function MS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const y2=Object.assign;function K8(t,e){const n={};for(const c in e){const r=e[c];n[c]=V3(r)?r.map(t):t(r)}return n}const xt=()=>{},V3=Array.isArray,yS=/\/$/,LS=t=>t.replace(yS,"");function Q8(t,e,n="/"){let c,r={},s="",i="";const a=e.indexOf("#");let o=e.indexOf("?");return a<o&&a>=0&&(o=-1),o>-1&&(c=e.slice(0,o),s=e.slice(o+1,a>-1?a:e.length),r=t(s)),a>-1&&(c=c||e.slice(0,a),i=e.slice(a,e.length)),c=TS(c??e,n),{fullPath:c+(s&&"?")+s+i,path:c,query:r,hash:i}}function wS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function w9(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bS(t,e,n){const c=e.matched.length-1,r=n.matched.length-1;return c>-1&&c===r&&x6(e.matched[c],n.matched[r])&&Dh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function x6(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!SS(t[n],e[n]))return!1;return!0}function SS(t,e){return V3(t)?b9(t,e):V3(e)?b9(e,t):t===e}function b9(t,e){return V3(e)?t.length===e.length&&t.every((n,c)=>n===e[c]):t.length===1&&t[0]===e}function TS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),c=t.split("/"),r=c[c.length-1];(r===".."||r===".")&&c.push("");let s=n.length-1,i,a;for(i=0;i<c.length;i++)if(a=c[i],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+c.slice(i-(i===c.length?1:0)).join("/")}var t0;(function(t){t.pop="pop",t.push="push"})(t0||(t0={}));var It;(function(t){t.back="back",t.forward="forward",t.unknown=""})(It||(It={}));function AS(t){if(!t)if(s6){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),LS(t)}const ES=/^[^#]+#/;function NS(t,e){return t.replace(ES,"#")+e}function xS(t,e){const n=document.documentElement.getBoundingClientRect(),c=t.getBoundingClientRect();return{behavior:e.behavior,left:c.left-n.left-(e.left||0),top:c.top-n.top-(e.top||0)}}const zr=()=>({left:window.pageXOffset,top:window.pageYOffset});function IS(t){let e;if("el"in t){const n=t.el,c=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?c?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=xS(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function S9(t,e){return(history.state?history.state.position-e:-1)+t}const Xs=new Map;function kS(t,e){Xs.set(t,e)}function RS(t){const e=Xs.get(t);return Xs.delete(t),e}let PS=()=>location.protocol+"//"+location.host;function Oh(t,e){const{pathname:n,search:c,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),w9(o,"")}return w9(n,t)+c+r}function DS(t,e,n,c){let r=[],s=[],i=null;const a=({state:h})=>{const d=Oh(t,location),m=n.value,g=e.value;let C=0;if(h){if(n.value=d,e.value=h,i&&i===m){i=null;return}C=g?h.position-g.position:0}else c(d);r.forEach(_=>{_(n.value,m,{delta:C,type:t0.pop,direction:C?C>0?It.forward:It.back:It.unknown})})};function o(){i=n.value}function l(h){r.push(h);const d=()=>{const m=r.indexOf(h);m>-1&&r.splice(m,1)};return s.push(d),d}function f(){const{history:h}=window;h.state&&h.replaceState(y2({},h.state,{scroll:zr()}),"")}function u(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:o,listen:l,destroy:u}}function T9(t,e,n,c=!1,r=!1){return{back:t,current:e,forward:n,replaced:c,position:window.history.length,scroll:r?zr():null}}function OS(t){const{history:e,location:n}=window,c={value:Oh(t,n)},r={value:e.state};r.value||s(c.value,{back:null,current:c.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(o,l,f){const u=t.indexOf("#"),h=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+o:PS()+t+o;try{e[f?"replaceState":"pushState"](l,"",h),r.value=l}catch(d){console.error(d),n[f?"replace":"assign"](h)}}function i(o,l){const f=y2({},e.state,T9(r.value.back,o,r.value.forward,!0),l,{position:r.value.position});s(o,f,!0),c.value=o}function a(o,l){const f=y2({},r.value,e.state,{forward:o,scroll:zr()});s(f.current,f,!0);const u=y2({},T9(c.value,o,null),{position:f.position+1},l);s(o,u,!1),c.value=o}return{location:c,state:r,push:a,replace:i}}function FS(t){t=AS(t);const e=OS(t),n=DS(t,e.state,e.location,e.replace);function c(s,i=!0){i||n.pauseListeners(),history.go(s)}const r=y2({location:"",base:t,go:c,createHref:NS.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function BS(t){return typeof t=="string"||t&&typeof t=="object"}function Fh(t){return typeof t=="string"||typeof t=="symbol"}const w4={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bh=Symbol("");var A9;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(A9||(A9={}));function I6(t,e){return y2(new Error,{type:t,[Bh]:!0},e)}function Z3(t,e){return t instanceof Error&&Bh in t&&(e==null||!!(t.type&e))}const E9="[^/]+?",US={sensitive:!1,strict:!1,start:!0,end:!0},qS=/[.+*?^${}()[\]/\\]/g;function WS(t,e){const n=y2({},US,e),c=[];let r=n.start?"^":"";const s=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let u=0;u<l.length;u++){const h=l[u];let d=40+(n.sensitive?.25:0);if(h.type===0)u||(r+="/"),r+=h.value.replace(qS,"\\$&"),d+=40;else if(h.type===1){const{value:m,repeatable:g,optional:C,regexp:_}=h;s.push({name:m,repeatable:g,optional:C});const z=_||E9;if(z!==E9){d+=10;try{new RegExp(`(${z})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${m}" (${z}): `+V.message)}}let M=g?`((?:${z})(?:/(?:${z}))*)`:`(${z})`;u||(M=C&&l.length<2?`(?:/${M})`:"/"+M),C&&(M+="?"),r+=M,d+=20,C&&(d+=-8),g&&(d+=-20),z===".*"&&(d+=-50)}f.push(d)}c.push(f)}if(n.strict&&n.end){const l=c.length-1;c[l][c[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function a(l){const f=l.match(i),u={};if(!f)return null;for(let h=1;h<f.length;h++){const d=f[h]||"",m=s[h-1];u[m.name]=d&&m.repeatable?d.split("/"):d}return u}function o(l){let f="",u=!1;for(const h of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const d of h)if(d.type===0)f+=d.value;else if(d.type===1){const{value:m,repeatable:g,optional:C}=d,_=m in l?l[m]:"";if(V3(_)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const z=V3(_)?_.join("/"):_;if(!z)if(C)h.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${m}"`);f+=z}}return f||"/"}return{re:i,score:c,keys:s,parse:a,stringify:o}}function jS(t,e){let n=0;for(;n<t.length&&n<e.length;){const c=e[n]-t[n];if(c)return c;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function $S(t,e){let n=0;const c=t.score,r=e.score;for(;n<c.length&&n<r.length;){const s=jS(c[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-c.length)===1){if(N9(c))return 1;if(N9(r))return-1}return r.length-c.length}function N9(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const GS={type:0,value:""},KS=/[a-zA-Z0-9_]/;function QS(t){if(!t)return[[]];if(t==="/")return[[GS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${l}": ${d}`)}let n=0,c=n;const r=[];let s;function i(){s&&r.push(s),s=[]}let a=0,o,l="",f="";function u(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(o==="*"||o==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:f,repeatable:o==="*"||o==="+",optional:o==="*"||o==="?"})):e("Invalid state to consume buffer"),l="")}function h(){l+=o}for(;a<t.length;){if(o=t[a++],o==="\\"&&n!==2){c=n,n=4;continue}switch(n){case 0:o==="/"?(l&&u(),i()):o===":"?(u(),n=1):h();break;case 4:h(),n=c;break;case 1:o==="("?n=2:KS.test(o)?h():(u(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&a--);break;case 2:o===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+o:n=3:f+=o;break;case 3:u(),n=0,o!=="*"&&o!=="?"&&o!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),i(),r}function YS(t,e,n){const c=WS(QS(t.path),n),r=y2(c,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function XS(t,e){const n=[],c=new Map;e=k9({strict:!1,end:!0,sensitive:!1},e);function r(f){return c.get(f)}function s(f,u,h){const d=!h,m=JS(f);m.aliasOf=h&&h.record;const g=k9(e,f),C=[m];if("alias"in f){const M=typeof f.alias=="string"?[f.alias]:f.alias;for(const V of M)C.push(y2({},m,{components:h?h.record.components:m.components,path:V,aliasOf:h?h.record:m}))}let _,z;for(const M of C){const{path:V}=M;if(u&&V[0]!=="/"){const S=u.record.path,B=S[S.length-1]==="/"?"":"/";M.path=u.record.path+(V&&B+V)}if(_=YS(M,u,g),h?h.alias.push(_):(z=z||_,z!==_&&z.alias.push(_),d&&f.name&&!I9(_)&&i(f.name)),m.children){const S=m.children;for(let B=0;B<S.length;B++)s(S[B],_,h&&h.children[B])}h=h||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&o(_)}return z?()=>{i(z)}:xt}function i(f){if(Fh(f)){const u=c.get(f);u&&(c.delete(f),n.splice(n.indexOf(u),1),u.children.forEach(i),u.alias.forEach(i))}else{const u=n.indexOf(f);u>-1&&(n.splice(u,1),f.record.name&&c.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function a(){return n}function o(f){let u=0;for(;u<n.length&&$S(f,n[u])>=0&&(f.record.path!==n[u].record.path||!Uh(f,n[u]));)u++;n.splice(u,0,f),f.record.name&&!I9(f)&&c.set(f.record.name,f)}function l(f,u){let h,d={},m,g;if("name"in f&&f.name){if(h=c.get(f.name),!h)throw I6(1,{location:f});g=h.record.name,d=y2(x9(u.params,h.keys.filter(z=>!z.optional).map(z=>z.name)),f.params&&x9(f.params,h.keys.map(z=>z.name))),m=h.stringify(d)}else if("path"in f)m=f.path,h=n.find(z=>z.re.test(m)),h&&(d=h.parse(m),g=h.record.name);else{if(h=u.name?c.get(u.name):n.find(z=>z.re.test(u.path)),!h)throw I6(1,{location:f,currentLocation:u});g=h.record.name,d=y2({},u.params,f.params),m=h.stringify(d)}const C=[];let _=h;for(;_;)C.unshift(_.record),_=_.parent;return{name:g,path:m,params:d,matched:C,meta:eT(C)}}return t.forEach(f=>s(f)),{addRoute:s,resolve:l,removeRoute:i,getRoutes:a,getRecordMatcher:r}}function x9(t,e){const n={};for(const c of e)c in t&&(n[c]=t[c]);return n}function JS(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ZS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ZS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const c in t.components)e[c]=typeof n=="object"?n[c]:n;return e}function I9(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function eT(t){return t.reduce((e,n)=>y2(e,n.meta),{})}function k9(t,e){const n={};for(const c in t)n[c]=c in e?e[c]:t[c];return n}function Uh(t,e){return e.children.some(n=>n===t||Uh(t,n))}const qh=/#/g,tT=/&/g,nT=/\//g,cT=/=/g,rT=/\?/g,Wh=/\+/g,sT=/%5B/g,iT=/%5D/g,jh=/%5E/g,aT=/%60/g,$h=/%7B/g,oT=/%7C/g,Gh=/%7D/g,lT=/%20/g;function Da(t){return encodeURI(""+t).replace(oT,"|").replace(sT,"[").replace(iT,"]")}function fT(t){return Da(t).replace($h,"{").replace(Gh,"}").replace(jh,"^")}function Js(t){return Da(t).replace(Wh,"%2B").replace(lT,"+").replace(qh,"%23").replace(tT,"%26").replace(aT,"`").replace($h,"{").replace(Gh,"}").replace(jh,"^")}function uT(t){return Js(t).replace(cT,"%3D")}function hT(t){return Da(t).replace(qh,"%23").replace(rT,"%3F")}function dT(t){return t==null?"":hT(t).replace(nT,"%2F")}function _c(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function mT(t){const e={};if(t===""||t==="?")return e;const c=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<c.length;++r){const s=c[r].replace(Wh," "),i=s.indexOf("="),a=_c(i<0?s:s.slice(0,i)),o=i<0?null:_c(s.slice(i+1));if(a in e){let l=e[a];V3(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function R9(t){let e="";for(let n in t){const c=t[n];if(n=uT(n),c==null){c!==void 0&&(e+=(e.length?"&":"")+n);continue}(V3(c)?c.map(s=>s&&Js(s)):[c&&Js(c)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function pT(t){const e={};for(const n in t){const c=t[n];c!==void 0&&(e[n]=V3(c)?c.map(r=>r==null?null:""+r):c==null?c:""+c)}return e}const vT=Symbol(""),P9=Symbol(""),Oa=Symbol(""),Kh=Symbol(""),Zs=Symbol("");function dt(){let t=[];function e(c){return t.push(c),()=>{const r=t.indexOf(c);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function E4(t,e,n,c,r){const s=c&&(c.enterCallbacks[r]=c.enterCallbacks[r]||[]);return()=>new Promise((i,a)=>{const o=u=>{u===!1?a(I6(4,{from:n,to:e})):u instanceof Error?a(u):BS(u)?a(I6(2,{from:e,to:u})):(s&&c.enterCallbacks[r]===s&&typeof u=="function"&&s.push(u),i())},l=t.call(c&&c.instances[r],e,n,o);let f=Promise.resolve(l);t.length<3&&(f=f.then(o)),f.catch(u=>a(u))})}function Y8(t,e,n,c){const r=[];for(const s of t)for(const i in s.components){let a=s.components[i];if(!(e!=="beforeRouteEnter"&&!s.instances[i]))if(gT(a)){const l=(a.__vccOpts||a)[e];l&&r.push(E4(l,n,c,s,i))}else{let o=a();r.push(()=>o.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));const f=MS(l)?l.default:l;s.components[i]=f;const h=(f.__vccOpts||f)[e];return h&&E4(h,n,c,s,i)()}))}}return r}function gT(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function D9(t){const e=q1(Oa),n=q1(Kh),c=Q2(()=>e.resolve(T2(t.to))),r=Q2(()=>{const{matched:o}=c.value,{length:l}=o,f=o[l-1],u=n.matched;if(!f||!u.length)return-1;const h=u.findIndex(x6.bind(null,f));if(h>-1)return h;const d=O9(o[l-2]);return l>1&&O9(f)===d&&u[u.length-1].path!==d?u.findIndex(x6.bind(null,o[l-2])):h}),s=Q2(()=>r.value>-1&&VT(n.params,c.value.params)),i=Q2(()=>r.value>-1&&r.value===n.matched.length-1&&Dh(n.params,c.value.params));function a(o={}){return CT(o)?e[T2(t.replace)?"replace":"push"](T2(t.to)).catch(xt):Promise.resolve()}return{route:c,href:Q2(()=>c.value.href),isActive:s,isExactActive:i,navigate:a}}const _T=Q3({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:D9,setup(t,{slots:e}){const n=Y6(D9(t)),{options:c}=q1(Oa),r=Q2(()=>({[F9(t.activeClass,c.linkActiveClass,"router-link-active")]:n.isActive,[F9(t.exactActiveClass,c.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Hr("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),ei=_T;function CT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function VT(t,e){for(const n in e){const c=e[n],r=t[n];if(typeof c=="string"){if(c!==r)return!1}else if(!V3(r)||r.length!==c.length||c.some((s,i)=>s!==r[i]))return!1}return!0}function O9(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const F9=(t,e,n)=>t??e??n,HT=Q3({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const c=q1(Zs),r=Q2(()=>t.route||c.value),s=q1(P9,0),i=Q2(()=>{let l=T2(s);const{matched:f}=r.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),a=Q2(()=>r.value.matched[i.value]);C6(P9,Q2(()=>i.value+1)),C6(vT,a),C6(Zs,r);const o=R1();return D3(()=>[o.value,a.value,t.name],([l,f,u],[h,d,m])=>{f&&(f.instances[u]=l,d&&d!==f&&l&&l===h&&(f.leaveGuards.size||(f.leaveGuards=d.leaveGuards),f.updateGuards.size||(f.updateGuards=d.updateGuards))),l&&f&&(!d||!x6(f,d)||!h)&&(f.enterCallbacks[u]||[]).forEach(g=>g(l))},{flush:"post"}),()=>{const l=r.value,f=t.name,u=a.value,h=u&&u.components[f];if(!h)return B9(n.default,{Component:h,route:l});const d=u.props[f],m=d?d===!0?l.params:typeof d=="function"?d(l):d:null,C=Hr(h,y2({},m,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(u.instances[f]=null)},ref:o}));return B9(n.default,{Component:C,route:l})||C}}});function B9(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Qh=HT;function zT(t){const e=XS(t.routes,t),n=t.parseQuery||mT,c=t.stringifyQuery||R9,r=t.history,s=dt(),i=dt(),a=dt(),o=ih(w4);let l=w4;s6&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=K8.bind(null,w=>""+w),u=K8.bind(null,dT),h=K8.bind(null,_c);function d(w,q){let k,K;return Fh(w)?(k=e.getRecordMatcher(w),K=q):K=w,e.addRoute(K,k)}function m(w){const q=e.getRecordMatcher(w);q&&e.removeRoute(q)}function g(){return e.getRoutes().map(w=>w.record)}function C(w){return!!e.getRecordMatcher(w)}function _(w,q){if(q=y2({},q||o.value),typeof w=="string"){const H=Q8(n,w,q.path),y=e.resolve({path:H.path},q),T=r.createHref(H.fullPath);return y2(H,y,{params:h(y.params),hash:_c(H.hash),redirectedFrom:void 0,href:T})}let k;if("path"in w)k=y2({},w,{path:Q8(n,w.path,q.path).path});else{const H=y2({},w.params);for(const y in H)H[y]==null&&delete H[y];k=y2({},w,{params:u(H)}),q.params=u(q.params)}const K=e.resolve(k,q),z2=w.hash||"";K.params=f(h(K.params));const p=wS(c,y2({},w,{hash:fT(z2),path:K.path})),v=r.createHref(p);return y2({fullPath:p,hash:z2,query:c===R9?pT(w.query):w.query||{}},K,{redirectedFrom:void 0,href:v})}function z(w){return typeof w=="string"?Q8(n,w,o.value.path):y2({},w)}function M(w,q){if(l!==w)return I6(8,{from:q,to:w})}function V(w){return G(w)}function S(w){return V(y2(z(w),{replace:!0}))}function B(w){const q=w.matched[w.matched.length-1];if(q&&q.redirect){const{redirect:k}=q;let K=typeof k=="function"?k(w):k;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=z(K):{path:K},K.params={}),y2({query:w.query,hash:w.hash,params:"path"in K?{}:w.params},K)}}function G(w,q){const k=l=_(w),K=o.value,z2=w.state,p=w.force,v=w.replace===!0,H=B(k);if(H)return G(y2(z(H),{state:typeof H=="object"?y2({},z2,H.state):z2,force:p,replace:v}),q||k);const y=k;y.redirectedFrom=q;let T;return!p&&bS(c,K,k)&&(T=I6(16,{to:y,from:K}),w3(K,K,!0,!1)),(T?Promise.resolve(T):t2(y,K)).catch(A=>Z3(A)?Z3(A,2)?A:z4(A):H2(A,y,K)).then(A=>{if(A){if(Z3(A,2))return G(y2({replace:v},z(A.to),{state:typeof A.to=="object"?y2({},z2,A.to.state):z2,force:p}),q||y)}else A=W(y,K,!0,v,z2);return w2(y,K,A),A})}function x(w,q){const k=M(w,q);return k?Promise.reject(k):Promise.resolve()}function Q(w){const q=e6.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(w):w()}function t2(w,q){let k;const[K,z2,p]=MT(w,q);k=Y8(K.reverse(),"beforeRouteLeave",w,q);for(const H of K)H.leaveGuards.forEach(y=>{k.push(E4(y,w,q))});const v=x.bind(null,w,q);return k.push(v),_1(k).then(()=>{k=[];for(const H of s.list())k.push(E4(H,w,q));return k.push(v),_1(k)}).then(()=>{k=Y8(z2,"beforeRouteUpdate",w,q);for(const H of z2)H.updateGuards.forEach(y=>{k.push(E4(y,w,q))});return k.push(v),_1(k)}).then(()=>{k=[];for(const H of p)if(H.beforeEnter)if(V3(H.beforeEnter))for(const y of H.beforeEnter)k.push(E4(y,w,q));else k.push(E4(H.beforeEnter,w,q));return k.push(v),_1(k)}).then(()=>(w.matched.forEach(H=>H.enterCallbacks={}),k=Y8(p,"beforeRouteEnter",w,q),k.push(v),_1(k))).then(()=>{k=[];for(const H of i.list())k.push(E4(H,w,q));return k.push(v),_1(k)}).catch(H=>Z3(H,8)?H:Promise.reject(H))}function w2(w,q,k){a.list().forEach(K=>Q(()=>K(w,q,k)))}function W(w,q,k,K,z2){const p=M(w,q);if(p)return p;const v=q===w4,H=s6?history.state:{};k&&(K||v?r.replace(w.fullPath,y2({scroll:v&&H&&H.scroll},z2)):r.push(w.fullPath,z2)),o.value=w,w3(w,q,k,v),z4()}let h2;function j2(){h2||(h2=r.listen((w,q,k)=>{if(!vn.listening)return;const K=_(w),z2=B(K);if(z2){G(y2(z2,{replace:!0}),K).catch(xt);return}l=K;const p=o.value;s6&&kS(S9(p.fullPath,k.delta),zr()),t2(K,p).catch(v=>Z3(v,12)?v:Z3(v,2)?(G(v.to,K).then(H=>{Z3(H,20)&&!k.delta&&k.type===t0.pop&&r.go(-1,!1)}).catch(xt),Promise.reject()):(k.delta&&r.go(-k.delta,!1),H2(v,K,p))).then(v=>{v=v||W(K,p,!1),v&&(k.delta&&!Z3(v,8)?r.go(-k.delta,!1):k.type===t0.pop&&Z3(v,20)&&r.go(-1,!1)),w2(K,p,v)}).catch(xt)}))}let N1=dt(),B2=dt(),V2;function H2(w,q,k){z4(w);const K=B2.list();return K.length?K.forEach(z2=>z2(w,q,k)):console.error(w),Promise.reject(w)}function J3(){return V2&&o.value!==w4?Promise.resolve():new Promise((w,q)=>{N1.add([w,q])})}function z4(w){return V2||(V2=!w,j2(),N1.list().forEach(([q,k])=>w?k(w):q()),N1.reset()),w}function w3(w,q,k,K){const{scrollBehavior:z2}=t;if(!s6||!z2)return Promise.resolve();const p=!k&&RS(S9(w.fullPath,0))||(K||!k)&&history.state&&history.state.scroll||null;return dr().then(()=>z2(w,q,p)).then(v=>v&&IS(v)).catch(v=>H2(v,w,q))}const P1=w=>r.go(w);let Ze;const e6=new Set,vn={currentRoute:o,listening:!0,addRoute:d,removeRoute:m,hasRoute:C,getRoutes:g,resolve:_,options:t,push:V,replace:S,go:P1,back:()=>P1(-1),forward:()=>P1(1),beforeEach:s.add,beforeResolve:i.add,afterEach:a.add,onError:B2.add,isReady:J3,install(w){const q=this;w.component("RouterLink",ei),w.component("RouterView",Qh),w.config.globalProperties.$router=q,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>T2(o)}),s6&&!Ze&&o.value===w4&&(Ze=!0,V(r.location).catch(z2=>{}));const k={};for(const z2 in w4)Object.defineProperty(k,z2,{get:()=>o.value[z2],enumerable:!0});w.provide(Oa,q),w.provide(Kh,eh(k)),w.provide(Zs,o);const K=w.unmount;e6.add(w),w.unmount=function(){e6.delete(w),e6.size<1&&(l=w4,h2&&h2(),h2=null,o.value=w4,Ze=!1,V2=!1),K()}}};function _1(w){return w.reduce((q,k)=>q.then(()=>Q(k)),Promise.resolve())}return vn}function MT(t,e){const n=[],c=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let i=0;i<s;i++){const a=e.matched[i];a&&(t.matched.find(l=>x6(l,a))?c.push(a):n.push(a));const o=t.matched[i];o&&(e.matched.find(l=>x6(l,o))||r.push(o))}return[n,c,r]}const yT="/todo-vue/logotodo.jpg";var U9={};/**
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
 */const Yh={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const P=function(t,e){if(!t)throw X6(e)},X6=function(t){return new Error("Firebase Database ("+Yh.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Xh=function(t){const e=[];let n=0;for(let c=0;c<t.length;c++){let r=t.charCodeAt(c);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&c+1<t.length&&(t.charCodeAt(c+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++c)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},LT=function(t){const e=[];let n=0,c=0;for(;n<t.length;){const r=t[n++];if(r<128)e[c++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[c++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],i=t[n++],a=t[n++],o=((r&7)<<18|(s&63)<<12|(i&63)<<6|a&63)-65536;e[c++]=String.fromCharCode(55296+(o>>10)),e[c++]=String.fromCharCode(56320+(o&1023))}else{const s=t[n++],i=t[n++];e[c++]=String.fromCharCode((r&15)<<12|(s&63)<<6|i&63)}}return e.join("")},Mr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,c=[];for(let r=0;r<t.length;r+=3){const s=t[r],i=r+1<t.length,a=i?t[r+1]:0,o=r+2<t.length,l=o?t[r+2]:0,f=s>>2,u=(s&3)<<4|a>>4;let h=(a&15)<<2|l>>6,d=l&63;o||(d=64,i||(h=64)),c.push(n[f],n[u],n[h],n[d])}return c.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xh(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,c=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const u=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||a==null||l==null||u==null)throw new wT;const h=s<<2|a>>4;if(c.push(h),l!==64){const d=a<<4&240|l>>2;if(c.push(d),u!==64){const m=l<<6&192|u;c.push(m)}}}return c},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jh=function(t){const e=Xh(t);return Mr.encodeByteArray(e,!0)},Cc=function(t){return Jh(t).replace(/\./g,"")},Vc=function(t){try{return Mr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bT(t){return n0(void 0,t)}function n0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ST(n)||(t[n]=n0(t[n],e[n]));return t}function ST(t){return t!=="__proto__"}/**
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
 */function TT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const AT=()=>TT().__FIREBASE_DEFAULTS__,ET=()=>{if(typeof process>"u"||typeof U9>"u")return;const t=U9.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},NT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vc(t[1]);return e&&JSON.parse(e)},yr=()=>{try{return AT()||ET()||NT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Zh=t=>{var e,n;return(n=(e=yr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xT=t=>{const e=Zh(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const c=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),c]:[e.substring(0,n),c]},ed=()=>{var t;return(t=yr())===null||t===void 0?void 0:t.config},td=t=>{var e;return(e=yr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class c0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,c)=>{n?this.reject(n):this.resolve(c),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,c))}}}/**
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
 */function IT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},c=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${c}`,aud:c,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Cc(JSON.stringify(n)),Cc(JSON.stringify(i)),a].join(".")}/**
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
 */function Z2(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Z2())}function kT(){var t;const e=(t=yr())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RT(){return typeof self=="object"&&self.self===self}function PT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DT(){const t=Z2();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function cd(){return Yh.NODE_ADMIN===!0}function OT(){return!kT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ba(){try{return typeof indexedDB=="object"}catch{return!1}}function FT(){return new Promise((t,e)=>{try{let n=!0;const c="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(c);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(c),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const BT="FirebaseError";class L3 extends Error{constructor(e,n,c){super(n),this.code=e,this.customData=c,this.name=BT,Object.setPrototypeOf(this,L3.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ne.prototype.create)}}class ne{constructor(e,n,c){this.service=e,this.serviceName=n,this.errors=c}create(e,...n){const c=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?UT(s,c):"Error",a=`${this.serviceName}: ${i} (${r}).`;return new L3(r,a,c)}}function UT(t,e){return t.replace(qT,(n,c)=>{const r=e[c];return r!=null?String(r):`<${c}?>`})}const qT=/\{\$([^}]+)}/g;/**
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
 */function r0(t){return JSON.parse(t)}function m1(t){return JSON.stringify(t)}/**
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
 */const rd=function(t){let e={},n={},c={},r="";try{const s=t.split(".");e=r0(Vc(s[0])||""),n=r0(Vc(s[1])||""),r=s[2],c=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:c,signature:r}},WT=function(t){const e=rd(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},jT=function(t){const e=rd(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function H3(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function k6(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ti(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hc(t,e,n){const c={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(c[r]=e.call(n,t[r],r,t));return c}function zc(t,e){if(t===e)return!0;const n=Object.keys(t),c=Object.keys(e);for(const r of n){if(!c.includes(r))return!1;const s=t[r],i=e[r];if(q9(s)&&q9(i)){if(!zc(s,i))return!1}else if(s!==i)return!1}for(const r of c)if(!n.includes(r))return!1;return!0}function q9(t){return t!==null&&typeof t=="object"}/**
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
 */function J6(t){const e=[];for(const[n,c]of Object.entries(t))Array.isArray(c)?c.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(c));return e.length?"&"+e.join("&"):""}/**
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
 */class $T{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const c=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)c[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)c[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const h=c[u-3]^c[u-8]^c[u-14]^c[u-16];c[u]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],i=this.chain_[2],a=this.chain_[3],o=this.chain_[4],l,f;for(let u=0;u<80;u++){u<40?u<20?(l=a^s&(i^a),f=1518500249):(l=s^i^a,f=1859775393):u<60?(l=s&i|a&(s|i),f=2400959708):(l=s^i^a,f=3395469782);const h=(r<<5|r>>>27)+l+o+f+c[u]&4294967295;o=a,a=i,i=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+i&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+o&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const c=n-this.blockSize;let r=0;const s=this.buf_;let i=this.inbuf_;for(;r<n;){if(i===0)for(;r<=c;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(s[i]=e.charCodeAt(r),++i,++r,i===this.blockSize){this.compress_(s),i=0;break}}else for(;r<n;)if(s[i]=e[r],++i,++r,i===this.blockSize){this.compress_(s),i=0;break}}this.inbuf_=i,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let c=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[c]=this.chain_[r]>>s&255,++c;return e}}function sd(t,e){const n=new GT(t,e);return n.subscribe.bind(n)}class GT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(c=>{this.error(c)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,c){let r;if(e===void 0&&n===void 0&&c===void 0)throw new Error("Missing Observer.");KT(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:c},r.next===void 0&&(r.next=X8),r.error===void 0&&(r.error=X8),r.complete===void 0&&(r.complete=X8);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(c){typeof console<"u"&&console.error&&console.error(c)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function X8(){}function QT(t,e){return`${t} failed: ${e} argument `}/**
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
 */const YT=function(t){const e=[];let n=0;for(let c=0;c<t.length;c++){let r=t.charCodeAt(c);if(r>=55296&&r<=56319){const s=r-55296;c++,P(c<t.length,"Surrogate pair missing trail surrogate.");const i=t.charCodeAt(c)-56320;r=65536+(s<<10)+i}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Lr=function(t){let e=0;for(let n=0;n<t.length;n++){const c=t.charCodeAt(n);c<128?e++:c<2048?e+=2:c>=55296&&c<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function c1(t){return t&&t._delegate?t._delegate:t}class i3{constructor(e,n,c){this.name=e,this.instanceFactory=n,this.type=c,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const he="[DEFAULT]";/**
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
 */class XT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const c=new c0;if(this.instancesDeferred.set(n,c),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&c.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const c=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(c)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:c})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZT(e))try{this.getOrInitializeService({instanceIdentifier:he})}catch{}for(const[n,c]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});c.resolve(s)}catch{}}}}clearInstance(e=he){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=he){return this.instances.has(e)}getOptions(e=he){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,c=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(c))throw Error(`${this.name}(${c}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:c,options:n});for(const[s,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);c===a&&i.resolve(r)}return r}onInit(e,n){var c;const r=this.normalizeInstanceIdentifier(n),s=(c=this.onInitCallbacks.get(r))!==null&&c!==void 0?c:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const c=this.onInitCallbacks.get(n);if(c)for(const r of c)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let c=this.instances.get(e);if(!c&&this.component&&(c=this.component.instanceFactory(this.container,{instanceIdentifier:JT(e),options:n}),this.instances.set(e,c),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(c,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,c)}catch{}return c||null}normalizeInstanceIdentifier(e=he){return this.component?this.component.multipleInstances?e:he:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JT(t){return t===he?void 0:t}function ZT(t){return t.instantiationMode==="EAGER"}/**
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
 */class eA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Ua=[];var l2;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(l2||(l2={}));const id={debug:l2.DEBUG,verbose:l2.VERBOSE,info:l2.INFO,warn:l2.WARN,error:l2.ERROR,silent:l2.SILENT},tA=l2.INFO,nA={[l2.DEBUG]:"log",[l2.VERBOSE]:"log",[l2.INFO]:"info",[l2.WARN]:"warn",[l2.ERROR]:"error"},cA=(t,e,...n)=>{if(e<t.logLevel)return;const c=new Date().toISOString(),r=nA[e];if(r)console[r](`[${c}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Z6{constructor(e){this.name=e,this._logLevel=tA,this._logHandler=cA,this._userLogHandler=null,Ua.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in l2))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?id[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,l2.DEBUG,...e),this._logHandler(this,l2.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,l2.VERBOSE,...e),this._logHandler(this,l2.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,l2.INFO,...e),this._logHandler(this,l2.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,l2.WARN,...e),this._logHandler(this,l2.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,l2.ERROR,...e),this._logHandler(this,l2.ERROR,...e)}}function rA(t){Ua.forEach(e=>{e.setLogLevel(t)})}function sA(t,e){for(const n of Ua){let c=null;e&&e.level&&(c=id[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(r,s,...i)=>{const a=i.map(o=>{if(o==null)return null;if(typeof o=="string")return o;if(typeof o=="number"||typeof o=="boolean")return o.toString();if(o instanceof Error)return o.message;try{return JSON.stringify(o)}catch{return null}}).filter(o=>o).join(" ");s>=(c??r.logLevel)&&t({level:l2[s].toLowerCase(),message:a,args:i,type:r.name})}}}const iA=(t,e)=>e.some(n=>t instanceof n);let W9,j9;function aA(){return W9||(W9=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oA(){return j9||(j9=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ad=new WeakMap,ni=new WeakMap,od=new WeakMap,J8=new WeakMap,qa=new WeakMap;function lA(t){const e=new Promise((n,c)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{n(O4(t.result)),r()},i=()=>{c(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&ad.set(n,t)}).catch(()=>{}),qa.set(e,t),e}function fA(t){if(ni.has(t))return;const e=new Promise((n,c)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{n(),r()},i=()=>{c(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)});ni.set(t,e)}let ci={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ni.get(t);if(e==="objectStoreNames")return t.objectStoreNames||od.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return O4(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uA(t){ci=t(ci)}function hA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const c=t.call(Z8(this),e,...n);return od.set(c,e.sort?e.sort():[e]),O4(c)}:oA().includes(t)?function(...e){return t.apply(Z8(this),e),O4(ad.get(this))}:function(...e){return O4(t.apply(Z8(this),e))}}function dA(t){return typeof t=="function"?hA(t):(t instanceof IDBTransaction&&fA(t),iA(t,aA())?new Proxy(t,ci):t)}function O4(t){if(t instanceof IDBRequest)return lA(t);if(J8.has(t))return J8.get(t);const e=dA(t);return e!==t&&(J8.set(t,e),qa.set(e,t)),e}const Z8=t=>qa.get(t);function mA(t,e,{blocked:n,upgrade:c,blocking:r,terminated:s}={}){const i=indexedDB.open(t,e),a=O4(i);return c&&i.addEventListener("upgradeneeded",o=>{c(O4(i.result),o.oldVersion,o.newVersion,O4(i.transaction),o)}),n&&i.addEventListener("blocked",o=>n(o.oldVersion,o.newVersion,o)),a.then(o=>{s&&o.addEventListener("close",()=>s()),r&&o.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const pA=["get","getKey","getAll","getAllKeys","count"],vA=["put","add","delete","clear"],es=new Map;function $9(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(es.get(e))return es.get(e);const n=e.replace(/FromIndex$/,""),c=e!==n,r=vA.includes(n);if(!(n in(c?IDBIndex:IDBObjectStore).prototype)||!(r||pA.includes(n)))return;const s=async function(i,...a){const o=this.transaction(i,r?"readwrite":"readonly");let l=o.store;return c&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&o.done]))[0]};return es.set(e,s),s}uA(t=>({...t,get:(e,n,c)=>$9(e,n)||t.get(e,n,c),has:(e,n)=>!!$9(e,n)||t.has(e,n)}));/**
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
 */class gA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_A(n)){const c=n.getImmediate();return`${c.library}/${c.version}`}else return null}).filter(n=>n).join(" ")}}function _A(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ri="@firebase/app",G9="0.9.27";/**
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
 */const ke=new Z6("@firebase/app"),CA="@firebase/app-compat",VA="@firebase/analytics-compat",HA="@firebase/analytics",zA="@firebase/app-check-compat",MA="@firebase/app-check",yA="@firebase/auth",LA="@firebase/auth-compat",wA="@firebase/database",bA="@firebase/database-compat",SA="@firebase/functions",TA="@firebase/functions-compat",AA="@firebase/installations",EA="@firebase/installations-compat",NA="@firebase/messaging",xA="@firebase/messaging-compat",IA="@firebase/performance",kA="@firebase/performance-compat",RA="@firebase/remote-config",PA="@firebase/remote-config-compat",DA="@firebase/storage",OA="@firebase/storage-compat",FA="@firebase/firestore",BA="@firebase/firestore-compat",UA="firebase",qA="10.8.0";/**
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
 */const G4="[DEFAULT]",WA={[ri]:"fire-core",[CA]:"fire-core-compat",[HA]:"fire-analytics",[VA]:"fire-analytics-compat",[MA]:"fire-app-check",[zA]:"fire-app-check-compat",[yA]:"fire-auth",[LA]:"fire-auth-compat",[wA]:"fire-rtdb",[bA]:"fire-rtdb-compat",[SA]:"fire-fn",[TA]:"fire-fn-compat",[AA]:"fire-iid",[EA]:"fire-iid-compat",[NA]:"fire-fcm",[xA]:"fire-fcm-compat",[IA]:"fire-perf",[kA]:"fire-perf-compat",[RA]:"fire-rc",[PA]:"fire-rc-compat",[DA]:"fire-gcs",[OA]:"fire-gcs-compat",[FA]:"fire-fst",[BA]:"fire-fst-compat","fire-js":"fire-js",[UA]:"fire-js-all"};/**
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
 */const K4=new Map,s0=new Map;function Mc(t,e){try{t.container.addComponent(e)}catch(n){ke.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ld(t,e){t.container.addOrOverwriteComponent(e)}function a3(t){const e=t.name;if(s0.has(e))return ke.debug(`There were multiple attempts to register component ${e}.`),!1;s0.set(e,t);for(const n of K4.values())Mc(n,t);return!0}function I0(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jA(t,e,n=G4){I0(t,e).clearInstance(n)}function $A(){s0.clear()}/**
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
 */const GA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},u4=new ne("app","Firebase",GA);/**
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
 */let KA=class{constructor(e,n,c){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=c,this.container.addComponent(new i3("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw u4.create("app-deleted",{appName:this._name})}};/**
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
 */const Y3=qA;function wr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const c=Object.assign({name:G4,automaticDataCollectionEnabled:!1},e),r=c.name;if(typeof r!="string"||!r)throw u4.create("bad-app-name",{appName:String(r)});if(n||(n=ed()),!n)throw u4.create("no-options");const s=K4.get(r);if(s){if(zc(n,s.options)&&zc(c,s.config))return s;throw u4.create("duplicate-app",{appName:r})}const i=new eA(r);for(const o of s0.values())i.addComponent(o);const a=new KA(n,c,i);return K4.set(r,a),a}function br(t=G4){const e=K4.get(t);if(!e&&t===G4&&ed())return wr();if(!e)throw u4.create("no-app",{appName:t});return e}function QA(){return Array.from(K4.values())}async function fd(t){const e=t.name;K4.has(e)&&(K4.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function w1(t,e,n){var c;let r=(c=WA[t])!==null&&c!==void 0?c:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ke.warn(a.join(" "));return}a3(new i3(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function ud(t,e){if(t!==null&&typeof t!="function")throw u4.create("invalid-log-argument");sA(t,e)}function hd(t){rA(t)}/**
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
 */const YA="firebase-heartbeat-database",XA=1,i0="firebase-heartbeat-store";let ts=null;function dd(){return ts||(ts=mA(YA,XA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(i0)}catch(n){console.warn(n)}}}}).catch(t=>{throw u4.create("idb-open",{originalErrorMessage:t.message})})),ts}async function JA(t){try{const n=(await dd()).transaction(i0),c=await n.objectStore(i0).get(md(t));return await n.done,c}catch(e){if(e instanceof L3)ke.warn(e.message);else{const n=u4.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ke.warn(n.message)}}}async function K9(t,e){try{const c=(await dd()).transaction(i0,"readwrite");await c.objectStore(i0).put(e,md(t)),await c.done}catch(n){if(n instanceof L3)ke.warn(n.message);else{const c=u4.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ke.warn(c.message)}}}function md(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ZA=1024,eE=30*24*60*60*1e3;class tE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cE(n),this._heartbeatsCachePromise=this._storage.read().then(c=>(this._heartbeatsCache=c,c))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Q9();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=eE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Q9(),{heartbeatsToSend:c,unsentEntries:r}=nE(this._heartbeatsCache.heartbeats),s=Cc(JSON.stringify({version:2,heartbeats:c}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Q9(){return new Date().toISOString().substring(0,10)}function nE(t,e=ZA){const n=[];let c=t.slice();for(const r of t){const s=n.find(i=>i.agent===r.agent);if(s){if(s.dates.push(r.date),Y9(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Y9(n)>e){n.pop();break}c=c.slice(1)}return{heartbeatsToSend:n,unsentEntries:c}}class cE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ba()?FT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return K9(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return K9(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Y9(t){return Cc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function rE(t){a3(new i3("platform-logger",e=>new gA(e),"PRIVATE")),a3(new i3("heartbeat",e=>new tE(e),"PRIVATE")),w1(ri,G9,t),w1(ri,G9,"esm2017"),w1("fire-js","")}rE("");const sE=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:L3,SDK_VERSION:Y3,_DEFAULT_ENTRY_NAME:G4,_addComponent:Mc,_addOrOverwriteComponent:ld,_apps:K4,_clearComponents:$A,_components:s0,_getProvider:I0,_registerComponent:a3,_removeServiceInstance:jA,deleteApp:fd,getApp:br,getApps:QA,initializeApp:wr,onLog:ud,registerVersion:w1,setLogLevel:hd},Symbol.toStringTag,{value:"Module"}));function Wa(t,e){var n={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&e.indexOf(c)<0&&(n[c]=t[c]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,c=Object.getOwnPropertySymbols(t);r<c.length;r++)e.indexOf(c[r])<0&&Object.prototype.propertyIsEnumerable.call(t,c[r])&&(n[c[r]]=t[c[r]]);return n}function pd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iE=pd,vd=new ne("auth","Firebase",pd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Z6("@firebase/auth");function aE(t,...e){yc.logLevel<=l2.WARN&&yc.warn(`Auth (${Y3}): ${t}`,...e)}function Xn(t,...e){yc.logLevel<=l2.ERROR&&yc.error(`Auth (${Y3}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j3(t,...e){throw ja(t,...e)}function O3(t,...e){return ja(t,...e)}function gd(t,e,n){const c=Object.assign(Object.assign({},iE()),{[e]:n});return new ne("auth","Firebase",c).create(e,{appName:t.name})}function oE(t,e,n){const c=n;if(!(e instanceof c))throw c.name!==e.constructor.name&&j3(t,"argument-error"),gd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ja(t,...e){if(typeof t!="string"){const n=e[0],c=[...e.slice(1)];return c[0]&&(c[0].appName=t.name),t._errorFactory.create(n,...c)}return vd.create(t,...e)}function s2(t,e,...n){if(!t)throw ja(e,...n)}function i4(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xn(e),new Error(e)}function d4(t,e){t||i4(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lE(){return X9()==="http:"||X9()==="https:"}function X9(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lE()||PT()||"connection"in navigator)?navigator.onLine:!0}function uE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e,n){this.shortDelay=e,this.longDelay=n,d4(n>e,"Short delay should be less than long delay!"),this.isMobile=Fa()||nd()}get(){return fE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(t,e){d4(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{static initialize(e,n,c){this.fetchImpl=e,n&&(this.headersImpl=n),c&&(this.responseImpl=c)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;i4("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;i4("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;i4("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new k0(3e4,6e4);function Ga(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function et(t,e,n,c,r={}){return Cd(t,r,async()=>{let s={},i={};c&&(e==="GET"?i=c:s={body:JSON.stringify(c)});const a=J6(Object.assign({key:t.config.apiKey},i)).slice(1),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/json",t.languageCode&&(o["X-Firebase-Locale"]=t.languageCode),_d.fetch()(Vd(t,t.config.apiHost,n,a),Object.assign({method:e,headers:o,referrerPolicy:"no-referrer"},s))})}async function Cd(t,e,n){t._canInitEmulator=!1;const c=Object.assign(Object.assign({},hE),e);try{const r=new pE(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw yn(t,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const a=s.ok?i.errorMessage:i.error.message,[o,l]=a.split(" : ");if(o==="FEDERATED_USER_ID_ALREADY_LINKED")throw yn(t,"credential-already-in-use",i);if(o==="EMAIL_EXISTS")throw yn(t,"email-already-in-use",i);if(o==="USER_DISABLED")throw yn(t,"user-disabled",i);const f=c[o]||o.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw gd(t,f,l);j3(t,f)}}catch(r){if(r instanceof L3)throw r;j3(t,"network-request-failed",{message:String(r)})}}async function mE(t,e,n,c,r={}){const s=await et(t,e,n,c,r);return"mfaPendingCredential"in s&&j3(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Vd(t,e,n,c){const r=`${e}${n}?${c}`;return t.config.emulator?$a(t.config,r):`${t.config.apiScheme}://${r}`}class pE{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,c)=>{this.timer=setTimeout(()=>c(O3(this.auth,"network-request-failed")),dE.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yn(t,e,n){const c={appName:t.name};n.email&&(c.email=n.email),n.phoneNumber&&(c.phoneNumber=n.phoneNumber);const r=O3(t,e,c);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vE(t,e){return et(t,"POST","/v1/accounts:delete",e)}async function gE(t,e){return et(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _E(t,e=!1){const n=c1(t),c=await n.getIdToken(e),r=Ka(c);s2(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,i=s==null?void 0:s.sign_in_provider;return{claims:r,token:c,authTime:kt(ns(r.auth_time)),issuedAtTime:kt(ns(r.iat)),expirationTime:kt(ns(r.exp)),signInProvider:i||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ns(t){return Number(t)*1e3}function Ka(t){const[e,n,c]=t.split(".");if(e===void 0||n===void 0||c===void 0)return Xn("JWT malformed, contained fewer than 3 sections"),null;try{const r=Vc(n);return r?JSON.parse(r):(Xn("Failed to decode base64 JWT payload"),null)}catch(r){return Xn("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function CE(t){const e=Ka(t);return s2(e,"internal-error"),s2(typeof e.exp<"u","internal-error"),s2(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t,e,n=!1){if(n)return e;try{return await e}catch(c){throw c instanceof L3&&VE(c)&&t.auth.currentUser===t&&await t.auth.signOut(),c}}function VE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const c=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),c}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=kt(this.lastLoginAt),this.creationTime=kt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Lc(t){var e;const n=t.auth,c=await t.getIdToken(),r=await a0(t,gE(n,{idToken:c}));s2(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?yE(s.providerUserInfo):[],a=ME(t.providerData,i),o=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),f=o?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Hd(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function zE(t){const e=c1(t);await Lc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ME(t,e){return[...t.filter(c=>!e.some(r=>r.providerId===c.providerId)),...e]}function yE(t){return t.map(e=>{var{providerId:n}=e,c=Wa(e,["providerId"]);return{providerId:n,uid:c.rawId||"",displayName:c.displayName||null,email:c.email||null,phoneNumber:c.phoneNumber||null,photoURL:c.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LE(t,e){const n=await Cd(t,{},async()=>{const c=J6({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,i=Vd(t,r,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",_d.fetch()(i,{method:"POST",headers:a,body:c})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wE(t,e){return et(t,"POST","/v2/accounts:revokeToken",Ga(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){s2(e.idToken,"internal-error"),s2(typeof e.idToken<"u","internal-error"),s2(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):CE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return s2(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:c,refreshToken:r,expiresIn:s}=await LE(e,n);this.updateTokensAndExpiration(c,r,Number(s))}updateTokensAndExpiration(e,n,c){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+c*1e3}static fromJSON(e,n){const{refreshToken:c,accessToken:r,expirationTime:s}=n,i=new o0;return c&&(s2(typeof c=="string","internal-error",{appName:e}),i.refreshToken=c),r&&(s2(typeof r=="string","internal-error",{appName:e}),i.accessToken=r),s&&(s2(typeof s=="number","internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new o0,this.toJSON())}_performRefresh(){return i4("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b4(t,e){s2(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ee{constructor(e){var{uid:n,auth:c,stsTokenManager:r}=e,s=Wa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=c,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Hd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await a0(this,this.stsTokenManager.getToken(this.auth,e));return s2(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _E(this,e)}reload(){return zE(this)}_assign(e){this!==e&&(s2(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ee(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){s2(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let c=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),c=!0),n&&await Lc(this),await this.auth._persistUserIfCurrent(this),c&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await a0(this,vE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var c,r,s,i,a,o,l,f;const u=(c=n.displayName)!==null&&c!==void 0?c:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(i=n.photoURL)!==null&&i!==void 0?i:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(o=n._redirectEventId)!==null&&o!==void 0?o:void 0,_=(l=n.createdAt)!==null&&l!==void 0?l:void 0,z=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:M,emailVerified:V,isAnonymous:S,providerData:B,stsTokenManager:G}=n;s2(M&&G,e,"internal-error");const x=o0.fromJSON(this.name,G);s2(typeof M=="string",e,"internal-error"),b4(u,e.name),b4(h,e.name),s2(typeof V=="boolean",e,"internal-error"),s2(typeof S=="boolean",e,"internal-error"),b4(d,e.name),b4(m,e.name),b4(g,e.name),b4(C,e.name),b4(_,e.name),b4(z,e.name);const Q=new Ee({uid:M,auth:e,email:h,emailVerified:V,displayName:u,isAnonymous:S,photoURL:m,phoneNumber:d,tenantId:g,stsTokenManager:x,createdAt:_,lastLoginAt:z});return B&&Array.isArray(B)&&(Q.providerData=B.map(t2=>Object.assign({},t2))),C&&(Q._redirectEventId=C),Q}static async _fromIdTokenResponse(e,n,c=!1){const r=new o0;r.updateFromServerResponse(n);const s=new Ee({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:c});return await Lc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J9=new Map;function a4(t){d4(t instanceof Function,"Expected a class definition");let e=J9.get(t);return e?(d4(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,J9.set(t,e),e)}/**
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
 */class zd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}zd.type="NONE";const Z9=zd;/**
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
 */function Jn(t,e,n){return`firebase:${t}:${e}:${n}`}class H6{constructor(e,n,c){this.persistence=e,this.auth=n,this.userKey=c;const{config:r,name:s}=this.auth;this.fullUserKey=Jn(this.userKey,r.apiKey,s),this.fullPersistenceKey=Jn("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ee._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,c="authUser"){if(!n.length)return new H6(a4(Z9),e,c);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=r[0]||a4(Z9);const i=Jn(c,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(i);if(f){const u=Ee._fromJSON(e,f);l!==s&&(a=u),s=l;break}}catch{}const o=r.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!o.length?new H6(s,e,c):(s=o[0],a&&await s._set(i,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(i)}catch{}})),new H6(s,e,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ld(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Md(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(bd(e))return"Blackberry";if(Sd(e))return"Webos";if(Qa(e))return"Safari";if((e.includes("chrome/")||yd(e))&&!e.includes("edge/"))return"Chrome";if(wd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,c=t.match(n);if((c==null?void 0:c.length)===2)return c[1]}return"Other"}function Md(t=Z2()){return/firefox\//i.test(t)}function Qa(t=Z2()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yd(t=Z2()){return/crios\//i.test(t)}function Ld(t=Z2()){return/iemobile/i.test(t)}function wd(t=Z2()){return/android/i.test(t)}function bd(t=Z2()){return/blackberry/i.test(t)}function Sd(t=Z2()){return/webos/i.test(t)}function Sr(t=Z2()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bE(t=Z2()){var e;return Sr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SE(){return DT()&&document.documentMode===10}function Td(t=Z2()){return Sr(t)||wd(t)||Sd(t)||bd(t)||/windows phone/i.test(t)||Ld(t)}function TE(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t,e=[]){let n;switch(t){case"Browser":n=el(Z2());break;case"Worker":n=`${el(Z2())}-${t}`;break;default:n=t}const c=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Y3}/${c}`}/**
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
 */class AE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const c=s=>new Promise((i,a)=>{try{const o=e(s);i(o)}catch(o){a(o)}});c.onAbort=n,this.queue.push(c);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const c of this.queue)await c(e),c.onAbort&&n.push(c.onAbort)}catch(c){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:c==null?void 0:c.message})}}}/**
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
 */async function EE(t,e={}){return et(t,"GET","/v2/passwordPolicy",Ga(t,e))}/**
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
 */const NE=6;class xE{constructor(e){var n,c,r,s;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=i.minPasswordLength)!==null&&n!==void 0?n:NE,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(c=e.allowedNonAlphanumericCharacters)===null||c===void 0?void 0:c.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,c,r,s,i,a;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=(n=o.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),o.isValid&&(o.isValid=(c=o.meetsMaxPasswordLength)!==null&&c!==void 0?c:!0),o.isValid&&(o.isValid=(r=o.containsLowercaseLetter)!==null&&r!==void 0?r:!0),o.isValid&&(o.isValid=(s=o.containsUppercaseLetter)!==null&&s!==void 0?s:!0),o.isValid&&(o.isValid=(i=o.containsNumericCharacter)!==null&&i!==void 0?i:!0),o.isValid&&(o.isValid=(a=o.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),o}validatePasswordLengthOptions(e,n){const c=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;c&&(n.meetsMinPasswordLength=e.length>=c),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let c;for(let r=0;r<e.length;r++)c=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,c>="a"&&c<="z",c>="A"&&c<="Z",c>="0"&&c<="9",this.allowedNonAlphanumericCharacters.includes(c))}updatePasswordCharacterOptionsStatuses(e,n,c,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=c)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e,n,c,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=c,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tl(this),this.idTokenSubscription=new tl(this),this.beforeStateQueue=new AE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=a4(n)),this._initializationPromise=this.queue(async()=>{var c,r;if(!this._deleted&&(this.persistenceManager=await H6.create(this,e),!this._deleted)){if(!((c=this._popupRedirectResolver)===null||c===void 0)&&c._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const c=await this.assertedPersistence.getCurrentUser();let r=c,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===a)&&(o!=null&&o.user)&&(r=o.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=c,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return s2(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Lc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?c1(e):null;return n&&s2(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&s2(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(a4(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await EE(this),n=new xE(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ne("auth","Firebase",e())}onAuthStateChanged(e,n,c){return this.registerStateListener(this.authStateSubscription,e,n,c)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,c){return this.registerStateListener(this.idTokenSubscription,e,n,c)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const c=this.onAuthStateChanged(()=>{c(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),c={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(c.tenantId=this.tenantId),await wE(this,c)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const c=await this.getOrInitRedirectPersistenceManager(n);return e===null?c.removeCurrentUser():c.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&a4(e)||this._popupRedirectResolver;s2(n,this,"argument-error"),this.redirectPersistenceManager=await H6.create(this,[a4(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,c;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((c=this.redirectUser)===null||c===void 0?void 0:c._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const c=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==c&&(this.lastNotifiedUid=c,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,c,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let i=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(s2(a,this,"internal-error"),a.then(()=>{i||s(this.currentUser)}),typeof n=="function"){const o=e.addObserver(n,c,r);return()=>{i=!0,o()}}else{const o=e.addObserver(n);return()=>{i=!0,o()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return s2(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ad(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const c=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());c&&(n["X-Firebase-Client"]=c);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tr(t){return c1(t)}class tl{constructor(e){this.auth=e,this.observer=null,this.addObserver=sd(n=>this.observer=n)}get next(){return s2(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kE(t){Ya=t}function RE(t){return Ya.loadJS(t)}function PE(){return Ya.gapiScript}function DE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OE(t,e){const n=I0(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),s=n.getOptions();if(zc(s,e??{}))return r;j3(r,"already-initialized")}return n.initialize({options:e})}function FE(t,e){const n=(e==null?void 0:e.persistence)||[],c=(Array.isArray(n)?n:[n]).map(a4);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(c,e==null?void 0:e.popupRedirectResolver)}function BE(t,e,n){const c=Tr(t);s2(c._canInitEmulator,c,"emulator-config-failed"),s2(/^https?:\/\//.test(e),c,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=Ed(e),{host:i,port:a}=UE(e),o=a===null?"":`:${a}`;c.config.emulator={url:`${s}//${i}${o}/`},c.settings.appVerificationDisabledForTesting=!0,c.emulatorConfig=Object.freeze({host:i,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||qE()}function Ed(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function UE(t){const e=Ed(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const c=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(c);if(r){const s=r[1];return{host:s,port:nl(c.substr(s.length+1))}}else{const[s,i]=c.split(":");return{host:s,port:nl(i)}}}function nl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qE(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return i4("not implemented")}_getIdTokenResponse(e){return i4("not implemented")}_linkToIdToken(e,n){return i4("not implemented")}_getReauthenticationResolver(e){return i4("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z6(t,e){return mE(t,"POST","/v1/accounts:signInWithIdp",Ga(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="http://localhost";class Re extends Nd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Re(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):j3("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:c,signInMethod:r}=n,s=Wa(n,["providerId","signInMethod"]);if(!c||!r)return null;const i=new Re(c,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){const n=this.buildRequest();return z6(e,n)}_linkToIdToken(e,n){const c=this.buildRequest();return c.idToken=n,z6(e,c)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,z6(e,n)}buildRequest(){const e={requestUri:WE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=J6(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class R0 extends Xa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4 extends R0{constructor(){super("facebook.com")}static credential(e){return Re._fromParams({providerId:N4.PROVIDER_ID,signInMethod:N4.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return N4.credentialFromTaggedObject(e)}static credentialFromError(e){return N4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return N4.credential(e.oauthAccessToken)}catch{return null}}}N4.FACEBOOK_SIGN_IN_METHOD="facebook.com";N4.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4 extends R0{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Re._fromParams({providerId:r4.PROVIDER_ID,signInMethod:r4.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return r4.credentialFromTaggedObject(e)}static credentialFromError(e){return r4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:c}=e;if(!n&&!c)return null;try{return r4.credential(n,c)}catch{return null}}}r4.GOOGLE_SIGN_IN_METHOD="google.com";r4.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4 extends R0{constructor(){super("github.com")}static credential(e){return Re._fromParams({providerId:x4.PROVIDER_ID,signInMethod:x4.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return x4.credentialFromTaggedObject(e)}static credentialFromError(e){return x4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return x4.credential(e.oauthAccessToken)}catch{return null}}}x4.GITHUB_SIGN_IN_METHOD="github.com";x4.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4 extends R0{constructor(){super("twitter.com")}static credential(e,n){return Re._fromParams({providerId:I4.PROVIDER_ID,signInMethod:I4.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return I4.credentialFromTaggedObject(e)}static credentialFromError(e){return I4.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:c}=e;if(!n||!c)return null;try{return I4.credential(n,c)}catch{return null}}}I4.TWITTER_SIGN_IN_METHOD="twitter.com";I4.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R6{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,c,r=!1){const s=await Ee._fromIdTokenResponse(e,c,r),i=cl(c);return new R6({user:s,providerId:i,_tokenResponse:c,operationType:n})}static async _forOperation(e,n,c){await e._updateTokensIfNecessary(c,!0);const r=cl(c);return new R6({user:e,providerId:r,_tokenResponse:c,operationType:n})}}function cl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends L3{constructor(e,n,c,r){var s;super(n.code,n.message),this.operationType=c,this.user=r,Object.setPrototypeOf(this,wc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:c}}static _fromErrorAndOperation(e,n,c,r){return new wc(e,n,c,r)}}function xd(t,e,n,c){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wc._fromErrorAndOperation(t,s,e,c):s})}async function jE(t,e,n=!1){const c=await a0(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return R6._forOperation(t,"link",c)}/**
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
 */async function $E(t,e,n=!1){const{auth:c}=t,r="reauthenticate";try{const s=await a0(t,xd(c,r,e,t),n);s2(s.idToken,c,"internal-error");const i=Ka(s.idToken);s2(i,c,"internal-error");const{sub:a}=i;return s2(t.uid===a,c,"user-mismatch"),R6._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&j3(c,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GE(t,e,n=!1){const c="signIn",r=await xd(t,c,e),s=await R6._fromIdTokenResponse(t,c,r);return n||await t._updateCurrentUser(s.user),s}function KE(t,e,n,c){return c1(t).onIdTokenChanged(e,n,c)}function QE(t,e,n){return c1(t).beforeAuthStateChanged(e,n)}function Id(t,e,n,c){return c1(t).onAuthStateChanged(e,n,c)}function YE(t){return c1(t).signOut()}const bc="__sak";/**
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
 */class kd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bc,"1"),this.storage.removeItem(bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(){const t=Z2();return Qa(t)||Sr(t)}const JE=1e3,ZE=10;class Rd extends kd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=XE()&&TE(),this.fallbackToPolling=Td(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const c=this.storage.getItem(n),r=this.localCache[n];c!==r&&e(n,r,c)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((i,a,o)=>{this.notifyListeners(i,o)});return}const c=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(c);if(e.newValue!==i)e.newValue!==null?this.storage.setItem(c,e.newValue):this.storage.removeItem(c);else if(this.localCache[c]===e.newValue&&!n)return}const r=()=>{const i=this.storage.getItem(c);!n&&this.localCache[c]===i||this.notifyListeners(c,i)},s=this.storage.getItem(c);SE()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ZE):r()}notifyListeners(e,n){this.localCache[e]=n;const c=this.listeners[e];if(c)for(const r of Array.from(c))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,c)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:c}),!0)})},JE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rd.type="LOCAL";const eN=Rd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends kd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pd.type="SESSION";const Dd=Pd;/**
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
 */function tN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ar{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const c=new Ar(e);return this.receivers.push(c),c}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:c,eventType:r,data:s}=n.data,i=this.handlersMap[r];if(!(i!=null&&i.size))return;n.ports[0].postMessage({status:"ack",eventId:c,eventType:r});const a=Array.from(i).map(async l=>l(n.origin,s)),o=await tN(a);n.ports[0].postMessage({status:"done",eventId:c,eventType:r,response:o})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ar.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t="",e=10){let n="";for(let c=0;c<e;c++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,c=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise((a,o)=>{const l=Ja("",20);r.port1.start();const f=setTimeout(()=>{o(new Error("unsupported_event"))},c);i={messageChannel:r,onMessage(u){const h=u;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{o(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(f),clearTimeout(s),o(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F3(){return window}function cN(t){F3().location.href=t}/**
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
 */function Od(){return typeof F3().WorkerGlobalScope<"u"&&typeof F3().importScripts=="function"}async function rN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function iN(){return Od()?self:null}/**
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
 */const Fd="firebaseLocalStorageDb",aN=1,Sc="firebaseLocalStorage",Bd="fbase_key";class P0{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Er(t,e){return t.transaction([Sc],e?"readwrite":"readonly").objectStore(Sc)}function oN(){const t=indexedDB.deleteDatabase(Fd);return new P0(t).toPromise()}function ii(){const t=indexedDB.open(Fd,aN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const c=t.result;try{c.createObjectStore(Sc,{keyPath:Bd})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const c=t.result;c.objectStoreNames.contains(Sc)?e(c):(c.close(),await oN(),e(await ii()))})})}async function rl(t,e,n){const c=Er(t,!0).put({[Bd]:e,value:n});return new P0(c).toPromise()}async function lN(t,e){const n=Er(t,!1).get(e),c=await new P0(n).toPromise();return c===void 0?null:c.value}function sl(t,e){const n=Er(t,!0).delete(e);return new P0(n).toPromise()}const fN=800,uN=3;class Ud{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ii(),this.db)}async _withRetries(e){let n=0;for(;;)try{const c=await this._openDb();return await e(c)}catch(c){if(n++>uN)throw c;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Od()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ar._getInstance(iN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rN(),!this.activeServiceWorker)return;this.sender=new nN(this.activeServiceWorker);const c=await this.sender._send("ping",{},800);c&&!((e=c[0])===null||e===void 0)&&e.fulfilled&&!((n=c[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ii();return await rl(e,bc,"1"),await sl(e,bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(c=>rl(c,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(c=>lN(c,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sl(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Er(r,!1).getAll();return new P0(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],c=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)c.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!c.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const c=this.listeners[e];if(c)for(const r of Array.from(c))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ud.type="LOCAL";const hN=Ud;new k0(3e4,6e4);/**
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
 */function qd(t,e){return e?a4(e):(s2(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Za extends Nd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return z6(e,this._buildIdpRequest())}_linkToIdToken(e,n){return z6(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return z6(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dN(t){return GE(t.auth,new Za(t),t.bypassAuthState)}function mN(t){const{auth:e,user:n}=t;return s2(n,e,"internal-error"),$E(n,new Za(t),t.bypassAuthState)}async function pN(t){const{auth:e,user:n}=t;return s2(n,e,"internal-error"),jE(n,new Za(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e,n,c,r,s=!1){this.auth=e,this.resolver=c,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(c){this.reject(c)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:c,postBody:r,tenantId:s,error:i,type:a}=e;if(i){this.reject(i);return}const o={auth:this.auth,requestUri:n,sessionId:c,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dN;case"linkViaPopup":case"linkViaRedirect":return pN;case"reauthViaPopup":case"reauthViaRedirect":return mN;default:j3(this.auth,"internal-error")}}resolve(e){d4(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){d4(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=new k0(2e3,1e4);async function gN(t,e,n){const c=Tr(t);oE(t,e,Xa);const r=qd(c,n);return new Ve(c,"signInViaPopup",e,r).executeNotNull()}class Ve extends Wd{constructor(e,n,c,r,s){super(e,n,r,s),this.provider=c,this.authWindow=null,this.pollId=null,Ve.currentPopupAction&&Ve.currentPopupAction.cancel(),Ve.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return s2(e,this.auth,"internal-error"),e}async onExecution(){d4(this.filter.length===1,"Popup operations only handle one event");const e=Ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(O3(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(O3(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ve.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,c;if(!((c=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||c===void 0)&&c.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(O3(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,vN.get())};e()}}Ve.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N="pendingRedirect",Zn=new Map;class CN extends Wd{constructor(e,n,c=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,c),this.eventId=null}async execute(){let e=Zn.get(this.auth._key());if(!e){try{const c=await VN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(c)}catch(n){e=()=>Promise.reject(n)}Zn.set(this.auth._key(),e)}return this.bypassAuthState||Zn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function VN(t,e){const n=MN(e),c=zN(t);if(!await c._isAvailable())return!1;const r=await c._get(n)==="true";return await c._remove(n),r}function HN(t,e){Zn.set(t._key(),e)}function zN(t){return a4(t._redirectPersistence)}function MN(t){return Jn(_N,t.config.apiKey,t.name)}async function yN(t,e,n=!1){const c=Tr(t),r=qd(c,e),i=await new CN(c,r,n).execute();return i&&!n&&(delete i.user._redirectEventId,await c._persistUserIfCurrent(i.user),await c._setRedirectUser(null,e)),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=10*60*1e3;class wN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(c=>{this.isEventForConsumer(e,c)&&(n=!0,this.sendToConsumer(e,c),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var c;if(e.error&&!jd(e)){const r=((c=e.error.code)===null||c===void 0?void 0:c.split("auth/")[1])||"internal-error";n.onError(O3(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const c=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&c}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LN&&this.cachedEventUids.clear(),this.cachedEventUids.has(il(e))}saveEventToCache(e){this.cachedEventUids.add(il(e)),this.lastProcessedEventTime=Date.now()}}function il(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function jd({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jd(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SN(t,e={}){return et(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AN=/^https?/;async function EN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await SN(t);for(const n of e)try{if(NN(n))return}catch{}j3(t,"unauthorized-domain")}function NN(t){const e=si(),{protocol:n,hostname:c}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return i.hostname===""&&c===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&i.hostname===c}if(!AN.test(n))return!1;if(TN.test(t))return c===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(c)}/**
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
 */const xN=new k0(3e4,6e4);function al(){const t=F3().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IN(t){return new Promise((e,n)=>{var c,r,s;function i(){al(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{al(),n(O3(t,"network-request-failed"))},timeout:xN.get()})}if(!((r=(c=F3().gapi)===null||c===void 0?void 0:c.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=F3().gapi)===null||s===void 0)&&s.load)i();else{const a=DE("iframefcb");return F3()[a]=()=>{gapi.load?i():n(O3(t,"network-request-failed"))},RE(`${PE()}?onload=${a}`).catch(o=>n(o))}}).catch(e=>{throw ec=null,e})}let ec=null;function kN(t){return ec=ec||IN(t),ec}/**
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
 */const RN=new k0(5e3,15e3),PN="__/auth/iframe",DN="emulator/auth/iframe",ON={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BN(t){const e=t.config;s2(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$a(e,DN):`https://${t.config.authDomain}/${PN}`,c={apiKey:e.apiKey,appName:t.name,v:Y3},r=FN.get(t.config.apiHost);r&&(c.eid=r);const s=t._getFrameworks();return s.length&&(c.fw=s.join(",")),`${n}?${J6(c).slice(1)}`}async function UN(t){const e=await kN(t),n=F3().gapi;return s2(n,t,"internal-error"),e.open({where:document.body,url:BN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ON,dontclear:!0},c=>new Promise(async(r,s)=>{await c.restyle({setHideOnLeave:!1});const i=O3(t,"network-request-failed"),a=F3().setTimeout(()=>{s(i)},RN.get());function o(){F3().clearTimeout(a),r(c)}c.ping(o).then(o,()=>{s(i)})}))}/**
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
 */const qN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WN=500,jN=600,$N="_blank",GN="http://localhost";class ol{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KN(t,e,n,c=WN,r=jN){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),i=Math.max((window.screen.availWidth-c)/2,0).toString();let a="";const o=Object.assign(Object.assign({},qN),{width:c.toString(),height:r.toString(),top:s,left:i}),l=Z2().toLowerCase();n&&(a=yd(l)?$N:n),Md(l)&&(e=e||GN,o.scrollbars="yes");const f=Object.entries(o).reduce((h,[d,m])=>`${h}${d}=${m},`,"");if(bE(l)&&a!=="_self")return QN(e||"",a),new ol(null);const u=window.open(e||"",a,f);s2(u,t,"popup-blocked");try{u.focus()}catch{}return new ol(u)}function QN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const c=document.createEvent("MouseEvent");c.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(c)}/**
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
 */const YN="__/auth/handler",XN="emulator/auth/handler",JN=encodeURIComponent("fac");async function ll(t,e,n,c,r,s){s2(t.config.authDomain,t,"auth-domain-config-required"),s2(t.config.apiKey,t,"invalid-api-key");const i={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:c,v:Y3,eventId:r};if(e instanceof Xa){e.setDefaultLanguage(t.languageCode),i.providerId=e.providerId||"",ti(e.getCustomParameters())||(i.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(s||{}))i[f]=u}if(e instanceof R0){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(i.scopes=f.join(","))}t.tenantId&&(i.tid=t.tenantId);const a=i;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const o=await t._getAppCheckToken(),l=o?`#${JN}=${encodeURIComponent(o)}`:"";return`${ZN(t)}?${J6(a).slice(1)}${l}`}function ZN({config:t}){return t.emulator?$a(t,XN):`https://${t.authDomain}/${YN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="webStorageSupport";class ex{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dd,this._completeRedirectFn=yN,this._overrideRedirectResult=HN}async _openPopup(e,n,c,r){var s;d4((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const i=await ll(e,n,c,si(),r);return KN(e,i,Ja())}async _openRedirect(e,n,c,r){await this._originValidation(e);const s=await ll(e,n,c,si(),r);return cN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(d4(s,"If manager is not set, promise should be"),s)}const c=this.initAndGetManager(e);return this.eventManagers[n]={promise:c},c.catch(()=>{delete this.eventManagers[n]}),c}async initAndGetManager(e){const n=await UN(e),c=new wN(e);return n.register("authEvent",r=>(s2(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:c.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:c},this.iframes[e._key()]=n,c}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(cs,{type:cs},r=>{var s;const i=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[cs];i!==void 0&&n(!!i),j3(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=EN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Td()||Qa()||Sr()}}const tx=ex;var fl="@firebase/auth",ul="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(c=>{e((c==null?void 0:c.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){s2(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rx(t){a3(new i3("auth",(e,{options:n})=>{const c=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:i,authDomain:a}=c.options;s2(i&&!i.includes(":"),"invalid-api-key",{appName:c.name});const o={apiKey:i,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ad(t)},l=new IE(c,r,s,o);return FE(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,c)=>{e.getProvider("auth-internal").initialize()})),a3(new i3("auth-internal",e=>{const n=Tr(e.getProvider("auth").getImmediate());return(c=>new nx(c))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),w1(fl,ul,cx(t)),w1(fl,ul,"esm2017")}/**
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
 */const sx=5*60,ix=td("authIdTokenMaxAge")||sx;let hl=null;const ax=t=>async e=>{const n=e&&await e.getIdTokenResult(),c=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(c&&c>ix)return;const r=n==null?void 0:n.token;hl!==r&&(hl=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function m3(t=br()){const e=I0(t,"auth");if(e.isInitialized())return e.getImmediate();const n=OE(t,{popupRedirectResolver:tx,persistence:[hN,eN,Dd]}),c=td("authTokenSyncURL");if(c){const s=ax(c);QE(n,s,()=>s(n.currentUser)),KE(n,i=>s(i))}const r=Zh("auth");return r&&BE(n,`http://${r}`),n}function ox(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}kE({loadJS(t){return new Promise((e,n)=>{const c=document.createElement("script");c.setAttribute("src",t),c.onload=e,c.onerror=r=>{const s=O3("internal-error");s.customData=r,n(s)},c.type="text/javascript",c.charset="UTF-8",ox().appendChild(c)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rx("Browser");const lx=t=>(ba("data-v-a33bf01f"),t=t(),Sa(),t),fx={class:"navbar"},ux=lx(()=>o2("img",{src:yT,alt:"logo"},null,-1)),hx=[ux],dx={class:"nav-links"},mx=Q3({__name:"TodoHeader",setup(t){const e=q1("fireUtil");var n=R1(e.checkUserLoggedIn());Id(m3(),i=>{i?n.value=!0:n.value=!1});async function c(){await e.logIn(),window.location.replace("/todo-vue")}async function r(){await e.logOut(),window.location.replace("/todo-vue")}function s(){console.log(m3().currentUser)}return(i,a)=>(t1(),_3("header",null,[o2("nav",fx,[o2("div",{class:"branding",onClick:s},hx),o2("ul",dx,[o2("li",null,[q2(T2(ei),{to:"/"},{default:Xt(()=>[Gs("Home")]),_:1})]),o2("li",null,[q2(T2(ei),{to:"/about"},{default:Xt(()=>[Gs("About")]),_:1})]),T2(n)?(t1(),_3("li",{key:1,class:"login",onClick:r},"Log out")):(t1(),_3("li",{key:0,class:"login",onClick:c},"Log in"))])])]))}}),D0=(t,e)=>{const n=t.__vccOpts||t;for(const[c,r]of e)n[c]=r;return n},px=D0(mx,[["__scopeId","data-v-a33bf01f"]]);var vx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,e5=e5||{},c2=vx||self;function Nr(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function O0(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function gx(t){return Object.prototype.hasOwnProperty.call(t,rs)&&t[rs]||(t[rs]=++_x)}var rs="closure_uid_"+(1e9*Math.random()>>>0),_x=0;function Cx(t,e,n){return t.call.apply(t.bind,arguments)}function Vx(t,e,n){if(!t)throw Error();if(2<arguments.length){var c=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,c),t.apply(e,r)}}return function(){return t.apply(e,arguments)}}function b1(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?b1=Cx:b1=Vx,b1.apply(null,arguments)}function Ln(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var c=n.slice();return c.push.apply(c,arguments),t.apply(this,c)}}function u1(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(c,r,s){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return e.prototype[r].apply(c,i)}}function ce(){this.s=this.s,this.o=this.o}var Hx=0;ce.prototype.s=!1;ce.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Hx!=0)&&gx(this)};ce.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $d=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function t5(t){const e=t.length;if(0<e){const n=Array(e);for(let c=0;c<e;c++)n[c]=t[c];return n}return[]}function dl(t,e){for(let n=1;n<arguments.length;n++){const c=arguments[n];if(Nr(c)){const r=t.length||0,s=c.length||0;t.length=r+s;for(let i=0;i<s;i++)t[r+i]=c[i]}else t.push(c)}}function S1(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}S1.prototype.h=function(){this.defaultPrevented=!0};var zx=function(){if(!c2.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};c2.addEventListener("test",n,e),c2.removeEventListener("test",n,e)}catch{}return t}();function l0(t){return/^[\s\xa0]*$/.test(t)}function xr(){var t=c2.navigator;return t&&(t=t.userAgent)?t:""}function E3(t){return xr().indexOf(t)!=-1}function n5(t){return n5[" "](t),t}n5[" "]=function(){};function Mx(t,e){var n=pI;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var yx=E3("Opera"),P6=E3("Trident")||E3("MSIE"),Gd=E3("Edge"),ai=Gd||P6,Kd=E3("Gecko")&&!(xr().toLowerCase().indexOf("webkit")!=-1&&!E3("Edge"))&&!(E3("Trident")||E3("MSIE"))&&!E3("Edge"),Lx=xr().toLowerCase().indexOf("webkit")!=-1&&!E3("Edge");function Qd(){var t=c2.document;return t?t.documentMode:void 0}var oi;e:{var ss="",is=function(){var t=xr();if(Kd)return/rv:([^\);]+)(\)|;)/.exec(t);if(Gd)return/Edge\/([\d\.]+)/.exec(t);if(P6)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Lx)return/WebKit\/(\S+)/.exec(t);if(yx)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(is&&(ss=is?is[1]:""),P6){var as=Qd();if(as!=null&&as>parseFloat(ss)){oi=String(as);break e}}oi=ss}var li;if(c2.document&&P6){var ml=Qd();li=ml||parseInt(oi,10)||void 0}else li=void 0;var wx=li;function f0(t,e){if(S1.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,c=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Kd){e:{try{n5(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,c?(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:bx[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&f0.$.h.call(this)}}u1(f0,S1);var bx={2:"touch",3:"pen",4:"mouse"};f0.prototype.h=function(){f0.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var F0="closure_listenable_"+(1e6*Math.random()|0),Sx=0;function Tx(t,e,n,c,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!c,this.la=r,this.key=++Sx,this.fa=this.ia=!1}function Ir(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function c5(t,e,n){for(const c in t)e.call(n,t[c],c,t)}function Ax(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Yd(t){const e={};for(const n in t)e[n]=t[n];return e}const pl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Xd(t,e){let n,c;for(let r=1;r<arguments.length;r++){c=arguments[r];for(n in c)t[n]=c[n];for(let s=0;s<pl.length;s++)n=pl[s],Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n])}}function kr(t){this.src=t,this.g={},this.h=0}kr.prototype.add=function(t,e,n,c,r){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var i=ui(t,e,c,r);return-1<i?(e=t[i],n||(e.ia=!1)):(e=new Tx(e,this.src,s,!!c,r),e.ia=n,t.push(e)),e};function fi(t,e){var n=e.type;if(n in t.g){var c=t.g[n],r=$d(c,e),s;(s=0<=r)&&Array.prototype.splice.call(c,r,1),s&&(Ir(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function ui(t,e,n,c){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==c)return r}return-1}var r5="closure_lm_"+(1e6*Math.random()|0),os={};function Jd(t,e,n,c,r){if(c&&c.once)return em(t,e,n,c,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Jd(t,e[s],n,c,r);return null}return n=a5(n),t&&t[F0]?t.O(e,n,O0(c)?!!c.capture:!!c,r):Zd(t,e,n,!1,c,r)}function Zd(t,e,n,c,r,s){if(!e)throw Error("Invalid event type");var i=O0(r)?!!r.capture:!!r,a=i5(t);if(a||(t[r5]=a=new kr(t)),n=a.add(e,n,c,i,s),n.proxy)return n;if(c=Ex(),n.proxy=c,c.src=t,c.listener=n,t.addEventListener)zx||(r=i),r===void 0&&(r=!1),t.addEventListener(e.toString(),c,r);else if(t.attachEvent)t.attachEvent(nm(e.toString()),c);else if(t.addListener&&t.removeListener)t.addListener(c);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Ex(){function t(n){return e.call(t.src,t.listener,n)}const e=Nx;return t}function em(t,e,n,c,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)em(t,e[s],n,c,r);return null}return n=a5(n),t&&t[F0]?t.P(e,n,O0(c)?!!c.capture:!!c,r):Zd(t,e,n,!0,c,r)}function tm(t,e,n,c,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)tm(t,e[s],n,c,r);else c=O0(c)?!!c.capture:!!c,n=a5(n),t&&t[F0]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=ui(s,n,c,r),-1<n&&(Ir(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=i5(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ui(e,n,c,r)),(n=-1<t?e[t]:null)&&s5(n))}function s5(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[F0])fi(e.i,t);else{var n=t.type,c=t.proxy;e.removeEventListener?e.removeEventListener(n,c,t.capture):e.detachEvent?e.detachEvent(nm(n),c):e.addListener&&e.removeListener&&e.removeListener(c),(n=i5(e))?(fi(n,t),n.h==0&&(n.src=null,e[r5]=null)):Ir(t)}}}function nm(t){return t in os?os[t]:os[t]="on"+t}function Nx(t,e){if(t.fa)t=!0;else{e=new f0(e,this);var n=t.listener,c=t.la||t.src;t.ia&&s5(t),t=n.call(c,e)}return t}function i5(t){return t=t[r5],t instanceof kr?t:null}var ls="__closure_events_fn_"+(1e9*Math.random()>>>0);function a5(t){return typeof t=="function"?t:(t[ls]||(t[ls]=function(e){return t.handleEvent(e)}),t[ls])}function f1(){ce.call(this),this.i=new kr(this),this.S=this,this.J=null}u1(f1,ce);f1.prototype[F0]=!0;f1.prototype.removeEventListener=function(t,e,n,c){tm(this,t,e,n,c)};function v1(t,e){var n,c=t.J;if(c)for(n=[];c;c=c.J)n.push(c);if(t=t.S,c=e.type||e,typeof e=="string")e=new S1(e,t);else if(e instanceof S1)e.target=e.target||t;else{var r=e;e=new S1(c,t),Xd(e,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var i=e.g=n[s];r=wn(i,c,!0,e)&&r}if(i=e.g=t,r=wn(i,c,!0,e)&&r,r=wn(i,c,!1,e)&&r,n)for(s=0;s<n.length;s++)i=e.g=n[s],r=wn(i,c,!1,e)&&r}f1.prototype.N=function(){if(f1.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],c=0;c<n.length;c++)Ir(n[c]);delete t.g[e],t.h--}}this.J=null};f1.prototype.O=function(t,e,n,c){return this.i.add(String(t),e,!1,n,c)};f1.prototype.P=function(t,e,n,c){return this.i.add(String(t),e,!0,n,c)};function wn(t,e,n,c){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var i=e[s];if(i&&!i.fa&&i.capture==n){var a=i.listener,o=i.la||i.src;i.ia&&fi(t.i,i),r=a.call(o,c)!==!1&&r}}return r&&!c.defaultPrevented}var o5=c2.JSON.stringify;class xx{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Ix(){var t=l5;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kx{constructor(){this.h=this.g=null}add(e,n){const c=cm.get();c.set(e,n),this.h?this.h.next=c:this.g=c,this.h=c}}var cm=new xx(()=>new Rx,t=>t.reset());class Rx{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Px(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Dx(t){c2.setTimeout(()=>{throw t},0)}let u0,h0=!1,l5=new kx,rm=()=>{const t=c2.Promise.resolve(void 0);u0=()=>{t.then(Ox)}};var Ox=()=>{for(var t;t=Ix();){try{t.h.call(t.g)}catch(n){Dx(n)}var e=cm;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}h0=!1};function Rr(t,e){f1.call(this),this.h=t||1,this.g=e||c2,this.j=b1(this.qb,this),this.l=Date.now()}u1(Rr,f1);D=Rr.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),v1(this,"tick"),this.ga&&(f5(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function f5(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){Rr.$.N.call(this),f5(this),delete this.g};function u5(t,e,n){if(typeof t=="function")n&&(t=b1(t,n));else if(t&&typeof t.handleEvent=="function")t=b1(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:c2.setTimeout(t,e||0)}function sm(t){t.g=u5(()=>{t.g=null,t.i&&(t.i=!1,sm(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Fx extends ce{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:sm(this)}N(){super.N(),this.g&&(c2.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function d0(t){ce.call(this),this.h=t,this.g={}}u1(d0,ce);var vl=[];function im(t,e,n,c){Array.isArray(n)||(n&&(vl[0]=n.toString()),n=vl);for(var r=0;r<n.length;r++){var s=Jd(e,n[r],c||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function am(t){c5(t.g,function(e,n){this.g.hasOwnProperty(n)&&s5(e)},t),t.g={}}d0.prototype.N=function(){d0.$.N.call(this),am(this)};d0.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Pr(){this.g=!0}Pr.prototype.Ea=function(){this.g=!1};function Bx(t,e,n,c,r,s){t.info(function(){if(t.g)if(s)for(var i="",a=s.split("&"),o=0;o<a.length;o++){var l=a[o].split("=");if(1<l.length){var f=l[0];l=l[1];var u=f.split("_");i=2<=u.length&&u[1]=="type"?i+(f+"="+l+"&"):i+(f+"=redacted&")}}else i=null;else i=s;return"XMLHTTP REQ ("+c+") [attempt "+r+"]: "+e+`
`+n+`
`+i})}function Ux(t,e,n,c,r,s,i){t.info(function(){return"XMLHTTP RESP ("+c+") [ attempt "+r+"]: "+e+`
`+n+`
`+s+" "+i})}function l6(t,e,n,c){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Wx(t,n)+(c?" "+c:"")})}function qx(t,e){t.info(function(){return"TIMEOUT: "+e})}Pr.prototype.info=function(){};function Wx(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var c=n[t];if(!(2>c.length)){var r=c[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if(s!="noop"&&s!="stop"&&s!="close")for(var i=1;i<r.length;i++)r[i]=""}}}}return o5(n)}catch{return e}}var Ge={},gl=null;function Dr(){return gl=gl||new f1}Ge.Ta="serverreachability";function om(t){S1.call(this,Ge.Ta,t)}u1(om,S1);function m0(t){const e=Dr();v1(e,new om(e))}Ge.STAT_EVENT="statevent";function lm(t,e){S1.call(this,Ge.STAT_EVENT,t),this.stat=e}u1(lm,S1);function k1(t){const e=Dr();v1(e,new lm(e,t))}Ge.Ua="timingevent";function fm(t,e){S1.call(this,Ge.Ua,t),this.size=e}u1(fm,S1);function B0(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return c2.setTimeout(function(){t()},e)}var Or={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},um={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function h5(){}h5.prototype.h=null;function _l(t){return t.h||(t.h=t.i())}function hm(){}var U0={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function d5(){S1.call(this,"d")}u1(d5,S1);function m5(){S1.call(this,"c")}u1(m5,S1);var hi;function Fr(){}u1(Fr,h5);Fr.prototype.g=function(){return new XMLHttpRequest};Fr.prototype.i=function(){return{}};hi=new Fr;function q0(t,e,n,c){this.l=t,this.j=e,this.m=n,this.W=c||1,this.U=new d0(this),this.P=jx,t=ai?125:void 0,this.V=new Rr(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dm}function dm(){this.i=null,this.g="",this.h=!1}var jx=45e3,mm={},di={};D=q0.prototype;D.setTimeout=function(t){this.P=t};function mi(t,e,n){t.L=1,t.A=Ur(m4(e)),t.u=n,t.S=!0,pm(t,null)}function pm(t,e){t.G=Date.now(),W0(t),t.B=m4(t.A);var n=t.B,c=t.W;Array.isArray(c)||(c=[String(c)]),Mm(n.i,"t",c),t.o=0,n=t.l.J,t.h=new dm,t.g=Wm(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Fx(b1(t.Pa,t,t.g),t.O)),im(t.U,t.g,"readystatechange",t.nb),e=t.I?Yd(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),m0(),Bx(t.j,t.v,t.B,t.m,t.W,t.u)}D.nb=function(t){t=t.target;const e=this.M;e&&N3(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const f=N3(this.g);var e=this.g.Ia();const u=this.g.da();if(!(3>f)&&(f!=3||ai||this.g&&(this.h.h||this.g.ja()||zl(this.g)))){this.J||f!=4||e==7||(e==8||0>=u?m0(3):m0(2)),Br(this);var n=this.g.da();this.ca=n;t:if(vm(this)){var c=zl(this.g);t="";var r=c.length,s=N3(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){He(this),Rt(this);var i="";break t}this.h.i=new c2.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(c[e],{stream:s&&e==r-1});c.length=0,this.h.g+=t,this.o=0,i=this.h.g}else i=this.g.ja();if(this.i=n==200,Ux(this.j,this.v,this.B,this.m,this.W,f,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,o=this.g;if((a=o.g?o.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!l0(a)){var l=a;break t}}l=null}if(n=l)l6(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pi(this,n);else{this.i=!1,this.s=3,k1(12),He(this),Rt(this);break e}}this.S?(gm(this,f,i),ai&&this.i&&f==3&&(im(this.U,this.V,"tick",this.mb),this.V.start())):(l6(this.j,this.m,i,null),pi(this,i)),f==4&&He(this),this.i&&!this.J&&(f==4?Fm(this.l,this):(this.i=!1,W0(this)))}else hI(this.g),n==400&&0<i.indexOf("Unknown SID")?(this.s=3,k1(12)):(this.s=0,k1(13)),He(this),Rt(this)}}}catch{}finally{}};function vm(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function gm(t,e,n){let c=!0,r;for(;!t.J&&t.o<n.length;)if(r=$x(t,n),r==di){e==4&&(t.s=4,k1(14),c=!1),l6(t.j,t.m,null,"[Incomplete Response]");break}else if(r==mm){t.s=4,k1(15),l6(t.j,t.m,n,"[Invalid Chunk]"),c=!1;break}else l6(t.j,t.m,r,null),pi(t,r);vm(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,k1(16),c=!1),t.i=t.i&&c,c?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),V5(e),e.M=!0,k1(11))):(l6(t.j,t.m,n,"[Invalid Chunked Response]"),He(t),Rt(t))}D.mb=function(){if(this.g){var t=N3(this.g),e=this.g.ja();this.o<e.length&&(Br(this),gm(this,t,e),this.i&&t!=4&&W0(this))}};function $x(t,e){var n=t.o,c=e.indexOf(`
`,n);return c==-1?di:(n=Number(e.substring(n,c)),isNaN(n)?mm:(c+=1,c+n>e.length?di:(e=e.slice(c,c+n),t.o=c+n,e)))}D.cancel=function(){this.J=!0,He(this)};function W0(t){t.Y=Date.now()+t.P,_m(t,t.P)}function _m(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=B0(b1(t.lb,t),e)}function Br(t){t.C&&(c2.clearTimeout(t.C),t.C=null)}D.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(qx(this.j,this.B),this.L!=2&&(m0(),k1(17)),He(this),this.s=2,Rt(this)):_m(this,this.Y-t)};function Rt(t){t.l.H==0||t.J||Fm(t.l,t)}function He(t){Br(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,f5(t.V),am(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function pi(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||vi(n.i,t))){if(!t.K&&vi(n.i,t)&&n.H==3){try{var c=n.Ja.g.parse(e)}catch{c=null}if(Array.isArray(c)&&c.length==3){var r=c;if(r[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ec(n),$r(n);else break e;C5(n),k1(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&n.A==0&&!n.v&&(n.v=B0(b1(n.ib,n),6e3));if(1>=wm(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ze(n,11)}else if((t.K||n.g==t)&&Ec(n),!l0(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const f=l[3];f!=null&&(n.ra=f,n.l.info("VER="+n.ra));const u=l[4];u!=null&&(n.Ga=u,n.l.info("SVER="+n.Ga));const h=l[5];h!=null&&typeof h=="number"&&0<h&&(c=1.5*h,n.L=c,n.l.info("backChannelRequestTimeoutMs_="+c)),c=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=c.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(p5(s,s.h),s.h=null))}if(c.F){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(c.Da=g,P2(c.I,c.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),c=n;var i=t;if(c.wa=qm(c,c.J?c.pa:null,c.Y),i.K){bm(c.i,i);var a=i,o=c.L;o&&a.setTimeout(o),a.C&&(Br(a),W0(a)),c.g=i}else Dm(c);0<n.j.length&&Gr(n)}else l[0]!="stop"&&l[0]!="close"||ze(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?ze(n,7):_5(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}m0(4)}catch{}}function Gx(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Nr(t)){for(var e=[],n=t.length,c=0;c<n;c++)e.push(t[c]);return e}e=[],n=0;for(c in t)e[n++]=t[c];return e}function Kx(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Nr(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const c in t)e[n++]=c;return e}}}function Cm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Nr(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Kx(t),c=Gx(t),r=c.length,s=0;s<r;s++)e.call(void 0,c[s],n&&n[s],t)}var Vm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Qx(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var c=t[n].indexOf("="),r=null;if(0<=c){var s=t[n].substring(0,c);r=t[n].substring(c+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Ne(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ne){this.h=t.h,Tc(this,t.j),this.s=t.s,this.g=t.g,Ac(this,t.m),this.l=t.l;var e=t.i,n=new p0;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Cl(this,n),this.o=t.o}else t&&(e=String(t).match(Vm))?(this.h=!1,Tc(this,e[1]||"",!0),this.s=yt(e[2]||""),this.g=yt(e[3]||"",!0),Ac(this,e[4]),this.l=yt(e[5]||"",!0),Cl(this,e[6]||"",!0),this.o=yt(e[7]||"")):(this.h=!1,this.i=new p0(null,this.h))}Ne.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Lt(e,Vl,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Lt(e,Vl,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Lt(n,n.charAt(0)=="/"?Jx:Xx,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Lt(n,eI)),t.join("")};function m4(t){return new Ne(t)}function Tc(t,e,n){t.j=n?yt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ac(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Cl(t,e,n){e instanceof p0?(t.i=e,tI(t.i,t.h)):(n||(e=Lt(e,Zx)),t.i=new p0(e,t.h))}function P2(t,e,n){t.i.set(e,n)}function Ur(t){return P2(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function yt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Lt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Yx),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Yx(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Vl=/[#\/\?@]/g,Xx=/[#\?:]/g,Jx=/[#\?]/g,Zx=/[#\?@]/g,eI=/#/g;function p0(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function re(t){t.g||(t.g=new Map,t.h=0,t.i&&Qx(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=p0.prototype;D.add=function(t,e){re(this),this.i=null,t=tt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Hm(t,e){re(t),e=tt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function zm(t,e){return re(t),e=tt(t,e),t.g.has(e)}D.forEach=function(t,e){re(this),this.g.forEach(function(n,c){n.forEach(function(r){t.call(e,r,c,this)},this)},this)};D.ta=function(){re(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let c=0;c<e.length;c++){const r=t[c];for(let s=0;s<r.length;s++)n.push(e[c])}return n};D.Z=function(t){re(this);let e=[];if(typeof t=="string")zm(this,t)&&(e=e.concat(this.g.get(tt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return re(this),this.i=null,t=tt(this,t),zm(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Mm(t,e,n){Hm(t,e),0<n.length&&(t.i=null,t.g.set(tt(t,e),t5(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var c=e[n];const s=encodeURIComponent(String(c)),i=this.Z(c);for(c=0;c<i.length;c++){var r=s;i[c]!==""&&(r+="="+encodeURIComponent(String(i[c]))),t.push(r)}}return this.i=t.join("&")};function tt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function tI(t,e){e&&!t.j&&(re(t),t.i=null,t.g.forEach(function(n,c){var r=c.toLowerCase();c!=r&&(Hm(this,c),Mm(this,r,n))},t)),t.j=e}var nI=class{constructor(t,e){this.g=t,this.map=e}};function ym(t){this.l=t||cI,c2.PerformanceNavigationTiming?(t=c2.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(c2.g&&c2.g.Ka&&c2.g.Ka()&&c2.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cI=10;function Lm(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function wm(t){return t.h?1:t.g?t.g.size:0}function vi(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function p5(t,e){t.g?t.g.add(e):t.h=e}function bm(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ym.prototype.cancel=function(){if(this.i=Sm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Sm(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return t5(t.i)}var rI=class{stringify(t){return c2.JSON.stringify(t,void 0)}parse(t){return c2.JSON.parse(t,void 0)}};function sI(){this.g=new rI}function iI(t,e,n){const c=n||"";try{Cm(t,function(r,s){let i=r;O0(r)&&(i=o5(r)),e.push(c+s+"="+encodeURIComponent(i))})}catch(r){throw e.push(c+"type="+encodeURIComponent("_badmap")),r}}function aI(t,e){const n=new Pr;if(c2.Image){const c=new Image;c.onload=Ln(bn,n,c,"TestLoadImage: loaded",!0,e),c.onerror=Ln(bn,n,c,"TestLoadImage: error",!1,e),c.onabort=Ln(bn,n,c,"TestLoadImage: abort",!1,e),c.ontimeout=Ln(bn,n,c,"TestLoadImage: timeout",!1,e),c2.setTimeout(function(){c.ontimeout&&c.ontimeout()},1e4),c.src=t}else e(!1)}function bn(t,e,n,c,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(c)}catch{}}function qr(t){this.l=t.ec||null,this.j=t.ob||!1}u1(qr,h5);qr.prototype.g=function(){return new Wr(this.l,this.j)};qr.prototype.i=function(t){return function(){return t}}({});function Wr(t,e){f1.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=v5,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}u1(Wr,f1);var v5=0;D=Wr.prototype;D.open=function(t,e){if(this.readyState!=v5)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,v0(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||c2).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,j0(this)),this.readyState=v5};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,v0(this)),this.g&&(this.readyState=3,v0(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof c2.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Tm(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Tm(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?j0(this):v0(this),this.readyState==3&&Tm(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,j0(this))};D.Ya=function(t){this.g&&(this.response=t,j0(this))};D.ka=function(){this.g&&j0(this)};function j0(t){t.readyState=4,t.l=null,t.j=null,t.A=null,v0(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function v0(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var oI=c2.JSON.parse;function W2(t){f1.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Am,this.L=this.M=!1}u1(W2,f1);var Am="",lI=/^https?$/i,fI=["POST","PUT"];D=W2.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,c){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():hi.g(),this.C=this.u?_l(this.u):_l(hi),this.g.onreadystatechange=b1(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Hl(this,s);return}if(t=n||"",n=new Map(this.headers),c)if(Object.getPrototypeOf(c)===Object.prototype)for(var r in c)n.set(r,c[r]);else if(typeof c.keys=="function"&&typeof c.get=="function")for(const s of c.keys())n.set(s,c.get(s));else throw Error("Unknown input type for opt_headers: "+String(c));c=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),r=c2.FormData&&t instanceof c2.FormData,!(0<=$d(fI,e))||c||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,i]of n)this.g.setRequestHeader(s,i);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xm(this),0<this.B&&((this.L=uI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b1(this.ua,this)):this.A=u5(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Hl(this,s)}};function uI(t){return P6&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof e5<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,v1(this,"timeout"),this.abort(8))};function Hl(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Em(t),jr(t)}function Em(t){t.F||(t.F=!0,v1(t,"complete"),v1(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,v1(this,"complete"),v1(this,"abort"),jr(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jr(this,!0)),W2.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?Nm(this):this.kb())};D.kb=function(){Nm(this)};function Nm(t){if(t.h&&typeof e5<"u"&&(!t.C[1]||N3(t)!=4||t.da()!=2)){if(t.v&&N3(t)==4)u5(t.La,0,t);else if(v1(t,"readystatechange"),N3(t)==4){t.h=!1;try{const i=t.da();e:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var c;if(c=i===0){var r=String(t.I).match(Vm)[1]||null;!r&&c2.self&&c2.self.location&&(r=c2.self.location.protocol.slice(0,-1)),c=!lI.test(r?r.toLowerCase():"")}n=c}if(n)v1(t,"complete"),v1(t,"success");else{t.m=6;try{var s=2<N3(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",Em(t)}}finally{jr(t)}}}}function jr(t,e){if(t.g){xm(t);const n=t.g,c=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||v1(t,"ready");try{n.onreadystatechange=c}catch{}}}function xm(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(c2.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function N3(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<N3(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),oI(e)}};function zl(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Am:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function hI(t){const e={};t=(t.g&&2<=N3(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let c=0;c<t.length;c++){if(l0(t[c]))continue;var n=Px(t[c]);const r=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}Ax(e,function(c){return c.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Im(t){let e="";return c5(t,function(n,c){e+=c,e+=":",e+=n,e+=`\r
`}),e}function g5(t,e,n){e:{for(c in n){var c=!1;break e}c=!0}c||(n=Im(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):P2(t,e,n))}function mt(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function km(t){this.Ga=0,this.j=[],this.l=new Pr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=mt("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=mt("baseRetryDelayMs",5e3,t),this.hb=mt("retryDelaySeedMs",1e4,t),this.eb=mt("forwardChannelMaxRetries",2,t),this.xa=mt("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ym(t&&t.concurrentRequestLimit),this.Ja=new sI,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=km.prototype;D.ra=8;D.H=1;function _5(t){if(Rm(t),t.H==3){var e=t.W++,n=m4(t.I);if(P2(n,"SID",t.K),P2(n,"RID",e),P2(n,"TYPE","terminate"),$0(t,n),e=new q0(t,t.l,e),e.L=2,e.A=Ur(m4(n)),n=!1,c2.navigator&&c2.navigator.sendBeacon)try{n=c2.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&c2.Image&&(new Image().src=e.A,n=!0),n||(e.g=Wm(e.l,null),e.g.ha(e.A)),e.G=Date.now(),W0(e)}Um(t)}function $r(t){t.g&&(V5(t),t.g.cancel(),t.g=null)}function Rm(t){$r(t),t.u&&(c2.clearTimeout(t.u),t.u=null),Ec(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&c2.clearTimeout(t.m),t.m=null)}function Gr(t){if(!Lm(t.i)&&!t.m){t.m=!0;var e=t.Na;u0||rm(),h0||(u0(),h0=!0),l5.add(e,t),t.C=0}}function dI(t,e){return wm(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=B0(b1(t.Na,t,e),Bm(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new q0(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Yd(s),Xd(s,this.U)):s=this.U),this.o!==null||this.O||(r.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var c=this.j[n];if("__data__"in c.map&&(c=c.map.__data__,typeof c=="string")){c=c.length;break t}c=void 0}if(c===void 0)break;if(e+=c,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Pm(this,r,e),n=m4(this.I),P2(n,"RID",t),P2(n,"CVER",22),this.F&&P2(n,"X-HTTP-Session-Id",this.F),$0(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Im(s)))+"&"+e:this.o&&g5(n,this.o,s)),p5(this.i,r),this.bb&&P2(n,"TYPE","init"),this.P?(P2(n,"$req",e),P2(n,"SID","null"),r.aa=!0,mi(r,n,null)):mi(r,n,e),this.H=2}}else this.H==3&&(t?Ml(this,t):this.j.length==0||Lm(this.i)||Ml(this))};function Ml(t,e){var n;e?n=e.m:n=t.W++;const c=m4(t.I);P2(c,"SID",t.K),P2(c,"RID",n),P2(c,"AID",t.V),$0(t,c),t.o&&t.s&&g5(c,t.o,t.s),n=new q0(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Pm(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),p5(t.i,n),mi(n,c,e)}function $0(t,e){t.na&&c5(t.na,function(n,c){P2(e,c,n)}),t.h&&Cm({},function(n,c){P2(e,c,n)})}function Pm(t,e,n){n=Math.min(t.j.length,n);var c=t.h?b1(t.h.Va,t.h,t):null;e:{var r=t.j;let s=-1;for(;;){const i=["count="+n];s==-1?0<n?(s=r[0].g,i.push("ofs="+s)):s=0:i.push("ofs="+s);let a=!0;for(let o=0;o<n;o++){let l=r[o].g;const f=r[o].map;if(l-=s,0>l)s=Math.max(0,r[o].g-100),a=!1;else try{iI(f,i,"req"+l+"_")}catch{c&&c(f)}}if(a){c=i.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,c}function Dm(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;u0||rm(),h0||(u0(),h0=!0),l5.add(e,t),t.A=0}}function C5(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=B0(b1(t.Ma,t),Bm(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,Om(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=B0(b1(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,k1(10),$r(this),Om(this))};function V5(t){t.B!=null&&(c2.clearTimeout(t.B),t.B=null)}function Om(t){t.g=new q0(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=m4(t.wa);P2(e,"RID","rpc"),P2(e,"SID",t.K),P2(e,"AID",t.V),P2(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&P2(e,"TO",t.qa),P2(e,"TYPE","xmlhttp"),$0(t,e),t.o&&t.s&&g5(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ur(m4(e)),n.u=null,n.S=!0,pm(n,t)}D.ib=function(){this.v!=null&&(this.v=null,$r(this),C5(this),k1(19))};function Ec(t){t.v!=null&&(c2.clearTimeout(t.v),t.v=null)}function Fm(t,e){var n=null;if(t.g==e){Ec(t),V5(t),t.g=null;var c=2}else if(vi(t.i,e))n=e.F,bm(t.i,e),c=1;else return;if(t.H!=0){if(e.i)if(c==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;c=Dr(),v1(c,new fm(c,n)),Gr(t)}else Dm(t);else if(r=e.s,r==3||r==0&&0<e.ca||!(c==1&&dI(t,e)||c==2&&C5(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:ze(t,5);break;case 4:ze(t,10);break;case 3:ze(t,6);break;default:ze(t,2)}}}function Bm(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ze(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var c=b1(t.pb,t);n||(n=new Ne("//www.google.com/images/cleardot.gif"),c2.location&&c2.location.protocol=="http"||Tc(n,"https"),Ur(n)),aI(n.toString(),c)}else k1(2);t.H=0,t.h&&t.h.za(e),Um(t),Rm(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),k1(2)):(this.l.info("Failed to ping google.com"),k1(1))};function Um(t){if(t.H=0,t.ma=[],t.h){const e=Sm(t.i);(e.length!=0||t.j.length!=0)&&(dl(t.ma,e),dl(t.ma,t.j),t.i.i.length=0,t5(t.j),t.j.length=0),t.h.ya()}}function qm(t,e,n){var c=n instanceof Ne?m4(n):new Ne(n);if(c.g!="")e&&(c.g=e+"."+c.g),Ac(c,c.m);else{var r=c2.location;c=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Ne(null);c&&Tc(s,c),e&&(s.g=e),r&&Ac(s,r),n&&(s.l=n),c=s}return n=t.F,e=t.Da,n&&e&&P2(c,n,e),P2(c,"VER",t.ra),$0(t,c),c}function Wm(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new W2(new qr({ob:n})):new W2(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function jm(){}D=jm.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function Nc(){if(P6&&!(10<=Number(wx)))throw Error("Environmental error: no available transport.")}Nc.prototype.g=function(t,e){return new J1(t,e)};function J1(t,e){f1.call(this),this.g=new km(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!l0(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!l0(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new nt(this)}u1(J1,f1);J1.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;k1(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=qm(t,null,t.Y),Gr(t)};J1.prototype.close=function(){_5(this.g)};J1.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=o5(t),t=n);e.j.push(new nI(e.fb++,t)),e.H==3&&Gr(e)};J1.prototype.N=function(){this.g.h=null,delete this.j,_5(this.g),delete this.g,J1.$.N.call(this)};function $m(t){d5.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}u1($m,d5);function Gm(){m5.call(this),this.status=1}u1(Gm,m5);function nt(t){this.g=t}u1(nt,jm);nt.prototype.Ba=function(){v1(this.g,"a")};nt.prototype.Aa=function(t){v1(this.g,new $m(t))};nt.prototype.za=function(t){v1(this.g,new Gm)};nt.prototype.ya=function(){v1(this.g,"b")};function mI(){this.blockSize=-1}function z3(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}u1(z3,mI);z3.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function fs(t,e,n){n||(n=0);var c=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)c[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)c[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],i=e+(s^n&(r^s))+c[0]+3614090360&4294967295;e=n+(i<<7&4294967295|i>>>25),i=s+(r^e&(n^r))+c[1]+3905402710&4294967295,s=e+(i<<12&4294967295|i>>>20),i=r+(n^s&(e^n))+c[2]+606105819&4294967295,r=s+(i<<17&4294967295|i>>>15),i=n+(e^r&(s^e))+c[3]+3250441966&4294967295,n=r+(i<<22&4294967295|i>>>10),i=e+(s^n&(r^s))+c[4]+4118548399&4294967295,e=n+(i<<7&4294967295|i>>>25),i=s+(r^e&(n^r))+c[5]+1200080426&4294967295,s=e+(i<<12&4294967295|i>>>20),i=r+(n^s&(e^n))+c[6]+2821735955&4294967295,r=s+(i<<17&4294967295|i>>>15),i=n+(e^r&(s^e))+c[7]+4249261313&4294967295,n=r+(i<<22&4294967295|i>>>10),i=e+(s^n&(r^s))+c[8]+1770035416&4294967295,e=n+(i<<7&4294967295|i>>>25),i=s+(r^e&(n^r))+c[9]+2336552879&4294967295,s=e+(i<<12&4294967295|i>>>20),i=r+(n^s&(e^n))+c[10]+4294925233&4294967295,r=s+(i<<17&4294967295|i>>>15),i=n+(e^r&(s^e))+c[11]+2304563134&4294967295,n=r+(i<<22&4294967295|i>>>10),i=e+(s^n&(r^s))+c[12]+1804603682&4294967295,e=n+(i<<7&4294967295|i>>>25),i=s+(r^e&(n^r))+c[13]+4254626195&4294967295,s=e+(i<<12&4294967295|i>>>20),i=r+(n^s&(e^n))+c[14]+2792965006&4294967295,r=s+(i<<17&4294967295|i>>>15),i=n+(e^r&(s^e))+c[15]+1236535329&4294967295,n=r+(i<<22&4294967295|i>>>10),i=e+(r^s&(n^r))+c[1]+4129170786&4294967295,e=n+(i<<5&4294967295|i>>>27),i=s+(n^r&(e^n))+c[6]+3225465664&4294967295,s=e+(i<<9&4294967295|i>>>23),i=r+(e^n&(s^e))+c[11]+643717713&4294967295,r=s+(i<<14&4294967295|i>>>18),i=n+(s^e&(r^s))+c[0]+3921069994&4294967295,n=r+(i<<20&4294967295|i>>>12),i=e+(r^s&(n^r))+c[5]+3593408605&4294967295,e=n+(i<<5&4294967295|i>>>27),i=s+(n^r&(e^n))+c[10]+38016083&4294967295,s=e+(i<<9&4294967295|i>>>23),i=r+(e^n&(s^e))+c[15]+3634488961&4294967295,r=s+(i<<14&4294967295|i>>>18),i=n+(s^e&(r^s))+c[4]+3889429448&4294967295,n=r+(i<<20&4294967295|i>>>12),i=e+(r^s&(n^r))+c[9]+568446438&4294967295,e=n+(i<<5&4294967295|i>>>27),i=s+(n^r&(e^n))+c[14]+3275163606&4294967295,s=e+(i<<9&4294967295|i>>>23),i=r+(e^n&(s^e))+c[3]+4107603335&4294967295,r=s+(i<<14&4294967295|i>>>18),i=n+(s^e&(r^s))+c[8]+1163531501&4294967295,n=r+(i<<20&4294967295|i>>>12),i=e+(r^s&(n^r))+c[13]+2850285829&4294967295,e=n+(i<<5&4294967295|i>>>27),i=s+(n^r&(e^n))+c[2]+4243563512&4294967295,s=e+(i<<9&4294967295|i>>>23),i=r+(e^n&(s^e))+c[7]+1735328473&4294967295,r=s+(i<<14&4294967295|i>>>18),i=n+(s^e&(r^s))+c[12]+2368359562&4294967295,n=r+(i<<20&4294967295|i>>>12),i=e+(n^r^s)+c[5]+4294588738&4294967295,e=n+(i<<4&4294967295|i>>>28),i=s+(e^n^r)+c[8]+2272392833&4294967295,s=e+(i<<11&4294967295|i>>>21),i=r+(s^e^n)+c[11]+1839030562&4294967295,r=s+(i<<16&4294967295|i>>>16),i=n+(r^s^e)+c[14]+4259657740&4294967295,n=r+(i<<23&4294967295|i>>>9),i=e+(n^r^s)+c[1]+2763975236&4294967295,e=n+(i<<4&4294967295|i>>>28),i=s+(e^n^r)+c[4]+1272893353&4294967295,s=e+(i<<11&4294967295|i>>>21),i=r+(s^e^n)+c[7]+4139469664&4294967295,r=s+(i<<16&4294967295|i>>>16),i=n+(r^s^e)+c[10]+3200236656&4294967295,n=r+(i<<23&4294967295|i>>>9),i=e+(n^r^s)+c[13]+681279174&4294967295,e=n+(i<<4&4294967295|i>>>28),i=s+(e^n^r)+c[0]+3936430074&4294967295,s=e+(i<<11&4294967295|i>>>21),i=r+(s^e^n)+c[3]+3572445317&4294967295,r=s+(i<<16&4294967295|i>>>16),i=n+(r^s^e)+c[6]+76029189&4294967295,n=r+(i<<23&4294967295|i>>>9),i=e+(n^r^s)+c[9]+3654602809&4294967295,e=n+(i<<4&4294967295|i>>>28),i=s+(e^n^r)+c[12]+3873151461&4294967295,s=e+(i<<11&4294967295|i>>>21),i=r+(s^e^n)+c[15]+530742520&4294967295,r=s+(i<<16&4294967295|i>>>16),i=n+(r^s^e)+c[2]+3299628645&4294967295,n=r+(i<<23&4294967295|i>>>9),i=e+(r^(n|~s))+c[0]+4096336452&4294967295,e=n+(i<<6&4294967295|i>>>26),i=s+(n^(e|~r))+c[7]+1126891415&4294967295,s=e+(i<<10&4294967295|i>>>22),i=r+(e^(s|~n))+c[14]+2878612391&4294967295,r=s+(i<<15&4294967295|i>>>17),i=n+(s^(r|~e))+c[5]+4237533241&4294967295,n=r+(i<<21&4294967295|i>>>11),i=e+(r^(n|~s))+c[12]+1700485571&4294967295,e=n+(i<<6&4294967295|i>>>26),i=s+(n^(e|~r))+c[3]+2399980690&4294967295,s=e+(i<<10&4294967295|i>>>22),i=r+(e^(s|~n))+c[10]+4293915773&4294967295,r=s+(i<<15&4294967295|i>>>17),i=n+(s^(r|~e))+c[1]+2240044497&4294967295,n=r+(i<<21&4294967295|i>>>11),i=e+(r^(n|~s))+c[8]+1873313359&4294967295,e=n+(i<<6&4294967295|i>>>26),i=s+(n^(e|~r))+c[15]+4264355552&4294967295,s=e+(i<<10&4294967295|i>>>22),i=r+(e^(s|~n))+c[6]+2734768916&4294967295,r=s+(i<<15&4294967295|i>>>17),i=n+(s^(r|~e))+c[13]+1309151649&4294967295,n=r+(i<<21&4294967295|i>>>11),i=e+(r^(n|~s))+c[4]+4149444226&4294967295,e=n+(i<<6&4294967295|i>>>26),i=s+(n^(e|~r))+c[11]+3174756917&4294967295,s=e+(i<<10&4294967295|i>>>22),i=r+(e^(s|~n))+c[2]+718787259&4294967295,r=s+(i<<15&4294967295|i>>>17),i=n+(s^(r|~e))+c[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(i<<21&4294967295|i>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}z3.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,c=this.m,r=this.h,s=0;s<e;){if(r==0)for(;s<=n;)fs(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(c[r++]=t.charCodeAt(s++),r==this.blockSize){fs(this,c),r=0;break}}else for(;s<e;)if(c[r++]=t[s++],r==this.blockSize){fs(this,c),r=0;break}}this.h=r,this.i+=e};z3.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var c=0;32>c;c+=8)t[n++]=this.g[e]>>>c&255;return t};function L2(t,e){this.h=e;for(var n=[],c=!0,r=t.length-1;0<=r;r--){var s=t[r]|0;c&&s==e||(n[r]=s,c=!1)}this.g=n}var pI={};function H5(t){return-128<=t&&128>t?Mx(t,function(e){return new L2([e|0],0>e?-1:0)}):new L2([t|0],0>t?-1:0)}function x3(t){if(isNaN(t)||!isFinite(t))return M6;if(0>t)return d1(x3(-t));for(var e=[],n=1,c=0;t>=n;c++)e[c]=t/n|0,n*=gi;return new L2(e,0)}function Km(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return d1(Km(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=x3(Math.pow(e,8)),c=M6,r=0;r<t.length;r+=8){var s=Math.min(8,t.length-r),i=parseInt(t.substring(r,r+s),e);8>s?(s=x3(Math.pow(e,s)),c=c.R(s).add(x3(i))):(c=c.R(n),c=c.add(x3(i)))}return c}var gi=4294967296,M6=H5(0),_i=H5(1),yl=H5(16777216);D=L2.prototype;D.ea=function(){if(t3(this))return-d1(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var c=this.D(n);t+=(0<=c?c:gi+c)*e,e*=gi}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(o4(this))return"0";if(t3(this))return"-"+d1(this).toString(t);for(var e=x3(Math.pow(t,6)),n=this,c="";;){var r=Ic(n,e).g;n=xc(n,r.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=r,o4(n))return s+c;for(;6>s.length;)s="0"+s;c=s+c}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function o4(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function t3(t){return t.h==-1}D.X=function(t){return t=xc(this,t),t3(t)?-1:o4(t)?0:1};function d1(t){for(var e=t.g.length,n=[],c=0;c<e;c++)n[c]=~t.g[c];return new L2(n,~t.h).add(_i)}D.abs=function(){return t3(this)?d1(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],c=0,r=0;r<=e;r++){var s=c+(this.D(r)&65535)+(t.D(r)&65535),i=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);c=i>>>16,s&=65535,i&=65535,n[r]=i<<16|s}return new L2(n,n[n.length-1]&-2147483648?-1:0)};function xc(t,e){return t.add(d1(e))}D.R=function(t){if(o4(this)||o4(t))return M6;if(t3(this))return t3(t)?d1(this).R(d1(t)):d1(d1(this).R(t));if(t3(t))return d1(this.R(d1(t)));if(0>this.X(yl)&&0>t.X(yl))return x3(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],c=0;c<2*e;c++)n[c]=0;for(c=0;c<this.g.length;c++)for(var r=0;r<t.g.length;r++){var s=this.D(c)>>>16,i=this.D(c)&65535,a=t.D(r)>>>16,o=t.D(r)&65535;n[2*c+2*r]+=i*o,Sn(n,2*c+2*r),n[2*c+2*r+1]+=s*o,Sn(n,2*c+2*r+1),n[2*c+2*r+1]+=i*a,Sn(n,2*c+2*r+1),n[2*c+2*r+2]+=s*a,Sn(n,2*c+2*r+2)}for(c=0;c<e;c++)n[c]=n[2*c+1]<<16|n[2*c];for(c=e;c<2*e;c++)n[c]=0;return new L2(n,0)};function Sn(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function pt(t,e){this.g=t,this.h=e}function Ic(t,e){if(o4(e))throw Error("division by zero");if(o4(t))return new pt(M6,M6);if(t3(t))return e=Ic(d1(t),e),new pt(d1(e.g),d1(e.h));if(t3(e))return e=Ic(t,d1(e)),new pt(d1(e.g),e.h);if(30<t.g.length){if(t3(t)||t3(e))throw Error("slowDivide_ only works with positive integers.");for(var n=_i,c=e;0>=c.X(t);)n=Ll(n),c=Ll(c);var r=c6(n,1),s=c6(c,1);for(c=c6(c,2),n=c6(n,2);!o4(c);){var i=s.add(c);0>=i.X(t)&&(r=r.add(n),s=i),c=c6(c,1),n=c6(n,1)}return e=xc(t,r.R(e)),new pt(r,e)}for(r=M6;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),c=Math.ceil(Math.log(n)/Math.LN2),c=48>=c?1:Math.pow(2,c-48),s=x3(n),i=s.R(e);t3(i)||0<i.X(t);)n-=c,s=x3(n),i=s.R(e);o4(s)&&(s=_i),r=r.add(s),t=xc(t,i)}return new pt(r,t)}D.gb=function(t){return Ic(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],c=0;c<e;c++)n[c]=this.D(c)&t.D(c);return new L2(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],c=0;c<e;c++)n[c]=this.D(c)|t.D(c);return new L2(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],c=0;c<e;c++)n[c]=this.D(c)^t.D(c);return new L2(n,this.h^t.h)};function Ll(t){for(var e=t.g.length+1,n=[],c=0;c<e;c++)n[c]=t.D(c)<<1|t.D(c-1)>>>31;return new L2(n,t.h)}function c6(t,e){var n=e>>5;e%=32;for(var c=t.g.length-n,r=[],s=0;s<c;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new L2(r,t.h)}Nc.prototype.createWebChannel=Nc.prototype.g;J1.prototype.send=J1.prototype.u;J1.prototype.open=J1.prototype.m;J1.prototype.close=J1.prototype.close;Or.NO_ERROR=0;Or.TIMEOUT=8;Or.HTTP_ERROR=6;um.COMPLETE="complete";hm.EventType=U0;U0.OPEN="a";U0.CLOSE="b";U0.ERROR="c";U0.MESSAGE="d";f1.prototype.listen=f1.prototype.O;W2.prototype.listenOnce=W2.prototype.P;W2.prototype.getLastError=W2.prototype.Sa;W2.prototype.getLastErrorCode=W2.prototype.Ia;W2.prototype.getStatus=W2.prototype.da;W2.prototype.getResponseJson=W2.prototype.Wa;W2.prototype.getResponseText=W2.prototype.ja;W2.prototype.send=W2.prototype.ha;W2.prototype.setWithCredentials=W2.prototype.Oa;z3.prototype.digest=z3.prototype.l;z3.prototype.reset=z3.prototype.reset;z3.prototype.update=z3.prototype.j;L2.prototype.add=L2.prototype.add;L2.prototype.multiply=L2.prototype.R;L2.prototype.modulo=L2.prototype.gb;L2.prototype.compare=L2.prototype.X;L2.prototype.toNumber=L2.prototype.ea;L2.prototype.toString=L2.prototype.toString;L2.prototype.getBits=L2.prototype.D;L2.fromNumber=x3;L2.fromString=Km;var vI=function(){return new Nc},gI=function(){return Dr()},us=Or,_I=um,CI=Ge,wl={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Tn=hm,VI=W2,HI=z3,y6=L2;const bl="@firebase/firestore";/**
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
 */class V1{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}V1.UNAUTHENTICATED=new V1(null),V1.GOOGLE_CREDENTIALS=new V1("google-credentials-uid"),V1.FIRST_PARTY=new V1("first-party-uid"),V1.MOCK_USER=new V1("mock-user");/**
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
 */let ct="10.8.0";/**
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
 */const Pe=new Z6("@firebase/firestore");function vt(){return Pe.logLevel}function R(t,...e){if(Pe.logLevel<=l2.DEBUG){const n=e.map(z5);Pe.debug(`Firestore (${ct}): ${t}`,...n)}}function $3(t,...e){if(Pe.logLevel<=l2.ERROR){const n=e.map(z5);Pe.error(`Firestore (${ct}): ${t}`,...n)}}function D6(t,...e){if(Pe.logLevel<=l2.WARN){const n=e.map(z5);Pe.warn(`Firestore (${ct}): ${t}`,...n)}}function z5(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function e2(t="Unexpected state"){const e=`FIRESTORE (${ct}) INTERNAL ASSERTION FAILED: `+t;throw $3(e),new Error(e)}function N2(t,e){t||e2()}function a2(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends L3{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class B3{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Qm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(V1.UNAUTHENTICATED))}shutdown(){}}class MI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yI{constructor(e){this.t=e,this.currentUser=V1.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let c=this.i;const r=o=>this.i!==c?(c=this.i,n(o)):Promise.resolve();let s=new B3;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new B3,e.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const o=s;e.enqueueRetryable(async()=>{await o.promise,await r(this.currentUser)})},a=o=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=o,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit(o=>a(o)),setTimeout(()=>{if(!this.auth){const o=this.t.getImmediate({optional:!0});o?a(o):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new B3)}},0),i()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(c=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):c?(N2(typeof c.accessToken=="string"),new Qm(c.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return N2(e===null||typeof e=="string"),new V1(e)}}class LI{constructor(e,n,c){this.l=e,this.h=n,this.P=c,this.type="FirstParty",this.user=V1.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wI{constructor(e,n,c){this.l=e,this.h=n,this.P=c}getToken(){return Promise.resolve(new LI(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(V1.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const c=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const i=s.token!==this.R;return this.R=s.token,R("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>c(s))};const r=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(N2(typeof n.token=="string"),this.R=n.token,new bI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let c=0;c<t;c++)n[c]=Math.floor(256*Math.random());return n}/**
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
 */class Ym{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let c="";for(;c.length<20;){const r=TI(40);for(let s=0;s<r.length;++s)c.length<20&&r[s]<n&&(c+=e.charAt(r[s]%e.length))}return c}}function C2(t,e){return t<e?-1:t>e?1:0}function O6(t,e,n){return t.length===e.length&&t.every((c,r)=>n(c,e[r]))}/**
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
 */class X2{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new O(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new O(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return X2.fromMillis(Date.now())}static fromDate(e){return X2.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),c=Math.floor(1e6*(e-1e3*n));return new X2(n,c)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?C2(this.nanoseconds,e.nanoseconds):C2(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class r2{constructor(e){this.timestamp=e}static fromTimestamp(e){return new r2(e)}static min(){return new r2(new X2(0,0))}static max(){return new r2(new X2(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class g0{constructor(e,n,c){n===void 0?n=0:n>e.length&&e2(),c===void 0?c=e.length-n:c>e.length-n&&e2(),this.segments=e,this.offset=n,this.len=c}get length(){return this.len}isEqual(e){return g0.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof g0?e.forEach(c=>{n.push(c)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,c=this.limit();n<c;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const c=Math.min(e.length,n.length);for(let r=0;r<c;r++){const s=e.get(r),i=n.get(r);if(s<i)return-1;if(s>i)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class D2 extends g0{construct(e,n,c){return new D2(e,n,c)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const c of e){if(c.indexOf("//")>=0)throw new O(L.INVALID_ARGUMENT,`Invalid segment (${c}). Paths must not contain // in them.`);n.push(...c.split("/").filter(r=>r.length>0))}return new D2(n)}static emptyPath(){return new D2([])}}const AI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class p1 extends g0{construct(e,n,c){return new p1(e,n,c)}static isValidIdentifier(e){return AI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),p1.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new p1(["__name__"])}static fromServerFormat(e){const n=[];let c="",r=0;const s=()=>{if(c.length===0)throw new O(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(c),c=""};let i=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new O(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const o=e[r+1];if(o!=="\\"&&o!=="."&&o!=="`")throw new O(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);c+=o,r+=2}else a==="`"?(i=!i,r++):a!=="."||i?(c+=a,r++):(s(),r++)}if(s(),i)throw new O(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new p1(n)}static emptyPath(){return new p1([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(D2.fromString(e))}static fromName(e){return new X(D2.fromString(e).popFirst(5))}static empty(){return new X(D2.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&D2.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return D2.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new D2(e.slice()))}}function EI(t,e){const n=t.toTimestamp().seconds,c=t.toTimestamp().nanoseconds+1,r=r2.fromTimestamp(c===1e9?new X2(n+1,0):new X2(n,c));return new Q4(r,X.empty(),e)}function NI(t){return new Q4(t.readTime,t.key,-1)}class Q4{constructor(e,n,c){this.readTime=e,this.documentKey=n,this.largestBatchId=c}static min(){return new Q4(r2.min(),X.empty(),-1)}static max(){return new Q4(r2.max(),X.empty(),-1)}}function xI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:C2(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function G0(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==II)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&e2(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((c,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(c,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(c,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,c)=>{n(e)})}static reject(e){return new b((n,c)=>{c(e)})}static waitFor(e){return new b((n,c)=>{let r=0,s=0,i=!1;e.forEach(a=>{++r,a.next(()=>{++s,i&&s===r&&n()},o=>c(o))}),i=!0,s===r&&n()})}static or(e){let n=b.resolve(!1);for(const c of e)n=n.next(r=>r?b.resolve(r):c());return n}static forEach(e,n){const c=[];return e.forEach((r,s)=>{c.push(n.call(this,r,s))}),this.waitFor(c)}static mapArray(e,n){return new b((c,r)=>{const s=e.length,i=new Array(s);let a=0;for(let o=0;o<s;o++){const l=o;n(e[l]).next(f=>{i[l]=f,++a,a===s&&c(i)},f=>r(f))}})}static doWhile(e,n){return new b((c,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):c()};s()})}}/**
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
 */class M5{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new B3,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Pt(e,n.error)):this.V.resolve()},this.transaction.onerror=c=>{const r=y5(c.target.error);this.V.reject(new Pt(e,r))}}static open(e,n,c,r){try{return new M5(n,e.transaction(r,c))}catch(s){throw new Pt(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new PI(n)}}class Me{constructor(e,n,c){this.name=e,this.version=n,this.p=c,Me.S(Z2())===12.2&&$3("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),_e(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Ba())return!1;if(Me.C())return!0;const e=Z2(),n=Me.S(e),c=0<n&&n<10,r=Me.v(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||c||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),c=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(c)}static v(e){const n=e.match(/Android ([\d.]+)/i),c=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(c)}async O(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,c)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=s=>{const i=s.target.result;n(i)},r.onblocked=()=>{c(new Pt(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=s=>{const i=s.target.error;i.name==="VersionError"?c(new O(L.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):i.name==="InvalidStateError"?c(new O(L.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):c(new Pt(e,i))},r.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const i=s.target.result;this.p.N(i,r.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,c,r){const s=n==="readonly";let i=0;for(;;){++i;try{this.db=await this.O(e);const a=M5.open(this.db,e,s?"readonly":"readwrite",c),o=r(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),b.reject(l))).toPromise();return o.catch(()=>{}),await a.m,o}catch(a){const o=a,l=o.name!=="FirebaseError"&&i<3;if(R("SimpleDb","Transaction failed with error:",o.message,"Retrying:",l),this.close(),!l)return Promise.reject(o)}}}close(){this.db&&this.db.close(),this.db=void 0}}class RI{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return _e(this.k.delete())}}class Pt extends O{constructor(e,n){super(L.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function K0(t){return t.name==="IndexedDbTransactionError"}class PI{constructor(e){this.store=e}put(e,n){let c;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),c=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),c=this.store.put(e)),_e(c)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),_e(this.store.add(e))}get(e){return _e(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),_e(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),_e(this.store.count())}W(e,n){const c=this.options(e,n),r=c.index?this.store.index(c.index):this.store;if(typeof r.getAll=="function"){const s=r.getAll(c.range);return new b((i,a)=>{s.onerror=o=>{a(o.target.error)},s.onsuccess=o=>{i(o.target.result)}})}{const s=this.cursor(c),i=[];return this.G(s,(a,o)=>{i.push(o)}).next(()=>i)}}j(e,n){const c=this.store.getAll(e,n===null?void 0:n);return new b((r,s)=>{c.onerror=i=>{s(i.target.error)},c.onsuccess=i=>{r(i.target.result)}})}H(e,n){R("SimpleDb","DELETE ALL",this.store.name);const c=this.options(e,n);c.J=!1;const r=this.cursor(c);return this.G(r,(s,i,a)=>a.delete())}Y(e,n){let c;n?c=e:(c={},n=e);const r=this.cursor(c);return this.G(r,n)}Z(e){const n=this.cursor({});return new b((c,r)=>{n.onerror=s=>{const i=y5(s.target.error);r(i)},n.onsuccess=s=>{const i=s.target.result;i?e(i.primaryKey,i.value).next(a=>{a?i.continue():c()}):c()}})}G(e,n){const c=[];return new b((r,s)=>{e.onerror=i=>{s(i.target.error)},e.onsuccess=i=>{const a=i.target.result;if(!a)return void r();const o=new RI(a),l=n(a.primaryKey,a.value,o);if(l instanceof b){const f=l.catch(u=>(o.done(),b.reject(u)));c.push(f)}o.isDone?r():o.$===null?a.continue():a.continue(o.$)}}).next(()=>b.waitFor(c))}options(e,n){let c;return e!==void 0&&(typeof e=="string"?c=e:n=e),{index:c,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const c=this.store.index(e.index);return e.J?c.openKeyCursor(e.range,n):c.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function _e(t){return new b((e,n)=>{t.onsuccess=c=>{const r=c.target.result;e(r)},t.onerror=c=>{const r=y5(c.target.error);n(r)}})}let Sl=!1;function y5(t){const e=Me.S(Z2());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const c=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Sl||(Sl=!0,setTimeout(()=>{throw c},0)),c}}return t}/**
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
 */class L5{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=c=>this.se(c),this.oe=c=>n.writeSequenceNumber(c))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}L5._e=-1;function Kr(t){return t==null}function kc(t){return t===0&&1/t==-1/0}function DI(t){return typeof t=="number"&&Number.isInteger(t)&&!kc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Tl(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ke(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Xm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let e1=class Ci{constructor(e,n){this.comparator=e,this.root=n||F4.EMPTY}insert(e,n){return new Ci(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,F4.BLACK,null,null))}remove(e){return new Ci(this.comparator,this.root.remove(e,this.comparator).copy(null,null,F4.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const c=this.comparator(e,n.key);if(c===0)return n.value;c<0?n=n.left:c>0&&(n=n.right)}return null}indexOf(e){let n=0,c=this.root;for(;!c.isEmpty();){const r=this.comparator(e,c.key);if(r===0)return n+c.left.size;r<0?c=c.left:(n+=c.left.size+1,c=c.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,c)=>(e(n,c),!1))}toString(){const e=[];return this.inorderTraversal((n,c)=>(e.push(`${n}:${c}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new An(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new An(this.root,e,this.comparator,!1)}getReverseIterator(){return new An(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new An(this.root,e,this.comparator,!0)}},An=class{constructor(e,n,c,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?c(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},F4=class e4{constructor(e,n,c,r,s){this.key=e,this.value=n,this.color=c??e4.RED,this.left=r??e4.EMPTY,this.right=s??e4.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,c,r,s){return new e4(e??this.key,n??this.value,c??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,c){let r=this;const s=c(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,c),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,c)),r.fixUp()}removeMin(){if(this.left.isEmpty())return e4.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let c,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return e4.EMPTY;c=r.right.min(),r=r.copy(c.key,c.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,e4.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,e4.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw e2();const e=this.left.check();if(e!==this.right.check())throw e2();return e+(this.isRed()?0:1)}};F4.EMPTY=null,F4.RED=!0,F4.BLACK=!1;F4.EMPTY=new class{constructor(){this.size=0}get key(){throw e2()}get value(){throw e2()}get color(){throw e2()}get left(){throw e2()}get right(){throw e2()}copy(e,n,c,r,s){return this}insert(e,n,c){return new F4(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class g1{constructor(e){this.comparator=e,this.data=new e1(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,c)=>(e(n),!1))}forEachInRange(e,n){const c=this.data.getIteratorFrom(e[0]);for(;c.hasNext();){const r=c.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let c;for(c=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();c.hasNext();)if(!e(c.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Al(this.data.getIterator())}getIteratorFrom(e){return new Al(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(c=>{n=n.add(c)}),n}isEqual(e){if(!(e instanceof g1)||this.size!==e.size)return!1;const n=this.data.getIterator(),c=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=c.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new g1(this.comparator);return n.data=e,n}}class Al{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e){this.fields=e,e.sort(p1.comparator)}static empty(){return new Q1([])}unionWith(e){let n=new g1(p1.comparator);for(const c of this.fields)n=n.add(c);for(const c of e)n=n.add(c);return new Q1(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return O6(this.fields,e.fields,(n,c)=>n.isEqual(c))}}/**
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
 */class Jm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Jm("Invalid base64 string: "+s):s}}(e);return new E1(n)}static fromUint8Array(e){const n=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new E1(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const c=new Uint8Array(n.length);for(let r=0;r<n.length;r++)c[r]=n.charCodeAt(r);return c}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return C2(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}E1.EMPTY_BYTE_STRING=new E1("");const OI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Y4(t){if(N2(!!t),typeof t=="string"){let e=0;const n=OI.exec(t);if(N2(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const c=new Date(t);return{seconds:Math.floor(c.getTime()/1e3),nanos:e}}return{seconds:K2(t.seconds),nanos:K2(t.nanos)}}function K2(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function De(t){return typeof t=="string"?E1.fromBase64String(t):E1.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w5(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function b5(t){const e=t.mapValue.fields.__previous_value__;return w5(e)?b5(e):e}function _0(t){const e=Y4(t.mapValue.fields.__local_write_time__.timestampValue);return new X2(e.seconds,e.nanos)}/**
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
 */class FI{constructor(e,n,c,r,s,i,a,o,l){this.databaseId=e,this.appId=n,this.persistenceKey=c,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class C0{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new C0("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof C0&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Oe(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?w5(t)?4:BI(t)?9007199254740991:10:e2()}function G3(t,e){if(t===e)return!0;const n=Oe(t);if(n!==Oe(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _0(t).isEqual(_0(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Y4(r.timestampValue),a=Y4(s.timestampValue);return i.seconds===a.seconds&&i.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return De(r.bytesValue).isEqual(De(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return K2(r.geoPointValue.latitude)===K2(s.geoPointValue.latitude)&&K2(r.geoPointValue.longitude)===K2(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return K2(r.integerValue)===K2(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=K2(r.doubleValue),a=K2(s.doubleValue);return i===a?kc(i)===kc(a):isNaN(i)&&isNaN(a)}return!1}(t,e);case 9:return O6(t.arrayValue.values||[],e.arrayValue.values||[],G3);case 10:return function(r,s){const i=r.mapValue.fields||{},a=s.mapValue.fields||{};if(Tl(i)!==Tl(a))return!1;for(const o in i)if(i.hasOwnProperty(o)&&(a[o]===void 0||!G3(i[o],a[o])))return!1;return!0}(t,e);default:return e2()}}function V0(t,e){return(t.values||[]).find(n=>G3(n,e))!==void 0}function F6(t,e){if(t===e)return 0;const n=Oe(t),c=Oe(e);if(n!==c)return C2(n,c);switch(n){case 0:case 9007199254740991:return 0;case 1:return C2(t.booleanValue,e.booleanValue);case 2:return function(s,i){const a=K2(s.integerValue||s.doubleValue),o=K2(i.integerValue||i.doubleValue);return a<o?-1:a>o?1:a===o?0:isNaN(a)?isNaN(o)?0:-1:1}(t,e);case 3:return El(t.timestampValue,e.timestampValue);case 4:return El(_0(t),_0(e));case 5:return C2(t.stringValue,e.stringValue);case 6:return function(s,i){const a=De(s),o=De(i);return a.compareTo(o)}(t.bytesValue,e.bytesValue);case 7:return function(s,i){const a=s.split("/"),o=i.split("/");for(let l=0;l<a.length&&l<o.length;l++){const f=C2(a[l],o[l]);if(f!==0)return f}return C2(a.length,o.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,i){const a=C2(K2(s.latitude),K2(i.latitude));return a!==0?a:C2(K2(s.longitude),K2(i.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,i){const a=s.values||[],o=i.values||[];for(let l=0;l<a.length&&l<o.length;++l){const f=F6(a[l],o[l]);if(f)return f}return C2(a.length,o.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===En.mapValue&&i===En.mapValue)return 0;if(s===En.mapValue)return 1;if(i===En.mapValue)return-1;const a=s.fields||{},o=Object.keys(a),l=i.fields||{},f=Object.keys(l);o.sort(),f.sort();for(let u=0;u<o.length&&u<f.length;++u){const h=C2(o[u],f[u]);if(h!==0)return h;const d=F6(a[o[u]],l[f[u]]);if(d!==0)return d}return C2(o.length,f.length)}(t.mapValue,e.mapValue);default:throw e2()}}function El(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return C2(t,e);const n=Y4(t),c=Y4(e),r=C2(n.seconds,c.seconds);return r!==0?r:C2(n.nanos,c.nanos)}function B6(t){return Vi(t)}function Vi(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const c=Y4(n);return`time(${c.seconds},${c.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return De(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let c="[",r=!0;for(const s of n.values||[])r?r=!1:c+=",",c+=Vi(s);return c+"]"}(t.arrayValue):"mapValue"in t?function(n){const c=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const i of c)s?s=!1:r+=",",r+=`${i}:${Vi(n.fields[i])}`;return r+"}"}(t.mapValue):e2()}function Nl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hi(t){return!!t&&"integerValue"in t}function S5(t){return!!t&&"arrayValue"in t}function xl(t){return!!t&&"nullValue"in t}function Il(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tc(t){return!!t&&"mapValue"in t}function Dt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ke(t.mapValue.fields,(n,c)=>e.mapValue.fields[n]=Dt(c)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Dt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function BI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class B1{constructor(e){this.value=e}static empty(){return new B1({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let c=0;c<e.length-1;++c)if(n=(n.mapValue.fields||{})[e.get(c)],!tc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Dt(n)}setAll(e){let n=p1.emptyPath(),c={},r=[];e.forEach((i,a)=>{if(!n.isImmediateParentOf(a)){const o=this.getFieldsMap(n);this.applyChanges(o,c,r),c={},r=[],n=a.popLast()}i?c[a.lastSegment()]=Dt(i):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,c,r)}delete(e){const n=this.field(e.popLast());tc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return G3(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let c=0;c<e.length;++c){let r=n.mapValue.fields[e.get(c)];tc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(c)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,c){Ke(n,(r,s)=>e[r]=s);for(const r of c)delete e[r]}clone(){return new B1(Dt(this.value))}}function Zm(t){const e=[];return Ke(t.fields,(n,c)=>{const r=new p1([n]);if(tc(c)){const s=Zm(c.mapValue).fields;if(s.length===0)e.push(r);else for(const i of s)e.push(r.child(i))}else e.push(r)}),new Q1(e)}/**
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
 */class H1{constructor(e,n,c,r,s,i,a){this.key=e,this.documentType=n,this.version=c,this.readTime=r,this.createTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new H1(e,0,r2.min(),r2.min(),r2.min(),B1.empty(),0)}static newFoundDocument(e,n,c,r){return new H1(e,1,n,r2.min(),c,r,0)}static newNoDocument(e,n){return new H1(e,2,n,r2.min(),r2.min(),B1.empty(),0)}static newUnknownDocument(e,n){return new H1(e,3,n,r2.min(),r2.min(),B1.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(r2.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=B1.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=B1.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=r2.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof H1&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new H1(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Rc{constructor(e,n){this.position=e,this.inclusive=n}}function kl(t,e,n){let c=0;for(let r=0;r<t.position.length;r++){const s=e[r],i=t.position[r];if(s.field.isKeyField()?c=X.comparator(X.fromName(i.referenceValue),n.key):c=F6(i,n.data.field(s.field)),s.dir==="desc"&&(c*=-1),c!==0)break}return c}function Rl(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!G3(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class H0{constructor(e,n="asc"){this.field=e,this.dir=n}}function UI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ep{}class Y2 extends ep{constructor(e,n,c){super(),this.field=e,this.op=n,this.value=c}static create(e,n,c){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,c):new WI(e,n,c):n==="array-contains"?new GI(e,c):n==="in"?new KI(e,c):n==="not-in"?new QI(e,c):n==="array-contains-any"?new YI(e,c):new Y2(e,n,c)}static createKeyFieldInFilter(e,n,c){return n==="in"?new jI(e,c):new $I(e,c)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(F6(n,this.value)):n!==null&&Oe(this.value)===Oe(n)&&this.matchesComparison(F6(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return e2()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class M3 extends ep{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new M3(e,n)}matches(e){return tp(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function tp(t){return t.op==="and"}function np(t){return qI(t)&&tp(t)}function qI(t){for(const e of t.filters)if(e instanceof M3)return!1;return!0}function zi(t){if(t instanceof Y2)return t.field.canonicalString()+t.op.toString()+B6(t.value);if(np(t))return t.filters.map(e=>zi(e)).join(",");{const e=t.filters.map(n=>zi(n)).join(",");return`${t.op}(${e})`}}function cp(t,e){return t instanceof Y2?function(c,r){return r instanceof Y2&&c.op===r.op&&c.field.isEqual(r.field)&&G3(c.value,r.value)}(t,e):t instanceof M3?function(c,r){return r instanceof M3&&c.op===r.op&&c.filters.length===r.filters.length?c.filters.reduce((s,i,a)=>s&&cp(i,r.filters[a]),!0):!1}(t,e):void e2()}function rp(t){return t instanceof Y2?function(n){return`${n.field.canonicalString()} ${n.op} ${B6(n.value)}`}(t):t instanceof M3?function(n){return n.op.toString()+" {"+n.getFilters().map(rp).join(" ,")+"}"}(t):"Filter"}class WI extends Y2{constructor(e,n,c){super(e,n,c),this.key=X.fromName(c.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class jI extends Y2{constructor(e,n){super(e,"in",n),this.keys=sp("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $I extends Y2{constructor(e,n){super(e,"not-in",n),this.keys=sp("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function sp(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(c=>X.fromName(c.referenceValue))}class GI extends Y2{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return S5(n)&&V0(n.arrayValue,this.value)}}class KI extends Y2{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&V0(this.value.arrayValue,n)}}class QI extends Y2{constructor(e,n){super(e,"not-in",n)}matches(e){if(V0(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!V0(this.value.arrayValue,n)}}class YI extends Y2{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!S5(n)||!n.arrayValue.values)&&n.arrayValue.values.some(c=>V0(this.value.arrayValue,c))}}/**
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
 */class XI{constructor(e,n=null,c=[],r=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=c,this.filters=r,this.limit=s,this.startAt=i,this.endAt=a,this.ce=null}}function Pl(t,e=null,n=[],c=[],r=null,s=null,i=null){return new XI(t,e,n,c,r,s,i)}function T5(t){const e=a2(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(c=>zi(c)).join(","),n+="|ob:",n+=e.orderBy.map(c=>function(s){return s.field.canonicalString()+s.dir}(c)).join(","),Kr(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(c=>B6(c)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(c=>B6(c)).join(",")),e.ce=n}return e.ce}function A5(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!UI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!cp(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rl(t.startAt,e.startAt)&&Rl(t.endAt,e.endAt)}function Mi(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class rt{constructor(e,n=null,c=[],r=[],s=null,i="F",a=null,o=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=c,this.filters=r,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=o,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function JI(t,e,n,c,r,s,i,a){return new rt(t,e,n,c,r,s,i,a)}function Qr(t){return new rt(t)}function Dl(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ip(t){return t.collectionGroup!==null}function Ot(t){const e=a2(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const c=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(i){let a=new g1(p1.comparator);return i.filters.forEach(o=>{o.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new H0(s,c))}),n.has(p1.keyField().canonicalString())||e.le.push(new H0(p1.keyField(),c))}return e.le}function U3(t){const e=a2(t);return e.he||(e.he=ZI(e,Ot(t))),e.he}function ZI(t,e){if(t.limitType==="F")return Pl(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new H0(r.field,s)});const n=t.endAt?new Rc(t.endAt.position,t.endAt.inclusive):null,c=t.startAt?new Rc(t.startAt.position,t.startAt.inclusive):null;return Pl(t.path,t.collectionGroup,e,t.filters,t.limit,n,c)}}function yi(t,e){const n=t.filters.concat([e]);return new rt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Li(t,e,n){return new rt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yr(t,e){return A5(U3(t),U3(e))&&t.limitType===e.limitType}function ap(t){return`${T5(U3(t))}|lt:${t.limitType}`}function i6(t){return`Query(target=${function(n){let c=n.path.canonicalString();return n.collectionGroup!==null&&(c+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(c+=`, filters: [${n.filters.map(r=>rp(r)).join(", ")}]`),Kr(n.limit)||(c+=", limit: "+n.limit),n.orderBy.length>0&&(c+=`, orderBy: [${n.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),n.startAt&&(c+=", startAt: ",c+=n.startAt.inclusive?"b:":"a:",c+=n.startAt.position.map(r=>B6(r)).join(",")),n.endAt&&(c+=", endAt: ",c+=n.endAt.inclusive?"a:":"b:",c+=n.endAt.position.map(r=>B6(r)).join(",")),`Target(${c})`}(U3(t))}; limitType=${t.limitType})`}function Xr(t,e){return e.isFoundDocument()&&function(c,r){const s=r.key.path;return c.collectionGroup!==null?r.key.hasCollectionId(c.collectionGroup)&&c.path.isPrefixOf(s):X.isDocumentKey(c.path)?c.path.isEqual(s):c.path.isImmediateParentOf(s)}(t,e)&&function(c,r){for(const s of Ot(c))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(c,r){for(const s of c.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(c,r){return!(c.startAt&&!function(i,a,o){const l=kl(i,a,o);return i.inclusive?l<=0:l<0}(c.startAt,Ot(c),r)||c.endAt&&!function(i,a,o){const l=kl(i,a,o);return i.inclusive?l>=0:l>0}(c.endAt,Ot(c),r))}(t,e)}function ek(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function op(t){return(e,n)=>{let c=!1;for(const r of Ot(t)){const s=tk(r,e,n);if(s!==0)return s;c=c||r.field.isKeyField()}return 0}}function tk(t,e,n){const c=t.field.isKeyField()?X.comparator(e.key,n.key):function(s,i,a){const o=i.data.field(s),l=a.data.field(s);return o!==null&&l!==null?F6(o,l):e2()}(t.field,e,n);switch(t.dir){case"asc":return c;case"desc":return-1*c;default:return e2()}}/**
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
 */class st{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),c=this.inner[n];if(c!==void 0){for(const[r,s]of c)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const c=this.mapKeyFn(e),r=this.inner[c];if(r===void 0)return this.inner[c]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),c=this.inner[n];if(c===void 0)return!1;for(let r=0;r<c.length;r++)if(this.equalsFn(c[r][0],e))return c.length===1?delete this.inner[n]:c.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ke(this.inner,(n,c)=>{for(const[r,s]of c)e(r,s)})}isEmpty(){return Xm(this.inner)}size(){return this.innerSize}}/**
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
 */const nk=new e1(X.comparator);function p4(){return nk}const lp=new e1(X.comparator);function wt(...t){let e=lp;for(const n of t)e=e.insert(n.key,n);return e}function fp(t){let e=lp;return t.forEach((n,c)=>e=e.insert(n,c.overlayedDocument)),e}function ye(){return Ft()}function up(){return Ft()}function Ft(){return new st(t=>t.toString(),(t,e)=>t.isEqual(e))}const ck=new e1(X.comparator),rk=new g1(X.comparator);function u2(...t){let e=rk;for(const n of t)e=e.add(n);return e}const sk=new g1(C2);function ik(){return sk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kc(e)?"-0":e}}function dp(t){return{integerValue:""+t}}function ak(t,e){return DI(e)?dp(e):hp(t,e)}/**
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
 */class Jr{constructor(){this._=void 0}}function ok(t,e,n){return t instanceof Pc?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&w5(s)&&(s=b5(s)),s&&(i.fields.__previous_value__=s),{mapValue:i}}(n,e):t instanceof z0?pp(t,e):t instanceof M0?vp(t,e):function(r,s){const i=mp(r,s),a=Ol(i)+Ol(r.Ie);return Hi(i)&&Hi(r.Ie)?dp(a):hp(r.serializer,a)}(t,e)}function lk(t,e,n){return t instanceof z0?pp(t,e):t instanceof M0?vp(t,e):n}function mp(t,e){return t instanceof Dc?function(c){return Hi(c)||function(s){return!!s&&"doubleValue"in s}(c)}(e)?e:{integerValue:0}:null}class Pc extends Jr{}class z0 extends Jr{constructor(e){super(),this.elements=e}}function pp(t,e){const n=gp(e);for(const c of t.elements)n.some(r=>G3(r,c))||n.push(c);return{arrayValue:{values:n}}}class M0 extends Jr{constructor(e){super(),this.elements=e}}function vp(t,e){let n=gp(e);for(const c of t.elements)n=n.filter(r=>!G3(r,c));return{arrayValue:{values:n}}}class Dc extends Jr{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Ol(t){return K2(t.integerValue||t.doubleValue)}function gp(t){return S5(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fk(t,e){return t.field.isEqual(e.field)&&function(c,r){return c instanceof z0&&r instanceof z0||c instanceof M0&&r instanceof M0?O6(c.elements,r.elements,G3):c instanceof Dc&&r instanceof Dc?G3(c.Ie,r.Ie):c instanceof Pc&&r instanceof Pc}(t.transform,e.transform)}class uk{constructor(e,n){this.version=e,this.transformResults=n}}class s3{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new s3}static exists(e){return new s3(void 0,e)}static updateTime(e){return new s3(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zr{}function _p(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new E5(t.key,s3.none()):new Q0(t.key,t.data,s3.none());{const n=t.data,c=B1.empty();let r=new g1(p1.comparator);for(let s of e.fields)if(!r.has(s)){let i=n.field(s);i===null&&s.length>1&&(s=s.popLast(),i=n.field(s)),i===null?c.delete(s):c.set(s,i),r=r.add(s)}return new se(t.key,c,new Q1(r.toArray()),s3.none())}}function hk(t,e,n){t instanceof Q0?function(r,s,i){const a=r.value.clone(),o=Bl(r.fieldTransforms,s,i.transformResults);a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(t,e,n):t instanceof se?function(r,s,i){if(!nc(r.precondition,s))return void s.convertToUnknownDocument(i.version);const a=Bl(r.fieldTransforms,s,i.transformResults),o=s.data;o.setAll(Cp(r)),o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(t,e,n):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,n)}function Bt(t,e,n,c){return t instanceof Q0?function(s,i,a,o){if(!nc(s.precondition,i))return a;const l=s.value.clone(),f=Ul(s.fieldTransforms,o,i);return l.setAll(f),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(t,e,n,c):t instanceof se?function(s,i,a,o){if(!nc(s.precondition,i))return a;const l=Ul(s.fieldTransforms,o,i),f=i.data;return f.setAll(Cp(s)),f.setAll(l),i.convertToFoundDocument(i.version,f).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,c):function(s,i,a){return nc(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a}(t,e,n)}function dk(t,e){let n=null;for(const c of t.fieldTransforms){const r=e.data.field(c.field),s=mp(c.transform,r||null);s!=null&&(n===null&&(n=B1.empty()),n.set(c.field,s))}return n||null}function Fl(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(c,r){return c===void 0&&r===void 0||!(!c||!r)&&O6(c,r,(s,i)=>fk(s,i))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Q0 extends Zr{constructor(e,n,c,r=[]){super(),this.key=e,this.value=n,this.precondition=c,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class se extends Zr{constructor(e,n,c,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=c,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Cp(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const c=t.data.field(n);e.set(n,c)}}),e}function Bl(t,e,n){const c=new Map;N2(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],i=s.transform,a=e.data.field(s.field);c.set(s.field,lk(i,a,n[r]))}return c}function Ul(t,e,n){const c=new Map;for(const r of t){const s=r.transform,i=n.data.field(r.field);c.set(r.field,ok(s,i,e))}return c}class E5 extends Zr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mk extends Zr{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pk{constructor(e,n,c,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=c,this.mutations=r}applyToRemoteDocument(e,n){const c=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&hk(s,e,c[r])}}applyToLocalView(e,n){for(const c of this.baseMutations)c.key.isEqual(e.key)&&(n=Bt(c,e,n,this.localWriteTime));for(const c of this.mutations)c.key.isEqual(e.key)&&(n=Bt(c,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const c=up();return this.mutations.forEach(r=>{const s=e.get(r.key),i=s.overlayedDocument;let a=this.applyToLocalView(i,s.mutatedFields);a=n.has(r.key)?null:a;const o=_p(i,a);o!==null&&c.set(r.key,o),i.isValidDocument()||i.convertToNoDocument(r2.min())}),c}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),u2())}isEqual(e){return this.batchId===e.batchId&&O6(this.mutations,e.mutations,(n,c)=>Fl(n,c))&&O6(this.baseMutations,e.baseMutations,(n,c)=>Fl(n,c))}}class N5{constructor(e,n,c,r){this.batch=e,this.commitVersion=n,this.mutationResults=c,this.docVersions=r}static from(e,n,c){N2(e.mutations.length===c.length);let r=function(){return ck}();const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,c[i].version);return new N5(e,n,c,r)}}/**
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
 */class vk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var G2,m2;function _k(t){switch(t){default:return e2();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Vp(t){if(t===void 0)return $3("GRPC error has no .code"),L.UNKNOWN;switch(t){case G2.OK:return L.OK;case G2.CANCELLED:return L.CANCELLED;case G2.UNKNOWN:return L.UNKNOWN;case G2.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case G2.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case G2.INTERNAL:return L.INTERNAL;case G2.UNAVAILABLE:return L.UNAVAILABLE;case G2.UNAUTHENTICATED:return L.UNAUTHENTICATED;case G2.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case G2.NOT_FOUND:return L.NOT_FOUND;case G2.ALREADY_EXISTS:return L.ALREADY_EXISTS;case G2.PERMISSION_DENIED:return L.PERMISSION_DENIED;case G2.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case G2.ABORTED:return L.ABORTED;case G2.OUT_OF_RANGE:return L.OUT_OF_RANGE;case G2.UNIMPLEMENTED:return L.UNIMPLEMENTED;case G2.DATA_LOSS:return L.DATA_LOSS;default:return e2()}}(m2=G2||(G2={}))[m2.OK=0]="OK",m2[m2.CANCELLED=1]="CANCELLED",m2[m2.UNKNOWN=2]="UNKNOWN",m2[m2.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",m2[m2.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",m2[m2.NOT_FOUND=5]="NOT_FOUND",m2[m2.ALREADY_EXISTS=6]="ALREADY_EXISTS",m2[m2.PERMISSION_DENIED=7]="PERMISSION_DENIED",m2[m2.UNAUTHENTICATED=16]="UNAUTHENTICATED",m2[m2.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",m2[m2.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",m2[m2.ABORTED=10]="ABORTED",m2[m2.OUT_OF_RANGE=11]="OUT_OF_RANGE",m2[m2.UNIMPLEMENTED=12]="UNIMPLEMENTED",m2[m2.INTERNAL=13]="INTERNAL",m2[m2.UNAVAILABLE=14]="UNAVAILABLE",m2[m2.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ck(){return new TextEncoder}/**
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
 */const Vk=new y6([4294967295,4294967295],0);function ql(t){const e=Ck().encode(t),n=new HI;return n.update(e),new Uint8Array(n.digest())}function Wl(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),c=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new y6([n,c],0),new y6([r,s],0)]}class x5{constructor(e,n,c){if(this.bitmap=e,this.padding=n,this.hashCount=c,n<0||n>=8)throw new bt(`Invalid padding: ${n}`);if(c<0)throw new bt(`Invalid hash count: ${c}`);if(e.length>0&&this.hashCount===0)throw new bt(`Invalid hash count: ${c}`);if(e.length===0&&n!==0)throw new bt(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=y6.fromNumber(this.Te)}de(e,n,c){let r=e.add(n.multiply(y6.fromNumber(c)));return r.compare(Vk)===1&&(r=new y6([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=ql(e),[c,r]=Wl(n);for(let s=0;s<this.hashCount;s++){const i=this.de(c,r,s);if(!this.Ae(i))return!1}return!0}static create(e,n,c){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new x5(s,r,n);return c.forEach(a=>i.insert(a)),i}insert(e){if(this.Te===0)return;const n=ql(e),[c,r]=Wl(n);for(let s=0;s<this.hashCount;s++){const i=this.de(c,r,s);this.Re(i)}}Re(e){const n=Math.floor(e/8),c=e%8;this.bitmap[n]|=1<<c}}class bt extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class e8{constructor(e,n,c,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=c,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,c){const r=new Map;return r.set(e,Y0.createSynthesizedTargetChangeForCurrentChange(e,n,c)),new e8(r2.min(),r,new e1(C2),p4(),u2())}}class Y0{constructor(e,n,c,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=c,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,c){return new Y0(c,n,u2(),u2(),u2())}}/**
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
 */class cc{constructor(e,n,c,r){this.Ve=e,this.removedTargetIds=n,this.key=c,this.me=r}}class Hp{constructor(e,n){this.targetId=e,this.fe=n}}class zp{constructor(e,n,c=E1.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=c,this.cause=r}}class jl{constructor(){this.ge=0,this.pe=Gl(),this.ye=E1.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=u2(),n=u2(),c=u2();return this.pe.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:c=c.add(r);break;default:e2()}}),new Y0(this.ye,this.we,e,n,c)}Fe(){this.Se=!1,this.pe=Gl()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,N2(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Hk{constructor(e){this.Le=e,this.ke=new Map,this.qe=p4(),this.Qe=$l(),this.Ke=new e1(C2)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const c=this.ze(n);switch(e.state){case 0:this.je(n)&&c.Ce(e.resumeToken);break;case 1:c.Ne(),c.be||c.Fe(),c.Ce(e.resumeToken);break;case 2:c.Ne(),c.be||this.removeTarget(n);break;case 3:this.je(n)&&(c.Be(),c.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),c.Ce(e.resumeToken));break;default:e2()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((c,r)=>{this.je(r)&&n(r)})}Je(e){const n=e.targetId,c=e.fe.count,r=this.Ye(n);if(r){const s=r.target;if(Mi(s))if(c===0){const i=new X(s.path);this.We(n,i,H1.newNoDocument(i,r2.min()))}else N2(c===1);else{const i=this.Ze(n);if(i!==c){const a=this.Xe(e),o=a?this.et(a,e,i):1;if(o!==0){this.He(n);const l=o===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:c="",padding:r=0},hashCount:s=0}=n;let i,a;try{i=De(c).toUint8Array()}catch(o){if(o instanceof Jm)return D6("Decoding the base64 bloom filter in existence filter failed ("+o.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw o}try{a=new x5(i,r,s)}catch(o){return D6(o instanceof bt?"BloomFilter error: ":"Applying bloom filter failed: ",o),null}return a.Te===0?null:a}et(e,n,c){return n.fe.count===c-this.rt(e,n.targetId)?0:2}rt(e,n){const c=this.Le.getRemoteKeysForTarget(n);let r=0;return c.forEach(s=>{const i=this.Le.nt(),a=`projects/${i.projectId}/databases/${i.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),r++)}),r}it(e){const n=new Map;this.ke.forEach((s,i)=>{const a=this.Ye(i);if(a){if(s.current&&Mi(a.target)){const o=new X(a.target.path);this.qe.get(o)!==null||this.st(i,o)||this.We(i,o,H1.newNoDocument(o,e))}s.De&&(n.set(i,s.ve()),s.Fe())}});let c=u2();this.Qe.forEach((s,i)=>{let a=!0;i.forEachWhile(o=>{const l=this.Ye(o);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(c=c.add(s))}),this.qe.forEach((s,i)=>i.setReadTime(e));const r=new e8(e,n,this.Ke,this.qe,c);return this.qe=p4(),this.Qe=$l(),this.Ke=new e1(C2),r}Ue(e,n){if(!this.je(e))return;const c=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,c),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,c){if(!this.je(e))return;const r=this.ze(e);this.st(e,n)?r.Me(n,1):r.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),c&&(this.qe=this.qe.insert(n,c))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new jl,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new g1(C2),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new jl),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function $l(){return new e1(X.comparator)}function Gl(){return new e1(X.comparator)}const zk={asc:"ASCENDING",desc:"DESCENDING"},Mk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yk={and:"AND",or:"OR"};class Lk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function wi(t,e){return t.useProto3Json||Kr(e)?e:{value:e}}function Oc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Mp(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wk(t,e){return Oc(t,e.toTimestamp())}function q3(t){return N2(!!t),r2.fromTimestamp(function(n){const c=Y4(n);return new X2(c.seconds,c.nanos)}(t))}function I5(t,e){return bi(t,e).canonicalString()}function bi(t,e){const n=function(r){return new D2(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function yp(t){const e=D2.fromString(t);return N2(Tp(e)),e}function Si(t,e){return I5(t.databaseId,e.path)}function hs(t,e){const n=yp(e);if(n.get(1)!==t.databaseId.projectId)throw new O(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new O(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(wp(n))}function Lp(t,e){return I5(t.databaseId,e)}function bk(t){const e=yp(t);return e.length===4?D2.emptyPath():wp(e)}function Ti(t){return new D2(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wp(t){return N2(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Kl(t,e,n){return{name:Si(t,e),fields:n.value.mapValue.fields}}function Sk(t,e){let n;if("targetChange"in e){e.targetChange;const c=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:e2()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(l,f){return l.useProto3Json?(N2(f===void 0||typeof f=="string"),E1.fromBase64String(f||"")):(N2(f===void 0||f instanceof Uint8Array),E1.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),i=e.targetChange.cause,a=i&&function(l){const f=l.code===void 0?L.UNKNOWN:Vp(l.code);return new O(f,l.message||"")}(i);n=new zp(c,r,s,a||null)}else if("documentChange"in e){e.documentChange;const c=e.documentChange;c.document,c.document.name,c.document.updateTime;const r=hs(t,c.document.name),s=q3(c.document.updateTime),i=c.document.createTime?q3(c.document.createTime):r2.min(),a=new B1({mapValue:{fields:c.document.fields}}),o=H1.newFoundDocument(r,s,i,a),l=c.targetIds||[],f=c.removedTargetIds||[];n=new cc(l,f,o.key,o)}else if("documentDelete"in e){e.documentDelete;const c=e.documentDelete;c.document;const r=hs(t,c.document),s=c.readTime?q3(c.readTime):r2.min(),i=H1.newNoDocument(r,s),a=c.removedTargetIds||[];n=new cc([],a,i.key,i)}else if("documentRemove"in e){e.documentRemove;const c=e.documentRemove;c.document;const r=hs(t,c.document),s=c.removedTargetIds||[];n=new cc([],s,r,null)}else{if(!("filter"in e))return e2();{e.filter;const c=e.filter;c.targetId;const{count:r=0,unchangedNames:s}=c,i=new gk(r,s),a=c.targetId;n=new Hp(a,i)}}return n}function Tk(t,e){let n;if(e instanceof Q0)n={update:Kl(t,e.key,e.value)};else if(e instanceof E5)n={delete:Si(t,e.key)};else if(e instanceof se)n={update:Kl(t,e.key,e.data),updateMask:Dk(e.fieldMask)};else{if(!(e instanceof mk))return e2();n={verify:Si(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(c=>function(s,i){const a=i.transform;if(a instanceof Pc)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof z0)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof M0)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Dc)return{fieldPath:i.field.canonicalString(),increment:a.Ie};throw e2()}(0,c))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:wk(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:e2()}(t,e.precondition)),n}function Ak(t,e){return t&&t.length>0?(N2(e!==void 0),t.map(n=>function(r,s){let i=r.updateTime?q3(r.updateTime):q3(s);return i.isEqual(r2.min())&&(i=q3(s)),new uk(i,r.transformResults||[])}(n,e))):[]}function Ek(t,e){return{documents:[Lp(t,e.path)]}}function Nk(t,e){const n={structuredQuery:{}},c=e.path;let r;e.collectionGroup!==null?(r=c,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=c.popLast(),n.structuredQuery.from=[{collectionId:c.lastSegment()}]),n.parent=Lp(t,r);const s=function(l){if(l.length!==0)return Sp(M3.create(l,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(f=>function(h){return{field:a6(h.field),direction:kk(h.dir)}}(f))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const a=wi(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:r}}function xk(t){let e=bk(t.parent);const n=t.structuredQuery,c=n.from?n.from.length:0;let r=null;if(c>0){N2(c===1);const f=n.from[0];f.allDescendants?r=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(u){const h=bp(u);return h instanceof M3&&np(h)?h.getFilters():[h]}(n.where));let i=[];n.orderBy&&(i=function(u){return u.map(h=>function(m){return new H0(o6(m.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Kr(h)?null:h}(n.limit));let o=null;n.startAt&&(o=function(u){const h=!!u.before,d=u.values||[];return new Rc(d,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new Rc(d,h)}(n.endAt)),JI(e,r,i,s,a,"F",o,l)}function Ik(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return e2()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function bp(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const c=o6(n.unaryFilter.field);return Y2.create(c,"==",{doubleValue:NaN});case"IS_NULL":const r=o6(n.unaryFilter.field);return Y2.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=o6(n.unaryFilter.field);return Y2.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=o6(n.unaryFilter.field);return Y2.create(i,"!=",{nullValue:"NULL_VALUE"});default:return e2()}}(t):t.fieldFilter!==void 0?function(n){return Y2.create(o6(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return e2()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return M3.create(n.compositeFilter.filters.map(c=>bp(c)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return e2()}}(n.compositeFilter.op))}(t):e2()}function kk(t){return zk[t]}function Rk(t){return Mk[t]}function Pk(t){return yk[t]}function a6(t){return{fieldPath:t.canonicalString()}}function o6(t){return p1.fromServerFormat(t.fieldPath)}function Sp(t){return t instanceof Y2?function(n){if(n.op==="=="){if(Il(n.value))return{unaryFilter:{field:a6(n.field),op:"IS_NAN"}};if(xl(n.value))return{unaryFilter:{field:a6(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Il(n.value))return{unaryFilter:{field:a6(n.field),op:"IS_NOT_NAN"}};if(xl(n.value))return{unaryFilter:{field:a6(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:a6(n.field),op:Rk(n.op),value:n.value}}}(t):t instanceof M3?function(n){const c=n.getFilters().map(r=>Sp(r));return c.length===1?c[0]:{compositeFilter:{op:Pk(n.op),filters:c}}}(t):e2()}function Dk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Tp(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class k4{constructor(e,n,c,r,s=r2.min(),i=r2.min(),a=E1.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=n,this.purpose=c,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new k4(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new k4(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new k4(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new k4(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ok{constructor(e){this.ct=e}}function Fk(t){const e=xk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Li(e,e.limit,"L"):e}/**
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
 */class Bk{constructor(){this._n=new Uk}addToCollectionParentIndex(e,n){return this._n.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(Q4.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(Q4.min())}updateCollectionGroup(e,n,c){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class Uk{constructor(){this.index={}}add(e){const n=e.lastSegment(),c=e.popLast(),r=this.index[n]||new g1(D2.comparator),s=!r.has(c);return this.index[n]=r.add(c),s}has(e){const n=e.lastSegment(),c=e.popLast(),r=this.index[n];return r&&r.has(c)}getEntries(e){return(this.index[e]||new g1(D2.comparator)).toArray()}}/**
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
 */class U6{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new U6(0)}static Bn(){return new U6(-1)}}/**
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
 */class qk{constructor(){this.changes=new st(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,H1.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const c=this.changes.get(n);return c!==void 0?b.resolve(c):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Wk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class jk{constructor(e,n,c,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=c,this.indexManager=r}getDocument(e,n){let c=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(c=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(c!==null&&Bt(c.mutation,r,Q1.empty(),X2.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(c=>this.getLocalViewOfDocuments(e,c,u2()).next(()=>c))}getLocalViewOfDocuments(e,n,c=u2()){const r=ye();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,c).next(s=>{let i=wt();return s.forEach((a,o)=>{i=i.insert(a,o.overlayedDocument)}),i}))}getOverlayedDocuments(e,n){const c=ye();return this.populateOverlays(e,c,n).next(()=>this.computeViews(e,n,c,u2()))}populateOverlays(e,n,c){const r=[];return c.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((i,a)=>{n.set(i,a)})})}computeViews(e,n,c,r){let s=p4();const i=Ft(),a=function(){return Ft()}();return n.forEach((o,l)=>{const f=c.get(l.key);r.has(l.key)&&(f===void 0||f.mutation instanceof se)?s=s.insert(l.key,l):f!==void 0?(i.set(l.key,f.mutation.getFieldMask()),Bt(f.mutation,l,f.mutation.getFieldMask(),X2.now())):i.set(l.key,Q1.empty())}),this.recalculateAndSaveOverlays(e,s).next(o=>(o.forEach((l,f)=>i.set(l,f)),n.forEach((l,f)=>{var u;return a.set(l,new Wk(f,(u=i.get(l))!==null&&u!==void 0?u:null))}),a))}recalculateAndSaveOverlays(e,n){const c=Ft();let r=new e1((i,a)=>i-a),s=u2();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(i=>{for(const a of i)a.keys().forEach(o=>{const l=n.get(o);if(l===null)return;let f=c.get(o)||Q1.empty();f=a.applyToLocalView(l,f),c.set(o,f);const u=(r.get(a.batchId)||u2()).add(o);r=r.insert(a.batchId,u)})}).next(()=>{const i=[],a=r.getReverseIterator();for(;a.hasNext();){const o=a.getNext(),l=o.key,f=o.value,u=up();f.forEach(h=>{if(!s.has(h)){const d=_p(n.get(h),c.get(h));d!==null&&u.set(h,d),s=s.add(h)}}),i.push(this.documentOverlayCache.saveOverlays(e,l,u))}return b.waitFor(i)}).next(()=>c)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(c=>this.recalculateAndSaveOverlays(e,c))}getDocumentsMatchingQuery(e,n,c,r){return function(i){return X.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):ip(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,c,r):this.getDocumentsMatchingCollectionQuery(e,n,c,r)}getNextDocuments(e,n,c,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,c,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,c.largestBatchId,r-s.size):b.resolve(ye());let a=-1,o=s;return i.next(l=>b.forEach(l,(f,u)=>(a<u.largestBatchId&&(a=u.largestBatchId),s.get(f)?b.resolve():this.remoteDocumentCache.getEntry(e,f).next(h=>{o=o.insert(f,h)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,o,l,u2())).next(f=>({batchId:a,changes:fp(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(c=>{let r=wt();return c.isFoundDocument()&&(r=r.insert(c.key,c)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,c,r){const s=n.collectionGroup;let i=wt();return this.indexManager.getCollectionParents(e,s).next(a=>b.forEach(a,o=>{const l=function(u,h){return new rt(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,o.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,c,r).next(f=>{f.forEach((u,h)=>{i=i.insert(u,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,n,c,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,c.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,c,s,r))).next(i=>{s.forEach((o,l)=>{const f=l.getKey();i.get(f)===null&&(i=i.insert(f,H1.newInvalidDocument(f)))});let a=wt();return i.forEach((o,l)=>{const f=s.get(o);f!==void 0&&Bt(f.mutation,l,Q1.empty(),X2.now()),Xr(n,l)&&(a=a.insert(o,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return b.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:q3(r.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(r){return{name:r.name,query:Fk(r.bundledQuery),readTime:q3(r.readTime)}}(n)),b.resolve()}}/**
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
 */class Gk{constructor(){this.overlays=new e1(X.comparator),this.hr=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const c=ye();return b.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&c.set(r,s)})).next(()=>c)}saveOverlays(e,n,c){return c.forEach((r,s)=>{this.ht(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,c){const r=this.hr.get(c);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(c)),b.resolve()}getOverlaysForCollection(e,n,c){const r=ye(),s=n.length+1,i=new X(n.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){const o=a.getNext().value,l=o.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===s&&o.largestBatchId>c&&r.set(o.getKey(),o)}return b.resolve(r)}getOverlaysForCollectionGroup(e,n,c,r){let s=new e1((l,f)=>l-f);const i=this.overlays.getIterator();for(;i.hasNext();){const l=i.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>c){let f=s.get(l.largestBatchId);f===null&&(f=ye(),s=s.insert(l.largestBatchId,f)),f.set(l.getKey(),l)}}const a=ye(),o=s.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((l,f)=>a.set(l,f)),!(a.size()>=r)););return b.resolve(a)}ht(e,n,c){const r=this.overlays.get(c.key);if(r!==null){const i=this.hr.get(r.largestBatchId).delete(c.key);this.hr.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(c.key,new vk(n,c));let s=this.hr.get(n);s===void 0&&(s=u2(),this.hr.set(n,s)),this.hr.set(n,s.add(c.key))}}/**
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
 */class k5{constructor(){this.Pr=new g1(i1.Ir),this.Tr=new g1(i1.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const c=new i1(e,n);this.Pr=this.Pr.add(c),this.Tr=this.Tr.add(c)}dr(e,n){e.forEach(c=>this.addReference(c,n))}removeReference(e,n){this.Ar(new i1(e,n))}Rr(e,n){e.forEach(c=>this.removeReference(c,n))}Vr(e){const n=new X(new D2([])),c=new i1(n,e),r=new i1(n,e+1),s=[];return this.Tr.forEachInRange([c,r],i=>{this.Ar(i),s.push(i.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new X(new D2([])),c=new i1(n,e),r=new i1(n,e+1);let s=u2();return this.Tr.forEachInRange([c,r],i=>{s=s.add(i.key)}),s}containsKey(e){const n=new i1(e,0),c=this.Pr.firstAfterOrEqual(n);return c!==null&&e.isEqual(c.key)}}class i1{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return X.comparator(e.key,n.key)||C2(e.pr,n.pr)}static Er(e,n){return C2(e.pr,n.pr)||X.comparator(e.key,n.key)}}/**
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
 */class Kk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new g1(i1.Ir)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,c,r){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new pk(s,n,c,r);this.mutationQueue.push(i);for(const a of r)this.wr=this.wr.add(new i1(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(i)}lookupMutationBatch(e,n){return b.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const c=n+1,r=this.br(c),s=r<0?0:r;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const c=new i1(n,0),r=new i1(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([c,r],i=>{const a=this.Sr(i.pr);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let c=new g1(C2);return n.forEach(r=>{const s=new i1(r,0),i=new i1(r,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,i],a=>{c=c.add(a.pr)})}),b.resolve(this.Dr(c))}getAllMutationBatchesAffectingQuery(e,n){const c=n.path,r=c.length+1;let s=c;X.isDocumentKey(s)||(s=s.child(""));const i=new i1(new X(s),0);let a=new g1(C2);return this.wr.forEachWhile(o=>{const l=o.key.path;return!!c.isPrefixOf(l)&&(l.length===r&&(a=a.add(o.pr)),!0)},i),b.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(c=>{const r=this.Sr(c);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){N2(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let c=this.wr;return b.forEach(n.mutations,r=>{const s=new i1(r.key,n.batchId);return c=c.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.wr=c})}Mn(e){}containsKey(e,n){const c=new i1(n,0),r=this.wr.firstAfterOrEqual(c);return b.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Qk{constructor(e){this.vr=e,this.docs=function(){return new e1(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const c=n.key,r=this.docs.get(c),s=r?r.size:0,i=this.vr(n);return this.docs=this.docs.insert(c,{document:n.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,c.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const c=this.docs.get(n);return b.resolve(c?c.document.mutableCopy():H1.newInvalidDocument(n))}getEntries(e,n){let c=p4();return n.forEach(r=>{const s=this.docs.get(r);c=c.insert(r,s?s.document.mutableCopy():H1.newInvalidDocument(r))}),b.resolve(c)}getDocumentsMatchingQuery(e,n,c,r){let s=p4();const i=n.path,a=new X(i.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){const{key:l,value:{document:f}}=o.getNext();if(!i.isPrefixOf(l.path))break;l.path.length>i.length+1||xI(NI(f),c)<=0||(r.has(f.key)||Xr(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,c,r){e2()}Fr(e,n){return b.forEach(this.docs,c=>n(c))}newChangeBuffer(e){return new Yk(this)}getSize(e){return b.resolve(this.size)}}class Yk extends qk{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((c,r)=>{r.isValidDocument()?n.push(this.ar.addEntry(e,r)):this.ar.removeEntry(c)}),b.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class Xk{constructor(e){this.persistence=e,this.Mr=new st(n=>T5(n),A5),this.lastRemoteSnapshotVersion=r2.min(),this.highestTargetId=0,this.Or=0,this.Nr=new k5,this.targetCount=0,this.Br=U6.Nn()}forEachTarget(e,n){return this.Mr.forEach((c,r)=>n(r)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,c){return c&&(this.lastRemoteSnapshotVersion=c),n>this.Or&&(this.Or=n),b.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new U6(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.qn(n),b.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,c){let r=0;const s=[];return this.Mr.forEach((i,a)=>{a.sequenceNumber<=n&&c.get(a.targetId)===null&&(this.Mr.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),b.waitFor(s).next(()=>r)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const c=this.Mr.get(n)||null;return b.resolve(c)}addMatchingKeys(e,n,c){return this.Nr.dr(n,c),b.resolve()}removeMatchingKeys(e,n,c){this.Nr.Rr(n,c);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(i=>{s.push(r.markPotentiallyOrphaned(e,i))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const c=this.Nr.gr(n);return b.resolve(c)}containsKey(e,n){return b.resolve(this.Nr.containsKey(n))}}/**
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
 */class Jk{constructor(e,n){this.Lr={},this.overlays={},this.kr=new L5(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Xk(this),this.indexManager=new Bk,this.remoteDocumentCache=function(r){return new Qk(r)}(c=>this.referenceDelegate.Kr(c)),this.serializer=new Ok(n),this.$r=new $k(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Gk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let c=this.Lr[e.toKey()];return c||(c=new Kk(n,this.referenceDelegate),this.Lr[e.toKey()]=c),c}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,c){R("MemoryPersistence","Starting transaction:",e);const r=new Zk(this.kr.next());return this.referenceDelegate.Ur(),c(r).next(s=>this.referenceDelegate.Wr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Gr(e,n){return b.or(Object.values(this.Lr).map(c=>()=>c.containsKey(e,n)))}}class Zk extends kI{constructor(e){super(),this.currentSequenceNumber=e}}class R5{constructor(e){this.persistence=e,this.zr=new k5,this.jr=null}static Hr(e){return new R5(e)}get Jr(){if(this.jr)return this.jr;throw e2()}addReference(e,n,c){return this.zr.addReference(c,n),this.Jr.delete(c.toString()),b.resolve()}removeReference(e,n,c){return this.zr.removeReference(c,n),this.Jr.add(c.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),b.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(r=>this.Jr.add(r.toString()));const c=this.persistence.getTargetCache();return c.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.Jr.add(s.toString()))}).next(()=>c.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.Jr,c=>{const r=X.fromPath(c);return this.Yr(e,r).next(s=>{s||n.removeEntry(r,r2.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(c=>{c?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return b.or([()=>b.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class P5{constructor(e,n,c,r){this.targetId=e,this.fromCache=n,this.qi=c,this.Qi=r}static Ki(e,n){let c=u2(),r=u2();for(const s of n.docChanges)switch(s.type){case 0:c=c.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new P5(e,n.fromCache,c,r)}}/**
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
 */class eR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tR{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return OT()?8:Me.v(Z2())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,c,r){const s={result:null};return this.ji(e,n).next(i=>{s.result=i}).next(()=>{if(!s.result)return this.Hi(e,n,r,c).next(i=>{s.result=i})}).next(()=>{if(s.result)return;const i=new eR;return this.Ji(e,n,i).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,i,a.size)})}).next(()=>s.result)}Yi(e,n,c,r){return c.documentReadCount<this.Wi?(vt()<=l2.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",i6(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),b.resolve()):(vt()<=l2.DEBUG&&R("QueryEngine","Query:",i6(n),"scans",c.documentReadCount,"local documents and returns",r,"documents as results."),c.documentReadCount>this.Gi*r?(vt()<=l2.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",i6(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,U3(n))):b.resolve())}ji(e,n){if(Dl(n))return b.resolve(null);let c=U3(n);return this.indexManager.getIndexType(e,c).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Li(n,null,"F"),c=U3(n)),this.indexManager.getDocumentsMatchingTarget(e,c).next(s=>{const i=u2(...s);return this.zi.getDocuments(e,i).next(a=>this.indexManager.getMinOffset(e,c).next(o=>{const l=this.Zi(n,a);return this.Xi(n,l,i,o.readTime)?this.ji(e,Li(n,null,"F")):this.es(e,l,n,o)}))})))}Hi(e,n,c,r){return Dl(n)||r.isEqual(r2.min())?b.resolve(null):this.zi.getDocuments(e,c).next(s=>{const i=this.Zi(n,s);return this.Xi(n,i,c,r)?b.resolve(null):(vt()<=l2.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),i6(n)),this.es(e,i,n,EI(r,-1)).next(a=>a))})}Zi(e,n){let c=new g1(op(e));return n.forEach((r,s)=>{Xr(e,s)&&(c=c.add(s))}),c}Xi(e,n,c,r){if(e.limit===null)return!1;if(c.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ji(e,n,c){return vt()<=l2.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",i6(n)),this.zi.getDocumentsMatchingQuery(e,n,Q4.min(),c)}es(e,n,c,r){return this.zi.getDocumentsMatchingQuery(e,c,r).next(s=>(n.forEach(i=>{s=s.insert(i.key,i)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{constructor(e,n,c,r){this.persistence=e,this.ts=n,this.serializer=r,this.ns=new e1(C2),this.rs=new st(s=>T5(s),A5),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(c)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jk(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function cR(t,e,n,c){return new nR(t,e,n,c)}async function Ap(t,e){const n=a2(t);return await n.persistence.runTransaction("Handle user change","readonly",c=>{let r;return n.mutationQueue.getAllMutationBatches(c).next(s=>(r=s,n._s(e),n.mutationQueue.getAllMutationBatches(c))).next(s=>{const i=[],a=[];let o=u2();for(const l of r){i.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}for(const l of s){a.push(l.batchId);for(const f of l.mutations)o=o.add(f.key)}return n.localDocuments.getDocuments(c,o).next(l=>({us:l,removedBatchIds:i,addedBatchIds:a}))})})}function rR(t,e){const n=a2(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",c=>{const r=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,o,l,f){const u=l.batch,h=u.keys();let d=b.resolve();return h.forEach(m=>{d=d.next(()=>f.getEntry(o,m)).next(g=>{const C=l.docVersions.get(m);N2(C!==null),g.version.compareTo(C)<0&&(u.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),f.addEntry(g)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(o,u))}(n,c,e,s).next(()=>s.apply(c)).next(()=>n.mutationQueue.performConsistencyCheck(c)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(c,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,function(a){let o=u2();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(o=o.add(a.batch.mutations[l].key));return o}(e))).next(()=>n.localDocuments.getDocuments(c,r))})}function Ep(t){const e=a2(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function sR(t,e){const n=a2(t),c=e.snapshotVersion;let r=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const i=n.os.newChangeBuffer({trackRemovals:!0});r=n.ns;const a=[];e.targetChanges.forEach((f,u)=>{const h=r.get(u);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,f.removedDocuments,u).next(()=>n.Qr.addMatchingKeys(s,f.addedDocuments,u)));let d=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(u)!==null?d=d.withResumeToken(E1.EMPTY_BYTE_STRING,r2.min()).withLastLimboFreeSnapshotVersion(r2.min()):f.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(f.resumeToken,c)),r=r.insert(u,d),function(g,C,_){return g.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(h,d,f)&&a.push(n.Qr.updateTargetData(s,d))});let o=p4(),l=u2();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),a.push(iR(s,i,e.documentUpdates).next(f=>{o=f.cs,l=f.ls})),!c.isEqual(r2.min())){const f=n.Qr.getLastRemoteSnapshotVersion(s).next(u=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,c));a.push(f)}return b.waitFor(a).next(()=>i.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,o,l)).next(()=>o)}).then(s=>(n.ns=r,s))}function iR(t,e,n){let c=u2(),r=u2();return n.forEach(s=>c=c.add(s)),e.getEntries(t,c).next(s=>{let i=p4();return n.forEach((a,o)=>{const l=s.get(a);o.isFoundDocument()!==l.isFoundDocument()&&(r=r.add(a)),o.isNoDocument()&&o.version.isEqual(r2.min())?(e.removeEntry(a,o.readTime),i=i.insert(a,o)):!l.isValidDocument()||o.version.compareTo(l.version)>0||o.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(o),i=i.insert(a,o)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",o.version)}),{cs:i,ls:r}})}function aR(t,e){const n=a2(t);return n.persistence.runTransaction("Get next mutation batch","readonly",c=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(c,e)))}function oR(t,e){const n=a2(t);return n.persistence.runTransaction("Allocate target","readwrite",c=>{let r;return n.Qr.getTargetData(c,e).next(s=>s?(r=s,b.resolve(r)):n.Qr.allocateTargetId(c).next(i=>(r=new k4(e,i,"TargetPurposeListen",c.currentSequenceNumber),n.Qr.addTargetData(c,r).next(()=>r))))}).then(c=>{const r=n.ns.get(c.targetId);return(r===null||c.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ns=n.ns.insert(c.targetId,c),n.rs.set(e,c.targetId)),c})}async function Ai(t,e,n){const c=a2(t),r=c.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await c.persistence.runTransaction("Release target",s,i=>c.persistence.referenceDelegate.removeTarget(i,r))}catch(i){if(!K0(i))throw i;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${i}`)}c.ns=c.ns.remove(e),c.rs.delete(r.target)}function Ql(t,e,n){const c=a2(t);let r=r2.min(),s=u2();return c.persistence.runTransaction("Execute query","readwrite",i=>function(o,l,f){const u=a2(o),h=u.rs.get(f);return h!==void 0?b.resolve(u.ns.get(h)):u.Qr.getTargetData(l,f)}(c,i,U3(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,c.Qr.getMatchingKeysForTargetId(i,a.targetId).next(o=>{s=o})}).next(()=>c.ts.getDocumentsMatchingQuery(i,e,n?r:r2.min(),n?s:u2())).next(a=>(lR(c,ek(e),a),{documents:a,hs:s})))}function lR(t,e,n){let c=t.ss.get(e)||r2.min();n.forEach((r,s)=>{s.readTime.compareTo(c)>0&&(c=s.readTime)}),t.ss.set(e,c)}class Yl{constructor(){this.activeTargetIds=ik()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fR{constructor(){this.no=new Yl,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,c){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,c){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Yl,Promise.resolve()}handleUserChange(e,n,c){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uR{io(e){}shutdown(){}}/**
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
 */class Xl{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Nn=null;function ds(){return Nn===null?Nn=function(){return 268435456+Math.round(2147483648*Math.random())}():Nn++,"0x"+Nn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dR{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const C1="WebChannelConnection";class mR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const c=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=c+"://"+n.host,this.po=`projects/${r}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get wo(){return!1}So(n,c,r,s,i){const a=ds(),o=this.bo(n,c.toUriEncodedString());R("RestConnection",`Sending RPC '${n}' ${a}:`,o,r);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,s,i),this.Co(n,o,l,r).then(f=>(R("RestConnection",`Received RPC '${n}' ${a}: `,f),f),f=>{throw D6("RestConnection",`RPC '${n}' ${a} failed with error: `,f,"url: ",o,"request:",r),f})}vo(n,c,r,s,i,a){return this.So(n,c,r,s,i)}Do(n,c,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ct}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),c&&c.headers.forEach((s,i)=>n[i]=s),r&&r.headers.forEach((s,i)=>n[i]=s)}bo(n,c){const r=hR[n];return`${this.fo}/v1/${c}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,c,r){const s=ds();return new Promise((i,a)=>{const o=new VI;o.setWithCredentials(!0),o.listenOnce(_I.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case us.NO_ERROR:const f=o.getResponseJson();R(C1,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),i(f);break;case us.TIMEOUT:R(C1,`RPC '${e}' ${s} timed out`),a(new O(L.DEADLINE_EXCEEDED,"Request time out"));break;case us.HTTP_ERROR:const u=o.getStatus();if(R(C1,`RPC '${e}' ${s} failed with status:`,u,"response text:",o.getResponseText()),u>0){let h=o.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const m=function(C){const _=C.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(_)>=0?_:L.UNKNOWN}(d.status);a(new O(m,d.message))}else a(new O(L.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new O(L.UNAVAILABLE,"Connection failed."));break;default:e2()}}finally{R(C1,`RPC '${e}' ${s} completed.`)}});const l=JSON.stringify(r);R(C1,`RPC '${e}' ${s} sending request:`,r),o.send(n,"POST",l,c,15)})}Fo(e,n,c){const r=ds(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=vI(),a=gI(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Do(o.initMessageHeaders,n,c),o.encodeInitMessageHeaders=!0;const f=s.join("");R(C1,`Creating RPC '${e}' stream ${r}: ${f}`,o);const u=i.createWebChannel(f,o);let h=!1,d=!1;const m=new dR({lo:C=>{d?R(C1,`Not sending because RPC '${e}' stream ${r} is closed:`,C):(h||(R(C1,`Opening RPC '${e}' stream ${r} transport.`),u.open(),h=!0),R(C1,`RPC '${e}' stream ${r} sending:`,C),u.send(C))},ho:()=>u.close()}),g=(C,_,z)=>{C.listen(_,M=>{try{z(M)}catch(V){setTimeout(()=>{throw V},0)}})};return g(u,Tn.EventType.OPEN,()=>{d||R(C1,`RPC '${e}' stream ${r} transport opened.`)}),g(u,Tn.EventType.CLOSE,()=>{d||(d=!0,R(C1,`RPC '${e}' stream ${r} transport closed`),m.Vo())}),g(u,Tn.EventType.ERROR,C=>{d||(d=!0,D6(C1,`RPC '${e}' stream ${r} transport errored:`,C),m.Vo(new O(L.UNAVAILABLE,"The operation could not be completed")))}),g(u,Tn.EventType.MESSAGE,C=>{var _;if(!d){const z=C.data[0];N2(!!z);const M=z,V=M.error||((_=M[0])===null||_===void 0?void 0:_.error);if(V){R(C1,`RPC '${e}' stream ${r} received error:`,V);const S=V.status;let B=function(Q){const t2=G2[Q];if(t2!==void 0)return Vp(t2)}(S),G=V.message;B===void 0&&(B=L.INTERNAL,G="Unknown error status: "+S+" with message "+V.message),d=!0,m.Vo(new O(B,G)),u.close()}else R(C1,`RPC '${e}' stream ${r} received:`,z),m.mo(z)}}),g(a,CI.STAT_EVENT,C=>{C.stat===wl.PROXY?R(C1,`RPC '${e}' stream ${r} detected buffering proxy`):C.stat===wl.NOPROXY&&R(C1,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{m.Ro()},0),m}}function ms(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t8(t){return new Lk(t,!0)}/**
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
 */class Np{constructor(e,n,c=1e3,r=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=c,this.xo=r,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),c=Math.max(0,Date.now()-this.Lo),r=Math.max(0,n-c);r>0&&R("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${c} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class xp{constructor(e,n,c,r,s,i,a,o){this.oi=e,this.$o=c,this.Uo=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Np(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?($3(n.toString()),$3("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([c,r])=>{this.Wo===n&&this.o_(c,r)},c=>{e(()=>{const r=new O(L.UNKNOWN,"Fetching auth token failed: "+c.message);return this.__(r)})})}o_(e,n){const c=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{c(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(r=>{c(()=>this.__(r))}),this.stream.onMessage(r=>{c(()=>this.onMessage(r))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class pR extends xp{constructor(e,n,c,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,c,r,i),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=Sk(this.serializer,e),c=function(s){if(!("targetChange"in s))return r2.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?r2.min():i.readTime?q3(i.readTime):r2.min()}(e);return this.listener.u_(n,c)}c_(e){const n={};n.database=Ti(this.serializer),n.addTarget=function(s,i){let a;const o=i.target;if(a=Mi(o)?{documents:Ek(s,o)}:{query:Nk(s,o).ut},a.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){a.resumeToken=Mp(s,i.resumeToken);const l=wi(s,i.expectedCount);l!==null&&(a.expectedCount=l)}else if(i.snapshotVersion.compareTo(r2.min())>0){a.readTime=Oc(s,i.snapshotVersion.toTimestamp());const l=wi(s,i.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const c=Ik(this.serializer,e);c&&(n.labels=c),this.t_(n)}l_(e){const n={};n.database=Ti(this.serializer),n.removeTarget=e,this.t_(n)}}class vR extends xp{constructor(e,n,c,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,c,r,i),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(N2(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=Ak(e.writeResults,e.commitTime),c=q3(e.commitTime);return this.listener.T_(c,n)}return N2(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Ti(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(c=>Tk(this.serializer,c))};this.t_(n)}}/**
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
 */class gR extends class{}{constructor(e,n,c,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=c,this.serializer=r,this.A_=!1}R_(){if(this.A_)throw new O(L.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,c,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.So(e,bi(n,c),r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(L.UNKNOWN,s.toString())})}vo(e,n,c,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.vo(e,bi(n,c),r,i,a,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(L.UNKNOWN,i.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class _R{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?($3(n),this.g_=!1):R("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class CR{constructor(e,n,c,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=c,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(i=>{c.enqueueAndForget(async()=>{Qe(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(o){const l=a2(o);l.v_.add(4),await X0(l),l.x_.set("Unknown"),l.v_.delete(4),await n8(l)}(this))})}),this.x_=new _R(c,r)}}async function n8(t){if(Qe(t))for(const e of t.F_)await e(!0)}async function X0(t){for(const e of t.F_)await e(!1)}function Ip(t,e){const n=a2(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),F5(n)?O5(n):it(n).Jo()&&D5(n,e))}function kp(t,e){const n=a2(t),c=it(n);n.C_.delete(e),c.Jo()&&Rp(n,e),n.C_.size===0&&(c.Jo()?c.Xo():Qe(n)&&n.x_.set("Unknown"))}function D5(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(r2.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}it(t).c_(e)}function Rp(t,e){t.O_.Oe(e),it(t).l_(e)}function O5(t){t.O_=new Hk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),it(t).start(),t.x_.p_()}function F5(t){return Qe(t)&&!it(t).Ho()&&t.C_.size>0}function Qe(t){return a2(t).v_.size===0}function Pp(t){t.O_=void 0}async function VR(t){t.C_.forEach((e,n)=>{D5(t,e)})}async function HR(t,e){Pp(t),F5(t)?(t.x_.S_(e),O5(t)):t.x_.set("Unknown")}async function zR(t,e,n){if(t.x_.set("Online"),e instanceof zp&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const a of s.targetIds)r.C_.has(a)&&(await r.remoteSyncer.rejectListen(a,i),r.C_.delete(a),r.O_.removeTarget(a))}(t,e)}catch(c){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),c),await Fc(t,c)}else if(e instanceof cc?t.O_.$e(e):e instanceof Hp?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(r2.min()))try{const c=await Ep(t.localStore);n.compareTo(c)>=0&&await function(s,i){const a=s.O_.it(i);return a.targetChanges.forEach((o,l)=>{if(o.resumeToken.approximateByteSize()>0){const f=s.C_.get(l);f&&s.C_.set(l,f.withResumeToken(o.resumeToken,i))}}),a.targetMismatches.forEach((o,l)=>{const f=s.C_.get(o);if(!f)return;s.C_.set(o,f.withResumeToken(E1.EMPTY_BYTE_STRING,f.snapshotVersion)),Rp(s,o);const u=new k4(f.target,o,l,f.sequenceNumber);D5(s,u)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(c){R("RemoteStore","Failed to raise snapshot:",c),await Fc(t,c)}}async function Fc(t,e,n){if(!K0(e))throw e;t.v_.add(1),await X0(t),t.x_.set("Offline"),n||(n=()=>Ep(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await n8(t)})}function Dp(t,e){return e().catch(n=>Fc(t,n,e))}async function c8(t){const e=a2(t),n=X4(e);let c=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;MR(e);)try{const r=await aR(e.localStore,c);if(r===null){e.D_.length===0&&n.Xo();break}c=r.batchId,yR(e,r)}catch(r){await Fc(e,r)}Op(e)&&Fp(e)}function MR(t){return Qe(t)&&t.D_.length<10}function yR(t,e){t.D_.push(e);const n=X4(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function Op(t){return Qe(t)&&!X4(t).Ho()&&t.D_.length>0}function Fp(t){X4(t).start()}async function LR(t){X4(t).d_()}async function wR(t){const e=X4(t);for(const n of t.D_)e.I_(n.mutations)}async function bR(t,e,n){const c=t.D_.shift(),r=N5.from(c,e,n);await Dp(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await c8(t)}async function SR(t,e){e&&X4(t).P_&&await async function(c,r){if(function(i){return _k(i)&&i!==L.ABORTED}(r.code)){const s=c.D_.shift();X4(c).Zo(),await Dp(c,()=>c.remoteSyncer.rejectFailedWrite(s.batchId,r)),await c8(c)}}(t,e),Op(t)&&Fp(t)}async function Jl(t,e){const n=a2(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const c=Qe(n);n.v_.add(3),await X0(n),c&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await n8(n)}async function TR(t,e){const n=a2(t);e?(n.v_.delete(2),await n8(n)):e||(n.v_.add(2),await X0(n),n.x_.set("Unknown"))}function it(t){return t.N_||(t.N_=function(n,c,r){const s=a2(n);return s.R_(),new pR(c,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Po:VR.bind(null,t),To:HR.bind(null,t),u_:zR.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),F5(t)?O5(t):t.x_.set("Unknown")):(await t.N_.stop(),Pp(t))})),t.N_}function X4(t){return t.B_||(t.B_=function(n,c,r){const s=a2(n);return s.R_(),new vR(c,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Po:LR.bind(null,t),To:SR.bind(null,t),E_:wR.bind(null,t),T_:bR.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await c8(t)):(await t.B_.stop(),t.D_.length>0&&(R("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
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
 */class B5{constructor(e,n,c,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=c,this.op=r,this.removalCallback=s,this.deferred=new B3,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(i=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,c,r,s){const i=Date.now()+c,a=new B5(e,n,i,r,s);return a.start(c),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function U5(t,e){if($3("AsyncQueue",`${e}: ${t}`),K0(t))return new O(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class L6{constructor(e){this.comparator=e?(n,c)=>e(n,c)||X.comparator(n.key,c.key):(n,c)=>X.comparator(n.key,c.key),this.keyedMap=wt(),this.sortedSet=new e1(this.comparator)}static emptySet(e){return new L6(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,c)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof L6)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),c=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=c.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const c=new L6;return c.comparator=this.comparator,c.keyedMap=e,c.sortedSet=n,c}}/**
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
 */class Zl{constructor(){this.L_=new e1(X.comparator)}track(e){const n=e.doc.key,c=this.L_.get(n);c?e.type!==0&&c.type===3?this.L_=this.L_.insert(n,e):e.type===3&&c.type!==1?this.L_=this.L_.insert(n,{type:c.type,doc:e.doc}):e.type===2&&c.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&c.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&c.type===0?this.L_=this.L_.remove(n):e.type===1&&c.type===2?this.L_=this.L_.insert(n,{type:1,doc:c.doc}):e.type===0&&c.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e2():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,c)=>{e.push(c)}),e}}class q6{constructor(e,n,c,r,s,i,a,o,l){this.query=e,this.docs=n,this.oldDocs=c,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,n,c,r,s){const i=[];return n.forEach(a=>{i.push({type:0,doc:a})}),new q6(e,n,L6.emptySet(n),i,c,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,c=e.docChanges;if(n.length!==c.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==c[r].type||!n[r].doc.isEqual(c[r].doc))return!1;return!0}}/**
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
 */class AR{constructor(){this.q_=void 0,this.Q_=[]}}class ER{constructor(){this.queries=new st(e=>ap(e),Yr),this.onlineState="Unknown",this.K_=new Set}}async function q5(t,e){const n=a2(t),c=e.query;let r=!1,s=n.queries.get(c);if(s||(r=!0,s=new AR),r)try{s.q_=await n.onListen(c)}catch(i){const a=U5(i,`Initialization of query '${i6(e.query)}' failed`);return void e.onError(a)}n.queries.set(c,s),s.Q_.push(e),e.U_(n.onlineState),s.q_&&e.W_(s.q_)&&j5(n)}async function W5(t,e){const n=a2(t),c=e.query;let r=!1;const s=n.queries.get(c);if(s){const i=s.Q_.indexOf(e);i>=0&&(s.Q_.splice(i,1),r=s.Q_.length===0)}if(r)return n.queries.delete(c),n.onUnlisten(c)}function NR(t,e){const n=a2(t);let c=!1;for(const r of e){const s=r.query,i=n.queries.get(s);if(i){for(const a of i.Q_)a.W_(r)&&(c=!0);i.q_=r}}c&&j5(n)}function xR(t,e,n){const c=a2(t),r=c.queries.get(e);if(r)for(const s of r.Q_)s.onError(n);c.queries.delete(e)}function j5(t){t.K_.forEach(e=>{e.next()})}class $5{constructor(e,n,c){this.query=e,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=c||{}}W_(e){if(!this.options.includeMetadataChanges){const c=[];for(const r of e.docChanges)r.type!==3&&c.push(r);e=new q6(e.query,e.docs,e.oldDocs,c,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.z_?this.H_(e)&&(this.G_.next(e),n=!0):this.J_(e,this.onlineState)&&(this.Y_(e),n=!0),this.j_=e,n}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),n=!0),n}J_(e,n){if(!e.fromCache)return!0;const c=n!=="Offline";return(!this.options.Z_||!c)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}H_(e){if(e.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(e){e=q6.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}}/**
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
 */class Bp{constructor(e){this.key=e}}class Up{constructor(e){this.key=e}}class IR{constructor(e,n){this.query=e,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=u2(),this.mutatedKeys=u2(),this.ua=op(e),this.ca=new L6(this.ua)}get la(){return this.oa}ha(e,n){const c=n?n.Pa:new Zl,r=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,i=r,a=!1;const o=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,l=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((f,u)=>{const h=r.get(f),d=Xr(this.query,u)?u:null,m=!!h&&this.mutatedKeys.has(h.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let C=!1;h&&d?h.data.isEqual(d.data)?m!==g&&(c.track({type:3,doc:d}),C=!0):this.Ia(h,d)||(c.track({type:2,doc:d}),C=!0,(o&&this.ua(d,o)>0||l&&this.ua(d,l)<0)&&(a=!0)):!h&&d?(c.track({type:0,doc:d}),C=!0):h&&!d&&(c.track({type:1,doc:h}),C=!0,(o||l)&&(a=!0)),C&&(d?(i=i.add(d),s=g?s.add(f):s.delete(f)):(i=i.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;i.size>this.query.limit;){const f=this.query.limitType==="F"?i.last():i.first();i=i.delete(f.key),s=s.delete(f.key),c.track({type:1,doc:f})}return{ca:i,Pa:c,Xi:a,mutatedKeys:s}}Ia(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,c,r){const s=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;const i=e.Pa.k_();i.sort((f,u)=>function(d,m){const g=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return e2()}};return g(d)-g(m)}(f.type,u.type)||this.ua(f.doc,u.doc)),this.Ta(c),r=r!=null&&r;const a=n&&!r?this.Ea():[],o=this.aa.size===0&&this.current&&!r?1:0,l=o!==this._a;return this._a=o,i.length!==0||l?{snapshot:new q6(this.query,e.ca,s,i,e.mutatedKeys,o===0,l,!1,!!c&&c.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Zl,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}Ta(e){e&&(e.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=e.current)}Ea(){if(!this.current)return[];const e=this.aa;this.aa=u2(),this.ca.forEach(c=>{this.Aa(c.key)&&(this.aa=this.aa.add(c.key))});const n=[];return e.forEach(c=>{this.aa.has(c)||n.push(new Up(c))}),this.aa.forEach(c=>{e.has(c)||n.push(new Bp(c))}),n}Ra(e){this.oa=e.hs,this.aa=u2();const n=this.ha(e.documents);return this.applyChanges(n,!0)}Va(){return q6.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class kR{constructor(e,n,c){this.query=e,this.targetId=n,this.view=c}}class RR{constructor(e){this.key=e,this.ma=!1}}class PR{constructor(e,n,c,r,s,i){this.localStore=e,this.remoteStore=n,this.eventManager=c,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.fa={},this.ga=new st(a=>ap(a),Yr),this.pa=new Map,this.ya=new Set,this.wa=new e1(X.comparator),this.Sa=new Map,this.ba=new k5,this.Da={},this.Ca=new Map,this.va=U6.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function DR(t,e){const n=KR(t);let c,r;const s=n.ga.get(e);if(s)c=s.targetId,n.sharedClientState.addLocalQueryTarget(c),r=s.view.Va();else{const i=await oR(n.localStore,U3(e)),a=n.sharedClientState.addLocalQueryTarget(i.targetId);c=i.targetId,r=await OR(n,e,c,a==="current",i.resumeToken),n.isPrimaryClient&&Ip(n.remoteStore,i)}return r}async function OR(t,e,n,c,r){t.Ma=(u,h,d)=>async function(g,C,_,z){let M=C.view.ha(_);M.Xi&&(M=await Ql(g.localStore,C.query,!1).then(({documents:G})=>C.view.ha(G,M)));const V=z&&z.targetChanges.get(C.targetId),S=z&&z.targetMismatches.get(C.targetId)!=null,B=C.view.applyChanges(M,g.isPrimaryClient,V,S);return tf(g,C.targetId,B.da),B.snapshot}(t,u,h,d);const s=await Ql(t.localStore,e,!0),i=new IR(e,s.hs),a=i.ha(s.documents),o=Y0.createSynthesizedTargetChangeForCurrentChange(n,c&&t.onlineState!=="Offline",r),l=i.applyChanges(a,t.isPrimaryClient,o);tf(t,n,l.da);const f=new kR(e,n,i);return t.ga.set(e,f),t.pa.has(n)?t.pa.get(n).push(e):t.pa.set(n,[e]),l.snapshot}async function FR(t,e){const n=a2(t),c=n.ga.get(e),r=n.pa.get(c.targetId);if(r.length>1)return n.pa.set(c.targetId,r.filter(s=>!Yr(s,e))),void n.ga.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(c.targetId),n.sharedClientState.isActiveQueryTarget(c.targetId)||await Ai(n.localStore,c.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(c.targetId),kp(n.remoteStore,c.targetId),Ei(n,c.targetId)}).catch(G0)):(Ei(n,c.targetId),await Ai(n.localStore,c.targetId,!0))}async function BR(t,e,n){const c=QR(t);try{const r=await function(i,a){const o=a2(i),l=X2.now(),f=a.reduce((d,m)=>d.add(m.key),u2());let u,h;return o.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=p4(),g=u2();return o.os.getEntries(d,f).next(C=>{m=C,m.forEach((_,z)=>{z.isValidDocument()||(g=g.add(_))})}).next(()=>o.localDocuments.getOverlayedDocuments(d,m)).next(C=>{u=C;const _=[];for(const z of a){const M=dk(z,u.get(z.key).overlayedDocument);M!=null&&_.push(new se(z.key,M,Zm(M.value.mapValue),s3.exists(!0)))}return o.mutationQueue.addMutationBatch(d,l,_,a)}).next(C=>{h=C;const _=C.applyToLocalDocumentSet(u,g);return o.documentOverlayCache.saveOverlays(d,C.batchId,_)})}).then(()=>({batchId:h.batchId,changes:fp(u)}))}(c.localStore,e);c.sharedClientState.addPendingMutation(r.batchId),function(i,a,o){let l=i.Da[i.currentUser.toKey()];l||(l=new e1(C2)),l=l.insert(a,o),i.Da[i.currentUser.toKey()]=l}(c,r.batchId,n),await J0(c,r.changes),await c8(c.remoteStore)}catch(r){const s=U5(r,"Failed to persist write");n.reject(s)}}async function qp(t,e){const n=a2(t);try{const c=await sR(n.localStore,e);e.targetChanges.forEach((r,s)=>{const i=n.Sa.get(s);i&&(N2(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?i.ma=!0:r.modifiedDocuments.size>0?N2(i.ma):r.removedDocuments.size>0&&(N2(i.ma),i.ma=!1))}),await J0(n,c,e)}catch(c){await G0(c)}}function ef(t,e,n){const c=a2(t);if(c.isPrimaryClient&&n===0||!c.isPrimaryClient&&n===1){const r=[];c.ga.forEach((s,i)=>{const a=i.view.U_(e);a.snapshot&&r.push(a.snapshot)}),function(i,a){const o=a2(i);o.onlineState=a;let l=!1;o.queries.forEach((f,u)=>{for(const h of u.Q_)h.U_(a)&&(l=!0)}),l&&j5(o)}(c.eventManager,e),r.length&&c.fa.u_(r),c.onlineState=e,c.isPrimaryClient&&c.sharedClientState.setOnlineState(e)}}async function UR(t,e,n){const c=a2(t);c.sharedClientState.updateQueryState(e,"rejected",n);const r=c.Sa.get(e),s=r&&r.key;if(s){let i=new e1(X.comparator);i=i.insert(s,H1.newNoDocument(s,r2.min()));const a=u2().add(s),o=new e8(r2.min(),new Map,new e1(C2),i,a);await qp(c,o),c.wa=c.wa.remove(s),c.Sa.delete(e),G5(c)}else await Ai(c.localStore,e,!1).then(()=>Ei(c,e,n)).catch(G0)}async function qR(t,e){const n=a2(t),c=e.batch.batchId;try{const r=await rR(n.localStore,e);jp(n,c,null),Wp(n,c),n.sharedClientState.updateMutationState(c,"acknowledged"),await J0(n,r)}catch(r){await G0(r)}}async function WR(t,e,n){const c=a2(t);try{const r=await function(i,a){const o=a2(i);return o.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let f;return o.mutationQueue.lookupMutationBatch(l,a).next(u=>(N2(u!==null),f=u.keys(),o.mutationQueue.removeMutationBatch(l,u))).next(()=>o.mutationQueue.performConsistencyCheck(l)).next(()=>o.documentOverlayCache.removeOverlaysForBatchId(l,f,a)).next(()=>o.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,f)).next(()=>o.localDocuments.getDocuments(l,f))})}(c.localStore,e);jp(c,e,n),Wp(c,e),c.sharedClientState.updateMutationState(e,"rejected",n),await J0(c,r)}catch(r){await G0(r)}}function Wp(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function jp(t,e,n){const c=a2(t);let r=c.Da[c.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),c.Da[c.currentUser.toKey()]=r}}function Ei(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const c of t.pa.get(e))t.ga.delete(c),n&&t.fa.xa(c,n);t.pa.delete(e),t.isPrimaryClient&&t.ba.Vr(e).forEach(c=>{t.ba.containsKey(c)||$p(t,c)})}function $p(t,e){t.ya.delete(e.path.canonicalString());const n=t.wa.get(e);n!==null&&(kp(t.remoteStore,n),t.wa=t.wa.remove(e),t.Sa.delete(n),G5(t))}function tf(t,e,n){for(const c of n)c instanceof Bp?(t.ba.addReference(c.key,e),jR(t,c)):c instanceof Up?(R("SyncEngine","Document no longer in limbo: "+c.key),t.ba.removeReference(c.key,e),t.ba.containsKey(c.key)||$p(t,c.key)):e2()}function jR(t,e){const n=e.key,c=n.path.canonicalString();t.wa.get(n)||t.ya.has(c)||(R("SyncEngine","New document in limbo: "+n),t.ya.add(c),G5(t))}function G5(t){for(;t.ya.size>0&&t.wa.size<t.maxConcurrentLimboResolutions;){const e=t.ya.values().next().value;t.ya.delete(e);const n=new X(D2.fromString(e)),c=t.va.next();t.Sa.set(c,new RR(n)),t.wa=t.wa.insert(n,c),Ip(t.remoteStore,new k4(U3(Qr(n.path)),c,"TargetPurposeLimboResolution",L5._e))}}async function J0(t,e,n){const c=a2(t),r=[],s=[],i=[];c.ga.isEmpty()||(c.ga.forEach((a,o)=>{i.push(c.Ma(o,e,n).then(l=>{if((l||n)&&c.isPrimaryClient&&c.sharedClientState.updateQueryState(o.targetId,l!=null&&l.fromCache?"not-current":"current"),l){r.push(l);const f=P5.Ki(o.targetId,l);s.push(f)}}))}),await Promise.all(i),c.fa.u_(r),await async function(o,l){const f=a2(o);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>b.forEach(l,h=>b.forEach(h.qi,d=>f.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>b.forEach(h.Qi,d=>f.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!K0(u))throw u;R("LocalStore","Failed to update sequence numbers: "+u)}for(const u of l){const h=u.targetId;if(!u.fromCache){const d=f.ns.get(h),m=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(m);f.ns=f.ns.insert(h,g)}}}(c.localStore,s))}async function $R(t,e){const n=a2(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const c=await Ap(n.localStore,e);n.currentUser=e,function(s,i){s.Ca.forEach(a=>{a.forEach(o=>{o.reject(new O(L.CANCELLED,i))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,c.removedBatchIds,c.addedBatchIds),await J0(n,c.us)}}function GR(t,e){const n=a2(t),c=n.Sa.get(e);if(c&&c.ma)return u2().add(c.key);{let r=u2();const s=n.pa.get(e);if(!s)return r;for(const i of s){const a=n.ga.get(i);r=r.unionWith(a.view.la)}return r}}function KR(t){const e=a2(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UR.bind(null,e),e.fa.u_=NR.bind(null,e.eventManager),e.fa.xa=xR.bind(null,e.eventManager),e}function QR(t){const e=a2(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=WR.bind(null,e),e}class nf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=t8(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return cR(this.persistence,new tR,e.initialUser,this.serializer)}createPersistence(e){return new Jk(R5.Hr,this.serializer)}createSharedClientState(e){return new fR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class YR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=c=>ef(this.syncEngine,c,1),this.remoteStore.remoteSyncer.handleCredentialChange=$R.bind(null,this.syncEngine),await TR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ER}()}createDatastore(e){const n=t8(e.databaseInfo.databaseId),c=function(s){return new mR(s)}(e.databaseInfo);return function(s,i,a,o){return new gR(s,i,a,o)}(e.authCredentials,e.appCheckCredentials,c,n)}createRemoteStore(e){return function(c,r,s,i,a){return new CR(c,r,s,i,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ef(this.syncEngine,n,0),function(){return Xl.D()?new Xl:new uR}())}createSyncEngine(e,n){return function(r,s,i,a,o,l,f){const u=new PR(r,s,i,a,o,l);return f&&(u.Fa=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(c){const r=a2(c);R("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await X0(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class K5{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):$3("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class XR{constructor(e,n,c,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=c,this.databaseInfo=r,this.user=V1.UNAUTHENTICATED,this.clientId=Ym.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(c,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(c,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new B3;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const c=U5(n,"Failed to shutdown persistence");e.reject(c)}}),e.promise}}async function ps(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let c=n.initialUser;t.setCredentialChangeListener(async r=>{c.isEqual(r)||(await Ap(e.localStore,r),c=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function cf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZR(t);R("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(c=>Jl(e.remoteStore,c)),t.setAppCheckTokenChangeListener((c,r)=>Jl(e.remoteStore,r)),t._onlineComponents=e}function JR(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ZR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await ps(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!JR(n))throw n;D6("Error using user provided cache. Falling back to memory cache: "+n),await ps(t,new nf)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await ps(t,new nf);return t._offlineComponents}async function Gp(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await cf(t,t._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await cf(t,new YR))),t._onlineComponents}function eP(t){return Gp(t).then(e=>e.syncEngine)}async function Bc(t){const e=await Gp(t),n=e.eventManager;return n.onListen=DR.bind(null,e.syncEngine),n.onUnlisten=FR.bind(null,e.syncEngine),n}function tP(t,e,n={}){const c=new B3;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,a,o,l){const f=new K5({next:h=>{i.enqueueAndForget(()=>W5(s,u));const d=h.docs.has(a);!d&&h.fromCache?l.reject(new O(L.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&o&&o.source==="server"?l.reject(new O(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new $5(Qr(a.path),f,{includeMetadataChanges:!0,Z_:!0});return q5(s,u)}(await Bc(t),t.asyncQueue,e,n,c)),c.promise}function nP(t,e,n={}){const c=new B3;return t.asyncQueue.enqueueAndForget(async()=>function(s,i,a,o,l){const f=new K5({next:h=>{i.enqueueAndForget(()=>W5(s,u)),h.fromCache&&o.source==="server"?l.reject(new O(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),u=new $5(a,f,{includeMetadataChanges:!0,Z_:!0});return q5(s,u)}(await Bc(t),t.asyncQueue,e,n,c)),c.promise}/**
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
 */function Kp(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=new Map;/**
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
 */function Qp(t,e,n){if(!n)throw new O(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cP(t,e,n,c){if(e===!0&&c===!0)throw new O(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sf(t){if(!X.isDocumentKey(t))throw new O(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function af(t){if(X.isDocumentKey(t))throw new O(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function r8(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(c){return c.constructor?c.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":e2()}function W1(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new O(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=r8(t);throw new O(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){var n,c;if(e.host===void 0){if(e.ssl!==void 0)throw new O(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new O(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kp((c=e.experimentalLongPollingOptions)!==null&&c!==void 0?c:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(c,r){return c.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class s8{constructor(e,n,c,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=c,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new of({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new O(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new of(e),e.credentials!==void 0&&(this._authCredentials=function(c){if(!c)return new zI;switch(c.type){case"firstParty":return new wI(c.sessionIndex||"0",c.iamToken||null,c.authTokenFactory||null);case"provider":return c.client;default:throw new O(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const c=rf.get(n);c&&(R("ComponentProvider","Removing Datastore"),rf.delete(n),c.terminate())}(this),Promise.resolve()}}function rP(t,e,n,c={}){var r;const s=(t=W1(t,s8))._getSettings(),i=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==i&&D6("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:i,ssl:!1})),c.mockUserToken){let a,o;if(typeof c.mockUserToken=="string")a=c.mockUserToken,o=V1.MOCK_USER;else{a=IT(c.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const l=c.mockUserToken.sub||c.mockUserToken.user_id;if(!l)throw new O(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");o=new V1(l)}t._authCredentials=new MI(new Qm(a,o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n,c){this.converter=n,this._query=c,this.type="query",this.firestore=e}withConverter(e){return new ie(this.firestore,e,this._query)}}class T1{constructor(e,n,c){this.converter=n,this._key=c,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new B4(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new T1(this.firestore,e,this._key)}}class B4 extends ie{constructor(e,n,c){super(e,n,Qr(c)),this._path=c,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new T1(this.firestore,null,new X(e))}withConverter(e){return new B4(this.firestore,e,this._path)}}function w6(t,e,...n){if(t=c1(t),Qp("collection","path",e),t instanceof s8){const c=D2.fromString(e,...n);return af(c),new B4(t,null,c)}{if(!(t instanceof T1||t instanceof B4))throw new O(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const c=t._path.child(D2.fromString(e,...n));return af(c),new B4(t.firestore,null,c)}}function de(t,e,...n){if(t=c1(t),arguments.length===1&&(e=Ym.newId()),Qp("doc","path",e),t instanceof s8){const c=D2.fromString(e,...n);return sf(c),new T1(t,null,new X(c))}{if(!(t instanceof T1||t instanceof B4))throw new O(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const c=t._path.child(D2.fromString(e,...n));return sf(c),new T1(t.firestore,t instanceof B4?t.converter:null,new X(c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new Np(this,"async_queue_retry"),this._u=()=>{const n=ms();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=ms();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=ms();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new B3;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!K0(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(c=>{this.ru=c,this.iu=!1;const r=function(i){let a=i.message||"";return i.stack&&(a=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),a}(c);throw $3("INTERNAL UNHANDLED ERROR: ",r),c}).then(c=>(this.iu=!1,c))));return this.Xa=n,n}enqueueAfterDelay(e,n,c){this.au(),this.ou.indexOf(e)>-1&&(n=0);const r=B5.createAndSchedule(this,e,n,c,s=>this.lu(s));return this.nu.push(r),r}au(){this.ru&&e2()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,c)=>n.targetTimeMs-c.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}function lf(t){return function(n,c){if(typeof n!="object"||n===null)return!1;const r=n;for(const s of c)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class v4 extends s8{constructor(e,n,c,r){super(e,n,c,r),this.type="firestore",this._queue=function(){return new sP}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Yp(this),this._firestoreClient.terminate()}}function Uc(t,e){const n=typeof t=="object"?t:br(),c=typeof t=="string"?t:e||"(default)",r=I0(n,"firestore").getImmediate({identifier:c});if(!r._initialized){const s=xT("firestore");s&&rP(r,...s)}return r}function i8(t){return t._firestoreClient||Yp(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Yp(t){var e,n,c;const r=t._freezeSettings(),s=function(a,o,l,f){return new FI(a,o,l,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Kp(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new XR(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((c=r.localCache)===null||c===void 0)&&c._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W6{constructor(e){this._byteString=e}static fromBase64String(e){try{return new W6(E1.fromBase64String(e))}catch(n){throw new O(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new W6(E1.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a8{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new O(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new p1(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q5{constructor(e){this._methodName=e}}/**
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
 */class o8{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new O(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new O(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return C2(this._lat,e._lat)||C2(this._long,e._long)}}/**
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
 */const iP=/^__.*__$/;class aP{constructor(e,n,c){this.data=e,this.fieldMask=n,this.fieldTransforms=c}toMutation(e,n){return this.fieldMask!==null?new se(e,this.data,this.fieldMask,n,this.fieldTransforms):new Q0(e,this.data,n,this.fieldTransforms)}}class Xp{constructor(e,n,c){this.data=e,this.fieldMask=n,this.fieldTransforms=c}toMutation(e,n){return new se(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Jp(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw e2()}}class Y5{constructor(e,n,c,r,s,i){this.settings=e,this.databaseId=n,this.serializer=c,this.ignoreUndefinedProperties=r,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new Y5(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const c=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Au({path:c,Vu:!1});return r.mu(e),r}fu(e){var n;const c=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.Au({path:c,Vu:!1});return r.Eu(),r}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return qc(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(Jp(this.du)&&iP.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class oP{constructor(e,n,c){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=c||t8(e)}Su(e,n,c,r=!1){return new Y5({du:e,methodName:n,wu:c,path:p1.emptyPath(),Vu:!1,yu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function l8(t){const e=t._freezeSettings(),n=t8(t._databaseId);return new oP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Zp(t,e,n,c,r,s={}){const i=t.Su(s.merge||s.mergeFields?2:0,e,n,r);X5("Data must be an object, but it was:",i,c);const a=ev(c,i);let o,l;if(s.merge)o=new Q1(i.fieldMask),l=i.fieldTransforms;else if(s.mergeFields){const f=[];for(const u of s.mergeFields){const h=Ni(e,u,n);if(!i.contains(h))throw new O(L.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);nv(f,h)||f.push(h)}o=new Q1(f),l=i.fieldTransforms.filter(u=>o.covers(u.field))}else o=null,l=i.fieldTransforms;return new aP(new B1(a),o,l)}class f8 extends Q5{_toFieldTransform(e){if(e.du!==2)throw e.du===1?e.pu(`${this._methodName}() can only appear at the top level of your update data`):e.pu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof f8}}function lP(t,e,n,c){const r=t.Su(1,e,n);X5("Data must be an object, but it was:",r,c);const s=[],i=B1.empty();Ke(c,(o,l)=>{const f=J5(e,o,n);l=c1(l);const u=r.fu(f);if(l instanceof f8)s.push(f);else{const h=Z0(l,u);h!=null&&(s.push(f),i.set(f,h))}});const a=new Q1(s);return new Xp(i,a,r.fieldTransforms)}function fP(t,e,n,c,r,s){const i=t.Su(1,e,n),a=[Ni(e,c,n)],o=[r];if(s.length%2!=0)throw new O(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(Ni(e,s[h])),o.push(s[h+1]);const l=[],f=B1.empty();for(let h=a.length-1;h>=0;--h)if(!nv(l,a[h])){const d=a[h];let m=o[h];m=c1(m);const g=i.fu(d);if(m instanceof f8)l.push(d);else{const C=Z0(m,g);C!=null&&(l.push(d),f.set(d,C))}}const u=new Q1(l);return new Xp(f,u,i.fieldTransforms)}function uP(t,e,n,c=!1){return Z0(n,t.Su(c?4:3,e))}function Z0(t,e){if(tv(t=c1(t)))return X5("Unsupported field value:",e,t),ev(t,e);if(t instanceof Q5)return function(c,r){if(!Jp(r.du))throw r.pu(`${c._methodName}() can only be used with update() and set()`);if(!r.path)throw r.pu(`${c._methodName}() is not currently supported inside arrays`);const s=c._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(c,r){const s=[];let i=0;for(const a of c){let o=Z0(a,r.gu(i));o==null&&(o={nullValue:"NULL_VALUE"}),s.push(o),i++}return{arrayValue:{values:s}}}(t,e)}return function(c,r){if((c=c1(c))===null)return{nullValue:"NULL_VALUE"};if(typeof c=="number")return ak(r.serializer,c);if(typeof c=="boolean")return{booleanValue:c};if(typeof c=="string")return{stringValue:c};if(c instanceof Date){const s=X2.fromDate(c);return{timestampValue:Oc(r.serializer,s)}}if(c instanceof X2){const s=new X2(c.seconds,1e3*Math.floor(c.nanoseconds/1e3));return{timestampValue:Oc(r.serializer,s)}}if(c instanceof o8)return{geoPointValue:{latitude:c.latitude,longitude:c.longitude}};if(c instanceof W6)return{bytesValue:Mp(r.serializer,c._byteString)};if(c instanceof T1){const s=r.databaseId,i=c.firestore._databaseId;if(!i.isEqual(s))throw r.pu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:I5(c.firestore._databaseId||r.databaseId,c._key.path)}}throw r.pu(`Unsupported field value: ${r8(c)}`)}(t,e)}function ev(t,e){const n={};return Xm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ke(t,(c,r)=>{const s=Z0(r,e.Ru(c));s!=null&&(n[c]=s)}),{mapValue:{fields:n}}}function tv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof X2||t instanceof o8||t instanceof W6||t instanceof T1||t instanceof Q5)}function X5(t,e,n){if(!tv(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const c=r8(n);throw c==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+c)}}function Ni(t,e,n){if((e=c1(e))instanceof a8)return e._internalPath;if(typeof e=="string")return J5(t,e);throw qc("Field path arguments must be of type string or ",t,!1,void 0,n)}const hP=new RegExp("[~\\*/\\[\\]]");function J5(t,e,n){if(e.search(hP)>=0)throw qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new a8(...e.split("."))._internalPath}catch{throw qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qc(t,e,n,c,r){const s=c&&!c.isEmpty(),i=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let o="";return(s||i)&&(o+=" (found",s&&(o+=` in field ${c}`),i&&(o+=` in document ${r}`),o+=")"),new O(L.INVALID_ARGUMENT,a+t+o)}function nv(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,n,c,r,s){this._firestore=e,this._userDataWriter=n,this._key=c,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new T1(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(u8("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dP extends cv{data(){return super.data()}}function u8(t,e){return typeof e=="string"?J5(t,e):e instanceof a8?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new O(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Z5{}class sv extends Z5{}function c4(t,e,...n){let c=[];e instanceof Z5&&c.push(e),c=c.concat(n),function(s){const i=s.filter(o=>o instanceof eo).length,a=s.filter(o=>o instanceof h8).length;if(i>1||i>0&&a>0)throw new O(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(c);for(const r of c)t=r._apply(t);return t}class h8 extends sv{constructor(e,n,c){super(),this._field=e,this._op=n,this._value=c,this.type="where"}static _create(e,n,c){return new h8(e,n,c)}_apply(e){const n=this._parse(e);return iv(e._query,n),new ie(e.firestore,e.converter,yi(e._query,n))}_parse(e){const n=l8(e.firestore);return function(s,i,a,o,l,f,u){let h;if(l.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new O(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){uf(u,f);const d=[];for(const m of u)d.push(ff(o,s,m));h={arrayValue:{values:d}}}else h=ff(o,s,u)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||uf(u,f),h=uP(a,i,u,f==="in"||f==="not-in");return Y2.create(l,f,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function F1(t,e,n){const c=e,r=u8("where",t);return h8._create(r,c,n)}class eo extends Z5{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new eo(e,n)}_parse(e){const n=this._queryConstraints.map(c=>c._parse(e)).filter(c=>c.getFilters().length>0);return n.length===1?n[0]:M3.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let i=r;const a=s.getFlattenedFilters();for(const o of a)iv(i,o),i=yi(i,o)}(e._query,n),new ie(e.firestore,e.converter,yi(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class to extends sv{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new to(e,n)}_apply(e){const n=function(r,s,i){if(r.startAt!==null)throw new O(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new O(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new H0(s,i)}(e._query,this._field,this._direction);return new ie(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new rt(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function f3(t,e="asc"){const n=e,c=u8("orderBy",t);return to._create(c,n)}function ff(t,e,n){if(typeof(n=c1(n))=="string"){if(n==="")throw new O(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ip(e)&&n.indexOf("/")!==-1)throw new O(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const c=e.path.child(D2.fromString(n));if(!X.isDocumentKey(c))throw new O(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${c}' is not because it has an odd number of segments (${c.length}).`);return Nl(t,new X(c))}if(n instanceof T1)return Nl(t,n._key);throw new O(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${r8(n)}.`)}function uf(t,e){if(!Array.isArray(t)||t.length===0)throw new O(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function iv(t,e){const n=function(r,s){for(const i of r)for(const a of i.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new O(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class mP{convertValue(e,n="none"){switch(Oe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return K2(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(De(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw e2()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const c={};return Ke(e,(r,s)=>{c[r]=this.convertValue(s,n)}),c}convertGeoPoint(e){return new o8(K2(e.latitude),K2(e.longitude))}convertArray(e,n){return(e.values||[]).map(c=>this.convertValue(c,n))}convertServerTimestamp(e,n){switch(n){case"previous":const c=b5(e);return c==null?null:this.convertValue(c,n);case"estimate":return this.convertTimestamp(_0(e));default:return null}}convertTimestamp(e){const n=Y4(e);return new X2(n.seconds,n.nanos)}convertDocumentKey(e,n){const c=D2.fromString(e);N2(Tp(c));const r=new C0(c.get(1),c.get(3)),s=new X(c.popFirst(5));return r.isEqual(n)||$3(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t,e,n){let c;return c=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ov extends cv{constructor(e,n,c,r,s,i){super(e,n,c,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new rc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const c=this._document.data.field(u8("DocumentSnapshot.get",e));if(c!==null)return this._userDataWriter.convertValue(c,n.serverTimestamps)}}}class rc extends ov{data(e={}){return super.data(e)}}class lv{constructor(e,n,c,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new St(r.hasPendingWrites,r.fromCache),this.query=c}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(c=>{e.call(n,new rc(this._firestore,this._userDataWriter,c.key,c,new St(this._snapshot.mutatedKeys.has(c.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(a=>{const o=new rc(r._firestore,r._userDataWriter,a.doc.key,a.doc,new St(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:o,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const o=new rc(r._firestore,r._userDataWriter,a.doc.key,a.doc,new St(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,f=-1;return a.type!==0&&(l=i.indexOf(a.doc.key),i=i.delete(a.doc.key)),a.type!==1&&(i=i.add(a.doc),f=i.indexOf(a.doc.key)),{type:pP(a.type),doc:o,oldIndex:l,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return e2()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t){t=W1(t,T1);const e=W1(t.firestore,v4);return tP(i8(e),t._key).then(n=>uv(e,t,n))}class no extends mP{constructor(e){super(),this.firestore=e}convertBytes(e){return new W6(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new T1(this.firestore,null,n)}}function b6(t){t=W1(t,ie);const e=W1(t.firestore,v4),n=i8(e),c=new no(e);return rv(t._query),nP(n,t._query).then(r=>new lv(e,c,t,r))}function hf(t,e,n){t=W1(t,T1);const c=W1(t.firestore,v4),r=av(t.converter,e,n);return d8(c,[Zp(l8(c),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,s3.none())])}function vs(t,e,n,...c){t=W1(t,T1);const r=W1(t.firestore,v4),s=l8(r);let i;return i=typeof(e=c1(e))=="string"||e instanceof a8?fP(s,"updateDoc",t._key,e,n,c):lP(s,"updateDoc",t._key,e),d8(r,[i.toMutation(t._key,s3.exists(!0))])}function df(t){return d8(W1(t.firestore,v4),[new E5(t._key,s3.none())])}function xi(t,e){const n=W1(t.firestore,v4),c=de(t),r=av(t.converter,e);return d8(n,[Zp(l8(t.firestore),"addDoc",c._key,r,t.converter!==null,{}).toMutation(c._key,s3.exists(!1))]).then(()=>c)}function co(t,...e){var n,c,r;t=c1(t);let s={includeMetadataChanges:!1},i=0;typeof e[i]!="object"||lf(e[i])||(s=e[i],i++);const a={includeMetadataChanges:s.includeMetadataChanges};if(lf(e[i])){const u=e[i];e[i]=(n=u.next)===null||n===void 0?void 0:n.bind(u),e[i+1]=(c=u.error)===null||c===void 0?void 0:c.bind(u),e[i+2]=(r=u.complete)===null||r===void 0?void 0:r.bind(u)}let o,l,f;if(t instanceof T1)l=W1(t.firestore,v4),f=Qr(t._key.path),o={next:u=>{e[i]&&e[i](uv(l,t,u))},error:e[i+1],complete:e[i+2]};else{const u=W1(t,ie);l=W1(u.firestore,v4),f=u._query;const h=new no(l);o={next:d=>{e[i]&&e[i](new lv(l,h,u,d))},error:e[i+1],complete:e[i+2]},rv(t._query)}return function(h,d,m,g){const C=new K5(g),_=new $5(d,C,m);return h.asyncQueue.enqueueAndForget(async()=>q5(await Bc(h),_)),()=>{C.La(),h.asyncQueue.enqueueAndForget(async()=>W5(await Bc(h),_))}}(i8(l),f,a,o)}function d8(t,e){return function(c,r){const s=new B3;return c.asyncQueue.enqueueAndForget(async()=>BR(await eP(c),r,s)),s.promise}(i8(t),e)}function uv(t,e,n){const c=n.docs.get(e._key),r=new no(t);return new ov(t,r,e._key,c,new St(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(r){ct=r})(Y3),a3(new i3("firestore",(c,{instanceIdentifier:r,options:s})=>{const i=c.getProvider("app").getImmediate(),a=new v4(new yI(c.getProvider("auth-internal")),new SI(c.getProvider("app-check-internal")),function(l,f){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new O(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new C0(l.options.projectId,f)}(i,r),i);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),w1(bl,"4.4.2",e),w1(bl,"4.4.2","esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vP=new Map,gP={activated:!1,tokenObservers:[]};function y3(t){return vP.get(t)||Object.assign({},gP)}const mf={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _P{constructor(e,n,c,r,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=c,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new c0,this.pending.promise.catch(n=>{}),await CP(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new c0,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function CP(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Wc=new ne("appCheck","AppCheck",VP);function hv(t){if(!y3(t).activated)throw Wc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP="firebase-app-check-database",zP=1,Ii="firebase-app-check-store";let xn=null;function MP(){return xn||(xn=new Promise((t,e)=>{try{const n=indexedDB.open(HP,zP);n.onsuccess=c=>{t(c.target.result)},n.onerror=c=>{var r;e(Wc.create("storage-open",{originalErrorMessage:(r=c.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=c=>{const r=c.target.result;switch(c.oldVersion){case 0:r.createObjectStore(Ii,{keyPath:"compositeKey"})}}}catch(n){e(Wc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),xn)}function yP(t,e){return LP(wP(t),e)}async function LP(t,e){const c=(await MP()).transaction(Ii,"readwrite"),s=c.objectStore(Ii).put({compositeKey:t,value:e});return new Promise((i,a)=>{s.onsuccess=o=>{i()},c.onerror=o=>{var l;a(Wc.create("storage-set",{originalErrorMessage:(l=o.target.error)===null||l===void 0?void 0:l.message}))}})}function wP(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=new Z6("@firebase/app-check");function pf(t,e){return Ba()?yP(t,e).catch(n=>{ki.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP={error:"UNKNOWN_ERROR"};function SP(t){return Mr.encodeString(JSON.stringify(t),!1)}async function Ri(t,e=!1){const n=t.app;hv(n);const c=y3(n);let r=c.token,s;if(r&&!Tt(r)&&(c.token=void 0,r=void 0),!r){const o=await c.cachedTokenPromise;o&&(Tt(o)?r=o:await pf(n,void 0))}if(!e&&r&&Tt(r))return{token:r.token};let i=!1;try{c.exchangeTokenPromise||(c.exchangeTokenPromise=c.provider.getToken().finally(()=>{c.exchangeTokenPromise=void 0}),i=!0),r=await y3(n).exchangeTokenPromise}catch(o){o.code==="appCheck/throttled"?ki.warn(o.message):ki.error(o),s=o}let a;return r?s?Tt(r)?a={token:r.token,internalError:s}:a=gf(s):(a={token:r.token},c.token=r,await pf(n,r)):a=gf(s),i&&NP(n,a),a}async function TP(t){const e=t.app;hv(e);const{provider:n}=y3(e);{const{token:c}=await n.getToken();return{token:c}}}function AP(t,e,n,c){const{app:r}=t,s=y3(r),i={next:n,error:c,type:e};if(s.tokenObservers=[...s.tokenObservers,i],s.token&&Tt(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),vf(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>vf(t))}function dv(t,e){const n=y3(t),c=n.tokenObservers.filter(r=>r.next!==e);c.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=c}function vf(t){const{app:e}=t,n=y3(e);let c=n.tokenRefresher;c||(c=EP(t),n.tokenRefresher=c),!c.isRunning()&&n.isTokenAutoRefreshEnabled&&c.start()}function EP(t){const{app:e}=t;return new _P(async()=>{const n=y3(e);let c;if(n.token?c=await Ri(t,!0):c=await Ri(t),c.error)throw c.error;if(c.internalError)throw c.internalError},()=>!0,()=>{const n=y3(e);if(n.token){let c=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return c=Math.min(c,r),Math.max(0,c-Date.now())}else return 0},mf.RETRIAL_MIN_WAIT,mf.RETRIAL_MAX_WAIT)}function NP(t,e){const n=y3(t).tokenObservers;for(const c of n)try{c.type==="EXTERNAL"&&e.error!=null?c.error(e.error):c.next(e)}catch{}}function Tt(t){return t.expireTimeMillis-Date.now()>0}function gf(t){return{token:SP(bP),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=y3(this.app);for(const n of e)dv(this.app,n.next);return Promise.resolve()}}function IP(t,e){return new xP(t,e)}function kP(t){return{getToken:e=>Ri(t,e),getLimitedUseToken:()=>TP(t),addTokenListener:e=>AP(t,"INTERNAL",e),removeTokenListener:e=>dv(t.app,e)}}const RP="@firebase/app-check",PP="0.8.2",DP="app-check",_f="app-check-internal";function OP(){a3(new i3(DP,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return IP(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(_f).initialize()})),a3(new i3(_f,t=>{const e=t.getProvider("app-check").getImmediate();return kP(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),w1(RP,PP)}OP();var FP="firebase",BP="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */w1(FP,BP,"app");const UP=Symbol("firebaseApp");function mv(t){return x0()&&q1(UP,null)||br(t)}const I3=()=>{};function ro(t,e){return e.split(".").reduce((n,c)=>n&&n[c],t)}function qP(t,e,n){const c=(""+e).split("."),r=c.pop(),s=c.reduce((i,a)=>i&&i[a],t);if(s!=null)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function Ye(t){return!!t&&typeof t=="object"}const WP=Object.prototype;function jP(t){return Ye(t)&&Object.getPrototypeOf(t)===WP}function so(t){return Ye(t)&&t.type==="document"}function $P(t){return Ye(t)&&t.type==="collection"}function GP(t){return so(t)||$P(t)}function KP(t){return Ye(t)&&t.type==="query"}function QP(t){return Ye(t)&&"ref"in t}function YP(t){return Ye(t)&&typeof t.bucket=="string"}function XP(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const JP=Symbol.for("v-scx");function ZP(){return!!q1(JP,0)}var Cf={};const Vf="@firebase/database",Hf="1.0.3";/**
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
 */let pv="";function eD(t){pv=t}/**
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
 */class tD{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),m1(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:r0(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class nD{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return H3(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const vv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new tD(e)}}catch{}return new nD},Le=vv("localStorage"),Pi=vv("sessionStorage");/**
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
 */const S6=new Z6("@firebase/database"),cD=function(){let t=1;return function(){return t++}}(),gv=function(t){const e=YT(t),n=new $T;n.update(e);const c=n.digest();return Mr.encodeByteArray(c)},en=function(...t){let e="";for(let n=0;n<t.length;n++){const c=t[n];Array.isArray(c)||c&&typeof c=="object"&&typeof c.length=="number"?e+=en.apply(null,c):typeof c=="object"?e+=m1(c):e+=c,e+=" "}return e};let xe=null,zf=!0;const rD=function(t,e){P(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(S6.logLevel=l2.VERBOSE,xe=S6.log.bind(S6),e&&Pi.set("logging_enabled",!0)):typeof t=="function"?xe=t:(xe=null,Pi.remove("logging_enabled"))},z1=function(...t){if(zf===!0&&(zf=!1,xe===null&&Pi.get("logging_enabled")===!0&&rD(!0)),xe){const e=en.apply(null,t);xe(e)}},tn=function(t){return function(...e){z1(t,...e)}},Di=function(...t){const e="FIREBASE INTERNAL ERROR: "+en(...t);S6.error(e)},Fe=function(...t){const e=`FIREBASE FATAL ERROR: ${en(...t)}`;throw S6.error(e),new Error(e)},X1=function(...t){const e="FIREBASE WARNING: "+en(...t);S6.warn(e)},sD=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&X1("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},_v=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},iD=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},j6="[MIN_NAME]",Be="[MAX_NAME]",at=function(t,e){if(t===e)return 0;if(t===j6||e===Be)return-1;if(e===j6||t===Be)return 1;{const n=Mf(t),c=Mf(e);return n!==null?c!==null?n-c===0?t.length-e.length:n-c:-1:c!==null?1:t<e?-1:1}},aD=function(t,e){return t===e?0:t<e?-1:1},gt=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+m1(e))},io=function(t){if(typeof t!="object"||t===null)return m1(t);const e=[];for(const c in t)e.push(c);e.sort();let n="{";for(let c=0;c<e.length;c++)c!==0&&(n+=","),n+=m1(e[c]),n+=":",n+=io(t[e[c]]);return n+="}",n},Cv=function(t,e){const n=t.length;if(n<=e)return[t];const c=[];for(let r=0;r<n;r+=e)r+e>n?c.push(t.substring(r,n)):c.push(t.substring(r,r+e));return c};function o3(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Vv=function(t){P(!_v(t),"Invalid JSON number");const e=11,n=52,c=(1<<e-1)-1;let r,s,i,a,o;t===0?(s=0,i=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-c)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),c),s=a+c,i=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,i=Math.round(t/Math.pow(2,1-c-n))));const l=[];for(o=n;o;o-=1)l.push(i%2?1:0),i=Math.floor(i/2);for(o=e;o;o-=1)l.push(s%2?1:0),s=Math.floor(s/2);l.push(r?1:0),l.reverse();const f=l.join("");let u="";for(o=0;o<64;o+=8){let h=parseInt(f.substr(o,8),2).toString(16);h.length===1&&(h="0"+h),u=u+h}return u.toLowerCase()},oD=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lD=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},fD=new RegExp("^-?(0*)\\d{1,10}$"),uD=-2147483648,hD=2147483647,Mf=function(t){if(fD.test(t)){const e=Number(t);if(e>=uD&&e<=hD)return e}return null},nn=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw X1("Exception was thrown by user callback.",n),e},Math.floor(0))}},dD=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ut=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class mD{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(c=>this.appCheck=c)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,c)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,c):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(c=>c.addTokenListener(e))}notifyForInvalidToken(){X1(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class pD{constructor(e,n,c){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=c,this.auth_=null,this.auth_=c.getImmediate({optional:!0}),this.auth_||c.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(z1("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,c)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,c):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',X1(e)}}class Oi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Oi.OWNER="owner";/**
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
 */const ao="5",Hv="v",zv="s",Mv="r",yv="f",Lv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wv="ls",bv="p",Fi="ac",Sv="websocket",Tv="long_polling";/**
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
 */class vD{constructor(e,n,c,r,s=!1,i="",a=!1,o=!1){this.secure=n,this.namespace=c,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=i,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Le.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Le.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function gD(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Av(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let c;if(e===Sv)c=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Tv)c=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gD(t)&&(n.ns=t.namespace);const r=[];return o3(n,(s,i)=>{r.push(s+"="+i)}),c+r.join("&")}/**
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
 */class _D{constructor(){this.counters_={}}incrementCounter(e,n=1){H3(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return bT(this.counters_)}}/**
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
 */const gs={},_s={};function oo(t){const e=t.toString();return gs[e]||(gs[e]=new _D),gs[e]}function CD(t,e){const n=t.toString();return _s[n]||(_s[n]=e()),_s[n]}/**
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
 */class VD{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const c=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<c.length;++r)c[r]&&nn(()=>{this.onMessage_(c[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const yf="start",HD="close",zD="pLPCommand",MD="pRTLPCB",Ev="id",Nv="pw",xv="ser",yD="cb",LD="seg",wD="ts",bD="d",SD="dframe",Iv=1870,kv=30,TD=Iv-kv,AD=25e3,ED=3e4;class f6{constructor(e,n,c,r,s,i,a){this.connId=e,this.repoInfo=n,this.applicationId=c,this.appCheckToken=r,this.authToken=s,this.transportSessionId=i,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tn(e),this.stats_=oo(n),this.urlFn=o=>(this.appCheckToken&&(o[Fi]=this.appCheckToken),Av(n,Tv,o))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new VD(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ED)),iD(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lo((...s)=>{const[i,a,o,l,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,i===yf)this.id=a,this.password=o;else if(i===HD)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+i)},(...s)=>{const[i,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(i,a)},()=>{this.onClosed_()},this.urlFn);const c={};c[yf]="t",c[xv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(c[yD]=this.scriptTagHolder.uniqueCallbackIdentifier),c[Hv]=ao,this.transportSessionId&&(c[zv]=this.transportSessionId),this.lastSessionId&&(c[wv]=this.lastSessionId),this.applicationId&&(c[bv]=this.applicationId),this.appCheckToken&&(c[Fi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Lv.test(location.hostname)&&(c[Mv]=yv);const r=this.urlFn(c);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){f6.forceAllow_=!0}static forceDisallow(){f6.forceDisallow_=!0}static isAvailable(){return f6.forceAllow_?!0:!f6.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!oD()&&!lD()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=m1(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const c=Jh(n),r=Cv(c,TD);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const c={};c[SD]="t",c[Ev]=e,c[Nv]=n,this.myDisconnFrame.src=this.urlFn(c),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=m1(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class lo{constructor(e,n,c,r){this.onDisconnect=c,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=cD(),window[zD+this.uniqueCallbackIdentifier]=e,window[MD+this.uniqueCallbackIdentifier]=n,this.myIFrame=lo.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const i="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(a){z1("frame writing exception"),a.stack&&z1(a.stack),z1(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||z1("No IE domain setting required")}catch{const c=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+c+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ev]=this.myID,e[Nv]=this.myPW,e[xv]=this.currentSerial;let n=this.urlFn(e),c="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+kv+c.length<=Iv;){const i=this.pendingSegs.shift();c=c+"&"+LD+r+"="+i.seg+"&"+wD+r+"="+i.ts+"&"+bD+r+"="+i.d,r++}return n=n+c,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,c){this.pendingSegs.push({seg:e,ts:n,d:c}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const c=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(c,Math.floor(AD)),s=()=>{clearTimeout(r),c()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const c=this.myIFrame.doc.createElement("script");c.type="text/javascript",c.async=!0,c.src=e,c.onload=c.onreadystatechange=function(){const r=c.readyState;(!r||r==="loaded"||r==="complete")&&(c.onload=c.onreadystatechange=null,c.parentNode&&c.parentNode.removeChild(c),n())},c.onerror=()=>{z1("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(c)}catch{}},Math.floor(1))}}/**
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
 */const ND=16384,xD=45e3;let jc=null;typeof MozWebSocket<"u"?jc=MozWebSocket:typeof WebSocket<"u"&&(jc=WebSocket);class d3{constructor(e,n,c,r,s,i,a){this.connId=e,this.applicationId=c,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tn(this.connId),this.stats_=oo(n),this.connURL=d3.connectionURL_(n,i,a,r,c),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,c,r,s){const i={};return i[Hv]=ao,typeof location<"u"&&location.hostname&&Lv.test(location.hostname)&&(i[Mv]=yv),n&&(i[zv]=n),c&&(i[wv]=c),r&&(i[Fi]=r),s&&(i[bv]=s),Av(e,Sv,i)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Le.set("previous_websocket_failure",!0);try{let c;cd(),this.mySock=new jc(this.connURL,[],c)}catch(c){this.log_("Error instantiating WebSocket.");const r=c.message||c.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=c=>{this.handleIncomingFrame(c)},this.mySock.onerror=c=>{this.log_("WebSocket error.  Closing connection.");const r=c.message||c.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){d3.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,c=navigator.userAgent.match(n);c&&c.length>1&&parseFloat(c[1])<4.4&&(e=!0)}return!e&&jc!==null&&!d3.forceDisallow_}static previouslyFailed(){return Le.isInMemoryStorage||Le.get("previous_websocket_failure")===!0}markConnectionHealthy(){Le.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const c=r0(n);this.onMessage(c)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const c=this.extractFrameCount_(n);c!==null&&this.appendFrame_(c)}}send(e){this.resetKeepAlive();const n=m1(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const c=Cv(n,ND);c.length>1&&this.sendString_(String(c.length));for(let r=0;r<c.length;r++)this.sendString_(c[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(xD))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}d3.responsesRequiredToBeHealthy=2;d3.healthyTimeout=3e4;/**
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
 */class y0{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[f6,d3]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=d3&&d3.isAvailable();let c=n&&!d3.previouslyFailed();if(e.webSocketOnly&&(n||X1("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),c=!0),c)this.transports_=[d3];else{const r=this.transports_=[];for(const s of y0.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);y0.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}y0.globalTransportInitialized_=!1;/**
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
 */const ID=6e4,kD=5e3,RD=10*1024,PD=100*1024,Cs="t",Lf="d",DD="s",wf="r",OD="e",bf="o",Sf="a",Tf="n",Af="p",FD="h";class BD{constructor(e,n,c,r,s,i,a,o,l,f){this.id=e,this.repoInfo_=n,this.applicationId_=c,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=i,this.onReady_=a,this.onDisconnect_=o,this.onKill_=l,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tn("c:"+this.id+":"),this.transportManager_=new y0(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),c=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,c)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ut(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>PD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>RD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cs in e){const n=e[Cs];n===Sf?this.upgradeIfSecondaryHealthy_():n===wf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===bf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=gt("t",e),c=gt("d",e);if(n==="c")this.onSecondaryControl_(c);else if(n==="d")this.pendingDataMessages.push(c);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Af,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Sf,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Tf,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=gt("t",e),c=gt("d",e);n==="c"?this.onControl_(c):n==="d"&&this.onDataMessage_(c)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=gt(Cs,e);if(Lf in e){const c=e[Lf];if(n===FD){const r=Object.assign({},c);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Tf){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===DD?this.onConnectionShutdown_(c):n===wf?this.onReset_(c):n===OD?Di("Server Error: "+c):n===bf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Di("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,c=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ao!==c&&X1("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),c=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,c),Ut(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ID))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ut(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(kD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Af,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Le.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Rv{put(e,n,c,r){}merge(e,n,c,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,c){}onDisconnectMerge(e,n,c){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Pv{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const c=[...this.listeners_[e]];for(let r=0;r<c.length;r++)c[r].callback.apply(c[r].context,n)}}on(e,n,c){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:c});const r=this.getInitialEvent(e);r&&n.apply(c,r)}off(e,n,c){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!c||c===r[s].context)){r.splice(s,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class $c extends Pv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Fa()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new $c}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Ef=32,Nf=768;class F2{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let c=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[c]=this.pieces_[r],c++);this.pieces_.length=c,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function S2(){return new F2("")}function p2(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function J4(t){return t.pieces_.length-t.pieceNum_}function k2(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new F2(t.pieces_,e)}function Dv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function UD(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ov(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Fv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new F2(e,0)}function l1(t,e){const n=[];for(let c=t.pieceNum_;c<t.pieces_.length;c++)n.push(t.pieces_[c]);if(e instanceof F2)for(let c=e.pieceNum_;c<e.pieces_.length;c++)n.push(e.pieces_[c]);else{const c=e.split("/");for(let r=0;r<c.length;r++)c[r].length>0&&n.push(c[r])}return new F2(n,0)}function d2(t){return t.pieceNum_>=t.pieces_.length}function c3(t,e){const n=p2(t),c=p2(e);if(n===null)return e;if(n===c)return c3(k2(t),k2(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Bv(t,e){if(J4(t)!==J4(e))return!1;for(let n=t.pieceNum_,c=e.pieceNum_;n<=t.pieces_.length;n++,c++)if(t.pieces_[n]!==e.pieces_[c])return!1;return!0}function p3(t,e){let n=t.pieceNum_,c=e.pieceNum_;if(J4(t)>J4(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[c])return!1;++n,++c}return!0}class qD{constructor(e,n){this.errorPrefix_=n,this.parts_=Ov(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let c=0;c<this.parts_.length;c++)this.byteLength_+=Lr(this.parts_[c]);Uv(this)}}function WD(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Lr(e),Uv(t)}function jD(t){const e=t.parts_.pop();t.byteLength_-=Lr(e),t.parts_.length>0&&(t.byteLength_-=1)}function Uv(t){if(t.byteLength_>Nf)throw new Error(t.errorPrefix_+"has a key path longer than "+Nf+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ef)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ef+") or object contains a cycle "+me(t))}function me(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class fo extends Pv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const c=!document[e];c!==this.visible_&&(this.visible_=c,this.trigger("visible",c))},!1)}static getInstance(){return new fo}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const _t=1e3,$D=60*5*1e3,xf=30*1e3,GD=1.3,KD=3e4,QD="server_kill",If=3;class h4 extends Rv{constructor(e,n,c,r,s,i,a,o){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=c,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=i,this.appCheckTokenProvider_=a,this.authOverride_=o,this.id=h4.nextPersistentConnectionId_++,this.log_=tn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_t,this.maxReconnectDelay_=$D,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,o&&!cd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fo.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&$c.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,c){const r=++this.requestNumber_,s={r,a:e,b:n};this.log_(m1(s)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),c&&(this.requestCBHash_[r]=c)}get(e){this.initConnection_();const n=new c0,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:i=>{const a=i.d;i.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,c,r){this.initConnection_();const s=e._queryIdentifier,i=e._path.toString();this.log_("Listen called for "+i+" "+s),this.listens.has(i)||this.listens.set(i,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(i).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:c};this.listens.get(i).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,c=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(c)})}sendListen_(e){const n=e.query,c=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+c+" for "+r);const s={p:c},i="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(i,s,a=>{const o=a.d,l=a.s;h4.warnOnListenWarnings_(o,n),(this.listens.get(c)&&this.listens.get(c).get(r))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(c,r),e.onComplete&&e.onComplete(l,o))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&H3(e,"w")){const c=k6(e,"w");if(Array.isArray(c)&&~c.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();X1(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xf)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=WT(e)?"auth":"gauth",c={cred:e};this.authOverride_===null?c.noauth=!0:typeof this.authOverride_=="object"&&(c.authvar=this.authOverride_),this.sendRequest(n,c,r=>{const s=r.s,i=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,i))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,c=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,c)})}unlisten(e,n){const c=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+c+" "+r),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(c,r)&&this.connected_&&this.sendUnlisten_(c,r,e._queryObject,n)}sendUnlisten_(e,n,c,r){this.log_("Unlisten on "+e+" for "+n);const s={p:e},i="n";r&&(s.q=c,s.t=r),this.sendRequest(i,s)}onDisconnectPut(e,n,c){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,c):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:c})}onDisconnectMerge(e,n,c){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,c):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:c})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,c,r){const s={p:n,d:c};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,i=>{r&&setTimeout(()=>{r(i.s,i.d)},Math.floor(0))})}put(e,n,c,r){this.putInternal("p",e,n,c,r)}merge(e,n,c,r){this.putInternal("m",e,n,c,r)}putInternal(e,n,c,r,s){this.initConnection_();const i={p:n,d:c};s!==void 0&&(i.h=s),this.outstandingPuts_.push({action:e,request:i,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,c=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,c,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,c=>{if(c.s!=="ok"){const s=c.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+m1(e));const n=e.r,c=this.requestCBHash_[n];c&&(delete this.requestCBHash_[n],c(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Di("Unrecognized action received from server: "+m1(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>KD&&(this.reconnectDelay_=_t),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*GD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),c=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+h4.nextConnectionId_++,s=this.lastSessionId;let i=!1,a=null;const o=function(){a?a.close():(i=!0,c())},l=function(u){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:o,sendRequest:l};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,h]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);i?z1("getToken() completed but was canceled"):(z1("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=h&&h.token,a=new BD(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,c,d=>{X1(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(QD)},s))}catch(u){this.log_("Failed to get token: "+u),i||(this.repoInfo_.nodeAdmin&&X1(u),o())}}}interrupt(e){z1("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){z1("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ti(this.interruptReasons_)&&(this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let c;n?c=n.map(s=>io(s)).join("$"):c="default";const r=this.removeListen_(e,c);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const c=new F2(e).toString();let r;if(this.listens.has(c)){const s=this.listens.get(c);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(c)}else r=void 0;return r}onAuthRevoked_(e,n){z1("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=If&&(this.reconnectDelay_=xf,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){z1("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=If&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+pv.replace(/\./g,"-")]=1,Fa()?e["framework.cordova"]=1:nd()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=$c.getInstance().currentlyOnline();return ti(this.interruptReasons_)&&e}}h4.nextPersistentConnectionId_=0;h4.nextConnectionId_=0;/**
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
 */class v2{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new v2(e,n)}}/**
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
 */class m8{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const c=new v2(j6,e),r=new v2(j6,n);return this.compare(c,r)!==0}minPost(){return v2.MIN}}/**
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
 */let In;class qv extends m8{static get __EMPTY_NODE(){return In}static set __EMPTY_NODE(e){In=e}compare(e,n){return at(e.name,n.name)}isDefinedOn(e){throw X6("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return v2.MIN}maxPost(){return new v2(Be,In)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new v2(e,In)}toString(){return".key"}}const T6=new qv;/**
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
 */class kn{constructor(e,n,c,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let i=1;for(;!e.isEmpty();)if(e=e,i=n?c(e.key,n):1,r&&(i*=-1),i<0)this.isReverse_?e=e.left:e=e.right;else if(i===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class a1{constructor(e,n,c,r,s){this.key=e,this.value=n,this.color=c??a1.RED,this.left=r??U1.EMPTY_NODE,this.right=s??U1.EMPTY_NODE}copy(e,n,c,r,s){return new a1(e??this.key,n??this.value,c??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,c){let r=this;const s=c(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,n,c),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,c)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return U1.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let c,r;if(c=this,n(e,c.key)<0)!c.left.isEmpty()&&!c.left.isRed_()&&!c.left.left.isRed_()&&(c=c.moveRedLeft_()),c=c.copy(null,null,null,c.left.remove(e,n),null);else{if(c.left.isRed_()&&(c=c.rotateRight_()),!c.right.isEmpty()&&!c.right.isRed_()&&!c.right.left.isRed_()&&(c=c.moveRedRight_()),n(e,c.key)===0){if(c.right.isEmpty())return U1.EMPTY_NODE;r=c.right.min_(),c=c.copy(r.key,r.value,null,null,c.right.removeMin_())}c=c.copy(null,null,null,null,c.right.remove(e,n))}return c.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,a1.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,a1.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}a1.RED=!0;a1.BLACK=!1;class YD{copy(e,n,c,r,s){return this}insert(e,n,c){return new a1(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class U1{constructor(e,n=U1.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new U1(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,a1.BLACK,null,null))}remove(e){return new U1(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,a1.BLACK,null,null))}get(e){let n,c=this.root_;for(;!c.isEmpty();){if(n=this.comparator_(e,c.key),n===0)return c.value;n<0?c=c.left:n>0&&(c=c.right)}return null}getPredecessorKey(e){let n,c=this.root_,r=null;for(;!c.isEmpty();)if(n=this.comparator_(e,c.key),n===0){if(c.left.isEmpty())return r?r.key:null;for(c=c.left;!c.right.isEmpty();)c=c.right;return c.key}else n<0?c=c.left:n>0&&(r=c,c=c.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new kn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new kn(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new kn(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new kn(this.root_,null,this.comparator_,!0,e)}}U1.EMPTY_NODE=new YD;/**
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
 */function XD(t,e){return at(t.name,e.name)}function uo(t,e){return at(t,e)}/**
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
 */let Bi;function JD(t){Bi=t}const Wv=function(t){return typeof t=="number"?"number:"+Vv(t):"string:"+t},jv=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&H3(e,".sv"),"Priority must be a string or number.")}else P(t===Bi||t.isEmpty(),"priority of unexpected type.");P(t===Bi||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let kf;class s1{constructor(e,n=s1.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),jv(this.priorityNode_)}static set __childrenNodeConstructor(e){kf=e}static get __childrenNodeConstructor(){return kf}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new s1(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:s1.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return d2(e)?this:p2(e)===".priority"?this.priorityNode_:s1.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:s1.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const c=p2(e);return c===null?n:n.isEmpty()&&c!==".priority"?this:(P(c!==".priority"||J4(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(c,s1.__childrenNodeConstructor.EMPTY_NODE.updateChild(k2(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Vv(this.value_):e+=this.value_,this.lazyHash_=gv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===s1.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof s1.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,c=typeof this.value_,r=s1.VALUE_TYPE_ORDER.indexOf(n),s=s1.VALUE_TYPE_ORDER.indexOf(c);return P(r>=0,"Unknown leaf type: "+n),P(s>=0,"Unknown leaf type: "+c),r===s?c==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}s1.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let $v,Gv;function ZD(t){$v=t}function eO(t){Gv=t}class tO extends m8{compare(e,n){const c=e.node.getPriority(),r=n.node.getPriority(),s=c.compareTo(r);return s===0?at(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return v2.MIN}maxPost(){return new v2(Be,new s1("[PRIORITY-POST]",Gv))}makePost(e,n){const c=$v(e);return new v2(n,new s1("[PRIORITY-POST]",c))}toString(){return".priority"}}const L1=new tO;/**
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
 */const nO=Math.log(2);class cO{constructor(e){const n=s=>parseInt(Math.log(s)/nO,10),c=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=c(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Gc=function(t,e,n,c){t.sort(e);const r=function(o,l){const f=l-o;let u,h;if(f===0)return null;if(f===1)return u=t[o],h=n?n(u):u,new a1(h,u.node,a1.BLACK,null,null);{const d=parseInt(f/2,10)+o,m=r(o,d),g=r(d+1,l);return u=t[d],h=n?n(u):u,new a1(h,u.node,a1.BLACK,m,g)}},s=function(o){let l=null,f=null,u=t.length;const h=function(m,g){const C=u-m,_=u;u-=m;const z=r(C+1,_),M=t[C],V=n?n(M):M;d(new a1(V,M.node,g,null,z))},d=function(m){l?(l.left=m,l=m):(f=m,l=m)};for(let m=0;m<o.count;++m){const g=o.nextBitIsOne(),C=Math.pow(2,o.count-(m+1));g?h(C,a1.BLACK):(h(C,a1.BLACK),h(C,a1.RED))}return f},i=new cO(t.length),a=s(i);return new U1(c||e,a)};/**
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
 */let Vs;const r6={};class l4{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(r6&&L1,"ChildrenNode.ts has not been loaded"),Vs=Vs||new l4({".priority":r6},{".priority":L1}),Vs}get(e){const n=k6(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof U1?n:null}hasIndex(e){return H3(this.indexSet_,e.toString())}addIndex(e,n){P(e!==T6,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const c=[];let r=!1;const s=n.getIterator(v2.Wrap);let i=s.getNext();for(;i;)r=r||e.isDefinedOn(i.node),c.push(i),i=s.getNext();let a;r?a=Gc(c,e.getCompare()):a=r6;const o=e.toString(),l=Object.assign({},this.indexSet_);l[o]=e;const f=Object.assign({},this.indexes_);return f[o]=a,new l4(f,l)}addToIndexes(e,n){const c=Hc(this.indexes_,(r,s)=>{const i=k6(this.indexSet_,s);if(P(i,"Missing index implementation for "+s),r===r6)if(i.isDefinedOn(e.node)){const a=[],o=n.getIterator(v2.Wrap);let l=o.getNext();for(;l;)l.name!==e.name&&a.push(l),l=o.getNext();return a.push(e),Gc(a,i.getCompare())}else return r6;else{const a=n.get(e.name);let o=r;return a&&(o=o.remove(new v2(e.name,a))),o.insert(e,e.node)}});return new l4(c,this.indexSet_)}removeFromIndexes(e,n){const c=Hc(this.indexes_,r=>{if(r===r6)return r;{const s=n.get(e.name);return s?r.remove(new v2(e.name,s)):r}});return new l4(c,this.indexSet_)}}/**
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
 */let Ct;class M2{constructor(e,n,c){this.children_=e,this.priorityNode_=n,this.indexMap_=c,this.lazyHash_=null,this.priorityNode_&&jv(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ct||(Ct=new M2(new U1(uo),null,l4.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ct}updatePriority(e){return this.children_.isEmpty()?this:new M2(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ct:n}}getChild(e){const n=p2(e);return n===null?this:this.getImmediateChild(n).getChild(k2(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const c=new v2(e,n);let r,s;n.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(c,this.children_)):(r=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(c,this.children_));const i=r.isEmpty()?Ct:this.priorityNode_;return new M2(r,i,s)}}updateChild(e,n){const c=p2(e);if(c===null)return n;{P(p2(e)!==".priority"||J4(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(c).updateChild(k2(e),n);return this.updateImmediateChild(c,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let c=0,r=0,s=!0;if(this.forEachChild(L1,(i,a)=>{n[i]=a.val(e),c++,s&&M2.INTEGER_REGEXP_.test(i)?r=Math.max(r,Number(i)):s=!1}),!e&&s&&r<2*c){const i=[];for(const a in n)i[a]=n[a];return i}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wv(this.getPriority().val())+":"),this.forEachChild(L1,(n,c)=>{const r=c.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":gv(e)}return this.lazyHash_}getPredecessorChildName(e,n,c){const r=this.resolveIndex_(c);if(r){const s=r.getPredecessorKey(new v2(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const c=n.minKey();return c&&c.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new v2(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const c=n.maxKey();return c&&c.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new v2(n,this.children_.get(n)):null}forEachChild(e,n){const c=this.resolveIndex_(e);return c?c.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const c=this.resolveIndex_(n);if(c)return c.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,v2.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const c=this.resolveIndex_(n);if(c)return c.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,v2.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===cn?-1:0}withIndex(e){if(e===T6||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new M2(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===T6||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const c=this.getIterator(L1),r=n.getIterator(L1);let s=c.getNext(),i=r.getNext();for(;s&&i;){if(s.name!==i.name||!s.node.equals(i.node))return!1;s=c.getNext(),i=r.getNext()}return s===null&&i===null}else return!1;else return!1}}resolveIndex_(e){return e===T6?null:this.indexMap_.get(e.toString())}}M2.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rO extends M2{constructor(){super(new U1(uo),M2.EMPTY_NODE,l4.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return M2.EMPTY_NODE}isEmpty(){return!1}}const cn=new rO;Object.defineProperties(v2,{MIN:{value:new v2(j6,M2.EMPTY_NODE)},MAX:{value:new v2(Be,cn)}});qv.__EMPTY_NODE=M2.EMPTY_NODE;s1.__childrenNodeConstructor=M2;JD(cn);eO(cn);/**
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
 */const sO=!0;function M1(t,e=null){if(t===null)return M2.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new s1(n,M1(e))}if(!(t instanceof Array)&&sO){const n=[];let c=!1;if(o3(t,(i,a)=>{if(i.substring(0,1)!=="."){const o=M1(a);o.isEmpty()||(c=c||!o.getPriority().isEmpty(),n.push(new v2(i,o)))}}),n.length===0)return M2.EMPTY_NODE;const s=Gc(n,XD,i=>i.name,uo);if(c){const i=Gc(n,L1.getCompare());return new M2(s,M1(e),new l4({".priority":i},{".priority":L1}))}else return new M2(s,M1(e),l4.Default)}else{let n=M2.EMPTY_NODE;return o3(t,(c,r)=>{if(H3(t,c)&&c.substring(0,1)!=="."){const s=M1(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(c,s))}}),n.updatePriority(M1(e))}}ZD(M1);/**
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
 */class iO extends m8{constructor(e){super(),this.indexPath_=e,P(!d2(e)&&p2(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const c=this.extractChild(e.node),r=this.extractChild(n.node),s=c.compareTo(r);return s===0?at(e.name,n.name):s}makePost(e,n){const c=M1(e),r=M2.EMPTY_NODE.updateChild(this.indexPath_,c);return new v2(n,r)}maxPost(){const e=M2.EMPTY_NODE.updateChild(this.indexPath_,cn);return new v2(Be,e)}toString(){return Ov(this.indexPath_,0).join("/")}}/**
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
 */class aO extends m8{compare(e,n){const c=e.node.compareTo(n.node);return c===0?at(e.name,n.name):c}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return v2.MIN}maxPost(){return v2.MAX}makePost(e,n){const c=M1(e);return new v2(n,c)}toString(){return".value"}}const oO=new aO;/**
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
 */function lO(t){return{type:"value",snapshotNode:t}}function fO(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function uO(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Rf(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function hO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ho{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=L1}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:j6}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Be}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===L1}copy(){const e=new ho;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pf(t){const e={};if(t.isDefault())return e;let n;if(t.index_===L1?n="$priority":t.index_===oO?n="$value":t.index_===T6?n="$key":(P(t.index_ instanceof iO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=m1(n),t.startSet_){const c=t.startAfterSet_?"startAfter":"startAt";e[c]=m1(t.indexStartValue_),t.startNameSet_&&(e[c]+=","+m1(t.indexStartName_))}if(t.endSet_){const c=t.endBeforeSet_?"endBefore":"endAt";e[c]=m1(t.indexEndValue_),t.endNameSet_&&(e[c]+=","+m1(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Df(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==L1&&(e.i=t.index_.toString()),e}/**
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
 */class Kc extends Rv{constructor(e,n,c,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=c,this.appCheckTokenProvider_=r,this.log_=tn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,c,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const i=Kc.getListenId_(e,c),a={};this.listens_[i]=a;const o=Pf(e._queryParams);this.restRequest_(s+".json",o,(l,f)=>{let u=f;if(l===404&&(u=null,l=null),l===null&&this.onDataUpdate_(s,u,!1,c),k6(this.listens_,i)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",r(h,null)}})}unlisten(e,n){const c=Kc.getListenId_(e,n);delete this.listens_[c]}get(e){const n=Pf(e._queryParams),c=e._path.toString(),r=new c0;return this.restRequest_(c+".json",n,(s,i)=>{let a=i;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(c,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},c){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const i=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+J6(n);this.log_("Sending REST request for "+i);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(c&&a.readyState===4){this.log_("REST Response for "+i+" received. status:",a.status,"response:",a.responseText);let o=null;if(a.status>=200&&a.status<300){try{o=r0(a.responseText)}catch{X1("Failed to parse JSON response for "+i+": "+a.responseText)}c(null,o)}else a.status!==401&&a.status!==404&&X1("Got unsuccessful REST response for "+i+" Status: "+a.status),c(a.status);c=null}},a.open("GET",i,!0),a.send()})}}/**
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
 */class dO{constructor(){this.rootNode_=M2.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Qc(){return{value:null,children:new Map}}function Kv(t,e,n){if(d2(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const c=p2(e);t.children.has(c)||t.children.set(c,Qc());const r=t.children.get(c);e=k2(e),Kv(r,e,n)}}function Ui(t,e,n){t.value!==null?n(e,t.value):mO(t,(c,r)=>{const s=new F2(e.toString()+"/"+c);Ui(r,s,n)})}function mO(t,e){t.children.forEach((n,c)=>{e(c,n)})}/**
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
 */class pO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&o3(this.last_,(c,r)=>{n[c]=n[c]-r}),this.last_=e,n}}/**
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
 */const Of=10*1e3,vO=30*1e3,gO=5*60*1e3;class _O{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new pO(e);const c=Of+(vO-Of)*Math.random();Ut(this.reportStats_.bind(this),Math.floor(c))}reportStats_(){const e=this.statsListener_.get(),n={};let c=!1;o3(e,(r,s)=>{s>0&&H3(this.statsToReport_,r)&&(n[r]=s,c=!0)}),c&&this.server_.reportStats(n),Ut(this.reportStats_.bind(this),Math.floor(Math.random()*2*gO))}}/**
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
 */var k3;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(k3||(k3={}));function Qv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yv(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Xv(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Yc{constructor(e,n,c){this.path=e,this.affectedTree=n,this.revert=c,this.type=k3.ACK_USER_WRITE,this.source=Qv()}operationForChild(e){if(d2(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new F2(e));return new Yc(S2(),n,this.revert)}}else return P(p2(this.path)===e,"operationForChild called for unrelated child."),new Yc(k2(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ue{constructor(e,n,c){this.source=e,this.path=n,this.snap=c,this.type=k3.OVERWRITE}operationForChild(e){return d2(this.path)?new Ue(this.source,S2(),this.snap.getImmediateChild(e)):new Ue(this.source,k2(this.path),this.snap)}}/**
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
 */class L0{constructor(e,n,c){this.source=e,this.path=n,this.children=c,this.type=k3.MERGE}operationForChild(e){if(d2(this.path)){const n=this.children.subtree(new F2(e));return n.isEmpty()?null:n.value?new Ue(this.source,S2(),n.value):new L0(this.source,S2(),n)}else return P(p2(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new L0(this.source,k2(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class mo{constructor(e,n,c){this.node_=e,this.fullyInitialized_=n,this.filtered_=c}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(d2(e))return this.isFullyInitialized()&&!this.filtered_;const n=p2(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function CO(t,e,n,c){const r=[],s=[];return e.forEach(i=>{i.type==="child_changed"&&t.index_.indexedValueChanged(i.oldSnap,i.snapshotNode)&&s.push(hO(i.childName,i.snapshotNode))}),Vt(t,r,"child_removed",e,c,n),Vt(t,r,"child_added",e,c,n),Vt(t,r,"child_moved",s,c,n),Vt(t,r,"child_changed",e,c,n),Vt(t,r,"value",e,c,n),r}function Vt(t,e,n,c,r,s){const i=c.filter(a=>a.type===n);i.sort((a,o)=>HO(t,a,o)),i.forEach(a=>{const o=VO(t,a,s);r.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(o,t.query_))})})}function VO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function HO(t,e,n){if(e.childName==null||n.childName==null)throw X6("Should only compare child_ events.");const c=new v2(e.childName,e.snapshotNode),r=new v2(n.childName,n.snapshotNode);return t.index_.compare(c,r)}/**
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
 */function Jv(t,e){return{eventCache:t,serverCache:e}}function qt(t,e,n,c){return Jv(new mo(e,n,c),t.serverCache)}function Zv(t,e,n,c){return Jv(t.eventCache,new mo(e,n,c))}function qi(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function qe(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Hs;const zO=()=>(Hs||(Hs=new U1(aD)),Hs);class x2{constructor(e,n=zO()){this.value=e,this.children=n}static fromObject(e){let n=new x2(null);return o3(e,(c,r)=>{n=n.set(new F2(c),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:S2(),value:this.value};if(d2(e))return null;{const c=p2(e),r=this.children.get(c);if(r!==null){const s=r.findRootMostMatchingPathAndValue(k2(e),n);return s!=null?{path:l1(new F2(c),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(d2(e))return this;{const n=p2(e),c=this.children.get(n);return c!==null?c.subtree(k2(e)):new x2(null)}}set(e,n){if(d2(e))return new x2(n,this.children);{const c=p2(e),s=(this.children.get(c)||new x2(null)).set(k2(e),n),i=this.children.insert(c,s);return new x2(this.value,i)}}remove(e){if(d2(e))return this.children.isEmpty()?new x2(null):new x2(null,this.children);{const n=p2(e),c=this.children.get(n);if(c){const r=c.remove(k2(e));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new x2(null):new x2(this.value,s)}else return this}}get(e){if(d2(e))return this.value;{const n=p2(e),c=this.children.get(n);return c?c.get(k2(e)):null}}setTree(e,n){if(d2(e))return n;{const c=p2(e),s=(this.children.get(c)||new x2(null)).setTree(k2(e),n);let i;return s.isEmpty()?i=this.children.remove(c):i=this.children.insert(c,s),new x2(this.value,i)}}fold(e){return this.fold_(S2(),e)}fold_(e,n){const c={};return this.children.inorderTraversal((r,s)=>{c[r]=s.fold_(l1(e,r),n)}),n(e,this.value,c)}findOnPath(e,n){return this.findOnPath_(e,S2(),n)}findOnPath_(e,n,c){const r=this.value?c(n,this.value):!1;if(r)return r;if(d2(e))return null;{const s=p2(e),i=this.children.get(s);return i?i.findOnPath_(k2(e),l1(n,s),c):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,S2(),n)}foreachOnPath_(e,n,c){if(d2(e))return this;{this.value&&c(n,this.value);const r=p2(e),s=this.children.get(r);return s?s.foreachOnPath_(k2(e),l1(n,r),c):new x2(null)}}foreach(e){this.foreach_(S2(),e)}foreach_(e,n){this.children.inorderTraversal((c,r)=>{r.foreach_(l1(e,c),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,c)=>{c.value&&e(n,c.value)})}}/**
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
 */class C3{constructor(e){this.writeTree_=e}static empty(){return new C3(new x2(null))}}function Wt(t,e,n){if(d2(e))return new C3(new x2(n));{const c=t.writeTree_.findRootMostValueAndPath(e);if(c!=null){const r=c.path;let s=c.value;const i=c3(r,e);return s=s.updateChild(i,n),new C3(t.writeTree_.set(r,s))}else{const r=new x2(n),s=t.writeTree_.setTree(e,r);return new C3(s)}}}function Ff(t,e,n){let c=t;return o3(n,(r,s)=>{c=Wt(c,l1(e,r),s)}),c}function Bf(t,e){if(d2(e))return C3.empty();{const n=t.writeTree_.setTree(e,new x2(null));return new C3(n)}}function Wi(t,e){return Xe(t,e)!=null}function Xe(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(c3(n.path,e)):null}function Uf(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(L1,(c,r)=>{e.push(new v2(c,r))}):t.writeTree_.children.inorderTraversal((c,r)=>{r.value!=null&&e.push(new v2(c,r.value))}),e}function U4(t,e){if(d2(e))return t;{const n=Xe(t,e);return n!=null?new C3(new x2(n)):new C3(t.writeTree_.subtree(e))}}function ji(t){return t.writeTree_.isEmpty()}function $6(t,e){return eg(S2(),t.writeTree_,e)}function eg(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let c=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(P(s.value!==null,"Priority writes must always be leaf nodes"),c=s.value):n=eg(l1(t,r),s,n)}),!n.getChild(t).isEmpty()&&c!==null&&(n=n.updateChild(l1(t,".priority"),c)),n}}/**
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
 */function tg(t,e){return ig(e,t)}function MO(t,e,n,c,r){P(c>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:c,visible:r}),r&&(t.visibleWrites=Wt(t.visibleWrites,e,n)),t.lastWriteId=c}function yO(t,e){for(let n=0;n<t.allWrites.length;n++){const c=t.allWrites[n];if(c.writeId===e)return c}return null}function LO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const c=t.allWrites[n];t.allWrites.splice(n,1);let r=c.visible,s=!1,i=t.allWrites.length-1;for(;r&&i>=0;){const a=t.allWrites[i];a.visible&&(i>=n&&wO(a,c.path)?r=!1:p3(c.path,a.path)&&(s=!0)),i--}if(r){if(s)return bO(t),!0;if(c.snap)t.visibleWrites=Bf(t.visibleWrites,c.path);else{const a=c.children;o3(a,o=>{t.visibleWrites=Bf(t.visibleWrites,l1(c.path,o))})}return!0}else return!1}function wO(t,e){if(t.snap)return p3(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&p3(l1(t.path,n),e))return!0;return!1}function bO(t){t.visibleWrites=ng(t.allWrites,SO,S2()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function SO(t){return t.visible}function ng(t,e,n){let c=C3.empty();for(let r=0;r<t.length;++r){const s=t[r];if(e(s)){const i=s.path;let a;if(s.snap)p3(n,i)?(a=c3(n,i),c=Wt(c,a,s.snap)):p3(i,n)&&(a=c3(i,n),c=Wt(c,S2(),s.snap.getChild(a)));else if(s.children){if(p3(n,i))a=c3(n,i),c=Ff(c,a,s.children);else if(p3(i,n))if(a=c3(i,n),d2(a))c=Ff(c,S2(),s.children);else{const o=k6(s.children,p2(a));if(o){const l=o.getChild(k2(a));c=Wt(c,S2(),l)}}}else throw X6("WriteRecord should have .snap or .children")}}return c}function cg(t,e,n,c,r){if(!c&&!r){const s=Xe(t.visibleWrites,e);if(s!=null)return s;{const i=U4(t.visibleWrites,e);if(ji(i))return n;if(n==null&&!Wi(i,S2()))return null;{const a=n||M2.EMPTY_NODE;return $6(i,a)}}}else{const s=U4(t.visibleWrites,e);if(!r&&ji(s))return n;if(!r&&n==null&&!Wi(s,S2()))return null;{const i=function(l){return(l.visible||r)&&(!c||!~c.indexOf(l.writeId))&&(p3(l.path,e)||p3(e,l.path))},a=ng(t.allWrites,i,e),o=n||M2.EMPTY_NODE;return $6(a,o)}}}function TO(t,e,n){let c=M2.EMPTY_NODE;const r=Xe(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(L1,(s,i)=>{c=c.updateImmediateChild(s,i)}),c;if(n){const s=U4(t.visibleWrites,e);return n.forEachChild(L1,(i,a)=>{const o=$6(U4(s,new F2(i)),a);c=c.updateImmediateChild(i,o)}),Uf(s).forEach(i=>{c=c.updateImmediateChild(i.name,i.node)}),c}else{const s=U4(t.visibleWrites,e);return Uf(s).forEach(i=>{c=c.updateImmediateChild(i.name,i.node)}),c}}function AO(t,e,n,c,r){P(c||r,"Either existingEventSnap or existingServerSnap must exist");const s=l1(e,n);if(Wi(t.visibleWrites,s))return null;{const i=U4(t.visibleWrites,s);return ji(i)?r.getChild(n):$6(i,r.getChild(n))}}function EO(t,e,n,c){const r=l1(e,n),s=Xe(t.visibleWrites,r);if(s!=null)return s;if(c.isCompleteForChild(n)){const i=U4(t.visibleWrites,r);return $6(i,c.getNode().getImmediateChild(n))}else return null}function NO(t,e){return Xe(t.visibleWrites,e)}function xO(t,e,n,c,r,s,i){let a;const o=U4(t.visibleWrites,e),l=Xe(o,S2());if(l!=null)a=l;else if(n!=null)a=$6(o,n);else return[];if(a=a.withIndex(i),!a.isEmpty()&&!a.isLeafNode()){const f=[],u=i.getCompare(),h=s?a.getReverseIteratorFrom(c,i):a.getIteratorFrom(c,i);let d=h.getNext();for(;d&&f.length<r;)u(d,c)!==0&&f.push(d),d=h.getNext();return f}else return[]}function IO(){return{visibleWrites:C3.empty(),allWrites:[],lastWriteId:-1}}function $i(t,e,n,c){return cg(t.writeTree,t.treePath,e,n,c)}function rg(t,e){return TO(t.writeTree,t.treePath,e)}function qf(t,e,n,c){return AO(t.writeTree,t.treePath,e,n,c)}function Xc(t,e){return NO(t.writeTree,l1(t.treePath,e))}function kO(t,e,n,c,r,s){return xO(t.writeTree,t.treePath,e,n,c,r,s)}function po(t,e,n){return EO(t.writeTree,t.treePath,e,n)}function sg(t,e){return ig(l1(t.treePath,e),t.writeTree)}function ig(t,e){return{treePath:t,writeTree:e}}/**
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
 */class RO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,c=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(c!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(c);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(c,Rf(c,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(c);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(c,uO(c,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(c,fO(c,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(c,Rf(c,e.snapshotNode,r.oldSnap));else throw X6("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(c,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class PO{getCompleteChild(e){return null}getChildAfterChild(e,n,c){return null}}const ag=new PO;class vo{constructor(e,n,c=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=c}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const c=this.optCompleteServerCache_!=null?new mo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return po(this.writes_,e,c)}}getChildAfterChild(e,n,c){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:qe(this.viewCache_),s=kO(this.writes_,r,n,1,c,e);return s.length===0?null:s[0]}}function DO(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function OO(t,e,n,c,r){const s=new RO;let i,a;if(n.type===k3.OVERWRITE){const l=n;l.source.fromUser?i=Gi(t,e,l.path,l.snap,c,r,s):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!d2(l.path),i=Jc(t,e,l.path,l.snap,c,r,a,s))}else if(n.type===k3.MERGE){const l=n;l.source.fromUser?i=BO(t,e,l.path,l.children,c,r,s):(P(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),i=Ki(t,e,l.path,l.children,c,r,a,s))}else if(n.type===k3.ACK_USER_WRITE){const l=n;l.revert?i=WO(t,e,l.path,c,r,s):i=UO(t,e,l.path,l.affectedTree,c,r,s)}else if(n.type===k3.LISTEN_COMPLETE)i=qO(t,e,n.path,c,s);else throw X6("Unknown operation type: "+n.type);const o=s.getChanges();return FO(e,i,o),{viewCache:i,changes:o}}function FO(t,e,n){const c=e.eventCache;if(c.isFullyInitialized()){const r=c.getNode().isLeafNode()||c.getNode().isEmpty(),s=qi(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!c.getNode().equals(s)||!c.getNode().getPriority().equals(s.getPriority()))&&n.push(lO(qi(e)))}}function og(t,e,n,c,r,s){const i=e.eventCache;if(Xc(c,n)!=null)return e;{let a,o;if(d2(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=qe(e),f=l instanceof M2?l:M2.EMPTY_NODE,u=rg(c,f);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const l=$i(c,qe(e));a=t.filter.updateFullNode(e.eventCache.getNode(),l,s)}else{const l=p2(n);if(l===".priority"){P(J4(n)===1,"Can't have a priority with additional path components");const f=i.getNode();o=e.serverCache.getNode();const u=qf(c,n,f,o);u!=null?a=t.filter.updatePriority(f,u):a=i.getNode()}else{const f=k2(n);let u;if(i.isCompleteForChild(l)){o=e.serverCache.getNode();const h=qf(c,n,i.getNode(),o);h!=null?u=i.getNode().getImmediateChild(l).updateChild(f,h):u=i.getNode().getImmediateChild(l)}else u=po(c,l,e.serverCache);u!=null?a=t.filter.updateChild(i.getNode(),l,u,f,r,s):a=i.getNode()}}return qt(e,a,i.isFullyInitialized()||d2(n),t.filter.filtersNodes())}}function Jc(t,e,n,c,r,s,i,a){const o=e.serverCache;let l;const f=i?t.filter:t.filter.getIndexedFilter();if(d2(n))l=f.updateFullNode(o.getNode(),c,null);else if(f.filtersNodes()&&!o.isFiltered()){const d=o.getNode().updateChild(n,c);l=f.updateFullNode(o.getNode(),d,null)}else{const d=p2(n);if(!o.isCompleteForPath(n)&&J4(n)>1)return e;const m=k2(n),C=o.getNode().getImmediateChild(d).updateChild(m,c);d===".priority"?l=f.updatePriority(o.getNode(),C):l=f.updateChild(o.getNode(),d,C,m,ag,null)}const u=Zv(e,l,o.isFullyInitialized()||d2(n),f.filtersNodes()),h=new vo(r,u,s);return og(t,u,n,r,h,a)}function Gi(t,e,n,c,r,s,i){const a=e.eventCache;let o,l;const f=new vo(r,e,s);if(d2(n))l=t.filter.updateFullNode(e.eventCache.getNode(),c,i),o=qt(e,l,!0,t.filter.filtersNodes());else{const u=p2(n);if(u===".priority")l=t.filter.updatePriority(e.eventCache.getNode(),c),o=qt(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=k2(n),d=a.getNode().getImmediateChild(u);let m;if(d2(h))m=c;else{const g=f.getCompleteChild(u);g!=null?Dv(h)===".priority"&&g.getChild(Fv(h)).isEmpty()?m=g:m=g.updateChild(h,c):m=M2.EMPTY_NODE}if(d.equals(m))o=e;else{const g=t.filter.updateChild(a.getNode(),u,m,h,f,i);o=qt(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return o}function Wf(t,e){return t.eventCache.isCompleteForChild(e)}function BO(t,e,n,c,r,s,i){let a=e;return c.foreach((o,l)=>{const f=l1(n,o);Wf(e,p2(f))&&(a=Gi(t,a,f,l,r,s,i))}),c.foreach((o,l)=>{const f=l1(n,o);Wf(e,p2(f))||(a=Gi(t,a,f,l,r,s,i))}),a}function jf(t,e,n){return n.foreach((c,r)=>{e=e.updateChild(c,r)}),e}function Ki(t,e,n,c,r,s,i,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let o=e,l;d2(n)?l=c:l=new x2(null).setTree(n,c);const f=e.serverCache.getNode();return l.children.inorderTraversal((u,h)=>{if(f.hasChild(u)){const d=e.serverCache.getNode().getImmediateChild(u),m=jf(t,d,h);o=Jc(t,o,new F2(u),m,r,s,i,a)}}),l.children.inorderTraversal((u,h)=>{const d=!e.serverCache.isCompleteForChild(u)&&h.value===null;if(!f.hasChild(u)&&!d){const m=e.serverCache.getNode().getImmediateChild(u),g=jf(t,m,h);o=Jc(t,o,new F2(u),g,r,s,i,a)}}),o}function UO(t,e,n,c,r,s,i){if(Xc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),o=e.serverCache;if(c.value!=null){if(d2(n)&&o.isFullyInitialized()||o.isCompleteForPath(n))return Jc(t,e,n,o.getNode().getChild(n),r,s,a,i);if(d2(n)){let l=new x2(null);return o.getNode().forEachChild(T6,(f,u)=>{l=l.set(new F2(f),u)}),Ki(t,e,n,l,r,s,a,i)}else return e}else{let l=new x2(null);return c.foreach((f,u)=>{const h=l1(n,f);o.isCompleteForPath(h)&&(l=l.set(f,o.getNode().getChild(h)))}),Ki(t,e,n,l,r,s,a,i)}}function qO(t,e,n,c,r){const s=e.serverCache,i=Zv(e,s.getNode(),s.isFullyInitialized()||d2(n),s.isFiltered());return og(t,i,n,c,ag,r)}function WO(t,e,n,c,r,s){let i;if(Xc(c,n)!=null)return e;{const a=new vo(c,e,r),o=e.eventCache.getNode();let l;if(d2(n)||p2(n)===".priority"){let f;if(e.serverCache.isFullyInitialized())f=$i(c,qe(e));else{const u=e.serverCache.getNode();P(u instanceof M2,"serverChildren would be complete if leaf node"),f=rg(c,u)}f=f,l=t.filter.updateFullNode(o,f,s)}else{const f=p2(n);let u=po(c,f,e.serverCache);u==null&&e.serverCache.isCompleteForChild(f)&&(u=o.getImmediateChild(f)),u!=null?l=t.filter.updateChild(o,f,u,k2(n),a,s):e.eventCache.getNode().hasChild(f)?l=t.filter.updateChild(o,f,M2.EMPTY_NODE,k2(n),a,s):l=o,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(i=$i(c,qe(e)),i.isLeafNode()&&(l=t.filter.updateFullNode(l,i,s)))}return i=e.serverCache.isFullyInitialized()||Xc(c,S2())!=null,qt(e,l,i,t.filter.filtersNodes())}}function jO(t,e){const n=qe(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!d2(e)&&!n.getImmediateChild(p2(e)).isEmpty())?n.getChild(e):null}function $f(t,e,n,c){e.type===k3.MERGE&&e.source.queryId!==null&&(P(qe(t.viewCache_),"We should always have a full cache before handling merges"),P(qi(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,s=OO(t.processor_,r,e,n,c);return DO(t.processor_,s.viewCache),P(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,$O(t,s.changes,s.viewCache.eventCache.getNode(),null)}function $O(t,e,n,c){const r=c?[c]:t.eventRegistrations_;return CO(t.eventGenerator_,e,n,r)}/**
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
 */let Gf;function GO(t){P(!Gf,"__referenceConstructor has already been defined"),Gf=t}function go(t,e,n,c){const r=e.source.queryId;if(r!==null){const s=t.views.get(r);return P(s!=null,"SyncTree gave us an op for an invalid query."),$f(s,e,n,c)}else{let s=[];for(const i of t.views.values())s=s.concat($f(i,e,n,c));return s}}function _o(t,e){let n=null;for(const c of t.views.values())n=n||jO(c,e);return n}/**
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
 */let Kf;function KO(t){P(!Kf,"__referenceConstructor has already been defined"),Kf=t}class Qf{constructor(e){this.listenProvider_=e,this.syncPointTree_=new x2(null),this.pendingWriteTree_=IO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function QO(t,e,n,c,r){return MO(t.pendingWriteTree_,e,n,c,r),r?v8(t,new Ue(Qv(),e,n)):[]}function u6(t,e,n=!1){const c=yO(t.pendingWriteTree_,e);if(LO(t.pendingWriteTree_,e)){let s=new x2(null);return c.snap!=null?s=s.set(S2(),!0):o3(c.children,i=>{s=s.set(new F2(i),!0)}),v8(t,new Yc(c.path,s,n))}else return[]}function p8(t,e,n){return v8(t,new Ue(Yv(),e,n))}function YO(t,e,n){const c=x2.fromObject(n);return v8(t,new L0(Yv(),e,c))}function XO(t,e,n,c){const r=hg(t,c);if(r!=null){const s=dg(r),i=s.path,a=s.queryId,o=c3(i,e),l=new Ue(Xv(a),o,n);return mg(t,i,l)}else return[]}function JO(t,e,n,c){const r=hg(t,c);if(r){const s=dg(r),i=s.path,a=s.queryId,o=c3(i,e),l=x2.fromObject(n),f=new L0(Xv(a),o,l);return mg(t,i,f)}else return[]}function lg(t,e,n){const r=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(i,a)=>{const o=c3(i,e),l=_o(a,o);if(l)return l});return cg(r,e,s,n,!0)}function v8(t,e){return fg(e,t.syncPointTree_,null,tg(t.pendingWriteTree_,S2()))}function fg(t,e,n,c){if(d2(t.path))return ug(t,e,n,c);{const r=e.get(S2());n==null&&r!=null&&(n=_o(r,S2()));let s=[];const i=p2(t.path),a=t.operationForChild(i),o=e.children.get(i);if(o&&a){const l=n?n.getImmediateChild(i):null,f=sg(c,i);s=s.concat(fg(a,o,l,f))}return r&&(s=s.concat(go(r,t,c,n))),s}}function ug(t,e,n,c){const r=e.get(S2());n==null&&r!=null&&(n=_o(r,S2()));let s=[];return e.children.inorderTraversal((i,a)=>{const o=n?n.getImmediateChild(i):null,l=sg(c,i),f=t.operationForChild(i);f&&(s=s.concat(ug(f,a,o,l)))}),r&&(s=s.concat(go(r,t,c,n))),s}function hg(t,e){return t.tagToQueryMap.get(e)}function dg(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new F2(t.substr(0,e))}}function mg(t,e,n){const c=t.syncPointTree_.get(e);P(c,"Missing sync point for query tag that we're tracking");const r=tg(t.pendingWriteTree_,e);return go(c,n,r,null)}/**
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
 */class Co{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Co(n)}node(){return this.node_}}class Vo{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=l1(this.path_,e);return new Vo(this.syncTree_,n)}node(){return lg(this.syncTree_,this.path_)}}const ZO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Yf=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return eF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return tF(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},eF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},tF=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const c=t.increment;typeof c!="number"&&P(!1,"Unexpected increment value: "+c);const r=e.node();if(P(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return c;const i=r.getValue();return typeof i!="number"?c:i+c},nF=function(t,e,n,c){return Ho(e,new Vo(n,t),c)},cF=function(t,e,n){return Ho(t,new Co(e),n)};function Ho(t,e,n){const c=t.getPriority().val(),r=Yf(c,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const i=t,a=Yf(i.getValue(),e,n);return a!==i.getValue()||r!==i.getPriority().val()?new s1(a,M1(r)):t}else{const i=t;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new s1(r))),i.forEachChild(L1,(a,o)=>{const l=Ho(o,e.getImmediateChild(a),n);l!==o&&(s=s.updateImmediateChild(a,l))}),s}}/**
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
 */class zo{constructor(e="",n=null,c={children:{},childCount:0}){this.name=e,this.parent=n,this.node=c}}function Mo(t,e){let n=e instanceof F2?e:new F2(e),c=t,r=p2(n);for(;r!==null;){const s=k6(c.node.children,r)||{children:{},childCount:0};c=new zo(r,c,s),n=k2(n),r=p2(n)}return c}function ot(t){return t.node.value}function pg(t,e){t.node.value=e,Qi(t)}function vg(t){return t.node.childCount>0}function rF(t){return ot(t)===void 0&&!vg(t)}function g8(t,e){o3(t.node.children,(n,c)=>{e(new zo(n,t,c))})}function gg(t,e,n,c){n&&!c&&e(t),g8(t,r=>{gg(r,e,!0,c)}),n&&c&&e(t)}function sF(t,e,n){let c=n?t:t.parent;for(;c!==null;){if(e(c))return!0;c=c.parent}return!1}function rn(t){return new F2(t.parent===null?t.name:rn(t.parent)+"/"+t.name)}function Qi(t){t.parent!==null&&iF(t.parent,t.name,t)}function iF(t,e,n){const c=rF(n),r=H3(t.node.children,e);c&&r?(delete t.node.children[e],t.node.childCount--,Qi(t)):!c&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Qi(t))}/**
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
 */const aF=/[\[\].#$\/\u0000-\u001F\u007F]/,oF=/[\[\].#$\u0000-\u001F\u007F]/,zs=10*1024*1024,_g=function(t){return typeof t=="string"&&t.length!==0&&!aF.test(t)},lF=function(t){return typeof t=="string"&&t.length!==0&&!oF.test(t)},fF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lF(t)},Cg=function(t,e,n){const c=n instanceof F2?new qD(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+me(c));if(typeof e=="function")throw new Error(t+"contains a function "+me(c)+" with contents = "+e.toString());if(_v(e))throw new Error(t+"contains "+e.toString()+" "+me(c));if(typeof e=="string"&&e.length>zs/3&&Lr(e)>zs)throw new Error(t+"contains a string greater than "+zs+" utf8 bytes "+me(c)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(o3(e,(i,a)=>{if(i===".value")r=!0;else if(i!==".priority"&&i!==".sv"&&(s=!0,!_g(i)))throw new Error(t+" contains an invalid key ("+i+") "+me(c)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WD(c,i),Cg(t,a,c),jD(c)}),r&&s)throw new Error(t+' contains ".value" child '+me(c)+" in addition to actual children.")}},uF=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_g(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!fF(n))throw new Error(QT(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class hF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function dF(t,e){let n=null;for(let c=0;c<e.length;c++){const r=e[c],s=r.getPath();n!==null&&!Bv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&t.eventLists_.push(n)}function Je(t,e,n){dF(t,n),mF(t,c=>p3(c,e)||p3(e,c))}function mF(t,e){t.recursionDepth_++;let n=!0;for(let c=0;c<t.eventLists_.length;c++){const r=t.eventLists_[c];if(r){const s=r.path;e(s)?(pF(t.eventLists_[c]),t.eventLists_[c]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function pF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const c=n.getEventRunner();xe&&z1("event: "+n.toString()),nn(c)}}}/**
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
 */const vF="repo_interrupt",gF=25;class _F{constructor(e,n,c,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=c,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new hF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Qc(),this.transactionQueueTree_=new zo,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function CF(t,e,n){if(t.stats_=oo(t.repoInfo_),t.forceRestClient_||dD())t.server_=new Kc(t.repoInfo_,(c,r,s,i)=>{Xf(t,c,r,s,i)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Jf(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{m1(n)}catch(c){throw new Error("Invalid authOverride provided: "+c)}}t.persistentConnection_=new h4(t.repoInfo_,e,(c,r,s,i)=>{Xf(t,c,r,s,i)},c=>{Jf(t,c)},c=>{HF(t,c)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(c=>{t.server_.refreshAuthToken(c)}),t.appCheckProvider_.addTokenChangeListener(c=>{t.server_.refreshAppCheckToken(c.token)}),t.statsReporter_=CD(t.repoInfo_,()=>new _O(t.stats_,t.server_)),t.infoData_=new dO,t.infoSyncTree_=new Qf({startListening:(c,r,s,i)=>{let a=[];const o=t.infoData_.getNode(c._path);return o.isEmpty()||(a=p8(t.infoSyncTree_,c._path,o),setTimeout(()=>{i("ok")},0)),a},stopListening:()=>{}}),yo(t,"connected",!1),t.serverSyncTree_=new Qf({startListening:(c,r,s,i)=>(t.server_.listen(c,s,r,(a,o)=>{const l=i(a,o);Je(t.eventQueue_,c._path,l)}),[]),stopListening:(c,r)=>{t.server_.unlisten(c,r)}})}function VF(t){const n=t.infoData_.getNode(new F2(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vg(t){return ZO({timestamp:VF(t)})}function Xf(t,e,n,c,r){t.dataUpdateCount++;const s=new F2(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let i=[];if(r)if(c){const o=Hc(n,l=>M1(l));i=JO(t.serverSyncTree_,s,o,r)}else{const o=M1(n);i=XO(t.serverSyncTree_,s,o,r)}else if(c){const o=Hc(n,l=>M1(l));i=YO(t.serverSyncTree_,s,o)}else{const o=M1(n);i=p8(t.serverSyncTree_,s,o)}let a=s;i.length>0&&(a=wo(t,s)),Je(t.eventQueue_,a,i)}function Jf(t,e){yo(t,"connected",e),e===!1&&MF(t)}function HF(t,e){o3(e,(n,c)=>{yo(t,n,c)})}function yo(t,e,n){const c=new F2("/.info/"+e),r=M1(n);t.infoData_.updateSnapshot(c,r);const s=p8(t.infoSyncTree_,c,r);Je(t.eventQueue_,c,s)}function zF(t){return t.nextWriteId_++}function MF(t){Hg(t,"onDisconnectEvents");const e=Vg(t),n=Qc();Ui(t.onDisconnect_,S2(),(r,s)=>{const i=nF(r,s,t.serverSyncTree_,e);Kv(n,r,i)});let c=[];Ui(n,S2(),(r,s)=>{c=c.concat(p8(t.serverSyncTree_,r,s));const i=bF(t,r);wo(t,i)}),t.onDisconnect_=Qc(),Je(t.eventQueue_,S2(),c)}function yF(t){t.persistentConnection_&&t.persistentConnection_.interrupt(vF)}function Hg(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),z1(n,...e)}function zg(t,e,n){return lg(t.serverSyncTree_,e,n)||M2.EMPTY_NODE}function Lo(t,e=t.transactionQueueTree_){if(e||_8(t,e),ot(e)){const n=yg(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&LF(t,rn(e),n)}else vg(e)&&g8(e,n=>{Lo(t,n)})}function LF(t,e,n){const c=n.map(l=>l.currentWriteId),r=zg(t,e,c);let s=r;const i=r.hash();for(let l=0;l<n.length;l++){const f=n[l];P(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const u=c3(e,f.path);s=s.updateChild(u,f.currentOutputSnapshotRaw)}const a=s.val(!0),o=e;t.server_.put(o.toString(),a,l=>{Hg(t,"transaction put response",{path:o.toString(),status:l});let f=[];if(l==="ok"){const u=[];for(let h=0;h<n.length;h++)n[h].status=2,f=f.concat(u6(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&u.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();_8(t,Mo(t.transactionQueueTree_,e)),Lo(t,t.transactionQueueTree_),Je(t.eventQueue_,e,f);for(let h=0;h<u.length;h++)nn(u[h])}else{if(l==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{X1("transaction at "+o.toString()+" failed: "+l);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=l}wo(t,e)}},i)}function wo(t,e){const n=Mg(t,e),c=rn(n),r=yg(t,n);return wF(t,r,c),c}function wF(t,e,n){if(e.length===0)return;const c=[];let r=[];const i=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const o=e[a],l=c3(n,o.path);let f=!1,u;if(P(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),o.status===4)f=!0,u=o.abortReason,r=r.concat(u6(t.serverSyncTree_,o.currentWriteId,!0));else if(o.status===0)if(o.retryCount>=gF)f=!0,u="maxretry",r=r.concat(u6(t.serverSyncTree_,o.currentWriteId,!0));else{const h=zg(t,o.path,i);o.currentInputSnapshot=h;const d=e[a].update(h.val());if(d!==void 0){Cg("transaction failed: Data returned ",d,o.path);let m=M1(d);typeof d=="object"&&d!=null&&H3(d,".priority")||(m=m.updatePriority(h.getPriority()));const C=o.currentWriteId,_=Vg(t),z=cF(m,h,_);o.currentOutputSnapshotRaw=m,o.currentOutputSnapshotResolved=z,o.currentWriteId=zF(t),i.splice(i.indexOf(C),1),r=r.concat(QO(t.serverSyncTree_,o.path,z,o.currentWriteId,o.applyLocally)),r=r.concat(u6(t.serverSyncTree_,C,!0))}else f=!0,u="nodata",r=r.concat(u6(t.serverSyncTree_,o.currentWriteId,!0))}Je(t.eventQueue_,n,r),r=[],f&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?c.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):c.push(()=>e[a].onComplete(new Error(u),!1,null))))}_8(t,t.transactionQueueTree_);for(let a=0;a<c.length;a++)nn(c[a]);Lo(t,t.transactionQueueTree_)}function Mg(t,e){let n,c=t.transactionQueueTree_;for(n=p2(e);n!==null&&ot(c)===void 0;)c=Mo(c,n),e=k2(e),n=p2(e);return c}function yg(t,e){const n=[];return Lg(t,e,n),n.sort((c,r)=>c.order-r.order),n}function Lg(t,e,n){const c=ot(e);if(c)for(let r=0;r<c.length;r++)n.push(c[r]);g8(e,r=>{Lg(t,r,n)})}function _8(t,e){const n=ot(e);if(n){let c=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[c]=n[r],c++);n.length=c,pg(e,n.length>0?n:void 0)}g8(e,c=>{_8(t,c)})}function bF(t,e){const n=rn(Mg(t,e)),c=Mo(t.transactionQueueTree_,e);return sF(c,r=>{Ms(t,r)}),Ms(t,c),gg(c,r=>{Ms(t,r)}),n}function Ms(t,e){const n=ot(e);if(n){const c=[];let r=[],s=-1;for(let i=0;i<n.length;i++)n[i].status===3||(n[i].status===1?(P(s===i-1,"All SENT items should be at beginning of queue."),s=i,n[i].status=3,n[i].abortReason="set"):(P(n[i].status===0,"Unexpected transaction status in abort"),n[i].unwatcher(),r=r.concat(u6(t.serverSyncTree_,n[i].currentWriteId,!0)),n[i].onComplete&&c.push(n[i].onComplete.bind(null,new Error("set"),!1,null))));s===-1?pg(e,void 0):n.length=s+1,Je(t.eventQueue_,rn(e),r);for(let i=0;i<c.length;i++)nn(c[i])}}/**
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
 */function SF(t){let e="";const n=t.split("/");for(let c=0;c<n.length;c++)if(n[c].length>0){let r=n[c];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function TF(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const c=n.split("=");c.length===2?e[decodeURIComponent(c[0])]=decodeURIComponent(c[1]):X1(`Invalid query segment '${n}' in query '${t}'`)}return e}const Zf=function(t,e){const n=AF(t),c=n.namespace;n.domain==="firebase.com"&&Fe(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!c||c==="undefined")&&n.domain!=="localhost"&&Fe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sD();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new vD(n.host,n.secure,c,r,e,"",c!==n.subdomain),path:new F2(n.pathString)}},AF=function(t){let e="",n="",c="",r="",s="",i=!0,a="https",o=443;if(typeof t=="string"){let l=t.indexOf("//");l>=0&&(a=t.substring(0,l-1),t=t.substring(l+2));let f=t.indexOf("/");f===-1&&(f=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(f,u)),f<u&&(r=SF(t.substring(f,u)));const h=TF(t.substring(Math.min(t.length,u)));l=e.indexOf(":"),l>=0?(i=a==="https"||a==="wss",o=parseInt(e.substring(l+1),10)):l=e.length;const d=e.slice(0,l);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const m=e.indexOf(".");c=e.substring(0,m).toLowerCase(),n=e.substring(m+1),s=c}"ns"in h&&(s=h.ns)}return{host:e,port:o,domain:n,subdomain:c,secure:i,scheme:a,pathString:r,namespace:s}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,c,r){this._repo=e,this._path=n,this._queryParams=c,this._orderByCalled=r}get key(){return d2(this._path)?null:Dv(this._path)}get ref(){return new lt(this._repo,this._path)}get _queryIdentifier(){const e=Df(this._queryParams),n=io(e);return n==="{}"?"default":n}get _queryObject(){return Df(this._queryParams)}isEqual(e){if(e=c1(e),!(e instanceof bo))return!1;const n=this._repo===e._repo,c=Bv(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&c&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+UD(this._path)}}class lt extends bo{constructor(e,n){super(e,n,new ho,!1)}get parent(){const e=Fv(this._path);return e===null?null:new lt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}GO(lt);KO(lt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EF="FIREBASE_DATABASE_EMULATOR_HOST",Yi={};let NF=!1;function xF(t,e,n,c,r){let s=c||t.options.databaseURL;s===void 0&&(t.options.projectId||Fe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),z1("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let i=Zf(s,r),a=i.repoInfo,o,l;typeof process<"u"&&Cf&&(l=Cf[EF]),l?(o=!0,s=`http://${l}?ns=${a.namespace}`,i=Zf(s,r),a=i.repoInfo):o=!i.repoInfo.secure;const f=r&&o?new Oi(Oi.OWNER):new pD(t.name,t.options,e);uF("Invalid Firebase Database URL",i),d2(i.path)||Fe("Database URL must point to the root of a Firebase Database (not including a child path).");const u=kF(a,t,f,new mD(t.name,n));return new RF(u,t)}function IF(t,e){const n=Yi[e];(!n||n[t.key]!==t)&&Fe(`Database ${e}(${t.repoInfo_}) has already been deleted.`),yF(t),delete n[t.key]}function kF(t,e,n,c){let r=Yi[e.name];r||(r={},Yi[e.name]=r);let s=r[t.toURLString()];return s&&Fe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new _F(t,NF,n,c),r[t.toURLString()]=s,s}class RF{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(CF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new lt(this._repo,S2())),this._rootInternal}_delete(){return this._rootInternal!==null&&(IF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Fe("Cannot call "+e+" on a deleted database.")}}/**
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
 */function PF(t){eD(Y3),a3(new i3("database",(e,{instanceIdentifier:n})=>{const c=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return xF(c,r,s,n)},"PUBLIC").setMultipleInstances(!0)),w1(Vf,Hf,t),w1(Vf,Hf,"esm2017")}h4.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};h4.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};PF();/**
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
 */const wg="firebasestorage.googleapis.com",DF="storageBucket",OF=2*60*1e3,FF=10*60*1e3;/**
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
 */class X3 extends L3{constructor(e,n,c=0){super(ys(e),`Firebase Storage: ${n} (${ys(e)})`),this.status_=c,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,X3.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ys(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var K3;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(K3||(K3={}));function ys(t){return"storage/"+t}function BF(){const t="An unknown error occurred, please check the error payload for server response.";return new X3(K3.UNKNOWN,t)}function UF(){return new X3(K3.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qF(){return new X3(K3.CANCELED,"User canceled the upload/download.")}function WF(t){return new X3(K3.INVALID_URL,"Invalid URL '"+t+"'.")}function jF(t){return new X3(K3.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function eu(t){return new X3(K3.INVALID_ARGUMENT,t)}function bg(){return new X3(K3.APP_DELETED,"The Firebase app was deleted.")}function $F(t){return new X3(K3.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class v3{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let c;try{c=v3.makeFromUrl(e,n)}catch{return new v3(e,"")}if(c.path==="")return c;throw jF(e)}static makeFromUrl(e,n){let c=null;const r="([A-Za-z0-9.\\-_]+)";function s(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),o={bucket:1,path:3};function l(V){V.path_=decodeURIComponent(V.path)}const f="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",d=new RegExp(`^https?://${u}/${f}/b/${r}/o${h}`,"i"),m={bucket:1,path:3},g=n===wg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",_=new RegExp(`^https?://${g}/${r}/${C}`,"i"),M=[{regex:a,indices:o,postModify:s},{regex:d,indices:m,postModify:l},{regex:_,indices:{bucket:1,path:2},postModify:l}];for(let V=0;V<M.length;V++){const S=M[V],B=S.regex.exec(e);if(B){const G=B[S.indices.bucket];let x=B[S.indices.path];x||(x=""),c=new v3(G,x),S.postModify(c);break}}if(c==null)throw WF(e);return c}}class GF{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function KF(t,e,n){let c=1,r=null,s=null,i=!1,a=0;function o(){return a===2}let l=!1;function f(...C){l||(l=!0,e.apply(null,C))}function u(C){r=setTimeout(()=>{r=null,t(d,o())},C)}function h(){s&&clearTimeout(s)}function d(C,..._){if(l){h();return}if(C){h(),f.call(null,C,..._);return}if(o()||i){h(),f.call(null,C,..._);return}c<64&&(c*=2);let M;a===1?(a=2,M=0):M=(c+Math.random())*1e3,u(M)}let m=!1;function g(C){m||(m=!0,h(),!l&&(r!==null?(C||(a=2),clearTimeout(r),u(0)):C||(a=1)))}return u(0),s=setTimeout(()=>{i=!0,g(!0)},n),g}function QF(t){t(!1)}/**
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
 */function YF(t){return t!==void 0}function tu(t,e,n,c){if(c<e)throw eu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(c>n)throw eu(`Invalid value for '${t}'. Expected ${n} or less.`)}function XF(t){const e=encodeURIComponent;let n="?";for(const c in t)if(t.hasOwnProperty(c)){const r=e(c)+"="+e(t[c]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var Zc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zc||(Zc={}));/**
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
 */function JF(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||r||s}/**
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
 */class ZF{constructor(e,n,c,r,s,i,a,o,l,f,u,h=!0){this.url_=e,this.method_=n,this.headers_=c,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=o,this.timeout_=l,this.progressCallback_=f,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(c,r)=>{if(r){c(!1,new Rn(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const i=a=>{const o=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(o,l)};this.progressCallback_!==null&&s.addUploadProgressListener(i),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(i),this.pendingConnection_=null;const a=s.getErrorCode()===Zc.NO_ERROR,o=s.getStatus();if(!a||JF(o,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Zc.ABORT;c(!1,new Rn(!1,null,f));return}const l=this.successCodes_.indexOf(o)!==-1;c(!0,new Rn(l,s))})},n=(c,r)=>{const s=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const o=this.callback_(a,a.getResponse());YF(o)?s(o):s()}catch(o){i(o)}else if(a!==null){const o=BF();o.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,o)):i(o)}else if(r.canceled){const o=this.appDelete_?bg():qF();i(o)}else{const o=UF();i(o)}};this.canceled_?n(!1,new Rn(!1,null,!0)):this.backoffId_=KF(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&QF(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Rn{constructor(e,n,c){this.wasSuccessCode=e,this.connection=n,this.canceled=!!c}}function eB(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function tB(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function nB(t,e){e&&(t["X-Firebase-GMPID"]=e)}function cB(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rB(t,e,n,c,r,s,i=!0){const a=XF(t.urlParams),o=t.url+a,l=Object.assign({},t.headers);return nB(l,e),eB(l,n),tB(l,s),cB(l,c),new ZF(o,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}/**
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
 */function sB(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function iB(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class er{constructor(e,n){this._service=e,n instanceof v3?this._location=n:this._location=v3.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new er(e,n)}get root(){const e=new v3(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iB(this._location.path)}get storage(){return this._service}get parent(){const e=sB(this._location.path);if(e===null)return null;const n=new v3(this._location.bucket,e);return new er(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $F(e)}}function nu(t,e){const n=e==null?void 0:e[DF];return n==null?null:v3.makeFromBucketSpec(n,t)}class aB{constructor(e,n,c,r,s){this.app=e,this._authProvider=n,this._appCheckProvider=c,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=wg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=OF,this._maxUploadRetryTime=FF,this._requests=new Set,r!=null?this._bucket=v3.makeFromBucketSpec(r,this._host):this._bucket=nu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=v3.makeFromBucketSpec(this._url,e):this._bucket=nu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){tu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){tu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new er(this,e)}_makeRequest(e,n,c,r,s=!0){if(this._deleted)return new GF(bg());{const i=rB(e,this._appId,c,r,n,this._firebaseVersion,s);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[c,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,c,r).getPromise()}}const cu="@firebase/storage",ru="0.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oB="storage";function lB(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),c=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new aB(n,c,r,e,Y3)}function fB(){a3(new i3(oB,lB,"PUBLIC").setMultipleInstances(!0)),w1(cu,ru,""),w1(cu,ru,"esm2017")}fB();const Ls=new WeakMap;function Sg(t,e){return Ls.has(e)||Ls.set(e,t||{f:{},r:{},s:{},u:{}}),Ls.get(e)}function uB(t,e,n,c){if(!t)return n;const[r,s]=Tg(t);if(!r)return n;const i=Sg(void 0,c)[r]||{},a=e||s;return a&&a in i?i[a]:n}function hB(t,e,n,c){if(!t)return;const[r,s]=Tg(t);if(!r)return;const i=Sg(void 0,c)[r],a=e||s;if(a)return n.then(o=>{i[a]=o}).catch(I3),a}function Tg(t){return GP(t)||KP(t)?["f",t.path]:QP(t)?["r",t.toString()]:YP(t)?["s",t.toString()]:[]}const ws=new WeakMap;function dB(t,e,n){const c=mv();ws.has(c)||ws.set(c,new Map);const r=ws.get(c),s=hB(e,n,t,c);return s&&r.set(s,t),s?()=>r.delete(s):I3}const mB={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function Xi(t,e,n,c){if(!jP(t))return[t,{}];const r=[{},{}],s=Object.keys(n).reduce((a,o)=>{const l=n[o];return a[l.path]=l.data(),a},{});function i(a,o,l,f){o=o||{};const[u,h]=f;Object.getOwnPropertyNames(a).forEach(d=>{const m=Object.getOwnPropertyDescriptor(a,d);m&&!m.enumerable&&Object.defineProperty(u,d,m)});for(const d in a){const m=a[d];if(m==null||m instanceof Date||m instanceof X2||m instanceof o8)u[d]=m;else if(so(m)){const g=l+d;u[d]=g in n?o[d]:m.path,h[g]=m.converter?m:m.withConverter(c.converter)}else if(Array.isArray(m)){u[d]=Array(m.length);for(let g=0;g<m.length;g++){const C=m[g];C&&C.path in s&&(u[d][g]=s[C.path])}i(m,o[d]||u[d],l+d+".",[u[d],h])}else Ye(m)?(u[d]={},i(m,o[d],l+d+".",[u[d],h])):u[d]=m}}return i(t,e,"",r),r}const So={reset:!1,wait:!0,maxRefDepth:2,converter:mB,snapshotOptions:{serverTimestamps:"estimate"}};function tr(t){for(const e in t)t[e].unsub()}function Ji(t,e,n,c,r,s,i,a,o){const[l,f]=Xi(c.data(t.snapshotOptions),ro(e,n),r,t);s.set(e,n,l),Zi(t,e,n,r,f,s,i,a,o)}function pB({ref:t,target:e,path:n,depth:c,resolve:r,reject:s,ops:i},a){const o=Object.create(null);let l=I3;return a.once?fv(t).then(f=>{f.exists()?Ji(a,e,n,f,o,i,c,r,s):(i.set(e,n,null),r())}).catch(s):l=co(t,f=>{f.exists()?Ji(a,e,n,f,o,i,c,r,s):(i.set(e,n,null),r())},s),()=>{l(),tr(o)}}function Zi(t,e,n,c,r,s,i,a,o){const l=Object.keys(r);if(Object.keys(c).filter(g=>l.indexOf(g)<0).forEach(g=>{c[g].unsub(),delete c[g]}),!l.length||++i>t.maxRefDepth)return a(n);let u=0;const h=l.length,d=Object.create(null);function m(g){g in d&&++u>=h&&a(n)}l.forEach(g=>{const C=c[g],_=r[g],z=`${n}.${g}`;if(d[z]=!0,C)if(C.path!==_.path)C.unsub();else return;c[g]={data:()=>ro(e,z),unsub:pB({ref:_,target:e,path:z,depth:i,ops:s,resolve:m.bind(null,z),reject:o},t),path:_.path}})}function vB(t,e,n,c,r,s){const i=Object.assign({},So,s),{snapshotListenOptions:a,snapshotOptions:o,wait:l,once:f}=i,u="value";let h=R1(l?[]:t.value);l||n.set(t,u,[]);const d=c;let m,g=I3;const C=[],_={added:({newIndex:M,doc:V})=>{C.splice(M,0,Object.create(null));const S=C[M],[B,G]=Xi(V.data(o),void 0,S,i);n.add(t4(h),M,B),Zi(i,h,`${u}.${M}`,S,G,n,0,c.bind(null,V),r)},modified:({oldIndex:M,newIndex:V,doc:S})=>{const B=t4(h),G=C[M],x=B[M],[Q,t2]=Xi(S.data(o),x,G,i);C.splice(V,0,G),n.remove(B,M),n.add(B,V,Q),Zi(i,h,`${u}.${V}`,G,t2,n,0,c,r)},removed:({oldIndex:M})=>{const V=t4(h);n.remove(V,M),tr(C.splice(M,1)[0])}};function z(M){const V=M.docChanges(a);if(!m&&V.length){m=!0;let S=0;const B=V.length,G=Object.create(null);for(let x=0;x<B;x++)G[V[x].doc.id]=!0;c=x=>{x&&x.id in G&&++S>=B&&(l&&(n.set(t,u,t4(h)),h=t),d(t4(h)),c=I3)}}V.forEach(S=>{_[S.type](S)}),V.length||(l&&(n.set(t,u,t4(h)),h=t),c(t4(h)))}return f?b6(e).then(z).catch(r):g=co(e,z,r),M=>{if(g(),M){const V=typeof M=="function"?M():[];n.set(t,u,V)}C.forEach(tr)}}function gB(t,e,n,c,r,s){const i=Object.assign({},So,s),a="value",o=Object.create(null);c=XP(c,()=>ro(t,a));let l=I3;function f(u){u.exists()?Ji(i,t,a,u,o,n,0,c,r):(n.set(t,a,null),c(null))}return i.once?fv(e).then(f).catch(r):l=co(e,f,r),u=>{if(l(),u){const h=typeof u=="function"?u():null;n.set(t,a,h)}tr(o)}}const su=Symbol();function _B(t,e){let n=I3;const c=Object.assign({},So,e),r=t4(t),s=c.target||R1();ZP()&&(c.once=!0);const i=uB(r,c.ssrKey,su,mv()),a=i!==su;a&&(s.value=i);let o=!a;const l=R1(!1),f=R1(),u=ih(),h=_a();let d=I3;function m(){let _=t4(t);const z=new Promise((M,V)=>{if(n(c.reset),!_)return n=I3,M(null);l.value=o,o=!0,_.converter||(_=_.withConverter(c.converter)),n=(so(_)?gB:vB)(s,_,CB,M,V,c)}).catch(M=>(u.value===z&&(f.value=M),Promise.reject(M))).finally(()=>{u.value===z&&(l.value=!1)});u.value=z}let g=I3;A1(t)&&(g=D3(t,m)),m(),r&&(d=dB(u.value,r,c.ssrKey)),x0()&&zh(()=>u.value),h&&qu(C);function C(_=c.reset){g(),d(),n(_)}return Object.defineProperties(s,{error:{get:()=>f},data:{get:()=>s},pending:{get:()=>l},promise:{get:()=>u},stop:{get:()=>C}})}const CB={set:(t,e,n)=>qP(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function ea(t,e){return _B(t,{target:R1([]),...e})}class Ag{constructor(e=""){h1(this,"db");h1(this,"todoRef");h1(this,"userRef");h1(this,"userEmail");this.db=Uc(),this.userRef=w6(this.db,"Users"),this.userEmail=e}async init(){if(this.userEmail!=""){const e=c4(this.userRef,F1("email","==",this.userEmail)),n=await b6(e);this.todoRef=w6(this.db,n.docs[0].ref.path,"todos")}ea(this.userRef)}async getTodos(){if(this.userEmail!="")return await b6(this.todoRef);throw"User is not logged in!"}async setTodo(e){let n=Object.assign({},e);n.dateCompleted===void 0&&(n.dateCompleted=new Date),await xi(this.todoRef,n).then(c=>{}).catch(c=>{console.log(c)})}async updateTodo(e,n){const c=de(this.todoRef,n),r=Object.assign({},e);r.dateCompleted===void 0&&(r.dateCompleted=new Date),await hf(c,r)}async addTodo(e){e.dateCompleted==null&&(e.dateCompleted=new Date),await xi(this.todoRef,e)}async addTodo2(e){e.dateCompleted==null&&(e.dateCompleted=new Date),await hf(de(this.todoRef,e.id),e)}async getCurrentTodosReferece(){return c4(this.todoRef,F1("completed","==",!1),F1("dueDate","<=",new Date().toISOString().split("T")[0]),f3("date","asc"))}async toggleCompleted(e,n){const c=de(this.todoRef,e);await vs(c,{completed:n})}async toggleFavourite(e,n){const c=de(this.todoRef,e);await vs(c,{favourite:n})}async editTodo(e,n){const c=de(this.todoRef,e);await vs(c,n)}async deleteTodos(e){(await b6(e)).forEach(c=>{df(c.ref)})}async deleteTodoById(e){await df(de(this.todoRef,e))}}const VB={class:"header"},HB={class:"container"},zB=Q3({__name:"App",setup(t){const e=m3().currentUser,n=new Ag(e==null?void 0:e.email);return n.init(),C6("fireStorage",n),(c,r)=>(t1(),_3(I1,null,[o2("div",VB,[q2(px)]),o2("div",HB,[(t1(),Ae(Ww,null,{default:Xt(()=>[q2(T2(Qh))]),_:1}))])],64))}}),MB="modulepreload",yB=function(t){return"/todo-vue/"+t},iu={},LB=function(e,n,c){let r=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");r=Promise.all(n.map(i=>{if(i=yB(i),i in iu)return;iu[i]=!0;const a=i.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!c)for(let u=s.length-1;u>=0;u--){const h=s[u];if(h.href===i&&(!a||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${o}`))return;const f=document.createElement("link");if(f.rel=a?"stylesheet":MB,a||(f.as="script",f.crossOrigin=""),f.href=i,document.head.appendChild(f),a)return new Promise((u,h)=>{f.addEventListener("load",u),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})}))}return r.then(()=>e()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})};class Eg{constructor(e,n="",c=!1,r="normal",s=new Date,i=new Date(new Date().setDate(new Date().getDate())).toISOString().split("T")[0],a=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),o="normal",l=!1){h1(this,"title");h1(this,"description");h1(this,"completed");h1(this,"dateCompleted");h1(this,"id");h1(this,"dueDate");h1(this,"priority");h1(this,"favourite",!1);h1(this,"type");h1(this,"date");this.title=e,this.favourite=l,this.description=n,this.completed=c,this.priority=o,this.type=r,this.date=s,this.id=a,this.dueDate=i}editTodo(e=this.title,n=this.description,c=this.completed,r=this.type,s=this.date,i=this.dueDate,a=this.id,o=this.priority){this.title=e,this.description=n,this.completed=c,this.priority=o,this.type=r,this.date=s,this.id=a,this.dueDate=i}toggleCompleted(){this.completed=!this.completed,this.dateCompleted=new Date}toggleFavourite(){this.favourite=!this.favourite}}const wB=Q3({__name:"TodoCreator",props:{passed:String,list:Object},emits:["addTodo","randLogEvent","addDescription"],setup(t,{emit:e}){let n=e;const c=Y6({title:"",content:"",done:null,date:null});function r(){var a=c.title;if(a!=""){var o=c.content,l=new Eg(a,o,!1),f=Object.assign({},l);c.title="",c.content="",n("addTodo",f)}}const s=R1(null);function i(){s.value&&s.value.focus()}return(a,o)=>(t1(),_3("div",{class:"todo-item",onClick:i},[zt(o2("input",{type:"text",ref_key:"todoInput",ref:s,placeholder:"Enter the title of Todo","onUpdate:modelValue":o[0]||(o[0]=l=>c.title=l),onKeyup:Ph(r,["enter"])},null,544),[[Yn,c.title]])]))}}),bB=D0(wB,[["__scopeId","data-v-b79198bf"]]);function Ng(t){return _a()?(qu(t),!0):!1}function To(t){return typeof t=="function"?t():T2(t)}const xg=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const SB=Object.prototype.toString,TB=t=>SB.call(t)==="[object Object]",sc=()=>{},AB=EB();function EB(){var t,e;return xg&&((t=window==null?void 0:window.navigator)==null?void 0:t.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((e=window==null?void 0:window.navigator)==null?void 0:e.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function we(t){var e;const n=To(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Ao=xg?window:void 0;function bs(...t){let e,n,c,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,c,r]=t,e=Ao):[e,n,c,r]=t,!e)return sc;Array.isArray(n)||(n=[n]),Array.isArray(c)||(c=[c]);const s=[],i=()=>{s.forEach(f=>f()),s.length=0},a=(f,u,h,d)=>(f.addEventListener(u,h,d),()=>f.removeEventListener(u,h,d)),o=D3(()=>[we(e),To(r)],([f,u])=>{if(i(),!f)return;const h=TB(u)?{...u}:u;s.push(...n.flatMap(d=>c.map(m=>a(f,d,m,h))))},{immediate:!0,flush:"post"}),l=()=>{o(),i()};return Ng(l),l}let au=!1;function NB(t,e,n={}){const{window:c=Ao,ignore:r=[],capture:s=!0,detectIframe:i=!1}=n;if(!c)return sc;AB&&!au&&(au=!0,Array.from(c.document.body.children).forEach(h=>h.addEventListener("click",sc)),c.document.documentElement.addEventListener("click",sc));let a=!0;const o=h=>r.some(d=>{if(typeof d=="string")return Array.from(c.document.querySelectorAll(d)).some(m=>m===h.target||h.composedPath().includes(m));{const m=we(d);return m&&(h.target===m||h.composedPath().includes(m))}}),f=[bs(c,"click",h=>{const d=we(t);if(!(!d||d===h.target||h.composedPath().includes(d))){if(h.detail===0&&(a=!o(h)),!a){a=!0;return}e(h)}},{passive:!0,capture:s}),bs(c,"pointerdown",h=>{const d=we(t);a=!o(h)&&!!(d&&!h.composedPath().includes(d))},{passive:!0}),i&&bs(c,"blur",h=>{setTimeout(()=>{var d;const m=we(t);((d=c.document.activeElement)==null?void 0:d.tagName)==="IFRAME"&&!(m!=null&&m.contains(c.document.activeElement))&&e(h)},0)})].filter(Boolean);return()=>f.forEach(h=>h())}function xB(){const t=R1(!1);return x0()&&Ea(()=>{t.value=!0}),t}function IB(t){const e=xB();return Q2(()=>(e.value,!!t()))}function kB(t,e,n={}){const{window:c=Ao,...r}=n;let s;const i=IB(()=>c&&"ResizeObserver"in c),a=()=>{s&&(s.disconnect(),s=void 0)},o=Q2(()=>Array.isArray(t)?t.map(u=>we(u)):[we(t)]),l=D3(o,u=>{if(a(),i.value&&c){s=new ResizeObserver(e);for(const h of u)h&&s.observe(h,r)}},{immediate:!0,flush:"post",deep:!0}),f=()=>{a(),l()};return Ng(f),{isSupported:i,stop:f}}function RB(t){const e=R1(t==null?void 0:t.element),n=R1(t==null?void 0:t.input),c=R1(1);function r(){var s,i;if(!e.value)return;let a="";e.value.style.height="1px",c.value=(s=e.value)==null?void 0:s.scrollHeight,t!=null&&t.styleTarget?To(t.styleTarget).style.height=`${c.value}px`:a=`${c.value}px`,e.value.style.height=a,(i=t==null?void 0:t.onResize)==null||i.call(t)}return D3([n,e],()=>dr(r),{immediate:!0}),kB(e,()=>r()),t!=null&&t.watch&&D3(t.watch,r,{immediate:!0,deep:!0}),{textarea:e,input:n,triggerResize:r}}function ou(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,c)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ou(Object(n),!0).forEach(function(c){r1(t,c,n[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ou(Object(n)).forEach(function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(n,c))})}return t}function nr(t){"@babel/helpers - typeof";return nr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nr(t)}function PB(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lu(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function DB(t,e,n){return e&&lu(t.prototype,e),n&&lu(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function r1(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Eo(t,e){return FB(t)||UB(t,e)||Ig(t,e)||WB()}function sn(t){return OB(t)||BB(t)||Ig(t)||qB()}function OB(t){if(Array.isArray(t))return ta(t)}function FB(t){if(Array.isArray(t))return t}function BB(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function UB(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var c=[],r=!0,s=!1,i,a;try{for(n=n.call(t);!(r=(i=n.next()).done)&&(c.push(i.value),!(e&&c.length===e));r=!0);}catch(o){s=!0,a=o}finally{try{!r&&n.return!=null&&n.return()}finally{if(s)throw a}}return c}}function Ig(t,e){if(t){if(typeof t=="string")return ta(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ta(t,e)}}function ta(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,c=new Array(e);n<e;n++)c[n]=t[n];return c}function qB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WB(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var fu=function(){},No={},kg={},Rg=null,Pg={mark:fu,measure:fu};try{typeof window<"u"&&(No=window),typeof document<"u"&&(kg=document),typeof MutationObserver<"u"&&(Rg=MutationObserver),typeof performance<"u"&&(Pg=performance)}catch{}var jB=No.navigator||{},uu=jB.userAgent,hu=uu===void 0?"":uu,Z4=No,O2=kg,du=Rg,Pn=Pg;Z4.document;var H4=!!O2.documentElement&&!!O2.head&&typeof O2.addEventListener=="function"&&typeof O2.createElement=="function",Dg=~hu.indexOf("MSIE")||~hu.indexOf("Trident/"),Dn,On,Fn,Bn,Un,g4="___FONT_AWESOME___",na=16,Og="fa",Fg="svg-inline--fa",We="data-fa-i2svg",ca="data-fa-pseudo-element",$B="data-fa-pseudo-element-pending",xo="data-prefix",Io="data-icon",mu="fontawesome-i2svg",GB="async",KB=["HTML","HEAD","STYLE","SCRIPT"],Bg=function(){try{return!0}catch{return!1}}(),R2="classic",U2="sharp",ko=[R2,U2];function an(t){return new Proxy(t,{get:function(n,c){return c in n?n[c]:n[R2]}})}var w0=an((Dn={},r1(Dn,R2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),r1(Dn,U2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Dn)),b0=an((On={},r1(On,R2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),r1(On,U2,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),On)),S0=an((Fn={},r1(Fn,R2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),r1(Fn,U2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Fn)),QB=an((Bn={},r1(Bn,R2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),r1(Bn,U2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Bn)),YB=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Ug="fa-layers-text",XB=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,JB=an((Un={},r1(Un,R2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),r1(Un,U2,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Un)),qg=[1,2,3,4,5,6,7,8,9,10],ZB=qg.concat([11,12,13,14,15,16,17,18,19,20]),eU=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],be={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},T0=new Set;Object.keys(b0[R2]).map(T0.add.bind(T0));Object.keys(b0[U2]).map(T0.add.bind(T0));var tU=[].concat(ko,sn(T0),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",be.GROUP,be.SWAP_OPACITY,be.PRIMARY,be.SECONDARY]).concat(qg.map(function(t){return"".concat(t,"x")})).concat(ZB.map(function(t){return"w-".concat(t)})),jt=Z4.FontAwesomeConfig||{};function nU(t){var e=O2.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function cU(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(O2&&typeof O2.querySelector=="function"){var rU=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];rU.forEach(function(t){var e=Eo(t,2),n=e[0],c=e[1],r=cU(nU(n));r!=null&&(jt[c]=r)})}var Wg={styleDefault:"solid",familyDefault:"classic",cssPrefix:Og,replacementClass:Fg,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};jt.familyPrefix&&(jt.cssPrefix=jt.familyPrefix);var G6=U(U({},Wg),jt);G6.autoReplaceSvg||(G6.observeMutations=!1);var $={};Object.keys(Wg).forEach(function(t){Object.defineProperty($,t,{enumerable:!0,set:function(n){G6[t]=n,$t.forEach(function(c){return c($)})},get:function(){return G6[t]}})});Object.defineProperty($,"familyPrefix",{enumerable:!0,set:function(e){G6.cssPrefix=e,$t.forEach(function(n){return n($)})},get:function(){return G6.cssPrefix}});Z4.FontAwesomeConfig=$;var $t=[];function sU(t){return $t.push(t),function(){$t.splice($t.indexOf(t),1)}}var S4=na,R3={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function iU(t){if(!(!t||!H4)){var e=O2.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=O2.head.childNodes,c=null,r=n.length-1;r>-1;r--){var s=n[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(c=s)}return O2.head.insertBefore(e,c),t}}var aU="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function A0(){for(var t=12,e="";t-- >0;)e+=aU[Math.random()*62|0];return e}function ft(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ro(t){return t.classList?ft(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function jg(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function oU(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(jg(t[n]),'" ')},"").trim()}function C8(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Po(t){return t.size!==R3.size||t.x!==R3.x||t.y!==R3.y||t.rotate!==R3.rotate||t.flipX||t.flipY}function lU(t){var e=t.transform,n=t.containerWidth,c=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),o={transform:"".concat(s," ").concat(i," ").concat(a)},l={transform:"translate(".concat(c/2*-1," -256)")};return{outer:r,inner:o,path:l}}function fU(t){var e=t.transform,n=t.width,c=n===void 0?na:n,r=t.height,s=r===void 0?na:r,i=t.startCentered,a=i===void 0?!1:i,o="";return a&&Dg?o+="translate(".concat(e.x/S4-c/2,"em, ").concat(e.y/S4-s/2,"em) "):a?o+="translate(calc(-50% + ".concat(e.x/S4,"em), calc(-50% + ").concat(e.y/S4,"em)) "):o+="translate(".concat(e.x/S4,"em, ").concat(e.y/S4,"em) "),o+="scale(".concat(e.size/S4*(e.flipX?-1:1),", ").concat(e.size/S4*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var uU=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function $g(){var t=Og,e=Fg,n=$.cssPrefix,c=$.replacementClass,r=uU;if(n!==t||c!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");r=r.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(a,".".concat(c))}return r}var pu=!1;function Ss(){$.autoAddCss&&!pu&&(iU($g()),pu=!0)}var hU={mixout:function(){return{dom:{css:$g,insertCss:Ss}}},hooks:function(){return{beforeDOMElementCreation:function(){Ss()},beforeI2svg:function(){Ss()}}}},_4=Z4||{};_4[g4]||(_4[g4]={});_4[g4].styles||(_4[g4].styles={});_4[g4].hooks||(_4[g4].hooks={});_4[g4].shims||(_4[g4].shims=[]);var g3=_4[g4],Gg=[],dU=function t(){O2.removeEventListener("DOMContentLoaded",t),cr=1,Gg.map(function(e){return e()})},cr=!1;H4&&(cr=(O2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(O2.readyState),cr||O2.addEventListener("DOMContentLoaded",dU));function mU(t){H4&&(cr?setTimeout(t,0):Gg.push(t))}function on(t){var e=t.tag,n=t.attributes,c=n===void 0?{}:n,r=t.children,s=r===void 0?[]:r;return typeof t=="string"?jg(t):"<".concat(e," ").concat(oU(c),">").concat(s.map(on).join(""),"</").concat(e,">")}function vu(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var pU=function(e,n){return function(c,r,s,i){return e.call(n,c,r,s,i)}},Ts=function(e,n,c,r){var s=Object.keys(e),i=s.length,a=r!==void 0?pU(n,r):n,o,l,f;for(c===void 0?(o=1,f=e[s[0]]):(o=0,f=c);o<i;o++)l=s[o],f=a(f,e[l],l,e);return f};function vU(t){for(var e=[],n=0,c=t.length;n<c;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<c){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((r&1023)<<10)+(s&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ra(t){var e=vU(t);return e.length===1?e[0].toString(16):null}function gU(t,e){var n=t.length,c=t.charCodeAt(e),r;return c>=55296&&c<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(c-55296)*1024+r-56320+65536:c}function gu(t){return Object.keys(t).reduce(function(e,n){var c=t[n],r=!!c.icon;return r?e[c.iconName]=c.icon:e[n]=c,e},{})}function sa(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=n.skipHooks,r=c===void 0?!1:c,s=gu(e);typeof g3.hooks.addPack=="function"&&!r?g3.hooks.addPack(t,gu(e)):g3.styles[t]=U(U({},g3.styles[t]||{}),s),t==="fas"&&sa("fa",e)}var qn,Wn,jn,h6=g3.styles,_U=g3.shims,CU=(qn={},r1(qn,R2,Object.values(S0[R2])),r1(qn,U2,Object.values(S0[U2])),qn),Do=null,Kg={},Qg={},Yg={},Xg={},Jg={},VU=(Wn={},r1(Wn,R2,Object.keys(w0[R2])),r1(Wn,U2,Object.keys(w0[U2])),Wn);function HU(t){return~tU.indexOf(t)}function zU(t,e){var n=e.split("-"),c=n[0],r=n.slice(1).join("-");return c===t&&r!==""&&!HU(r)?r:null}var Zg=function(){var e=function(s){return Ts(h6,function(i,a,o){return i[o]=Ts(a,s,{}),i},{})};Kg=e(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var a=s[2].filter(function(o){return typeof o=="number"});a.forEach(function(o){r[o.toString(16)]=i})}return r}),Qg=e(function(r,s,i){if(r[i]=i,s[2]){var a=s[2].filter(function(o){return typeof o=="string"});a.forEach(function(o){r[o]=i})}return r}),Jg=e(function(r,s,i){var a=s[2];return r[i]=i,a.forEach(function(o){r[o]=i}),r});var n="far"in h6||$.autoFetchSvg,c=Ts(_U,function(r,s){var i=s[0],a=s[1],o=s[2];return a==="far"&&!n&&(a="fas"),typeof i=="string"&&(r.names[i]={prefix:a,iconName:o}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:a,iconName:o}),r},{names:{},unicodes:{}});Yg=c.names,Xg=c.unicodes,Do=V8($.styleDefault,{family:$.familyDefault})};sU(function(t){Do=V8(t.styleDefault,{family:$.familyDefault})});Zg();function Oo(t,e){return(Kg[t]||{})[e]}function MU(t,e){return(Qg[t]||{})[e]}function Se(t,e){return(Jg[t]||{})[e]}function e_(t){return Yg[t]||{prefix:null,iconName:null}}function yU(t){var e=Xg[t],n=Oo("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ee(){return Do}var Fo=function(){return{prefix:null,iconName:null,rest:[]}};function V8(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,c=n===void 0?R2:n,r=w0[c][t],s=b0[c][t]||b0[c][r],i=t in g3.styles?t:null;return s||i||null}var _u=(jn={},r1(jn,R2,Object.keys(S0[R2])),r1(jn,U2,Object.keys(S0[U2])),jn);function H8(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=n.skipLookups,r=c===void 0?!1:c,s=(e={},r1(e,R2,"".concat($.cssPrefix,"-").concat(R2)),r1(e,U2,"".concat($.cssPrefix,"-").concat(U2)),e),i=null,a=R2;(t.includes(s[R2])||t.some(function(l){return _u[R2].includes(l)}))&&(a=R2),(t.includes(s[U2])||t.some(function(l){return _u[U2].includes(l)}))&&(a=U2);var o=t.reduce(function(l,f){var u=zU($.cssPrefix,f);if(h6[f]?(f=CU[a].includes(f)?QB[a][f]:f,i=f,l.prefix=f):VU[a].indexOf(f)>-1?(i=f,l.prefix=V8(f,{family:a})):u?l.iconName=u:f!==$.replacementClass&&f!==s[R2]&&f!==s[U2]&&l.rest.push(f),!r&&l.prefix&&l.iconName){var h=i==="fa"?e_(l.iconName):{},d=Se(l.prefix,l.iconName);h.prefix&&(i=null),l.iconName=h.iconName||d||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!h6.far&&h6.fas&&!$.autoFetchSvg&&(l.prefix="fas")}return l},Fo());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&a===U2&&(h6.fass||$.autoFetchSvg)&&(o.prefix="fass",o.iconName=Se(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||i==="fa")&&(o.prefix=ee()||"fas"),o}var LU=function(){function t(){PB(this,t),this.definitions={}}return DB(t,[{key:"add",value:function(){for(var n=this,c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(a){n.definitions[a]=U(U({},n.definitions[a]||{}),i[a]),sa(a,i[a]);var o=S0[R2][a];o&&sa(o,i[a]),Zg()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,c){var r=c.prefix&&c.iconName&&c.icon?{0:c}:c;return Object.keys(r).map(function(s){var i=r[s],a=i.prefix,o=i.iconName,l=i.icon,f=l[2];n[a]||(n[a]={}),f.length>0&&f.forEach(function(u){typeof u=="string"&&(n[a][u]=l)}),n[a][o]=l}),n}}]),t}(),Cu=[],d6={},A6={},wU=Object.keys(A6);function bU(t,e){var n=e.mixoutsTo;return Cu=t,d6={},Object.keys(A6).forEach(function(c){wU.indexOf(c)===-1&&delete A6[c]}),Cu.forEach(function(c){var r=c.mixout?c.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),nr(r[i])==="object"&&Object.keys(r[i]).forEach(function(a){n[i]||(n[i]={}),n[i][a]=r[i][a]})}),c.hooks){var s=c.hooks();Object.keys(s).forEach(function(i){d6[i]||(d6[i]=[]),d6[i].push(s[i])})}c.provides&&c.provides(A6)}),n}function ia(t,e){for(var n=arguments.length,c=new Array(n>2?n-2:0),r=2;r<n;r++)c[r-2]=arguments[r];var s=d6[t]||[];return s.forEach(function(i){e=i.apply(null,[e].concat(c))}),e}function je(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),c=1;c<e;c++)n[c-1]=arguments[c];var r=d6[t]||[];r.forEach(function(s){s.apply(null,n)})}function C4(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return A6[t]?A6[t].apply(null,e):void 0}function aa(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ee();if(e)return e=Se(n,e)||e,vu(t_.definitions,n,e)||vu(g3.styles,n,e)}var t_=new LU,SU=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,je("noAuto")},TU={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return H4?(je("beforeI2svg",e),C4("pseudoElements2svg",e),C4("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,mU(function(){EU({autoReplaceSvgRoot:n}),je("watch",e)})}},AU={icon:function(e){if(e===null)return null;if(nr(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Se(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],c=V8(e[0]);return{prefix:c,iconName:Se(c,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat($.cssPrefix,"-"))>-1||e.match(YB))){var r=H8(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||ee(),iconName:Se(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var s=ee();return{prefix:s,iconName:Se(s,e)||e}}}},Z1={noAuto:SU,config:$,dom:TU,parse:AU,library:t_,findIconDefinition:aa,toHtml:on},EU=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,c=n===void 0?O2:n;(Object.keys(g3.styles).length>0||$.autoFetchSvg)&&H4&&$.autoReplaceSvg&&Z1.dom.i2svg({node:c})};function z8(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(c){return on(c)})}}),Object.defineProperty(t,"node",{get:function(){if(H4){var c=O2.createElement("div");return c.innerHTML=t.html,c.children}}}),t}function NU(t){var e=t.children,n=t.main,c=t.mask,r=t.attributes,s=t.styles,i=t.transform;if(Po(i)&&n.found&&!c.found){var a=n.width,o=n.height,l={x:a/o/2,y:.5};r.style=C8(U(U({},s),{},{"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function xU(t){var e=t.prefix,n=t.iconName,c=t.children,r=t.attributes,s=t.symbol,i=s===!0?"".concat(e,"-").concat($.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},r),{},{id:i}),children:c}]}]}function Bo(t){var e=t.icons,n=e.main,c=e.mask,r=t.prefix,s=t.iconName,i=t.transform,a=t.symbol,o=t.title,l=t.maskId,f=t.titleId,u=t.extra,h=t.watchable,d=h===void 0?!1:h,m=c.found?c:n,g=m.width,C=m.height,_=r==="fak",z=[$.replacementClass,s?"".concat($.cssPrefix,"-").concat(s):""].filter(function(Q){return u.classes.indexOf(Q)===-1}).filter(function(Q){return Q!==""||!!Q}).concat(u.classes).join(" "),M={children:[],attributes:U(U({},u.attributes),{},{"data-prefix":r,"data-icon":s,class:z,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(C)})},V=_&&!~u.classes.indexOf("fa-fw")?{width:"".concat(g/C*16*.0625,"em")}:{};d&&(M.attributes[We]=""),o&&(M.children.push({tag:"title",attributes:{id:M.attributes["aria-labelledby"]||"title-".concat(f||A0())},children:[o]}),delete M.attributes.title);var S=U(U({},M),{},{prefix:r,iconName:s,main:n,mask:c,maskId:l,transform:i,symbol:a,styles:U(U({},V),u.styles)}),B=c.found&&n.found?C4("generateAbstractMask",S)||{children:[],attributes:{}}:C4("generateAbstractIcon",S)||{children:[],attributes:{}},G=B.children,x=B.attributes;return S.children=G,S.attributes=x,a?xU(S):NU(S)}function Vu(t){var e=t.content,n=t.width,c=t.height,r=t.transform,s=t.title,i=t.extra,a=t.watchable,o=a===void 0?!1:a,l=U(U(U({},i.attributes),s?{title:s}:{}),{},{class:i.classes.join(" ")});o&&(l[We]="");var f=U({},i.styles);Po(r)&&(f.transform=fU({transform:r,startCentered:!0,width:n,height:c}),f["-webkit-transform"]=f.transform);var u=C8(f);u.length>0&&(l.style=u);var h=[];return h.push({tag:"span",attributes:l,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function IU(t){var e=t.content,n=t.title,c=t.extra,r=U(U(U({},c.attributes),n?{title:n}:{}),{},{class:c.classes.join(" ")}),s=C8(c.styles);s.length>0&&(r.style=s);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var As=g3.styles;function oa(t){var e=t[0],n=t[1],c=t.slice(4),r=Eo(c,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat($.cssPrefix,"-").concat(be.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(be.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat($.cssPrefix,"-").concat(be.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:i}}var kU={found:!1,width:512,height:512};function RU(t,e){!Bg&&!$.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function la(t,e){var n=e;return e==="fa"&&$.styleDefault!==null&&(e=ee()),new Promise(function(c,r){if(C4("missingIconAbstract"),n==="fa"){var s=e_(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&As[e]&&As[e][t]){var i=As[e][t];return c(oa(i))}RU(t,e),c(U(U({},kU),{},{icon:$.showMissingIcons&&t?C4("missingIconAbstract")||{}:{}}))})}var Hu=function(){},fa=$.measurePerformance&&Pn&&Pn.mark&&Pn.measure?Pn:{mark:Hu,measure:Hu},At='FA "6.5.1"',PU=function(e){return fa.mark("".concat(At," ").concat(e," begins")),function(){return n_(e)}},n_=function(e){fa.mark("".concat(At," ").concat(e," ends")),fa.measure("".concat(At," ").concat(e),"".concat(At," ").concat(e," begins"),"".concat(At," ").concat(e," ends"))},Uo={begin:PU,end:n_},ic=function(){};function zu(t){var e=t.getAttribute?t.getAttribute(We):null;return typeof e=="string"}function DU(t){var e=t.getAttribute?t.getAttribute(xo):null,n=t.getAttribute?t.getAttribute(Io):null;return e&&n}function OU(t){return t&&t.classList&&t.classList.contains&&t.classList.contains($.replacementClass)}function FU(){if($.autoReplaceSvg===!0)return ac.replace;var t=ac[$.autoReplaceSvg];return t||ac.replace}function BU(t){return O2.createElementNS("http://www.w3.org/2000/svg",t)}function UU(t){return O2.createElement(t)}function c_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,c=n===void 0?t.tag==="svg"?BU:UU:n;if(typeof t=="string")return O2.createTextNode(t);var r=c(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var s=t.children||[];return s.forEach(function(i){r.appendChild(c_(i,{ceFn:c}))}),r}function qU(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ac={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(c_(r),n)}),n.getAttribute(We)===null&&$.keepOriginalSource){var c=O2.createComment(qU(n));n.parentNode.replaceChild(c,n)}else n.remove()},nest:function(e){var n=e[0],c=e[1];if(~Ro(n).indexOf($.replacementClass))return ac.replace(e);var r=new RegExp("".concat($.cssPrefix,"-.*"));if(delete c[0].attributes.id,c[0].attributes.class){var s=c[0].attributes.class.split(" ").reduce(function(a,o){return o===$.replacementClass||o.match(r)?a.toSvg.push(o):a.toNode.push(o),a},{toNode:[],toSvg:[]});c[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var i=c.map(function(a){return on(a)}).join(`
`);n.setAttribute(We,""),n.innerHTML=i}};function Mu(t){t()}function r_(t,e){var n=typeof e=="function"?e:ic;if(t.length===0)n();else{var c=Mu;$.mutateApproach===GB&&(c=Z4.requestAnimationFrame||Mu),c(function(){var r=FU(),s=Uo.begin("mutate");t.map(r),s(),n()})}}var qo=!1;function s_(){qo=!0}function ua(){qo=!1}var rr=null;function yu(t){if(du&&$.observeMutations){var e=t.treeCallback,n=e===void 0?ic:e,c=t.nodeCallback,r=c===void 0?ic:c,s=t.pseudoElementsCallback,i=s===void 0?ic:s,a=t.observeMutationsRoot,o=a===void 0?O2:a;rr=new du(function(l){if(!qo){var f=ee();ft(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!zu(u.addedNodes[0])&&($.searchPseudoElements&&i(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&$.searchPseudoElements&&i(u.target.parentNode),u.type==="attributes"&&zu(u.target)&&~eU.indexOf(u.attributeName))if(u.attributeName==="class"&&DU(u.target)){var h=H8(Ro(u.target)),d=h.prefix,m=h.iconName;u.target.setAttribute(xo,d||f),m&&u.target.setAttribute(Io,m)}else OU(u.target)&&r(u.target)})}}),H4&&rr.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function WU(){rr&&rr.disconnect()}function jU(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(c,r){var s=r.split(":"),i=s[0],a=s.slice(1);return i&&a.length>0&&(c[i]=a.join(":").trim()),c},{})),n}function $U(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),c=t.innerText!==void 0?t.innerText.trim():"",r=H8(Ro(t));return r.prefix||(r.prefix=ee()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&c.length>0&&(r.iconName=MU(r.prefix,t.innerText)||Oo(r.prefix,ra(t.innerText))),!r.iconName&&$.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function GU(t){var e=ft(t.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),n=t.getAttribute("title"),c=t.getAttribute("data-fa-title-id");return $.autoA11y&&(n?e["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(c||A0()):(e["aria-hidden"]="true",e.focusable="false")),e}function KU(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R3,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Lu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=$U(t),c=n.iconName,r=n.prefix,s=n.rest,i=GU(t),a=ia("parseNodeAttributes",{},t),o=e.styleParser?jU(t):[];return U({iconName:c,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:R3,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:i}},a)}var QU=g3.styles;function i_(t){var e=$.autoReplaceSvg==="nest"?Lu(t,{styleParser:!1}):Lu(t);return~e.extra.classes.indexOf(Ug)?C4("generateLayersText",t,e):C4("generateSvgReplacementMutation",t,e)}var te=new Set;ko.map(function(t){te.add("fa-".concat(t))});Object.keys(w0[R2]).map(te.add.bind(te));Object.keys(w0[U2]).map(te.add.bind(te));te=sn(te);function wu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!H4)return Promise.resolve();var n=O2.documentElement.classList,c=function(u){return n.add("".concat(mu,"-").concat(u))},r=function(u){return n.remove("".concat(mu,"-").concat(u))},s=$.autoFetchSvg?te:ko.map(function(f){return"fa-".concat(f)}).concat(Object.keys(QU));s.includes("fa")||s.push("fa");var i=[".".concat(Ug,":not([").concat(We,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(We,"])")})).join(", ");if(i.length===0)return Promise.resolve();var a=[];try{a=ft(t.querySelectorAll(i))}catch{}if(a.length>0)c("pending"),r("complete");else return Promise.resolve();var o=Uo.begin("onTree"),l=a.reduce(function(f,u){try{var h=i_(u);h&&f.push(h)}catch(d){Bg||d.name==="MissingIcon"&&console.error(d)}return f},[]);return new Promise(function(f,u){Promise.all(l).then(function(h){r_(h,function(){c("active"),c("complete"),r("pending"),typeof e=="function"&&e(),o(),f()})}).catch(function(h){o(),u(h)})})}function YU(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;i_(t).then(function(n){n&&r_([n],e)})}function XU(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=(e||{}).icon?e:aa(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:aa(r||{})),t(c,U(U({},n),{},{mask:r}))}}var JU=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},c=n.transform,r=c===void 0?R3:c,s=n.symbol,i=s===void 0?!1:s,a=n.mask,o=a===void 0?null:a,l=n.maskId,f=l===void 0?null:l,u=n.title,h=u===void 0?null:u,d=n.titleId,m=d===void 0?null:d,g=n.classes,C=g===void 0?[]:g,_=n.attributes,z=_===void 0?{}:_,M=n.styles,V=M===void 0?{}:M;if(e){var S=e.prefix,B=e.iconName,G=e.icon;return z8(U({type:"icon"},e),function(){return je("beforeDOMElementCreation",{iconDefinition:e,params:n}),$.autoA11y&&(h?z["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(m||A0()):(z["aria-hidden"]="true",z.focusable="false")),Bo({icons:{main:oa(G),mask:o?oa(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:B,transform:U(U({},R3),r),symbol:i,title:h,maskId:f,titleId:m,extra:{attributes:z,styles:V,classes:C}})})}},ZU={mixout:function(){return{icon:XU(JU)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=wu,n.nodeCallback=YU,n}}},provides:function(e){e.i2svg=function(n){var c=n.node,r=c===void 0?O2:c,s=n.callback,i=s===void 0?function(){}:s;return wu(r,i)},e.generateSvgReplacementMutation=function(n,c){var r=c.iconName,s=c.title,i=c.titleId,a=c.prefix,o=c.transform,l=c.symbol,f=c.mask,u=c.maskId,h=c.extra;return new Promise(function(d,m){Promise.all([la(r,a),f.iconName?la(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(g){var C=Eo(g,2),_=C[0],z=C[1];d([n,Bo({icons:{main:_,mask:z},prefix:a,iconName:r,transform:o,symbol:l,maskId:u,title:s,titleId:i,extra:h,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var c=n.children,r=n.attributes,s=n.main,i=n.transform,a=n.styles,o=C8(a);o.length>0&&(r.style=o);var l;return Po(i)&&(l=C4("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),c.push(l||s.icon),{children:c,attributes:r}}}},eq={mixout:function(){return{layer:function(n){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=c.classes,s=r===void 0?[]:r;return z8({type:"layer"},function(){je("beforeDOMElementCreation",{assembler:n,params:c});var i=[];return n(function(a){Array.isArray(a)?a.map(function(o){i=i.concat(o.abstract)}):i=i.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat($.cssPrefix,"-layers")].concat(sn(s)).join(" ")},children:i}]})}}}},tq={mixout:function(){return{counter:function(n){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=c.title,s=r===void 0?null:r,i=c.classes,a=i===void 0?[]:i,o=c.attributes,l=o===void 0?{}:o,f=c.styles,u=f===void 0?{}:f;return z8({type:"counter",content:n},function(){return je("beforeDOMElementCreation",{content:n,params:c}),IU({content:n.toString(),title:s,extra:{attributes:l,styles:u,classes:["".concat($.cssPrefix,"-layers-counter")].concat(sn(a))}})})}}}},nq={mixout:function(){return{text:function(n){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=c.transform,s=r===void 0?R3:r,i=c.title,a=i===void 0?null:i,o=c.classes,l=o===void 0?[]:o,f=c.attributes,u=f===void 0?{}:f,h=c.styles,d=h===void 0?{}:h;return z8({type:"text",content:n},function(){return je("beforeDOMElementCreation",{content:n,params:c}),Vu({content:n,transform:U(U({},R3),s),title:a,extra:{attributes:u,styles:d,classes:["".concat($.cssPrefix,"-layers-text")].concat(sn(l))}})})}}},provides:function(e){e.generateLayersText=function(n,c){var r=c.title,s=c.transform,i=c.extra,a=null,o=null;if(Dg){var l=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();a=f.width/l,o=f.height/l}return $.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Vu({content:n.innerHTML,width:a,height:o,transform:s,title:r,extra:i,watchable:!0})])}}},cq=new RegExp('"',"ug"),bu=[1105920,1112319];function rq(t){var e=t.replace(cq,""),n=gU(e,0),c=n>=bu[0]&&n<=bu[1],r=e.length===2?e[0]===e[1]:!1;return{value:ra(r?e[0]:e),isSecondary:c||r}}function Su(t,e){var n="".concat($B).concat(e.replace(":","-"));return new Promise(function(c,r){if(t.getAttribute(n)!==null)return c();var s=ft(t.children),i=s.filter(function(G){return G.getAttribute(ca)===e})[0],a=Z4.getComputedStyle(t,e),o=a.getPropertyValue("font-family").match(XB),l=a.getPropertyValue("font-weight"),f=a.getPropertyValue("content");if(i&&!o)return t.removeChild(i),c();if(o&&f!=="none"&&f!==""){var u=a.getPropertyValue("content"),h=~["Sharp"].indexOf(o[2])?U2:R2,d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?b0[h][o[2].toLowerCase()]:JB[h][l],m=rq(u),g=m.value,C=m.isSecondary,_=o[0].startsWith("FontAwesome"),z=Oo(d,g),M=z;if(_){var V=yU(g);V.iconName&&V.prefix&&(z=V.iconName,d=V.prefix)}if(z&&!C&&(!i||i.getAttribute(xo)!==d||i.getAttribute(Io)!==M)){t.setAttribute(n,M),i&&t.removeChild(i);var S=KU(),B=S.extra;B.attributes[ca]=e,la(z,d).then(function(G){var x=Bo(U(U({},S),{},{icons:{main:G,mask:Fo()},prefix:d,iconName:M,extra:B,watchable:!0})),Q=O2.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Q,t.firstChild):t.appendChild(Q),Q.outerHTML=x.map(function(t2){return on(t2)}).join(`
`),t.removeAttribute(n),c()}).catch(r)}else c()}else c()})}function sq(t){return Promise.all([Su(t,"::before"),Su(t,"::after")])}function iq(t){return t.parentNode!==document.head&&!~KB.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ca)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Tu(t){if(H4)return new Promise(function(e,n){var c=ft(t.querySelectorAll("*")).filter(iq).map(sq),r=Uo.begin("searchPseudoElements");s_(),Promise.all(c).then(function(){r(),ua(),e()}).catch(function(){r(),ua(),n()})})}var aq={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Tu,n}}},provides:function(e){e.pseudoElements2svg=function(n){var c=n.node,r=c===void 0?O2:c;$.searchPseudoElements&&Tu(r)}}},Au=!1,oq={mixout:function(){return{dom:{unwatch:function(){s_(),Au=!0}}}},hooks:function(){return{bootstrap:function(){yu(ia("mutationObserverCallbacks",{}))},noAuto:function(){WU()},watch:function(n){var c=n.observeMutationsRoot;Au?ua():yu(ia("mutationObserverCallbacks",{observeMutationsRoot:c}))}}}},Eu=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(c,r){var s=r.toLowerCase().split("-"),i=s[0],a=s.slice(1).join("-");if(i&&a==="h")return c.flipX=!0,c;if(i&&a==="v")return c.flipY=!0,c;if(a=parseFloat(a),isNaN(a))return c;switch(i){case"grow":c.size=c.size+a;break;case"shrink":c.size=c.size-a;break;case"left":c.x=c.x-a;break;case"right":c.x=c.x+a;break;case"up":c.y=c.y-a;break;case"down":c.y=c.y+a;break;case"rotate":c.rotate=c.rotate+a;break}return c},n)},lq={mixout:function(){return{parse:{transform:function(n){return Eu(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,c){var r=c.getAttribute("data-fa-transform");return r&&(n.transform=Eu(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var c=n.main,r=n.transform,s=n.containerWidth,i=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(o," ").concat(l," ").concat(f)},h={transform:"translate(".concat(i/2*-1," -256)")},d={outer:a,inner:u,path:h};return{tag:"g",attributes:U({},d.outer),children:[{tag:"g",attributes:U({},d.inner),children:[{tag:c.icon.tag,children:c.icon.children,attributes:U(U({},c.icon.attributes),d.path)}]}]}}}},Es={x:0,y:0,width:"100%",height:"100%"};function Nu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function fq(t){return t.tag==="g"?t.children:[t]}var uq={hooks:function(){return{parseNodeAttributes:function(n,c){var r=c.getAttribute("data-fa-mask"),s=r?H8(r.split(" ").map(function(i){return i.trim()})):Fo();return s.prefix||(s.prefix=ee()),n.mask=s,n.maskId=c.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var c=n.children,r=n.attributes,s=n.main,i=n.mask,a=n.maskId,o=n.transform,l=s.width,f=s.icon,u=i.width,h=i.icon,d=lU({transform:o,containerWidth:u,iconWidth:l}),m={tag:"rect",attributes:U(U({},Es),{},{fill:"white"})},g=f.children?{children:f.children.map(Nu)}:{},C={tag:"g",attributes:U({},d.inner),children:[Nu(U({tag:f.tag,attributes:U(U({},f.attributes),d.path)},g))]},_={tag:"g",attributes:U({},d.outer),children:[C]},z="mask-".concat(a||A0()),M="clip-".concat(a||A0()),V={tag:"mask",attributes:U(U({},Es),{},{id:z,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,_]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:M},children:fq(h)},V]};return c.push(S,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(M,")"),mask:"url(#".concat(z,")")},Es)}),{children:c,attributes:r}}}},hq={provides:function(e){var n=!1;Z4.matchMedia&&(n=Z4.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var c=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};c.push({tag:"path",attributes:U(U({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=U(U({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:U(U({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:U(U({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},i),{},{values:"1;0;1;1;0;1;"})}),c.push(a),c.push({tag:"path",attributes:U(U({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:U(U({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||c.push({tag:"path",attributes:U(U({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:c}}}},dq={hooks:function(){return{parseNodeAttributes:function(n,c){var r=c.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return n.symbol=s,n}}}},mq=[hU,ZU,eq,tq,nq,aq,oq,lq,uq,hq,dq];bU(mq,{mixoutsTo:Z1});Z1.noAuto;Z1.config;var ln=Z1.library;Z1.dom;var ha=Z1.parse;Z1.findIconDefinition;Z1.toHtml;var pq=Z1.icon;Z1.layer;Z1.text;Z1.counter;function xu(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);e&&(c=c.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,c)}return n}function s4(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xu(Object(n),!0).forEach(function(c){D1(t,c,n[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xu(Object(n)).forEach(function(c){Object.defineProperty(t,c,Object.getOwnPropertyDescriptor(n,c))})}return t}function sr(t){"@babel/helpers - typeof";return sr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sr(t)}function D1(t,e,n){return e=Cq(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vq(t,e){if(t==null)return{};var n={},c=Object.keys(t),r,s;for(s=0;s<c.length;s++)r=c[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function gq(t,e){if(t==null)return{};var n=vq(t,e),c,r;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)c=s[r],!(e.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(t,c)&&(n[c]=t[c])}return n}function _q(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var c=n.call(t,e||"default");if(typeof c!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Cq(t){var e=_q(t,"string");return typeof e=="symbol"?e:String(e)}var Vq=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a_={exports:{}};(function(t){(function(e){var n=function(_,z,M){if(!l(z)||u(z)||h(z)||d(z)||o(z))return z;var V,S=0,B=0;if(f(z))for(V=[],B=z.length;S<B;S++)V.push(n(_,z[S],M));else{V={};for(var G in z)Object.prototype.hasOwnProperty.call(z,G)&&(V[_(G,M)]=n(_,z[G],M))}return V},c=function(_,z){z=z||{};var M=z.separator||"_",V=z.split||/(?=[A-Z])/;return _.split(V).join(M)},r=function(_){return m(_)?_:(_=_.replace(/[\-_\s]+(.)?/g,function(z,M){return M?M.toUpperCase():""}),_.substr(0,1).toLowerCase()+_.substr(1))},s=function(_){var z=r(_);return z.substr(0,1).toUpperCase()+z.substr(1)},i=function(_,z){return c(_,z).toLowerCase()},a=Object.prototype.toString,o=function(_){return typeof _=="function"},l=function(_){return _===Object(_)},f=function(_){return a.call(_)=="[object Array]"},u=function(_){return a.call(_)=="[object Date]"},h=function(_){return a.call(_)=="[object RegExp]"},d=function(_){return a.call(_)=="[object Boolean]"},m=function(_){return _=_-0,_===_},g=function(_,z){var M=z&&"process"in z?z.process:z;return typeof M!="function"?_:function(V,S){return M(V,_,S)}},C={camelize:r,decamelize:i,pascalize:s,depascalize:i,camelizeKeys:function(_,z){return n(g(r,z),_)},decamelizeKeys:function(_,z){return n(g(i,z),_,z)},pascalizeKeys:function(_,z){return n(g(s,z),_)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=C:e.humps=C})(Vq)})(a_);var Hq=a_.exports,zq=["class","style"];function Mq(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var c=n.indexOf(":"),r=Hq.camelize(n.slice(0,c)),s=n.slice(c+1).trim();return e[r]=s,e},{})}function yq(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function o_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var c=(t.children||[]).map(function(o){return o_(o)}),r=Object.keys(t.attributes||{}).reduce(function(o,l){var f=t.attributes[l];switch(l){case"class":o.class=yq(f);break;case"style":o.style=Mq(f);break;default:o.attrs[l]=f}return o},{attrs:{},class:{},style:{}});n.class;var s=n.style,i=s===void 0?{}:s,a=gq(n,zq);return Hr(t.tag,s4(s4(s4({},e),{},{class:r.class,style:s4(s4({},r.style),i)},r.attrs),a),c)}var l_=!1;try{l_=!0}catch{}function Lq(){if(!l_&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ns(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?D1({},t,e):{}}function wq(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},D1(e,"fa-".concat(t.size),t.size!==null),D1(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),D1(e,"fa-pull-".concat(t.pull),t.pull!==null),D1(e,"fa-swap-opacity",t.swapOpacity),D1(e,"fa-bounce",t.bounce),D1(e,"fa-shake",t.shake),D1(e,"fa-beat",t.beat),D1(e,"fa-fade",t.fade),D1(e,"fa-beat-fade",t.beatFade),D1(e,"fa-flash",t.flash),D1(e,"fa-spin-pulse",t.spinPulse),D1(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(c){return n[c]?c:null}).filter(function(c){return c})}function Iu(t){if(t&&sr(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ha.icon)return ha.icon(t);if(t===null)return null;if(sr(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var oc=Q3({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var c=n.attrs,r=Q2(function(){return Iu(e.icon)}),s=Q2(function(){return Ns("classes",wq(e))}),i=Q2(function(){return Ns("transform",typeof e.transform=="string"?ha.transform(e.transform):e.transform)}),a=Q2(function(){return Ns("mask",Iu(e.mask))}),o=Q2(function(){return pq(r.value,s4(s4(s4(s4({},s.value),i.value),a.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});D3(o,function(f){if(!f)return Lq("Could not find one or more icon(s)",r.value,a.value)},{immediate:!0});var l=Q2(function(){return o.value?o_(o.value.abstract[0],{},c):null});return function(){return l.value}}});const ae=t=>(ba("data-v-5276ff03"),t=t(),Sa(),t),bq={class:"edit-todo"},Sq=ae(()=>o2("h1",null,"Edit Todo",-1)),Tq=ae(()=>o2("label",{for:"title"},"Title",-1)),Aq=ae(()=>o2("label",{for:"description"},"Description",-1)),Eq=["onKeydown"],Nq=ae(()=>o2("label",{for:"dueDate"},"Due Date",-1)),xq=ae(()=>o2("label",{for:"priority"},"Priority",-1)),Iq=ae(()=>o2("option",{value:"low"},"Low",-1)),kq=ae(()=>o2("option",{value:"medium"},"Medium",-1)),Rq=ae(()=>o2("option",{value:"high"},"High",-1)),Pq=[Iq,kq,Rq],Dq={class:"submit-sections"},Oq=Q3({__name:"TodoEdit",props:{todo:{type:Object,required:!0}},emits:["closeEdit"],setup(t,{emit:e}){let n=e;const c=q1("fire-storage"),r=t,s=Object.assign({},r.todo),{textarea:i,input:a}=RB({input:s.description});function o(h){const d=h.target,m="    ",g=d.selectionStart,C=d.selectionEnd,_=d.value;a.value=_.substring(0,g)+m+_.substring(C),h.preventDefault(),dr(()=>{d.selectionEnd=d.selectionStart=g+m.length})}const l=()=>{n("closeEdit",!1)};function f(){c.editTodo(r.todo.id,s)}function u(){c.deleteTodoById(r.todo.id)}return Na(()=>{r.todo.description=a.value}),(h,d)=>{const m=Ow("font-awesome-icon");return t1(),_3("div",bq,[Sq,o2("form",{onSubmit:Ys(l,["prevent"])},[Tq,zt(o2("input",{id:"title","onUpdate:modelValue":d[0]||(d[0]=g=>T2(s).title=g),type:"text",required:""},null,512),[[Yn,T2(s).title]]),Aq,zt(o2("textarea",{id:"description","onUpdate:modelValue":d[1]||(d[1]=g=>A1(a)?a.value=g:null),type:"text",ref_key:"textarea",ref:i,onKeydown:Ph(Ys(o,["prevent"]),["tab"])},null,40,Eq),[[Yn,T2(a)]]),Nq,zt(o2("input",{id:"dueDate","onUpdate:modelValue":d[2]||(d[2]=g=>T2(s).dueDate=g),type:"date"},null,512),[[Yn,T2(s).dueDate]]),xq,zt(o2("select",{id:"priority","onUpdate:modelValue":d[3]||(d[3]=g=>T2(s).priority=g)},Pq,512),[[pS,T2(s).priority]]),o2("div",Dq,[o2("button",{type:"submit",onClick:f,class:"edit"},"Save"),q2(m,{icon:["fas","trash"],class:"delete",onClick:u})])],32)])}}}),Fq=D0(Oq,[["__scopeId","data-v-5276ff03"]]),Bq={class:"todo-item"},Uq={class:"favourite-button"},qq=Q3({__name:"TodoItem",props:{todo:{type:Object,required:!0}},emits:["toggleFavourite","toggleDone"],setup(t,{emit:e}){let n=R1(!1),c=R1(null);const r=q1("fire-storage");let s=e;NB(c,u=>{setTimeout(()=>{n.value=!1},0),console.log(u)});function i(u){n.value=u}const a=t;function o(){if(a.todo.completed)s("toggleDone",a.todo.id,!1);else{var u=new Audio("sounds/completion2.mp3");u.play(),s("toggleDone",a.todo.id,!0)}}function l(){a.todo.favourite?r.toggleFavourite(a.todo.id,!1):r.toggleFavourite(a.todo.id,!0)}function f(){n.value=!0}return(u,h)=>(t1(),_3(I1,null,[o2("div",Bq,[o2("div",{class:"completed-container",onClick:Ys(o,["stop"])},[t.todo.completed?(t1(),Ae(T2(oc),{key:0,icon:["fas","check-square"],class:"fcomplete"})):(t1(),Ae(T2(oc),{key:1,icon:["far","square"],class:"fcomplete"}))]),o2("div",{class:Gt(["todo-info",{todoComplete:t.todo.completed}]),onClick:f},[o2("p",{style:fr({color:t.todo.completed?"#605C5E":""})},cw(t.todo.title),5)],2),o2("button",Uq,[o2("span",{onClick:l},[q2(T2(oc),{icon:["fas","star"],id:"favourite",class:Gt({gold:t.todo.favourite})},null,8,["class"])])])]),q2(Pa,null,{default:Xt(()=>[T2(n)?(t1(),Ae(Fq,{key:0,todo:t.todo,ref_key:"modalRef",ref:c,onCloseEdit:i},null,8,["todo"])):Eb("",!0)]),_:1})],64))}}),ku=D0(qq,[["__scopeId","data-v-0bd8f810"]]),Wq=t=>(ba("data-v-02e25c2b"),t=t(),Sa(),t),jq={class:"todo-main"},$q={name:"list",class:"pending-container"},Gq={class:"todos-pending"},Kq=Wq(()=>o2("div",{class:"seperator"},"COMPLETED TODOS",-1)),Qq={class:"done-container"},Yq=Q3({__name:"TodoView",async setup(t){let e,n,c=R1("TESGING");var r=Y6({todos:[],todosPastDue:[],todosCompletedPast:[],last_updated:new Date});const s=m3().currentUser,i=new Ag(s==null?void 0:s.email);i.init(),C6("fire-storage",i);let a,o;const l=Uc();let f,u;const h=Q2(()=>{const M=c4(w6(l,"Users"),F1("email","==",s.email));return b6(M).then(S=>S.docs[0].ref.path)});function d(){if(s&&s.email!=""){var M=w6(l,"Users");u=c4(M,F1("email","==",s.email))}}d();const m=([e,n]=ub(()=>h.value),e=await e,n(),e);f=w6(l,m,"todos"),u=c4(f,F1("completed","==",!1),F1("dueDate",">=",new Date().toISOString().split("T")[0]),f3("dueDate","asc"),f3("favourite","desc"),f3("date","asc")),o=ea(u),u=c4(f,F1("completed","==",!0),F1("dueDate",">=",new Date().toISOString().split("T")[0]),f3("dueDate","asc"),f3("date","asc")),a=ea(u);function g(){u=c4(f,F1("completed","==",!1),F1("dueDate",">=",new Date().toISOString().split("T")[0]),f3("dueDate","asc"),f3("favourite","desc"),f3("date","asc")),i.deleteTodos(u),u=c4(f,F1("completed","==",!0),F1("dueDate",">=",new Date().toISOString().split("T")[0]),f3("dueDate","asc"),f3("date","asc")),i.deleteTodos(u)}function C(M){i.addTodo2(M)}function _(M,V){i.toggleCompleted(M,V)}function z(M,V){i.toggleFavourite(M,V)}return(M,V)=>(t1(),_3("main",jq,[o2("button",{onClick:g,class:"clear-todo"},"Clear Todos"),o2("div",$q,[q2(bB,{passed:T2(c),list:T2(r),onAddTodo:C},null,8,["passed","list"]),o2("div",Gq,[(t1(!0),_3(I1,null,Z7(T2(o),S=>(t1(),Ae(ku,{todo:S,key:S.id,onToggleDone:_,onToggleFavourite:z},null,8,["todo"]))),128)),Kq,o2("div",Qq,[(t1(!0),_3(I1,null,Z7(T2(a),S=>(t1(),Ae(ku,{todo:S,onToggleDone:_,onToggleFavourite:z},null,8,["todo"]))),256))])])])]))}}),Xq=D0(Yq,[["__scopeId","data-v-02e25c2b"]]);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jq{constructor(e,n){this._delegate=e,this.firebase=n,Mc(e,new i3("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),fd(this._delegate)))}_getService(e,n=G4){var c;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((c=r.getComponent())===null||c===void 0?void 0:c.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:n})}_removeServiceInstance(e,n=G4){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Mc(this._delegate,e)}_addOrOverwriteComponent(e){ld(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const Zq={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ru=new ne("app-compat","Firebase",Zq);/**
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
 */function eW(t){const e={},n={__esModule:!0,initializeApp:s,app:r,registerVersion:w1,setLogLevel:hd,onLog:ud,apps:null,SDK_VERSION:Y3,INTERNAL:{registerComponent:a,removeApp:c,useAsService:o,modularAPIs:sE}};n.default=n,Object.defineProperty(n,"apps",{get:i});function c(l){delete e[l]}function r(l){if(l=l||G4,!H3(e,l))throw Ru.create("no-app",{appName:l});return e[l]}r.App=t;function s(l,f={}){const u=wr(l,f);if(H3(e,u.name))return e[u.name];const h=new t(u,n);return e[u.name]=h,h}function i(){return Object.keys(e).map(l=>e[l])}function a(l){const f=l.name,u=f.replace("-compat","");if(a3(l)&&l.type==="PUBLIC"){const h=(d=r())=>{if(typeof d[u]!="function")throw Ru.create("invalid-app-argument",{appName:f});return d[u]()};l.serviceProps!==void 0&&n0(h,l.serviceProps),n[u]=h,t.prototype[u]=function(...d){return this._getService.bind(this,f).apply(this,l.multipleInstances?d:[])}}return l.type==="PUBLIC"?n[u]:null}function o(l,f){return f==="serverAuth"?null:f}return n}/**
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
 */function f_(){const t=eW(Jq);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:f_,extendNamespace:e,createSubscribe:sd,ErrorFactory:ne,deepExtend:n0});function e(n){n0(t,n)}return t}const tW=f_();/**
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
 */const Pu=new Z6("@firebase/app-compat"),nW="@firebase/app-compat",cW="0.2.27";/**
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
 */function rW(t){w1(nW,cW,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(RT()&&self.firebase!==void 0){Pu.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Pu.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const sW=tW;rW();var iW="firebase",aW="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AboutView-hNyYN8il.js","assets/AboutView-6g9rTJRv.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}