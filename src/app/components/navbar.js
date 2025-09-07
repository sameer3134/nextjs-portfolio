import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from './context/context';

export const Navigation = ({ activeSection, sectionsRef }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-xl bg-white/10 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/50 rounded-full px-8 py-4 shadow-2xl">
      <div className="flex items-center space-x-8">
        <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Portfolio
        </div>
        
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Skills', 'Work'].map((item, index) => (
            <button
              key={item}
              onClick={() => sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' })}
              className={`relative px-4 py-2 rounded-full transition-all ${darkMode ? "text-white": "text-gray-700"} duration-300 ${
                activeSection === index 
                  ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500' 
                  : 'hover:text-purple-400'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-black-400" />
          )}
        </button>
      </div>
    </nav>
  );
};