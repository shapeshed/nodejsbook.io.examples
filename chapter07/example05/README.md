# Using local variables

This example illustrates how to pass local variables to your view layer

In the `app.js` file add a route that includes some data that you want to pass through to the view layer.

    app.get('/', function(req, res){
      // You would probably get this data from a data store
      var user = { 
        first_name: 'Lord',
        surname: 'Lucan',
        address: 'I'm not telling!',
        facebook_friends: '1356200'
      };
      // Note how the user object is passed as local variable to the view
      res.render('index.jade', { title: 'User', user: user  });
    });

To show the data add the following to the `views/index.jade` file 

    h1 Accessing data

    h3 First Name
    p= user.first_name

    h3 Surname
    p= user.surname

Then start the server with

    node app.js

Then open your browser at [http://127.0.0.1:3000][1].  You should see a page passing data through to the view.

[1]: http://127.0.0.1:3000
