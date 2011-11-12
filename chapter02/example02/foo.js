/*
* This tiny program needs the underscore.js module to run
* In this example we use a package.json to specify that we need the 
* underscore library for this project
*
* Before running foo.js you can install underscore by running
* `npm install`
* This reads the package.json file and installs any specified dependencies
*/

var _ = require('underscore');
_.each([1, 2, 3], function(num){ 
  console.log("underscore.js says " + num)
});
