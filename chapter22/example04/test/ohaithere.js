
var assert = require ('assert'),
  ohaithere = require('../lib/ohaithere');

describe('Ohai module', function(){
  describe('hello()', function(){
    it('should return a string saying hello', function(){
      assert.equal(
        ohaithere.hello(), 
        'Hello from the ohaithere module', 
        'Expected "Hello from the ohaithere module". Got "' + ohaithere.hello() + '"'
      )
    })
  })
})
