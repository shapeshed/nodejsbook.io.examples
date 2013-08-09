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

var logPing = function() {
  console.log("Second ping listener got ping");
};

setTimeout(function(){
  console.log('Added a second ping listener');
  pingPong.on('ping', logPing);
}, 4000);

setTimeout(function(){
  console.log('Removed second ping listener');
  pingPong.removeListener('ping', logPing);
}, 12000);
