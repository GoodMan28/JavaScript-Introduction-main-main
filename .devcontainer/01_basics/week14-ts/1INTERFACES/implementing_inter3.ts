interface Person {
    name: string;
    age: number;
    greet(): void;
}

class Employee implements Person {
    name: string;
    age: number;
    greet(): void {
        console.log(`Hello ${this.name} you are ${this.age}`)
    };
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    };
}

let emp: Employee = new Employee("Abhineet", 21)
emp.greet()


// wrong approach



// correct approach
// name: string
// age: number
// constructor(name: string, age: number) {
//     this.age = age
//     this.name = name
// }
// greet(): void {
//     console.log(`Hello ${this.name} you are ${this.age} y/o`);
// }