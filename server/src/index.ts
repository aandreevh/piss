import express from 'express';
import Knex from 'knex';
import { Model } from 'objection';
import config from '../knexfile';
import auth from './controllers/auth';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authMiddleware from './middleware/auth';
import * as socketIO from 'socket.io';
import cookies from 'cookie';
import { Message } from './model/message';
import messageController from './controllers/messages';
import MessageService from './service/message-service';

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

app.use(authMiddleware)
app.use('/messages', messageController);

const server = require('http').Server(app);
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const io = socketIO.default(server);
io.on('connection', (socket) => {
  const cookieHeader = socket.handshake.headers.cookie || '';
  const asdf = cookies.parse(cookieHeader as string);
  // send to all of the users 
  socket.emit('successful_connection', 'hellow world');
  socket.on('send_message', async ( { message, userId }: Partial<Message>) => {
    const messageObject = await MessageService.create(message!, userId!);
    
    socket.broadcast.emit('new_message', messageObject);
  });
  
});
