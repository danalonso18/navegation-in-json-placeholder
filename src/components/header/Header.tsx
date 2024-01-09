import "./header.css"
import { ThemeProvider } from "../theme/Theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Cards from "./cards/Cards";


export default function Header() {
    return (
        <ThemeProvider>
            <header>
                <div id="header">
                    <Router>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/card" element={<Cards />} />
                        </Routes>
                    </Router>
                </div>
            </header>
        </ThemeProvider>
    );
}

