var fork = require('child_process').fork,
  child = fork(__dirname + '/child.js');

child.on('message', function(m) {
  console.log('parent process received message:', m);
});

child.send({ message: 'Hello child!' });

