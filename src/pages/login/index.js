import React from 'react';
import {connect} from "react-redux";

class LoginComponent extends React.Component {
	render() {
		return (
			<>
				<input type="text" placeholder={'Login'}/>
				<input type="text" placeholder={'Password'}/>
				<button>Login</button>
			</>
		);
	}
}

const mapStateProps = state => {
	const {isLoggedIn, isLoggingIn, user} = state;
	return {isLoggedIn, isLoggingIn, user};
};

const connectedLoginComponent = connect(mapStateProps)(LoginComponent)

