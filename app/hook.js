import { ProxyXMLHttpRequest } from './ProxyXMLHttpRequest'

const realXhr = "RealXMLHttpRequest"


class AjaxHook {

    constructor() {

    }


    hookAjax(proxy) {

        window[realXhr] = window[realXhr] || XMLHttpRequest

        const self = this

        XMLHttpRequest = ProxyXMLHttpRequest

        return window[realXhr]
    }


}

export { AjaxHook }