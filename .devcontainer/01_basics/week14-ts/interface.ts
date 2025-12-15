// Interfaces
interface User {
    name: string,
    age: number
}

function greet(User: User) {
    console.log(`Hello ${User.name}`);
}

let person: User = {
    name: "Abhineet Anand",
    age: 21
}
greet(person)

// Optional Parameters ========================================================================
interface Person {
    name: string,
    age: number,
    // Here the address object is optional
    // Either the whole address object is there or none of it's keys are there because the address is marked as optional
    address?: {
        city: string,
        country: string,
        pincode: number
    }
}

// Interfaces using interfaces ========================================================================
interface human {
    name: string,
    age: number,
    gender: string
}
interface address {
    city: string,
    country: string,
    pincode: number
}

interface office {
    company: string,
    // interface using an interface
    location: address
}