import React from 'react';
import classes from './Navbar.module.scss';
import Button from '../Utilitis/buttn/button';
import Aux from '../../hoc/aux/aux';

const Navbar = () => {
	return (
		<Aux>
			<div className={classes.Navbar}>
				<div className={classes.Navbar_flex}>
					<h4>Audio Streaming</h4>
					<Button>Logout</Button>
				</div>
			</div>
		</Aux>
	);
};

export default Navbar;
