import { useContext, createContext} from "react";
import { iSearchContextProps } from "../../interfaces/interfaces";


export const SearchContext = createContext<iSearchContextProps | undefined>(undefined);

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch debe usarse dentro de ThemeProvider');
    }
    return context;
};
