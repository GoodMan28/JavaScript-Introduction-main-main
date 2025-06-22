const accountId = 12424; //becuase accountId cannot vary
let accountEmail = "ab@ab.gmail.com";
var accountPassword = "123456";

// we can declare a const in only one way by using the const keyword
// we have two mathods to declare variables 1. using let 2. using var

// prefer not to use var because it has no control over block and functional scope
// change in one place can change the value in the variable declared under var

accountCity = "Bokaro"; //we can also declare a variable without using any keyword(like var or let) but that is not specified
console.log(accountCity);
//if we declare a variable but dont initailize it then it's default value is undefined
let undefinedvar;
console.log(undefinedvar);
const newvar = 12345;
//printing many values together we will use console.table([val1, val2, val3]);
console.table([accountId, accountEmail, accountPassword, accountCity, newvar]);
console.log("Completed without error");
//we can use or skip semicolon ;

