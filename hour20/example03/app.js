var fs = require('fs'),
  stream = fs.ReadStream('names.txt'),
  data = '';

stream.setEncoding('utf8');

stream.on('data', function(chunk) {
  data += chunk;
  console.log('read some data');
});

stream.on('close', function () {
  console.log('all the data is read');
  console.log(data);
});
