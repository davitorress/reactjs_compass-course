import React, { useState, useEffect, useReducer, useContext, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

import AuthContext from "../../context/auth-context";
import Input from "../UI/Input/Input";

const Login = (props) => {
	const ctx = useContext(AuthContext);

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const [formIsValid, setFormIsValid] = useState(false);

	const [emailState, dispatchEmail] = useReducer(
		(state, action) => {
			if (action.type === "USER_INPUT") return { value: action.val, isValid: action.val.includes("@") };
			if (action.type === "INPUT_BLUR") return { value: state.value, isValid: state.value.includes("@") };

			return { value: "", isValid: false };
		},
		{ value: "", isValid: null }
	);

	const [passwordState, dispatchPassword] = useReducer(
		(state, action) => {
			if (action.type === "USER_INPUT") return { value: action.val, isValid: action.val.trim().length > 6 };
			if (action.type === "INPUT_BLUR") return { value: state.value, isValid: state.value.trim().length > 6 };

			return { value: "", isValid: false };
		},
		{ value: "", isValid: null }
	);

	const { isValid: emailIsValid } = emailState;
	const { isValid: passwordIsValid } = passwordState;

	useEffect(() => {
		const identifier = setTimeout(() => {
			setFormIsValid(emailIsValid && passwordIsValid);
		}, 500);

		return () => {
			clearTimeout(identifier);
		};
	}, [emailIsValid, passwordIsValid]);

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: "USER_INPUT", val: event.target.value });
	};

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: "USER_INPUT", val: event.target.value });
	};

	const validateEmailHandler = () => {
		dispatchEmail({ type: "INPUT_BLUR" });
	};

	const validatePasswordHandler = () => {
		dispatchPassword({ type: "INPUT_BLUR" });
	};

	const submitHandler = (event) => {
		event.preventDefault();
		if (formIsValid) ctx.onLogin(emailState.value, passwordState.value);
		else if (!emailIsValid) emailInputRef.current.focus();
		else passwordInputRef.current.focus();
	};

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					id="email"
					type="email"
					label="E-mail"
					value={emailState.value}
					isValid={emailIsValid}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					ref={passwordInputRef}
					id="password"
					type="password"
					label="Password"
					value={passwordState.value}
					isValid={passwordIsValid}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	);
};

export default Login;

