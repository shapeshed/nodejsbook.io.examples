function sleep(milliseconds) {
  var start = new Date().getTime();
  while ((new Date().getTime() - start) < milliseconds){
  }
}

function fetchPage() {
  console.log('fetching page');
  sleep(2000); // simulate time to query a database
  console.log('data returned from requesting page');
}

function fetchApi() {
  console.log('fetching api');
  sleep(2000); // simulate time to fetch from an api
  console.log('data returned from the api');
}

fetchPage();
fetchApi();
