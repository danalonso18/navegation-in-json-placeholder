import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./navbar.css"
import ToggleButton from "../../button/Button";
import { useSearch } from "../../searchContext/SearchContext";

const Navbar: React.FC = () => {
    const { search, setSearch } = useSearch();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
        console.log('Search', search);
    }

    return (
        <div id="navbar">
            <nav>
                <h1 id="logo">JSON Placeholder</h1>
                <div id="divSearch">
                    <form role="search">
                        <input type="text" id="search" placeholder="Busqueda" value={search} onChange={handleSearchChange} />
                    </form>
                </div>
                <ul>
                    <li><Link id="link" to="/">Home</Link></li>
                    <li><Link id="link" to="/cards">Cards</Link></li>
                    <li id="link"><ToggleButton /></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;