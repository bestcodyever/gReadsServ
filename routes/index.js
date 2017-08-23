
const express = require('express');
const router = express.Router();
const queries = require('../queries')
/* GET home page. */
router.get('/', function(req, res, next) {
  queries.getBooks()
    .then((books) => {
      return Promise.all(books.map(book => {
        return queries.getBooksAndAuthors(book.id).then(authors => {
          book.authors = authors
          return book
        })
      }))
    })
    .then(books => {
      res.json(books)
    })
    .catch(function(error) {
      res.json({
        error: "error, my dude."
      })
    })
});

router.get('/authors', function(req, res, next) {
  queries.getAuthors()
    .then((authors) => {
      res.json(authors)
    })
    .catch(function(error) {
      res.json({
        error: "error, my dude."
      })
    })
});
router.get('/:id', function(req, res, next) {
  queries.getBookById(req.params.id)
    .then((book) => {
      book = book[0]
      queries.getBooksAndAuthors(book.id).then(authors => {
        book.authors = authors
        res.json(book)
      })
    })
    .catch(function(error) {
      res.json({
        error: "error, my dude."
      })
    })
})
module.exports = router;
