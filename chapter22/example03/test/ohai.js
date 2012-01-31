
var assert = require ('assert')
  , ohai = require('../lib/ohai');

/**
 * Test that hello() returns the correct string
 */
assert.equal(
  ohai.hello(), 
  'Hello from the ohai module', 
  'Expected "Hello from the ohai module". Got "' + ohai.hello() + '"'
)
