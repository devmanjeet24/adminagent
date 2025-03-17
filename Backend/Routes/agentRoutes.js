const express = require("express");
const { Addagent, getagent } = require("../Controller/agentcontroller");
const router = express.Router();

router.post("/add", Addagent);
router.get("/list", getagent);

module.exports = router;