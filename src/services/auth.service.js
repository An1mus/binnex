import axios from 'axios';

import { LOGIN_URL, REGISTER_URL } from '../api';

const authService = {
	login,
	register
};
export default authService;

async function login(username, password) {
	return await axios.post(LOGIN_URL, {username, password});
}

async function register(username, password) {
	return await axios.post(REGISTER_URL, {username, password});
}

