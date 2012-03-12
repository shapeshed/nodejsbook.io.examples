function sleep(milliseconds) {
  var start = new Date().getTime();
  while ((new Date().getTime() - start) < milliseconds){
  }
}

function queryDb() {
  sleep(2000); // simulate time to query a database
  console.log('data returned from the api');
}

function fetchApi() {
  sleep(2000); // simulate time to fetch from an api
  console.log('database query finished');
}

queryDb();
fetchApi();
