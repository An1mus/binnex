import LOGIN_ACTIONS from "./types/login";
import authService from "../services/auth.service";
import {history} from "../helpers";

export const userActions = {
	login,
};

function login(username, password) {
	return dispatch => {
		function onSuccess(user) {
			dispatch({
				type: LOGIN_ACTIONS.LOGIN_SUCCESS,
				payload: {
					user,
					isLoggedIn: true,
					isLoggingIn: false
				}
			});
			history.push('/');
		}

		function onFailure(user) {
			dispatch({
				type: LOGIN_ACTIONS.LOGIN_FAILURE,
				payload: {
					user,
					isLoggingIn: false
				}
			});
		}

		function onRequest() {
			dispatch({type: LOGIN_ACTIONS.LOGIN_REQUEST, payload: {isLoggingIn: true}})
		}

		onRequest();
		try {
			const response = authService.login(username, password);
			onSuccess(response);
		} catch (e) {
			onFailure();
		}
	}
}
