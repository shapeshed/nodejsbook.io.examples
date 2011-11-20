# Hello World Server

This example illustrates a hello world node.js server

    var http = require('http');
    http.createServer(function (req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Hello World\n');
    }).listen(3000, "127.0.0.1");
    console.log('Server running at http://127.0.0.1:3000/');

Start the server with

    node app.js

Then open your browser at [http://127.0.0.1:3000][1]

[1]: http://127.0.0.1:3000
