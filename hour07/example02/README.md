# Creating a GET route 

This example illustrates how to add a route that responds to a GET request for /about

Installed the required dependencies with

    npm install

Edit the `app.js` file to respond to GET requests to /about

    app.get('/about', function(req, res){
        res.send('Hello from the about route!');
    });

Then start the server with

    node app.js

Then open your browser at [http://127.0.0.1:3000][1]

You will see a basic Express site. Then browse to [http://127.0.0.1:3000/about][2]. You should see

    Hello from the about route!

[1]: http://127.0.0.1:3000
[2]: http://127.0.0.1:3000/about
