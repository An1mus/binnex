import React from 'react';
import {Router} from 'react-router-dom';

import {history} from './helpers/'

import Login from './pages/login';
import Dashboard from './pages/dashboard';

class App extends React.Component{
	render() {
		const user = localStorage.getItem('user');

		if (user) {
			return (
				<div className="Binnex">
					<Router history={history}>
						<Dashboard />
					</Router>
				</div>
			);
		} else {
			return (
				<div className="Binnex">
					<Login/>
				</div>
			);
		}
	}
}

export default App;
