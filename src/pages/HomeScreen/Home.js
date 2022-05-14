import React, { useContext } from "react";
import UserContext from "../../UserContext";

function Home() {
	const { user } = useContext(UserContext);
	return (
		<div>
			<h1>Home</h1>
			<h3>Welcome: {user?.email}</h3>
		</div>
	);
}

export default Home;
