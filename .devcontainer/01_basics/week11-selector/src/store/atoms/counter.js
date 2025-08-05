import { atom, selector } from "recoil"

export let counterAtom = atom({
    key: "counter",
    default: 0
})

// creating the selector on the counterAtom
export let isEven = selector({
    key: "isEvenSelector",
    get: ({get}) => {
        let count = get(counterAtom);
        return (count % 2 == 0);
    }
})