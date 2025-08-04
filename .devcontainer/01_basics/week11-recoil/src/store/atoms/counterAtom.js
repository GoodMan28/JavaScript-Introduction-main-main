import { atom } from "recoil";

export let counterAtom = atom({
    default: 0,
    key: "counter"
})

// the defualt value is the initial state 
// and we provided a key to differentiate it