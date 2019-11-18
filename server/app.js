import express from 'express';

import cors from 'cors';

import auth from "./routes/auth.route";

const app = express();

app.use('/', cors());
app.use('/', express.json());

app.use('/auth', auth);

export default app;
