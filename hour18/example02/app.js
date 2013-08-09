var EventEmitter = require('events').EventEmitter,
  secretMessage = new EventEmitter();

secretMessage.on('message', function(data) {
  console.log(data);
});

secretMessage.on('self destruct', function() {
    console.log('BANG!! The message is destroyed!');
});

secretMessage.emit('message', 'This is a secret message. It will self destruct in 5 seconds..');

setTimeout(function(){
  secretMessage.emit('self destruct');
}, 5000);
