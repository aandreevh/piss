import { BaseModel } from "./base-mode";
import { User } from "./user";

export class Message extends BaseModel {
  message!: string;
  // pictureUrl!: string; TODO: check if possible ?/
 
   userId!: string;
   user!: User;

   static get tableName() {
     return 'messages';
   }
}