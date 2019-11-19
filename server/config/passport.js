import mongoose from 'mongoose';
import passport from 'passport';
import LocalStrategy from 'passport-local';

const Users = mongoose.model('Users');

passport.use(new LocalStrategy(
	function(username, password, done) {
		Users.findOne({ username: username }, function (err, user) {
			if (err) { return done(err); }
			if (!user) { return done(null, false); }
			if (!user.verifyPassword(password)) { return done(null, false); }
			return done(null, user);
		});
	}
));

