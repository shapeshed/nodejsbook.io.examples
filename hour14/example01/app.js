var twitter = require('ntwitter');

var twit = new twitter({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
  access_token_secret: 'YOUR_ACCESS_TOKEN_KEY'
});

twit.stream('statuses/filter', { track: ['love', 'hate'] }, function(stream) {
  stream.on('data', function (data) {
    console.log(data);
  });
});
