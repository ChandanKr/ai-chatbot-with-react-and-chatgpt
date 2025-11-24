import React from "react";
import ChatInterface from "./components/ChatInterface";
import { AppProvider } from "./context/AppContext";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  // return <ChatInterface />;
  return (
    <ThemeProvider>
      <AppProvider>
        <ChatInterface />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
