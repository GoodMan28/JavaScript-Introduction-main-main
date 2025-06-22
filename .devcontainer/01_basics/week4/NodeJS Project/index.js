// const chalk = require("chalk"); This will not work Reason: require is not defined in ES module scope(so when we will do npm install it cannot be recognized by the terminal)
// Now we will be writing a slightly new syntax that is used in JS


import chalk from 'chalk'; // new syntax to import the library
console.log(chalk.blue('Hello, world!'));
console.log(chalk.red.bold('This is an error message.'));
console.log(chalk.green.underline('This is a success message.'));
console.log(chalk.bgYellow.bold.green("This is green text in yellow background"));

// console.log("Hello World !");


// We don't need to push the whole bulky node modules folder to github. 
// The person who sees the package can simply run "npm install" in the cli anc all the dependencies will be installed

// The script section is the most important one
// scripts: Custom commands you can run with npm run

// Suppose: 

// "scripts": {
//     "start": "node index.js"
// },

// Run "npm run start" => It will run the command and print "Hello World !"



// -------------------------------------------------------------------------------------------------------------
//                    IMPORTANT
// Two Types of Modules in Node.js:

// 1. CommonJS Modules (default in Node.js)
// Uses require() to import and module.exports to export. Synchronous and older format.

// 2. ES Modules (ESM) (modern, used in browsers and supported in Node.js)
// Uses import and export keywords. Asynchronous, cleaner syntax.

// Great question!

// Changing your file name from index.js to index.mjs tells Node.js 
// to treat it as an ES Module (ESM) instead of the default CommonJS module. 

// Initially when we were using the import statements inplace of the require statements
// the js has to re-parse whether it is a common-js and ES-Module which creates an overhead

// So either add the type: module to the "package.json" 
// Or either change the name of the index.js to the index.mjs. Now the Node.js will automatically parse it as 
// ES-Module(modern js)



// Notes: https://petal-estimate-4e9.notion.site/Node-js-Bun-and-JS-runtimes-a09a41ccd61c4f498e55750c9a1c9b34