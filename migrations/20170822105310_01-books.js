exports.up = (knex, Promise) => {
  return knex.schema.createTable('books' ,(table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('genre').notNullable();
    table.text('description').notNullable();
    table.text('cover_url').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('books');
};
