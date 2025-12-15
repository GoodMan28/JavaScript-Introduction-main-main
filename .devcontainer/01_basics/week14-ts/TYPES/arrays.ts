// create two types called User and Admin, create a function greet which takes input as either User or Admin
// o/p: `Hello [Name]`

type User = {
    name: string,
    gender: string,
    age: number
}

type Admin = {
    name: string,
    department: string,
    experience: number
}

type user = User | Admin
function greet(user: user) {
    console.log(`Hello ${user.name}`);
}

let random_person: user = {
    name: "XYZ",
    gender: "Male",
    age: 21
}

greet(random_person)

// =======================================Arrays of Interfaces in TS=========================================================================
// Given a list of Users filter out the legal users

let user1: User = {
    name: "ABC",
    age: 18,
    gender: "Male"
}
let user2: User = {
    name: "XYZ",
    age: 13,
    gender: "Male"
}
let user3: User = {
    name: "EFG",
    age: 21,
    gender: "Female"
}
let user4: User = {
    name: "JKL",
    age: 15,
    gender: "Male"
}

let users: User[] = [user1, user2, user3, user4]

let legal_users: User[] = users.filter((user) => {
    if(user.age >= 18) return true;
    return false;
})

console.log("Legal users are: ");
console.log(legal_users);