import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
  await knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('refresh_token').notNullable();
    table.string('id_token').notNullable();
    table.string('access_token').notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}

