import { Link} from "react-router-dom";
import "../styles/alert.css"

const Alert = ({title=""}) => {

  return  (
    <div id="alertContainer">
      <h1 id="title">¡Alerta!</h1>
      <h3 id="text">{title}</h3>
      <button id="bttonAlert">
        <Link id="bttonAlert" to="/login">
          Aceptar
        </Link>
      </button>
    </div>
  );

};

export default Alert;
