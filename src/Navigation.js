import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/HomeScreen/Home";
import Login from "./pages/LoginScreen/Login";
import Register from "./pages/RegisterScreen/Register";
import UserContext from "./UserContext";

function Navigation() {
	const { user, logout } = useContext(UserContext);
	return (
		<Router>
			<nav class="navigation">
				<div class="navigation-container">
					<Link to="/home" class="navigation-logo-link">
						<span class="navigation-logo">Artfilm</span>
					</Link>
					<div class="navigation-list-container" id="mobile-menu">
						<ul class="navigation-lists">
							{user ? (
								<>
									<p class="navigation-user-info">Current user: {user.email}</p>
									<button class="navigation-btn" onClick={logout}>
										Log out
									</button>
								</>
							) : (
								<>
									<Link to="/login" class="navigation-btn">
										Login
									</Link>
									<Link to="/register" class="navigation-btn">
										Register
									</Link>
								</>
							)}
						</ul>
					</div>
				</div>
			</nav>
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
