import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/themeContext/ThemeProvider";
import { AuthProvider } from "./context/authContext/AuthProvider";
import { SearchProvider } from "./context/searchContext/SearchProvider";
import { AdminProvider } from "./context/adminContext/AdminProvider";
import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");

// New as of React v18.x
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <AdminProvider>
        <SearchProvider>
          <ThemeProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </ThemeProvider>
        </SearchProvider>
      </AdminProvider>
    </Provider>
  </StrictMode>
);
