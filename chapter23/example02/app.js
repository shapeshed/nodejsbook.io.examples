var connect = require('connect'),
    http = require('http');

var app = connect()
  .use(addHeader)
  .use(helloWorld)

function addHeader(req, res, next) {
  res.setHeader('X-Custom-Header', 'My header content')
  next();
}
function helloWorld(req, res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hi! Hello World');
}

http.Server(app).listen(3000);
