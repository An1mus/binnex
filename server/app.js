import express from 'express';

import cors from 'cors';
import bodyParser from './middlewares';

import auth from "./routes/auth.route";

const app = express();

app.use('/', cors());
app.use('/', bodyParser);

app.use('/auth', auth);

export default app;
