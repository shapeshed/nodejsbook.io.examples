# Reading Environment Variables

Node.js can read from Environment Variables. These can be useful for storing bits of data like connection strings and usernames.

To run the example first set an environment variable from your terminal. 

On UNIX systems use

    export SECRET_KEY='c6YFPvdT7Yh3JAFW62EBa5LDe4X'

On Windows systems use

    SET SECRET_KEY='c6YFPvdT7Yh3JAFW62EBa5LDe4X'

Then run the script

    node app.js

You should see 

    c6YFPvdT7Yh3JAFW62EBa5LDe4X

Examine app.js to see that is just a single line to get this data.

