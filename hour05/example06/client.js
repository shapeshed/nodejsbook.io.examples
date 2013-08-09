var http = require('http');

var options = {
  host: 'shapeshed.com',
  port: 80,
  path: '/'
};

function ping_server(){
  http.get(options, function(res) {
    if (res.statusCode  === 200) {
      console.log("The site is up!");
    }
    else {
      console.log("The site is down!");
    }
  }).on('error', function(e) {
    console.log("There was an error: " + e.message);
  });
}

setInterval(ping_server, 5000);

