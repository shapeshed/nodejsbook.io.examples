var express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  nicknames = [];

app.set('port', process.env.PORT || 3000);

if ('development' === app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {

  socket.on('nickname', function (data, fn) {
    if (nicknames.indexOf(data) !== -1) {
      fn(true);
    } else {
      fn(false);
      nicknames.push(data);
      socket.nickname = data;
      console.log('Nicknames are ' + nicknames);
      io.sockets.emit('nicknames', nicknames);
    }
  });
  socket.on('disconnect', function () {
    if (!socket.nickname) { return; }
    nicknames.splice(nicknames.indexOf(socket.nickname), 1);
    console.log('Nicknames are ' + nicknames);
  });

});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
