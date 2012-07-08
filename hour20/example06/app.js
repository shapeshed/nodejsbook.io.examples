var fs = require('fs');
var readableStream = fs.ReadStream('names.txt');
var writableStream = fs.WriteStream('out.txt');
readableStream.pipe(writableStream);
