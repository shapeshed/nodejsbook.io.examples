var connect = require('connect'),
    http = require('http');

var app = connect()
  .use(helloWorld)

function helloWorld(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hi! Hello World');
}

http.Server(app).listen(3000);
