import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
	return (
		<section className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</section>
	);
};

const portalElement = document.querySelector("#overlays");

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
		</>
	);
};

export default Modal;
