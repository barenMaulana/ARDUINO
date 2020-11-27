(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n=this||self;function p(a,b){function c(){}c.prototype=b.prototype;a.B=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.v=function(d,f,g){for(var e=Array(arguments.length-2),h=2;h<arguments.length;h++)e[h-2]=arguments[h];return b.prototype[f].apply(d,e)}};var u=class{constructor(a,b){this.a=b===r?a:""}};u.prototype.c=!0;u.prototype.b=function(){return this.a.toString()};var aa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,r={};function v(a,b){b instanceof u||b instanceof u||(b="object"==typeof b&&b.c?b.b():String(b),aa.test(b)||(b="about:invalid#zClosurez"),b=new u(b,r));a.href=b instanceof u&&b.constructor===u?b.a:"type_error:SafeUrl"};function w(a){w[" "](a);return a}w[" "]=function(){};var ba={},x=null;function A(){}var ea="function"==typeof Uint8Array;function B(a,b,c){a.b=null;b||(b=[]);a.A=void 0;a.g=-1;a.a=b;a:{if(b=a.a.length){--b;var d=a.a[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||ea&&d instanceof Uint8Array)){a.i=b-a.g;a.c=d;break a}}a.i=Number.MAX_VALUE}a.h={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.i)d+=a.g,a.a[d]=a.a[d]||C;else{var f=a.i+a.g;a.a[f]||(a.c=a.a[f]={});a.c[d]=a.c[d]||C}}var C=[];
function D(a,b){if(b<a.i){b+=a.g;var c=a.a[b];return c!==C?c:a.a[b]=[]}if(a.c)return c=a.c[b],c===C?a.c[b]=[]:c}function E(a,b,c){a=D(a,b);return null==a?c:a}function F(a,b){a=D(a,b);a=null==a?a:!!a;return null==a?!1:a}function fa(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=D(a,c);d&&(a.b[c]=new b(d))}return a.b[c]}function G(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=D(a,c);for(var f=[],g=0;g<d.length;g++)f[g]=new b(d[g]);a.b[c]=f}b=a.b[c];b==C&&(b=a.b[c]=[]);return b}
A.prototype.u=ea?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var b;void 0===b&&(b=0);if(!x){x={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=c.concat(d[f].split(""));ba[f]=g;for(var e=0;e<g.length;e++){var h=g[e];void 0===x[h]&&(x[h]=e)}}}b=ba[b];c=[];for(d=0;d<this.length;d+=3){var k=this[d],l=(f=d+1<this.length)?this[d+1]:0;h=(g=d+2<this.length)?this[d+2]:0;e=k>>2;
k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;g||(h=64,f||(l=64));c.push(b[e],b[k],b[l]||"",b[h]||"")}return c.join("")};try{return JSON.stringify(this.a&&this.a,ha)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.a&&this.a,ha)};function ha(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)}A.prototype.toString=function(){return this.a.toString()};function ia(a){B(this,a,null)}p(ia,A);class ka{constructor(a,b){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta={}}};var la=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ma(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)ma(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function na(a,b){var c=[];for(d in b)ma(d,b[d],c);b=c.join("&");if(b){c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var f=""}else f=a.substring(d+1,c);a=[a.substr(0,d),f,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;a=a[0]+(a[1]?"?"+a[1]:"")+a[2]}return a};function H(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{w(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function oa(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};function pa(a,b){a.google_image_requests||(a.google_image_requests=[]);const c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)}var qa=a=>{var b;if(b=n.navigator)b=n.navigator.userAgent,b=/Chrome/.test(b)&&!/Edge/.test(b)?!0:!1;b&&n.navigator.sendBeacon?n.navigator.sendBeacon(a):pa(n,a)};var ra=document,sa=window;var ta={};var ua=class{},I=class extends ua{constructor(a){super();if(ta!==ta)throw Error("Bad secret");this.a=a}toString(){return this.a}};function L(a){if(!(a instanceof I))throw Error("wrong type");return a.a};new I("about:blank");var M=new I("about:invalid#zTSz");const va="DATA HTTP HTTPS MAILTO FTP RELATIVE".split(" ");function wa(a,b=va){var c;var d=a.substring(0,14).indexOf(":");d=null!==(c=xa[0>d?"":a.substr(0,d).toLowerCase()])&&void 0!==c?c:ya;if(b.includes(d.scheme)&&d.f(a))return new I(a)}function za(a,b=va){return wa(a,b)||M}
const ya={scheme:"RELATIVE",f:a=>/^[^:/?#]*(?:[/?#]|$)/i.test(a)},xa={tel:{scheme:"TEL",f:N("tel:")},callto:{scheme:"CALLTO",f:a=>/^callto:\+?\d*$/i.test(a)},ssh:{scheme:"SSH",f:N("ssh://")},rtsp:{scheme:"RTSP",f:N("rtsp://")},data:{scheme:"DATA",f:a=>{{const b=a.match(/^data:(.*);base64,[a-z0-9+\/]+=*$/i);if(a=2===(null===b||void 0===b?void 0:b.length))a=b[1].match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i),a=2===(null===a||void 0===a?void 0:a.length)&&(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)$/i.test(a[1])||
/^video\/(?:mpeg|mp4|ogg|webm|x-matroska)$/i.test(a[1])||/^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(a[1]))}return a}},http:{scheme:"HTTP",f:N("http:")},https:{scheme:"HTTPS",f:N("https:")},ftp:{scheme:"FTP",f:N("ftp:")},mailto:{scheme:"MAILTO",f:N("mailto:")},intent:{scheme:"INTENT",f:N("intent:")},market:{scheme:"MARKET",f:N("market:")},itms:{scheme:"ITMS",f:N("itms:")},"itms-appss":{scheme:"ITMS_APPSS",f:N("itms-appss:")},"itms-services":{scheme:"ITMS_SERVICES",
f:N("itms-services:")}};function N(a){return b=>b.substr(0,a.length).toLowerCase()===a};const Aa="HTTP HTTPS MAILTO FTP RELATIVE MARKET ITMS INTENT ITMS_APPSS".split(" ");function O(a,b){if(a instanceof u)return a;const c=za(a,Aa);c===M&&b(a);return new u(L(c),r)}var Ba=()=>{var a=`${"http:"===sa.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;return b=>{b=na(a,{id:"unsafeurl",ctx:599,url:b});navigator.sendBeacon&&navigator.sendBeacon(b,"")}};var Ca=!!window.google_async_iframe_id;let P=Ca&&window.parent||window;const Da=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var Ea=class{constructor(a,b){this.a=a;this.b=b}},Fa=class{constructor(a,b){this.url=a;this.s=!!b;this.depth=null}};function Q(a,b){const c={};c[a]=b;return[c]}function Ga(a,b,c,d,f){const g=[];oa(a,function(e,h){(e=Ha(e,b,c,d,f))&&g.push(h+"="+e)});return g.join(b)}
function Ha(a,b,c,d,f){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const g=[];for(let e=0;e<a.length;e++)g.push(Ha(a[e],b,c,d+1,f));return g.join(c[d])}}else if("object"==typeof a)return f=f||0,2>f?encodeURIComponent(Ga(a,b,c,d,f+1)):"...";return encodeURIComponent(String(a))}function Ia(a){let b=1;for(const c in a.b)b=c.length>b?c.length:b;return 3997-b-a.c.length-1}
function Ja(a){let b="https://pagead2.googlesyndication.com/pagead/gen_204unsafeurl&",c=Ia(a)-25;if(0>c)return"";a.a.sort(function(g,e){return g-e});let d=null,f="";for(let g=0;g<a.a.length;g++){const e=a.a[g],h=a.b[e];for(let k=0;k<h.length;k++){if(!c){d=null==d?e:d;break}let l=Ga(h[k],a.c,",$");if(l){l=f+l;if(c>=l.length){c-=l.length;b+=l;f=a.c;break}d=null==d?e:d}}}a="";null!=d&&(a=f+"trn="+d);return b+a}class S{constructor(){this.c="&";this.b={};this.g=0;this.a=[]}};function Ka(a){if(1>Math.random())try{let b;a instanceof S?b=a:(b=new S,oa(a,(d,f)=>{var g=b,e=g.g++;d=Q(f,d);g.a.push(e);g.b[e]=d}));const c=Ja(b);c&&qa(c)}catch(b){}};let T=null;class La{constructor(a,b){var c=(c=n.performance)&&c.now?c.now():null;c||(c=(c=n.performance)&&c.now&&c.timing?Math.floor(c.now()+c.timing.navigationStart):Date.now());this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0}};const U=n.performance,Ma=!!(U&&U.mark&&U.measure&&U.clearMarks),V=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(()=>{var a;if(a=Ma){var b;if(null===T){T="";try{a="";try{a=n.top.location.hash}catch(c){a=n.location.hash}a&&(T=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=T;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function Na(a){a&&U&&V()&&(U.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),U.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))}
class Sa{constructor(){var a=W;this.a=[];this.c=a||n;let b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.a=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=V()||(null!=b?b:1>Math.random())}start(a,b){if(!this.b)return null;a=new La(a,b);b=`goog_${a.label}_${a.uniqueId}_start`;U&&V()&&U.mark(b);return a}};function Ta(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b};if(Ca&&!H(P)){let a="."+ra.domain;try{for(;2<a.split(".").length&&!H(P);)ra.domain=a=a.substr(a.indexOf(".")+1),P=window.parent}catch(b){}H(P)||(P=window)}const W=P,X=new Sa;var Ua=()=>{W.google_measure_js_timing||(X.b=!1,X.a!=X.c.google_js_reporting_queue&&(V()&&Array.prototype.forEach.call(X.a,Na,void 0),X.a.length=0))};"number"!==typeof W.google_srt&&(W.google_srt=Math.random());
if("complete"==W.document.readyState)Ua();else if(X.b){var Va=()=>{Ua()},Wa=W;Wa.addEventListener&&Wa.addEventListener("load",Va,!1)};function Xa(a,b){if(!a||/[?&]dsh=1(&|$)/.test(a))return null;if(/[?&]ae=1(&|$)/.test(a)){var c=/[?&]adurl=([^&]+)/.exec(a);if(!c)return null;b=b?c.index:a.length;try{return{m:a.slice(0,b)+"&act=1"+a.slice(b),o:decodeURIComponent(c[1])}}catch(d){return null}}if(/[?&]ae=2(&|$)/.test(a)){c=a;let d="";b&&(b=a.indexOf("&adurl="),0<b&&(c=a.slice(0,b),d=a.slice(b)));return{m:`${c}&act=1${d}`,o:`${c}&dct=1${d}`}}return null};function Ya(a){const {l:b,j:c}=Za(a.href);v(a,O(b,Ba()));return c}function $a(a,b,c=-1){if(b)if(300>Date.now()-c)a=!1;else if(b=a.getAttribute("data-orig-async-clicktrack-url")){const {l:d,j:f}=Za(b);v(a,O(d,Ba()));a=f}else a.setAttribute("data-orig-async-clicktrack-url",a.href),a=Ya(a);else a=Ya(a);return a}function Za(a){const b=Xa(a,!0);return b?navigator.sendBeacon?navigator.sendBeacon(ab(b.m,"&ri=1"),"")?{l:b.o,j:!0}:{l:ab(a,"&ri=2"),j:!1}:{l:ab(a,"&ri=16"),j:!1}:{l:a,j:!1}}
function ab(a,b){const c=a.search(/&adurl=/);return 0>c?a+b:a.slice(0,c)+b+a.slice(c)}function bb(a){return null!=a&&-1===a.indexOf("dbm/clk")&&null!==Xa(a)};function cb(a,b,c=!1){if(!isNaN(b)&&0<b){var d=parseInt(a.getAttribute("data-on-ready-ts"),10);!c&&!isNaN(d)&&0<d||a.setAttribute("data-on-ready-ts",b)}};var db=class{constructor(){}g(){}};function eb(a){B(this,a,null)}p(eb,A);function fb(a){B(this,a,gb)}p(fb,A);var gb=[1];function ib(a){B(this,a,jb)}p(ib,A);var jb=[1,2];function kb(a){B(this,a,null)}p(kb,A);function lb(a,b){(a=E(a,5,""))&&pa(sa,a+"&label="+b)}function nb(a,b){!isNaN(b)&&0<b&&(isNaN(a.a)||a.a<b)&&(a.a=b)}
function ob(a,b,c){const d=fa(b,ib,4);if(!d)return!0;for(var f of G(d,fb,1)){a:{var g=f;var e=c,h=E(g,2,"");h=h?document.querySelectorAll(h):[e.currentTarget];for(let q=0;q<h.length;++q){const t=h[q].getBoundingClientRect();var k=g;var l=D(k,1);k.h||(k.h={});if(!k.h[1]){for(var m=0;m<l.length;m++)l[m]=+l[m];k.h[1]=!0}k=l;m=e.clientX;l=e.clientY;if(m>=t.left&&m<=t.right&&l>=t.top&&l<=t.bottom&&(l-k[0]<t.top||m+k[1]>t.right||l+k[2]>t.bottom||m-k[3]<t.left)){g=!1;break a}}g=!0}if(!g)return lb(b,"blocked_border_click"),
!1}for(const q of G(d,eb,2))if(f=a,g=q,e=c.currentTarget,nb(f,parseInt(e.getAttribute("data-on-ready-ts"),10)),nb(f,parseInt(e.getAttribute("data-on-show-ts"),10)),e=f.a,f=isNaN(e)||!(0<e)||Date.now()<f.a+E(g,1,0)?!1:!0,!f)return lb(b,"blocked_fast_click"),!1;return F(d,3)&&"function"==typeof n.copfcChm?(n.copfcChm(c),lb(b,"onepointfiveclick_first_click"),!1):!0}class pb{constructor(){this.a=NaN}};var qb=()=>a=>{a=na("https://pagead2.googlesyndication.com/pagead/gen_204",{id:"unsafeurl",ctx:620,url:a});navigator.sendBeacon&&navigator.sendBeacon(a,"")};function rb(a,b){const c=za(a,sb);if(c===M){{a=Error("URL not recognized as safe: "+a);let y;try{const z=new S;var d=z;d.a.push(1);d.b[1]=Q("context",b);a.error&&a.meta&&a.id||(a=new ka(a,{message:Ta(a)}));if(a.msg){d=z;var f=a.msg.substring(0,512);d.a.push(2);d.b[2]=Q("msg",f)}f=z;var g=[a.meta||{}];f.a.push(3);f.b[3]=g;{a=n;g=[];f=null;do{var e=a;if(H(e)){var h=e.location.href;f=e.document&&e.document.referrer||null}else h=f,f=null;g.push(new Fa(h||""));try{a=e.parent}catch(J){a=null}}while(a&&
e!=a);for(let J=0,Oa=g.length-1;J<=Oa;++J)g[J].depth=Oa-J;e=n;if(e.location&&e.location.ancestorOrigins&&e.location.ancestorOrigins.length==g.length-1)for(h=1;h<g.length;++h){var k=g[h];k.url||(k.url=e.location.ancestorOrigins[h-1]||"",k.s=!0)}var l=g;let R=new Fa(n.location.href,!1);e=null;const ca=l.length-1;for(k=ca;0<=k;--k){var m=l[k];!e&&Da.test(m.url)&&(e=m);if(m.url&&!m.s){R=m;break}}m=null;const wb=l.length&&l[ca].url;0!=R.depth&&wb&&(m=l[ca]);y=new Ea(R,m)}if(y.b){l=z;var q=y.b.url||"";
l.a.push(4);l.b[4]=Q("top",q)}var t={url:y.a.url||""};if(y.a.url){var da=y.a.url.match(la),K=da[1],Pa=da[3],Qa=da[4];q="";K&&(q+=K+":");Pa&&(q+="//",q+=Pa,Qa&&(q+=":"+Qa));var Ra=q}else Ra="";K=z;t=[t,{url:Ra}];K.a.push(5);K.b[5]=t;Ka(z)}catch(z){try{Ka({context:"ecmserr",rctx:b,msg:Ta(z),url:y&&y.a.url})}catch(R){}}}}return c}var sb=["HTTPS","INTENT","MARKET","ITMS","ITMS_APPSS"];var Y=(a,b)=>{a.dispatchEvent(new CustomEvent("customError",{detail:{message:b}}))},Z=a=>{const b=a.currentTarget;let c=a.type;null!=a.clientX&&null!=a.clientY&&(c+=` [${a.clientX},${a.clientY}]`);a=a.target;let d=!1,f=!1,g=!1;for(;a!=b;){var e=a.attributes;for(var h=0;h<e.length;++h){var k=e[h];!d&&k.name.match(/^x-.+-l$/)?(c="[l="+k.value+"]"+c,d=!0):!f&&k.name.match(/^x-.+-v$/)?(c="[v="+k.value+"]"+c,f=!0):!g&&k.name.match(/^x-.+-e$/)&&(c="[e="+k.value+"]"+c,g=!0)}e=a.parentElement||b;if(!g)for(h=
e.children,k=0;k<h.length;k++)if(h[k]==a){c=`>${k}`+c;break}a=e}return c};function tb(a,b){a.a=b}function ub(a){for(;!a.id;){const b="goog-js-util-"+Math.random().toString(36).substr(2,5);if(!document.getElementById(b)){a.id=b;break}}return a.id}var vb=class{constructor(){this.a=!1}};function xb(a){B(this,a,yb)}p(xb,A);var yb=[1];function zb(a,b,c){tb(a.h,F(b,2));F(b,4)&&c.setAttribute("data-use-custom-tabs-in-sdk","true");if(E(b,5,""))for(a=c.querySelectorAll(E(b,5,"")),b=0;b<a.length;++b)a[b].addEventListener("click",()=>{})}
function Ab(a,b){let c=null,d=null;b.addEventListener("mousedown",f=>{for(var g=f.currentTarget,e=f.target;e!=g.parentElement&&"A"!=e.tagName;)e=e.parentElement;c=e==g.parentElement?null:e;a:{if(null!=a.a){g=f.currentTarget;e=f.target;if(F(a.a,2)&&1==e.children.length&&"SPAN"==e.children[0].tagName){var h=e.children[0],k=h.getBoundingClientRect();k.left<=f.clientX&&f.clientX<=k.right&&k.top<=f.clientY&&f.clientY<=k.bottom&&(e=h)}for(h=G(a.a,kb,1);e!=g.parentElement;){e.matches=e.matches||e.webkitMatchesSelector||
e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector;for(k=0;k<h.length;++k){const l=h[k];if(e.matches(E(l,1,""))){d=l;break a}}e=e.parentElement}}d=null}if(c&&d&&E(d,2,"")){e=d;g=c;if(h=E(e,2,""))v(g,new u(L(rb(h,618)),r)),g.target=E(e,3,"")||"_top";g.removeAttribute("data-u2-final-url");g.removeAttribute("data-u2-tracking-url");(h=E(e,6,""))&&g.setAttribute("data-u2-final-url",h);(h=E(e,7,""))&&g.setAttribute("data-u2-tracking-url",h);g.removeAttribute("data-app-click-info");(e=fa(e,ia,
9))&&g.setAttribute("data-app-click-info",e.u());g=f.currentTarget;"function"===typeof window.st?window.st(ub(c)):Y(g,`js-util: st() missing: ${Z(f)}`);F(a.a,6)&&c.dispatchEvent(new CustomEvent("CUSTOM_MOUSE_DOWN",{bubbles:!0}))}});b.addEventListener("click",f=>{if(c&&d&&E(d,2,"")&&ob(a.i,d,f)&&!f.defaultPrevented){var g=c,e=f.currentTarget;a:{var h=f.currentTarget;var k=f.target;if(a.h.a&&1==k.children.length&&"SPAN"==k.children[0].tagName){var l=k.children[0];const m=l.getBoundingClientRect();m.left<=
f.clientX&&f.clientX<=m.right&&m.top<=f.clientY&&f.clientY<=m.bottom&&(k=l)}for(;k!=h;){l=k.getAttribute("x-code");if(null!=l){h=parseInt(l,10);break a}k=k.parentElement}h=17}k=h;"function"===typeof window.ja?window.ja(ub(g),k):Y(e,`js-util: ja() missing: ${Z(f)}`);e=f.currentTarget;(h=g.href)?(l=[],0==/&nb=[^&]+/i.test(h)&&l.push("&nb="+k),0==/&nx=[^&]+/i.test(h)&&l.push("&nx="+Math.round(f.clientX-e.offsetLeft)),0==/&ny=[^&]+/i.test(h)&&l.push("&ny="+Math.round(f.clientY-e.offsetTop)),0<l.length&&
(k=l.join(""),l=h.indexOf("&adurl="),h=0>l?h+k:h.substring(0,l)+k+h.substring(l),v(g,O(h,qb())),Y(e,`js-util: ja() filling: ${k} ${Z(f)}`))):Y(e,`js-util: href is empty: ${Z(f)}`);g=c;e=E(d,2,"");h=e.indexOf("&adurl=");0>h||(e=e.slice(h),h=g.href||"",k=h.indexOf(e),0>k||(l=h.slice(k+e.length))&&v(g,new u(L(rb(h.slice(0,k)+l+e,619)),r)));F(a.a,6)?(c.dispatchEvent(new CustomEvent("CUSTOM_CLICK",{bubbles:!0})),f.stopImmediatePropagation(),f.preventDefault()):(f=c,(bb(f.href)||f.getAttribute("data-orig-async-clicktrack-url")&&
bb(f.getAttribute("data-orig-async-clicktrack-url")))&&F(d,8)&&$a(c,F(d,10),a.c)&&(a.c=Date.now()))}else f.stopImmediatePropagation(),f.preventDefault()})}
var Bb=class extends db{constructor(){super();this.a=null;this.i=new pb;this.h=new vb;this.b=!1;this.c=-1}g(a){a:{var b=a.getElementsByTagName("META");for(let c=0;c<b.length;++c)if("exit"===b[c].getAttribute("name")){b=b[c].getAttribute("content")||"";break a}b=""}if(this.a=b=b?new xb(b?JSON.parse(b):null):null)cb(a,Date.now(),F(this.a,7)),zb(this,this.a,a),this.b||(this.b=!0,Ab(this,a))}};const Cb=document.getElementById("mys-content");if(Cb){const a=new Bb;Cb.addEventListener("browserReady",()=>{a.g(Cb)})};}).call(this);
