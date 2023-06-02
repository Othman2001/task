import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import database from './db/mongo';
import * as middlewares from './middlewares';
import MessageResponse from './interfaces/MessageResponse';
import todos from './routes/todos/todos.routes';
import users from './routes/user.routes';


require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
database();
app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
  });
});

app.use('/api/v1', todos);
app.use('/api/v1', users);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);


export default app;
