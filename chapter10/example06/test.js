var vows = require('vows'),
    assert = require('assert'),
    fs = require('fs');

vows.describe('Async testing').addBatch({
  'When using fs.stat on a file': {
    topic: function () {
      fs.stat('test.txt', this.callback);
    },
    'it should be present': function (err, stat) {
      assert.strictEqual(err, null);      
    },
    'it should not be empty': function (err, stat) {
      assert.notStrictEqual(stat.size, 0);
    }
  },
}).run(); 
