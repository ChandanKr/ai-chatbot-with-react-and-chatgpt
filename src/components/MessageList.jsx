import React from "react";
import VidhurAILogo from "./VidhurAILogo";
import { Fan, User } from "lucide-react";

const MessageList = () => {
  return (
    // Conditional Rendering
    // <div className="flex flex-col items-center justify-center h-full text-center px-4">
    //   {/* <VidhurAILogo className="w-16 h-16" /> */}
    //   <Fan className="w-16 h-16 text-cyan-600 mb-4" />
    //   <h2 className={`text-2xl font-semibold mb-2`}>
    //     How can I help you today?
    //   </h2>
    //   <p className={`max-w-md mb-4`}>
    //     I can help with writing, analysis, math, coding,and more. What would you
    //     like to work on?
    //   </p>
    // </div>

    <div className="flex-1 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Will use map method  */}
        <div className={`mb-6 flex`}>
          <div className={`flex gap-3 max-w-[85%]`}>
            {/* Avatar  */}
            <div className="w-8 h-8 flex-shrink-0">
              {/* Conditional rendering  */}
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                <User className="w-4 h-4 text-white" />
              </div>
              {/* Else  */}
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-md">
                <Fan className="w-4 h-4 text-white" />
              </div>
            </div>

            {/* Message  */}
            <div className={`px-4 py-3 rounded-2xl shadow-sm`}>
              <p className="text-[15px] leading-relaxed whitespace-pre-wrap wrap-break-word">
                Message Text
              </p>
              <p className={`text-[10px] mt-1.5`}>Date</p>
            </div>
          </div>
        </div>
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
      
    </div>
  );
};

export default MessageList;
