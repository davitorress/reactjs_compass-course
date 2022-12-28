import { useState } from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
	const [yearFiltered, setYearFiltered] = useState("");

	function yearFilterHandler(event) {
		setYearFiltered(event.target.value);
		props.onChangeFilter(event.target.value);
	}

	return (
		<section className="expenses-filter">
			<section className="expenses-filter__control">
				<label htmlFor="year">Filter by year</label>
				<select id="year" value={yearFiltered} onChange={yearFilterHandler}>
					<option value="">All</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
				</select>
			</section>
		</section>
	);
}

export default ExpenseFilter;
