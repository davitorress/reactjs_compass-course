import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
	const [formVisibility, setFormVisibility] = useState(false);

	const changeFormVisibility = () => {
		setFormVisibility((prevVisibility) => {
			return !prevVisibility;
		});
	};

	function saveExpenseDataHandler(enteredExpenseData) {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
		changeFormVisibility();
	}

	return (
		<div className="new-expense">
			{!formVisibility && (
				<button className="new-expense__button" onClick={changeFormVisibility}>
					Add New Expense
				</button>
			)}
			{formVisibility && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={changeFormVisibility} />}
		</div>
	);
}

export default NewExpense;
