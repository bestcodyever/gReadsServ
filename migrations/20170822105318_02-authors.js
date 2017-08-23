exports.up = (knex, Promise) => {
  return knex.schema.createTable('authors' ,(table) => {
    table.increments();
    table.text('first_name').notNullable();
    table.text('last_name').notNullable();
    table.text('biography').notNullable();
    table.text('portrait_url').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('authors');
};
