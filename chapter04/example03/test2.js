var http = require('http')

function queryDb() {
  http.get({ host: 'trafficjamapp.herokuapp.com', path: '/?delay=2000' }, function(res) {
    console.log('database query finished');
  }).on('error', function(e) {
    console.log("There was an error" + e);
  });
}

function fetchApi() {
  http.get({ host: 'trafficjamapp.herokuapp.com', path: '/?delay=2000' }, function(res) {
    console.log('data returned from the api');
  }).on('error', function(e) {
    console.log("There was an error" + e);
  });
}

queryDb();
fetchApi();
