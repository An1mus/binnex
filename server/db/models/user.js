import mongoose from 'mongoose';

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

mongoose.model('User', UserSchema);
