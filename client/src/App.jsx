import React from "react";
import SideBar from "./components/SideBar";
import Loading from "./pages/Loading";
import Login from "./pages/Login";
import Community from "./pages/Community";
import Credits from "./pages/Credits";
import ChatBox from "./components/ChatBox";
import Message from "./components/Message";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="dark:bg-gradient-to-b from-[#242124] to-[#000000] dark:text-white"></div>
      <div className="flex h-screen w-screen">
        <SideBar />
        <Routes>
          <Route path="/" element={<ChatBox />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/login" element={<Login />} />
          <Route path="/community" element={<Community />} />
          <Route path="/credits" element={<Credits />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
