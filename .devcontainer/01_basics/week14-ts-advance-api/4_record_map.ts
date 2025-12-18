// Plain old javascript to handle objects
type User = {
    name: string;
    age: number;
    password: string;
}

type User_obj_1 = { [key: string]: User }

const users1: User_obj_1 = {
    "ras@pq" : {name: "Abhineet", "age": 21, "password": "user@123"},
    "raq@234": {name: "Harki", "age": 45, "password": "new@123"}
}

// console.log(users1);


// -------------------------------------------------------------------------------------------------------------------------------
// 1. Records
// The readability is bad hence we will use the Records to improve the readability
type User_obj_2 = Record<string, User>; // here the first generic is the key datatype and the second one is the value datatype
const users2: User_obj_1 = {
    "ras@pq" : {name: "Abhineet", "age": 21, "password": "user@123"},
    "raq@234": {name: "Harki", "age": 45, "password": "new@123"}
}

// console.log(users2);


// note: this is TS specific, hence when it is compiled to JS it is converted to the Map
// Here we update and access the values like: users2["raq@234"] or users2.ras@pq


// -------------------------------------------------------------------------------------------------------------------------------
// 2. Maps
// This is JS specific and is more similar to C++. Here we get access to "set()" and "get()" methods which improves readability

const users3 = new Map<string, User>(); // here the first one is the key and the second one is the type of the value

// setting the value
users3.set("rag@45", {name: "Abhineet", "age": 21, "password": "user@123"});
users3.set("rag@46", {name: "Harki", "age": 34, "password": "new@124"});
// users3['rag@2354'] = {name: "Harki", "age": 34, "password": "new@124"} Wrong

// getting the value
console.log(users3.get("rag@45")?.name); // because the value can be undefined