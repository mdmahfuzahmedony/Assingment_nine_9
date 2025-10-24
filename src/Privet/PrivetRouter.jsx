import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>; // অথবা spinner
  }

  if (!user) {
    return <Navigate to="/login" replace />; // login page এ redirect
  }

  return children;
};

export default PrivateRoute;
