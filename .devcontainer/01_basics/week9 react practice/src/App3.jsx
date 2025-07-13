// Also try conditonally not rendering anything in every five seconds

// We have cleared the counter clock when the counterVisible is false using the cleanup process of useEffect
// When the Counter component is unmounted then we clear the interval
import './App.css'
import { useEffect, useState } from "react"

export default function App() {
    // to properly conditionally render the components we will use the "counterVisible" variable in the state
    let [counterVisible, setcounterVisible] = useState(true);
    let [count, setCount] = useState(0); // so that the count is saved after each mounting
    
    useEffect(function() {
        // This logic is called when the component "Mounts" that means that the conditonal variable is True
        let interval1 = setInterval(function () {
            console.log("CR state toggled");
            setcounterVisible((counterVisible) => {
                return !counterVisible
            })
        }, 5000)
        console.log("App component mount"); // this will be called only once
        
        // In useEffect anything is returned when the component is Unmounted
        // However this is the parent component and will never be unmounted since it unmounts 
        return () => {
            console.log("CR component unmount");
            clearInterval(interval1);
        }
    }, [])
    return (
        <div>
            {counterVisible ? <Counter count={count} setCount={setCount}></Counter> : null}
        </div>
    );
}

function Counter(props) {
    let count = props.count;
    useEffect(function () {
        // this will create a clock only for the first time
        let interval2 = setInterval(function () {
            console.log("Counter re-render");
            props.setCount(function (count) {
                return count + 1;
            })
        }, 1000);
        console.log("Counter component mount");
        return () => {
            console.log("Counter component unmount");
            // when the component is destroyed we need to also incr the count since it will bee started with the old value
            // props.setCount(count => count + 1)
            clearInterval(interval2);
        }
    }, [])
    return (
        <div>
            <h2>Counter</h2>
            <h1>{count}</h1>
        </div>
    );
}

// When the couter mounts again, then the count start from 0. Why?
// When the "counterVisible"  becomes false then the whole component is destroyed and the state is redefined from 0

// And then App component is never unmounted

// TO retain the value of count we need to lift the state of "count" to the "App" component