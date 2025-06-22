// Create a CLI which counts the number of words in the given file

// Step 1: Importing required libraries
const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

// The way you are importing Command and creating program is a class-based approach to using the commander library in Node.js.
// Instead of importing the entire commander module, we are destructuring { Command } from it.
// Command is a class that we can use to create CLI programs.

// And we are creating an instance of the Command class
// We can directly use the inbuilt instance of commander
// const { program } = require("commander"); But here we can write only one CLI at a time unlike to the previous method

// Step 2: Define the CLI metadata
program 
.name('Counter')
.description('CLI to perform file related operations')
.version('0.8.0');

// Step 3: Defining a Command 'count'
program.command('count')
.description('Counts the number of words in a file')
.argument('<file>', 'file to count')
.action((file) => {
    // performing whatever actions here only
    fs.readFile(file, "utf-8", (err, data) => {
        if(err) {
            console.log("There's some issue reading the file");
            return;
        }
        let words = data.split(/[,.!? \r\n]+/).filter(Boolean).length;
        console.log(`The number of words in this file is ${words}`);
        console.log(data.split(/[,.!? \r\n]+/).filter(Boolean));
        
    });
});

program.parse(); // Parsing the command line this will do all the work
