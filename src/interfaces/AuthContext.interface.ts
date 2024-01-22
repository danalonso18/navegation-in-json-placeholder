export interface iUser {
    username: string;
    password: string;
}

export interface iAuthContextProps {
    isAuthenticated: boolean;
    login: (username: string, password: string) => void;
    users: iUser[];
    loginError: string | null;
    logout: () => void;
}

