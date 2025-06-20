import React from "react";
import { Message } from "../app/types";
import SearchStages from "./SearchStages";

interface MessageAreaProps {
  messages: Message[];
}

const MessageArea = ({ messages }: MessageAreaProps) => {
  return (
    <div
      className="flex-grow overflow-y-auto bg-[#FCFCF8] border-b border-gray-100"
      style={{ minHeight: 0 }}
    >
      <div className="max-w-4xl mx-auto p-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isUser ? "justify-end" : "justify-start"
            } mb-5`}
          >
            <div className="flex flex-col max-w-md">
              {!message.isUser && message.searchInfo && (
                <SearchStages searchInfo={message.searchInfo} />
              )}
              <div
                className={`rounded-lg py-3 px-5 ${
                  message.isUser
                    ? "bg-[#5E507F] text-white rounded-br-none shadow-md"
                    : "bg-[#F3F3EE] text-gray-800 border border-gray-200 rounded-bl-none shadow-sm"
                }`}
              >
                {message.content || (
                  <span className="text-gray-400 text-xs italic">
                    Thinking...
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageArea;
