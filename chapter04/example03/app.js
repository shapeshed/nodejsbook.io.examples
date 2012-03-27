function haveBreakfast(food, drink, callback) {
  console.log('Having breakfast of ' + food + ', ' + drink);
  if (callback && typeof(callback) === "function") {
    callback();
  }
}

haveBreakfast('toast', 'coffee', function() {
  console.log('Finished breakfast. Time to go to work!');
});
