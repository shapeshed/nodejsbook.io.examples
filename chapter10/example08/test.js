var assert = require('assert')
  , fs = require('fs');

describe('Async testing', function(){
  describe('When using fs.stat on a file', function(){
    it('should not be empty', function(done){
      fs.stat('test.txt', function (err, stat){
        assert.notEqual(stat.size, 0);
        done();
      });
    })
  })
})
