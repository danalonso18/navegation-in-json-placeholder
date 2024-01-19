import React, { useState } from "react";
import { iAdmin, iChildren, iAdminContext } from "../../interfaces/interfaces";
import { AdminContext } from "./AdminContext";
import { useEffect } from "react";

export type FormValues = {
  name: string;
  secondName1: string;
  secondName2: string;
  userName: string;
  rol: string;
};

export const AdminProvider: React.FC<iChildren> = ({ children }) => {
  const [admins, setAdmins] = useState<iAdmin[]>([]);

  useEffect(() => {
    const storedAdmin = localStorage.getItem("admins");
    if (storedAdmin) {
        setAdmins(JSON.parse(storedAdmin));
    }
}, []);

  const onSubmit = (dat: FormValues) => {
    if (dat) {
      const newAdmin = dat;
      const updateAdmin = [...admins, newAdmin];

      setAdmins(updateAdmin);

      localStorage.setItem("admins", JSON.stringify(updateAdmin));
    }
  };

  const value: iAdminContext = {
    admins,
    onSubmit,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
