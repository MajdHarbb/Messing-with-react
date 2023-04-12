import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
//check if token exists in local storage
const useAuthHook = () => {
  const { authUser, isLoggedIn } = useAuth();
  return authUser && isLoggedIn;
};
//if user is authenticated allow outlet children, else nigavigate back to login page
const ProtectedRoutes = () => {
  const isAuth = useAuthHook();
  return isAuth ? (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
