import axios from 'axios';

import LOGIN_URL from '../api';

const authService = {
	login,
};
export default authService;

async function login(username, password) {
	return await axios.post(LOGIN_URL, {username, password});
}
