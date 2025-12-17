abstract class animal {
    name: string
    constructor(name: string) {
        this.name = name;
    }
    abstract makeSound(): void
    greet() {
        console.log(`Hello I am ${this.name}`);
    }
}

class dog extends animal {
    constructor(name: string) {
        super(name)
    }

    makeSound(): void {
        console.log("Bark bark!");
    }
}

let boopie = new dog("rocky")
boopie.greet();
boopie.makeSound();
console.log(boopie.name);