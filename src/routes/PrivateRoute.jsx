import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user && user?.email) {
    // If user logged In, give access the children page, otherwise navigate to the home page
    return children;
  }
  // load the page when if checks the current logged in user
  if (loading)
    return (
      <div className="flex flex-col justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  return <Navigate to="/auth/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
