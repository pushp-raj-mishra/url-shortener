const express = require("express");
const { handleUrlShortening } = require("../controllers/shorten");
const router = express.Router();

router.route("/").post(handleUrlShortening);

module.exports = router;
