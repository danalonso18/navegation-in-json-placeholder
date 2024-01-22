import { iPostApi } from "./Api.interface";

export interface iSearchContextProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    filteredPosts: iPostApi[];
};

