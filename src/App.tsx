import "./styles.css";
import React from "react";
import { ThemeProvider } from "./components/theme/Theme";
import { AuthProvider } from "./components/context/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import RegistrationForm from "./pages/Register";
import Home from "./pages/Home";
import Cards from "./components/cards/Cards";
import { FirstAppLayout } from "./layouts/AppLayout/FirstAppLayout";
import { AppLayout } from "./layouts/AppLayout/AppLayout";
import { SearchProvider } from "./components/searchContext/SearchContext";

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <SearchProvider>
      <ThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<FirstAppLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="registration" element={<RegistrationForm />} />
              <Route path="*" element={<Navigate to="/login"/>}></Route>
            </Route>

            <Route path="auth/*" element={<AppLayout />}>
              <Route path="home" element={<Home />} />
              <Route path="cards" element={<Cards />} />
              <Route path="*" element={<Navigate to="/auth/home"/>}></Route>
            </Route>
          </Routes>
        </AuthProvider>
      </ThemeProvider>
    </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
