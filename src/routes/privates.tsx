import { useAuthContext } from "../context/authContext/AuthContext";
import { Outlet } from "react-router-dom";
import Alert from "../components/Alert";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return (
      <Alert title={"Para acceder tienes que loguearte"}/>
    );
  }
  return <Outlet />;
};
export default PrivateRoute;
