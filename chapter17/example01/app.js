var spawn = require('child_process').spawn
  , ping = spawn('ping', ['shapeshed.com']);

ping.stdout.setEncoding('utf8');
ping.stdout.on('data', function (data) {
  console.log(data);
});

