import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("");

	function filterHandler(filter) {
		setFilteredYear(filter);
	}

	return (
		<Card className="expenses">
			<ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterHandler} />

			{props.items.map((item) => {
				if (filteredYear) {
					if (item.date.getFullYear() === +filteredYear) {
						return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />;
					}
				} else return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />;
			})}
		</Card>
	);
}

export default Expenses;
