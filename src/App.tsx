import "./styles.css"
import React from "react";
import { ThemeProvider, useTheme } from "./components/theme/Theme";
import Header from "./components/header/Header";

const App: React.FC = () => {

  return (
    <ThemeProvider>
      <div>
        <Header />
        <div>

        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;