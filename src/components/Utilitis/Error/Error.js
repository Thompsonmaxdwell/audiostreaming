import React from 'react';
import classes from './Error.module.scss';

let arrClasses = [classes.Error,classes.ErrorHide ];


const Error = (props) => {
	return props.error ? (
		<div>
			<div className={arrClasses.join(' ')}>{props.children}</div>
		</div>
	) : null;
};

export default Error;
