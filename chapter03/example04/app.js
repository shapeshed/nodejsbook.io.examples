function sleep(milliseconds) {
  var start = new Date().getTime();
  while ((new Date().getTime() - start) < milliseconds){
    // Do nothing
  }
}

console.log('Starting to walk to the bus..') 
sleep(3000);
console.log('✔  Made it to the bus!\n') 
console.log('Putting my headphones on..') 
sleep(3000);
console.log('✔  Headphones on!\n') 
console.log('Drinking coffee..');
sleep(3000);
console.log('✔  Ahh.. finished coffee!') 
