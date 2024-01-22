import "./styles/styles.css";
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/auth/Login";
import RegistrationForm from "./pages/auth/Register";
import Home from "./pages/app/Home";
import Cards from "./pages/app/Cards";
import { FirstAppLayout } from "./layouts/AppLayout/FirstAppLayout";
import { AppLayout } from "./layouts/AppLayout/AppLayout";
import Alert from "./pages/auth/Alert";
import PrivateRoute from "./components/utils/Private";

const App: React.FC = () => {
  return (
    <Routes>
        <Route path="" element={<Login />} />
      <Route path="/*" element={<FirstAppLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="*" element={<Alert text="La ruta no es correcta"/>} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="auth" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="cards" element={<Cards />} />
        </Route>
      </Route>
    </Routes>

  );
};

export default App;
