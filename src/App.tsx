import "./styles.css"
import React from "react";
import { ThemeProvider, useTheme } from "./components/theme/Theme";
import Header from "./components/header/Header";
import Title from "./components/title/Title";

const App: React.FC = () => {

  return (
    <ThemeProvider>
      <div>
        <Header />
        <div>
          <Title />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;