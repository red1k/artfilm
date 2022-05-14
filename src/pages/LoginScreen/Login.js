import React, { useState, useContext } from "react";
import UserContext from "../../UserContext";

function Login() {
	const { user, login, logout } = useContext(UserContext);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<div>
			<h1>Login</h1>
			<input
				placeholder="e-mail"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<input
				placeholder="password"
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
			<button onClick={() => login(email, password)}>Login user</button>
			<h3>Current user</h3>
			{user?.email}
			<div>
				<button onClick={logout}>Log out</button>
			</div>
		</div>
	);
}

export default Login;
