import React from "react";
import { useAuth } from "../../context/AuthContext";

function Landing() {
  const { user, isLoggedIn } = useAuth();
  return (
    <div>
      <h1>Hello {user.first_name + " " +user.last_name}</h1>
    </div>
  );
}

export default Landing;
