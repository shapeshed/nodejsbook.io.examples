# Sending data from the server to clients 

In this example the information that the server has about the number of clients is sent to the clients. This allows each client to have the real-time number of clients on the server. The connected browsers write this data to the browser window using client-side JavaScript.

Install dependencies with 
    
    npm install

Start the server with

    node server.js

Then open your browser at [http://127.0.0.1:3000][1]. Open some more browser tabs at [http://127.0.0.1:3000][1]. You should see each new client incrementing the number by one across all tabs. Next close some tabs. You should see the number of clients goes down by one across all tabs.

[1]: http://127.0.0.1:3000
[2]: http://getfirebug.com/
