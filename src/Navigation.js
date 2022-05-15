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
			<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
				<div class="container flex flex-wrap justify-between items-center mx-auto">
					<Link to="/home" class="flex items-center">
						<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
							Artfilm
						</span>
					</Link>
					<div class="hidden w-full md:block md:w-auto" id="mobile-menu">
						<ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
							{user ? (
								<>
									<p class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 md:p-0 dark:text-gray-400 dark:border-gray-700">
										Current user: {user.email}
									</p>
									<button
										class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
										onClick={logout}
									>
										Log out
									</button>
								</>
							) : (
								<>
									<Link
										to="/login"
										class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
									>
										Login
									</Link>
									<Link
										to="/register"
										class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
									>
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
