import { BaseModel } from './base-mode';
import { Message } from './message';

export class User extends BaseModel {
  name!: string;
 // pictureUrl!: string; TODO: check if possible ?/

  username!: string;
  idToken!: string;
  accessToken!: string;
  refreshToken!: string;

  // maybe it will be useful in some situations :D
  // messages?: Message[];

  static get tableName() {
    return 'users';
  }
}