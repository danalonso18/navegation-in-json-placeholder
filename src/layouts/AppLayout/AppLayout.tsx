import { Outlet } from "react-router-dom";
import Navbar from "../headers/Navbar";

export const AppLayout = () => {
  return (
    <main>
      <Navbar/>
      <Outlet />
    </main>
  );
};