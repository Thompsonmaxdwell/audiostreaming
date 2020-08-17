import React from 'react';
import classes from './Modal.module.scss';

const Modal = (props) => {
	return (
  
		<div className={classes.Modal_wrapper} onClick={props.clicked} show={props.show}>
			  {props.children}
		</div>
	);
};

export default Modal;





