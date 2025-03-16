const express = require("express");
const { Register } = require("../Controller/authcontroller");
const router = express.Router();

router.post('/register', Register)
router.post('/Login', Login)


module.exports = router