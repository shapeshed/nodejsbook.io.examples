var assert = require ('assert');
var ohaithere = require('../lib/ohaithere');

/**
 * Test that hello() returns the correct string
 */
assert.equal(
  ohaithere.hello(), 
  'Hello from the ohaithere module', 
  'Expected "Hello from the ohaithere module". Got "' + ohaithere.hello() + '"'
)
