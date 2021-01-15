import * as Knex from 'knex';


export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.integer('age').notNullable();
    table.string('name').notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('users');
}

