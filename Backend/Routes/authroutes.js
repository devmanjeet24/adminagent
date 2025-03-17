const express = require("express");
const { Register , Login} = require("../Controller/authcontroller.js");
const router = express.Router();

router.post('/register', Register)
router.post('/Login', Login)    


module.exports = router