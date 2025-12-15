// Intersection: A value of type User must satisfy both GoodUser and BadUser at the same time.
// and in the intersection we can join multiple type/interface (same or cross also)
interface GoodUser {
    name: string;
    balance: string;
}

type BadUser = {
    name: string;
    warning: string
}

type User = GoodUser & BadUser

let user: User = {
    name: "Abhineet",
    balance: "200k",
    warning: "1"
}

console.log(user.warning);

// Union: new_user can be either a GoodUser OR a BadUser, but not necessarily both

type new_user = GoodUser | BadUser

let user2: new_user = {
    name: "Abhineet Anand",
    warning: "2"
}

console.log(user2.warning);


