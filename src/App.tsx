import "./styles.css";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/auth/Login";
import RegistrationForm from "./pages/auth/Register";
import Home from "./pages/app/Home";
import Cards from "./pages/app/Cards";
import { FirstAppLayout } from "./layouts/AppLayout/FirstAppLayout";
import { AppLayout, AppLayoutAdm } from "./layouts/AppLayout/AppLayout";
import PrivateRoute from "./routes/privates";
import Alert from "./components/Alert";
import Admin from "./pages/Admin/Admin";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FirstAppLayout />}>
          <Route path="" element={<Login />}></Route>
        </Route>

        <Route path="/*" element={<FirstAppLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<RegistrationForm />} />
          <Route
            path="*"
            element={<Alert title={"La ruta no es correcta"} />}
          />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="app" element={<AppLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="cards" element={<Cards />} />
          </Route>
          <Route path="app" element={<AppLayoutAdm />}>
            <Route path="admin" element={<Admin />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
