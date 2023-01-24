import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todosContext";

import classes from "./Todos.module.css";

const Todos = () => {
	const { items, removeTodo } = useContext(TodosContext);

	return (
		<ul className={classes.todos}>
			{items.map((item) => (
				<TodoItem key={item.id} text={item.text} onRemoveTodo={removeTodo.bind(null, item.id)} />
			))}
		</ul>
	);
};

export default Todos;
