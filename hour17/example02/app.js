var spawn = require('child_process').spawn,
  ping = spawn('ping', ['bbc.co.uk']);

ping.stdout.setEncoding('utf8');
ping.stdout.on('data', function (data) {
  console.log(data);
});

ping.on('exit', function (code, signal) {
  console.log('child process was killed with a '+ signal + ' signal');
});

ping.kill('SIGINT');
