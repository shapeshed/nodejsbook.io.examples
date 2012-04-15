var fs = require('fs');
var readableStream = fs.ReadStream('names.txt');
var writeableStream = fs.WriteStream('out.txt');
readableStream.setEncoding('utf-8');
readableStream.on('data', function(chunk) {
  writeableStream.write(chunk);
});
readableStream.on('close', function () {
  writeableStream.end();
});
