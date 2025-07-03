import { useState } from "react"
import "./App.css"

export default function App() {
    let [count, setCount] = useState(0); // the useState() is a hook that gives us two variables, count and setCount. So we destructure it and write it in one line
    function onClickHandler() {
        setCount(count + 1); // updating the state variable
    }

    // returning the component after updating the 
    return(
    <div>
        <button id="btn" onClick={onClickHandler}>
            Counter {count}
        </button>
    </div>
    );
}

