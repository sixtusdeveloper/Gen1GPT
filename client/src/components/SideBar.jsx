import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import { Trash2, Search } from "lucide-react";

const SideBar = () => {
  const { user, chats, selectedChat, theme, setTheme } = useAppContext();
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col h-screen min-w-72 p-4 dark:bg-gradient-to-b from-[#24224]/30 to-[#000000]/30 border-r border-[#80609F]/20 backdrop-blur-3xl translate-all duration-500 max-md:absolute left-0 z-1">
      {/* Logo */}
      <img
        src={theme === "dark" ? assets.logo_full : assets.logo_full_dark}
        alt="Logo"
        className="w-full max-w-48"
      />

      {/* New Chat Button */}
      <button className="flex cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out items-center justify-center bg-gradient-to-r from-[#A456F7] to-[#3D81F6] text-sm text-white font-semibold py-3 px-4 rounded-md mt-10 mb-2 w-full gap-2">
        {/* Professional SVG plus icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <line
            x1="12"
            y1="5"
            x2="12"
            y2="19"
            stroke="currentColor"
            strokeLinecap="round"
          />
          <line
            x1="5"
            y1="12"
            x2="19"
            y2="12"
            stroke="currentColor"
            strokeLinecap="round"
          />
        </svg>
        <span>New Chat</span>
      </button>

      {/* Search Conversations */}
      <div className="flex items-center gap-2 p-3 border border-gray-400/40 dark:border-white/30 rounded-md mt-4 transition-all duration-300 focus-within:border-2 focus-within:border-[#A456F7] focus-within:shadow-lg">
        {/* Lucide Search icon */}
        <Search
          size={16}
          className="text-gray-400 dark:text-white/60"
          strokeWidth={2}
        />
        <input
          type="text"
          placeholder="Search Conversations"
          className="text-xs placeholder:text-gray-400 bg-transparent outline-none flex-1 transition-all duration-300 focus:border-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Recent Chats */}
      {chats.length > 0 && (
        <p className="mt-2 text-sm font-semibold text-gray-800 dark:text-white">
          Recent Chats
        </p>
      )}

      <div className="flex-1 text-sm overflow-y-auto mt-4 space-y-3 scrollbar-thin scrollbar-thumb-[#A456F7]/60 scrollbar-track-gray-200 dark:scrollbar-thumb-[#80609F] dark:scrollbar-track-[#24224]/30">
        {chats
          .filter((chat) =>
            chat.messages[0]
              ? chat.messages[0]?.content
                  .toLowerCase()
                  .includes(search.toLowerCase())
              : chat.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((chat) => (
            <div
              key={chat._id}
              className="flex justify-between cursor-pointer group p-2 px-4 border rounded-md dark:bg-[#57317C]/10 border-gray-400/40 dark:border-white/30"
            >
              <div>
                <p
                  className={`text-sm py-1 truncate w-full font-medium ${
                    selectedChat?._id === chat._id
                      ? "text-[#A456F7]"
                      : "text-gray-800 dark:text-white"
                  }`}
                >
                  {chat.messages.length > 0
                    ? chat.messages[0]?.content.slice(0, 34) + "..."
                    : chat.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-[#B1A6C0]">
                  {chat.updatedAt}
                </p>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
                {/* Lucide Trash2 bin icon */}
                <Trash2
                  size={18}
                  className="text-gray-400 hover:text-red-500 cursor-pointer"
                  strokeWidth={2}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideBar;
