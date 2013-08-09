var https = require('https'),
  json;

var options = {
  host: 'stream.twitter.com',
  path: '/1.1/statuses/filter.json?track=chocolate',
  method: 'POST',
  headers: {
    // Copy the OAuth Authorization here
    // Sign in at https://dev.twitter.com/
    authorization: 'OAuth oauth_consumer_key="[REPLACE]", oauth_nonce="[REPLACE]", oauth_signature="[REPLACE]", oauth_signature_method="HMAC-SHA1", oauth_timestamp="[REPLACE]", oauth_token="[REPLACE]", oauth_version="1.0"'
  }
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
