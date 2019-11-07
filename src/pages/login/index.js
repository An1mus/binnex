import React from 'react';

class Login extends React.Component {
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

export default Login;
