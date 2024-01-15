import React,{useState} from "react";
import { iUser,iChildren, iAuthContextProps } from "../../interfaces/interfaces";
import { AuthContext } from "./AuthContext";

export const AuthProvider: React.FC<iChildren> = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(false);
    const [loginError, setLoginError] = useState<string | null>(null);
    const [users, setUsers] = useState<iUser[]>(() => {
      const storedUsers = localStorage.getItem("users");
      return storedUsers ? JSON.parse(storedUsers) : [];
    });
  
    const login = (username: string, password: string) => {
      const existingUser = users.find((user) => user.username === username);
      if (existingUser) {
        if (existingUser.password === password) {
          setAuthenticated(true);
          setLoginError(null);
        } else {
          setAuthenticated(false);
          setLoginError("Contraseña incorrecta");
        }
      } else {
        setAuthenticated(false);
        setLoginError("Usuario no encontrado. Por favor registrate");
      }
    };

    const logout = () => {
      setAuthenticated(false)
    }

  
    const value: iAuthContextProps = {
      isAuthenticated,
      loginError,
      login,
      logout,
      users,
    };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  };