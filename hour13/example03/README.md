# Maintaining a list of nicknames

This example demonstrates how to maintain a list of nicknames on the server-side

Install dependencies with 

    npm install

Start the application with 

    node app.js

Open a browser at http://127.0.0.1:3000 and enter a nickname into the form. Click submit. In the server logs you should see that your nickname has been added to the list of nicknames.

Open another browser tab and enter a new nickname then sumbit the form. You should see that the server has added your nickname to the list of nicknames.

Close one of the browser tabs. You should see that the nickname has been removed from the list of nicknames. 

