import React, { useState } from "react";
import SideBar from "./components/SideBar";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Community from "./pages/Community";
import Credits from "./pages/Credits";
import ChatBox from "./components/ChatBox";
import Message from "./components/Message";
import { Route, Routes } from "react-router-dom";
import { Menu } from "lucide-react";
import "./assets/prism.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Sidebar open by default

  return (
    <>
      {/* Show menu icon only when sidebar is closed on mobile */}
      {!isMenuOpen && (
        <button
          className="fixed top-4  cursor-pointer left-4 z-20 p-2 rounded-xl shadow-sm bg-white dark:bg-[#242124] border border-gray-200 dark:border-[#2a223a] flex items-center justify-center md:hidden transition-all"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu
            size={20}
            className="text-[#A456F7] dark:text-[#A456F7]"
            strokeWidth={2.2}
          />
        </button>
      )}
      <div className="dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white">
        <div className="flex h-screen w-screen">
          <SideBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Routes>
            <Route path="/" element={<ChatBox />} />
            <Route path="/loading" element={<Loading />} />
            <Route path="/login" element={<Login />} />
            <Route path="/community" element={<Community />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/message" element={<Message />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
