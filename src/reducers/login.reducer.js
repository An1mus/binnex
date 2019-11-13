import LOGIN_ACTIONS from "../actions/types/login";
import { history } from '../helpers'

const user = localStorage.getItem('user') || {};

function loginReducer(state = user, action) {
	switch (action.type) {
		case LOGIN_ACTIONS.LOGIN_FAILURE:
			return {
				isLoggingIn: false,
			};
		case LOGIN_ACTIONS.LOGIN_REQUEST:
			return {
				isLoggingIn: true,
			};
		case LOGIN_ACTIONS.LOGIN_SUCCESS:
			localStorage.setItem('user', user);
			history.push('/');
			window.location.reload();
			return {
				user,
				isLoggingIn: false,
				isLoggedIn: true,
			};
		default:
			return {};
	}
}

export default loginReducer;
