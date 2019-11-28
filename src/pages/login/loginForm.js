import React, {useState} from 'react';
import PropTypes from 'prop-types';

const LoginForm = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { onSubmit } = props;

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(username, password);
	};

	return (
		<>
			<form onSubmit={e => handleSubmit(e)}>
				<input
					onChange={e => setUsername(e.target.value)}
					value={username}
					name={"username"}
					type="text"
					placeholder={'Username'}
					required
				/>
				<input
					onChange={e => setPassword(e.target.value)}
					value={password}
					name={"password"}
					type="text"
					placeholder={'Password'}
					required
				/>
				<button>Login</button>
			</form>
		</>
	);
};

LoginForm.propTypes = {
	onSubmit: PropTypes.func,
};

export default LoginForm;
