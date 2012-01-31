
var assert = require ('assert')
  , ohai = require('../lib/ohai');

describe('Ohai module', function(){
  describe('hello()', function(){
    it('should return a string saying hello', function(){
      assert.equal(
        ohai.hello(), 
        'Hello from the ohai module', 
        'Expected "Hello from the ohai module". Got "' + ohai.hello() + '"'
      )
    })
  })
})
