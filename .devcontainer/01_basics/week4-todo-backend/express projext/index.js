import express from "express"
// 1. import express from 'express'
// This line imports the Express module, which is a popular Node.js framework for building web applications and APIs.
// express is used to handle routing, requests, and middleware in a simple way.

const app = express()
//  2. const app = express()
// This creates an instance of an Express application.
// The app object is used to define routes, middleware, and to start the server.

// 3. This defines a GET route for the root URL (/).
// When someone opens http://localhost:3000/ in the browser or sends a GET request to /, this function is triggered.
// req is the request object, res is the response object.
app.get('/', (req, res) => {
  res.send('Hello World'); // Sends the text "Hello World" as the response.
  console.log("Req sent to the / default route");
})
app.get('/asd', function (req, res) {
  res.send('Hello world from asd');
  console.log("Req sent to the /asd route");
})
app.listen(3000); // this ensures that this port infinitely listens to requests

// Starts the server and listens on port 3000.
// You can visit http://localhost:3000 in your browser to see the output.