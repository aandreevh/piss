import express from 'express';
import Knex from 'knex';
import { Model } from 'objection';
import {Server, Path, GET, PathParam} from 'typescript-rest';
import config from '../knexfile';
import auth from './controllers/auth';
import { UserService } from './controllers/user';
import cors from 'cors';
import cookieParser from 'cookie-parser';


require('dotenv').config();
const knex = Knex(config.development);

Model.knex(knex);
const app: express.Application = express();
const secret = process.env.COOKIE_SECRET || 'seeecret';


app.use(cookieParser(secret));
app.use(express.json());


app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

console.log(`secret  ${secret}`);

// Server.buildServices(app, UserService, AuthService);
const port = process.env.PORT || 12345;
app.use('/auth', auth);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})