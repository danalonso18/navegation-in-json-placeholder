import { useEffect, useState } from "react";
import { iChildren } from "../../interfaces/Children.interface";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider: React.FC<iChildren> = ({ children }) => {
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