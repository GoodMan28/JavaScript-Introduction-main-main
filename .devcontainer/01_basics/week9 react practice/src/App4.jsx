// Here we will be learning about the dependency array
// Also revising the Cleanup, useEffect and Conditonal Rendering (CR)

import { useState,useEffect, use } from "react";

export default function App() {
    // let [count, setCount] = useState(0);
    // let [count2, setCount2] = useState(0);
    // return (
    //     <Counter count={count} count2={count2} setCount={setCount} setCount2={setCount2}></Counter>
    // );

    return (
        <Counter></Counter>
    );
}

function Counter()  {
    let [count, setCount] = useState(0);
    let [count2, setCount2] = useState(0);

    useEffect(function () {
        console.log("Called on mount once");
        
        return () => {
            console.log("Called on unmount");     
        }
    }, [])

    useEffect(function () {
        console.log("The component is rendered")
        
        return () => {
            console.log("Clean-up is called"); // clean-up != unmounting
        }
    }, [count, count2])

    // As we had a notion that: The logic under the useEffect runs once when the component is mounted in the DOM. And the return runs when the component is unmounting
    // The above happened when the Dependency Array was empty.
    
    // This is NOT unmounting the component — it's simply:
    // Cleaning up the previous effect whenever count or count2 change
    // Then running the new effect with updated values

    function increase() {
        setCount(count + 1)
    }
    function decrease() {
        setCount2(count2 - 1)
    }

    return (
        <div>
            <div>Counter1 {count}</div>
            <div>Counter2 {count2}</div>
            <button onClick={increase}>Increase counter1</button>
            <button onClick={decrease}>Decrease counter2</button>
        </div>
    );
}