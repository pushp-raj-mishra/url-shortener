const express = require("express");
const {
  handleUrlShortening,
  handleGetRequest,
} = require("../controllers/shorten");
const router = express.Router();

router.route("/").post(handleUrlShortening).get(handleGetRequest);

module.exports = router;
