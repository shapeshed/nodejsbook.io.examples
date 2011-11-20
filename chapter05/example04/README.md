# Responding to more than one type of request

In this example you start to create a more complex server. The script examines the pathname of the http request to respond with different content. A switch statement determines what the response should be. If no response can be found for the pathname we serve a 404 response

Start the server with

    node server.js

Then open your browser at [http://127.0.0.1:3000][1]

Check the headers to see they are as expected.

    curl -I http://127.0.0.1/

[1]: http://127.0.0.1:3000
