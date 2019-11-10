import LOGIN_ACTIONS from "./types/login";

const userActions = {
	login,
};

function login(username, password) {
	return dispatch => {
		function onSuccess(user){
			dispatch({type: LOGIN_ACTIONS.LOGIN_SUCCESS, payload: user})
		}

		function onFailure(user) {
			dispatch({type: LOGIN_ACTIONS.LOGIN_FAILURE, payload: user});
		}
	}
}
