import React, { useState } from "react";
import { iAdmin, iChildren, iAdminContext } from "../../interfaces/interfaces";
import { AdminContext } from "./AdminContext";

export type FormValues = {
  name: string;
  secondName1: string;
  secondName2: string;
  userName: string;
  rol: string;
};

export const AdminProvider: React.FC<iChildren> = ({ children }) => {
  const [admin, setAdmin] = useState<iAdmin[]>(() => {
    const storedAdmin = localStorage.getItem("admin");
    return storedAdmin ? JSON.parse(storedAdmin) : [];
  });
  const [roles, setRoles] = useState<iAdmin[]>([]);
  const [admins, setAdmins] = useState<iAdmin[]>([]);

  const onSubmit = (dat: FormValues) => {
    if (dat) {
      const newAdmin = dat;
      const updateAdmin = [...admins, newAdmin];

      setAdmins(updateAdmin);
      setRoles(updateAdmin);

      localStorage.setItem("admins", JSON.stringify(updateAdmin));
    }
  };

  const value: iAdminContext = {
    roles,
    admin,
    onSubmit,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
