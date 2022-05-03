import React, { useContext } from "react";
import { UserContext } from "../UserContext";

function Login() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Login</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default Login;
