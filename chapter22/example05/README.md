# Adding an executable to your module

To add an executable to your module add a line to your package.json file

    "bin" : { "ohaithere" : "./bin/ohaithere.js" }

If the executable is the same name as your module you can be a bit shorter 

    "bin": "./bin/ohaithere.js" 

In the bin folder add the executable file 

    #!/usr/bin/env node
    var ohaithere = require("../lib/ohaithere");
    console.log (ohaithere.hello());

To test the executable you will need to link the module into your filesystem 

    npm link

Now you can test the executable by running the command.

    ohaithere
