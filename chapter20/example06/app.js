var fs = require('fs');
var readableStream = fs.ReadStream('names.txt');
var writeableStream = fs.WriteStream('out.txt');
readableStream.pipe(writeableStream);
