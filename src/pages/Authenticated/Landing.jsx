import React from "react";
import { useAuth } from "../../context/AuthContext";

function Landing() {
  const { authUser, isLoggedIn } = useAuth();
  return (
    <div>
      <h1>Hello {authUser.user.name}</h1>
    </div>
  );
}

export default Landing;
