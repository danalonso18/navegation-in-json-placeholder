import { useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import "../../styles/navbar.css";
import ToggleButton from "../../components/Button/Button";
import { useSearch } from "../../context/searchContext/SearchContext";
import { useAuthContext } from "../../context/authContext/AuthContext";
interface iParam{
  searchs:number;
}

const Navbar: React.FC<iParam> = ({searchs}) => {
  const { search, setSearch } = useSearch();
  const {logout} = useAuthContext();
  const navigate = useNavigate();
  const searchResultsPost = useSelector((state: any) => state.search.searchResultsPost)
  const searchResultsAdm = useSelector((state: any) => state.search.searchResultsAdm)

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    console.log("Search", search);
  };

 const searchResul = ()=>{
  if('home'){
    return <div id="notifications">{searchResultsPost > 0 && <p id="pNotifications">{searchResultsPost}</p>}</div>
  }
  return <div id="notifications">{searchResultsAdm > 0 && <p id="pNotifications">{searchResultsAdm}</p>}</div>
 }

  return (
    <header id="navbar">
      <nav>
        <h1 id="logo">JSON Placeholder</h1>
        <div id="divSearch">
          <form role="search">
            <input
              type="text"
              id="search"
              placeholder="Busqueda"
              value={search}
              onChange={handleSearchChange}
            />
            <div id="notifications">{searchs > 0 && <p id="pNotifications">{searchs}</p>}</div>
          </form>
        </div>
        <ul>
          <li><Link id="link" to="home">Home</Link></li>
          <li><Link id="link" to="cards">Cards</Link></li>
          <li><Link id="link" to="admin">Admin</Link></li>
          <li id="link" onClick={handleLogout}>Cerrar Sesion</li>
          <li id="link"><ToggleButton /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
