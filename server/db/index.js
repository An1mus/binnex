// TODO: consider moing to config?

import mongoose from 'mongoose';

const DB_URL = 'http://localhost:27017/'; // TODO: change the db url for real link

mongoose.connect(DB_URL);
