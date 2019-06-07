const router = require('express').Router();
const { getSavedBooks, saveBook, removeBook } = require('../../controllers/book-controller');

router
  .route('/')
  .get(getSavedBooks)
  .post(saveBook);

router.route('/:id').delete(removeBook);

module.exports = router;
