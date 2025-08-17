const express = require("express");
const { redirectTo } = require("../controllers/redirect");
const router = express.Router();

router.route("/:shortID").get(redirectTo);

module.exports = router;