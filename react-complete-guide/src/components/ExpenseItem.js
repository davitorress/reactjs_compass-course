import "./ExpenseItem.css";

function ExpenseItem() {
	return (
		<section className="expense-item">
			<p>March 28th 2021</p>
			<section className="expense-item__description">
				<h2>Car Insurance</h2>
				<p className="expense-item__price">$294.67</p>
			</section>
		</section>
	);
}

export default ExpenseItem;
