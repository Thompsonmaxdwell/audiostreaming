import React from 'react';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Utilitis/pages/home/home';

function App(props) {
	
	return (
		<BrowserRouter>
		   <Route path="/homepage" exact component={Home}/>
			<Route path="/layout" component={Layout} />
		</BrowserRouter>
	);
}

export default App;
