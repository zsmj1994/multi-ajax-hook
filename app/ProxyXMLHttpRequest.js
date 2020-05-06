const realXhr = "RealXMLHttpRequest";
let handler = {
  // set: (target, propKey, value, receiver) => {
  //     console.log('set', propKey)
  // },
  construct: (target, args) => {
    console.log("执行构造函数");
    const proxyInstance = Reflect.construct(target, args);
    return new Proxy(proxyInstance, {
      get: (target, propKey, receiver) => {
        console.log("get", propKey);
        const t = Reflect.get(target, propKey);
        if (typeof t === "function") {
          return function () {
            console.log(`调用方法${propKey}`);
            Reflect.apply(t, target, arguments);
          };
        }
        return t;
      },
      set: (target, propKey, value, receiver) => {
        console.log("set", propKey);
        return Reflect.set(target, propKey, value);
      },
      defineProperty(target, key, attribute) {
        console.log("defineProperty");
        Reflect.defineProperty(target, key, attribute);
      },
    });
  },
};

export const ProxyXMLHttpRequest = new Proxy(XMLHttpRequest, handler);
