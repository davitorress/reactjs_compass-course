import { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../context/cart-context";

import styles from "./Cart.module.css";

const Cart = (props) => {
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItems = cartCtx.items.map((item) => (
		<CartItem
			key={item.id}
			name={item.name}
			amount={item.amount}
			price={item.price}
			onAdd={cartItemAddHandler.bind(null, item)}
			onRemove={cartItemRemoveHandler.bind(null, item.id)}
		/>
	));

	return (
		<Modal onClose={props.onClose}>
			<ul className={styles["cart-items"]}>{cartItems}</ul>

			<section className={styles.total}>
				<p>Total Amount</p>
				<p>{totalAmount}</p>
			</section>

			<section className={styles.actions}>
				<button className={styles["button--alt"]} onClick={props.onClose}>
					Close
				</button>
				{hasItems && <button className={styles.button}>Order</button>}
			</section>
		</Modal>
	);
};

export default Cart;
