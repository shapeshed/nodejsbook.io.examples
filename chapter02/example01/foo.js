/*
* This tiny program needs the underscore.js module to run
* First try running the program with 
* `node foo.js`. 
* You will get an error saying that node cannot find the 
* underscore module.
*
* Then install underscore.js via npm with
* `npm install underscore`
* Note that a node_modules folder is created and the source
* for the underscore.js library is downloaded there
* Now run the program again with
* `node foo.js`
* It should run successfully
*/

var _ = require('underscore')
_.each([1, 2, 3], function(num){ 
	console.log("underscore.js says " + num)
});
