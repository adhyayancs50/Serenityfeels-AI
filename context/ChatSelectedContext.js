// context/ChatSelectedContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

// Create a context
const ChatSelectedContext = createContext();

export const ChatSelectedProvider = ({ children }) => {
  // State to hold the currently selected chat
  const [chatSelected, setChatSelected] = useState("ab736096-693e-465b-a0c5-92ca682a6ceb");
  const [paper, setPaper] = useState([]);

  // Use useRouter to access the Next.js router
  const router = useRouter();

  // Effect to update chatSelected based on the router.query.chat
  useEffect(() => {
    if (router.query.chat) {
      setChatSelected(router.query.chat);
    }
  }, [router.query.chat]);

  return (
    <ChatSelectedContext.Provider value={{ chatSelected, setChatSelected, paper, setPaper }}>
      {children}
    </ChatSelectedContext.Provider>
  );
};

// Custom hook to use the chatSelected context
export const useChatSelected = () => useContext(ChatSelectedContext);
