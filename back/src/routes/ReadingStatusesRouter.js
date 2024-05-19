const express = require("express");
const {
  getAllreadingStatuses,
} = require("../controllers/ReadingStatusesController");
const router = express.Router();

router.get("/", getAllreadingStatuses);

module.exports = router;