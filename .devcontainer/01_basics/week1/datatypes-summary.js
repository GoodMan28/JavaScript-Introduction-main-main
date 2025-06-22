//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol(123)
const anotherId = Symbol(123)
console.log(id);
console.log(anotherId);

console.log(id == anotherId);

const bigNumber = 3456543576654356754n  //when we put 'n' at the last of a number then it becomes a bigint
console.log(typeof bigNumber);


// Reference (Non primitive)

// Array, Objects, Functions

// Arrays    type: object 
const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros);


// Objects   type: object
let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof myObj);


// Functions  type: function(but is actually an object only known as function object)
const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);


console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


// summary 
// all non primitive types are objects (functions are also object but they are called function objects)