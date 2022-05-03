import React, { useState, useMemo } from "react";
import { UserContext } from "./pages/UserContext";
import Navigation from "./Navigation";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <div className="container">
      <UserContext.Provider value={providerValue}>
        <Navigation />
      </UserContext.Provider>
    </div>
  );
}

export default App;
