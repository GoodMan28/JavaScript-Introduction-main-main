// Here we can see that the even when we increase, then all the components are re-rendered 
// this is very unoptimal

import { useState } from "react";

export default function App() {
    let [count, setCount] = useState(0);
    
    return (
        <>
            <div>{count}</div>
            <Increase setCount={setCount}></Increase>
            <Decrease setCount={setCount}></Decrease>
        </>
    );
}

function Increase({ setCount }) {
    function increase() {
        setCount(count => count + 1);
    }

    return (
        <>
            <button onClick={increase}>Increase</button>
        </>
    );
}

function Decrease({ setCount }) {
    function decrease() {
        setCount(count => count - 1);
    }

    return (
        <>
            <button onClick={decrease}>Decrease</button>
        </>
    );
}