class Employee {
    name;
    age;
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name} you are ${this.age} y/o`);
    }
}
let emp = new Employee("Abhineet", 21);
emp.greet();
export {};
//# sourceMappingURL=implementing_inter.js.map