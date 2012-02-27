var assert = require('assert');
describe('Comparing strings', function(){
  describe('when comparing the same strings', function(){
    it('should return true', function(){
      assert.strictEqual ("hello", "hello");
    })
  })
  describe('when comparing different strings', function(){
    it('should return false', function(){
      assert.notStrictEqual ("hello", "there");
    })
  })
})
