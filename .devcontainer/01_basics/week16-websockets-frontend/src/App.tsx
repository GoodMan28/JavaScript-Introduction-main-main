import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState(null);
  const inputRef = useRef(null);
  function sendMessage() {
    // here we need to have the websocket object defined in the global scope, hence we will make a state out of it
    // and then we will call useEffect to set the state variable to it
    const message = inputRef.current.value;
    socket!.send(message)
  }

  useEffect(() => {
    // hit the websocket server and then set the socket state variable to the websocket object
    let ws = new WebSocket("ws://localhost:8080");  
    setSocket(ws);

    // we are initializing the event listener from the message event from the websocket server in the useEffect 
    // because after the component mounts, the event listener you attached to the ws object remains alive and active in the browser's memory.
    ws.onmessage = (e) => {
      alert(e.data);
    }

    // cleanup function to close the websocket connection when the component unmounts (useful in strictmode where the component mounts and unmounts twice)
    return () => {
      ws.close();
    }
    }, []);


  return (
    <div>
      <input placeholder='Type here' ref={inputRef}></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
