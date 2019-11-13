import React from 'react';
import {connect} from "react-redux";
import {userActions} from "../../actions/auth.actions";

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

const mapStateDispatchToProps = () => {
	return {
		login: userActions.login,
	};
};

const connectedLoginComponent = connect(mapStateProps, mapStateDispatchToProps)(LoginComponent);
export {connectedLoginComponent as Login};

