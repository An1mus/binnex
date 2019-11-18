import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		lowercase: true,
		unique: true,
		index: true,
		required: [true, 'username can\'t be blank' ],
		match: [/^[a-zA-Z0-9]+$/, 'username is invalid'],
	},
	password: {
		type: String,
		lowercase: true,
		unique: true,
		index: true,
		required: [true, 'password can\'t be blank' ],
		match: [/\S+@\S+\.\S+/, 'password is invalid'],
	},
	email: String,
	avatar: String,
	bio: String,
	salt: String,
});

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

mongoose.model('User', UserSchema);
