var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);

app.set('port', process.env.PORT || 3000);

if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


io.sockets.on('connection', function (socket) {
  socket.emit('welcome', { text: 'OH HAI! U R CONNECTED!' });
});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
