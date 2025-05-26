import React from "react";
import { Message } from "../App";

interface props {
  messages: Message[];
}

const MessageList: React.FC<props> = ({ messages }) => {
  return (
    <>
      {messages.map((msg) => (
        <div key={msg.id}> {msg.messageText} </div>
      ))}
    </>
  );
};

export default MessageList;
