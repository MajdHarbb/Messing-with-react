import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export function AuthProvider(props) {
  const [authUser, setAuthUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  //   const logged = localStorage.getItem("isLoggedIn");
  //   if (storedUser) {
  //     setAuthUser(JSON.parse(authUser));
  //     setIsLoggedIn(logged);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (authUser) {
  //     localStorage.setItem("user", JSON.stringify(authUser));
  //     localStorage.setItem("isLoggedIn", true);
  //     console.log("if")

  //   } else {
  //     localStorage.removeItem("user");
  //     localStorage.removeItem("isLoggedIn");
  //     console.log("else")
  //   }
  // }, [authUser]);
  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
