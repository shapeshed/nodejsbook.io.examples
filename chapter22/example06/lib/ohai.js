module.exports = new Ohai;

function Ohai(){
  var message = "Hello from the ohai module";
  this.hello = function() {
    return message;
  }
}

