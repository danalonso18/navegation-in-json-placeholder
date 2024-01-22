import { useAuthContext } from "../../context/AuthContext/AuthContext";
import { Outlet } from "react-router-dom";
import Alert from "../../pages/auth/Alert";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return (
      <Alert text="Para acceder tienes que loguearte." />
    );
  }
  return <Outlet />;
};
export default PrivateRoute;