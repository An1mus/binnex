import express from 'express';

/**
 * A authentication router
 */
const auth = express.Router();

auth.use('/', (req, res, next) => {
	const message = 'Authentication OK'; // TODO: remove messaging from here
	console.log(req);
	res.json(message);
	next();
});

export default auth;
