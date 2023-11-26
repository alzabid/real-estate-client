/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Spinner from "../Components/Spinner";


const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
      return (
        <div className="h-[80vh] flex items-center justify-center">
          <Spinner/>
          {/* <span className="loading loading-bars loading-lg"></span>; */}
        </div>
      );
    }

    if (user) {
      return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;