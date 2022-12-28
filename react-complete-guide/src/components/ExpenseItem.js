import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

import "./ExpenseItem.css";

function ExpenseItem(props) {
	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<section className="expense-item__description">
				<h2>{props.title}</h2>
				<p className="expense-item__price">${props.amount}</p>
			</section>
		</Card>
	);
}

export default ExpenseItem;
