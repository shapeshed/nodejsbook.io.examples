var http = require('http')
  , data = "";

var options = {
  host: '127.0.0.1',
  port: 3000,
  path: '/'
};

var request = http.get(options, function(res){
  res.on('data', function(chunk){
    data += chunk
  });
  res.on('end', function(){
    json = JSON.parse(data);
    console.log('Name: ' + json.name);
    console.log('Occupation: ' + json.surname);
  });
  res.on('error', function(e){
    console.log("There was an error: " + e.message);
  });
})

