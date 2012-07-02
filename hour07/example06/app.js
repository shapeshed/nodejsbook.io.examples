
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/users/:id', function(req, res){
  var users = { 
    1 : {
      first_name: 'Keyser',
      surname: 'Soze',
      address: 'Next door',
      facebook_friends: '4'
    },
    2 : {
      first_name: 'Roger',
      surname: 'Kint',
      address: 'London, England',
      facebook_friends: '10000000000000'
    }
  }
  res.render('index.jade', { title: 'User', user: users[req.params.id]  });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
