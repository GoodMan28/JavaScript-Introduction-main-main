// here we will be making the usePrev Hook 
// which when clicked returns the previous state of a given state (apparently)

import { useEffect, useRef } from "react";

export function usePrev(value) {
    // we have to return the previous state of the value

    let ref = useRef(); // created a reference (which is meant to store the current value)

    useEffect(() => {
        ref.current = value;
    }, [value])
    // this effect is called when the value changes

    return ref.current;
}

// for understanding the above hook we need to understand the following property of JS:
// the return happens before the effect runs

/* 

Suppose when the state is 0 (first state), but here we get the ref current as undefinded
since this was called first and then the effect is called and the ref current is set to 0


Now when the current value becomes 1 now the ref current is returned as 0
and the ref's current is updated to 1

This happens further
edge case when the value is 0 and ref is undefined

*/