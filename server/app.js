import express from 'express';

import cors from 'cors';

import login from "./routes/login.route";

const app = express();

app.use('/', cors());
app.use('/', express.json());

app.use('/login', login);

export default app;
