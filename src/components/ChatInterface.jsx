import React from "react";
import Sidebar from "./Sidebar";
import { PanelRightOpen, Fan, Sun } from "lucide-react";
import VidhurAILogo from "./VidhurAILogo";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

const ChatInterface = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      {/* Main Content  */}
      <div className={`flex-1 flex-col bg-gray-900`}>
        {/* Header  */}
        <div
          className={`flex items-center justify-between p-4 border-b bg-gray-950 border-gray-800`}
        >
          <div className="flex items-center gap-3">
            {/* Menu Toggle  */}
            <button className={`p-2 rounded-lg transition-all`}>
              <PanelRightOpen className="w-5 h-5 text-gray-300" />
            </button>

            {/* Vidhur AI Logo */}
            {/* <VidhurAILogo className="w-8 h-8" /> */}
            <Fan className="w-8 h-8 text-cyan-600" />

            {/* Vidhur AI Title  */}
            <h1 className={`text-lg font-semibold text-white`}>Vidhur AI</h1>
          </div>

          {/* Theme Toggle  */}
          <button className={`p-2 rounded-lg transition-all`}>
            {/* Conditional Rendering */}
            <Sun className="w-f h-5 text-gray-300" />
          </button>
        </div>

        <MessageList />

        <MessageInput />
      </div>
    </div>
  );
};

export default ChatInterface;
