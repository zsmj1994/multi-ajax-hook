// const pathToRegexp = require('path-to-regexp');
// import pathToRegexp from 'path-to-regexp'
// import ajaxHook from 'ajax-hook'
// import { AjaxHook } from './hook'
// const ajaxHook = require("ajax-hook");
import { ProxyXMLHttpRequest } from './ProxyXMLHttpRequest'
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
console.log(ProxyXMLHttpRequest)

const xhr = new ProxyXMLHttpRequest()
xhr.open('GET', 'http://localhost:8999/server', true)
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText)
    }
}
xhr.send()