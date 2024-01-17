import React, { useContext, createContext} from "react";


type SearchContextProps = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch debe usarse dentro de ThemeProvider');
    }
    return context;
};
