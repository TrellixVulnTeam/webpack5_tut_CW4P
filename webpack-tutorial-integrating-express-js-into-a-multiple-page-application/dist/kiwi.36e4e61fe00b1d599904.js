/*! For license information please see kiwi.36e4e61fe00b1d599904.js.LICENSE.txt */
(()=>{"use strict";var e={418:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,c,u=o(e),f=1;f<arguments.length;f++){for(var s in i=Object(arguments[f]))r.call(i,s)&&(u[s]=i[s]);if(t){c=t(i);for(var p=0;p<c.length;p++)n.call(i,c[p])&&(u[c[p]]=i[c[p]])}}return u}},408:(e,t,r)=>{var n=r(418);if("function"==typeof Symbol&&Symbol.for){var o=Symbol.for;o("react.element"),o("react.portal"),o("react.fragment"),o("react.strict_mode"),o("react.profiler"),o("react.provider"),o("react.context"),o("react.forward_ref"),o("react.suspense"),o("react.memo"),o("react.lazy")}"function"==typeof Symbol&&Symbol.iterator;function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c={};function u(e,t,r){this.props=e,this.context=t,this.refs=c,this.updater=r||i}function f(){}function s(e,t,r){this.props=e,this.context=t,this.refs=c,this.updater=r||i}u.prototype.isReactComponent={},u.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(a(85));this.updater.enqueueSetState(this,e,t,"setState")},u.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},f.prototype=u.prototype;var p=s.prototype=new f;p.constructor=s,n(p,u.prototype),p.isPureReactComponent=!0;Object.prototype.hasOwnProperty},294:(e,t,r)=>{r(408)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.p="/static/",(()=>{function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const t=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var r,n;return r=t,(n=[{key:"render",value:function(e){var t=document.createElement("h1"),r=document.querySelector("body");t.innerHTML="Webpack is awesome",r.appendChild(t)}}])&&e(r.prototype,n),t}(),n=r.p+"23de234a71129d9c860b2eecff6e31b1.jpg";function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r;return t=e,(r=[{key:"render",value:function(){var e=document.createElement("img");e.src=n,e.alt="Kiwi",e.classList.add("kiwi-image"),document.querySelector("body").appendChild(e)}}])&&o(t.prototype,r),e}();r(294),(new t).render(),(new a).render()})()})();