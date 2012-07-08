var http = require('http'),
    fs = require('fs');

http.createServer(function(request, response) {
  var mp3 = 'danosongs.com-rapidarc.mp3';
  var stat = fs.statSync(mp3);

  response.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Content-Length': stat.size
  });

  var readableStream = fs.createReadStream(mp3);
  readableStream.pipe(response);

}).listen(3000);
