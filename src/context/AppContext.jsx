import { createContext, useContext, useEffect, useState } from "react";
import { CONFIG } from "../config/config";

const AppContext = createContext();

// Custom hook to use app context

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
};

// App state Provider
export const AppProvider = ({ children }) => {
  // load conversation from local storage
  const [conversations, setConversations] = useState(() => {
    const saved = localStorage.getItem("conversations");
    return saved ? JSON.parse(saved) : [];
  });

  // load active conversation id from local storage
  const [activeConversationId, setActiveConversationId] = useState(() => {
    return localStorage.getItem("activeConversationId") || null;
  });

  const [isLoading, setIsLoading] = useState(false);

  // Load sidebar state from local storage
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const saved = localStorage.getItem("sidebarOpen");
    return saved ? JSON.parse(saved) : true;
  });

  // Load API key from loacal storage
  const [apiKey, setApiKey] = useState(() => {
    return localStorage.getItem("apiKey") || CONFIG.OPEN_API_KEY;
  });

  // save conversation to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("conversations", JSON.stringify(conversations));
  }, [conversations]);

  // save active conversation ID to local storage whenever they change
  useEffect(() => {
    if (activeConversationId) {
      localStorage.setItem(
        "activeConversationId",
        JSON.stringify(activeConversationId)
      );
    } else {
      localStorage.removeItem("activeConversationId");
    }
  }, [activeConversationId]);

  // save sidebar state to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);

  // save api key state to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("apiKey", apiKey);
  }, [apiKey]);

  // Create a new conversation
  const createConversation = () => {
    const newId = Date.now().toString();
    const newConversation = {
      id: newId,
      title: "New Chat",
      message: [],
      createdAt: new Date().toISOString(),
    };
    setConversations((prev) => [newConversation, ...prev]);
    setActiveConversationId(newId);
  };

  // delete a conversation
  const deleteConversation = (id) => {
    setConversations((prev) => prev.filter((conv) => conv.id !== id));

    if (activeConversationId === id) {
      setActiveConversationId(null);
    }
  };

  // clear all conversation
  const clearAllConversation = () => {
    setConversations([]);
    setActiveConversationId(null);
    localStorage.removeItem("conversations");
    localStorage.removeItem("activeConversationId");
  };

  // Add a message to a conversation
  const addMessage = (conversationId, message) => {
    setConversations((prev) =>
      prev.map((conv) => {
        conv.id === conversationId
          ? { ...conv, message: [...conv.message, message] }
          : conv;
      })
    );
  };

  // Update the conversation title
  const updateConversationTitle = (conversationId, title) => {
    setConversations((prev) =>
      prev.map((conv) => {
        conv.id === conversationId
          ? {
              ...conv,
              title: title.length > 30 ? title.substring(0, 30) + "..." : title,
            }
          : conv;
      })
    );
  };

  const getCurrentConversation = () => {
    return conversations.find((conv) => conv.id === activeConversationId);
  };

  const value = {
    conversations,
    activeConversationId,
    setActiveConversationId,
    isLoading,
    setIsLoading,
    sidebarOpen,
    setSidebarOpen,
    apiKey,
    setApiKey,
    createConversation,
    deleteConversation,
    clearAllConversation,
    addMessage,
    updateConversationTitle,
    getCurrentConversation,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
