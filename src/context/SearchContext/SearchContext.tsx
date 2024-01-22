import { createContext, useContext } from "react";
import { iSearchContextProps } from "../../interfaces/SearchContext.interface";

export const SearchContext = createContext<iSearchContextProps | undefined>(undefined);

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch debe usarse dentro de SearchProvider');
    }
    return context;
};