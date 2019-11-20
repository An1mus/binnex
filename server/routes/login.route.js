import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import Ajv from 'ajv';

import { SCHEMAS } from '../config/schemas';

const Users = mongoose.model('Users');

/**
 * Validation schemas
 */
const ajv = Ajv({allErrors: true});

// authorization schema
ajv.addSchema(SCHEMAS.AUTH.map, SCHEMAS.AUTH.name);

/**
 * A authentication router
 */
const auth = express.Router();

auth.use('/', (req, res, next) => {
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

export default auth;
