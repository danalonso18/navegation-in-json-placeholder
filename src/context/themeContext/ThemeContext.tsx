import { createContext, useContext} from 'react';

type ThemeContextProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);


export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
};
