import { atomFamily } from "recoil"
import { TODO } from "./todos"

export let todoAtomFamily = atomFamily({
    key: "todoAtomFamily",
    default: id => {
        return TODO.find((x) => {
            return x.id === id
        })
    }
    // in this syntax automatically the function is called 
    // this is same as setValue(id => id + 1)
})

// hence here the todo with the id is returned 
// this is the working and that todo is returned to the default