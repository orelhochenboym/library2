const express = require("express");
const {
  getAllBooks,
  updateCurrentPage,
  updateReadingStatus,
  createBook,
  deleteBook,
} = require("../controllers/BooksController");
const router = express.Router();

router.get("/", getAllBooks);
router.post("/", createBook);
router.put("/currentPage", updateCurrentPage);
router.put("/readingStatus", updateReadingStatus);
router.delete("/:id", deleteBook);


module.exports = router;