import "./ExpenseFilter.css";

function ExpenseFilter(props) {
	function filterYearHandler(event) {
		props.onChangeFilter(event.target.value);
	}

	return (
		<section className="expenses-filter">
			<section className="expenses-filter__control">
				<label htmlFor="year">Filter by year</label>
				<select id="year" value={props.selectedYear} onChange={filterYearHandler}>
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
