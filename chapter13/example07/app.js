
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer()
  , io = require('socket.io').listen(app)
  , nicknames = [];

app.listen(80);

io.sockets.on('connection', function (socket) {
  socket.on('user message', function (data) {
    io.sockets.emit('user message', { 
      nick: socket.nickname, 
      message: data 
    });
  });

  socket.on('nickname', function (data, fn) {
    if (nicknames.indexOf(data) != -1) { 
      fn(true);
    } else {
      fn(false);
      socket.nickname = data;
      nicknames.push(data);
      socket.broadcast.emit('announcement', {
        nick: 'system',
        message: data + ' connected' 
      });
      io.sockets.emit('nicknames', nicknames);
    }
  });

  socket.on('disconnect', function () {
    if (!socket.nickname) return;
    nicknames.splice(nicknames.indexOf(socket.nickname), 1);
    socket.broadcast.emit('announcement', socket.nickname + ' disconnected');
    socket.broadcast.emit('announcement', {
      nick: 'system',
      message: socket.nickname + ' disconnected' 
    });
    socket.broadcast.emit('nicknames', nicknames);
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

io.sockets.on('connection', function (socket) {
  
  socket.on('disconnect', function () {
  });
});

// Routes

app.get('/', routes.index);

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
