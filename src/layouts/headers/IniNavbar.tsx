import "../../styles/navbar.css"
import ToggleButton from "../../components/Button/Button";

const IniNavbar: React.FC = () => {

    return (
        <header id="navbar">
            <nav>
                <h1 id="logo">JSON Placeholder</h1>
                <ul>
                    <li id="link"><ToggleButton /></li>
                </ul>
            </nav>
        </header>
    );
}

export default IniNavbar;