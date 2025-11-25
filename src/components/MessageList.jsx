import React, { useEffect, useRef } from "react";
import VidhurAILogo from "./VidhurAILogo";
import { Fan, User } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useApp } from "../context/AppContext";

const MessageList = () => {
  const { isDarkMode } = useTheme();
  const { getCurrentConversation, isLoading, apiKey } = useApp();
  const messagesEndRef = useRef(null);

  const currentConversation = getCurrentConversation();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentConversation?.messages, isLoading]);

  // Conditional Rendering
  if (!currentConversation || currentConversation.message.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        {/* <VidhurAILogo className="w-16 h-16" /> */}
        <Fan className="w-16 h-16 text-cyan-600 mb-4" />
        <h2
          className={`text-2xl font-semibold mb-2 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          How can I help you today?
        </h2>
        <p
          className={`max-w-md mb-4 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          I can help with writing, analysis, math, coding,and more. What would
          you like to work on?
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Will use map method  */}
        {currentConversation.messages.map((message) => (
          <div
            className={`mb-6 flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
            key={message.id}
          >
            <div
              className={`flex gap-3 max-w-[85%] ${
                message.sender === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Avatar  */}
              <div className="w-8 h-8 flex-shrink-0">
                {/* Conditional rendering  */}
                {message.sender === "user" ? (
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                    <User className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-md">
                    <Fan className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              {/* Message  */}
              <div
                className={`px-4 py-3 rounded-2xl shadow-sm ${
                  message.sender === "user"
                    ? isDarkMode
                      ? "bg-blue-600 text-white"
                      : "bg-blue-500 text-white"
                    : isDarkMode
                    ? "bg-gray-700 text-gray-100 border border-gray-600"
                    : "bg-white text-gray-900 border border-gray-200"
                } ${
                  message.sender === "user" ? "rounded-br-sm" : "rounded-bl-sm"
                }`}
              >
                <p className="text-[15px] leading-relaxed whitespace-pre-wrap wrap-break-word">
                  {message.text}
                </p>
                <p
                  className={`text-[10px] mt-1.5 ${
                    message.sender === "user"
                      ? "text-blue-100"
                      : isDarkMode
                      ? "text-gray-500"
                      : "text-gray-400"
                  }`}
                >
                  {new Date(message.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Conditional rendering loading */}
      <div className="mb-6 flex items-start">
        <div className="flex gap-3 max-w-[85%]">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-md">
            <Fan className="w-4 h-4 text-white" />
          </div>
          <div className={`px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm`}>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full animate-bounce`}></div>
              <div
                className={`w-2 h-2 rounded-full animate-bounce`}
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className={`w-2 h-2 rounded-full animate-bounce`}
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Anchor  */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
