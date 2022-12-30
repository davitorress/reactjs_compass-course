import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
	const [usersList, setUsersList] = useState([]);

	const addUserHandler = (uName, uAge) => {
		setUsersList((prevUsersList) => {
			return [...prevUsersList, { id: `user` + (prevUsersList.length + 1), name: uName, age: uAge }];
		});
	};

	return (
		<main>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} />
		</main>
	);
}

export default App;

