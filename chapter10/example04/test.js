var fs = require('fs');
exports.asyncTest = function(test){
  fs.stat('test.txt', function(err, stats) {
    test.expect(2);
    test.strictEqual(err, null);
    test.notStrictEqual(stats.size, 0);
    test.done();
  })
};
