const realXhr = "RealXMLHttpRequest"
let handler = {
    // set: (target, propKey, value, receiver) => {
    //     console.log('set', propKey)
    // },
    construct: (target, args) => {
        const proxyInstance = Reflect.construct(target, args);
        return new Proxy(proxyInstance, {
            get: (target, propKey, receiver) => {
                console.log('get', propKey)
                const t = Reflect.get(target, propKey)
                if (typeof t === 'function') {
                    return function () {
                        Reflect.apply(t, target, arguments);
                    }
                }
                return t
            },
            set: (target, propKey, value, receiver) => {
                console.log('set', propKey)
                return Reflect.set(target, propKey, value)
            },
            defineProperty(target, key, attribute) {
                console.log('defineProperty');
                Reflect.defineProperty(target, key, attribute);
            }
        })
    }
}

// class ProxyXMLHttpRequest {
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


const ProxyXMLHttpRequest = new Proxy(XMLHttpRequest, handler)


export {
    ProxyXMLHttpRequest
}