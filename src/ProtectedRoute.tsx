import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useContext(AuthContext);

  return auth?.isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
