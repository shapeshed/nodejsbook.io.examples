var fs = require('fs'),
  data = "Some data I want to write to a file";

fs.writeFile('file.txt', data, function (err) {
  if (!err) {
    console.log('Wrote data to file.txt');
  } else {
    throw err;
  }
});
