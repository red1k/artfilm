import { useState, useEffect, createContext } from "react";
import {
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "./Firebase";

const UserContext = createContext();

export function UserContextProvider(props) {
	const [user, setUser] = useState(null);

	useEffect(() => {
		onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});
	}, []);

	const login = (email, password) => {
		try {
			signInWithEmailAndPassword(auth, email, password).catch((error) => {
				alert(error.message);
			});
		} catch (error) {
			console.error(error.message);
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
