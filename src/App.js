import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./pages/HomeScreen/Home";
import Login from "./pages/LoginScreen/Login";
import Register from "./pages/RegisterScreen/Register";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
