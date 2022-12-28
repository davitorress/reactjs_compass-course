import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

function Expenses(props) {
	return (
		<article className="expenses">
			{props.items.map((item) => {
				return <ExpenseItem title={item.title} amount={item.amount} date={item.date} />;
			})}
		</article>
	);
}

export default Expenses;
