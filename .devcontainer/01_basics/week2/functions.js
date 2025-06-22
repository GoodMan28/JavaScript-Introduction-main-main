// function to calculate sum of two numbers
function twoSum(a,b) {
    return a + b;
}

// function to calculate sum of first n natural numbers
function nNumber(n) {
    let sum = 0;
    for(i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(twoSum(2,4));
console.log(nNumber(6));

