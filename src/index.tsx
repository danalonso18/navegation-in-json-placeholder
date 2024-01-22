import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext/AuthContextProvider";
import { SearchProvider } from "./context/SearchContext/SearchContextProvider";
import { ThemeProvider } from "./context/ThemeContext/ThemeContextProvider";
import { Provider } from "react-redux";
import store from "./redux/store";

const rootElement = document.getElementById("root");

// New as of React v18.x
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <SearchProvider>
        <ThemeProvider>
          <AuthProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AuthProvider>
        </ThemeProvider>
      </SearchProvider>
    </Provider>
  </StrictMode>
);