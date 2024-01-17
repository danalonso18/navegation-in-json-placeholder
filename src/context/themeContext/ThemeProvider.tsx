import React, { ReactNode, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';

type ThemeProviderProps = {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() =>{
    const body = document.body;
    body.classList.toggle('darkMode', darkMode);
    body.classList.toggle('lightMode', !darkMode);
  },[darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
