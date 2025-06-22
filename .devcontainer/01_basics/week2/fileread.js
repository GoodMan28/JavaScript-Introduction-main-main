// I/O (Input/Output) heavy operations refer to tasks in a computer program that 
// involve a lot of data transfer between the program and external systems or devices. 
// These operations usually require waiting for data to be read from or written to sources like 
// disks, networks, databases, or other external devices, 
// which can be time-consuming compared to in-memory computations.

// Examples are:
// 1. Reading a file: that comes under the category of I/O operation from disk
// 2. HTTP Requests: Requesting resources from the URL
// 3. Starting a clock: eg. wait(1) this also takes a lot of time i.e. 1 sec.

// A "require" statement lets you import code/functions export from another file/module.

const fs = require("fs") // this is the import/require statement
const path = require("path"); // this will help us to resolve the correct path of the file

let path1 = path.join(__dirname, "a.txt");
let path2 = path.join(__dirname, "b.txt");
let contents1 = fs.readFileSync(path1, "utf8"); // the first arg is the filename and the 
// second arg is the CHAR ENCODING STANDARD used

// The character encoding (e.g., 'utf8'): If not provided, the function returns a Buffer i.e.
// all characters are shown in ascii


// Buffer: (JavaScript (in browsers) handles strings in Unicode, 
// which isn't efficient for handling raw binary data like images, files, or network packets. 
// Node.js introduces Buffers to manage raw binary data efficiently.)
console.log(contents1);

// printing the contents of other file along with the previous file synchronously
let contents2 = fs.readFileSync(path2, "utf-8");
console.log(contents2);


// Synchronous (readFileSync): Blocks further execution until reading is complete. 
// Hence syncronous reading is required


