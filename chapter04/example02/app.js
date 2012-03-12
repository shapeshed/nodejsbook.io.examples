
setTimeout(function(){ 
  console.log('in order'); 
}, 800);
setTimeout(function(){ 
  console.log('but things events happen'); 
}, 1200);
setTimeout(function(){ 
  console.log('is not run'); 
}, 500);
console.log('This synchronous code')
