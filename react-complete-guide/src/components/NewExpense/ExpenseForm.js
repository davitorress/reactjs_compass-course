import { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm() {
	const date = new Date();
	const maxDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

	const [userInput, setUserInput] = useState({
		enteredTitle: "",
		enteredAmount: "",
		enteredDate: "",
	});

	function titleChangeHandler(event) {
		setUserInput((prevState) => {
			return { ...prevState, enteredTitle: event.target.value };
		});
	}

	function amountChangeHandler(event) {
		setUserInput((prevState) => {
			return { ...prevState, enteredAmount: event.target.value };
		});
	}

	function dateChangeHandler(event) {
		setUserInput((prevState) => {
			return { ...prevState, enteredDate: event.target.value };
		});
	}

	function submitHandler(event) {
		event.preventDefault();

		const expenseData = {
			title: userInput.enteredTitle,
			amount: userInput.enteredAmount,
			date: new Date(userInput.enteredDate),
		};

		console.log(expenseData);
		setUserInput({
			enteredTitle: "",
			enteredAmount: "",
			enteredDate: "",
		});
	}

	return (
		<form onSubmit={submitHandler}>
			<section className="new-expense__controls">
				<section className="new-expense__control">
					<label htmlFor="title">Title</label>
					<input type="text" id="title" value={userInput.enteredTitle} onChange={titleChangeHandler} />
				</section>

				<section className="new-expense__control">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						id="amount"
						min="0.01"
						step="0.01"
						value={userInput.enteredAmount}
						onChange={amountChangeHandler}
					/>
				</section>

				<section className="new-expense__control">
					<label htmlFor="date">Date</label>
					<input
						type="date"
						id="date"
						min="2019-01-01"
						max={maxDate}
						value={userInput.enteredDate}
						onChange={dateChangeHandler}
					/>
				</section>
			</section>

			<section className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</section>
		</form>
	);
}

export default ExpenseForm;
