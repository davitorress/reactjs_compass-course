import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

function ExpensesList(props) {
	if (props.items.length === 0) {
		return <p className="expenses-list__fallback">Found no expenses.</p>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((expense) => {
				return (
					<li key={expense.id}>
						<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
					</li>
				);
			})}
		</ul>
	);
}

export default ExpensesList;
