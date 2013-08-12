var fs = require('fs');

var stream = fs.ReadStream('latin.txt');

stream.setEncoding('utf8');

stream.on('data', function(chunk) {
  console.log('read some data');
});
stream.on('close', function () {
  console.log('all the data is read');
});
