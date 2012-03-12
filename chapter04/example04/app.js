var http = require('http')

http.get({ host: 'trafficjamapp.herokuapp.com', path: "/delay=5000" }, function(res) {
  console.log("Got a response");
}).on('error', function(e) {
  console.log("There was an error from shapeshed.com: " + e);
});
