import React from "react";
import { Link } from "react-router-dom"
import "./navbar.css"
import ToggleButton from "../../button/Button";

const Navbar: React.FC = () => {

    return (
        <div id="navbar">
            <nav>
                <h1 id="logo">JSON Placeholder</h1>
                <div id="divSearch">
                    <form role="search">
                        <input type="search" id="search" placeholder="Busqueda" />
                        <button type="submit" id="btnSearch">Search</button>
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