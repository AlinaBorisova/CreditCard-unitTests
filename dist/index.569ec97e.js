function e(e,t){var n=function(e){for(var t=e.split(/([.#])/),n="",i="",r=1;r<t.length;r+=2)switch(t[r]){case".":n+=" "+t[r+1];break;case"#":i=t[r+1]}return{className:n.trim(),tag:t[0]||"div",id:i}}(e),i=n.tag,r=n.id,o=n.className,a=t?document.createElementNS(t,i):document.createElement(i);return r&&(a.id=r),o&&(t?a.setAttribute("class",o):a.className=o),a}function t(e,t){var i=m(e),r=m(t);return t===r&&r.__redom_view&&(t=r.__redom_view),r.parentNode&&(n(t,r,i),i.removeChild(r)),t}function n(e,t,n){var r=t.__redom_lifecycle;if(i(r))t.__redom_lifecycle={};else{var o=n;for(t.__redom_mounted&&l(t,"onunmount");o;){var a=o.__redom_lifecycle||{};for(var s in r)a[s]&&(a[s]-=r[s]);i(a)&&(o.__redom_lifecycle=null),o=o.parentNode}}}function i(e){if(null==e)return!0;for(var t in e)if(e[t])return!1;return!0}var r=["onmount","onremount","onunmount"],o="undefined"!=typeof window&&"ShadowRoot"in window;function a(e,t,i,a){var s=m(e),u=m(t);t===u&&u.__redom_view&&(t=u.__redom_view),t!==u&&(u.__redom_view=t);var d=u.__redom_mounted,c=u.parentNode;if(d&&c!==s&&n(0,u,c),null!=i)if(a){var _=m(i);_.__redom_mounted&&l(_,"onunmount"),s.replaceChild(u,_)}else s.insertBefore(u,m(i));else s.appendChild(u);return function(e,t,n,i){for(var a=t.__redom_lifecycle||(t.__redom_lifecycle={}),s=n===i,u=!1,d=0,c=r;d<c.length;d+=1){var _=c[d];s||e!==t&&_ in e&&(a[_]=(a[_]||0)+1),a[_]&&(u=!0)}if(!u)return void(t.__redom_lifecycle={});var f=n,v=!1;(s||f&&f.__redom_mounted)&&(l(t,s?"onremount":"onmount"),v=!0);for(;f;){var h=f.parentNode,m=f.__redom_lifecycle||(f.__redom_lifecycle={});for(var p in a)m[p]=(m[p]||0)+a[p];if(v)break;(f.nodeType===Node.DOCUMENT_NODE||o&&f instanceof ShadowRoot||h&&h.__redom_mounted)&&(l(f,s?"onremount":"onmount"),v=!0),f=h}}(t,u,s,c),t}function l(e,t){"onmount"===t||"onremount"===t?e.__redom_mounted=!0:"onunmount"===t&&(e.__redom_mounted=!1);var n=e.__redom_lifecycle;if(n){var i=e.__redom_view,r=0;for(var o in i&&i[t]&&i[t](),n)o&&r++;if(r)for(var a=e.firstChild;a;){var s=a.nextSibling;l(a,t),a=s}}}function s(e,t,n){e.style[t]=null==n?"":n}var u="http://www.w3.org/1999/xlink";function d(e,t,n,i){var r=m(e);if("object"==typeof t)for(var o in t)d(r,o,t[o],i);else{var a=r instanceof SVGElement,l="function"==typeof n;if("style"===t&&"object"==typeof n)!function(e,t,n){var i=m(e);if("object"==typeof t)for(var r in t)s(i,r,t[r]);else s(i,t,n)}(r,n);else if(a&&l)r[t]=n;else if("dataset"===t)_(r,n);else if(a||!(t in r)&&!l||"list"===t){if(a&&"xlink"===t)return void c(r,n);i&&"class"===t&&(n=r.className+" "+n),null==n?r.removeAttribute(t):r.setAttribute(t,n)}else r[t]=n}}function c(e,t,n){if("object"==typeof t)for(var i in t)c(e,i,t[i]);else null!=n?e.setAttributeNS(u,t,n):e.removeAttributeNS(u,t,n)}function _(e,t,n){if("object"==typeof t)for(var i in t)_(e,i,t[i]);else null!=n?e.dataset[t]=n:delete e.dataset[t]}function f(e){return document.createTextNode(null!=e?e:"")}function v(e,t,n){for(var i=0,r=t;i<r.length;i+=1){var o=r[i];if(0===o||o){var l=typeof o;"function"===l?o(e):"string"===l||"number"===l?e.appendChild(f(o)):p(m(o))?a(e,o):o.length?v(e,o,n):"object"===l&&d(e,o,null,n)}}}function h(e){return"string"==typeof e?w(e):m(e)}function m(e){return e.nodeType&&e||!e.el&&e||m(e.el)}function p(e){return e&&e.nodeType}function w(t){for(var n,i=[],r=arguments.length-1;r-- >0;)i[r]=arguments[r+1];var o=typeof t;if("string"===o)n=e(t);else{if("function"!==o)throw new Error("At least one argument required");var a=t;n=new(Function.prototype.bind.apply(a,[null].concat(i)))}return v(m(n),i,!0),n}var y=w;function b(e){for(var n=[],i=arguments.length-1;i-- >0;)n[i]=arguments[i+1];for(var r=m(e),o=g(e,n,r.firstChild);o;){var a=o.nextSibling;t(e,o),o=a}}function g(e,t,n){for(var i=n,r=Array(t.length),o=0;o<t.length;o++)r[o]=t[o]&&m(t[o]);for(var l=0;l<t.length;l++){var s=t[l];if(s){var u=r[l];if(u!==i)if(p(u)){var d=i&&i.nextSibling,c=null!=s.__redom_index&&d===r[l+1];a(e,s,i,c),c&&(i=d)}else null!=s.length&&(i=g(e,s,i));else i=i.nextSibling}}return i}w.extend=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return w.bind.apply(w,[this].concat(e))};var x=function(e,t,n){this.View=e,this.initData=n,this.oldLookup={},this.lookup={},this.oldViews=[],this.views=[],null!=t&&(this.key="function"==typeof t?t:function(e){return function(t){return t[e]}}(t))};x.prototype.update=function(e,t){for(var n=this,i=n.View,r=n.key,o=n.initData,a=null!=r,l=this.lookup,s={},u=Array(e.length),d=this.views,c=0;c<e.length;c++){var _=e[c],f=void 0;if(a){var v=r(_);f=l[v]||new i(o,_,c,e),s[v]=f,f.__redom_id=v}else f=d[c]||new i(o,_,c,e);f.update&&f.update(_,c,e,t),m(f.el).__redom_view=f,u[c]=f}this.oldViews=d,this.views=u,this.oldLookup=l,this.lookup=s};var N=function(e,t,n,i){this.View=t,this.initData=i,this.views=[],this.pool=new x(t,n,i),this.el=h(e),this.keySet=null!=n};N.prototype.update=function(e,n){void 0===e&&(e=[]);var i=this.keySet,r=this.views;this.pool.update(e,n);var o=this.pool,a=o.views,l=o.lookup;if(i)for(var s=0;s<r.length;s++){var u=r[s];null==l[u.__redom_id]&&(u.__redom_index=null,t(this,u))}for(var d=0;d<a.length;d++){a[d].__redom_index=d}b(this,a),i&&(this.lookup=l),this.views=a},N.extend=function(e,t,n,i){return N.bind(N,e,t,n,i)},N.extend;var C=function(e,t){this.el=f(""),this.visible=!1,this.view=null,this._placeholder=this.el,e instanceof Node?this._el=e:e.el instanceof Node?(this._el=e,this.view=e):this._View=e,this._initData=t};C.prototype.update=function(e,n){var i=this._placeholder,r=this.el.parentNode;if(e){if(!this.visible)if(this._el)a(r,this._el,i),t(r,i),this.el=m(this._el),this.visible=e;else{var o=new(0,this._View)(this._initData);this.el=m(o),this.view=o,a(r,o,i),t(r,i)}this.view&&this.view.update&&this.view.update(n)}else if(this.visible){if(this._el)return a(r,i,this._el),t(r,this._el),this.el=i,void(this.visible=e);a(r,i,this.view),t(r,this.view),this.el=i,this.view=null}this.visible=e};var S=function(e,t,n){this.el=h(e),this.Views=t,this.initData=n};S.prototype.update=function(e,t){if(e!==this.route){var n=this.Views[e];this.route=e,n&&(n instanceof Node||n.el instanceof Node)?this.view=n:this.view=n&&new n(this.initData,t),b(this.el,[this.view])}this.view&&this.view.update&&this.view.update(t,e)};var E="http://www.w3.org/2000/svg";function k(t){for(var n,i=[],r=arguments.length-1;r-- >0;)i[r]=arguments[r+1];var o=typeof t;if("string"===o)n=e(t,E);else{if("function"!==o)throw new Error("At least one argument required");var a=t;n=new(Function.prototype.bind.apply(a,[null].concat(i)))}return v(m(n),i,!0),n}k.extend=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];return k.bind.apply(k,[this].concat(e))},k.ns=E;const L=/^\d{0,16}$/g;let V,D;const q=/^\d{0,4}$/g;let A,T;const j=(e,t,n)=>{let i=[];for(let r=0;r<e.length;r++)0!==r&&r%t==0&&i.push(n),i.push(e[r]);return i.join("")},H=e=>e.replace(/[^\d]/g,""),M=(e,t)=>Math.floor(e/(t+1)),P=e=>{let t=e.target;V=t.value,D=t.selectionEnd},O=e=>{let t=e.target,n=H(t.value);n.match(L)?(n=j(n,4," "),newCursorPosition=D-M(D,4)+M(D+(n.length-V.length),4)+(H(n).length-H(V).length),t.value=""!==n?n:""):(t.value=V,newCursorPosition=D),t.setSelectionRange(newCursorPosition,newCursorPosition)},R=e=>{let t=e.target;t.value=H(t.value),t.value.length>=3&&(t.value=t.value.substring(0,3))},F=e=>{let t=e.target;A=t.value,T=t.selectionEnd},U=e=>{let t=e.target,n=t.value;n=H(n),n.match(q)?(n=j(n,2,"/"),t.value=n):t.value=A};console.log("sss");b(document.body,(()=>{const e=y("span",{className:"card__name"});e.textContent="John Doe";const t=y("span",{className:"card__date"});t.textContent="00/00";const n=y("div",{className:"card__personal"},e,t),i=y("span",{className:"card__number"});i.textContent="xxxx xxxx xxxx xxxx";const r=y("div",{className:"credit-card"},i,n),o=y("p",{className:"secure"});o.textContent="Secure Checkout";const a=y("label",{className:"form__label form__holder-label"});a.textContent="Card Holder";const l=y("input",{type:"text"},{className:"input input__holder"}),s=y("div",{className:"form__input-wrap form__input-wrap_holder"},a,l),u=y("label",{className:"form__label form__number-label"});u.textContent="Card Number";const d=y("input",{className:"input input__number"},{id:"cardNumber"}),c=y("div",{className:"form__input-wrap form__input-wrap_number"},u,d),_=y("label",{className:"form__label form__date-label"});_.textContent="Card Expiry";const f=y("input",{className:"input input__date"},{type:"text"}),v=y("div",{className:"form__input-wrap form__input-wrap_date"},_,f),h=y("label",{className:"form__label form__cvv-label"});h.textContent="CVV";const m=y("input",{className:"input input__cvv"},{type:"text"}),p=y("div",{className:"form__input-wrap form__input-wrap_cvv"},h,m),w=y("button",{className:"form__button"});w.textContent="CHECK OUT";const b=y("form",{action:"#",className:"form",id:"form"},s,c,v,p,w),g=y("div",{className:"card"},o,r,b);return y("div",{className:"wrapper"},g)})()),(()=>{const e=document.querySelector(".input__holder"),t=document.querySelector(".card__name"),n=document.querySelector(".input__number"),i=document.querySelector(".card__number"),r=document.querySelector(".input__date"),o=document.querySelector(".card__date"),a=document.querySelector(".input__cvv");n.addEventListener("keydown",P),n.addEventListener("input",O),r.addEventListener("keydown",F),r.addEventListener("input",U),a.addEventListener("input",R),e.addEventListener("input",(()=>{e.value=e.value.replace(/[А-ЯЁ]/gi,""),t.textContent=e.value})),n.addEventListener("input",(()=>{i.innerHTML=n.value})),r.addEventListener("input",(()=>{o.innerHTML=r.value}))})();
//# sourceMappingURL=index.569ec97e.js.map
