var app = require('express').createServer(),
    io = require('socket.io').listen(app),
    nicknames = [];

app.listen(3000);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.on('nickname', function (data) {
    nicknames.push(data);
    socket.nickname = data;
    console.log('Nicknames are ' + nicknames);
  });
  socket.on('disconnect', function () {
    if (!socket.nickname) return;
    if (nicknames.indexOf(socket.nickname) > -1) {
      nicknames.splice(nicknames.indexOf(socket.nickname), 1);
    }
    console.log('Nicknames are ' + nicknames);
  });
});
