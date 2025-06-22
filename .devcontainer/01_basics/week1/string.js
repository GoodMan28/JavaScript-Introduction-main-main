// string declaration method 1
const name = "callOfDuty";


// string can also be declared using new keyword
let gameName = new String("Abhineet");

console.log(typeof gameName);
console.log(typeof name);

// here the first example name is a string while gameName is an object

// so the changes on the object are refelected in the string object

// Some methods on string object
// 1. length
console.log(gameName.length);

// 2. toUpperCase / toLowerCase
console.log(gameName.toLowerCase());    // but this does not change the object
                                        // because we are not calling these functions on the object we are just calling the methods on the copy

// if u want to get permanent change do this instead
// gameName = gameName.toLowerCase();   // this method returns a primitive string 'abhineet' 
//                                     // that's why the return type [String: 'abhineet'] is lost
// console.log(gameName);

// -------------------------------------------------------------------------------------------------------------------------

// console.log(gameName.__proto__); // Output: String.prototype
// console.log(gameName.__proto__ === String.prototype); // true
// console.log(gameName.toLowerCase()); // Works because `toLowerCase` exists in String.prototype
// console.log(gameName);  // o/p: [String: 'Abhineet']

// -------------------------------------------------------------------------------------------------------------------------


// 3. indexOf / charAt

console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));  // gives first index of 'e'

// 4. trim
let anotherString = "   Google    "; // trim() elimintes the leading and trailing whitespaces
console.log(anotherString);
console.log(anotherString.trim());

// 5. substring / slice
let stringTwo = gameName.substring(0,4); // (begin, end). end is exclusive but start is inclusive
console.log(stringTwo);  // NOTE: substring does not work on negative indexes. 
// we use negative and positive indexes to slice them in opposite direction.


// positive index  0  1  2  3  4  5  6    // consider a string of length: 7
// negative index -1 -2 -3 -4 -5 -6 -7    // negative equivalent

let stringThree = gameName.slice(-7, 4); // o/p: tee   // again the last one is exclude
console.log(stringThree);
