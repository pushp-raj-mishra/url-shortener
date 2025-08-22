const express = require("express");
const router = express.Router();
const {
  handleGetRequest,
  handleUrlShortening,
} = require("../controllers/home");

router.route("/").get(handleGetRequest).post(handleUrlShortening);

module.exports = router;
