import { ReactNode, createContext, useState } from "react";

import Todo from "../models/todo";

interface TodosContextObj {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
}

export const TodosContext = createContext<TodosContextObj>({
	items: [],
	addTodo(text: string) {},
	removeTodo(id: string) {},
});

export const TodosProvider = (props: { children: ReactNode }) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todoText: string) => {
		setTodos((prevTodos) => {
			return prevTodos.concat(new Todo(todoText));
		});
	};

	const removeTodoHandler = (todoId: string) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((todo) => todo.id !== todoId);
		});
	};

	const ctx: TodosContextObj = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return <TodosContext.Provider value={ctx}>{props.children}</TodosContext.Provider>;
};
