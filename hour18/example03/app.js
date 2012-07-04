var https = require('https');
var username = 'YOUR_TWITTER_USERNAME';
var password = 'YOUR_TWITTER_PASSWORD';
var json;

var options = {
  host: 'stream.twitter.com',
  auth: username + ":" + password,
  path: '/1/statuses/filter.json?track=chocolate',
  method: 'POST'
};

var req = https.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (data) {
    json = JSON.parse(data);
    console.log('New data event!');
    console.log(json.text);
  });
});

req.end();
