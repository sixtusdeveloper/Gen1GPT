import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import Markdown from "react-markdown";
import moment from "moment";
import Prism from "prismjs";

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

const Message = ({ message }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [message.content]);

  return (
    <div>
      {message.role === "user" ? (
        <div className="flex items-start justify-end my-4 gap-2">
          <div className="flex flex-col gap-2 p-2 px-4 bg-slate-50 dark:bg-[#57317C]/20 rounded-md max-w-2xl border border-[#e0e0e0]/20 dark:border-[#4a3a5d]/30">
            {/* Render markdown content */}
            <div className="text-sm dark:text-primary">
              <Markdown>{message.content}</Markdown>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formatTimestamp(message.timestamp)}
            </span>
          </div>

          {/* Avatar */}
          <img
            src={assets.user_icon}
            alt="User profile"
            className="w-8 h-8 border border-gray-200 dark:border-[#2a223a] rounded-full"
          />
        </div>
      ) : (
        <div className="inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-primary/20 dark:bg-[#57317C]/20 rounded-md border border-[#806097]/10 dark:border-[#4a3a5d]/30">
          {message.isImage ? (
            <img
              src={message.content}
              alt="User uploaded content"
              className="max-w-md mt-2 rounded-md"
            />
          ) : (
            <div className="text-sm dark:text-primary reset-tw">
              <Markdown>{message.content}</Markdown>
            </div>
          )}
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {formatTimestamp(message.timestamp)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Message;
