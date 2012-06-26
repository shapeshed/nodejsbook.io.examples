# Creating a redirect 

In this example we use the writeHead function to send a 301 response code and send a Location header. This acts as a redirect to the most awesome site on the Internet

Start the server with

    node server.js

Then open your browser at [http://127.0.0.1:3000][1]

Check the headers to see they are as expected.

    curl -I http://127.0.0.1/

[1]: http://127.0.0.1:3000
