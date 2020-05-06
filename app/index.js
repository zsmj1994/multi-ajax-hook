// import pathToRegexp from 'path-to-regexp'
import { ProxyXMLHttpRequest } from "./ProxyXMLHttpRequest";

console.log(ProxyXMLHttpRequest);

XMLHttpRequest = ProxyXMLHttpRequest;

const xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:8999/server", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    console.log(xhr.responseText);
    document.body.append(xhr.responseText);
  }
};
xhr.send();
