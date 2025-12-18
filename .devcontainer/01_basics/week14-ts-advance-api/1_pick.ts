// Pick
// Use case: Suppose we want to make an Interface "Update_Properties" then initially we would make a new interface.
// But if we change the type of one property in the superset Interface, then we need to change from everywhere.

// Solution: Pick (can be used on both interfaces and types)
// Definition: allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).


interface User {
    name: string
    age: number
    password: string
    username: string
    email: string
}

type update_User = Pick<User , 'name' | 'age' | 'password'> // so here we want to make a subset of these properties