import React, { useState, useContext } from "react";
import UserContext from "../../UserContext";

function Login() {
	const { login } = useContext(UserContext);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<div>
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
		</div>
	);
}

export default Login;
