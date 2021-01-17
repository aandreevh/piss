import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
  await knex.schema.createTable('users', table => {
    table.charset('utf8mb4 ');
    table.collate('utf8mb4_unicode_ci');
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('username').notNullable();
    table.text('refresh_token').notNullable();
    table.text('id_token').notNullable();
    table.text('access_token').notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}

