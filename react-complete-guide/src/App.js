import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
	{
		id: "e1",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e2",
		title: "Toilet paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e3",
		title: "New TV",
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
];

function App() {
	const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => [expense, ...prevExpenses]);
	};

	return (
		<main>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses items={expenses} />
		</main>
	);
}

export default App;

