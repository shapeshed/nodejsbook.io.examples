module.exports = new Ohai;

function Ohai(){}

Ohai.prototype.hello = function(){
  var message = "Hello from the ohai module";
  return message;
};

