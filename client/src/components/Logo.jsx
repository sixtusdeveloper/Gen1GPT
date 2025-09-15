import React from "react";

const Logo = ({ theme }) => (
  <div className="flex items-center mb-2">
    {/* Logo Icon */}
    <div className="relative flex items-center justify-center w-13 h-13 rounded-2xl bg-gradient-to-r from-[#A456F7] to-[#3D81F6] shadow-lg">
      <span className="font-extrabold text-white text-2xl flex items-baseline">
        G<span className="text-lg ml-0.5 align-super">1</span>
      </span>
      {/* "ai" label */}
      <span className="absolute left-1.5 bottom-1.5 text-[10px] font-medium text-white/90 tracking-wide">
        ai
      </span>
    </div>
    {/* Logo Text */}
    <div className="ml-2 flex flex-col justify-center">
      <h1 className="text-xl font-bold bg-gradient-to-r from-[#A456F7] to-[#3D81F6] bg-clip-text text-transparent dark:text-white tracking-wide">
        Gen1GPT
      </h1>
      <p className="text-xs font-medium bg-gradient-to-r from-[#A456F7] to-[#3D81F6] bg-clip-text text-transparent dark:text-purple-300 tracking-wide">
        Intelligent AI Assistant
      </p>
    </div>
  </div>
);

export default Logo;
