const express = require ('express');

const router = express.Router();

router.post("/csv", uploadCSV);

module.exports = router