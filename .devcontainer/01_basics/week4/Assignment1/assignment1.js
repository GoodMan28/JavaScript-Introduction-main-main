// Create a command line interface that lets the user specify a file path and 
// the nodejs process counts the number of words inside it.

// first we will import the required external and internal libraries
// i.e. fs and commander

const { program } = require('commander');
const fs = require('fs');
const path = require('path');
// defining the options
program
    .argument('<filepath>, Path to the file ')

program.parse(); // this parses all the options and arguments

let options = program.opts(); // this returns all the options and it's values as key-value pair in an object

// now reading the file
let FileName = program.args[0];
// resolving the filepath if the file exists out of this directory
FileName = path.resolve(FileName);
console.log(FileName);

fs.readFile(FileName, "utf-8", function (err, data) {
    if(err) {
        console.log("There's some error in the file");
    }
    else {
        console.log("The number of words in the file is:");
        // console.log(data); For debugging purposes
        console.log(data.split(/[,.?! ]+/).filter(Boolean).length); // represented the delimeter in the form of regex
    }
});

console.log("File reading in progress");
// the filter(Boolean) function removes all the empty strings from the array


