import { User } from './../src/model/user';
import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex('users').delete();
  await knex.schema.alterTable('users', table => {
    table.string('username').notNullable().unique('uniqueUsernameConstrainta');
    table.string('password').notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('users', table => {
    table.dropColumn('username');
    table.dropColumn('password');
  });
}

