import React from 'react';
import {Router, Switch, Route, Redirect, Link} from 'react-router-dom';

import {history} from './helpers/'

import Login from './pages/login';
import Settings from './pages/settings';
import Dashboard from './pages/dashboard';

class App extends React.Component{
	render() {
		const user = localStorage.getItem('user');

		if (user) {
			return (
				<div className="Binnex">
					<Router history={history}>
						<nav>
							<Link to={'/'}>App</Link>
							<Link to={'/settings'}>Settings</Link>
						</nav>

						<Switch>
							<Route exact path={'/'} component={Dashboard}/>
							<Route path={'/dashboard'} component={Dashboard}/>
							<Route path={'/settings'} component={Settings}/>
						</Switch>
					</Router>
				</div>
			);
		} else {
			return (
				<div className="Binnex">
					<Redirect from={'/'} to={'/login'}/>

					<Route path={'/'} component={Login}/>
					<Route path={'/dashboard'} component={Login}/>
				</div>
			);
		}
	}
}

export default App;
