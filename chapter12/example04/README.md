# Sending data both ways

In this example a server is started and clients can connect at [http://127.0.0.0.1][1]. Clients can send the server a PING and it will respond with a PONG. The server sends clients a PING every 10 seconds and the clients will respond with a PONG.

Install dependencies with 
    
    npm install

Start the server with

    node server.js

Then open your browser at [http://127.0.0.1:3000][1]. 

[1]: http://127.0.0.1:3000
