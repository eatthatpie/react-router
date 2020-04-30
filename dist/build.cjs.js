"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t,e=require("path-to-regexp"),n=require("react"),o=(t=n)&&"object"==typeof t&&"default"in t?t.default:t;function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function u(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t))&&"[object Arguments]"!==Object.prototype.toString.call(t))return;var n=[],o=!0,r=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(o=(u=a.next()).done)&&(n.push(u.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{o||null==a.return||a.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(t){return"/"!==t[0]?"/"+t:t}var h=function(){function t(){r(this,t)}return u(t,[{key:"getCurrentRoute",value:function(){throw new Error("Method not implemented.")}},{key:"listenToPopState",value:function(){throw new Error("Method not implemented.")}},{key:"listenToPushState",value:function(){return!0}},{key:"pop",value:function(t){throw new Error("Method not implemented.")}},{key:"push",value:function(t){window.location.hash=t.path}},{key:"subscribe",value:function(t){}}]),t}(),c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[{},{}];r(this,t),this._cbs=e,this._isListeningToPopState=n,this._isListeningToPushState=o,this._state=i}return u(t,[{key:"getCurrentRoute",value:function(){return this._state?this._state[0]:null}},{key:"listenToPopState",value:function(){return this._isListeningToPopState=!0,this._isListeningToPopState}},{key:"listenToPushState",value:function(){return this._isListeningToPushState=!0,this._isListeningToPushState}},{key:"pop",value:function(t){var e=this;this._state[1]=Object.assign({},this._state[0]),this._state[0]=Object.assign({},t),this._isListeningToPopState&&this._cbs.forEach((function(t){t(e._state)}))}},{key:"push",value:function(t){var e=this;this._state&&t.path===this._state[0].path||(window.history.pushState("","",t.matchedPath),this._state[1]=Object.assign({},this._state[0]),this._state[0]=Object.assign({},t),this._isListeningToPushState&&this._cbs.forEach((function(t){t(e._state)})))}},{key:"subscribe",value:function(t){this._cbs.push(t)}}]),t}();function f(t,e,n){return n?Object.assign({},t,{matchedPath:e,params:n}):t}function p(t){if("hash"===t)return new h;if("history"===t)return new c;throw new Error("[Router] Unknown routing mode given: ".concat(t,". Available options are 'hash' and 'history' mode."))}function l(t,n){if(n.path&&n.name)throw new Error("[matchRoute] Properties 'path' and 'name' cannot be given at the same time.");if(!n.path)return t.find((function(t){return t.name===n.name}))||!1;for(var o=0;o<t.length;o++){if("*"===t[o].path)return f(t[o],n.path);var r=e.match(s(t[o].path))(s(n.path));if(r)return f(t[o],n.path,r.params)}return!1}var v=function(){function t(e){r(this,t),this._routes=e&&e.routes?e.routes:[],this._mode=e&&e.mode?p(e.mode):p("history"),this.push({path:window.location.pathname}),this._mode.listenToPushState(),this._mode.listenToPopState(),window.addEventListener("popstate",this.pop.bind(this))}return u(t,[{key:"getCurrentRoute",value:function(){return this._mode.getCurrentRoute()}},{key:"pop",value:function(t){var e={path:window.location.pathname},n=l(this._routes,e);if(!n)throw new Error("[Router] The given route is not defined in router config.");return this._mode.pop(n),!0}},{key:"push",value:function(t){var e=l(this._routes,t);if(!e)throw new Error("[Router] The given route is not defined in router config.");return this._mode.push(e),!0}},{key:"subscribe",value:function(t){this._mode.subscribe(t)}}]),t}();var d=n.createContext(null);exports.RouterContext=d,exports.RouterLink=function(t){var e=n.useContext(d);if(!e)throw new Error("[RouterLink] No RouterContext provided.");return o.createElement("a",{href:t.to.path,onClick:function(n){n.preventDefault(),e.push({path:t.to.path})}},t.children)},exports.RouterView=function(){var t=a(n.useState(""),2),e=t[0],o=t[1];return function(t){var e=n.useContext(d);if(!e)throw new Error("[useRouteWatcher] The RouterContext is not provided.");var o=a(n.useState({from:null,to:{component:e.getCurrentRoute().component}}),2),r=o[0],i=o[1];e.subscribe((function(t){i({from:t[1],to:t[0]})})),n.useEffect((function(){t(r.from,r.to)}),[r])}((function(t,e){o(e?e.component:null)})),e&&n.createElement(e)},exports.createRouter=function(t){return new v(t)};