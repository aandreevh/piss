import express from 'express';
import Knex from 'knex';
import { Model } from 'objection';
import config from '../knexfile';
import auth from './controllers/auth';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authMiddleware from './middleware/auth';
import * as socketIO from 'socket.io';

require('dotenv').config();
const knex = Knex(config.development);

Model.knex(knex);
const app: express.Application = express();

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);



// Server.buildServices(app, UserService, AuthService);
const port = process.env.PORT || 12345;
app.use('/auth', auth);

app.use(authMiddleware);

const server = require('http').Server(app);
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const io = socketIO.default(server);
io.on('connection', (socket) => {
  console.log('in socket');
  socket.broadcast.emit('hi');
});
