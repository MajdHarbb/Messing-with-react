import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../helpers/api/api";

function Landing() {
  const { state } = useAuth();
  const fetchUserTodos = async () => {
    try {
      const res = await api.userTodos();
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUserTodos();
  }, []);

  return (
    <div>
      <h1>Hello {state.user.first_name + " " + state.user.last_name}</h1>
    </div>
  );
}

export default Landing;
