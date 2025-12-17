// Given a list of users, filter out the users that are legal (greater than 18 years of age)
interface User {
    name: string
    age: number
}

function legalUser(arr: User[]): User[] {
    let eligible: User[] = arr.filter((user: User) => {
        if(user.age >= 18) return true;
        return false;
    })

    return eligible;
}