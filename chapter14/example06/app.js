var app = require('express').createServer()
, twitter = require('ntwitter')
, io = require('socket.io').listen(app)
, love = 0
, hate = 0
, total = 0

app.listen(3000);

var twit = new twitter({
  consumer_key: 'tK1npUCwqPIrRh6urfxcg',
  consumer_secret: 'ggjnyhRb3b0dbRhKwpPCBDf7Q3cbikK1vaL2Or2Fo1A',
  access_token_key: '359840007-1D3nxPc0iwRL0D3SA3ouTe46FCMvbWVxQ9DIPCUG',
  access_token_secret: 'iIQisVEdJFheBBXiAInarFGGjjaqYZO0i9LlmNjM3c'
});

twit.stream('statuses/filter', { track: ['love', 'hate'] }, function(stream) {
  stream.on('data', function (data) {
    if (data.text) { 
      if (data.text.indexOf('love') != -1) {
        love++
        total++
        if ((love % 82) == 0){
          io.sockets.volatile.emit('lover', { 
            user: data.user.screen_name, 
            text: data.text,
            avatar: data.user.profile_image_url_https
          });
        }
      }
      if (data.text.indexOf('hate') != -1) {
        hate++
        total++
        if ((hate % 18) == 0){
          io.sockets.volatile.emit('hater', { 
            user: data.user.screen_name, 
            text: data.text,
            avatar: data.user.profile_image_url_https
          });
        }
      }
      io.sockets.volatile.emit('percentages', { 
        love: (love/total)*100,
        hate: (hate/total)*100
      });
    }
  });
});

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

