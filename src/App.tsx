import React, { useState } from "react";
import "./App.css";
import MessageList from "./chat/MessageList";
import MessageInput from "./chat/MessageInput";

export interface Message {
  id: number;
  messageText: string;
}

function App() {
  const [message, setMessage] = useState<Message[]>([]);

  const handleSend = (text: string) => {
    const newMessage = { id: Date.now(), messageText: text };
    setMessage([...message, newMessage]);
  };

  return (
    <>
      <MessageList messages={message} />
      <MessageInput onSend={handleSend} />
    </>
  );
}

export default App;
