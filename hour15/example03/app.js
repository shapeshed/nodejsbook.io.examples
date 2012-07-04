var obj = {
  name : "Officer",
  surname : "Dibble"
}

console.log('JavaScript object:');
console.log(obj);

var json = JSON.stringify(obj);
console.log('JavaScript object to JSON:');
console.log(json);

var parsedJson = JSON.parse(json);
console.log('JSON to JavaScript object:');
console.log(parsedJson);

