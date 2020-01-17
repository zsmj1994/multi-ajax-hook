const http = require('http')

const server = http.createServer()
server.on('request', function (request, response) {

    console.log('request url :' + request.url)
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.write('hello')
    response.write(' nodejs')
    response.end()
})

server.listen(8999, function () {
    console.log('http://127.0.0.1:8999/')
})