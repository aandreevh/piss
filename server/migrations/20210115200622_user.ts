import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("users",table =>{
    table.timestamp("created_at").notNullable();
    table.timestamp("updated_at").notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("users",table =>{
    table.dropColumn("created_at");
    table.dropColumn("updated_at");
  });
}

