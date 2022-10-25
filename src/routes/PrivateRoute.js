import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loading from "../components/shared/Loading";
import { AuthContext } from "../contexts/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to={"/login"} />;
};

export default PrivateRoute;
