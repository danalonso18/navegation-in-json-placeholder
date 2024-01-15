import { useAuthContext } from "../context/authContext/AuthContext";
import { Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuthContext();
  if(!isAuthenticated){
    return <Navigate to="/login" />
  }
  return <Outlet />
 
};
export default PrivateRoute