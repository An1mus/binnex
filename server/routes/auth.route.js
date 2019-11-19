import express from 'express';
import Ajv from 'ajv';

import { SCHEMAS } from '../config/schemas';

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

	const {username, password} =  req.body;
	// TODO: add DB check
	if(username && password) res.status(200).json({token: 'generated token'});

	next();
});

export default auth;
