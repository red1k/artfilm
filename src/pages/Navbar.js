import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="home">
          <li>Artfilm</li>
        </Link>
        <Link to="login">
          <li>Login</li>
        </Link>
        <Link to="register">
          <li>Register</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
