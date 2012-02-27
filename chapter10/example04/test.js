var fs = require('fs');
exports.asyncTest = function(test){
  fs.stat('test.txt', function(err, stats) {
    test.expect(2);
    test.notEqual(err, false);
    test.notEqual(stats.size, 0);
    test.done();
  })
};
