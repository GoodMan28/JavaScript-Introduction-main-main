// A Promise in JavaScript is an object that represents the eventual completion (or failure) 
// of an asynchronous operation and its resulting(value).

function waitFor3S(resolve) {
    setTimeout(resolve, 3000);
}

function setTimeoutPromisified() {
    return new Promise(waitFor3S); // whatever arg we passed in Promise() class, 
    // the first argument of that arg when called upon then the main will be called

    // so after 3 sec the resolve is called, so whatever we have passed in the .then() will be called
}

function main() {
    console.log("main is called after 3 sec");
}

setTimeoutPromisified().then(main);


// Method 2 : Using anonymous function for declaring waitFor3S

function setTimeoutPromisified2() {
    return new Promise(function waitfor3S2(resolve2){
        setTimeout(resolve2,5000); // here the promise is resolved after 5 seconds
    });
}

function main2() {
    console.log("Main2 is called after 5 sec");
}

setTimeoutPromisified2().then(function (value) {
    main2(value);
});

// We can clearly understand the method2 since we can easily see how is the promise resolved and
// how the executer function is getting the resolve argument 

// 1.
// In the setTimeoutPromisified2() function:
// Inside the Promise constructor, an executor function waitFor3S2(resolve2) is provided
// The executor function receives a resolve2 function (automatically passed by the Promise constructor)
// Now the setTimeout will call the resolve function after 5 seconds. 
// i.e. the promise will be resolved after 5 sec.

// 2.
// setTimeoutPromisified() returns a Promise that resolves in 5 seconds.
// When the promise resolves, the .then(main2) is executed, which calls the main() function


// -------------------------------------------------------------------------------------------------------
// DOUBTS:
// 1. How does the executer function receive resolve2() function by the promise constructor?

// new Promise(function executor(resolve, reject) { ... });

// The executor function is the function you pass inside new Promise()
// The Promise constructor automatically provides two parameters:
// resolve → A function that, when called, fulfills (resolves) the Promise.
// reject → A function that, when called, rejects the Promise (used for error handling).(Optional)



// Step-by-Step Execution:
// new Promise(...) is called inside setTimeoutPromisified2()

// This creates a Promise object.
// The executor function waitFor3S2(resolve2) is immediately executed.
// The Promise constructor automatically provides as argument to the executer function

// When calling new Promise(waitFor3S2), JavaScript automatically injects resolve2 into waitFor3S2(resolve2).
// You don’t need to define resolve2, because JavaScript handles it internally.
// Inside the executor function (waitFor3S2)

// setTimeout(resolve2, 5000); schedules resolve2() to be called after 5 seconds.
// This means that after 5 seconds, the Promise will be resolved.
// After 5 seconds, resolve2() is executed

// This changes the Promise state from "pending" → "resolved".
// If .then(callbackFunction) was attached, the callback function would be executed.



// 2. setTimeoutPromisified2().then(main2);
// In this method the then resolve is passing what(value) to the then() function. 
// because in the read file example we saw that the resolve is passing the contents of the read file

// After 5 seconds, resolve2() is called, but without any arguments.
// This means the Promise resolves with undefined.
// Now, .then(main2) is executed.
// This is equivalent to:


// setTimeoutPromisified2().then(function (value)) {
//     main2(value));
// });

// the(value) here is passed from the resolve to the main2 function


