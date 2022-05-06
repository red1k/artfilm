import React from "react";

function Home({ currentUser }) {
  return (
    <div>
      <h1>Home</h1>
      <h3>Welcome: {currentUser}</h3>
    </div>
  );
}

export default Home;
