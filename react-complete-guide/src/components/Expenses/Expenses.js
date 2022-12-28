import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
	const [yearFiltered, setYearFiltered] = useState("");

	function filterHandler(filter) {
		setYearFiltered(filter);
	}

	return (
		<Card className="expenses">
			<ExpenseFilter onChangeFilter={filterHandler} />

			{props.items.map((item) => {
				if (yearFiltered) {
					if (item.date.getFullYear() === +yearFiltered) {
						return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />;
					}
				} else return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />;
			})}
		</Card>
	);
}

export default Expenses;
