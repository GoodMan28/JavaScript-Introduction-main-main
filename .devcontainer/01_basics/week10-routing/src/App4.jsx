// In React, useRef is a hook that provides a way to create a reference to a value or a DOM element that persists across renders but does not trigger a re-render when the value changes.

import { useState } from "react"

// In App3.jsx we created a refernce to DOM
// In this file we will create a reference to a value

// Making a clock without useRef(i dont know how to use useRef for this)

export default function App() {
    let [count, setCount] = useState(0);
    let [timer, setTimer] = useState(0);

    // Here we dont see the flash because the startCounter is called only once
    function startCounter() {
        let value = setInterval(function () {
            setCount(count => count + 1)
        },800);
        
        setTimer(value);
        console.log("Clock is started");
        console.log(timer);
    }
    
    function stopCounter() {
        // clearing the state variable count
        console.log("Clock is stopped");
        clearTimeout(timer);
    }
    
    return (
        <>
            <div>{count}</div>
            <button onClick={startCounter} >Start</button>
            <button onClick={stopCounter}>Stop</button>
        </>
    );
}


// Problem with this code: There is a new re-render when the interval is started and the timer is set hence this extra one re-render is there







// -------------------------------------- THEORY ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    /*
    function stopCounter() {
        if(timer != -1) {
            clearInterval(timer);
            timer = -1;
        }
    }

    */
    // This wont work becuase at every re-render the timer is re-initialized to -1 so the interval is not cleared again
    // However if we click the stop button before the count reaches 1. then the counter could be stopped
    // Sol: We will need to keep the timer in a state