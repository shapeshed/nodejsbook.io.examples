/*
* In this example we use the writeHead function to send a HTTP response code
* and set the Content-Type header as plain text. 
*/
var http = require('http');
http.createServer(function (req, res) {
  console.log(req)
  res.writeHead(200, {
	'Content-Type': 'text/plain'
  });
  res.end('Hello World\n');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');

