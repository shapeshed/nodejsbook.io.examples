var fs = require('fs'),
  readableStream = fs.ReadStream('names.txt'),
  writableStream = fs.WriteStream('out.txt');

readableStream.pipe(writableStream);
