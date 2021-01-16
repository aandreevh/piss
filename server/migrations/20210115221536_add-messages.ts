import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('messages', table => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.string('message').notNullable();
    table.foreign('user_id', 'message_user').references('id').inTable('users');
    table.timestamp("created_at").notNullable();
    table.timestamp("updated_at").notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('messages');
}

