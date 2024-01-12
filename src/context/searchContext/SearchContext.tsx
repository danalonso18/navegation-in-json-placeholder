import React, { ReactNode, useContext, createContext, useState } from "react";


type SearchContextProps = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

type SearchProviderProps = {
    children: ReactNode;
}

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {

    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch debe usarse dentro de ThemeProvider');
    }
    return context;
};
