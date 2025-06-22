// Making a rex=ctangle class
class Rectangle {
    // initializing the fields with the help of constructors
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }

    // Defining the functions native to the object of these classes

    // we cannot write function while defining the function like this :function area()
    // because it is already treated as a function. Class methods are not like object properties
    area() { 
        return this.height * this.width;
    }

    paint() {
        console.log("This is painted in " + this.color + " color");
    }
}

// making the object of the class
let rect = new Rectangle(2,4,"red");
rect.paint();
let ar = rect.area();
console.log(ar);


// Old syntax area: How we can convert an ordinary object to more likely work like a class by giving it some functions with it
let rect2 = {
    height: 2,
    width: 3,
    area: function area() {
        return rect2.height * rect2.width
    }
}

console.log(rect2.area());
console.log(rect.area());



// -------------------------------------------------------------------------------------------------
// ------------------------------Some more classes--------------------------------------------------


// 1. Date
const now = new Date();
console.log(now.toISOString());
console.log(now.getFullYear());
console.log(now.getMonth()); // month of year 0-based
console.log(now.getDate());

// 2. Map - Another form of key-value pair in the JS. Get-Set for getting and updating
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
map.set('gender', 'Male');
//display
console.log(map.get('name'));
// update
map.set('name', 'Bob');
console.log(map.get('name'));
console.log(map.get('gender'));


// Another form of key-value pair
const map2 = {
    firstName: 'Alice',
    age: 30,
    gender: 'Female'
}
// display
console.log(map2.firstName);
console.log(map2.age);
console.log(map2.gender);


// update
map2.firstName = "Bob";
console.log(map2.firstName);


let str = new String("ABhinEEt");
console.log(str.toLocaleLowerCase());
