import React from "react";
import { useThemeContext } from "../../context/ThemeContext/ThemeContext";
import "../../styles/button.css";

const ToggleButton: React.FC = () => {
  const { darkMode, toggleDarkMode } = useThemeContext();

  return (
    <div id="divBtn">

      <button id="btnTheme" onClick={toggleDarkMode}>
        {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
      </button>
    </div>
  );
};

export default ToggleButton;