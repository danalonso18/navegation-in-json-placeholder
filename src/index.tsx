import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/themeContext/Theme";
import { AuthProvider } from "./context/authContext/AuthProvider";
import { SearchProvider } from "./context/searchContext/SearchContext";


const rootElement = document.getElementById("root");

// New as of React v18.x
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <SearchProvider>
      <ThemeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </SearchProvider>
  </StrictMode>
);
