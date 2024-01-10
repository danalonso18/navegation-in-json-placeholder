import "./header.css"
import { ThemeProvider } from "../theme/Theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Cards from "./cards/Cards";
import { SearchProvider } from "../searchContext/SearchContext";


export default function Header() {
    return (
        <ThemeProvider>
            <header>
                <div id="header">
                    <SearchProvider>
                        <Router>
                            <Navbar />
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/cards" element={<Cards />} />
                            </Routes>
                        </Router>
                    </SearchProvider>
                </div>
            </header>
        </ThemeProvider>
    );
}

