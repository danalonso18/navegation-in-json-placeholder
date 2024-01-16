import {ReactNode} from "react";

export interface iPostApi {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface iPostCard {
    id: number;
    title: string;
    body: string;
}

export interface iCards {
    posts: iPostCard[];
}

export interface iPostTable {
    userId: number;
    id: number;
    title: string;
}

export interface iTablaProps {
    posts: iPostTable[];
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

export interface iAdmin{
    name:string;
    secondName1:string;
    secondName2:string;
    userName:string;
    rol:string
}