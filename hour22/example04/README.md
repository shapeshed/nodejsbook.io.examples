# How to test your module with mocha

Assert is a very low level module for Node.js testing and you may wish to use Mocha to give you BDD syntax. 

First add how tests should be run and declare mocha as a dependency in the package.json file.

    "scripts": {
      "test": "make test"
    }
    "devDependencies": {
      "mocha" : "0.10.2"
    }

Install dependencies with 

    npm install

Then create a Makefile

    test:
        @./node_modules/.bin/mocha 

    .PHONY: test

Then create a test for how you want the module to work.

    var assert = require ('assert')
      , ohaithere = require('../lib/ohaithere');

    describe('Ohaithere module', function(){
      describe('hello()', function(){
        it('should return a string saying hello', function(){
          assert.equal(
            ohai.hello(), 
            'Hello from the ohaithere module', 
            'Expected "Hello from the ohaithere module". Got "' + ohai.hello() + '"'
          )
        })
      })
    })

Run the tests

    make test

Hack, Run tests, Hack, Run tests. Repeat until you have a pass.

