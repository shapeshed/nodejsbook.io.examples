var vows = require('vows'),
    assert = require('assert');

vows.describe('Comparing strings').addBatch({
  'when comparing the same strings': {
    topic: "hello",
    'they should be equal': function (topic) {
      assert.strictEqual (topic, "hello");
    }
  },
  'when comparing different strings': {
    topic: "hello",
    'they should not be equal': function (topic) {
      assert.notStrictEqual (topic, "there");
    }
  }
}).run(); 
