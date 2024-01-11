import { Outlet } from "react-router-dom";
import IniNavbar from "../headers/IniNavbar";

export const FirstAppLayout = () => {
  return (
    <main>
      <IniNavbar />
      <Outlet />
    </main>
  );
};
