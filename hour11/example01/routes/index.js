
exports.index = function(req, res){
  res.render('index', { title: 'Home' })
};
exports.about = function(req, res){
  res.render('about', { title: 'about' })
};
exports.contact = function(req, res){
  res.render('contact', { title: 'Contact' })
};
