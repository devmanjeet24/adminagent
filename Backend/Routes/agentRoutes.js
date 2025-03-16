const express = require("express");
const router = express.Router();

router.post("/add", addagent);
router.get("/list", getagent);

module.exports = router;