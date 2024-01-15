import "./styles.css";
import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import RegistrationForm from "./pages/auth/Register";
import Home from "./pages/app/Home";
import Cards from "./pages/app/Cards";
import { FirstAppLayout } from "./layouts/AppLayout/FirstAppLayout";
import { AppLayout } from "./layouts/AppLayout/AppLayout";
import PrivateRoute from "./routes/privates";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<FirstAppLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<RegistrationForm />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="app" element={<AppLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="cards" element={<Cards />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
