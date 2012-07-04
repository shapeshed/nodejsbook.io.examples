var app = require('express').createServer()
  , io = require('socket.io').listen(app)
  , nicknames = [];

app.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.on('nickname', function (data, fn) {
    if (nicknames.indexOf(data) != -1) { 
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
    if (!socket.nickname) return;
    nicknames.splice(nicknames.indexOf(socket.nickname), 1);
    console.log('Nicknames are ' + nicknames);
  });
});
