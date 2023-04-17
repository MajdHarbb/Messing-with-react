import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
//check if user/token exists in local storage
const useAuthHook = () => {
  const { user, isLoggedIn } = useAuth();
  return (user && isLoggedIn || window.localStorage.getItem("user"));
};
//if user is authenticated allow outlet children, else nigavigate back to login page
const ProtectedRoutes = () => {
  const isAuth = useAuthHook();
  console.log("protected routes: ", isAuth)
  return isAuth ? (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoutes;
