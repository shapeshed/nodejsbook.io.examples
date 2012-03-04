var connect = require('connect')
  , http = require('http');

var app = connect()
  .use(filterByIp(['127.0.0.1', '0.0.0.0']))
  .use(helloWorld)


function filterByIp(ips){
  var ips = ips || false;
  return function (req, res, next){
    if (ips.indexOf(req.connection.remoteAddress) == -1) {
      res.writeHead(401, {'Content-Type': 'text/plain'});
      res.write('Sorry. You are not allowed to access this server');
      res.end();
    } else {
      next();
    }
  };
};

function helloWorld(req,res){
  console.log(req.connection.remoteAddress);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('You can view this!');
}

http.Server(app).listen(3000);
