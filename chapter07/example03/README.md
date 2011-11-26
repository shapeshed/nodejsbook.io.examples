# Creating a POST route 

This example illustrates how to add a route that responds to a POST request for /

Add a form to the default index.jade 

    h2 Form example

    form(method='post', action='/')
      fieldset
        legend Add a user
        p
          label First name
          input(name='user[first_name]')
        p
          label Last name
          input(name='user[surname]')
        p
        input(type='submit', value='Save')


Add a declaration to the `app.js` file to respond to POST requests to /

    app.post('/', function(req, res){
        res.send(req.body);
    });

Then start the server with

    node app.js

Then open your browser at [http://127.0.0.1:3000][1]. Fill in the form with your name and click submit. You should see your name in the data posted.

In reality you would do something with the data at this point - validate it and save it somewhere. 

[1]: http://127.0.0.1:3000
