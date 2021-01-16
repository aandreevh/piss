import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("users",table =>{
    table.string("created_at").notNullable();
    table.string("updated_at").notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("users",table =>{
    table.dropColumn("created_at");
    table.dropColumn("updated_at");
  });
}

