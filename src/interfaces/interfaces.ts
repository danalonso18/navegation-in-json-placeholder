import React,{ReactNode} from "react";

export interface iPost {
    userId:number;
    id: number;
    title: string;
    body: string;
}

export interface iCards {
    posts: iPost[];
}

export interface iTablaProps {
    posts: iPost[];
}

export interface iUser {
    username: string;
    password: string;
}

export interface iAuthContextProps {
    isAuthenticated: boolean;
    login: (username: string, password: string) => void;
    logout: ()=>void
    users: iUser[];
    loginError: string | null;
}

export interface iChildren {
    children: ReactNode;
}