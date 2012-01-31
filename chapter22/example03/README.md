# How to test your module with assert

If you follow Test Driven Development you will write tests before you write the implementation. Whatever you do you should write tests!

First add how tests should be run to the package.json file.

    "scripts": {
      "test": "node ./test/ohai.js"
    }

Then create a test for how you want the module to work.

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

Run the tests

    npm test

Hack, Run tests, Hack, Run tests. Repeat until you have a pass.

