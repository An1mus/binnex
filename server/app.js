import express from 'express';

import bodyParser from './middlewares';

import auth from "./routes/auth.route";

const app = express();

app.use('/', bodyParser);

app.use('/auth', auth);

export default app;
