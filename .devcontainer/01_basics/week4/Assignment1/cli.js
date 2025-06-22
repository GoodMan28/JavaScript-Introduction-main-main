// This one will be giving a walk through on how to use commander for creating a CLI

// You write code to describe your command line interface. 
// 1. Commander looks after parsing the arguments into options and command-arguments
// 2. Commander is strict and displays an error for unrecognised options. 
// 3. The two most used option types are a boolean option, and an option which takes its value from the following argument.

const { program } = require('commander'); // importing the commander library

program 

    .option('--first') // boolean flag option i.e. if it is provided then true else will be false  
    .option('-s, --separator <char>') // this is a seperator option (in either long flag or short flag) and takes value
    .argument('<string>'); // The argument, which is a string

program.parse(); // this parses all the options and arguments from the CLI

const options = program.opts(); // this extracts all the options as objects

const limit = options.first ? 1 : undefined;
// i.e. when '--first' option is provided then 1 will be the limit i.e. the string will only be split once 
// since this will be given as the second argument to the split function
// else the limit will be undefined so the string will be split in all parts

console.log(program.args[0].split(options.separator, limit)); 
// Step by step chaining: program.args[0] will give our first argument which one and only our string
// program.args[0].split(options.separator, limit) : now the string will be split based on the delimeter as the value in the separator option 

// limit decides the no of splited terms to be passed



// ---------------------------------------------------------------------------------------------------------------------------------------------------
// The above code demonstrates how can we create CLI by giving the string and the separator w.r.t we can split
// our given argument which is our string


// Note: 
// After parsing all CLI we create an options object which create all the options with its's values as key-value pair

// FileName: options.json

// {
//     first: true/false; // since it is a boolean flag option
//     separator: ',' // or anyting else 
// }
