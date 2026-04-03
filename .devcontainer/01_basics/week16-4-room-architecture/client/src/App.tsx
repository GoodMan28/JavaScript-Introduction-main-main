import { useState, useEffect, useRef } from 'react'
import './App.css'

interface Message {
  text: string;
  self: boolean;
}

type View = 'join' | 'chat';

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [history, setHistory] = useState<Message[]>([]);
  const [view, setView] = useState<View>('join');
  const [roomIdInput, setRoomIdInput] = useState('');
  const [joinedRoomId, setJoinedRoomId] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Establish WebSocket connection once
  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');
    setSocket(ws);

    ws.onmessage = (event) => {
      setHistory((prev) => [...prev, { text: event.data, self: false }]);
    };

    return () => ws.close();
  }, []);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleJoinRoom = () => {
    if (!roomIdInput.trim() || !socket) return;
    const id = roomIdInput.trim();

    // Send join message to server
    socket.send(JSON.stringify({
      type: 'join',
      payload: { roomId: id }
    }));

    setJoinedRoomId(id);
    setHistory([]);
    setView('chat');
  };

  const handleSendMessage = () => {
    if (!messageInput.trim() || !socket) return;

    // Send chat message to server
    socket.send(JSON.stringify({
      type: 'chat',
      payload: { message: messageInput.trim() }
    }));

    // Add to local history as a self message
    setHistory((prev) => [...prev, { text: messageInput.trim(), self: true }]);
    setMessageInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  // ─── JOIN SCREEN ────────────────────────────────────────────────────────────
  if (view === 'join') {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 w-full max-w-md shadow-2xl">
          <div className="mb-8 text-center">
            <div className="text-4xl mb-3">💬</div>
            <h1 className="text-3xl font-bold text-white">Room Chat</h1>
            <p className="text-gray-400 mt-2 text-sm">Enter a Room ID to join or create a room</p>
          </div>

          <div className="space-y-4">
            <input
              id="room-id-input"
              type="text"
              value={roomIdInput}
              onChange={(e) => setRoomIdInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleJoinRoom()}
              placeholder="e.g. A3#K or my-room-123"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
            />
            <button
              id="join-room-btn"
              onClick={handleJoinRoom}
              disabled={!roomIdInput.trim()}
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500 text-white font-semibold transition-all duration-200 active:scale-95"
            >
              Join Room →
            </button>
          </div>

          <p className="text-center text-gray-600 text-xs mt-6">
            If the Room ID doesn't exist, a new room will be created for you.
          </p>
        </div>
      </div>
    );
  }

  // ─── CHAT SCREEN ────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-900 border-b border-gray-800 shadow-md">
        <div className="flex items-center gap-3">
          <span className="text-2xl">💬</span>
          <h1 className="text-white font-bold text-lg">Room Chat</h1>
        </div>

        {/* Room info + Join different room */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">
            Room: <span className="text-indigo-400 font-mono font-semibold">{joinedRoomId}</span>
          </span>
          <button
            id="change-room-btn"
            onClick={() => setView('join')}
            className="text-sm px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 transition-all duration-200"
          >
            Change Room
          </button>
        </div>
      </header>

      {/* Messages Area */}
      <main className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
        {history.length === 0 && (
          <div className="text-center text-gray-600 mt-20 text-sm">
            No messages yet. Say something! 👋
          </div>
        )}
        {history.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.self ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm font-medium shadow-md break-words
                ${msg.self
                  ? 'bg-indigo-600 text-white rounded-br-sm'
                  : 'bg-gray-800 text-gray-100 rounded-bl-sm'
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Bar */}
      <footer className="px-4 py-4 bg-gray-900 border-t border-gray-800">
        <div className="flex gap-2 max-w-4xl mx-auto">
          <input
            id="message-input"
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="flex-[3] px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition"
          />
          <button
            id="send-btn"
            onClick={handleSendMessage}
            disabled={!messageInput.trim()}
            className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:text-gray-500 text-white font-semibold transition-all duration-200 active:scale-95"
          >
            Send ➤
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App
