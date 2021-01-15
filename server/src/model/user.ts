import { BaseModel } from './base-mode';

export class User extends BaseModel {
  name!: string;
  age!: number;
  username!: string;
  password?: string;
}