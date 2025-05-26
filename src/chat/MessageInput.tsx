import React, { useState } from "react";

interface props {
  onSend: (test: string) => void;
}

const MessageInput: React.FC<props> = ({ onSend }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            placeholder="type your message..."
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">send</button>
        </form>
      </div>
    </>
  );
};

export default MessageInput;
