import axios from 'axios';

import LOGIN_URL from '../api';

async function login(username, password) {
	await axios.post(LOGIN_URL, {username, password});
}
