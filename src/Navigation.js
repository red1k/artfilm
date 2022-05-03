import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/HomeScreen/Home";
import Login from "./pages/LoginScreen/Login";
import Register from "./pages/RegisterScreen/Register";
import Navbar from "./pages/Navbar";

function Navigation() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
