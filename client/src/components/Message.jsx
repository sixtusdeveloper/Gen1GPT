import React from "react";
import { assets } from "../assets/assets";
import { marked } from "marked";
import moment from "moment";

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
  // Convert markdown to HTML
  const formattedContent = marked.parse(message.content);

  return (
    <div>
      {message.role === "user" ? (
        <div className="flex items-start justify-end my-4 gap-2">
          <div className="flex flex-col gap-2 p-2 px-4 bg-slate-50 dark:bg-[#57317C]/30 rounded-md max-w-2xl border border-[#e0e0e0] dark:border-[#4a3a5d]">
            {/* Render HTML content */}
            <div
              className="text-sm dark:text-primary"
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />
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
        <div className="inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-primary/20 dark:bg-[#57317C]/30 rounded-md border border-[#806097]/30 dark:border-[#4a3a5d]/30">
          {message.isImage ? (
            <img
              src={message.content}
              alt="User uploaded content"
              className="max-w-md mt-2 rounded-md"
            />
          ) : (
            <div
              className="text-sm dark:text-primary reset-tw"
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />
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
