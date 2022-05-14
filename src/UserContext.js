import { useState, useEffect, createContext } from "react";
import {
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserContextProvider(props) {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	const login = (email, password) => {
		try {
			signInWithEmailAndPassword(auth, email, password);
			navigate("/");
		} catch (error) {
			console.log(error.message);
		}
	};

	const logout = () => {
		signOut(auth);
	};

	const context = { user, login, logout };

	return (
		<UserContext.Provider value={context}>
			{props.children}
		</UserContext.Provider>
	);
}

export default UserContext;
