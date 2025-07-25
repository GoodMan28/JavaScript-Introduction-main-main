import { useState } from 'react'
import './App.css'

// custom hook: basically a function that returns the state and updation function based on the need
// it contains another hook inside it 
function useCounter() {
  let [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  // returning based on our needs
  return {
    count, increase
  }
}

// the Counter component that uses the useCounter hook
function Counter() {
  let {count, increase} = useCounter();

  return (
    <div>
      <button onClick={increase}>Increase {count}</button>
    </div>
  );
}

function App() {
  
  return (
    <>
      <Counter />
      <Counter />
      <Counter />
    </>
  );

}

export default App
