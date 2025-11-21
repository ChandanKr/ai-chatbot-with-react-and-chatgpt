import { Send } from "lucide-react";
import React from "react";

const MessageInput = () => {
  return (
    <div className={`border-t p-4`}>
      <div className="max-w-3xl mx-auto">
        <div
          className={`relative flex items-end gap-3 border rounded-2xl p-3 shadow-lg transition-all`}
        >
          <textarea
            className={`flex-1 resize-none bg-transparent border-0 outline-none max-h-35`}
            placeholder="Message Vidhur AI"
            rows={1}
            style={{
              height: "auto",
              minHeight: "24px",
            }}
          />
          <button className={`p-2.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed`}>
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
