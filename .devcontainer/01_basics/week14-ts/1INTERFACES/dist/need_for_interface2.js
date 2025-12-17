// Suppose we have made a complex data type such as an object
// so we have to call the same type everywhere, so we need to call it everywhere where we define a function or make it's variable
// Example: This leads to repeatable code and less readability
let person = {
    name: "Abhineet",
    age: 21
};
function greet_person(person) {
    console.log("Hello " + person.name);
}
// greet_person(person: {
//     name: string,
//     age: number
// }) !! Wrong call, we need to only put the type during the declaration of any function or the variable !! Not at the time of calling
greet_person(person);
export {};
// hence we needed an interface which defines a particular type which can be called anytime
// Interface is basically a custom type. Now the question arises that, the object was also a custom type.
// The objects are variable which can't be used as the runtime variable. Hence the concept of Interfaces came
//# sourceMappingURL=need_for_interface2.js.map