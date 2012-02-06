# How to test your module with assert

If you follow Test Driven Development you will write tests before you write the implementation. Whatever you do you should write tests!

First add how tests should be run to the package.json file.

    "scripts": {
      "test": "node ./test/ohaithere.js"
    }

Then create a test for how you want the module to work.

    var assert = require ('assert')
      , ohaithere = require('../lib/ohaithere');

    /**
     * Test that hello() returns the correct string
     */
    assert.equal(
      ohaithere.hello(), 
      'Hello from the ohaithere module', 
      'Expected "Hello from the ohaithere module". Got "' + ohaithere.hello() + '"'
    )

Run the tests

    npm test

Hack, Run tests, Hack, Run tests. Repeat until you have a pass.

