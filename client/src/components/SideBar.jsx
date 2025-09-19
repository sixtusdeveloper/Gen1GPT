import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import Logo from "./Logo";
import { Trash2, Search, Gem, Moon, Sun, LogOut, X, Image } from "lucide-react";
import { assets } from "../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const THEME_KEY = "genonegpt-theme";

const formatTimestamp = (timestamp) => {
  const now = moment();
  const time = moment(timestamp);
  const diff = moment.duration(now.diff(time));
  let humanized = diff.humanize();
  // Replace "a" with "1" for singular units and ensure "ago" is appended
  humanized = humanized.replace(/\ba\b/g, "1");
  if (!humanized.endsWith("ago")) {
    humanized += " ago";
  }
  return humanized;
};

const SideBar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const { user, chats, setSelectedChat, selectedChat, theme, setTheme } =
    useAppContext();
  const [search, setSearch] = useState("");
  const [currentTheme, setCurrentTheme] = useState(theme || "light");

  // Sync theme with localStorage and html root
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) || "light";
    setCurrentTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem(THEME_KEY, currentTheme);
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    setTheme(currentTheme);
  }, [currentTheme, setTheme]);

  const handleThemeToggle = () => {
    setCurrentTheme(currentTheme === "dark" ? "light" : "dark");
  };

  // Theme text and icon logic
  const themeText = currentTheme === "dark" ? "Dark Mode" : "Light Mode";
  const ThemeIcon = currentTheme === "dark" ? Moon : Sun;

  return (
    <div
      className={`flex flex-col h-screen w-full md:w-75 lg:w-75 p-6 md:px-4 py-3 ${
        currentTheme === "dark" ? "bg-[#18181b]" : "bg-white"
      } dark:bg-[#18181b] border-r border-gray-200 dark:border-[#2a223a] backdrop-blur-3xl transition-all duration-500 max-md:absolute left-0 z-10 
      ${!isMenuOpen && "max-md:-translate-x-full"}`}
    >
      {/* Custom Logo */}
      <Logo theme={currentTheme} />

      {/* New Chat Button */}
      <button
        className="flex cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out items-center justify-center bg-gradient-to-r from-[#A456F7] to-[#3D81F6] text-sm text-white font-semibold py-3 px-4 rounded-md mt-6 mb-2 w-full gap-2"
        onClick={() => {
          navigate("/");
          setIsMenuOpen(false);
          setSelectedChat(null);
        }}
      >
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
      <div className="flex items-center gap-2 p-3 border border-gray-200 dark:border-gray-400/20 rounded-md mt-2 transition-all duration-300 focus-within:border-2 focus-within:border-[#A456F7] focus-within:shadow-[0_0_12px_2px_rgba(164,86,247,0.35)] focus-within:bg-white/60 dark:focus-within:bg-[#18181b]/60 backdrop-blur-md">
        {/* Lucide Search icon */}
        <Search
          size={16}
          className="text-gray-400 dark:text-white/60"
          strokeWidth={2}
        />
        <input
          type="text"
          placeholder="Search Conversations"
          className="text-xs placeholder:text-gray-400 bg-transparent outline-none flex-1 transition-all duration-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Recent Chats */}
      {chats.length > 0 && (
        <p className="mt-2 text-sm font-medium text-gray-800 dark:text-white">
          Recent Chats
        </p>
      )}

      <div className="flex-1 text-sm overflow-y-auto mt-2 space-y-3 scrollbar-thin scrollbar-thumb-[#A456F7]/60 scrollbar-track-gray-200 dark:scrollbar-thumb-[#80609F] dark:scrollbar-track-[#18181b]">
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
              onClick={() => {
                navigate("/");
                setIsMenuOpen(false);
                setSelectedChat(chat);
              }}
              key={chat._id}
              className="flex justify-between cursor-pointer group p-2 px-4 border rounded-md dark:bg-[#57317C]/10 border-gray-200 dark:border-[#2a223a]"
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
                    ? chat.messages[0]?.content.slice(0, 24) + "..."
                    : chat.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-[#B1A6C0]">
                  {formatTimestamp(chat.updatedAt)}
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

      {/* Community Images */}
      <div
        onClick={() => {
          navigate("/community");
          setIsMenuOpen(false);
        }}
        className="flex items-center gap-2 p-3 border border-gray-200 dark:border-[#2a223a] rounded-md cursor-pointer hover:scale-103 transition-all mt-2"
      >
        <Image
          size={20}
          className="text-gray-500 dark:text-white"
          strokeWidth={2}
        />
        <div className="flex flex-col text-sm">
          <p className="hover:text-[#A456F7] transition-colors duration-200 text-sm font-medium text-gray-800 dark:text-white">
            Community Images
          </p>
        </div>
      </div>

      {/* Credit Purchases Option */}
      <div
        onClick={() => {
          navigate("/credits");
          setIsMenuOpen(false);
        }}
        className="flex items-center gap-2 p-3 border border-gray-200 dark:border-[#2a223a] rounded-md cursor-pointer hover:scale-103 transition-all mt-2"
      >
        <Gem
          size={20}
          className="text-[#A456F7] dark:text-[#A456F7]"
          strokeWidth={2.5}
        />
        <div className="flex flex-col text-sm ">
          <p className=" text-sm font-medium text-gray-800 dark:text-white">
            Credits : {user?.credits}
          </p>
          <p className="text-xs text-gray-500 dark:text-[#B1A6C0]">
            Purchase credits to use Gen1GPT
          </p>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="flex justify-between items-center gap-2 p-3 border border-gray-200 dark:border-[#2a223a] rounded-md cursor-pointer hover:scale-103 transition-all mt-2">
        <ThemeIcon
          size={20}
          className={`transition-colors duration-200 ${
            currentTheme === "dark" ? "text-[#A456F7]" : "text-gray-500"
          }`}
          strokeWidth={2}
        />
        <div className="flex items-center gap-2">
          <p className="hover:text-[#A456F7] transition-colors duration-200 text-sm font-medium text-gray-800 dark:text-white">
            {themeText}
          </p>
        </div>
        <button
          aria-label={`Switch to ${
            currentTheme === "dark" ? "light" : "dark"
          } mode`}
          onClick={handleThemeToggle}
          className="relative cursor-pointer inline-flex items-center w-10 h-6 rounded-full transition-colors duration-200 focus:outline-none"
          style={{
            background: currentTheme === "dark" ? "#A456F7" : "#e5e7eb",
            border: "none",
          }}
        >
          <span
            className={`absolute left-1 top-1 w-4 h-4 rounded-full transition-transform duration-200 ${
              currentTheme === "dark" ? "translate-x-4 bg-white" : "bg-gray-700"
            }`}
          />
        </button>
      </div>

      {/* User Account */}
      <div className="flex items-center justify-between gap-2 p-2 border border-gray-200 dark:border-[#2a223a] rounded-md cursor-pointer group mt-2 bg-white/70 dark:bg-[#18181b]/80 shadow-sm transition-all duration-300">
        {/* Avatar */}
        <img
          src={assets.user_icon}
          alt="User profile"
          className="w-8 h-8 border border-gray-200 dark:border-[#2a223a] rounded-full"
        />

        {/* User Info */}
        <div className="flex-1 flex flex-col justify-center px-2 min-w-0">
          <p className="text-[14px] font-medium text-gray-800 dark:text-white truncate">
            {user ? user.name : "Login to your account"}
          </p>
          <p className="text-xs text-gray-500 dark:text-[#B1A6C0] truncate">
            {user ? user.email : "guest@example.com"}
          </p>
        </div>

        {/* Logout Icon */}
        {user && (
          <button
            title="Logout"
            className="flex items-center justify-center ml-2 p-1 rounded-full hover:bg-[#A456F7]/10 transition-colors"
            onClick={() => {
              /* add logout logic here */
            }}
          >
            <LogOut
              size={20}
              className="text-gray-400 hover:text-[#A456F7] transition-colors"
              strokeWidth={2}
            />
          </button>
        )}
      </div>

      {/* Close Sidebar Button for mobile */}
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-3 right-3 cursor-pointer p-2 rounded-xl shadow-sm bg-white dark:bg-[#242124] border border-gray-200 dark:border-[#2a223a] flex items-center justify-center md:hidden transition-all"
        aria-label="Close sidebar"
      >
        <X
          size={20}
          className="text-[#A456F7] dark:text-[#A456F7]"
          strokeWidth={2.2}
        />
      </button>
    </div>
  );
};

export default SideBar;
