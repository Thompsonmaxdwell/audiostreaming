import React from 'react';
import classes from './button.module.scss';
import Aux from '../../../hoc/aux/aux';

let arrClasses = [];
//    arrClasses.push(props.block)

const button = (props) => {
    arrClasses.push(classes.Button);
    arrClasses.push(props.block);
    
	return (
		<Aux>
			<button className={arrClasses.join(' ')} onClick={props.clicked}>
				{props.children}
			</button>
		</Aux>
	);
};

export default button;
// classes.Button
