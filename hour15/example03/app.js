var obj = {
  name : "Officer",
  surname : "Dibble"
}
var parsedJson = JSON.parse(json);
var json = JSON.stringify(obj);

console.log('JavaScript object:');
console.log(obj);
console.log('JavaScript object to JSON:');
console.log(json);
console.log('JSON to JavaScript object:');
console.log(parsedJson);
