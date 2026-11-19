// ChatLoadingContext.js

import React, { createContext, useState, useContext } from 'react';

const ChatLoadingContext = createContext();

export const ChatLoadingProvider = ({ children }) => {
  const [chatLoading, setChatLoading] = useState(false);

  return (
    <ChatLoadingContext.Provider value={{ chatLoading, setChatLoading }}>
      {children}
    </ChatLoadingContext.Provider>
  );
};

export const useChatLoading = () => useContext(ChatLoadingContext);
