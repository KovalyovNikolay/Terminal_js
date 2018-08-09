var http = require('http');
var fs = require("fs");


http.createServer((req,res) =>{
    switch (req.url)
    {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(fs.readFileSync('./index.html'));
        case '/app.css':
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(fs.readFileSync('./app.css'));
        case '/app.js':
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.end(fs.readFileSync('./app.js'));
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end("404 Не найдено");
    }
}).listen(3000, () => console.log('Сервер работает'));