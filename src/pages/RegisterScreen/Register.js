import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

function Register() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const register = async () => {
		try {
			const user = await createUserWithEmailAndPassword(auth, email, password);
			console.log(user);
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<div>
			<h1>Register</h1>
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
			<button onClick={register}>Register user</button>
		</div>
	);
}

export default Register;
