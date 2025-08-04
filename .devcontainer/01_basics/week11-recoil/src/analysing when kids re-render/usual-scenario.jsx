// usual scenario when the: When the parent re-render so does the kid

import { useEffect, useState } from "react";

export default function App() {
    // defining the state here only
    let [count, setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setCount(count => count + 1);
        }, 3000)
    }, [])

    return <>
        <div>{count}</div>
        <Increase />
        <Decrease />
    </>
}

function Increase() {
    return (
        <div><button>Increase</button></div>
    );
}

function Decrease() {
    return (
        <div><button>Decrease</button></div>
    );
} 
// here despite the count variable only re-renders but because of that the buttons also re-render



// ----------------------------------------------------------------------------------------------------------
// Despite we have not sent the count variale to the child, but still the Increase and Decrease components are re-rendering 
// Becuase we have to explicitely tell react that: "unless a state or a variable passed to the child are not changed, then dont re-render the specific child element"


// To acheive this we will be using MEMO