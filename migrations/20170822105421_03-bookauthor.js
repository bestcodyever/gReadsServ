
exports.up = function(knex, Promise) {
    return knex.schema.createTable("bookauthor", table => {
        table.increments();
        table.integer("books_id").references("books.id").unsigned().onDelete('cascade').notNullable();
        table.integer("authors_id").references("authors.id").unsigned().onDelete('cascade').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("bookauthor");
};
