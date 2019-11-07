import axios from 'axios';

import LOGIN_URL from '../api';

export default {
	login,
}

async function login(username, password) {
	return await axios.post(LOGIN_URL, {username, password});
}
