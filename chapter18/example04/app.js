var EventEmitter = require('events').EventEmitter;
var pingPong = new EventEmitter();

setTimeout(function(){
  console.log('Sending first ping');
  pingPong.emit('ping');
}, 2000);

pingPong.on('ping', function() {
  console.log('Got ping');
  setTimeout(function(){
    pingPong.emit('pong');
  }, 2000);
});

pingPong.on('pong', function() {
  console.log('Got pong');
  setTimeout(function(){
    pingPong.emit('ping');
  }, 2000);
});
