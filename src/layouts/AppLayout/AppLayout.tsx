import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../headers/Navbar";

export const AppLayout: React.FC = () => {
  return (
    <main>
      <Navbar/>
      <Outlet />
    </main>
  );
};