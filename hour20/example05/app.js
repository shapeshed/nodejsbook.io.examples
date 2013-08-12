var fs = require('fs'),
  readableStream = fs.ReadStream('names.txt'),
  writableStream = fs.WriteStream('out.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', function(chunk) {
  writableStream.write(chunk);
});

readableStream.on('close', function () {
  writableStream.end();
});
