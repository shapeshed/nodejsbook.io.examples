var express = require('express'),
  twitter = require('ntwitter'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io').listen(server);


app.set('port', process.env.PORT || 3000);

var twit = new twitter({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
  access_token_secret: 'YOUR_ACCESS_TOKEN_KEY'
});

twit.stream('statuses/filter', { track: ['love', 'hate'] }, function(stream) {
  stream.on('data', function (data) {
    io.sockets.volatile.emit('tweet', { 
      user: data.user.screen_name, 
      text: data.text
    });
  });
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
