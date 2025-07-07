import './App.css'
import { useEffect, useState } from "react"


export default function App() {
  return(
    <Counter></Counter>
  );
}


function Counter() {
  let [count, setCount] = useState(0);
  console.log("Counter");
  
// now we will set the timer only once so that it is not always set when re-renders happen so we will call set interval only once

// guarding the setInterval from re-renders. So we will only create an interval on mounting(i.e. when the component is called)

  useEffect(function () {
    // this will create a clock only for the first time
    setInterval(function () {
        setCount(function (count) {
            return count + 1; // here we need to set the value of count as a return value of a function. becuase "count" is not a dependency here. So we dont use it directly
            // unless we mention it in our dependency array
        })
    }, 1000);
    console.log("Mounted"); // this shows that the interval is setting up only once during mounting

  }, [])
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

// we have created a fresh counter using the useEffect hook in App2.jsx