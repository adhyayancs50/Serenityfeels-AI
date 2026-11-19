// ShowTypewriterContext.js
import React, { createContext, useState, useContext } from 'react';

const ShowTypewriterContext = createContext();

export const ShowTypewriterProvider = ({ children }) => {
  const [showTypewriter, setShowTypewriter] = useState(false);
  return (
    <ShowTypewriterContext.Provider value={{ showTypewriter, setShowTypewriter }}>
      {children}
    </ShowTypewriterContext.Provider>
  );
};

export const useShowTypewriter = () => useContext(ShowTypewriterContext);
