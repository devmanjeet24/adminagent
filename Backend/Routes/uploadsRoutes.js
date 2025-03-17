const express = require ('express');
const { uploadCSV } = require('../Controller/uploadcontroller');

const router = express.Router();

router.post("/csv", uploadCSV);

module.exports = router