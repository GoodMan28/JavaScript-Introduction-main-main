/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
// const server = require('../fileServer');



// despite we are giving the file end point but the path will be files/ because it is the name of the directory
app.get('/file/:filename', (req, res) => {
  let filename = req.params.filename;
  if(filename) {
    // we will return the content of the filename in the files directory
    let filepath = `./files/${filename}`; // using string interpolation
    fs.readFile(filepath, "utf-8", (err, data) => {
      if(err) {
        res.status(404).send("File not found");
      }
      else {
        res.send(data);  // THIS PART IS AMBIGUOUS AND THE RECIEVED IS 404 DESPITE MENTIONED AS 200
      }
    })
  }
  else {
    // no filename specified just finf the number of files and list of files
    
  }
})

app.get('/files', (req, res) => {
  let dirPath = `./files`;
  fs.readdir(dirPath, (err, files) => {
    if(err) {
      res.status(500).send("File not found")
    }
    else {
      res.json(files);
    }
  })
})

app.all('*', (req, res) => {
  res.status(404).send("Route not found")
})
// app.listen(3001); // let the browser select the port

module.exports = app; // in this way our test file will open the server 