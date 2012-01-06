var http = require('http')
, data = ""
, json = "";

var options = {
  host: 'search.twitter.com',
  port: 80,
  path: '/search.json?q=#node.js'
};

var request = http.get(options, function(res){
  res.on('data', function(chunk){
    data += chunk
  });
  res.on('end', function(){
    json = JSON.parse(data);
    for (var i=0; i<json.results.length; i++) {
      console.log(json.results[i].text)
    }
  });
  res.on('error', function(e){
    console.log("There was an error: " + e.message);
  });
})
