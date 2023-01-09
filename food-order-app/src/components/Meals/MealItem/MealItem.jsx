import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/cart-context";

import styles from "./MealItem.module.css";

const MealItem = (props) => {
	const cartCtx = useContext(CartContext);

	const price = `$${props.price.toFixed(2)}`;

	const addToCart = (amount) => {
		cartCtx.addItem({
			id: props.id,
			name: props.name,
			amount,
			price: props.price,
		});
	};

	return (
		<li key={props.id} className={styles.meal}>
			<section>
				<h3>{props.name}</h3>
				<p className={styles.description}>{props.description}</p>
				<p className={styles.price}>{price}</p>
			</section>

			<section>
				<MealItemForm id={props.id} onAddToCart={addToCart} />
			</section>
		</li>
	);
};

export default MealItem;
