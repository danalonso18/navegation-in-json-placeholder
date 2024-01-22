import React from "react";
import { Link, useNavigate } from "react-router-dom"
import "../../styles/navbar.css"
import ToggleButton from "../../components/Button/Button";
import { useSearchContext } from "../../context/SearchContext/SearchContext";
import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { useSelector } from "react-redux";
// import { setSearchResults } from "../../redux/actions/searchActions";
// import posts from "../../api/posts";
// import { iPostTable } from "../../interfaces/Table.interfaces";
// import getPostApi from "../../api/posts";
// import { iPostApi } from "../../interfaces/Api.interface";

const Navbar: React.FC = () => {
    const { search, setSearch, filteredPosts } = useSearchContext();
    const { logout } = useAuthContext();
    const navigate = useNavigate();

    const searchResults = useSelector((state: any) => state.search.searchResults)
    // const dispatch = useDispatch();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        /* try {
            // No se va a ocupar en el archivo de searchContextProvider ya esta
            const apiData: iPostApi[] = await getPostApi();
            const allPosts: iPostTable[] = apiData.map(post => ({ id: post.id, userId: post.userId, title: post.title }));
            // filteredResults es lo mismo que filteredPost de searchContextProvider
            const filteredResults = allPosts.filter(post =>
                post.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            );

            console.log('filteredResults.length', filteredResults.length)
            dispatch(setSearchResults(filteredResults.length));
        } catch (error) {
            console.error('Error data:', error);
        } */
    }

    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
        <header id="navbar">
            <nav>
                <h1 id="logo">JSON Placeholder</h1>
                <div id="divSearch">
                    <form role="search">
                        {/* <div id="containerSearch"> */}
                        <input type="text" id="search" placeholder="Busqueda" value={search} onChange={handleSearchChange} />
                        <div id="notifications">{searchResults > 0 && <p id="pNotifications">{searchResults}</p>}</div>
                        {/* </div> */}
                    </form>
                </div>
                <ul>
                    <li><Link id="link" to="home">Home</Link></li>
                    <li><Link id="link" to="cards">Cards</Link></li>
                    <li id="link" onClick={handleLogout}>Cerrar sesión</li>
                    <li id="link"><ToggleButton /></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;