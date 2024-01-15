import { useAuthContext } from "../context/authContext/AuthContext";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return (
      <div id="alertContainer">
        <h1 id="title">¡Alerta!</h1>
        <h3 id="text">Para acceder tienes que logearte</h3>
        <button id="bttonAlert"><Link id="bttonAlert" to="/login">Aceptar</Link></button>
      </div>
    );
  }
  return <Outlet />;
};
export default PrivateRoute;
