// negation 
let val = 3;
let negval = -val;
// console.log(negval); 

// arithmetic opeartions

// console.log(2 + 2); // addition
// console.log(2 - 3); // subtraction
// console.log(2 * 2); // multiplication
// console.log(2 ** 2); // exponent
// console.log(2 / 3); //division
// console.log(2 % 2); // modulus

// unary addition and unary subtraction

// unary addition: it precedes the operand and attempts to convert the operand into number
// just like how type conversion to number works

// unary subtraction: it just negates the value of operand 
// it converts it into number and then negates

// 1. un add
// console.log(+4); // already a number so o/p: 4
// console.log(+false); // o/p: converts true false in their number
// console.log(+""); // o/p: 0 because it is a empty string
// console.log(+"hello"); // o/p: NaN 
// console.log(+0);

// 2. un sub
// console.log(-4); // o/p: -4
// console.log(-true); // o/p: -1
// console.log(-false); // o/p: -0
// console.log(-0); // o/p: -0

// in JavaScript 0 and -0 both exist

// concatenating the strings
// let str1 = "Hello";
// let str2 = " Abhineet";
// let str3 = str1 + str2;
// console.log(str3);

// Addition of the strings
console.log(1 + "2"); // o/p: 12 but it is a string
console.log("1" + "2"); // o/p: 12 it is also a string
console.log("1" + 2); // o/p: 12 it is also a string
console.log("1" + 2 + 2); // o/p: 122 it is also string  // here we get string in the beginning then it will act as string
console.log(1 + 1 + "2"); // o/p: 22 it is also string // here till we don't get a string we add like integer.
// but as long as we get string it will change to string concat

// conclusion: the interpreter parses from the left and till we get number we add them normally and after string comes 
// we do string concatenation
// if we get string in the beginning we simply take it as string addition

// auto incr decr
let gameCounter = 100
console.log(gameCounter++);
