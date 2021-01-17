import { Model } from "objection";
import { BaseModel } from "./base-mode";
import { User } from './user';

export class Message extends BaseModel {
  message!: string;
  // pictureUrl!: string; TODO: check if possible ?/
 
   userId!: number;
   user!: User;

   static get tableName() {
     return 'messages';
   }

   static relationMappings = {
     user: {
       relation: Model.BelongsToOneRelation,
       modelClass: require('./user').User,
       join: {
         from: 'messages.user_id',
         to: 'users.id'
       }
     }
   }
}