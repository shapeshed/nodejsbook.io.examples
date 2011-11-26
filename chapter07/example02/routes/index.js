
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

/*
 * GET about page.
 */
exports.about = function(req, res){
  res.send('Hello from the about route!');
};
