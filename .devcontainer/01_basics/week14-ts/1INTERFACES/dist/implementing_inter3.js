class Employee {
    name;
    age;
    greet() {
        console.log(`Hello ${this.name} you are ${this.age}`);
    }
    ;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
}
let emp = new Employee("Abhineet", 21);
emp.greet();
export {};
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
//# sourceMappingURL=implementing_inter3.js.map