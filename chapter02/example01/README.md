# Installing dependencies with npm

This example illustrates using npm to install dependencies

Try running the program with 

    node foo.js

You will get an error saying that node cannot find the underscore module.

Install underscore.js via npm with

    npm install underscore

Note that a node\_modules folder is created and the source for the underscore.js library is downloaded there.

Now run the program again with

    node foo.js

It should run successfully

