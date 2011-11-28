# Suggested solution to Quiz question 3

This is a simple solution to Quiz question 3 showing how to show different data based on parameter. It is not suggested that you use this code for production use!

The following sets the data and then shows a user based on the parameter passed in.

    app.get('/users/:id', function(req, res){
      var users = { 
        1 : {
          first_name: 'Keyser',
          surname: 'Soze',
          address: 'Next door',
          facebook_friends: '4'
        },
        2 : {
          first_name: 'Roger',
          surname: 'Kint',
          address: 'London, England',
          facebook_friends: '10000000000000'
        }
      }
      res.render('index.jade', { title: 'User', user: users[req.params.id]  });
    });

This is passed through to the view layer and outputted with

    h1 Passing data through to the view layer

    h3 First Name
    p= user.first_name

    h3 Surname
    p= user.surname

    h3 Address
    p= user.address

    h3 Facebook Friends
    p= user.facebook_friends

To view the result start the server with

    node app.js

Then open your browser at [http://127.0.0.1:3000/users/1][1].  You should see a page passing data through to the view. Change the end of the URL from 1 to 2 and you should see the data change. 

[1]: http://127.0.0.1:3000/users/1
