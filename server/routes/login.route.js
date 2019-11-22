import express from 'express';
import mongoose from 'mongoose';
import Ajv from 'ajv';

import { SCHEMAS } from '../config/schemas';

import '../db/models/user';
import '../config/passport';

const Users = mongoose.model('Users');

/**
 * Validation schemas
 */
const ajv = Ajv({allErrors: true});

/**
 * Login data schema
 */
ajv.addSchema(SCHEMAS.AUTH.map, SCHEMAS.AUTH.name);

/**
 * Login router
 */
const login = express.Router();

/**
 * Main route will return token for existing user
 */
login.use('/', (req, res, next) => {
	const isInputValid = ajv.validate(SCHEMAS.AUTH.name, req.body);

	if(!isInputValid) res.status(400).json({message: 'Input data is not valid'});

	return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
		if(err) {
			return next(err);
		}

		if(passportUser) {
			const user = passportUser;
			user.token = passportUser.generateJWT();

			return res.json({ user: user.toAuthJSON() });
		}

		return res.status(400).info;
	})(req, res, next)
});

export default login;
