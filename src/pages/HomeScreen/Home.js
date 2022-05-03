import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const login = async () => {
  return {
    id: 4,
    username: "red",
    email: "red@red.mn",
  };
};

function Home() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Home;
