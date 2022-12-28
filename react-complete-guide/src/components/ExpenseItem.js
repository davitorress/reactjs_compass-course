import "./ExpenseItem.css";

function ExpenseItem(props) {
	return (
		<section className="expense-item">
			<p>{props.date.toDateString()}</p>
			<section className="expense-item__description">
				<h2>{props.title}</h2>
				<p className="expense-item__price">${props.amount}</p>
			</section>
		</section>
	);
}

export default ExpenseItem;
