import { MessageSquare, Plus, Trash2, User } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div
      className={`w-64 transition-all duration-300 flex flex-col overflow-hidden bg-gray-950 text-white border-r border-gray-800`}
    >
      {/* New Chat Button */}
      <div className="p-3">
        <button
          className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-all`}
        >
          <Plus className="w-4 h-4" />
          <span className="text-sm font-medium">New Chat</span>
        </button>
      </div>

      {/* Chat Lists  */}
      <div className="flex-1 overflow-y-auto px-3">
        {/* Conditional rendering */}
        <div className={`text-center p-4 text-sm`}>No conversation yet</div>
        {/* Else  */}
        <div
          className={`group flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all mb-1`}
        >
          <MessageSquare className="w-4 h-4 flex-shirnk-0" />
          <span className="text-sm flex-1 truncate">Conversation title</span>
          <button
            className={`opacity-0 group-hover:opacity-100 p-1 rounded transition-all`}
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Footer  */}
      <div className={`p-3 border-t`}>
        {/* Clear All Chats  */}
        {/* Conditional Rendering  */}
        <button
          className={`w-full flex items-center gap-3 p-2 rounded-lg transition-all text-sm mb-2`}
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear All Chats</span>
        </button>

        {/* User Info  */}
        <div className={`flex items-center gap-3 p-2 rounded-lg mt-1`}>
          <User className="w-4 h-4" />
          <span className="text-sm">User</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
