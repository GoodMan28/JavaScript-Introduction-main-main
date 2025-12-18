// Partial: It is just like pick, but here all the properties of the superset are optional arguments

interface User {
    name: string
    age: number
    password: string
    username: string
    email: string
}

type update_User_Optional = Partial<User>