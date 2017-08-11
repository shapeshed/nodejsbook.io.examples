
#Errata
## 8/11/2017 - Hour 3
Page 36 The Code for Try it yourself for hour03/example02 code, line 12 has an error that stops from bringing an alter when you click on the button the click event is not triggered.
It reads 
$('#click-trigger') .click(function(){
but it should read
$("#click-trigger") .click(function(){
## 05/10/13 - Hour 8
The book contains examples from Express 2. These will work correctly if used with Express 2 but will fail with Express 3. The code examples on GitHub have been updated to use Express 3. The examples in the book use a Twitter bootstrap file that is no longer available. This has also been updated in the code examples on GitHub.
## 05/10/13 - Hour 7
The book contains examples from Express 2. These will work correctly if used with Express 2 but will fail with Express 3. The code examples on GitHub have been updated to use Express 3.
## 05/10/13 - Hour 6
The book contains examples from Express 2. These will work correctly if used with Express 2 but will fail with Express 3. The code examples on GitHub have been updated to use Express 3.
## 05/10/13 - Hour 5, Listing 5.5
In the Try It Yourself after Listing 5.5 point 2 lists starting the server with `node server.js`. This should read `node client.js` (thanks to L Nestor).
## 02/11/12 - Hour 17, Example 4
* Due to API changes in 0.8.x the event for a worker dying is now `exit` rather than `death`. The example has been updated to reflect this. 
* Due to API changes in 0.8.x accessing a worker PID is now `worker.process.pid` rather than `worker.pid`. The example has been updated to reflect this.

