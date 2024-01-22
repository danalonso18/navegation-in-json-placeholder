import {createContext, useContext } from 'react';
import { iAuthContextProps } from '../../interfaces/AuthContext.interface';

export const AuthContext = createContext<iAuthContextProps | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro AuthProvider');
  }
  return context;
};
