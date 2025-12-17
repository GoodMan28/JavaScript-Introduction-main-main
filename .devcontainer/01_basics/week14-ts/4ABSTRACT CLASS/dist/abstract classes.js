class animal {
    name;
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello I am ${this.name}`);
    }
}
class dog extends animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Bark bark!");
    }
}
let boopie = new dog("rocky");
boopie.greet();
boopie.makeSound();
console.log(boopie.name);
export {};
//# sourceMappingURL=abstract%20classes.js.map