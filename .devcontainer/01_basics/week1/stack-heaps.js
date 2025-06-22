// primintive : stored in stack

// non primitive : stored in heap because here you don't get the copy. You get the reference of the actual value present in the heap

let someValue = "Abhineet";
let anotherValue = someValue;

anotherValue = "Anand";

console.log(someValue);
console.log(anotherValue); // here anotherValue has a copy of the content of someValue not the reference of someValue
                            // so the value in someValue is not changed when we changed it's copy



// non primitive datatypes where reference is used 
// hence their reference is stored in the stack 
// and the value i.e. object is stored in the heap

let userOne = {
    name: "Abhineet",
    email: "user@google.com"
}

let userTwo = userOne;

userTwo.email = "abhineet@google.com";

// change through userTwo also changes the email in userOne also 
// because userOne and userTwo share the same reference


console.log(userTwo.email);
console.log(userOne.email);

// check the associated sc associated with this

// reference image link: https://drive.google.com/file/d/1Bf3qm0VCfSE25K9Mz5qwvAB3ZxJpJJGb/view?usp=sharing
