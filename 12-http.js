const http = require('http');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.end('Welcome to our Home page');
    }
    if (request.url === '/about') {
        response.end('Mbagwu Emmanuel!! You must be Great in life!! by God\'s grace');
    }
    if (request.url === '/contact') {
        response.end('This is my Email Address: mbagwu39@gmail.com');
    }
    response.end(`
        <h1>Oops!!</h1>
        <p>the resource that you are looking for can not be found</p>
        <a href="/">Go to Home (:</a>
    `)
})
server.listen(5000);

