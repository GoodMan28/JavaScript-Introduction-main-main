// this means: the function "delayedCall" takes an argument which is a function that furTher takes 0 arg and gives no o/p
function delayedCall(fn: () => void) {
    setTimeout(fn, 5000);
}

// calling the function
delayedCall(() => {
    console.log("Hello world after 5 seconds");
    return;
})


// let a: number = 100 // used checkfor the ES version if string interpolation is used then the ES2020 is used else ES5
// console.log(`Hello ${a}`);


// $ npx tsc -b
// $ node delayedCall.js


// Note: Here we can see that when we are declaring the delayedCall then we are decclaring all the types