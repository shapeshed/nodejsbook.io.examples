/*
* In this example you create an HTTP client to check whether a website is up. 
* The script checks that the response code is 200
*/
var http = require('http');

var options = {
  host: 'shapeshed.com',
  port: 80,
  path: '/'
};

http.get(options, function(res) {
  if (res.statusCode  == 200) {
	console.log("The site is up!");
  }
  else {
	console.log("The site is down!");
  }
}).on('error', function(e) {
  console.log("There was an error: " + e.message);
});


