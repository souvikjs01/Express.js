const express = require("express");
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/books', bookController.getBook);
router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.delete('/books/:id', bookController.removeBook);

module.exports = router;