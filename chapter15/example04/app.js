var http = require('http');
var data = "";
var tweets = "";

var options = {
  host: 'search.twitter.com',
  port: 80,
  path: '/search.json?q=%23node.js'
};

var request = http.get(options, function(res){
  res.on('data', function(chunk){
    data += chunk
  });
  res.on('end', function(){
    tweets = JSON.parse(data);
    for (var i=0; i<tweets.results.length; i++) {
      console.log(tweets.results[i].text)
    }
  });
  res.on('error', function(e){
    console.log("There was an error: " + e.message);
  });
})
