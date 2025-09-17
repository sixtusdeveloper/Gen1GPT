import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate a loading delay (optional)
    const timeout = setTimeout(() => {
      navigate("/");
    }, 8000); // 8 seconds delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#531B81] to-[#29184B] backdrop-opacity-60 flex items-center justify-center h-screen w-screen text-white text-2xl">
      <div className="w-10 h-10 rounded-full border-4 border-t-transparent border-white animate-spin"></div>
    </div>
  );
};

export default Loading;
