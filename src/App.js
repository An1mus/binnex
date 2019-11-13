import React from 'react';
import {Router, Switch, Route, Redirect, Link} from 'react-router-dom';

import './main.scss';

import { history } from './helpers/'

import { Login } from './pages/login';
import Settings from './pages/settings';
import Dashboard from './pages/dashboard';

class App extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false
		};
	}

	logout() {
		localStorage.removeItem('user');
		history.push('/');
		window.location.reload();
	}

	render() {
		const user = localStorage.getItem('user');

		if (user) {
			return (
				<div className="Binnex">
					<Router history={history}>
						<nav>
							<Link to={'/'}>App</Link>
							<Link to={'/settings'}>Settings</Link>

							<button onClick={() => this.logout()}>Logout</button>
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
					<Router history={history}>
						<Redirect from={'/'} to={'/login'}/>

						<Switch>
							<Route path={'/'} component={Login}/>
							<Route path={'/dashboard'} component={Login}/>
						</Switch>
					</Router>
				</div>
			);
		}
	}
}

export default App;
