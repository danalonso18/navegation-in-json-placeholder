import {ReactNode} from "react";
import { FormValues } from "../context/adminContext/AdminProvider";

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

export interface iPropsTable {
    data: any[];
    columns: any[];
    sortTable: (orderBy:string)=>void
    headSort:Array<string>;
}

export interface iAdminContext {
    admins:iAdmin[];
    onSubmit:(data:FormValues)=>void
}

export interface iSearchContextProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    filtered: iPostApi[]|iAdmin[];
    // filteredAdmin:iAdmin[];
    // filteredPost:iPostApi[];
};