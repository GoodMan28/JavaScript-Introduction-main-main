import { useState } from "react";
import "./App.css";
// Toggle a light bulb on or off
export default function App() {
  return (
    <>
      <LightBulb />
    </>
  );
}

// In this component we will have 2 seperarte components
function LightBulb() {
  let [isBulbOn, setBulbOn] = useState(true);

  return (
    <>
      <BulbState isBulbOn={isBulbOn} />
      <ToggleBulbstate setBulbOn={setBulbOn} />
    </>
  );
}

function BulbState({ isBulbOn }) {
  // let [isBulbOn, setBulbOn] = useState(true);  Lifting the state to LCA

  return (
    <>
      <div>{isBulbOn ? "Bulb On" : "Bulb Off"}</div>
    </>
  );
}

function ToggleBulbstate({ setBulbOn }) {
  // Problem: here we are not having the setBulbOn function so we need to LIFT the state from these both components
  // to the LCA of both i.e. LightBulb and pass the state as props to both the kids (BulbState, ToggleBulbstate)

  // since the state variable was not in the props hence we used a function approach
  function toggle() {
    setBulbOn((currentState) => !currentState);
  }

  return (
    <>
      <button onClick={toggle}>Toggle</button>
    </>
  );
}

// Suppose we have our state defined at the highest level component
// And the lowest descendents need that state and functions. So we need to pass those as a props to subsequent childs
// This makes the code less optimal and maintainence very difficult

// This process is called prop drilling
// To overcome this we will use the concept of Context Ap
