# Includes in Jade

This example illustrates how to use includes with the [Jade][1] templating language.

    h1 Jade Includes Example
    include includes/footer

This includes the footer file found at views/includes/footer.jade

To run the example first install modules with npm

    npm install

Then start the server with

    node app.js

Then open your browser at [http://127.0.0.1:3000][3]

Study the views/index.jade to see how it works. 

If you want to experiment with the examples without having to restart the server every time install [nodemon][2] and then start the server

    nodemon app.js

Nodemon will reload your app automatically when you make changes. 

[1]: https://github.com/visionmedia/jade
[2]: https://github.com/remy/nodemon
[3]: http://127.0.0.1:3000
