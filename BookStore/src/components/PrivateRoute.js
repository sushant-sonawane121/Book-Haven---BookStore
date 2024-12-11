import React from "react";
import { Navigate } from "react-router";
import jwtDecode from "jwt-decode";

const PrivateRoute = ({ element, adminOnly = false }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Redirect to login if token doesn't exist
    return <Navigate to="/login" />;
  }

  try {
    const { isAdmin } = jwtDecode(token);

    // Restrict access if the route is admin-only and the user is not an admin
    if (adminOnly && !isAdmin) {
      return <Navigate to="/" />;
    }

    return element;
  } catch (error) {
    // Redirect to login if token is invalid
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
