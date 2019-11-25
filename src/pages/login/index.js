import React, {useState} from 'react';
import {connect} from "react-redux";
import {userActions} from "../../actions/auth.actions";

class LoginComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		}
	}

	handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		this.setState({[name]: value});
	}

	submitForm(e) {
		e.preventDefault();

		this.props.login(this.state.username, this.state.password);
	}

	render() {
		return (
			<>
				<form onSubmit={(e) => this.submitForm(e)}>
					<input
						onChange={e => this.handleChange(e)}
						value={this.state.username}
						name={"username"}
						type="text"
						placeholder={'Username'}
						required
					/>
					<input
						onChange={e => this.handleChange(e)}
						value={this.state.password}
						name={"password"}
						type="text"
						placeholder={'Password'}
						required
					/>
					<button>Login</button>
				</form>
			</>
		);
	}
}

const mapStateProps = state => {
	const {isLoggedIn, isLoggingIn, user} = state;
	return {isLoggedIn, isLoggingIn, user};
};

const actionCreators = {
	login: userActions.login,
};

const connectedLoginComponent = connect(mapStateProps, actionCreators)(LoginComponent);
export {connectedLoginComponent as Login};

