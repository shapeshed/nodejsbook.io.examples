var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"name": "Darth Vader","occupation": "Dark Lord of the Sith","home": "Tatooine"}');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');
