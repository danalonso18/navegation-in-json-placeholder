import { createContext, useContext } from "react";
import { iThemeContextProps } from "../../interfaces/ThemeContext.interface";


export const ThemeContext = createContext<iThemeContextProps | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
};