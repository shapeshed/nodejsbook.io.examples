
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

function validatePresenceOf(value) {
  return value && value.length;
}

var Task = new Schema({
  task : { type: String, validate: [validatePresenceOf, 'a task is required'] },
  created_at : Date,
  updated_at : Date
});
var Task = mongoose.model('Task', Task);



var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(express.cookieParser());
  app.use(express.session({ secret: "keyboard cat" }));
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);

app.get('/tasks', function(req, res){
  Task.find({}, function (err, docs) {
    res.render('tasks/index.jade', { 
        title: 'My Site',
        docs: docs,
        flash: req.flash()
      });
  });
});

// Create
app.get('/tasks/new', function(req, res){
  res.render('tasks/new.jade', { 
    title: 'My Site',
    flash: req.flash()
  });
});

app.post('/tasks', function(req, res){
  var task = new Task(req.body.task);
  task.created_at = new Date();
  task.save(function (err) {
    if (!err) {
      req.flash('info', 'Task created');
      res.redirect('/tasks');
    }
    else {
      req.flash('warning', err);
      res.redirect('/tasks/new');
    }
  });
});

// Read
app.get('/tasks/:id', function(req, res){
  Task.findById(req.params.id, function (err, doc){
    res.render('tasks/show.jade', { 
      title: 'My Site', 
      task: doc 
    });
  });
});

// Update
app.get('/tasks/:id/edit', function(req, res){
  Task.findById(req.params.id, function (err, doc){
    res.render('tasks/edit.jade', { 
      title: 'My Site', 
      task: doc 
    });
  });
});

app.put('/tasks/:id', function(req, res){
  Task.findById(req.params.id, function (err, doc){
    doc.updated_at = new Date();
    doc.task = req.body.task.task;
    doc.save(function(err) {
      if (!err){
        req.flash('info', 'Task udpated');
        res.redirect('/tasks');
      }
      else {
        // error handling
      }
    });
  });
});

// Delete
app.del('/tasks/:id', function(req, res){
  Task.findOne({ _id: req.params.id }, function(err, doc) {
    if (!doc) return next(new NotFound('Document not found'));
    doc.remove(function() {
      req.flash('info', 'Task deleted');
      res.redirect('/tasks');
    });
  });
});

app.listen(3000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
