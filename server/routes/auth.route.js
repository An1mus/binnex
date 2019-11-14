import express from 'express';

/**
 * A authentication router
 */
const auth = express.Router();

auth.use('/', (req, res, next) => {

	console.log('request processed');
	res.status(200).json(req.body);
	// res.status(404).json({message: 'User not found'});
	// res.status(200).json({message: 'All good!'});

	next();
});

export default auth;
