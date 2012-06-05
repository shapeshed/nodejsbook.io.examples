var connect = require('connect'),
    http = require('http');

var app = connect()
  .use(nineToFive)
  .use(helloWorld)

function nineToFive(req, res, next) {
  var currentHour = new Date().getHours();
  if (currentHour < 9 || currentHour > 17) {
    res.writeHead(503, {'Content-Type': 'text/plain'});
    res.end('We are closed. Come back between 0900 and 1700.');
  } else {
    next();
  }
}

function helloWorld(req,res){
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hi! We are open!');
}

http.Server(app).listen(3000);
