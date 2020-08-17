import React from 'react';
import AuthicatedUserUI from '../authicatedUserUI/authicatedUserUI';
import Navbar from '../../components/Navbar/Navbar';

const dashboard = () => (
	<div>
       <div>
			<Navbar />
			<AuthicatedUserUI />
		</div>
	</div>
);

export default dashboard;
