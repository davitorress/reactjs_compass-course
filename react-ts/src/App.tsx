import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { TodosProvider } from "./store/todosContext";

import "./App.css";

function App() {
	return (
		<TodosProvider>
			<NewTodo />
			<Todos />
		</TodosProvider>
	);
}

export default App;
