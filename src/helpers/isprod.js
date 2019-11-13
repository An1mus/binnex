export function isProd() {
	return window.location.host !== 'localhost:3000'; //TOOD: update for real prod host
}
