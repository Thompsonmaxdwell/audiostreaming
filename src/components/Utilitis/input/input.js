import React from 'react';
import classes from './input.module.scss';
import Aux from '../../../hoc/aux/aux';

const input = (props) => {
	let inputTypelement = null;
	let myclass = [];

	if (props.vaildate) {
		myclass.push(classes.BorderError);
	}
	if (!props.vaildate && props.Email) {
		myclass.push(classes.BorderSuccess);
	}
	if (!props.vaildate && props.Password) {
		myclass.push(classes.BorderSuccess);
	}

	// if(props.Email){
	// }
	myclass.push(classes.Input);

	switch (props.elementType) {
		case 'email':
			inputTypelement = (
				<Aux>
					<input
						{...props.elemenConfig}
						value={props.value}
						className={myclass.join(' ')}
						onChange={props.change}
					/>
					<p className={classes.ErrorMessg}>{props.emailErrorMessg}</p>
				</Aux>
			);
			break;
		case 'password':
			inputTypelement = (
				<Aux>
					<input
						{...props.elemenConfig}
						value={props.value}
						className={myclass.join(' ')}
						onChange={props.change}
					/>
					<p className={classes.ErrorMessg}>{props.passwordErrorMessg}</p>
				</Aux>
			);
			break;
		case 'textarea':
			inputTypelement = (
				<textarea
					{...props.elemenConfig}
					value={props.value}
					className={props.inputConfig}
					onChange={props.change}
				/>
			);
			break;
		default:
			inputTypelement = (
				<input
					{...props.elemenConfig}
					value={props.value}
					className={myclass.join(' ')}
					onChange={props.change}
				/>
			);
	}

	return (
		<div className={classes.InputWrappper}>
			<p>{props.label}</p>
			<div>{inputTypelement}</div>
		</div>
	);
};

export default input;
