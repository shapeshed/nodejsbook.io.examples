var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"name": "Darth Vader","occupation": "Jedi Knight, Dark Lord of the Sith, Supreme Commander","home": "Tatooine"}');
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');
