import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeTheme = () => {
      try {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        let initialDarkMode = false;
        
        if (savedTheme === 'dark') {
          initialDarkMode = true;
        } else if (savedTheme === 'light') {
          initialDarkMode = false;
        } else {
          initialDarkMode = prefersDark;
        }
        
        setDarkMode(initialDarkMode);
        applyTheme(initialDarkMode);
      } catch (error) {
        console.warn('Error initializing theme:', error);
        setDarkMode(false);
        applyTheme(false);
      } finally {
        setIsLoading(false);
      }
    };

    initializeTheme();
  }, []);

  const applyTheme = (isDark) => {
    try {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (error) {
      console.warn('Error applying theme:', error);
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    applyTheme(newDarkMode);
  };

  const contextValue = {
    darkMode,
    isLoading,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  
  return context;
};