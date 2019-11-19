import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

import { SECRET } from '../../config/secret';

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		lowercase: true,
		unique: true,
		index: true,
		required: [true, 'username can\'t be blank'],
		match: [/^[a-zA-Z0-9]+$/, 'username is invalid'],
	},
	email: {
		type: String,
		lowercase: true,
		unique: true,
		index: true,
		required: [true, 'password can\'t be blank'],
		match: [/\S+@\S+\.\S+/, 'password is invalid'],
	},
	avatar: String,
	bio: String,
	salt: String,
	hash: String,
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

UserSchema.methods.setPassword = function(password) {
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validatePassword = function(password) {
	let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
	return this.hash === hash;
};

UserSchema.methods.gerenrateJWT = function() {
	let startDate = new Date();
	let expireDate = new Date(startDate);
	startDate.setDate(startDate.getDate() + 60);

	return jwt.sign({
		id: this._id,
		username: this.username,
		exp: parseInt(expireDate.getTime() / 1000),
	}, SECRET);
};

UserSchema.methods.getUserData = function() {
	return {
		username: this.username,
		email: this.email,
		avatar: this.avatar,
		bio: this.bio,
		jwt: this.gerenrateJWT(),
	}
};


mongoose.model('User', UserSchema);
