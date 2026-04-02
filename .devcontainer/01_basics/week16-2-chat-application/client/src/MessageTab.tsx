interface MessageTabProps {
  messages: string[];
}

export default function MessageTab({ messages }: MessageTabProps) {
  return (
    <div className="message-tab">
      {messages.length === 0 ? (
        <div className="message-empty">No messages yet</div>
      ) : (
        messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))
      )}
    </div>
  );
}
