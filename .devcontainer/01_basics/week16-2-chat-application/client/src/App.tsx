import { useEffect, useRef, useState, KeyboardEvent } from "react"
type messageType = {
  message: string,
  s_no: number,
  recieved: boolean
}

export default function App() {
  const [history, setHistory] = useState<messageType[]>([]);
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);
    ws.onmessage = (e) => {
      setHistory((prev) => [...prev, { message: e.data, s_no: prev.length + 1, recieved: true }])
    }
    return () => {
      ws.close();
    }
  }, [])

  function sendMessage() {
    const message = inputRef.current?.value?.trim();
    if (!message) return;

    setHistory((prev) => [...prev, { message, s_no: prev.length + 1, recieved: false }]);
    if (inputRef.current) inputRef.current.value = "";

    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    }
  }

  function onInputKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="app-container">
      <h1>Chat Application</h1>
      <div className="chat-window">
        {history.length === 0 ? (
          <div className="message-empty">No messages yet</div>
        ) : (
          history.map((message) => (
            <div key={message.s_no} className={`message ${message.recieved ? "recieved" : "sent"}`}>
              {message.message}
            </div>
          ))
        )}
      </div>
      <div className="chat-input-row">
        <input
          placeholder="Type your message here"
          className="message-input"
          ref={inputRef}
          onKeyDown={onInputKeyDown}
        />
        <button className="send-button" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}