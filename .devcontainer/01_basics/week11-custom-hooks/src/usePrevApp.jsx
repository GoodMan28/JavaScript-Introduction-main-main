// here we will be using the usePrev hook 
// for further info read the usePrev hook

import { useState } from "react";
import {usePrev} from "./hooks/usePrev.js"
export default function App() {
    let [value, setValue] = useState(0); // our current state
    let prev = usePrev(value);
    
    function increase() {
        setValue(value + 1);
    }
    return (
        <>
            <div><button onClick={increase}>Current State {value}</button></div>
            <div>The previous state was {(prev !== undefined) ? prev : "undefined"}</div>
        </>
    );
}