import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserContextProvider } from './UserContext'

import Home from "./pages/HomeScreen/Home";
import Login from "./pages/LoginScreen/Login";
import Register from "./pages/RegisterScreen/Register";

import "./Navigation.css";

function Navigation() {
  return (
    <Router>
    <UserContextProvider>
      <nav>
        <ul className="nav-links">
          <Link to="home"><li>Artfilm</li></Link>
          <Link to="login"><li>Login</li></Link>
          <Link to="register"><li>Register</li></Link>
        </ul>
      </nav>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </UserContextProvider>
    </Router>
  );
}

export default Navigation;
