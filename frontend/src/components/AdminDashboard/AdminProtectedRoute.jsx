import React from "react";
import { Navigate } from "react-router-dom";

const AdminProtectedRoute = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminProtectedRoute;
