import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header = (props) => {
	return (
		<>
			<header className={styles.header}>
				<h1>ReactMeals</h1>

				<HeaderCartButton onClick={props.onShowCart} />
			</header>

			<figure className={styles["main-image"]}>
				<img src={mealsImage} alt="A table full of delicious foods!" />
			</figure>
		</>
	);
};

export default Header;
