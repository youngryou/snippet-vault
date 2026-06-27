/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('snippets', (table) => {
    table.increments('id').primary();
    table.integer('user_id').notNullable().defaultTo(1);
    table.string('title', 255).notNullable();
    table.string('category', 50).notNullable();
    table.string('sub_category', 50);
    table.string('language', 50).notNullable();
    table.string('file_path', 255);
    table.string('file_name', 255);
    table.text('description');
    table.text('code_content').notNullable();
    table.boolean('is_public').defaultTo(false);
    table.integer('likes_count').defaultTo(0);
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('snippets');
}
