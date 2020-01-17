(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/ProxyXMLHttpRequest.js":
/*!************************************!*\
  !*** ./app/ProxyXMLHttpRequest.js ***!
  \************************************/
/*! exports provided: ProxyXMLHttpRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProxyXMLHttpRequest", function() { return ProxyXMLHttpRequest; });
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var realXhr = "RealXMLHttpRequest";
var handler = {
  get: function get(target, propKey, receiver) {
    return target[propKey];
  },
  // set: (target, propKey, value, receiver) => {
  // },
  // apply: (target, thisArg, argumentsList) => {
  // },
  construct: function construct(target, args) {
    return _construct(target, _toConsumableArray(args));
  }
}; // class ProxyXMLHttpRequest {
//     constructor() {
//         this._initXMLHttpRequest()
//     }
//     _initXMLHttpRequest() {
//         const xhr = new Proxy(new window[realXhr], {
//             get: function (target, property, receiver) {
//                 console.log(`property get: ${property}`)
//                 return target[property]
//             },
//             set: function (target, property, value, receiver) {
//                 target[property] = value;
//                 console.log('property set: ' + property + ' = ' + value);
//                 return true;
//             }
//         })
//         // for (let attr in xhr) {
//         //     const type = typeof xhr[attr]
//         //     if (type === "function") {
//         //         this[attr] = this.hookFunction(attr);
//         //     } else {
//         //         Object.defineProperty(this, attr, {
//         //             get: this.getterFactory(attr),
//         //             set: this.setterFactory(attr),
//         //             enumerable: true
//         //         })
//         //     }
//         // }
//         this.xhr = xhr;
//     }
//     hookFunction(fun) {
//         return function () {
//             const args = [].slice.call(arguments)
//             if (proxy[fun] && proxy[fun].call(this, args, this.xhr)) {
//                 return
//             }
//             return this.xhr[fun].apply(this.xhr, args);
//         }
//     }
//     getterFactory(attr) {
//         return function () {
//             const v = this.hasOwnProperty(attr + "_") ? this[attr + "_"] : this.xhr[attr];
//             const attrGetterHook = (proxy[attr] || {})["getter"]
//             return attrGetterHook && attrGetterHook(v, this) || v
//         }
//     }
//     setterFactory(attr) {
//         return function (v) {
//             const xhr = this.xhr;
//             const that = this;
//             const hook = proxy[attr];
//             if (typeof hook === "function") {
//                 // hook  event callbacks such as `onload`、`onreadystatechange`...
//                 xhr[attr] = function () {
//                     proxy[attr](that) || v.apply(xhr, arguments);
//                 }
//             } else {
//                 //If the attribute isn't writable, generate proxy attribute
//                 const attrSetterHook = (hook || {})["setter"];
//                 v = attrSetterHook && attrSetterHook(v, that) || v
//                 try {
//                     xhr[attr] = v;
//                 } catch (e) {
//                     this[attr + "_"] = v;
//                 }
//             }
//         }
//     }
// }

var ProxyXMLHttpRequest = new Proxy(XMLHttpRequest, handler); // export {
//     ProxyXMLHttpRequest
// }

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProxyXMLHttpRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProxyXMLHttpRequest */ "./app/ProxyXMLHttpRequest.js");
// const pathToRegexp = require('path-to-regexp');
// import pathToRegexp from 'path-to-regexp'
// import ajaxHook from 'ajax-hook'
// import { AjaxHook } from './hook'
// const ajaxHook = require("ajax-hook");
 // const ajaxHook = new AjaxHook()
// class Filter {
//     constructor() {
//     }
//     init() {
//         ajaxHook.hookAjax({
//             open: (args, xhr) => {
//                 xhr._url = args[1];
//             }
//         })
//     }
//     hook(urlStr, hookObj) {
//         const regexp = pathToRegexp(urlStr)
//         const t = Object.assign({}, hookObj);
//         Object.keys(t).forEach(function (key) {
//             if (typeof t[key] == "function") {
//                 t[key] = function () {
//                     console.log(this._url)
//                     if (regexp.exec(this._url)) {
//                         hookObj[key].apply(this, arguments);
//                     }
//                 }
//             }
//         });
//         if (!t.open) {
//             t.open = function (args, xhr) {
//                 xhr._url = args[1];
//             }
//         } else {
//             let m = t.open
//             t.open = function (args, xhr) {
//                 xhr._url = args[1];
//                 m.apply(this, arguments)
//             }
//         }
//         ajaxHook.hookAjax(t)
//     }
// }
// export { Filter }

var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8999/server', true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

xhr.send();

/***/ })

/******/ });
});
//# sourceMappingURL=proxy.map