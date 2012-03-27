var http = require('http')

function fetchPage() {
  console.log('fetching page');
  http.get({ host: 'trafficjamapp.herokuapp.com', path: '/?delay=2000' }, function(res) {
    console.log('database query finished');
  }).on('error', function(e) {
    console.log("There was an error" + e);
  });
}

function fetchApi() {
  console.log('fetching api');
  http.get({ host: 'trafficjamapp.herokuapp.com', path: '/?delay=2000' }, function(res) {
    console.log('data returned from the api');
  }).on('error', function(e) {
    console.log("There was an error" + e);
  });
}

fetchPage();
fetchApi();
