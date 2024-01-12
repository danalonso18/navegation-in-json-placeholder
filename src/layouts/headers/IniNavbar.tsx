import "../../styles/navbar.css";
import ToggleButton from "../../components/Button/Button";
import { Link, Navigate } from "react-router-dom";

const IniNavbar: React.FC = () => {
  return (
    <header id="navbar">
      <nav>
        <h1 id="logo">JSON Placeholder</h1>
        <ul>
          <li><Link id="link" to="/login">Cerrar Sesion</Link></li>
          <li id="link"><ToggleButton /></li>
        </ul>
      </nav>
    </header>
  );
};

export default IniNavbar;
