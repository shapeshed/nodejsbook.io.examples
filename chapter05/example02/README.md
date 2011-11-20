# Adding a response code and Header

In this example we use the writeHead function to send a HTTP response code
and set the Content-Type header as plain text. 

Start the server with

    node server.js

Then open your browser at [http://127.0.0.1:3000][1]

Check the headers to see they are as expected.

    curl -I http://127.0.0.1/

[1]: http://127.0.0.1:3000
