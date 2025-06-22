// Here, we pass in a function as an argument
// This function is called a callback since the function gets called back when the file is read 

const { log } = require("console");
let fs = require("fs")

// // Method 1: Using anonymous function passed as the argument
fs.readFile(".devcontainer/01_basics/week2/a.txt", "utf-8", function (err, contents) {
    if(err) {
        console.log("Error is: "+ err);
    }
    else {
        console.log("No error, the content of the file is: ");
        console.log(contents);
    }
});

// Method 2

// defining the callback
function callback(err, contents) {
    if(err) {
        console.log("Error is: " + err);
    }
    else {
        console.log("No error, the content of the file is: ");
        console.log(contents);
    }
}
// this function takes a function name as an argument
// the readfile function calls the function when the file reading is complete
fs.readFile(".devcontainer/01_basics/week2/b.txt", "utf-8", callback);


// Method 3: There is a method where we call run a callback after certain time

function run() {
    console.log("I will run");
}

setTimeout(run, 5000); // setTimeout is another asynchronous function that executes a certain code after some time
// The setTimeout function will take function as an arg (callback)
// and it will call the function after 5000 ms = 5 s



// -----------------------------------------------------------------------------------------------

console.log("It is a normal log statement and will execute the first");
 // This can be run even before all the statements above
// since all the tasks are I/O bound tasks and above task take a few time to run (i.e. read a file)
sum = 0;
for(i = 0; i < 1000000000; i++) {
    sum++;
}
console.log(sum); // these all are CPU intensive tasks and hence the thread is busy for calcuating the sum


// Yes, exactly! Even if the file is completely read while the for loop is running, the file content will not be logged immediately.

// This happens because:

// The event loop is blocked due to the long-running for loop.
// Asynchronous tasks (like fs.readFile) cannot execute their callbacks until the event loop is free.
// Find the answer to the above question from JS architecture code
// Once the for loop finishes, only then the event loop processes pending tasks, including the file read callback.
