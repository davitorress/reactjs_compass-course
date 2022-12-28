import "./Card.css";

function Card(props) {
	const classes = "card " + props.className;

	return <section className={classes}>{props.children}</section>;
}

export default Card;
