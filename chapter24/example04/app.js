var express = require('express'),
    db = require("mongojs").connect('backbone_tasks', ['tasks']);

var app = module.exports = express.createServer();
app.use(express.bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(express.errorHandler({dumpExceptions: true, showStack: true})); 

app.get('/', function(req, res){
  db.tasks.find().sort({ $natural: -1 }, function(err, tasks) {
    res.render('index.jade', { 
      tasks: JSON.stringify(tasks),
      layout: false
    });
  });
});

app.get('/api/tasks', function(req, res){
  db.tasks.find().sort({ $natural: -1 }, function(err, tasks) {
    res.json(tasks);
  });
});

app.get('/api/tasks/:id', function(req, res){
  db.tasks.findOne( { _id: db.ObjectId(req.params.id) } , function(err, task) {
    res.json(task);
  });
});

app.post('/api/tasks', function(req, res){
  db.tasks.save(req.body, function(err, task) {
    res.json(task, 201);
  });
});

app.put('/api/tasks/:id', function(req, res){
  db.tasks.update( { _id: db.ObjectId(req.params.id) }, { $set: { title: req.body.title } }, function(err, task) {
    res.json(200);
  });
});

app.del('/api/tasks/:id', function(req, res){
  db.tasks.remove( { _id: db.ObjectId(req.params.id) }, function(err) {
    res.send();
  });
});

app.listen(3000);
