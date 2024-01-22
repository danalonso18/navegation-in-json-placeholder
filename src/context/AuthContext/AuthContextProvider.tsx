import { useState } from "react";
import { iChildren } from "../../interfaces/Children.interface";
import { iAuthContextProps, iUser } from "../../interfaces/AuthContext.interface";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export const AuthProvider: React.FC<iChildren> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [users, setUsers] = useState<iUser[]>(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  // const navigate = useNavigate();
  const logout = () => {
    setAuthenticated(false);
    // navigate('/login');
  }

  const login = (username: string, password: string) => {
    const existingUser = users.find((user) => user.username === username)

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

  const value: iAuthContextProps = {
    isAuthenticated,
    loginError,
    login,
    logout,
    users
  };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
};

