const express = require("express");
const router = express.Router();
const Test = require("../controllers/user.controller");

router.get("/test", Test);

module.exports = router;
