function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,v=Math.min,g=function(){return l.Date.now()};function p(e,t,n){var o,r,i,u,a,f,c=0,l=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,a=setTimeout(h,t),l?y(e):u}function T(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=i}function h(){var e=g();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-f);return d?v(n,i-(e-c)):n}(e))}function w(e){return a=void 0,p&&o?y(e):(o=r=void 0,u)}function x(){var e=g(),n=T(e);if(o=arguments,r=this,f=e,n){if(void 0===a)return j(f);if(d)return a=setTimeout(h,t),y(f)}return void 0===a&&(a=setTimeout(h,t)),u}return t=b(t)||0,m(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(b(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},x.flush=function(){return void 0===a?u:w(g())},x}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),j=document.querySelector(".feedback-form__textarea"),T={};j.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("feedback-msg",t)}),1e3)),y.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-msg")})),y.addEventListener("input",(e=>{T[e.target.name]=e.target.value,console.log(T)})),function(e){const t=localStorage.getItem("feedback-msg");t&&(j.value=t)}();
//# sourceMappingURL=03-feedback.97ebe38a.js.map
