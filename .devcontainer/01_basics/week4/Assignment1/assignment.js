// first we will provide an option that will say us to provide the path of the file

const {program} = require("commander");
const fs = require("fs");
program
    .option('-f ,--filepath', 'path of the file where we need to count the number of words')
    .argument('<string>');

program.parse(); // this will parse the options and arguments

const options = program.opts(); // this creates an object for all the options

const path = program.args[0];
// Now asyncronously accessing the file

fs.readFile(path, 'utf-8', function (err, data) {
    if(err) {
        console.log("Error in reading the file");
    }
    else {
        let words = data.split(/[\s,.;'!\n]+/).filter(Boolean).length;
        console.log("The number of words in the file is: " + words);
    }
});


