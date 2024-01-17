import React from "react";
import { useTheme } from "../../context/themeContext/ThemeContext";
import "../../styles/button.css"

const ToggleButton: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div id="divBtn">

      <button id="btnTheme" onClick={toggleDarkMode}>
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </div>
  );
};

export default ToggleButton;