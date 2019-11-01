const realXhr = "RealXMLHttpRequest"
let proxy = {

}


const proxies = [
    {
        open: (args, xhr) => {
            console.log("array", ...args)
        },
        onreadystatechange: (xhr) => {
            console.log(xhr.status)
        }
    }
]

const hooksGetter = (fuc) => {
    return proxies.filter((p) => {
        return p[fuc]
    })
}

const queueHooks = (fun) => {

}

class ProxyXMLHttpRequest {
    constructor() {
        this._initXMLHttpRequest()
    }

    hookFunction(fun) {
        return function () {
            const args = [].slice.call(arguments)
            let b = false
            hooksGetter(fun).forEach(p => {
                if (p[fun] && p[fun].call(this, args, this.xhr)) {
                    b = true;
                }
            });
            if (b) {
                return
            }
            return this.xhr[fun].apply(this.xhr, args);
        }
    }

    getterFactory(attr) {
        return function () {
            const v = this.hasOwnProperty(attr + "_") ? this[attr + "_"] : this.xhr[attr];
            const attrGetterHook = (proxy[attr] || {})["getter"]
            return attrGetterHook && attrGetterHook(v, this) || v
        }
    }

    setterFactory(attr) {
        return function (v) {
            const xhr = this.xhr;
            const that = this;
            const hook = proxy[attr];
            if (typeof hook === "function") {
                // hook  event callbacks such as `onload`、`onreadystatechange`...
                xhr[attr] = function () {
                    proxy[attr](that) || v.apply(xhr, arguments);
                }
            } else {
                //If the attribute isn't writable, generate proxy attribute
                const attrSetterHook = (hook || {})["setter"];
                v = attrSetterHook && attrSetterHook(v, that) || v
                try {
                    xhr[attr] = v;
                } catch (e) {
                    this[attr + "_"] = v;
                }
            }
        }
    }

    static hook(proxy) {
        proxies.push(proxy)
    }

    _initXMLHttpRequest() {
        const xhr = new window[realXhr];

        for (let attr in xhr) {
            let type = "";
            try {
                type = typeof xhr[attr]
            } catch (e) {
            }
            if (type === "function") {
                this[attr] = this.hookFunction(attr);
            } else {
                Object.defineProperty(this, attr, {
                    get: this.getterFactory(attr),
                    set: this.setterFactory(attr),
                    enumerable: true
                })
            }
        }
        this.xhr = xhr;
    }
}

export {
    ProxyXMLHttpRequest
}