import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/themeContext/ThemeProvider";
import { AuthProvider } from "./context/authContext/AuthProvider";
import { SearchProvider } from "./context/searchContext/SearchProvider";
import { AdminProvider } from "./context/adminContext/AdminProvider";


const rootElement = document.getElementById("root");

// New as of React v18.x
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <SearchProvider>
      <ThemeProvider>
        <AuthProvider>
          <AdminProvider>
          <App />
          </AdminProvider>
        </AuthProvider>
      </ThemeProvider>
    </SearchProvider>
  </StrictMode>
);
