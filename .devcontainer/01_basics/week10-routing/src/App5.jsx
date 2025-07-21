// In the previous approach, we stored the timer variable as a state
// Hence it cause an extra re-render 
// So we will use the useRef to that the value of timer is not changed after re-renders

import { useRef, useState } from "react";

export default function App() {
    // we rarely use bare variables as re-render causes their value to vanish
    let [count, setCount] = useState(0);
    let timerRef = useRef(null); // created a reference to the timer so that it does not re-render

    function startCounter() {
        if(timerRef.current !== null) return; // the timer is already started do nothing
        
        let interval = setInterval(() => {
           setCount(count => count + 1) ;
        }, 1000)

        timerRef.current = interval; // put the value of interval into the timer reference
    }

    function stopCounter() {
        if(timerRef.current == null) return; // timer already stopped do noting
        clearInterval(timerRef.current);
        timerRef.current = null;
        console.log(timerRef.current);
    }

    return (
        <>
            <div>{count}</div>
            <button onClick={startCounter}>Start</button>
            <button onClick={stopCounter}>Stop</button>
        </>
    );
}