import React, { useEffect, useState, useRef } from "react";
import { useAppContext } from "../context/AppContext";
import Logo from "./Logo";
import Message from "./Message";
import { assets } from "../assets/assets";

const ChatBox = () => {
  const containerRef = useRef(null);

  const { selectedChat, theme } = useAppContext();
  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(false);

  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("text");
  const [isPublished, setIsPublished] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    // Handle prompt submission logic here
    setPrompt("");
  };

  useEffect(() => {
    if (selectedChat) {
      // Fetch messages for the selected chat
      setMessages(selectedChat.messages);
    }
  }, [selectedChat]);

  useEffect(() => {
    // Scroll to bottom when messages change
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div className="flex-1 flex flex-col m-4 justify-between md:m-4 xl:m-14 max-md:mt-10">
      {/* Chat Messages */}
      <div ref={containerRef} className="flex-1 overflow-y-scroll mb-4">
        {messages.length === 0 && (
          <div className="flex flex-col items-center gap-2 text-primary justify-center h-full mt-10">
            {/* Custom Logo */}
            <Logo />
            <p className="mt-4 text-3xl sm:text-4xl text-center text-gray-400 dark:text-white">
              Ask me anything!
            </p>
          </div>
        )}
        {messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}

        {/* Three dot Animation */}
        {loading && (
          <div className="loader flex items-center my-4 gap-2">
            <div className="w-2.5 h-2.5 bg-gray-500 dark:bg-gray-200 rounded-full animate-bounce"></div>
            <div className="w-2.5 h-2.5 bg-gray-500 dark:bg-gray-200 rounded-full animate-bounce"></div>
            <div className="w-2.5 h-2.5 bg-gray-500 dark:bg-gray-200 rounded-full animate-bounce"></div>
          </div>
        )}
      </div>

      {mode === "image" && (
        <div className="w-full max-w-2xl mx-auto mb-3 px-2">
          <label className="flex justify-center items-center gap-2 cursor-pointer text-sm text-gray-500 dark:text-gray-400">
            <input
              type="checkbox"
              className="cursor-pointer accent-[#A456F7] w-4 h-4"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
            />
            <span className="text-xs">
              Publish Generated Images to Community
            </span>
          </label>
        </div>
      )}

      {/* Prompt Input Box */}
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-4 p-3 pl-4 mx-auto w-full max-w-2xl
          border border-gray-500/30 dark:border-gray-500/30 rounded-full
          bg-primary/20 dark:bg-[#583C79]/20
          transition-all duration-300
          focus-within:border-1 focus-within:border-[#A456F7]
          focus-within:shadow-[0_0_12px_2px_rgba(164,86,247,0.35)]
          backdrop-blur-lg"
      >
        <select
          onChange={(e) => setMode(e.target.value)}
          value={mode}
          className="cursor-pointer text-sm pl-3 pr-2 outline-none"
        >
          <option className="text-gray-700 dark:text-purple-900" value="text">
            Text
          </option>
          <option className="text-gray-700 dark:text-purple-900" value="image">
            Image
          </option>
        </select>

        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="flex-1 text-sm w-full outline-none"
          placeholder="Type your message..."
          required
        />

        <button disabled={loading}>
          <img
            src={loading ? assets.stop_icon : assets.send_icon}
            className="w-8 cursor-pointer"
            alt=""
          />
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
