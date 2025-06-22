// Synchronous code is executed line by line, in the order it's written. 
// Each operation waits for the previous one to complete before moving on to the next one.

// In sync code One single thread controls the execution

function sum(n) {
    let sum = n*(n+1) / 2;
    return sum;
}

let sum1 = sum(2);
console.log(sum1);

let sum2 = sum(4);
console.log(sum2);

let sum3 = sum(6);
console.log(sum3);


// Here when the control reaches the line function definiton then the interpreter doesn't execute
// the function body. It just moves away from the function body 
// Now the control reaches the line 10 where then the function call appears and interpreter runs the 
// function body where the thread sequentially executes the function body
// and the next part is reached sequentially
