// when we have comparisons of same datatype
// then in case of number we just compare the values as usual

// in case of boolean: it works such normally (assume true as 1 and false as 0)
// console.log(true > false);
// console.log(true == false);
// console.log(true < false);
// console.log(true >= false);
// console.log(true <= false);

// incase of string
// console.log("String" < "string"); // small letter will have higher priority
// strings are compared lexicographically


// when we have different datatypes

// console.log("02" > 1);
// console.log("02" >= 1);
// console.log("02" == 1); // this is becuase whenever comparison or equaltiy is there 

// the type coercion() occurs as follows
// In comparisons (>, <), strings are converted to numbers.
// In equality (==), either operand can be converted to match the other.
// In arithmetic, numbers are preferred, except for +, which prefers strings.
// Logical operators don't necessarily convert types, they just return truthy/falsy values.


// comparison with null

console.log(null >= 0); // in normal comparisons null is converted to 0
console.log(null <= 0);
console.log(null > 0);
console.log(null == 0); // but in equality it behaves specially as follows
                        // if null == undefined => true
                        // if null == any other value => false
console.log(null < 0);


console.log(null < 5); // expected o/p : true





