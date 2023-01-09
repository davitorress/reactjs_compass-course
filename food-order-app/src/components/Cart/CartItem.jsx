import styles from "./CartItem.module.css";

const CartItem = (props) => {
	const price = `$${props.price.toFixed(2)}`;

	return (
		<li className={styles["cart-item"]}>
			<section>
				<h2>{props.name}</h2>

				<section className={styles.summary}>
					<span className={styles.price}>{price}</span>
					<span className={styles.amount}>x {props.amount}</span>
				</section>
			</section>

			<section className={styles.actions}>
				<button onClick={props.onRemove}>&minus;</button>
				<button onClick={props.onAdd}>+</button>
			</section>
		</li>
	);
};

export default CartItem;

