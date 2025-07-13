// Toggle message 

import { useState } from "react";

export default function App() {
  return (
    <div style={{backgroundColor: "#dfe6e9", height: "100vh", paddingTop: 10}}>
      <ToggleMessage />
    </div>
    
  );
}

function ToggleMessage() {
  let [visible, setVisible] = useState(true);

  function toggle() {
    setVisible(!visible);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <div>
        {visible ? "The message is conditionally rendered" : null}
      </div>
    </div>
  );
}