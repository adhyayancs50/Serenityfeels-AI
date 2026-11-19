// context/DarkModeContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context
const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  // State to hold the current theme (false for light mode, true for dark mode)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to toggle the theme
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook to use the dark mode context
export const useDarkMode = () => useContext(DarkModeContext);
