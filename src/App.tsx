import "./styles.css";
import React from "react";
import { ThemeProvider, useTheme } from "./components/theme/Theme";
import { AuthProvider } from "./components/context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import RegistrationForm from "./components/register copy/Register";
import Navbar from "./components/header/navbar/Navbar";
import Home from "./components/header/home/Home";
import Cards from "./components/header/cards/Cards";

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider>
        <header>
          <div id="header">
            <Navbar />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/cards" element={<Cards />} />
            </Routes>
          </div>
        </header>
        <AuthProvider>
          <div>
            <div>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/registration" element={<RegistrationForm />} />
              </Routes>
            </div>
          </div>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
