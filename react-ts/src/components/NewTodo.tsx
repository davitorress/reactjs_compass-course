import { useContext, useRef } from "react";
import { TodosContext } from "../store/todosContext";

import classes from "./NewTodo.module.css";

const NewTodo = () => {
	const { addTodo } = useContext(TodosContext);

	const todoTextRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextRef.current!.value;

		if (enteredText.trim().length === 0) {
			return;
		}

		addTodo(enteredText);
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor="todo-text">Todo text</label>
			<input ref={todoTextRef} type="text" name="todo-text" id="todo-text" />

			<button type="submit">Add Todo</button>
		</form>
	);
};

export default NewTodo;
