var express = require('express');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Task = new Schema({
  task : { 
    type: String, 
    required: true,
  },
  created_at: { type: Date, default: Date.now },
  updated_at : Date
});

var Task = mongoose.model('Task', Task);

var app = module.exports = express.createServer();

app.configure(function(){
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
  mongoose.connect('mongodb://localhost/todo_development');
  app.listen(3000);
});

app.configure('test', function() {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  mongoose.connect('mongodb://localhost/todo_test');
  app.listen(3001);
});

// Uncomment this section to make tests pass!
//app.get('/api/v1/tasks', function(req, res, next){
//  Task.find({}, function (err, docs) {
//    res.send(docs);
//  });
//});

console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
