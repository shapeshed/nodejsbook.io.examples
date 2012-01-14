# Sending data from clients to the server

In this example a server is started and clients can connect at [http://127.0.0.0.1][1]. Clients can send a message to the server that will then be broadcasted to all other clients.

Install dependencies with 
    
    npm install

Start the server with

    node server.js

Then open your browser at [http://127.0.0.1:3000][1]. Open some more browser tabs at [http://127.0.0.1:3000][1]. Enter a message and click send message. You should see the message appear in the other tabs.


[1]: http://127.0.0.1:3000
[2]: http://getfirebug.com/
