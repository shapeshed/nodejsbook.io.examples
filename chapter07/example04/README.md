# Using parameters in routes

This example illustrates how to use paramters in routes to show content

In the `app.js` file add a route that includes a parameter

    app.get('/users/:id', function(req, res){
        res.send('show content for user id' + req.params.id);
    });

Then start the server with

    node app.js

Then open your browser at [http://127.0.0.1:3000][1].  You will see a basic Express site.

Browser to [http://127.0.0.1:3000/users/12][2]. You should see 

    show content for user id 12

Change the address in your browser to [http://127.0.0.1:3000/users/99999][3]. You should see 

    show content for user id 99999

In reality you would do something with the data at this point - validate it and save it somewhere. 

[1]: http://127.0.0.1:3000
[2]: http://127.0.0.1:3000/users/12
[2]: http://127.0.0.1:3000/users/99999
