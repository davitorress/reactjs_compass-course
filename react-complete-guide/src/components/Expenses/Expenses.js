import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("");

	function filterHandler(filter) {
		setFilteredYear(filter);
	}

	const filteredExpenses = filteredYear
		? props.items.filter((expense) => expense.date.getFullYear() === +filteredYear)
		: props.items;

	return (
		<Card className="expenses">
			<ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterHandler} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
}

export default Expenses;
