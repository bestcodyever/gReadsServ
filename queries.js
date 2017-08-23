const knex = require('./db/knex')

module.exports = {

getBooks: function(){
  return knex("*").from("books")
},
getAuthors: function(){
  return knex("*").from("authors")
},

getBookById: function(book_id){
  return knex('books').where('id', book_id)
},
getAuthorById: function(authors_id){
  return knex('authors').where('id', authors_id)
},
getBooksAndAuthors: function(book_id){
  return knex('books').select('authors.*')
    .join('bookauthor', 'books.id', 'bookauthor.books_id')
    .join('authors', 'authors.id', 'bookauthor.authors_id')
    .where('books.id', book_id)
}

};
