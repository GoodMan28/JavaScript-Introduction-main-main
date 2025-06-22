// The async and await syntax in JavaScript provides a way to write asynchronous code 
// that looks and behaves like synchronous code, making it easier to read and maintain

const { log } = require("console");

// Under the hood the async and await syntax have promises running under them

// async/await is essentially syntactic sugar on top of Promises

// Write a code that: 
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hi there 5 seconds after step 2

function setTimeoutPromisified(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    });
}

async function solve() {
    await setTimeoutPromisified(1000);
    console.log('hi');
    
    await setTimeoutPromisified(3000);
    console.log('hello');
    
    await setTimeoutPromisified(5000);
    console.log('hi there');
}

solve();

console.log("After async calls since the thread has supposedly seems to stuck");

// setTimeoutPromisified(1000).then(
//     function () {
//         console.log("Hi after first 1000");
//         setTimeoutPromisified(2000).then(
//             function () {
//                 console.log("Hi after next 2000");
//                 setTimeoutPromisified(3000).then(
//                     function () {
//                         console.log("Final Hi after next 3000");
//                     }
//                 )
//             }
//         )
//     }
// )
// to hide the complexity of this one we use the above one