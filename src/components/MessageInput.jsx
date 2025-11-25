import { Send } from "lucide-react";
import React, { use, useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useApp } from "../context/AppContext";
import { send } from "vite";

const MessageInput = () => {
  const { isDarkMode } = useTheme();
  const inputRef = useRef(null);
  const [inputText, setInputText] = useState("");

  const {
    activeConversationId,
    isLoading,
    setIsLoading,
    createConversation,
    addMessage,
    updateConversationTitle,
    getCurrentConversation,
  } = useApp();

  const handleMessage = (async = () => {
    if (!inputText.trim() || isLoading) return;

    let conversationId = activeConversationId;

    if (!conversationId) {
      conversationId = Date.now().toString();
      const title =
        inputText > 30 ? inputText.substring(0, 30) + "..." : inputText;

      createConversation();
      updateConversationTitle(conversationId, title);
    }

    const userMessage = {
      id: Date.now(),
      text: inputText,
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    addMessage(conversationId, userMessage);

    const currentConv = getCurrentConversation();

    if (!currentConv || currentConv.message.length === 0) {
      updateConversationTitle(conversationId, inputText);
    }

    setInputText("");
    setIsLoading(true);

    try {
      const currentMessages = getCurrentConversation()?.message || [];
      const messages = [
        ...currentMessages.map((msg) => ({
          role: msg.sender === "user" ? "user" : "assistant",
          content: msg.text,
        })),
        { role: "user", content: inputText },


        
      ];
    } catch (error) {
      console.error("Error send message", error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "An unexpected error occured, please try again",
        sender: "assistant",
        timestamp: new Date().toISOString(),
      };

      addMessage(conversationId, errorMessage);
    } finally {
      setIsLoading(false);
    }
  });

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
          <button
            className={`p-2.5 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
