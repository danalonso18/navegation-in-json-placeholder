import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./components/theme/Theme";
ThemeProvider

const rootElement = document.getElementById("root");

// New as of React v18.x
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);