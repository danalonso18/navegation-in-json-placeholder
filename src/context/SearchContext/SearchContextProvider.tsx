import { useEffect, useState } from "react";
import { SearchContext } from "./SearchContext";
import { iChildren } from "../../interfaces/Children.interface";
import { iPostApi } from "../../interfaces/Api.interface";
import getPostApi from "../../api/posts";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../../redux/actions/searchActions";


export const SearchProvider: React.FC<iChildren> = ({ children }) => {

    const [search, setSearch] = useState('');
    const [posts, setPosts] = useState<iPostApi[]>([]);
    const [ filteredPosts, setFilteredPosts] = useState<iPostApi[]>([])
    const dispatch = useDispatch();

    useEffect(() => {
        const data = async () => {
            try {
                const apiData: iPostApi[] = await getPostApi();
                setPosts(apiData);
            } catch (error) {
                console.error("Error data:", error);
            }
        }
        data();
    }, []);

    useEffect(() => {
        const newFilteredPosts = posts.filter((post) =>
        post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );
        setFilteredPosts(newFilteredPosts)
        console.log('filteredPosts', newFilteredPosts.length)
        
        dispatch(setSearchResults(newFilteredPosts.length));
    }, [search, posts]);

    return (
        <SearchContext.Provider value={{ search, setSearch, filteredPosts }}>
            {children}
        </SearchContext.Provider>
    );
}
