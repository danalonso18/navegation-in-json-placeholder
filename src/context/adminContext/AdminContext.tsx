import { createContext, useContext } from "react";
import { iAdminContext } from "../../interfaces/interfaces";


export const AdminContext = createContext<iAdminContext | undefined>(undefined);

export const useAdminContext = () => {
    const context = useContext(AdminContext);
    if (!context) {
      throw new Error("useAdmin debe usarse dentro AdminProvider");
    }
    return context;
  };