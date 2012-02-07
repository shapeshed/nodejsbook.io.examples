function walkToBus(){
  console.log('Starting to walk to the bus..') 
  setTimeout(function(){
    console.log('✔  Made it to the bus!') 
  }, 3000);
}
function putOnHeadphones(){
  console.log('Putting my headphones on..') 
  setTimeout(function(){
    console.log('✔  Headphones on!') 
  }, 3000);
}
function drinkCoffee(){
  console.log('Drinking coffee..\n') 
  setTimeout(function(){
    console.log('✔  Ahh.. finished coffee!') 
  }, 3000);
}
walkToBus();
putOnHeadphones();
drinkCoffee();
