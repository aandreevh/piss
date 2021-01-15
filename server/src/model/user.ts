import { BaseModel } from './base-mode';

export class User extends BaseModel {
  name!: string;
 // pictureUrl!: string; TODO: check if possible ?/

  username!: string;
  idToken!: string;
  accessToken!: string;
  refreshToken!: string;
}