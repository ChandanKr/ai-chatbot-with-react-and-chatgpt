import React from "react";
import Sidebar from "./Sidebar";
import { PanelRightOpen, Fan, Sun, Moon } from "lucide-react";
import VidhurAILogo from "./VidhurAILogo";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { useTheme } from "../context/ThemeContext";
import { useApp } from "../context/AppContext";

const ChatInterface = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { activeConversationId, conversations, sidebarOpen, setSidebarOpen } =
    useApp();

  const currentConversation = conversations.find(
    (conv) => conv.id === activeConversationId
  );

  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Main Content  */}
      <div
        className={`flex-1 flex-col ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
      >
        {/* Header  */}
        <div
          className={`flex items-center justify-between p-4 border-b ${
            isDarkMode
              ? "bg-gray-950 border-gray-800"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="flex items-center gap-3">
            {/* Menu Toggle  */}
            <button
              className={`p-2 rounded-lg transition-all ${
                isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
              onClick={() => setSidebarOpen((prev) => !prev)}
              title={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              {sidebarOpen ? (
                <PanelRightOpen
                  className={`w-5 h-5 cursor-pointer ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              ) : (
                <PanelLeftOpen
                  className={`w-5 h-5 cursor-pointer ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                />
              )}
            </button>

            {/* Vidhur AI Logo */}
            {/* <VidhurAILogo className="w-8 h-8" /> */}
            <Fan className="w-8 h-8 text-cyan-600" />

            {/* Vidhur AI Title  */}
            <h1
              className={`text-lg font-semibold ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {currentConversation?.title || "Vidhur AI"}
            </h1>
          </div>

          {/* Theme Toggle  */}
          <button
            className={`p-2 rounded-lg transition-all cursor-pointer ${
              isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleTheme}
          >
            {/* Conditional Rendering */}
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-gray-300" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        <MessageList />

        <MessageInput />
      </div>
    </div>
  );
};

export default ChatInterface;
