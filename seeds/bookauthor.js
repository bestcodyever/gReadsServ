
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "bookauthor"; ALTER SEQUENCE bookauthor_id_seq RESTART WITH 9;')
    .then(function () {
      // Inserts seed entries
      return knex('bookauthor').insert([
        {
      id: 1,
      books_id: 1,
      authors_id: 1
    }, {
      id: 2,
      books_id: 1,
      authors_id: 2
    }, {
      id: 3,
      books_id: 1,
      authors_id: 3
    }, {
      id: 4,
      books_id: 2,
      authors_id: 4
    }, {
      id: 5,
      books_id: 3,
      authors_id: 5
    }, {
      id: 6,
      books_id: 4,
      authors_id: 6
    }, {
      id: 7,
      books_id: 5,
      authors_id: 6
    }, {
      id: 8,
      books_id: 6,
      authors_id: 6
    }
      ]);
    });
};
