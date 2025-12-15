// create two types called User and Admin, create a function greet which takes input as either User or Admin
// o/p: `Hello [Name]`
function greet(user) {
    console.log(`Hello ${user.name}`);
}
let random_person = {
    name: "XYZ",
    gender: "Male",
    age: 21
};
greet(random_person);
// Given a list of Users filter out the legal users
let user1 = {
    name: "ABC",
    age: 18,
    gender: "Male"
};
let user2 = {
    name: "XYZ",
    age: 13,
    gender: "Male"
};
let user3 = {
    name: "EFG",
    age: 21,
    gender: "Female"
};
let user4 = {
    name: "JKL",
    age: 15,
    gender: "Male"
};
let users = [user1, user2, user3, user4];
let legal_users = users.filter((user) => {
    if (user.age >= 18)
        return true;
    return false;
});
console.log("Legal users are: ");
console.log(legal_users);
export {};
//# sourceMappingURL=question.js.map