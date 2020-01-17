const realXhr = "RealXMLHttpRequest"
let proxy = {
    open: (args, xhr) => {
        console.log("open", ...args)
    },
    onreadystatechange: (xhr) => {
        console.log("onreadystatechange", xhr.status)
    },
    responseText: {
        getter: (text, xhr) => {
            const v = JSON.parse(text)
            if (v.data && v.data["loginTitle"]) {
                v.data["loginTitle"] = '德玛西亚'
            }
            return JSON.stringify(v)
        }
    }
}

class ProxyXMLHttpRequest {
    constructor() {
        this._initXMLHttpRequest()
    }

    _initXMLHttpRequest() {
        const xhr = new window[realXhr];

        for (let attr in xhr) {
            const type = typeof xhr[attr]

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

    hookFunction(fun) {
        return function () {
            const args = [].slice.call(arguments)
            if (proxy[fun] && proxy[fun].call(this, args, this.xhr)) {
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
}

export {
    ProxyXMLHttpRequest
}