import React from "react";
import Navigation from "./Navigation";
import { UserContextProvider } from "./UserContext";

function App() {
	return (
		<UserContextProvider>
			<div>
				<Navigation />
			</div>
		</UserContextProvider>
	);
}

export default App;
