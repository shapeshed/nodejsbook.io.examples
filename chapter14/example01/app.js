var app = require('express').createServer()
, twitter = require('ntwitter');

app.listen(3000);

var twit = new twitter({
  consumer_key: 'tK1npUCwqPIrRh6urfxcg',
  consumer_secret: 'ggjnyhRb3b0dbRhKwpPCBDf7Q3cbikK1vaL2Or2Fo1A',
  access_token_key: '359840007-1D3nxPc0iwRL0D3SA3ouTe46FCMvbWVxQ9DIPCUG',
  access_token_secret: 'iIQisVEdJFheBBXiAInarFGGjjaqYZO0i9LlmNjM3c'
});

twit.stream('statuses/filter', { track: ['love', 'hate'] }, function(stream) {
  stream.on('data', function (data) {
    console.log(data);
  });
});
