import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../helpers/api/api";

//created context
const AuthContext = createContext();

//useAuth hook as an extention for context
export function useAuth() {
  return useContext(AuthContext);
}

//Provider
export function AuthProvider(props) {
  //define navigator
  const navigate = useNavigate();

  //user info states
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //global alert dialog states
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(false);
  const [message, setMessage] = useState(false);
  const [error, setError] = useState("Invalid Credentails");

  //global alert dialog functions
  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  //check if user exists on component mounting
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      setIsLoggedIn(true);
    }
  }, []);

  //state object to be used globally
  const state = {
    user: user,
    isLoggedIn: isLoggedIn,
    token: token,
    alertDialog: { title, message, isOpen, openDialog, closeDialog },
  };

  //functions list
  const helpers = {
    login: async (data) => {
      try {
        //fetch login api
        const res = await api.login(data);

        //set user state
        window.localStorage.setItem("user", JSON.stringify(res.data.user));
        window.localStorage.setItem("token", res.data.authorization.token);
        setIsLoggedIn(true);
        setUser(res.data.user);
        setToken(res.data.authorization.token);

        //go to home route
        navigate("/home");
      } catch (error) {
        console.log("error", error);
        //open alert Dialog with the correct information
        openDialog(true);
        setTitle(error.response.statusText);
        setMessage(error.response.data.message);
      }
    },

    logout: async () => {
      try {
        //fetch logout api and clear state
        const res = await api.logout();
        setUser(null);
        setToken(null);
        setIsLoggedIn(null);
        window.localStorage.clear();
        navigate("/");
      } catch (error) {
        console.log("err", error);
      }
    },
    test: () => {
      console.log("test");
    },
  };

  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    token,
    setToken,
    helpers,
    state,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
