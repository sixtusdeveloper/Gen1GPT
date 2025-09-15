import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import Logo from "./Logo";
import Message from "./Message";

const ChatBox = () => {
  const { selectedChat, theme } = useAppContext();
  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (selectedChat) {
      // Fetch messages for the selected chat
      setMessages(selectedChat.messages);
    }
  }, [selectedChat]);

  return (
    <div className="flex-1 flex flex-col m-4 justify-between md:m-4 xl:m-14 max-md:mt-10">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-scroll mb-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center gap-2 text-primary justify-center h-full mt-10">
            {/* Custom Logo */}
            <Logo />
            <p className="mt-4 text-3xl sm:text-5xl text-center text-gray-400 dark:text-white">
              Ask me anything!
            </p>
          </div>
        )}
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
      </div>

      {/* Prompt Input Box */}
      <form action=""></form>
    </div>
  );
};

export default ChatBox;
