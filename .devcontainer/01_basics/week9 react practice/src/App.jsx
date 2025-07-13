import './App.css'
import { useState } from "react"


export default function App() {
  return(
    <Counter></Counter>
  );
}


function Counter() {
  let [count, setCount] = useState(0);
  console.log("Counter is called");
  
  function onIncreaseHandler() {
    setCount(count+1);
  }
  function onDecreaseHandler() {
    setCount(count-1);
  }
  function onResetHandler() {
    setCount(0);
  }
  setInterval(onIncreaseHandler, 1000); // we see the flashes coming when the setInterval is there becasuse when the state change is happening after each interval
// the react is re-rendering it so it creates so much of the flashes
// In each of the re-rendering the set timeout is called again and again due to which the app goes crazy

// On every render, you’re calling setInterval(...) again.

// This creates a new interval every second, without clearing the previous one.

// The result: multiple overlapping intervals updating the state repeatedly = flashing + performance issues.
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncreaseHandler}>Increase Counter</button>
      <button onClick={onDecreaseHandler}>Decrease Counter</button>
      <button onClick={onResetHandler}>Reset Counter</button>
    </div>
  );
}

// we have created a fresh counter using the useEffect hook in App2.jsx using setInterval