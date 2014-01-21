var express = require('express'),
  app = express(),
  routes = require('./routes'),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server),
  nicknames = [];

app.set('port', process.env.PORT || 3000);

io.sockets.on('connection', function (socket) {
  socket.on('nickname', function (data, callback) {
    if (nicknames.indexOf(data) !== -1) {
      callback(false);
    } else {
      callback(true);
      nicknames.push(data);
      socket.nickname = data;
      console.log('Nicknames are ' + nicknames);
      io.sockets.emit('nicknames', nicknames);
      socket.broadcast.emit('announcement', {
        nick: 'system',
        message: data + ' connected'
      });
    }
  });
  socket.on('user message', function (data) {
    io.sockets.emit('user message', {
      nick: socket.nickname,
      message: data
    });
  });

  socket.on('disconnect', function () {
    if (!socket.nickname) { return; }
    if (nicknames.indexOf(socket.nickname) > -1) {
      nicknames.splice(nicknames.indexOf(socket.nickname), 1);
    }
    console.log('Nicknames are ' + nicknames);
    socket.broadcast.emit('announcement', {
      nick: 'system',
      message: socket.nickname + ' disconnected'
    });
    io.sockets.emit('nicknames', nicknames);
  });
});

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
